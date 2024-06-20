import React from 'react';
import { GoogleMap, LoadScript, OverlayView } from '@react-google-maps/api';
import anh from "../../assets/duan24h.net_BĐQHSDĐ_Dong_Anh_HN_2030.png"
import { useState } from 'react';
import "./index.css";
const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const imageBounds = {
  north: -3.744,
  south: -3.746,
  east: -38.522,
  west: -38.524,
};

function MyMap() {
  const [opacity, setOpacity] = useState(0);

  const handleSliderChange = (event) => {
    setOpacity(event.target.value);
  };

  return (
    <div className='AllPage'>
      <div className='mapAndImg'
       style={{position:'relative'}}
       >
        <div style={{ opacity: opacity }}>
          <LoadScript googleMapsApiKey="AIzaSyBa7UlmsSGVz7NA2HkBdfevTBiwIPP2mdY" >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <OverlayView
                position={center}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div>

                </div>

              </OverlayView>
            </GoogleMap>
          </LoadScript>
        </div>
        <img src={anh} style={{ width: '800px', opacity: 1 - opacity , position:'absolute' , height: '800px' , left:0,top:0 }}></img>
      </div>
      <div className='InputRange' >
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={opacity}
          onChange={handleSliderChange}
          style={{
            writingMode: 'bt-lr', // Thay đổi hướng của thanh trượt
            WebkitAppearance: 'slider-vertical', // Cho trình duyệt Webkit
            width: '300px', // Chiều dài của thanh trượt
            height: '400px', // Độ rộng của thanh trượt
          }}
        />
      </div>

    </div>
  );
}

export default MyMap;
