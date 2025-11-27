import type { KeyboardEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const handleCardClick = () => {
    if (onClick) {
      onClick(product);
    }
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(product);
    }
  };

  const content = (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col ${onClick ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2' : ''}`}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `Detalii produs ${product.name}` : undefined}
      onClick={onClick ? handleCardClick : undefined}
      onKeyDown={onClick ? handleCardKeyDown : undefined}
    >
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
          {product.subcategory}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
          {product.description}
        </p>

        {/* Order Buttons */}
        <div className="mt-auto space-y-2">
          <a
            href="tel:+40123456789"
            className="flex items-center justify-center w-full bg-orange-500 text-white px-4 py-2.5 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm shadow-md hover:shadow-lg"
            onClick={(event) => onClick && event.stopPropagation()}
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Comandă Telefonic
          </a>
          <a
            href={`mailto:orders@mvpdesign.ro?subject=Comandă: ${encodeURIComponent(product.name)}&body=Aș dori să comand:%0D%0A%0D%0AProdus: ${encodeURIComponent(product.name)}%0D%0ACategorie: ${encodeURIComponent(product.subcategory)}%0D%0A%0D%0AVă rog să mă contactați pentru detalii despre cantitate și livrare.%0D%0A%0D%0AMulțumesc!`}
            className="flex items-center justify-center w-full border-2 border-orange-500 text-orange-500 px-4 py-2.5 rounded-lg hover:bg-orange-50 transition-colors font-medium text-sm"
            onClick={(event) => onClick && event.stopPropagation()}
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Comandă prin Email
          </a>
        </div>
      </div>
    </div>
  );

  // If onClick is not provided, wrap with Link to product detail page
  if (!onClick) {
    return (
      <Link href={`/produse/produs/${product.id}`} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
