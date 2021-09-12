import { RootContext } from 'context/rootContext';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  BookOpenIcon,
  IdentificationIcon,
  MoonIcon,
  TemplateIcon,
} from '@heroicons/react/solid';
import { SunIcon } from '@heroicons/react/outline';
import Menu from './Menu';
import rootContextTypes from 'context/types/rootContextTypes';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const { state, dispatch } = useContext<rootContextTypes>(RootContext);
  const [renderClick, setRenderClick] = useState(true);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [clickWindow, setClickWindow] = useState(false);

  useEffect(() => {
    if (renderClick) {
      document.documentElement.addEventListener('click', (e) => {
        setWindowPosition(() => {
          return {
            x: (e.pageX / document.documentElement.clientWidth) * 100,
            y: (e.pageY / window.document.documentElement.clientHeight) * 100,
          };
        });
      });
    }
    setRenderClick(false);
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setClickWindow(true);
  //   }, 100);
  //   setTimeout(() => {
  //     setClickWindow(false);
  //   }, 300);
  // }, [windowPosition]);

  useEffect(() => {
    dispatch({ type: 'switch_theme', payload: 'dark' });
  }, []);

  const toggleTheme = () => {
    dispatch({
      type: 'switch_theme',
      payload: state.thememode != 'dark' ? 'dark' : 'light',
    });
  };

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <header className={`header`}>
      <div className="header_container responsive h-full">
        <div className="flex items-center space-x-12">
          <nav className="flex space-x-5 list-none items-center">
            <Link href="/">
              <img
                className="w-10 h-10 cursor-pointer"
                src="/stackportal.png"
                alt=""
              />
            </Link>

            <p className={`header_nav_p`}>
              <BookOpenIcon className="h-4" />
              <Link href="/docs"> Documentations </Link>
            </p>

            <button className="hidden screen_900:block font-kurale">
              <Link href="/"> Login </Link>
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-12">
          {/* Toggle Theme */}
          <div onClick={toggleTheme} className={`header_toggle_theme`}>
            <SunIcon className="text-white w-5" />
            <MoonIcon className="text-white w-5 -mt-0.5" />

            <div
              className={`absolute ${
                state.thememode == 'dark' ? 'left-6' : 'left-0'
              } header_toggle_themeCircle`}
            />
          </div>

          {/* Menu Toggle */}
          <div onClick={toggleMenu} className={`header_menu_toggle`}>
            {Array(8)
              .fill('')
              .map((_, i) => (
                <span
                  key={i}
                  className={`${
                    openMenu ? 'scale-0' : 'scale-100'
                  } transform header_menu_toggle_span`}
                />
              ))}

            <span
              className={`transform ${
                openMenu ? 'scale-x-125' : 'scale-x-0'
              } rotate-45 header_menu_toggle_spanTimes`}
            />
            <span
              className={`transform ${
                openMenu ? 'scale-x-125' : 'scale-x-0'
              } -rotate-45 header_menu_toggle_spanTimes`}
            />
          </div>
        </div>

        {/* Hidden Menu */}
        <Menu openMenu={openMenu} toggleMenu={toggleMenu} />

        {/* click anywhere and fade animation circle */}
        {/* <div
          style={{ left: `${windowPosition.x}%`, top: `${windowPosition.y}%` }}
          className={`${clickWindow ? 'block' : 'block'} window_click_effect `}
        /> */}
      </div>
    </header>
  );
}
