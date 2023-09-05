import axios from 'axios';

const instance = axios.create({
  baseURL: `https://pixabay.com/api/`,
  params: {
    key: '31934328-4f49ab69ab8cdfa2acbd8f5df',
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

const response = (search, page) =>
  instance.get('/', {
    params: {
      q: search,
      page,
    },
  });

export default response;
