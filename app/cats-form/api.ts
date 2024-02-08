import { Category, Property } from "../types/catsForm.types";

const privateKey = "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16"
const baseUrl = "https://staging.mazaady.com/api/v1/"


export async function fetchProps(catId: string) {
    const res = await fetch(`${baseUrl}properties?cat=${catId}`, {
      headers: {
        "private-key": privateKey,
      },
    });
    const data = await res.json();
    return data.data as Property[];
}


export async function fetchAllCats() {
    const response = await fetch(`${baseUrl}get_all_cats`, {
        headers: {
            "private-key": privateKey
        }
    })
    const res = await response.json()
    return res.data.categories as Category[]
}

export async function fetchOptionChildren(optionId: string) {
    const response = await fetch(`${baseUrl}get-options-child/${optionId}`, {
        headers: {
            "private-key": privateKey
        }
    })
    const res = await response.json()
    return res.data as Property[]
}
  
