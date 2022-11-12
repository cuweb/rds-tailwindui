import React from 'react';
// import { rdsFontSizes, rdsPaddingY } from '../../utils/tailwindClasses';

export interface BannerProps {
  children: React.ReactNode;
  title?: string;
  fontSize?: '4xl' | '5xl' | '6xl';
  spacing?: 'base' | 'md' | 'lg' | 'xl' | 'full';
  isType?: 'light-fade' | 'dark-wave' | 'red-wave' | 'image';
  alignment?: 'vertical' | 'horizontal';
  imageUrl?: string;
}

export interface BannerImageProps {
  imageUrl?: string;
}

const styles = {
  header: `relative`,
  headerGrey: `bg-gradient-to-b from-white to-cu-black-100 text-cu-black-800`,
  headerRed: `bg-gradient-to-b from-cu-red to-cu-red-900 text-white`,
  headerBlack: `bg-cu-black-800 text-white`,
  headerAnimated: `bg-cu-black-800 text-white`,
  childWrapper: `mx-auto flex max-w-7xl flex-col gap-4 md:gap-8 justify-between [&>*]:z-10 [&>*:last-child]:z-0 px-6 md:px-8 py-12 md:py-20`,
  textWrapper: `flex flex-col gap-4 md:flex-[1_1_65%]`,
  buttonWrapper: `flex gap-6 flex-wrap md:flex-[1_1_35%] justify-end`,
  title: `text-3xl font-medium lg:text-4xl`,
  paragraph: `text-base lg:text-xl max-w-5xl`,
  alignVertical: `md:flex-col items-center text-center`,
  alignHorizontal: `md:flex-row items-center text-center md:text-left`,
};

const BannerBase = ({
  children,
  title,
  isType,
  imageUrl,
  alignment = 'vertical',
}: BannerProps) => {
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
      <div className={`${styles.childWrapper} ${alignmentStyles}`}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>{title}</h1>
          {/* <p className={styles.paragraph}>{para}</p> */}
        </div>
        {children}
        {isType === 'image' && <Banner.Image imageUrl={imageUrl} />}
        {isType === 'red-wave' && <Banner.Wave />}
        {isType === 'dark-wave' && <Banner.Wave />}
      </div>
    </header>
  );
};

const Image = ({ imageUrl }: BannerImageProps) => {
  return (
    <div className="absolute inset-0">
      <img
        className="object-cover w-full h-full"
        // src="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
        src={imageUrl}
        alt=""
      />
      <div
        className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
  );
};

const Wave = () => {
  return (
    <div className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-20 md:bg-cover"></div>
  );
};

const ButtonGroup = ({ children }: BannerProps) => {
  return <div className={styles.buttonWrapper}>{children}</div>;
};

export const Banner = Object.assign(BannerBase, {
  Image,
  Wave,
  //   Gradient,
  ButtonGroup,
});

BannerBase.displayName = 'Banner';
ButtonGroup.displayName = 'Banner.ButtonGroup';
