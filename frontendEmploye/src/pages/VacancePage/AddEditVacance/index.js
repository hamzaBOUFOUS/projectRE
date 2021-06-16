import React, { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  Button,
  FormControl,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Input,
  InputLabel,
  Select,
  Chip,
  MenuItem,
  makeStyles,
} from "@material-ui/core/";
import { addEditVacance } from "../../../stores/reducers/vacance/actions";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }, textField: {
    marginBottom: '20px',
  },
}));
export default ({ open, handleClose, selected }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    setName(selected ? selected.name : null);
    setDateDebut(selected ? selected.dateDebut : null);
    setDateFin(selected ? selected.dateFin : null);
  }, [selected]);
  const [name, setName] = useState();
  const [dateDebut, setDateDebut] = useState();
  const [dateFin, setDateFin] = useState();
  const addEditVacanceCallback = useCallback((data) => {
    dispatch(
      addEditVacance(
        {
          id: selected ? selected.id : undefined,
          name: data.name,
          dateDebut: data.dateDebut,
          dateFin: data.dateFin,
        },
        handleClose
      )
    );
  }, [dispatch, selected, handleClose]);
  function submitForm(data) {
    addEditVacanceCallback(data);
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
            "EDIT VACANCE"
          ) : (
            "ADD VACANCE"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <Controller
            name="name"
            control={control}
            defaultValue={name}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"name"}
                id="name"
                variant="outlined"
                className={classes.textField}
                value={value}
                fullWidth
                label="Name Vacance"
                onChange={onChange}
              />
            )}
            rules={{ required: 'Department\' s name is required' }}
          />
          <Controller
            name="dateDebut"
            control={control}
            defaultValue={dateDebut}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"dateDebut"}
                id="dateDebut"
                variant="outlined"
                className={classes.textField}
                type="date"
                value={value}
                fullWidth
                label="Date Debut"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
            rules={{ required: 'Date\' s Debut is required' }}
          />
          <Controller
            name="dateFin"
            control={control}
            defaultValue={dateFin}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"dateFin"}
                id="dateFin"
                variant="outlined"
                className={classes.textField}
                type="date"
                value={value}
                fullWidth
                label="Date Fin"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
            rules={{ required: 'Date\' s Fin is required' }}
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
