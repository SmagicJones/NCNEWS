import { useState } from 'react';
import boblogo from '../assets/bob-logo.svg';
// import { Link } from "react-router-dom";

import { MobileNav } from './MobileNav';

import Topics from './Topics';
import SortArticles from './SortArticles';

import { useParams, useSearchParams, Link } from 'react-router-dom';

const Header = () => {
  const [btnState, setBtnState] = useState(false);
  const [menuState, setMenuState] = useState(false);

  function mobileMenu() {
    setBtnState(!btnState);
    setMenuState(!menuState);
  }

  let toggleMenu = menuState ? 'flex' : 'hidden';
  let buttonMenu = btnState ? 'toggle-btn' : '';


  return (
    <header className="sticky top-0 z-10 bg-lime-500 text-white">
      <section className="mx-auto flex flex-wrap max-w-4xl items-center justify-between p-4">
        <Link to={'/articles'}>
          <h1 className="text-3xl hover:opacity-90">
            NC NEWS
          </h1>
        </Link>
        <div>
          <button
            id="hamburger-button"
            onClick={mobileMenu}
            className={`relative h-8 w-8 cursor-pointer text-3xl focus:outline-none md:hidden ${buttonMenu}`}
          >
            <div className="absolute top-4 -mt-0 5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:content-['']"></div>
          </button>
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <div className="hover:opacity-90">
              <Topics />
            </div>
            {/* <label htmlFor="sort-by">Sort Articles by: </label>
            <select name="sort-by" id="sort-by" className="" onChange={handleSort}>
              <option value="created_at">Date</option>
              <option value="comment_count">Comments</option>
              <option value="votes">Votes</option>
            </select> */}
            {/* <label htmlFor="order">Order</label>
            <select name="order" id="order" onChange={handleOrder}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <label htmlFor="limit">Limit</label>
            <select name="limit" id="limit" onChange={handleLimit}>
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
              <option value="15">15</option>
              <option value="18">18</option>
              <option value="21">21</option>
            </select> */}
          </nav>
        </div>
      </section>
      <MobileNav toggleMenu={toggleMenu} mobileMenu={mobileMenu} />
    </header>
  );
};

export default Header;
