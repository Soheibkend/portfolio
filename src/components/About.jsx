
const About = () => {
    return (

        <div className=" pt-12" id="about">
            <div className="w-full sticky top-0 bg-slate-900/70 backdrop-blur-sm py-5 lg:hidden">
                <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-widest">About</h3>
            </div>

            <section className=" mb-10 lg:mb-28 xl:mb-48">
           
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

                <ul className="mb-6 grid grid-cols-2 gap-2 gap-x-6 xl:w-1/2">
                    <li className=""><span className="text-[#64ffda]">▹</span> Java</li>
                    <li><span className="text-[#64ffda]">▹</span> Spring Boot</li>
                    <li><span className="text-[#64ffda]">▹</span> JavaScript</li>
                    <li><span className="text-[#64ffda]">▹</span> Angular</li>
                    <li><span className="text-[#64ffda]">▹</span> React</li>
                    <li><span className="text-[#64ffda]">▹</span> NodeJS</li>
                    <li><span className="text-[#64ffda]">▹</span> Postgresql</li>
                    <li><span className="text-[#64ffda]">▹</span> HTML/CSS</li>
                </ul>

               
            </section>
        </div>
    )
}

export default About;