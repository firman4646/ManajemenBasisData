// 6. Comparison Query
db.buku.find({ tahun_terbit: { $gt: 2020 } });