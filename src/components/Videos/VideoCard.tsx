import React from 'react';

export interface VideoCardProps {
  source?: string;
}

export function VideoCard({ source }: VideoCardProps) {
  return (
    <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
      <a
        href="https://carleton.ca"
        className="relative flex flex-col h-full cursor-pointer"
      >
        <div className="relative">
          <video width="100%" height="100%" controls>
            <source src={source} type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
          <p className="text-sm italic text-cu-black-600 @sm:md:text-base">
            Duration: 5m 43s
          </p>
          <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
            Donec commodo sit viverra aliquam porttitor ultrices gravida
          </h3>
        </div>

        <div className="pb-5 mt-auto px-7">
          <p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
            Category One
          </p>
          <p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
            Category Two
          </p>
        </div>
      </a>
    </div>
  );
}
