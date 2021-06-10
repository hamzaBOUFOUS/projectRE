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
import { addEditAbsence } from "../../../stores/reducers/absence/actions";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { getListEmployees } from "../../../stores/reducers/employee/actions";

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
    setEmployee(selected ? selected.employee : null);
    setDateAbsence(selected ? selected.dateAbsence : null);
    dispatch(getListEmployees(0, {}));
  }, [dispatch, selected]);
  const [employee, setEmployee] = useState(null);
  const [dateAbsence, setDateAbsence] = useState();
  const addEditAbsenceCallback = useCallback((data) => {
    dispatch(
      addEditAbsence(
        {
          id: selected ? selected.id : undefined,
          employee: data.employee,
          dateAbsence: data.dateAbsence,
        },
        handleClose
      )
    );
  }, [dispatch, selected, handleClose]);
  function submitForm(data) {
    addEditAbsenceCallback(data);
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
            "EDIT Absence"
          ) : (
            "ADD Absence"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <Controller
            name="dateAbsence"
            control={control}
            defaultValue={dateAbsence}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"dateAbsence"}
                id="dateAbsence"
                variant="outlined"
                className={classes.textField}
                type="date"
                value={value}
                fullWidth
                label="Date Absence"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
            rules={{ required: 'Date\' s Absence is required' }}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Employee</InputLabel>
            <Controller
              name="employee"
              control={control}
              defaultValue={employee}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  labelId="demo-simple-select-outlined-label"
                  error={!!error}
                  helperText={error ? error.message : null}
                  id="employee"
                  label="Employee"
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
                  { listemployee.map(option => {
                      return (
                        <MenuItem key={option.id} value={option}>
                          {option.nom+" "+option.prenom}
                        </MenuItem>
                      )
                    })}

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
