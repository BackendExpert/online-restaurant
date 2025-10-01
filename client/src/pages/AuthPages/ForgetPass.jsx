import React from 'react';
import useForm from '../../hooks/useForm';
import DefaultButton from '../../component/Buttons/DefaultButton';
import DefaultInput from '../../component/Form/DefaultInput';
import API from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ForgetPass = () => {
    const { values, handleChange } = useForm({ email: '' });
    const { handleEmailVerificationToken } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/auth/get-password-reset-otp', values);
            if (res.data.success) {
                alert(res.data.message);
                handleEmailVerificationToken(res.data.token);
                navigate('/verify-otp');
            } else {
                alert(res.data.error);
            }
        } catch (err) {
            console.log(err);
        }
    };

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
                    Forget{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                        Password
                    </span>
                </h2>
                <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
                    Enter your email to receive OTP
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <DefaultInput
                        label="Email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />

                    <DefaultButton type="submit" label="Request OTP" />
                </form>

                <p className="text-sm text-gray-600 mt-8 text-center">
                    Remember your password?{" "}
                    <a href="/login" className="text-orange-500 font-semibold hover:underline transition">
                        Log In
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ForgetPass;
