import CardExperience from "./CardExperience";

const Experience = () => {
    return (

        <div className="mt-14">
       
            <div className="w-full sticky top-0 bg-slate-900/70 backdrop-blur-sm py-5 lg:hidden">
                <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-widest">Experience</h3>
            </div>

            <section id = "experience">
                <CardExperience />
                <CardExperience />
                <CardExperience />
            </section>
        </div>
    )
}

export default Experience;