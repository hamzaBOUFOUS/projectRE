import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../stores/reducers/utilisateur/actions";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  makeStyles,
  InputAdornment,
} from "@material-ui/core/";
import { AccountCircle, VpnKey } from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom: '10px',
    }
}));
export default function Login(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { handleSubmit, control } = useForm();
    const loginCallback = useCallback((data) => {
        dispatch(
            login({
                username: data.username,
                password: data.password
            })
        );
    }, [dispatch]);

    function submitForm(data) {
        console.log(data);
        //loginCallback(data);
    }
    return (
        <>
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
        </>
    )

}