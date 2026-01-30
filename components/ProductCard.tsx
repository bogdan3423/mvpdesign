import type { KeyboardEvent, MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

// Shimmer placeholder for instant visual feedback
const shimmerBase64 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiNmM2Y0ZjYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjZTVlN2ViIiBvZmZzZXQ9IjUwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmM2Y0ZjYiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjNmNGY2Ii8+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=';

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
  priority?: boolean;
}

export default function ProductCard({ product, onClick, priority = false }: ProductCardProps) {
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

  const handlePhoneClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.href = 'tel:+40123456789';
  };

  const handleEmailClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.href = `mailto:printmvpdesign@gmail.com?subject=Comandă: ${encodeURIComponent(product.name)}&body=Aș dori să comand:%0D%0A%0D%0AProdus: ${encodeURIComponent(product.name)}%0D%0ACategorie: ${encodeURIComponent(product.subcategory)}%0D%0A%0D%0AVă rog să mă contactați pentru detalii despre cantitate și livrare.%0D%0A%0D%0AMulțumesc!`;
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
        {product.images.length > 0 ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority={priority}
            placeholder="blur"
            blurDataURL={shimmerBase64}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            loading={priority ? 'eager' : 'lazy'}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
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
          <button
            type="button"
            onClick={handlePhoneClick}
            className="flex items-center justify-center w-full bg-orange-500 text-white px-4 py-2.5 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Comandă Telefonic
          </button>
          <button
            type="button"
            onClick={handleEmailClick}
            className="flex items-center justify-center w-full border-2 border-orange-500 text-orange-500 px-4 py-2.5 rounded-lg hover:bg-orange-50 transition-colors font-medium text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Comandă prin Email
          </button>
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
