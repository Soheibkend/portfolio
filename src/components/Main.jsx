import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";


const Main = () => {

    return (
        <div className="w-screen h-screen lg:px-24 lg:py-24 px-5 text-slate-400">
            <About />
            <Experience />
            <Projects />
        </div>
    )
}

export default Main;