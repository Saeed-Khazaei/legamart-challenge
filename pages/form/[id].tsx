import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DragFile from "../../components/DragFile";
import { fakeLocations } from "../../utils/fakeData";

import styles from "../../styles/SingleLocation.module.css";
import { BusinessTypes } from "../../types/enums/mapenums.module";
import { enum2Array } from "../../utils/convertEnum2Array";
import { PinData } from "../../types/map";

const DynamicMap = dynamic(() => import("../../components/Map"), {
  ssr: false,
  loading: () => <p>Map is loading</p>,
});

const Id = () => {
  const [pin, setPin] = useState<PinData>();
  const [options, setOptions] = useState<{ title: string; value: number }[]>(
    []
  );
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [files, setFiles] = useState<File>();
  const [type, setType] = useState<BusinessTypes>();
  const router = useRouter();
  const { id } = router.query;

  const onChangeFile = (e: File) => {
    setFiles(e);
  };

  const onSave = () => {};

  useEffect(() => {
    const _pin = fakeLocations.filter((l) => l.id === id)[0];
    setPin(_pin);
    setLocation(_pin.location);
    setTitle(_pin.title);
    setType(_pin.type);
    let _options = enum2Array(BusinessTypes);
    if (_options.length) {
      setOptions(_options.splice(_options.length / 2, _options.length));
    }
  }, []);

  return (
    <div className="container">
      <div className={styles.form_container}>
        <div className={styles.main_title}>Share Location</div>
        <main>
          <div className={styles.box}>
            <span className={styles.title}> Location name:</span>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.box}>
            <span className={styles.title}> Location on map:</span>
            <DynamicMap pin={pin} edit onChange={(e) => setLocation(e)} />
          </div>
          <div className={styles.box}>
            <span className={styles.title}> Location type:</span>
            <select
              name="business"
              id="business"
              value={type}
              onChange={(e) => setType(+e.target.value)}
            >
              {options.map((op) => (
                <option value={op.value} key={op.value}>
                  {op.title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.box}>
            <span className={styles.title}> Location on map:</span>
            <DragFile data={files} onChange={onChangeFile} />
          </div>
        </main>
      </div>
      <div className={styles.button_bar}>
        <button className={styles.cancel}>Cancel</button>
        <button onClick={onSave}>Save</button>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      test: true,
    },
  };
};

export default Id;
