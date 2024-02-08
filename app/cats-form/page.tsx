import CategoriesForm from "./components/CategoriesForm";
import { fetchAllCats  } from "./api";

export default async function Home() {
    const cats = await fetchAllCats()
  return (
    <main>
        <CategoriesForm cats={cats} />
    </main>
  );
}
