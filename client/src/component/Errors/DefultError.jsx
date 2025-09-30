import React from 'react'

const DefultError = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen">
            <h1 className="text-9xl font-extrabold text-orange-600 animate-pulse drop-shadow-lg">
                404
            </h1>
            <h2 className="mt-4 text-3xl font-semibold tracking-wide text-orange-700">
                Oops! Page Not Found
            </h2>
            <p className="mt-2 text-gray-600 max-w-md">
                The page you’re looking for doesn’t exist or may have been moved.
                Don’t worry, you can head back home safely.
            </p>

            <a href="/" className="mt-8">
                <div className="py-3 px-10 bg-orange-600 text-white text-lg rounded-full shadow-md hover:bg-orange-700 hover:shadow-xl hover:scale-105 transition duration-300">
                    Go Back Home
                </div>
            </a>
        </div>
    )
}

export default DefultError
