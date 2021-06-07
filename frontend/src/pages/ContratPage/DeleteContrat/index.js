import React, { useCallback, useState } from "react";
import { deleteContrat } from "../../../stores/reducers/contrat/actions";
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
  const deleteContratCallback = useCallback(() => {
    dispatch(
        deleteContrat(selected.id, handleClose)
    );
  }, [dispatch, selected, handleClose]);
  
  function submitForm() {
    deleteContratCallback();
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
        <DialogTitle id="form-dialog-title" className="modal-header">
            Delete CONTRAT
        </DialogTitle>
        <DialogContent className="modal-body">
            <p>Veulez sur supprime cette CONTRAT....!</p>
        </DialogContent>
        <br />
        <DialogActions className="modal-footer">
          <Button onClick={submitForm} variant="outlined" color="primary">
            Delete
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
