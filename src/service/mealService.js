

export const getMeals = async () => {
    const resulat = await fetch('http://localhost:3000/meals');
    const meals = await resulat.json()
    return meals
}


export const getMealById = async (id) => {
    const resulat = await fetch(`http://localhost:3000/meals/${id}`);
    const meal = await resulat.json()
    return meal
}


export const addMealToCart = async (id) => {
    const resulat = await fetch(`http://localhost:3000/orders`);
    const meal = await resulat.json()
    return meal
}