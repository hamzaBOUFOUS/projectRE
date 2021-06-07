import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListDepartments } from "../../stores/reducers/department/actions";
import { Chip, IconButton, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import DeleteDepartment from "./DeleteDepartment";
import AddEditDepartment from "./AddEditDepartment";
const useStyles = makeStyles((theme) => ({
    chip: { marginRight: theme.spacing(1) },
  }));
export default function ListDepartments(props) {
    const classes = useStyles();
    const { DepartmentsData, status } = useSelector((state) => state.departments);
    const { content: departments, totalPages, number: page } = DepartmentsData;
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({});
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selected, setSelected] = useState();
    const handleGetContrats = useCallback(
        (nPage, nFilter) => {
            dispatch(getListDepartments(nPage, nFilter));
        },
        [dispatch]
    );
    const handleOpenAddEdit = (department) => (event) => {
        setSelected(department);
        setOpenAddEdit(true);
    };
    const handleCloseAddEdit = useCallback(() => {
        setSelected(null);
        setOpenAddEdit(false);
    }, []);
    const handleOpenDelete = (department) => (event) => {
        setSelected(department);
        setOpenDelete(true);
    };
    const handleCloseDelete = useCallback(() => {
        setSelected(null);
        setOpenDelete(false);
    }, []);
    useEffect(() => {
        handleGetContrats(0, filter);
    }, [handleGetContrats, filter]);
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Gestion Department</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Department</li>
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
                                <div className="card-body" style={{ textAlign: "right", paddingBottom: "0" }}>
                                    <button type="button" onClick={handleOpenAddEdit(null)} className="btn btn-info">Add</button>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped">
                                        <thead style={{textAlign: "center"}}>
                                            <tr>
                                                <th style={{ width: '10px' }}>#</th>
                                                <th>Nom department</th>
                                                <th>Date Creation</th>
                                                <th style={{ width: '100px' }}></th>
                                            </tr>
                                        </thead>
                                        <tbody style={{textAlign: "center"}}>
                                            {departments.map((department, idx) => (
                                                <tr>
                                                    <td>{department.id}</td>
                                                    <td>{department.nomDepartment}</td>
                                                    <td>{department.dateCreation}</td>
                                                    <td className="project-actions text-right" style={{ width: '100px' }}>
                                                        <a className="btn btn-info btn-sm" style={{marginRight: "10px"}} onClick={handleOpenAddEdit(department)}>
                                                            <i className="fas fa-pencil-alt">
                                                            </i> </a>
                                                        <a className="btn btn-danger btn-sm" onClick={handleOpenDelete(department)}>
                                                            <i className="fas fa-trash">
                                                            </i> </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer clearfix">
                                    <ul className="pagination pagination-sm m-0 float-right">
                                        <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AddEditDepartment
                open={openAddEdit}
                handleClose={handleCloseAddEdit}
                selected={selected}
            />
            <DeleteDepartment
                open={openDelete}
                handleClose={handleCloseDelete}
                selected={selected}
            />
        </>
    )
}