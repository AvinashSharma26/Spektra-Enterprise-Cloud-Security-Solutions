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