// Product data for MVP DESIGN
// Comprehensive catalog with all categories and subcategories

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  slug: string;
  image: string;
}

export interface Category {
  name: string;
  slug: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  name: string;
  slug: string;
  categorySlug: string;
}

export const categories: Category[] = [
  {
    name: "Printuri clasice / Xerox",
    slug: "printuri-clasice-xerox",
    subcategories: [
      { name: "A4 / SRA4", slug: "a4-sra4", categorySlug: "printuri-clasice-xerox" },
      { name: "A3 / SRA3", slug: "a3-sra3", categorySlug: "printuri-clasice-xerox" },
      { name: "Autocolante", slug: "autocolante", categorySlug: "printuri-clasice-xerox" },
      { name: "Autocolante de perete", slug: "autocolante-de-perete", categorySlug: "printuri-clasice-xerox" },
      { name: "Afișe / Postere", slug: "afise-postere", categorySlug: "printuri-clasice-xerox" },
      { name: "Broșuri / Cataloage / Reviste", slug: "brosuri-cataloage-reviste", categorySlug: "printuri-clasice-xerox" },
      { name: "Cărți de vizită", slug: "carti-de-vizita", categorySlug: "printuri-clasice-xerox" },
      { name: "Diplome", slug: "diplome", categorySlug: "printuri-clasice-xerox" },
      { name: "Flyere / Pliante", slug: "flyere-pliante", categorySlug: "printuri-clasice-xerox" },
      { name: "Mape cu buzunar", slug: "mape-cu-buzunar", categorySlug: "printuri-clasice-xerox" },
      { name: "Meniuri (restaurant / cafenea)", slug: "meniuri-restaurant-cafenea", categorySlug: "printuri-clasice-xerox" },
      { name: "Plicuri", slug: "plicuri", categorySlug: "printuri-clasice-xerox" },
      { name: "Print & Cut colantare Auto", slug: "print-cut-colantare-auto", categorySlug: "printuri-clasice-xerox" },
      { name: "Print & Cut etichete vinil", slug: "print-cut-etichete-vinil", categorySlug: "printuri-clasice-xerox" },
      { name: "Print & Cut folii geamuri / window decor", slug: "print-cut-folii-geamuri-window-decor", categorySlug: "printuri-clasice-xerox" },
      { name: "Print tapet", slug: "print-tapet", categorySlug: "printuri-clasice-xerox" },
      { name: "Carte poștală / Cartoline", slug: "carte-postala-cartoline", categorySlug: "printuri-clasice-xerox" },
      { name: "Vouchere", slug: "vouchere", categorySlug: "printuri-clasice-xerox" },
      { name: "Printuri mari (A0+, A0, A1, A2)", slug: "printuri-mari", categorySlug: "printuri-clasice-xerox" },
    ]
  },
  {
    name: "Lucrări academice & profesionale",
    slug: "lucrari-academice-profesionale",
    subcategories: [
      { name: "Lucrări de diplomă", slug: "lucrari-de-diploma", categorySlug: "lucrari-academice-profesionale" },
      { name: "Planșe inginerie / arhitectură + Pliere", slug: "planse-inginerie-arhitectura", categorySlug: "lucrari-academice-profesionale" },
      { name: "Rețetare medicale / Formulare", slug: "retetare-medicale-formulare", categorySlug: "lucrari-academice-profesionale" },
    ]
  },
  {
    name: "Papetărie & Office",
    slug: "papetarie-office",
    subcategories: [
      { name: "Agende / Notebooks", slug: "agende-notebooks", categorySlug: "papetarie-office" },
      { name: "Plannere de perete", slug: "plannere-de-perete", categorySlug: "papetarie-office" },
      { name: "Calendare", slug: "calendare", categorySlug: "papetarie-office" },
      { name: "Canvas", slug: "canvas", categorySlug: "papetarie-office" },
      { name: "Ecusoane", slug: "ecusoane", categorySlug: "papetarie-office" },
    ]
  },
  {
    name: "Textile & Produse promoționale",
    slug: "textile-produse-promotionale",
    subcategories: [
      { name: "Produse personalizate (Pixuri, Tote bags, etc.)", slug: "produse-personalizate", categorySlug: "textile-produse-promotionale" },
      { name: "Textile personalizate", slug: "textile-personalizate", categorySlug: "textile-produse-promotionale" },
      { name: "Tricouri personalizate", slug: "tricouri-personalizate", categorySlug: "textile-produse-promotionale" },
    ]
  },
  {
    name: "Evenimente & Cadouri personalizate",
    slug: "evenimente-cadouri-personalizate",
    subcategories: [
      { name: "Invitații de nuntă/botez/evenimente", slug: "invitatii-nunta-botez-evenimente", categorySlug: "evenimente-cadouri-personalizate" },
      { name: "Bilete evenimente", slug: "bilete-evenimente", categorySlug: "evenimente-cadouri-personalizate" },
      { name: "Felicitări", slug: "felicitari", categorySlug: "evenimente-cadouri-personalizate" },
      { name: "Albume foto", slug: "albume-foto", categorySlug: "evenimente-cadouri-personalizate" },
      { name: "Poze / Fotografii", slug: "poze-fotografii", categorySlug: "evenimente-cadouri-personalizate" },
      { name: "Tablouri", slug: "tablouri", categorySlug: "evenimente-cadouri-personalizate" },
      { name: "Mape de prezentare", slug: "mape-de-prezentare", categorySlug: "evenimente-cadouri-personalizate" },
      { name: "Lista de invitați", slug: "lista-de-invitati", categorySlug: "evenimente-cadouri-personalizate" },
    ]
  },
  {
    name: "Publicitate & Expunere",
    slug: "publicitate-expunere",
    subcategories: [
      { name: "Bannere / Mesh-uri", slug: "bannere-mesh-uri", categorySlug: "publicitate-expunere" },
      { name: "Roll-up", slug: "roll-up", categorySlug: "publicitate-expunere" },
      { name: "Pop-up (standuri expoziționale)", slug: "pop-up-standuri-expozitionale", categorySlug: "publicitate-expunere" },
      { name: "Steaguri", slug: "steaguri", categorySlug: "publicitate-expunere" },
    ]
  },
];

