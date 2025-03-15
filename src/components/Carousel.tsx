'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useAppStore from '@/store/useAppStore';

interface CarouselItem {
  id: string;
  imageUrl: string;
  title: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  buttonText: {
    zh: string;
    en: string;
  };
  buttonLink: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel = ({ items, autoPlay = true, interval = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { locale } = useAppStore();
  
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);
  
  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, goToNext]);
  
  if (items.length === 0) return null;
  
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-black/50 z-10" />
          <Image
            src={item.imageUrl}
            alt={locale === 'zh' ? item.title.zh : item.title.en}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {locale === 'zh' ? item.title.zh : item.title.en}
              </h2>
              <p className="text-xl mb-8">
                {locale === 'zh' ? item.description.zh : item.description.en}
              </p>
              <Link
                href={item.buttonLink}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                {locale === 'zh' ? item.buttonText.zh : item.buttonText.en}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 