export const rdsMaxWidth = {
  none: 'max-w-none',
  full: 'max-w-full',
  '3xl': 'max-w-3xl',
  '5xl': 'max-w-5xl',
  '7xl': 'max-w-7xl',
};

export const rdsGridColumns = {
  '1': '',
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-3',
  '4': 'md:grid-cols-2 lg:grid-cols-4',
  '1/3': 'lg:grid-cols-3 lg:[&>*:last-child]:col-span-2',
  '2/3': 'lg:grid-cols-3 lg:[&>*:first-child]:col-span-2',
};

export const rdsGridSpacing = {
  '0': 'gap-0 [&+.cu-column]:mt-0', // none
  '0.5': 'gap-0.5 [&+.cu-column]:mt-0.5', // 2px
  '1': 'gap-1 [&+.cu-column]:mt-1', // 4px
  '2': 'gap-2 [&+.cu-column]:mt-2', // 8px
  '4': 'gap-4 [&+.cu-column]:mt-4', // 16px
  '8': 'gap-8 [&+.cu-column]:mt-8', // 32px
  '10': 'gap-10 [&+.cu-column]:mt-10', // 40px
};

export const rdsBgColor = {
  black: 'bg-cu-black-800',
  white: 'bg-white',
  red: 'bg-cu-red',
  gray: 'bg-cu-black-50',
  'dark-gray': 'bg-cu-black-600',
};

export const rdsTextColor = {
  black: 'text-cu-black-800',
  white: 'text-white',
  red: 'text-cu-red',
  gray: 'text-cu-black-50',
  'dark-gray': 'text-cu-black-600',
};

export const rdsFontSizes = {
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export const rdsWidth = {
  4: 'w-4',
  6: 'w-6',
  8: 'w-8',
  12: 'w-12',
  16: 'w-16',
  20: 'w-20',
};

export const rdsHeight = {
  4: 'h-4',
  6: 'h-6',
  8: 'h-8',
  12: 'h-12',
  16: 'h-16',
  20: 'h-20',
};
