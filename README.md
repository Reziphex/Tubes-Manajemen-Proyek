# Presentasi PAB-1 dalam 10 slide

Presentasi web berbahasa Indonesia berdasarkan laporan rencana proyek PORTS–Pike Technology Campus PAB-1. Slide pertama memuat nama proyek dan empat anggota; slide kedua berisi overview.

Semua file, ilustrasi SVG, grafik, dan kode disertakan. Tidak ada API, langganan, font daring, aset berbayar, atau paket npm yang harus dipasang. Presentasi dapat digunakan tanpa internet setelah diekstrak.

## Cara tercepat membuka

1. Ekstrak ZIP ke sebuah folder.
2. Buka `index.html` dengan Opera, Chrome, Edge, atau Firefox.
3. Klik **Presentasikan** untuk menghilangkan panel aplikasi. Tekan **F** untuk layar penuh.

Untuk catatan dua layar, penggunaan localhost di bawah ini disarankan agar komunikasi antardua jendela browser konsisten.

## Menjalankan localhost

Pilih salah satu cara berikut dari folder hasil ekstrak. Tidak perlu menjalankan `npm install`.

Dengan Node.js yang sudah terpasang:

```sh
npm start
```

atau:

```sh
node server.mjs
```

Buka **http://localhost:3000**. Server hanya mendengarkan pada komputer lokal. Hentikan dengan **Ctrl+C** di terminal.

Jika memakai Python yang sudah terpasang:

```sh
python -m http.server 3000 --bind 127.0.0.1
```

Di beberapa komputer Linux/macOS gunakan `python3` sebagai pengganti `python`.

Jika port 3000 dipakai aplikasi lain:

```sh
node server.mjs --port 3001
```

Lalu buka http://localhost:3001.

## Hosting gratis di GitHub Pages

GitHub Pages tersedia untuk repositori publik pada GitHub Free. Repositori dan situs akan dapat dilihat publik. Tidak diperlukan domain berbayar.

1. Buat repositori GitHub **Public**, misalnya `pab1-presentasi`.
2. Unggah **isi folder hasil ekstrak** ke root repositori. Pastikan `index.html`, `styles.css`, `app.js`, `content.js`, dan folder `assets` berada langsung di root. Jangan mengunggah ZIP sebagai satu file dan jangan menaruh situs di dalam folder tambahan.
3. Buka **Settings → Pages** di repositori.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch **main**, folder **/ (root)**, lalu **Save**.
6. Tunggu proses penerbitan selesai. Buka alamat yang ditampilkan GitHub pada halaman Pages.

Semua path aset bersifat relatif sehingga dapat dipakai pada URL repositori GitHub Pages. File `.nojekyll` disertakan untuk menyajikan situs statis apa adanya. Node.js dan Python hanya digunakan untuk server lokal; keduanya tidak dibutuhkan oleh GitHub Pages.

Panduan resmi: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Alur cerita dalam tepat 10 slide

Presentasi mengikuti satu pertanyaan: bagaimana menyiapkan pilot 500 kW IT dalam 24 minggu? Overview tetap di slide kedua. Setiap slide diakhiri penghubung menuju pertanyaan berikutnya.

| Slide | Pertanyaan cerita | Visual dan interaksi |
| --- | --- | --- |
| 1 | Proyek apa yang kita rencanakan? | PAB-1, tantangan 500 kW/24 minggu, nama dan NIM tim |
| 2 | Mengapa integrasi menjadi tantangan? | Peta alur enam pertanyaan yang menghubungkan lima deliverable |
| 3 | Apa yang sebenarnya diserahkan? | Klik daya, pendingin, fiber, dan pengawasan pada skema fasilitas |
| 4 | Mengapa semua cabang harus bertemu di W17? | Putar perjalanan 24 minggu; buka WBS/Gantt dan simulasi |
| 5 | Kapan dan untuk apa dana digunakan? | Aliran investasi ke tiga alokasi; uji cadangan +5%, +10%, +15% |
| 6 | Apakah operasi mengembalikan investasinya? | Alur pendapatan, tiga skenario NPV, grafik dan slider lanjutan |
| 7 | Siapa menjaga setiap hasil? | Alur R → A → hasil per paket; kontrak, RACI, dan kapasitas |
| 8 | Apa keputusan tim jika target W17 terganggu? | Pilih respons pada simulasi R01/R02 dan buka dampak W25 |
| 9 | Bukti apa yang diperlukan sebelum serah terima? | Alur FAT–SAT–IST; demonstrasi tiga syarat gate; EVM dan perubahan |
| 10 | Kapan proyek pantas dilanjutkan? | Prasyarat keputusan dan tiga fokus W17, W24, serta replikasi |

Rincian dibuka dalam tab pada slide yang sama. Jumlah slide tetap sepuluh. Perkiraan durasi 14–18 menit termasuk interaksi singkat.

### Cara membawakan alur

1. Gunakan pertanyaan pada judul sebagai pembuka setiap bagian.
2. Slide 3: pilih satu atau dua sistem untuk menjelaskan fungsi dan bukti penerimaan.
3. Slide 4: pilih **Putar alur**, jeda di W17, lalu hubungkan ke kebutuhan dana B5.
4. Slide 5–6: ubah asumsi bertahap agar audiens melihat batas cadangan dan perubahan keputusan investasi.
5. Slide 7: ikuti siapa yang melaksanakan, siapa yang akuntabel, dan hasil yang dijaga.
6. Slide 8: minta audiens memilih respons awal sebelum dampak dan keputusan dibuka.
7. Slide 9: demonstrasikan bahwa status baru siap diajukan setelah tiga kelompok bukti dilengkapi.
8. Slide 10: kembali ke pertanyaan pembuka dan simpulkan prasyaratnya.

