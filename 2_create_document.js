// 2. Create Document
db.buku.insertOne({
  isbn: "978-602-1234-567-8",
  judul: "MongoDB untuk Pemula",
  pengarang: "Andi Wijaya",
  tahun_terbit: 2022,
  kategori: "Database",
  stok: 5
});