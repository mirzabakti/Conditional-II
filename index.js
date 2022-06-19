// DIKUMPULKAN HARI MINGGU TERAKHIR JAM 12 MALAM

/**
 * Perang melawan Alien, buatlah program untuk memfilter kategori penduduk yang berhak dan wajib perang melawan alien.
 */

/**
 * Tingkatan Jabatan untuk pria
 * Tentara > Officer I > Officer II > Jendral Perang
 */

/**
 * Tingkatan Jabatan untuk wanita
 * Medis > Officer Medis
 */

/**
 * Medis >>> Usia minimal 18 tahun, Maksimal 30 tahun.
 * Officer Medis >>> Usia minimal 30 tahun, Maksimal 55 tahun, Pengalaman militer 10 tahun.
 * Tentara >>> Usia minimal 18 tahun, Maksimal 30 tahun, Pengalaman militer 5 tahun.
 * Officer I >>> Usia minimal 25 tahun, Maksimal 45 tahun, Pengalaman militer 7 tahun.
 * Officer II >>> Usia minimal 30 tahun, Maksimal 50 tahun, Pengalaman militer 9 tahun.
 * Jendral Perang >>> Usia minimal 40 tahun, Maksimal 65 tahun, Pengalaman militer 15 tahun.
 */

/**
 * Baru >>> Pengalaman militer dibawah 5 tahun.
 * Berpengalaman >>> Pengalaman militer diatas sama dengan 5 tahun, dibawah sama dengan 10 tahun.
 * Sangat Berpengalaman >>> Pengalaman militer diatas 10 tahun
 */

 let nama; // String
 let umur; // Number
 let jenisKelamin; // String
 let pengalamanMiliterTahun; // Number
 let pengalamanMiliterKategori; // String
 let jabatan; // String
 
 /**
  * Jawaban: Ubah value dari variable [jabatan] menjadi => "HALO [nama] DENGAN UMUR [umur] DAN JENIS KELAMIN [jenisKelamin] DENGAN PENGALAMAN MILITER ANDA YANG [pengalamanMiliterKategori] ANDA BERHAK MENDUDUKI [jabatan]"
  */
 
 // your code here
 
 // Input
 nama = "Mirza Bakti";
 umur = 40;
 jenisKelamin = "Pria";
 pengalamanMiliterTahun = 15;
 
 // Filter kategori pengalaman militer
 if (pengalamanMiliterTahun < 5) {
    pengalamanMiliterKategori = "Baru";
 } else if (pengalamanMiliterTahun >= 5 && pengalamanMiliterTahun <= 10) {
    pengalamanMiliterKategori = "Berpengalaman";
 } else if (pengalamanMiliterTahun > 10) {
    pengalamanMiliterKategori = "Sangat Berpengalaman";
 };

 // Filter jabatan
 if (jenisKelamin == "Wanita") {
    if (umur >= 30 && umur <=55 && pengalamanMiliterTahun >= 10) {
        jabatan = "Officer Medis";
    } else if (umur >= 18 && umur <=30) {
        jabatan = "Medis";
    }
 } else if (jenisKelamin == "Pria") {
    if (umur >= 40 && umur <= 65 && pengalamanMiliterTahun >= 15) {
        jabatan = "Jendral Perang";
    } else if (umur >= 30 && umur <= 50 && pengalamanMiliterTahun >= 9) {
        jabatan = "Officer II";
    } else if (umur >= 25 && umur <= 45 && pengalamanMiliterTahun >= 7) {
        jabatan = "Officer I";
    } else if (umur >= 18 && umur <= 30 && pengalamanMiliterTahun >= 5) {
        jabatan = "Tentara";
    }
 };

 // Output
 if (pengalamanMiliterKategori == undefined || jabatan == undefined || pengalamanMiliterTahun >= umur) {
    jabatan = "DATA TIDAK VALID";
 } else {
    jabatan = `HALO ${nama} DENGAN UMUR ${umur} DAN JENIS KELAMIN ${jenisKelamin} DENGAN PENGALAMAN MILITER ANDA YANG ${pengalamanMiliterKategori} ANDA BERHAK MENDUDUKI ${jabatan}`;
 };
 
 console.log(jabatan);