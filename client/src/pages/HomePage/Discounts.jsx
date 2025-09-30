import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DefaultButton from "../../component/Buttons/DefaultButton";

const Discounts = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    };

    const deals = [
        { id: 1, title: "50% Off Burgers", desc: "Valid till Oct 5", img: "https://wallpapercave.com/wp/wp7029317.jpg" },
        { id: 2, title: "Buy 1 Get 1 Free Pizza", desc: "Weekends only", img: "https://wallpapercave.com/wp/wp3151338.jpg" },
        { id: 3, title: "20% Off Pasta", desc: "Valid this week", img: "https://wallpapercave.com/wp/wp7029398.jpg" },
        { id: 4, title: "Free Dessert", desc: "On orders above $25", img: "https://wallpapercave.com/uwp/uwp4287506.jpeg" },
        { id: 5, title: "30% Off Sushi", desc: "Today only", img: "https://wallpapercave.com/wp/wp2422295.jpg" },
        { id: 6, title: "Happy Hour Drinks", desc: "5PM - 7PM", img: "https://wallpapercave.com/wp/wp7600934.jpg" },
        { id: 7, title: "Family Meal Deal", desc: "Save $10", img: "https://wallpapercave.com/uwp/uwp4287506.jpeg" },
        { id: 8, title: "Student Discount", desc: "15% Off with ID", img: "https://wallpapercave.com/wp/wp7029398.jpg" },
        { id: 9, title: "Free Delivery", desc: "Orders above $50", img: "https://wallpapercave.com/wp/wp2422295.jpg" },
        { id: 10, title: "Breakfast Combo", desc: "Save 25%", img: "https://wallpapercave.com/wp/wp3151338.jpg" },
        { id: 11, title: "Special Weekend BBQ", desc: "Limited offer", img: "https://wallpapercave.com/wp/wp7029317.jpg" },
        { id: 12, title: "Kids Eat Free", desc: "With adult meal", img: "https://wallpapercave.com/wp/wp7600934.jpg" },
    ];

    return (
        <div className="relative my-12 max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
                Hot Discounts & Deals
            </h1>

            {/* Left Button */}
            <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-800/80 to-gray-600/50 text-white p-3 rounded-full shadow-lg hover:scale-110 transition z-10"
            >
                <FaChevronLeft size={24} />
            </button>

            {/* Scrollable Row */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-6 scroll-smooth no-scrollbar"
            >
                {deals.map((deal) => (
                    <div
                        key={deal.id}
                        className="relative min-w-[320px] max-w-[320px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer"
                    >
                        <img
                            src={deal.img}
                            alt={deal.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h2 className="text-xl font-bold drop-shadow-md">{deal.title}</h2>
                            <p className="text-sm opacity-90">{deal.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Button */}
            <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-l from-gray-800/80 to-gray-600/50 text-white p-3 rounded-full shadow-lg hover:scale-110 transition z-10"
            >
                <FaChevronRight size={24} />
            </button>

            {/* Centered Button */}
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

export default Discounts;
