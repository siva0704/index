import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import cascadeLogo from "@assets/IMG_20250326_154818-removebg-preview.png";

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const [location] = useLocation();
  const isActive = location === href;
  
  return (
    <Link href={href}>
      <a className={`text-sm font-medium ${isActive ? "text-[#3B82F6]" : "text-white hover:text-[#3B82F6]"} transition-colors`}>
        {children}
      </a>
    </Link>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0F172A] to-[#1E293B] shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = '/'}>
              <div className="bg-white rounded-full p-1">
                <img src={cascadeLogo} alt="Cascade Space Logo" className="h-10" />
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Link href="/contact">
              <Button className="ml-2 px-4 py-2 text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#1E40AF] rounded-md transition-colors">
                Get Started
              </Button>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant={mobileMenuOpen ? "default" : "ghost"} 
              size="icon" 
              onClick={toggleMobileMenu}
              className={mobileMenuOpen ? 
                "bg-white text-[#0F172A] hover:bg-gray-200 hover:text-[#0F172A]" : 
                "text-white hover:text-gray-200 focus:outline-none"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-3 px-2 space-y-1">
            <div onClick={() => setMobileMenuOpen(false)}>
              <Link href="/">
                <a className="block py-2 px-3 text-sm font-medium text-white rounded-md hover:bg-white/10">
                  Home
                </a>
              </Link>
            </div>
            <div onClick={() => setMobileMenuOpen(false)}>
              <Link href="/about">
                <a className="block py-2 px-3 text-sm font-medium text-white rounded-md hover:bg-white/10">
                  About
                </a>
              </Link>
            </div>
            <div onClick={() => setMobileMenuOpen(false)}>
              <Link href="/services">
                <a className="block py-2 px-3 text-sm font-medium text-white rounded-md hover:bg-white/10">
                  Services
                </a>
              </Link>
            </div>
            <div onClick={() => setMobileMenuOpen(false)}>
              <Link href="/contact">
                <a className="block py-2 px-3 text-sm font-medium text-white rounded-md hover:bg-white/10">
                  Contact
                </a>
              </Link>
            </div>
            <div className="flex justify-center mt-2" onClick={() => setMobileMenuOpen(false)}>
              <Link href="/contact">
                <a className="block w-full py-2 px-3 text-center text-sm font-medium text-white bg-[#3B82F6] rounded-md hover:bg-[#1E40AF]">
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
