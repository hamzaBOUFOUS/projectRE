
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
  Grid,
} from "@material-ui/core/";
import { addEditEmployee } from "../../../stores/reducers/employee/actions";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { getListDepartments } from "../../../stores/reducers/department/actions";
import { getListContrats } from "../../../stores/reducers/contrat/actions";
import { getListPostes } from "../../../stores/reducers/poste/actions";

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
  const { ContratsData } = useSelector((state) => state.contrats);
  const { content: listcontrat } = ContratsData;
  const { DepartmentsData } = useSelector((state) => state.departments);
  const { content: listdepartment } = DepartmentsData;
  useEffect(() => {
    setPoste(selected ? selected.poste : null);
    setDepartment(selected ? selected.department : null);
    setContrat(selected ? selected.contrat : null);
    setCin(selected ? selected.cin : null);
    setNom(selected ? selected.nom : null);
    setPrenom(selected ? selected.prenom : null);
    setEmail(selected ? selected.email : null);
    setTelephone(selected ? selected.telephone : null);
    setAdresse(selected ? selected.adresse : null);
    setNationalite(selected ? selected.nationalite : null);
    setSalaire(selected ? selected.salaire : null);
    setHoraire(selected ? selected.horaire : null);
    setDateDebut(selected ? selected.dateDebut : null);
    setCodePostale(selected ? selected.codePostale : null);
    setDateNaissace(selected ? selected.dateNaissace : null);
    dispatch(getListPostes(0, {}));
    dispatch(getListContrats(0, {}));
    dispatch(getListDepartments(0, {}));
  }, [dispatch, selected]);
  {/* *******SectionSelect********** */ }
  const [formStep, setFormStep] = React.useState(0)
  const completeFormStep = () => {
    setFormStep(cur => cur + 1)
  }

  const backFormStep = () => {
    setFormStep(cur => cur - 1)
  }
  const renderButton = () => {
    if (formStep > 4) {
      return undefined
    } else if (formStep === 4) {
      return (
        <>
        </>
      )
    } else {
      return (
        <>
          {formStep != 0 ? (
            <Button variant="outlined" color="secondary" onClick={backFormStep}>
              Back
            </Button>
          ) : ""}
          <Button variant="outlined" color="primary" onClick={completeFormStep}>
            Next
          </Button>
        </>
      )
    }
  }
  {/* ***************** */ }
  const [department, setDepartment] = useState(null);
  const [contrat, setContrat] = useState(null);
  const [poste, setPoste] = useState(null);
  const [cin, setCin] = useState();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [email, setEmail] = useState();
  const [telephone, setTelephone] = useState();
  const [adresse, setAdresse] = useState();
  const [nationalite, setNationalite] = useState();
  const [codePostale, setCodePostale] = useState();
  const [salaire, setSalaire] = useState();
  const [horaire, setHoraire] = useState();
  const [dateDebut, setDateDebut] = useState();
  const [dateNaissace, setDateNaissace] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const addEditEmployeeCallback = useCallback((data) => {
    dispatch(
      addEditEmployee(
        {
          id: selected ? selected.id : undefined,
          poste: data.poste,
          cin: data.cin,
          nom: data.nom,
          prenom: data.prenom,
          dateNaissace: data.dateNaissace,
          email: data.email,
          telephone: data.telephone,
          adresse: data.adresse,
          nationalite: data.nationalite,
          codePostale: data.codePostale,
          salaire: data.salaire,
          horaire: data.horaire,
          dateDebut: data.dateDebut,
          department: data.department,
          contrat: data.contrat,
        },
        handleClose
      )
    );
  }, [dispatch, selected, handleClose]);

  function submitForm(data) {
    console.log(data)
    addEditEmployeeCallback(data);
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
            "EDIT EMPLOYEE"
          ) : (
            "ADD EMPLOYEE"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <Grid container spacing={2}>
            {/*   *************    */}
            {formStep === 0 && (
              <>
                <Grid item xs={12} sm={12}>
                  <br />
                  <Controller
                    name="cin"
                    control={control}
                    defaultValue={cin}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        error={!!error}
                        helperText={error ? error.message : null}
                        name={"cin"}
                        id="cin"
                        variant="outlined"
                        className={classes.textField}
                        value={value}
                        fullWidth
                        label="CIN"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'CIN\' s is required' }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Controller
                    name="nom"
                    control={control}
                    defaultValue={nom}
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
                        label="Nom"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'Nom\' s is required' }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Controller
                    name="prenom"
                    control={control}
                    defaultValue={prenom}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        error={!!error}
                        helperText={error ? error.message : null}
                        name={"prenom"}
                        id="prenom"
                        variant="outlined"
                        className={classes.textField}
                        value={value}
                        fullWidth
                        label="Prenom"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'Prenom\' s is required' }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Controller
                    name="dateNaissace"
                    control={control}
                    defaultValue={dateNaissace}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        error={!!error}
                        helperText={error ? error.message : null}
                        name={"dateNaissace"}
                        id="dateNaissace"
                        variant="outlined"
                        className={classes.textField}
                        type="date"
                        value={value}
                        fullWidth
                        label="Date Naissace"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'Date\' s Naissace is required' }}
                  />
                </Grid>
              </>
            )}
            {/*   **********************************    */}
            {formStep === 1 && (
              <>
                <Grid item xs={12} sm={12}>
                  <br />
                  <Controller
                    name="email"
                    control={control}
                    defaultValue={email}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        error={!!error}
                        helperText={error ? error.message : null}
                        name={"email"}
                        id="email"
                        variant="outlined"
                        className={classes.textField}
                        value={value}
                        fullWidth
                        label="Email"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'Email\' s is required', pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Controller
                    name="telephone"
                    control={control}
                    defaultValue={telephone}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        error={!!error}
                        helperText={error ? error.message : null}
                        name={"telephone"}
                        id="telephone"
                        variant="outlined"
                        className={classes.textField}
                        value={value}
                        type="number"
                        fullWidth
                        label="Telephone"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'Telephone\' s is required' }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Controller
                    name="nationalite"
                    control={control}
                    defaultValue={nationalite}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        error={!!error}
                        helperText={error ? error.message : null}
                        name={"nationalite"}
                        id="nationalite"
                        variant="outlined"
                        className={classes.textField}
                        value={value}
                        fullWidth
                        label="Nationalite"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'Nationalite\' s is required' }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Controller
                    name="adresse"
                    control={control}
                    defaultValue={adresse}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        error={!!error}
                        helperText={error ? error.message : null}
                        name={"adresse"}
                        id="adresse"
                        variant="outlined"
                        className={classes.textField}
                        value={value}
                        fullWidth
                        multiline
                        rows={2}
                        rowsMax={3}
                        label="Adresse"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'Adresse\' s is required' }}
                  />
                </Grid>
              </>
            )}
            {/*   *******************************    */}
            {formStep === 2 && (
              <>
                <Grid item xs={12} sm={12}>
                  <br />
                  <Controller
                    name="codePostale"
                    control={control}
                    defaultValue={codePostale}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        error={!!error}
                        helperText={error ? error.message : null}
                        name={"codePostale"}
                        id="codePostale"
                        variant="outlined"
                        className={classes.textField}
                        value={value}
                        fullWidth
                        label="Code Postale"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'Code\' s Postale is required' }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Controller
                    name="salaire"
                    control={control}
                    defaultValue={salaire}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        error={!!error}
                        helperText={error ? error.message : null}
                        name={"salaire"}
                        id="salaire"
                        type="number"
                        variant="outlined"
                        className={classes.textField}
                        value={value}
                        fullWidth
                        label="Salaire"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'Salaire\' s is required' }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
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
                    rules={{ required: 'Date\' s Debut is required' }}
                  />
                </Grid>
              </>
            )}
            {/*   *******************************   */}
            {formStep === 3 && (
              <>
                <Grid item xs={12} sm={12}>
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
                                label={s ? (s.poste) : ""}
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
                      rules={{ required: 'List Poste required!' }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">Contrat</InputLabel>
                    <Controller
                      name="contrat"
                      control={control}
                      defaultValue={contrat}
                      render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          error={!!error}
                          helperText={error ? error.message : null}
                          id="contrat"
                          label="Contrat"
                          value={value ? value : null}
                          className={classes.textField}
                          onChange={onChange}
                          renderValue={(s) => (
                            <div className={classes.chips}>
                              <Chip
                                key={s ? s.id : null}
                                label={s ? (s.typeContrat) : ""}
                              />
                            </div>
                          )}
                        >
                          {listcontrat.map(option => {
                            return (
                              <MenuItem key={option.id} value={option}>
                                {option.typeContrat}
                              </MenuItem>
                            )
                          })}

                        </Select>
                      )}
                      rules={{ required: 'List Contrat required!' }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
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
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">Horaire</InputLabel>
                    <Controller
                      name="horaire"
                      control={control}
                      defaultValue={horaire}
                      render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          error={!!error}
                          helperText={error ? error.message : null}
                          id="horaire"
                          label="Horaire"
                          value={value ? value : null}
                          className={classes.textField}
                          onChange={onChange}
                          renderValue={(s) => (
                            <div className={classes.chips}>
                              <Chip
                                key={s}
                                label={s}
                              />
                            </div>
                          )}
                        >
                          <MenuItem key="1" value="8:00 a 17:00">
                            8:00 a 17:00
                          </MenuItem>
                          <MenuItem key="2" value="9:00 a 18:00">
                            9:00 a 18:00
                          </MenuItem>
                          <MenuItem key="3" value="7:00 a 16:00">
                            7:00 a 16:00
                          </MenuItem>
                        </Select>
                      )}
                      rules={{ required: 'Horaire required!' }}
                    />
                  </FormControl>
                </Grid>
              </>
            )}
            {/*   *******************************    */}
            {formStep === 4 && (
              <>
                <Grid item xs={12} sm={12}>
                  <br />
                  <Controller
                    name="username"
                    control={control}
                    defaultValue={username}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        error={!!error}
                        helperText={error ? error.message : null}
                        name={"username"}
                        id="username"
                        variant="outlined"
                        className={classes.textField}
                        value={value}
                        fullWidth
                        label="Username"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'Username\' s is required' }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                    <Controller
                      name="role"
                      control={control}
                      defaultValue={role}
                      render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          error={!!error}
                          helperText={error ? error.message : null}
                          id="role"
                          label="Role"
                          value={value ? value : null}
                          className={classes.textField}
                          onChange={onChange}
                          renderValue={(s) => (
                            <div className={classes.chips}>
                              <Chip
                                key={s}
                                label={s}
                              />
                            </div>
                          )}
                        >
                          <MenuItem key="ADMIN" value="ADMIN">
                          ADMIN
                          </MenuItem>
                          <MenuItem key="EMPLOYE" value="EMPLOYE">
                          EMPLOYE
                          </MenuItem>
                        </Select>
                      )}
                      rules={{ required: 'Role required!' }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue={password}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        error={!!error}
                        helperText={error ? error.message : null}
                        name={"password"}
                        id="password"
                        variant="outlined"
                        type="password"
                        className={classes.textField}
                        value={value}
                        inputProps={{minLength :8}}
                        fullWidth
                        label="Password"
                        onChange={onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                    rules={{ required: 'Password\' s is required' }}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </DialogContent>
        <br />
        <DialogActions className="modal-footer">
          {renderButton()}
          {formStep == 4 && (
            <>
              <Button variant="outlined" color="secondary" onClick={backFormStep}>
                Back
              </Button>
              <Button type="submit" variant="outlined" color="primary"  >
                Save
              </Button>
            </>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
};
