import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TestForm from '../pages/TestForm'
import WebSite from '../layouts/WebSite'
import About from '../pages/About/About'
import DefultError from '../component/Errors/DefultError'
import Meals from '../pages/Meals/Meals'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />}>
                    <Route path='*' element={<DefultError />} />
                    <Route index element={<HomePage />} />
                    <Route path='/about' element={<About /> } />
                    <Route path='/meals' element={<Meals /> } />
                    <Route path='/test' element={<TestForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
