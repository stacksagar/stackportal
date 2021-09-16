import DocCenter from "components/documentation/DocCenter";
import DocLeftBar from "components/documentation/DocLeftBar";
import DocNavBar from "components/documentation/DocNavBar";
import DocRightBar from "components/documentation/DocRightBar";
import { ElementRef, useEffect, useRef, useState } from "react";

export default function Documentation({ titles, children }) {
  const doc_center_ref = useRef<ElementRef<"div">>();
  const [allScrolledPercent, setAllScrolledPercent] = useState<any>({});

  useEffect(() => {
    setTimeout(() => {
      const all_doc_articles: any = document.querySelectorAll(".doc_article");
      doc_center_ref.current.addEventListener("scroll", function (e) {
        all_doc_articles.forEach((el: ElementRef<"article">, i) => {
          const { top, height, bottom } = el.getBoundingClientRect();

          if (top - 60 < 1) {
            let t;
            if (i == 0) {
              t = Number(top.toString().slice(1, 99));
            } else {
              t = Number(top.toString().slice(1, 99)) + 60;
            }
            let h = height - t;
            if (h > 0 && t < height) {
              setAllScrolledPercent((prev) => {
                return { ...prev, [i]: (t / height) * 100 };
              });
            } else if (t > height) {
              setAllScrolledPercent((prev) => {
                return { ...prev, [i]: 100 };
              });
            }
          } else if (top > 1) {
            setAllScrolledPercent((prev) => {
              return { ...prev, [i]: 0 };
            });
          }
        });
      });
    }, 500);
  }, []);

  return (
    <main className="w-full bg-gray-50 dark:bg-dark4">
      <DocNavBar titles={titles} doc_center_ref={doc_center_ref} allScrolledPercent={allScrolledPercent} />
      <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
        <div className="flex h-screen_minus_header_dbl screen_900:h-screen_minus_header">
          <DocLeftBar
            doc_center_ref={doc_center_ref}
            allScrolledPercent={allScrolledPercent}
            titles={titles}
          />
          <DocCenter doc_center_ref={doc_center_ref}>{children}</DocCenter>
          <DocRightBar doc_center_ref={doc_center_ref} />
        </div>
      </div>
    </main>
  );
}
 