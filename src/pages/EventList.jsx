import { useEffect, useState } from 'react';
import { getEvents } from '../services/api';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getEvents()
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-20 font-semibold">Memuat Daftar Event...</div>;
  if (error) return <div className="text-center mt-20 text-red-500 font-semibold">Gagal mengambil data event.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {events.map((event) => (
        <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
          <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg capitalize line-clamp-1">{event.title}</h3>
            <p className="text-blue-600 text-sm font-medium mb-4">{event.date}</p>
            <Link to={`/event/${event.id}`} className="block text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              Lihat Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;