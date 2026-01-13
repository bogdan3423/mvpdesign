// Product data for MVP DESIGN
// Comprehensive catalog with all categories and subcategories

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  slug: string;
  images: string[];
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
      { name: "Lucrări de licență", slug: "lucrari-de-licenta", categorySlug: "lucrari-academice-profesionale" },
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
    name: "Textile & Produse personalizate",
    slug: "textile-produse-promotionale",
    subcategories: [
      { name: "Produse personalizate", slug: "produse-personalizate", categorySlug: "textile-produse-promotionale" },
      { name: "Tricouri personalizate", slug: "tricouri-personalizate", categorySlug: "textile-produse-promotionale" },
      { name: "Hanorace personalizate", slug: "hanorace-personalizate", categorySlug: "textile-produse-promotionale" },
      { name: "Tote bag / Geanta din panza", slug: "tote-bag-geanta-panza", categorySlug: "textile-produse-promotionale" },
      { name: "Cana personalizata", slug: "cana-personalizata", categorySlug: "textile-produse-promotionale" },
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
      { name: "Roll-up / Pop-up", slug: "roll-up-pop-up", categorySlug: "publicitate-expunere" },
      { name: "Steaguri", slug: "steaguri", categorySlug: "publicitate-expunere" },
    ]
  },
];

