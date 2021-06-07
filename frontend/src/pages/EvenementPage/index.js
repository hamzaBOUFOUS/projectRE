import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddEditEvenment from "./AddEditEvenment";
import { getListEvenements } from "../../stores/reducers/evenement/actions";
import { Chip, IconButton, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import DeleteEvenement from "./DeleteEvenement";
const useStyles = makeStyles((theme) => ({
    chip: { marginRight: theme.spacing(1) },
  }));
export default function ListEvenements(props) {
    const classes = useStyles();
    const { EvenementsData, status } = useSelector((state) => state.evenements);
    const { content: evenements, totalPages, number: page } = EvenementsData;
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({});
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selected, setSelected] = useState();
    const handleGetEvenements = useCallback(
        (nPage, nFilter) => {
            dispatch(getListEvenements(nPage, nFilter));
        },
        [dispatch]
    );
    const handleOpenAddEdit = (evenement) => (event) => {
        setSelected(evenement);
        setOpenAddEdit(true);
    };
    const handleCloseAddEdit = useCallback(() => {
        setSelected(null);
        setOpenAddEdit(false);
    }, []);
    const handleOpenDelete = (evenement) => (event) => {
        setSelected(evenement);
        setOpenDelete(true);
    };
    const handleCloseDelete = useCallback(() => {
        setSelected(null);
        setOpenDelete(false);
    }, []);
    useEffect(() => {
        handleGetEvenements(0, filter);
    }, [handleGetEvenements, filter]);
    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Gestion Evenement</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Evenement</li>
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
                                                <th>Nom</th>
                                                <th>Date Debut</th>
                                                <th>Date Fin</th>
                                                <th>Description</th>
                                                <th>Participant</th>
                                                <th style={{ width: '100px' }}></th>
                                            </tr>
                                        </thead>
                                        <tbody style={{textAlign: "center"}}>
                                            {evenements.map((evenement, idx) => (
                                                <tr>
                                                    <td>{evenement.id}</td>
                                                    <td>{evenement.dateDebut}</td>
                                                    <td>{evenement.dateFin}</td>
                                                    <td>{evenement.nom}</td>
                                                    <td>{evenement.description}</td>
                                                    <td>
                                                        {evenement.employees.length === 0 ? (
                                                            "Pas de Participant"
                                                        ) : (
                                                            evenement.employees.map((value) => (
                                                                <Chip
                                                                    variant="outlined"
                                                                    label={value.nom}
                                                                    className={classes.chip}
                                                                />
                                                            ))
                                                        )}
                                                    </td>
                                                    <td className="project-actions text-right" style={{ width: '100px' }}>
                                                        <a className="btn btn-info btn-sm" style={{marginRight: "10px"}} onClick={handleOpenAddEdit(evenement)}>
                                                            <i className="fas fa-pencil-alt">
                                                            </i> </a>
                                                        <a className="btn btn-danger btn-sm" onClick={handleOpenDelete(evenement)}>
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
            <AddEditEvenment
                open={openAddEdit}
                handleClose={handleCloseAddEdit}
                selected={selected}
            />
            <DeleteEvenement
                open={openDelete}
                handleClose={handleCloseDelete}
                selected={selected}
            />
        </>
    )
}