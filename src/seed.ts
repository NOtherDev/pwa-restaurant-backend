import Dish from './entity/Dish'

export function getDishes() {
    return [
        new Dish("Spaghetti Bolognese", "Pastas", 25,
            'https://www.publicdomainpictures.net/pictures/240000/nahled/spaghetti-bolognese-bowl.jpg'),
        new Dish("Spaghetti alla Carbonara", "Pastas", 20,
            'https://live.staticflickr.com/6055/6302915547_8e6a0c38e9_b.jpg'),
        new Dish("Lasagne", "Pastas", 30,
            'https://upload.wikimedia.org/wikipedia/commons/a/ae/Lasagna.jpg'),

        new Dish("Calabrian Chicken", "Main dishes", 35,
            'https://live.staticflickr.com/4066/4504495971_053b45cfbd.jpg'),
        new Dish("Aubergine Parmigiana", "Main dishes", 30,
            'https://cdn.pixabay.com/photo/2015/09/03/09/58/eggplant-920269_960_720.jpg'),
        new Dish("Swordfish alla Siciliana", "Main dishes", 60,
            'https://upload.wikimedia.org/wikipedia/commons/e/ef/Swordfish_dish.JPG'),

        new Dish("Green Salad with Parmesan", "Salads", 25,
            'https://cdn.pixabay.com/photo/2016/08/28/18/57/salad-1626621_960_720.jpg'),
        new Dish("Rocket & Radicchio Salad", "Salads", 20,
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/Rocket_%26radicchio_salad.jpg'),

        new Dish("Margherita", "Pizzas", 18,
            'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'),
        new Dish("Capriciosa", "Pizzas", 20,
            'https://cdn.pixabay.com/photo/2018/10/27/14/21/pizza-3776605_640.jpg'),
        new Dish("Quattro Stagioni", "Pizzas", 22,
            'https://upload.wikimedia.org/wikipedia/commons/7/7b/Vegetarian_Four_Seasons_%28Quattro_Stagioni%29_Pizza.jpg'),

        new Dish("Espresso", "Hot Beverages", 6,
            'https://live.staticflickr.com/585/22655259631_697d4585b1_b.jpg'),
        new Dish("Espresso Doppio", "Hot Beverages", 8,
            'https://upload.wikimedia.org/wikipedia/commons/d/d8/Ottimo_espresso_-_sempre_doppio_-_%40_Isso_%C3%89_Caf%C3%A9_no_Mirante_Nove_de_Julho_%2829802117673%29.jpg'),
        new Dish("Americano", "Hot Beverages", 8,
            'https://live.staticflickr.com/3292/2819582675_623d2d39b4_z.jpg'),
        new Dish("Tea", "Hot Beverages", 6,
            'https://images.pexels.com/photos/1448601/tea-drink-herbal-tea-nettle-1448601.jpeg?cs=srgb&dl=aromatic-beverage-clear-1448601.jpg&fm=jpg'),

        new Dish("Chianti", "Wines", 25,
            'https://live.staticflickr.com/4098/4754042451_9db33e9924_b.jpg'),
        new Dish("Lambrusco", "Wines", 22,
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Right_Lambrusco_Grasparossa_di_Castelvetro_Amabile_Terre_Rosse_%286203823188%29.jpg/796px-Right_Lambrusco_Grasparossa_di_Castelvetro_Amabile_Terre_Rosse_%286203823188%29.jpg'),
        new Dish("Amarone", "Wines", 28,
            'https://upload.wikimedia.org/wikipedia/commons/7/7c/A_bottle_of_Amarone_della_Valpolicella.jpg'),
    ]
}