import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Footer = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/adediran-sulyman/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Irenitemi97',

        },
        {
            id: 3,
            child: (
                <>
                    <FaTwitter size={30} />
                </>
            ),
            href: 'https://twitter.com/Irenitemi007',

        },
        {
            id: 4,
            child: (
                <>
                    <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:adediranweb@gmail.com',

        },

        {
            id: 5,
            child: (
                <>
                    <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: './Resume.pdf',
            style: 'rounded-br-md',
            download: true,

        },

    ];

    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-4">
                    <ul className='flex justify-between items-center '>
                        {links.map(({ id, child, href, style, download }) => (
                            <li
                                key={id}
                                className={`mx-2 hover:scale-105 duration-300 ${style}`}
                            >
                                <a
                                    href={href}
                                    download={download}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <>
                                        {child}
                                    </>
                                </a>
                            </li>

                        ))}

                    </ul >
                </div>
                <p className="text-center">© 2023 Your Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
