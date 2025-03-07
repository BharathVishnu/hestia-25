import React, { useContext, useState } from "react";
import { Link, useNavigate, useMatch } from "react-router-dom";
import logoHestia from "../../assets/icons/logo_hestia.png";
import { UserContext } from "../../context/user.jsx";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const { tokenState } = useContext(UserContext);
  const [token] = tokenState;
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const smallScreen = useMediaQuery({maxWidth:"900px"});
  
  // Define base navigation links
  const baseNavigationLinks = [
    ["Tickets", "/"],
    ["Merchandise", "/merchs"],
    ["Events", "/events"],
    ["Sponsors", "/sponsors"],
  ];
  
  // Add the conditional login/dashboard link
  const navigationLinks = [
    ...baseNavigationLinks,
    [token ? "Dashboard" : "LogIn", token ? "/dashboard" : "/loginPage"]
  ];

  return (
    <div className="flex bg-transparent pt-8 py-6 bg-opacity-5 justify-center items-center absolute top-12 w-full px-5 z-[100] font-Geomanist ">
      <div className="flex justify-between min-w-full bg-primary-dark rounded-md lg:bg-transparent px-2 lg:w-[93%] overflow-x-auto overflow-y-hidden lg:px-10">
        
        <div className="flex justify-start text-white items-center rounded-md">
          <div className="flex items-center font-bold mr-5 w-10 md:w-14">
            <Link to="/">
              <img className="w-10 md:w-14" src={logoHestia} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="flex bg-transparent lg:min-w-[45%] items-center rounded-md py-2 px-5 justify-around text-black">
          {navigationLinks.map(([link, path], key) => (
            <motion.div
              key={key}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link className="text-sm lg:text-xl mx-2 lg:text-md uppercase font-bold p-2 relative z-10" to={path} style={{ fontFamily: 'rubik' }}>
                {link}
              </Link>
              
              {!smallScreen ? (
                <>
                  {hovered === key && (
                    <motion.svg
                      width="200"
                      height="180"
                      viewBox="0 0 500 500"
                      className="absolute -top-4 ml-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.path
                        d="M30,90 Q80,20 200,30 T380,90 Q400,150 200,180 T30,90 Z"
                        fill="transparent"
                        strokeWidth="10"
                        stroke="#720A08"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                    </motion.svg>
                  )}
                </>
              ) : (
                <>
                  {hovered === key && (
                    <motion.svg
                      width="140"
                      height="140"
                      viewBox="0 0 500 500"
                      className="absolute -top-4 ml-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.path
                        d="M30,90 Q80,20 200,30 T380,90 Q400,150 200,180 T30,90 Z"
                        fill="transparent"
                        strokeWidth="10"
                        stroke="#720A08"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                    </motion.svg>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;