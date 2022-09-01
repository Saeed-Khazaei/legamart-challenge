import L from "leaflet";
import Icon from "../public/images/pin.png";

export const PinIcon = L.icon({
  iconUrl: "/images/pin.png",
  iconSize: [38, 42],
  iconAnchor: [19, 42],
  popupAnchor: [0, -21],
  className: "leaflet-icon",
  shadowUrl: "",
  shadowSize: [24, 10],
  shadowAnchor: [12, 7],
});
