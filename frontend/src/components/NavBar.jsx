import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import Logo from '/img/anytime.png';
 
const navigationLinks = [
    { name: 'Movies', href: '/movies' },
    { name: 'New', href: '/new' },

];

const Navbar = () => {
    return (
        <Disclosure as="nav" className="fixed top-0 left-0 z-50 w-full bg-primary-black bg-opacity-70">
            {({ open }) => (
                <>
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div>
                                <a href="/" >
                                    <img src={Logo} alt="Anytime Logo" className="align-middle w-36 aspect-auto" />
                                </a>

                            </div>
                            <div className="hidden md:block">
                                <div className="flex space-x-4">
                                    {navigationLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md "
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex -mr-2 md:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="absolute inset-x-0 z-50 bg-primary-black bg-opacity-70 md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigationLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 text-base font-medium text-right text-gray-300 rounded-md focus:ring-white hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
