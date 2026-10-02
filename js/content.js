/*
 * Structured content copied from the supplied brochure.
 * Keep this file in sync with the no-JavaScript fallback content in index.html.
 */
window.SERUNI_CONTENT = Object.freeze({
  meta: {
    academicYear: "2026/2027",
    brochure: "./assets/brochure-seruni-2026-2027.pdf"
  },

  sources: {
    hero: [1, 2],
    advantages: [2, 3],
    programs: {
      baby: [5],
      toddler: [5],
      preschooler: [6],
      afterSchool: [7]
    },
    facilities: [8],
    teachers: [9, 10, 11],
    fees: {
      "duren-sawit": [12],
      "taman-galaxy": [13],
      tebet: [14],
      bintaro: [15]
    },
    gallery: [5, 6, 7, 8, 16],
    contacts: [17]
  },

  feeNotes: {
    registrationFee: 250000,
    languagesDisplay: "English dan Bahasa Indonesia",
    reschedule: "Reschedule karena sakit atau berhalangan sebanyak 2 kali, khusus pembelian paket term (3 bulan).",
    brochureText: "Semi-private class with 3-6 student and 2 Montessori directresses (teacher) per class. Language used in class : English and Bahasa.",
    sourcePages: [12, 13, 14, 15]
  },

  fees: {
    "duren-sawit": {
      name: "Duren Sawit",
      sourcePage: 12,
      programs: [
        {
          id: "baby",
          name: "Montessori Baby",
          durationMinutes: 60,
          frequency: "1 sesi/minggu",
          companion: "dengan 1 pendamping",
          packages: [
            { period: "bulan", sessions: 4, price: 800000 },
            { period: "term", sessions: 12, price: 2200000 }
          ]
        },
        {
          id: "toddler",
          name: "Montessori Toddler",
          durationMinutes: 60,
          frequency: "2 sesi/minggu",
          companion: "dengan 1 pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1400000 },
            { period: "term", sessions: 24, price: 3600000 },
            { period: "semester", sessions: 48, price: 6400000 }
          ]
        },
        {
          id: "preschooler",
          name: "Montessori Preschooler",
          durationMinutes: 60,
          frequency: "2 sesi/minggu",
          companion: "tanpa pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1400000 },
            { period: "term", sessions: 24, price: 3600000 },
            { period: "semester", sessions: 48, price: 6400000 }
          ]
        },
        {
          id: "after-school",
          name: "After-School Program",
          durationMinutes: 90,
          frequency: "2 sesi/minggu",
          companion: "tanpa pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1400000 },
            { period: "term", sessions: 24, price: 3600000 },
            { period: "semester", sessions: 48, price: 6400000 }
          ]
        }
      ]
    },

    "taman-galaxy": {
      name: "Taman Galaxy, Bekasi",
      sourcePage: 13,
      programs: [
        {
          id: "baby",
          name: "Montessori Baby",
          durationMinutes: 60,
          frequency: "1 sesi/minggu",
          companion: "dengan 1 pendamping",
          packages: [
            { period: "bulan", sessions: 4, price: 750000 },
            { period: "term", sessions: 12, price: 2100000 }
          ]
        },
        {
          id: "toddler",
          name: "Montessori Toddler",
          durationMinutes: 60,
          frequency: "2 sesi/minggu",
          companion: "dengan 1 pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1300000 },
            { period: "term", sessions: 24, price: 3500000 }
          ]
        },
        {
          id: "preschooler",
          name: "Montessori Preschooler",
          durationMinutes: 60,
          frequency: "2 sesi/minggu",
          companion: "tanpa pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1100000 },
            { period: "term", sessions: 24, price: 3100000 }
          ]
        },
        {
          id: "after-school",
          name: "After-School Program",
          durationMinutes: 90,
          frequency: "2 sesi/minggu",
          companion: "tanpa pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1100000 },
            { period: "term", sessions: 24, price: 3100000 }
          ]
        }
      ]
    },

    tebet: {
      name: "Tebet",
      sourcePage: 14,
      programs: [
        {
          id: "baby",
          name: "Montessori Baby",
          durationMinutes: 60,
          frequency: "1 sesi/minggu",
          companion: "dengan 1 pendamping",
          packages: [
            { period: "bulan", sessions: 4, price: 800000 },
            { period: "term", sessions: 12, price: 2200000 }
          ]
        },
        {
          id: "toddler",
          name: "Montessori Toddler",
          durationMinutes: 60,
          frequency: "2 sesi/minggu",
          companion: "dengan 1 pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1400000 },
            { period: "term", sessions: 24, price: 3600000 },
            { period: "semester", sessions: 48, price: 6400000 }
          ]
        },
        {
          id: "preschooler",
          name: "Montessori Preschooler",
          durationMinutes: 60,
          frequency: "2 sesi/minggu",
          companion: "tanpa pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1400000 },
            { period: "term", sessions: 24, price: 3600000 },
            { period: "semester", sessions: 48, price: 6400000 }
          ]
        },
        {
          id: "after-school",
          name: "After-School Program",
          durationMinutes: 90,
          frequency: "2 sesi/minggu",
          companion: "tanpa pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1600000 },
            { period: "term", sessions: 24, price: 4200000 },
            { period: "semester", sessions: 48, price: 7600000 }
          ]
        }
      ]
    },

    bintaro: {
      name: "Bintaro",
      sourcePage: 15,
      programs: [
        {
          id: "baby",
          name: "Montessori Baby",
          durationMinutes: 60,
          frequency: "1 sesi/minggu",
          companion: "dengan 1 pendamping",
          packages: [
            { period: "bulan", sessions: 4, price: 800000 },
            { period: "term", sessions: 12, price: 2200000 }
          ]
        },
        {
          id: "toddler",
          name: "Montessori Toddler",
          durationMinutes: 60,
          frequency: "2 sesi/minggu",
          companion: "dengan 1 pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1400000 },
            { period: "term", sessions: 24, price: 3600000 },
            { period: "semester", sessions: 48, price: 6400000 }
          ]
        },
        {
          id: "preschooler",
          name: "Montessori Preschooler",
          durationMinutes: 60,
          frequency: "2 sesi/minggu",
          companion: "tanpa pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1400000 },
            { period: "term", sessions: 24, price: 3600000 },
            { period: "semester", sessions: 48, price: 6400000 }
          ]
        },
        {
          id: "after-school",
          name: "After-School Program",
          durationMinutes: 90,
          frequency: "2 sesi/minggu",
          companion: "tanpa pendamping",
          packages: [
            { period: "bulan", sessions: 8, price: 1600000 },
            { period: "term", sessions: 24, price: 4200000 },
            { period: "semester", sessions: 48, price: 7600000 }
          ]
        }
      ]
    }
  },

  contacts: {
    "duren-sawit": {
      branch: "Duren Sawit",
      location: "Jakarta Timur",
      phoneDisplay: "0811 9123 496",
      whatsappNumber: "628119123496",
      messageBranch: "Duren Sawit",
      sourcePage: 17
    },
    "taman-galaxy": {
      branch: "Taman Galaxy",
      location: "Bekasi",
      phoneDisplay: "0811 165 0110",
      whatsappNumber: "628111650110",
      messageBranch: "Taman Galaxy",
      sourcePage: 17
    },
    tebet: {
      branch: "Tebet Timur",
      location: "Jakarta Selatan",
      phoneDisplay: "0811 3823 0110",
      whatsappNumber: "6281138230110",
      messageBranch: "Tebet Timur",
      sourcePage: 17
    },
    bintaro: {
      branch: "Bintaro Sektor 3",
      location: "Tangerang Selatan",
      phoneDisplay: "0811 3824 0110",
      whatsappNumber: "6281138240110",
      messageBranch: "Bintaro Sektor 3",
      sourcePage: 17
    }
  },

  contactDetails: {
    email: "serunimontessori@gmail.com",
    instagram: "@serunimontessori",
    sourcePage: 17
  }
});
