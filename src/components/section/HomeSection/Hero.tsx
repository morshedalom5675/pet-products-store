"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";

import Pet1Img from "@/src/app/assets/image/pet1.jpg";
import Pet2Img from "@/src/app/assets/image/pet2.jpg";
import Pet3Img from "@/src/app/assets/image/pet3.jpg";
import Container from "../../shared/container/Container";

const Hero = () => {
  return (
    <section className="relative  bg-[#F5E9DA] flex items-center py-38 overflow-hidden font-jakarta">
      <Container>
        <div className=" grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* Left Content  */}
          <div className="z-10 order-1">
            <h1 className="text-[8vw] sm:text-[clamp(2rem,4.2vw,3.8rem)] font-black text-[#0F172A] leading-[1.15] mb-6 tracking-tight">
              Premium Food & Toys For Your Happy Pets
            </h1>

            <p className="text-[#475569] text-base md:text-[clamp(1rem,1.1vw,1.2rem)] max-w-lg mb-10 leading-relaxed">
              We offer a range of high-quality products to ensure your pets
              receive the best nutrition and care possible. From organic meals
              to durable toys, we have everything your best friend needs.
            </p>

            <div className="flex items-center gap-6 mb-10 lg:mb-14">
              <Button className="bg-[#0F172A] hover:bg-[#1E293B] text-white px-8 md:px-10 py-6 md:py-7 rounded-2xl font-bold text-base md:text-lg shadow-2xl active:scale-95 transition-all w-full sm:w-auto">
                Shop Now
              </Button>
            </div>

            {/* Desktop Trust Badge */}
            <div className="hidden lg:inline-flex bg-white/70 p-6 rounded-[35px] items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-md border border-white/60">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-2xl border-4 border-white overflow-hidden shadow-md relative bg-white transition-transform hover:-translate-y-1"
                  >
                    <Image
                      src={`https://i.pravatar.cc/150?u=${i + 40}`}
                      alt="customer avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-2xl border-4 border-white bg-[#D4E26A] flex items-center justify-center shadow-md text-[#0F172A] font-black text-xs z-10">
                  +2k
                </div>
              </div>
              <div className="h-10 w-px bg-[#E5D5BC]/60" />
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3.5 h-3.5 fill-[#D4E26A]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#0F172A] font-black text-lg leading-none mb-1">
                  Trusted Worldwide
                </p>
                <p className="text-[#475569] font-medium text-xs">
                  Since 2012 by happy parents
                </p>
              </div>
            </div>
          </div>

          {/* Right Content  */}
          <div className="relative w-full aspect-square max-w-112.5 lg:max-w-145 mx-auto lg:ml-auto order-2">
            <div className="absolute top-[0%] right-[-5%] w-[60%] h-[60%] rounded-full border-8 md:border-10 border-white overflow-hidden shadow-2xl z-20 transition-transform hover:scale-105 duration-500">
              <div className="absolute inset-0 bg-[#D4E26A] opacity-10" />
              <Image
                src={Pet1Img}
                alt="Premium Pet Food"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute top-[30%] left-[-10%] w-[48%] h-[48%] rounded-full border-[6px] md:border-8 border-white overflow-hidden shadow-xl z-10 transition-transform hover:scale-105 duration-500">
              <div className="absolute inset-0 bg-[#FFD93D] opacity-10" />
              <Image
                src={Pet2Img}
                alt="Quality Pet Toys"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-[5%] right-[10%] w-[32%] h-[32%] rounded-full border-[5px] md:border-[6px] border-white overflow-hidden shadow-lg z-30 transition-transform hover:scale-110 duration-500">
              <Image
                src={Pet3Img}
                alt="Pet Accessories"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] border-2 border-[#E5D5BC]/50 rounded-full z-0 border-dashed" />
          </div>

          {/* Mobile Trust Badge - Order 3 */}
          <div className="lg:hidden order-3 flex justify-center w-full mt-4">
            <div className="bg-white/70 p-5 rounded-[25px] inline-flex items-center gap-4 shadow-lg backdrop-blur-md border border-white/60 w-full max-w-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-xl border-2 border-white overflow-hidden relative"
                  >
                    <Image
                      src={`https://i.pravatar.cc/150?u=${i + 40}`}
                      alt="user"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="h-8 w-px bg-[#E5D5BC]/60" />
              <div className="text-left">
                <p className="text-[#0F172A] font-black text-base leading-tight">
                  2k+ Happy Parents
                </p>
                <p className="text-[#475569] font-medium text-[10px]">
                  Trusted since 2012
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
