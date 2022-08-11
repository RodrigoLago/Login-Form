import React from "react";
import './Popup.css'
export const Popup = () => {
    return <div className="popup-wrap errorlogin">
        <div className="popup-box errorlog">
            <h2>Error</h2>
            <h3>Usuario o contraseña incorrecta.</h3>
            <a className="close-btn popup-close" href="#">x</a>
        </div>
    </div>
}