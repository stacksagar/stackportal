import { useEffect, useState } from 'react';

export default function FontsizeHandler() {
  const [fontsize, setFontsize] = useState<any>(16);

  useEffect(() => {
    const all_article_read_content = document.querySelectorAll(
      '.article_read_content'
    );
    all_article_read_content.forEach((ele: any) => {
      ele.style.fontSize = fontsize + 'px';
    });
  }, [fontsize]);

  return (
    <div>
      <div className="flex items-center w-full space-x-2 mb-2">
        <h4 className="inline-block text-xs font-semibold">Font Size</h4>
        <div className="flex">
          <input
            className="h-6 w-12 outline-none rounded-l-sm text-center ring-1 bg-transparent"
            value={fontsize}
            onChange={(e) => setFontsize(e.target.value)}
            type="number"
          />
          <span className="h-6 px-2 rounded-r-sm inline-block bg-gray-500 opacity-75 text-white">
            px
          </span>
        </div>
      </div>
      <div className="flex items-center justify-around mb-10 rounded bg-gray-700 text-white">
        <button
          onClick={() => setFontsize((prev) => Number(prev) - 1)}
          className="focus:ring w-full p-1"
        >
          A-
        </button>
        <button
          onClick={() => setFontsize(16)}
          className="focus:ring w-full p-1 border-l border-r text-sm border-gray-500"
        >
          Default
        </button>
        <button
          onClick={() => setFontsize((prev) => Number(prev) + 1)}
          className="focus:ring w-full p-1"
        >
          A+
        </button>
      </div>
    </div>
  );
}
