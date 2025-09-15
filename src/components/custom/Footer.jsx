import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Brand */}
        <h1 className="text-2xl font-extrabold mb-6 md:mb-0 text-center hover:scale-105 transition-transform">
          🍿 <span className="text-blue-500">M</span>ovie
          <span className="text-red-500">R</span>ender
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-sm md:text-base font-medium">
          <a href="#" className="hover:text-amber-400 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            Privacy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-6 md:mt-0 text-lg">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            <BsTwitterX />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            <BsInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            <BsGithub />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Movie Render</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
