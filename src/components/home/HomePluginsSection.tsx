import ExploreLink from 'components/global/utils/ExploreLink';

export default function HomePluginsSection() {
  return (
    <section className="responsive py-20 lg:py-32 flex items-center justify-center flex-wrap-reverse lg:flex-row">
      <div className="w-full pt-12 lg:pt-0 sm:w-11/12 md:w-9/12 mx-auto lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left justify-center space-y-3 lg:pr-20">
        <p className="text-base uppercase text-gray-800 dark:text-gray-200 border-b-2 border-gray-500">
          Plugins & Package
        </p>
        <p className="text-3xl dark:text-gray-50">Single Components</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          When programmer build something like web application and then
          sometimes they need to implement something different like auto write
          animation, components animation etc. they can get easily from here.
        </p>
        <ExploreLink title="Explore Plugins & Packages" />
      </div>

      <div className="w-full sm:w-11/12 md:w-9/12 mx-auto lg:w-5/12">
        <img
          className="w-8/12 lg:w-9/12 mx-auto"
          src="/svgs/plugins.svg"
          alt=""
        />
      </div>
    </section>
  );
}
