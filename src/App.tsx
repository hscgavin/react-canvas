import React from 'react';
import styles from './App.module.css';
import Docker from './components/Docker/Docker';

function App() {
  return (
    <div className={styles.App}>
      <Docker />
    </div>
  );
}

export default App;
