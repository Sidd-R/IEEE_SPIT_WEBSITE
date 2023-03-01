import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'Events', href: 'events', current: false },
    { name: 'Team', href: 'team', current: false },
    // { name: 'Calendar', href: '#', current: false },
  ])
  const navigation1 = [
    { name: 'Home', href: '/', current: true },
    { name: 'Events', href: 'events', current: false },
    { name: 'Team', href: 'team', current: false },
    // { name: 'Calendar', href: '#', current: false },
  ]

  const falsify = (i) => {
    navigation1.forEach(e => e.current = false)
    navigation1.forEach(e => {if(e.name === i) e.current = true})
    console.log("hello");
    setNavigation(null);
    setNavigation(navigation1);
  } 

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={require("../images/ieee_logo.png")}
                    alt="IEEE SPIT LOGO"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={require("../images/ieee_logo.png")}
                    alt="IEEE SPIT LOGO"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  {navigation?<div className="flex space-x-4 " >
                    {navigation.map((item) => (
                      <Link onClick={() => {falsify(item.name)}}
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>:null}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {navigation?<div className="space-y-1 px-2 pt-2 pb-3 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <div to={item.href} onClick={() => {falsify(item.name)}}>
                  {item.name}
                  </div>
                </Disclosure.Button>
              ))}
            </div>:null}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
