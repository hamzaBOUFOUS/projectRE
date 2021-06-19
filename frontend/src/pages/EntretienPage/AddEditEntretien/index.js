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
import { addEditEntretien } from "../../../stores/reducers/entretien/actions";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { getListPostes } from "../../../stores/reducers/poste/actions";
import { getListCondidatures } from "../../../stores/reducers/condidature/actions";
import { getListDepartments } from "../../../stores/reducers/department/actions";

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
  const dispatch = useDispatch();
  const { PostesData } = useSelector((state) => state.postes);
  const { content: listposte } = PostesData;
  const { CondidaturesData } = useSelector((state) => state.condidatures);
  const { content: listcondidature } = CondidaturesData;
  const { DepartmentsData } = useSelector((state) => state.departments);
  const { content: listdepartment } = DepartmentsData;
  useEffect(() => {
    setPoste(selected ? selected.poste : null);
    setDepartment(selected ? selected.department : null);
    setCondidature(selected ? selected.condidature : null);
    setDateEntretien(selected ? selected.dateEntretien : null);
    setHeure(selected ? selected.heure : null);
    dispatch(getListPostes(0, {}));
    dispatch(getListCondidatures(0, {}));
    dispatch(getListDepartments(0, {}));
  }, [dispatch, selected]);
  const [department, setDepartment] = useState(null);
  const [poste, setPoste] = useState(null);
  const [condidature, setCondidature] = useState(null);
  const [dateEntretien, setDateEntretien] = useState();
  const [heure, setHeure] = useState();
  const addEditEntretienCallback = useCallback((data) => {
    dispatch(
      addEditEntretien(
        {
          id: selected ? selected.id : undefined,
          dateEntretien: data.dateEntretien,
          heure: data.heure,
          poste: data.poste,
          condidature: data.condidature,
          department: data.department,
        },
        handleClose
      )
    );
  }, [dispatch, selected, handleClose]);
  function submitForm(data) {
    addEditEntretienCallback(data);
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
            "Edit ENTRETIEN"
          ) : (
            "Add ENTRETIEN"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Department</InputLabel>
            <Controller
              name="department"
              control={control}
              defaultValue={department}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  labelId="demo-simple-select-outlined-label"
                  error={!!error}
                  helperText={error ? error.message : null}
                  id="department"
                  label="Department"
                  value={value ? value : null}
                  className={classes.textField}
                  onChange={onChange}
                  renderValue={(s) => (
                    <div className={classes.chips}>
                      <Chip
                        key={s ? s.id : null}
                        label={s ? (s.nomDepartment) : ""}
                      />
                    </div>
                  )}
                >
                  {listdepartment.map(option => {
                    return (
                      <MenuItem key={option.id} value={option}>
                        {option.nomDepartment}
                      </MenuItem>
                    )
                  })}

                </Select>
              )}
              rules={{ required: 'List Department required!' }}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Poste</InputLabel>
            <Controller
              name="poste"
              control={control}
              defaultValue={poste}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  labelId="demo-simple-select-outlined-label"
                  error={!!error}
                  helperText={error ? error.message : null}
                  id="poste"
                  label="Poste"
                  value={value ? value : null}
                  className={classes.textField}
                  onChange={onChange}
                  renderValue={(s) => (
                    <div className={classes.chips}>
                      <Chip
                        key={s ? s.id : null}
                        label={s ? s.poste : ""}
                      />
                    </div>
                  )}
                >
                  {listposte.map(option => {
                    return (
                      <MenuItem key={option.id} value={option}>
                        {option.poste}
                      </MenuItem>
                    )
                  })}

                </Select>
              )}
              rules={{ required: 'Poste required!' }}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Condidature</InputLabel>
            <Controller
              name="condidature"
              control={control}
              defaultValue={condidature}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  labelId="demo-simple-select-outlined-label"
                  error={!!error}
                  helperText={error ? error.message : null}
                  id="condidature"
                  label="condidature"
                  value={value ? value : null}
                  className={classes.textField}
                  onChange={onChange}
                  renderValue={(s) => (
                    <div className={classes.chips}>
                      <Chip
                        key={s ? s.id : null}
                        label={s ? (s.nom + " " + s.prenom) : ""}
                      />
                    </div>
                  )}
                >
                  {listcondidature.map(option => {
                    return (
                      <MenuItem key={option.id} value={option}>
                        {option.nom + " " + option.prenom}
                      </MenuItem>
                    )
                  })}

                </Select>
              )}
              rules={{ required: 'Condidature required!' }}
            />
          </FormControl>
          <Controller
            name="dateEntretien"
            control={control}
            defaultValue={dateEntretien}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"dateEntretien"}
                id="dateEntretien"
                variant="outlined"
                className={classes.textField}
                type="date"
                value={value}
                fullWidth
                label="Date"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
            rules={{ required: 'Date\' s Entretien is required' }}
          />
          <Controller
            name="heure"
            control={control}
            defaultValue={heure}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"heure"}
                id="heure"
                variant="outlined"
                className={classes.textField}
                type="time"
                value={value}
                fullWidth
                label="Heure"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
            rules={{ required: 'Heure\' s Entretien is required' }}
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
