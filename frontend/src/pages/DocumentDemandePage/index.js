import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListDocumentDemandes } from "../../stores/reducers/documentDemande/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import cx from "classnames";
import CustomPagination from "../../components/CustomPagination";
import EditDocumentDemande from "./EditDocumentDemande";
import {
    Edit,
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
export default function ListDocumentDemandes(props) {
    const classes = useStyles();
    const { DocumentDemandesData, status } = useSelector((state) => state.documentDemandes);
    const { content: documentDemandes, totalPages, number: page } = DocumentDemandesData;
    const dispatch = useDispatch();
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [selected, setSelected] = useState();
    const handleGetDocumentDemandes = useCallback(
        (nPage, nFilter) => {
            dispatch(getListDocumentDemandes(nPage, nFilter, 10));
        },
        [dispatch]
    );
    const handleOpenAddEdit = (documentDemande) => (event) => {
        setSelected(documentDemande);
        setOpenAddEdit(true);
    };
    const handleCloseAddEdit = useCallback(() => {
        setSelected(null);
        setOpenAddEdit(false);
    }, [selected]);
    useEffect(() => {
        handleGetDocumentDemandes(page, {});
    }, [handleGetDocumentDemandes]);
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Gestion Demandes Document</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Demandes Document</li>
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
                                                            Employe
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                            Type Document
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
                                                    </TableRow>
                                                    {documentDemandes.map((documentDemande, idx) => (
                                                        <TableRow className={cx({ [classes.coloredRow]: idx % 2 === 0 })}>
                                                            <TableCell>{documentDemande.id}</TableCell>
                                                            <TableCell>
                                                                <Chip
                                                                    variant="outlined"
                                                                    label={documentDemande.employee.nom+" "+documentDemande.employee.prenom}
                                                                    className={classes.chip}
                                                                />
                                                            </TableCell>
                                                            <TableCell>{documentDemande.document.typeDocument}</TableCell>
                                                            <TableCell>{documentDemande.etat}</TableCell>
                                                            <TableCell className={classes.actions}>
                                                                <IconButton
                                                                    aria-haspopup="true"
                                                                    onClick={handleOpenAddEdit(documentDemande)}
                                                                    color="secondary"
                                                                >
                                                                    <Edit fontSize="small" />
                                                                </IconButton>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                            <CustomPagination
                                                totalPages={totalPages}
                                                page={page + 1}
                                                onPageChange={(_, newPage) => {
                                                    handleGetDocumentDemandes(newPage - 1, {});
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
                <EditDocumentDemande
                    open={openAddEdit}
                    handleClose={handleCloseAddEdit}
                    selected={selected}
                />
            )}
        </>
    )
}