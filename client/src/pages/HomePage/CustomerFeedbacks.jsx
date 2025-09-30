import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomerFeedbacks = () => {
    const scrollRef = useRef(null);

    const feedbacks = [
        {
            id: 1,
            name: "Ayesha",
            role: "Software Engineer",
            feedback:
                "Absolutely love this product! The quality and support are top-notch.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
            id: 2,
            name: "Michael",
            role: "Designer",
            feedback:
                "A must-have for professionals. Sleek design and very reliable.",
            rating: 4,
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
            id: 3,
            name: "Samantha",
            role: "Entrepreneur",
            feedback:
                "This exceeded my expectations. Highly recommended to anyone!",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
            id: 4,
            name: "Daniel",
            role: "Developer",
            feedback:
                "Fantastic experience, very smooth and intuitive. Will buy again.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        {
            id: 5,
            name: "Priya",
            role: "Marketer",
            feedback: "Looks stunning and works flawlessly. Perfect choice.",
            rating: 4,
            avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        },
        {
            id: 6,
            name: "Chris",
            role: "Photographer",
            feedback:
                "Modern and elegant! Loved the seamless user experience. Worth every cent.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        },
        {
            id: 7,
            name: "Sophia",
            role: "UI/UX Designer",
            feedback:
                "Clean and futuristic design, makes my workflow so much better.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        },
        {
            id: 8,
            name: "Raj",
            role: "Project Manager",
            feedback:
                "I love how smooth and responsive everything is. Next-gen for sure!",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        },
        {
            id: 9,
            name: "Elena",
            role: "Writer",
            feedback: "User-friendly, stylish, and powerful. Just perfect.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        },
        {
            id: 10,
            name: "James",
            role: "Engineer",
            feedback:
                "Next-level performance and design. Will definitely recommend!",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -350 : 350,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="py-12 px-6 relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-10">
                Customer Feedbacks
            </h2>

            {/* Scroll Buttons */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-orange-600 hover:text-white transition z-10"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={() => scroll("right")}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-orange-600 hover:text-white transition z-10"
            >
                <ChevronRight size={24} />
            </button>

            {/* Feedback Scroll Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4"
            >
                {feedbacks.map((f) => (
                    <div
                        key={f.id}
                        className="min-w-[300px] max-w-[320px] bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition duration-500"
                    >
                        <img
                            src={f.avatar}
                            alt={f.name}
                            className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-orange-500"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{f.name}</h3>
                        <p className="text-sm text-gray-500">{f.role}</p>

                        {/* Stars */}
                        <div className="flex justify-center my-2">
                            {Array.from({ length: f.rating }).map((_, i) => (
                                <FaStar key={i} className="text-yellow-400" />
                            ))}
                        </div>

                        <p className="text-gray-600 italic text-sm leading-relaxed">
                            “{f.feedback}”
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerFeedbacks;
