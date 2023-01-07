import React from "react";
import styles from "./Videos.module.scss";
import Video from "./Video";
import Channel from "./Channel";
import InfiniteScroll from "react-infinite-scroll-component";

function Videos({ videos, loadMore }) {
  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={() => loadMore()}
      hasMore={true}
      loader={"loading..."}
    >
      <div className={styles.videos}>
        {videos.map((item, index) => {
          return (
            <div key={index}>
              {item.id.videoId && <Video video={item} />}
              {item.id.channelId && <Channel channelDetail={item} />}
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}

export default Videos;
