import { ChangeEvent, useEffect, useState } from "react";
import { Category, SelectOption } from "../../types/catsForm.types";
import { prepareOptions } from "./useMainCats";

export function useSubCats(cats: Category[], currCatId: string) {
    const [currSubCatId, setCurrSubCat] = useState<string>("")

    useEffect(() => {
        setCurrSubCat("")
    }, [currCatId])

    const subCatsChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrSubCat(e.target.value)
    }

    let subCats: Category[] | null = null;
    cats.forEach(c => {
        if(c.id.toString() == currCatId) {
            subCats = c.children
        }
    }) 

    let subCatsOptions: [] | SelectOption[] = []
    if(subCats) subCatsOptions = prepareOptions(subCats)

    return {currSubCatId, subCatsChangeHandler, subCatsOptions}
}