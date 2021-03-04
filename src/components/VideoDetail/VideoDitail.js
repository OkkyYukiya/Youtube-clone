import React, { useContext } from "react";
import { Store } from "../../store";
import VideoPlay from "../VideoPlay/VideoPlay";
import styles from "./VideoDitail.module.scss";
import Linkify from "react-linkify";

const VideoDitail = () => {
  const { globalState } = useContext(Store);

  return globalState.selected && globalState.selected.id ? (
    <div className={styles.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p> {globalState.selected.snippet.title} </p>
      <hr />
      <Linkify>
        <pre> {globalState.selected.snippet.description} </pre>
      </Linkify>
    </div>
  ) : (
    <span>No Data</span>
  );
};

export default VideoDitail;
