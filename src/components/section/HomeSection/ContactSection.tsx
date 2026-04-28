"use client";

import React from "react";
import Container from "../../shared/container/Container";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative bg-[#FDF7F1] py-16 lg:py-20 overflow-hidden font-jakarta">
      <Container>
        <div className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] overflow-hidden border border-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch p-4 lg:p-6 gap-8">
            
            <div className="lg:col-span-5 bg-[#E1F1A7] rounded-[15px] p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-8">
                Contact Us
              </h2>
              
              <div className="space-y-8">
                {/* Chat to us */}
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Mail size={20} className="text-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A]">Chat to us</h4>
                    <p className="text-[#475569] text-sm mt-1">hallo@example.com</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <MapPin size={20} className="text-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A]">Office</h4>
                    <p className="text-[#475569] text-sm mt-1 leading-relaxed">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Phone size={20} className="text-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A]">Phone</h4>
                    <p className="text-[#475569] text-sm mt-1">01869616041</p>
                  </div>
                </div>
              </div>
            </div>

         
            <div className="lg:col-span-7 p-4 lg:p-8">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-2">
                  Get in Touch
                </h2>
                <p className="text-[#475569] text-sm">
                  Reach out to us for the best care for your pets.
                </p>
              </div>

              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-100 rounded-lg focus:outline-none focus:border-[#A2C75F] text-sm"
                />
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-100 rounded-lg focus:outline-none focus:border-[#A2C75F] text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Phone no"
                  className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-100 rounded-lg focus:outline-none focus:border-[#A2C75F] text-sm"
                />
                <textarea 
                  placeholder="Message..."
                  rows={4}
                  className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-100 rounded-lg focus:outline-none focus:border-[#A2C75F] text-sm resize-none"
                ></textarea>
                
                <button 
                  type="submit"
                  className="w-full py-3 bg-[#A2C75F] text-white font-bold rounded-lg hover:bg-[#8eb052] transition-colors mt-2"
                >
                  Submit Now
                </button>
              </form>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;