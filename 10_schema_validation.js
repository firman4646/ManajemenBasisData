// 10. Schema Validation
db.createCollection("buku_validated", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["isbn", "judul", "pengarang", "tahun_terbit", "kategori", "stok"],
      properties: {
        isbn: {
          bsonType: "string",
          description: "harus berupa string dan wajib diisi"
        },
        judul: {
          bsonType: "string",
          description: "harus berupa string dan wajib diisi"
        },
        pengarang: {
          bsonType: "string"
        },
        tahun_terbit: {
          bsonType: "int",
          minimum: 1900,
          maximum: 2100
        },
        kategori: {
          bsonType: "string"
        },
        stok: {
          bsonType: "int",
          minimum: 0
        }
      }
    }
  }
});