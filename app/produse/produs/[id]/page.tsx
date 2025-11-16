import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  getProductById,
  getAllProductIds,
  getCategoryBySlug,
  getSubcategoryBySlug,
} from '@/data/products';

type ProductPageParams = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const ids = getAllProductIds();
  return ids.map((id) => ({ id: id.toString() }));
}

export async function generateMetadata({ params }: ProductPageParams) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    return {
      title: 'Produs negăsit | MVP DESIGN',
    };
  }

  return {
    title: `${product.name} | MVP DESIGN`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({ params }: ProductPageParams) {
  const { id } = await params;
  const productId = Number(id);
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  const subcategory = getSubcategoryBySlug(product.slug);
  const category = subcategory
    ? getCategoryBySlug(subcategory.categorySlug)
    : undefined;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-orange-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Acasă
            </Link>
            <span>/</span>
            <Link href="/produse" className="hover:text-white transition-colors">
              Produse
            </Link>
            {category && (
              <>
                <span>/</span>
                <Link href={`/produse/${category.slug}`} className="hover:text-white transition-colors">
                  {category.name}
                </Link>
              </>
            )}
            {subcategory && (
              <>
                <span>/</span>
                <Link href={`/produse/${subcategory.slug}`} className="hover:text-white transition-colors">
                  {subcategory.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-white font-medium">{product.name}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-orange-100 max-w-3xl">{product.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative h-80 md:h-[420px] bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Descriere produs</h2>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
                  <div className="text-sm text-orange-600 font-medium uppercase tracking-wide">Preț de pornire</div>
                  <div className="text-3xl font-bold text-orange-500 mt-2">
                    {product.price.toFixed(2)} lei
                  </div>
                  <p className="text-xs text-orange-600 mt-1">* Preț orientativ. Contactați-ne pentru oferta personalizată.</p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Categorie</div>
                  <div className="text-lg font-semibold text-gray-800 mt-2">
                    {category?.name || product.category}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {subcategory?.name || product.subcategory}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Cum comanzi?</h3>
                <p className="text-gray-600">
                  Trimite-ne specificațiile produsului (cantitate, dimensiuni, materiale preferate) iar echipa
                  noastră te contactează cu o ofertă personalizată.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+40123456789"
                    className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Sună-ne
                  </a>
                  <a
                    href={`mailto:orders@mvpdesign.ro?subject=Solicitare%20oferta:%20${encodeURIComponent(product.name)}&body=Bună%20ziua,%0D%0A%0D%0AAș%20dori%20o%20ofertă%20pentru:%0D%0AProdus:%20${encodeURIComponent(product.name)}%0D%0ACategorie:%20${encodeURIComponent(product.subcategory)}%0D%0AID%20produs:%20${product.id}%0D%0A%0D%0AMențiuni:%0D%0A-%20Cantitate%20dorita:%0D%0A-%20Dimensiuni%20/Specificatii:%0D%0A%0D%0AVă%20mulțumesc!`}
                    className="flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Scrie-ne un email
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Alte produse din aceeași categorie</h3>
                {category && (
                  <Link
                    href={`/produse/${category.slug}`}
                    className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  >
                    Vezi întreaga gamă
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
