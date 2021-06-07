import React, { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core/";
import { addEditPoste } from "../../../stores/reducers/poste/actions";
import { useDispatch, useSelector } from "react-redux";

export default ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setPoste(selected ?selected.poste:null);
    setDateCreation(selected ? selected.dateCreation : null)
  }, [selected]);
  const [poste, setPoste] = useState();
  const [dateCreation, setDateCreation] = useState();
  const addEditPosteCallback = useCallback(() => {
    dispatch(
        addEditPoste(
        {
          id: selected ? selected.id : undefined,
          poste: poste,
          dateCreation: dateCreation,
        },
        handleClose
      )
    );
  }, [dispatch, poste, selected, dateCreation, handleClose]);
  function submitForm() {
    addEditPosteCallback();
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
            "EDIT POSTE"
          ) : (
            "ADD POSTE"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <TextField
            error={poste === ""}
            helperText={poste === "" ? "Empty!" : " "}
            id="poste"
            variant="outlined"
            value={poste}
            fullWidth
            label="Nom Poste"
            onChange={(e) => setPoste(e.target.value)}
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
