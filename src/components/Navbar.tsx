
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <span className="text-2xl font-bold text-envision-blue">
            Envision
            <span className="text-envision-teal">Studios</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-envision-teal transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium hover:text-envision-teal transition-colors">
            About
          </Link>
          <Link to="/services" className="font-medium hover:text-envision-teal transition-colors">
            Services
          </Link>
          <Link to="/contact" className="font-medium hover:text-envision-teal transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-envision-teal hover:bg-envision-blue transition-colors">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-envision-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-4">
            <Link 
              to="/" 
              className="font-medium py-2 hover:text-envision-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium py-2 hover:text-envision-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="font-medium py-2 hover:text-envision-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="font-medium py-2 hover:text-envision-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-envision-teal hover:bg-envision-blue transition-colors w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
