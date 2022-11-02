const categories = [
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
];

export default (state = categories, action) => {
  switch (action.type) {
    case 'add_item':
      return addItem(state, action);
    case 'remove_item':
      return removeItem(state, action);
    case 'fav_item':
      return favItem(state, action);
    default:
      return state;
  }
};

//! Functions

const addItem = (state, action) => {
  const category = action.category;
  const itemName = action.itemName;
  state.map(cat => {
    // console.log('All Items');
    // console.log(cat); //all items
    if (cat.title == category) {
      // console.log('Category Items');
      const items = cat.items;
      // console.log(items); // selected category items
      items.map(item => {
        // console.log('Item');
        // console.log(item); // items in selected category.
        if (item.itemTitle == itemName) {
          item.addedToCart = item.addedToCart + 1;
        }
      });
    }
  });

  return [...state];
};

const removeItem = (state, action) => {
  const category = action.category;
  const itemName = action.itemName;
  state.map(cat => {
    // console.log('All Items');
    // console.log(cat); //all items
    if (cat.title == category) {
      // console.log('Category Items');
      const items = cat.items;
      // console.log(items); // selected category items
      items.map(item => {
        // console.log('Item');
        // console.log(item); // items in selected category.
        if (item.itemTitle == itemName) {
          item.addedToCart = item.addedToCart - 1;
        }
      });
    }
  });

  return [...state];
};

const favItem = (state, action) => {
  const category = action.category;
  const itemName = action.itemName;
  state.map(cat => {
    // console.log('All Items');
    // console.log(cat); //all items
    if (cat.title == category) {
      // console.log('Category Items');
      const items = cat.items;
      // console.log(items); // selected category items
      items.map(item => {
        // console.log('Item');
        // console.log(item); // items in selected category.
        if (item.itemTitle == itemName) {
          item.faved = !item.faved;
        }
      });
    }
  });

  return [...state];
};
