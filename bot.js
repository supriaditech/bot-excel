const { google } = require("googleapis");
const path = require("path");
const fetch = require("node-fetch");

// Setup autentikasi menggunakan key credentials.json
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "credentials.json"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function insertToGSheet(spreadsheetId, data) {
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    // Menyisipkan data ke baris terbawah pada Sheet1
    await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: "Sheet1!A1", // Sesuaikan dengan nama sheet-nya (default: Sheet1)
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [data],
      },
    });

    console.log(`Berhasil: Data ${data} ditambahkan ke Google Sheets!`);
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
  }
}

// 1. ID Spreadsheet diambil dari URL Anda: d/1mp5s4Jxpo8mHW87mKv5gh6VGKzca4E4Ws5F5CSbJmGY/edit
const SPREADSHEET_ID = "1mp5s4Jxpo8mHW87mKv5gh6VGKzca4E4Ws5F5CSbJmGY";

// 2. Data yang ingin disisipkan
const dataBaru = [
  "Budi",
  "budi@email.com",
  "Halo, ini input Node.js ke Google Sheets!",
];

// 3. Waktu Eksekusi
const targetTime = "12:32";

console.log(
  `Bot berjalan dan menunggu untuk mengeksekusi pada pukul ${targetTime}...`,
);

// Loop pengecekan setiap 30 detik (30000 milidetik)
setInterval(() => {
  const now = new Date();

  // Format jam dan menit agar menjadi "HH:MM", contoh: "09:05" atau "12:27"
  const currentHours = String(now.getHours()).padStart(2, "0");
  const currentMinutes = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${currentHours}:${currentMinutes}`;

  if (currentTime === targetTime) {
    console.log(`Jam ${currentTime} tiba! Memasukkan data ke Google Sheets...`);
    insertToGSheet(SPREADSHEET_ID, dataBaru);

    // Matikan program setelah 3 detik menunggu proses API selesai
    setTimeout(() => {
      process.exit(0);
    }, 3000);
  }
}, 30000);
