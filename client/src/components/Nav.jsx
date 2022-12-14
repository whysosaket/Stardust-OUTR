import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import navigation24Regular from "@iconify/icons-fluent/navigation-24-regular";
import dismiss24Filled from "@iconify/icons-fluent/dismiss-24-filled";
import { navigation } from "../data";

export default function Nav() {
  return (
    <div className="max-w-7xl mx-auto">
      <Popover>
        <div className="py-4 px-4 sm:px-6 lg:px-8 md:py-8 lg:py-12">
          <nav
            className="flex items-center justify-between sm:h-10"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/">
                  <span className="sr-only">Stardust</span>
                  <img
                    className="h-12 lg:h-16 w-auto"
                    src='https://i.postimg.cc/4yn8CCnb/20221130-143509.png'
                    alt="Stardust OUTR"
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-neutral-800 hover:text-slate-400 hover:bg-slate-600 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    <Icon
                      icon={navigation24Regular}
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-neutral-800 hover:text-secondary"
                      : "font-medium text-neutral-600 hover:text-secondary"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        <Popover.Overlay className="fixed inset-0 z-10 backdrop-blur-md bg-black/10" />
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-slate-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-10 w-auto"
                    src='https://www.pngitem.com/pimgs/m/485-4852378_sample-logo-png-transparent-png.png'
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-slate-500 hover:text-slate-400 hover:bg-slate-600 focus:outline-none">
                    <span className="sr-only">Close main menu</span>
                    <Icon
                      icon={dismiss24Filled}
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Popover.Button
                    as={NavLink}
                    key={item.name}
                    to={item.to}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-secondary hover:bg-slate-600"
                  >
                    {item.name}
                  </Popover.Button>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
