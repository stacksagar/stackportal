import { useEffect, useState } from "react";
import docs_article_data from "src/data/docs_article_data";
import SingleItem from "./SingleItem";

export default function DocLeftBar({ allScrolledPercent, doc_center_ref }) {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    if (!titles.length) {
      Object.entries(docs_article_data).map(([articlesKey, articleObj]) => {
        Object.entries(articleObj).map(([contentsKey, contentsObj]) => {
          Object.entries(contentsObj).map(([title, content]) => {
            setTitles((prev) => {
              return [...prev, title];
            });
          });
        });
      });
    }
  }, []);

  return (
    <div
      style={{ width: "400px" }}
      className="hidden screen_900:block h-full border-r border-gray-500 border-opacity-30"
    >
      <h3 className="text-lg flex items-center justify-center border-b h-header_height border-gray-500 border-opacity-30 font-semibold uppercase">
        Doc Navigation
      </h3>

      <div className="p-5 h-screen_minus_header_dbl overflow-y-auto">
        {titles.map((title, i) => (
          <SingleItem
            doc_center_ref={doc_center_ref}
            scrollWidth={allScrolledPercent[i]}
            key={i}
            title={title}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
