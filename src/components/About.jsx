export default function About() {
  return (
    <section className="bg-[#F7F5F0] py-24 sm:py-28 border-y border-[#E7E2D8]" id="why-arvista">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#B8985A]"></span>
              <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold">THE ARVISTA ADVANTAGE</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl text-[#0B1F3A] font-semibold tracking-tight mb-8 leading-snug">
              Uncompromising Standards in High-Stakes Advisory
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="font-cinzel text-lg text-[#B8985A] font-bold shrink-0 pt-0.5">01.</span>
                <div>
                  <h4 className="font-cinzel text-base text-[#0B1F3A] font-semibold mb-1">Expert Guidance</h4>
                  <p className="text-slate-subtle text-sm leading-relaxed font-light">
                    Direct counsel led by practicing corporate advocates, senior chartered accountants, and seasoned former administrative liaison officers with decades of procedural mastery.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="font-cinzel text-lg text-[#B8985A] font-bold shrink-0 pt-0.5">02.</span>
                <div>
                  <h4 className="font-cinzel text-base text-[#0B1F3A] font-semibold mb-1">Absolute Transparency</h4>
                  <p className="text-slate-subtle text-sm leading-relaxed font-light">
                    Fixed institutional billing schedules with zero opaque government liaison expenses. Weekly verified progress audits delivered straight to your executive desk.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="font-cinzel text-lg text-[#B8985A] font-bold shrink-0 pt-0.5">03.</span>
                <div>
                  <h4 className="font-cinzel text-base text-[#0B1F3A] font-semibold mb-1">Timely Delivery</h4>
                  <p className="text-slate-subtle text-sm leading-relaxed font-light">
                    Statutory filing windows and project deadlines guaranteed through dedicated field teams physically present across municipal, state, and central departments.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="font-cinzel text-lg text-[#B8985A] font-bold shrink-0 pt-0.5">04.</span>
                <div>
                  <h4 className="font-cinzel text-base text-[#0B1F3A] font-semibold mb-1">Strict Confidentiality</h4>
                  <p className="text-slate-subtle text-sm leading-relaxed font-light">
                    Enterprise NDAs, air-gapped physical archives, and encrypted digital vaults to preserve absolute discretion for founders, high-net-worth families, and sovereign investors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photo with Overlay Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-[2px] overflow-hidden border border-[#E5E0D5] shadow-2xl">
              <img alt="ARVISTA Institutional Headquarters" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XmcBLPS4PkthzIxnTymGIYJANBF1FSgvRK2e6NYha2KUn0PeHNU1Jeuj-drzNPpD1lDSWcQ63iL-oAb_CRKQn33WFxwyoCFtF9snnLuuylVq_02GYa8btKHnKm2FeMMVhl2VC6UF1Kra0udWErxcEoTiwEEEWHCsJlKNC6tYfZnEW1f80h-km8IPhOFR4EyO_utLMYDzZf0eW-xCwgvqHpM1iF8bj-wu1f_DfpPLs0GB-Na9MVgZI-oA" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-transparent"></div>
            </div>
            
            {/* Trust Overlay Badge */}
            <div className="sm:absolute -bottom-8 -left-4 sm:left-6 mt-6 sm:mt-0 bg-[#0B1F3A] text-white p-6 border-l-4 border-[#B8985A] shadow-2xl max-w-sm">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-cinzel text-3xl text-[#B8985A] font-bold">1,200+</span>
                <span className="text-xs uppercase tracking-widest text-white/70">Entities Structured</span>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Maintaining a 99.4% on-schedule regulatory clearance across major industry corridors in South India.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
