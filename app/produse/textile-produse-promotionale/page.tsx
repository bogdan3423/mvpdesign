import { getProductsByCategorySlug, getCategoryBySlug } from '@/data/products';
import ProductGallery from '@/components/ProductGallery';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Textile & Produse promoționale | MVP DESIGN',
  description: 'Tricouri personalizate, textile cu logo, pixuri branduite, tote bags și alte produse promoționale pentru afacerea ta.',
};

export default function TextileProdusePromotionalePage() {
  const categorySlug = 'textile-produse-promotionale';
  const category = getCategoryBySlug(categorySlug);
  const products = getProductsByCategorySlug(categorySlug);

  if (!category) {
    return null;
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
            Produse personalizate și branduite pentru promovarea afacerii tale. 
            Tricouri, textile, gadgeturi și articole promoționale de calitate superioară.
          </p>
        </div>
      </section>

      {/* Subcategories Quick Links */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Explorează subcategoriile:</h2>
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
              <p className="text-gray-600">Nu există produse disponibile momentan.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
