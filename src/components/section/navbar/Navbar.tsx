"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import Logo from "../../shared/logo/Logo";
import { ShoppingCart, Heart, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import Container from "../../shared/container/Container";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Process", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#FDF6E9]/90 backdrop-blur-md border-b border-[#E5D5BC] py-3"
          : "bg-transparent py-8",
      )}
    >
      <Container>
        <div className=" flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-105 active:scale-95"
          >
            <Logo />
          </Link>

          <div className="flex items-center gap-3 md:gap-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center bg-white/60 border border-white/40 p-2 rounded-full shadow-sm">
              <ul className="flex items-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300",
                        link.name === "Home"
                          ? "bg-[#0F172A] text-white shadow-md"
                          : "text-[#475569] hover:text-[#0F172A]",
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Button className="rounded-full bg-[#D4E26A] hover:bg-[#C5D35B] text-[#0F172A] px-6 py-4 font-bold text-[13px] ml-2 shadow-sm transition-transform active:scale-95">
                Let's Talk
              </Button>
            </div>

            {/* Icon Group  */}
            <div className="flex items-center gap-1 bg-white/60 border border-white/40 p-1 rounded-full shadow-sm">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-[#0F172A] hover:bg-white/80 h-9 w-9"
              >
                <Heart size={20} />
              </Button>
              <div className="w-px h-4 bg-[#E5D5BC] mx-1" />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-[#0F172A] hover:bg-white/80 h-9 w-9 relative"
              >
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-[#0F172A] text-[#D4E26A] text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button  */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/60 border border-white/40 h-10 w-10"
                  >
                    <Menu className="text-[#0F172A]" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-[#FDF6E9] border-l border-[#E5D5BC] w-[320px] p-6"
                >
                  <SheetHeader className="text-left mb-10">
                    <SheetTitle>
                      <Logo />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "text-[15px] font-bold px-6 py-4 rounded-full transition-all duration-300 flex items-center justify-between group",
                          link.name === "Home"
                            ? "bg-[#0F172A] text-white shadow-lg shadow-[#0F172A]/10"
                            : "text-[#475569] hover:bg-white hover:text-[#0F172A] hover:translate-x-2",
                        )}
                      >
                        {link.name}

                        {link.name !== "Home" && (
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </span>
                        )}
                      </Link>
                    ))}

                    <div className="mt-6 pt-6 border-t border-[#E5D5BC]">
                      <Button className="w-full rounded-full bg-[#D4E26A] hover:bg-[#C5D35B] text-[#0F172A] py-7 font-black text-base shadow-md transition-all active:scale-95">
                        Let's Talk
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
