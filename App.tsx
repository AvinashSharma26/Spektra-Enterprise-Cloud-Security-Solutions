import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import LatestReleases from './components/LatestReleases';
import DataPrivacySection from './components/DataPrivacySection';
import WhySpektra from './components/WhySpektra';
import Testimonials from './components/Testimonials';
import ResourcesEvents from './components/ResourcesEvents';
import Partners from './components/Partners';
import Stats from './components/Stats';
import CloudAdvisor from './components/CloudAdvisor';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <ServiceGrid />
        
        <LatestReleases />

        <DataPrivacySection />

        <WhySpektra />

        <Testimonials />

        <ResourcesEvents />

        <Partners />
        
        {/* Transformation Section */}
        <section id="solutions" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand/10 rounded-full blur-3xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070" 
                    alt="Modern Office" 
                    className="rounded-2xl shadow-2xl relative z-10"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Core Strategy</h2>
                <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                  Accelerating Your Journey to a Modern Cloud Era
                </h3>
                <div className="space-y-6">
                  {[
                    { title: "Global Scale", desc: "Deployed in 60+ regions across all major public cloud providers." },
                    { title: "Security First", desc: "Built-in compliance and security controls for regulated industries." },
                    { title: "Automation Driven", desc: "Reduce operational overhead with intelligent automation scripts." }
                  ].map((item, i) => (
                    <div key={i} className="flex space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-10 bg-slate-900 text-white px-8 py-4 rounded-md font-bold transition-all hover:bg-brand">
                  Read Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        <Stats />

        {/* CTA Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-light via-brand to-brand-dark"></div>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to modernize your cloud strategy?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join hundreds of enterprises that rely on Spektra Systems to deliver cutting-edge cloud training and infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-xl shadow-purple-900/10">
                Talk to an Expert
              </button>
              <button className="bg-white border-2 border-slate-200 hover:border-brand hover:text-brand text-slate-900 px-10 py-4 rounded-md font-bold text-lg transition-all">
                Try CloudLabs
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* AI Assistant */}
      <CloudAdvisor />
    </div>
  );
};

export default App;