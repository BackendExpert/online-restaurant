const meals = [
    {
        id: 1,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Spicy Chicken Curry",
        desc: "A flavorful curry made with tender chicken, fresh spices, and herbs.",
        price: "$12.99",
        category: "Curry",
        tags: [
            { name: "Spicy" },
            { name: "Chicken" },
            { name: "Dinner" }
        ],
    },
    {
        id: 2,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Grilled Salmon Delight",
        desc: "Fresh salmon grilled to perfection with lemon butter sauce.",
        price: "$18.50",
        category: "Seafood",
        tags: [
            { name: "Healthy" },
            { name: "Seafood" }
        ],
    },
    {
        id: 3,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Veggie Supreme Pizza",
        desc: "Loaded with bell peppers, olives, mushrooms, and mozzarella.",
        price: "$15.00",
        category: "Pizza",
        tags: [
            { name: "Vegetarian" },
            { name: "Cheesy" }
        ],
    },
    {
        id: 4,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Classic Beef Burger",
        desc: "Juicy beef patty with fresh lettuce, tomato, and melted cheese.",
        price: "$10.99",
        category: "Burgers",
        tags: [
            { name: "Beef" },
            { name: "Fast Food" }
        ],
    },
    {
        id: 5,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Butter Naan Basket",
        desc: "Soft and fluffy naan bread served with melted butter.",
        price: "$5.50",
        category: "Bread",
        tags: [
            { name: "Indian" },
            { name: "Side Dish" }
        ],
    },
    {
        id: 6,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Paneer Tikka Masala",
        desc: "Cottage cheese cubes cooked in a creamy tomato-based curry.",
        price: "$11.99",
        category: "Curry",
        tags: [
            { name: "Vegetarian" },
            { name: "Indian" }
        ],
    },
    {
        id: 7,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "BBQ Ribs Platter",
        desc: "Smoky, tender pork ribs served with BBQ sauce.",
        price: "$22.00",
        category: "Grill",
        tags: [
            { name: "BBQ" },
            { name: "Dinner" }
        ],
    },
    {
        id: 8,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Thai Green Curry",
        desc: "Aromatic Thai curry with coconut milk and vegetables.",
        price: "$14.75",
        category: "Asian",
        tags: [
            { name: "Thai" },
            { name: "Spicy" }
        ],
    },
    {
        id: 9,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Margherita Pizza",
        desc: "Classic pizza topped with fresh basil, mozzarella, and tomato.",
        price: "$12.00",
        category: "Pizza",
        tags: [
            { name: "Vegetarian" },
            { name: "Cheese" }
        ],
    },
    {
        id: 10,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Chicken Biryani",
        desc: "Fragrant basmati rice layered with spiced chicken and herbs.",
        price: "$13.50",
        category: "Rice",
        tags: [
            { name: "Indian" },
            { name: "Spicy" }
        ],
    },
    {
        id: 11,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Falafel Wrap",
        desc: "Crispy falafels wrapped in pita bread with tahini sauce.",
        price: "$9.99",
        category: "Wraps",
        tags: [
            { name: "Vegan" },
            { name: "Healthy" }
        ],
    },
    {
        id: 12,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Pasta Alfredo",
        desc: "Creamy Alfredo pasta with parmesan cheese and herbs.",
        price: "$12.99",
        category: "Pasta",
        tags: [
            { name: "Italian" },
            { name: "Creamy" }
        ],
    },
    {
        id: 13,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Lamb Kebab Skewers",
        desc: "Chargrilled lamb skewers with spices and herbs.",
        price: "$17.00",
        category: "Grill",
        tags: [
            { name: "BBQ" },
            { name: "Mediterranean" }
        ],
    },
    {
        id: 14,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Shrimp Pad Thai",
        desc: "Stir-fried rice noodles with shrimp, peanuts, and lime.",
        price: "$15.99",
        category: "Asian",
        tags: [
            { name: "Thai" },
            { name: "Seafood" }
        ],
    },
    {
        id: 15,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Caesar Salad",
        desc: "Fresh romaine lettuce, croutons, and Caesar dressing.",
        price: "$8.50",
        category: "Salads",
        tags: [
            { name: "Healthy" },
            { name: "Vegetarian" }
        ],
    },
    {
        id: 16,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Tandoori Chicken",
        desc: "Spicy grilled chicken marinated in yogurt and Indian spices.",
        price: "$14.25",
        category: "Curry",
        tags: [
            { name: "Indian" },
            { name: "Spicy" }
        ],
    },
    {
        id: 17,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Fish Tacos",
        desc: "Crispy battered fish with fresh slaw in soft tacos.",
        price: "$11.50",
        category: "Tacos",
        tags: [
            { name: "Seafood" },
            { name: "Mexican" }
        ],
    },
    {
        id: 18,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Chocolate Lava Cake",
        desc: "Rich chocolate cake with gooey molten center.",
        price: "$7.99",
        category: "Dessert",
        tags: [
            { name: "Sweet" },
            { name: "Chocolate" }
        ],
    },
    {
        id: 19,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Greek Gyro",
        desc: "Pita wrap with seasoned meat, tzatziki, and veggies.",
        price: "$10.75",
        category: "Wraps",
        tags: [
            { name: "Greek" },
            { name: "Fast Food" }
        ],
    },
    {
        id: 20,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Miso Ramen",
        desc: "Japanese ramen with miso broth, noodles, and toppings.",
        price: "$13.25",
        category: "Asian",
        tags: [
            { name: "Japanese" },
            { name: "Soup" }
        ],
    },
    {
        id: 21,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Veggie Stir Fry",
        desc: "Colorful mix of vegetables stir-fried with soy sauce.",
        price: "$10.00",
        category: "Asian",
        tags: [
            { name: "Vegetarian" },
            { name: "Vegan" }
        ],
    },
    {
        id: 22,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Cheese Nachos",
        desc: "Crispy nachos topped with melted cheese and salsa.",
        price: "$9.00",
        category: "Snacks",
        tags: [
            { name: "Mexican" },
            { name: "Cheesy" }
        ],
    },
    {
        id: 23,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Avocado Toast",
        desc: "Toasted bread topped with smashed avocado and seasonings.",
        price: "$6.50",
        category: "Breakfast",
        tags: [
            { name: "Vegan" },
            { name: "Healthy" }
        ],
    },
    {
        id: 24,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Pancake Stack",
        desc: "Fluffy pancakes served with syrup and berries.",
        price: "$8.25",
        category: "Breakfast",
        tags: [
            { name: "Sweet" },
            { name: "Dessert" }
        ],
    },
    {
        id: 25,
        image: "https://wallpapercave.com/wp/wp9628109.jpg",
        name: "Stuffed Burrito",
        desc: "Mexican burrito stuffed with rice, beans, and meat.",
        price: "$11.75",
        category: "Mexican",
        tags: [
            { name: "Spicy" },
            { name: "Filling" }
        ],
    },
];

export default meals;
