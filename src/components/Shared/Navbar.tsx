

import Image from 'next/image';
import React from 'react';
import icon1 from "../../../Public/Logo/Frame 7.png"
import icon2 from "../../../Public/Logo/Frame 6.png"
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <header className="p-2">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-teal-600" href="/">
                            <span className="sr-only">Home</span>
                            <Image
                                className=""
                                src={icon1}
                                alt="icon 1"
                                width={180}
                                height={38}
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                        Contact Us
                                    </Link>
                                </li>

                                
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">

                            <div className="hidden sm:flex">
                                <Link className="block text-teal-600" href="/">
                                    <span className="sr-only">Home</span>
                                    <Image
                                        className=""
                                        src={icon2}
                                        alt="icon 1"
                                        width={200}
                                        height={60}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
