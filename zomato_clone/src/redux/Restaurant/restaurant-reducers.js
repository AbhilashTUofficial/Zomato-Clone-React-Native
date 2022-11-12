import {Restaurants} from '../../model/ResturantsList';

const INITIAL_STATE = {
  Restaurants: [
    {
      id: 1,
      storeName: 'BnB Mess',
      img: require('../../assets/food_items/biryani_item.png'),
      items: 'Fast Food, Burger, Biryani',
      location: 'Sulthan Bathery Locality, Sulthan Bathery',
      travelTime: '40 min',
      distance: '2 km',
      cost: '150 for one',
      ratting: '4.6',
      faved: false,

      categories: [
        {
          title: 'Recommended',
          items: [
            {
              itemTitle: 'Normal Burger',
              bestseller: true,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              faved: true,
              addedToCart: 0,
            },
            {
              itemTitle: 'Vegitable Burger',
              bestseller: true,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: true,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              faved: false,
              addedToCart: 0,
            },
          ],
        },
        {
          title: 'Special',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: false,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              faved: false,
              addedToCart: 0,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      storeName: 'KFC',
      img: require('../../assets/food_items/burger_item.png'),
      items: 'Burger, Pizza, French fries',
      location: 'Sulthan Bathery Locality, Sulthan Bathery',
      travelTime: '40 min',
      distance: '2 km',
      cost: '150 for one',
      ratting: '3.8',
      faved: false,

      categories: [
        {
          title: 'Recommended',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: true,
              itemImg: require('../../assets/food_items/burger_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
            {
              itemTitle: 'Vegitable Pizza',
              bestseller: true,
              itemImg: require('../../assets/food_items/soup_item.png'),
              veg: true,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
            },
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: true,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
          ],
        },
        {
          title: 'Special',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: false,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
          ],
        },
        {
          title: 'Winter Special',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: false,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      storeName: 'Star Kitchen',
      img: require('../../assets/food_items/cheesefries_item.png'),
      items: 'Fast Food, Burger, Biryani',
      location: 'Sulthan Bathery Locality, Sulthan Bathery',
      travelTime: '40 min',
      distance: '2 km',
      cost: '150 for one',
      ratting: '4.0',
      categories: [],
      faved: false,
    },
    {
      id: 4,
      storeName: 'Chicking',
      img: require('../../assets/food_items/chickencurry_item.png'),
      items: 'South Indian',
      location: 'Sulthan Bathery Locality, Sulthan Bathery',
      travelTime: '40 min',
      distance: '2 km',
      cost: '150 for one',
      ratting: '4.2',
      categories: [],
      faved: false,
    },
    {
      id: 5,
      storeName: 'Biriyani Hut',
      img: require('../../assets/food_items/soup_item.png'),
      items: 'Fast Food, Burger, Biryani',
      location: 'Sulthan Bathery Locality, Sulthan Bathery',
      travelTime: '40 min',
      distance: '2 km',
      cost: '150 for one',
      ratting: '2.6',
      categories: [],
      faved: false,
    },
  ],

  Recommended: [
    {
      id: 1,
      storeName: 'BnB Mess',
      img: require('../../assets/food_items/biryani_item.png'),
      items: 'Fast Food, Burger, Biryani',
      location: 'Sulthan Bathery Locality, Sulthan Bathery',
      travelTime: '40 min',
      distance: '2 km',
      cost: '150 for one',
      ratting: '4.6',
      faved: true,
      categories: [
        {
          title: 'Recommended',
          items: [
            {
              itemTitle: 'Normal Burger',
              bestseller: true,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              faved: true,
              addedToCart: 0,
            },
            {
              itemTitle: 'Vegitable Burger',
              bestseller: true,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: true,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              faved: false,
              addedToCart: 0,
            },
          ],
        },
        {
          title: 'Special',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: false,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              faved: false,
              addedToCart: 0,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      storeName: 'KFC',
      img: require('../../assets/food_items/burger_item.png'),
      items: 'Burger, Pizza, French fries',
      location: 'Sulthan Bathery Locality, Sulthan Bathery',
      travelTime: '40 min',
      distance: '2 km',
      cost: '150 for one',
      ratting: '3.8',
      faved: true,

      categories: [
        {
          title: 'Recommended',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: true,
              itemImg: require('../../assets/food_items/burger_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
            {
              itemTitle: 'Vegitable Pizza',
              bestseller: true,
              itemImg: require('../../assets/food_items/soup_item.png'),
              veg: true,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
            },
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: true,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
          ],
        },
        {
          title: 'Special',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: false,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
          ],
        },
        {
          title: 'Winter Special',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: false,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
          ],
        },
      ],
    },
  ],

  Biryani: [
    {
      id: 1,
      storeName: 'BnB Mess',
      img: require('../../assets/food_items/biryani_item.png'),
      items: 'Fast Food, Burger, Biryani',
      location: 'Sulthan Bathery Locality, Sulthan Bathery',
      travelTime: '40 min',
      distance: '2 km',
      cost: '150 for one',
      ratting: '4.6',
      faved: true,

      categories: [
        {
          title: 'Recommended',
          items: [
            {
              itemTitle: 'Normal Burger',
              bestseller: true,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              faved: true,
              addedToCart: 0,
            },
            {
              itemTitle: 'Vegitable Burger',
              bestseller: true,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: true,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              faved: false,
              addedToCart: 0,
            },
          ],
        },
        {
          title: 'Special',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: false,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              faved: false,
              addedToCart: 0,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      storeName: 'KFC',
      img: require('../../assets/food_items/burger_item.png'),
      items: 'Burger, Pizza, French fries',
      location: 'Sulthan Bathery Locality, Sulthan Bathery',
      travelTime: '40 min',
      distance: '2 km',
      cost: '150 for one',
      ratting: '3.8',
      faved: false,

      categories: [
        {
          title: 'Recommended',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: true,
              itemImg: require('../../assets/food_items/burger_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
            {
              itemTitle: 'Vegitable Pizza',
              bestseller: true,
              itemImg: require('../../assets/food_items/soup_item.png'),
              veg: true,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
            },
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: true,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
          ],
        },
        {
          title: 'Special',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: false,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
          ],
        },
        {
          title: 'Winter Special',
          items: [
            {
              itemTitle: 'Chicken Burger Combo',
              bestseller: false,
              itemImg: require('../../assets/food_items/biryani_item.png'),
              veg: false,
              itemPrice: '₹ 250',
              itemDescription:
                'Combo of crispy Veg Patty & a bowl of hot & delicious Maggi[serves 1]',
              addedToCart: 0,
            },
          ],
        },
      ],
    },
  ],
  newData: [],
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
      };

    case 'LIKE_RESTAURANT':
      state.Recommended.map(restaurant => {
        if (restaurant.id === action.payload.id) {
          restaurant.faved = !restaurant.faved;
        }
      });

      return {
        ...state,
      };

    case 'LIKE_ITEM':
      console.log('reducer called');
      state.Restaurants.map(restaurant => {
        if (restaurant.id === action.payload.id) {
          restaurant.categories.map(category => {
            if (category.title === action.payload.category) {
              category.items.map(item => {
                if (item.itemTitle === action.payload.itemName) {
                  item.faved = !item.faved;
                }
              });
            }
          });
        }
      });
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
