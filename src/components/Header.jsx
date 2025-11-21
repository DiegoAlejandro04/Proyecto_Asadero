import React from 'react';
import logo from '../assets/img/logo.png';
import perfil from '../assets/img/perfil.png';
import carrito from '../assets/img/carrito.png';
import home from '../assets/img/home.png';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className="header">
      <div className="contenEdor-hed">
        <nav className="barrnav">
          <input type="text" id="buscar" placeholder="Buscar" />
          <button className="btn-bus">🔍</button>
        </nav>

        <div className="logohead">
          <img src={logo} alt="Logo Riko Pollo" />
        </div>

        <nav className="inconos">
          <Link to="/inicio"><img src={home} alt="Inicio" /></Link>
          <img src={carrito} alt="Carrito" />
          <Link to="/"><img src={perfil} alt="Perfil" /></Link>
        </nav>
      </div>
    </header>
  );
}
