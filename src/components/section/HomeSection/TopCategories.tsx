"use client";

import React from "react";
import Container from "../../shared/container/Container";
import Image from "next/image";
import { ArrowRight } from "lucide-react"; 

import cat1 from "@/src/app/assets/image/pet1.jpg";
import cat2 from "@/src/app/assets/image/pet2.jpg";
import cat3 from "@/src/app/assets/image/pet3.jpg";
import cat4 from "@/src/app/assets/image/pet3.jpg";
import cat5 from "@/src/app/assets/image/pets-review.jpg";

const categories = [
  { id: 1, name: "Dog Food", items: "120+ Items", image: cat1 },
  { id: 2, name: "Cat Toys", items: "85+ Items", image: cat2 },
  { id: 3, name: "Pet Grooming", items: "40+ Items", image: cat3 },
  { id: 5, name: "Pet Health", items: "30+ Items", image: cat5 },
  { id: 4, name: "Bird Supplies", items: "65+ Items", image: cat4 },
  { id: 6, name: "Accessories", items: "95+ Items", image: cat1 },
];

const TopCategories = () => {
  return (
    <section className="py-16 bg-[#FDF7F1]/50 font-jakarta">
      <Container>
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
            Top Categories
          </h2>
          <p className="text-[#64748B] text-sm md:text-base max-w-lg mx-auto">
            Explore our wide range of pet supplies by category to find exactly what your furry friend needs.
          </p>
        </div>

        {/* category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 p-1 border-2 border-transparent group-hover:border-[#FBBF24] transition-all duration-300 shadow-sm bg-white">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-[#0F172A] text-sm md:text-base group-hover:text-[#FBBF24] transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  {category.items}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-8 py-3 bg-[#A2C75F] text-white font-bold rounded-full hover:bg-[#8eb052]  transition-all duration-300 group shadow-lg cursor-pointer">
            View All Categories
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default TopCategories;