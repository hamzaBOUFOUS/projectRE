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
import { addEditCondidature } from "../../../stores/reducers/condidature/actions";
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
    setCin(selected ? selected.cin : null);
    setNom(selected ? selected.nom : null);
    setPrenom(selected ? selected.prenom : null);
    setEmail(selected ? selected.email : null);
    setTelephone(selected ? selected.telephone : null);
    setAdresse(selected ? selected.adresse : null);
    setCv(selected ? selected.cv : null);
  }, [selected]);
  const [cin, setCin] = useState();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [email, setEmail] = useState();
  const [telephone, setTelephone] = useState();
  const [adresse, setAdresse] = useState();
  const [cv, setCv] = useState();
  const addEditCondidatureCallback = useCallback((data) => {
    dispatch(
      addEditCondidature(
        {
          id: selected ? selected.id : undefined,
          cin: data.cin,
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
          telephone: data.telephone,
          adresse: data.adresse,
          cv: data.cv,
        },
        handleClose
      )
    );
  }, [dispatch, selected, handleClose]);
  function submitForm(data) {
    addEditCondidatureCallback(data);
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
            "EDIT CONDIDATRE"
          ) : (
            "ADD CONDIDATRE"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
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
              />
            )}
            rules={{ required: 'CIN\' s is required' }}
          />
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
              />
            )}
            rules={{ required: 'Nom\' s is required' }}
          />
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
              />
            )}
            rules={{ required: 'Prenom\' s is required' }}
          />
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
              />
            )}
            rules={{ required: 'Email\' s is required', pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/  }}
          />
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
                type="number"
                className={classes.textField}
                value={value}
                fullWidth
                label="TelePhone"
                onChange={onChange}
              />
            )}
            rules={{ required: 'TelePhone\' s is required' }}
          />
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
              />
            )}
            rules={{ required: 'Adresse\' s is required' }}
          />
          <Controller
            name="cv"
            control={control}
            defaultValue={cv}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"cv"}
                id="cv"
                variant="outlined"
                className={classes.textField}
                value={value}
                fullWidth
                label="CV"
                onChange={onChange}
              />
            )}
            rules={{ required: 'CV\' s is required' }}
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
