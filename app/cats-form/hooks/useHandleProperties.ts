import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { fetchOptionChildren, fetchProps } from "../api";
import { Property } from "@/app/types/catsForm.types";
import _ from "lodash";

export function useHandleProperties(currSubCatId: string) {
  // State
  const [properties, setProperties] = useState<Property[]>();
  const [propsLoading, setPropsLoading] = useState(false);

  // Effects
  useEffect(() => {
    if (currSubCatId == "") {
      setProperties(undefined);
      return;
    }
    setPropsLoading(true);
    fetchProps(currSubCatId).then((props) => {
      setProperties(addOtherOption(props));
      setPropsLoading(false);
    });
  }, [currSubCatId]);

  // Handlers
  const propsChangeHandler = (
    e: ChangeEvent<HTMLSelectElement>,
    propSelectId: number
  ) => {
    const { value } = e.target;
    const propsWithUpdatedVal = updateValue(properties as Property[], propSelectId, value);
    handleChildren(properties as Property[], setProperties, propSelectId, value);
    setProperties(propsWithUpdatedVal);
  };

  const otherValueChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    propSelectId: number
  ) => {
    const propertiesUpdate = _.cloneDeep(properties) 
    access((p) => {
        p.other_value = e.target.value;
    }, propertiesUpdate as Property[], propSelectId)
    setProperties(propertiesUpdate);
  };

  return {
    properties,
    propsChangeHandler,
    otherValueChangeHandler,
    propsLoading,
  };
}

// Handling update properties data structure

function access(
  // find the right place in the properties tree like structure
  // and then do something; this function doesn't clone the properties
  // it's modify the provided one
  callback: (p: Property) => void,
  props: Property[],
  propId: number
) {
  let injected = false;
  (function rec(props: Property[]) {
    for (let i = 0; i < props.length; i++) {
      if (injected) return;
      const p = props[i];
      if (p.children) rec(p.children);
      if (p.id == propId) {
        injected = true;
        // do logic
        callback(p);
      }
    }
  })(props);
}

function updateValue(propertiesRef: Property[], propId: number, value: string) {
  const propsUpdate = _.cloneDeep(propertiesRef);
  access(
    (p) => {
      if(parseInt(value) == -1) {
        p.children = undefined
      }
      p.value = value;
    },
    propsUpdate,
    propId
  );
  return propsUpdate;
}

function handleChildren(
  propertiesRef: Property[],
  setProperties: Dispatch<SetStateAction<Property[] | undefined>>,
  propId: number,
  value: string
) {
  const propsUpdate = _.cloneDeep(propertiesRef);
  access(
    (p) => {
      if (hasChild(p, value)) {
        p.children = [];
        fetchOptionChildren(value).then((fetchedChildren) => {
          setProperties((prevProps) => {
            const propertiesUpdate = injectChildren(
              prevProps as Property[],
              addOtherOption(fetchedChildren),
              propId
            );
            return propertiesUpdate;
          });
        });
      }
    },
    propsUpdate,
    propId
  );
  setProperties(propsUpdate)
} 

function injectChildren(
  propertiesRef: Property[],
  children: Property[],
  propId: number
) {
  const propsUpdate = _.cloneDeep(propertiesRef);
  access(
    (p) => {
      p.children = children;
    },
    propsUpdate,
    propId
  );
  return propsUpdate;
}

function hasChild(prop: Property, value: string) {
  // check if the chosen option has child
  let hasChild = false;
  prop.options.forEach((o) => {
    if (o.id == parseInt(value)) {
      if ("child" in o) {
        hasChild = o.child as boolean;
      }
    }
  });
  return hasChild;
}

function addOtherOption(props: Property[]) {
  // take props and return them after adding other option to each property
  const propsUpdate = props.map((p) => {
    let hasOtherOption = false;
    p.options.forEach(o => {
        if(o.id == -1) hasOtherOption = true;
    })
    if(hasOtherOption) return p; // without duplicate   
    p.options.push({
      id: -1, // to represent the other value
      name: "Other",
    });
    return p;
  });
  return propsUpdate;
}
