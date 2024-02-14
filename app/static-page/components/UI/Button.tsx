import { ReactNode } from "react";

interface BtnProps {
  children: ReactNode;
  styles?: string;
  type?: "primary" | "secondary";
  active?: boolean;
}
export function Button({ children, styles, type, active }: BtnProps) {
  let classes = `btn bg-gradient-to-r text-white  from-red-600 to-orange-500 ${styles} `;
  if (type == "secondary") {
    classes = ` text-sm text-gray-500 border-[1px] rounded-[15px] py-2 px-8 border-gray-300	max-sm:px-4	dark:text-white  ${styles} `;
  }
  if (active && type == "secondary") {
    classes = ` text-sm font-semibold text-yellow-500 border-[1px] rounded-[15px] py-2 px-8 border-yellow-500 ${styles} `;
  }
  return (
    <button
      className={classes}
    >
      {children}
    </button>
  );
}
