import React from 'react'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import DefaultInput from '../../component/Form/DefaultInput'
import DefaultButton from '../../component/Buttons/DefaultButton'

const SignUp = () => {
    const { values, handleChange } = useForm({
        username: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        try {
            console.log("Form Submitted ✅", values)
            navigate('/my-account')
        } catch (err) {
            console.error("SignUp Error ❌", err)
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden"
            style={{
                backgroundImage: "url('https://wallpapercave.com/wp/wp10322952.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* White Card */}
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 relative z-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center tracking-wide">
                    Create an Account
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Join us today and unlock amazing features 🚀
                </p>

                <form onSubmit={handleSignUp} className="space-y-6">
                    <DefaultInput
                        label="Username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        required
                    />

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

                    <DefaultButton
                        type="submit"
                        label="Sign Up"
                    />
                </form>

                <p className="text-sm text-gray-600 mt-8 text-center">
                    Already have an account?{" "}
                    <a href="/login" className="text-orange-500 font-semibold hover:underline transition">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignUp
