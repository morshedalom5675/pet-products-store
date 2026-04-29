"use client";

import Container from "../../shared/container/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "How long does the delivery take?",
    answer:
      "Usually, we deliver within 2-3 business days inside the city. For outside locations, it might take 5-7 business days depending on the courier service.",
  },
  {
    id: "item-2",
    question: "Do you offer organic pet food?",
    answer:
      "Yes! We have a dedicated category for organic and grain-free pet food produced by top-rated global brands to ensure your pet's health.",
  },
  {
    id: "item-3",
    question: "What is your return policy?",
    answer:
      "If the product is damaged or not as described, you can return it within 7 days of delivery. Please keep the original packaging intact.",
  },
  {
    id: "item-4",
    question: "Can I track my order in real-time?",
    answer:
      "Once your order is dispatched, you will receive a tracking ID via SMS or Email which you can use to track your parcel on our website.",
  },
  {
    id: "item-5",
    question: "Do you have any physical stores?",
    answer:
      "Currently, we operate as an online-only store to provide you with the best prices. However, our customer support is available 24/7 for any help.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white font-jakarta">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#64748B] mt-4">
              Everything you need to know about our products and services.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-[#E5D5BC]/40 rounded-2xl px-6 bg-[#FDF7F1]/30 overflow-hidden"
              >
                <AccordionTrigger className="text-[#0F172A] font-bold text-base md:text-lg hover:no-underline hover:text-[#FBBF24] transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#475569] leading-relaxed pb-5 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;