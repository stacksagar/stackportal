import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { templatesDataObjectTypes } from 'types/templatesDataTypes';
import templates_data from 'src/data/templates_data';

function SingleColumn({ template }: { template: templatesDataObjectTypes }) {
  const {
    title,
    purchase,
    category,
    image,
    code,
    templateKeyName,
    multipleDemos,
  } = template;
  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState(false);
  const timeoutRef = useRef<any>();
  useEffect(() => {
    setIsLoaded(false);
    timeoutRef.current = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };
  }, []);

  if (isLoaded) {
    return (
      <div className="col-span-12 sm:col-span-6 screen_900:col-span-4 border border-gray-500 border-opacity-20 p-10 relative">
        {typeof multipleDemos == 'object' ? (
          <>
            <div className="inline-block absolute py-1 px-3 top-0 left-0 bg-gray-600 text-white">
              Available Demos: {multipleDemos.length}
            </div>
            <Image width="800" height="500" src={multipleDemos[0].image} />
          </>
        ) : (
          <Image width="800" height="500" src={image} />
        )}
        <div>
          <p className="text-base rounded pt-2 pb-3 text-center">{title}</p>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 justify-between">
              <button
                onClick={() =>
                  router.push(
                    `${router.asPath}/${category}?code=${code}&template=${templateKeyName}`
                  )
                }
                className="bg-pink-500 text-sm px-2 py-0.5 rounded w-full text-white"
              >
                View Item
              </button>

              <a
                href={purchase}
                target="_blank"
                className="bg-pink-500 text-sm px-2 py-0.5 rounded w-full text-white text-center"
              >
                Purchase
              </a>
            </div>

            <button
              onClick={() => alert('make it push')}
              className="bg-blue-500 text-sm px-2 py-1 rounded text-white"
            >
              Documentation
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-span-12 sm:col-span-6 screen_900:col-span-4 border border-gray-500 border-opacity-20 p-10">
        <Image width="800" height="500" src="/images/loading-template.jpg" />

        <div>
          <p className=" bg-gradient-to-tr from-gray-600 to-gray-700 animate-pulse text-transparent rounded mt-2 mb-3">
            {title}
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 justify-between">
              <button className=" bg-gradient-to-tr from-gray-600 to-gray-700 animate-pulsetext-sm px-2 py-0.5 rounded w-full text-transparent">
                View Item
              </button>
              <a className="bg-gradient-to-tr from-gray-600 to-gray-700 animate-pulse text-sm px-2 py-0.5 rounded w-full text-transparent">
                Purchase
              </a>
            </div>
            <button className="bg-gradient-to-tr from-gray-600 to-gray-700 animate-pulse text-transparent text-sm px-2 py-1 rounded">
              Documentation
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default function Templates() {
  const [templates, setTemplates] = useState<templatesDataObjectTypes[]>([]);

  const toggleClass = (e) => {
    document.querySelectorAll('.template_filter').forEach((ele) => {
      ele.classList.remove('bg-opacity-100');
      ele.classList.remove('ring');
      ele.classList.remove('scale-110');
    });
    e.target.classList.add('bg-opacity-100');
    e.target.classList.add('ring');
    e.target.classList.add('scale-110');
  };

  const storeData = (code: 'all' | 'html5' | 'reactjs' | 'nextjs') => {
    setTemplates([]);
    if (code == 'all') {
      Object.entries(templates_data).map(([key, obj]) => {
        Object.entries(obj).map(([key2, obj2]) => {
          Object.entries(obj2).map(([key3, obj3]) => {
            setTemplates((prev) => {
              return [
                ...prev,
                {
                  code: key,
                  category: key2,
                  templateKeyName: key3,
                  ...obj3,
                },
              ];
            });
          });
        });
      });
    } else {
      Object.entries(templates_data[code]).map(([key, obj]) => {
        Object.entries(obj).map(([key2, obj2]) => {
          setTemplates((prev) => {
            return [
              ...prev,
              {
                code,
                category: key,
                templateKeyName: key2,
                ...obj2,
              },
            ];
          });
        });
      });
    }
  };

  const filterHandler = (e) => {
    setTemplates([]);
    toggleClass(e);
    if (e.target.id == 'all') {
      storeData('all');
    } else {
      storeData(e.target.id);
    }
  };

  useEffect(() => {
    storeData('all');
  }, []);

  return (
    <section className="pb-20">
      <div className="p-5 sticky inset-x-0 mx-auto z-10 flex flex-col-reverse justify-center items-center md:flex-row md:justify-between w-full top-pixel_59 bg-gray-200 dark:bg-gray-800">
        <div className="flex space-x-2 screen_400:space-x-3">
          <button
            onClick={filterHandler}
            id="all"
            className={`template_filter bg-green-600 text-white rounded transform px-2 py-0.5 bg-opacity-100 ring scale-110`}
          >
            All
          </button>
          <button
            onClick={filterHandler}
            id="html5"
            className={`template_filter bg-green-600 text-white rounded transform px-2 py-0.5 bg-opacity-75`}
          >
            HTML5
          </button>
          <button
            onClick={filterHandler}
            id="nextjs"
            className={`template_filter bg-green-600 text-white rounded transform px-2 py-0.5 bg-opacity-75`}
          >
            Next.js
          </button>
          <button
            onClick={filterHandler}
            id="reactjs"
            className={`template_filter bg-green-600 text-white rounded transform px-2 py-0.5 bg-opacity-75`}
          >
            React.js
          </button>
        </div>

        <input
          type="search"
          placeholder="Search..."
          className="rounded w-full screen_400:w-pixel_375 bg-white dark:bg-black dark:bg-opacity-50 outline-none px-5 py-2 ring-1 focus:ring shadow-lg focus:shadow-xl mb-4 md:mb-0"
        />
      </div>

      <div className="responsive grid grid-cols-12 py-20">
        {templates.map((template, i) => (
          <SingleColumn key={i} template={template} />
        ))}
      </div>
    </section>
  );
}
