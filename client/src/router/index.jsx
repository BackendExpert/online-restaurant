import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TestForm from '../pages/TestForm'
import WebSite from '../layouts/WebSite'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />}>
                    <Route index element={<HomePage />} />
                    <Route path='/test' element={<TestForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
