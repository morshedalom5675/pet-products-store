"use client";

import Container from "../../shared/container/Container";
import Logo from "../../shared/logo/Logo";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#F5E9DA] pt-12 pb-6 font-jakarta border-t border-[#E2D4C3]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-[#475569] text-sm leading-relaxed mb-6 max-w-75">
              Premium quality food, toys, and grooming essentials for your beloved pets. We care for your friends as much as you do.
            </p>
            
            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, link: "#" },
                { Icon: FaTwitter, link: "#" },
                { Icon: FaInstagram, link: "#" }
              ].map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-white border border-[#E2D4C3] text-[#0F172A] hover:bg-[#A2C75F] hover:text-white transition-all duration-300 shadow-sm"
                >
                  <item.Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-[#0F172A] mb-5 uppercase tracking-widest">Shop</h4>
            <ul className="space-y-3 text-sm text-[#475569]">
              <li><a href="#" className="hover:text-[#A2C75F] transition-colors">Dog Food</a></li>
              <li><a href="#" className="hover:text-[#A2C75F] transition-colors">Cat Supplies</a></li>
              <li><a href="#" className="hover:text-[#A2C75F] transition-colors">Pet Toys</a></li>
              <li><a href="#" className="hover:text-[#A2C75F] transition-colors">Grooming</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-[#0F172A] mb-5 uppercase tracking-widest">Support</h4>
            <ul className="space-y-3 text-sm text-[#475569]">
              <li><a href="#" className="hover:text-[#A2C75F] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#A2C75F] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#A2C75F] transition-colors">Terms & Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-[#0F172A] mb-5 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-[#475569]">
              <li className="flex items-center gap-3">
                <IoLocationSharp size={16} className="text-[#A2C75F]" />
                <span>Banani, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt size={12} className="text-[#A2C75F]" />
                <span>+880 1700 000000</span>
              </li>
              <li className="flex items-center gap-3">
                <IoMail size={16} className="text-[#A2C75F]" />
                <span>hello@petcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 border-t border-[#E2D4C3] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#64748B] font-medium uppercase tracking-wider">
            © {new Date().getFullYear()} PetCare. All rights reserved.
          </p>
          <div className="flex gap-5 text-[12px] text-[#64748B] font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-[#A2C75F]">Privacy</a>
            <a href="#" className="hover:text-[#A2C75F]">Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;