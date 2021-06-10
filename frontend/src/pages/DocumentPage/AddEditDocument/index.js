import React, { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core/";
import { addEditDocument } from "../../../stores/reducers/document/actions";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

export default ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm();
  useEffect(() => {
    setTypeDocument(selected ?selected.typeDocument:null);
  }, [selected]);
  const [typeDocument, setTypeDocument] = useState();
  const addEditDocumentCallback = useCallback((data) => {
    dispatch(
      addEditDocument(
        {
          id: selected ? selected.id : undefined,
          typeDocument: data.typeDocument,
        },
        handleClose
      )
    );
  }, [dispatch, typeDocument, selected, handleClose]);
  function submitForm(data) {
    addEditDocumentCallback(data);
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
            "EDIT DOCUMENT"
          ) : (
            "ADD DOCUMENT"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <Controller
            name="typeDocument"
            control={control}
            defaultValue={typeDocument}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                name={"typeDocument"}
                id="typeDocument"
                variant="outlined"
                value={value}
                fullWidth
                label="Type Document"
                onChange={onChange}
              />
            )}
            rules={{ required: 'Document\' s type is required' }}
          />
        </DialogContent>
        <br />
        <DialogActions className="modal-footer">
          <Button type="submit" variant="outlined" color="primary">
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
