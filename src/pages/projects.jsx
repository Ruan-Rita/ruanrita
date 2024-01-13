import CardProject from "../components/Card/card-project";
import Footer from "../components/footer/footer";
import NavBar from "../components/Navbar/navbar";

export default function Projects() {
    return (
        <main className="bg-background w-full flex flex-col min-h-screen">
            <NavBar />
            <section className="max-w-7xl mx-auto w-full flex flex-col px-2 sm:px-6 lg:px-8 mb-28">
                <div className="mt-20">
                    <h1 className="text-white font-bold text-xl"><span className="text-primary font-bold text-xl">/</span> PROJECTS</h1>
                    <p className="text-white mt-2">List of my projects</p>
                </div>
                <div className="mt-14">
                    <h1 className="text-white font-bold text-xl mb-4"><span className="text-primary font-bold text-xl">#</span> Complete Apps</h1>
                    <div className="grid grid-cols-3 gap-3">
                        <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" image="/RuanRita/project_1.png" name="ChertNodes" />
                        <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" image="/RuanRita/project_2.png" name="ChertNodes" />
                        <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" image="/RuanRita/project_3.jpg" name="ChertNodes" />
                    </div>
                </div>
                <div className="mt-20">
                    <h1 className="text-white font-bold text-xl mb-4"><span className="text-primary font-bold text-xl">#</span> Small projects</h1>
                    <div className="grid grid-cols-3 gap-3">
                        <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" name="ChertNodes" />
                        <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" name="ChertNodes" />
                        <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" name="ChertNodes" />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}