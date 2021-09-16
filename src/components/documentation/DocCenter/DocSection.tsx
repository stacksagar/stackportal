export default function DocSection({ children }) {
  return (
    <article className="border-b min-h-screen_minus_header ml-1 border-gray-500 border-opacity-30 doc_article py-20 px-8 lg:px-10 ">
      <div className="article_read_content text-gray-800 dark:text-gray-300">
        {children}
      </div>
    </article>
  );
}
