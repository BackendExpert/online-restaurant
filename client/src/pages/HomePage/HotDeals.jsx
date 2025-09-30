import React from "react";
import DefaultButton from "../../component/Buttons/DefaultButton";

const HotDeals = () => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: "$29.99",
            image: "https://wallpapercave.com/wp/wp9628109.jpg",
            span: "col-span-1",
        },
        {
            id: 2,
            name: "Product 2",
            price: "$39.99",
            image: "https://wallpapercave.com/wp/wp8970227.jpg",
            span: "row-span-2",
        },
        {
            id: 3,
            name: "Product 3",
            price: "$49.99",
            image: "https://wallpapercave.com/wp/wp15658678.jpg",
            span: "row-span-2",
        },
        {
            id: 4,
            name: "Product 4",
            price: "$59.99",
            image: "https://wallpapercave.com/wp/wp8728496.jpg",
            span: "col-span-1",
        },
        {
            id: 5,
            name: "Product 5",
            price: "$19.99",
            image: "https://wallpapercave.com/uwp/uwp4287506.jpeg",
            span: "col-span-2",
        },
        {
            id: 6,
            name: "Product 6",
            price: "$99.99",
            image: "https://wallpapercave.com/wp/wp4325776.jpg",
            span: "col-span-1",
        },
    ];

    return (
        <div className="py-10 px-4 sm:px-6 lg:px-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-900">
                Hot Products
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[200px]">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className={`relative overflow-hidden shadow-lg ${product.span}`}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />

                        {/* Gradient overlay (darkens on hover) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent hover:from-black/80 hover:via-black/50 hover:to-black/10 transition-all duration-500"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                            <h2 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">
                                {product.name}
                            </h2>
                            <p className="text-md sm:text-lg text-purple-200 font-semibold">
                                {product.price}
                            </p>
                            <div className="">
                                <DefaultButton
                                    type="button"
                                    label="Buy Now"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <div className="w-40">
                    <DefaultButton
                        type="button"
                        label="View More"
                    />
                </div>
            </div>
        </div>
    );
};

export default HotDeals;
