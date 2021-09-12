import DocCenter from 'components/documentation/DocCenter';
import DocLeftBar from 'components/documentation/DocLeftBar';
import DocNavBar from 'components/documentation/DocNavBar';
import DocRightBar from 'components/documentation/DocRightBar';
import { ElementRef, useEffect, useRef, useState } from 'react';

export default function Item() {
  const doc_center_ref = useRef<ElementRef<'div'>>();
  const [allScrolledPercent, setAllScrolledPercent] = useState<any>({});

  useEffect(() => {
    const all_doc_articles: any = document.querySelectorAll('.doc_article');
    doc_center_ref.current.addEventListener('scroll', function (e) {
      all_doc_articles.forEach((el: ElementRef<'article'>, i) => {
        const { height, bottom } = el.getBoundingClientRect();
        const is = 100 - ((bottom - 60) / height) * 100;

        if (
          doc_center_ref.current.scrollTop +
            doc_center_ref.current.clientHeight * 2 >=
          doc_center_ref.current.scrollHeight
        ) {
          setAllScrolledPercent((prev) => {
            return { ...prev, [i]: 100 };
          });
        } else if (doc_center_ref.current.scrollTop < 200) {
          setAllScrolledPercent((prev) => {
            return { ...prev, [i]: 0 };
          });
        } else {
          if (is >= -5 && is <= 105) {
            setAllScrolledPercent((prev) => {
              return { ...prev, [i]: is };
            });
          }
        }
      });
    });
  }, []);

  return (
    <main className="w-full bg-gray-50 dark:bg-dark4">
      <DocNavBar />
      <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
        <div className="flex h-screen_minus_header_dbl screen_900:h-screen_minus_header">
          <DocLeftBar doc_center_ref={doc_center_ref} allScrolledPercent={allScrolledPercent} />
          <DocCenter doc_center_ref={doc_center_ref} />
          <DocRightBar doc_center_ref={doc_center_ref} />
        </div>
      </div>
    </main>
  );
}
