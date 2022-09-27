import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "34vw",
  height: "85vh",
};

const options = {
  disableDefaultUI: "true",
  zoomControl: true,
};

const Map = (props) => {
  const center = {
    lat: props.lat,
    lng: props.lng,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="overflow-hidden rounded-xl">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={6}
        options={options}
        center={center}
      >
        <Marker position={{ lat: props.lat, lng: props.lng }} />
      </GoogleMap>
    </div>
  );
};

export default Map;
