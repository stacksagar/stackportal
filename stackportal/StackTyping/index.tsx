import { ElementRef, useEffect, useRef } from 'react';
import AutoWrite from 'stackportal/StackTyping/AutoWrite';

interface StackTypingTypes {
  className?: string;
  style?: any;
  properties: {
    sentences: object[] | string[];
    timing?: {
      write?: number;
      remove?: number;
      wait?: number;
      delay?: number;
      iterationCount?: number;
    };

    gradient?: {
      withColorsName?: { color1: string; color2: string };
      withClass?: string;
    };
    hideStars?: boolean;
    hideExpand?: boolean;
    removeMinWidth?: boolean;
    setMinWidth?: string;
  };
}

export default function StackTyping({
  className,
  style,
  properties,
  ...allProps
}: StackTypingTypes) {
  const autoTypingRef = useRef<ElementRef<'div'>>();
  const { timing } = properties;
  useEffect(() => {
    const newTyping = new AutoWrite(
      autoTypingRef.current,
      [...properties.sentences],
      timing?.write,
      timing?.remove,
      timing?.wait,
      timing?.iterationCount,
      properties?.hideExpand,
      properties?.hideStars
    );
    if (timing?.delay) {
      setTimeout(() => {
        newTyping.typing();
      }, timing?.delay);
    } else {
      newTyping.typing();
    }
  }, []);

  return (
    <div
      style={{
        textAlign: 'left',
        minWidth: `${
          properties?.removeMinWidth
            ? properties?.setMinWidth || '1px'
            : '280px'
        }`,
        ...style,
      }}
      className={className}
      {...allProps}
    >
      {typeof properties?.gradient?.withColorsName == 'object' && (
        <div
          ref={autoTypingRef}
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            backgroundImage: `linear-gradient(180deg, ${properties?.gradient?.withColorsName.color1}, ${properties?.gradient?.withColorsName.color2})`,
          }}
        ></div>
      )}

      {typeof properties?.gradient?.withClass == 'string' && (
        <div
          ref={autoTypingRef}
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
          }}
          className={properties?.gradient?.withClass}
        ></div>
      )}

      {typeof properties?.gradient?.withClass != 'string' &&
        typeof properties?.gradient?.withColorsName != 'object' && (
          <div ref={autoTypingRef}></div>
        )}
    </div>
  );
}
