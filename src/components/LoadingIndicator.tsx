import React from "react";
import classes from "./LoadingIndicator.module.css";

export const LoadingIndicator: React.FC<{}> = () => {
  return <div className={classes.indicator}>カレンダー生成中……</div>;
};
