const AuthService = require('../services/auth.service')

const AuthController = {
    register: async (req, res) => {
        try {
            const {
                username,
                email,
                password
            } = req.body

            const result = await AuthService.register(username, email, password, req)
            res.status(200).json(result)
        }
        catch (err) {
            res.json({ success: false, error: err.message });
        }
    },

    verfiyemail: async (req, res) => {
        try {
            const token = req.header("Authorization")?.replace("Bearer ", "");
            const { otp } = req.body;

            if (!token) {
                return res.status(401).json({ message: "Access denied. No token provided." });
            }
            const result = await AuthService.verfiyemail(token, otp, req);
            res.status(200).json(result);
        }
        catch (err) {
            res.json({ success: false, error: err.message });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const result = await AuthService.login(email, password, req);
            res.status(200).json(result);
        }
        catch (err) {
            res.json({
                success: false,
                message: err.message
            });
        }
    },
    forgetpass: async (req, res) => {
        try {
            const { email } = req.body;

            const result = await AuthService.forgetpassOtp(email, req);
            res.status(200).json(result);
        }
        catch (err) {
            res.json({ success: false, error: err.message });
        }
    },

    verifyOTPpassreset: async (req, res) => {
        try {
            const token = req.header("Authorization")?.replace("Bearer ", "");
            const { otp } = req.body;

            if (!token) {
                return res.status(401).json({ message: "Access denied. No token provided." });
            }
            const result = await AuthService.checkPassrestOtp(token, otp, req);
            res.status(200).json(result);
        }
        catch (err) {
            res.json({ success: false, error: err.message });
        }
    },

    updatePassword: async (req, res) => {
        try {
            const token = req.header("Authorization")?.replace("Bearer ", "");
            const { newpass } = req.body;

            if (!token) {
                return res.status(401).json({ message: "Access denied. No token provided." });
            }
            const result = await AuthService.updatePassword(token, newpass, req);
            res.status(200).json(result);
        }
        catch (err) {
            res.json({ success: false, error: err.message });
        }
    }



};

module.exports = AuthController;