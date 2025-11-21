import React from 'react';
import logo from '../assets/img/logo.png';

export default function Index() {
  return (
    <div className="contenedor">
      <div className="logo-section">
        <img src={logo} alt="Logo Riko Pollo" />
        <p>Disfruta el mejor sabor del pollo!</p>
      </div>

      <div className="form-section">
        <form className="inicio_sesion" onSubmit={e => e.preventDefault()}>
          <h1>Iniciar Sesión</h1>

          <div className="input">
            <input type="text" placeholder="Usuario" />
          </div>

          <div className="input">
            <input type="password" placeholder="Contraseña" />
          </div>

          <div className="password_olvidada">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>

          <div className="registro">
            ¿Aún no eres miembro? <a href="#">Regístrate aquí</a>
          </div>

          <button type="submit" className="btn-login">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
