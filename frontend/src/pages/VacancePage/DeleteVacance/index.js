import React, { useCallback, useState } from "react";
import { deleteVacance } from "../../../stores/reducers/vacance/actions";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";

export default ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  const [openS, setOpenS] = useState(false);
  const openSnack= ()=>{
    setOpenS(true);
  }
  const deleteVacanceCallback = useCallback(() => {
    dispatch(
      deleteVacance(selected.id, handleClose)
    );
  }, [dispatch, selected, handleClose]);
  
  function submitForm() {
    deleteVacanceCallback();
  }
  return (
    <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      aria-describedby="form-dialog-description"
    >
      <form className="modal-content">
        <DialogContent className="modal-body">
            <p>Veulez sur supprime cette Vacance....!</p>
        </DialogContent>
        <br />
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Close
          </Button>
          <Button onClick={submitForm} variant="outlined" color="secondary">
            Delete
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
