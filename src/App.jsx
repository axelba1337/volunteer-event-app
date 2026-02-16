import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventList from './pages/EventList';
import EventDetail from './pages/EventDetail';

function App() {
  return (
    // Gunakan HashRouter agar aman saat di-deploy ke GitHub Pages (menghindari error 404 saat refresh)
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        
        {/* HEADER / NAVIGATION BAR */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
            {/* Logo atau Nama Aplikasi */}
            <Link to="/" className="text-2xl font-black text-blue-600 tracking-tight hover:opacity-80 transition">
              VOLUN<span className="text-slate-800">TREE.</span>
            </Link>

            {/* Keterangan Tugas (Opsional) */}
            <div className="hidden md:block">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                Frontend Internship Assignment
              </span>
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            {/* Halaman List Event */}
            <Route path="/" element={<EventList />} />
            
            {/* Halaman Detail Event berdasarkan ID */}
            <Route path="/event/:id" element={<EventDetail />} />
          </Routes>
        </main>

        {/* FOOTER SEDERHANA */}
        <footer className="border-t border-slate-200 bg-white py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-slate-500 text-sm">
            <p>© 2024 Volunteer Portal. Built with React & Tailwind CSS.</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;