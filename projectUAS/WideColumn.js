//Buatlah database no sql dengan model wide-coloumn dan masukkan min 5 data

db.yamaha_widecolumn.insertMany([
  {
    model: "R15",
    type: "Sport",
    cc: 155,
    year: 2024,
    features: {
      abs: true,
      vva: true,
      gear_indicator: true,
      slipper_clutch: true
    },
    price: 39000000
  },
  {
    model: "NMAX",
    type: "Matic",
    cc: 155,
    year: 2023,
    features: {
      abs: true,
      vva: true,
      smart_key: true,
      digital_speedometer: true
    },
    price: 32000000
  },
  {
    model: "Vixion",
    type: "Naked",
    cc: 150,
    year: 2022,
    features: {
      abs: false,
      kick_start: true,
      pass_beam: true
    },
    price: 30000000
  },
  {
    model: "XSR155",
    type: "Retro",
    cc: 155,
    year: 2024,
    features: {
      abs: true,
      classic_design: true,
      round_headlamp: true
    },
    price: 37000000
  },
  {
    model: "Mio M3",
    type: "Matic",
    cc: 125,
    year: 2021,
    features: {
      abs: false,
      kick_start: true,
      eco_indicator: true
    },
    price: 21000000
  }
])
