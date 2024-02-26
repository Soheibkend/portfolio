import CardProject from "./CardProject";

const Projects = () => {
    return (

        <>
        
            <div className="w-full sticky top-0 bg-slate-900/70 backdrop-blur-md px-6 py-5 sm:hidden">
                <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-widest">Projects</h3>
            </div>

            <section id="projects">
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
            </section>
        </>
    )
}

export default Projects;