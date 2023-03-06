import React, { useCallback, useState } from 'react';
import { Meta } from '@storybook/react';
import { VideoCard } from './VideoCard';
// import { Column } from '../../../layouts';
// import { VideoCardData as data } from './VideoCardData';

export default {
  title: 'Cards & Lists/Video/Card',
  component: VideoCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof VideoCard>;

export const YouTube = () => {
  const [s, setSelectedDate] = useState(null);
  const callbackcal = useCallback(
    (itemSelected: any) => {
      setSelectedDate(itemSelected);
    },
    [setSelectedDate]
  );
  console.log('sss', s);
  return (
    <VideoCard
      callback={callbackcal}
      source="https://www.youtube.com/watch?v=3PUK_wRVzHI"
      tags={{
        category: [
          {
            id: 1,
            name: 'Category One',
            slug: 'category-one',
          },
          {
            id: 2,
            name: 'Category Two',
            slug: 'category-two',
          },
        ],
      }}
    />
  );
};

// export const Vimeo = () => {
//   return (
//     <VideoCard
//       source="https://vimeo.com/106595658"
//       tags={{
//         category: [
//           {
//             id: 1,
//             name: 'Category One',
//             slug: 'category-one',
//           },
//           {
//             id: 2,
//             name: 'Category Two',
//             slug: 'category-two',
//           },
//         ],
//       }}
//     />
//   );
// };

// export const GridCards = () => (
//   <Column cols="3" gridGap="10" maxWidth="7xl">
//     {data.map(item => (
//       <VideoCard source={item?.source} tags={item?.tags} />
//     ))}
//   </Column>
// );

YouTube.storyName = 'YouTube';
// Vimeo.storyName = 'Vimeo';
// GridCards.storyName = 'Grid Card Layout';
