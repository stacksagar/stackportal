import React from 'react';
import {
  ChipIcon,
  CubeIcon,
  PresentationChartLineIcon,
  TemplateIcon,
  ViewGridAddIcon,
} from '@heroicons/react/solid';
import { HTMLIcon } from 'components/svgs/HomepageSvgs';
import Link from 'next/link';

function SingleColumn({ title, link, Icon }) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 flex items-start justify-start bg-yellow-500 lg:bg-transparent bg-opacity-5 shadow-lg lg:shadow-none rounded pt-3 pb-9 pl-3 lg:pl-20 ">
      {/* Icon Div */}
      <div className="w-12 flex items-start justify-center h-full">
        <Icon className="w-9 text-blue-400" />
      </div>

      {/* Text Div */}
      <div>
        <h3 className="text-base ">{title}</h3>
        <p className="text-xs">
          <Link href={`/${link}`}>View All</Link>
        </p>
      </div>
    </div>
  );
}

export default function products() {
  return (
    <section className="py-20">
      <div className="w-full h-header_height px-5 flex items-center justify-center">
        <input
          type="search"
          placeholder="Search..."
          className="rounded w-full screen_400:w-pixel_375 bg-white dark:bg-black dark:bg-opacity-50 outline-none px-5 py-2 ring-1 focus:ring shadow-lg focus:shadow-xl "
        />
      </div>

      <div className="responsive grid grid-cols-12 gap-5 pt-20">
        <SingleColumn
          title="Templates"
          Icon={TemplateIcon}
          link="docs/templates"
        />
        <SingleColumn title="React Components" Icon={ViewGridAddIcon} link="" />
        <SingleColumn title="Vanila HTML UI" Icon={HTMLIcon} link="" />
        <SingleColumn title="Plugins" Icon={CubeIcon} link="" />
        <SingleColumn title="Package" Icon={ChipIcon} link="" />
        <SingleColumn title="Blog" Icon={PresentationChartLineIcon} link="" />
      </div>
    </section>
  );
}
