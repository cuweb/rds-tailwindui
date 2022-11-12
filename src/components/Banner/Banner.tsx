import React from 'react';
import { rdsFontSizes, rdsPaddingY } from '../../utils/tailwindClasses';

export interface BannerProps {
  children: React.ReactNode;
  title?: string;
  paragraph?: string;
  fontSize?: '4xl' | '5xl' | '6xl';
  spacing?: 'base' | 'md' | 'lg' | 'xl' | 'full';
  isType?: 'light-fade' | 'dark-wave' | 'red-wave' | 'image';
  alignment?: 'vertical' | 'horizontal';
  image?: string;
  imageAlt?: string;
}

export interface BannerImageProps {
  image?: string;
  imageAlt?: string;
}

const styles = {
  header: `relative`,
  headerGrey: `bg-gradient-to-b from-white to-cu-black-100 text-cu-black-800`,
  headerRed: `bg-gradient-to-b from-cu-red to-cu-red-900 text-white`,
  headerBlack: `bg-cu-black-800 text-white`,
  headerAnimated: `bg-cu-black-800 text-white`,
  childWrapper: `mx-auto flex max-w-7xl flex-col gap-4 md:gap-8 justify-center [&>*]:z-10 [&>*:last-child]:z-0 px-6 md:px-8 py-12`,
  textWrapper: `flex flex-col gap-4 md:gap-6 md:flex-1`,
  buttonWrapper: `flex gap-6 flex-wrap justify-end md:flex-1`,
  title: `font-semibold`,
  paragraph: `text-base lg:text-xl max-w-5xl`,
  alignVertical: `md:flex-col items-center text-center`,
  alignHorizontal: `md:flex-row items-center text-center md:text-left`,
};

const BannerBase = ({
  children,
  title,
  paragraph,
  isType,
  fontSize = '4xl',
  alignment = 'vertical',
  spacing = isType === 'image' ? 'xl' : 'base',
  image,
  imageAlt = 'Decorative background image',
}: BannerProps & BannerImageProps) => {
  let bgStyle;
  switch (isType) {
    case 'image':
      bgStyle = styles.headerBlack;
      break;
    case 'dark-wave':
      bgStyle = styles.headerBlack;
      break;
    case 'red-wave':
      bgStyle = styles.headerRed;
      break;
    default:
      bgStyle = styles.headerGrey;
  }

  const alignmentStyles =
    alignment === 'vertical' ? styles.alignVertical : styles.alignHorizontal;

  return (
    <header className={`${styles.header} ${bgStyle}`}>
      <div
        className={`${styles.childWrapper} ${alignmentStyles} ${rdsPaddingY[spacing]}`}
      >
        <div className={styles.textWrapper}>
          <h1 className={`${styles.title} ${rdsFontSizes[fontSize]}`}>
            {title}
          </h1>
          {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
        </div>
        {children}
        {isType === 'image' && (
          <BannerImage image={image} imageAlt={imageAlt} />
        )}
        {isType === 'red-wave' && <BannerWave />}
        {isType === 'dark-wave' && <BannerWave />}
      </div>
    </header>
  );
};

const BannerImage = ({ image, imageAlt }: BannerImageProps) => {
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
  // how do i get spacing from parent in order to add width if spacing === full
  // width classes to add are max-w-xs md:max-w-md
  return <div className={`${styles.buttonWrapper}`}>{children}</div>;
};

export const Banner = Object.assign(BannerBase, {
  ButtonGroup,
});

BannerBase.displayName = 'Banner';
ButtonGroup.displayName = 'Banner.ButtonGroup';
