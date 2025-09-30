import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import DefaultButton from '../../component/Buttons/DefaultButton';
import DefaultInput from '../../component/Form/DefaultInput';
import { useNavigate } from 'react-router-dom';
import API from '../../services/api';

const UpdatePassword = () => {
    const { values, handleChange } = useForm({
        newpass: '',
        confirmpass: ''
    });

    const token = localStorage.getItem('emailverify');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            localStorage.clear();
            navigate('/login', { replace: true });
        }
    }, [token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { newpass, confirmpass } = values;

        if (newpass !== confirmpass) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await API.post(
                '/auth/update-password',
                { newpass, confirmpass },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (res.data.success === true || res.data.success === "true") {
                alert(res.data.message);
                localStorage.clear();
                navigate('/login');
            } else {
                alert(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    };

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

            <div className="w-full max-w-md bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/30 relative z-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">
                    Update Your{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                        Password
                    </span>
                </h1>
                <p className="text-gray-600 text-center mb-6 text-sm md:text-base">
                    Enter a new password to secure your account
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <DefaultInput
                        label="New Password"
                        type="password"
                        name="newpass"
                        value={values.newpass}
                        onChange={handleChange}
                        placeholder="Enter New Password"
                        required
                    />
                    <DefaultInput
                        label="Confirm Password"
                        type="password"
                        name="confirmpass"
                        value={values.confirmpass}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required
                    />
                    <DefaultButton type="submit" label="Update Password" />
                </form>
            </div>
        </div>
    );
};

export default UpdatePassword;
