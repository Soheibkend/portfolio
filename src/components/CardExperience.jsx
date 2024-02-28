
const CardExperience = ({position, time, descriptions, skills, link}) => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <div onClick={() => openInNewTab(link)} className="lg:mt-6 mb-5 hover:drop-shadow-xl hover:transition duration-200 group lg:py-6 md:px-6 py-3 px-3 cursor-pointer flex gap-3 flex-col hover:bg-slate-500/10 rounded-md">

                <h3 className=" group-hover:text-[#64ffda] group-hover:transition font-medium leading-tight text-slate-200 ">
                    {position}
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