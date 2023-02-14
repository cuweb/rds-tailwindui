import React from 'react';
import ReactPlayer from 'react-player';

export interface VideoCardProps {
  source: any;
  duration?: any;
  description?: string;
  tags?: Array<string>;
}

export function VideoCard({
  source,
  duration,
  description,
  tags,
}: VideoCardProps) {
  return (
    <>
      <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
        <a className="relative flex flex-col h-full cursor-pointer">
          <ReactPlayer url={source} controls width="100%" />
          <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
            <p className="text-sm italic text-cu-black-600 @sm:md:text-base">
              Duration: {duration}
            </p>
            <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
              {description}
            </h3>
          </div>

          <div className="pb-5 mt-auto px-7">
            {tags?.map((tag: string) => (
              <p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
                {tag}
              </p>
            ))}
          </div>
        </a>
      </div>
    </>
  );
}
