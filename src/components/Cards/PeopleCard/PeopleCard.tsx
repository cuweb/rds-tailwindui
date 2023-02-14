import React from 'react';
import { Tags } from '../../../types/Tags';
import { Badge } from '../../Badge';

export interface PeopleCardProps {
  firstName: string;
  lastName: string;
  designation?: string;
  email: string;
  phoneNumber?: string;
  tags?: Tags;
  profileImage?: any;
}

export const PeopleCard = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  tags,
  designation,
  profileImage,
}: PeopleCardProps) => {
  // const [size, setSize] = useState<AvatarSize>('4xl');
  // let user: UserInfoType;

  // if (profileImage) {
  //   user = {
  //     image: {
  //       src: profileImage,
  //       alt: '',
  //     },
  //     firstName: firstName,
  //     lastName: lastName,
  //   };
  // } else {
  //   user = {
  //     firstName: firstName,
  //     lastName: lastName,
  //   };
  // }

  const initials = `${firstName.split('')[0]}${lastName.split('')[0]}`;

  // useEffect(() => {
  //   if (window.innerWidth > 900) {
  //     setSize('4xl');
  //   } else {
  //     if (window.innerWidth > 600) {
  //       setSize('2xl');
  //     } else {
  //       setSize('xl');
  //     }
  //   }
  // }, []);

  return (
    <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white py-8 px-7 shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
      <a
        href="https://carleton.ca"
        className="relative flex flex-col h-full cursor-pointer"
      >
        {profileImage && (
          <img
            className="mx-auto h-48 w-48 rounded-full border-4 border-white object-cover group-hover:shadow-md group-hover:duration-300 group-hover:ease-in @sm:md:h-60 @sm:md:w-60"
            src={profileImage}
            alt=""
          />
        )}

        {!profileImage && (
          <div
            className={`mx-auto h-48 w-48 bg-cu-black-100 rounded-full border-4 border-white object-cover group-hover:shadow-md group-hover:duration-300 group-hover:ease-in @sm:md:h-60 @sm:md:w-60 flex items-center justify-center font-semibold} text-4xl h-40 w-40   `}
          >
            {initials}
          </div>
        )}
        {/* <div className="mx-auto"> */}
        {/*  make Avatar size responsive  xl for small size , 2xl for larger screen and 4xl in general for people card   */}
        {/* <Avatar user={user} rounded="full" size={size} /> */}
        {/* </div> */}

        <div className="flex flex-col items-center space-y-0.5 py-6 px-7">
          <h3 className="text-lg font-semibold text-cu-black  group-hover:text-cu-red @xs:md:text-2xl">
            {firstName + ' ' + lastName}
          </h3>
          <p className="text-sm italic text-cu-black-600 @sm:md:text-lg">
            {designation ? designation : ''}
          </p>
          <ul className="pt-3 space-y-1 text-center">
            <li className="text-sm text-cyan-700 hover:text-cu-red @lg:md:text-base">
              <a
                href={`mailto:${email}`}
                className="font-semibold text-cyan-700 hover:text-cu-red"
              >
                {email}
              </a>
            </li>
            <li className="text-sm text-cu-black-600 hover:text-cu-red @lg:md:text-base">
              {phoneNumber ? phoneNumber : ''}
            </li>
          </ul>
        </div>

        {/* <div className="mx-auto mt-auto">
          {tags?.map(item => {
            return (
              <div
                key={item}
                // className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0"
              >
                <Badge>{item}</Badge>
              </div>
            );
          })}
          {/* // <p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
          //   Tom Jones Love
          // </p>
          // <p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
          //   Dance Superstar
          // </p> 
        </div> */}
        <div className="pb-5 mt-auto px-7">
          {tags?.category?.map(tag => (
            <Badge key={tag.id}>{tag.name}</Badge>
          ))}
        </div>
      </a>
    </div>
  );
};
