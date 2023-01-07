import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { subscriberCounter } from "../utils/dataConverter";
export default function Channel({ channelDetail }) {
  const [subscribers, setSubscribers] = useState("0");
  useEffect(() => {
    fetchFromApi(
      `channels?part=snippet,statistics,contentDetails&id=${channelDetail.snippet.channelId}`
    )
      .then((data) => {
        return setSubscribers(data.items[0].statistics.subscriberCount);
        // console.log(data.items[0].statistics.subscriberCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [channelDetail]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        width: "360px",
      }}
    >
      <Link to={`/channel/${channelDetail.id.channelId}`}>
        <Avatar
          src={channelDetail.snippet.thumbnails.high.url}
          alt="Avatar"
          style={{ width: "180px", height: "180px" }}
        />
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <h2 style={{ margin: "0" }}>{channelDetail.snippet.title}</h2>
          <CheckCircle style={{ fontSize: "14px", color: "gray" }} />
        </div>
        <h6 style={{ fontSize: "14px", color: "gray", paddingTop: "10px" }}>
          @{channelDetail.snippet.channelTitle} .{" "}
          {subscriberCounter(subscribers)} subscribers
        </h6>
      </Link>
    </div>
  );
}
