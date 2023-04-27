import React, { type FC } from "react";
import styles from "./Loader.module.css";

export const Loader: FC = (): JSX.Element => {
  return (
    <>
      {Array(20)
        .fill(<></>)
        .map((_, i) => (
          <div key={i} className={styles.loading}></div>
        ))}
    </>
  );
};
