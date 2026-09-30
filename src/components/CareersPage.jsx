import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ContactFooter from './ContactFooter';
import { openPositions, culturePillars } from '../data/careers';

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [appliedRole, setAppliedRole] = useState(openPositions[0]?.title || '');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Careers & Open Mandates | Join Our Chambers | ARVISTA INTERNATIONAL';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore career opportunities at ARVISTA INTERNATIONAL in Ernakulam, Kerala. Practice opportunities for Corporate Advocates, Chartered Accountants, HR Consultants, and Liaison Officers.'
      );
    }
  }, []);

  const departments = ['All', ...new Set(openPositions.map((p) => p.department))];

  const filteredPositions = selectedDept === 'All'
    ? openPositions
    : openPositions.filter((p) => p.department === selectedDept);

  const handleApplyClick = (roleTitle) => {
    setAppliedRole(roleTitle);
    const formElement = document.getElementById('career-application-desk');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0B1F3A] flex flex-col font-montserrat">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#0B1F3A] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden isolate">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url("/hero-legal.jpg?v=1")' }}></div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 30%, rgba(184, 152, 90, 0.12) 0%, transparent 60%)' }}></div>
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B8985A]"></span>
              <span className="text-[11px] sm:text-xs tracking-[0.28em] text-[#B8985A] uppercase font-semibold">
                PRACTICE AT ARVISTA
              </span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.14] mb-6">
              Shape Corporate Governance & High-Stakes Advisory in South India.
            </h1>
            <p className="text-white/75 text-base sm:text-lg font-light leading-relaxed mb-8">
              We are expanding our institutional chambers across corporate advocacy, chartered accountancy, HR talent governance, and administrative liaisoning in Ernakulam.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#open-mandates"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#B8985A] hover:bg-[#c9a96b] text-[#0B1F3A] text-xs uppercase tracking-widest font-semibold rounded-[2px] transition-all duration-300 shadow-lg"
              >
                <span>View {openPositions.length} Open Mandates</span>
                <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
              </a>
              <a 
                href="#career-application-desk"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 hover:border-[#B8985A] text-white hover:text-[#B8985A] text-xs uppercase tracking-widest font-semibold rounded-[2px] transition-all"
              >
                <span>Direct Dossier Submission</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Culture & Pillars */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E2D4]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10.5px] tracking-[0.28em] text-[#B8985A] uppercase font-bold block mb-2">
              WHY BUILD YOUR CAREER HERE
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl text-[#0B1F3A] font-bold tracking-tight">
              An Environment of Technical Excellence & Accelerated Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturePillars.map((c, idx) => (
              <div key={idx} className="p-6 rounded-[2px] bg-[#FAF8F5] border border-[#E9E4DB] flex flex-col justify-between group hover:border-[#B8985A] transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-[2px] bg-[#0B1F3A] text-[#B8985A] flex items-center justify-center mb-4 group-hover:bg-[#B8985A] group-hover:text-[#0B1F3A] transition-colors">
                    <span className="material-symbols-outlined text-[22px]">{c.icon}</span>
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-[#0B1F3A] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-subtle leading-relaxed font-light">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]" id="open-mandates">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>
                <span className="text-[10.5px] tracking-[0.25em] text-[#B8985A] uppercase font-bold">
                  ACTIVE OPPORTUNITIES
                </span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-4xl text-[#0B1F3A] font-bold tracking-tight">
                Current Practice Mandates
              </h2>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-[#0B1F3A] text-white shadow-sm'
                      : 'bg-white text-[#0B1F3A] hover:bg-[#F3EFE6] border border-[#E5DFD4]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredPositions.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div 
                  key={job.id} 
                  className={`bg-white border transition-all duration-300 rounded-[2px] overflow-hidden ${
                    isExpanded ? 'border-[#B8985A] shadow-md' : 'border-[#E8E2D6] hover:border-[#B8985A]/60'
                  }`}
                >
                  {/* Job Header Bar */}
                  <div 
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-[#B8985A]/15 text-[#8c6f37] font-bold">
                          {job.department}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-[#0B1F3A]/5 text-[#0B1F3A] font-semibold">
                          {job.experience}
                        </span>
                        {job.badge && (
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-emerald-100 text-emerald-800 font-bold">
                            {job.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#0B1F3A] tracking-wide">
                        {job.title}
                      </h3>
                      <p className="text-xs text-slate-subtle font-light line-clamp-1">
                        {job.location} • {job.type}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApplyClick(job.title);
                        }}
                        className="px-4 py-2 bg-[#B8985A] hover:bg-[#9a7e48] text-white text-[11px] uppercase tracking-wider font-semibold rounded-[2px] transition-all cursor-pointer shadow-sm"
                      >
                        Apply Now
                      </button>
                      <button 
                        type="button"
                        className="w-8 h-8 rounded-[2px] bg-[#FAF8F5] flex items-center justify-center text-[#0B1F3A]"
                        aria-label="Toggle details"
                      >
                        <span className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#B8985A]' : ''}`}>
                          expand_more
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#F2ECE1] bg-[#FCFAF7] space-y-6">
                      <div>
                        <h4 className="font-cinzel text-xs uppercase tracking-wider text-[#B8985A] font-bold mb-2">
                          Mandate Overview
                        </h4>
                        <p className="text-xs sm:text-sm text-[#0B1F3A]/85 font-light leading-relaxed">
                          {job.overview}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-cinzel text-xs uppercase tracking-wider text-[#B8985A] font-bold mb-2">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2 text-xs text-[#0B1F3A]/85 font-light">
                            {job.responsibilities.map((r, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-[14px] text-[#B8985A] shrink-0 mt-0.5">check_small</span>
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-cinzel text-xs uppercase tracking-wider text-[#B8985A] font-bold mb-2">
                            Qualifications & Mastery
                          </h4>
                          <ul className="space-y-2 text-xs text-[#0B1F3A]/85 font-light">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-[14px] text-[#B8985A] shrink-0 mt-0.5">verified</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#EDE7DD] flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs text-slate-subtle">
                          <span className="font-semibold text-[#0B1F3A]">Remuneration Architecture:</span> {job.remuneration}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleApplyClick(job.title)}
                          className="px-6 py-2.5 bg-[#0B1F3A] hover:bg-[#16335C] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
                        >
                          <span>Proceed to Candidate Intake</span>
                          <span className="material-symbols-outlined text-[14px] text-[#B8985A]">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Candidate Intake Dossier Form */}
      <section className="py-20 sm:py-28 bg-[#0B1F3A] text-white relative overflow-hidden isolate" id="career-application-desk">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-[1.5px] bg-[#B8985A]"></span>
                <span className="text-[10.5px] tracking-[0.25em] text-[#B8985A] uppercase font-bold">
                  DIRECT PARTNER INTAKE
                </span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-4xl text-white font-bold tracking-tight mb-4">
                Submit Your Professional Dossier
              </h2>
              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-6">
                All submissions are held in strict confidence under our firm-wide professional disclosure protocol. Even if your exact practice discipline is not listed, exceptional practitioners are always reviewed for custom senior partnerships.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-white/80">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#B8985A] text-[20px]">mark_email_read</span>
                  <span>Direct HR Desk: careers@arvistainternational.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#B8985A] text-[20px]">timer</span>
                  <span>Candidate reviews acknowledged within 48 business hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#B8985A] text-[20px]">corporate_fare</span>
                  <span>Chambers: 2nd Floor Skytowers, Kalamassery, Ernakulam</span>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-7 bg-[#FCFAF6] text-[#0B1F3A] p-8 sm:p-10 rounded-[2px] shadow-2xl border-t-4 border-[#B8985A]">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-1">
                Candidate Application
              </h3>
              <p className="text-xs text-[#0B1F3A]/70 font-light mb-6">
                Complete the fields below to initiate confidential partnership evaluation.
              </p>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10.5px] uppercase tracking-wider text-[#0B1F3A]/80 font-bold mb-1" htmlFor="applicantName">
                      Full Legal Name <span className="text-[#B8985A]">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="applicantName" 
                      required 
                      placeholder="e.g. Adv. Vivek Warrier" 
                      className="w-full px-4 py-3 bg-white border border-[#DDD5C7] text-[#0B1F3A] placeholder-[#0B1F3A]/35 text-xs focus:border-[#B8985A] focus:ring-1 focus:ring-[#B8985A] focus:outline-none rounded-[2px]" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10.5px] uppercase tracking-wider text-[#0B1F3A]/80 font-bold mb-1" htmlFor="applicantPhone">
                      Phone Number <span className="text-[#B8985A]">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="applicantPhone" 
                      required 
                      placeholder="+91 98470 00000" 
                      className="w-full px-4 py-3 bg-white border border-[#DDD5C7] text-[#0B1F3A] placeholder-[#0B1F3A]/35 text-xs focus:border-[#B8985A] focus:ring-1 focus:ring-[#B8985A] focus:outline-none rounded-[2px]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10.5px] uppercase tracking-wider text-[#0B1F3A]/80 font-bold mb-1" htmlFor="applicantEmail">
                      Email Address <span className="text-[#B8985A]">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="applicantEmail" 
                      required 
                      placeholder="counsel@chambers.com" 
                      className="w-full px-4 py-3 bg-white border border-[#DDD5C7] text-[#0B1F3A] placeholder-[#0B1F3A]/35 text-xs focus:border-[#B8985A] focus:ring-1 focus:ring-[#B8985A] focus:outline-none rounded-[2px]" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10.5px] uppercase tracking-wider text-[#0B1F3A]/80 font-bold mb-1" htmlFor="positionTarget">
                      Target Mandate <span className="text-[#B8985A]">*</span>
                    </label>
                    <select 
                      id="positionTarget" 
                      value={appliedRole} 
                      onChange={(e) => setAppliedRole(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#DDD5C7] text-[#0B1F3A] text-xs focus:border-[#B8985A] focus:ring-1 focus:ring-[#B8985A] focus:outline-none rounded-[2px] cursor-pointer"
                    >
                      {openPositions.map((p) => (
                        <option key={p.id} value={p.title}>{p.title}</option>
                      ))}
                      <option value="General Spontaneous Application">General Spontaneous Application / Partnership Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10.5px] uppercase tracking-wider text-[#0B1F3A]/80 font-bold mb-1" htmlFor="applicantExp">
                      Years of Experience <span className="text-[#B8985A]">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="applicantExp" 
                      required 
                      placeholder="e.g. 5 Years (Bar / ICAI / Field)" 
                      className="w-full px-4 py-3 bg-white border border-[#DDD5C7] text-[#0B1F3A] placeholder-[#0B1F3A]/35 text-xs focus:border-[#B8985A] focus:ring-1 focus:ring-[#B8985A] focus:outline-none rounded-[2px]" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10.5px] uppercase tracking-wider text-[#0B1F3A]/80 font-bold mb-1" htmlFor="applicantLink">
                      LinkedIn / Dossier Link
                    </label>
                    <input 
                      type="url" 
                      id="applicantLink" 
                      placeholder="https://linkedin.com/in/..." 
                      className="w-full px-4 py-3 bg-white border border-[#DDD5C7] text-[#0B1F3A] placeholder-[#0B1F3A]/35 text-xs focus:border-[#B8985A] focus:ring-1 focus:ring-[#B8985A] focus:outline-none rounded-[2px]" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10.5px] uppercase tracking-wider text-[#0B1F3A]/80 font-bold mb-1" htmlFor="applicantCover">
                    Executive Summary / Relevant Practice Accomplishments
                  </label>
                  <textarea 
                    id="applicantCover" 
                    rows="3" 
                    placeholder="Briefly state your primary statutory specializations, recent transactions handled, or bar admissions..." 
                    className="w-full px-4 py-3 bg-white border border-[#DDD5C7] text-[#0B1F3A] placeholder-[#0B1F3A]/35 text-xs focus:border-[#B8985A] focus:ring-1 focus:ring-[#B8985A] focus:outline-none rounded-[2px] resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#0B1F3A] hover:bg-[#16335C] text-white border border-[#B8985A] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[2px] shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Submit Confidential Application</span>
                  <span className="material-symbols-outlined text-[16px] text-[#B8985A] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                {submitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-300 text-center text-xs text-emerald-900 font-medium rounded-[2px]">
                    Your professional dossier has been submitted. Our Senior Practice Committee will review your credentials under strict discretion.
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}
