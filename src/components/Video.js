import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import { timeSince, toView, toVideoTime } from "../utils/dataConverter";
import styles from "./Video.module.scss";

export default function Video({
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
      `channels?part=snippet,statistics,contentDetails&id=${snippet.channelId}&maxResults=30`
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
    fetchFromApi(
      `videos?part=snippet,contentDetails,statistics&id=${videoId}&maxResults=30`
    )
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
    <div className={styles.video}>
      <Link to={`/watch/${videoId}`}>
        <div style={{ position: "relative" }}>
          <img
            className={styles.video__thumbnail}
            src={snippet.thumbnails.high.url}
            alt={snippet.title}
          />
          <span className={styles.video__timeStamp}>
            {toVideoTime(timeStamp)}
          </span>
        </div>
        <div className={styles.video__info}>
          <Avatar
            className={styles.video__avatar}
            src={channelThumb}
            alt="channel avatar"
          />
          <div className={styles.video__text}>
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
      </Link>
    </div>
  );
}
