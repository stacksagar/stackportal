import { useEffect, useRef, useState } from 'react';

export default function ResponsiveDisplay({
  width,
  height,
  selectedScale,
  rotate,
}) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [negativeMargin, setNegativeMargin] = useState(0);
  const loadedRef = useRef<any>();

  const makeNegativeMargin = (height, scale) => {
    const actualScale = Number(scale.slice(0, scale.length - 1));
    const outsideHeight = (height / 100) * actualScale;
    setNegativeMargin(height - outsideHeight);
  };

  useEffect(() => {
    if (rotate) {
      makeNegativeMargin(width, selectedScale);
    } else {
      makeNegativeMargin(height, selectedScale);
    }
  }, [width, height, selectedScale, negativeMargin, rotate]);

  useEffect(() => {
    loadedRef.current = setTimeout(() => {
      setIframeLoaded(true);
    }, 2200);

    return () => {
      clearTimeout(loadedRef.current);
      loadedRef.current = null;
    };
  }, []);

  return (
    <div className="bg-white overflow-x-hidden dark:bg-dark4 hidden screen_600:flex items-center justify-center p-3">
      <div className="inline-block mx-auto ">
        <div
          style={{
            width: `${rotate ? height : width}px`,
            height: `${rotate ? width : height}px`,
            transform: `scale(${selectedScale})`,
            transformOrigin: 'top center',
            marginBottom: `-${negativeMargin}px`,
          }}
          className={`bg-gradient-to-tr bg-gray-500 ${
            iframeLoaded
              ? 'animate-none from-gray-400'
              : 'animate-pulse from-gray-800 to-gray-700'
          } p-1 rounded-sm`}
        >
          <iframe
            className="w-full h-full"
            src="http://localhost:3000"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
