import { Aside } from "./components/Aside";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function StaticPage() {
    return (
        <>
            <Header />
            <div className="flex flex-wrap gap-20 max-xl:gap-10 px-4">
                <Aside />
                <Main />
            </div>
        </>
    )
}