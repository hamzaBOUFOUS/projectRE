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
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
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
  useEffect(() => {
    setEtat(selected ? selected.etat : null);
  }, [selected]);
  const [etat, setEtat] = useState();
  const dispatch = useDispatch();
  const editDemandeCongeCallback = useCallback((data) => {
    dispatch(
      editDemandeConge(
        {
          id: selected ? selected.id : undefined,
          employee: selected ? selected.employee : undefined,
          dateDebut: data.dateAbsence,
          dateFin: data.dateFin,
          etat: data.etat,
          motif: selected ? selected.motif : undefined,
        },
        handleClose
      )
    );
  }, [dispatch, selected, handleClose]);
  function submitForm(data) {
    console.log(data)
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
          EDIT ETAT
        </DialogTitle>
        <DialogContent className="modal-body">
          <Controller
            name="employee"
            control={control}
            defaultValue={selected?(selected.employee.nom+" "+selected.employee.prenom):""}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                name={"employee"}
                id="employee"
                variant="outlined"
                disabled
                className={classes.textField}
                value={value}
                fullWidth
                label="Employee"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
          <Controller
            name="dateDebut"
            control={control}
            defaultValue={selected?selected.dateDebut:""}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                name={"dateDebut"}
                id="dateDebut"
                variant="outlined"
                disabled
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
            defaultValue={selected?selected.dateFin:""}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                name={"dateFin"}
                id="dateFin"
                variant="outlined"
                disabled
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
          <Controller
            name="motif"
            control={control}
            defaultValue={selected?selected.motif.label:""}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                name={"motif"}
                id="motif"
                variant="outlined"
                disabled
                className={classes.textField}
                value={value}
                fullWidth
                label="Motif"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Etat</InputLabel>
            <Controller
              name="etat"
              control={control}
              defaultValue={etat}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  labelId="demo-simple-select-outlined-label"
                  error={!!error}
                  helperText={error ? error.message : null}
                  id="etat"
                  label="Etat"
                  value={value ? value : null}
                  className={classes.textField}
                  onChange={onChange}
                  renderValue={(s) => (
                    <div className={classes.chips}>
                      <Chip
                        key={s ? s : null}
                        label={s ? s : ""}
                      />
                    </div>
                  )}
                >
                  <MenuItem key="APPROUVE" value="APPROUVE">
                    APPROUVE
                  </MenuItem>
                  <MenuItem key="ENATTENTE" value="ENATTENTE">
                    EN ATTENTE
                  </MenuItem>
                  <MenuItem key="DESAPROUVE" value="DESAPROUVE">
                    DESAPROUVE
                  </MenuItem>
                </Select>
              )}
              rules={{ required: 'Etat required!' }}
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
