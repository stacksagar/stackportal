export default function DocsSearch() {
  return (
    <div className="px-5 sticky h-header_height inset-x-0 mx-auto z-30 flex items-center justify-center w-full screen_1100:w-pixel_450 top-pixel_59 screen_1100:top-0 bg-gray-100 dark:bg-gray-900 screen_1100:bg-transparent screen_1100:dark:bg-transparent">
      <input
        type="search"
        placeholder="Search..."
        className="rounded w-full screen_400:w-pixel_375 bg-white dark:bg-black dark:bg-opacity-50 outline-none px-5 py-2 ring-1 focus:ring shadow-lg focus:shadow-xl "
      />
    </div>
  );
}
