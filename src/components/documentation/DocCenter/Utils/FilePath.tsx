import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

export default function FilePath({
  paths,
  not_root,
}: {
  paths: string[];
  not_root?: boolean;
}) {
  return (
    <>
      {not_root ? null : (
        <p className="flex">
          Flowing Path: From the root directory 👇</p>
      )}
      <div className="p-3 flex my-2 rounded border border-gray-500 border-opacity-30">
        {paths.map((path, i) => (
          <Fragment key={i}>
            <span className=" bg-gradient-to-r from-pink-500 to-pink-700 text-white px-2 py-0 rounded font-bold">
              {path}
            </span>
            {i == paths.length - 1 ? null : (
              <ChevronRightIcon className="w-5" />
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
}
