
import React from "react";
import AdminLTELogo from '../../../../node_modules/admin-lte/dist/img/AdminLTELogo.png'

export default () => {
    return (
        <>
            <div className="preloader dark-mode  flex-column justify-content-center align-items-center">
                <img className="animation__wobble" src={AdminLTELogo}
                    alt="AdminLTELogo" height="60" width="60" />
            </div>
        </>
    )

}
