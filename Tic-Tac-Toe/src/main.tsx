import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { TicTacToe } from './Tic-Tac-Toe'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TicTacToe/>
  </React.StrictMode>,
)
