import React, { useEffect, useState } from "react";
import {
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
    chip: {
        margin: 2,
    },
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
        console.log(selected);
        setEmployee(selected);
    }, [selected]);
    const [employee, setEmployee] = useState();
    return (
        <Dialog
            maxWidth="md"
            fullWidth={true}
            open={open}
            className="card-primary"
            onClose={handleClose}
        >
            <div className="card-header" style={{ backgroundColor: '#007bff', color: '#fff' }}>
                <h3 className="card-title">Info</h3>
            </div>
            <div className="card-body">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> CIN</strong>
                        <p className="text-muted">{employee ? employee.cin : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Nom</strong>
                        <p className="text-muted">{employee ? employee.nom : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Prenom</strong>
                        <p className="text-muted">{employee ? employee.prenom : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Date Naissace</strong>
                        <p className="text-muted">{employee ? employee.dateNaissace : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Email</strong>
                        <p className="text-muted">{employee ? employee.email : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Telephone</strong>
                        <p className="text-muted">{employee ? employee.telephone : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Nationalite</strong>
                        <p className="text-muted">{employee ? employee.nationalite : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Adresse</strong>
                        <p className="text-muted">{employee ? employee.adresse : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Code Postale</strong>
                        <p className="text-muted">{employee ? employee.codePostale : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Salaire</strong>
                        <p className="text-muted">{employee ? employee.salaire : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Date Debut</strong>
                        <p className="text-muted">{employee ? employee.dateDebut : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Poste</strong>
                        <p className="text-muted">{employee ? employee.poste.poste : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Contrat</strong>
                        <p className="text-muted">{employee ? employee.contrat.typeContrat : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Department</strong>
                        <p className="text-muted">{employee ? employee.department.nomDepartment : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Horaire</strong>
                        <p className="text-muted">{employee ? employee.horaire : ""}</p>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Username</strong>
                        <p className="text-muted">{employee ? employee.username : ""}</p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> Role</strong>
                        <p className="text-muted">{employee ? employee.role : ""}</p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <strong><i className="far fa-clock mr-1"></i> password</strong>
                        <p className="text-muted">{employee ? employee.password : ""}</p>
                    </Grid>
                </Grid>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-default float-right" onClick={handleClose}>Close</button>
            </div>
        </Dialog >
    );
};