import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListFormations, getListFormationIds } from "../../stores/reducers/formation/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import cx from "classnames";
import { useDebouncedCallback } from 'use-debounce';
import CustomPagination from "../../components/CustomPagination";
import {
    Delete,
    Add,
    Edit,
    FilterList,
} from "@material-ui/icons";
import {
    Chip,
    Button,
    makeStyles,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableContainer,
    Paper,
    TextField,
    IconButton,
    Divider,
    LinearProgress,
    InputAdornment,
} from "@material-ui/core/";
const useStyles = makeStyles((theme) => ({
    header: {
        padding: theme.spacing(2),
        textAlign: "right",
    },
    pagination: {
        padding: theme.spacing(2),
        display: "flex",
        justifyContent: "flex-end",
    },
    coloredRow: {
        backgroundColor: "#F7F8FC",
    },
    actions: { width: 120, textAlign: "right" },
    blur: { filter: "blur(4px)" },
    chip: { marginRight: theme.spacing(1) },
    title: { padding: theme.spacing(3, 0) },
    iconItemList: { minWidth: 30 },
    delete: { color: "#ef5350" },
    filterRow: {
        background: "#e5e8f4",
        "&>.MuiTableCell-root": {
            padding: 0,
        },
    },
    noBorder: {
        border: "none",
    },
}));
export default function ListFormations(props) {
    const classes = useStyles();
    const { FormationIdsData, status } = useSelector((state) => state.formations);
    const { content: formations, totalPages, number: page } = FormationIdsData;
    const dispatch = useDispatch();
    const [id, setId] = useState(2);
    const handleGetFormations = useCallback(
        (nPage, nId) => {
            dispatch(getListFormationIds(nPage, nId, 10));
        },
        [dispatch]
    );
    useEffect(() => {
        handleGetFormations(page, id);
    }, [handleGetFormations, id]);
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Gestion Formations</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Formation</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-primary card-outline">
                                <div className="card-header">
                                    <h3 className="card-title">Bordered Table</h3>
                                </div>
                                <div className="card-body">
                                    <TableContainer component={Paper}>
                                        {status === "loading" && <LinearProgress color="secondary" />}
                                        <Loader status={status}>
                                            <Table className={cx({ [classes.blur]: status === "loading" })}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <strong>
                                                                #
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Title
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Date Debut
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Date Fin
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Description
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Participant
                                                            </strong>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow className={classes.filterRow}>
                                                        <TableCell />
                                                        <TableCell />
                                                        <TableCell />
                                                        <TableCell />
                                                        <TableCell />
                                                        <TableCell />
                                                        <TableCell />
                                                    </TableRow>
                                                    {formations.map((formation, idx) => (
                                                        <TableRow className={cx({ [classes.coloredRow]: idx % 2 === 0 })}>
                                                            <TableCell>{formation.id}</TableCell>
                                                            <TableCell>{formation.nom}</TableCell>
                                                            <TableCell>{formation.dateDebut}</TableCell>
                                                            <TableCell>{formation.dateFin}</TableCell>
                                                            <TableCell>{formation.description}</TableCell>
                                                            <TableCell>
                                                                {formation.employees.length === 0 ? (
                                                                    "Pas de Participant"
                                                                ) : (
                                                                    formation.employees.map((value) => (
                                                                        <Chip
                                                                            variant="outlined"
                                                                            label={value.nom}
                                                                            className={classes.chip}
                                                                        />
                                                                    ))
                                                                )}
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                            <CustomPagination
                                                totalPages={totalPages}
                                                page={page + 1}
                                                onPageChange={(_, newPage) => {
                                                    handleGetFormations(newPage - 1, id);
                                                }}
                                            />
                                        </Loader>
                                    </TableContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}