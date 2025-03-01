import React from 'react'
import '../../styles/footer.css'
import 'primeicons/primeicons.css'
import * as ROUTES from "../../constants/routes";
import hestiaLogo from "../../assets/icons/logo_hestia.png"
import "../../styles/home.css"
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';

/**
 * Render the footer section.
 * @returns {JSX.Element} The JSX element representing the footer section.
 */

const Footer = () => {
    const links = [
        { title: "Privacy Policy", link: ROUTES.PRIVACY_POLICIES },
        { title: "Terms & Conditions", link: ROUTES.TERMS_AND_CONDITIONS },
        { title: "Pricing", link: ROUTES.PRICING },
        { title: "Return Policy", link: ROUTES.REFUND_POLICY },
        { title: "Contact  Us", link: ROUTES.CONTACTUS },
        { title: "About Us", link: ROUTES.ABOUT_US },
        { title: "shipping", link: ROUTES.SHIPPING }
    ]
    return (
        <div className="overflow-hidden footer w-screen h-auto py-10 flex flex-col gap-4 justify-center items-center">
            <FooterLogo/>
            <div className="mt-12 text-center flex items-center justify-center">
                <h1 className='text-6xl md:text-9xl lg:text-[200px] font-rubikfade'>HESTIA</h1>
            </div>
           <FooterLinks/>
        </div>
    )

}

export default Footer