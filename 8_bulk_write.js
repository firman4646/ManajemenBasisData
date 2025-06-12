// 8. Bulk Write
db.buku.bulkWrite([
  {
    insertOne: {
      document: {
        isbn: "978-602-1111-222-3",
        judul: "Belajar Node.js",
        pengarang: "Budi Santoso",
        tahun_terbit: 2021,
        kategori: "Pemrograman",
        stok: 10
      }
    }
  },
  {
    insertOne: {
      document: {
        isbn: "978-602-4444-555-6",
        judul: "Dasar-dasar JavaScript",
        pengarang: "Dina Rahayu",
        tahun_terbit: 2020,
        kategori: "Pemrograman",
        stok: 7
      }
    }
  }
]);