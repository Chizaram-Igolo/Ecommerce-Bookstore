import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, ReactElement } from "react";

const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
  },
];

export default function SelectMenu({
  selected,
}: {
  selected: string | ReactElement;
}) {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center 
                text-base font-medium relative
                hover:text-opacity-100 focus:outline-none focus-visible:ring-2 
                focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="pr-1">{selected}</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  h-5 w-5 text-gray-400 transition duration-150 
                  ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-50 mt-1">
                <div
                  className="w-[24em] overflow-hidden shadow-md 
              ring-1 ring-black ring-opacity-5"
                >
                  <div className="relative grid gap-8 bg-white p-7">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          {/* <item.icon aria-hidden="true" /> */}
                        </div>
                        <div className="ml-4">
                          <p className="mt-0 text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-0 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50">
                    <a
                      href="##"
                      className="flow-root px-6 py-6 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}
