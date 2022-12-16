import React from 'react';
import { rdsFontSizes } from '../../utils/tailwindClasses';
import { BannerAnimated } from './Banner.Animated';

export interface BannerProps {
  children?: React.ReactNode;
  title?: string;
  paragraph?: string;
  fontSize?: '4xl' | '5xl' | '6xl';
  isType?: 'light-fade' | 'dark-wave' | 'red-wave' | 'image' | 'animated';
  align?: 'vertical' | 'horizontal';
  hasOverlap?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface BannerImgProps {
  image?: string;
  imageAlt?: string;
}

const typeStyles = {
  'light-fade': `bg-gradient-to-b from-white to-cu-black-100 text-cu-black-800`,
  'dark-wave': `bg-cu-black-800 text-white`,
  'red-wave': `bg-gradient-to-b from-cu-red to-cu-red-900 text-white`,
  animated: `bg-white text-cu-black-800`,
  image: `bg-cu-black-800 text-white`,
};

const contentStyles = {
  title: `font-semibold text-3xl`,
  paragraph: `text-base lg:text-xl max-w-5xl`,
};

const otherStyles = {
  buttonWrapper: `flex gap-6 flex-wrap md:flex-1`,
  //   overlap: `pb-20 md:pb-36 [&+main]:relative [&+main]:z-20 [&+main]:-mt-12 md:[&+main]:-mt-28`,
  overlap: `pb-20 md:pb-36`,
};

const BannerBase = ({
  children,
  title,
  paragraph,
  isType = 'light-fade',
  fontSize = '4xl',
  align = 'vertical',
  hasOverlap,
  image,
  imageAlt = 'Decorative background image',
}: BannerProps & BannerImgProps) => {
  const bannerSpacing = isType === 'image' ? 'md:py-48' : 'md:py-20';
  const flexAlign =
    align === 'vertical'
      ? 'flex-col last:[&>*]:justify-center'
      : 'flex-col md:flex-row last:[&>*]:justify-center last:md:[&>*]:justify-end';

  const hasParaAndButtons =
    paragraph && children ? ' md:max-w-3xl md:w-8/12' : '';

  const contentAlign =
    align === 'vertical'
      ? 'text-center'
      : 'text-center md:text-left' + hasParaAndButtons;

  const overlapStyles = hasOverlap ? otherStyles.overlap : '';

  return (
    <>
      <header
        className={`relative ${typeStyles[isType]} py-8 px-6  ${bannerSpacing} ${overlapStyles} md:flex md:items-center md:px-8 md:min-h-[240px]`}
        id="banner"
      >
        <div
          className={`z-10 flex flex-1 ${flexAlign} items-center justify-center gap-8 m-auto max-w-7xl [&>*]:z-10`}
        >
          <div className={`flex flex-auto flex-col gap-4 ${contentAlign}`}>
            <h1 className={`${contentStyles.title} ${rdsFontSizes[fontSize]}`}>
              {title}
            </h1>
            {paragraph && (
              <p className={contentStyles.paragraph}>{paragraph}</p>
            )}
          </div>
          {children}
        </div>

        {isType === 'image' && <BannerImg image={image} imageAlt={imageAlt} />}
        {isType === 'dark-wave' && <BannerWave />}
        {isType === 'red-wave' && <BannerWave />}
        {isType === 'animated' && <BannerAnimated />}
      </header>
    </>
  );
};

const BannerImg = ({ image, imageAlt }: BannerImgProps) => {
  return (
    <div className="absolute inset-0">
      <img className="object-cover w-full h-full" src={image} alt={imageAlt} />
      <div
        className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
  );
};

const BannerWave = () => {
  return (
    <div className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-20 md:bg-cover"></div>
  );
};

const ButtonGroup = ({ children }: BannerProps) => {
  return (
    <div className={`buttons ${otherStyles.buttonWrapper}`}>{children}</div>
  );
};

export const Banner = Object.assign(BannerBase, {
  ButtonGroup,
});

BannerBase.displayName = 'Banner';
ButtonGroup.displayName = 'Banner.ButtonGroup';
