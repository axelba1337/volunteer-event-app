import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEventDetail } from '../services/api';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    getEventDetail(id).then(data => {
      setEvent(data);
      setLoading(false);
    });
  }, [id]);

  const handleJoin = () => {
    // Simulasi klik button join
    setJoined(true);
    alert('Sukses mendaftar sebagai Volunteer!');
  };

  if (loading) return <div className="text-center mt-20 font-semibold">Memuat Detail...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-sm mt-10">
      <Link to="/" className="text-blue-600 mb-4 inline-block">← Kembali ke List</Link>
      <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold capitalize mb-2">{event.title}</h1>
      <p className="text-blue-600 font-semibold mb-4 italic">{event.date}</p>
      <p className="text-gray-600 leading-relaxed mb-8">{event.description}</p>
      
      <button 
        onClick={handleJoin}
        disabled={joined}
        className={`w-full py-4 rounded-xl font-bold text-lg transition ${
          joined ? 'bg-green-100 text-green-700 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
        }`}
      >
        {joined ? 'Anda Sudah Bergabung ✓' : 'Gabung Volunteer Sekarang'}
      </button>
    </div>
  );
};

export default EventDetail;