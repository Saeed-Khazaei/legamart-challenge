import dynamic from "next/dynamic";
import React from "react";
import { fakeLocations } from "../../utils/fakeData";

const DynamicMap = dynamic(() => import("../../components/Map"), {
  ssr: false,
  loading: () => <p>Map is loading</p>,
});

const index = () => {
  return (
    <div className="container">
      <DynamicMap pins={fakeLocations} />
    </div>
  );
};

export default index;
