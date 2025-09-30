import React from 'react'
import DefaultButton from '../component/Buttons/DefaultButton'

const HomePage = () => {
    return (
        <div className="">
            <div className="relative min-h-screen md:bg-[url(https://wallpapercave.com/wp/wp13860921.jpg)] bg-[url(https://wallpapercave.com/wp/wp14153462.jpg)] bg-center bg-cover">

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 md:mx-40 md:pt-64 md:text-left text-center pt-40 px-6">
                    <h1 className="md:text-6xl text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                        Welcome to Our Restaurant
                    </h1>

                    {/* Desktop text */}
                    <p className="hidden md:block mt-6 max-w-3xl text-gray-200 text-lg leading-relaxed">
                        Experience the perfect blend of tradition and flavor.
                        Our chefs prepare every dish with passion, using only the
                        freshest local ingredients to bring you a dining experience
                        that feels like home yet tastes extraordinary.
                        Whether it’s a family dinner or a night out with friends,
                        we’ve got something special waiting for you.
                    </p>

                    {/* Mobile text */}
                    <p className="md:hidden mt-6 text-gray-200 text-base leading-relaxed">
                        Fresh flavors, warm ambiance, and dishes crafted with love.
                        Join us for a memorable dining experience.
                    </p>

                    {/* Button */}
                    <div className="mt-8 md:w-40 flex md:justify-start justify-center">
                        <DefaultButton
                            type="button"
                            label="View More"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
