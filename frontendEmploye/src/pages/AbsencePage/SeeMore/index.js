import React, { useEffect, useState } from "react";
import {
    Chip,
    Dialog,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    makeStyles,
    Grid,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    chips: {
        display: "flex",
        flexWrap: "wrap",
    },
    chip: { marginRight: theme.spacing(1) },
    textField: {
        marginBottom: '10px',
        "& .MuiInputBase-root.Mui-disabled": {
            color: "rgba(0, 0, 0, 1.6)"
        }
    }
}));

export default ({ open, handleClose, selected }) => {
    const classes = useStyles();
    useEffect(() => {
        setAbsence(selected);
    }, [selected]);
    const [absence, setAbsence] = useState();
    return (
        <Dialog
            maxWidth="xs"
            fullWidth={true}
            open={open}
            className="card-primary"
            onClose={handleClose}
        >
            <div className="card-header" style={{ backgroundColor: '#007bff', color: '#fff' }}>
                <h3 className="card-title">Info</h3>
            </div>
            <div className="card-body">
                <strong><i className="far fa-clock mr-1"></i> Date Absence</strong>
                <p className="text-muted">{absence ? absence.dateAbsence : ""}</p>
                <hr />
                <strong><i className="far fa-file mr-1"></i> Etat</strong>
                <p className="text-muted">
                    {absence ? absence.etat : ""}
                </p>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-default float-right" onClick={handleClose}>Close</button>
            </div>
        </Dialog >
    );
};

/*


        <Dialog
            maxWidth="xs"
            fullWidth={true}
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            aria-describedby="form-dialog-description"
        >
                <div className="card-header">
                    <h3 className="card-title">Info</h3>
                </div>
                <div className="card-body">
                    <strong><i className="fas fa-book mr-1"></i> Titre</strong>
                    <p className="text-muted">
                        (Titre formation)
                    </p>
                    <hr />
                    <strong><i className="far fa-clock"></i> Date début</strong>
                    <p className="text-muted">(date debut)</p>
                    <hr />
                    <strong><i className="far fa-clock"></i> Date Fin</strong>
                    <p className="text-muted">(date fin)</p>
                    <hr />
                    <strong><i className="far fa-file"></i> Description</strong>
                    <p className="text-muted">
                        (description)
                    </p>
                </div >
        </Dialog >
*/