# Naskah Presentasi PAB-1

Sepuluh slide dengan alur kebutuhan, solusi, perjalanan, gangguan, bukti, dan keputusan. Pembagian pembicara merupakan usulan. Seluruh skenario bersifat akademik.

## Slide 1 — PAB-1: proyek dan tantangannya

Pembicara: Bagus Suhariadi · 45 detik

**Pertanyaan pembuka:** Bagaimana menyiapkan pilot 500 kW dalam 24 minggu?

Selamat pagi/siang. Kami dari kelompok Bagus, Alonso, Prana, dan Farhan akan membawakan rencana proyek terintegrasi PAB-1 di PORTS–Pike Technology Campus.

Bayangkan empat rak komputasi dengan total kebutuhan IT 500 kilowatt. Rak tersebut baru dapat digunakan apabila daya, pendingin cair, konektivitas, dan sistem pengawasnya siap bersama. Pertanyaan kami adalah: bagaimana menyatukan semuanya dalam 24 minggu?

Presentasi ini akan mengikuti perjalanan proyek, dari menetapkan hasil yang diserahkan sampai menghadapi keterlambatan dan memutuskan kesiapan serah terima. Ini adalah studi kasus akademik; biaya, vendor, dan tanggal mengikuti asumsi laporan.

**Interaksi:** Buka dengan pertanyaan tantangan. Tunjukkan 500 kW dan 24 minggu sebagai benang merah cerita.

**Penghubung:** Kita mulai dari persoalan yang harus diselesaikan.

Sumber: Ringkasan Eksekutif

## Slide 2 — Overview: dari kebutuhan ke keputusan

Pembicara: Bagus Suhariadi · 60 detik

**Pertanyaan pembuka:** Yang harus selesai bersama: fasilitas, pendanaan, orang, dan bukti uji.

Overview proyek kami sederhana: membangun pilot data hall yang siap menerima perangkat komputasi. Tantangannya adalah menyatukan hasil teknis dengan jadwal, pendanaan, tanggung jawab, dan risiko.

Alurnya dimulai dari kebutuhan, lalu dirumuskan menjadi solusi. Sesudah itu kita menentukan urutan pekerjaan dan uang yang diperlukan. Tim serta vendor diberi tanggung jawab, kemudian risikonya diuji sebelum fasilitas diterima.

Lima deliverable tugas besar tetap terhubung di sepanjang cerita: charter menjawab apa dan mengapa, WBS serta Gantt menjawab kapan, analisis biaya menjawab berapa dan layakkah, RACI menjawab siapa, dan risk management menjawab apa yang dapat mengganggu.

Patokannya adalah 500 kilowatt IT, 24 minggu, dan investasi awal 4,704 juta dolar. Pada akhir presentasi kita akan menilai kapan rencana ini pantas dilanjutkan.

**Interaksi:** Ikuti jalur visual dari kiri ke kanan. Pilihan di peta dapat digunakan untuk kembali ke materi saat diskusi.

**Penghubung:** Pertama, tentukan fasilitas seperti apa yang benar-benar kita serahkan.

Sumber: Ringkasan Eksekutif; panduan tugas besar

## Slide 3 — Solusi: sistem dan hasil yang diserahkan

Pembicara: Bagus Suhariadi · 90 detik

**Pertanyaan pembuka:** Satu sistem belum siap, fasilitas belum siap diterima.

Solusi PAB-1 adalah fasilitas modular untuk empat rak, masing-masing 125 kilowatt. Kita menyediakan infrastrukturnya, sedangkan GPU dan server berada di luar lingkup proyek.

Mari ikuti hubungan sistemnya. Daya memasok rak melalui switchgear, UPS, PDU, dan genset. Pendinginan cair mengeluarkan panas melalui CDU, loop, dan chiller. Dua rute fiber menyediakan konektivitas; BMS/DCIM dan sistem keamanan membantu pengawasan.

Klik salah satu sistem untuk melihat fungsi, pemilik, dan bukti penerimaannya. Redundansi N+1 pada UPS serta pompa/CDU harus dibuktikan melalui pengujian. Target PUE desain 1,25 mengindikasikan kebutuhan daya fasilitas sekitar 625 kilowatt pada beban IT 500 kilowatt.

