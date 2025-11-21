import React from 'react';

export default function MenuItem({ item }){
  // If image is a local path like './img/xyz' it should be replaced or served; our items use asset paths in menu.json
  return (
    <div className="menu-item">
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>${item.precio}</p>
      <button className="btn-add">Agregar al carrito</button>
    </div>
  );
}
