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
import { addEditEvenement } from "../../../stores/reducers/evenement/actions";
import { getListEmployees } from "../../../stores/reducers/employee/actions";
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
    marginBottom: '10px',
  },
}));
export default ({ open, handleClose, selected }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const { EmployeesData } = useSelector((state) => state.employees);
  const { content: listemployee } = EmployeesData;
  useEffect(() => {
    setNameEvenement(selected ? selected.nom : null);
    setEmployees(selected ? selected.employees : []);
    setDateDebut(selected ? selected.dateDebut : null)
    setDateFin(selected ? selected.dateFin : null)
    setDescription(selected ? selected.description : null)
    dispatch(getListEmployees(0, {}));
  }, [dispatch, selected]);
  const [employees, setEmployees] = useState([]);
  const [nameEvenement, setNameEvenement] = useState();
  const [dateDebut, setDateDebut] = useState();
  const [dateFin, setDateFin] = useState();
  const [description, setDescription] = useState();
  const handleChange = (event) => {
    setEmployees(event.target.value);
  };
  const addEditEvenementCallback = useCallback((data) => {
    dispatch(
      addEditEvenement(
        {
          id: selected ? selected.id : undefined,
          nom: data.nom,
          dateDebut: data.dateDebut,
          dateFin: data.dateFin,
          description: data.description,
          employees: data.employees,
        },
        handleClose
      )
    );
  }, [dispatch, nameEvenement, selected, handleClose]);
  function submitForm(data) {
    addEditEvenementCallback(data);
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
            "EDIT EVENEMENT"
          ) : (
            "ADD EVENEMENT"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <Controller
            name="nom"
            control={control}
            defaultValue={nameEvenement}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"nom"}
                id="nom"
                variant="outlined"
                className={classes.textField}
                value={value}
                fullWidth
                label="Title Evenement"
                onChange={onChange}
              />
            )}
            rules={{ required: 'Evenement\' s Title is required' }}
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
          <Controller
            name="description"
            control={control}
            defaultValue={description}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"description"}
                id="description"
                variant="outlined"
                className={classes.textField}
                value={value}
                fullWidth
                multiline
                rows={2}
                rowsMax={4}
                label="Description"
                onChange={onChange}
              />
            )}
            rules={{ required: 'Description\' s is required' }}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-mutiple-chip-label">Employee</InputLabel>
            <Controller
              name="employees"
              control={control}
              defaultValue={employees}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  error={!!error}
                  helperText={error ? error.message : null}
                  name={"employees"}
                  id="employees"
                  multiple
                  value={value}
                  onChange={onChange}
                  input={<Input id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                      {selected.map((value) => (
                        <Chip
                          key={value.id}
                          label={value.nom}
                          className={classes.chip}
                        />
                      ))}
                    </div>
                  )}
                >
                  {listemployee.length > 0
                    ? listemployee.map((v, i) => (
                      <MenuItem
                        key={v.id}
                        value={v}
                        style={{
                          fontWeight:
                            employees.map((p) => p.id).indexOf(v.id) === -1
                              ? 500
                              : 700,
                        }}
                      >
                        {v.nom} {v.prenom}
                      </MenuItem>
                    ))
                    : ""}
                </Select>
              )}
              rules={{ required: 'List Employee required!' }}
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
