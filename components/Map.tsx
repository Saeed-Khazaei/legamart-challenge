import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { PinIcon } from "./Pin";
import LocationDetail from "./LocationDetail";
import { MapComponentProps } from "../types/map";
import "leaflet/dist/leaflet.css";

const Map = (props: MapComponentProps) => {
  const { edit = false, pins, pin } = props;
  const [location, setLocation] = useState(
    edit ? pin?.location : pins ? pins[0].location : { lat: 35, lng: 51 }
  );

  return (
    <MapContainer
      center={location}
      zoom={!edit ? 10 : 15}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "50vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {edit ? (
        pin ? (
          <LocationMarker
            position={{ lat: location?.lat ?? 35, lng: location?.lng ?? 51 }}
            onSetPosition={(e) => {
              setLocation(e);
              props.onChange && props.onChange({ lat: e.lat, lng: e.lng });
            }}
          />
        ) : null
      ) : (
        pins?.length &&
        pins.map((p, index) => (
          <Marker position={p.location} icon={PinIcon} key={p.id}>
            <Popup>
              <LocationDetail id={p.id} details={p.title} />
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
};

export default Map;
