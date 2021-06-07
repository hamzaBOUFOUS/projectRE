import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Chip, IconButton, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import AddEditDocument from "./AddEditDocument";
import DeleteDocument from "./DeleteDocument";
import Footer from "../shared/footer";
import Header from "../shared/header";
import Preloader from "../shared/preloader";
import SideBar from "../shared/sidebar";
import { getListDocuments } from "../../stores/reducers/document/actions";
const useStyles = makeStyles((theme) => ({
    chip: { marginRight: theme.spacing(1) },
}));
export default function ListDocuments(props) {
    const classes = useStyles();
    const { DocumentsData, status } = useSelector((state) => state.documents);
    const { content: documents, totalPages, number: page } = DocumentsData;
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({});
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selected, setSelected] = useState();
    const handleGetDocuments = useCallback(
        (nPage, nFilter) => {
            dispatch(getListDocuments(nPage, nFilter));
        },
        [dispatch]
    );
    const handleOpenAddEdit = (document) => (event) => {
        setSelected(document);
        setOpenAddEdit(true);
    };
    const handleCloseAddEdit = useCallback(() => {
        setSelected(null);
        setOpenAddEdit(false);
    }, []);
    const handleOpenDelete = (document) => (event) => {
        setSelected(document);
        setOpenDelete(true);
    };
    const handleCloseDelete = useCallback(() => {
        setSelected(null);
        setOpenDelete(false);
    }, []);
    useEffect(() => {
        handleGetDocuments(0, filter);
    }, [handleGetDocuments, filter]);
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Gestion Document</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Document</li>
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
                                        <thead style={{ textAlign: "center" }}>
                                            <tr>
                                                <th style={{ width: '100px' }}>#</th>
                                                <th>Type Document</th>
                                                <th ></th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ textAlign: "center" }}>
                                            {documents.map((document, idx) => (
                                                <tr>
                                                    <td>{document.id}</td>
                                                    <td>{document.typeDocument}</td>
                                                    <td className="project-actions">
                                                        <a className="btn btn-info btn-sm" style={{ marginRight: "10px" }} onClick={handleOpenAddEdit(document)}>
                                                            <i className="fas fa-pencil-alt">
                                                            </i> </a>
                                                        <a className="btn btn-danger btn-sm" onClick={handleOpenDelete(document)}>
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
            <AddEditDocument
                open={openAddEdit}
                handleClose={handleCloseAddEdit}
                selected={selected}
            />
            <DeleteDocument
                open={openDelete}
                handleClose={handleCloseDelete}
                selected={selected}
            />
        </>
    )
}