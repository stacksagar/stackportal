import { ArrowSmRightIcon } from '@heroicons/react/solid';

export default function ExploreLink({
  title,
  className,
  className2,
  className3,
}: {
  title: string;
  className?: string;
  className2?: string;
  className3?: string;
}) {
  return (
    <button
      className={
        `flex items-center text-blue-500 dark:text-blue-300 ` + className
      }
    >
      <span className={`pr-2 hover:pr-4 tracking-wide ` + className2}>
        {title}
      </span>
      <ArrowSmRightIcon className={`w-3 -mb-0.5 ` + className3} />
    </button>
  );
}
