"use client";

import React from "react";
import dynamic from "next/dynamic";
import Container from "../../shared/container/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

// Relative path logic
import faqAnimation from "../../../app/assets/animation/Faq-animation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const faqData = [
  {
    id: "item-1",
    question: "How long does the delivery take?",
    answer: "Usually, we deliver within 2-3 business days inside the city. For outside locations, it might take 5-7 business days depending on the courier service.",
  },
  {
    id: "item-2",
    question: "Do you offer organic pet food?",
    answer: "Yes! We have a dedicated category for organic and grain-free pet food produced by top-rated global brands to ensure your pet's health.",
  },
  {
    id: "item-3",
    question: "What is your return policy?",
    answer: "If the product is damaged or not as described, you can return it within 7 days of delivery. Please keep the original packaging intact.",
  },
  {
    id: "item-4",
    question: "Can I track my order in real-time?",
    answer: "Once your order is dispatched, you will receive a tracking ID via SMS or Email which you can use to track your parcel on our website.",
  },
  {
    id: "item-5",
    question: "Do you have any physical stores?",
    answer: "Currently, we operate as an online-only store to provide you with the best prices. However, our customer support is available 24/7 for any help.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#fdf7f1] font-jakarta">
      <Container>
        <div className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#475569] text-sm md:text-base leading-relaxed">
            Got questions? We've got answers! Explore why pet owners trust us for the best food, 
            toys, and accessories. If you don't find what you're looking for, feel free to reach out.
          </p>
        </div>

        {/* 50/50 Layout for Animation and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          
          <div className="flex justify-center w-full">
            <div className="max-w-125 w-full">
              <Lottie 
                animationData={faqAnimation} 
                loop={true} 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="border border-[#E5D5BC]/40 rounded-2xl px-6 bg-white overflow-hidden"
                >
                  <AccordionTrigger className="font-bold text-base md:text-lg hover:no-underline text-[#475569] hover:text-[#0F172A] transition-colors py-5 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#475569] leading-relaxed pb-5 text-sm md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FAQSection;