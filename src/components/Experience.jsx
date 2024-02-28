import CardExperience from "./CardExperience";
import {experiences} from '../experiences.js';

const Experience = () => {
    return (

        <div className="mt-14">
       
            <div className="w-full sticky top-0 bg-slate-900/70 backdrop-blur-sm py-5 lg:hidden">
                <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-widest">Experience</h3>
            </div>

            <section className="" id = "experience">
                {
                    experiences.map ((experience) => (
                        <CardExperience position={experience.position}
                                        time={experience.time}
                                        skills={experience.skills}
                                        descriptions={experience.description}
                                        link={experience.link}
                        />
                    ))
                }
            </section>

            <div className="pb-10">
                <a href="https://drive.google.com/file/d/1LOyZuUD7uHdTCp8NLcifnpDgatU3VR58/view?usp=sharing" target="_blank" rel="noreferrer" className="group pb-11 text-slate-200 font-semibold tracking-wide duration-200 hover:text-[#64ffda]">
                    <span>
                        View Full Resume
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" inline h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 " aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                    </span>
                </a>
            </div>
            
        </div>
    )
}

export default Experience;