import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { ConnectButton, ConnectMenu } from './'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Discord',
    href: 'https://discord.com/channels/954142017556979752/1011648759630930010',
  },
  { name: 'GitHub', href: 'https://github.com/lilnouns/lilnouns-bid' },
]

type Props = {}

export const Header = ({}: Props) => {
  return (
    <Popover>
      <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6">
        <nav
          className="tw-relative tw-flex tw-items-center tw-justify-between sm:tw-h-10 md:tw-justify-center"
          aria-label="Global"
        >
          <div className="tw-flex tw-flex-1 tw-items-center md:tw-absolute md:tw-inset-y-0 md:tw-left-0">
            <div className="tw-flex tw-w-full tw-items-center tw-justify-between md:tw-w-auto">
              <a href="#">
                <span className="tw-sr-only">Lil Nouns Helpers</span>
                {/*<img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-neutral-600.svg"
                    alt=""
                  />*/}
              </a>
              <div className="-tw-mr-2 tw-flex tw-items-center md:tw-hidden">
                <Popover.Button className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-gray-50 tw-p-2 tw-text-gray-400 hover:tw-bg-gray-100 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-neutral-500">
                  <span className="tw-sr-only">Open main menu</span>
                  <Bars3Icon className="tw-h-6 tw-w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="tw-hidden md:tw-flex md:tw-space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="tw-font-medium tw-text-gray-500 hover:tw-text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="tw-hidden md:tw-absolute md:tw-inset-y-0 md:tw-right-0 md:tw-flex md:tw-items-center md:tw-justify-end">
            <ConnectButton />
          </div>
        </nav>
      </div>

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
          className="tw-absolute tw-inset-x-0 tw-top-0 tw-z-10 tw-origin-top-right tw-transform tw-p-2 tw-transition md:tw-hidden"
        >
          <div className="tw-overflow-hidden tw-rounded-lg tw-bg-white tw-shadow-md tw-ring-1 tw-ring-black tw-ring-opacity-5">
            <div className="tw-flex tw-items-center tw-justify-between tw-px-5 tw-pt-4">
              {/*<div>
                  <img
                    className="tw-h-8 tw-w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-neutral-600.svg"
                    alt=""
                  />
                </div>*/}
              <div className="-tw-mr-2">
                <Popover.Button className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-white tw-p-2 tw-text-gray-400 hover:tw-bg-gray-100 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-neutral-500">
                  <span className="tw-sr-only">Close menu</span>
                  <XMarkIcon className="tw-h-6 tw-w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="tw-px-2 tw-pb-3 tw-pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-text-gray-700 hover:tw-bg-gray-50 hover:tw-text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <ConnectMenu />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
