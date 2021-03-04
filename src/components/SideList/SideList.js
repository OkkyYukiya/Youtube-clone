import React, { useContext } from "react";
import { Store } from "../../store/index";
import styles from "./SideList.module.scss";
import SideListItem from "../SideListItem/SideListItem";

const SideList = () => {
  const { globalState } = useContext(Store);
  console.log(globalState);

  return (
    <div className={styles.sidenav}>
      {globalState.related ? (
        globalState.related.map((video) => {
          return (
            <SideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              src={video.snippet?.thumbnails?.medium?.url}
              title={video.snippet?.title}
            />
          );
        })
      ) : (
        <span>no-data</span>
      )}
    </div>
  );
};

export default SideList;
