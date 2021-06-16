import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import cx from "classnames";
import { useDebouncedCallback } from 'use-debounce';
import CustomPagination from "../../components/CustomPagination";
import { getListEmployees } from "../../stores/reducers/employee/actions";
import AddEditEmployee from "./AddEditEmployee";
import DeleteEmployee from "./DeleteEmployee";
import SeeMoreEmployee from "./SeeMoreEmployee";
import {
    Delete,
    Add,
    Edit,
    FilterList,
    Ballot
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
    actions: { width: 170, textAlign: "right" },
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
export default function ListEmployees(props) {
    const classes = useStyles();
    const { EmployeesData, status } = useSelector((state) => state.employees);
    const { content: employees, totalPages, number: page } = EmployeesData;
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({});
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openSeeMore, setOpenSeeMore] = useState(false);
    const [selected, setSelected] = useState();
    const handleFilterChangeDebounced = useDebouncedCallback((name, value) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value,
        }));
    }, 500);
    const handleGetEmployees = useCallback(
        (nPage, nFilter) => {
            dispatch(getListEmployees(nPage, nFilter, 10));
        },
        [dispatch]
    );
    const handleOpenAddEdit = (employee) => (event) => {
        setSelected(employee);
        setOpenAddEdit(true);
    };
    const handleCloseAddEdit = useCallback(() => {
        setSelected(null);
        setOpenAddEdit(false);
    }, [selected]);
    const handleOpenDelete = (employee) => (event) => {
        setSelected(employee);
        setOpenDelete(true);
    };
    const handleCloseDelete = useCallback(() => {
        setSelected(null);
        setOpenDelete(false);
    }, [selected]);
    const handleOpenSeeMore = (employee) => (event) => {
        setSelected(employee);
        setOpenSeeMore(true);
    };
    const handleCloseSeeMore = useCallback(() => {
        setSelected(null);
        setOpenSeeMore(false);
    }, [selected]);
    useEffect(() => {
        handleGetEmployees(page, filter);
    }, [handleGetEmployees, filter]);
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Gestion Employees</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Employees</li>
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
                                                                Nom Prenom
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                CIN
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Date Naissace
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Email
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Telephone
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Nationalite
                                                            </strong>
                                                        </TableCell>
                                                        <TableCell>
                                                            <strong>
                                                                Salaire
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
                                                        <TableCell />
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
                                                        <TableCell>
                                                            <TextField
                                                                placeholder="Nationalite"
                                                                fullWidth
                                                                variant="outlined"
                                                                onChange={(e) =>
                                                                    handleFilterChangeDebounced("nationalite", e.target.value)
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
                                                    </TableRow>
                                                    {employees.map((employee, idx) => (
                                                        <TableRow className={cx({ [classes.coloredRow]: idx % 2 === 0 })}>
                                                            <TableCell>{employee.id}</TableCell>
                                                            <TableCell>
                                                                <Chip
                                                                    variant="outlined"
                                                                    label={employee.nom + " " + employee.prenom}
                                                                    className={classes.chip}
                                                                />
                                                            </TableCell>
                                                            <TableCell>{employee.cin}</TableCell>
                                                            <TableCell>{employee.dateNaissace}</TableCell>
                                                            <TableCell>{employee.email}</TableCell>
                                                            <TableCell>{employee.telephone}</TableCell>
                                                            <TableCell>{employee.nationalite}</TableCell>
                                                            <TableCell>{employee.salaire}</TableCell>
                                                            <TableCell className={classes.actions}>
                                                                <IconButton
                                                                    aria-haspopup="true"
                                                                    onClick={handleOpenAddEdit(employee)}
                                                                    color="secondary"
                                                                >
                                                                    <Edit fontSize="small" />
                                                                </IconButton>
                                                                <IconButton
                                                                    aria-haspopup="true"
                                                                    onClick={handleOpenDelete(employee)}
                                                                    color="inherit"
                                                                >
                                                                    <Delete color="inherit" fontSize="small" />
                                                                </IconButton>
                                                                <IconButton
                                                                    aria-haspopup="true"
                                                                    onClick={handleOpenSeeMore(employee)}
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
                                                onPageChange={(_, newPage) => {
                                                    handleGetEmployees(newPage - 1, filter);
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
                <AddEditEmployee
                    open={openAddEdit}
                    handleClose={handleCloseAddEdit}
                    selected={selected}
                />
            )}{openDelete && (
                <DeleteEmployee
                    open={openDelete}
                    handleClose={handleCloseDelete}
                    selected={selected}
                />
            )}{openSeeMore && (
                <SeeMoreEmployee
                    open={openSeeMore}
                    handleClose={handleCloseSeeMore}
                    selected={selected}
                />
            )}
        </>
    )
}