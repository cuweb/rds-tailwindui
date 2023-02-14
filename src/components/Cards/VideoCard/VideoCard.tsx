import React from 'react';
import ReactPlayer from 'react-player';
import { Badge } from '../../Badge';

export interface VideoCardProps {
  source: any;
  duration?: any;
  title: string;
  tags?: Tags;
}

interface Tags {
  category: { id: number; name: string; slug: string }[];
}

export function VideoCard({ source, duration, title, tags }: VideoCardProps) {
  return (
    <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
      <a className="relative flex flex-col h-full cursor-pointer">
        <div className="relative [&>iframe]:aspect-video">
          <ReactPlayer url={source} width="100%" controls />
        </div>
        <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
          {duration && (
            <p className="text-sm italic text-cu-black-600 @sm:md:text-base">
              Duration: {duration}
            </p>
          )}
          <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
            {title}
          </h3>
        </div>
        {tags && (
          <div className="pb-5 mt-auto px-7">
            {tags?.category?.map(tag => (
              <Badge key={tag.id}>{tag.name}</Badge>
            ))}
          </div>
        )}
      </a>
    </div>
  );
}
