import React from "react";


import { Login } from "../../Services/UserService";

export const Button = (props) => {
    return <div id="container">
        <button type="button" className="learn-more" onClick={handle} >
            <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
            </span>
            <span className="button-text" >{props.text}</span>
        </button>
    </div>
}