import { Avatar } from "@mui/material";
import React from "react";
import styles from "./VideoList.module.scss";
import Videos from "./Videos";
import { subscriberCounter } from "../utils/dataConverter";
function VideoList({ videos, bannerUrl, channelDetail, loadMore }) {
  return (
    <div className={styles.videoList}>
      {bannerUrl && (
        <div className={styles.videoList__channelBanner}>
          <img src={bannerUrl} alt="banner" />
          <div className={styles.videoList__bannerAvatar}>
            <Avatar
              className={styles.videoList__innerAvatar}
              src={channelDetail.items[0].snippet.thumbnails.high.url}
            />
            <div className={styles.videoList__title}>
              <h1 style={{ marginLeft: "20px" }}>
                {channelDetail.items[0].snippet.title}
              </h1>
              <h4>@{channelDetail.items[0].snippet.title}</h4>
              <h4>
                {subscriberCounter(
                  channelDetail.items[0].statistics.subscriberCount
                )}{" "}
                Subcribers
              </h4>
            </div>
          </div>
        </div>
      )}
      {/* <h2>{`${selectedCategory} Videos`}</h2> */}
      <Videos videos={videos} loadMore={loadMore} />
    </div>
  );
}

export default VideoList;
