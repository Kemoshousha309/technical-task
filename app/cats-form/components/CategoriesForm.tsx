"use client";

import { useMainCats } from "../hooks/useMainCats";
import { useSubCats } from "../hooks/useSubCats";
import {
  Category,
  KeyVal,
  Property,
  SelectOption,
} from "../../types/catsForm.types";
import Select from "./select";
import { useHandleProperties } from "../hooks/useHandleProperties";
import { PropsFields } from "./PropsFields";
import { Table } from "./table";
import { MouseEvent, useState } from "react";

interface CategoriesFormProps {
  cats: Category[];
}

export default function CategoriesForm({ cats }: CategoriesFormProps) {
  // State
  const [tableData, setTableData] = useState<KeyVal[]>();
  // Custom Hooks
  const { mainCatsChangeHandler, currCatId, mainCatsOptions } =
    useMainCats(cats);
  const { subCatsChangeHandler, currSubCatId, subCatsOptions } = useSubCats(
    cats,
    currCatId
  );
  const {
    properties,
    propsChangeHandler,
    otherValueChangeHandler,
    propsLoading,
  } = useHandleProperties(currSubCatId);

  // Handlers
  const submitHandler = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    // i'm sure user can't submit without properties
    setTableData(
      prepareTableData(
        properties as Property[],
        currCatId,
        mainCatsOptions,
        currSubCatId,
        subCatsOptions
      )
    );
  };

  // Render UI
  if (tableData) {
    return <Table tData={tableData} />;
  }
  return (
    <form className="flex flex-wrap">
      <div className="flex flex-col">
        <Select
          label="Main Categories"
          changeHandler={mainCatsChangeHandler}
          value={currCatId}
          options={mainCatsOptions}
        />
        <Select
          label="SubCategories"
          changeHandler={subCatsChangeHandler}
          value={currSubCatId}
          options={subCatsOptions}
        />
        <button
          className="btn btn-primary w-fit m-4"
          disabled={properties ? false : true}
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
      {propsLoading ? (
        <div className="text-center mx-auto my-10">Loading ....</div>
      ) : (
        <PropsFields
          otherValueChangeHandler={otherValueChangeHandler}
          properties={properties}
          propsChangeHandler={propsChangeHandler}
        />
      )}
    </form>
  );
}

// Helpers
function prepareTableData(
  properties: Property[],
  currCatId: string,
  mainCatsOptions: SelectOption[],
  currSubCatId: string,
  subCatsOptions: SelectOption[]
): KeyVal[] {
  const result: KeyVal[] = [];
  // add main cat 
  mainCatsOptions.forEach(c => {
    if(c.id == currCatId) {
      result.push({
        key: "Category",
        value: c.description
      })
    }
  });
  // add sub cat 
  subCatsOptions.forEach(c => {
    if(c.id == currSubCatId) {
      result.push({
        key: "Subcategory",
        value: c.description
      })
    }
  });
  // add other properties
  (function rec(props: Property[]) {
    for (let i = 0; i < props.length; i++) {
      const p = props[i];
      let displayVal = "";
      if (parseInt(p.value) == -1) {
        displayVal = p.other_value;
      } else {
        // get the display value from the options
        p.options.forEach((o) => {
          if (parseInt(p.value) == o.id) {
            displayVal = o.name;
          }
        });
      }
      result.push({
        key: p.name,
        value: displayVal,
      });
      if (p.children) rec(p.children);
    }
  })(properties);
  return result;
}
