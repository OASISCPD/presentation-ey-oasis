import { Routes, Route } from 'react-router-dom'
import Presentation from './components/Presentation'
import PrivacyPolicy from './components/PrivacyPolicy'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Presentation />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
