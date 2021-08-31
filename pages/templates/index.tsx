import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { templatesDataObjectTypes } from 'types/templatesDataTypes';
import templates_data from 'src/data/templates_data';

function SingleColumn({
  title,
  templateName,
  purchaseLink,
  categoryName,
  image,
}: templatesDataObjectTypes) {
  const router = useRouter();
  const [isLoaded,setIsLoaded]=useState(false)
  const timeoutRef = useRef()
  useEffect(()=>{ 
    timeoutRef.current = setTimeOut(()=>{ 
      setIsLoaded(true)
    },1000)

    return () => {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  },[])

  if (isLoaded) {   
    return (
      <div className="mb-10 md:mb-0 col-span-12 sm:col-span-6 screen_1200:col-span-4 bg-opcity-50 flex flex-col screen_400:flex-row screen_640:flex-col screen_768:flex-row justify-between">
        <div className="w-full flex items-center justify-center md:w-44 h-36 mx-auto pr-0 screen_400:pr-4 screen_640:pr-0 screen_768:pr-4 mt-2">
          <div className="w-full h-full">
            <img
              className="w-full h-full rounded object-cover object-center"
              src={image}
              alt=""
            />
          </div>
        </div>

        <div className="w-full md:w-8/12 flex flex-col justify-between space-y-3">
          <p className="text-base rounded h-auto sm:h-16 md:h-auto py-2 screen_400:py-0 screen_640:py-2 screen_768:py-0">
            {title}
          </p>

          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 justify-between">
              <button
                onClick={() =>
                  router.push(
                    `${router.asPath}/${templateName}?category=${categoryName}`
                  )
                }
                className="bg-pink-500 text-sm px-2 py-0.5 rounded w-full text-white"
              >
                View Item
              </button>

              <button className="bg-pink-500 text-sm px-2 py-0.5 rounded w-full text-white">
                Purchase
              </button>
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
      <div className="mb-10 md:mb-0 col-span-12 sm:col-span-6 screen_1200:col-span-4 bg-opcity-50 flex flex-col screen_400:flex-row screen_640:flex-col screen_768:flex-row justify-between">
        <div className="w-full flex items-center justify-center md:w-44 h-36 mx-auto pr-0 screen_400:pr-4 screen_640:pr-0 screen_768:pr-4">
          <div className="w-full h-full bg-gradient-to-tr from-gray-600 to-gray-700 animate-pulse"></div>
        </div>

        <div className="w-full md:w-8/12 flex flex-col justify-between space-y-3">
          <p className="text-base rounded h-auto sm:h-16 md:h-auto py-6 bg-gradient-to-tr from-gray-600 to-gray-700 animate-pulse" /> 
 
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 justify-between">
              <button className="bg-pink-500 text-sm px-2 py-3 rounded w-full text-transparent  bg-gradient-to-tr from-gray-600 to-gray-700 animate-pulse" />

              <button className="bg-pink-500 text-sm px-2 py-3 rounded w-full text-transparent  bg-gradient-to-tr from-gray-600 to-gray-700 animate-pulse" />
            </div>

            <button className="bg-blue-500 text-sm px-2 py-4 rounded text-transparent bg-gradient-to-tr from-gray-600 to-gray-700 animate-pulse" />
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

  const filterHandler = (e) => {
    setTemplates([]);
    toggleClass(e);

    if (e.target.id == 'all') {
      Object.entries(templates_data).map(([categoryName, categoryObj]) => {
        Object.entries(categoryObj).map(([templateName, templateObj]) => {
          setTemplates((prev) => {
            return [...prev, { categoryName, templateName, ...templateObj }];
          });
        });
      });
    } else {
      Object.entries(templates_data[e.target.id]).map(
        ([templateName, templateObj]) => {
          setTemplates((prev) => {
            return [
              ...prev,
              {
                categoryName: e.target.id,
                templateName,
                ...templateObj,
              },
            ];
          });
        }
      );
    }
  };

  useEffect(() => {
    setTemplates([]);
    Object.entries(templates_data).map(([categoryName, categoryObj]) => {
      Object.entries(categoryObj).map(([templateName, templateObj]) => {
        setTemplates((prev) => {
          return [...prev, { categoryName, templateName, ...templateObj }];
        });
      });
    });
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

      <div className="responsive grid grid-cols-12 sm:gap-5 md:gap-16 pt-20">
        {templates.map(
          ({ title, categoryName, purchaseLink, templateName, image }, i) => (
            <SingleColumn
              title={title}
              templateName={templateName}
              purchaseLink={purchaseLink}
              categoryName={categoryName}
              image={image}
              key={i}
            />
          )
        )}
      </div>
    </section>
  );
}
