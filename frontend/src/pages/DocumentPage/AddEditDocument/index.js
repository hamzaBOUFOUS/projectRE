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

export default ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTypeDocument(selected ?selected.typeDocument:null);
  }, [selected]);
  const [typeDocument, setTypeDocument] = useState();
  const addEditDocumentCallback = useCallback(() => {
    dispatch(
      addEditDocument(
        {
          id: selected ? selected.id : undefined,
          typeDocument: typeDocument,
        },
        handleClose
      )
    );
  }, [dispatch, typeDocument, selected, handleClose]);
  function submitForm() {
    addEditDocumentCallback();
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
            "EDIT DOCUMENT"
          ) : (
            "ADD DOCUMENT"
          )}
        </DialogTitle>
        <DialogContent className="modal-body">
          <TextField
            error={typeDocument === ""}
            helperText={typeDocument === "" ? "Empty!" : " "}
            id="typeDocument"
            variant="outlined"
            value={typeDocument}
            fullWidth
            label="Type Document"
            onChange={(e) => setTypeDocument(e.target.value)}
          />
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
