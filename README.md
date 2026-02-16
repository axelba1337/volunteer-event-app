# 📝 Volunteer Event App - Frontend Assignment

Aplikasi sederhana untuk menampilkan daftar kegiatan relawan (Volunteer Events) dan pendaftaran event, dibangun menggunakan **React.js** dan **Tailwind CSS**.

## 🚀 Live Demo
[KUNJUNGI LIVE DEMO DISINI](https://axelba1337.github.io/volunteer-event-app/)

## 🛠️ Stack yang Digunakan
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS (Versi 3)
- **Routing:** React Router DOM (HashRouter untuk kompatibilitas GitHub Pages)
- **HTTP Client:** Axios
- **Icons & Images:** Lorem Picsum (Mock images)

## 💻 Cara Menjalankan Project

1. **Clone Repository**
   ```bash
   git clone https://github.com/axelba1337/volunteer-event-app.git
   cd volunteer-event-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Running di Local**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173` di browser Anda.

4. **Build untuk Produksi**
   ```bash
   npm run build
   ```

## 📂 Struktur Folder Singkat
```text
root/
├── public/              # Statis file (logo, icon)
├── src/
│   ├── assets/          # File gambar/aset pendukung
│   ├── pages/           # Halaman Utama (EventList & EventDetail)
│   ├── services/        # Logika API Fetching & Axios instance
│   ├── App.jsx          # Root component & Routing configuration
│   ├── main.jsx         # Entry point React
│   └── index.css        # Konfigurasi Tailwind & Global style
├── package.json         # Scripts & Dependencies
├── tailwind.config.js   # Konfigurasi Tema Tailwind
└── vite.config.js       # Konfigurasi Build & Deployment
```

---

## ❓ Jawaban Pertanyaan Wajib

### 1. Bagian tersulit apa dari sisi frontend?
Menangani logika UX untuk situasi yang berlangsung secara asynchronous adalah bagian yang paling sulit. Situasi seperti ini termasuk saat API memuat data atau saat API gagal mengembalikan data. Meskipun aplikasi terlihat sederhana, mengelola state management dengan cermat diperlukan untuk menghindari layar putih kosong atau tombol yang sering diklik.

### 2. Jika diberi waktu 1 minggu, apa yang akan kamu tingkatkan?
- **Global State Management:** Menggunakan Context API atau Redux untuk mengelola data user atau event favorit tanpa perlu re-fetching.
- **Filter & Search:** Menambahkan fitur pencarian judul event dan filter berdasarkan kategori atau tanggal.
- **Skeleton Loading:** Mengganti teks "Loading..." sederhana dengan *Skeleton Screen* agar UI terasa lebih premium.

### 3. Asumsi UX apa yang kamu ambil?
- **Mobile First:** Diasumsikan sebagian besar pengguna mencari kegiatan volunteer melalui HP, sehingga desain dibuat sangat responsif.
- **Visual Feedback:** Saya berasumsi pengguna membutuhkan feedback instan. Oleh karena itu, saat tombol "Join" diklik, tombol tersebut berubah menjadi *Disabled* dan muncul *Alert/Toast* agar pengguna tahu proses berhasil.
- **Informasi Minimalis:** Fokus utama pada Judul dan Tanggal di halaman depan agar pengguna tidak teralihkan oleh terlalu banyak informasi teks (Fokus pada keterbacaan/readability).
- **Navigation Safety:** Menggunakan `HashRouter` untuk memastikan navigasi tetap lancar dan tidak terjadi error 404 saat pengguna me-refresh halaman di hosting statis seperti GitHub Pages.

---

- **Developer:** Axel Belliandri
