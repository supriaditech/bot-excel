const puppeteer = require("puppeteer");

(async () => {
  // ==========================================
  // BAGIAN PENGATURAN - BISA ANDA EDIT DI SINI
  // ==========================================

  // 1. Link Spreadsheet War (Gunakan link LENGKAP beserta "?gid=xxx..." agar sheet yang dipilih benar)
  const url =
    "https://docs.google.com/spreadsheets/d/1FlpJJ2JHQa3rOzAYOwlDqFXKZ22VsQQ5LUiy4ZMx1rY/edit?gid=1663793201#gid=1663793201";

  // 2. Waktu eksekusi (Format: HH:MM:SS) - Tambahkan Detik!
  // Contoh: '13:14:00' atau '13:14:30' (jam 13, menit 14, detik 30)
  // const targetTime = "20:59:40";
  const targetTime = "11:59:47";

  // 3. TARGET KOLOM & DATA YANG AKAN DI-COPY PASTE (SPAM)
  // Silakan ganti kata-katanya di dalam tanda kutip berikuit
  const cellTujuan1 = "B56";
  const dataCopas1 = "Khairun nisa s";

  const cellTujuan2 = "C57";
  const dataCopas2 = "2313501010067";

  const cellTujuan3 = "D57";
  const dataCopas3 = "Ekstraksi";

  // PENGATURAN GELOMBANG SPAM (Mencegah Crash Google Sheets)
  const jumlahKlikPerSiklus = 300; // 30 kali paste
  const totalSiklusRefresh = 5; // 5 kali refresh/gelombang
  // ==========================================

  console.log(`Menunggu jam ${targetTime} untuk me-run robot...`);
  // Fungsi utama
  async function jalankanBot() {
    console.log(`Jam ${targetTime} tiba! Membuka browser browser...`);

    // Membuka Browser (headless: false berarti browser akan terlihat secara visual)
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null, // Full page
      args: ["--start-maximized"],
    });

    // Ubah const menjadi let agar kita bisa mengganti tab-nya nanti
    let page = await browser.newPage();

    // Pergi ke link Google Sheet
    await page.goto(url, { waitUntil: "networkidle2" });
    console.log("Halaman termuat! Bersiap copy paste beruntun...");

    // Tunggu sedikit agar Google Sheets selesai loading script UI-nya
    await new Promise((r) => setTimeout(r, 4000));

    // PENTING: Pastikan jendela Google Chrome berada di depan & difokusikan
    // agar API Clipboard (Copy-Paste) diizinkan oleh sistem keamanan browser
    await page.bringToFront();
    await page.mouse.click(150, 150);
    await new Promise((r) => setTimeout(r, 1000));

    // GABUNGKAN DATA MENJADI 1 BARIS PANJANG DAN COPY KE CLIPBOARD UTAMA SEKALI SAJA
    // Di Google Sheets, teks yang dipisahkan dengan \t (Tab) akan otomatis ter-paste
    // ke kolom-kolom persis di sebelahnya secara instan!
    const dataGabungan = `${dataCopas1}\t${dataCopas2}\t${dataCopas3}`;
    await page.evaluate(
      (teks) => navigator.clipboard.writeText(teks),
      dataGabungan,
    );

    for (let siklus = 1; siklus <= totalSiklusRefresh; siklus++) {
      console.log(`\n=== MEMULAI GELOMBANG KE-${siklus} ===`);

      // LOOP SPAM - Berulang kali memasukkan data di baris yang sama agar tidak ditimpa
      for (let i = 0; i < jumlahKlikPerSiklus; i++) {
        console.log(
          `Siklus ${siklus} | Spam iterasi ke-${i + 1}... PASTE SERENTAK DI ${cellTujuan1}`,
        );
        try {
          // Pindah ke target. Menambahkan format GID sheet dari aslinya jika dibutuhkan.
          // Mengekstrak gid spesifik dari URL yang Anda berikan
          const urlParams = new URL(url);
          const gid = urlParams.searchParams.get("gid") || "0";

          // Hanya perlu pindah ke Cell AWAL
          await page.evaluate(
            (gidNum, target) => {
              window.location.hash = `gid=${gidNum}&range=${target}`;
            },
            gid,
            cellTujuan1,
          );

          // Tanpa TimeOut (Jeda 0 Milidetik)

          // CTRL+V akan langsung mengisi sel
          await page.keyboard.down("Control");
          await page.keyboard.press("v");
          await page.keyboard.up("Control");
        } catch (err) {
          console.log("Gagal menempelkan di iterasi ini.");
        }
      }

      // Lakukan Refresh Halaman di akhir SETIAP siklus (Kecuali yang terakhir)
      if (siklus < totalSiklusRefresh) {
        console.log(
          "Gelombang selesai. Membuka TAB BARU agar menghindari peringatan Unsaved Changes...",
        );
        try {
          // Buka tab baru dan biarkan memuat
          const newPage = await browser.newPage();
          await newPage.goto(url, { waitUntil: "networkidle2" });
          await new Promise((r) => setTimeout(r, 4500)); // Tunggu loading web agak lama

          // Tutup tab yang lama secara paksa (ini tidak akan memunculkan popup peringatan)
          await page.close();

          // Timpa kendali bot dari tab lama ke tab baru
          page = newPage;

          // PENTING: Klik ulang layar supaya API Clipboard dan Keyboard jalan lagi
          await page.bringToFront();
          await page.mouse.click(150, 150);
          await new Promise((r) => setTimeout(r, 1000));

          // Pastikan tulisan masih ada di Clipboard (Kadang ganti tab bisa ngereset memori)
          await page.evaluate(
            (teks) => navigator.clipboard.writeText(teks),
            dataGabungan,
          );
        } catch (e) {
          console.log("Gagal membuat tab baru, lanjut eksekusi...");
        }
      }
    }

    console.log(
      "\nKEDUA GELOMBANG SELESAI TUNTAS! Menutup program dalam 10 detik...",
    );
    await new Promise((r) => setTimeout(r, 10000));
    await browser.close();
    process.exit(0);
  }

  let isBotRunning = false; // Penanda agar bot tidak berjalan ganda/dobel

  // Timer pengecekan waktu
  setInterval(() => {
    if (isBotRunning) return; // Jika bot sudah lari, hentikan pengecekan timer

    const now = new Date();
    const currentHours = String(now.getHours()).padStart(2, "0");
    const currentMinutes = String(now.getMinutes()).padStart(2, "0");
    const currentSeconds = String(now.getSeconds()).padStart(2, "0");

    // Format lengkap dengan detik
    const currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;

    // Karena ada delay loading browser,
    // Anda mungkin ingin menset targetTime ke 13:59:50 agar punya waktu 10 detik memuat web!
    if (currentTime === targetTime) {
      isBotRunning = true; // Langsung tandai bahwa bot sudah jalan
      jalankanBot();
    }
  }, 500); // cek sangat cepat, setiap setengah detik (500 milidetik)
})();
