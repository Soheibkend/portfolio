import CardProject from "./CardProject";

const Projects = () => {
    return (

        <div className="mt-14 mb-16">
        
            <div className="w-full sticky top-0 bg-slate-900/70 backdrop-blur-sm py-5 lg:hidden">
                <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-widest">Projects</h3>
            </div>

            <section id="projects">
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
            </section>
        </div>
    )
}

export default Projects;