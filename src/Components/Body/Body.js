import React from 'react';
import './Body.css'


export const Body = () => {
      return <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Crear cuenta</h1>
          {/*<span>or use your email for registration</span>*/}
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <button type='button'>Registrarme</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Login</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <button type='button'>Ingresar</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Bienvenido</h1>
            <p>Si ya tienes una cuenta puedes ingresar</p>
            <button className="ghost" id="signIn" type='button'>
              Ingresar
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>¿Eres nuevo?</h1>
            <p>Puedes registrarte gratuitamente</p>
            <button className="ghost" id="signUp" type='button'>
              Registrarme
            </button>
          </div>
        </div>
      </div>
    </div>;
    
    };