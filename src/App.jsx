import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import Refund from './pages/Refund.jsx'
import Terms from './pages/Terms.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
