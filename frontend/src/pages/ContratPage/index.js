import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddEditContrat from "./AddEditContrat";
import { getListContrats } from "../../stores/reducers/contrat/actions";
import { Chip, IconButton, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import DeleteContrat from "./DeleteContrat";
const useStyles = makeStyles((theme) => ({
    chip: { marginRight: theme.spacing(1) },
  }));
export default function ListContrats(props) {
    const classes = useStyles();
    const { ContratsData, status } = useSelector((state) => state.contrats);
    const { content: contrats, totalPages, number: page } = ContratsData;
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({});
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selected, setSelected] = useState();
    const handleGetContrats = useCallback(
        (nPage, nFilter) => {
            dispatch(getListContrats(nPage, nFilter));
        },
        [dispatch]
    );
    const handleOpenAddEdit = (contrat) => (event) => {
        setSelected(contrat);
        setOpenAddEdit(true);
    };
    const handleCloseAddEdit = useCallback(() => {
        setSelected(null);
        setOpenAddEdit(false);
    }, []);
    const handleOpenDelete = (contrat) => (event) => {
        setSelected(contrat);
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
                            <h1>Gestion Contrat</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Contrat</li>
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
                                                <th>Type Contrat</th>
                                                <th>Date Creation</th>
                                                <th style={{ width: '100px' }}></th>
                                            </tr>
                                        </thead>
                                        <tbody style={{textAlign: "center"}}>
                                            {contrats.map((contrat, idx) => (
                                                <tr>
                                                    <td>{contrat.id}</td>
                                                    <td>{contrat.typeContrat}</td>
                                                    <td>{contrat.dateCreation}</td>
                                                    <td className="project-actions text-right" style={{ width: '100px' }}>
                                                        <a className="btn btn-info btn-sm" style={{marginRight: "10px"}} onClick={handleOpenAddEdit(contrat)}>
                                                            <i className="fas fa-pencil-alt">
                                                            </i> </a>
                                                        <a className="btn btn-danger btn-sm" onClick={handleOpenDelete(contrat)}>
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
            <AddEditContrat
                open={openAddEdit}
                handleClose={handleCloseAddEdit}
                selected={selected}
            />
            <DeleteContrat
                open={openDelete}
                handleClose={handleCloseDelete}
                selected={selected}
            />
        </>
    )
}