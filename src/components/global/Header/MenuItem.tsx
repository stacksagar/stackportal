import {
  ChartPieIcon,
  CurrencyDollarIcon,
  CubeIcon,
  InformationCircleIcon,
  PresentationChartLineIcon,
  SupportIcon,
  ViewGridIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline';
import { ExternalLinkIcon } from '@heroicons/react/solid';

export const MenuItemTitles = {
  TailwindUI: {
    Icon: ViewGridIcon,
    desc: 'Read about all things productivity',
    external_link: true,
  },
  Blog: {
    Icon: PresentationChartLineIcon,
    desc: 'Read about all things productivity',
  },
  Get_Help: {
    Icon: SupportIcon,
    desc: 'Read about all things productivity',
  },
  Freebies: {
    Icon: ChartPieIcon,
    desc: 'Read about all things productivity',
  },
  Hierarchy: {
    Icon: TrendingUpIcon,
    desc: 'Understand how StackPortal is organized.',
  },
  Pricing: {
    Icon: CurrencyDollarIcon,
    desc: 'Read about all things productivity',
  },
  Script_Plugins: {
    Icon: CubeIcon,
    desc: 'Read about all things productivity',
  },
  About_US: {
    Icon: InformationCircleIcon,
    desc: 'Read about all things productivity',
  },
};

const MenuItem = ({
  title,
  Icon,
  desc,
  externalLink,
  i,
}: {
  title: string;
  Icon: any;
  desc: string;
  externalLink?: boolean;
  i: number | any;
}) => {
  return (
    <div
      className={`${
        i % 2 == 0
          ? `${i % 4 == 0 ? 'bg-green-500' : 'bg-yellow-600'}`
          : `${i % 3 == 0 ? 'bg-pink-400' : 'bg-yellow-400'}`
      } bg-opacity-50 screen_900:bg-opacity-0 hover:bg-opacity-40 hover:ring inline-flex rounded cursor-pointer items-start justify-center p-3 col-span-4 row-span-3 screen_1100:col-span-3 transform scale-90 `}
    >
      <div className="flex space-x-2">
        <div className={`pr-1 flex items-start justify-center`}>
          <div
            className={`bg-gradient-to-r w-10 h-10 rounded-full flex justify-center items-center from-pink-500 ${
              i % 2 == 0
                ? `to-green-500`
                : `${i % 3 == 0 ? 'to-pink-500' : 'to-yellow-600'}`
            } shadow-xl`}
          >
            <Icon className={`w-6 h-6 text-blue-200`} />
          </div>
        </div>

        <div className="flex flex-col items-start text-black dark:text-white">
          <h3 className="text-base tracking-wide font-ombr -mt-0.5 mb-1 flex">
            {title.replace('_', ' ')}{' '}
            {externalLink ? <ExternalLinkIcon className="h-3" /> : ''}
          </h3>
          <small className="text-gray-600 dark:text-gray-300 leading-4">
            {desc} Lorem ipsum dolor sit.
          </small>
        </div>

      </div>
    </div>
  );
};

export default MenuItem;
