import React from "react";
import user2 from '../../../../node_modules/admin-lte/dist/img/user2-160x160.jpg';
import AdminLTELogo from '../../../../node_modules/admin-lte/dist/img/AdminLTELogo.png'
import { Link } from "react-router-dom";

export default function SideBar(props) {
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link className="brand-link" to="/login">
                    <img src={AdminLTELogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">Admin</span>
                </Link>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={user2} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <Link to="/login" className="d-block">Med Amine</Link>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        General
                <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-tree"></i>
                                            <p>
                                                <Link to="/department" > Gestion Department </Link>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-tree"></i>
                                            <p>
                                                <Link to="/contrat" > Gestion Contrat </Link>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-tree"></i>
                                            <p>
                                                <Link to="/poste" > Gestion Poste </Link>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-tree"></i>
                                            <p>
                                                <Link to="/document" > Gestion Document </Link>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fa fa-address-book"></i>
                                    <p>
                                        <Link to="/employee" > Employee </Link>
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie"></i>
                                    <p>
                                        Recrutement<i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-tree"></i>
                                            <p>
                                                <Link to="/condidature" > Condidature </Link>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-tree"></i>
                                            <p>
                                                <Link to="/entretien" > Entretien </Link>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-tree"></i>
                                    <p>
                                        <Link to="/demandeConge" > Demandes Conges </Link>
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-tree"></i>
                                    <p>
                                        <Link to="/evenement" > Demandes Documents </Link>
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-tree"></i>
                                    <p>
                                        <Link to="/absence" > Gestion Absence </Link>
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-tree"></i>
                                    <p>
                                        <Link to="/vacance" > Vacance </Link>
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-tree"></i>
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