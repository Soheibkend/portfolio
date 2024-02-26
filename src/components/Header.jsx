import Hero from "./Hero";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

const Header = () => {
    return (
        <header className="sm:flex sm:flex-col sm:justify-between flex flex-col gap-5 justify-between  px-5 pt-11 sm:pl-48 sm:py-24 text-slate-400 w-full h-full">
            <Hero />
            <Navigation />
            <SocialMedia />
        </header>
    )
}

export default Header;
