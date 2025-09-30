import React from 'react'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import DefaultInput from '../../component/Form/DefaultInput'
import DefaultButton from '../../component/Buttons/DefaultButton'

const Login = () => {
    const { values, handleChange } = useForm({
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        try {
            console.log("Login Submitted ✅", values)
            navigate('/my-account')
        } catch (err) {
            console.error("Login Error ❌", err)
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden"
            style={{
                backgroundImage: "url('https://wallpapercave.com/wp/wp10322960.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 relative z-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center tracking-wide">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Log in to your account to continue 🚀
                </p>

                <form onSubmit={handleLogin} className="space-y-6">
                    <DefaultInput
                        label="Email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />

                    <DefaultInput
                        label="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />

                    <div className="flex justify-end">
                        <a
                            href="/forgot-password"
                            className="text-sm text-orange-500 font-semibold hover:underline transition"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <DefaultButton
                        type="submit"
                        label="Log In"
                    />
                </form>

                <p className="text-sm text-gray-600 mt-8 text-center">
                    Don’t have an account?{" "}
                    <a href="/create-account" className="text-orange-500 font-semibold hover:underline transition">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login
