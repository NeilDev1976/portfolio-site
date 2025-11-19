import { NavLink } from "react-router-dom";
import siteConfig from "../data/siteConfig.json";
import GitHubLogoDark from  "../assets/GitHub_Invertocat_Dark.svg";
import GitHubLogoLight from  "../assets/GitHub_Invertocat_Light.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false); //only care about this for mobile

    // Render menu items, can be used in both mobile and desktop navs, load from siteConfig
    const renderMenu = () => (
        <>
            {siteConfig.navigation.map((item) => (
                <NavLink to={item.path}
                    onClick={()=> setShowMenu(false)}
                    className={({isActive}) => `${isActive ? "border-b-4 border-grey-900" : "border-b-0"}`}>
                    {item.name}
                </NavLink>
            ))}

                <a href={siteConfig.site.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80"
                >
                        <img className="block dark:hidden h-7 w-7" src={GitHubLogoDark} alt="GitHub" />
                        <img className="hidden dark:block h-7 w-7" src={GitHubLogoLight} alt="GitHub" />
                    </a>
        </>
      );

    return (
        <header className="fixed top-0 left-0 w-full flex justify-end sm:justify-center z-50">
            {/* Mobile Navigation */}
            <div className="header flex mr-4 mt-4 pointer-events-auto w-14 h-14 z-50 justify-center items-center shadow-md sm:hidden rounded-full">
                <button className="relative w-full h-full flex justify-center items-center" 
                        onClick={()=>(setShowMenu(!showMenu))}>
                    {/* Closed state icon */} 
                    <Bars3Icon className={`absolute h-8 w-8 transition-opacity duration-600 ${showMenu ? "opacity-0" : "opacity-100"} `} /> 
                    {/* Open state icon */} 
                    <XMarkIcon className={`absolute h-8 w-8 transition-opacity duration-600 ${showMenu ? "opacity-100" : "opacity-0"} `} />
                </button>
            </div>
            {/*slide in menu for mobile devices*/}
            <div className={`header fixed sm:hidden top-0 right-0 h-full w-full z-40 transform transition-transform duration-300 ${showMenu ? "translate-x-0" : "translate-x-full"}`}>
                <nav className="flex flex-col p-6 gap-4 items-start">
                    {renderMenu()}
                </nav>
            </div>



            {/* Desktop Navigation */}
            <div className="hidden sm:block header pointer-events-auto rounded-2xl px-8 py-2 mt-4 shadow-md">
                <nav className="flex gap-6">
                    {renderMenu()}

                    
                </nav>
            </div>
        </header>
    );
}

export { Header }