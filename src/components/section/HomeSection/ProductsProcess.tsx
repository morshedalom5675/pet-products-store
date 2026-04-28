"use client";

import React from "react";
import Container from "../../shared/container/Container";

const productProcessSteps = [
  {
    icon: "🦴",
    title: "Premium Food Supplies",
    description:
      "We provide high-quality organic food that ensures your pet's health, energy levels, and a shiny coat every single day with balanced nutrition.", 
    themeColor: "#A2C75F",
    lightColor: "#E1F1A7",
  },
  {
    icon: "🎾",
    title: "Interactive Play Gears",
    description:
      "Our collection of durable and safe toys keeps your furry friends mentally active, physically fit, and always entertained during playtime.", 
    themeColor: "#FACC15",
    lightColor: "#FEF9C3",
  },
  {
    icon: "🛁",
    title: "Essential Grooming Kits",
    description:
      "From grooming tools to hygiene essentials, we offer everything needed to keep your pets clean, fresh, and happy in their daily life.", 
    themeColor: "#FB923C",
    lightColor: "#FFEDD5",
  },
];

const ProductProcess = () => {
  return (
    <section className="relative bg-[#FDF7F1] py-12 lg:py-16 overflow-hidden font-jakarta">
      <Container>
        <div className="text-center mb-10 lg:mb-12 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug mb-3 tracking-tight">
            Our Quality Pet Products & Supplies.
          </h2>
          <p className="text-[#475569] text-sm md:text-base leading-relaxed">
            Discover our range of essentials designed for a healthy and comfortable lifestyle for your pets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {productProcessSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white px-6 py-10 rounded-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.01)] border border-gray-50 flex flex-col items-center justify-between"
            >
              <div className="text-center flex flex-col items-center mb-6 w-full">
                <div 
                  className="text-5xl mb-6 flex items-center justify-center h-24 w-24 rounded-full border-4 shadow-inner"
                  style={{ 
                    borderColor: step.themeColor, 
                    color: step.themeColor, 
                    backgroundColor: step.lightColor 
                  }}
                >
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#475569] text-xs md:text-sm leading-relaxed text-center px-2">
                  {step.description}
                </p>
              </div>

              <button 
                className="font-bold text-[10px] uppercase tracking-wider border px-6 py-3 rounded-full transition-all duration-300"
                style={{ 
                  color: step.themeColor, 
                  
                  borderColor: `${step.themeColor}80` 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = step.lightColor;
                  e.currentTarget.style.borderColor = step.themeColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = `${step.themeColor}80`;
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductProcess;