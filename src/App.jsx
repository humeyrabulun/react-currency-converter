import { useState } from 'react'

import './App.css'
import Currency from './components/Currency'

function App() {


  return (
    <div style={{ marginTop: "-20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Currency />
    </div>
  )
}

export default App
