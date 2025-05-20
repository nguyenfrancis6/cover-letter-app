import React from 'react'

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 32px',
        background: '#fff',
        borderBottom: '1px solid #eee',
        fontWeight: 500,
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 700 }}>
        Cover'd
      </div>
      <div style={{ display: 'flex', gap: 32 }}>
        <span style={{ cursor: 'pointer' }}>Try Now</span>
        <span style={{ cursor: 'pointer' }}>Job Tracker</span>
        <span style={{ cursor: 'pointer' }}>Account</span>
      </div>
    </nav>
  )
}

export default Navbar