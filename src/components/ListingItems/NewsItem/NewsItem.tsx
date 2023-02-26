import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Badge } from '../../Badge';
import { Tags } from '../../../types/Tags';
import { Link } from '../../Link/Link';

// Set types for as props
type NewsItemTypeProps = 'li' | 'div';

export interface NewsItemProps {
  as?: NewsItemTypeProps;
  children?: React.ReactNode;
  title: string;
  link?: string;
  image?: string;
  alt?: string;
  date?: string;
  excerpt?: string;
  tags?: Tags;
}

export const NewsItem = ({
  as: Component = 'div',
  title,
  link,
  image,
  alt,
  date,
  excerpt,
  tags,
}: NewsItemProps) => {
  return (
    <Component className="not-prose group relative overflow-hidden @container">
      <Link
        href={link}
        className="group relative flex cursor-pointer flex-col gap-4 bg-white p-6 hover:bg-slate-50 focus:outline-none @lg:md:flex-row @lg:md:gap-8"
      >
        {image && (
          <div className="hidden max-w-[30%] flex-none @lg:md:block">
            <img
              className="object-cover w-full rounded-md"
              src="https://source.unsplash.com/random/400x300"
              alt={alt}
            />
          </div>
        )}

        <div className="flex flex-1 flex-col gap-1.5 pr-6 md:gap-2.5 @lg:md:pt-1.5">
          {date && (
            <p className="text-sm italic text-cu-black-600 @2xl:md:text-base">
              January 7, 2020
            </p>
          )}
          <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @lg:md:text-xl @2xl:lg:text-2xl">
            {title}
          </h3>
          {excerpt && (
            <p className="text-sm text-cu-black-900 md:text-base @lg:md:text-lg">
              Tenetur libero voluptatem rerum occaecati qui est molestiae
              exercitationem. Voluptate quisquam iure assumenda consequatur ex
              et recusandae dignissim sodales feugiat...{' '}
              <span className="font-semibold text-cu-red group-hover:text-cyan-700">
                Read more
              </span>
            </p>
          )}
          {tags && (
            <div className="mt-4 @lg:md:mt-auto">
              {tags?.category?.map(tag => (
                <Badge key={tag.id}>{tag.name}</Badge>
              ))}
            </div>
          )}
        </div>

        <div className="absolute -mt-3 top-1/2 right-4">
          <ChevronRightIcon
            className="flex-none w-5 h-5 ml-auto text-cu-black-300"
            aria-hidden="true"
          />
        </div>
      </Link>
    </Component>
  );
};
