import React from 'react';
import { Badge } from '../../Badge/index';

interface Tags {
  category: { id: number; name: string; slug: string }[];
  audience: { id: number; name: string; slug: string }[];
}

export interface NewsCardProps {
  name?: string;
  link?: string;
  startDateTime: string;
  featuredImage?: string;
  description?: string;
  tags?: Tags;
}

export const NewsCard = ({
  //   name,
  link = 'https://carleton.ca',
  featuredImage,
  tags,
}: NewsCardProps) => {
  return (
    <div className="relative flex flex-col overflow-hidden duration-300 ease-in rounded-lg shadow-lg group hover:scale-105">
      <a href={link} className="cursor-pointer">
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="object-cover w-full"
            src={
              featuredImage
                ? featuredImage
                : 'https://source.unsplash.com/random/400x266'
            }
            alt=""
          />
        </div>

        <div className="flex flex-col py-6 space-y-3 px-7">
          <p className="flex items-start text-sm italic text-cu-black-600">
            November 3 - 7
          </p>
          <h3 className="text-xl font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red">
            End-of-Year Reflections and Resolutions for Our Web Services Team
          </h3>

          <p className="flex items-start text-base text-cu-black-600">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae...
          </p>
          <div className="mt-4">
            {tags?.category?.map(tag => (
              <Badge key={tag.id}>{tag.name}</Badge>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};
