
const About = () => {
    return (

        <div className=" mt-14">
            <div className="w-full sticky top-0 bg-slate-900/70 backdrop-blur-sm py-5 lg:hidden">
                <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-widest">About</h3>
            </div>

            <section className=" mb-10 lg:mb-28" id="about">
           
                <p className=" mb-6 tracking-wide">
                    Hey there, I'm Kendjouh Soheib, a junior software engineer and full-stack developer passionate
                    about bringing ideas to life on the internet.
                    My journey into this field began in high school
                    when I wrote my first program, sparking my fascination with software development.
                </p>

                <p className=" mb-6">
                    These days, my main focus is on mastering the art of building pixel-perfect, accessible,
                    and inclusive products and digital experiences. I believe in the power of technology
                    to empower and connect people, and I'm committed to creating solutions that make a positive
                    impact.
                </p>

                <p className="mb-4">
                    Here are a few technologies I've been working with recently:
                </p>

                <ul className="mb-6 grid grid-cols-2 gap-2 gap-x-6 lg:w-1/2">
                    <li className=""><span className="text-[#64ffda]">▹</span> Java</li>
                    <li><span className="text-[#64ffda]">▹</span> Spring Boot</li>
                    <li><span className="text-[#64ffda]">▹</span> JavaScript</li>
                    <li><span className="text-[#64ffda]">▹</span> Angular</li>
                    <li><span className="text-[#64ffda]">▹</span> React</li>
                    <li><span className="text-[#64ffda]">▹</span> NodeJS</li>
                    <li><span className="text-[#64ffda]">▹</span> Postgresql</li>
                    <li><span className="text-[#64ffda]">▹</span> HTML/CSS</li>
                </ul>

                <a className="flex gap-3 px-2 py-2 bg-teal-950 w-fit cursor-pointer">
                    <svg className=" w-5 h-5 fill-[#64ffda]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="send-alt" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.88,4.73,16.2,20.65A2,2,0,0,1,14.3,22h0a2,2,0,0,1-1.9-1.31l-2.12-5.52,1.54-1.54,2.49-2.49a1,1,0,1,0-1.42-1.42l-2.49,2.49L8.82,13.76,3.31,11.63a2,2,0,0,1,0-3.83L19.27,2.12a2,2,0,0,1,2.61,2.61Z" ></path></g></svg>   
                    <span className=" font-semibold">Send me a message</span>       
                </a>
            </section>
        </div>
    )
}

export default About;