export const MobileNav = ({toggleMenu, mobileMenu }) => {
    return (
      <section
        id="mobile-menu"
        className={`justify-content-center top-68 absolute w-full origin-top flex-col bg-black text-5xl text-pa ${toggleMenu} animate-open-says-me`}
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
          onClick={mobileMenu}
        >
          <a href="#me" className="w-full py-6 text-center hover:opacity-90">
            Home
          </a>
          <a href="#skills" className="w-full py-6 text-center hover:opacity-90">
            something
          </a>
          <a
            href="#projects"
            className="w-full py-6 text-center hover:opacity-90"
          >
            something
          </a>
          <a href="#contact" className="w-full py-6 text-center hover:opacity-90">
            something
          </a>
          <a href="#footer" className="w-full py-6 text-center hover:opacity-90">
            something
          </a>
        </nav>
      </section>
    );
  };