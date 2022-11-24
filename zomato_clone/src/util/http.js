import axios from 'axios';

export function updateData(data) {
  axios.post(
    'https://zomato-clone-708ac-default-rtdb.asia-southeast1.firebasedatabase.app/ResturantsList.json',
    data,
  );
}
