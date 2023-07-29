import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './assets/styles/reset.css'
import './assets/styles/globals.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
