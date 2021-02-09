import { Logo } from '../SVGS/SVGS'
import ActiveLink from '../components/ActiveLink';
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Nav() {

    const [isTop, setScroll] = useState(true);
    const [mobileToggle, handleMobileToggle] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY < 80)
        })
    })

    return (
        <nav id="header" className={`fixed w-full z-30 top-0 text-white ${isTop ? 'text-white' : 'bg-white text-blue-600 shadow-2xl'}`}>
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <Link href="/">
                        <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                            <Logo cls='h-10 inline' />
                        </a>
                    </Link>
                </div>
                <div className="block lg:hidden pr-4">
                    <button onClick={() => handleMobileToggle(mobileToggle => !mobileToggle)} id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 ${mobileToggle ? 'flex' : 'hidden'}`}
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <ActiveLink href="/">Home</ActiveLink>
                        </li>
                        <li className="mr-3">
                            <ActiveLink href="/blog">Blog</ActiveLink>
                        </li>
                        <li className="mr-3">
                            <ActiveLink href="/portfolio">Portfolio</ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    )
}