Batas berhasilnya mencakup uji beban penuh empat jam, izin lengkap, penutupan punch list kritis, dokumen as-built, dan pelatihan. Jalan akses, tapak, daya kampus, serta izin bertahap merupakan prasyarat yang harus dikonfirmasi.

**Interaksi:** Pilih Daya, Pendingin, lalu Fiber untuk menjelaskan hubungan fungsi dan bukti. Detail charter tersedia pada tab target.

**Penghubung:** Setelah hasilnya jelas, kita susun urutan agar semua sistem siap tepat waktu.

Sumber: §1.1–1.4

## Slide 4 — Perjalanan 24 minggu dan jalur kritis

Pembicara: Alonso Elmoriza Avatara · 100 detik

**Pertanyaan pembuka:** Mengapa pekerjaan paralel tetap memiliki satu titik tunggu?

Perjalanan dimulai dari charter, survei, dan pembekuan Basis of Design serta antarmuka pada W7. Kontrak utama kemudian memungkinkan dua cabang pekerjaan berjalan paralel.

Cabang pertama adalah peralatan M&E dari V3: fabrikasi dan pengiriman berlangsung W10 sampai W17. Cabang kedua adalah modul V1: fabrikasi W10 sampai W15, kemudian pengiriman dan pemasangan W16 sampai W17. Kedua cabang harus siap pada akhir W17.

Instalasi dimulai W18 sampai W20, SAT W21 sampai W22, IST serta inspeksi akhir W23, dan serah terima W24 atau 18 Juni 2027. Putar alur untuk melihat hubungan tersebut secara bertahap.

W26 adalah toleransi dengan persetujuan. Jika M&E terlambat satu minggu, serah terima menjadi W25. Jika M&E terlambat satu minggu dan modul dua minggu, keterlambatan paralel ditentukan cabang terlama. Tetapi tambahan durasi IST sesudah konvergensi menambah keterlambatan berikutnya.

**Interaksi:** Putar alur lalu berhenti di W17. Gunakan tab Simulasi untuk membuktikan perbedaan keterlambatan paralel dan berurutan.

**Penghubung:** Ketika urutan pekerjaan sudah terlihat, kapan dan untuk apa uang harus tersedia?

Sumber: §2.1–2.7

## Slide 5 — Alur biaya, cadangan, dan pendanaan

Pembicara: Alonso Elmoriza Avatara · 90 detik

**Pertanyaan pembuka:** Anggaran total cukup belum berarti dana tersedia saat dibutuhkan.

Dana awal 4,704 juta dolar dibagi menjadi tiga fungsi: CAPEX langsung 3,860 juta, biaya pelaksanaan proyek 458 ribu, dan kontingensi 386 ribu dolar. Kontingensi merupakan cadangan yang penggunaannya memerlukan persetujuan.

Modul, peralatan daya, dan pendinginan menyerap 69,9 persen CAPEX langsung. Ini menjelaskan mengapa kontrak dan kesiapan vendor perlu dipantau ketat.

Sekarang uji cadangan: kenaikan CAPEX langsung 5 persen memerlukan 193 ribu dolar; kenaikan 10 persen menghabiskan seluruh kontingensi; kenaikan 15 persen menimbulkan kekurangan 193 ribu dolar dengan OPEX proyek tetap.

Arus kas juga penting. Kebutuhan terbesar terjadi pada B5, yaitu W17 sampai W20, sebesar 1,4936 juta dolar. Dana harus siap saat peralatan tiba dan pembayaran konstruksi jatuh tempo. B1 sampai B6 adalah periode empat minggu, bukan bulan kalender.

**Interaksi:** Pilih +5%, +10%, lalu +15% untuk menunjukkan batas cadangan. Buka Arus kas untuk menghubungkannya dengan W17.

**Penghubung:** Biaya membangun sudah dihitung. Apakah operasi fasilitas dapat mengembalikannya?

Sumber: §3.1–3.4, §3.8–3.9

## Slide 6 — Dari pendapatan ke keputusan investasi

Pembicara: Prana Wildan Fauzan · 100 detik

