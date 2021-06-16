import React, { useCallback, useState } from "react";
import { deleteDemandeConge } from "../../../stores/reducers/demandeConge/actions";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core/";
import { useDispatch } from "react-redux";

export default ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  const deleteDemandeCongeCallback = useCallback(() => {
    dispatch(
      deleteDemandeConge(selected.id, handleClose)
    );
  }, [dispatch, selected, handleClose]);
  
  function submitForm() {
    deleteDemandeCongeCallback();
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
          Si vous cliquez sur le button de confirmation vous supprimerez ce DEMANDE de matiere definitive
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
