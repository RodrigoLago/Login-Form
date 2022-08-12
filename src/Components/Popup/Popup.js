import React from "react";
import './Popup.css'
export const Popup = () => {
    return <div>
        <div className="popup-wrap errorlogin">
            <div className="popup-box errorlog">
                <h2>Error</h2>
                <h3>Usuario o contraseña incorrecta.</h3>
                <a className="close-btn popup-close" href="#">x</a>
            </div>
        </div>
        <div className="popup-wrap confirmRegister">
            <div className="popup-box confirmReg">
                <h2>Usuario creado satisfactoriamente</h2>
                <h3>Revise su casilla de correo</h3>
                <a className="close-btn popup-close" href="#">x</a>
            </div>
        </div>
    </div>
}