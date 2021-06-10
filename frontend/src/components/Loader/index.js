import React from "react";
import { LinearProgress } from "@material-ui/core";
import useStyles from "./styles";
import cx from "classnames";

const Loader = ({ status, children }) => {
  const classes = useStyles();
  return (
    <>
      {status === "loading" && <LinearProgress color="secondary" />}
      <div className={cx({ [classes.blur]: status === "loading" })}>
        {children}
      </div>
    </>
  );
};

export default Loader;
