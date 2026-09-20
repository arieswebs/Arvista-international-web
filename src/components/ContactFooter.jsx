import { useState } from 'react';

export default function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <>
      {/* 8. FINAL INTAKE CTA & CONTACT SECTION */}
      <section className="bg-[#0B1F3A] text-white py-24 sm:py-28 relative overflow-hidden" id="consultation-desk">
        <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida/AEtjO1XmcBLPS4PkthzIxnTymGIYJANBF1FSgvRK2e6NYha2KUn0PeHNU1Jeuj-drzNPpD1lDSWcQ63iL-oAb_CRKQn33WFxwyoCFtF9snnLuuylVq_02GYa8btKHnKm2FeMMVhl2VC6UF1Kra0udWErxcEoTiwEEEWHCsJlKNC6tYfZnEW1f80h-km8IPhOFR4EyO_utLMYDzZf0eW-xCwgvqHpM1iF8bj-wu1f_DfpPLs0GB-Na9MVgZI-oA")'}}></div>
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 70% 60% at 75% 50%, #12305A 0%, #0B1F3A 75%)'}}></div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Intake Form Left Column */}
            <div className="lg:col-span-7 bg-[#0e2442]/90 border border-white/10 p-8 sm:p-12 shadow-2xl rounded-[2px] backdrop-blur-md">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-[1px] bg-[#B8985A]"></span>
                  <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold">PRIORITY INTAKE</span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-white font-semibold">Let’s Build Your Business the Right Way</h3>
                <p className="text-xs sm:text-sm text-white/70 mt-2 font-light">Submit your advisory requirements to initiate confidential intake with our practice leads.</p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#B8985A] font-semibold mb-2" htmlFor="clientName">Full Name *</label>
                  <input className="w-full px-4 py-3.5 bg-[#071527]/70 border border-white/15 text-white placeholder-white/40 text-sm focus:border-[#B8985A] focus:outline-none transition-colors rounded-[2px]" id="clientName" placeholder="Adv. Rajesh Menon / Director" required type="text" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-[#B8985A] font-semibold mb-2" htmlFor="clientEmail">Corporate Email *</label>
                    <input className="w-full px-4 py-3.5 bg-[#071527]/70 border border-white/15 text-white placeholder-white/40 text-sm focus:border-[#B8985A] focus:outline-none transition-colors rounded-[2px]" id="clientEmail" placeholder="director@enterprise.com" required type="email" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-[#B8985A] font-semibold mb-2" htmlFor="clientPhone">Phone Number *</label>
                    <input className="w-full px-4 py-3.5 bg-[#071527]/70 border border-white/15 text-white placeholder-white/40 text-sm focus:border-[#B8985A] focus:outline-none transition-colors rounded-[2px]" id="clientPhone" placeholder="+91 98470 00000" required type="tel" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#B8985A] font-semibold mb-2" htmlFor="clientCategory">Service Discipline *</label>
                  <select className="w-full px-4 py-3.5 bg-[#071527] border border-white/15 text-white text-sm focus:border-[#B8985A] focus:outline-none transition-colors rounded-[2px]" id="clientCategory" required defaultValue="">
                    <option className="bg-[#071527] text-white/50" disabled value="">Select primary practice area</option>
                    <option className="bg-[#071527] text-white" value="business">Business Consultancy & Company Incorporation</option>
                    <option className="bg-[#071527] text-white" value="accounting">Accounting, Tax Filings & Auditing</option>
                    <option className="bg-[#071527] text-white" value="property">Property Documentation & Title Verification</option>
                    <option className="bg-[#071527] text-white" value="liaison">Government Liaisoning & Statutory Approvals</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#B8985A] font-semibold mb-2" htmlFor="clientScope">Project Details / Scope Summary</label>
                  <textarea className="w-full px-4 py-3.5 bg-[#071527]/70 border border-white/15 text-white placeholder-white/40 text-sm focus:border-[#B8985A] focus:outline-none transition-colors rounded-[2px]" id="clientScope" placeholder="Briefly outline your commercial structure, land survey numbers, or target timeline..." rows="3"></textarea>
                </div>
                <button className="w-full py-4 bg-[#B8985A] hover:bg-[#c9a96b] text-[#0B1F3A] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 rounded-[2px] shadow-lg" type="submit">
                  SUBMIT CONSULTATION REQUEST
                </button>
                
                {submitted && (
                  <div className="p-3 bg-[#B8985A]/15 border border-[#B8985A] text-center text-xs text-[#B8985A] font-medium" id="form-confirmation">
                    Your inquiry has been logged. An Arvista Senior Practice Lead will initiate confidential contact within 4 business hours.
                  </div>
                )}
              </form>
            </div>

            {/* Right Column: Corporate Coordinates */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <div className="mb-6">
                  <img alt="ARVISTA International" className="h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Xcd8tXFlPyvjmti4bb8KTnF_v7NH5E57UV1_vyZnPb2y2CSDAE8QM-DYwn9CXbtt7qXsSvx9gRNMn86AhWsQAEAexIQ1TbKwBjipHIoKYGFOwLgrh6ZVAmEFC2bTFg25pm-km1Io3Kqad8Rfqua46zksi19c6kfjshmn7O9xCQJ-b8YiKU-TfXcvFKhx0KTVSpNDymyVAKWao1sIxmKsyFB9aHg3B8NsdAWe2lH_Br5tw3zJ3aJ6uZZw" />
                </div>
                <h4 className="font-cinzel text-xl text-white font-semibold mb-6">Kerala Corporate Chambers</h4>
                <div className="space-y-5 text-xs sm:text-sm text-white/80 font-light">
                  <div className="flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#B8985A] text-[22px] shrink-0 mt-0.5">location_on</span>
                    <p className="leading-relaxed">
                      2nd Floor Skytowers, HMT Junction, Kalamassery, Ernakulam, Kerala 683503
                    </p>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#B8985A] text-[22px] shrink-0 mt-0.5">call</span>
                    <div>
                      <p className="font-medium text-white">+91 9016500265</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#B8985A] text-[22px] shrink-0 mt-0.5">mail</span>
                    <p className="text-white">info@arvistainternational.com</p>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#B8985A] text-[22px] shrink-0 mt-0.5">schedule</span>
                    <p className="leading-relaxed">
                      Monday – Saturday: 09:00 AM – 06:00 PM IST<br/>
                      <span className="text-[#B8985A]">24/7 Executive Emergency Liaison available.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Location Highlight Frame */}
              <div className="p-6 bg-[#071527] border border-white/10 rounded-[2px] relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#B8985A] text-[24px]">verified</span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#B8985A] font-semibold">Government Liaison Desk</p>
                      <p className="text-xs text-white/70">Kochi & Thiruvananthapuram Secretariat Liaison</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FOOTER SECTION */}
      <footer className="w-full bg-[#071527] text-white pt-20 pb-12 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
            
            {/* Brand & Summary */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <a href="#">
                <img alt="ARVISTA International" className="h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Xcd8tXFlPyvjmti4bb8KTnF_v7NH5E57UV1_vyZnPb2y2CSDAE8QM-DYwn9CXbtt7qXsSvx9gRNMn86AhWsQAEAexIQ1TbKwBjipHIoKYGFOwLgrh6ZVAmEFC2bTFg25pm-km1Io3Kqad8Rfqua46zksi19c6kfjshmn7O9xCQJ-b8YiKU-TfXcvFKhx0KTVSpNDymyVAKWao1sIxmKsyFB9aHg3B8NsdAWe2lH_Br5tw3zJ3aJ6uZZw" />
              </a>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mt-2 max-w-sm">
                Institutional advisory, statutory liaisoning, and corporate governance for enterprise leaders, family offices, and multinational commercial operations across India.
              </p>
              <div className="flex items-center gap-2 text-[#B8985A] text-xs uppercase tracking-widest font-semibold mt-2">
                <span className="material-symbols-outlined text-sm">shield</span>
                <span>Licensed Legal & Corporate Advisors</span>
              </div>
            </div>

            {/* Quick Links 1 */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#B8985A] font-semibold">Corporate</h4>
              <ul className="space-y-2 text-xs text-white/70 font-light mt-1">
                <li><a className="hover:text-white transition-colors" href="#why-arvista">Why Arvista</a></li>
                <li><a className="hover:text-white transition-colors" href="#core-pillars">Our Practice</a></li>
                <li><a className="hover:text-white transition-colors" href="#methodology">Process & Timeline</a></li>
                <li><a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a></li>
                <li><a className="hover:text-white transition-colors" href="#faq">Frequently Asked</a></li>
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#B8985A] font-semibold">Advisory Scope</h4>
              <ul className="space-y-2 text-xs text-white/70 font-light mt-1">
                <li><a className="hover:text-white transition-colors" href="#services-explorer">Company Incorporation (MCA)</a></li>
                <li><a className="hover:text-white transition-colors" href="#services-explorer">GST & Corporate Fiduciary</a></li>
                <li><a className="hover:text-white transition-colors" href="#services-explorer">Title Scrutiny & Property Mutation</a></li>
                <li><a className="hover:text-white transition-colors" href="#services-explorer">Pollution & Municipal NOC Clearances</a></li>
                <li><a className="hover:text-white transition-colors" href="#services-explorer">Clinical & Hospital Registrations</a></li>
              </ul>
            </div>

            {/* Quick Links 3 */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#B8985A] font-semibold">Executive Contact</h4>
              <p className="text-xs text-white/70 font-light mt-1 leading-relaxed">
                2nd Floor Skytowers, HMT Junction<br/>
                Kalamassery, Ernakulam, Kerala 683503
              </p>
              <p className="text-xs text-white/70 font-light mt-1">
                <span className="text-white">Phone:</span> +91 9016500265<br/>
                <span className="text-white">Email:</span> info@arvistainternational.com
              </p>
            </div>

          </div>

          {/* Bottom Legal Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
            <p>© {new Date().getFullYear()} ARVISTA International. All statutory rights reserved.</p>
            <div className="flex items-center gap-6">
              <a className="hover:text-white transition-colors" href="#">Discretion & Confidentiality Charter</a>
              <a className="hover:text-white transition-colors" href="#">Statutory Disclosures</a>
              <a className="hover:text-white transition-colors" href="#">Terms of Representation</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP LIAISON BADGE */}
      <aside aria-label="Direct Liaison WhatsApp" className="fixed bottom-6 right-6 z-50">
        <a className="flex items-center gap-2.5 bg-[#0B1F3A]/95 text-[#B8985A] border border-[#B8985A]/50 px-4 py-2.5 shadow-2xl hover:bg-[#B8985A] hover:text-[#0B1F3A] transition-all rounded-[2px] backdrop-blur-md group" href="https://wa.me/919016500265" rel="noopener noreferrer" target="_blank">
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span className="text-[11px] font-semibold tracking-wider uppercase font-montserrat">Direct Liaison</span>
        </a>
      </aside>
    </>
  )
}
