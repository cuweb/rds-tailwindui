import React from 'react';
import { GoogleMap,MarkerF, InfoWindow, useLoadScript } from '@react-google-maps/api';
import { Column } from '../../layouts/Column/Column';

// const getPixelPositionOffset = pixelOffset => (width, height) => ({
//   x: -(width / 2) + pixelOffset.x,
//   y: -(height / 2) + pixelOffset.y
// });

// const Popup = (props:any) => {
//   return (
//     <OverlayView
//       position={props.anchorPosition}
//       mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//       getPixelPositionOffset={getPixelPositionOffset(props.markerPixelOffset)}
//     >
//       <div className="popup-tip-anchor">
//         <div className="popup-bubble-anchor">
//           <div className="popup-bubble-content">
//             <h1>{props.content}</h1>
//           </div>
//         </div>
//       </div>
//     </OverlayView>
//   );
// };
interface addressProps {
   lat:number,
   lng:number
}
export const EventLocation = () => {
  const [showInfo, setShowInfo] = React.useState(false)
  
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map:any) => {
    mapRef.current = map;
  }, []);

const center = {
lat: 45.3850225,
lng: -75.6946679
};
// const getMapOptions = () => {
//   return {
//   streetViewControl: false,
//   scaleControl: true,
//   fullscreenControl:true,
//   styles: [
// {
// featureType: 'poi.business',
// elementType: 'labels',
// stylers: [
// {
//   visibility: 'on',
//   },
  
//  ],
  
// },
  
// ],
  
// gestureHandling: 'greedy',
  
// disableDoubleClickZoom: true,
  
//  minZoom: 11,
  
//   maxZoom: 18,
  
// zoomControl: true,
  
// clickableIcons: false,
  
// };
  
// };
const address:addressProps = {
  lat:45.3850225,
  lng:-75.6946679
   
   } 
const options =  {
  disableDefaultUI: true,
  zoomControl:true,
  fullscreenControl:true,
  panControl: true,
  // mapTypeId: google.maps.MapTypeId.ROADMAP  
}
const containerStyle = {
  height: '50vh', width: '100%' 
};
const { isLoaded,loadError } = useLoadScript({
  googleMapsApiKey: "AIzaSyAayPTQk0_rNbCa8Zbhlbn6BpHwcSrVNOc",
  libraries:['places']
})
// if(loadError) return "Error laoding maps";
// if(!isLoaded) return "Loading maps"


// const onLoad = React.useCallback(function callback(map:any) {
//   // This is just an example of getting and using the map instance!!! don't just blindly copy!
//   const bounds = new window.google.maps.LatLngBounds(center);
//   map.fitBounds(bounds);

//   setMap(map)
// }, [])

// const onUnmount = React.useCallback(function callback(map:any) {
//   setMap(null)
// }, [])

// const Any = () => {
//   return <div><p>hello</p></div>
// }  

return isLoaded ? (
  <Column maxWidth="5xl">
   <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={options}
      onLoad={onMapLoad}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <MarkerF title={"Carleton University Raven's Nest"}  onClick={()=>setShowInfo(true)} position={{lat:address.lat + parseFloat(Math.random() / 3000),lng:address.lng}}  />
      
      {showInfo ? <InfoWindow 
             position={{lat:address.lat ,lng:address.lng}}><p>{"Carleton University Raven's Nest"}</p></InfoWindow>: null}
            
  
      {/* <Popup
          anchorPosition={this.state.position}
          markerPixelOffset={{ x: 0, y: -32 }}
          content={this.state.content}
        /> */}
            
    </GoogleMap>
    </div>
    </Column>
) : <></>
}

