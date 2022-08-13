import React from "react";
import './Popup.css'

export const PopupRegister = () => {
    return <div>
        <div className="popup-wrap popup">
            <div className="popup-box popupLog">
                <h2 id="popup-status"></h2>
                <h3 id="popup-message"></h3>
                <a className="close-btn popup-close" href="#">x</a>
            </div>
        </div>
    </div>
}

export const PopupLogin = () => {
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
        <div className="popup-wrap userRegister">
            <div className="popup-box userReg">
                <h2>Error</h2>
                <h3>EL usuario ya fue creado</h3>
                <a className="close-btn popup-close" href="#">x</a>
            </div>
        </div>
    </div>
}
export const RenderPopup = (json) => {
    if (json.title == "One or more validation errors occurred.") {
        json.title = "Las contraseñas no coinciden"
    }
    let status = document.getElementById("popup-status")
    let message = document.getElementById("popup-message")
    status.innerHTML = "HTTP->"
    status.innerHTML += json.status;
    message.innerHTML = ""
    message.innerHTML += json.title;
    $('.popup').fadeIn(500);
    $('.popupLog').removeClass('transform-out').addClass('transform-in');
    console.log(json)
}