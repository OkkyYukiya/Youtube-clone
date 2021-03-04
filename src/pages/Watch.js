import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import SideList from "../components/SideList/SideList";
import VideoDitail from "../components/VideoDetail/VideoDitail";
import { Store } from "../store";
import { useLocation } from "react-router-dom";
import { fetchRelatedData, fetchSelectedData } from "../apis/index";

const Watch = () => {
  const { setGlobalState } = useContext(Store);
  const location = useLocation();

  const setVideos = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    //promise all... 配列に格納された関数が全て実行されるまで次の処理を行わない
    if (id) {
      const [selected, related] = await Promise.all([
        fetchSelectedData(id),
        fetchRelatedData(id),
      ]);
      setGlobalState({
        type: "SET_SELECTED",
        payload: { selected: selected.data.items.shift() },
      });
      setGlobalState({
        type: "SET_RELATED",
        payload: { related: related.data.items },
      });
    }
  };

  useEffect(() => {
    setVideos();
    // eslint-disable-next-line
  }, [location.search]);

  return (
    <Layout>
      <VideoDitail />
      <SideList />
    </Layout>
  );
};

export default Watch;
