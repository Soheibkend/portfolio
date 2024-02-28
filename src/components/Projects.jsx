import CardProject from "./CardProject";
import {projects} from '../projects.js';
const Projects = () => {
    
    return (

        <div className="mt-14 mb-16">
        
            <div className="w-full sticky top-0 bg-slate-900/70 backdrop-blur-sm py-5 lg:hidden">
                <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-widest">Projects</h3>
            </div>

            <section id="projects">
                {
                    projects.map ((project) => (
                        <CardProject key={project.id} 
                                    link={project.link}
                                    description={project.description}
                                    name={project.name}
                                    github={project.github}
                                    image={project.image}
                                    skills={project.skills} />
                    ))
                }
            </section>

            <a href="https://github.com/Soheibkend" target="_blank" rel="noreferrer" className="py-12 text-slate-200 font-semibold tracking-wide duration-200 hover:text-[#64ffda]">
                <span>
                    View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" inline h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 " aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                </span>
            </a>
        </div>
    )
}

export default Projects;