**Pertanyaan pembuka:** NPV positif harus dibaca bersama ketahanan terhadap perubahan.

Pendapatan penuh berasal dari 500 kilowatt dikali tarif 220 dolar per kilowatt per bulan selama 12 bulan. Hasilnya 1,32 juta dolar per tahun. Setelah OPEX operasi 430 ribu dolar, arus kas tahunan normal menjadi 890 ribu dolar.

Tahun pertama memakai utilisasi 80 persen. Pada tahun keenam ada reinvestasi 180 ribu dolar. Dengan investasi awal 4,704 juta dolar, horizon sepuluh tahun, dan diskonto 10 persen, NPV dasar sekitar positif 423 ribu dolar, IRR 11,99 persen, dan payback sederhana 5,73 tahun.

Sekarang kita ubah ceritanya. Ketika pendapatan turun 5 persen dengan CAPEX tetap, NPV masih positif sekitar 29,5 ribu dolar. Jika CAPEX total juga naik 5 persen, NPV menjadi negatif sekitar 182,8 ribu dolar. Kelayakan dapat berubah karena dua asumsi bergerak bersama.

Kesimpulannya adalah lanjut bersyarat: validasi kapasitas berbayar, tarif, OPEX, dan CAPEX sebelum komitmen besar. Model ini sebelum pajak, tanpa utang, inflasi, atau nilai sisa; listrik diteruskan ke tenant.

**Interaksi:** Tampilkan tiga skenario berurutan. Tanyakan kepada audiens apakah skenario gabungan masih layak, lalu tampilkan NPV.

**Penghubung:** Rencana yang layak masih membutuhkan orang yang tepat untuk menjalankannya.

Sumber: §3.5–3.7, §3.10

## Slide 7 — Alur tanggung jawab tim dan vendor

Pembicara: Prana Wildan Fauzan · 90 detik

**Pertanyaan pembuka:** Satu hasil punya satu A, meskipun pelaksananya lebih dari satu.

Tim internal proyek terdiri atas enam fungsi, berbeda dari empat mahasiswa penyusun tugas. PM mengintegrasikan ME, CM, NW, PC, dan HSE. Empat vendor menyediakan EPC, konsultasi, M&E, dan fiber.

Kita lihat tanggung jawab sebagai alur. Pada instalasi daya dan pendingin, V1 serta V3 menjalankan pekerjaan, ME memegang akuntabilitas teknis, CM mengoordinasikan lapangan, dan PM mengintegrasikan dampaknya ke baseline. Penanggung jawab akhir tidak hilang walaupun pelaksananya beberapa pihak.

Pilih paket kerja lain untuk melihat perpindahan akuntabilitas. Charter dan serah terima memiliki A pada sponsor; pondasi serta pemasangan modul pada CM; fiber pada NW.

Beban puncak tim terjadi pada B3: 22 dari 24 minggu-orang atau 91,7 persen. Pada W18 sampai W20, ME penuh dan harus menangani daya serta pendingin paralel. Dukungan engineer V3 dan V2 harus dikonfirmasi; sisa kapasitas NW tidak otomatis menggantikan keahlian M&E.

**Interaksi:** Mulai pada paket Instalasi. Tunjukkan R dan A, lalu buka kapasitas untuk menghubungkan orang dengan titik W17–W20.

**Penghubung:** Tim dan tanggung jawab sudah ditetapkan. Sekarang kita uji ketika jadwal terganggu.

Sumber: §4–4.4; §3.3

## Slide 8 — Skenario gangguan dan keputusan tim

Pembicara: Farhan Taufik Qurrohim · 100 detik

**Pertanyaan pembuka:** Ini simulasi dari laporan, bukan kejadian aktual.

Mari masuk ke skenario. Peralatan M&E tiba satu minggu lebih lambat dari target akhir W17. Apa yang bergerak setelah itu? Instalasi mulai W19 dan serah terima bergeser ke W25. Satu minggu cadangan jadwal terpakai.

Langkah awalnya adalah meminta bukti progres dan sisa durasi dari V3, kemudian ME, PC, dan PM menilai opsi pemulihan, dampak biaya, serta jaringan jadwal. Mengubah anggaran tanpa estimasi belum menyelesaikan masalah.

