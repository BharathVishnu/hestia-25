import React from "react";
import Logo from "../../assets/icons/logo_hestia.png";
import Facebook from "../../assets/icons/facebook.png";
import Twitter from "../../assets/icons/twitter.png";
import Youtube from "../../assets/icons/youtube.png";

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com" },
  { name: "Twitter", icon: Twitter, url: "https://www.twitter.com" },
  { name: "Youtube", icon: Youtube, url: "https://www.youtube.com" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com" },
];

const FooterLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center h-14 w-14 md:w-24 md:h-24">
        <img src={Logo} className="object-cover w-full h-full" alt="Company Logo" />
      </div>

      <div className="mt-0 md:mt-[-40px] grid grid-rows-1 grid-cols-4 gap-6 md:gap-24 lg:gap-48">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 md:h-[75px] md:w-[75px] flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
          >
            <img src={social.icon} className="object-cover w-auto h-auto" alt={social.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLogo;
