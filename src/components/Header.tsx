import { NavLink } from "react-router-dom";
import siteConfig from "../data/siteConfig.json";
import GitHubLogoDark from  "../assets/GitHub_Invertocat_Dark.svg";
import GitHubLogoLight from  "../assets/GitHub_Invertocat_Light.svg";

const Header = () => {
    
    // Render menu items, can be used in both mobile and desktop navs, load from siteConfig
    const renderMenu = () => (
      siteConfig.navigation.map((item) => (
          <NavLink to={item.path}
            className={({isActive}) => `${isActive ? "border-b-4 border-grey-900" : "border-b-0"}`}>
            {item.name}
          </NavLink>
          ))
      );

    return (
        <header className="fixed top-0 left-0 w-full flex justify-center z-50 pointer-events-none">
            <div className="header pointer-events-auto rounded-2xl px-8 py-2 mt-4 shadow-md">
                <nav className="flex gap-6">
                    {renderMenu()}

                    <a
                        href={siteConfig.site.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80"
                    >
                        <img className="block dark:hidden h-7 w-7" src={GitHubLogoDark} alt="GitHub" />
                        <img className="hidden dark:block h-7 w-7" src={GitHubLogoLight} alt="GitHub" />
                    </a>
                </nav>
            </div>
        </header>
    );
}

export { Header }