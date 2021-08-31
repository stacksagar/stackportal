import ExploreLink from 'components/global/utils/ExploreLink';
import StackTyping from 'stackportal/StackTyping';

export default function HomeTemplatesSection() {
  return (
    <section className="responsive py-20 lg:py-32 flex items-center justify-center flex-wrap-reverse lg:flex-row">
      <div className="w-full pt-12 lg:pt-0 sm:w-11/12 md:w-9/12 mx-auto lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left justify-center space-y-3 lg:pr-20">
        <p className="text-base uppercase text-gray-800 dark:text-gray-200 border-b-2 border-gray-500">
          Templates
        </p>
        <p className="text-3xl dark:text-gray-50">
          HTML5, React and Next.js Website Templates
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Build With Amazing Stack, like UI, Tools, Animations, Effects and with
          good understanding documentation for how to you implement your data
          super fast.
        </p>
        <ExploreLink title="Explore Templates" />
      </div>

      <div className="w-full sm:w-11/12 md:w-9/12 mx-auto lg:w-5/12">
        <div className="w-full h-auto z-30 relative text-center">
          <img
            className="w-8/12 lg:w-11/12 mx-auto"
            src="/images/templates/preview.png"
            alt=""
          />

          <div
            style={{ top: '38%' }}
            className="absolute hidden screen_295:block inset-x-0 mx-auto transform skew-y-3 -rotate-2 text-white text-xs sm:text-base lg:text-xl"
          >
            <StackTyping
              style={{ textAlign: 'center !important' }}
              className={`ml-7 md:ml-12 `}
              properties={{
                typingSentences: ['Responsive'],
                hideStars: true,
                hideExpand: true,
                removeMinWidth: true,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
