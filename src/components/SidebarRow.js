import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./SidebarRow.module.scss";
import { Link } from "react-router-dom";
function SidebarRow({ title, Icon, selectedCategory, setSelectedCategory }) {
  return (
    // <a href="">
    <div
      className={`${styles.sidebarRow} ${
        title == selectedCategory && styles.active
      }`}
      onClick={() => setSelectedCategory(title)}
    >
      <Icon className={styles.sidebarRow__icon} />
      <h2 className={styles.sidebarRow__title}>{title}</h2>
    </div>
    // </a>
  );
}

export default SidebarRow;
