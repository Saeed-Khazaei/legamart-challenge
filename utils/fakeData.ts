import { BusinessTypes } from "../types/enums/mapenums.module";
import { PinData } from "../types/map";

export const fakeLocations: PinData[] = [
  {
    location: { lat: 35.7, lng: 51.5 },
    logo: "",
    title: "test 1",
    type: BusinessTypes.Corporations,
    id: "001",
  },
  {
    location: { lat: 35.65, lng: 51.4 },
    logo: "",
    title: "test 2",
    type: BusinessTypes.Partnerships,
    id: "002",
  },
  {
    location: { lat: 35.746, lng: 51.2 },
    logo: "",
    title: "test 3",
    type: BusinessTypes["Sole Proprietorships"],
    id: "003",
  },
];