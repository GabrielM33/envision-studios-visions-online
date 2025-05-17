
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Laptop, Code, Smartphone, Globe, Pen, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
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
      <section className="pt-32 pb-16 px-4 md:px-6 bg-gradient-to-br from-envision-blue to-envision-dark text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Our Services</h1>
            <p className="text-xl mb-0 reveal stagger-1">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
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
                  "SEO-friendly structure",
                  "Ongoing maintenance"
                ]}
              />
            </div>
            
            <div className="reveal stagger-1">
              <ServiceCard
                icon={<Laptop size={24} />}
                title="Website Design"
                description="Beautiful, user-centered designs that convert"
                features={[
                  "Custom UI/UX design",
                  "Brand-aligned visuals",
                  "Wireframing & prototyping",
                  "Conversion-focused layouts",
                  "Accessibility compliance",
                  "Design system creation"
                ]}
              />
            </div>
            
            <div className="reveal stagger-2">
              <ServiceCard
                icon={<Globe size={24} />}
                title="E-Commerce Solutions"
                description="Online stores that drive sales"
                features={[
                  "Custom shop development",
                  "Secure payment gateways",
                  "Inventory management",
                  "Customer accounts",
                  "Product catalog optimization",
                  "Analytics integration"
                ]}
              />
            </div>
            
            <div className="reveal">
              <ServiceCard
                icon={<Smartphone size={24} />}
                title="Mobile-First Design"
                description="Websites optimized for all devices"
                features={[
                  "Progressive web apps",
                  "Touch-friendly interfaces",
                  "Fast loading on mobile",
                  "Cross-platform compatibility",
                  "Mobile navigation patterns",
                  "Device-specific optimizations"
                ]}
              />
            </div>
            
            <div className="reveal stagger-1">
              <ServiceCard
                icon={<Pen size={24} />}
                title="Content Strategy"
                description="Strategic content that engages your audience"
                features={[
                  "Content planning",
                  "SEO copywriting",
                  "Blog strategy",
                  "Content calendar creation",
                  "Conversion copywriting",
                  "Content performance analysis"
                ]}
              />
            </div>
            
            <div className="reveal stagger-2">
              <ServiceCard
                icon={<Users size={24} />}
                title="Digital Consulting"
                description="Expert guidance for your digital transformation"
                features={[
                  "Digital strategy development",
                  "Technology stack recommendations",
                  "User experience audits",
                  "Performance optimization",
                  "Accessibility compliance",
                  "Digital roadmap planning"
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
              Our <span className="text-envision-teal">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
              A strategic approach designed for success
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Discovery */}
            <div className="relative mb-24 last:mb-0 reveal">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 text-center mb-6 md:mb-0">
                  <div className="w-20 h-20 bg-envision-teal/10 rounded-full flex items-center justify-center mx-auto relative z-10">
                    <span className="text-3xl font-bold text-envision-teal">1</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-4">Discovery</h3>
                </div>
                <div className="md:w-2/3 bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    We begin by thoroughly understanding your business goals, target audience, and project requirements. This phase involves:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Stakeholder interviews</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Market and competitor analysis</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>User research and persona development</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Connector Line */}
              <div className="hidden md:block absolute top-20 bottom-0 left-1/3 w-0.5 bg-gray-200 -translate-x-1/2"></div>
            </div>
            
            {/* Planning */}
            <div className="relative mb-24 last:mb-0 reveal stagger-1">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 text-center mb-6 md:mb-0">
                  <div className="w-20 h-20 bg-envision-teal/10 rounded-full flex items-center justify-center mx-auto relative z-10">
                    <span className="text-3xl font-bold text-envision-teal">2</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-4">Planning</h3>
                </div>
                <div className="md:w-2/3 bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    Based on our discoveries, we create a comprehensive project plan that serves as the roadmap for your project:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Information architecture</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Content strategy</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Technology stack selection</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Project timeline and milestones</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Connector Line */}
              <div className="hidden md:block absolute top-20 bottom-0 left-1/3 w-0.5 bg-gray-200 -translate-x-1/2"></div>
            </div>
            
            {/* Design & Development */}
            <div className="relative mb-24 last:mb-0 reveal stagger-2">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 text-center mb-6 md:mb-0">
                  <div className="w-20 h-20 bg-envision-teal/10 rounded-full flex items-center justify-center mx-auto relative z-10">
                    <span className="text-3xl font-bold text-envision-teal">3</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-4">Design & Development</h3>
                </div>
                <div className="md:w-2/3 bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    This is where your project comes to life. Our designers and developers work collaboratively to create:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Wireframes and visual designs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Interactive prototypes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Front-end and back-end development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Regular client reviews and iterations</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Connector Line */}
              <div className="hidden md:block absolute top-20 bottom-0 left-1/3 w-0.5 bg-gray-200 -translate-x-1/2"></div>
            </div>
            
            {/* Testing & Launch */}
            <div className="relative mb-24 last:mb-0 reveal stagger-3">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 text-center mb-6 md:mb-0">
                  <div className="w-20 h-20 bg-envision-teal/10 rounded-full flex items-center justify-center mx-auto relative z-10">
                    <span className="text-3xl font-bold text-envision-teal">4</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-4">Testing & Launch</h3>
                </div>
                <div className="md:w-2/3 bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    Before going live, we ensure everything works flawlessly:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Comprehensive quality assurance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Cross-browser and device testing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Performance optimization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Smooth deployment and launch</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Connector Line */}
              <div className="hidden md:block absolute top-20 bottom-0 left-1/3 w-0.5 bg-gray-200 -translate-x-1/2"></div>
            </div>
            
            {/* Ongoing Support */}
            <div className="relative reveal stagger-3">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 text-center mb-6 md:mb-0">
                  <div className="w-20 h-20 bg-envision-teal/10 rounded-full flex items-center justify-center mx-auto relative z-10">
                    <span className="text-3xl font-bold text-envision-teal">5</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-4">Ongoing Support</h3>
                </div>
                <div className="md:w-2/3 bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    Our relationship doesn't end at launch. We offer:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Regular maintenance and updates</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Monitoring and performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Technical support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Continuous improvement recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
              Our <span className="text-envision-teal">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
              We use the latest technologies to build powerful, scalable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Technology logos would go here - using placeholder blocks */}
            {[...Array(12)].map((_, index) => (
              <div key={index} className="flex items-center justify-center reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center hover:shadow-md transition-shadow">
                  <span className="text-gray-500 font-medium">TECH</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-4 md:px-6 bg-envision-teal text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">Let's Build Something Amazing Together</h2>
            <p className="text-xl mb-8 reveal stagger-1">
              Ready to discuss your project? We're here to help turn your vision into reality.
            </p>
            <div className="reveal stagger-2">
              <Link to="/contact">
                <Button className="bg-white text-envision-teal hover:bg-white/90 hover:text-envision-blue transition-colors text-lg px-8 py-6">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
