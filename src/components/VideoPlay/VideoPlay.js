import React from "react";
import styles from "./VideoPlay.module.scss";
import Youtube from "react-youtube";

const VideoPlay = ({ id }) => {
  return (
    <div className={styles.wrap}>
      <Youtube className={styles.video} videoId={id} />
    </div>
  );
};

export default VideoPlay;
