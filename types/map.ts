import { BusinessTypes } from "./enums/mapenums.module";

export interface MapComponentProps {
  edit?: boolean;
  pins?: PinData[];
  pin?: PinData,
  onChange?(data: Location): void
}
export interface Location {
  lat: number;
  lng: number;
}
export interface PinData {
  title: string;
  location: Location;
  type: BusinessTypes;
  logo: string;
  id: string;
}


export interface LocationMarkerProps {
  position: { lat: number | null; lng: number | null };
  onSetPosition({ lat, lng }: { lat: number; lng: number }): void;
}
