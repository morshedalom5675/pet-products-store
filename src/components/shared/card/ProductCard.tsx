"use client";
import React from "react";
import Image from "next/image";
import { ShoppingCart, Heart, Star } from "lucide-react";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    tag?: string;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="group bg-[#FDF7F1] rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:bg-white border border-transparent hover:border-[#FBBF24]/20">
      {/* image container */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-4">
        {product.tag && (
          <span className="absolute top-3 left-3 bg-[#FBBF24] text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
            {product.tag}
          </span>
        )}

        {/* wishlist button */}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors z-10">
          <Heart size={18} />
        </button>

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* add to cart button on hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-[#0F172A] text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer hover:bg-[#0F173A]">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* product details */}
      <div className="space-y-1">
        <p className="text-xs text-[#64748B] font-medium uppercase">
          {product.category}
        </p>
        <h3 className="font-bold text-[#0F172A] text-lg group-hover:text-[#FBBF24] transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-[#0F172A]">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-[#FBBF24] text-[#FBBF24]" />
            <span className="text-xs font-bold text-[#475569]">4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;