/* Presentasi PAB-1 dengan alur dari kebutuhan ke keputusan. */
window.PAB = {
  "team": [
    {
      "name": "Bagus Suhariadi",
      "nim": "101072400087",
      "initials": "BS",
      "part": "Pembuka, overview & charter",
      "slides": "01–03"
    },
    {
      "name": "Alonso Elmoriza Avatara",
      "nim": "101072400017",
      "initials": "AE",
      "part": "Jadwal & anggaran",
      "slides": "04–05"
    },
    {
      "name": "Prana Wildan Fauzan",
      "nim": "101072400095",
      "initials": "PW",
      "part": "Kelayakan & sumber daya",
      "slides": "06–07"
    },
    {
      "name": "Farhan Taufik Qurrohim",
      "nim": "101072400111",
      "initials": "FT",
      "part": "Risiko, pengendalian & kesimpulan",
      "slides": "08–10"
    }
  ],
  "chapters": [
    {
      "label": "Proyek & overview",
      "range": "01–02",
      "start": 0,
      "end": 1,
      "icon": "spark"
    },
    {
      "label": "Menetapkan solusi",
      "range": "03",
      "start": 2,
      "end": 2,
      "icon": "target"
    },
    {
      "label": "Jadwal & pendanaan",
      "range": "04–05",
      "start": 3,
      "end": 4,
      "icon": "chart"
    },
    {
      "label": "Kelayakan & orang",
      "range": "06–07",
      "start": 5,
      "end": 6,
      "icon": "people"
    },
    {
      "label": "Gangguan & bukti",
      "range": "08–09",
      "start": 7,
      "end": 8,
      "icon": "shield"
    },
    {
      "label": "Keputusan akhir",
      "range": "10",
      "start": 9,
      "end": 9,
      "icon": "flag"
    }
  ],
  "slides": [
    {
      "id": "cover",
      "title": "PORTS–Pike Technology Campus",
      "short": "PAB-1: proyek dan tantangannya",
      "tag": "RENCANA PROYEK TERINTEGRASI",
      "source": "Ringkasan Eksekutif",
      "duration": "45 detik",
      "notes": [
        "Selamat pagi/siang. Kami dari kelompok Bagus, Alonso, Prana, dan Farhan akan membawakan rencana proyek terintegrasi PAB-1 di PORTS–Pike Technology Campus.",
        "Bayangkan empat rak komputasi dengan total kebutuhan IT 500 kilowatt. Rak tersebut baru dapat digunakan apabila daya, pendingin cair, konektivitas, dan sistem pengawasnya siap bersama. Pertanyaan kami adalah: bagaimana menyatukan semuanya dalam 24 minggu?",
        "Presentasi ini akan mengikuti perjalanan proyek, dari menetapkan hasil yang diserahkan sampai menghadapi keterlambatan dan memutuskan kesiapan serah terima. Ini adalah studi kasus akademik; biaya, vendor, dan tanggal mengikuti asumsi laporan."
      ],
      "cue": "Buka dengan pertanyaan tantangan. Tunjukkan 500 kW dan 24 minggu sebagai benang merah cerita.",
      "hook": "Bagaimana menyiapkan pilot 500 kW dalam 24 minggu?",
      "bridge": "Kita mulai dari persoalan yang harus diselesaikan."
    },
    {
      "id": "overview",
      "title": "Bagaimana 500 kW siap dalam 24 minggu?",
      "short": "Overview: dari kebutuhan ke keputusan",
      "tag": "OVERVIEW / ALUR CERITA",
      "source": "Ringkasan Eksekutif; panduan tugas besar",
      "duration": "60 detik",
      "notes": [
        "Overview proyek kami sederhana: membangun pilot data hall yang siap menerima perangkat komputasi. Tantangannya adalah menyatukan hasil teknis dengan jadwal, pendanaan, tanggung jawab, dan risiko.",
        "Alurnya dimulai dari kebutuhan, lalu dirumuskan menjadi solusi. Sesudah itu kita menentukan urutan pekerjaan dan uang yang diperlukan. Tim serta vendor diberi tanggung jawab, kemudian risikonya diuji sebelum fasilitas diterima.",
        "Lima deliverable tugas besar tetap terhubung di sepanjang cerita: charter menjawab apa dan mengapa, WBS serta Gantt menjawab kapan, analisis biaya menjawab berapa dan layakkah, RACI menjawab siapa, dan risk management menjawab apa yang dapat mengganggu.",
        "Patokannya adalah 500 kilowatt IT, 24 minggu, dan investasi awal 4,704 juta dolar. Pada akhir presentasi kita akan menilai kapan rencana ini pantas dilanjutkan."
      ],
      "cue": "Ikuti jalur visual dari kiri ke kanan. Pilihan di peta dapat digunakan untuk kembali ke materi saat diskusi.",
      "hook": "Yang harus selesai bersama: fasilitas, pendanaan, orang, dan bukti uji.",
      "bridge": "Pertama, tentukan fasilitas seperti apa yang benar-benar kita serahkan."
    },
    {
      "id": "charter",
      "title": "Empat sistem harus bekerja sebagai satu fasilitas.",
      "short": "Solusi: sistem dan hasil yang diserahkan",
      "tag": "01 / MENETAPKAN SOLUSI",
      "source": "§1.1–1.4",
      "duration": "90 detik",
      "notes": [
        "Solusi PAB-1 adalah fasilitas modular untuk empat rak, masing-masing 125 kilowatt. Kita menyediakan infrastrukturnya, sedangkan GPU dan server berada di luar lingkup proyek.",
        "Mari ikuti hubungan sistemnya. Daya memasok rak melalui switchgear, UPS, PDU, dan genset. Pendinginan cair mengeluarkan panas melalui CDU, loop, dan chiller. Dua rute fiber menyediakan konektivitas; BMS/DCIM dan sistem keamanan membantu pengawasan.",
        "Klik salah satu sistem untuk melihat fungsi, pemilik, dan bukti penerimaannya. Redundansi N+1 pada UPS serta pompa/CDU harus dibuktikan melalui pengujian. Target PUE desain 1,25 mengindikasikan kebutuhan daya fasilitas sekitar 625 kilowatt pada beban IT 500 kilowatt.",
        "Batas berhasilnya mencakup uji beban penuh empat jam, izin lengkap, penutupan punch list kritis, dokumen as-built, dan pelatihan. Jalan akses, tapak, daya kampus, serta izin bertahap merupakan prasyarat yang harus dikonfirmasi."
      ],
      "cue": "Pilih Daya, Pendingin, lalu Fiber untuk menjelaskan hubungan fungsi dan bukti. Detail charter tersedia pada tab target.",
      "hook": "Satu sistem belum siap, fasilitas belum siap diterima.",
      "bridge": "Setelah hasilnya jelas, kita susun urutan agar semua sistem siap tepat waktu."
    },
    {
      "id": "schedule",
      "title": "Semua cabang harus bertemu di W17.",
      "short": "Perjalanan 24 minggu dan jalur kritis",
      "tag": "02 / PERJALANAN PROYEK",
      "source": "§2.1–2.7",
      "duration": "100 detik",
      "notes": [
        "Perjalanan dimulai dari charter, survei, dan pembekuan Basis of Design serta antarmuka pada W7. Kontrak utama kemudian memungkinkan dua cabang pekerjaan berjalan paralel.",
        "Cabang pertama adalah peralatan M&E dari V3: fabrikasi dan pengiriman berlangsung W10 sampai W17. Cabang kedua adalah modul V1: fabrikasi W10 sampai W15, kemudian pengiriman dan pemasangan W16 sampai W17. Kedua cabang harus siap pada akhir W17.",
        "Instalasi dimulai W18 sampai W20, SAT W21 sampai W22, IST serta inspeksi akhir W23, dan serah terima W24 atau 18 Juni 2027. Putar alur untuk melihat hubungan tersebut secara bertahap.",
        "W26 adalah toleransi dengan persetujuan. Jika M&E terlambat satu minggu, serah terima menjadi W25. Jika M&E terlambat satu minggu dan modul dua minggu, keterlambatan paralel ditentukan cabang terlama. Tetapi tambahan durasi IST sesudah konvergensi menambah keterlambatan berikutnya."
      ],
      "cue": "Putar alur lalu berhenti di W17. Gunakan tab Simulasi untuk membuktikan perbedaan keterlambatan paralel dan berurutan.",
      "hook": "Mengapa pekerjaan paralel tetap memiliki satu titik tunggu?",
      "bridge": "Ketika urutan pekerjaan sudah terlihat, kapan dan untuk apa uang harus tersedia?"
    },
    {
      "id": "budget",
      "title": "Uang harus mengikuti urutan pekerjaan.",
      "short": "Alur biaya, cadangan, dan pendanaan",
      "tag": "03 / MENGALOKASIKAN BIAYA",
      "source": "§3.1–3.4, §3.8–3.9",
      "duration": "90 detik",
      "notes": [
        "Dana awal 4,704 juta dolar dibagi menjadi tiga fungsi: CAPEX langsung 3,860 juta, biaya pelaksanaan proyek 458 ribu, dan kontingensi 386 ribu dolar. Kontingensi merupakan cadangan yang penggunaannya memerlukan persetujuan.",
        "Modul, peralatan daya, dan pendinginan menyerap 69,9 persen CAPEX langsung. Ini menjelaskan mengapa kontrak dan kesiapan vendor perlu dipantau ketat.",
        "Sekarang uji cadangan: kenaikan CAPEX langsung 5 persen memerlukan 193 ribu dolar; kenaikan 10 persen menghabiskan seluruh kontingensi; kenaikan 15 persen menimbulkan kekurangan 193 ribu dolar dengan OPEX proyek tetap.",
        "Arus kas juga penting. Kebutuhan terbesar terjadi pada B5, yaitu W17 sampai W20, sebesar 1,4936 juta dolar. Dana harus siap saat peralatan tiba dan pembayaran konstruksi jatuh tempo. B1 sampai B6 adalah periode empat minggu, bukan bulan kalender."
      ],
      "cue": "Pilih +5%, +10%, lalu +15% untuk menunjukkan batas cadangan. Buka Arus kas untuk menghubungkannya dengan W17.",
      "hook": "Anggaran total cukup belum berarti dana tersedia saat dibutuhkan.",
      "bridge": "Biaya membangun sudah dihitung. Apakah operasi fasilitas dapat mengembalikannya?"
    },
    {
      "id": "finance",
      "title": "Layak pada dasar. Bagaimana jika asumsi berubah?",
      "short": "Dari pendapatan ke keputusan investasi",
      "tag": "04 / MENGUJI KELAYAKAN",
      "source": "§3.5–3.7, §3.10",
      "duration": "100 detik",
      "notes": [
        "Pendapatan penuh berasal dari 500 kilowatt dikali tarif 220 dolar per kilowatt per bulan selama 12 bulan. Hasilnya 1,32 juta dolar per tahun. Setelah OPEX operasi 430 ribu dolar, arus kas tahunan normal menjadi 890 ribu dolar.",
        "Tahun pertama memakai utilisasi 80 persen. Pada tahun keenam ada reinvestasi 180 ribu dolar. Dengan investasi awal 4,704 juta dolar, horizon sepuluh tahun, dan diskonto 10 persen, NPV dasar sekitar positif 423 ribu dolar, IRR 11,99 persen, dan payback sederhana 5,73 tahun.",
        "Sekarang kita ubah ceritanya. Ketika pendapatan turun 5 persen dengan CAPEX tetap, NPV masih positif sekitar 29,5 ribu dolar. Jika CAPEX total juga naik 5 persen, NPV menjadi negatif sekitar 182,8 ribu dolar. Kelayakan dapat berubah karena dua asumsi bergerak bersama.",
        "Kesimpulannya adalah lanjut bersyarat: validasi kapasitas berbayar, tarif, OPEX, dan CAPEX sebelum komitmen besar. Model ini sebelum pajak, tanpa utang, inflasi, atau nilai sisa; listrik diteruskan ke tenant."
      ],
      "cue": "Tampilkan tiga skenario berurutan. Tanyakan kepada audiens apakah skenario gabungan masih layak, lalu tampilkan NPV.",
      "hook": "NPV positif harus dibaca bersama ketahanan terhadap perubahan.",
      "bridge": "Rencana yang layak masih membutuhkan orang yang tepat untuk menjalankannya."
    },
    {
      "id": "resources",
      "title": "Siapa mengubah rencana menjadi hasil?",
      "short": "Alur tanggung jawab tim dan vendor",
      "tag": "05 / MENGORGANISASIKAN ORANG",
      "source": "§4–4.4; §3.3",
      "duration": "90 detik",
      "notes": [
        "Tim internal proyek terdiri atas enam fungsi, berbeda dari empat mahasiswa penyusun tugas. PM mengintegrasikan ME, CM, NW, PC, dan HSE. Empat vendor menyediakan EPC, konsultasi, M&E, dan fiber.",
        "Kita lihat tanggung jawab sebagai alur. Pada instalasi daya dan pendingin, V1 serta V3 menjalankan pekerjaan, ME memegang akuntabilitas teknis, CM mengoordinasikan lapangan, dan PM mengintegrasikan dampaknya ke baseline. Penanggung jawab akhir tidak hilang walaupun pelaksananya beberapa pihak.",
        "Pilih paket kerja lain untuk melihat perpindahan akuntabilitas. Charter dan serah terima memiliki A pada sponsor; pondasi serta pemasangan modul pada CM; fiber pada NW.",
        "Beban puncak tim terjadi pada B3: 22 dari 24 minggu-orang atau 91,7 persen. Pada W18 sampai W20, ME penuh dan harus menangani daya serta pendingin paralel. Dukungan engineer V3 dan V2 harus dikonfirmasi; sisa kapasitas NW tidak otomatis menggantikan keahlian M&E."
      ],
      "cue": "Mulai pada paket Instalasi. Tunjukkan R dan A, lalu buka kapasitas untuk menghubungkan orang dengan titik W17–W20.",
      "hook": "Satu hasil punya satu A, meskipun pelaksananya lebih dari satu.",
      "bridge": "Tim dan tanggung jawab sudah ditetapkan. Sekarang kita uji ketika jadwal terganggu."
    },
    {
      "id": "risks",
      "title": "W17: bagaimana jika peralatan belum tiba?",
      "short": "Skenario gangguan dan keputusan tim",
      "tag": "06 / MENGHADAPI GANGGUAN",
      "source": "§2.7; §5.1–5.7",
      "duration": "100 detik",
      "notes": [
        "Mari masuk ke skenario. Peralatan M&E tiba satu minggu lebih lambat dari target akhir W17. Apa yang bergerak setelah itu? Instalasi mulai W19 dan serah terima bergeser ke W25. Satu minggu cadangan jadwal terpakai.",
        "Langkah awalnya adalah meminta bukti progres dan sisa durasi dari V3, kemudian ME, PC, dan PM menilai opsi pemulihan, dampak biaya, serta jaringan jadwal. Mengubah anggaran tanpa estimasi belum menyelesaikan masalah.",
        "Kasus kedua adalah izin pondasi baru tersedia pada awal W14. Pekerjaan yang memerlukan izin harus ditahan. Berdasarkan simulasi, serah terima juga bergeser ke W25. Jadwal tidak dapat dipulihkan dengan mengabaikan izin.",
        "Dua risiko ini memiliki skor inheren tertinggi, masing-masing 20. Peta, fishbone, Pareto, dan 5 Whys membantu menjelaskan prioritas serta akar sebab. Skenario dan hipotesis harus ditindaklanjuti dengan bukti."
      ],
      "cue": "Minta audiens memilih respons awal. Buka dampak dan keputusan; bandingkan R01 dengan R02.",
      "hook": "Ini simulasi dari laporan, bukan kejadian aktual.",
      "bridge": "Jadwal yang dipulihkan tetap harus melewati bukti mutu sebelum serah terima."
    },
    {
      "id": "control",
      "title": "Selesai dipasang belum cukup untuk diserahkan.",
      "short": "Alur pembuktian mutu dan pengendalian",
      "tag": "07 / MEMBUKTIKAN KESIAPAN",
      "source": "§5.7–5.9; §2.7",
      "duration": "100 detik",
      "notes": [
        "Alur pembuktian dimulai dari FAT di pabrik sebelum pengiriman, SAT setiap sistem pada W21 sampai W22, kemudian IST serta load bank pada W23. Serah terima ditargetkan W24 setelah bukti lengkap.",
        "Pada simulasi gate ini, periksa tiga kelompok bukti: SAT diterima, IST dan uji beban penuh empat jam lulus, serta dokumen dan penutupan punch list kritis lengkap. Centang hanya sebagai demonstrasi persyaratan, bukan sebagai hasil uji aktual.",
        "Pengendalian juga dimulai sebelum commissioning. Simulasi EVM W16 memberi SPI 0,929 dan CPI 0,938, keduanya di bawah ambang 0,95. Artinya tim perlu memeriksa nilai pekerjaan, biaya, sisa durasi, dan rencana koreksi.",
        "Jika perubahan memengaruhi baseline, dampak pada lingkup, jadwal, biaya, sumber daya, dan risiko harus dinilai bersama. Skenario W27 memerlukan keputusan sponsor. Setelah disetujui, seluruh dokumen terkait diperbarui."
      ],
      "cue": "Tunjukkan status belum siap, kemudian lengkapi tiga bukti simulasi. EVM dan change request tersedia untuk penjelasan lanjutan.",
      "hook": "Tanggal selesai mengikuti hasil uji dan penerimaan yang dipersyaratkan.",
      "bridge": "Dengan bukti tersebut, kita kembali ke keputusan awal: layak dilanjutkan atau belum?"
    },
    {
      "id": "conclusion",
      "title": "Keputusan kami: lanjut dengan prasyarat jelas.",
      "short": "Kesimpulan, keputusan, dan diskusi",
      "tag": "08 / KEPUTUSAN AKHIR",
      "source": "§6; §1.2; §3.7",
      "duration": "60 detik",
      "notes": [
        "Kita kembali ke pertanyaan pembuka: bagaimana menyiapkan pilot 500 kilowatt dalam 24 minggu? Jawabannya adalah menyatukan definisi hasil, dua jalur pasokan, kesiapan dana, akuntabilitas, dan bukti pengujian dalam satu baseline.",
        "Keputusan kami adalah lanjut bersyarat. Pastikan akses serta izin dan daya kampus, dapatkan bukti slot produksi, bekukan antarmuka W7, lalu validasi tarif, kapasitas berbayar, dan biaya. Prosedur penerimaan harus disepakati sejak awal.",
        "Selama pelaksanaan, lindungi titik temu W17. Pada W24, penerimaan harus didukung hasil uji dan dokumen. Replikasi baru dipertimbangkan setelah data kinerja dan lessons learned pilot diterima sponsor.",
        "Demikian presentasi kami. Terima kasih. Kami siap berdiskusi mengenai jalur kritis, anggaran, kelayakan, dan pilihan respons ketika asumsi berubah."
      ],
      "cue": "Tutup dengan tiga kalimat W17, W24, dan replikasi. Gunakan G untuk kembali ke materi saat tanya jawab.",
      "hook": "Lindungi W17. Buktikan kesiapan W24. Replikasi setelah evaluasi.",
      "bridge": "Terima kasih. Mari berdiskusi tentang asumsi dan keputusan proyek ini."
    }
  ],
  "wbs": [
    {
      "id": "1",
      "title": "Inisiasi",
      "weeks": "W1–W3",
      "owner": "PM + V2",
      "description": "Charter, organisasi, dan kesiapan konsultan.",
      "items": [
        [
          "1.1",
          "Project charter",
          "W1"
        ],
        [
          "1.2",
          "Kick-off dan rencana manajemen",
          "W2"
        ],
        [
          "1.3",
          "Kontrak dan mobilisasi V2",
          "W2–W3"
        ]
      ]
    },
    {
      "id": "2",
      "title": "Desain & izin",
      "weeks": "W4–W13",
      "owner": "ME + HSE + V2",
      "description": "Bekukan antarmuka dan pastikan izin setiap aktivitas.",
      "items": [
        [
          "2.1",
          "Survei tapak",
          "W4–W5"
        ],
        [
          "2.2",
          "BoD dan desain konseptual",
          "W6–W7"
        ],
        [
          "2.3",
          "Desain detail",
          "W8–W11"
        ],
        [
          "2.4",
          "Izin pekerjaan awal",
          "W6–W8"
        ],
        [
          "2.5",
          "Izin bangunan, emisi, interkoneksi",
          "W8–W13"
        ]
      ]
    },
    {
      "id": "3",
      "title": "Pengadaan",
      "weeks": "W6–W17",
      "owner": "PC + ME + V3 + V4",
      "description": "Kontrak serta pasokan peralatan dan fiber.",
      "items": [
        [
          "3.1",
          "Tender EPC",
          "W6–W7"
        ],
        [
          "3.2",
          "Evaluasi dan award V1",
          "W8–W9"
        ],
        [
          "3.3",
          "Kontrak dan PO M&E",
          "W8–W9"
        ],
        [
          "3.4",
          "Fabrikasi dan kirim M&E",
          "W10–W17"
        ],
        [
          "3.5",
          "Kontrak fiber",
          "W8"
        ],
        [
          "3.6",
          "Jalur fiber dan terminasi",
          "W12–W17"
        ]
      ]
    },
    {
      "id": "4",
      "title": "Konstruksi",
      "weeks": "W10–W17",
      "owner": "CM + V1",
      "description": "Tapak, pondasi, fabrikasi, dan pemasangan modul.",
      "items": [
        [
          "4.1",
          "Mobilisasi dan persiapan tapak",
          "W10–W11"
        ],
        [
          "4.2",
          "Pondasi dan utilitas sipil",
          "W12–W14"
        ],
        [
          "4.3",
          "Fabrikasi modul prefab",
          "W10–W15"
        ],
        [
          "4.4",
          "Kirim dan pasang modul",
          "W16–W17"
        ]
      ]
    },
    {
      "id": "5",
      "title": "Instalasi",
      "weeks": "W18–W20",
      "owner": "ME + NW + V1 + V3 + V4",
      "description": "Sistem daya dan pendingin dipasang paralel.",
      "items": [
        [
          "5.1",
          "Instalasi daya",
          "W18–W20"
        ],
        [
          "5.2",
          "Instalasi pendingin cair",
          "W18–W20"
        ],
        [
          "5.3",
          "Jaringan, keamanan, dan BMS",
          "W18–W19"
        ]
      ]
    },
    {
      "id": "6",
      "title": "Pengujian",
      "weeks": "W21–W23",
      "owner": "ME + CM + V2 + HSE",
      "description": "Bukti sistem bekerja sendiri dan terintegrasi.",
      "items": [
        [
          "6.1",
          "SAT per sistem",
          "W21–W22"
        ],
        [
          "6.2",
          "IST dan load bank",
          "W23"
        ],
        [
          "6.3",
          "Punch list dan inspeksi akhir",
          "W23"
        ]
      ]
    },
    {
      "id": "7",
      "title": "Serah terima",
      "weeks": "W24",
      "owner": "PM + Sponsor + V2",
      "description": "Dokumen, pelatihan, audit, dan penutupan.",
      "items": [
        [
          "7.1",
          "As-built, pelatihan, serah terima",
          "W24"
        ],
        [
          "7.2",
          "Audit dan lessons learned",
          "W24"
        ]
      ]
    }
  ],
  "gantt": [
    {
      "label": "Charter & konsultan",
      "start": 1,
      "end": 3,
      "critical": true,
      "detail": "1.1 dan 1.3 memiliki float 0. Kick-off 1.2 memiliki float 1 minggu."
    },
    {
      "label": "Survei & BoD",
      "start": 4,
      "end": 7,
      "critical": true,
      "detail": "Survei W4–W5, BoD W6–W7. Antarmuka harus dibekukan akhir W7."
    },
    {
      "label": "Desain detail & izin",
      "start": 6,
      "end": 13,
      "critical": false,
      "detail": "Desain detail W8–W11. Izin awal W6–W8; izin tambahan W8–W13. Izin pondasi wajib siap sebelum pekerjaan W12."
    },
    {
      "label": "Tender & kontrak",
      "start": 6,
      "end": 9,
      "critical": true,
      "detail": "Tender W6–W7; award EPC dan PO M&E W8–W9. Kontrak fiber W8."
    },
    {
      "label": "Fabrikasi M&E",
      "start": 10,
      "end": 17,
      "critical": true,
      "detail": "V3: 8 minggu fabrikasi dan pengiriman. Float 0. Siap akhir W17."
    },
    {
      "label": "Tapak & pondasi",
      "start": 10,
      "end": 14,
      "critical": false,
      "detail": "Tapak W10–W11; pondasi W12–W14. Float model 1 minggu, dengan izin pekerjaan harus tersedia."
    },
    {
      "label": "Fabrikasi & pasang modul",
      "start": 10,
      "end": 17,
      "critical": true,
      "detail": "V1: fabrikasi W10–W15; kirim dan pasang W16–W17. Float 0."
    },
    {
      "label": "Jalur fiber",
      "start": 12,
      "end": 17,
      "critical": false,
      "detail": "V4: jalur dan terminasi W12–W17. Float 1 minggu."
    },
    {
      "label": "Instalasi fasilitas",
      "start": 18,
      "end": 20,
      "critical": true,
      "detail": "Daya dan pendingin W18–W20, float 0; jaringan dan kontrol W18–W19, float 1."
    },
    {
      "label": "SAT, IST & inspeksi",
      "start": 21,
      "end": 23,
      "critical": true,
      "detail": "SAT W21–W22; IST dan inspeksi berjalan pada W23. Setiap aktivitas memiliki float 0."
    },
    {
      "label": "Serah terima",
      "start": 24,
      "end": 24,
      "critical": true,
      "detail": "As-built, pelatihan, serah terima, audit akhir, dan lessons learned W24."
    }
  ],
  "scenarios": [
    {
      "name": "Jadwal dasar",
      "installation": 18,
      "finish": 24,
      "desc": "Dua cabang siap akhir W17. Cadangan dua minggu masih tersedia."
    },
    {
      "name": "Izin pondasi awal W13",
      "installation": 18,
      "finish": 24,
      "desc": "Pondasi selesai W15; pemasangan modul W16–W17 masih terjaga."
    },
    {
      "name": "Izin pondasi awal W14",
      "installation": 19,
      "finish": 25,
      "desc": "Pondasi dan pemasangan modul bergeser; satu minggu cadangan terpakai."
    },
    {
      "name": "M&E terlambat 1 minggu",
      "installation": 19,
      "finish": 25,
      "desc": "Kedatangan M&E menentukan awal instalasi. Sisa cadangan satu minggu."
    },
    {
      "name": "Modul terlambat 2 minggu",
      "installation": 20,
      "finish": 26,
      "desc": "Cabang modul menggeser instalasi dua minggu. Cadangan habis."
    },
    {
      "name": "M&E +1 & modul +2 minggu",
      "installation": 20,
      "finish": 26,
      "desc": "Dua cabang berjalan paralel; keterlambatan terbesarlah yang menentukan."
    },
    {
      "name": "Modul +2 & IST +1 minggu",
      "installation": 20,
      "finish": 27,
      "desc": "Tambahan durasi IST terjadi setelah konvergensi. Lewat toleransi W26."
    }
  ],
  "capex": [
    [
      "Modul prefab",
      1100,
      "V1",
      "C3"
    ],
    [
      "Peralatan daya",
      900,
      "V3",
      "C4"
    ],
    [
      "Pendinginan cair",
      700,
      "V3",
      "C5"
    ],
    [
      "Tapak & pondasi",
      380,
      "V1",
      "C2"
    ],
    [
      "Instalasi & commissioning",
      250,
      "V1 + V2",
      "C8"
    ],
    [
      "Jaringan & fiber",
      220,
      "V4 + Owner",
      "C6"
    ],
    [
      "Keamanan & BMS",
      160,
      "V1 + V3",
      "C7"
    ],
    [
      "Desain & perizinan",
      150,
      "V2",
      "C1"
    ]
  ],
  "cash": [
    63.8,
    124.6,
    987.6,
    913.4,
    1493.6,
    735
  ],
  "roles": [
    [
      "PM",
      "Project Manager",
      24,
      72
    ],
    [
      "ME",
      "Lead Engineer M&E",
      22,
      57.2
    ],
    [
      "CM",
      "Construction Manager",
      18,
      43.2
    ],
    [
      "NW",
      "Network & IT Engineer",
      12,
      26.4
    ],
    [
      "PC",
      "Procurement & Contracts",
      14,
      25.2
    ],
    [
      "HSE",
      "HSE & Permit Compliance",
      17,
      34
    ]
  ],
  "vendors": [
    [
      "V1",
      "EPC",
      "1.690.000",
      "Tapak, modul, instalasi",
      "W10–W23"
    ],
    [
      "V2",
      "Konsultan",
      "230.000",
      "Desain, izin, commissioning",
      "W2–W24"
    ],
    [
      "V3",
      "Pemasok M&E",
      "1.720.000",
      "Daya dan pendinginan",
      "W8–W24"
    ],
    [
      "V4",
      "Fiber",
      "130.000",
      "Dua rute konektivitas",
      "W8–W19"
    ]
  ],
  "workload": [
    [
      4,
      4,
      4,
      4,
      4,
      4
    ],
    [
      2,
      4,
      4,
      4,
      4,
      4
    ],
    [
      0,
      2,
      4,
      4,
      4,
      4
    ],
    [
      0,
      1,
      2,
      3,
      4,
      2
    ],
    [
      2,
      4,
      4,
      1,
      1,
      2
    ],
    [
      1,
      3,
      4,
      3,
      3,
      3
    ]
  ],
  "risks": [
    [
      "R01",
      "Keterlambatan M&E",
      4,
      5,
      "ME",
      "Progres pabrik tertinggal >1 minggu.",
      "Konfirmasi slot W9, pantau pabrik mingguan, dan siapkan ekspedisi."
    ],
    [
      "R02",
      "Izin & akses tapak",
      4,
      5,
      "HSE",
      "Izin awal belum tersedia W8; izin pondasi belum siap awal W12.",
      "Pra-konsultasi, daftar izin per aktivitas, dan tahan pekerjaan tanpa izin."
    ],
    [
      "R03",
      "Kesiapan daya kampus",
      3,
      5,
      "PM",
      "Perkiraan energisasi melewati W20.",
      "Konfirmasi jadwal tie-in tertulis; eskalasi kepada sponsor."
    ],
    [
      "R04",
      "Desain tidak kompatibel",
      3,
      4,
      "ME",
      "Perbedaan debit, suhu, atau tegangan.",
      "Bekukan antarmuka W7; review shop drawing dan spesifikasi OEM."
    ],
    [
      "R05",
      "Kebocoran pendingin",
      3,
      4,
      "ME",
      "Tekanan turun atau alarm kebocoran.",
      "Pressure test, flushing, sensor, dan prosedur isolasi."
    ],
    [
      "R06",
      "Cuaca menghambat sipil",
      3,
      4,
      "CM",
      "Prakiraan cuaca mengganggu >3 hari.",
      "Proteksi area, drainase, dan pengaturan ulang kerja."
    ],
    [
      "R07",
      "Kecelakaan pengangkatan",
      2,
      5,
      "HSE",
      "Angin atau rigging tidak aman.",
      "Lift plan, toolbox meeting, dan zona larangan."
    ],
    [
      "R08",
      "Kegagalan vendor EPC",
      2,
      4,
      "PC",
      "Dua laporan progres di bawah rencana.",
      "Evaluasi kemampuan, jaminan pelaksanaan, dan hak step-in."
    ],
    [
      "R09",
      "Kegagalan IST",
      3,
      5,
      "ME",
      "SAT belum lulus akhir W22.",
      "Review test script sejak W18, pre-commissioning, dan rencana uji ulang."
    ],
    [
      "R10",
      "Dua fiber satu rute",
      2,
      4,
      "NW",
      "Ada titik kegagalan bersama.",
      "Audit peta jalur dan bukti physical diversity."
    ],
    [
      "R11",
      "Pendapatan menurun",
      2,
      4,
      "PM",
      "Proyeksi pendapatan turun >5%.",
      "Validasi tarif minimum dan kapasitas berbayar sebelum belanja besar."
    ],
    [
      "R12",
      "PUE tidak tercapai",
      2,
      4,
      "ME",
      "Daya fasilitas >625 kW pada kondisi desain.",
      "Simulasi beban dan verifikasi batas pengukuran."
    ],
    [
      "R13",
      "Keamanan jaringan",
      2,
      4,
      "NW",
      "Akses tidak sah atau temuan kritis.",
      "Segmentasi, MFA, log, dan uji konfigurasi."
    ],
    [
      "R14",
      "Biaya pengadaan naik",
      2,
      4,
      "PC",
      "Forecast biaya melewati baseline.",
      "Harga tetap, validitas penawaran, dan persetujuan perubahan."
    ],
    [
      "R15",
      "Pembatasan penggalian",
      2,
      4,
      "HSE",
      "Area belum mendapat clearance.",
      "Survei dan clearance tertulis sebelum mobilisasi."
    ]
  ]
};
