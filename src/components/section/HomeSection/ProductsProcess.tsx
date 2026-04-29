"use client";

import React, { useState } from "react";
import Container from "../../shared/container/Container";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/src/components/ui/dialog";

const productProcessSteps = [
  {
    icon: "🦴",
    title: "Premium Food Supplies",
    description:
      "We provide high-quality organic food that ensures your pet's health, energy levels, and a shiny coat every single day with balanced nutrition.",
    details:
      "Our premium organic food collection is meticulously crafted with human-grade ingredients to prioritize your pet's long-term wellness. Each formula is enriched with essential vitamins, omega-3 and omega-6 fatty acids for a glowing coat, and vital minerals for bone strength. We strictly exclude artificial preservatives, fillers, and synthetic colors, ensuring a 100% natural and highly digestible diet that boosts immunity and keeps your furry companion energetic all day long.",
    themeColor: "#A2C75F",
    lightColor: "#E1F1A7",
  },
  {
    icon: "🎾",
    title: "Interactive Play Gears",
    description:
      "Our collection of durable and safe toys keeps your furry friends mentally active, physically fit, and always entertained during playtime.",
    details:
      "Mental stimulation is just as important as physical exercise for a happy pet. Our interactive play gear features advanced puzzle feeders, ultra-durable chew toys for aggressive chewers, and high-performance launchers designed to spark natural instincts. Made from non-toxic, eco-friendly materials, these toys are engineered to reduce anxiety, prevent boredom-induced behavior, and strengthen the bond between you and your pet through active, engaging play sessions.",
    themeColor: "#FACC15",
    lightColor: "#FEF9C3",
  },
  {
    icon: "🛁",
    title: "Essential Grooming Kits",
    description:
      "From grooming tools to hygiene essentials, we offer everything needed to keep your pets clean, fresh, and happy in their daily life.",
    details:
      "Maintain your pet's hygiene and comfort with our professional-grade grooming essentials. Our kits include ergonomic de-shedding brushes, tear-free pH-balanced shampoos, and precision nail trimmers designed for safety. Regular grooming with our specialized tools doesn't just keep them smelling fresh; it promotes healthy blood circulation, prevents painful matting, and allows for early detection of potential skin issues, ensuring your pet feels as good as they look every single day.",
    themeColor: "#FB923C",
    lightColor: "#FFEDD5",
  },
];

const ProductProcess = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<
    (typeof productProcessSteps)[0] | null
  >(null);

  const handleLearnMore = (step: (typeof productProcessSteps)[0]) => {
    setSelectedStep(step);
    setIsOpen(true);
  };

  return (
    <section className="relative bg-[#FDF7F1] py-12 lg:py-16 overflow-hidden font-jakarta">
      <Container>
        <div className="text-center mb-10 lg:mb-12 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug mb-3 tracking-tight">
            Our Quality Pet Products & Supplies.
          </h2>
          <p className="text-[#475569] text-sm md:text-base leading-relaxed">
            Discover our range of essentials designed for a healthy and
            comfortable lifestyle for your pets.
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
                    backgroundColor: step.lightColor,
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
                onClick={() => handleLearnMore(step)}
                className="font-bold text-[10px] uppercase tracking-wider border px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  color: step.themeColor,
                  borderColor: `${step.themeColor}80`,
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

        {/* Modal / Dialog Section */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="bg-white rounded-3xl max-w-md sm:max-w-lg border-none shadow-2xl">
            {selectedStep && (
              <div className="flex flex-col items-center text-center p-4">
                <div
                  className="text-6xl mb-6 h-28 w-28 rounded-full flex items-center justify-center border-4"
                  style={{
                    backgroundColor: selectedStep.lightColor,
                    borderColor: selectedStep.themeColor,
                  }}
                >
                  {selectedStep.icon}
                </div>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#0F172A] mb-2">
                    {selectedStep.title}
                  </DialogTitle>
                  <DialogDescription className="text-[#475569] text-base leading-relaxed">
                    {selectedStep.details}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-8 w-full">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 rounded-full font-bold text-white transition-all shadow-lg active:scale-95"
                    style={{ backgroundColor: selectedStep.themeColor }}
                  >
                    Close Details
                  </button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
};

export default ProductProcess;
