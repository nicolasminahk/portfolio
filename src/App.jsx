import Hero from './components/Hero'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
        </Routes>
    )
}

export default App
