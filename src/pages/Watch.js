import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromApi } from "../utils/fetchFromApi";
import video from "../components/Video";
import styles from "./Watch.module.scss";
import { Avatar } from "@mui/material";
import { subscriberCounter } from "../utils/dataConverter";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import GetAppIcon from "@mui/icons-material/GetApp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { ThumbDown } from "@mui/icons-material";
import { timeSince, toView } from "../utils/dataConverter";
import VideoCard from "../components/VideoCard";
export default function Watch() {
  const id = useParams();
  const [videoDetail, setVideoDetail] = useState();
  const [channelDetail, setChannelDetail] = useState();
  const [recommend, setRecommend] = useState([]);
  useEffect(() => {
    fetchFromApi(
      `videos?part=snippet&part=id&part=statistics&id=${id.id}&maxResults=30`
    ).then((data) => {
      setVideoDetail(data.items[0]);
    });
  }, [id]);
  useEffect(() => {
    if (videoDetail) {
      fetchFromApi(
        `channels?part=snippet&part=statistics&part=id&part=brandingSettings&id=${videoDetail.snippet.channelId}&maxResults=30`
      ).then((data) => {
        setChannelDetail(data.items[0]);
      });
      fetchFromApi(
        `search?part=snippet&relatedToVideoId=${videoDetail.id}&type=video&maxResults=30`
      ).then((data) => {
        setRecommend(data.items);
      });
    }
  }, [videoDetail]);
  if (!videoDetail) return "loading...";
  if (!channelDetail) return "loading...";
  return (
    <div className={styles.watch}>
      <div className={styles.watch__videoDetail}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id.id}`}
          width="100%"
          height="calc(100vw * 9/16)"
          style={{ maxHeight: "720px" }}
          controls
          className={styles.watch__player}
          // playing={true}
        />
        <h2>{videoDetail.snippet.title}</h2>
        {/* /////////////////////////////////////////////////////////////////////////////// */}
        <div className={styles.watch__bannerAvatar}>
          <div className={styles.watch__info}>
            <Link to={`/channel/${videoDetail.snippet.channelId}`}>
              <Avatar
                className={styles.watch__innerAvatar}
                src={channelDetail.snippet.thumbnails.high.url}
              />
            </Link>
            <div className={styles.watch__title}>
              <h3 style={{ marginLeft: "20px" }}>
                {videoDetail.snippet.channelTitle}
              </h3>
              <h5>
                {subscriberCounter(channelDetail.statistics.subscriberCount)}{" "}
                Subscribers
              </h5>
            </div>
            <button className={styles.watch__subscribeButton}>Subscribe</button>
          </div>
          <div className={styles.watch__action}>
            <div className={styles.watch__LDLButtons}>
              <button
                className={styles.watch__actionButton}
                style={{ paddingRight: "0" }}
              >
                <ThumbUpIcon />
                9.7K
              </button>
              <button
                className={styles.watch__actionButton}
                style={{ borderRadius: "0 20px 20px 0" }}
              >
                <ThumbDown />
              </button>
            </div>
            <div className={styles.watch__actionButton}>
              <ShareIcon />
              Share
            </div>
            <div className={styles.watch__actionButton}>
              <GetAppIcon />
              Download
            </div>
            <div className={styles.watch__actionButton}>
              <MonetizationOnIcon />
              Thanks
            </div>
            <div className={styles.watch__actionButton}>
              <ContentCutIcon />
              Clip
            </div>
          </div>
        </div>
        <div className={styles.watch__description}>
          <h5>
            {timeSince(videoDetail.snippet.publishedAt)} ago{" "}
            {toView(videoDetail.statistics.viewCount)} views
          </h5>
          <p
            dangerouslySetInnerHTML={{
              __html: videoDetail.snippet.description.replace(/\n/g, "<br/>"),
            }}
          ></p>
        </div>
      </div>
      <div className={styles.watch__recommended}>
        {/* <VideoCard recommend={recommend} /> */}
        <div>
          {recommend.map((video, index) => {
            return (
              <div key={index}>
                <VideoCard video={video} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
