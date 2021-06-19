import React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText,
} from "@material-ui/core/";

export default ({ open, handleClose }) => {
    return (
        <Dialog
            maxWidth="xs"
            fullWidth={true}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle className="bg-success">{"Success"}</DialogTitle>
            <DialogContent className="modal-body bg-success">
                <DialogContentText id="alert-dialog-description" style={{color: "#fff"}}>
                    Modification a ete Effectue
                </DialogContentText>
            </DialogContent>
            <DialogActions className="bg-success">
                <button onClick={handleClose} type="button" className="btn btn-outline-light">Close</button>
            </DialogActions>
        </Dialog>
    );
};
