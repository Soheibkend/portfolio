import Hero from "./Hero";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

const Header = () => {
    return (
        <header className="flex flex-col justify-between pl-48 py-24 text-slate-400 w-full h-screen">
            <Hero />
            <Navigation />
            <SocialMedia />
        </header>
    )
}

export default Header;
