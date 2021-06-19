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
            <DialogTitle className="bg-danger">{"Erreur"}</DialogTitle>
            <DialogContent className="bg-danger">
                <DialogContentText id="alert-dialog-description" style={{color: "#fff"}}>
                    Password or Username incorrect
                </DialogContentText>
            </DialogContent>
            <DialogActions className="bg-danger">
                <button onClick={handleClose} type="button" className="btn btn-outline-light">Close</button>
            </DialogActions>
        </Dialog>
    );
};
