import React from 'react';
import { Badge } from '../../Badge';

type TitleTypeProps = 'h2' | 'h3';

export interface NewsCardProps {
  children?: React.ReactNode;
  title: string;
  link: string;
  date?: string | any;
  image?: string;
  alt?: string;
  excerpt?: string;
  tags?: Tags;
}

interface Tags {
  category: { id: number; name: string; slug: string }[];
}

export interface TitleProps {
  as?: TitleTypeProps;
}

export const NewsCard = ({
  title,
  as: Component = 'h3',
  link,
  date,
  image,
  alt,
  excerpt,
  tags,
}: NewsCardProps & TitleProps) => {
  const formatedDate = new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
      <a href={link} className="relative flex flex-col h-full cursor-pointer">
        {image && (
          <img
            className="object-cover w-full"
            src={image ? image : 'https://source.unsplash.com/random/400x266'}
            alt={alt}
          />
        )}

        <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
          {date && (
            <p className="flex items-start text-sm italic text-cu-black-600">
              {formatedDate}
            </p>
          )}

          <Component className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
            {title}
          </Component>

          {excerpt && (
            <p className="flex items-start text-base text-cu-black-600">
              {excerpt.length > 170
                ? `${excerpt.substring(0, 170)}...`
                : excerpt}
            </p>
          )}
        </div>

        <div className="pb-5 mt-auto px-7">
          {tags?.category?.map(tag => (
            <Badge key={tag.id}>{tag.name}</Badge>
          ))}
        </div>
      </a>
    </div>
  );
};
