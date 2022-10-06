import '../styles/tailwind.css';
import {
  useLoadScript,
  useJsApiLoader,

} from '@react-google-maps/api';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

// export const {isLoaded} = useJsApiLoader({
//     googleMapsApiKey:
//       process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY || '',
//     libraries:['places']
//   });
var script = document.createElement('script');
    script.type = 'text/javascript';

    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    document.body.appendChild(script);
