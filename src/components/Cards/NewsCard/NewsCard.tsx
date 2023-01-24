import React from 'react';
import { Badge } from '../../Badge';

type TitleTypeProps = 'h2' | 'h3';

export interface NewsCardProps {
  children?: React.ReactNode;
  title?: string;
  link?: string;
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

const NewsCardBase = ({ children, link }: NewsCardProps) => {
  return (
    <div className="relative flex flex-col max-w-sm overflow-hidden duration-300 ease-in rounded-lg shadow-lg group hover:scale-105">
      <a href={link} className="flex flex-col h-full cursor-pointer">
        {children}
      </a>
    </div>
  );
};

const Image = ({ image, alt }: NewsCardProps) => {
  return (
    <div className="aspect-w-3 aspect-h-2">
      <img
        className="object-cover w-full"
        src={image ? image : 'https://source.unsplash.com/random/400x266'}
        alt={alt}
      />
    </div>
  );
};

const Content = ({ children }: NewsCardProps) => {
  return (
    <div className="flex flex-col h-full py-6 space-y-2 px-7">{children}</div>
  );
};

const Title = ({ as = 'h3', title }: TitleProps & NewsCardProps) => {
  return React.createElement(
    as,
    {
      className: `text-xl font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red`,
    },
    title
  );
};

const PostDate = ({ date }: NewsCardProps) => {
  const formatedDate = new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return <p className="text-sm italic text-cu-black-600">{formatedDate}</p>;
};

const Excerpt = ({ excerpt }: NewsCardProps) => {
  return <p className="text-base text-cu-black-600">{excerpt}</p>;
};

const Badges = ({ tags }: NewsCardProps) => {
  return (
    <div className="pb-6 mt-auto px-7">
      {tags?.category?.map(tag => (
        <Badge key={tag.id}>{tag.name}</Badge>
      ))}
    </div>
  );
};

export const NewsCard = Object.assign(NewsCardBase, {
  Image,
  Content,
  Title,
  PostDate,
  Excerpt,
  Badges,
});
