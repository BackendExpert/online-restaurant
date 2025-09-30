import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TestForm from '../pages/TestForm'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage /> } />
                <Route path='/test' element={<TestForm /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App
