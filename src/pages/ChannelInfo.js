import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "../components/Videos";
import Channel from "../components/Channel";
import Sidebar from "../components/Sidebar";
import VideoList from "../components/VideoList";
import { fetchFromApi } from "../utils/fetchFromApi";
export default function ChannelInfo() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const [banner, setBanner] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(
      `channels?part=snippet&part=statistics&part=id&part=brandingSettings&id=${id}`
    ).then((data) => {
      setChannelDetail(data);
      setSelectedCategory(data.items[0].snippet.title);
      setBanner(
        data.items[0].brandingSettings.image.bannerExternalUrl +
          "=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
      );
      // thumb = data.items[0].snippet.thumbnails.medium.url;
    });
    fetchFromApi(`search?channelId=${id}&part=snippet,id&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  return (
    <div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <VideoList
          selectedCategory={selectedCategory}
          videos={videos}
          bannerUrl={banner}
          channelDetail={channelDetail}
        />
      </div>
    </div>
  );
}
