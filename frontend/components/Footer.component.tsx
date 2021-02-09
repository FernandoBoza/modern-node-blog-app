import { Logo } from '../SVGS/SVGS'

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-blue-600">
                        <Logo cls='h-32' />
                    </div>
                    <div className="flex-1">
                        <p className="uppercase font-bold text-pink-500 md:mb-6">Downloads</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase font-bold text-purple-500 md:mb-6">Social</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-purple-500">Facebook</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-purple-500">Linkedin</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-purple-500">Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="https://www.freepik.com/free-photos-vectors/background" className="text-gray-500">Background vector created by freepik - www.freepik.com</a>
        </footer>
    )
}