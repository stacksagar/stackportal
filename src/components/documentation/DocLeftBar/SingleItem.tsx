import {
  CheckCircleIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { useEffect } from "react";

export default function SingleItem({
  title,
  scrollWidth,
  index,
  doc_center_ref,
}) {
  useEffect(() => {}, []);

  const setScrolled = (index) => {
    const all_doc_article = document.querySelectorAll(".doc_article");
    let n = 0;
    all_doc_article.forEach((article, i) => {
      if (index > i) {
        n += article.clientHeight;
      }
    });
    doc_center_ref.current.scrollTop = n;
    console.log(n);
  };

  return (
    <div className="w-full text-sm text-center bg-gray-200 dark:bg-gray-800 rounded-sm mb-1">
      <button
        onClick={() => setScrolled(index)}
        className="z-10 w-full py-2 flex items-center justify-around relative overflow-hidden"
      >
        <span
          className={`${
            scrollWidth > 90 ? "bg-white" : "bg-transparent"
          } relative z-10 w-3 h-3 rounded-full border flex items-center justify-center`}
        >
          {scrollWidth > 90 && <CheckIcon className="w-2 text-black" />}
        </span>
        <span className="z-10 font-ombr ">{title}</span>
        <span className="z-10">+</span>
        <span
          style={{ width: `${scrollWidth > 0 ? `${scrollWidth}` : "0"}%` }}
          className="h-full absolute left-0 inset-y-0 m-auto dark:bg-gray-700 bg-gray-300 z-0"
        />
      </button>

      <div className="flex-col space-y-3 py-2 justify-start hidden">
        <button className="flex justify-start items-center pl-4">
          <ChevronRightIcon className="w-3 mr-2" />
          Page
        </button>
        <button className="flex justify-start items-center pl-4">
          <ChevronRightIcon className="w-3 mr-2" />
          Page
        </button>
        <button className="flex justify-start items-center pl-4">
          <ChevronRightIcon className="w-3 mr-2" />
          Page
        </button>
        <button className="flex justify-start items-center pl-4">
          <ChevronRightIcon className="w-3 mr-2" />
          Page
        </button>
      </div>
    </div>
  );
}
