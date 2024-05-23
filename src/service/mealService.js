

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


export const checkout = async (items, customer) => {
    const resulat = await fetch(`http://localhost:3000/orders`, {
        method: 'POST',
        body: JSON.stringify({
            order: {
                items,
                customer
            }
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const meal = await resulat.json()
    return meal
}