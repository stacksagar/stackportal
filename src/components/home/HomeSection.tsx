import { ExternalLinkIcon } from '@heroicons/react/solid';
import { HTMLIcon, ReactIcon } from 'components/svgs/HomepageSvgs';
import StackTyping from 'stackportal/StackTyping';
import HomeFeatureSection from './HomeFeatureSection';
import { useContext, useEffect, useRef, useState } from 'react';
import { RootContext } from 'context/rootContext';
import rootContextTypes from 'context/types/rootContextTypes';
import Link from 'next/link';

export default function HomeSection() {
  const [showText, setShowText] = useState<boolean>(false);
  const timeoutRef = useRef<any>();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };
  }, []);

  const { state } = useContext<rootContextTypes>(RootContext);

  return (
    <section className="bg-white dark:bg-dark relative overflow-hidden">
      <div className="responsive relative py-24">
        <div className="w-full screen_650:w-pixel_650 md:pr-10 py-4 relative z-20 overflow-hidden">
          <h1
            className="leading-4 tracking-tight text-blue-500 dark:text-blue-300"
            style={{ fontSize: '32px' }}
          >
            <StackTyping
              properties={{
                sentences: ['Frontend Hidden'],
                timing: {
                  write: 150,
                  iterationCount: 1,
                },
              }}
            />
          </h1>
          <h1
            style={{ WebkitTextFillColor: 'transparent' }}
            className={`${
              showText ? 'animate-focus-in-contract opacity-100' : 'opacity-0'
            } font-kurale text-6xl bg-clip-text bg-gradient-to-r from-yellow-600 dark:from-yellow-500 to-pink-500 tracking-tight -ml-1 pb-2`}
          >
            Beautifier
          </h1>

          <div className="flex items-center space-x-5 uppercase mt-4 mb-5">
            <p className="flex items-center space-x-1">
              <HTMLIcon /> <span>HTML</span>
            </p>
            <p className="flex items-center space-x-1">
              <ReactIcon /> <span>React</span>
            </p>
          </div>

          <p className="text-base text-gray-600 dark:text-gray-300 font-sans">
            Unlimited professionally designed, fully responsive, expertly
            crafted component examples you can drop into your Tailwind projects
            and customize to your heart’s content. Get started by checking out
            our free preview components, or browsing all of the examples in the
            categories you're most curious about.
          </p>

          <div className="flex space-x-4 mt-12">
            <Link href="/tailwind-components">
              <button className="focus:ring px-3 py-1 screen_295:py-2 screen_295:px-4 flex justify-between items-center bg-blue-700 dark:bg-gray-200 text-white dark:text-gray-900 rounded-lg group">
                Components
                <span className="opacity-0 w-0 group-hover:opacity-100 group-hover:px-2">
                  <ExternalLinkIcon className="w-3" />
                </span>
              </button>
            </Link>
            <Link href="/templates">
              <button className="focus:ring px-3 py-1 screen_295:py-2 screen_295:px-4 flex justify-between items-center bg-gray-500 dark:bg-gray-800 shadow  text-white rounded-lg group">
                Templates
                <span className="opacity-0 w-0 group-hover:opacity-100 group-hover:px-2">
                  <ExternalLinkIcon className="w-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute hidden md:block top-0 left-pixel_650 pt-5 pl-5 overflow-y-hidden h-pixel_650 w-pixel_375 md:w-pixel_750 screen_1000:w-pixel_650 screen_1100:w-pixel_850 screen_1200:w-pixel_1000 ">
          <div
            style={{
              background: `${
                state.thememode == 'dark'
                  ? 'linear-gradient(0deg,#151f33, #151f3399,transparent,transparent,transparent)'
                  : 'linear-gradient(0deg, #fff,  rgba(255, 255, 255, 0.68),#fff0,#fff0,#fff0)'
              }`,
            }}
            className="w-full h-pixel_650 z-10 absolute top-0 left-0"
          />

          <img
            src="/images/home-section/hero-bg.png"
            alt="components-ui"
            className="w-full object-cover object-left-top"
          />
        </div>
      </div>

      <HomeFeatureSection />
    </section>
  );
}
