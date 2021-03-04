import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Layout;
