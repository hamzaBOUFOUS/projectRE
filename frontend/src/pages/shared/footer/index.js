import React from "react";
import { Link } from "react-router-dom";


export default function Footer(props) {
    return (
        <>
            <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                    <b>Version</b> Final
                        </div>
                <strong>Copyright &copy; 2021
                            <Link to="/home"> ProjectMed</Link>.</strong> All rights reserved.
                        </footer>
        </>
    )

}