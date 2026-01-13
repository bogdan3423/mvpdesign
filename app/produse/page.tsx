import Link from 'next/link';
import { categories } from '@/data/products';
import Image from 'next/image';

export default function ProduseIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/backgroundimage.jpeg"
            alt="Design tools pattern"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={75}
          />
        </div>
        
        {/* Gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 via-60% to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent z-[1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Toate Categoriile de Produse
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Explorează gama completă de servicii MVP DESIGN. De la printuri clasice la materiale promoționale, 
            avem tot ce ai nevoie pentru afacerea ta.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {categories.map((category) => (
              <div key={category.slug} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                  <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                  <p className="text-orange-100">
                    {category.subcategories.length} subcategorii disponibile
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.slug}
                        href={`/produse/${subcategory.slug}`}
                        className="group bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-lg p-4 transition-all duration-200 flex items-center justify-between"
                      >
                        <span className="text-gray-700 group-hover:text-orange-600 font-medium text-sm">
                          {subcategory.name}
                        </span>
                        <svg 
                          className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Nu găsești ce cauți?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactează-ne direct pentru consultanță personalizată și oferte speciale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+40123456789"
              className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +40 756 181 046
            </a>
            <a
              href="mailto:orders@mvpdesign.ro"
              className="inline-flex items-center border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-medium text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              orders@mvpdesign.ro
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
