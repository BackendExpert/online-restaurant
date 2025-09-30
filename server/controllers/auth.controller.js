const AuthService = require('../services/auth.service')

const AuthController = {
    register: async(req, res) => {
        try{
            const {
                username,
                email,
                password
            } = req.body

            const result = await AuthService.register(username, email, password, req)
            res.status(200).json(result)
        }
        catch(err){
            res.json({ success: false, error: err.message });
        }
    }
};

module.exports = AuthController;