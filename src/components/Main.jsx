import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";


const Main = () => {

    return (
        <div className="w-screen h-screen sm:px-24 sm:py-24 text-slate-400">
            <About />
            <Experience />
            <Projects />
        </div>
    )
}

export default Main;