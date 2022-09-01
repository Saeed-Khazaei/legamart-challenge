import Link from "next/link";
import React from "react";
interface Props {
  id: string | number;
  details: string;
}

import styles from "../styles/LocationDetail.module.css";

const LocationDetail = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Location Details</div>
      <div className={styles.details}>{props.details}</div>
      <Link href={`/form/${props.id}`}>
        <span className={styles.edit_btn}>Edit</span>
      </Link>
    </div>
  );
};

export default LocationDetail;