Kasus kedua adalah izin pondasi baru tersedia pada awal W14. Pekerjaan yang memerlukan izin harus ditahan. Berdasarkan simulasi, serah terima juga bergeser ke W25. Jadwal tidak dapat dipulihkan dengan mengabaikan izin.

Dua risiko ini memiliki skor inheren tertinggi, masing-masing 20. Peta, fishbone, Pareto, dan 5 Whys membantu menjelaskan prioritas serta akar sebab. Skenario dan hipotesis harus ditindaklanjuti dengan bukti.

**Interaksi:** Minta audiens memilih respons awal. Buka dampak dan keputusan; bandingkan R01 dengan R02.

**Penghubung:** Jadwal yang dipulihkan tetap harus melewati bukti mutu sebelum serah terima.

Sumber: §2.7; §5.1–5.7

## Slide 9 — Alur pembuktian mutu dan pengendalian

Pembicara: Farhan Taufik Qurrohim · 100 detik

**Pertanyaan pembuka:** Tanggal selesai mengikuti hasil uji dan penerimaan yang dipersyaratkan.

Alur pembuktian dimulai dari FAT di pabrik sebelum pengiriman, SAT setiap sistem pada W21 sampai W22, kemudian IST serta load bank pada W23. Serah terima ditargetkan W24 setelah bukti lengkap.

Pada simulasi gate ini, periksa tiga kelompok bukti: SAT diterima, IST dan uji beban penuh empat jam lulus, serta dokumen dan penutupan punch list kritis lengkap. Centang hanya sebagai demonstrasi persyaratan, bukan sebagai hasil uji aktual.

Pengendalian juga dimulai sebelum commissioning. Simulasi EVM W16 memberi SPI 0,929 dan CPI 0,938, keduanya di bawah ambang 0,95. Artinya tim perlu memeriksa nilai pekerjaan, biaya, sisa durasi, dan rencana koreksi.

Jika perubahan memengaruhi baseline, dampak pada lingkup, jadwal, biaya, sumber daya, dan risiko harus dinilai bersama. Skenario W27 memerlukan keputusan sponsor. Setelah disetujui, seluruh dokumen terkait diperbarui.

**Interaksi:** Tunjukkan status belum siap, kemudian lengkapi tiga bukti simulasi. EVM dan change request tersedia untuk penjelasan lanjutan.

**Penghubung:** Dengan bukti tersebut, kita kembali ke keputusan awal: layak dilanjutkan atau belum?

Sumber: §5.7–5.9; §2.7

## Slide 10 — Kesimpulan, keputusan, dan diskusi

Pembicara: Farhan Taufik Qurrohim · 60 detik

**Pertanyaan pembuka:** Lindungi W17. Buktikan kesiapan W24. Replikasi setelah evaluasi.

Kita kembali ke pertanyaan pembuka: bagaimana menyiapkan pilot 500 kilowatt dalam 24 minggu? Jawabannya adalah menyatukan definisi hasil, dua jalur pasokan, kesiapan dana, akuntabilitas, dan bukti pengujian dalam satu baseline.

Keputusan kami adalah lanjut bersyarat. Pastikan akses serta izin dan daya kampus, dapatkan bukti slot produksi, bekukan antarmuka W7, lalu validasi tarif, kapasitas berbayar, dan biaya. Prosedur penerimaan harus disepakati sejak awal.

Selama pelaksanaan, lindungi titik temu W17. Pada W24, penerimaan harus didukung hasil uji dan dokumen. Replikasi baru dipertimbangkan setelah data kinerja dan lessons learned pilot diterima sponsor.

Demikian presentasi kami. Terima kasih. Kami siap berdiskusi mengenai jalur kritis, anggaran, kelayakan, dan pilihan respons ketika asumsi berubah.

**Interaksi:** Tutup dengan tiga kalimat W17, W24, dan replikasi. Gunakan G untuk kembali ke materi saat tanya jawab.

**Penghubung:** Terima kasih. Mari berdiskusi tentang asumsi dan keputusan proyek ini.

Sumber: §6; §1.2; §3.7

