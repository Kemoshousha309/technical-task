import { ChangeEvent } from "react";
import { SelectOption } from "../../types/catsForm.types";

interface SelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({
  label,
  options,
  value,
  changeHandler,
}: SelectProps) {
  return (
    <div className="form-control min-w-60 m-4">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        onChange={changeHandler}
        value={value}
        className={`select select-bordered  `}
      >
        <option value=""></option>
        {options.map((opt) => {
          return (
            <option key={opt.id} value={opt.id}>
              {opt.description}
            </option>
          );
        })}
      </select>
    </div>
  );
}
