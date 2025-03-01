import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const links = [
  { title: "Contact Us", link: ROUTES.CONTACTUS },
  { title: "Refund Policy", link: ROUTES.REFUND_POLICY },
  { title: "Privacy Policy", link: ROUTES.PRIVACY_POLICIES }, 
  { title: "Pricing", link: ROUTES.PRICING },
  { title: "Shipping", link: ROUTES.SHIPPING },
  { title: "Terms & Conditions", link: ROUTES.TERMS_AND_CONDITIONS },
];

const FooterLinks = () => {
  return (
    <div className="mt-10 ml-6 md:ml-10 grid justify-center items-center grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-6 gap-4 md:gap-8 text-sm md:text-base uppercase">
      {links.map(({ title, link }) => (
        <Link
          key={title}
          to={link}
          className="text-white hover:text-gray-500 transition p-2"
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
