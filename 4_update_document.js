// 4. Update Document
db.buku.updateOne(
  { isbn: "978-602-1234-567-8" },
  { $set: { stok: 3 } }
);