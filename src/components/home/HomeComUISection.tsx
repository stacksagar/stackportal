import ExploreLink from 'components/global/utils/ExploreLink';

export default function HomeTemplatesSection() {
  return (
    <section className=" py-20 lg:py-32 responsive flex items-center justify-evenly lg:justify-center flex-col lg:flex-row">
      <div className="w-full sm:w-11/12 md:w-9/12 mx-auto lg:w-5/12">
        <img
          className="w-8/12 mx-auto"
          src="/svgs/template.svg"
          alt=""
        />
      </div>

      <div className="pt-12 lg:pt-0 w-full sm:w-11/12 md:w-9/12 mx-auto lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left justify-center space-y-3 lg:pr-20">
        <p className="text-base uppercase text-gray-800 dark:text-gray-200 border-b-2 border-gray-500">
          Components & UI
        </p>
        <p className="text-3xl dark:text-gray-50">Single Components</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          This is for Frontend Developer/Designer's, styles implement with only
          TailwindCSS. You can find to type of version 1.React.js+TailwindCSS
          and 2.Plain HTML+TailwindCSS.
        </p>
        <ExploreLink title="Explore UI & Components" />
      </div>
    </section>
  );
}
