## Clash of Coins - BOT 🤖

Script ini dirancang untuk mengotomatiskan proses klaim game activity di **Clash of Coins** 

---

## 📌 Fitur

- ✅ Auto claim rewards (points dan coins) menggunakan token dari `tokens.txt` dan wallet dari `wallets.json`
- 🔄 Pengecekan otomatis ketersediaan claim setiap 10 menit atau sesuai waktu server
- 🔌 Dukungan proxy (`proxy.txt`) untuk koneksi aman
- 🎁 Menampilkan hasil klaim (points dan coins) setelah transaksi berhasil
- ⏳ Sinkronisasi waktu tunggu (times remaining) dengan server: 10 menit jika claim tersedia, atau sesuai waktu server jika belum tersedia
- 📋 Log transaksi lengkap: wallet address, signed transaction, dan status konfirmasi
- ⚡ Pilihan untuk menggunakan proxy melalui prompt interaktif

---

## 🚀 Cara Penggunaan

### 1. Clone repository ini

```bash
git clone https://github.com/marioatmajanugraha/coc-Bot.git
cd coc-Bot
```

### 2. Install dependencies

```bash
npm install axios chalk cfonts http-proxy-agent socks-proxy-agent ethers fs zstd-codec
```

### 3. Siapkan file yang diperlukan

#### 🔹 `tokens.txt`

Isi dengan token akses, satu token per baris. Contoh:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### 🔹 `wallets.json`

Isi dengan data wallet dalam format berikut:

```json
[
  {
    "address": "your_wallet_address_here",
    "privateKey": "your_private_key_here"
  }
]
```

#### 🔹 (Opsional) `proxy.txt`

Jika ingin menggunakan proxy, isi dengan format berikut:

```
http://username:password@host:port
socks5://username:password@host:port
```

---

### 4. Jalankan script

```bash
node index.obf.js
```

### 5. Ikuti instruksi

- Pilih apakah ingin menggunakan proxy (`y/n`)
- Script akan berjalan otomatis, memproses token, dan melakukan klaim reward jika tersedia
- Waktu tunggu akan disesuaikan otomatis (10 menit jika tersedia, atau waktu dari server jika belum tersedia)

---

## ⚠️ Disclaimer

Gunakan script ini dengan bijak dan sesuai aturan Clash of Coins.  
**Developer tidak bertanggung jawab atas penyalahgunaan atau banned akun.**

---

## 🤝 Kontribusi

Ingin menambahkan fitur baru atau perbaikan?  
Silakan **fork** repo ini dan buat **pull request**!  
Kontribusi kalian sangat dihargai 🙌

---

## 📞 Kontak

- Telegram: [@balveerxyz](https://t.me/balveerxyz)
- Channel Info Airdrop: [t.me/airdroplocked](https://t.me/airdroplocked)
