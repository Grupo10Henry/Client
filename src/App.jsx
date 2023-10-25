import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/User/SignUp/SignUp';
import styles from './App.module.css';
import Navbar from "./Components/User/Navbar/Navbar"


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/registro" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
