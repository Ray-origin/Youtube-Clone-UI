import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FlagIcon from "@mui/icons-material/Flag";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <div className={styles.sidebar}>
      <SidebarRow
        title="Home"
        Icon={HomeIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SidebarRow
        title="Trending"
        Icon={MovieFilterIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SidebarRow
        title="Subscription"
        Icon={SubscriptionsIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <hr></hr>

      <SidebarRow
        title="Video Library"
        Icon={VideoLibraryIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SidebarRow
        title="History"
        Icon={HistoryIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SidebarRow
        title="Your Videos"
        Icon={OndemandVideoIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SidebarRow
        title="WatchLater"
        Icon={WatchLaterIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SidebarRow
        title="Liked Videos"
        Icon={ThumbUpIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SidebarRow
        title="Show More"
        Icon={KeyboardArrowDownIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <hr></hr>

      {/* Explore */}
      <div className={styles.sidebar__section}>
        <h3>Explore</h3>
        <SidebarRow
          title="Trending"
          Icon={WhatshotIcon}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SidebarRow
          title="Music"
          Icon={MusicNoteIcon}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SidebarRow
          title="Gaming"
          Icon={SportsEsportsIcon}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SidebarRow
          title="News"
          Icon={NewspaperIcon}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SidebarRow
          title="Sport"
          Icon={EmojiEventsIcon}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <hr></hr>
      </div>

      <SidebarRow
        title="Settings"
        Icon={SettingsIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SidebarRow
        title="Report History"
        Icon={FlagIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SidebarRow
        title="Helps"
        Icon={HelpOutlineIcon}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <hr></hr>
    </div>
  );
}

export default Sidebar;
