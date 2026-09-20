export default function Testimonials() {
  return (
    <section className="bg-[#F7F5F0] py-24 sm:py-28 border-y border-[#E7E2D8]" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#B8985A]"></span>
            <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold">INSTITUTIONAL TRUST</span>
            <span className="w-6 h-[1px] bg-[#B8985A]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl text-[#0B1F3A] font-semibold tracking-tight">Endorsements from Respected Leaders</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-subtle font-light">The partners and executives who rely on ARVISTA for high-stakes business continuity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 sm:p-10 border border-[#E5E0D5] flex flex-col justify-between shadow-sm relative">
            <span className="font-cinzel text-5xl text-[#B8985A]/40 leading-none select-none">“</span>
            <p className="text-sm text-slate-charcoal/90 leading-relaxed font-light italic mt-2 mb-6">
              ARVISTA handled our multi-specialty hospital clearances and Kerala PCB approvals with unprecedented speed. Their familiarity with quasi-judicial administrative channels saved us nearly four months on commissioning.
            </p>
            <div className="pt-5 border-t border-[#F0ECE1]">
              <h4 className="font-cinzel text-sm font-bold text-[#0B1F3A]">Dr. K. R. Menon</h4>
              <p className="text-xs text-slate-subtle">Managing Director, Apex Healthcare Consortium</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 sm:p-10 border border-[#E5E0D5] flex flex-col justify-between shadow-sm relative">
            <span className="font-cinzel text-5xl text-[#B8985A]/40 leading-none select-none">“</span>
            <p className="text-sm text-slate-charcoal/90 leading-relaxed font-light italic mt-2 mb-6">
              From multi-jurisdiction trademark registrations to complex GST cross-state reconciliations, ARVISTA operates with the rigor of a global tier-one fiduciary firm. They are our permanent corporate anchor.
            </p>
            <div className="pt-5 border-t border-[#F0ECE1]">
              <h4 className="font-cinzel text-sm font-bold text-[#0B1F3A]">S. Nambiar</h4>
              <p className="text-xs text-slate-subtle">Founder & CEO, Horizon FinTech Solutions</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 sm:p-10 border border-[#E5E0D5] flex flex-col justify-between shadow-sm relative">
            <span className="font-cinzel text-5xl text-[#B8985A]/40 leading-none select-none">“</span>
            <p className="text-sm text-slate-charcoal/90 leading-relaxed font-light italic mt-2 mb-6">
              Their 30-year property title scrutiny report uncovered latent lineage encumbrances on a high-value commercial parcel in Kochi. Their diligence protected us from catastrophic litigation.
            </p>
            <div className="pt-5 border-t border-[#F0ECE1]">
              <h4 className="font-cinzel text-sm font-bold text-[#0B1F3A]">R. Varma</h4>
              <p className="text-xs text-slate-subtle">Director, Sovereign Heritage Estates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
