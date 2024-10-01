import { CSSProperties } from "react";

export const styles : { [key: string]: CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '20px',
    },
    link: {
      marginTop: '20px',
      textDecoration: 'none',
      color: '#0d47a1',
    },
  };
  