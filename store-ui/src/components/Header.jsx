import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  const navLinkClass =
    "text-center text-lg font-primary font-semibold text-primary py-2 dark:text-light hover:text-dark dark:hover:text-lighter";
  return (
    <header className="border-b border-gray-300 dark:border-gray-600 sticky top-0 z-20 bg-normalbg dark:bg-darkbg">
      <div className="flex justify-between items-center max-w-6xl py-4 px-6 mx-auto">
        <Link to="/" className={navLinkClass}>
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold">Stickers</span>
        </Link>
        <nav className="flex items-center py-2 z-10">
          <button
            className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border-primary dark:border-light transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toggle Theme"
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? faMoon : faSun}
              className="w-4 h-4 text-primary dark:text-light"
            />
          </button>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => {
                  return isActive ? `underline underline-offset-3 ${navLinkClass}` : navLinkClass;
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? `underline underline-offset-3 ${navLinkClass}` : navLinkClass;
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? `underline underline-offset-3 ${navLinkClass}` : navLinkClass;
                }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  return isActive ? `underline underline-offset-4 ${navLinkClass}` : navLinkClass;
                }}
              >
                Login
              </NavLink>
            </li>
            <li>
              <Link to="/cart" className="text-primary py-2">
                <FontAwesomeIcon icon={faShoppingBasket} className="dark:text-light" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
