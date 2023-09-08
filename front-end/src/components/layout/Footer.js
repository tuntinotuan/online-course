import React from "react";
import Button from "../button/Button";
import { IconEarth } from "../icon";
import LogoUdemyDark from "../logo/LogoUdemyDark";

const Footer = ({
  mobileSmaller = "flex justify-between items-start",
  grid = "grid grid-cols-3 gap-32",
  mobile = "px-12 py-8",
}) => {
  return (
    <footer
      className={`flex flex-col justify-between bg-primaryBg w-full ${mobile} text-white overflow-hidden`}
    >
      <div className={`mb-10 ${mobileSmaller}`}>
        <div className={`${grid}`}>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">
              Udemy Business
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              Teach on Udemy
            </li>
            <li className="mb-2 hover:underline cursor-pointer">Get the app</li>
            <li className="mb-2 hover:underline cursor-pointer">About us</li>
            <li className="mb-2 hover:underline cursor-pointer">Contact us</li>
          </ul>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">Careers</li>
            <li className="mb-2 hover:underline cursor-pointer">Blog</li>
            <li className="mb-2 hover:underline cursor-pointer">
              Help and Support
            </li>
            <li className="mb-2 hover:underline cursor-pointer">Affiliate</li>
            <li className="mb-2 hover:underline cursor-pointer">Investors</li>
          </ul>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">Terms</li>
            <li className="mb-2 hover:underline cursor-pointer">
              Privacy policy
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              Cookie settings
            </li>
            <li className="mb-2 hover:underline cursor-pointer">Sitemap</li>
            <li className="mb-2 hover:underline cursor-pointer">
              Accessibility statement
            </li>
          </ul>
        </div>
        <Button
          className="flex items-center gap-1 border border-white pr-12 hover:bg-neutral-900"
          borderNone
        >
          <IconEarth></IconEarth>
          English
        </Button>
      </div>
      <div className="flex justify-between items-center">
        <LogoUdemyDark></LogoUdemyDark>
        <span className="text-xs">© 2023 Udemy, Inc.</span>
      </div>
    </footer>
  );
};

export default Footer;
