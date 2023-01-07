import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import VideoList from "../components/VideoList";
import { fetchFromApi } from "../utils/fetchFromApi";
import styles from "./Home.module.scss";
function Home({ searchTerm }) {
  const [selectedCategory, setSelectedCategory] = useState(
    searchTerm || "News"
  );
  const [search, setSearch] = useState(searchTerm);
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState();
  console.log(nextPageToken);
  useEffect(() => {
    fetchFromApi(
      `search?part=snippet&q=${selectedCategory}&type=video,channel&maxResults=30`
    )
      .then((data) => {
        setVideos(data.items);
        setNextPageToken(data.nextPageToken);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCategory, searchTerm]);

  function search2() {
    fetchFromApi(
      `search?part=snippet&q=${selectedCategory}&type=video,channel&maxResults=30&pageToken=${nextPageToken}`
    )
      .then((data) => {
        setVideos((prev) => [...prev.concat(data.items)]);
        setNextPageToken(data.nextPageToken);
      })
      .catch((err) => {
        return console.log(err);
      });
  }
  return (
    <div>
      <div className={styles.home}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <VideoList videos={videos} loadMore={search2} />
      </div>
    </div>
  );
}
export default Home;
