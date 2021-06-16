import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListCondidatures } from "../../stores/reducers/condidature/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import cx from "classnames";
import { useDebouncedCallback } from 'use-debounce';
import CustomPagination from "../../components/CustomPagination";
import AddEditCondidature from "./AddEditCondidature";
import DeleteCondidature from "./DeleteCondidature";
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
export default function ListCondidatures(props) {
    const classes = useStyles();
    const { CondidaturesData, status } = useSelector((state) => state.condidatures);
    const { content: condidatures, totalPages, number: page } = CondidaturesData;
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({});
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selected, setSelected] = useState();
    const handleFilterChangeDebounced = useDebouncedCallback((name, value) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value,
        }));
    }, 500);
    const handleGetCondidatures = useCallback(
        (nPage, nFilter) => {
            dispatch(getListCondidatures(nPage, nFilter, 10));
        },
        [dispatch]
    );
    const handleOpenAddEdit = (condidature) => (event) => {
        setSelected(condidature);
        setOpenAddEdit(true);
    };
    const handleCloseAddEdit = useCallback(() => {
        setSelected(null);
        setOpenAddEdit(false);
    }, [selected]);
    const handleOpenDelete = (condidature) => (event) => {
        setSelected(condidature);
        setOpenDelete(true);
    };
    const handleCloseDelete = useCallback(() => {
        setSelected(null);
        setOpenDelete(false);
    }, [selected]);
    useEffect(() => {
        handleGetCondidatures(page, filter);
    }, [handleGetCondidatures, filter]);
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Gestion Condidatures</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Condidatures</li>
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
                                                                CIN
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Nom
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Prenom
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Email
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                TelePhone
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Adresse
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Date Depot
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                CV
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell className={classes.actions} />
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow className={classes.filterRow}>
                                                        <TableCell />
                                                        <TableCell>
                                                            <TextField
                                                                placeholder="CIN"
                                                                fullWidth
                                                                variant="outlined"
                                                                onChange={(e) =>
                                                                    handleFilterChangeDebounced("cin", e.target.value)
                                                                }
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <FilterList />
                                                                        </InputAdornment>
                                                                    ),
                                                                    classes: { notchedOutline: classes.noBorder },
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <TextField
                                                                placeholder="Nom"
                                                                fullWidth
                                                                variant="outlined"
                                                                onChange={(e) =>
                                                                    handleFilterChangeDebounced("nom", e.target.value)
                                                                }
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <FilterList />
                                                                        </InputAdornment>
                                                                    ),
                                                                    classes: { notchedOutline: classes.noBorder },
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <TextField
                                                                placeholder="Prenom"
                                                                fullWidth
                                                                variant="outlined"
                                                                onChange={(e) =>
                                                                    handleFilterChangeDebounced("prenom", e.target.value)
                                                                }
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <FilterList />
                                                                        </InputAdornment>
                                                                    ),
                                                                    classes: { notchedOutline: classes.noBorder },
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <TextField
                                                                placeholder="Email"
                                                                fullWidth
                                                                variant="outlined"
                                                                onChange={(e) =>
                                                                    handleFilterChangeDebounced("email", e.target.value)
                                                                }
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <FilterList />
                                                                        </InputAdornment>
                                                                    ),
                                                                    classes: { notchedOutline: classes.noBorder },
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <TextField
                                                                placeholder="Telephone"
                                                                fullWidth
                                                                variant="outlined"
                                                                onChange={(e) =>
                                                                    handleFilterChangeDebounced("telephone", e.target.value)
                                                                }
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <FilterList />
                                                                        </InputAdornment>
                                                                    ),
                                                                    classes: { notchedOutline: classes.noBorder },
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell />
                                                        <TableCell />
                                                        <TableCell />
                                                        <TableCell />
                                                    </TableRow>
                                                    {condidatures.map((condidature, idx) => (
                                                        <TableRow className={cx({ [classes.coloredRow]: idx % 2 === 0 })}>
                                                            <TableCell>{condidature.id}</TableCell>
                                                            <TableCell>{condidature.cin}</TableCell>
                                                            <TableCell>{condidature.nom}</TableCell>
                                                            <TableCell>{condidature.prenom}</TableCell>
                                                            <TableCell>{condidature.email}</TableCell>
                                                            <TableCell>{condidature.telephone}</TableCell>
                                                            <TableCell>{condidature.adresse}</TableCell>
                                                            <TableCell>{condidature.dateDepot}</TableCell>
                                                            <TableCell>{condidature.cv}</TableCell>
                                                            <TableCell className={classes.actions}>
                                                                <IconButton
                                                                    aria-haspopup="true"
                                                                    onClick={handleOpenAddEdit(condidature)}
                                                                    color="secondary"
                                                                >
                                                                    <Edit fontSize="small" />
                                                                </IconButton>
                                                                <IconButton
                                                                    aria-haspopup="true"
                                                                    onClick={handleOpenDelete(condidature)}
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
                                                    handleGetCondidatures(newPage - 1, filter);
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
                <AddEditCondidature
                    open={openAddEdit}
                    handleClose={handleCloseAddEdit}
                    selected={selected}
                />
            )}{openDelete && (
                <DeleteCondidature
                    open={openDelete}
                    handleClose={handleCloseDelete}
                    selected={selected}
                />
            )}
        </>
    )
}