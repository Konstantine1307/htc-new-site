
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Productions", href: "/productions", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-brand-gradient">
      {({ open }) => (
        <>
          <div className="md:flex md:justify-center px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-7 w-7" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-7 w-7" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-16 w-auto rounded-full"
                    src="/htclogo1.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-20 w-auto"
                    src="/htclogo1.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6 pt-4 md:pl-20">
                  <div className="flex space-x-1 md:space-x-2 ">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-100  hover:text-white active:bg-prima duration-100 hover:scale-105 hover:bg-gray-800 ",
                            "px-3 py-2 rounded-md text-base font-mono font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                          <div className="mx-2 border border-b-prima border-x-0 border-t-0"></div>
                        </a>
                      </Link>
                    ))}
                    <Link href="#">
                      <Menu as="div" className="pl-3 pt-2 z-10">
                        <Menu.Button className="text-gray-100 hover:bg-gray-700 hover:text-white hover:scale-105 text-base font-mono font-medium ">
                          <span className="sr-only">Open user menu</span>
                          Policies
                        </Menu.Button>
                        <div className="mx-2 border border-b-prima border-x-0 border-t-0"></div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg py-1 bg-brandBlue ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/about/#mission">
                                  <a
                                    className={classNames(
                                      active ? "bg-gray-700" : "",
                                      "block px-4 py-2 text-sm text-white"
                                    )}
                                  >
                                    Mission Statement
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/about/#child-policy">
                                  <a
                                    className={classNames(
                                      active ? "bg-gray-700" : "",
                                      "block px-4 py-2 text-sm text-white"
                                    )}
                                  >
                                    Child Policy
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {/* Profile dropdown */}
              {/* <Menu as="div" className="relative z-10">
                <div>
                  <Menu.Button className="text-gray-300 hover:bg-gray-700 hover:text-white duration-75 px-3 py-2 text-sm font-mono font-medium border border-b-prima border-t-0 border-x-0 rounded-full ">
                    <span className="sr-only">Open user menu</span>
                    <p>
                      Mission &amp;
                      <br />
                      Policies
                    </p>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute left-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-brandBlue ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/about/#mission">
                          <a
                            className={classNames(
                              active ? "bg-gray-700" : "",
                              "block px-4 py-2 text-base text-white"
                            )}
                          >
                            Mission Statement
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/about/#child-policy">
                          <a
                            className={classNames(
                              active ? "bg-gray-700" : "",
                              "block px-4 py-2 text-base text-white"
                            )}
                          >
                            Child Policy
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
