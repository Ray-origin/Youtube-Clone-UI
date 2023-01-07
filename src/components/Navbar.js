import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import UploadIcon from "@mui/icons-material/Upload";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (searchTerm) {
      navigate(`search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__left}>
        <button className={styles.Navbar__menuButton}>
          <MenuIcon />
        </button>
        <Link to="/">
          <div className={styles.Navbar__logo}>
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
              alt="youtube icon"
            />
          </div>
        </Link>
      </div>
      <div className={styles.Navbar__input}>
        <div className={styles.Navbar__inputBar}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleSubmit();
              }
            }}
          />
        </div>
        <button className={styles.Navbar__inputButton} onClick={handleSubmit}>
          <SearchIcon />
        </button>
      </div>
      <div className={styles.Navbar__icons}>
        <div className={styles.Navbar__iconContainer}>
          <UploadIcon className={styles.upload} />
        </div>
        <div className={styles.Navbar__iconContainer}>
          <NotificationsIcon className={styles.notification} />
          <span>9+</span>
        </div>
        <div className={styles.Navbar__iconContainer}>
          <Avatar
            alt="Your avatar"
            src="https://www.pockettactics.com/wp-content/sites/pockettactics/2022/11/genshin-impact-raiden-1.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
