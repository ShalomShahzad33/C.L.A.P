import { Link } from "react-router-dom";
import Logo from "../assets/clap-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="clap-logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white font-semibold text-lg tracking-wide">
              CLAP
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Building clean, modern and scalable digital experiences with
            attention to detail and performance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/cabinet"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Cabinet
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} CLAP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
