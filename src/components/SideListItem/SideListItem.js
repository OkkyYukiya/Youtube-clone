import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideListItem.module.scss";

const SideListItem = ({ src, title, id }) => {
  return (
    <Link
      className={styles.item}
      to={{ pathname: "watch", search: `?v=${id}` }}
    >
      <img src={src} alt={title} />
      <div className={styles.info}>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default SideListItem;
