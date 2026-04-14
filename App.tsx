import React from 'react';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8F8F8',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: '#707070' }}>Trinchera OS</h1>
      <p style={{ color: '#8C8C8C' }}>
        Sistema operativo empresarial para La Trinchera Sonora
      </p>

      <div style={{
        marginTop: '20px',
        padding: '20px',
        borderRadius: '12px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E5'
      }}>
        <h2>Proyectos</h2>
        <p>Edones</p>
        <p>DKSED</p>
        <p>La Trinchera Sonora S.L.</p>
      </div>

      <button
        style={{
          marginTop: '20px',
          padding: '12px 16px',
          background: '#d0b686',
          color: 'white',
          borderRadius: '8px',
          border: 'none'
        }}
      >
        Nuevo proyecto
      </button>
    </div>
  );
}
