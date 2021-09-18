import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";

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
    doc_center_ref.current.addEventListener("scroll", () => {
      setScrollTop(doc_center_ref.current.scrollTop);
    });

    return () => {
      setIsMount((prev) => !prev);
    };
  }, []);

  return (
    <div className="border-b border-t py-12 w-full border-gray-500 border-opacity-30 flex flex-col justify-center items-center">
      <div className="flex justify-center space-x-3 w-32">
        <button
          onClick={() =>
            setScrollTop(
              (prev) => prev - (doc_center_ref.current.clientHeight - 100)
            )
          }
        >
          <ChevronUpIcon className="h-6 text-gray-400" />
        </button>
        <span>Screen</span>
        <button>
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

      <div className="flex justify-center space-x-3 w-32  my-5">
        <button
          onClick={() => {
            setScrollTop(0);
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

      <div className="flex justify-center space-x-3 w-32">
        <button onClick={() => playPause()}>
          {isMount ? (
            <PauseIcon className="w-6 text-gray-400" />
          ) : (
            <PlayIcon className="w-6 text-gray-400" />
          )}
        </button>
        <span>Auto Scroll</span>
      </div>
    </div>
  );
}
