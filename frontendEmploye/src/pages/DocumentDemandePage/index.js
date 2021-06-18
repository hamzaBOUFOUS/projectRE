import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListDocumentDemandeIds } from "../../stores/reducers/documentDemande/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import cx from "classnames";
import CustomPagination from "../../components/CustomPagination";
import EditDocumentDemande from "./AddEditDocumentDemande";
import DeleteDocumentDemande from "./DeleteDocumentDemande";
import {
    Add,
    Delete,
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
    const { DocumentDemandeIdsData, status } = useSelector((state) => state.documentDemandes);
    const { content: documentDemandes, totalPages, number: page } = DocumentDemandeIdsData;
    const id = useSelector((state) => state.demandeConges.user.id);
    const dispatch = useDispatch();
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selected, setSelected] = useState();
    const handleGetDocumentDemandes = useCallback(
        (nPage, nId) => {
            dispatch(getListDocumentDemandeIds(nPage, nId, 10));
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
    const handleOpenDelete = (documentDemande) => (event) => {
        setSelected(documentDemande);
        setOpenDelete(true);
    };
    const handleCloseDelete = useCallback(() => {
        setSelected(null);
        setOpenDelete(false);
    }, []);
    useEffect(() => {
        handleGetDocumentDemandes(page, id);
    }, [handleGetDocumentDemandes, id]);
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
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
                                                    </TableRow>
                                                    {documentDemandes.map((documentDemande, idx) => (
                                                        <TableRow className={cx({ [classes.coloredRow]: idx % 2 === 0 })}>
                                                            <TableCell>{documentDemande.id}</TableCell>
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
                                                                <IconButton
                                                                    aria-haspopup="true"
                                                                    onClick={handleOpenDelete(documentDemande)}
                                                                    color="inherit"
                                                                >
                                                                    <Delete color="inherit" fontSize="small" />
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
                                                    handleGetDocumentDemandes(newPage - 1, id);
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
            {openDelete && (
                <DeleteDocumentDemande
                    open={openDelete}
                    handleClose={handleCloseDelete}
                    selected={selected}
                />
            )}
        </>
    )
}