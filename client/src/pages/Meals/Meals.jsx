import React, { useState } from "react";
import meals from "./SamleProducts"; // adjust import path

const Meals = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTag, setSelectedTag] = useState("All");
    const [sortOption, setSortOption] = useState("best");
    const [priceRange, setPriceRange] = useState(50);

    // Extract unique categories & tags
    const categories = ["All", ...new Set(meals.map((m) => m.category))];
    const tags = ["All", ...new Set(meals.flatMap((m) => m.tags.map((t) => t.name)))];

    // Filtering logic
    const filteredMeals = meals
        .filter((m) => (selectedCategory === "All" ? true : m.category === selectedCategory))
        .filter((m) => (selectedTag === "All" ? true : m.tags.some((t) => t.name === selectedTag)))
        .filter((m) => {
            const price = Number(m.price.replace(/[^0-9.]/g, "")); // strip $
            return price <= priceRange;
        })
        .sort((a, b) => {
            const priceA = Number(a.price.replace(/[^0-9.]/g, ""));
            const priceB = Number(b.price.replace(/[^0-9.]/g, ""));
            if (sortOption === "low") return priceA - priceB;
            if (sortOption === "high") return priceB - priceA;
            return 0; // best match = no sort
        });

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 flex gap-8 py-40">
            {/* Sidebar Filters */}
            <aside className="w-1/4 hidden lg:block bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-20">
                <h2 className="text-xl font-bold text-orange-600 mb-4">Filters</h2>

                {/* Categories */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2">Categories</h3>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {categories.map((cat) => (
                            <li
                                key={cat}
                                className={`cursor-pointer px-3 py-2 rounded-lg text-center transition ${selectedCategory === cat
                                        ? "bg-orange-100 text-orange-600 font-semibold"
                                        : "hover:bg-gray-100 text-gray-700"
                                    }`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tags */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2">Tags</h3>
                    <ul className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <li
                                key={tag}
                                className={`cursor-pointer px-3 py-1 rounded-full border transition ${selectedTag === tag
                                    ? "bg-orange-500 text-white border-orange-500"
                                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                                    }`}
                                onClick={() => setSelectedTag(tag)}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2">Price Range</h3>
                    <input
                        type="range"
                        min="5"
                        max="50"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full accent-orange-500"
                    />
                    <p className="text-gray-600 mt-1">Up to ${priceRange}</p>
                </div>

                {/* Sort */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Sort By</h3>
                    <select
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="best">Best Match</option>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                    </select>
                </div>
            </aside>

            {/* Meals Grid */}
            <main className="flex-1">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Our Meals</h1>
                {filteredMeals.length === 0 ? (
                    <p className="text-gray-500">No meals found for selected filters.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredMeals.map((meal) => (
                            <div
                                key={meal.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={meal.image}
                                        alt={meal.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                    />
                                    <span className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm shadow">
                                        {meal.price}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h2 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition">
                                        {meal.name}
                                    </h2>
                                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{meal.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {meal.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full"
                                            >
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Meals;
