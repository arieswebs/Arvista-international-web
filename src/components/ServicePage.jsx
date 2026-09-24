import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getServiceBySlug, getCategoryById, servicesData } from '../data/services';
import ContactFooter from './ContactFooter';
import Navbar from './Navbar';

export default function ServicePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F7F5F0] flex flex-col items-center justify-center px-6">
        <h1 className="font-cinzel text-3xl text-[#0B1F3A] mb-4">Service Not Found</h1>
        <p className="text-slate-subtle mb-8">The service you're looking for doesn't exist.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8985A] text-white text-xs uppercase tracking-widest font-semibold rounded-[2px]">
          Return Home
        </Link>
      </div>
    );
  }

  const category = getCategoryById(service.categoryId);
  const categoryServices = servicesData[service.categoryId];
  const currentIdx = categoryServices.findIndex(s => s.slug === slug);
  const relatedServices = categoryServices.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* HERO BANNER */}
      <section className="relative bg-[#0B1F3A] text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 25% 45%, rgba(18, 48, 90, 0.6) 0%, rgba(11, 31, 58, 0.95) 75%, rgb(7, 19, 38) 100%), radial-gradient(circle at 85% 20%, rgba(184, 152, 90, 0.15) 0%, transparent 60%)'}}></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/50 mb-6 font-montserrat">
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#services-explorer" className="hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#B8985A]">{category?.label}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B8985A]"></span>
            <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold font-montserrat">{service.heroSubtitle}</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-white font-semibold tracking-tight mb-4" style={{lineHeight: '1.15'}}>{service.name}</h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl font-light font-montserrat mb-4">{service.tagline}</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-[#B8985A]"></span>
                <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold">OVERVIEW</span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl text-[#0B1F3A] font-semibold tracking-tight mb-6">About This Service</h2>
              <p className="text-sm sm:text-base text-slate-subtle font-light leading-relaxed">{service.overview}</p>
            </div>

            {/* Key Deliverables Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F7F5F0] border border-[#E7E2D8] p-6 sm:p-8">
                <h3 className="font-cinzel text-lg text-[#0B1F3A] font-semibold mb-5">Key Deliverables</h3>
                <ul className="space-y-3">
                  {service.keyDeliverables?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#1A2230]/80">
                      <span className="material-symbols-outlined text-[#B8985A] text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      {service.process && (
        <section className="bg-[#F7F5F0] py-16 sm:py-20 border-y border-[#E7E2D8]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-[#B8985A]"></span>
                <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold">OUR PROCESS</span>
                <span className="w-6 h-[1px] bg-[#B8985A]"></span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl text-[#0B1F3A] font-semibold tracking-tight">How We Deliver</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Desktop connector */}
              <div className="hidden lg:block absolute top-8 left-16 right-16 h-[1px] bg-[#E5E0D5] z-0"></div>
              
              {service.process.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-start bg-white p-6 border border-[#E5E0D5] shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#0B1F3A] text-[#B8985A] border-4 border-white shadow flex items-center justify-center font-cinzel font-bold text-xs mb-5">{String(idx + 1).padStart(2, '0')}</div>
                  <h3 className="font-cinzel text-base text-[#0B1F3A] font-semibold mb-2">{step.step}</h3>
                  <p className="text-xs sm:text-sm text-slate-subtle font-light leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQS */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-[880px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-[#B8985A]"></span>
                <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold">COMMON QUESTIONS</span>
                <span className="w-6 h-[1px] bg-[#B8985A]"></span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl text-[#0B1F3A] font-semibold tracking-tight">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <details key={idx} className="group bg-[#F7F5F0] border border-[#E7E2D8] p-5 sm:p-6">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-cinzel text-sm sm:text-base text-[#0B1F3A] font-medium pr-4">{faq.q}</span>
                    <span className="material-symbols-outlined text-[#B8985A] text-[24px] shrink-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-[#E5E0D5] text-xs sm:text-sm text-slate-subtle font-light leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA BAND */}
      <section className="bg-[#0B1F3A] py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(184, 152, 90, 0.08) 0%, transparent 70%)'}}></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl text-white font-semibold mb-2">Ready to Get Started?</h3>
            <p className="text-sm text-white/60 font-light">Submit your requirement and a senior advisor will contact you within 4 business hours.</p>
          </div>
          <Link to="/#consultation-desk" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#B8985A] hover:bg-[#c9a96b] text-[#0B1F3A] text-xs uppercase tracking-[0.18em] font-semibold rounded-[2px] shadow-lg transition-all duration-300 whitespace-nowrap font-montserrat shrink-0">
            <span>BOOK CONSULTATION</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </Link>
        </div>
      </section>

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="bg-[#F7F5F0] py-16 sm:py-20 border-t border-[#E7E2D8]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-[#B8985A]"></span>
                <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold">EXPLORE MORE</span>
                <span className="w-6 h-[1px] bg-[#B8985A]"></span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl text-[#0B1F3A] font-semibold tracking-tight">Related Services</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rs, idx) => (
                <Link key={idx} to={`/services/${rs.slug}`} className="group bg-white p-6 border border-[#E5E0D5] hover:border-[#B8985A] transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-[2px] bg-[#F7F5F0] border border-[#E5E0D5] flex items-center justify-center text-[#B8985A] group-hover:bg-[#0B1F3A] group-hover:border-[#0B1F3A] transition-colors duration-300">
                      <span className="material-symbols-outlined text-[20px]">{rs.icon}</span>
                    </div>
                    <h3 className="font-cinzel text-base text-[#0B1F3A] font-semibold">{rs.name}</h3>
                  </div>
                  <p className="text-xs text-slate-subtle font-light mb-4 flex-1">{rs.desc}</p>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#0B1F3A] font-semibold group-hover:text-[#B8985A] transition-colors">
                    View details <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <ContactFooter />
    </>
  );
}
