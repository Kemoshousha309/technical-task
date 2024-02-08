import { ChangeEvent } from "react";
import Select from "./select";
import { Property, SelectOption } from "@/app/types/catsForm.types";

interface PropsFieldsProps {
  properties: Property[] | undefined;
  propsChangeHandler: (
    e: ChangeEvent<HTMLSelectElement>,
    propSelectId: number
  ) => void;
  otherValueChangeHandler: (
    e: ChangeEvent<HTMLInputElement>,
    propSelectId: number
  ) => void;
}

export function PropsFields({
  properties,
  propsChangeHandler,
  otherValueChangeHandler,
}: PropsFieldsProps) {
  if (!properties) return null;
  if(properties.length == 0) return <h1>Loading ...</h1>
  return (
    <div className="m-auto">
      {properties.map((prop) => {
        // prepare the options of the property
        const options: SelectOption[] = prop.options.map((opt) => {
          return {
            id: opt.id.toString(),
            description: opt.name,
          };
        });
        // render property select field with optional text input
        return (
          <div key={prop.id} className="card shadow-md">
            <Select
              label={prop.name}
              changeHandler={(e) => propsChangeHandler(e, prop.id)}
              value={prop.value}
              options={options}
            />

            {/* optional text input for other option */}
            {parseInt(prop.value) == -1 ? (
              <input
                value={prop.other_value == null ? "" : prop.other_value}
                onChange={(e) => otherValueChangeHandler(e, prop.id)}
                type="text"
                placeholder="Insert other option"
                className="input input-bordered m-4"
              />
            ) : null}
            {/* render potential children of options */}
            <PropsFields
              otherValueChangeHandler={otherValueChangeHandler}
              propsChangeHandler={propsChangeHandler}
              properties={prop.children} 
            />
          </div>
        );
      })}   
    </div>
  );
}
