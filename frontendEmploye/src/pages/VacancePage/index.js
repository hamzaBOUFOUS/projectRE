import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListVacances } from "../../stores/reducers/vacance/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import cx from "classnames";
import SeeMore from "./SeeMore";
import CustomPagination from "../../components/CustomPagination";
import {
    Ballot
} from "@material-ui/icons";
import {
    makeStyles,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableContainer,
    Paper,
    IconButton,
    LinearProgress,
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
export default function ListVacances(props) {
    const classes = useStyles();
    const { VacancesData, status } = useSelector((state) => state.vacances);
    const { content: vacances, totalPages, number: page } = VacancesData;
    const dispatch = useDispatch();
    const [openSeeMore, setOpenSeeMore] = useState(false);
    const [selected, setSelected] = useState();
    const handleGetVacances = useCallback(
        (nPage, nFilter) => {
            dispatch(getListVacances(nPage, nFilter, 10));
        },
        [dispatch]
    );
    const handleOpenSeeMore = (evenement) => (event) => {
        setSelected(evenement);
        setOpenSeeMore(true);
    };
    const handleCloseSeeMore = useCallback(() => {
        setSelected(null);
        setOpenSeeMore(false);
    }, [selected]);
    useEffect(() => {
        handleGetVacances(page, {});
    }, [handleGetVacances]);
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Gestion Vacances</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active">Vacance</li>
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
                                                                Name
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
                                                        <TableCell className={classes.actions} />
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow className={classes.filterRow}>
                                                        <TableCell />
                                                        <TableCell />
                                                        <TableCell />
                                                        <TableCell />
                                                        <TableCell />
                                                    </TableRow>
                                                    {vacances.map((vacance, idx) => (
                                                        <TableRow className={cx({ [classes.coloredRow]: idx % 2 === 0 })}>
                                                            <TableCell>{vacance.id}</TableCell>
                                                            <TableCell>{vacance.name}</TableCell>
                                                            <TableCell>{vacance.dateDebut}</TableCell>
                                                            <TableCell>{vacance.dateFin}</TableCell>
                                                            <TableCell className={classes.actions}>
                                                                <IconButton
                                                                    aria-haspopup="true"
                                                                    onClick={handleOpenSeeMore(vacance)}
                                                                    color="inherit"
                                                                >
                                                                    <Ballot color="inherit" fontSize="small" />
                                                                </IconButton>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                            <CustomPagination
                                                totalPages={totalPages}
                                                page={page + 1}
                                                onPageChange={(_, newPage) => {}}
                                            />
                                        </Loader>
                                    </TableContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {openSeeMore && (
                <SeeMore
                    open={openSeeMore}
                    handleClose={handleCloseSeeMore}
                    selected={selected}
                />
            )}
        </>
    )
}