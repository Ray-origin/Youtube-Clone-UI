import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import { timeSince, toView, toVideoTime } from "../utils/dataConverter";
import styles from "./VideoCard.module.scss";

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  const [channelThumb, setChannelThumb] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [views, setViews] = useState();
  useEffect(() => {
    fetchFromApi(
      `channels?part=snippet,statistics,contentDetails&id=${snippet.channelId}`
    )
      .then((data) => {
        return setChannelThumb(data.items[0].snippet.thumbnails.default.url);
        // console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [snippet.channelId]);
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,contentDetails,statistics&id=${videoId}`)
      .then((data) => {
        setTimeStamp(data.items[0].contentDetails.duration);
        setViews(data.items[0].statistics.viewCount);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [videoId]);
  return (
    <Link to={`/watch/${videoId}`}>
      <div className={styles.videoCard}>
        <div style={{ position: "relative", display: "flex" }}>
          <img
            className={styles.videoCard__thumbnail}
            src={snippet.thumbnails.high.url}
            alt={snippet.title}
          />
          <span className={styles.videoCard__timeStamp}>
            {toVideoTime(timeStamp)}
          </span>
        </div>
        <div className={styles.videoCard__info}>
          <div className={styles.videoCard__text}>
            <h4>{snippet.title}</h4>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <p style={{ display: "inline-block" }}>{snippet.channelTitle}</p>
              <CheckCircle style={{ fontSize: "14px", color: "gray" }} />
            </div>
            <p>
              {toView(views)} views . {timeSince(snippet.publishedAt)} ago
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
