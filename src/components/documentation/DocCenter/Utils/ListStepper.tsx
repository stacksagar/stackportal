import { FolderIcon } from "@heroicons/react/solid";
export const List = ({
  count,
  isLast,
  children,
}: {
  count: number | string;
  isLast?: boolean;
  children: any;
}) => (
  <>
    <li className="flex items-center text-xs">
      <small className="w-5 h-5 text-xs font-ombr mr-2 bg-black text-white dark:bg-white dark:text-gray-600 ring rounded-full inline-flex items-center justify-center">
        {count}
      </small>
      {children}
    </li>
    {isLast ? null : <div className="w-0.5 h-4 ml-3 bg-gray-500" />}
  </>
); 

export default function ListStepper({ children }) {
  return (
    <ul className="border ring-1 rounded p-8 flex flex-col">{children}</ul>
  );
}
