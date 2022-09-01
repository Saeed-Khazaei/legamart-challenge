import { useEffect } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import { LocationMarkerProps } from "../types/map";
import { PinIcon } from "./Pin";

function LocationMarker(props: LocationMarkerProps) {
  const map = useMapEvents({
    drag: (e) => {
      props.onSetPosition(e.target.getCenter());
    },
  });

  useEffect(() => {
    if (!props.position.lat || !props.position.lng) {
      map.locate().on("locationfound", function (e) {
        map.flyTo(e.latlng, map.getZoom());
        props.onSetPosition(e.latlng);
      });
    }
  }, []);
  return (
    <Marker
      position={{ lat: props.position.lat ?? 0, lng: props.position.lng ?? 0 }}
      icon={PinIcon}
    />
  );
}

export default LocationMarker;
