import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function ScaleSelector({ selectedScale, setSelectedScale }) {
  const [openScaleChange, setOpenScaleChange] = useState(false);
  const [allScales, setAllScales] = useState([
    '25%',
    '30%',
    '40%',
    '50%',
    '60%',
    '75%',
    '85%',
    '95%',
    '100%',
  ]);
  return (
    <div className="relative z-10">
      <button
        onClick={() => setOpenScaleChange((prev) => !prev)}
        className="w-20 py-1 ring-1 rounded flex justify-center space-x-3 items-center"
      >
        <span>{selectedScale}</span>
        {openScaleChange ? (
          <ChevronUpIcon className="w-4" />
        ) : (
          <ChevronDownIcon className="w-4" />
        )}
      </button>
      <div
        className={`transform origin-top ${
          openScaleChange ? 'opacity-100 scale-y-100' : 'scale-y-0 opacity-0'
        } w-20 bg-gray-100 dark:bg-gray-900 py-2 ring-1 flex flex-col space-y-2 absolute top-full inset-x-0 m-auto`}
      >
        {allScales.map((scale, i) => (
          <button
            key={i}
            onClick={() => setSelectedScale(scale)}
            className="cursor-pointer items-center flex space-x-2 pl-4"
          >
            <span
              className={`${
                selectedScale == scale ? 'bg-black dark:bg-white' : ''
              } ring w-2 h-2 block rounded-full`}
            />
            <span>{scale}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
