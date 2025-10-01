import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import DefaultButton from '../../component/Buttons/DefaultButton';
import DefaultInput from '../../component/Form/DefaultInput';
import { useAuth } from '../../context/AuthContext';
import API from '../../services/api';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
    const token = localStorage.getItem('emailverify');
    const navigate = useNavigate();
    const { verifyEmailInfo, handleEmailVerificationToken } = useAuth();

    useEffect(() => {
        if (!token) {
            navigate('/login', { replace: true });
            window.location.reload();
        }
    }, [token, navigate]);

    useEffect(() => {
        if (!verifyEmailInfo.email && token) {
            try {
                handleEmailVerificationToken(token);
            } catch (err) {
                localStorage.clear();
                navigate('/login');
            }
        }
    }, [verifyEmailInfo, token, handleEmailVerificationToken, navigate]);

    const { values, handleChange } = useForm({ otp: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/auth/verify-email', values, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.data.success) {
                alert(res.data.message);
                localStorage.clear();
                navigate('/login', { replace: true });
            } else {
                alert(res.data.error);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // 👉 Redirecting guard
    if (!token) {
        return (
            <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-600 text-lg font-semibold">Redirecting...</p>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden"
            style={{
                backgroundImage: "url('https://wallpapercave.com/wp/wp10322952.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* White Card */}
            <div className="w-full max-w-md bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/30 relative z-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">
                    Verify Your{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                        Account
                    </span>
                </h1>
                <p className="text-gray-600 text-center mb-6 text-sm md:text-base">
                    Check your email. The OTP has been sent to your registered email.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <DefaultInput
                        label="Enter OTP"
                        name="otp"
                        value={values.otp}
                        onChange={handleChange}
                        placeholder="Enter OTP"
                        required
                    />
                    <DefaultButton type="submit" label="Verify Account" />
                </form>
            </div>
        </div>
    );
};

export default VerifyEmail;
