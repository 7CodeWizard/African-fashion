import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'
import Link from "next/link";

const commonClasses =
    "transition-all duration-300 ease-soft-spring hover:text-primaryHotefy-neutral dark:hover:text-primaryHotefy-lighter";

const Footer = () => {
    return (
        <footer className="bg-neutral-100 dark:bg-[#18181b] dark:text-white shadow-lg border-t-1 dark:border-primaryHotefy-lighter border-primaryHotefy-neutral items-center flex py-2">
            <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
                <div className="text-tiny my-2 md:my-0">
                    &copy; {new Date().getFullYear()} Iwu - All rights reserved.
                </div>
                <div className="flex flex-wrap gap-2 my-4 md:my-0 text-tiny items-center justify-center">
                    <Link href="#" className={commonClasses}>
                        Terms and Conditions
                    </Link>
                    <Link href="#" className={commonClasses}>
                        Privacy Policy
                    </Link>
                    <Link href="#" className={commonClasses}>
                        Sitemap
                    </Link>
                    <Link href="#" className={commonClasses}>
                        About Iwu
                    </Link>
                </div>
                <div className="flex gap-2 mb-2 md:mb-0">
                    <Link
                        href="https://www.instagram.com/"
                        passHref
                        target="_blank"
                        className={commonClasses}
                    >
                        <FaInstagram size={20} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/"
                        passHref
                        target="_blank"
                        className={commonClasses}
                    >
                        <FaLinkedin size={20} />
                    </Link>
                    <Link
                        href="https://github.com/"
                        passHref
                        target="_blank"
                        className={commonClasses}
                    >
                        <FaGithub size={20} />
                    </Link>
                    <Link
                        href="https://twitter.com/"
                        passHref
                        target="_blank"
                        className={commonClasses}
                    >
                        <FaXTwitter size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
