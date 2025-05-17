
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    elementsRef.current.forEach(element => {
      if (element) observer.observe(element);
    });
    
    return () => {
      elementsRef.current.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="relative bg-gradient-to-br from-envision-dark to-envision-blue min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute opacity-10 w-96 h-96 rounded-full bg-envision-teal blur-3xl -top-20 -left-20"></div>
        <div className="absolute opacity-10 w-96 h-96 rounded-full bg-blue-500 blur-3xl bottom-0 right-0"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <div 
              ref={el => elementsRef.current[0] = el} 
              className="reveal"
            >
              <span className="inline-block py-1 px-3 mb-4 bg-envision-teal/20 text-envision-teal text-sm font-medium rounded-full">
                Web Development Agency
              </span>
            </div>
            <h1 
              ref={el => elementsRef.current[1] = el}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 reveal stagger-1"
            >
              Turning <span className="text-envision-teal">Visions</span> into Digital Reality
            </h1>
            <p 
              ref={el => elementsRef.current[2] = el}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl reveal stagger-2"
            >
              We design and develop exceptional websites and web applications that help businesses grow and succeed in the digital world.
            </p>
            <div 
              ref={el => elementsRef.current[3] = el}
              className="flex flex-col sm:flex-row gap-4 reveal stagger-3"
            >
              <Link to="/contact">
                <Button className="bg-envision-teal hover:bg-envision-teal/90 text-white px-6 py-6 text-lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div 
            ref={el => elementsRef.current[4] = el}
            className="flex-1 reveal stagger-3"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-envision-teal to-envision-light-blue opacity-50 blur-lg"></div>
              <div className="relative bg-envision-dark rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&q=80&w=900&crop=entropy" 
                  alt="Web Development" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
