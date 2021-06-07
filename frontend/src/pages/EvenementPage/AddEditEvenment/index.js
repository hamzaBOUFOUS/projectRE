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
  },
}));

export default ({ open, handleClose, selected }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { EmployeesData } = useSelector((state) => state.employees);
  const { content: listemployee } = EmployeesData;
  useEffect(() => {
    setNameEvenement(selected ?selected.nom:null);
    setEmployees(selected ? selected.employees : []);
    setDateDebut(selected ? selected.dateDebut : null)
    setDateFin(selected ? selected.dateFin : null)
    setDescription(selected ? selected.description : null)
    dispatch(getListEmployees(0, {}));
  }, [dispatch,selected]);
  const [employees, setEmployees] = useState([]);
  const [nameEvenement, setNameEvenement] = useState();
  const [dateDebut, setDateDebut] = useState();
  const [dateFin, setDateFin] = useState();
  const [description, setDescription] = useState();
  const handleChange = (event) => {
    setEmployees(event.target.value);
  };
  const addEditEvenementCallback = useCallback(() => {
    dispatch(
      addEditEvenement(
        {
          id: selected ? selected.id : undefined,
          nom: nameEvenement,
          dateDebut: dateDebut,
          dateFin: dateFin,
          description: description,
          employees: employees,
        },
        handleClose
      )
    );
  }, [dispatch, nameEvenement, selected, dateFin, employees, dateDebut, description, handleClose]);
  function submitForm() {
    addEditEvenementCallback();
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
            "EDIT EVENEMENT"
          ) : (
            "ADD EVENEMENT"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <TextField
            error={nameEvenement === ""}
            helperText={nameEvenement === "" ? "Empty!" : " "}
            id="nameProfil"
            variant="outlined"
            value={nameEvenement}
            fullWidth
            label="Name Evenement"
            onChange={(e) => setNameEvenement(e.target.value)}
          />
          <TextField
            error={dateDebut === ""}
            helperText={dateDebut === "" ? "Empty!" : " "}
            id="dateDebut"
            variant="outlined"
            value={dateDebut}
            label="Date Debut"
            type="date"
            fullWidth
            onChange={(e) => setDateDebut(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            error={dateFin === ""}
            helperText={dateFin === "" ? "Empty!" : " "}
            id="dateFin"
            variant="outlined"
            value={dateFin}
            label="Date Fin"
            type="date"
            fullWidth
            onChange={(e) => setDateFin(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            error={description === ""}
            helperText={description === "" ? "Empty!" : " "}
            id="description"
            multiline
            rows={2}
            rowsMax={4}
            variant="outlined"
            value={description}
            fullWidth
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-mutiple-chip-label">Employee</InputLabel>
            <Select
              name={"permissions"}
              id="listP"
              multiple
              variant="outlined"
              value={employees}
              onChange={handleChange}
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
          </FormControl>
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
