import { ArrowRightIcon } from '@heroicons/react/solid';

export default function CustomWork() {
  return (
    <div className="relative border border-gray-500 rounded p-2 mx-5">
      <div className="text-xs font-semibold tracking-wide py-0.5 px-2 bg-gray-50 dark:bg-dark4  rounded absolute -top-3">
        <h1
          className="bg-clip-text bg-gradient-to-r from-green-500 dark:from-yellow-400 to-pink-500"
          style={{ WebkitTextFillColor: 'transparent' }}
        >
          NEED A CUSTOM WORK
        </h1>
      </div>
      <div className="rounded bg-gradient-to-r from-gray-50 to-gray-300 dark:from-dark4 dark:to-gray-800 p-1">
        <p className="text-xs">
          If you need the template customization or custom development services
          please contact us.
        </p>
        <a
          className="flex items-center justify-center text-sm bg-pink-500 py-0.5 px-2 rounded mt-2 mb-0.5 text-white group"
          href="mailto:mr.sagar.co@gmail.com"
        >
          <span>Email US</span>
          <ArrowRightIcon className="w-5 pl-2 group-hover:pl-3" />
        </a>
      </div>
    </div>
  );
}
