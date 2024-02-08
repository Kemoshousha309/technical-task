import { Aside } from "./components/Aside";
import { Header } from "./components/Header";

export default function StaticPage() {
    return (
        <>
            <Header />
            <div className="flex flex-wrap gap-20">
                <Aside />
                <main className="h-96 flex-grow min-w-96  shrink bg-green-600">
                    <section>
                        <nav></nav>
                        Products
                    </section>
                </main>
            </div>
        </>
    )
}