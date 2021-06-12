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
import { addEditContrat } from "../../../stores/reducers/contrat/actions";
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
    setTypeContrat(selected ? selected.typeContrat : null);
    setDateCreation(selected ? selected.dateCreation : null)
  }, [selected]);
  const [typeContrat, setTypeContrat] = useState();
  const [dateCreation, setDateCreation] = useState();
  const addEditContratCallback = useCallback((data) => {
    dispatch(
      addEditContrat(
        {
          id: selected ? selected.id : undefined,
          typeContrat: data.typeContrat,
          dateCreation: data.dateCreation,
        },
        handleClose
      )
    );
  }, [dispatch, selected, handleClose]);
  function submitForm(data) {
    addEditContratCallback(data);
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
            "EDIT CONTRAT"
          ) : (
            "ADD CONTRAT"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <Controller
            name="typeContrat"
            control={control}
            defaultValue={typeContrat}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"typeContrat"}
                id="typeContrat"
                variant="outlined"
                className={classes.textField}
                value={value}
                fullWidth
                label="Type Contrat"
                onChange={onChange}
              />
            )}
            rules={{ required: 'Contrat\' s type is required' }}
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
