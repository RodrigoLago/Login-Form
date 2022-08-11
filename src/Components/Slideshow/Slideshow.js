import React from "react";
export const Slideshow = () => {
    return <div id="slideshow">
        <div className="one">
            <h2>
                <span>LOGIN API</span>
            </h2>
            <p>Esta api esta hecha en .NET 6 con C# 10. Da uso de Entity Framework Core,
                SQL Server, Inyección de dependencias, Patrón repositorio, JWT, entre otras cosas. El apartado
                visual esta realizado en React y Node.js.
            </p>
        </div>
        <div className="two">
            <h2>
                <span>SOBRE MI</span>
            </h2>
            <p>Puedes ver otros proyectos mios en mi <a href='https://github.com/RodrigoLago' target="_blank">github </a>
                o en mi <a href='http://lagorodrigo.herokuapp.com' target="_blank">sitio web</a>
            </p>
        </div>

    </div>
}