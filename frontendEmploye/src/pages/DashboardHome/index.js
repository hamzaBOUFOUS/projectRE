import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Pie, Line, Bar } from "react-chartjs-2";
import { constructDashboard } from "../../stores/reducers/dashboard/actions";
const data = [
    { label: 'January', sales: 21, leads: 41 },
    { label: 'February', sales: 35, leads: 79 },
    { label: 'March', sales: 75, leads: 57 },
    { label: 'April', sales: 51, leads: 47 },
    { label: 'May', sales: 41, leads: 63 },
    { label: 'June', sales: 47, leads: 71 }
];
export default function DashboardHome(props) {
    const user = JSON.parse(window.localStorage.getItem('tokenUser'));
    const [id, setId] = useState(user?.id);
    const dispatch = useDispatch();
    const { dashboardData } = useSelector((state) => state.dashboards);
    const constructDashboardData = dashboardData;
    const dataD = constructDashboardData?constructDashboardData.nbrDemandeEmplDocuement:[];
    const handleConstructDashboard = useCallback(
        (nId) => {
            dispatch(constructDashboard(nId));
        },
        [dispatch]
    );
    const dataBar = {
        labels: constructDashboardData?.nbrDemandeEmplConge.map((d) => d.etat),
        datasets: [
            {
                label: 'Nombre Demande de Conge par Etat',
                data: constructDashboardData?.nbrDemandeEmplConge.map((d) => d.nbr),
                fill: false,
                borderColor: 'white',
                backgroundColor: ['#f56954', '#3c8dbc', '#d2d6df'],

            }
        ]
    }
    const dataPie = {
        labels: dataD.map(e=>e.etat),
        datasets: [
            {
                label: 'Nombre Demande de Document par Etat',
                data: dataD?.map((e) => e.nbr),
                fill: false,
                borderColor: 'white',
                backgroundColor: ['#3c8dbc', '#d2d6df'],

            }
        ]
    }
    const dataLine = {
        labels: ["January", "February", "March", "April", "May", "June"
            , "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: 'Nombre des Absences par Months',
                data: constructDashboardData?.nbrAbsenceEmplYear.map((d) => d.nbr),
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            }
        ]
    }

    useEffect(() => {
        handleConstructDashboard(id);
    }, [handleConstructDashboard, id]);
    return (
        <>

            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">AZIZ Mohamed</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{constructDashboardData ? constructDashboardData.nbrEmplConge : ""}</h3>

                                    <p>Demande de congés en cours</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <Link to="/demandeConge" className="small-box-footer">Plus d'info <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{constructDashboardData ? constructDashboardData.nbrEmplDocument : ""}</h3>

                                    <p>Demande de Documents en cours</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-user-check"></i>
                                </div>
                                <Link to="/documentDemande" className="small-box-footer">Plus d'info <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{constructDashboardData ? constructDashboardData.nbrEmplAbsence : ""}</h3>

                                    <p>Absents</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-user-times"></i>
                                </div>
                                <Link to="/absence" className="small-box-footer">Plus d'info <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>{constructDashboardData ? constructDashboardData.nbrEmplFormation : ""}</h3>

                                    <p>Formations</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-user-shield"></i>
                                </div>
                                <Link to="/formation" className="small-box-footer">Plus d'info <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <section className="col-lg-6 connectedSortable">
                            <div className="card card-success">
                                <div className="card-header">
                                    <h3 className="card-title">Bar Chart - Demande de Congés</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart">
                                        <Bar
                                            data={dataBar}
                                            maxWidth="100%"
                                            height="280px"
                                            minHeight='280px'
                                            maxHeight='280px'
                                            options={{ maintainAspectRatio: false }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="col-lg-6 connectedSortable">
                            <div className="card card-danger">
                                <div className="card-header">
                                    <h3 className="card-title">Pie Chart - Demande de Documents</h3>

                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <Pie
                                        data={dataPie}
                                        maxWidth="100%"
                                        height="280px"
                                        minHeight='280px'
                                        maxHeight='280px'
                                        options={{ maintainAspectRatio: false }}
                                    />
                                </div>
                            </div>
                        </section>
                        <section className="col-lg-3 connectedSortable">
                            <div className="card card-default">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="fas fa-bullhorn mr-1"></i>
                                        Evénements
                                    </h3>
                                </div>
                                <div className="card-body">
                                    {constructDashboardData?.lastThreeEmplEvenement?.length > 0 ?
                                        constructDashboardData.lastThreeEmplEvenement.map((evenement) => (
                                            <div className="callout callout-info">
                                                <p>{evenement.dateDebut} - {evenement.nom}</p>
                                            </div>
                                        ))
                                        : (
                                            <div className="callout callout-info">
                                                <p>Pas Evenement</p>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </section>
                        <section className="col-lg-6 connectedSortable">
                            <div className="card card-warning">
                                <div className="card-header">
                                    <h3 className="card-title">Bar Chart - Absence</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <Line
                                        data={dataLine}
                                        maxWidth="100%"
                                        height="280px"
                                        minHeight='280px'
                                        maxHeight='280px'
                                        options={{ maintainAspectRatio: false }}
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="col-lg-3 connectedSortable">
                            <div className="card card-default">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="fas fa-bullhorn mr-1"></i>
                                        Formations
                                    </h3>
                                </div>
                                <div className="card-body">
                                    {constructDashboardData?.lastThreeEmplFormation?.length > 0 ?
                                        constructDashboardData.lastThreeEmplFormation.map((formation) => (
                                            <div className="callout callout-info">
                                                <p>{formation.dateDebut} - {formation.nom}</p>
                                            </div>
                                        ))
                                        : (
                                            <div className="callout callout-info">
                                                <p>Pas Formation</p>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

        </>
    )

}