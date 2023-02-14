import React from 'react';
// import { PlayCircleIcon } from '@heroicons/react/24/solid';
import ReactPlayer from 'react-player';
// import { VideoModal } from '../../VideoModal';

export interface VideoCardProps {
  source?: any;
}

export function VideoCard({ source }: VideoCardProps) {
  // const [ModalOpen, setModalOpen] = useState(false);
  // const [urlThumbnail, seturlThumbnail] = useState('');

  // const getYouTubeVideoImage = (url: string, size: any) => {
  //   const imageSize = size === 'small' ? 2 : 0;
  //   const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  //   const match = url.match(regExp);
  //   const videoId = match && match[1].length == 11 ? match[1] : false;
  //   return `https://img.youtube.com/vi/${videoId}/${imageSize}.jpg`;
  // };

  // const getVimeoVideoImage = (url: string) => {
  //   fetch(`https://vimeo.com/api/oembed.json?url=${url}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       seturlThumbnail(data.thumbnail_url);
  //     })
  //     .catch(err => console.log(err));

  //   return urlThumbnail;
  // };
  // const videoThumbnail = (video_url: string, size: any) => {
  //   let link = video_url.toString();
  //   if (link.includes('vimeo')) {
  //     return getVimeoVideoImage(video_url);
  //   }
  //   return getYouTubeVideoImage(video_url, size);
  // };

  return (
    <>
      <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
        <a
          // onClick={() => setModalOpen(true)}
          className="relative flex flex-col h-full cursor-pointer"
        >
          <div className="relative">
            {/* <img
              className="object-cover w-full"
              src={videoThumbnail(source, 'small')}
              alt=""
              loading="lazy"
            />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full duration-300 ease-in group-hover:bg-cu-black-900 group-hover:bg-opacity-50">
              <PlayCircleIcon
                className="w-20 h-20"
                aria-hidden="true"
                color="white"
              />
            </div> */}
        
            <ReactPlayer url={source} controls class="w-full aspect-video"/>
          
          </div>

          <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
            <p className="text-sm italic text-cu-black-600 @sm:md:text-base">
              Duration: 5m 43s
            </p>
            <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
              Donec commodo sit viverra aliquam porttitor ultrices gravida
            </h3>
          </div>

          <div className="pb-5 mt-auto px-7">
            <p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
              Category One
            </p>
            <p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
              Category Two
            </p>
          </div>
        </a>
      </div>
      {/* <div className="overflow-hidden w-[600px]">
        <VideoModal onClose={() => setModalOpen(false)} isVisible={ModalOpen}>
          <ReactPlayer url={source} playing />
        </VideoModal>
      </div> */}
    </>
  );
}

