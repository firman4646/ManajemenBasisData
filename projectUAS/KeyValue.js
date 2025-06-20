//1. Buatlah database no sql dengan model key-value dan masukkan data minimal 5 data

db.yamaha.insertMany([
  {
    key: "Yamaha_R15",
    value: { model: "R15", type: "Sport" }
  },
  {
    key: "Yamaha_NMAX",
    value: { model: "NMAX", type: "Matic" }
  },
  {
    key: "Yamaha_Vixion",
    value: { model: "Vixion", type: "Naked" }
  },
  {
    key: "Yamaha_XSR155",
    value: { model: "XSR155", type: "Retro" }
  },
  {
    key: "Yamaha_Mio",
    value: { model: "Mio", type: "Matic" }
  }
])





