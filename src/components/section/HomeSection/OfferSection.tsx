"use client";

import React from "react";
import Image from "next/image";
import Container from "../../shared/container/Container";

import OfferBannerImg from "@/src/app/assets/image/offer-banner.png"; 
import Link from "next/link";


const OfferSection = () => {
  return (
    <section className="relative bg-[#FDF7F1] py-20 lg:py-24 overflow-hidden font-jakarta">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          
          <div className="lg:col-span-6 relative min-h-75 lg:min-h-112.5 w-full rounded-[15px] bg-[#DC785B] flex items-center justify-center shadow-sm p-1">
            <div className="relative w-full h-full">
              <Image 
                src={OfferBannerImg} 
                alt="Pet Offer 30%" 
                fill
                className="object-contain rounded-xl" 
                priority 
              />
            </div>
          </div>

          {/* Right Side  */}
          <div className="lg:col-span-6 flex flex-col gap-4 h-full">
            
            {/* Top Card  */}
            <div className="bg-white p-10 rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-gray-50 flex-1 flex flex-col justify-center">
              <span className="text-[#A2C75F] font-bold text-[11px] uppercase tracking-widest mb-3">Limited Offer</span>
              <h2 className="text-xl md:text-3xl font-semibold  text-[#0F172A]  my-2">
                Flash Sale! Get 30% Off on All Pet Essentials and Premium Supplies for Your Beloved Furry Friends.
              </h2>
              <p className="text-[#475569] text-sm md:text-base leading-relaxed max-w-xl">
                Grab the best deals for your furry friends. Everything is now 30% cheaper for a limited time! 
              </p>
            </div>

            {/* Bottom Card*/}
            <div className="bg-white p-10 rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-gray-50 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full items-center">
                
                {/* Offer 1 */}
                <div className="flex flex-col items-start border-r border-gray-50 pr-4">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Pet Food</h3>
                  <p className="text-[#475569] text-xs leading-tight mb-4">
                    Save 30% on organic pet food.
                  </p>
                  <Link className="text-[#A2C75F] font-bold text-xs border border-[#E1F1A7] px-6 py-2.5 rounded-full hover:bg-[#E1F1A7] transition-all" href={"/products"}>
                    Shop Now
                  </Link>
                </div>

                {/* Offer 2 */}
                <div className="flex flex-col items-start pl-0 sm:pl-4">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Toys & Kits</h3>
                  <p className="text-[#475569] text-xs leading-tight mb-4">
                    Extra 30% off on grooming kits.
                  </p>
                  <Link className="text-[#A2C75F] font-bold text-xs border border-[#E1F1A7] px-6 py-2.5 rounded-full hover:bg-[#E1F1A7] transition-all" href={"/products"}>
                    Shop Now
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default OfferSection;