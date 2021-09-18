export default function DocNavBar({
  titles,
  doc_center_ref,
  allScrolledPercent,
}) {
  const setScrolled = (index) => {
    const all_doc_article = document.querySelectorAll(".doc_article");
    let n = 0;
    all_doc_article.forEach((article, i) => {
      if (index > i) {
        n += article.clientHeight;
      }
    });
    doc_center_ref.current.scrollTop = n;
  };

  return (
    <div className="w-full hidden screen_500:block screen_900:hidden h-header_height border-b border-gray-500 border-opacity-30">
      <div className="responsive h-full flex items-center space-x-3">
        {titles.map((title, i) => (
          <p
            onClick={() => setScrolled(i)}
            className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 text-white rounded cursor-pointer relative"
            key={i}
          >
            <span className="z-20 relative text-gray-900 dark:text-white">
              {title}
            </span>
            {titles.length - 1 == i ? null : (
              <span
                className="z-10 absolute left-0 top-0 bottom-0 bg-gray-300 dark:bg-gray-700"
                style={{ width: `${allScrolledPercent[i]}%` }}
              />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
