import { ReactNode } from "react";

interface BadgeProps {
  Icon?: JSX.Element;
  number: number;
  parenthesesNum?: number;
  label: string;
}

export function Badge({ Icon, number, parenthesesNum, label }: BadgeProps) {
  if (Icon) {
    return (
      <div className="flex items-center gap-2 bg-yellow-50 px-2 py-1">
        <div>{Icon}</div>
        <div className="flex flex-col text-sm">
          <span className="font-semibold">
            {number}{" "}
            {parenthesesNum ? (
              <span className="font-light ml-1 text-slate-500 text-[10px] ">
                ( 15 )
              </span>
            ) : null}{" "}
          </span>
          <span className="text-yellow-600">{label}</span>
        </div>
      </div>
    );
  }
  return (
    <div className=" text-sm bg-yellow-50 px-3 py-2 text-yellow-600 font-semibold">
      <span className="text-xl mr-1">{number}</span>
      <span>{label}</span>
    </div>
  );
}
