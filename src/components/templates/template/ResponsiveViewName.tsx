export default function ResponsiveViewName({ onClick, model, selectedModel }) {
  return (
    <div className="col-span-6 flex justify-center items-start py-3">
      <button
        onClick={onClick}
        className="w-10/12 bg-gray-300 dark:bg-gray-900 ring-1 text-white p-2 space-x-2 rounded flex justify-start items-center"
      >
        <span
          className={`${
            selectedModel == model ? 'bg-black dark:bg-white' : ''
          } p-1 ring-1 rounded-full`}
        />
        <span className="text-sm text-black dark:text-white">{model}</span>
      </button>
    </div>
  );
}