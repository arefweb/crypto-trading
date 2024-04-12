import { Outlet } from "react-router-dom";

import Sidebar from "@app/components/sidebar/Sidebar";

import styles from "./styles.module.css";

function PagesLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default PagesLayout;
