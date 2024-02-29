
const CardExperience = ({position, time, descriptions, skills, link}) => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <div onClick={() => openInNewTab(link)} className="lg:mt-6 mb-5 hover:drop-shadow-xl hover:transition duration-200 group lg:py-6 md:px-6 py-3 px-3 cursor-pointer flex gap-3 flex-col hover:bg-slate-500/10 rounded-md">

                <h3 className=" group-hover:text-[#64ffda] group-hover:transition font-medium leading-tight text-slate-200 ">
                    {position}
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" inline h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 " aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                    </span>
                </h3>

                <div className="text-xs font-semibold uppercase text-slate-500 tracking-wide">
                    {time}
                </div>

                <ul className="text-sm leading-normal">
                    {
                        descriptions.map( (description) => (
                            <div className="flex">
                                <span className=" mr-2 text-[#64ffda]">▹</span>
                                <li className="">
                                    {description}
                                </li>
                            </div>
                        ))
                    }
                    
                </ul>
                <ul className="group/list mt-2 flex flex-wrap">
                    {
                        skills.map ((skill) => (
                            <li className=" mr-1.5 mt-2">
                                <div className=" px-3 py-1 flex items-center rounded-full bg-teal-400/10 text-xs font-medium leading-5 text-teal-300">
                                    {skill}
                                </div>
                            </li>
                        ))
                    }
                </ul>
           
        </div>
    )
}

export default CardExperience;