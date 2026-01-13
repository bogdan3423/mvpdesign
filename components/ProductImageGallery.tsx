'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

// Shimmer placeholder for instant visual feedback
const shimmerBase64 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==';

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const [allImagesPreloaded, setAllImagesPreloaded] = useState(false);

  // Preload ALL images when component mounts for instant switching
  useEffect(() => {
    if (images.length <= 1) return;

    const preloadPromises = images.map((src, index) => {
      return new Promise<void>((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, index]));
          resolve();
        };
        img.onerror = () => resolve();
        img.src = src;
      });
    });

    Promise.all(preloadPromises).then(() => {
      setAllImagesPreloaded(true);
    });
  }, [images]);

  // Handle empty images array
  if (images.length === 0) {
    return (
      <div className="relative h-80 md:h-[420px] bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
        <div className="text-gray-400 text-center">
          <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-lg font-medium">Imagine indisponibilă</p>
        </div>
      </div>
    );
  }

  // Single image - simple display
  if (images.length === 1) {
    return (
      <div className="relative h-80 md:h-[420px] bg-white rounded-xl shadow-lg overflow-hidden">
        <Image
          src={images[0]}
          alt={productName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 600px, 512px"
          priority
          placeholder="blur"
          blurDataURL={shimmerBase64}
        />
      </div>
    );
  }

  // Multiple images - gallery with thumbnails
  // Render ALL images but only show the selected one (for instant switching)
  return (
    <div className="space-y-4">
      {/* Main Image Container with Navigation */}
      <div className="relative">
        {/* Navigation Button - Previous */}
        <button
          type="button"
          onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:left-2 bg-white hover:bg-orange-50 text-gray-800 hover:text-orange-600 rounded-full p-2 md:p-3 shadow-lg border border-gray-200 transition-all hover:scale-110 z-20"
          aria-label="Imaginea anterioară"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Main Image - Render ALL images, show only selected */}
        <div className="relative h-80 md:h-[420px] bg-white rounded-xl shadow-lg overflow-hidden mx-6 md:mx-14">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-200 ${
                selectedImageIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={image}
                alt={`${productName} - imagine ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 600px, 512px"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                placeholder="blur"
                blurDataURL={shimmerBase64}
              />
            </div>
          ))}
          
          {/* Image counter */}
          <div className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>

        {/* Navigation Button - Next */}
        <button
          type="button"
          onClick={() => setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 md:right-2 bg-white hover:bg-orange-50 text-gray-800 hover:text-orange-600 rounded-full p-2 md:p-3 shadow-lg border border-gray-200 transition-all hover:scale-110 z-20"
          aria-label="Imaginea următoare"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 overflow-x-auto pb-2 justify-center px-2">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImageIndex(index)}
            className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all border-2 ${
              selectedImageIndex === index
                ? 'border-orange-500 ring-2 ring-orange-500 ring-offset-2'
                : 'border-transparent opacity-70 hover:opacity-100 hover:border-gray-300'
            }`}
            aria-label={`Selectează imaginea ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${productName} - miniatura ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
              loading="lazy"
              placeholder="blur"
              blurDataURL={shimmerBase64}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
