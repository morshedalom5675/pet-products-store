"use client"
import Image from "next/image";
import logo from "@/src/app/assets/logo/logo2.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2"> 
      <Image 
        src={logo} 
        alt="PawVibe Logo" 
        width={35} 
        height={35} 
        className="object-contain"
      />
      <span className="text-2xl font-black text-[#0F172A] tracking-tight">
        PawVibe
      </span>
    </div>
  );
};

export default Logo;