import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const navigationLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
    return (
        <Disclosure as="nav" className="fixed top-0 left-0 z-50 w-full bg-primary-black bg-opacity-70">
            {({ open }) => (
                <>
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex-shrink-0">
                                <span className="text-lg font-semibold text-white">Logo</span>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex space-x-4">
                                    {navigationLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex -mr-2 md:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                                    className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
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
