import React from 'react';
import { Badge } from '../../Badge';

interface Tags {
  category: { id: number; name: string; slug: string }[];
}

export interface NewsCardProps {
  name?: string;
  link?: string;
  date: string;
  image?: string;
  excerpt?: string;
  tags?: Tags;
}

export const NewsCard = ({
  name,
  date,
  excerpt,
  link = 'https://carleton.ca',
  image,
  tags,
}: NewsCardProps) => {
  const formatedDate = new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="relative flex flex-col max-w-sm overflow-hidden duration-300 ease-in rounded-lg shadow-lg group hover:scale-105">
      <a href={link} className="flex flex-col h-full cursor-pointer">
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="object-cover w-full"
            src={image ? image : 'https://source.unsplash.com/random/400x266'}
            alt=""
          />
        </div>

        <div className="py-6 space-y-3 px-7">
          <p className="text-sm italic text-cu-black-600">{formatedDate}</p>
          <h3 className="text-xl font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red">
            {name}
          </h3>

          <p className="text-base text-cu-black-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            aliquam nulla eget viverra tristique...
          </p>
          <p className="text-base text-cu-black-600">{excerpt}</p>
        </div>

        <div className="pb-6 mt-auto px-7">
          {tags?.category?.map(tag => (
            <Badge key={tag.id}>{tag.name}</Badge>
          ))}
        </div>
      </a>
    </div>
  );
};
