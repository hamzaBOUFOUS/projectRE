import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListDemandeCongeIds } from "../../stores/reducers/demandeConge/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import cx from "classnames";
import CustomPagination from "../../components/CustomPagination";
import EditDemandeConge from "./AddEditDemandeConge";
import DeleteDemandeConge from "./DeleteDemandeConge";
import {
    Add,
    Delete,
    Edit,
    CheckCircle,
    Clear
} from "@material-ui/icons";
import {
    Chip,
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
    Button,
    Divider,
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
    actionsV: { width: 120, textAlign: "center" },
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
export default function ListDemandeConges(props) {
    const classes = useStyles();
    const { DemandeCongeIdsData, status } = useSelector((state) => state.demandeConges);
    const { content: demandeConges, totalPages, number: page } = DemandeCongeIdsData;
    const dispatch = useDispatch();
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [id, setId] = useState(1);
    const [openDelete, setOpenDelete] = useState(false);
    const [selected, setSelected] = useState();
    const handleGetDemandeConges = useCallback(
        (nPage, nId) => {
            dispatch(getListDemandeCongeIds(nPage, nId, 10));
        },
        [dispatch]
    );
    const handleOpenAddEdit = (demandeConge) => (event) => {
        setSelected(demandeConge);
        setOpenAddEdit(true);
    };
    const handleCloseAddEdit = useCallback(() => {
        setSelected(null);
        setOpenAddEdit(false);
    }, [selected]);
    const handleOpenDelete = (demandeConge) => (event) => {
        setSelected(demandeConge);
        setOpenDelete(true);
    };
    const handleCloseDelete = useCallback(() => {
        setSelected(null);
        setOpenDelete(false);
    }, []);
    useEffect(() => {
        handleGetDemandeConges(page, id);
    }, [handleGetDemandeConges, id]);
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Gestion Demandes Conges</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Demandes Conges</li>
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
                                        <div className={classes.header}>
                                            <Button
                                                onClick={handleOpenAddEdit(null)}
                                                variant="contained"
                                                color="primary"
                                                startIcon={<Add />}
                                            >
                                                Add
                                            </Button>
                                        </div>
                                        <Divider />
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
                                                                Motif
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Etat
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
                                                        <TableCell />
                                                    </TableRow>
                                                    {demandeConges.map((demandeConge, idx) => (
                                                        <TableRow className={cx({ [classes.coloredRow]: idx % 2 === 0 })}>
                                                            <TableCell>{demandeConge.id}</TableCell>
                                                            <TableCell>{demandeConge.dateDebut}</TableCell>
                                                            <TableCell>{demandeConge.dateFin}</TableCell>
                                                            <TableCell>{demandeConge.motif.label}</TableCell>
                                                            <TableCell>{demandeConge.etat}</TableCell>
                                                            {demandeConge.etat == "ENATTENTE" ? (
                                                                <TableCell className={classes.actions}>
                                                                    <IconButton
                                                                        aria-haspopup="true"
                                                                        onClick={handleOpenAddEdit(demandeConge)}
                                                                        color="secondary"
                                                                    >
                                                                        <Edit fontSize="small" />
                                                                    </IconButton>
                                                                    <IconButton
                                                                        aria-haspopup="true"
                                                                        onClick={handleOpenDelete(demandeConge)}
                                                                        color="inherit"
                                                                    >
                                                                        <Delete color="inherit" fontSize="small" />
                                                                    </IconButton>
                                                                </TableCell>
                                                            ) : (demandeConge.etat == "DESAPROUVE" ?(
                                                                <TableCell className={classes.actionsV}>
                                                                    <IconButton
                                                                        aria-haspopup="true"
                                                                        style={{ color: 'red' }}
                                                                    >
                                                                        <Clear fontSize="large" />
                                                                    </IconButton>
                                                                </TableCell>):(
                                                                <TableCell className={classes.actionsV}>
                                                                    <IconButton
                                                                        aria-haspopup="true"
                                                                        style={{ color: 'green' }}
                                                                    >
                                                                        <CheckCircle fontSize="large" />
                                                                    </IconButton>
                                                                </TableCell>
                                                                )
                                                            )}
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                            <CustomPagination
                                                totalPages={totalPages}
                                                page={page + 1}
                                                onPageChange={(_, newPage) => {
                                                    handleGetDemandeConges(newPage - 1, {});
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
            {openAddEdit && (
                <EditDemandeConge
                    open={openAddEdit}
                    handleClose={handleCloseAddEdit}
                    selected={selected}
                />
            )}
            {openDelete && (
                <DeleteDemandeConge
                    open={openDelete}
                    handleClose={handleCloseDelete}
                    selected={selected}
                />
            )}
        </>
    )
}