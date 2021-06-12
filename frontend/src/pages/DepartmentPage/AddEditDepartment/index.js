import React, { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  makeStyles,
} from "@material-ui/core/";
import { addEditDepartment } from "../../../stores/reducers/department/actions";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: '10px',
  }
}));
export default ({ open, handleClose, selected }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    setNomDepartment(selected ?selected.nomDepartment:null);
    setDateCreation(selected ? selected.dateCreation : null)
  }, [selected]);
  const [nomDepartment, setNomDepartment] = useState();
  const [dateCreation, setDateCreation] = useState();
  const addEditDepartmentCallback = useCallback((data) => {
    dispatch(
        addEditDepartment(
        {
          id: selected ? selected.id : undefined,
          nomDepartment: data.nomDepartment,
          dateCreation: data.dateCreation,
        },
        handleClose
      )
    );
  }, [dispatch, nomDepartment, selected, dateCreation, handleClose]);
  function submitForm(data) {
    addEditDepartmentCallback(data);
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
      <form className="modal-content" onSubmit={handleSubmit(submitForm)}>
        <DialogTitle id="form-dialog-title">
          {selected ? (
            "EDIT DEPARTMENT"
          ) : (
            "ADD DEPARTMENT"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <Controller
            name="nomDepartment"
            control={control}
            defaultValue={nomDepartment}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"nomDepartment"}
                id="nomDepartment"
                variant="outlined"
                className={classes.textField}
                value={value}
                fullWidth
                label="Nom Department"
                onChange={onChange}
              />
            )}
            rules={{ required: 'Department\' s name is required' }}
          />
          <Controller
            name="dateCreation"
            control={control}
            defaultValue={dateCreation}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"dateCreation"}
                id="dateCreation"
                variant="outlined"
                className={classes.textField}
                type="date"
                value={value}
                fullWidth
                label="Date Creation"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
            rules={{ required: 'Date\' s Creation is required' }}
          />
        </DialogContent>
        <br />
        <DialogActions className="modal-footer">
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="outlined" color="primary">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
