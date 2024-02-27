import Hero from "./Hero";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

const Header = () => {
    return (
        <header className="lg:flex lg:flex-col lg:justify-between lg:pl-48 lg:py-24 flex flex-col gap-5 justify-between px-5 pt-11 text-slate-400 w-full h-full">
            <Hero />
            <Navigation />
            <SocialMedia />
        </header>
    )
}

export default Header;
