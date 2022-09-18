import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Disclosure } from "@headlessui/react";
import { CgMenu, CgClose } from "react-icons/cg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbars() {
  const [stickyClass, setStickyClass] = useState("hidden");
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "Home", current: true },
    { name: "About", href: "About", current: false },
    { name: "Skills", href: "Skills", current: false },
    { name: "Experiences", href: "Experiences", current: false },
    { name: "Projects", href: "Projects", current: false },
    { name: "Contact", href: "Contact", current: false },
  ]);

  useEffect(() => {
    navigation[0].current
      ? setStickyClass("hidden")
      : setStickyClass("bg-gray-800 fixed w-full z-20 top-0");
  }, [navigation]);

  const handleSetActive = (to) => {
    const newNav = [
      { name: "Home", href: "Home", current: false },
      { name: "About", href: "About", current: false },
      { name: "Skills", href: "Skills", current: false },
      { name: "Experiences", href: "Experiences", current: false },
      { name: "Projects", href: "Projects", current: false },
      { name: "Contact", href: "Contact", current: false },
    ];
    let index = newNav.findIndex((el) => el.name === to);
    newNav[index].current = true;
    setNavigation(newNav);
  };

  return (
    <Disclosure as="nav" className={stickyClass}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-evenly h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CgClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <CgMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex justify-evenly">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-2xl px-3 block lg:hidden h-8 w-auto">
                    Techno Aayush
                  </span>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-md font-medium"
                        )}
                        activeClass="active"
                        to={item.href}
                        spy={true}
                        smooth={true}
                        isDynamic={true}
                        offset={-20}
                        duration={500}
                        onSetActive={handleSetActive}
                      >
                        {item.name}
                      </Link>
                    ))}
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
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  <Link
                    activeClass="active"
                    to={item.href}
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={-20}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}