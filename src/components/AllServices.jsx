import { useState } from 'react';
import { Link } from 'react-router-dom';
import { serviceCategories, servicesData } from '../data/services';

export default function AllServices() {
  const [activeTab, setActiveTab] = useState('business');

  return (
    <section className="bg-white py-24 sm:py-28" id="services-explorer">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#B8985A]"></span>
            <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold">FULL-SPECTRUM ADVISORY</span>
            <span className="w-6 h-[1px] bg-[#B8985A]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl text-[#0B1F3A] font-semibold tracking-tight">Institutional Services & Licensing</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-subtle font-light">Explore our four specialized practices covering statutory incorporation, accounting, land rights, and governmental liaisoning.</p>
        </div>

        {/* Tab Bar */}
        <div className="flex justify-start sm:justify-center border-b border-[#E5E0D5] overflow-x-auto no-scrollbar mb-12">
          {serviceCategories.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id 
                ? 'px-6 py-4 text-xs tracking-[0.18em] uppercase font-semibold transition-all whitespace-nowrap text-[#0B1F3A] border-b-2 border-[#B8985A]'
                : 'px-6 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all whitespace-nowrap text-slate-subtle border-b-2 border-transparent hover:text-[#0B1F3A]'
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicesData[activeTab].map((service, idx) => (
            <Link 
              to={`/services/${service.slug}`} 
              className="group p-5 bg-[#F7F5F0] border border-[#E7E2D8] flex items-start gap-3.5 hover:border-[#B8985A] hover:shadow-md transition-all duration-300" 
              key={idx}
            >
              <span className="material-symbols-outlined text-[#B8985A] text-[20px] shrink-0 mt-0.5">check_circle</span>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-[#0B1F3A] group-hover:text-[#B8985A] transition-colors">{service.name}</h4>
                <p className="text-xs text-slate-subtle mt-0.5">{service.desc}</p>
              </div>
              <span className="material-symbols-outlined text-[16px] text-[#0B1F3A]/40 group-hover:text-[#B8985A] group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5">arrow_forward</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
