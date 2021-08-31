import EffectButton from 'components/global/utils/EffectButton';
import { ElementRef, useEffect, useRef, useState } from 'react';
import StackTyping from 'stackportal/StackTyping';
import StackVivus from 'stackportal/StackVivus';

export default function HomeSection() {
 
  const [insetSvg, setInsertSvg] = useState(true);
  const homebag_ref = useRef<ElementRef<'div'>>();

  const [radius, setRadius] = useState({
    a: '80%',
    b: ' 30%',
    c: ' 80%',
    d: '30%',
  });

  useEffect(() => {
    if (
      homebag_ref?.current.classList.contains('homebag') &&
      insetSvg &&
      typeof homebag_ref.current == 'object' &&
      homebag_ref.current
    ) {
      StackVivus('homebag', { duration: 150, file: '/svg/s_style.svg' }, () => {
        setInsertSvg(false);
        homebag_ref.current.innerHTML = '';
        StackVivus(
          'homebag',
          { duration: 100, file: '/svg/main_s_style.svg' },
          () => {
            homebag_ref.current.classList.add('opacity-100');
          }
        );
      });
    }

    return () => {
      setInsertSvg(false);
    };
  }, []);

  let topPercen = 20;

  const tailwindcss = {
    smallCategory:
      'inline-block m-1 px-2 py-0.5 rounded font-ombr text-white shadow-lg',
  };

  return (
    <section className="relative z-10 w-full h-screen_minus_header flex flex-col items-center justify-end pb-9 text-center">
      <div ref={homebag_ref} className="homebag w-32 h-32" id="homebag"></div>

      <h1 className="text-6xl font-ombr text-black dark:text-yellow-400">
        Frontend Hidden Beautifier
      </h1>

      {Array(8)
        .fill('')
        .map((_, i) => {
          topPercen = topPercen + 2;
          return (
            <div
              key={i}
              style={{
                top: `${topPercen}%`,
                borderRadius: `${radius.a} ${radius.b} ${radius.c} ${radius.d}`,
              }}
              className="fixed right-32 w-32 bg-gray-500 bg-opacity-5 h-20 flex flex-col items-center justify-center space-y-5 shadow"
            />
          );
        })}

      <div
        style={{
          borderRadius: `${radius.a} ${radius.b} ${radius.c} ${radius.d}`,
        }}
        className="px-32 py-8 flex flex-col items-center justify-center space-y-5 bg-gradient-to-r from-white to-gray-100 dark:to-gray-700 dark:from-gray-800"
      >
        <div className="font-ombr">
          <div className={`${tailwindcss.smallCategory} bg-green-500`}>
            <StackTyping
              properties={{
                typingSentences: ['Templates'],
                timing: {
                  write: 100,
                  iterationCount: 1,
                },
                removeMinWidth: true,
                setMinWidth: '2px',
              }}
            />
          </div>

          <div className={`${tailwindcss.smallCategory} bg-green-600`}>
            <StackTyping
              properties={{
                typingSentences: ['Component & UI'],
                timing: {
                  write: 100,
                  delay: 900,
                  iterationCount: 1,
                },
                removeMinWidth: true,
                setMinWidth: '2px',
              }}
            />
          </div>

          <div className={`${tailwindcss.smallCategory} bg-yellow-600`}>
            <StackTyping
              properties={{
                typingSentences: ['Scripts'],
                timing: {
                  write: 100,
                  delay: 2400,
                  iterationCount: 1,
                },
                removeMinWidth: true,
                setMinWidth: '2px',
              }}
            />
          </div>

          <div className={`${tailwindcss.smallCategory} bg-pink-500`}>
            <StackTyping
              properties={{
                typingSentences: ['Plugins'],
                timing: {
                  write: 100,
                  delay: 3100,
                  iterationCount: 1,
                },
                removeMinWidth: true,
                setMinWidth: '2px',
              }}
            />
          </div>

          <div className={`${tailwindcss.smallCategory} bg-pink-600`}>
            <StackTyping
              properties={{
                typingSentences: ['Packages'],
                timing: {
                  write: 100,
                  delay: 3800,
                  iterationCount: 1,
                },
                removeMinWidth: true,
                setMinWidth: '2px',
              }}
            />
          </div>
        </div>

        <EffectButton className=" shadow-lg">
          <StackTyping
            properties={{
              typingSentences: [`Let's Explore`, `Let's See`],
              removeMinWidth: true,
              setMinWidth: '40%',
              hideStars: true,
              timing: {
                delay: 4400,
              },
            }}
          />
        </EffectButton>
      </div>
    </section>
  );
}
