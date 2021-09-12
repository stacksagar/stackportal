import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import { ElementRef, useEffect, useRef, useState } from "react";

export default function ScrollHandler({ doc_center_ref }) {
  const [scrollTop, setScrollTop] = useState<any>(0);
  const [isMount, setIsMount] = useState<any>(false);

  let scrollInterval: any = useRef();

  const handleScrollTop = () => {
    if (!isMount)
      scrollInterval.current = setInterval(() => {
        setScrollTop((prev) => {
          if (prev + 500 < doc_center_ref.current.scrollHeight) {
            return doc_center_ref.current.scrollTop + 10;
          } else {
            return 0;
          }
        });
      }, 100);
  };

  useEffect(() => {
    doc_center_ref.current.scrollTop = scrollTop;
  }, [scrollTop]);

  const playPause = () => {
    if (!isMount) {
      handleScrollTop();
    } else {
      clearInterval(scrollInterval.current);
    }
    setIsMount((prev) => !prev);
  };

  useEffect(() => {
    return () => {
      setIsMount((prev) => !prev);
    };
  }, []);

  return (
    <div className="mb-10">
      <div className="flex justify-start space-x-3 items-center">
        <button
          disabled={isMount}
          onClick={() =>
            setScrollTop(
              (prev) => prev - (doc_center_ref.current.clientHeight - 100)
            )
          }
        >
          <ChevronUpIcon className="h-6 text-gray-400" />
        </button>
        <span>Screen</span>
        <button disabled={isMount}>
          <ChevronDownIcon
            className="h-6 text-gray-400"
            onClick={() =>
              setScrollTop(
                (prev) => prev + (doc_center_ref.current.clientHeight - 100)
              )
            }
          />
        </button>
      </div>

      <div className="flex justify-start space-x-3 items-center my-5">
        <button onClick={() => playPause()}>
          {isMount ? (
            <PauseIcon className="w-6 text-gray-400" />
          ) : (
            <PlayIcon className="w-6 text-gray-400" />
          )}
        </button>
        <span>Auto Scroll</span>
      </div>

      <div className="flex justify-start space-x-3 items-center">
        <button
          onClick={() => {
            doc_center_ref.current.scrollTop = 0;
          }}
        >
          <ArrowCircleUpIcon className="h-6 text-gray-400" />
        </button>
        <span>Go To</span>

        <button
          onClick={() => setScrollTop(doc_center_ref.current.scrollHeight)}
        >
          <ArrowCircleDownIcon className="h-6 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
