import { PlayIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import MenuItem, { MenuItemTitles } from './MenuItem';
import Link from 'next/link';

export default function Menu({ openMenu, toggleMenu }) {
  const [moreIsOpen, setMoreIsOpen] = useState(false);

  return (
    <div
      style={{ top: '60px' }}
      className={`absolute w-full inset-x-0 flex screen_900:justify-center justify-end ${
        openMenu ? 'h-screen_minus_header' : 'h-0'
      }`}
    >
      <div
        className={`${
          openMenu ? 'scale-y-100' : 'scale-y-0'
        } origin-top transform absolute z-50 bg-gradient-to-b dark:from-dark from-white dark:to-dark to-gray-100  overflow-y-auto max-h-screen_minus_header screen_900:h-64 screen_1100:h-52 w-full screen_500:w-pixel_450 screen_900:w-pixel_900 screen_1100:w-pixel_1100 flex flex-col justify-between items-center`}
      >
        <div className="w-full flex flex-col space-y-3 px-6 pt-6 pb-1 screen_900:hidden text-lg">
          <Link href="/">
            <p className="cursor-pointer bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-10 p-3">
              Components
            </p>
          </Link>

          <Link href="/">
            <p className="cursor-pointer bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-10 p-3">
              Templates
            </p>
          </Link>

          <Link href="/">
            <p className="cursor-pointer bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-10 p-3">
              Go Premium
            </p>
          </Link>

          <Link href="/">
            <p className="cursor-pointer bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-10 p-3">
              Documentations
            </p>
          </Link>

          <div
            onClick={() => setMoreIsOpen((prev) => !prev)}
            className="bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-10 p-3 flex justify-between items-center  cursor-pointer "
          >
            <span>More</span>
            <button
              className={`border-4 border-transparent border-opacity-0 dark:border-opacity-0 border-black dark:border-white rounded-full transform ${
                moreIsOpen
                  ? 'rotate-90 scale-125 border-opacity-50 dark:border-opacity-50'
                  : 'hover:rotate-90 hover:scale-125 hover:border-opacity-40'
              }`}
            >
              <PlayIcon className="h-6 " />
            </button>
          </div>
        </div>

        <div
          className={`origin-top transform w-full screen_950:to-pink-600 ${
            moreIsOpen
              ? 'scale-y-100 opacity-100 z-50'
              : 'opacity-0 scale-y-0 absolute top-pixel_450 left-0 screen_900:scale-y-100 screen_900:opacity-100 screen_900:top-0'
          } flex flex-col screen_900:grid grid-cols-12 px-3 screen_900:p-4 grid-rows-6`}
        >
          {Object.entries(MenuItemTitles).map(([key, obj], i) => {
            const { Icon, desc, external_link } = obj;
            return (
              <MenuItem
                i={i}
                key={i}
                title={key}
                Icon={Icon}
                desc={desc}
                externalLink={external_link || false}
              />
            );
          })}
        </div>

        <div
          className={`w-full screen_900:hidden px-6 pb-6 space-x-3 flex justify-between items-center ${
            moreIsOpen ? 'pt-6' : 'pt-2'
          }`}
        >
          <button className="text-gray-200 w-full p-3 text-xl focus:ring rounded bg-gradient-to-r to-blue-400 from-blue-500  ">
            <Link href="/login">Login</Link>
          </button>
          <button className="text-gray-200 w-full p-3 text-xl focus:ring rounded bg-gradient-to-r from-blue-400 to-blue-500">
            <Link href="/signup">Signup</Link>
          </button>
        </div>
      </div>

      <div
        onClick={toggleMenu}
        className={`${
          openMenu ? 'block' : 'hidden'
        } absolute h-screen_minus_header inset-0 w-full bg-black bg-opacity-50 z-10`}
      ></div>
    </div>
  );
}
