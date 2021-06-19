import React from "react";
import user2 from '../../../../node_modules/admin-lte/dist/img/user2-160x160.jpg';
import AdminLTELogo from '../../../../node_modules/admin-lte/dist/img/AdminLTELogo.png'
import { Link } from "react-router-dom";

export default function SideBar(props) {
    const user = JSON.parse(window.localStorage.getItem('tokenUser'));
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link className="brand-link" to="/">
                    <img src={AdminLTELogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">User</span>
                </Link>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={user2} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <Link to="/profilPage" className="d-block">{user?.nom+" "+user?.prenom}</Link>
                        </div>
                    </div>

                    <nav className="mt-2"><i class=""></i>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-home"></i>
                                    <p>
                                        <Link to="/">Home</Link>
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-stopwatch"></i>
                                    <p>
                                        <Link to="/demandeConge" > Demandes Conge </Link>
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-book"></i>
                                    <p>
                                        <Link to="/documentDemande" > Demandes Document </Link>
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon far fa-id-badge"></i>
                                    <p>
                                        <Link to="/absence" > Absences </Link>
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-snowman"></i>
                                    <p>
                                        <Link to="/vacance" > Vacance </Link>
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-calendar-week"></i>
                                    <p>
                                        <Link to="/evenement" > Evenement </Link>
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-tree"></i>
                                    <p>
                                        <Link to="/formation" > Formation </Link>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )

}