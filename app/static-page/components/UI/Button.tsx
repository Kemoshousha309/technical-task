import { ReactNode } from "react";

interface BtnProps {
    children: ReactNode,
    styles?: string
}
export function Button({children, styles}: BtnProps) {
    return (
        <button className={`btn bg-gradient-to-r text-white  from-red-600 to-orange-500 ${styles} `}>{children}</button>
    )
}

