"use client";
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
const products = [
  { name: 'profile', description: 'Get a better understanding of your traffic',href: '/profile', icon: ChartPieIcon },
  { name: 'task', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
 ];
const callsToAction = [
  { name: 'Contact manager', href: '#', icon: PhoneIcon },
];
import Link from 'next/link';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router=useRouter()
  
  return (
    <header className="bg-black">
      <nav className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="  relative flex lg:flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className=" sr-only">Your Company</span>
            <img className=" h-8 w-auto"
                src="logo.png"
                alt="your company"
            />
          </Link>
        </div>
        <div className=" flex lg:hidden">
          <button
          
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <Popover.Group className="   hidden lg:flex lg:flex-1 gap-x-12 -b-1.5 px-28 ">
        
        <Link href="/add" className=" relative right-4 text-sm font-semibold leading-6  hover:text-green-200 hover:underline">
           ADD
          </Link>
          <Link href="/sub" className=" relative right-4 text-sm font-semibold leading-6 hover:text-green-200 hover:underline">
           SUB
          </Link>
           
        </Popover.Group>
        
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-black sr-only">Your Company</span>
              <img
                className=" h-8 w-auto"
                src=""
                alt="your company"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              
              <div className="py-6">
              <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ADD
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  SUB
                </Link>
                
              
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
