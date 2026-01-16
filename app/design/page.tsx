import Link from 'next/link';

export const metadata = {
  title: 'Servicii Design Grafic Profesional | MVP DESIGN',
  description: 'Servicii complete de design grafic - logo, branding, design print, web design, ilustrații personalizate și identitate vizuală pentru afacerea ta.',
};

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-orange-500 px-6 py-2 rounded-full mb-8">
              <span className="text-white font-bold text-sm tracking-wide">DESIGN GRAFIC PROFESIONAL</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Design Care<br />
              Inspiră și Vinde
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transformăm idei în vizuale memorabile care comunică eficient
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="bg-orange-500 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg"
              >
                Începe un Proiect
              </Link>
              <Link
                href="#servicii"
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg"
              >
                Vezi Serviciile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicii" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Servicii de Design
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluții complete de design grafic pentru afacerea ta
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Logo & Branding */}
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Logo & Branding</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Identități vizuale memorabile care te diferențiază de competiție
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Design logo original</li>
                  <li>• Brand guidelines</li>
                  <li>• Identitate vizuală completă</li>
                </ul>
              </div>

              {/* Print Design */}
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Design Print</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Materiale promoționale care atrag atenția
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Flyere, broșuri, cataloage</li>
                  <li>• Cărți de vizită, mape</li>
                  <li>• Afișe, bannere, roll-up</li>
                </ul>
              </div>

              {/* Digital Design */}
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Design Digital</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Design-uri personalizate pentru promovare online și offline

                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Bannere pentru evenimente și promoții</li>
                  <li>• Prelucrare imagini și retuș foto</li>
                  <li>• Layout-uri pentru oferte și campanii</li>
                </ul>
              </div>

              {/* Packaging Design */}
              

              {/* Illustration */}
              

              {/* Infographics */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                De Ce MVP DESIGN?
              </h2>
              <p className="text-xl text-gray-600">
                Combinăm creativitatea cu strategia pentru rezultate măsurabile
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Creativitate Strategică</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fiecare design este creat cu un obiectiv clar - să comunice mesajul tău și să genereze rezultate măsurabile.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Livrare Rapidă</h3>
                <p className="text-gray-600 leading-relaxed">
                  Respectăm termenele și livrăm proiecte de calitate în timp util. Flexibilitate pentru proiecte urgente.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Revizii Nelimitate</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lucrăm până când ești 100% mulțumit. Oferim revizii nelimitate pentru rezultate perfecte.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Echipă de Experți</h3>
                <p className="text-gray-600 leading-relaxed">
                  Designeri cu experiență în multiple industrii care înțeleg tendințele actuale și principiile designului.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Procesul Nostru
              </h2>
              <p className="text-xl text-gray-600">
                Un flux de lucru simplu și transparent
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Brief & Research</h3>
                <p className="text-gray-600">
                  Înțelegem viziunea ta și publicul țintă
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Concept & Sketches</h3>
                <p className="text-gray-600">
                  Creăm multiple concepte creative
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Design & Refinement</h3>
                <p className="text-gray-600">
                  Dezvoltăm și rafinăm detaliile
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Finalizare & Livrare</h3>
                <p className="text-gray-600">
                  Livrăm fișierele în toate formatele
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformăm ideile tale în detalii care fac diferența.
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Vorbește cu echipa noastră și transformă ideile în design-uri memorabile
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-10 py-4 rounded-lg font-bold text-lg shadow-lg"
              >
                Contactează-ne
              </Link>
              <a
                href="tel:+40756181046"
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg"
              >
                Sună Acum
              </a>
            </div>
            <p className="text-white/80 mt-8">
              Consultanța inițială este gratuită
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
