import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Forms/Register/Register';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/registro" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
