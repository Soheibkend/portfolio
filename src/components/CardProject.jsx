import GithubIcon from './GithubIcon';
import LinkIcon from './LinkIcon';

const CardProject = ({name, description, skills, link, github, image}) => {
    return (
        <div className="flex mt-6 group py-3 px-2 lg:py-4 lg:px-4 hover:bg-slate-500/10 hover:transition duration-200 rounded-md">

            <img src={image} alt={image} className="hidden md:block group-hover:border-slate-200/40 group-hover:shadow-xl md:mr-4 mr-2 md:w-28 md:h-20 w-24 h-16 rounded border-2 border-slate-200/10 " />

            <div className='w-full'>

                <div className='flex justify-between'>
                    <h3 className="group-hover:text-[#64ffda] group-hover:transition font-medium leading-tight text-slate-200">{name}</h3>
                    <div className='flex gap-3'>
                        <GithubIcon link={github}/>
                        <LinkIcon link={link}/>
                    </div>
                </div>

                <p className="mt-2 text-sm leading-normal">
                    {description}
                </p>

                <ul className="group/list mt-2 flex flex-wrap">
                    {
                        skills.map ((skill) => (
                            <li key={skill} className=" mr-1.5 mt-2">
                                <div className=" px-3 py-1 flex items-center rounded-full bg-teal-400/10 text-xs font-medium leading-5 text-teal-300">
                                    {skill}
                                </div>
                            </li>
                        ))
                    }                  
                </ul>
            </div>
            
        </div>
    )
}

export default CardProject;