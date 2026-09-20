export default function Process() {
  return (
    <section className="bg-white py-24 sm:py-28" id="methodology">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#B8985A]"></span>
            <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold">STRUCTURED EXECUTION</span>
            <span className="w-6 h-[1px] bg-[#B8985A]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl text-[#0B1F3A] font-semibold tracking-tight">A Seamless Four-Stage Process</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-subtle font-light">From preliminary legal diagnostic to operational certification, our workflow leaves nothing to chance.</p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Hairline Connector (Desktop) */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-[1px] bg-[#E5E0D5] z-0"></div>
          
          {/* Step 01 */}
          <div className="relative z-10 flex flex-col items-start bg-white md:bg-transparent">
            <div className="w-14 h-14 rounded-full bg-[#0B1F3A] text-[#B8985A] border-4 border-white shadow flex items-center justify-center font-cinzel font-bold text-sm mb-6">01</div>
            <span className="text-[11px] tracking-[0.2em] text-[#B8985A] uppercase font-semibold mb-1">STAGE ONE</span>
            <h3 className="font-cinzel text-lg text-[#0B1F3A] font-semibold mb-2">Consult</h3>
            <p className="text-xs sm:text-sm text-slate-subtle font-light leading-relaxed">
              Comprehensive diagnostic analysis of your legal posture, corporate charter prerequisites, and departmental requirements.
            </p>
          </div>

          {/* Step 02 */}
          <div className="relative z-10 flex flex-col items-start bg-white md:bg-transparent">
            <div className="w-14 h-14 rounded-full bg-[#0B1F3A] text-[#B8985A] border-4 border-white shadow flex items-center justify-center font-cinzel font-bold text-sm mb-6">02</div>
            <span className="text-[11px] tracking-[0.2em] text-[#B8985A] uppercase font-semibold mb-1">STAGE TWO</span>
            <h3 className="font-cinzel text-lg text-[#0B1F3A] font-semibold mb-2">Plan</h3>
            <p className="text-xs sm:text-sm text-slate-subtle font-light leading-relaxed">
              Statutory roadmap design, certified document assembly, and formal timeline commitments calibrated to minimize bureaucratic friction.
            </p>
          </div>

          {/* Step 03 */}
          <div className="relative z-10 flex flex-col items-start bg-white md:bg-transparent">
            <div className="w-14 h-14 rounded-full bg-[#0B1F3A] text-[#B8985A] border-4 border-white shadow flex items-center justify-center font-cinzel font-bold text-sm mb-6">03</div>
            <span className="text-[11px] tracking-[0.2em] text-[#B8985A] uppercase font-semibold mb-1">STAGE THREE</span>
            <h3 className="font-cinzel text-lg text-[#0B1F3A] font-semibold mb-2">Execute</h3>
            <p className="text-xs sm:text-sm text-slate-subtle font-light leading-relaxed">
              Direct governmental filing, on-ground department liaison representation, and certified scrutiny by senior High Court advocates.
            </p>
          </div>

          {/* Step 04 */}
          <div className="relative z-10 flex flex-col items-start bg-white md:bg-transparent">
            <div className="w-14 h-14 rounded-full bg-[#0B1F3A] text-[#B8985A] border-4 border-white shadow flex items-center justify-center font-cinzel font-bold text-sm mb-6">04</div>
            <span className="text-[11px] tracking-[0.2em] text-[#B8985A] uppercase font-semibold mb-1">STAGE FOUR</span>
            <h3 className="font-cinzel text-lg text-[#0B1F3A] font-semibold mb-2">Support</h3>
            <p className="text-xs sm:text-sm text-slate-subtle font-light leading-relaxed">
              Post-approval maintenance, annual filings, regular ledger auditing, and executive on-call counsel for sustained operational compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
