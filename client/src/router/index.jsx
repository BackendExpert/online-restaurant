import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TestForm from '../pages/TestForm'
import WebSite from '../layouts/WebSite'
import About from '../pages/About/About'
import DefultError from '../component/Errors/DefultError'
import Meals from '../pages/Meals/Meals'
import SignUp from '../pages/AuthPages/SignUp'
import Login from '../pages/AuthPages/Login'
import ForgetPass from '../pages/AuthPages/ForgetPass'
import VerifyEmail from '../pages/AuthPages/VerifyEmail'
import VerifyOTP from '../pages/AuthPages/VerifyOTP'
import UpdatePassword from '../pages/AuthPages/UpdatePassword'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />}>
                    <Route path='*' element={<DefultError />} />
                    <Route index element={<HomePage />} />
                    <Route path='/about' element={<About /> } />
                    <Route path='/meals' element={<Meals /> } />

                    <Route path='/create-account' element={<SignUp /> } />
                    <Route path='/login' element={<Login /> } />
                    <Route path='/forget-password' element={<ForgetPass /> } />
                    <Route path='/verify-email' element={<VerifyEmail /> } />
                    <Route path='/verify-otp' element={<VerifyOTP /> } />
                    <Route path='/update-password' element={<UpdatePassword /> } />


                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
