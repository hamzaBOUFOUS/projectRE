import React from "react";
import useStyles from "./styles";
import { Select, FormControl, MenuItem } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const CustomPagination = ({
  totalPages,
  page,
  onPageChange,
  size = 1,
  onSizeChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.pagination}>
      <Pagination
        count={totalPages}
        showFirstButton
        showLastButton
        page={page}
        onChange={onPageChange}
      />
    </div>
  );
};

export default CustomPagination;
