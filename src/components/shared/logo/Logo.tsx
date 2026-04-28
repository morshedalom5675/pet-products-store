import Image from "next/image";
import React from "react";
import logo from "@/src/app/assets/logo/logo2.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2"> {/* গ্যাপ যোগ করা হয়েছে */}
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