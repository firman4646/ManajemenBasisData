// 7. Logical Query
db.buku.find({
  $or: [
    { kategori: "Database" },
    { pengarang: "Andi Wijaya" }
  ]
});