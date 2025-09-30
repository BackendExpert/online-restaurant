import React from "react";
import { Globe, Smartphone, ShieldCheck, Zap, Users, Cloud } from "lucide-react";

const About = () => {
    return (
        <div className="py-40 bg-gradient-to-br from-orange-50 to-orange-100 text-gray-900 py-16 px-6 lg:px-20">
            {/* Heading */}
            <div className="max-w-4xl mx-auto text-center mb-14">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 drop-shadow-lg">
                    🔥 About Zavory
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
                    Zavory is a powerful, next-generation system designed to simplify your
                    workflow, enhance collaboration, and provide seamless access across
                    multiple platforms. Built with scalability and performance in mind, it
                    ensures that you stay connected and productive—anytime, anywhere.
                </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white/90 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
                    <Globe className="text-orange-500 mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-2 text-orange-600">Web Access</h3>
                    <p className="text-gray-700">
                        Use Zavory seamlessly on the web with a modern and intuitive
                        interface accessible from anywhere in the world.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white/90 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
                    <Smartphone className="text-orange-500 mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-2 text-orange-600">Mobile Ready</h3>
                    <p className="text-gray-700">
                        Stay productive on the go with our mobile-friendly experience,
                        optimized for both iOS and Android.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white/90 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
                    <ShieldCheck className="text-orange-500 mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-2 text-orange-600">Secure & Reliable</h3>
                    <p className="text-gray-700">
                        Advanced security protocols and encryption keep your data safe while
                        ensuring system reliability 24/7.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white/90 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
                    <Zap className="text-orange-500 mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-2 text-orange-600">Lightning Fast</h3>
                    <p className="text-gray-700">
                        Experience blazing-fast performance with optimized architecture for
                        speed and efficiency.
                    </p>
                </div>

                {/* Card 5 */}
                <div className="bg-white/90 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
                    <Users className="text-orange-500 mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-2 text-orange-600">Collaboration</h3>
                    <p className="text-gray-700">
                        Work together effortlessly with built-in tools that enable
                        communication and teamwork like never before.
                    </p>
                </div>

                {/* Card 6 */}
                <div className="bg-white/90 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
                    <Cloud className="text-orange-500 mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-2 text-orange-600">Cloud Powered</h3>
                    <p className="text-gray-700">
                        Access your data anywhere with cloud integration, ensuring seamless
                        sync across devices.
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-3xl mx-auto mt-16 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4">
                    Available Everywhere 🌍
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Zavory is designed to give you full flexibility—whether you're working
                    from your laptop at home or checking updates from your mobile while
                    traveling. Stay connected, stay efficient, and stay ahead.
                </p>
            </div>
        </div>
    );
};

export default About;
