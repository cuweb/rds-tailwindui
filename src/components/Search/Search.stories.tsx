import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Search, SearchProps } from './Search';

export default {
  title: 'Components/Input/Search',
  component: Search,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Search>;

const database = [
  {
    id: 58,
    name: 'Gussi',
    url: 'http://dummyimage.com/239x100.png/dddddd/000000',
  },
  {
    id: 94,
    name: 'Tally',
    url: 'http://dummyimage.com/119x100.png/dddddd/000000',
  },
  {
    id: 81,
    name: 'Ruby',
    url: 'http://dummyimage.com/156x100.png/cc0000/ffffff',
  },
  {
    id: 48,
    name: 'Cristionna',
    url: 'http://dummyimage.com/243x100.png/ff4444/ffffff',
  },
  {
    id: 6,
    name: 'Calley',
    url: 'http://dummyimage.com/167x100.png/cc0000/ffffff',
  },
  {
    id: 27,
    name: 'Nilson',
    url: 'http://dummyimage.com/175x100.png/dddddd/000000',
  },
  {
    id: 62,
    name: 'Papageno',
    url: 'http://dummyimage.com/214x100.png/ff4444/ffffff',
  },
  {
    id: 95,
    name: 'Myrlene',
    url: 'http://dummyimage.com/224x100.png/5fa2dd/ffffff',
  },
  {
    id: 46,
    name: 'Archer',
    url: 'http://dummyimage.com/138x100.png/ff4444/ffffff',
  },
  {
    id: 79,
    name: 'Stephana',
    url: 'http://dummyimage.com/105x100.png/ff4444/ffffff',
  },
  {
    id: 52,
    name: 'Tine',
    url: 'http://dummyimage.com/134x100.png/dddddd/000000',
  },
  {
    id: 67,
    name: 'Jorrie',
    url: 'http://dummyimage.com/210x100.png/cc0000/ffffff',
  },
  {
    id: 35,
    name: 'Elisabetta',
    url: 'http://dummyimage.com/106x100.png/5fa2dd/ffffff',
  },
  {
    id: 77,
    name: 'Maurice',
    url: 'http://dummyimage.com/226x100.png/cc0000/ffffff',
  },
  {
    id: 68,
    name: 'Nerta',
    url: 'http://dummyimage.com/230x100.png/ff4444/ffffff',
  },
  {
    id: 21,
    name: 'Gregory',
    url: 'http://dummyimage.com/101x100.png/cc0000/ffffff',
  },
  {
    id: 97,
    name: 'Quinta',
    url: 'http://dummyimage.com/132x100.png/dddddd/000000',
  },
  {
    id: 12,
    name: 'Remus',
    url: 'http://dummyimage.com/173x100.png/dddddd/000000',
  },
  {
    id: 65,
    name: 'Kristos',
    url: 'http://dummyimage.com/174x100.png/cc0000/ffffff',
  },
  {
    id: 40,
    name: 'Paxton',
    url: 'http://dummyimage.com/131x100.png/dddddd/000000',
  },
  {
    id: 46,
    name: 'Isak',
    url: 'http://dummyimage.com/209x100.png/5fa2dd/ffffff',
  },
  {
    id: 18,
    name: 'Anastassia',
    url: 'http://dummyimage.com/188x100.png/5fa2dd/ffffff',
  },
  {
    id: 2,
    name: 'Lee',
    url: 'http://dummyimage.com/187x100.png/cc0000/ffffff',
  },
  {
    id: 35,
    name: 'Kara-lynn',
    url: 'http://dummyimage.com/231x100.png/5fa2dd/ffffff',
  },
  {
    id: 62,
    name: 'Maisey',
    url: 'http://dummyimage.com/163x100.png/5fa2dd/ffffff',
  },
  {
    id: 83,
    name: 'Mikey',
    url: 'http://dummyimage.com/169x100.png/dddddd/000000',
  },
  {
    id: 77,
    name: 'Boothe',
    url: 'http://dummyimage.com/189x100.png/5fa2dd/ffffff',
  },
  {
    id: 76,
    name: 'Alon',
    url: 'http://dummyimage.com/121x100.png/dddddd/000000',
  },
  {
    id: 92,
    name: 'Ermina',
    url: 'http://dummyimage.com/104x100.png/5fa2dd/ffffff',
  },
  {
    id: 56,
    name: 'Zelig',
    url: 'http://dummyimage.com/204x100.png/ff4444/ffffff',
  },
];

const noUrl = [
  {
    id: 56,
    name: 'Zelig',
  },
  {
    id: 92,
    name: 'Ermina',
  },
];

// const DefaultTemplate: Story<SearchProps> = args => (
//   <Search searchDatabase={database} />
// );

// export const Default = DefaultTemplate.bind({});
// Default.args = {
//   hasborder: true,
//   searchDatabase: people.data,
//   searchOn: 'name',
// };

export const searchDefault: Story<SearchProps> = () => (
  <Search searchDatabase={database} searchOn="name" />
);

export const searchHasBorder: Story<SearchProps> = () => (
  <Search searchDatabase={database} searchOn="name" hasborder />
);

export const ValidationUrl: Story<SearchProps> = () => (
  <Search searchDatabase={noUrl} searchOn="name" />
);

export const ValidationKey: Story<SearchProps> = () => (
  <Search searchDatabase={database} searchOn="age" />
);
