
const Navigation = () => {
    return (
        <nav>
            <ul className="sm:flex sm:flex-col sm:justify-between hidden">

                <li className="">
                    <a className="group flex items-center w-fit" href="#about">
                        <span className="group-active:w-16 group-active:bg-slate-200 group:hover:transition duration-100 ease-in-out w-8 h-0.5 bg-slate-500 mr-4 inline-block group-hover:w-16 group-hover:bg-slate-200"></span>
                        <span className="group-active:w-16 group-active:bg-slate-200 group-hover:transition duration-100 ease-in-out font-bold uppercase text-xs tracking-widest text-slate-500 group-hover:text-slate-200 ">About</span>
                    </a>
                </li>

                <li className=" pt-6">
                    <a className="group flex items-center w-fit" href="#experience">
                        <span className=" group-focus:w-16 group-focus:bg-slate-200 group:hover:transition duration-100 ease-in-out w-8 h-0.5 bg-slate-500 mr-4 inline-block group-hover:w-16 group-hover:bg-slate-200"></span>
                        <span className=" group-focus:bg-slate-200 group-hover:transition duration-100 ease-in-out font-bold uppercase text-xs tracking-widest text-slate-500 group-hover:text-slate-200 ">Experience</span>
                    </a>
                </li>

                <li className=" pt-6">
                    <a className="group flex items-center w-fit" href="#projects">
                        <span className="group-active:w-16 group-active:bg-slate-200 group:hover:transition duration-100 ease-in-out w-8 h-0.5 bg-slate-500 mr-4 inline-block group-hover:w-16 group-hover:bg-slate-200"></span>
                        <span className="group-active:w-16 group-active:bg-slate-200 group-hover:transition duration-100 ease-in-out font-bold uppercase text-xs tracking-widest text-slate-500 group-hover:text-slate-200 ">Projects</span>
                    </a>
                </li>

            </ul>
        </nav>
    )
}

export default Navigation;