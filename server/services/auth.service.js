const User = require("../models/User");
const Role = require("../models/Role");
const UserOTP = require("../models/UserOTP");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const tokenCreator = require("../utils/tokens/generateToken");
const sendEmail = require("../utils/email/emailTransporter");
const logUserAction = require("../utils/others/logUserAction");

class AuthService {
    static async register(username, email, password, req) {
        const checkuser = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (checkuser) {
            throw new Error("User already exists in database");
        }

        const getroleid = await Role.findOne({ name: "customer" });

        const hashpass = await bcrypt.hash(password, 10)

        const createuser = new User({
            username,
            email,
            password: hashpass,
            role: getroleid._id,
        });

        await createuser.save()

        if (req) {
            const metadata = {
                ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
                userAgent: req.headers['user-agent'],
                timestamp: new Date(),
            };
            await logUserAction(req, "register", `${email} registered`, metadata, checkuser._id);
        }

        // create token for email Verify
        const checkotp = await UserOTP.findOne({ email });
        if (checkotp) {
            throw new Error("User already requested OTP, please wait and try again later");
        }
        function generateOTP(length = 8) {
            return crypto
                .randomBytes(length)
                .toString("base64")
                .replace(/[^a-zA-Z0-9]/g, "")
                .slice(0, length);
        }

        const otp = generateOTP();

        await sendEmail({
            to: email,
            subject: "🎉 Account Created Successfully - Zavory Online Food Ordering System",
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #fff7f0; padding: 30px;">
                    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">

                        <!-- Header -->
                        <div style="background: linear-gradient(90deg, #ff7f50, #ff9f43); padding: 25px; text-align: center;">
                            <h1 style="color: #fff; margin: 0; font-size: 26px; font-weight: 800;">Zavory Online Food Ordering System</h1>
                        </div>

                        <!-- Body -->
                        <div style="padding: 35px; color: #333;">
                            <h2 style="margin-bottom: 15px; font-size: 24px; color: #e65c00;">Hello ${username},</h2>
                            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                                Welcome to <strong>Zavory Online Food Ordering System</strong>! Your account has been successfully created.
                                To complete your setup, please verify your email using the code below:
                            </p>

                            <!-- OTP Box -->
                            <div style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #ff7f50; background: #fff2e6; padding: 20px; text-align: center; border-radius: 12px; margin: 20px 0; box-shadow: 0 5px 15px rgba(255,127,80,0.3);">
                                ${otp}
                            </div>

                            <!-- Verify Button -->
                            <div style="text-align: center; margin: 30px 0;">
                                <a href="#" style="display: inline-block; background: linear-gradient(90deg, #ff7f50, #ff9f43); color: #fff; font-weight: 700; padding: 15px 35px; border-radius: 12px; text-decoration: none; font-size: 16px; box-shadow: 0 5px 15px rgba(255,127,80,0.4); transition: all 0.3s;">
                                    Verify Email
                                </a>
                            </div>

                            <p style="font-size: 15px; color: #555; margin-bottom: 10px;">
                                This code is valid for <strong>10 minutes</strong>. Please do not share it with anyone.
                            </p>

                            <p style="font-size: 15px; color: #555; margin-bottom: 10px;">
                                Your registered email: <strong>${email}</strong>
                            </p>

                            <p style="font-size: 15px; color: #555;">
                                If you did not create this account, please ignore this email.
                            </p>
                        </div>

                        <!-- Footer -->
                        <div style="background-color: #fff2e6; padding: 20px; text-align: center; font-size: 13px; color: #888; border-top: 1px solid #ffd9b3;">
                            <p style="margin: 5px 0;">© ${new Date().getFullYear()} Zavory Online Food Ordering System. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            `,
        });


        const hashotp = await bcrypt.hash(otp, 10);
        const createotprecode = new UserOTP({
            email,
            otp: hashotp,
            createdAt: new Date(),
        });

        const resultcreateotp = await createotprecode.save();
        if (!resultcreateotp) {
            throw new Error("Error saving OTP");
        }

        const token = tokenCreator({ email, otp }, "15m");

        return {
            success: true,
            token,
            message: "Registration successful. Verification email sent.",
        };
    }
}

module.exports = AuthService