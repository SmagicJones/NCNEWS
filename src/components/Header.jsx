import { useState } from "react";
import boblogo from "../assets/bob-logo.svg";


import { MobileNav } from "./MobileNav";

export const Header = () => {
  const [btnState, setBtnState] = useState(false);
  const [menuState, setMenuState] = useState(false);

  function mobileMenu() {
    setBtnState(!btnState);
    setMenuState(!menuState);
  }

  let toggleMenu = menuState ? "flex" : "hidden";
  let buttonMenu = btnState ? "toggle-btn" : "";
  return (
    <header className="sticky top-0 z-10 bg-lime-500 text-white">
      <section className="mx-auto flex flex-wrap max-w-4xl items-center justify-between p-4">
          <a href="#me">
            <img src={boblogo} alt="" className="h-6 flex-grow flex-col" />
          </a>
    
        <div>
          <button
            id="hamburger-button"
            onClick={mobileMenu}
            className={`relative h-8 w-8 cursor-pointer text-3xl focus:outline-none md:hidden ${buttonMenu}`}
          >
            <div className="absolute top-4 -mt-0 5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:content-['']"></div>
          </button>
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <a href="#projects" className="hover:opacity-90">
              something
            </a>
            <a href="#skills" className="hover:opacity-90">
              something
            </a>
            <a href="#contact" className="hover:opacity-90">
              something
            </a>
          </nav>
        </div>
      </section>
      <MobileNav toggleMenu={toggleMenu} mobileMenu={mobileMenu} />
    </header>
  );
};