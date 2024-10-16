import { CSSProperties } from 'react';

export const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  },
  card: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    zIndex:'1',
  },
  title: {
    fontSize: '1.5rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '16px',
  },
  button: {
    backgroundColor: '#0d47a1',
    color: 'white',
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#005a9e',
  },
};
