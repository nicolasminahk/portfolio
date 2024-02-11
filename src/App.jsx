import Hero from './components/Hero'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DesignDetail from './components/DesignDetail'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
            {/* <Route path="/desing" element={<DesignDetail />} /> */}
            {/* <Route path="/branding" element={}/> */}
        </Routes>
    )
}

export default App
