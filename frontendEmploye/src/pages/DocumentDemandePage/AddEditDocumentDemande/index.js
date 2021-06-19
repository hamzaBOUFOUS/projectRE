import React, { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  Button,
  FormControl,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  Select,
  Chip,
  MenuItem,
  makeStyles,
} from "@material-ui/core/";
import { editDocumentDemande } from "../../../stores/reducers/documentDemande/actions";
import { getListDocuments } from "../../../stores/reducers/document/actions";
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
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm();
  const { DocumentsData } = useSelector((state) => state.documents);
  const { content: listdocument } = DocumentsData;
  useEffect(() => {
    setDocument(selected ? selected.document : null);
    dispatch(getListDocuments(0, {}));
  }, [dispatch,selected]);
  const [document, setDocument] = useState(null);
  const user = JSON.parse(window.localStorage.getItem('tokenUser'));
  const editDocumentDemandeCallback = useCallback((data) => {
    dispatch(
      editDocumentDemande(
        {
          id: selected ? selected.id : undefined,
          employee: user,
          document: data.document,
          etat: "ENATTENTE",
        },
        handleClose
      )
    );
  }, [dispatch, selected, handleClose]);
  function submitForm(data) {
    editDocumentDemandeCallback(data);
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
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Type Document</InputLabel>
            <Controller
              name="document"
              control={control}
              defaultValue={document}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  labelId="demo-simple-select-outlined-label"
                  error={!!error}
                  helperText={error ? error.message : null}
                  id="document"
                  label="Type Document"
                  value={value ? value : null}
                  className={classes.textField}
                  onChange={onChange}
                  renderValue={(s) => (
                    <div className={classes.chips}>
                      <Chip
                        key={s ? s.id : null}
                        label={s ? (s.typeDocument) : ""}
                      />
                    </div>
                  )}
                >
                {listdocument.map(option => {
                    return (
                      <MenuItem key={option.id} value={option}>
                        {option.typeDocument}
                      </MenuItem>
                    )
                  })}
                </Select>
              )}
              rules={{ required: 'Type Document required!' }}
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
