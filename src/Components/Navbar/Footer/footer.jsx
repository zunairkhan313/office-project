import { Link, NavLink } from "react-router-dom";
import logo from "../../../Images/Logo.png";
import { FaPhoneAlt, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Button from "../Button/button";
import { useState } from "react";

const FooterComponent = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const exploreLinks = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About Us",
            link: "/aboutUs",
        },
        {
            title: "Products",
            link: "/product",
        },
        {
            title: "News",
            link: "/",
        },
        {
            title: "Knowledge",
            link: "/",
        },
        {
            title: "Contact Us",
            link: "/contactUs",
        },
    ];

    const contactLinks = [
        {
            title: "Decoration Tools",
            link: "/",
        },
        {
            title: "Electronic Tools",
            link: "/",
        },
        {
            title: "Scissor",
            link: "/",
        },
        {
            title: "Cutting Tools",
            link: "/",
        },
        {
            title: "Automotive Tools",
            link: "/",
        },
        {
            title: "Pneumatic Tools",
            link: "/",
        },
        {
            title: "Clamp Pliers Tools",
            link: "/",
        },
    ];

    return (
        <section className="footer two-cta-wrapper flex flex-col justify-center items-center w-full mx-auto my-0 px-2.5 pt-[30px] pb-[20px] bg-[#F3F3F3]">
            <div className="two-cta-container relative w-[min(100%_-_15px,1250px)] mx-auto my-0 p-2.5">
                <div className="first-section-wrapper grid sm:grid-cols-[1fr_1fr_1fr] gap-8">
                    <div className="flex flex-col items-center footer-col first-col text-[black]">
                        <Link to="/">
                            <img className="h-28 w-auto" src={logo} alt="Logo" />
                        </Link>
                        <h3 className="not-italic font-bold text-[22px] leading-10 py-1">
                            Get in Touch with us!
                        </h3>
                        <div className="font-normal text-[18px] leading-8">
                            <p className="relative group">
                                <FaPhoneAlt className="inline mr-2 transition-colors duration-300 ease-in-out group-hover:text-[#006429]" />
                                <span className="inline-block">
                                    Tel: +92 322 8888520
                                </span>
                            </p>
                            <p className="relative group">
                                <MdAttachEmail className="inline mr-2 transition-colors duration-300 ease-in-out group-hover:text-[#006429]" />
                                <span className="inline-block">
                                    Email: info@changlutools.com
                                </span>
                            </p>
                        </div>
                        <div className="py-3">
                            <Button label="Contact Us" buttonLink="/contactUs" />
                        </div>
                    </div>
                    <div className="footer-col second-col">
                        <h3 className="not-italic font-bold text-[20px] text-center leading-[30px] tracking-[0.28em] uppercase text-[#006429] mb-3">
                            Explore
                        </h3>
                        <ul className="flex flex-col gap-1 items-center">
                            {exploreLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        className="not-italic font-medium text-[18px] leading-[34px] text-[black] hover:text-[#006429]"
                                        to={link.link}
                                    >
                                        {link.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col third-col">
                        <h3 className="not-italic font-bold text-[20px] text-center leading-[30px] tracking-[0.28em] uppercase text-[#006429] mb-3">
                            Products
                        </h3>
                        <ul className="flex flex-col gap-1 items-center">
                            {contactLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        className="not-italic font-medium text-[18px] leading-[34px] text-[black] hover:text-[#006429]"
                                        to={link.link}
                                    >
                                        {link.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="two-cta-container relative w-[min(100%_-_15px,1250px)] mx-auto my-2 bg-[#006429]">
                <div className="w-full max-w-[1250px] p-1">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h3 className="not-italic text-center font-regular text-[18px] leading-[50px] text-[white]">
                                Copyright ©️ 2023 <span className="text-[white] font-bold">CHANGLU</span> - All Rights Reserved
                            </h3>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 flex justify-center items-center py-1">
                            <a href="https://www.facebook.com/Changlutools.pk"
                            className="hover:text-blue-500" onMouseEnter={() => setHoveredIcon('facebook')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaFacebook className={hoveredIcon === 'facebook' ? 'text-[#0866FF] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://www.tiktok.com/@changlutoolsoffical?is_from_webapp=1&sender_device=pc" className="hover:text-blue-400" onMouseEnter={() => setHoveredIcon('tiktok')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaTiktok className={hoveredIcon === 'tiktok' ? 'text-[#000000] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://www.instagram.com/changlutools.pk/" className="hover:text-pink-500" onMouseEnter={() => setHoveredIcon('instagram')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaInstagram className={hoveredIcon === 'instagram' ? 'text-[#B606E7] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://www.linkedin.com/company/changlu-china/" className="hover:text-blue-700" onMouseEnter={() => setHoveredIcon('linkedin')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaLinkedin className={hoveredIcon === 'linkedin' ? 'text-[#0A66C2] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://youtube.com/@Changlutools?si=tvUfPSKbXWYIiIPq" className="hover:text-blue-700" onMouseEnter={() => setHoveredIcon('youtube')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaYoutube className={hoveredIcon === 'youtube' ? 'text-[#FF0000] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterComponent;