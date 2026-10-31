import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KeeperApp from './assets/components/keeper-app.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <KeeperApp />
  </StrictMode>,
)
