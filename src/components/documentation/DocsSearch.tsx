import Link from 'next/link';
import React, { ElementRef, useEffect, useRef, useState } from 'react';
import StackTyping from 'stackportal/StackTyping';

export default function DocsSearch({ allDocsKeys }) {
  const [searchVal, setSearchVal] = useState<string>('');
  const [allkeys, setAllKeys] = useState<any[] | any>([]);
  const [isFocus, setIsFocus] = useState(false);
  const searchRef = useRef<ElementRef<'input'>>();
  useEffect(() => {
    if (searchVal) {
      setAllKeys((_) => {
        return allDocsKeys.filter((doc) => {
          return doc.toLowerCase().includes(searchVal.toLowerCase());
        });
      });
    } else {
      setAllKeys([]);
    }
  }, [searchVal]);
  return (
    <div className="w-full px-5 flex flex-col items-center justify-center">
      <div className="relative">
        <div
          onClick={() => searchRef.current.focus()}
          className={`absolute text-sm ${
            isFocus || searchVal ? 'hidden' : 'flex'
          } space-x-1 items-center cursor-pointer justify-center inset-y-0 left-5 my-auto `}
        >
          <span>Search</span>
          <StackTyping
            properties={{
              sentences: [
                ' Templates Name',
                ' Components Name',
                ' Packages Name',
              ],
              hideStars: true,
              hideExpand: true,
            }}
          />
        </div>
        <input
          ref={searchRef}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          type="search"
          className="rounded w-full screen_400:w-pixel_375 bg-white dark:bg-black dark:bg-opacity-50 outline-none px-5 py-2 ring-1 focus:ring shadow-lg focus:shadow-xl "
        />
      </div>

      {allkeys.length ? (
        <div
          className={`mt-10 w-full lg:w-8/12 border border-gray-500 border-opacity-40 rounded flex flex-col space-y-5 p-10`}
        >
          {allkeys.length &&
            allkeys.map((key, i) => (
              <React.Fragment key={i}>
                <Link href={`/docs/${key}`}>
                  <p className="cursor-pointer hover:underline text-center text-blue-400 tracking-wide">
                    {key}
                  </p>
                </Link>
              </React.Fragment>
            ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
