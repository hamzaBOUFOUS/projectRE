import React, { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core/";
import { addEditContrat } from "../../../stores/reducers/contrat/actions";
import { useDispatch, useSelector } from "react-redux";

export default ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTypeContrat(selected ?selected.typeContrat:null);
    setDateCreation(selected ? selected.dateCreation : null)
  }, [selected]);
  const [typeContrat, setTypeContrat] = useState();
  const [dateCreation, setDateCreation] = useState();
  const addEditContratCallback = useCallback(() => {
    dispatch(
        addEditContrat(
        {
          id: selected ? selected.id : undefined,
          typeContrat: typeContrat,
          dateCreation: dateCreation,
        },
        handleClose
      )
    );
  }, [dispatch, typeContrat, selected, dateCreation, handleClose]);
  function submitForm() {
    addEditContratCallback();
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
        <DialogTitle id="form-dialog-title">
          {selected ? (
            "EDIT CONTRAT"
          ) : (
            "ADD CONTRAT"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <TextField
            error={typeContrat === ""}
            helperText={typeContrat === "" ? "Empty!" : " "}
            id="typeContrat"
            variant="outlined"
            value={typeContrat}
            fullWidth
            label="Type Contrat"
            onChange={(e) => setTypeContrat(e.target.value)}
          />
          <TextField
            error={dateCreation === ""}
            helperText={dateCreation === "" ? "Empty!" : " "}
            id="dateCreation"
            variant="outlined"
            value={dateCreation}
            label="Date Creation"
            type="date"
            fullWidth
            onChange={(e) => setDateCreation(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <br />
        <DialogActions className="modal-footer">
          <Button onClick={submitForm} variant="outlined" color="primary">
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
