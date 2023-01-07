import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const options = {
  params: {
    regionCode: "VN",
    key: "AIzaSyATmMBSfpNuHtYzQdn5Lc2Cs2UB5KBvh9A",
    // key: process.env.REACT_APP_YOUTUBE_DATA_API_KEY,
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
