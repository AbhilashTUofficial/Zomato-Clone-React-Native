
export const initialData = {
    Restaurants: [
        {
            id: 1,
            storeName: 'BnB Mess',
            img: require('../assets/food_items/biryani_item.png'),
            items: 'Fast Food, Burger, Biryani',
            location: 'Sulthan Bathery Locality, Sulthan Bathery',
            travelTime: '40 min',
            distance: '2 km',
            cost: '150 for one',
            ratting: '4.6',
            faved: false,
            tags: ["recommended", "special", "biryani"],

            categories: [
                {
                    title: 'Recommended',
                    items: [
                        {
                            itemId: 701,
                            itemTitle: 'Normal Burger',
                            bestseller: true,
                            itemImg: require('../assets/food_items/biryani_item.png'),
                            veg: false,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            faved: true,
                            onCart: 0,
                        },
                        {
                            itemId: 702,
                            itemTitle: 'Vegitable Burger',
                            bestseller: true,
                            itemImg: require('../assets/food_items/biryani_item.png'),
                            veg: true,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            faved: false,
                            onCart: 0,
                        },
                        {
                            itemId: 709,
                            itemTitle: 'Cheesefries',
                            bestseller: true,
                            itemImg: require('../assets/food_items/cheesefries_item.png'),
                            veg: false,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            faved: false,
                            onCart: 0,
                        },
                    ],
                },
                {
                    title: 'Special',
                    items: [
                        {
                            itemId: 703,
                            itemTitle: 'Chicken Burger Combo',
                            bestseller: false,
                            itemImg: require('../assets/food_items/biryani_item.png'),
                            veg: false,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            faved: false,
                            onCart: 0,
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            storeName: 'KFC',
            img: require('../assets/food_items/burger_item.png'),
            items: 'Burger, Pizza, French fries',
            location: 'Sulthan Bathery Locality, Sulthan Bathery',
            travelTime: '40 min',
            distance: '2 km',
            cost: '150 for one',
            ratting: '3.8',
            faved: false,
            tags: ["recommended", "special"],

            categories: [
                {
                    title: 'Recommended',
                    items: [
                        {
                            itemId: 704,
                            itemTitle: 'Chicken Burger Combo',
                            bestseller: true,
                            itemImg: require('../assets/food_items/burger_item.png'),
                            veg: false,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            onCart: 0,
                        },
                        {
                            itemId: 705,
                            itemTitle: 'Vegitable Pizza',
                            bestseller: true,
                            itemImg: require('../assets/food_items/soup_item.png'),
                            veg: true,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            onCart: 0,
                        },
                        {
                            itemId: 706,
                            itemTitle: 'Chicken Burger Combo',
                            bestseller: true,
                            itemImg: require('../assets/food_items/biryani_item.png'),
                            veg: false,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            onCart: 0,
                        },
                    ],
                },
                {
                    title: 'Special',
                    items: [
                        {
                            itemId: 707,
                            itemTitle: 'Chicken Burger Combo',
                            bestseller: false,
                            itemImg: require('../assets/food_items/biryani_item.png'),
                            veg: false,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            onCart: 0,
                        },
                    ],
                },
                {
                    title: 'Winter Special',
                    items: [
                        {
                            itemId: 708,
                            itemTitle: 'Chicken Burger Combo',
                            bestseller: false,
                            itemImg: require('../assets/food_items/biryani_item.png'),
                            veg: false,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            onCart: 0,
                        },
                    ],
                },
            ],
        },
        {
            id: 3,
            storeName: 'Star Kitchen',
            img: require('../assets/food_items/cheesefries_item.png'),
            items: 'Fast Food, Burger, Biryani',
            location: 'Sulthan Bathery Locality, Sulthan Bathery',
            travelTime: '40 min',
            distance: '2 km',
            cost: '150 for one',
            ratting: '4.0',
            tags: ["recommended"],
            categories: [
                {
                    title: 'Recommeded',
                    items: [
                        {
                            itemId: 710,
                            itemTitle: 'Cheesefries',
                            bestseller: true,
                            itemImg: require('../assets/food_items/cheesefries_item.png'),
                            veg: false,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            faved: false,
                            onCart: 0,
                        },
                    ],
                },
            ],
            faved: false,
        },
        {
            id: 4,
            storeName: 'Chicking',
            img: require('../assets/food_items/chickencurry_item.png'),
            items: 'South Indian',
            location: 'Sulthan Bathery Locality, Sulthan Bathery',
            travelTime: '40 min',
            distance: '2 km',
            cost: '150 for one',
            ratting: '4.2',
            tags: ["recommended", "biryani"],
            categories: [
                {
                    title: 'Recommeded',
                    items: [
                        {
                            itemId: 711,
                            itemTitle: 'Soup',
                            bestseller: true,
                            itemImg: require('../assets/food_items/soup_item.png'),
                            veg: false,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            faved: false,
                            onCart: 0,
                        },
                    ],
                },
                {
                    title: 'Biryani',
                    items: [
                        {
                            itemId: 711,
                            itemTitle: 'Normal Biryani',
                            bestseller: true,
                            itemImg: require('../assets/food_items/biryani_item.png'),
                            veg: false,
                            itemPrice: '₹ 250',
                            itemDescription:
                                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
                            faved: false,
                            onCart: 0,
                        },
                    ],
                },
            ],
            faved: false,
        },
        {
            id: 5,
            storeName: 'Biriyani Hut',
            img: require('../assets/food_items/soup_item.png'),
            items: 'Fast Food, Burger, Biryani',
            location: 'Sulthan Bathery Locality, Sulthan Bathery',
            travelTime: '40 min',
            distance: '2 km',
            cost: '150 for one',
            ratting: '2.6',
            tags: [],
            categories: [],
            faved: false,
        },
    ],

    currentRest: {
        id: 0
    },
    cart: {
        metaData: {
            storeName: null,
            itemCount: null,
            totalPrice: null,

        },
        items: null
    }
};