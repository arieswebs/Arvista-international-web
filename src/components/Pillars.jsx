export default function Pillars() {
  return (
    <section className="bg-[#F7F5F0] py-24 sm:py-28 border-b border-[#E7E2D8]" id="core-pillars">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#B8985A]"></span>
            <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold">OUR ADVISORY PRACTICE</span>
            <span className="w-6 h-[1px] bg-[#B8985A]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl text-[#0B1F3A] font-semibold tracking-tight">Three Pillars of Strategic Growth</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-subtle font-light">Precision-engineered institutional solutions tailored for founders, family offices, and multinational commercial operators.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="group bg-white p-8 sm:p-10 border border-[#E5E0D5] hover:border-[#B8985A] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#B8985A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div>
              <div className="w-14 h-14 rounded-[2px] bg-[#F7F5F0] border border-[#E5E0D5] flex items-center justify-center text-[#B8985A] mb-8 group-hover:bg-[#0B1F3A] group-hover:border-[#0B1F3A] transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">corporate_fare</span>
              </div>
              <h3 className="font-cinzel text-xl text-[#0B1F3A] font-semibold mb-3">Business Consultancy</h3>
              <p className="text-slate-subtle text-sm leading-relaxed mb-6 font-light">
                Strategic entity setup, enterprise governance, compliance structuring, cross-border corporate frameworks, and high-growth commercial advisory.
              </p>
              <ul className="space-y-2 text-xs text-[#1A2230]/80 font-medium">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>MCA SPICe+ & Incorporation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>Institutional Licensing & IP Protection</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>Joint Ventures, MOUs & Structuring</li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-[#F0ECE1]">
              <a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#0B1F3A] font-semibold group-hover:text-[#B8985A] transition-colors" href="#services-explorer">
                Learn more <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="group bg-white p-8 sm:p-10 border border-[#E5E0D5] hover:border-[#B8985A] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#B8985A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div>
              <div className="w-14 h-14 rounded-[2px] bg-[#F7F5F0] border border-[#E5E0D5] flex items-center justify-center text-[#B8985A] mb-8 group-hover:bg-[#0B1F3A] group-hover:border-[#0B1F3A] transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">groups_3</span>
              </div>
              <h3 className="font-cinzel text-xl text-[#0B1F3A] font-semibold mb-3">HR Consultancy</h3>
              <p className="text-slate-subtle text-sm leading-relaxed mb-6 font-light">
                Executive staffing, institutional policy design, statutory labor compliance, contractual frameworks, and end-to-end talent governance.
              </p>
              <ul className="space-y-2 text-xs text-[#1A2230]/80 font-medium">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>Statutory Labor Registrations & Audits</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>Executive Placement & NDA Agreements</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>PF, ESI & Payroll Governance</li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-[#F0ECE1]">
              <a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#0B1F3A] font-semibold group-hover:text-[#B8985A] transition-colors" href="#services-explorer">
                Learn more <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="group bg-white p-8 sm:p-10 border border-[#E5E0D5] hover:border-[#B8985A] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#B8985A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div>
              <div className="w-14 h-14 rounded-[2px] bg-[#F7F5F0] border border-[#E5E0D5] flex items-center justify-center text-[#B8985A] mb-8 group-hover:bg-[#0B1F3A] group-hover:border-[#0B1F3A] transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">domain_verification</span>
              </div>
              <h3 className="font-cinzel text-xl text-[#0B1F3A] font-semibold mb-3">Project Consultancy</h3>
              <p className="text-slate-subtle text-sm leading-relaxed mb-6 font-light">
                Techno-economic feasibility reports, turnkey municipal approvals, industrial environmental documentation, and quasi-judicial clearance execution.
              </p>
              <ul className="space-y-2 text-xs text-[#1A2230]/80 font-medium">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>Pollution Board Clearances (CTE/CTO)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>Industrial Zoning & Data Bank Conversions</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>Banking DPRs & Valuation Certification</li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-[#F0ECE1]">
              <a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#0B1F3A] font-semibold group-hover:text-[#B8985A] transition-colors" href="#services-explorer">
                Learn more <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
