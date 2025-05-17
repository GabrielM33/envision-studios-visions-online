
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Globe, Laptop, Smartphone, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const revealElements = useRef<NodeListOf<Element> | null>(null);
  
  useEffect(() => {
    revealElements.current = document.querySelectorAll('.reveal');
    
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
    
    if (revealElements.current) {
      revealElements.current.forEach(element => {
        observer.observe(element);
      });
    }
    
    return () => {
      if (revealElements.current) {
        revealElements.current.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Preview */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
              Our <span className="text-envision-teal">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
              We offer comprehensive web development solutions tailored to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal">
              <ServiceCard
                icon={<Code size={24} />}
                title="Web Development"
                description="Custom websites built with cutting-edge technology"
                features={[
                  "Responsive design",
                  "Full-stack development",
                  "API integration",
                  "Performance optimization",
                ]}
              />
            </div>
            
            <div className="reveal stagger-1">
              <ServiceCard
                icon={<Smartphone size={24} />}
                title="Mobile-First Design"
                description="Websites optimized for all devices"
                features={[
                  "Progressive web apps",
                  "Touch-friendly interfaces",
                  "Fast loading on mobile",
                  "Cross-platform compatibility",
                ]}
              />
            </div>
            
            <div className="reveal stagger-2">
              <ServiceCard
                icon={<Globe size={24} />}
                title="E-Commerce Solutions"
                description="Online stores that drive sales"
                features={[
                  "Secure payment gateways",
                  "Inventory management",
                  "Customer accounts",
                  "Analytics integration",
                ]}
              />
            </div>
          </div>
          
          <div className="text-center mt-12 reveal">
            <Link to="/services">
              <Button variant="outline" className="border-envision-teal text-envision-teal hover:bg-envision-teal hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
              Our <span className="text-envision-teal">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
              We follow a strategic approach to deliver outstanding results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center reveal">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="w-16 h-16 bg-envision-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-envision-teal">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-gray-600">
                  We learn about your business goals, target audience, and project requirements.
                </p>
              </div>
            </div>
            
            <div className="text-center reveal stagger-1">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="w-16 h-16 bg-envision-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-envision-teal">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Planning</h3>
                <p className="text-gray-600">
                  We create a strategic roadmap with timelines, deliverables, and technical specifications.
                </p>
              </div>
            </div>
            
            <div className="text-center reveal stagger-2">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="w-16 h-16 bg-envision-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-envision-teal">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-gray-600">
                  Our expert team builds your solution using the latest technologies and best practices.
                </p>
              </div>
            </div>
            
            <div className="text-center reveal stagger-3">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="w-16 h-16 bg-envision-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-envision-teal">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Launch & Support</h3>
                <p className="text-gray-600">
                  We deploy your project and provide ongoing maintenance and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-envision-blue text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
              Ready to bring your vision to life?
            </h2>
            <p className="text-xl mb-8 reveal">
              Let's create something amazing together. Our team is ready to help you succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
              <Link to="/contact">
                <Button className="bg-envision-teal hover:bg-white hover:text-envision-blue transition-colors text-lg px-8 py-6">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white hover:bg-white/10 text-white text-lg px-8 py-6">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
              Client <span className="text-envision-teal">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
              What our clients say about working with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow reveal">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Envision Studios transformed our outdated website into a modern, functional platform that has significantly increased our online leads. Their team was professional and delivered exactly what we needed."
              </p>
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Marketing Director, TechCorp</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow reveal stagger-1">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The e-commerce solution developed by Envision Studios exceeded our expectations. Sales have increased by 40% since launch, and the user experience is seamless across all devices."
              </p>
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-sm text-gray-500">CEO, StyleHub</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow reveal stagger-2">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Working with Envision Studios was a pleasure from start to finish. They understood our unique requirements and delivered a website that perfectly represents our brand."
              </p>
              <div>
                <h4 className="font-semibold">Emily Rodriguez</h4>
                <p className="text-sm text-gray-500">Owner, Artisan Cafe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
