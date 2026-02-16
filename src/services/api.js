import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getEvents = async () => {
  // Kita ambil 12 post pertama dan kita anggap sebagai 'Event'
  const response = await axios.get(`${API_BASE_URL}/posts?_limit=12`);
  return response.data.map(item => ({
    id: item.id,
    title: item.title,
    date: '12 Desember 2024', // Dummy date
    image: `https://picsum.photos/seed/${item.id}/400/250`, // Gambar random
    description: item.body
  }));
};

export const getEventDetail = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
  return {
    id: response.data.id,
    title: response.data.title,
    date: '12 Desember 2024',
    description: response.data.body,
    image: `https://picsum.photos/seed/${response.data.id}/600/400`
  };
};