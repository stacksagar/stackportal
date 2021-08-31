import { ElementRef, useEffect, useRef, useState } from 'react';
import StackTyping from 'stackportal/StackTyping';
interface effectButtonTypes {
  className?: string;
  children?: any;
  onClick?: any;
}
export default function EffectButton({
  className,
  children,
  onClick,
  ...others
}: effectButtonTypes) {
  const [isEffect, setIsEffect] = useState<boolean>(true);
  const textElement = useRef<ElementRef<'button'>>();
  const effectElement = useRef<ElementRef<'span'>>();
  const [effectPosition, setEffectPosition] = useState<{
    x: number | string;
    y: number | string;
  }>({ x: '97%', y: '35%' });

  useEffect(() => {
    textElement.current.addEventListener('mousemove', (e) => {
      setIsEffect(true);
      if (setIsEffect) {
        setEffectPosition({
          x: (e.offsetX / textElement.current.clientWidth) * 100 + '%',
          y: (e.offsetY / textElement.current.clientHeight) * 100 + '%',
        });
      }
    });
    textElement.current.addEventListener('mouseleave', () => {
      setIsEffect(false);
    });
  }, []);

  return (
    <div
      onClick={onClick}
      className={`${className} ${
        className?.includes('bg') ? '' : 'bg-pink-500'
      } relative w-32 h-9 z-50 text-white rounded`}
    >
      <button
        ref={textElement}
        className="absolute focus:ring z-50 rounded inset-0 w-full flex items-center justify-center h-full"
      >
        {children}
      </button>

      <span
        ref={effectElement}
        style={{
          top: `calc(${effectPosition.y} - ${
            effectElement?.current?.clientHeight / 2 + 'px'
          })`,
          left: `calc(${effectPosition.x} - ${
            effectElement?.current?.clientWidth / 2 + 'px'
          })`,
        }}
        className={`${
          isEffect ? 'opacity-100' : 'opacity-0'
        } block absolute w-3 h-3 animate-ping z-10 bg-white border-gray-300 ring-gray-400 ring-8 rounded-full border-4`}
      />
    </div>
  );
}
