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
        setVacance(selected);
    }, [selected]);
    const [vacance, setVacance] = useState();
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
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <strong><i className="fas fa-book mr-1"></i> Title</strong>
                        <p className="text-muted">{vacance ? vacance.name : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <strong><i className="far fa-clock mr-1"></i> Date Debut</strong>
                        <p className="text-muted">{vacance ? vacance.dateDebut : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <strong><i className="far fa-clock mr-1"></i> Date Fin</strong>
                        <p className="text-muted">{vacance ? vacance.dateFin : ""}</p>
                    </Grid>
                </Grid>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-default float-right" onClick={handleClose}>Close</button>
            </div>
        </Dialog >
    );
};