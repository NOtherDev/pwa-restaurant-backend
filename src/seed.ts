import Dish from './entity/Dish'

export function getDishes() {
    return [
        new Dish("Steak", "Main dishes", 60),
        new Dish("Fish & Chips", "Main dishes", 30),
        new Dish("Beef Burger", "Main dishes", 35),
        new Dish("Spaghetti Bolognese", "Pastas", 25),
        new Dish("Spaghetti alla Carbonara", "Pastas", 20),
        new Dish("Lasagne", "Pastas", 30),
        new Dish("Greek Salad", "Salads", 60),
        new Dish("Halloumi Salad", "Salads", 60),
        new Dish("Margherita", "Pizzas", 18),
        new Dish("Capriciosa", "Pizzas", 20),
        new Dish("Quattro Stagioni", "Pizzas", 22),
        new Dish("Espresso", "Hot Beverages", 6),
        new Dish("Espresso Doppio", "Hot Beverages", 8),
        new Dish("Americano", "Hot Beverages", 8),
        new Dish("Tea", "Hot Beverages", 6),
        new Dish("Chianti", "Wines", 25),
        new Dish("Lambrusco", "Wines", 22),
        new Dish("Amarone", "Wines", 28),
    ]
}