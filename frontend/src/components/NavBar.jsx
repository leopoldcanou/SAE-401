import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import Logo from '/img/anytime.png';
import { Link } from 'react-router-dom';

const navigationLinks = [
    { name: 'Movies', href: '/movies' },
    { name: 'Search', href: '/search' },
    { name: 'Profile', href: '/profile' },
];

const Navbar = () => {
    return (
        <Disclosure as="nav" className="fixed top-0 left-0 z-50 w-full bg-primary-black bg-opacity-70">
            {({ open }) => (
                <>
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div>
                                <Link to="/home">
                                    <img src={Logo} alt="Anytime Logo" className="align-middle w-36 aspect-auto" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex space-x-4">
                                    {navigationLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            className="px-3 py-2 text-sm font-medium rounded-md text-primary-foreground "
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex -mr-2 md:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:text-primary-foreground focus:outline-none">
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
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="block px-3 py-2 text-base font-medium text-right rounded-md text-primary-foreground hover:text-primary-foreground"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
