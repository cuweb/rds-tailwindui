import React from 'react';

// Meta Wrapper
export interface MetaProps {
  description?: string;
  children?: React.ReactNode;
}

const MetaBase = ({
  description = 'Carleton University',
  children,
}: MetaProps) => {
  return (
    <>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="640" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="max-snippet:-1,max-image-preview:standard,max-video-preview:-1"
      />
      {children}
    </>
  );
};

// Meta Title
export interface TitleProps {
  children?: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <title>{children}</title>;
};

// Meta Icons
export interface IconsProps {
  path?: string;
}

const Icons = ({
  path = 'https://cdn.carleton.ca/cutheme/favicons',
}: IconsProps) => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={path + '/apple-touch-icon.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={path + '/favicon-32x32.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={path + '/favicon-16x16.png'}
      />
    </>
  );
};

// Meta Social
export interface SocialProps {
  type: string;
  card?: string;
  title?: string;
  image?: string;
  description?: string;
}

const Social = ({ type, card, title, image, description }: SocialProps) => {
  return (
    <>
      <meta name={type + ':card'} content={card} />
      <meta name={type + ':title'} content={title} />
      <meta name={type + ':description'} content={description} />
      <meta name={type + ':image'} content={image} />
    </>
  );
};

// Meta Dot Notation
MetaBase.displayName = 'Meta';
Title.displayName = 'Meta.Title';
Icons.displayName = 'Meta.Icons';
Social.displayName = 'Meta.Social';

export const Meta = Object.assign(MetaBase, { Title, Icons, Social });
