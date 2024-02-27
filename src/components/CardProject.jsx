import portfolioImage from '../images/portfolio.png';
import GithubIcon from './GithubIcon';
import LinkIcon from './LinkIcon';

const CardProject = () => {
    return (
        <div className="flex mt-6 group py-3 px-2 lg:py-4 lg:px-4 hover:bg-slate-500/10 hover:transition duration-200 rounded-md">

            <img src={portfolioImage} className="hidden md:block group-hover:border-slate-200/40 group-hover:shadow-xl md:mr-4 mr-2 md:w-28 md:h-20 w-24 h-16 rounded border-2 border-slate-200/10 " />

            <div className="">

                <div className='flex justify-between'>
                    <h3 className="group-hover:text-[#64ffda] group-hover:transition font-medium leading-tight text-slate-200">Personnel Portfolio</h3>
                    <div className='flex gap-3'>
                        <GithubIcon />
                        <LinkIcon />
                    </div>
                </div>

                <p className="mt-2 text-sm leading-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, voluptas. Quo maiores nulla assumenda eos a unde.
                </p>

                
                <ul className="group/list mt-2 flex flex-wrap">
                    <li className=" mr-1.5 mt-2">
                        <div className=" px-3 py-1 flex items-center rounded-full bg-teal-400/10 text-xs font-medium leading-5 text-teal-300">
                            JavaScript
                        </div>
                    </li>

                    <li className=" mr-1.5 mt-2">
                        <div className=" px-3 py-1 flex items-center rounded-full bg-teal-400/10 text-xs font-medium leading-5 text-teal-300">
                            React
                        </div>
                    </li>

                    <li className=" mr-1.5 mt-2">
                        <div className=" px-3 py-1 flex items-center rounded-full bg-teal-400/10 text-xs font-medium leading-5 text-teal-300">
                            Tailwind css
                        </div>
                    </li>

                   
                </ul>
            </div>
            
        </div>
    )
}

export default CardProject;