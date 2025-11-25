import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section 
        className="relative overflow-hidden text-white py-16 bg-cover bg-center"
        style={{ backgroundImage: 'url(/backgroundimage.jpeg)' }}
      >
        {/* Gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 via-60% to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent z-[1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contactează-ne
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Intră în legătură cu echipa noastră. Suntem aici să te ajutăm să găsești produsele perfecte pentru nevoile tale.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Contactează-ne
              </h2>
              
              {/* Contact Methods */}
              <div className="space-y-6 mb-10">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white p-4 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Telefon</h3>
                    <a href="tel:+40123456789" className="text-orange-500 hover:text-orange-600 text-lg">
                      +40 756 181 046
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Luni - Vineri: 9:00 - 18:00</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white p-4 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Email</h3>
                    <a href="mailto:orders@mvpdesign.ro" className="text-orange-500 hover:text-orange-600 text-lg">
                      orders@mvpdesign.ro
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Răspundem în 24 de ore</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white p-4 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Adresă</h3>
                    <p className="text-gray-600">
                      Strada Victor Babeș 9<br />
                      Cluj-Napoca, România<br />
                      
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Program de Lucru</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Luni - Vineri</span>
                    <span className="font-semibold text-gray-800">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sâmbătă</span>
                    <span className="font-semibold text-gray-800">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duminică</span>
                    <span className="font-semibold text-gray-800">Închis</span>
                  </div>
                </div>
              </div>

              {/* Quick Order Buttons */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+40123456789"
                  className="flex items-center justify-center bg-orange-500 text-white px-6 py-4 rounded-lg hover:bg-orange-600 transition-colors font-bold"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Sună Acum
                </a>
                <a
                  href="mailto:orders@mvpdesign.ro"
                  className="flex items-center justify-center border-2 border-orange-500 text-orange-500 px-6 py-4 rounded-lg hover:bg-orange-50 transition-colors font-bold"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Trimite Email
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Trimite-ne un Mesaj
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Vizitează Magazinul Nostru
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* Google Maps Embed - Replace with your actual location */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.941170368535!2d23.582900876300247!3d46.76605604564236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e8242bb91c5%3A0x672ecd07a2af58a7!2sMVP%20Copy%20Center!5e0!3m2!1sen!2sro!4v1763324255709!5m2!1sen!2sro"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full"
              title="MVP DESIGN Location"
            />
          </div>
          <p className="text-center text-gray-600 mt-6">
            Ne găsești pe Strada Victor Babeș 9, Cluj-Napoca, România
          </p>
        </div>
      </section>
    </div>
  );
}
