import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  multipleDemosType,
  templatesDataObjectTypes,
} from 'types/templatesDataTypes';

export default function TemplateViwer({
  template,
}: {
  template: templatesDataObjectTypes;
}) {
  const { title, multipleDemos } = template;
  return (
    <div className="responsive py-20">
      <h1
        style={{ WebkitTextFillColor: 'transparent' }}
        className="text-3xl text-center mb-16 bg-gradient-to-r from-blue-500 to-green-500 dark:to-yellow-400 bg-clip-text"
      >
        {title}
      </h1>

      {/* if not available multiple demos */}
      {typeof multipleDemos == 'undefined' && (
        <SingleItem template={template} singleView={true} />
      )}

      {/* if available multiple demos */}
      {typeof multipleDemos == 'object' && (
        <div className="grid grid-cols-12 py-12 relative">
          {multipleDemos.length > 2 && (
            <div className="w-2 h-2 bg-gray-500 border-2 hidden sm:block ring absolute inset-0 m-auto rounded-full animate-ping" />
          )}
          {template.multipleDemos.map((demo, i) => (
            <SingleItem
              template={template}
              demo={demo}
              key={i}
              demoNumber={i + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SingleItem({
  template,
  singleView,
  demo,
  demoNumber,
}: {
  template: templatesDataObjectTypes;
  singleView?: boolean;
  demo?: multipleDemosType;
  demoNumber?: number | string;
}) {
  const [image, setImage] = useState<any>();
  const [preview, setPreview] = useState<any>();

  useEffect(() => {
    if (demo && !singleView) {
      setImage(demo.image);
      setPreview(demo.preview);
    } else {
      setImage(template.image);
      setPreview(template.preview);
    }
  }, []);

  return (
    <div
      className={
        singleView
          ? 'w-full screen_600:w-pixel_450 mx-auto'
          : 'col-span-12 sm:col-span-6 p-8 lg:p-10 border border-gray-500 border-opacity-30 relative'
      }
    >
      <img className="w-full" src={image} alt="" />

      {demoNumber && !singleView && (
        <div className="inline-block absolute top-0 inset-x-0 text-center pt-0.5">
          Demo {demoNumber}
        </div>
      )}

      <div className="p-3 flex flex-col space-y-2">
        <div className="w-full flex justify-between space-x-2">
          <a
            href={preview}
            target="_blank"
            className="w-full py-1 rounded bg-blue-500 text-white text-xs md:text-sm ring-1 focus:ring-2 text-center"
          >
            Preview
          </a>
          <Link href="/">
            <button className="w-full py-1 rounded bg-blue-500 text-white text-xs md:text-sm ring-1 focus:ring-2">
              Documentation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
