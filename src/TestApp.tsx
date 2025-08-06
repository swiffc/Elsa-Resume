import React from 'react'

function TestApp() {
  return (
    <div style={{
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        textAlign: 'center',
        background: 'rgba(255,255,255,0.1)',
        padding: '40px',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>
          🎉 React Test App Working!
        </h1>
        <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
          If you can see this, React is working correctly.
        </p>
        <p style={{ fontSize: '1.1em' }}>
          <strong>This means the issue is with the complex portfolio code.</strong>
        </p>
        <button 
          onClick={() => alert('React onClick working!')}
          style={{
            background: '#4CAF50',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '25px',
            fontSize: '1.1em',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Test React Click
        </button>
      </div>
    </div>
  )
}

export default TestApp
