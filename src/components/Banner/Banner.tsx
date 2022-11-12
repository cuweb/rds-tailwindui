import React from 'react';
import { rdsFontSizes, rdsPaddingY } from '../../utils/tailwindClasses';

export interface BannerProps {
  children: React.ReactNode;
  title?: string;
  fontSize?: '4xl' | '5xl' | '6xl';
  spacing?: 'base' | 'md' | 'lg' | 'xl' | 'full';
  alignment?: 'vertical' | 'horizontal';
  isType?: 'image' | 'wave' | 'gradient';
}

export interface BannerImageProps {
  imageUrl?: string;
}

const BannerBase = ({
  children,
  title,
  fontSize = '4xl',
  alignment = 'vertical',
  isType,
  spacing = isType ? 'lg' : 'base',
}: BannerProps) => {
  const textWhite = isType ? 'text-white' : 'text-cu-black-800';
  const flexDirection =
    alignment === 'vertical' ? 'sm:flex-col' : 'sm:flex-row';

  let bgStyle;
  switch (isType) {
    case 'image':
      bgStyle = 'bg-cu-black-900';
      break;
    case 'gradient':
      bgStyle = 'bg-cu-black-900';
      break;
    case 'wave':
      bgStyle = 'bg-gradient-to-b from-cu-red to-cu-red-900';
      break;
    default:
      bgStyle = 'bg-gradient-to-b from-white to-cu-black-100';
  }

  return (
    <header className="relative bg-cu-black-50">
      <div
        className={`flex flex-col ${flexDirection} items-center justify-center gap-8 px-8 py-8 lg:px-8 ${bgStyle} ${rdsPaddingY[spacing]}`}
      >
        <h1
          className={`relative z-50 max-w-5xl mx-auto text-3xl font-medium ${textWhite} ${rdsFontSizes[fontSize]}`}
        >
          {title}
        </h1>
        {children}
      </div>
    </header>
  );
};

const Image = () => {
  return (
    <div className="absolute inset-0">
      <img
        className="object-cover w-full h-full"
        src="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
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

// const Gradient = () => {
//   const gradient = new GradientBg();
//   const ref = useRef();

//   const divStyle = {
//     '--gradient-color-1': '#c3e4ff',
//     '--gradient-color-2': '#6ec3f4',
//     '--gradient-color-3': '#eae2ff',
//     '--gradient-color-4': '#b9beff',
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//     top: 'auto',
//     left: '0',
//     bottom: '0',
//     overflow: 'hidden',
//     opacity: 0.5,
//   };

//   useEffect(() => {
//     if (ref.current) {
//       gradient.initGradient(ref.current);
//     }
//   }, [ref]);

//   return (
//     <canvas
//       style={divStyle}
//       className="sm:relative"
//       ref={ref}
//       data-transition-in
//     ></canvas>
//   );
// };

const ButtonGroup = ({ children }: BannerProps) => {
  return (
    <div className="relative z-50 flex flex-wrap justify-center gap-6 mx-auto max-w-7xl">
      {children}
    </div>
  );
};

export const Banner = Object.assign(BannerBase, {
  Image,
  Wave,
  //   Gradient,
  ButtonGroup,
});

BannerBase.displayName = 'Banner';
ButtonGroup.displayName = 'Banner.ButtonGroup';
