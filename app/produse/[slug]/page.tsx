import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  getAllSlugs,
  getProductsBySlug,
  getProductsByCategorySlug,
  getSubcategoryBySlug,
  getCategoryBySlug,
} from '@/data/products';
import ProductGallery from '@/components/ProductGallery';
import Link from 'next/link';

type CategoryPageParams = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all categories and subcategories
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageParams) {
  const { slug } = await params;

  // Check if it's a category
  const category = getCategoryBySlug(slug);
  if (category) {
    return {
      title: `${category.name} | MVP DESIGN`,
      description: `Descoperiți gama noastră completă de ${category.name.toLowerCase()}. Calitate superioară și prețuri competitive.`,
    };
  }
  
  // Check if it's a subcategory
  const subcategory = getSubcategoryBySlug(slug);
  if (subcategory) {
    return {
      title: `${subcategory.name} | MVP DESIGN`,
      description: `Descoperiți produsele noastre din categoria ${subcategory.name}. Comandați telefonic sau prin email.`,
    };
  }

  return {
    title: 'Categorie negăsită | MVP DESIGN',
  };
}

export default async function CategoryPage({ params }: CategoryPageParams) {
  const { slug } = await params;

  // Check if it's a main category
  const category = getCategoryBySlug(slug);
  if (category) {
    const products = getProductsByCategorySlug(slug);
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="relative text-white py-12 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/backgroundimage.jpeg"
              alt="Design tools pattern"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          
          {/* Gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 via-60% to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent z-[1]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-orange-100 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Acasă
              </Link>
              <span>/</span>
              <Link href="/produse" className="hover:text-white transition-colors">
                Produse
              </Link>
              <span>/</span>
              <span className="text-white font-medium">{category.name}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl">
              Descoperă gama noastră completă de {category.name.toLowerCase()}. 
              Calitate superioară, prețuri competitive și livrare rapidă.
            </p>
          </div>
        </section>

        {/* Subcategories Quick Links */}
        <section className="bg-white border-b border-gray-200 py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Subcategorii:</h2>
            <div className="flex flex-wrap gap-3">
              {category.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.slug}
                  href={`/produse/${subcategory.slug}`}
                  className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors font-medium text-sm border border-orange-200"
                >
                  {subcategory.name}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {products.length > 0 ? (
              <>
                {/* Product Count */}
                <div className="mb-8">
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">{products.length}</span> 
                    {products.length === 1 ? ' produs disponibil' : ' produse disponibile'}
                  </p>
                </div>

                <ProductGallery products={products} />
              </>
            ) : (
              /* No Products Message */
              <div className="text-center py-16">
                <svg
                  className="mx-auto h-24 w-24 text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Momentan nu avem produse în această categorie
                </h3>
                <p className="text-gray-600 mb-6">
                  Verificați categoriile înrudite sau contactați-ne pentru produse personalizate.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  Contactați-ne
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // Check if it's a subcategory
  const subcategory = getSubcategoryBySlug(slug);
  const products = getProductsBySlug(slug);

  if (!subcategory) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="relative text-white py-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/backgroundimage.jpeg"
            alt="Design tools pattern"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 via-60% to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent z-[1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-orange-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Acasă
            </Link>
            <span>/</span>
            <Link href="/produse" className="hover:text-white transition-colors">
              Produse
            </Link>
            <span>/</span>
            <Link href={`/produse/${subcategory.categorySlug}`} className="hover:text-white transition-colors">
              {getCategoryBySlug(subcategory.categorySlug)?.name || 'Categorie'}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{subcategory.name}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {subcategory.name}
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Descoperă gama noastră completă de produse pentru {subcategory.name.toLowerCase()}. 
            Calitate superioară și prețuri competitive.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {products.length > 0 ? (
            <>
              {/* Product Count */}
              <div className="mb-8">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">{products.length}</span> 
                  {products.length === 1 ? ' produs disponibil' : ' produse disponibile'}
                </p>
              </div>

              <ProductGallery products={products} />
            </>
          ) : (
            /* No Products Message */
            <div className="text-center py-16">
              <svg
                className="mx-auto h-24 w-24 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                În curând disponibil
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Produsele din această categorie vor fi disponibile în curând. 
                Pentru informații suplimentare, vă rugăm să ne contactați.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+40123456789"
                  className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Contactează-ne Telefonic
                </a>
                <a
                  href="mailto:orders@mvpdesign.ro"
                  className="inline-flex items-center border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Trimite Email
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ai nevoie de ajutor cu comanda?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Echipa noastră este aici să te ajute. Contactează-ne telefonic sau prin email 
            pentru consultanță gratuită și oferte personalizate.
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