export const products: Product[] = [
  // Printuri clasice / Xerox - A4 / SRA4
  {
    id: 1,
    name: "A4 / SRA4",
    description: "Printare profesională alb-negru sau color pe hârtie simplă, premium sau texturată, 80–350g.",
    category: "Printuri clasice / Xerox",
    subcategory: "A4 / SRA4",
    slug: "a4-sra4",
    images: ["/Poze-produse/A4-SRA4.png"],
  },

  // Printuri clasice / Xerox - A3 / SRA3
  {
    id: 2,
    name: "A3 / SRA3",
    description: "Printare profesională alb-negru sau color pe format mare, ideală pentru afișe, diagrame și prezentări, 80–350g.",
    category: "Printuri clasice / Xerox",
    subcategory: "A3 / SRA3",
    slug: "a3-sra3",
    images: ["/Poze-produse/A3-SRA3.png"],
  },

  // Autocolante
  {
    id: 3,
    name: "Autocolante",
    description: "Stickere personalizate rezistente, potrivite pentru ambalaje, etichetare, branding și marketing. In diverse dimensiuni, taiate la dimensiune, pe contur sau pretaiate. Pe diverse tipuri de autocolant: Vinil autoadeziv PVC, Glossy Transparent Vinyl, Matte Vinyl, etc.",
    category: "Printuri clasice / Xerox",
    subcategory: "Autocolante",
    slug: "autocolante",
    images: ["/Poze-produse/sticker1.png","/Poze-produse/sticker-round.png","/Poze-produse/round-sticker.png","/Poze-produse/square-sticker.png"],
  },

  // Afișe / Postere
  {
    id: 4,
    name: "Afișe / Postere",
    description: "Afișe / Postere – Print afișe color/ alb-negru, in diverse dimensiuni A2, A1, A0, A0+, pe hârtie simplă, cartonată sau texturată 80–350 g.  ",
    category: "Printuri clasice / Xerox",
    subcategory: "Afișe / Postere",
    slug: "afise-postere",
    images: ["/Poze-produse/Afis-2.png","/Poze-produse/Afis.png"],
  },

  // Broșuri / Cataloage / Reviste
  {
    id: 5,
    name: "Broșuri / Cataloage / Reviste",
    description: "Broșuri profesionale color, cu pagini multiple, ideale pentru prezentări corporate și marketing. In diverse dimensiuni: A5, A4, A3, 20x20mm, s.a.",
    category: "Printuri clasice / Xerox",
    subcategory: "Broșuri / Cataloage / Reviste",
    slug: "brosuri-cataloage-reviste",
    images: ["/Poze-produse/brosura-cu-mai-multe-file-MVP-Design.png","/Poze-produse/brosurica-MVP-Design2.png","/Poze-produse/catalog-1-MVP-Design.png","/Poze-produse/catalog-2-MVP-Design.png"],
  },

  // Cărți de vizită
  {
    id: 6,
    name: "Cărți de vizită",
    description: "Cărți de vizită premium, tipărite pe hârtie de calitate(simplă, cartonată sau texturată). ",
    category: "Printuri clasice / Xerox",
    subcategory: "Cărți de vizită",
    slug: "carti-de-vizita",
    images: ["/Poze-produse/carte-de-vizita.png"],
  },

  // Diplome
  {
    id: 7,
    name: "Diplome",
    description: "Diplome elegante pe hârtie premium(simplă, cartonată sau texturată).",
    category: "Printuri clasice / Xerox",
    subcategory: "Diplome",
    slug: "diplome",
    images: ["https://images.unsplash.com/photo-1638636241638-aef5120c5153?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlwbG9tYXxlbnwwfHwwfHx8MA%3D%3D"],
  },

  // Flyere / Pliante
  {
    id: 8,
    name: "Flyere / Pliante",
    description: "Flyere eficiente pentru promovare, print color, formate multiple precum A6, A5, A4, etc.",
    category: "Printuri clasice / Xerox",
    subcategory: "Flyere / Pliante",
    slug: "flyere-pliante",
    images: ["/Poze-produse/flayer-1.png","/Poze-produse/flayer-2.png","/Poze-produse/flayer-3.png","/Poze-produse/flayer-MVP-Design1.png"],
  },

  // Mape cu buzunar
  {
    id: 9,
    name: "Mape cu buzunar",
    description: "Mape personalizate cu buzunar, ideale pentru prezentări, oferte și documente corporate.",
    category: "Printuri clasice / Xerox",
    subcategory: "Mape cu buzunar",
    slug: "mape-cu-buzunar",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
  },

  // Meniuri (restaurant / cafenea)
  {
    id: 10,
    name: "Meniuri (restaurant / cafenea)",
    description: "Meniuri personalizate, potrivite pentru restaurante, bistrouri și cafenele, diverse evenimente (nunta, botez, s.a.), pe hârtie simplă, cartonată sau texturată.",
    category: "Printuri clasice / Xerox",
    subcategory: "Meniuri (restaurant / cafenea)",
    slug: "meniuri-restaurant-cafenea",
    images: ["/Poze-produse/Meniu-MVP-Design-1.png"],
  },

  // Plicuri
  {
    id: 11,
    name: "Plicuri",
    description: "Plicuri personalizate în diverse formate (DL, C5, C4), cu logo și elemente grafice imprimate profesional.",
    category: "Printuri clasice / Xerox",
    subcategory: "Plicuri",
    slug: "plicuri",
    images: ["https://images.unsplash.com/photo-1567794636765-5e4869f627e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW52ZWxvcGV8ZW58MHx8MHx8fDA%3D"],
  },

  // Print & Cut colantare Autoƒ
  {
    id: 37,
    name: "Print & Cut colantare Auto",
    description: "Colantări auto personalizate cu print și tăiere de precizie, vinil rezistent la UV și intemperii pentru autovehicule.",
    category: "Printuri clasice / Xerox",
    subcategory: "Print & Cut colantare Auto",
    slug: "print-cut-colantare-auto",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
  },

  // Print & Cut etichete vinil
  {
    id: 38,
    name: "Print & Cut etichete vinil",
    description: "Etichete personalizate pe vinil, tăiate la contur, rezistente la apă și UV, ideale pentru produse și branding.",
    category: "Printuri clasice / Xerox",
    subcategory: "Print & Cut etichete vinil",
    slug: "print-cut-etichete-vinil",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
  },

  // Print & Cut folii geamuri / window decor
  {
    id: 39,
    name: "Print & Cut folii geamuri / window decor",
    description: "Folii decorative pentru geamuri și vitrine, print personalizat pe folie transparentă, mată sau opacă.",
    category: "Printuri clasice / Xerox",
    subcategory: "Print & Cut folii geamuri / window decor",
    slug: "print-cut-folii-geamuri-window-decor",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
  },

  // Print tapet
  {
    id: 40,
    name: "Print tapet",
    description: "Tapet personalizat cu printare de înaltă rezoluție, disponibil în diverse texturi și materiale, pentru orice ambient.",
    category: "Printuri clasice / Xerox",
    subcategory: "Print tapet",
    slug: "print-tapet",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
  },

  // Carte poștală / Cartoline
  {
    id: 12,
    name: "Carte poștală / Cartoline",
    description: "Cărți poștale și cartoline personalizate pe carton premium, cu finisaj lucios sau matt, ideale pentru orice ocazie.",
    category: "Printuri clasice / Xerox",
    subcategory: "Carte poștală / Cartoline",
    slug: "carte-postala-cartoline",
    images: ["/Poze-produse/cartolina.png"],
  },

  // Vouchere
  {
    id: 13,
    name: "Vouchere",
    description: "Vouchere personalizate pentru magazine, servicii, campanii promoționale și fidelizare.",
    category: "Printuri clasice / Xerox",
    subcategory: "Vouchere",
    slug: "vouchere",
    images: ["/Poze-produse/voucher-1-MVP-Design.png","/Poze-produse/voucher-2-MVP-Design.png"],
  },

  // Printuri mari (A0+, A0, A1, A2)
  {
    id: 14,
    name: "Printuri mari (A0+, A0, A1, A2)",
    description: "Printare color profesională în formate mari (A2, A1, A0, A0+), ideală pentru afișe, planșe și proiecte de impact.",
    category: "Printuri clasice / Xerox",
    subcategory: "Printuri mari (A0+, A0, A1, A2)",
    slug: "printuri-mari",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
  },

  // Lucrări de diplomă
  {
    id: 15,
    name: "Lucrări de diplomă",
    description: "Print profesional și legare premium pentru lucrări de licență, master și disertații, teze de doctorat si de abilitare, etc.",
    category: "Lucrări academice & profesionale",
    subcategory: "Lucrări de diplomă",
    slug: "lucrari-de-diploma",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
  },

  // Lucrări de licență
  {
    id: 44,
    name: "Lucrări de licență",
    description: "Printare și legare profesională pentru lucrări de licență, copertă personalizată cu inscripționare, finisaj de calitate.",
    category: "Lucrări academice & profesionale",
    subcategory: "Lucrări de licență",
    slug: "lucrari-de-licenta",
    images: ["/Poze-produse/licenta.png"],
  },

  // Planșe inginerie / arhitectură + Pliere
  {
    id: 16,
    name: "Planșe inginerie / arhitectură + Pliere",
    description: "Print planșe tehnice format mare, cu opțiune profesională de pliere la A4. ",
    category: "Lucrări academice & profesionale",
    subcategory: "Planșe inginerie / arhitectură + Pliere",
    slug: "planse-inginerie-arhitectura",
    images: ["/Poze-produse/Planse-1-MVP-Design.png","/Poze-produse/Planse-2-MVP-Design.png","/Poze-produse/Planse-3-MVP-Design.png"],
  },

  // Rețetare medicale / Formulare
  {
    id: 17,
    name: "Rețetare medicale / Formulare",
    description: "Formulare și rețetare medicale personalizate pentru cabinete, clinici și laboratoare.",
    category: "Lucrări academice & profesionale",
    subcategory: "Rețetare medicale / Formulare",
    slug: "retetare-medicale-formulare",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
  },

  // Agende / Notebooks
  {
    id: 18,
    name: "Agende / Notebooks",
    description: "Agende personalizate cu copertă premium,  ideale pentru branding, office și cadouri corporate. In dimensiunile A4, A5, A6. Coperta poate fi soft cover sau hard cover. ",
    category: "Papetărie & Office",
    subcategory: "Agende / Notebooks",
    slug: "agende-notebooks",
    images: ["/Poze-produse/agenda-a6.png","/Poze-produse/agenda-hard-cover.png"],
  },

  // Plannere de perete
  {
    id: 19,
    name: "Plannere de perete",
    description: "Plannere mari pentru birou, ideale pentru planificare, proiecte și calendarizare. In diverse dimensiuni, A4, A3, A2, A1, A0, A0+, s.a.",
    category: "Papetărie & Office",
    subcategory: "Plannere de perete",
    slug: "plannere-de-perete",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
  },

  // Calendare
  {
    id: 20,
    name: "Calendare",
    description: "Calendare personalizate de buzunar, birou sau perete, cu imagini de calitate și branding. In diverse dimensiuni, DL, 10x20cm, 15x15cm A5, A4, A3, s.a.",
    category: "Papetărie & Office",
    subcategory: "Calendare",
    slug: "calendare",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
  },

  // Canvas
  {
    id: 21,
    name: "Canvas",
    description: "Print pe pânză canvas de înaltă calitate, ideal pentru decor interior, birouri, spații comerciale și cadouri personalizate. Cu serviciu de prindere pe șasiu. In diverse dimensiuni: 30x30cm, 30x40cm, 40x40cm, 40x50cm, 50x50cm, 50x60cm, s.a.",
    category: "Papetărie & Office",
    subcategory: "Canvas",
    slug: "canvas",
    images: ["/Poze-produse/canvas-2.png","/Poze-produse/canvas.png"],
  },

  // Ecusoane
  {
    id: 22,
    name: "Ecusoane",
    description: "Ecusoane personalizate pentru evenimente sau corporații, cu pin sau agrafă, diverse forme și mărimi disponibile.",
    category: "Papetărie & Office",
    subcategory: "Ecusoane",
    slug: "ecusoane",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
  },

  // Produse personalizate
  {
    id: 23,
    name: "Produse personalizate",
    description: "Produse promoționale personalizate: pixuri, brelouri, agende și multe altele, cu logo sau design unic.",
    category: "Textile & Produse personalizate",
    subcategory: "Produse personalizate",
    slug: "produse-personalizate",
    images: ["/Poze-produse/cana.png","/Poze-produse/cana-2.png","/Poze-produse/punga.png","/Poze-produse/pix-personalizat-MVP-Design.png"],
  },

  // Tricouri personalizate
  {
    id: 24,
    name: "Tricouri personalizate",
    description: "Tricouri personalizate cu print rezistent, perfecte pentru promoții și merchandising.",
    category: "Textile & Produse personalizate",
    subcategory: "Tricouri personalizate",
    slug: "tricouri-personalizate",
    images: ["/Poze-produse/tricou1.png","/Poze-produse/tricou-spate.png","/Poze-produse/tricou-fata.png","/Poze-produse/tricou-fata-2.png"],
  },

  // Hanorace personalizate
  {
    id: 25,
    name: "Hanorace personalizate",
    description: "Hanorace personalizate cu print durabil pentru branding, echipe sau merchandising.",
    category: "Textile & Produse personalizate",
    subcategory: "Hanorace personalizate",
    slug: "hanorace-personalizate",
    images: ["/Poze-produse/hanorac-spate.png"],
  },

  // Tote bag / Geanta din panza
  {
    id: 41,
    name: "Tote bag / Geanta din panza",
    description: "Sacoșe textile personalizate, ecologice, perfecte pentru retail, branduri și evenimente.",
    category: "Textile & Produse personalizate",
    subcategory: "Tote bag / Geanta din panza",
    slug: "tote-bag-geanta-panza",
    images: ["/Poze-produse/punga.png"],
  },

  // Cana personalizata
  {
    id: 42,
    name: "Cana personalizata",
    description: "Căni personalizate cu print foto sau logo, ceramică de calitate, ideale pentru cadouri sau promovare.",
    category: "Textile & Produse personalizate",
    subcategory: "Cana personalizata",
    slug: "cana-personalizata",
    images: ["/Poze-produse/cana.png","/Poze-produse/cana-2.png"],
  },

  // Invitații de nuntă/botez/evenimente
  {
    id: 26,
    name: "Invitații de nuntă/botez/evenimente",
    description: "Invitații de nuntă elegante, cu hârtie premium (simplă, cartonată sau texturată) și design personalizat.",
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Invitații de nuntă/botez/evenimente",
    slug: "invitatii-nunta-botez-evenimente",
    images: ["/Poze-produse/invitatie-de-nunta1-MVP-Design.png","/Poze-produse/invitatie-de-nunta2-MVP-Design.png"],
  },

  // Bilete evenimente
  {
    id: 43,
    name: "Bilete evenimente",
    description: "Bilete personalizate cu elemente de rituire, ideale pentru concerte, conferințe și festivaluri. La cere pot fi inseriate.",
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Bilete evenimente",
    slug: "bilete-evenimente",
    images: ["/Poze-produse/bileteevenimente.jpeg"],
  },

  // Felicitări
  {
    id: 27,
    name: "Felicitări",
    description: "Felicitări personalizate pentru evenimente și sărbători, cu print color de calitate.",
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Felicitări",
    slug: "felicitari",
    images: ["/Poze-produse/felicitare1.png","/Poze-produse/felicitar2.png","/Poze-produse/felicitar3.png"],
  },

  // Albume foto
  {
    id: 28,
    name: "Albume foto",
    description: "Albume foto premium cu print de calitate și legare elegantă, perfecte pentru evenimente sau portofolii. In diverse dimensiuni: 20x20mm, 15x15mm, A4, A5, etc. Portret, landscape sau square.",
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Albume foto",
    slug: "albume-foto",
    images: ["/Poze-produse/album-15x15.png"],
  },

  // Poze / Fotografii
  {
    id: 29,
    name: "Poze / Fotografii",
    description: "Printare fotografii de înaltă calitate pe hârtie fotografică premium, disponibile în diverse formate standard sau personalizate.",
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Poze / Fotografii",
    slug: "poze-fotografii",
    images: ["/Poze-produse/poza-1.png"],
  },

  // Tablouri
  {
    id: 30,
    name: "Tablouri",
    description: "Tablouri personalizate pe canvas, forex sau hârtie foto, cu montare pe ramă, orice imagine sau design.",
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Tablouri",
    slug: "tablouri",
    images: ["https://images.unsplash.com/photo-1580493113011-ad79f792a7c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FudmFzfGVufDB8fDB8fHww"],
  },

  // Mape de prezentare
  {
    id: 31,
    name: "Mape de prezentare",
    description: "Mape de prezentare personalizate cu print profesional, copertă rigidă și buzunare interioare pentru documente.",
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Mape de prezentare",
    slug: "mape-de-prezentare",
    images: ["https://images.unsplash.com/photo-1595860041826-de0b53177bcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpbGVzfGVufDB8fDB8fHww"],
  },

  // Lista de invitați
  {
    id: 32,
    name: "Lista de invitați",
    description: "Liste de invitați personalizate pentru evenimente, design elegant, printare pe hârtie premium sau canvas.",
    category: "Evenimente & Cadouri personalizate",
    subcategory: "Lista de invitați",
    slug: "lista-de-invitati",
    images: ["https://images.unsplash.com/photo-1737749685390-0959c05aecbb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW52aXRhdGlvbnMlMjBsaXN0fGVufDB8fDB8fHww"],
  },

  // Bannere / Mesh-uri
  {
    id: 33,
    name: "Bannere / Mesh-uri",
    description: "Bannere outdoor rezistente la intemperii, mesh sau vinyl, potrivite pentru publicitate vizibilă, in divesre dimensiuni, A3, A2, A1, A0, A0+, pana la 1,6m/latura.",
    category: "Publicitate & Expunere",
    subcategory: "Bannere / Mesh-uri",
    slug: "bannere-mesh-uri",
      images: ["/Poze-produse/banner.png","/Poze-produse/bilboard.png"],
    },

  // Roll-up / Pop-up
  {
    id: 34,
    name: "Roll-up / Pop-up",
    description: "Roll-up-uri profesionale, ușor de montat, ideale pentru evenimente și campanii de promovare.",
    category: "Publicitate & Expunere",
    subcategory: "Roll-up / Pop-up",
    slug: "roll-up-pop-up",
    images: ["/Poze-produse/roll-up.png"],
  },

  // Steaguri
  {
    id: 36,
    name: "Steaguri",
    description: "Steaguri personalizate pentru exterior, branduri, evenimente și vizibilitate maximă.",
    category: "Publicitate & Expunere",
    subcategory: "Steaguri",
    slug: "steaguri",
    images: ["/Poze-produse/WhatsApp Image 2025-12-22 at 15.32.20.jpeg"],
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

// Helper function to get the first product of a subcategory by slug
export const getFirstProductBySubcategorySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};
