import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/look-icon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F9FB]  pt-16  mt-48 ">
      <div className="max-w-[1380px] mx-auto text-black">
        <div className=" mx-auto flex flex-col md:flex-row justify-between  ml-3">
          <div className="flex justify-center items-center mb-6 md:mb-0 text-center">
            <Link to="/" className="flex items-center text-black text-2xl">
              <img src={logo} alt="Look" className="h-10 mr-2 -mt-1" />
              <span className="-ml-2 text-4xl">Look</span>
            </Link>
          </div>

          <div className=" md:text-left mb-6 md:mb-0">
            <h3 className="text-sm font-semibold mb-2">Look</h3>
            <div>
              <Link to="/" className="flex items-center text-black text-2xl">
                <span className="text-sm">Carte Cadeau</span>
              </Link>
              <Link to="/" className="flex items-center text-black text-2xl">
                <span className="text-sm">Mentions légales</span>
              </Link>

              <Link to="/" className="flex items-center text-black text-2xl">
                <span className="text-sm">Conditions générales de vente</span>
              </Link>

              <Link to="/" className="flex items-center text-black text-2xl">
                <span className="text-sm">Données Personnelles</span>
              </Link>

              <Link to="/" className="flex items-center text-black text-2xl">
                <span className="text-sm">Cookies</span>
              </Link>
            </div>
          </div>

          <div className=" md:text-left mb-6 md:mb-0">
            <h3 className="text-sm font-semibold mb-2">Service client</h3>
            <div>
              <Link to="/" className="flex items-center text-black text-2xl">
                <span className="text-sm">FAQ</span>
              </Link>
              <Link to="/" className="flex items-center text-black text-2xl">
                <span className="text-sm">Faire un retour</span>
              </Link>

              <Link to="/" className="flex items-center text-black text-2xl">
                <span className="text-sm">Suivre mon colis</span>
              </Link>

              <Link to="/" className="flex items-center text-black text-2xl">
                <span className="text-sm">Nous contacter</span>
              </Link>

              <Link to="/" className="flex items-center text-black text-2xl">
                <span className="text-sm">E-carte cadeau</span>
              </Link>
            </div>
          </div>

          <div className=" md:text-left">
            <h3 className="text-sm font-semibold mb-2">Restez informé</h3>
            <form className="flex justify-center md:justify-end -ml-4 md:ml-0">
              <input
                type="email"
                placeholder="Entrez votre email"
                className="bg-white text-white px-6 py-2 rounded-l-[50px]  focus:outline-none focus:ring focus:border-blue-300"
              />
              <button className="bg-black hover:bg-black text-white text-sm px-4 py-2 rounded-r-[50px] ml-2">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
        <div className="py-4 mt-7 md:mt-24  ml-3 md:ml-0">
          <p className="text-gray-700 text-sm">
            &copy; {new Date().getFullYear()} Look. Designed by{" "}
            <a
              href="https://bizifrani.com/"
              target="_blank"
              className="underline"
            >
              Frani BIZI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
