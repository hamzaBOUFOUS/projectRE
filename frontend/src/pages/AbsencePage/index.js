import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListAbsences } from "../../stores/reducers/absence/actions";
import { useDispatch, useSelector } from "react-redux";
import DeleteAbsence from "./DeleteAbsence";
import Loader from "../../components/Loader";
import cx from "classnames";
import { useDebouncedCallback } from 'use-debounce';
import CustomPagination from "../../components/CustomPagination";
import AddEditAbsence from "./AddEditAbsence";
import {
    Delete,
    Add,
    Edit,
    MoreVert,
    FilterList,
    Block,
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
    Typography,
    Menu,
    MenuItem,
    ListItemText,
    ListItemIcon,
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
export default function ListAbsences(props) {
    const classes = useStyles();
    const { AbsencesData, status } = useSelector((state) => state.absences);
    const { content: absences, totalPages, number: page } = AbsencesData;
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
    const handleGetAbsences = useCallback(
        (nPage, nFilter) => {
            dispatch(getListAbsences(nPage, nFilter, 10));
        },
        [dispatch]
    );
    const handleOpenAddEdit = (absence) => (event) => {
        setSelected(absence);
        setOpenAddEdit(true);
    };
    const handleCloseAddEdit = useCallback(() => {
        setSelected(null);
        setOpenAddEdit(false);
    }, [selected]);
    const handleOpenDelete = (absence) => (event) => {
        setSelected(absence);
        setOpenDelete(true);
    };
    const handleCloseDelete = useCallback(() => {
        setSelected(null);
        setOpenDelete(false);
    }, [selected]);
    useEffect(() => {
        handleGetAbsences(page, filter);
    }, [handleGetAbsences, filter]);
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Gestion Absences</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Absences</li>
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
                                                                Date Absence
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Employee
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
                                                                placeholder="Date Absence"
                                                                fullWidth
                                                                type="date"
                                                                variant="outlined"
                                                                onChange={(e) =>
                                                                    handleFilterChangeDebounced("first_name", e.target.value)
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
                                                                placeholder="Employee"
                                                                fullWidth
                                                                variant="outlined"
                                                                onChange={(e) =>
                                                                    handleFilterChangeDebounced("lastName", e.target.value)
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
                                                    </TableRow>
                                                    {absences.map((absence, idx) => (
                                                        <TableRow className={cx({ [classes.coloredRow]: idx % 2 === 0 })}>
                                                            <TableCell>{absence.id}</TableCell>
                                                            <TableCell>{absence.dateAbsence}</TableCell>
                                                            <TableCell>
                                                                <Chip
                                                                    variant="outlined"
                                                                    label={absence.employee.nom+" "+absence.employee.prenom}
                                                                    className={classes.chip}
                                                                />
                                                            </TableCell>
                                                            <TableCell className={classes.actions}>
                                                                <IconButton
                                                                    aria-haspopup="true"
                                                                    onClick={handleOpenAddEdit(absence)}
                                                                    color="secondary"
                                                                >
                                                                    <Edit fontSize="small" />
                                                                </IconButton>
                                                                <IconButton
                                                                    aria-haspopup="true"
                                                                    onClick={handleOpenDelete(absence)}
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
                                                    handleGetAbsences(newPage - 1, filter);
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
                <AddEditAbsence
                    open={openAddEdit}
                    handleClose={handleCloseAddEdit}
                    selected={selected}
                />
            )}{openDelete && (
                <DeleteAbsence
                    open={openDelete}
                    handleClose={handleCloseDelete}
                    selected={selected}
                />
            )}
        </>
    )
}