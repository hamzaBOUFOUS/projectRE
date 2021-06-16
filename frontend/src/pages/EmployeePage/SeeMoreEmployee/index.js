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
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            aria-describedby="form-dialog-description"
        >
            <form>
                <DialogTitle id="form-dialog-title">
                    Voir detail
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="CIN"
                                defaultValue={employee? employee.cin : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Nom"
                                defaultValue={employee? employee.nom : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Prenom"
                                defaultValue={employee? employee.prenom : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Date Naissace"
                                defaultValue={employee? employee.dateNaissace : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Email"
                                defaultValue={employee? employee.email : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Telephone"
                                defaultValue={employee? employee.telephone : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Nationalite"
                                defaultValue={employee? employee.nationalite : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={2}
                                rowsMax={3}
                                className={classes.textField}
                                label="Adresse"
                                defaultValue={employee? employee.adresse : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Code Postale"
                                defaultValue={employee? employee.codePostale : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Salaire"
                                defaultValue={employee? employee.salaire : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Date Debut"
                                defaultValue={employee? employee.dateDebut : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Poste"
                                defaultValue={employee? employee.poste.poste : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Contrat"
                                defaultValue={employee? employee.contrat.typeContrat : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Department"
                                defaultValue={employee? employee.department.nomDepartment : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Code Postale"
                                defaultValue={employee? employee.codePostale : ""}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.textField}
                                label="Horaire"
                                defaultValue={employee? employee.horaire : ""}
                                disabled
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <br />
                <DialogActions>
                    <Button variant="outlined" color="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </form>
        </Dialog >
    );
};