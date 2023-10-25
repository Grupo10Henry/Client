import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/User/Navbar/Navbar"

import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Navbar />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
