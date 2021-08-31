import { CheckCircleIcon, CodeIcon } from '@heroicons/react/outline';
import { DeviceMobileIcon } from '@heroicons/react/solid';
import ExploreLink from 'components/global/utils/ExploreLink';
import {
  UnlimitedIcon,
  SupportIcon,
  SecurityIcon,
  PricingIcon,
  HeartIcon,
  CommunityIcon,
  GuranteIcon,
  UpdateIcon,
} from '../svgs/HomepageSvgs';

const AllFeatures = [
  {
    title: 'Examples',
    text: 'Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.',
    Icon: CheckCircleIcon,
    externalIcon: true,
  },
  {
    title: 'Unlimited Use',
    text: 'A single subscription gets you unlimited use. Setup them on as many websites as you like using a single  license. Use them on unlimited client websites too.',
    Icon: UnlimitedIcon,
  },
  {
    title: 'Responsive',
    text: 'Every example is fully responsive and carefully designed and implemented to look great at any screen size.',
    Icon: DeviceMobileIcon,
    externalIcon: true,
  },
  {
    title: 'Update',
    text: 'When you use our products, you can rest easy knowing that we are always working hard to keep them updated, compatible with the latest design.',
    Icon: UpdateIcon,
  },
  {
    title: 'React.js & Vanila HTML',
    text: 'Accessible, interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.',
    Icon: CodeIcon,
    externalIcon: true,
  },
  {
    title: 'Product Trust',
    text: "Your website and your client's websites are precious. You need to trust in the products that power them. Stack Portal provides a level of support and product quality that is unmatched.",
    Icon: HeartIcon,
  },
  {
    title: 'Security',
    text: 'We take security seriously when developing our products. Rest easy knowing that we have your back.',
    Icon: SecurityIcon,
  },

  {
    title: 'Simple Pricing',
    text: 'One subscription, one fee, no strings attached. Get everything in our single membership. Power your entire team and use our products on unlimited websites.',
    Icon: PricingIcon,
  },
  {
    title: '24/7 Premium Support',
    text: 'We take great pride in the level of support we provide to our customers. Our team is available 24/7. We typically respond in less than an hour and are often available for instant live chat.',
    Icon: SupportIcon,
  },
  {
    title: 'Active Community',
    text: "You aren't just purchasing products when you join Stack Portal. You are becoming part of an amazing community filled with wonderful and passionate people!",
    Icon: CommunityIcon,
  },
  {
    title: 'Satisfaction Guaranteed',
    text: "We offer a 30 day money back guarantee. If you aren't satisfied with your membership, don't worry. We'll send you a refund with no questions asked.",
    Icon: GuranteIcon,
  },
];

const Single = ({ title, Icon, children, externalIcon }) => (
  <div className="col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer rounded p-3 mb-5 screen_400:mb-0 flex space-x-3 items-start bg-gray-100 bg-opacity-80 hover:bg-opacity-100 hover:shadow dark:bg-transparent">
    <div className="p-2 rounded bg-gray-100 dark:bg-dark3 ring-1">
      {externalIcon ? <Icon className="w-6 text-blue-400" /> : <Icon />}
    </div>
    <div>
      <p className="text-base font-semibold text-gray-600 dark:text-white tracking-wider mb-1">
        {title}
      </p>
      <p className="text-sm tracking-wide leading-5 text-gray-500 dark:text-gray-300">
        {children}
      </p>
    </div>
  </div>
);

export default function HomeFeatureSection2() {
  return (
    <div className="responsive relative z-20 grid grid-cols-12 screen_400:gap-5 pb-12">
      {AllFeatures.map(({ title, Icon, text, externalIcon }, i) => (
        <Single key={i} Icon={Icon} title={title} externalIcon={externalIcon}>
          {text}
        </Single>
      ))}

      <div className="col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer rounded p-3 mb-5 screen_400:mb-0 flex space-x-3 items-center justify-center">
        <ExploreLink className="text-2xl" title="Explore More" />
      </div>
    </div>
  );
}
