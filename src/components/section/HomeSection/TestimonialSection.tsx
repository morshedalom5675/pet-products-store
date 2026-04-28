"use client";

import React, { useState } from "react";
import Container from "../../shared/container/Container";
import Image from "next/image";
import { Star } from "lucide-react";

import reviewImage1 from "@/src/app/assets/image/pets-review.jpg"; 
import reviewImage2 from "@/src/app/assets/image/pet1.jpg"; 
import reviewImage3 from "@/src/app/assets/image/pet2.jpg"; 
import reviewImage4 from "@/src/app/assets/image/pet3.jpg"; 

const reviewers = [
  {
    id: 1,
    name: "Jane Cooper",
    role: "Regular Customer",
    review: "I've been buying premium dog food and chew toys from this store for months. The quality is consistently excellent, and the packaging is very secure. My golden retriever absolutely loves the treats! Fast delivery and genuine products make this my favorite pet shop.",
    image: reviewImage1,
  },
  {
    id: 2,
    name: "Arlene McCoy",
    role: "Cat Owner",
    review: "Finally found a place that sells authentic cat furniture and high-quality litter. The scratching post I ordered is very sturdy and looks great in my living room. Their collection of pet accessories is impressive and reasonably priced. Highly recommended for all pet parents!",
    image: reviewImage2,
  },
  {
    id: 3,
    name: "Devon Lane",
    role: "Pet Enthusiast",
    review: "Amazing variety of pet products! I recently bought a smart feeder and some grooming tools. Everything works perfectly as described. It's so convenient to find all the top brands in one place. Their customer support helped me choose the right size harness for my bulldog.",
    image: reviewImage3,
  },
  {
    id: 4,
    name: "Courtney Henry",
    role: "Happy Shopper",
    review: "The best e-commerce site for pet supplies. I ordered a winter coat for my puppy and the material is so soft and warm. The website is easy to navigate, and the checkout process was seamless. I'm really impressed with how quickly they dispatched my order!",
    image: reviewImage4,
  },
];

const TestimonialSection = () => {
  const [selectedReviewer, setSelectedReviewer] = useState(reviewers[0]);

  return (
    <section className="bg-[#FDF7F1] py-16 lg:py-24 font-jakarta">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3 tracking-tight">
            Hear From Our Happy Shoppers.
          </h2>
          <p className="text-[#475569] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Top-Quality Pet Products Delivered to Your Door. Explore why pet owners trust us for the best food, toys, and accessories.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-50 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          
          <div className="relative w-45 md:w-70 lg:w-[320px] aspect-square flex items-center justify-center order-1 md:order-2">
            <div className="absolute inset-0 rounded-full border-8 md:border-10 border-[#FBBF24]"></div>
            
            <div className="relative h-[92%] w-[92%] rounded-full overflow-hidden p-1 bg-white">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#FBBF24]">
                <Image
                  src={selectedReviewer.image}
                  alt={selectedReviewer.name}
                  fill
                  className="object-cover object-center rounded-full p-0.5 bg-white"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 w-full md:w-auto order-2 md:order-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 mb-6">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={18} className="text-[#FACC15] fill-[#FACC15]" />
              ))}
            </div>

            <blockquote className="text-lg lg:text-[18px] leading-relaxed text-[#475569] mb-8 max-w-lg min-h-35 italic">
              “{selectedReviewer.review}”
            </blockquote>

            <div className="flex items-center justify-center md:justify-start gap-4">
              {reviewers.map((reviewer) => (
                <button
                  key={reviewer.id}
                  onClick={() => setSelectedReviewer(reviewer)}
                  className={`relative h-12 w-12 rounded-full overflow-hidden transition-all duration-300 ${
                    selectedReviewer.id === reviewer.id
                      ? "ring-4 ring-[#E1F1A7] scale-110" 
                      : "ring-2 ring-transparent opacity-60 hover:opacity-100" 
                  }`}
                >
                  <Image
                    src={reviewer.image} 
                    alt={reviewer.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="mt-5">
              <p className="text-sm font-bold text-[#0F172A]">{selectedReviewer.name}</p>
              <p className="text-xs text-[#64748B]">{selectedReviewer.role}</p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;