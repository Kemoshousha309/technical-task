import { ChangeEvent, useState } from "react";
import { Category } from "../../types/catsForm.types";

export function useMainCats(cats: Category[]) {
    const [currCatId, setCurrCatId] = useState<string>("")


    const mainCatsChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrCatId(e.target.value)
    }

    
    return {currCatId, mainCatsChangeHandler, mainCatsOptions: prepareOptions(cats)}
}


export const prepareOptions = (cats: Category[]) => {
    return cats.map(c => {
        return {
            id: c.id.toString(),
            description: c.name
        }
    })
}