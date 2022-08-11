import React from "react";
export const Recovery = () => {
    return <div className="recovery">
        <h2>Recuperar contraseña</h2>
        <p>
            Ingresa tu <strong>direccion de email</strong> y haz {" "}
            <strong>click en el boton Submit</strong>
        </p>

        <form className="recovery-form" action="" method="post" >
            <input
                type="text"
                className="input"
                id="user_recover"
                placeholder="Email"
            />
            <input type="submit" className="button" defaultValue="Submit"></input>
        </form>
        <p className="mssg">
            Revisa tu casilla de correo para proceder a recuperar tu contraseña
        </p>
    </div>
}