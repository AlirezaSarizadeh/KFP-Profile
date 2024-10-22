import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx'
import './index.css'
import WrappedApp from './App.jsx';
import { AuthProvider } from './context/authContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
  </StrictMode>

)
