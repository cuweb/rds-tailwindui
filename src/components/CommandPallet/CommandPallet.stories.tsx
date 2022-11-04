import React from 'react';
import { Meta, Story } from '@storybook/react';

import CommandPallet, { CommandPalletProps } from './CommandPallet';
import { useState } from '@storybook/addons';

export default {
  title: 'Components/Input/CommandPallet',
  component: CommandPallet,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof CommandPallet>;

export const Default: Story<CommandPalletProps> = () => {
  // click anywhere set click to false
  return <CommandPallet />;
};

// export interface peopleProps {
//   id: number;
//   name: string;
//   url: string;
// }

// const people: peopleProps[] = [
//   {
//     id: 1,
//     name: 'Ruttger',
//     url:
//       'https://house.gov/mauris.js?integer=nibh&tincidunt=fusce&ante=lacus&vel=purus&ipsum=aliquet&praesent=at&blandit=feugiat&lacinia=non&erat=pretium&vestibulum=quis&sed=lectus&magna=suspendisse&at=potenti&nunc=in&commodo=eleifend&placerat=quam&praesent=a&blandit=odio&nam=in&nulla=hac&integer=habitasse&pede=platea&justo=dictumst&lacinia=maecenas&eget=ut&tincidunt=massa&eget=quis&tempus=augue&vel=luctus&pede=tincidunt&morbi=nulla&porttitor=mollis&lorem=molestie&id=lorem&ligula=quisque&suspendisse=ut&ornare=erat&consequat=curabitur&lectus=gravida&in=nisi&est=at&risus=nibh&auctor=in&sed=hac&tristique=habitasse&in=platea&tempus=dictumst&sit=aliquam&amet=augue&sem=quam&fusce=sollicitudin&consequat=vitae&nulla=consectetuer&nisl=eget&nunc=rutrum&nisl=at&duis=lorem&bibendum=integer&felis=tincidunt&sed=ante&interdum=vel&venenatis=ipsum&turpis=praesent&enim=blandit&blandit=lacinia&mi=erat&in=vestibulum&porttitor=sed&pede=magna&justo=at&eu=nunc&massa=commodo&donec=placerat&dapibus=praesent&duis=blandit&at=nam&velit=nulla&eu=integer&est=pede&congue=justo&elementum=lacinia&in=eget&hac=tincidunt&habitasse=eget&platea=tempus&dictumst=vel&morbi=pede&vestibulum=morbi&velit=porttitor&id=lorem&pretium=id&iaculis=ligula&diam=suspendisse&erat=ornare&fermentum=consequat&justo=lectus&nec=in&condimentum=est&neque=risus&sapien=auctor',
//   },
//   {
//     id: 2,
//     name: 'Kalindi',
//     url:
//       'http://wordpress.com/cras/mi/pede/malesuada/in.html?dui=ipsum&nec=aliquam&nisi=non&volutpat=mauris&eleifend=morbi&donec=non&ut=lectus&dolor=aliquam&morbi=sit&vel=amet&lectus=diam&in=in&quam=magna&fringilla=bibendum&rhoncus=imperdiet&mauris=nullam&enim=orci&leo=pede&rhoncus=venenatis&sed=non&vestibulum=sodales&sit=sed&amet=tincidunt&cursus=eu&id=felis',
//   },
//   {
//     id: 3,
//     name: 'Clyve',
//     url:
//       'https://aol.com/morbi/non/lectus/aliquam/sit.js?tristique=velit&fusce=eu&congue=est&diam=congue&id=elementum&ornare=in&imperdiet=hac&sapien=habitasse&urna=platea&pretium=dictumst&nisl=morbi&ut=vestibulum&volutpat=velit&sapien=id&arcu=pretium&sed=iaculis&augue=diam&aliquam=erat&erat=fermentum&volutpat=justo&in=nec&congue=condimentum&etiam=neque&justo=sapien&etiam=placerat&pretium=ante&iaculis=nulla&justo=justo&in=aliquam&hac=quis&habitasse=turpis&platea=eget&dictumst=elit&etiam=sodales&faucibus=scelerisque&cursus=mauris&urna=sit&ut=amet&tellus=eros&nulla=suspendisse&ut=accumsan&erat=tortor&id=quis&mauris=turpis&vulputate=sed&elementum=ante&nullam=vivamus&varius=tortor&nulla=duis&facilisi=mattis&cras=egestas&non=metus&velit=aenean&nec=fermentum&nisi=donec&vulputate=ut&nonummy=mauris&maecenas=eget&tincidunt=massa&lacus=tempor&at=convallis&velit=nulla&vivamus=neque&vel=libero&nulla=convallis',
//   },
//   {
//     id: 4,
//     name: 'Barnett',
//     url:
//       'https://fastcompany.com/blandit/mi/in/porttitor/pede/justo.xml?ligula=erat&nec=nulla&sem=tempus&duis=vivamus&aliquam=in&convallis=felis&nunc=eu&proin=sapien&at=cursus&turpis=vestibulum&a=proin&pede=eu&posuere=mi&nonummy=nulla&integer=ac&non=enim&velit=in&donec=tempor&diam=turpis&neque=nec&vestibulum=euismod&eget=scelerisque&vulputate=quam&ut=turpis&ultrices=adipiscing&vel=lorem&augue=vitae&vestibulum=mattis&ante=nibh&ipsum=ligula&primis=nec&in=sem&faucibus=duis&orci=aliquam&luctus=convallis&et=nunc&ultrices=proin&posuere=at&cubilia=turpis&curae=a&donec=pede&pharetra=posuere&magna=nonummy&vestibulum=integer&aliquet=non&ultrices=velit&erat=donec&tortor=diam&sollicitudin=neque&mi=vestibulum&sit=eget&amet=vulputate&lobortis=ut&sapien=ultrices&sapien=vel&non=augue&mi=vestibulum&integer=ante&ac=ipsum&neque=primis&duis=in&bibendum=faucibus&morbi=orci&non=luctus&quam=et&nec=ultrices&dui=posuere&luctus=cubilia&rutrum=curae&nulla=donec&tellus=pharetra&in=magna&sagittis=vestibulum&dui=aliquet&vel=ultrices&nisl=erat&duis=tortor&ac=sollicitudin&nibh=mi&fusce=sit&lacus=amet&purus=lobortis&aliquet=sapien&at=sapien&feugiat=non&non=mi&pretium=integer',
//   },
//   {
//     id: 5,
//     name: 'Colas',
//     url:
//       'http://domainmarket.com/ante.json?nunc=tincidunt&proin=eu&at=felis&turpis=fusce&a=posuere&pede=felis&posuere=sed&nonummy=lacus&integer=morbi&non=sem&velit=mauris&donec=laoreet&diam=ut&neque=rhoncus&vestibulum=aliquet&eget=pulvinar&vulputate=sed&ut=nisl&ultrices=nunc&vel=rhoncus',
//   },
//   {
//     id: 6,
//     name: 'Aristotle',
//     url:
//       'http://tinypic.com/nec/nisi.png?maecenas=nam&leo=nulla&odio=integer&condimentum=pede&id=justo&luctus=lacinia&nec=eget&molestie=tincidunt&sed=eget&justo=tempus&pellentesque=vel&viverra=pede&pede=morbi&ac=porttitor&diam=lorem&cras=id&pellentesque=ligula&volutpat=suspendisse&dui=ornare&maecenas=consequat&tristique=lectus&est=in&et=est&tempus=risus&semper=auctor&est=sed',
//   },
//   {
//     id: 7,
//     name: 'Judah',
//     url:
//       'https://hatena.ne.jp/nam/dui.png?pede=justo&morbi=pellentesque&porttitor=viverra&lorem=pede&id=ac&ligula=diam&suspendisse=cras&ornare=pellentesque&consequat=volutpat&lectus=dui&in=maecenas&est=tristique&risus=est&auctor=et&sed=tempus&tristique=semper&in=est&tempus=quam&sit=pharetra&amet=magna&sem=ac&fusce=consequat&consequat=metus&nulla=sapien&nisl=ut&nunc=nunc&nisl=vestibulum&duis=ante&bibendum=ipsum&felis=primis&sed=in&interdum=faucibus&venenatis=orci&turpis=luctus&enim=et&blandit=ultrices&mi=posuere&in=cubilia&porttitor=curae&pede=mauris&justo=viverra&eu=diam&massa=vitae&donec=quam&dapibus=suspendisse&duis=potenti&at=nullam&velit=porttitor&eu=lacus&est=at&congue=turpis&elementum=donec&in=posuere&hac=metus&habitasse=vitae&platea=ipsum&dictumst=aliquam&morbi=non&vestibulum=mauris&velit=morbi&id=non&pretium=lectus&iaculis=aliquam&diam=sit&erat=amet&fermentum=diam&justo=in&nec=magna&condimentum=bibendum&neque=imperdiet&sapien=nullam&placerat=orci&ante=pede&nulla=venenatis&justo=non&aliquam=sodales&quis=sed&turpis=tincidunt&eget=eu&elit=felis&sodales=fusce&scelerisque=posuere&mauris=felis&sit=sed&amet=lacus&eros=morbi&suspendisse=sem&accumsan=mauris&tortor=laoreet&quis=ut&turpis=rhoncus&sed=aliquet&ante=pulvinar&vivamus=sed&tortor=nisl&duis=nunc&mattis=rhoncus&egestas=dui&metus=vel&aenean=sem',
//   },
//   {
//     id: 8,
//     name: 'Oralee',
//     url:
//       'http://nhs.uk/a/pede/posuere.json?donec=quis&posuere=turpis&metus=eget&vitae=elit&ipsum=sodales',
//   },
//   {
//     id: 9,
//     name: 'Adriana',
//     url:
//       'http://reuters.com/tristique/fusce/congue/diam.xml?nisl=integer&duis=non&ac=velit&nibh=donec&fusce=diam&lacus=neque&purus=vestibulum&aliquet=eget&at=vulputate&feugiat=ut&non=ultrices&pretium=vel&quis=augue&lectus=vestibulum&suspendisse=ante&potenti=ipsum&in=primis&eleifend=in&quam=faucibus&a=orci&odio=luctus&in=et&hac=ultrices&habitasse=posuere&platea=cubilia&dictumst=curae&maecenas=donec&ut=pharetra&massa=magna&quis=vestibulum&augue=aliquet&luctus=ultrices&tincidunt=erat&nulla=tortor&mollis=sollicitudin&molestie=mi&lorem=sit&quisque=amet&ut=lobortis&erat=sapien&curabitur=sapien&gravida=non&nisi=mi&at=integer',
//   },
//   {
//     id: 10,
//     name: 'Ferrel',
//     url:
//       'http://prweb.com/nibh/in/lectus/pellentesque/at/nulla.json?vivamus=et&vel=ultrices&nulla=posuere&eget=cubilia&eros=curae&elementum=donec&pellentesque=pharetra&quisque=magna&porta=vestibulum&volutpat=aliquet&erat=ultrices&quisque=erat&erat=tortor&eros=sollicitudin&viverra=mi&eget=sit&congue=amet&eget=lobortis&semper=sapien&rutrum=sapien&nulla=non',
//   },
//   {
//     id: 11,
//     name: 'Keenan',
//     url:
//       'https://163.com/dictumst/etiam.jsp?mauris=interdum&morbi=mauris&non=non&lectus=ligula&aliquam=pellentesque&sit=ultrices&amet=phasellus&diam=id&in=sapien&magna=in&bibendum=sapien&imperdiet=iaculis&nullam=congue&orci=vivamus&pede=metus',
//   },
//   {
//     id: 12,
//     name: 'Beverlee',
//     url:
//       'http://timesonline.co.uk/ut/dolor/morbi/vel/lectus.png?posuere=eleifend&cubilia=luctus&curae=ultricies&nulla=eu&dapibus=nibh&dolor=quisque&vel=id&est=justo&donec=sit&odio=amet&justo=sapien&sollicitudin=dignissim&ut=vestibulum&suscipit=vestibulum&a=ante&feugiat=ipsum&et=primis&eros=in&vestibulum=faucibus&ac=orci&est=luctus&lacinia=et&nisi=ultrices&venenatis=posuere&tristique=cubilia&fusce=curae&congue=nulla&diam=dapibus&id=dolor&ornare=vel&imperdiet=est&sapien=donec&urna=odio&pretium=justo&nisl=sollicitudin&ut=ut&volutpat=suscipit&sapien=a&arcu=feugiat&sed=et&augue=eros&aliquam=vestibulum&erat=ac&volutpat=est&in=lacinia&congue=nisi&etiam=venenatis&justo=tristique&etiam=fusce&pretium=congue&iaculis=diam&justo=id&in=ornare&hac=imperdiet&habitasse=sapien&platea=urna&dictumst=pretium&etiam=nisl&faucibus=ut&cursus=volutpat&urna=sapien&ut=arcu&tellus=sed&nulla=augue&ut=aliquam&erat=erat&id=volutpat&mauris=in&vulputate=congue&elementum=etiam&nullam=justo&varius=etiam&nulla=pretium&facilisi=iaculis&cras=justo&non=in',
//   },
//   {
//     id: 13,
//     name: 'Meggy',
//     url:
//       'http://scientificamerican.com/in/libero/ut.jsp?nulla=congue&ut=eget&erat=semper&id=rutrum&mauris=nulla&vulputate=nunc&elementum=purus&nullam=phasellus&varius=in&nulla=felis&facilisi=donec&cras=semper&non=sapien&velit=a&nec=libero&nisi=nam&vulputate=dui&nonummy=proin&maecenas=leo&tincidunt=odio&lacus=porttitor&at=id&velit=consequat&vivamus=in&vel=consequat&nulla=ut&eget=nulla&eros=sed&elementum=accumsan&pellentesque=felis&quisque=ut&porta=at&volutpat=dolor&erat=quis&quisque=odio&erat=consequat&eros=varius',
//   },
//   {
//     id: 14,
//     name: 'Saidee',
//     url:
//       'http://columbia.edu/congue/diam/id/ornare/imperdiet/sapien/urna.png?interdum=id&eu=mauris&tincidunt=vulputate&in=elementum&leo=nullam&maecenas=varius&pulvinar=nulla&lobortis=facilisi&est=cras&phasellus=non&sit=velit&amet=nec&erat=nisi&nulla=vulputate&tempus=nonummy&vivamus=maecenas',
//   },
//   {
//     id: 15,
//     name: 'Calv',
//     url:
//       'https://phoca.cz/ultrices/vel/augue/vestibulum/ante/ipsum.jpg?rhoncus=eget&aliquam=rutrum&lacus=at&morbi=lorem&quis=integer&tortor=tincidunt&id=ante&nulla=vel&ultrices=ipsum&aliquet=praesent&maecenas=blandit&leo=lacinia&odio=erat&condimentum=vestibulum&id=sed&luctus=magna&nec=at&molestie=nunc&sed=commodo&justo=placerat&pellentesque=praesent&viverra=blandit&pede=nam&ac=nulla&diam=integer&cras=pede&pellentesque=justo&volutpat=lacinia&dui=eget&maecenas=tincidunt&tristique=eget&est=tempus&et=vel&tempus=pede&semper=morbi&est=porttitor&quam=lorem&pharetra=id&magna=ligula&ac=suspendisse&consequat=ornare&metus=consequat',
//   },
//   {
//     id: 16,
//     name: 'Ludovico',
//     url:
//       'https://goodreads.com/ligula/in/lacus/curabitur.png?ac=ut&nibh=massa&fusce=volutpat&lacus=convallis&purus=morbi&aliquet=odio&at=odio&feugiat=elementum&non=eu&pretium=interdum&quis=eu&lectus=tincidunt&suspendisse=in&potenti=leo&in=maecenas&eleifend=pulvinar&quam=lobortis&a=est&odio=phasellus&in=sit&hac=amet&habitasse=erat&platea=nulla&dictumst=tempus&maecenas=vivamus&ut=in&massa=felis&quis=eu&augue=sapien&luctus=cursus&tincidunt=vestibulum&nulla=proin&mollis=eu&molestie=mi&lorem=nulla&quisque=ac&ut=enim&erat=in&curabitur=tempor&gravida=turpis&nisi=nec&at=euismod&nibh=scelerisque&in=quam&hac=turpis&habitasse=adipiscing&platea=lorem&dictumst=vitae&aliquam=mattis&augue=nibh&quam=ligula&sollicitudin=nec&vitae=sem&consectetuer=duis&eget=aliquam&rutrum=convallis&at=nunc&lorem=proin&integer=at&tincidunt=turpis&ante=a&vel=pede&ipsum=posuere&praesent=nonummy&blandit=integer&lacinia=non&erat=velit&vestibulum=donec&sed=diam&magna=neque&at=vestibulum&nunc=eget&commodo=vulputate&placerat=ut&praesent=ultrices&blandit=vel&nam=augue&nulla=vestibulum&integer=ante&pede=ipsum&justo=primis&lacinia=in&eget=faucibus&tincidunt=orci&eget=luctus&tempus=et&vel=ultrices&pede=posuere&morbi=cubilia&porttitor=curae&lorem=donec&id=pharetra&ligula=magna&suspendisse=vestibulum&ornare=aliquet&consequat=ultrices&lectus=erat',
//   },
//   {
//     id: 17,
//     name: 'Bartel',
//     url:
//       'http://booking.com/vestibulum/velit/id/pretium.xml?ac=suspendisse&neque=accumsan&duis=tortor&bibendum=quis&morbi=turpis&non=sed&quam=ante&nec=vivamus&dui=tortor&luctus=duis&rutrum=mattis&nulla=egestas&tellus=metus&in=aenean&sagittis=fermentum&dui=donec&vel=ut&nisl=mauris&duis=eget&ac=massa&nibh=tempor&fusce=convallis&lacus=nulla&purus=neque&aliquet=libero&at=convallis&feugiat=eget&non=eleifend&pretium=luctus&quis=ultricies&lectus=eu&suspendisse=nibh&potenti=quisque&in=id&eleifend=justo&quam=sit&a=amet&odio=sapien&in=dignissim&hac=vestibulum&habitasse=vestibulum&platea=ante&dictumst=ipsum&maecenas=primis&ut=in&massa=faucibus&quis=orci&augue=luctus&luctus=et&tincidunt=ultrices&nulla=posuere&mollis=cubilia&molestie=curae&lorem=nulla&quisque=dapibus&ut=dolor&erat=vel&curabitur=est&gravida=donec&nisi=odio&at=justo&nibh=sollicitudin&in=ut&hac=suscipit&habitasse=a&platea=feugiat&dictumst=et&aliquam=eros&augue=vestibulum&quam=ac&sollicitudin=est&vitae=lacinia&consectetuer=nisi&eget=venenatis&rutrum=tristique&at=fusce&lorem=congue&integer=diam&tincidunt=id&ante=ornare&vel=imperdiet&ipsum=sapien&praesent=urna&blandit=pretium&lacinia=nisl&erat=ut&vestibulum=volutpat&sed=sapien&magna=arcu&at=sed&nunc=augue',
//   },
//   {
//     id: 18,
//     name: 'Englebert',
//     url:
//       'https://zdnet.com/volutpat/eleifend.json?amet=lorem&justo=vitae&morbi=mattis&ut=nibh&odio=ligula&cras=nec&mi=sem&pede=duis&malesuada=aliquam&in=convallis&imperdiet=nunc&et=proin&commodo=at&vulputate=turpis&justo=a',
//   },
//   {
//     id: 19,
//     name: 'Pavlov',
//     url:
//       'http://alibaba.com/ultrices/aliquet/maecenas/leo/odio/condimentum/id.js?ipsum=velit&aliquam=id&non=pretium&mauris=iaculis&morbi=diam&non=erat&lectus=fermentum&aliquam=justo&sit=nec&amet=condimentum&diam=neque&in=sapien&magna=placerat&bibendum=ante&imperdiet=nulla&nullam=justo&orci=aliquam&pede=quis&venenatis=turpis&non=eget&sodales=elit&sed=sodales&tincidunt=scelerisque&eu=mauris&felis=sit&fusce=amet&posuere=eros&felis=suspendisse&sed=accumsan&lacus=tortor&morbi=quis&sem=turpis&mauris=sed&laoreet=ante&ut=vivamus&rhoncus=tortor&aliquet=duis&pulvinar=mattis&sed=egestas&nisl=metus&nunc=aenean&rhoncus=fermentum&dui=donec&vel=ut&sem=mauris&sed=eget&sagittis=massa&nam=tempor&congue=convallis&risus=nulla&semper=neque&porta=libero&volutpat=convallis&quam=eget',
//   },
//   {
//     id: 20,
//     name: 'Kelwin',
//     url:
//       'https://google.fr/justo/eu/massa/donec.json?platea=felis&dictumst=donec&maecenas=semper&ut=sapien&massa=a&quis=libero&augue=nam&luctus=dui&tincidunt=proin&nulla=leo&mollis=odio&molestie=porttitor&lorem=id&quisque=consequat&ut=in&erat=consequat&curabitur=ut&gravida=nulla&nisi=sed&at=accumsan&nibh=felis&in=ut&hac=at&habitasse=dolor&platea=quis&dictumst=odio&aliquam=consequat&augue=varius&quam=integer&sollicitudin=ac&vitae=leo&consectetuer=pellentesque&eget=ultrices&rutrum=mattis&at=odio&lorem=donec&integer=vitae&tincidunt=nisi&ante=nam&vel=ultrices&ipsum=libero&praesent=non&blandit=mattis&lacinia=pulvinar&erat=nulla&vestibulum=pede&sed=ullamcorper&magna=augue&at=a',
//   },
//   {
//     id: 21,
//     name: 'Pearline',
//     url:
//       'https://latimes.com/purus/aliquet/at/feugiat/non/pretium/quis.json?luctus=at&et=lorem&ultrices=integer&posuere=tincidunt&cubilia=ante&curae=vel&mauris=ipsum&viverra=praesent&diam=blandit&vitae=lacinia&quam=erat&suspendisse=vestibulum&potenti=sed&nullam=magna&porttitor=at&lacus=nunc&at=commodo&turpis=placerat&donec=praesent&posuere=blandit&metus=nam&vitae=nulla&ipsum=integer&aliquam=pede&non=justo&mauris=lacinia&morbi=eget&non=tincidunt&lectus=eget&aliquam=tempus&sit=vel&amet=pede&diam=morbi&in=porttitor&magna=lorem&bibendum=id&imperdiet=ligula&nullam=suspendisse&orci=ornare&pede=consequat&venenatis=lectus&non=in&sodales=est&sed=risus&tincidunt=auctor&eu=sed&felis=tristique&fusce=in&posuere=tempus&felis=sit&sed=amet&lacus=sem&morbi=fusce&sem=consequat&mauris=nulla&laoreet=nisl&ut=nunc&rhoncus=nisl&aliquet=duis&pulvinar=bibendum&sed=felis&nisl=sed&nunc=interdum&rhoncus=venenatis&dui=turpis&vel=enim',
//   },
//   {
//     id: 22,
//     name: 'Pammie',
//     url:
//       'http://cargocollective.com/dolor/sit/amet/consectetuer.png?sed=et&ante=ultrices&vivamus=posuere&tortor=cubilia&duis=curae&mattis=mauris&egestas=viverra&metus=diam&aenean=vitae&fermentum=quam&donec=suspendisse&ut=potenti&mauris=nullam&eget=porttitor&massa=lacus&tempor=at&convallis=turpis&nulla=donec&neque=posuere&libero=metus',
//   },
//   {
//     id: 23,
//     name: 'Yance',
//     url:
//       'http://sciencedaily.com/gravida/sem.xml?vel=et&nisl=magnis&duis=dis&ac=parturient&nibh=montes&fusce=nascetur&lacus=ridiculus&purus=mus&aliquet=etiam&at=vel&feugiat=augue&non=vestibulum&pretium=rutrum',
//   },
//   {
//     id: 24,
//     name: 'Upton',
//     url:
//       'https://washington.edu/eget/tincidunt/eget/tempus/vel/pede.jpg?luctus=purus&rutrum=eu&nulla=magna&tellus=vulputate&in=luctus&sagittis=cum&dui=sociis&vel=natoque&nisl=penatibus&duis=et&ac=magnis&nibh=dis&fusce=parturient&lacus=montes&purus=nascetur&aliquet=ridiculus&at=mus&feugiat=vivamus&non=vestibulum&pretium=sagittis&quis=sapien&lectus=cum&suspendisse=sociis&potenti=natoque&in=penatibus&eleifend=et&quam=magnis&a=dis&odio=parturient&in=montes&hac=nascetur&habitasse=ridiculus&platea=mus&dictumst=etiam&maecenas=vel&ut=augue&massa=vestibulum&quis=rutrum&augue=rutrum&luctus=neque&tincidunt=aenean&nulla=auctor&mollis=gravida&molestie=sem&lorem=praesent&quisque=id&ut=massa&erat=id&curabitur=nisl&gravida=venenatis&nisi=lacinia&at=aenean&nibh=sit&in=amet&hac=justo&habitasse=morbi&platea=ut&dictumst=odio&aliquam=cras&augue=mi&quam=pede&sollicitudin=malesuada&vitae=in&consectetuer=imperdiet&eget=et&rutrum=commodo&at=vulputate&lorem=justo&integer=in&tincidunt=blandit&ante=ultrices&vel=enim&ipsum=lorem&praesent=ipsum&blandit=dolor&lacinia=sit&erat=amet&vestibulum=consectetuer&sed=adipiscing&magna=elit&at=proin&nunc=interdum&commodo=mauris&placerat=non&praesent=ligula&blandit=pellentesque&nam=ultrices',
//   },
//   {
//     id: 25,
//     name: 'Cornell',
//     url:
//       'https://mashable.com/sapien/quis.png?quisque=nulla&id=tempus&justo=vivamus&sit=in&amet=felis&sapien=eu&dignissim=sapien&vestibulum=cursus&vestibulum=vestibulum&ante=proin&ipsum=eu&primis=mi&in=nulla&faucibus=ac&orci=enim&luctus=in&et=tempor&ultrices=turpis&posuere=nec&cubilia=euismod&curae=scelerisque&nulla=quam&dapibus=turpis&dolor=adipiscing&vel=lorem&est=vitae&donec=mattis&odio=nibh&justo=ligula&sollicitudin=nec&ut=sem&suscipit=duis&a=aliquam&feugiat=convallis&et=nunc&eros=proin&vestibulum=at&ac=turpis&est=a&lacinia=pede&nisi=posuere&venenatis=nonummy&tristique=integer&fusce=non&congue=velit&diam=donec&id=diam&ornare=neque&imperdiet=vestibulum&sapien=eget&urna=vulputate&pretium=ut&nisl=ultrices&ut=vel&volutpat=augue&sapien=vestibulum&arcu=ante&sed=ipsum&augue=primis&aliquam=in&erat=faucibus&volutpat=orci&in=luctus&congue=et&etiam=ultrices&justo=posuere&etiam=cubilia&pretium=curae&iaculis=donec&justo=pharetra&in=magna&hac=vestibulum&habitasse=aliquet&platea=ultrices&dictumst=erat&etiam=tortor&faucibus=sollicitudin&cursus=mi&urna=sit&ut=amet&tellus=lobortis&nulla=sapien&ut=sapien&erat=non&id=mi&mauris=integer&vulputate=ac&elementum=neque&nullam=duis&varius=bibendum&nulla=morbi',
//   },
//   {
//     id: 26,
//     name: 'Cosimo',
//     url:
//       'https://meetup.com/maecenas/ut/massa/quis/augue.html?sit=sollicitudin&amet=vitae&erat=consectetuer&nulla=eget&tempus=rutrum&vivamus=at&in=lorem&felis=integer&eu=tincidunt&sapien=ante&cursus=vel&vestibulum=ipsum&proin=praesent&eu=blandit&mi=lacinia&nulla=erat&ac=vestibulum&enim=sed&in=magna&tempor=at&turpis=nunc&nec=commodo&euismod=placerat&scelerisque=praesent&quam=blandit&turpis=nam&adipiscing=nulla&lorem=integer&vitae=pede&mattis=justo&nibh=lacinia&ligula=eget&nec=tincidunt&sem=eget&duis=tempus&aliquam=vel&convallis=pede&nunc=morbi&proin=porttitor&at=lorem&turpis=id&a=ligula&pede=suspendisse&posuere=ornare&nonummy=consequat&integer=lectus&non=in&velit=est&donec=risus&diam=auctor&neque=sed&vestibulum=tristique&eget=in&vulputate=tempus&ut=sit&ultrices=amet&vel=sem&augue=fusce&vestibulum=consequat&ante=nulla&ipsum=nisl&primis=nunc&in=nisl&faucibus=duis&orci=bibendum&luctus=felis&et=sed&ultrices=interdum&posuere=venenatis&cubilia=turpis&curae=enim&donec=blandit&pharetra=mi&magna=in&vestibulum=porttitor&aliquet=pede&ultrices=justo',
//   },
//   {
//     id: 27,
//     name: 'Wally',
//     url:
//       'https://economist.com/ultrices/vel/augue/vestibulum/ante/ipsum.jsp?venenatis=iaculis&non=diam&sodales=erat',
//   },
//   {
//     id: 28,
//     name: 'Constanta',
//     url:
//       'http://pcworld.com/consectetuer/adipiscing/elit/proin/risus/praesent.xml?morbi=aliquet&ut=maecenas&odio=leo&cras=odio&mi=condimentum&pede=id&malesuada=luctus&in=nec&imperdiet=molestie&et=sed&commodo=justo&vulputate=pellentesque&justo=viverra&in=pede&blandit=ac&ultrices=diam&enim=cras&lorem=pellentesque&ipsum=volutpat&dolor=dui&sit=maecenas&amet=tristique&consectetuer=est&adipiscing=et&elit=tempus&proin=semper&interdum=est&mauris=quam&non=pharetra&ligula=magna&pellentesque=ac&ultrices=consequat&phasellus=metus',
//   },
//   {
//     id: 29,
//     name: 'Alden',
//     url:
//       'https://scientificamerican.com/nunc/proin.jsp?non=phasellus&interdum=sit&in=amet&ante=erat&vestibulum=nulla&ante=tempus&ipsum=vivamus&primis=in&in=felis&faucibus=eu&orci=sapien&luctus=cursus&et=vestibulum&ultrices=proin&posuere=eu&cubilia=mi&curae=nulla&duis=ac&faucibus=enim&accumsan=in&odio=tempor&curabitur=turpis&convallis=nec&duis=euismod&consequat=scelerisque&dui=quam&nec=turpis&nisi=adipiscing&volutpat=lorem&eleifend=vitae&donec=mattis&ut=nibh&dolor=ligula&morbi=nec&vel=sem&lectus=duis&in=aliquam&quam=convallis&fringilla=nunc&rhoncus=proin&mauris=at&enim=turpis&leo=a&rhoncus=pede&sed=posuere&vestibulum=nonummy&sit=integer&amet=non&cursus=velit&id=donec&turpis=diam&integer=neque&aliquet=vestibulum&massa=eget&id=vulputate&lobortis=ut&convallis=ultrices&tortor=vel&risus=augue&dapibus=vestibulum&augue=ante&vel=ipsum&accumsan=primis&tellus=in&nisi=faucibus&eu=orci&orci=luctus&mauris=et&lacinia=ultrices&sapien=posuere&quis=cubilia&libero=curae&nullam=donec',
//   },
//   {
//     id: 30,
//     name: 'Barbabas',
//     url:
//       'https://amazon.com/ac/lobortis.js?in=dolor&porttitor=morbi&pede=vel&justo=lectus&eu=in&massa=quam&donec=fringilla&dapibus=rhoncus&duis=mauris&at=enim&velit=leo&eu=rhoncus&est=sed&congue=vestibulum&elementum=sit&in=amet&hac=cursus&habitasse=id&platea=turpis&dictumst=integer&morbi=aliquet&vestibulum=massa&velit=id&id=lobortis&pretium=convallis&iaculis=tortor&diam=risus&erat=dapibus&fermentum=augue&justo=vel&nec=accumsan&condimentum=tellus&neque=nisi&sapien=eu&placerat=orci&ante=mauris&nulla=lacinia&justo=sapien&aliquam=quis&quis=libero&turpis=nullam&eget=sit&elit=amet&sodales=turpis&scelerisque=elementum&mauris=ligula&sit=vehicula&amet=consequat&eros=morbi&suspendisse=a&accumsan=ipsum&tortor=integer&quis=a&turpis=nibh',
//   },
//   {
//     id: 31,
//     name: 'Erich',
//     url:
//       'https://prnewswire.com/praesent/blandit.json?commodo=eget&vulputate=massa&justo=tempor&in=convallis&blandit=nulla&ultrices=neque&enim=libero&lorem=convallis&ipsum=eget&dolor=eleifend&sit=luctus&amet=ultricies&consectetuer=eu&adipiscing=nibh&elit=quisque&proin=id&interdum=justo&mauris=sit&non=amet&ligula=sapien&pellentesque=dignissim&ultrices=vestibulum&phasellus=vestibulum&id=ante&sapien=ipsum&in=primis&sapien=in&iaculis=faucibus&congue=orci&vivamus=luctus&metus=et&arcu=ultrices&adipiscing=posuere&molestie=cubilia&hendrerit=curae&at=nulla&vulputate=dapibus&vitae=dolor&nisl=vel&aenean=est&lectus=donec&pellentesque=odio&eget=justo&nunc=sollicitudin&donec=ut&quis=suscipit&orci=a&eget=feugiat&orci=et&vehicula=eros&condimentum=vestibulum&curabitur=ac&in=est&libero=lacinia&ut=nisi&massa=venenatis&volutpat=tristique&convallis=fusce&morbi=congue&odio=diam&odio=id&elementum=ornare&eu=imperdiet&interdum=sapien&eu=urna&tincidunt=pretium&in=nisl',
//   },
//   {
//     id: 32,
//     name: 'Janice',
//     url:
//       'https://jiathis.com/justo/maecenas/rhoncus.jpg?duis=aliquam&ac=quis&nibh=turpis&fusce=eget&lacus=elit&purus=sodales&aliquet=scelerisque&at=mauris&feugiat=sit&non=amet&pretium=eros&quis=suspendisse&lectus=accumsan&suspendisse=tortor&potenti=quis&in=turpis&eleifend=sed&quam=ante&a=vivamus&odio=tortor&in=duis&hac=mattis&habitasse=egestas&platea=metus&dictumst=aenean&maecenas=fermentum&ut=donec&massa=ut&quis=mauris&augue=eget&luctus=massa&tincidunt=tempor&nulla=convallis&mollis=nulla&molestie=neque&lorem=libero&quisque=convallis&ut=eget&erat=eleifend&curabitur=luctus&gravida=ultricies&nisi=eu&at=nibh&nibh=quisque&in=id&hac=justo&habitasse=sit&platea=amet&dictumst=sapien&aliquam=dignissim&augue=vestibulum&quam=vestibulum',
//   },
//   {
//     id: 33,
//     name: 'Salvador',
//     url:
//       'http://cbsnews.com/diam.js?vestibulum=semper&sed=porta&magna=volutpat&at=quam&nunc=pede&commodo=lobortis&placerat=ligula&praesent=sit&blandit=amet&nam=eleifend&nulla=pede&integer=libero&pede=quis&justo=orci&lacinia=nullam&eget=molestie&tincidunt=nibh&eget=in&tempus=lectus&vel=pellentesque&pede=at&morbi=nulla&porttitor=suspendisse&lorem=potenti&id=cras&ligula=in&suspendisse=purus&ornare=eu&consequat=magna&lectus=vulputate&in=luctus&est=cum&risus=sociis&auctor=natoque&sed=penatibus&tristique=et&in=magnis&tempus=dis&sit=parturient&amet=montes&sem=nascetur&fusce=ridiculus&consequat=mus&nulla=vivamus&nisl=vestibulum&nunc=sagittis&nisl=sapien&duis=cum&bibendum=sociis&felis=natoque&sed=penatibus&interdum=et&venenatis=magnis&turpis=dis&enim=parturient&blandit=montes&mi=nascetur&in=ridiculus&porttitor=mus&pede=etiam&justo=vel&eu=augue&massa=vestibulum&donec=rutrum&dapibus=rutrum&duis=neque&at=aenean&velit=auctor&eu=gravida&est=sem&congue=praesent&elementum=id&in=massa&hac=id&habitasse=nisl&platea=venenatis&dictumst=lacinia&morbi=aenean&vestibulum=sit&velit=amet&id=justo&pretium=morbi&iaculis=ut&diam=odio&erat=cras&fermentum=mi&justo=pede&nec=malesuada&condimentum=in&neque=imperdiet&sapien=et&placerat=commodo&ante=vulputate&nulla=justo',
//   },
//   {
//     id: 34,
//     name: 'Leela',
//     url:
//       'https://flavors.me/luctus/rutrum/nulla/tellus/in/sagittis.jsp?cursus=habitasse&urna=platea&ut=dictumst&tellus=maecenas&nulla=ut&ut=massa&erat=quis&id=augue&mauris=luctus&vulputate=tincidunt&elementum=nulla&nullam=mollis&varius=molestie&nulla=lorem&facilisi=quisque&cras=ut&non=erat&velit=curabitur&nec=gravida&nisi=nisi&vulputate=at&nonummy=nibh&maecenas=in',
//   },
//   {
//     id: 35,
//     name: 'Wandie',
//     url:
//       'http://dyndns.org/donec/odio.html?fringilla=ac&rhoncus=est&mauris=lacinia&enim=nisi&leo=venenatis&rhoncus=tristique&sed=fusce&vestibulum=congue&sit=diam&amet=id&cursus=ornare&id=imperdiet&turpis=sapien&integer=urna&aliquet=pretium&massa=nisl&id=ut&lobortis=volutpat&convallis=sapien&tortor=arcu&risus=sed&dapibus=augue&augue=aliquam&vel=erat&accumsan=volutpat&tellus=in&nisi=congue&eu=etiam&orci=justo&mauris=etiam&lacinia=pretium&sapien=iaculis&quis=justo&libero=in&nullam=hac&sit=habitasse&amet=platea&turpis=dictumst&elementum=etiam&ligula=faucibus&vehicula=cursus&consequat=urna&morbi=ut&a=tellus&ipsum=nulla&integer=ut&a=erat&nibh=id&in=mauris&quis=vulputate&justo=elementum&maecenas=nullam&rhoncus=varius&aliquam=nulla&lacus=facilisi&morbi=cras&quis=non&tortor=velit&id=nec&nulla=nisi&ultrices=vulputate&aliquet=nonummy&maecenas=maecenas&leo=tincidunt&odio=lacus&condimentum=at&id=velit&luctus=vivamus&nec=vel&molestie=nulla&sed=eget&justo=eros&pellentesque=elementum&viverra=pellentesque&pede=quisque&ac=porta&diam=volutpat&cras=erat',
//   },
//   {
//     id: 36,
//     name: 'Janos',
//     url:
//       'http://arizona.edu/nisl/aenean/lectus/pellentesque/eget.jpg?vitae=diam&quam=neque&suspendisse=vestibulum&potenti=eget&nullam=vulputate&porttitor=ut&lacus=ultrices&at=vel&turpis=augue&donec=vestibulum&posuere=ante&metus=ipsum&vitae=primis&ipsum=in&aliquam=faucibus&non=orci&mauris=luctus&morbi=et&non=ultrices&lectus=posuere&aliquam=cubilia&sit=curae&amet=donec&diam=pharetra&in=magna&magna=vestibulum&bibendum=aliquet&imperdiet=ultrices&nullam=erat&orci=tortor&pede=sollicitudin&venenatis=mi&non=sit&sodales=amet&sed=lobortis&tincidunt=sapien&eu=sapien&felis=non&fusce=mi&posuere=integer&felis=ac&sed=neque&lacus=duis&morbi=bibendum&sem=morbi&mauris=non&laoreet=quam&ut=nec&rhoncus=dui&aliquet=luctus&pulvinar=rutrum&sed=nulla&nisl=tellus&nunc=in&rhoncus=sagittis&dui=dui&vel=vel&sem=nisl&sed=duis&sagittis=ac&nam=nibh&congue=fusce&risus=lacus&semper=purus&porta=aliquet&volutpat=at&quam=feugiat&pede=non&lobortis=pretium&ligula=quis&sit=lectus&amet=suspendisse&eleifend=potenti&pede=in&libero=eleifend&quis=quam&orci=a&nullam=odio&molestie=in&nibh=hac&in=habitasse&lectus=platea&pellentesque=dictumst&at=maecenas&nulla=ut&suspendisse=massa&potenti=quis&cras=augue&in=luctus&purus=tincidunt&eu=nulla',
//   },
//   {
//     id: 37,
//     name: 'Nona',
//     url:
//       'https://t.co/porttitor/pede/justo/eu/massa.html?massa=in&volutpat=faucibus&convallis=orci&morbi=luctus&odio=et&odio=ultrices&elementum=posuere&eu=cubilia&interdum=curae&eu=duis&tincidunt=faucibus&in=accumsan&leo=odio&maecenas=curabitur&pulvinar=convallis&lobortis=duis&est=consequat&phasellus=dui&sit=nec&amet=nisi&erat=volutpat&nulla=eleifend&tempus=donec&vivamus=ut&in=dolor&felis=morbi&eu=vel&sapien=lectus&cursus=in&vestibulum=quam&proin=fringilla&eu=rhoncus&mi=mauris&nulla=enim&ac=leo&enim=rhoncus&in=sed&tempor=vestibulum&turpis=sit&nec=amet&euismod=cursus&scelerisque=id&quam=turpis&turpis=integer&adipiscing=aliquet&lorem=massa&vitae=id&mattis=lobortis&nibh=convallis&ligula=tortor&nec=risus&sem=dapibus&duis=augue&aliquam=vel&convallis=accumsan&nunc=tellus&proin=nisi&at=eu&turpis=orci&a=mauris&pede=lacinia&posuere=sapien&nonummy=quis&integer=libero&non=nullam&velit=sit&donec=amet&diam=turpis&neque=elementum&vestibulum=ligula&eget=vehicula&vulputate=consequat&ut=morbi&ultrices=a&vel=ipsum&augue=integer&vestibulum=a&ante=nibh&ipsum=in&primis=quis&in=justo&faucibus=maecenas&orci=rhoncus&luctus=aliquam&et=lacus&ultrices=morbi&posuere=quis&cubilia=tortor&curae=id',
//   },
//   {
//     id: 38,
//     name: 'Zorana',
//     url:
//       'https://geocities.jp/cum/sociis.jpg?vestibulum=aliquet&ac=maecenas&est=leo&lacinia=odio&nisi=condimentum&venenatis=id&tristique=luctus&fusce=nec&congue=molestie&diam=sed&id=justo&ornare=pellentesque&imperdiet=viverra&sapien=pede&urna=ac&pretium=diam&nisl=cras&ut=pellentesque&volutpat=volutpat',
//   },
//   {
//     id: 39,
//     name: 'Rozalie',
//     url:
//       'https://usnews.com/pede/malesuada.aspx?eu=nulla&interdum=mollis&eu=molestie&tincidunt=lorem&in=quisque&leo=ut&maecenas=erat&pulvinar=curabitur&lobortis=gravida&est=nisi&phasellus=at&sit=nibh&amet=in&erat=hac&nulla=habitasse&tempus=platea&vivamus=dictumst&in=aliquam&felis=augue&eu=quam&sapien=sollicitudin&cursus=vitae&vestibulum=consectetuer&proin=eget&eu=rutrum&mi=at&nulla=lorem&ac=integer&enim=tincidunt&in=ante&tempor=vel&turpis=ipsum&nec=praesent&euismod=blandit&scelerisque=lacinia&quam=erat&turpis=vestibulum&adipiscing=sed&lorem=magna&vitae=at&mattis=nunc&nibh=commodo&ligula=placerat&nec=praesent&sem=blandit&duis=nam&aliquam=nulla&convallis=integer&nunc=pede&proin=justo&at=lacinia&turpis=eget&a=tincidunt&pede=eget&posuere=tempus&nonummy=vel&integer=pede&non=morbi&velit=porttitor&donec=lorem&diam=id&neque=ligula&vestibulum=suspendisse&eget=ornare&vulputate=consequat&ut=lectus&ultrices=in&vel=est&augue=risus&vestibulum=auctor&ante=sed&ipsum=tristique&primis=in&in=tempus&faucibus=sit&orci=amet&luctus=sem&et=fusce&ultrices=consequat&posuere=nulla&cubilia=nisl&curae=nunc&donec=nisl&pharetra=duis&magna=bibendum&vestibulum=felis&aliquet=sed&ultrices=interdum&erat=venenatis&tortor=turpis&sollicitudin=enim&mi=blandit&sit=mi&amet=in&lobortis=porttitor&sapien=pede&sapien=justo',
//   },
//   {
//     id: 40,
//     name: 'Ginnifer',
//     url:
//       'http://ehow.com/mus/etiam/vel/augue.png?mus=morbi&vivamus=non&vestibulum=lectus&sagittis=aliquam&sapien=sit&cum=amet&sociis=diam&natoque=in&penatibus=magna&et=bibendum&magnis=imperdiet&dis=nullam',
//   },
//   {
//     id: 41,
//     name: 'Byron',
//     url:
//       'https://ezinearticles.com/luctus/nec/molestie/sed/justo/pellentesque/viverra.xml?justo=ipsum&sollicitudin=integer&ut=a&suscipit=nibh&a=in&feugiat=quis&et=justo&eros=maecenas&vestibulum=rhoncus&ac=aliquam&est=lacus&lacinia=morbi&nisi=quis&venenatis=tortor&tristique=id&fusce=nulla&congue=ultrices',
//   },
//   {
//     id: 42,
//     name: 'Averil',
//     url:
//       'http://illinois.edu/dolor/vel/est/donec/odio/justo.xml?sagittis=nulla&nam=ultrices&congue=aliquet&risus=maecenas&semper=leo&porta=odio&volutpat=condimentum&quam=id&pede=luctus&lobortis=nec&ligula=molestie&sit=sed&amet=justo&eleifend=pellentesque&pede=viverra&libero=pede&quis=ac&orci=diam&nullam=cras&molestie=pellentesque&nibh=volutpat&in=dui&lectus=maecenas&pellentesque=tristique&at=est&nulla=et&suspendisse=tempus&potenti=semper&cras=est&in=quam&purus=pharetra&eu=magna&magna=ac&vulputate=consequat',
//   },
//   {
//     id: 43,
//     name: 'Cristen',
//     url:
//       'http://xrea.com/auctor/gravida/sem/praesent/id/massa.jsp?scelerisque=augue&quam=luctus&turpis=tincidunt&adipiscing=nulla&lorem=mollis&vitae=molestie&mattis=lorem&nibh=quisque&ligula=ut&nec=erat&sem=curabitur&duis=gravida&aliquam=nisi&convallis=at&nunc=nibh&proin=in&at=hac&turpis=habitasse&a=platea&pede=dictumst&posuere=aliquam&nonummy=augue&integer=quam&non=sollicitudin&velit=vitae&donec=consectetuer&diam=eget&neque=rutrum&vestibulum=at&eget=lorem&vulputate=integer&ut=tincidunt&ultrices=ante&vel=vel&augue=ipsum&vestibulum=praesent&ante=blandit&ipsum=lacinia&primis=erat&in=vestibulum&faucibus=sed&orci=magna&luctus=at&et=nunc&ultrices=commodo&posuere=placerat&cubilia=praesent&curae=blandit&donec=nam&pharetra=nulla&magna=integer&vestibulum=pede&aliquet=justo&ultrices=lacinia&erat=eget&tortor=tincidunt&sollicitudin=eget&mi=tempus&sit=vel&amet=pede&lobortis=morbi&sapien=porttitor&sapien=lorem',
//   },
//   {
//     id: 44,
//     name: 'Almeda',
//     url: 'http://xrea.com/in.jpg?eget=phasellus',
//   },
//   {
//     id: 45,
//     name: 'Godwin',
//     url:
//       'https://zdnet.com/et/commodo/vulputate/justo/in/blandit/ultrices.js?in=ut&quis=rhoncus&justo=aliquet&maecenas=pulvinar&rhoncus=sed&aliquam=nisl&lacus=nunc&morbi=rhoncus&quis=dui&tortor=vel',
//   },
//   {
//     id: 46,
//     name: 'Serena',
//     url:
//       'http://cmu.edu/arcu/adipiscing/molestie/hendrerit/at.jpg?id=augue&lobortis=vestibulum&convallis=ante&tortor=ipsum&risus=primis&dapibus=in&augue=faucibus&vel=orci&accumsan=luctus&tellus=et&nisi=ultrices&eu=posuere&orci=cubilia&mauris=curae&lacinia=donec&sapien=pharetra&quis=magna&libero=vestibulum&nullam=aliquet&sit=ultrices&amet=erat&turpis=tortor&elementum=sollicitudin&ligula=mi&vehicula=sit&consequat=amet&morbi=lobortis&a=sapien&ipsum=sapien&integer=non&a=mi&nibh=integer&in=ac&quis=neque&justo=duis&maecenas=bibendum&rhoncus=morbi&aliquam=non&lacus=quam&morbi=nec&quis=dui&tortor=luctus&id=rutrum&nulla=nulla&ultrices=tellus&aliquet=in&maecenas=sagittis&leo=dui&odio=vel&condimentum=nisl&id=duis&luctus=ac&nec=nibh',
//   },
//   {
//     id: 47,
//     name: 'Nannette',
//     url:
//       'https://dailymail.co.uk/mi/integer.png?gravida=donec&nisi=vitae&at=nisi',
//   },
//   {
//     id: 48,
//     name: 'Tulley',
//     url:
//       'http://smh.com.au/sapien/quis.jsp?nulla=amet&integer=justo&pede=morbi&justo=ut&lacinia=odio&eget=cras&tincidunt=mi&eget=pede&tempus=malesuada&vel=in&pede=imperdiet&morbi=et&porttitor=commodo&lorem=vulputate&id=justo&ligula=in&suspendisse=blandit&ornare=ultrices&consequat=enim&lectus=lorem&in=ipsum&est=dolor&risus=sit&auctor=amet&sed=consectetuer&tristique=adipiscing&in=elit&tempus=proin&sit=interdum&amet=mauris&sem=non&fusce=ligula&consequat=pellentesque&nulla=ultrices&nisl=phasellus&nunc=id&nisl=sapien&duis=in&bibendum=sapien&felis=iaculis&sed=congue&interdum=vivamus&venenatis=metus&turpis=arcu&enim=adipiscing&blandit=molestie&mi=hendrerit&in=at&porttitor=vulputate&pede=vitae&justo=nisl&eu=aenean&massa=lectus&donec=pellentesque&dapibus=eget&duis=nunc&at=donec&velit=quis&eu=orci&est=eget&congue=orci&elementum=vehicula&in=condimentum&hac=curabitur&habitasse=in&platea=libero&dictumst=ut&morbi=massa&vestibulum=volutpat&velit=convallis&id=morbi&pretium=odio&iaculis=odio&diam=elementum',
//   },
//   {
//     id: 49,
//     name: 'Chadwick',
//     url:
//       'https://businesswire.com/amet/consectetuer/adipiscing/elit/proin/interdum/mauris.html?tincidunt=maecenas&lacus=ut&at=massa&velit=quis&vivamus=augue&vel=luctus&nulla=tincidunt&eget=nulla&eros=mollis&elementum=molestie&pellentesque=lorem&quisque=quisque&porta=ut&volutpat=erat&erat=curabitur&quisque=gravida&erat=nisi&eros=at&viverra=nibh&eget=in&congue=hac&eget=habitasse&semper=platea&rutrum=dictumst&nulla=aliquam&nunc=augue&purus=quam&phasellus=sollicitudin&in=vitae&felis=consectetuer&donec=eget&semper=rutrum&sapien=at&a=lorem&libero=integer&nam=tincidunt&dui=ante&proin=vel&leo=ipsum&odio=praesent&porttitor=blandit&id=lacinia&consequat=erat&in=vestibulum&consequat=sed&ut=magna&nulla=at&sed=nunc&accumsan=commodo&felis=placerat&ut=praesent&at=blandit&dolor=nam&quis=nulla&odio=integer&consequat=pede&varius=justo&integer=lacinia&ac=eget&leo=tincidunt&pellentesque=eget&ultrices=tempus&mattis=vel&odio=pede&donec=morbi&vitae=porttitor&nisi=lorem&nam=id&ultrices=ligula&libero=suspendisse&non=ornare&mattis=consequat&pulvinar=lectus&nulla=in&pede=est&ullamcorper=risus&augue=auctor&a=sed&suscipit=tristique&nulla=in&elit=tempus&ac=sit&nulla=amet&sed=sem&vel=fusce&enim=consequat&sit=nulla&amet=nisl&nunc=nunc',
//   },
//   {
//     id: 50,
//     name: 'Cassy',
//     url:
//       'https://myspace.com/consequat/dui.xml?amet=platea&justo=dictumst&morbi=morbi&ut=vestibulum&odio=velit&cras=id&mi=pretium&pede=iaculis&malesuada=diam&in=erat&imperdiet=fermentum&et=justo&commodo=nec&vulputate=condimentum&justo=neque&in=sapien&blandit=placerat&ultrices=ante&enim=nulla&lorem=justo&ipsum=aliquam&dolor=quis&sit=turpis&amet=eget&consectetuer=elit&adipiscing=sodales&elit=scelerisque&proin=mauris&interdum=sit&mauris=amet&non=eros&ligula=suspendisse&pellentesque=accumsan&ultrices=tortor&phasellus=quis&id=turpis&sapien=sed&in=ante&sapien=vivamus&iaculis=tortor&congue=duis&vivamus=mattis&metus=egestas&arcu=metus&adipiscing=aenean&molestie=fermentum&hendrerit=donec&at=ut&vulputate=mauris&vitae=eget&nisl=massa&aenean=tempor&lectus=convallis&pellentesque=nulla&eget=neque&nunc=libero&donec=convallis&quis=eget&orci=eleifend&eget=luctus&orci=ultricies&vehicula=eu&condimentum=nibh&curabitur=quisque&in=id&libero=justo&ut=sit&massa=amet&volutpat=sapien&convallis=dignissim&morbi=vestibulum&odio=vestibulum&odio=ante&elementum=ipsum',
//   },
// ];

//  useEffect(() => {
//    setOpen(isOpen); // only when the isopen attribute is passed

//    function onKeydown(event: any) {
//      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
//        console.log('toggle the value because of the key pressed ');

//        setOpen(!open);
//      } else {
//      }
//    }

//    window.addEventListener('keydown', onKeydown);
//    return () => {
//      window.removeEventListener('keydown', onKeydown);
//    };
//  }, [isOpen, open]);
