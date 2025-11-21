import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import localMenu from '../assets/data/menu.json';

export default function Inicio() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Carga local (si prefieres backend, cambia aquí)
    setProductos(localMenu);
  }, []);

  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <section className="menu">
          <h2>Menú platos</h2>
          <div id="menu-grid" className="menu-grid">
            {productos.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
