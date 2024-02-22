

const ContactMe = () => {
    return (
        <div className=" flex flex-col items-center justify-center gap-5">
            <h2 className=" text-slate-200 text-3xl font-bold">Get In Touch</h2>
            <p className=" text-slate-400 tracking-tight text-center">
                Although I’m not currently looking for any new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <a className="px-4 py-3 border rounded-md border-[#64ffda] text-[#64ffda]" href="mailto:soheibkendjouh@gmail.com" rel="noopener noreferrer" target="_blank">
                Say Hello
            </a>
        </div>
    )
}

export default ContactMe;