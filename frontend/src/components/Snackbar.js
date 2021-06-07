import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from '@material-ui/core/Snackbar';
import {Alert} from "@material-ui/lab";

export default function Snackbarr({ openS, title, severity }) {
    const [open, setOpen] = useState(false);
    const [vertical, setVertical] = useState('top');
    const [horizontal, setHorizontal] = useState('right');
    const handleOpen = (evenement) => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        console.log(openS)
        setOpen(openS);
    }, [open]);
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration="3000"
            key={vertical + horizontal}
        >
            <Alert variant="filled" onClose={handleClose} severity={severity}>
            {title}
      </Alert>
        </Snackbar>
    );
}
