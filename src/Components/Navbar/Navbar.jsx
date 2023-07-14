import { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navExpanded, setNavExpanded] = useState(false)
  
  return (
    <nav className="navigation">
      <Link to={"/"}>
      <img className="brand-img" src="https://ambula.app/assets/images/logo.png" alt="ambula_logo" />
      </Link>
      <button className="hamburger"  onClick={() => {
          setNavExpanded(!navExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>


      <div
       className={
        navExpanded ? "navigation-menu expanded" : "navigation-menu"
      }>
          
        <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/about">About</Link>
          </li>
          <li>
           <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}