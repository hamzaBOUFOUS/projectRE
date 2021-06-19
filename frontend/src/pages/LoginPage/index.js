import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../stores/reducers/utilisateur/actions";
import { useForm, Controller } from "react-hook-form";
import ErrorModel from "./ErrorModel";
import SuccesModel from "./SuccesModel";
import LoginLogo from '../../../node_modules/admin-lte/login/images/icon.png'
import '../../../node_modules/admin-lte/login/css/style.css'
import {
    TextField,
    makeStyles,
    InputAdornment,
} from "@material-ui/core/";
import { AccountCircle, VpnKey } from "@material-ui/icons/";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom: '10px',
    }
}));
export default function Login(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const loginData = useSelector((state) => state.users.loginData);
    const { handleSubmit, control } = useForm();
    const [openErr, setOpenErr] = useState(false);
    const [openSuc, setOpenSuc] = useState(false);
    const handleOpen = useCallback((test) => {
        if (test === true) {
            setOpenSuc(true);
        } else {
            setOpenErr(true);
        }
    }, [setOpenSuc, setOpenErr]);
    const handleClose = useCallback((test) => {
        console.log(test);
        if(test === true){
            setOpenSuc(false);
            history.push('/')
        }else{
            setOpenErr(false);
        }
    }, [setOpenSuc, setOpenErr]);
    const loginCallback = useCallback((data) => {
        dispatch(
            login({
                username: data.username,
                password: data.password
            }, handleOpen)
        );
    }, [dispatch, handleOpen]);

    function submitForm(data) {
        //console.log(data);
        loginCallback(data);
    }
    return (
        <>
            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-5 log">
                            <div class="login-wrap p-4 p-md-5">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <img src={LoginLogo} style={{ width: '105px', height: '105px' }} />
                                </div><br />
                                <h3 class="text-center mb-4">S'identifier</h3>
                                <form class="login-form" onSubmit={handleSubmit(submitForm)}>
                                    <div class="form-group">
                                       
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
                                                InputProps={{
                                                  startAdornment: (
                                                    <InputAdornment position="start">
                                                      <AccountCircle />
                                                    </InputAdornment>
                                                  ),
                                                }}
                                            />
                                        )}
                                        rules={{ required: 'Username is required' }}
                                    />
                                    </div>
                                    <div class="form-group d-flex">
                                        
                                    <Controller
                                        name="password"
                                        control={control}
                                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                                            <TextField
                                                error={!!error}
                                                helperText={error ? error.message : null}
                                                name={"password"}
                                                id="password"
                                                variant="outlined"
                                                type="password"
                                                className={classes.textField}
                                                value={value}
                                                label="Password"
                                                fullWidth
                                                onChange={onChange}
                                                inputProps={{minLength :8}}
                                                InputProps={{
                                                  startAdornment: (
                                                    <InputAdornment position="start">
                                                      <VpnKey />
                                                    </InputAdornment>
                                                  ),
                                                }}
                                            />
                                        )}
                                        rules={{ required: 'Password is required' }}
                                    />
                                    </div>
                                    <div class="form-group d-md-flex">
                                        <div class="w-50">
                                            <label class="checkbox-wrap checkbox-primary">Souviens Moi
                                                <input type="checkbox" checked />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>

                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary rounded submit p-3 px-5">Connexion</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {openErr && (
                <ErrorModel
                    open={openErr}
                    handleClose={handleClose}
                />
            )}
            {openSuc && (
                <SuccesModel
                    open={openSuc}
                    handleClose={handleClose(true)}
                />
            )}
        </>
    )

}
/*
<div class="hold-transition login-page">
                <div class="login-box">
                    <div class="card card-outline card-primary">
                        <div class="card-header text-center">
                            <a href="../../index2.html" class="h1"><b>Login</b></a>
                        </div>
                        <div class="card-body">
                            <form onSubmit={handleSubmit(submitForm)}>
                                <div class="input-group mb-3">
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
                                                InputProps={{
                                                  startAdornment: (
                                                    <InputAdornment position="start">
                                                      <AccountCircle />
                                                    </InputAdornment>
                                                  ),
                                                }}
                                            />
                                        )}
                                        rules={{ required: 'Username is required' }}
                                    />
                                </div>
                                <div class="input-group mb-3">
                                    <Controller
                                        name="password"
                                        control={control}
                                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                                            <TextField
                                                error={!!error}
                                                helperText={error ? error.message : null}
                                                name={"password"}
                                                id="password"
                                                variant="outlined"
                                                type="password"
                                                className={classes.textField}
                                                value={value}
                                                label="Password"
                                                fullWidth
                                                onChange={onChange}
                                                inputProps={{minLength :8}}
                                                InputProps={{
                                                  startAdornment: (
                                                    <InputAdornment position="start">
                                                      <VpnKey />
                                                    </InputAdornment>
                                                  ),
                                                }}
                                            />
                                        )}
                                        rules={{ required: 'Password is required' }}
                                    />
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {openErr && (
                <ErrorModel
                    open={openErr}
                    handleClose={handleClose}
                />
            )}
            {openSuc && (
                <SuccesModel
                    open={openSuc}
                    handleClose={handleClose}
                />
            )}
*/