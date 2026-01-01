import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/clap-logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/cabinet", label: "Cabinet" },
  ];

  return (
    <nav className="w-full bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="clap-logo"
            className="size-10 rounded-full object-cover"
          />
          <span className="text-white font-semibold text-lg tracking-wide">
            CLAP
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative text-slate-300 transition-all duration-300
                  hover:text-cyan-400
                  after:absolute after:left-0 after:-bottom-1 after:h-0.5
                  after:bg-cyan-400 after:transition-all after:duration-300
                  ${
                    isActive
                      ? "text-cyan-400 after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-slate-200 transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-200 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-200 transition ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 bg-slate-900 text-sm">
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-slate-300 transition
                  ${isActive ? "text-cyan-400" : "hover:text-cyan-400"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
