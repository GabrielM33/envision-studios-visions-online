
import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Get in Touch</h1>
            <p className="text-xl mb-0 reveal stagger-1">
              We'd love to hear from you. Reach out to discuss your project or any questions you might have.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="reveal stagger-1">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Prefer to reach us directly? Use the contact details below, or visit our office.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-envision-teal/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-envision-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Our Address</h3>
                    <p className="text-gray-600">
                      123 Web Avenue<br />
                      Digital City, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-envision-teal/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-envision-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">
                      +1 (555) 123-4567<br />
                      Mon-Fri from 9am to 6pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-envision-teal/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-envision-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">
                      info@envisionstudios.com<br />
                      support@envisionstudios.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-envision-teal/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-envision-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-envision-teal/10 hover:bg-envision-teal/20 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-envision-teal">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-envision-teal/10 hover:bg-envision-teal/20 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-envision-teal">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-envision-teal/10 hover:bg-envision-teal/20 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-envision-teal">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-envision-teal/10 hover:bg-envision-teal/20 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-envision-teal">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="reveal">
            <div className="bg-gray-300 h-96 w-full rounded-lg overflow-hidden shadow-md">
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-600 text-lg">Map Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
              Frequently Asked <span className="text-envision-teal">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
              Find answers to common questions about working with us
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 reveal">
              <h3 className="text-xl font-bold mb-2">How much does a website typically cost?</h3>
              <p className="text-gray-600">
                The cost of a website varies depending on the scope, complexity, and specific requirements. We offer solutions for different budgets and will provide a detailed quote after understanding your project needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 reveal stagger-1">
              <h3 className="text-xl font-bold mb-2">How long does it take to build a website?</h3>
              <p className="text-gray-600">
                Timelines vary based on complexity. A simple website might take 4-6 weeks, while more complex projects with custom functionality can take 3-6 months. We'll provide a specific timeline during the planning phase.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 reveal stagger-2">
              <h3 className="text-xl font-bold mb-2">Will I be able to update the website myself?</h3>
              <p className="text-gray-600">
                Yes! We can build your website with a user-friendly content management system (CMS) that allows you to make updates without technical knowledge. We also provide training to ensure you're comfortable managing your site.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 reveal stagger-3">
              <h3 className="text-xl font-bold mb-2">Do you offer website maintenance services?</h3>
              <p className="text-gray-600">
                Yes, we offer various maintenance packages to keep your website secure, up-to-date, and performing optimally. These can include regular updates, security monitoring, backups, and technical support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
