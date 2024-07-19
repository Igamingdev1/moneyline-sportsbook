import React from "react";
import { NavLink } from "react-router-dom";
import SubscribeForm from "../../components/Footer/SubscribeForm";
import SocialBar from "../../components/Footer/SocialBar";

const Footer: React.FC = () => {
  return (
    <footer className="text-center bg-midenight-blue text-gray-300">
      <div className="mx-6 py-10 text-center">
        <div className="grid grid-1 grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              About Company
            </h6>
            <p className="mb-4 hover:text-green-500">
              <NavLink to="/about">About Us</NavLink>
            </p>
            <p className="mb-4 hover:text-green-500">
              <NavLink to="/advertising">Advertising</NavLink>
            </p>
            <p className="mb-4 hover:text-green-500">
              <NavLink to="/about">Contact</NavLink>
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              Legal
            </h6>
            <p className="mb-4 hover:text-green-500">
              <NavLink to="/cookie">Cookie Policy</NavLink>
            </p>
            <p className="mb-4 hover:text-green-500">
              <NavLink to="/terms">Terms & Conditions</NavLink>
            </p>
            <p className="mb-4 hover:text-green-500">
              <NavLink to="/privacy">Privacy Policy</NavLink>
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              Media
            </h6>
            <p className="mb-4 hover:text-green-500">
              <NavLink to="/news">News</NavLink>
            </p>
            <p className="mb-4 hover:text-green-500">
              <NavLink to="/videos">Videos</NavLink>
            </p>
            <p className="mb-4 hover:text-green-500">
              <NavLink to="/previews">Previews</NavLink>
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              Download App
            </h6>
            <p className="mb-4 hover:text-green-500">
              <NavLink to="/ios">IOS</NavLink>
            </p>
            <p className="mb-4 hover:text-green-500">
              <NavLink to="/android">Android</NavLink>
            </p>
          </div>
        </div>
      </div>
      <SocialBar></SocialBar>
      <div className="text-center p-6 bg-black">
        <span>© 2022 Copyright: </span>
        <a className="font-semibold" href="https://tailwind-elements.com/">
          MoneyLineSportsBook
        </a>
      </div>
      <SubscribeForm></SubscribeForm>
    </footer>
  );
};

export default Footer;