Pilihan respons dan checkbox penerimaan merupakan demonstrasi akademik. Keduanya tidak mencatat keputusan proyek nyata, hasil uji, atau persetujuan sponsor. Skenario keterlambatan berasal dari laporan bagian 2.7.

## Animasi presentasi

Animasi aktif secara otomatis: slide bergeser dan muncul halus, teks serta kartu tampil berurutan, batang Gantt dan grafik tumbuh, garis finansial/Pareto tergambar, serta peta risiko muncul bertahap. Pada sampul, ilustrasi server bergerak perlahan dengan lampu dan aliran garis.

- Tekan **R** untuk memutar ulang animasi pada slide yang sedang ditampilkan.
- Tekan **A** atau tombol **Animasi On/Off** di bagian bawah untuk mengaktifkan atau mematikan gerakan. Pilihan disimpan pada browser jika penyimpanan lokal tersedia.
- Animasi juga tersedia saat mode Presentasikan dan saat membuka tab rincian.
- Setelan **kurangi gerakan / reduced motion** pada perangkat mematikan animasi secara otomatis.
- Animasi hanya mengubah tampilan; angka, perhitungan, jumlah slide, dan naskah tetap.

## Catatan pembicara

- Tekan **N** untuk menampilkan naskah slide saat latihan.
- Tekan **P** atau pilih **Buka jendela presenter** pada panel catatan.
- Letakkan jendela presenter di laptop, sedangkan jendela utama di proyektor. Gunakan mode layar **Extend/Perluas** pada komputer.
- Perpindahan slide serta pilihan tab utama disinkronkan di browser yang sama. Gunakan kedua jendela pada alamat situs dan profil browser yang sama. Izinkan pop-up jika browser memblokir jendela presenter.
- Timer tiap jendela dapat dimulai, dijeda, dan direset sendiri lewat tombol jam. Timer tidak disinkronkan antarjendela.
- Jangan tampilkan panel catatan pada jendela yang diproyeksikan. Mode Presentasikan menutup panel itu sebelum dimulai.

Naskah juga tersedia di `NASKAH_PRESENTASI.md`. Pembagian pembicara merupakan usulan: Bagus slide 1–3, Alonso 4–5, Prana 6–7, Farhan 8–10. Ini dapat disesuaikan.

## Pintasan

| Tombol | Aksi |
| --- | --- |
| Panah kanan / Spasi / Page Down | Slide berikutnya |
| Panah kiri / Page Up | Slide sebelumnya |
| Home / End | Slide pertama / terakhir |
| N | Buka/tutup catatan |
| P | Jendela presenter |
| G | Daftar sepuluh slide |
| F | Layar penuh |
| A | Aktifkan/matikan animasi |
| R | Putar ulang animasi slide ini |
| Esc | Tutup dialog, catatan, atau mode presentasi |

Pintasan perpindahan slide tidak mengambil alih saat slider atau pilihan skenario sedang digunakan. Pada ponsel gunakan tombol panah; geser tabel/Gantt mendatar jika lebih lebar dari layar.

## Mengubah isi dan tampilan

- `content.js`: identitas kelompok, daftar slide, naskah, WBS, risiko, serta data proyek.
- `story.js` dan `story.css`: alur utama, skema sistem, perjalanan, skenario, dan gate demonstrasi.
- `app.js`: navigasi, materi rinci, perhitungan NPV, dan interaksi. Angka ringkasan visual juga ada di file ini; jika data dasar diubah, perbarui ringkasannya secara konsisten.
- `styles.css`: warna, tipografi, tata letak, dan tampilan layar kecil.
- `motion.js` dan `motion.css`: animasi, tombol On/Off, serta pintasan ulang animasi.
- `index.html`: kerangka situs.
- `assets/favicon.svg`: ikon tab.
- `server.mjs`: server lokal opsional tanpa dependensi.

Jika Node.js sudah tersedia, pemeriksaan sintaks dapat dijalankan dengan `npm run check`.

## Sumber dan asumsi

Sumber utama adalah `Laporan_Tugas_Besar_PAB1_Gantt_Clean.docx` yang diberikan pengguna; panduan susunan deliverable berasal dari `4B. Tubes Manpro.pptx.pdf`. Nama dan NIM mengikuti laporan serta foto kelompok. File sumber asli tidak diubah dan tidak disertakan ulang dalam paket ini.

Parameter yang dipertahankan: kapasitas 500 kW IT, baseline W24 / 18 Juni 2027, toleransi W26 / 2 Juli 2027, investasi USD 4.704.000, CAPEX langsung USD 3.860.000, kontingensi USD 386.000, dan OPEX proyek USD 458.000.

Model NPV dihitung dari arus kas laporan, dengan horizon 10 tahun dan diskonto 10%. Perubahan pendapatan memengaruhi PV pendapatan; kenaikan CAPEX diterapkan pada CAPEX total USD 4.246.000. OPEX operasi dan reinvestasi tetap. Baseline NPV ≈ USD 423.059; pendapatan −5% dan CAPEX +5% menghasilkan ≈ −USD 182.782.

Lokasi, organisasi, spesifikasi, biaya, tarif, vendor, dan tanggal merupakan parameter studi akademik, bukan komitmen pembangunan atau desain teknik final. EVM W16 dan seluruh skenario perubahan adalah simulasi. Diagram fishbone merangkum hubungan dari laporan; 5 Whys adalah hipotesis yang harus diuji dengan bukti.

Ilustrasi data hall merupakan gambar konseptual SVG, bukan denah atau desain teknik. Empat mahasiswa penyusun berbeda dari enam fungsi internal proyek yang dimodelkan.
