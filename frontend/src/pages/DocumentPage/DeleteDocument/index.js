import React, { useCallback, useState } from "react";
import { deleteDocument } from "../../../stores/reducers/document/actions";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  DialogContentText,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";

export default ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  const [openS, setOpenS] = useState(false);
  const openSnack= ()=>{
    setOpenS(true);
  }
  const deleteDocumentCallback = useCallback(() => {
    dispatch(
      deleteDocument(selected.id, handleClose)
    );
  }, [dispatch, selected, handleClose]);
  
  function submitForm() {
    deleteDocumentCallback();
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
      <DialogTitle id="alert-dialog-title">{"Etes-vous sur que vous voulez le supprimer definitivement?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Si vous cliquez sur le button de confirmation vous supprimerez ce Document de matiere definitive
          </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={submitForm} color="primary">
          Confirmer
          </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Annuler
          </Button>
      </DialogActions>
    </Dialog>
  );
};
