import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import docs_data from 'src/data/docs_data';
import { docsType } from 'types/docsType';    
import DocsSearch from 'components/documentation/DocsSearch';

function SingleColumn({ title, keys, Icon }) {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div
      className={`col-span-12 md:col-span-6 lg:col-span-4 border border-gray-500 border-opacity-10 rounded p-8 flex flex-col items-center justify-start`}
    >
      <div className="flex items-center justify-center">
        {/* Icon Div */}
        <div className="w-12 flex items-start justify-center h-full">
          <Icon className="w-9 text-blue-400" />
        </div>

        {/* Text Div */}
        <div>
          <h3 className="text-base ">{title}</h3>
          <button
            onClick={() => setIsExpand((prev) => !prev)}
            className="text-sm underline"
          >
            Expand All {isExpand ? '-' : '+'}
          </button>
        </div>
      </div>

      <div
        className={`${
          !isExpand ? 'opacity-0 hidden' : 'opacity-100 flex'
        } pt-7 flex-col space-y-3 items-center justify-center`}
      >
        {typeof keys == 'object' &&
          keys?.map((key) => (
            <p key={key} className="text-blue-400 underline cursor-pointer">
              <Link href={`/docs/${key}`}>{key}</Link>
            </p>
          ))}
      </div>
    </div>
  );
}

export default function docs() {
  const [currDocsData, setCurrDocsData] = useState<docsType>();
  const [allDocsKeys, setAllDocsKeys] = useState<string[] | any[]>([]);
  useEffect(() => {
    setCurrDocsData(docs_data);
    Object.entries(docs_data)?.map(([key, obj]) => {
      setAllDocsKeys((prev) => {
        return [...prev, ...obj.keys];
      });
    });
  }, []);

  return (
    <section className="py-20">
      <DocsSearch allDocsKeys={allDocsKeys} />

      <div className="responsive grid grid-cols-12 pt-20">
        {typeof currDocsData == 'object' &&
          Object.entries(currDocsData)?.map(([key, obj], i) => {
            return (
              <SingleColumn
                title={obj.title}
                Icon={obj.Icon}
                key={key}
                keys={obj.keys}
              />
            );
          })}
      </div>
    </section>
  );
}
