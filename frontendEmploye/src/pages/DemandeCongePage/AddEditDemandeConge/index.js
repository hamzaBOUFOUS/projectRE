import React, { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  Button,
  FormControl,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  InputLabel,
  Select,
  Chip,
  MenuItem,
  makeStyles,
} from "@material-ui/core/";
import { editDemandeConge } from "../../../stores/reducers/demandeConge/actions";
import { getListMotifs } from "../../../stores/reducers/motif/actions";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
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
    marginBottom: '10px',
  },
}));
export default ({ open, handleClose, selected }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const { MotifsData } = useSelector((state) => state.motifs);
  const listmotif = MotifsData;
  const user = JSON.parse(window.localStorage.getItem('tokenUser'));
  const userSel = user;
  useEffect(() => {
    setDateDebut(selected ? selected.dateDebut : null);
    setDateFin(selected ? selected.dateFin : null);
    setMotif(selected ? selected.motif : null);
    dispatch(getListMotifs());
  }, [selected]);
  const [dateDebut, setDateDebut] = useState();
  const [dateFin, setDateFin] = useState();
  const [motif, setMotif] = useState();
  const dispatch = useDispatch();
  const editDemandeCongeCallback = useCallback((data) => {
    dispatch(
      editDemandeConge(
        {
          id: selected ? selected.id : undefined,
          employee: userSel,
          dateDebut: data.dateDebut,
          dateFin: data.dateFin,
          etat: "ENATTENTE",
          motif: data.motif,
        },
        handleClose
      )
    );
  }, [dispatch, selected, handleClose]);
  function submitForm(data) {
    editDemandeCongeCallback(data);
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
            "EDIT DEMANDE"
          ) : (
            "ADD DEMANDE"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <Controller
            name="dateDebut"
            control={control}
            defaultValue={dateDebut}
            defaultValue={selected ? selected.dateDebut:""}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                name={"dateDebut"}
                id="dateDebut"
                variant="outlined"
                type="date"
                className={classes.textField}
                value={value}
                fullWidth
                label="Date Debut"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
          <Controller
            name="dateFin"
            control={control}
            defaultValue={dateFin}
            defaultValue={selected?selected.dateFin:""}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                name={"dateFin"}
                id="dateFin"
                variant="outlined"
                type="date"
                className={classes.textField}
                value={value}
                fullWidth
                label="Date Fin"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Motif</InputLabel>
            <Controller
              name="motif"
              control={control}
              defaultValue={motif}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  labelId="demo-simple-select-outlined-label"
                  error={!!error}
                  helperText={error ? error.message : null}
                  id="motif"
                  label="Motif"
                  value={value ? value : null}
                  className={classes.textField}
                  onChange={onChange}
                  renderValue={(s) => (
                    <div className={classes.chips}>
                      <Chip
                        key={s ? s.id : null}
                        label={s ? (s.label) : ""}
                      />
                    </div>
                  )}
                >
                {listmotif?.map(option => {
                    return (
                      <MenuItem key={option.id} value={option}>
                        {option.label}
                      </MenuItem>
                    )
                  })}
                </Select>
              )}
              rules={{ required: 'Motif required!' }}
            />
          </FormControl>
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
