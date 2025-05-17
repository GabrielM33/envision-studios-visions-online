
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">About Envision Studios</h1>
            <p className="text-xl mb-0 reveal stagger-1">
              We're a team of passionate digital creators committed to transforming your vision into exceptional web experiences.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative reveal">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-envision-teal to-envision-light-blue opacity-20 blur-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&q=80&w=900&crop=entropy" 
                  alt="Our Team" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
            <div>
              <div className="reveal">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Envision Studios was founded in 2015 with a clear mission: to help businesses succeed in the digital world through exceptional web design and development.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  What started as a small team of three passionate developers has grown into a full-service web development agency with a track record of delivering outstanding results for clients across various industries.
                </p>
                <p className="text-lg text-gray-700">
                  Our approach combines technical expertise, creative thinking, and a deep understanding of user experience to create websites and web applications that not only look great but also drive business results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
              Our <span className="text-envision-teal">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow reveal">
              <div className="w-12 h-12 bg-envision-teal/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-envision-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every line of code and every design element is crafted with precision and care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow reveal stagger-1">
              <div className="w-12 h-12 bg-envision-teal/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-envision-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of technology, constantly exploring new ways to solve problems and create better experiences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow reveal stagger-2">
              <div className="w-12 h-12 bg-envision-teal/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-envision-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working closely with our clients, treating every project as a partnership toward achieving your goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow reveal stagger-3">
              <div className="w-12 h-12 bg-envision-teal/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-envision-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, meet deadlines, and provide ongoing support to ensure your digital presence is always performing at its best.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
              Meet Our <span className="text-envision-teal">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
              The talented individuals who bring your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal">
              <TeamMember
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&q=80&w=600&crop=entropy"
                name="David Mitchell"
                position="Founder & CEO"
                bio="With 15+ years of experience in web development and digital strategy, David leads the team with a focus on innovation and client success."
              />
            </div>
            
            <div className="reveal stagger-1">
              <TeamMember
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&q=80&w=600&crop=entropy"
                name="Jennifer Harris"
                position="Lead Designer"
                bio="Jennifer combines artistic vision with user-centered design principles to create digital experiences that are both beautiful and functional."
              />
            </div>
            
            <div className="reveal stagger-2">
              <TeamMember
                image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&q=80&w=600&crop=entropy"
                name="Robert Kim"
                position="Lead Developer"
                bio="Robert is a full-stack developer with expertise in multiple programming languages and frameworks. He ensures our technical solutions are robust and scalable."
              />
            </div>
            
            <div className="reveal stagger-1">
              <TeamMember
                image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&q=80&w=600&crop=entropy"
                name="Maya Patel"
                position="UX Specialist"
                bio="Maya's passion for user experience drives her to create intuitive, accessible, and engaging digital interfaces that users love."
              />
            </div>
            
            <div className="reveal stagger-2">
              <TeamMember
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&q=80&w=600&crop=entropy"
                name="Thomas Wilson"
                position="Project Manager"
                bio="Thomas ensures projects are completed on time, within budget, and to the highest standards, keeping clear communication with clients throughout."
              />
            </div>
            
            <div className="reveal stagger-3">
              <TeamMember
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=80&w=600&crop=entropy"
                name="Sophia Martinez"
                position="Marketing Strategist"
                bio="Sophia helps clients maximize the impact of their web presence through effective digital marketing strategies and data-driven insights."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-20 px-4 md:px-6 bg-envision-blue text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="reveal">
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <p className="text-lg text-envision-teal">Projects Completed</p>
            </div>
            
            <div className="reveal stagger-1">
              <div className="text-4xl md:text-5xl font-bold mb-2">120+</div>
              <p className="text-lg text-envision-teal">Happy Clients</p>
            </div>
            
            <div className="reveal stagger-2">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-lg text-envision-teal">Team Members</p>
            </div>
            
            <div className="reveal stagger-3">
              <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
              <p className="text-lg text-envision-teal">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Companies */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
              Trusted By <span className="text-envision-teal">Leading Companies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
              We've had the privilege of working with amazing organizations across industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
            {/* Company logos would go here - using placeholder blocks */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center justify-center reveal">
                <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-medium">LOGO</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
