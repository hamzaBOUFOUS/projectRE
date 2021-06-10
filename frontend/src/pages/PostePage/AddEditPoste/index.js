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
import { addEditPoste } from "../../../stores/reducers/poste/actions";
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
    setPoste(selected ? selected.poste : null);
    setDateCreation(selected ? selected.dateCreation : null)
  }, [selected]);
  const [poste, setPoste] = useState();
  const [dateCreation, setDateCreation] = useState();
  const addEditPosteCallback = useCallback((data) => {
    dispatch(
      addEditPoste(
        {
          id: selected ? selected.id : undefined,
          poste: data.poste,
          dateCreation: data.dateCreation,
        },
        handleClose
      )
    );
  }, [dispatch, poste, selected, dateCreation, handleClose]);
  function submitForm(data) {
    addEditPosteCallback(data);
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
            "EDIT POSTE"
          ) : (
            "ADD POSTE"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <Controller
            name="poste"
            control={control}
            defaultValue={poste}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"poste"}
                id="poste"
                variant="outlined"
                className={classes.textField}
                value={value}
                fullWidth
                label="Name Poste"
                onChange={onChange}
              />
            )}
            rules={{ required: 'Name\' s Poste is required' }}
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
          <Button type="submit" variant="outlined" color="primary">
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
