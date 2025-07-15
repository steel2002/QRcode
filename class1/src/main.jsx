import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import './QRcode.css'
// import './index.css'
import App from './App.jsx'
import ORcode from './ORcode.jsx'
// import UserCard from './UserCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    {/* <UserCard /> */}
    <ORcode/>
    
  </StrictMode>,
)