export const products: Product[] = [
  // Printuri clasice / Xerox - A4 / SRA4
  {
    id: 1,
    name: "Printare A4 Color",
    description: "Printare profesională color pe format A4, calitate superioară pentru documente, prezentări și materiale promoționale.",
    price: 1.50,
    category: "Printuri clasice / Xerox",
    subcategory: "A4 / SRA4",
    slug: "a4-sra4",
    image: "https://images.unsplash.com/photo-1630734277837-ebe62757b6e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480",
  },
  {
    id: 2,
    name: "Printare A4 Alb-Negru",
    description: "Printare economică alb-negru pe format A4, perfectă pentru documente, rapoarte și materiale de birou.",
    price: 0.50,
    category: "Printuri clasice / Xerox",
    subcategory: "A4 / SRA4",
    slug: "a4-sra4",
    image: "https://images.unsplash.com/photo-1630734277837-ebe62757b6e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480",
  },
  {
    id: 3,
    name: "Printare SRA4 Premium",
    description: "Format SRA4 (320×450 mm) pentru proiecte care necesită mărimi peste standardul A4.",
    price: 2.00,
    category: "Printuri clasice / Xerox",
    subcategory: "A4 / SRA4",
    slug: "a4-sra4",
    image: "https://images.unsplash.com/photo-1630734277837-ebe62757b6e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480",
  },

  // Printuri clasice / Xerox - A3 / SRA3
  {
    id: 4,
    name: "Printare A3 Color",
    description: "Printare color pe format A3, ideală pentru afișe mici, diagrame și prezentări de impact.",
    price: 3.00,
    category: "Printuri clasice / Xerox",
    subcategory: "A3 / SRA3",
    slug: "a3-sra3",
    image: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Printare A3 Alb-Negru",
    description: "Printare A3 monocrom pentru planșe tehnice, scheme și documente mari.",
    price: 1.50,
    category: "Printuri clasice / Xerox",
    subcategory: "A3 / SRA3",
    slug: "a3-sra3",
    image: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Autocolante
  {
    id: 6,
    name: "Autocolante Personalizate Mici",
    description: "Autocolante personalizate în orice formă și mărime, rezistente la apă și UV.",
    price: 25.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Autocolante",
    slug: "autocolante",
    image: "https://images.unsplash.com/photo-1500576992153-0271099def59?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RpY2tlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Autocolante Vitrine",
    description: "Autocolante pentru vitrine și geamuri, materiale de calitate pentru exterior.",
    price: 45.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Autocolante",
    slug: "autocolante",
    image: "https://images.unsplash.com/photo-1691480267478-8b39a167075b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Afișe / Postere
  {
    id: 8,
    name: "Afiș A2 Color",
    description: "Afișe color pe hârtie glossy sau matt, perfecte pentru promoții și evenimente.",
    price: 15.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Afișe / Postere",
    slug: "afise-postere",
    image: "https://images.unsplash.com/photo-1610376094992-6c3913ce221c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9zdGVyJTIwbW9ja3VwfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    name: "Poster A1 Premium",
    description: "Postere mari A1 pe hârtie fotografică premium, culori vibrante.",
    price: 25.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Afișe / Postere",
    slug: "afise-postere",
    image: "https://images.unsplash.com/photo-1610376094992-6c3913ce221c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9zdGVyJTIwbW9ja3VwfGVufDB8fDB8fHww",
  },

  // Broșuri / Cataloage / Reviste
  {
    id: 10,
    name: "Broșură A5 - 8 pagini",
    description: "Broșuri cu 8 pagini, printate color pe hârtie de calitate, îndoite și finisate profesional.",
    price: 5.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Broșuri / Cataloage / Reviste",
    slug: "brosuri-cataloage-reviste",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
  },
  {
    id: 11,
    name: "Catalog A4 - 24 pagini",
    description: "Cataloage profesionale cu legare la cotor, printare color de înaltă calitate.",
    price: 35.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Broșuri / Cataloage / Reviste",
    slug: "brosuri-cataloage-reviste",
    image: "https://images.unsplash.com/photo-1656379817721-774050a70dd0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJvY2h1cmV8ZW58MHx8MHx8fDA%3D",
  },

  // Cărți de vizită
  {
    id: 12,
    name: "Cărți de Vizită Standard - 100 buc",
    description: "Cărți de vizită 90x50mm, carton 300g, printare color dublu față, finisaj mat sau lucios.",
    price: 45.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Cărți de vizită",
    slug: "carti-de-vizita",
    image: "https://images.unsplash.com/photo-1628891439478-c613e85af7d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBjYXJkfGVufDB8fDB8fHww",
  },
  {
    id: 13,
    name: "Cărți de Vizită Premium - 100 buc",
    description: "Cărți de vizită pe carton premium 350g cu finisaj special și colțuri rotunjite.",
    price: 75.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Cărți de vizită",
    slug: "carti-de-vizita",
    image: "https://images.unsplash.com/photo-1623305465231-d884ce752d59?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Diplome
  {
    id: 14,
    name: "Diplomă Personalizată A4",
    description: "Diplome personalizate pe hârtie specială cu textură, cu sau fără ramă.",
    price: 25.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Diplome",
    slug: "diplome",
    image: "https://images.unsplash.com/photo-1638636241638-aef5120c5153?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlwbG9tYXxlbnwwfHwwfHx8MA%3D%3D",
  },

  // Flyere / Pliante
  {
    id: 15,
    name: "Flyere A6 - 500 buc",
    description: "Flyere format A6, printare color dublu față pe hârtie 150g.",
    price: 75.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Flyere / Pliante",
    slug: "flyere-pliante",
    image: "https://images.unsplash.com/photo-1591351659190-6258bbec984d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmx5ZXJzfGVufDB8fDB8fHww",
  },
  {
    id: 16,
    name: "Pliant A4 Triptic",
    description: "Pliant A4 îndoit triptic, printare color pe ambele fețe, hârtie glossy 200g.",
    price: 3.50,
    category: "Printuri clasice / Xerox",
    subcategory: "Flyere / Pliante",
    slug: "flyere-pliante",
    image: "https://images.unsplash.com/photo-1556943418-0e5712249b9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmx5ZXJzfGVufDB8fDB8fHww",
  },

  // Mape cu buzunar
  {
    id: 17,
    name: "Mapă Prezentare cu Buzunare",
    description: "Mape personalizate cu buzunare interioare pentru documente, printare color.",
    price: 12.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Mape cu buzunar",
    slug: "mape-cu-buzunar",
    image: "https://images.unsplash.com/photo-1584628804572-f84284d9f388?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9sZGVyfGVufDB8fDB8fHww",
  },

  // Meniuri
  {
    id: 18,
    name: "Meniu Restaurant A4",
    description: "Meniu personalizat pentru restaurant, laminat sau în coperte rigide.",
    price: 35.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Meniuri (restaurant / cafenea)",
    slug: "meniuri-restaurant-cafenea",
    image: "https://images.unsplash.com/photo-1625173616412-7b403d49a41e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 19,
    name: "Meniu Cafenea Triptic",
    description: "Meniu format A5 triptic pentru cafenea, carton 300g laminat.",
    price: 25.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Meniuri (restaurant / cafenea)",
    slug: "meniuri-restaurant-cafenea",
    image: "https://images.unsplash.com/photo-1599250300435-b9693f21830d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVudXxlbnwwfHwwfHx8MA%3D%3D",
  },

  // Plicuri
  {
    id: 20,
    name: "Plicuri DL - 100 buc",
    description: "Plicuri personalizate DL (110x220mm) cu logo și adresă.",
    price: 55.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Plicuri",
    slug: "plicuri",
    image: "https://images.unsplash.com/photo-1567794636765-5e4869f627e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW52ZWxvcGV8ZW58MHx8MHx8fDA%3D",
  },

  // Cărți poștale
  {
    id: 21,
    name: "Cărți Poștale A6 - 50 buc",
    description: "Cărți poștale personalizate pe carton 300g cu finisaj lucios.",
    price: 40.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Carte poștală / Cartoline",
    slug: "carte-postala-cartoline",
    image: "https://images.unsplash.com/photo-1681722745914-580d7f4d750e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9zdCUyMGNhcmR8ZW58MHx8MHx8fDA%3D",
  },

  // Vouchere
  {
    id: 22,
    name: "Vouchere Cadou - 50 buc",
    description: "Vouchere cadou personalizate pe carton premium, cu numerotare.",
    price: 75.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Vouchere",
    slug: "vouchere",
    image: "https://images.unsplash.com/photo-1526614180703-827d23e7c8f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm91Y2hlcnxlbnwwfHwwfHx8MA%3D%3D",
  },

  // Printuri mari
  {
    id: 23,
    name: "Print A0 Color",
    description: "Printare color pe format A0 (841×1189mm) pentru proiecte mari, planșe, afișe.",
    price: 45.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Printuri mari (A0+, A0, A1, A2)",
    slug: "printuri-mari",
    image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 24,
    name: "Print A1 Color",
    description: "Printare color format A1 (594×841mm) pentru afișe și planșe tehnice.",
    price: 30.00,
    category: "Printuri clasice / Xerox",
    subcategory: "Printuri mari (A0+, A0, A1, A2)",
    slug: "printuri-mari",
    image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnR8ZW58MHx8MHx8fDA%3D",
  },

  // Lucrări academice - Lucrări de diplomă
  {
    id: 25,
    name: "Legare Lucrare Licență",
    description: "Printare și legare profesională pentru lucrări de licență, copertă rigidă personalizată.",
    price: 65.00,
    category: "Lucrări academice & profesionale",
    subcategory: "Lucrări de diplomă",
    slug: "lucrari-de-diploma",
    image: "https://images.unsplash.com/photo-1660479123634-2c700dfbbbdb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhlc2lzfGVufDB8fDB8fHww",
  },
  {
    id: 26,
    name: "Legare Disertație",
    description: "Printare și legare pentru disertații, copertă premium cu inscripționare în relief.",
    price: 85.00,
    category: "Lucrări academice & profesionale",
    subcategory: "Lucrări de diplomă",
    slug: "lucrari-de-diploma",
    image: "https://images.unsplash.com/photo-1660479123634-2c700dfbbbdb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhlc2lzfGVufDB8fDB8fHww",
  },

  // Planșe inginerie
  {
    id: 27,
    name: "Planșe Inginerie A0",
    description: "Printare planșe tehnice A0 cu pliere standard pentru arhivare.",
    price: 50.00,
    category: "Lucrări academice & profesionale",
    subcategory: "Planșe inginerie / arhitectură + Pliere",
    slug: "planse-inginerie-arhitectura",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop",
  },
  {
    id: 28,
    name: "Planșe Arhitectură A1",
    description: "Printare planșe arhitectură A1, hârtie specială, cu sau fără pliere.",
    price: 35.00,
    category: "Lucrări academice & profesionale",
    subcategory: "Planșe inginerie / arhitectură + Pliere",
    slug: "planse-inginerie-arhitectura",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop",
  },

  // Rețetare medicale
  {
    id: 29,
    name: "Rețetare Medicale Personalizate - 100 buc",
    description: "Bloc rețetare medicale cu antet personalizat conform legislației.",
    price: 85.00,
    category: "Lucrări academice & profesionale",
    subcategory: "Rețetare medicale / Formulare",
    slug: "retetare-medicale-formulare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop",
  },
  {
    id: 30,
    name: "Formulare Personalizate A5 - 100 buc",
    description: "Formulare personalizate pentru diverse scopuri profesionale.",
    price: 65.00,
    category: "Lucrări academice & profesionale",
    subcategory: "Rețetare medicale / Formulare",
    slug: "retetare-medicale-formulare",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybXN8ZW58MHx8MHx8fDA%3D",
  },

  // Papetărie - Agende
  {
    id: 31,
    name: "Agendă Personalizată A5",
    description: "Agendă cu copertă personalizată, 365 de pagini, hârtie premium.",
    price: 95.00,
    category: "Papetărie & Office",
    subcategory: "Agende / Notebooks",
    slug: "agende-notebooks",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop",
  },
  {
    id: 32,
    name: "Notebook Premium A4",
    description: "Notebook cu copertă rigidă personalizată, 200 pagini dictando.",
    price: 75.00,
    category: "Papetărie & Office",
    subcategory: "Agende / Notebooks",
    slug: "agende-notebooks",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop",
  },

  // Plannere de perete
  {
    id: 33,
    name: "Planner Perete Anual",
    description: "Planner de perete pentru întregul an, laminat, marker inclus.",
    price: 125.00,
    category: "Papetărie & Office",
    subcategory: "Plannere de perete",
    slug: "plannere-de-perete",
    image: "https://images.unsplash.com/photo-1435527173128-983b87201f4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
  },

  // Calendare
  {
    id: 34,
    name: "Calendar Perete 2026",
    description: "Calendar de perete personalizat cu imagini și logo-ul companiei.",
    price: 45.00,
    category: "Papetărie & Office",
    subcategory: "Calendare",
    slug: "calendare",
    image: "https://images.unsplash.com/photo-1611302457661-d24c21494f2a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FsZW5kYXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 35,
    name: "Calendar Birou 2026",
    description: "Calendar de birou cu suport personalizat, 12 pagini.",
    price: 35.00,
    category: "Papetărie & Office",
    subcategory: "Calendare",
    slug: "calendare",
    image: "https://images.unsplash.com/photo-1435527173128-983b87201f4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsZW5kYXJ8ZW58MHx8MHx8fDA%3D",
  },

  // Canvas
  {
    id: 36,
    name: "Canvas 40x60 cm",
    description: "Printare pe canvas cu montare pe ramă din lemn, orice imagine.",
    price: 150.00,
    category: "Papetărie & Office",
    subcategory: "Canvas",
    slug: "canvas",
    image: "https://images.unsplash.com/photo-1580493113011-ad79f792a7c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FudmFzfGVufDB8fDB8fHww",
  },

  // Ecusoane
  {
    id: 37,
    name: "Ecusoane Personalizate - 50 buc",
    description: "Ecusoane personalizate cu pin sau agrafă, diverse forme și mărimi.",
    price: 85.00,
    category: "Papetărie & Office",
    subcategory: "Ecusoane",
    slug: "ecusoane",
    image: "https://images.unsplash.com/photo-1572727268047-362eb03e6aa0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhZGdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },

  // Textile - Produse personalizate
  {
    id: 38,
    name: "Pixuri Personalizate - 100 buc",
    description: "Pixuri cu logo-ul companiei, diverse culori disponibile.",
    price: 125.00,
    category: "Textile & Produse promoționale",
    subcategory: "Produse personalizate (Pixuri, Tote bags, etc.)",
    slug: "produse-personalizate",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVufGVufDB8fDB8fHww",
  },
  {
    id: 39,
    name: "Tote Bags Personalizate - 50 buc",
    description: "Genți textile personalizate cu print color rezistent.",
    price: 350.00,
    category: "Textile & Produse promoționale",
    subcategory: "Produse personalizate (Pixuri, Tote bags, etc.)",
    slug: "produse-personalizate",
    image: "https://images.unsplash.com/photo-1630381260512-e3fe55c11973?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG90ZSUyMGJhZ3N8ZW58MHx8MHx8fDA%3D",
  },

  // Textile personalizate
  {
    id: 40,
    name: "Prosoape Personalizate",
    description: "Prosoape cu broderie sau print personalizat, diverse mărimi.",
    price: 65.00,
    category: "Textile & Produse promoționale",
    subcategory: "Textile personalizate",
    slug: "textile-personalizate",
    image: "https://images.unsplash.com/photo-1666934209606-a955a12edd63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjB0b3dlbHN8ZW58MHx8MHx8fDA%3D",
  },

  // Tricouri
  {
    id: 41,
    name: "Tricouri Personalizate - 10 buc",
    description: "Tricouri cu print DTG full color, bumbac 100%, diverse mărimi.",
    price: 250.00,
    category: "Textile & Produse promoționale",
    subcategory: "Tricouri personalizate",
    slug: "tricouri-personalizate",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 42,
    name: "Tricouri Premium Personalizate - 10 buc",
    description: "Tricouri premium cu broderie sau print complex, bumbac premium.",
    price: 350.00,
    category: "Textile & Produse promoționale",
    subcategory: "Tricouri personalizate",
    slug: "tricouri-personalizate",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
  },

  // Evenimente - Invitații
  {
    id: 43,
    name: "Invitații Nuntă - 50 buc",
    description: "Invitații de nuntă personalizate pe carton special cu finisaje premium.",
    price: 175.00,
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Invitații de nuntă/botez/evenimente",
    slug: "invitatii-nunta-botez-evenimente",
    image: "https://images.unsplash.com/photo-1632610992723-82d7c212f6d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGludml0YXRpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 44,
    name: "Invitații Botez - 50 buc",
    description: "Invitații de botez personalizate cu design unic și plicuri incluse.",
    price: 150.00,
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Invitații de nuntă/botez/evenimente",
    slug: "invitatii-nunta-botez-evenimente",
    image: "https://images.unsplash.com/photo-1632610992723-82d7c212f6d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGludml0YXRpb258ZW58MHx8MHx8fDA%3D",
  },

  // Felicitări
  {
    id: 45,
    name: "Felicitări Personalizate - 25 buc",
    description: "Felicitări personalizate pentru orice ocazie, cu plicuri.",
    price: 75.00,
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Felicitări",
    slug: "felicitari",
    image: "https://images.unsplash.com/photo-1579532649672-13fac8cde626?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlydGhkYXklMjBjYXJkfGVufDB8fDB8fHww",
  },

  // Albume foto
  {
    id: 46,
    name: "Album Foto Premium 30x30 cm",
    description: "Album foto cu copertă rigidă personalizată, 40 pagini interioare.",
    price: 285.00,
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Albume foto",
    slug: "albume-foto",
    image: "https://images.unsplash.com/photo-1594333614467-15503a37381a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvJTIwYWxidW18ZW58MHx8MHx8fDA%3D",
  },

  // Poze / Fotografii
  {
    id: 47,
    name: "Print Foto 10x15 cm - 100 buc",
    description: "Printare fotografii format standard pe hârtie fotografică premium.",
    price: 45.00,
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Poze / Fotografii",
    slug: "poze-fotografii",
    image: "https://images.unsplash.com/photo-1531684096782-1af8c28ddb95?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG8lMjBwcmludHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 48,
    name: "Print Foto 20x30 cm",
    description: "Printare fotografii mari pe hârtie fotografică glossy sau matt.",
    price: 15.00,
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Poze / Fotografii",
    slug: "poze-fotografii",
    image: "https://images.unsplash.com/photo-1531684096782-1af8c28ddb95?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG8lMjBwcmludHxlbnwwfHwwfHx8MA%3D%3D",
  },

  // Tablouri
  {
    id: 49,
    name: "Tablou Canvas 60x90 cm",
    description: "Tablou pe canvas cu montare pe ramă lemn, orice imagine sau design.",
    price: 245.00,
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Tablouri",
    slug: "tablouri",
    image: "https://images.unsplash.com/photo-1580493113011-ad79f792a7c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FudmFzfGVufDB8fDB8fHww",
  },

  // Mape de prezentare
  {
    id: 50,
    name: "Mapă Prezentare Premium A4",
    description: "Mapă de prezentare cu print personalizat, copertă rigidă, buzunare interioare.",
    price: 25.00,
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Mape de prezentare",
    slug: "mape-de-prezentare",
    image: "https://images.unsplash.com/photo-1595860041826-de0b53177bcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpbGVzfGVufDB8fDB8fHww",
  },

  // Lista de invitați
  {
    id: 51,
    name: "Lista Invitați Nuntă Premium",
    description: "Listă de invitați personalizată cu design elegant pentru evenimente.",
    price: 45.00,
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Lista de invitați",
    slug: "lista-de-invitati",
    image: "https://images.unsplash.com/photo-1737749685390-0959c05aecbb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW52aXRhdGlvbnMlMjBsaXN0fGVufDB8fDB8fHww",
  },

  // Publicitate - Bannere
  {
    id: 52,
    name: "Banner 2x1 m",
    description: "Banner personalizat print full color pe material frontlit rezistent.",
    price: 85.00,
    category: "Publicitate & Expunere",
    subcategory: "Bannere / Mesh-uri",
    slug: "bannere-mesh-uri",
    image: "https://images.unsplash.com/photo-1691480267478-8b39a167075b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 53,
    name: "Mesh 3x2 m",
    description: "Banner mesh perforat pentru exterior, rezistent la vânt.",
    price: 165.00,
    category: "Publicitate & Expunere",
    subcategory: "Bannere / Mesh-uri",
    slug: "bannere-mesh-uri",
    image: "https://images.unsplash.com/photo-1691480267478-8b39a167075b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Roll-up
  {
    id: 54,
    name: "Roll-up 85x200 cm",
    description: "Roll-up profesional cu suport aluminiu și print de calitate, geantă de transport inclusă.",
    price: 185.00,
    category: "Publicitate & Expunere",
    subcategory: "Roll-up",
    slug: "roll-up",
    image: "https://images.unsplash.com/photo-1691480267478-8b39a167075b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Pop-up
  {
    id: 55,
    name: "Pop-up 3x2 m",
    description: "Stand expozițional pop-up complet personalizat cu print textile și structură pliabilă.",
    price: 1250.00,
    category: "Publicitate & Expunere",
    subcategory: "Pop-up (standuri expoziționale)",
    slug: "pop-up-standuri-expozitionale",
    image: "https://images.unsplash.com/photo-1691480267478-8b39a167075b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Steaguri
  {
    id: 56,
    name: "Steag Publicitаr 3 m cu Suport",
    description: "Steag tip plajă personalizat cu print dublu față și suport metalic.",
    price: 325.00,
    category: "Publicitate & Expunere",
    subcategory: "Steaguri",
    slug: "steaguri",
    image: "https://images.unsplash.com/photo-1691480267478-8b39a167075b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Helper function to get all subcategories as flat array
export const getAllSubcategories = (): Subcategory[] => {
  return categories.flatMap(cat => cat.subcategories);
};

// Helper function to get all slugs (categories + subcategories)
export const getAllSlugs = (): string[] => {
  const categorySlugs = categories.map(cat => cat.slug);
  const subcategorySlugs = getAllSubcategories().map(sub => sub.slug);
  return [...categorySlugs, ...subcategorySlugs];
};

// Helper function to get products by subcategory slug
export const getProductsBySlug = (slug: string): Product[] => {
  return products.filter(product => product.slug === slug);
};

// Helper function to get all products by category slug (includes all subcategories)
export const getProductsByCategorySlug = (categorySlug: string): Product[] => {
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) return [];
  
  const subcategorySlugs = category.subcategories.map(sub => sub.slug);
  return products.filter(product => subcategorySlugs.includes(product.slug));
};

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug === slug);
};

// Helper function to get subcategory info
export const getSubcategoryBySlug = (slug: string): Subcategory | undefined => {
  return getAllSubcategories().find(sub => sub.slug === slug);
};

// Helper function to get product by id
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get all product ids
export const getAllProductIds = (): number[] => {
  return products.map(product => product.id);
};
