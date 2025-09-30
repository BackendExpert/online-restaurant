import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebSite from '../layouts/WebSite'
import Test from '../pages/Testings/Test'
import TestInputs from '../pages/Testings/TestInputs'
import CreateAccount from '../pages/AuthPages/CreateAccount'
import Login from '../pages/AuthPages/Login'
import ReleaseNote from '../pages/Other/ReleaseNote'
import VerifyEmail from '../pages/AuthPages/VerifyEmail'
import ForgetPass from '../pages/AuthPages/ForgetPass'
import VerifyOTP from '../pages/AuthPages/VerifyOTP'
import UpdatePassword from '../pages/AuthPages/UpdatePassword'
import PrivateRoute from '../router/PrivateRoute'
import Dashboard from '../pages/AdminDash/Dashboard'
import DashError from '../component/Dashboard/DashError'
import DashHome from '../pages/AdminDash/DashHome'
import Notifications from '../pages/DashOther/Notifications'
import ManageRole from '../pages/AdminDash/CoreFunctions/ManageRole'
import Unauthorized from './Unauthorized'
import CreateRole from '../pages/AdminDash/CoreFunctions/CreateRole'
import ManagePermissions from '../pages/AdminDash/CoreFunctions/ManagePermissions'
import ViewPermission from '../pages/AdminDash/CoreFunctions/ViewPermission'
import CreatePermissions from '../pages/AdminDash/CoreFunctions/CreatePermissions'
import InternDash from '../pages/InternDash/InternDash'
import DashHomeIntern from '../pages/InternDash/DashHomeIntern'
import SystemUsers from '../pages/AdminDash/CoreFunctions/SystemUsers'
import CreateUser from '../pages/AdminDash/CoreFunctions/CreateUser'
import UpdateInterProfile from '../pages/InternDash/UpdateInterProfile'
import MemberProfile from '../pages/DashOther/MemberProfile'
import AllInterns from '../pages/AdminDash/ManageIntern/AllInterns'
import ViewIntern from '../pages/AdminDash/ManageIntern/ViewIntern'
import InternDashError from '../component/Errors/InternDashError'
import ManageInternLetters from '../pages/AdminDash/ManageIntern/InternLetters/ManageInternLetters'
import RequestLetter from '../pages/InternDash/RequestLetter'
import ViewLetter from '../pages/AdminDash/ManageIntern/InternLetters/VIewLetter'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />}>
                    <Route index element={<Login />} />
                    <Route path='/create-account' element={<CreateAccount />} />
                    <Route path='/release-note' element={<ReleaseNote />} />
                    <Route path='/verify-email' element={<VerifyEmail />} />
                    <Route path='/forget-password' element={<ForgetPass />} />
                    <Route path='/verify-otp' element={<VerifyOTP />} />
                    <Route path='/update-password' element={<UpdatePassword />} />
                    <Route path='/unauthorized' element={<Unauthorized />} />
                </Route>

                <Route path='/Dashboard/' element={<PrivateRoute roles={['admin', 'supervisor', 'staff']}><Dashboard /></PrivateRoute>}>
                    <Route path='*' element={<PrivateRoute roles={['admin', 'supervisor', 'staff']}><DashError /></PrivateRoute>} />
                    <Route path='notifications' element={<PrivateRoute roles={['admin', 'supervisor', 'staff']}><Notifications /></PrivateRoute>} />
                    <Route index element={<PrivateRoute roles={['admin', 'supervisor', 'staff']}><DashHome /></PrivateRoute>} />
                    <Route path='profile' element={<PrivateRoute roles={['admin', 'supervisor', 'staff']}><MemberProfile /></PrivateRoute>} />

                    <Route path='manage-roles' element={<PrivateRoute roles={['admin']}><ManageRole /></PrivateRoute>} />
                    <Route path='create-newrole' element={<PrivateRoute roles={['admin']}><CreateRole /></PrivateRoute>} />
                    <Route path='permissions' element={<PrivateRoute roles={['admin']}><ManagePermissions /></PrivateRoute>} />
                    <Route path='view-permissions/:id' element={<PrivateRoute roles={['admin']}><ViewPermission /></PrivateRoute>} />
                    <Route path='create-permissions' element={<PrivateRoute roles={['admin']}><CreatePermissions /></PrivateRoute>} />
                    <Route path='system-users' element={<PrivateRoute roles={['admin']}><SystemUsers /></PrivateRoute>} />
                    <Route path='create-system-users' element={<PrivateRoute roles={['admin']}><CreateUser /></PrivateRoute>} />

                    <Route path='interns' element={<PrivateRoute roles={['admin', 'staff']}><AllInterns /></PrivateRoute>} />
                    <Route path='view-intern/:id' element={<PrivateRoute roles={['admin', 'staff']}><ViewIntern /></PrivateRoute>} />
                    <Route path='letters' element={<PrivateRoute roles={['admin', 'staff']}><ManageInternLetters /></PrivateRoute>} />
                    <Route path='view-letter/:id' element={<PrivateRoute roles={['admin', 'staff']}><ViewLetter /></PrivateRoute>} />


                </Route>


                <Route path='/my-account' element={<PrivateRoute roles={['admin', 'intern']}><InternDash /></PrivateRoute>}>
                    <Route path='*' element={<PrivateRoute roles={['admin', 'intern']}><InternDashError /></PrivateRoute>} />
                    <Route index element={<PrivateRoute roles={['admin', 'intern']}><DashHomeIntern /></PrivateRoute>} />
                    <Route path='update-my-profile' element={<PrivateRoute roles={['admin', 'intern']}><UpdateInterProfile /></PrivateRoute>} />
                    <Route path='request-letter' element={<PrivateRoute roles={['admin', 'intern']}><RequestLetter /></PrivateRoute>} />

                </Route>


            </Routes>
        </BrowserRouter>
    )
}

export default App
