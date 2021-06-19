import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { updateUtilisateur } from "../../stores/reducers/utilisateur/actions";
import userimage from '../../../node_modules/admin-lte/dist/img/user4-128x128.jpg';
import { useForm, Controller } from "react-hook-form";
import SuccesModel from "./SuccesModel";
import {
    Button,
    TextField,
    makeStyles,
} from "@material-ui/core/";
import { useDispatch } from "react-redux";
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
export default function Profil(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('tokenUser')));
    const { handleSubmit, control, register, watch } = useForm();
    const [openSuc, setOpenSuc] = useState(false);
    const [email, setEmail] = useState("");
    const handleOpen = useCallback(() => {
        setOpenSuc(true);
    }, [setOpenSuc]);
    const handleClose = useCallback(() => {
        setOpenSuc(false);
    }, [setOpenSuc]);
    function submitForm(data) {
        updateUtilisateurCallback(data);
        setUser(JSON.parse(window.localStorage.getItem('tokenUser')));
    }
    const updateUtilisateurCallback = useCallback((data) => {
        dispatch(
            updateUtilisateur({
                id: user.id,
                email: data.email,
                username: data.username,
                password: data.password
            }, handleOpen)
        );
    }, [dispatch, handleOpen]);
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Profile</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active">User Profile</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card card-primary card-outline">
                                <div className="card-body box-profile">
                                    <div className="text-center">
                                        <img className="profile-user-img img-fluid img-circle"
                                            src={userimage}
                                            alt="User profile picture" />
                                    </div>
                                    <h3 className="profile-username text-center">{user ? user.nom + " " + user.prenom : ""}</h3>
                                    <p className="text-muted text-center">{user ? user.poste?.poste + " " + user.department?.nomDepartment : ""}</p>
                                    <ul className="list-group list-group-unbordered mb-3">
                                        <li className="list-group-item">
                                            <b>Date Naissace</b> <a className="float-right">{user ? user.dateNaissace : ""}</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Telephone</b> <a className="float-right">{user ? user.telephone : ""}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">About Me</h3>
                                </div>
                                <div className="card-body">
                                    <strong><i className="fas fa-book mr-1"></i> Email</strong>
                                    <p className="text-muted">
                                        {user ? user.email : ""}
                                    </p>
                                    <hr />
                                    <strong><i className="fas fa-book mr-1"></i> Adresse</strong>
                                    <p className="text-muted">
                                        {user ? user.adresse : ""}
                                    </p>
                                    <hr />
                                    <strong><i className="fas fa-map-marker-alt mr-1"></i> Nationalite</strong>
                                    <p className="text-muted">{user ? user.nationalite : ""}</p>
                                    <hr />
                                    <strong><i className="fas fa-pencil-alt mr-1"></i> Horaire</strong>
                                    <p className="text-muted">
                                        <span className="tag tag-danger">{user ? user.horaire : ""}</span>
                                    </p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header p-2">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab">Settings</a></li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="active tab-pane" id="settings">
                                            <form className="form-horizontal" onSubmit={handleSubmit(submitForm)}>
                                                <div className="form-group row">
                                                    <div className="col-sm-12">
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
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                />
                                                            )}
                                                            rules={{ required: 'Email\' s is required', pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/  }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-12">
                                                        <Controller
                                                            name="username"
                                                            control={control}
                                                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                                                <TextField
                                                                    error={!!error}
                                                                    helperText={error ? error.message : null}
                                                                    name={"username"}
                                                                    id="username"
                                                                    variant="outlined"
                                                                    className={classes.textField}
                                                                    value={value}
                                                                    fullWidth
                                                                    label="Username"
                                                                    onChange={onChange}
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                />
                                                            )}
                                                            rules={{ required: 'Username\' s is required' }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-12">
                                                        <Controller
                                                            name="password"
                                                            control={control}
                                                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                                                <TextField
                                                                    error={!!error}
                                                                    helperText={error ? error.message : null}
                                                                    name={"password"}
                                                                    id="password"
                                                                    type="password"
                                                                    variant="outlined"
                                                                    className={classes.textField}
                                                                    value={value}
                                                                    fullWidth
                                                                    label="Password"
                                                                    onChange={onChange}
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                />
                                                            )}
                                                            rules={{
                                                                required: 'Password\' s is required',
                                                                minLength: {
                                                                    value: 8,
                                                                    message: "Password must have at least 8 characters"
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-12">
                                                        <Controller
                                                            name="passwordconf"
                                                            control={control}
                                                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                                                <TextField
                                                                    error={!!error}
                                                                    helperText={error ? error.message : null}
                                                                    name={"passwordconf"}
                                                                    id="passwordconf"
                                                                    type="password"
                                                                    variant="outlined"
                                                                    className={classes.textField}
                                                                    value={value}
                                                                    fullWidth
                                                                    label="Confirme Password"
                                                                    onChange={onChange}
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    {...register("passwordconf", {
                                                                        validate: (value) => {
                                                                            return value === watch('password') || "The passwords do not match"; // value is from password2 and watch will return value from password1
                                                                        }
                                                                      })}
                                                                />
                                                            )}
                                                            rules={{
                                                                required: 'Confirme Password\' s is required',
                                                                minLength: {
                                                                    value: 8,
                                                                    message: "Password must have at least 8 characters"
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-12">
                                                        <Button type="submit" variant="outlined" color="primary">Submit</Button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {openSuc && (
                <SuccesModel
                    open={openSuc}
                    handleClose={handleClose}
                />
            )}
        </>
    )

}