import React, { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core/";
import { addEditDepartment } from "../../../stores/reducers/department/actions";
import { useDispatch, useSelector } from "react-redux";

export default ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setNomDepartment(selected ?selected.nomDepartment:null);
    setDateCreation(selected ? selected.dateCreation : null)
  }, [selected]);
  const [nomDepartment, setNomDepartment] = useState();
  const [dateCreation, setDateCreation] = useState();
  const addEditDepartmentCallback = useCallback(() => {
    dispatch(
        addEditDepartment(
        {
          id: selected ? selected.id : undefined,
          nomDepartment: nomDepartment,
          dateCreation: dateCreation,
        },
        handleClose
      )
    );
  }, [dispatch, nomDepartment, selected, dateCreation, handleClose]);
  function submitForm() {
    addEditDepartmentCallback();
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
            "EDIT DEPARTMENT"
          ) : (
            "ADD DEPARTMENT"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <TextField
            error={nomDepartment === ""}
            helperText={nomDepartment === "" ? "Empty!" : " "}
            id="nomDepartment"
            variant="outlined"
            value={nomDepartment}
            fullWidth
            label="Nom Department"
            onChange={(e) => setNomDepartment(e.target.value)}
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
