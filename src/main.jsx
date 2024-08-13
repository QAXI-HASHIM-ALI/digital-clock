import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'

import Clock from './components/Clock.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clock />
  </StrictMode>,
)
