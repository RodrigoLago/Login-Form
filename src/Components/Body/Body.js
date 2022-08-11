import React from 'react';
import { useState } from 'react';
import './Button.css'
import './Body.css'
import { Login, Register } from '../../Services/UserService';
import { Terms } from '../Tems/Terms';
import { Logo } from '../Logo/Logo';
import { Slideshow } from '../Slideshow/Slideshow';
import { Recovery } from '../Recovery/Recovery';
import { Popup } from '../Popup/Popup';

export const Body = () => {
  const [loginForm, setDetails] = useState({
    emailLogin: "",
    passLogin: "",
  });
  const loginChange = (e) => {
    const { name, value } = e.target;
    if (name == "emailLogin") {
      loginForm.emailLogin = value
    }
    else {
      loginForm.passLogin = value
    }
  };
  const [registerForm, setRegister] = useState({
    nameRegister: "",
    lastNameRegister: "",
    emailRegister: "",
    passRegister: "",
    passCmRegister: "",
  });
  const registerChange = (e) => {
    console.log(e.target.name)
    const { name, value } = e.target;
    if (name == "nameRegister") {
      registerForm.nameRegister = value
    }
    if (name == "lastNameRegister") {
      registerForm.lastNameRegister = value
    }
    if (name == "emailRegister") {
      registerForm.emailRegister = value
    }
    if (name == "passRegister") {
      registerForm.passRegister = value
    }
    if (name == "passCmRegister") {
      registerForm.passCmRegister = value
    }
  };

  const loginSubmit = () => {
    event.preventDefault();
    Login(loginForm)
  };
  const registerSubmit = () => {
    event.preventDefault();
    Register(registerForm)
  };

  return <div>
    {/* LOGIN MODULE */}
    <div className="login">
      <div className="wrap">
        {/* TOGGLE */}
        <div id="toggle-wrap">
          <div id="toggle-terms">
            <div id="cross">
              <span />
              <span />
            </div>
          </div>
        </div>
        {/* TERMS */}
        <Terms />
        {/* RECOVERY */}
        <Recovery />
        {/* POPUPS */}
        <Popup />
        {/* SLIDER */}
        <div className="content">
          {/* LOGO 
          <Logo />*/}
          {/* SLIDESHOW */}
          <Slideshow />
        </div>
        {/* LOGIN FORM */}
        <div className="user">
          {/* ACTIONS
              <div class="actions">
                  <a class="help" href="#signup-tab-content">Sign Up</a><a class="faq" href="#login-tab-content">Login</a>
              </div>
              */}
          <div className="form-wrap">
            {/* TABS */}
            <div className="tabs">
              <h3 className="login-tab">
                <a className="log-in active" href="#login-tab-content">
                  <span>
                    Ingresar
                    <span />
                  </span>
                </a>
              </h3>
              <h3 className="signup-tab">
                <a className="sign-up" href="#signup-tab-content">
                  <span>Crear cuenta</span>
                </a>
              </h3>
            </div>
            {/* TABS CONTENT */}
            <div className="tabs-content">
              {/* TABS CONTENT LOGIN */}
              <div id="login-tab-content" className="active">
                <form className="login-form" onSubmit={loginSubmit}>
                  <input
                    name="emailLogin"
                    type="email"
                    className="input"
                    id="user_login"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={loginChange}
                  />
                  <input
                    name="passLogin"
                    type="password"
                    className="input"
                    id="user_pass"
                    minLength="8" required
                    autoComplete="off"
                    placeholder="Contraseña"
                    onChange={loginChange}
                  />
                  {/*}
                  <input
                    type="checkbox"
                    className="checkbox"
                    defaultChecked=""
                    id="remember_me"
                  />
            <label htmlFor="remember_me">Recuerdame</label>*/}


                  <div id="container">
                    <button type="submit" className="learn-more">
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow" />
                      </span>
                      <span className="button-text" >Ingresar</span>
                    </button>
                  </div>


                  {/*<button id="loginbtn" type="button" defaultValue="Login" onClick={Login} >button</button>*/}
                </form>
                <div className="help-action">
                  <p>
                    <i className="fa fa-arrow-left" aria-hidden="true" />
                    <a className="forgot" href="#">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </p>
                </div>
              </div>
              {/* TABS CONTENT SIGNUP */}
              <div id="signup-tab-content">
                <form className="signup-form" onSubmit={registerSubmit}>
                  <input
                    name="nameRegister"
                    type="text"
                    className="input"
                    id="user_name"
                    autoComplete="off"
                    placeholder="Nombre"
                    onChange={registerChange}
                  />
                  <input
                    name="lastNameRegister"
                    type="text"
                    className="input"
                    id="last_name"
                    autoComplete="off"
                    placeholder="Apellido"
                    onChange={registerChange}
                  />
                  <input
                    name="emailRegister"
                    type="email"
                    className="input"
                    id="user_email"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={registerChange}
                  />
                  <input
                    name="passRegister"
                    type="password"
                    className="input"
                    id="user_pass"
                    minLength="8" required
                    autoComplete="off"
                    placeholder="Contraseña"
                    onChange={registerChange}
                  />
                  <input
                    name="passCmRegister"
                    type="password"
                    className="input"
                    id="user_confirm_pass"
                    minLength="8" required
                    autoComplete="off"
                    placeholder="Repetir contraseña"
                    onChange={registerChange}
                  />
                  <div id="container">
                    <button type="submit" className="learn-more">
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow" />
                      </span>
                      <span className="button-text" >Registrarme</span>
                    </button>
                  </div>
                  {/*<Button text="Registrarme" />*/}
                </form>
                <div className="help-action">
                  <p>Al registrarse, usted esta aceptando los</p>
                  <p>
                    <i className="fa fa-arrow-left" aria-hidden="true" />
                    <a className="agree" href="#">
                      Terminos y condiciones
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};