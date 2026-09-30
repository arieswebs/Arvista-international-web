import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ContactFooter from './ContactFooter';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us | Institutional Advisory Chambers | ARVISTA INTERNATIONAL';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'ARVISTA INTERNATIONAL provides institutional legal advisory, statutory licensing, chartered accounting, and administrative liaison services across all 14 districts of Kerala and GCC cross-border corridors.'
      );
    }
  }, []);

  const corePillars = [
    {
      num: 'I',
      title: 'Procedural Mastery & Direct Advocate Counsel',
      subtitle: 'Zero intermediaries. Every matter directed by senior statutory practitioners.',
      desc: 'Corporate formations, high-value contracts, and statutory defenses are never handed off to junior coordinators. Every mandate is personally led by practicing High Court advocates, fellow chartered accountants, and seasoned former administrative liaison officers who bring decades of courtroom and departmental fluency.',
      deliverables: [
        'Direct advocate review of all founding charters & Articles of Association',
        'Senior CA oversight on capitalization, stamp duty & share allocation',
        'Direct representation before the Registrar of Companies (ROC Ernakulam)'
      ],
      authority: 'Companies Act, 2013 · High Court of Kerala · Bar Council of India'
    },
    {
      num: 'II',
      title: 'Absolute Transparency & Fixed Institutional Billing',
      subtitle: 'Predictable, audited schedules with zero opaque government liaison expenses.',
      desc: 'We reject the legacy culture of opaque liaison overheads and ambiguous government fees. Every ARVISTA engagement is backed by an itemized statutory invoice, pre-agreed milestones, and verifiable treasury receipts. Real-time weekly progress audits are delivered straight to your executive desk.',
      deliverables: [
        'Fixed retainer schedules with clear departmental fee breakdowns',
        'Verified government treasury challans delivered with every filing',
        'Weekly audit reports tracking statutory status & departmental query resolutions'
      ],
      authority: 'Statutory Fee Schedule · Treasury Receipts · Corporate Retainer Governance'
    },
    {
      num: 'III',
      title: 'Physical Ground Presence Across State Secretariats',
      subtitle: 'Field teams physically advancing files across municipal and central departments.',
      desc: 'Regulatory clearances in Kerala cannot be managed solely from behind a desk. Our administrative liaison officers maintain daily physical presence across Municipal Corporations, District Collectorates, the Kerala State Pollution Control Board, and the State Secretariat in Thiruvananthapuram to accelerate approvals.',
      deliverables: [
        'Same-day physical submission and acknowledgment tracking',
        'Direct liaison with District Town Planners & Environmental Engineers',
        'Single Window (K-SWIFT) monitoring and escalation management'
      ],
      authority: 'K-SWIFT Single Window · KSPCB Regional Offices · Local Self Government Dept'
    },
    {
      num: 'IV',
      title: 'Air-Gapped Confidentiality & Enterprise NDAs',
      subtitle: 'Military-grade discretion for founders, family offices, and sovereign funds.',
      desc: 'In high-stakes corporate acquisitions, commercial land purchases, and regulatory scrutiny, leak-proof discretion is non-negotiable. ARVISTA enforces institutional non-disclosure agreements, air-gapped physical deed archives, and end-to-end encrypted digital filing pipelines.',
      deliverables: [
        'Bilateral Enterprise NDAs signed prior to preliminary disclosure',
        'Secure air-gapped physical deed storage in Ernakulam vaults',
        'Zero public client disclosure without prior written corporate board sanction'
      ],
      authority: 'Enterprise Non-Disclosure Charter · Digital Vault Protocols · Bar Ethics'
    }
  ];

  const chambers = [
    {
      icon: 'gavel',
      title: 'Chambers of Corporate & Commercial Law',
      subtitle: 'High Court & Commercial Advocacy',
      lead: 'Practicing Advocates & Corporate Counsel',
      focus: 'Cross-border joint ventures, shareholder agreements, NCLT representation, commercial litigation defense, and 30-year high-court real estate title scrutiny.',
      tags: ['Companies Act', 'FEMA Clearances', 'Commercial Conveyance', 'NCLT Petitions']
    },
    {
      icon: 'account_balance',
      title: 'Chambers of Taxation, Audit & Assurance',
      subtitle: 'Direct, Indirect & Forensic Accounting',
      lead: 'Senior Chartered Accountants (ICAI)',
      focus: 'Statutory corporate audits, transfer pricing, multi-state GST structuring, ROC annual compliances (AOC-4/MGT-7), and high-net-worth tax advisory.',
      tags: ['Statutory Audit', 'GST Refunds & Scrutiny', 'MCA21 Filings', 'Corporate Tax Planning']
    },
    {
      icon: 'domain_verification',
      title: 'Chambers of Administrative Liaison & Sanctions',
      subtitle: 'Government Clearances & Single Window',
      lead: 'Senior Secretariat & District Liaison Leads',
      focus: 'Physical representations before Municipal Corporations, KSPCB (CTE/CTO), Fire & Rescue NOCs, revenue land conversions, and consular apostille verifications.',
      tags: ['K-SWIFT Approvals', 'Pollution Board CTE/CTO', 'Land Conversions', 'Consular Attestation']
    },
    {
      icon: 'groups_3',
      title: 'Chambers of HR Governance & Labor Compliance',
      subtitle: 'Industrial Law & Workforce Frameworks',
      lead: 'Senior Labor Law Consultants & Strategists',
      focus: 'Labor registrations, Code on Wages restructuring, EPFO/ESIC compliance, executive employment agreements, POSH committee protocols, and factory inspections.',
      tags: ['Labor Codes', 'EPFO & ESIC', 'POSH Act Compliance', 'Contractor Labor Audits']
    }
  ];

  const keralaDistricts = [
    {
      region: 'Central Kerala Corridor',
      subtitle: 'Chambers HQ, Commercial Registries & High Court',
      districts: [
        { name: 'Ernakulam', tag: 'Principal Chambers & ROC Hub' },
        { name: 'Thrissur', tag: 'Banking & Commercial Hub' },
        { name: 'Palakkad', tag: 'Industrial Corridor & KINFRA' },
        { name: 'Kottayam', tag: 'Commercial & Agro Enterprise' },
        { name: 'Idukki', tag: 'Highland Hospitality & Plantations' }
      ]
    },
    {
      region: 'Northern Kerala (Malabar Corridor)',
      subtitle: 'Northern Industrial Parks, Maritime Ports & Cross-Border Trade',
      districts: [
        { name: 'Kozhikode', tag: 'Malabar Commercial Gateway' },
        { name: 'Malappuram', tag: 'Trade & MSME Enterprise Belt' },
        { name: 'Kannur', tag: 'International Cargo & Textiles' },
        { name: 'Wayanad', tag: 'Agro-Tourism & Estate Deeds' },
        { name: 'Kasaragod', tag: 'Northern Border & KINFRA Zones' }
      ]
    },
    {
      region: 'Southern Kerala Corridor',
      subtitle: 'State Secretariat, Policy Directorates & Coastal Corridors',
      districts: [
        { name: 'Thiruvananthapuram', tag: 'State Secretariat & Tribunals' },
        { name: 'Kollam', tag: 'Marine, Port & Industrial Belt' },
        { name: 'Alappuzha', tag: 'Tourism, Waterways & Land Deeds' },
        { name: 'Pathanamthitta', tag: 'Commercial & NRI Real Estate' }
      ]
    }
  ];

  const operationalHubs = [
    {
      city: 'Ernakulam & Kochi',
      role: 'Principal Chambers & Judicial Hub',
      address: '2nd Floor Skytowers, HMT Junction, Kalamassery',
      scope: 'Registrar of Companies (ROC), High Court of Kerala, Infopark Kakkanad, Cochin Port & central commercial registries.',
      highlight: 'Central Headquarters'
    },
    {
      city: 'Thiruvananthapuram',
      role: 'Secretariat & State Policy Bureau',
      address: 'Government Secretariat Corridor, Central Trivandrum',
      scope: 'State Secretariat, Directorate of Industries & Commerce, KSPCB Head Office & quasi-judicial state appellate tribunals.',
      highlight: 'State Capital Bureau'
    },
    {
      city: 'Statewide Kerala District Network',
      role: 'All 14 Districts Physical Liaison',
      address: 'Active Field Liaison Officers in Every Revenue District',
      scope: 'Direct physical representation across all 14 District Collectorates, Grama Panchayats, Taluk revenue offices & RTOs.',
      highlight: '14 / 14 Districts Covered'
    },
    {
      city: 'GCC Cross-Border Corridor',
      role: 'Overseas Investor & Fiduciary Bureau',
      address: 'Liaison Desks covering UAE · Saudi Arabia · Qatar · Oman · Kuwait',
      scope: 'Inward FDI routing, NRI business setups, RBI FIRMS compliance & joint venture fiduciaries across all Kerala districts.',
      highlight: 'International Gateway'
    }
  ];

  const commitments = [
    { label: 'Direct Partner Counsel', desc: 'Every mandate is personally steered by practicing advocates and senior chartered accountants.' },
    { label: 'Zero Hidden Liaison Fees', desc: 'Statutory fees backed by government treasury receipts with 100% itemized transparency.' },
    { label: 'Strict Air-Gapped NDAs', desc: 'Complete client confidentiality backed by enterprise non-disclosure charters.' },
    { label: 'Time-Bound Clearances', desc: 'Predictable filing schedules with proactive tracking through dedicated field personnel.' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0B1F3A] flex flex-col font-montserrat">
      <Navbar />

      {/* 1. CINEMATIC EDITORIAL HERO */}
      <section className="relative bg-[#071527] text-white pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden isolate">
        {/* Subtle background glow and architectural overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25 bg-cover bg-center mix-blend-luminosity" 
          style={{ backgroundImage: 'url("/hero-legal.jpg?v=1")' }}
        ></div>
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: 'radial-gradient(ellipse at 15% 40%, rgba(18, 48, 90, 0.9) 0%, rgba(7, 21, 39, 0.98) 75%), radial-gradient(ellipse at 85% 20%, rgba(184, 152, 90, 0.18) 0%, transparent 60%)' 
          }}
        ></div>

        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[2px] bg-white/5 border border-[#B8985A]/40 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8985A] animate-pulse"></span>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#B8985A] font-semibold">
              INSTITUTIONAL ADVISORY CHAMBERS · ERNAKULAM HQ · STATEWIDE JURISDICTION ALL OVER KERALA
            </span>
          </div>

          {/* Headline & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                The Standard of Counsel in High-Stakes Commerce.
              </h1>
              <p className="text-white/75 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                Uniting practicing corporate advocates, senior chartered accountants, and field liaison leads into a single uncompromising institutional fiduciary.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="#consultation-desk"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#B8985A] hover:bg-[#c9a96b] text-[#0B1F3A] text-xs uppercase tracking-[0.2em] font-semibold rounded-[2px] transition-all shadow-xl font-montserrat"
              >
                <span>Initiate Private Counsel</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <a
                href="#chambers-matrix"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#B8985A] text-white hover:text-[#B8985A] text-xs uppercase tracking-[0.2em] font-semibold rounded-[2px] transition-all"
              >
                <span>Explore The 4 Chambers</span>
              </a>
            </div>
          </div>

          {/* Floating Prestige Metrics Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="border-l-2 border-[#B8985A] pl-4">
              <div className="font-cinzel text-3xl sm:text-4xl font-bold text-[#B8985A]">50+</div>
              <div className="text-xs uppercase tracking-wider text-white font-semibold mt-1">Entities Served</div>
              <div className="text-[11px] text-white/50 font-light mt-0.5">Founders, family offices & enterprises</div>
            </div>
            <div className="border-l-2 border-[#B8985A] pl-4">
              <div className="font-cinzel text-3xl sm:text-4xl font-bold text-[#B8985A]">63</div>
              <div className="text-xs uppercase tracking-wider text-white font-semibold mt-1">Statutory Mandates</div>
              <div className="text-[11px] text-white/50 font-light mt-0.5">Full-lifecycle corporate governance</div>
            </div>
            <div className="border-l-2 border-[#B8985A] pl-4">
              <div className="font-cinzel text-3xl sm:text-4xl font-bold text-[#B8985A]">99.4%</div>
              <div className="text-xs uppercase tracking-wider text-white font-semibold mt-1">On-Schedule Filings</div>
              <div className="text-[11px] text-white/50 font-light mt-0.5">Zero procedural query tolerance</div>
            </div>
            <div className="border-l-2 border-[#B8985A] pl-4">
              <div className="font-cinzel text-3xl sm:text-4xl font-bold text-[#B8985A]">100%</div>
              <div className="text-xs uppercase tracking-wider text-white font-semibold mt-1">Air-Gapped Discretion</div>
              <div className="text-[11px] text-white/50 font-light mt-0.5">Enterprise NDAs & vault security</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE GENESIS ESSAY — BESPOKE ARCHITECTURAL SPREAD */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Premium Dual-Image Prestige Collage */}
            <div className="lg:col-span-6 relative">
              {/* Primary Boardroom Image */}
              <div className="relative w-full aspect-[4/3] rounded-[2px] overflow-hidden border border-[#E5DFD4] shadow-2xl">
                <img 
                  src="/about-prestige.jpg" 
                  alt="ARVISTA Institutional Headquarters Boardroom" 
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/75 via-transparent to-transparent"></div>
              </div>

              {/* Floating Executive Quote Plaque */}
              <div className="sm:absolute -bottom-10 -right-4 sm:right-6 mt-6 sm:mt-0 bg-[#0B1F3A] text-white p-7 border-l-4 border-[#B8985A] shadow-2xl max-w-md">
                <p className="font-cinzel text-sm sm:text-base italic text-white/95 leading-relaxed mb-3">
                  "We dismantled the artificial boundary between legal chambers, audit firms, and field liaison desks to deliver uncompromised speed."
                </p>
                <div className="flex items-center justify-between text-xs text-[#B8985A] pt-2 border-t border-white/10 font-semibold uppercase tracking-wider">
                  <span>Adv. Practice Council</span>
                  <span className="font-mono text-white/60">Ernakulam HQ</span>
                </div>
              </div>
            </div>

            {/* Right: The Essay */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[1.5px] bg-[#B8985A]"></span>
                <span className="text-[10.5px] font-mono tracking-[0.25em] text-[#B8985A] uppercase font-bold">
                  FOUNDING PHILOSOPHY
                </span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-4xl text-[#0B1F3A] font-bold tracking-tight leading-snug">
                Why Traditional Corporate Advisory Failed Growth-Stage Entities in Kerala.
              </h2>

              <div className="space-y-4 text-sm sm:text-[15px] text-slate-subtle font-light leading-relaxed">
                <p>
                  For decades, founders, high-net-worth NRI families, and corporate directors setting up commercial enterprises in South India faced an exhausting dilemma:
                </p>
                <p className="border-l-2 border-[#B8985A] pl-4 text-[#0B1F3A] italic font-normal">
                  Corporate advocates drafted memorandums in isolation. Chartered accountants handled tax numbers without procedural field context. Meanwhile, third-party liaison middlemen promised permits with opaque expenses and zero accountability.
                </p>
                <p>
                  When regulatory hurdles emerged — whether a query from the Registrar of Companies in Ernakulam, a zoning objection from a municipal council, or an environmental delay before the Pollution Control Board — each advisor blamed the other. Projects stalled. Capital was tied down.
                </p>
                <p>
                  <strong className="text-[#0B1F3A] font-medium">ARVISTA INTERNATIONAL was created to replace this fragmentation with unified institutional sovereignty.</strong> We combined seasoned corporate lawyers, chartered accountants, and on-ground administrative officers into a single, cohesive advisory chambers.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-[#EAE4D8] rounded-[2px]">
                  <span className="text-[#B8985A] font-bold block mb-1 font-mono uppercase tracking-wider">The Old Way</span>
                  <span className="text-slate-subtle">Fragmented lawyers, distant CAs, opaque liaison agents.</span>
                </div>
                <div className="p-4 bg-[#0B1F3A] text-white rounded-[2px] border-l-2 border-[#B8985A]">
                  <span className="text-[#B8985A] font-bold block mb-1 font-mono uppercase tracking-wider">The Arvista Way</span>
                  <span className="text-white/80">One fiduciary umbrella, fixed fees, guaranteed delivery.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. THE 4 INVIOLATE PILLARS (TABBED LUXURY SHOWCASE) */}
      <section className="py-24 sm:py-32 bg-[#0B1F3A] text-white relative isolate overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10.5px] font-mono tracking-[0.28em] text-[#B8985A] uppercase font-bold block mb-2">
              GOVERNANCE ARCHITECTURE
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              The Four Inviolate Pillars of Practice
            </h2>
            <p className="text-white/70 text-sm sm:text-base font-light">
              Every mandate undertaken at ARVISTA is executed under these four operational guarantees.
            </p>
          </div>

          {/* Interactive Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Tab Selectors */}
            <div className="lg:col-span-5 space-y-3">
              {corePillars.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-[2px] transition-all duration-300 cursor-pointer flex items-start gap-4 border ${
                    activeTab === idx
                      ? 'bg-[#12305A] border-[#B8985A] shadow-xl text-white'
                      : 'bg-[#0e2442]/60 hover:bg-[#12305A]/60 border-white/10 text-white/75'
                  }`}
                >
                  <span className={`font-cinzel text-xl font-bold shrink-0 pt-0.5 ${
                    activeTab === idx ? 'text-[#B8985A]' : 'text-white/40'
                  }`}>
                    {p.num}.
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-cinzel text-base font-bold text-white mb-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-white/60 font-light line-clamp-1">
                      {p.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column: Active Pillar Expanded Dossier */}
            <div className="lg:col-span-7 bg-[#071527] border border-[#B8985A]/40 p-8 sm:p-12 rounded-[2px] shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <span className="font-cinzel text-3xl text-[#B8985A] font-bold">
                  Pillar {corePillars[activeTab].num}
                </span>
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-white/50 px-2.5 py-1 bg-white/5 rounded-[2px]">
                  {corePillars[activeTab].authority}
                </span>
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                {corePillars[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#B8985A] font-medium uppercase tracking-wider mb-5">
                {corePillars[activeTab].subtitle}
              </p>

              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                {corePillars[activeTab].desc}
              </p>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#B8985A] font-semibold block">
                  Mandatory Execution Deliverables
                </span>
                {corePillars[activeTab].deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/85 font-light">
                    <span className="material-symbols-outlined text-[#B8985A] text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. THE 4 MULTI-DISCIPLINARY CHAMBERS */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5]" id="chambers-matrix">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <span className="text-[10.5px] font-mono tracking-[0.28em] text-[#B8985A] uppercase font-bold block mb-2">
              DISCIPLINE EXCELLENCE
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-[#0B1F3A] mb-4">
              The Four Practice Chambers
            </h2>
            <p className="text-slate-subtle text-sm sm:text-base font-light leading-relaxed">
              Every client mandate at ARVISTA is assigned to an interdisciplinary team drawing talent from our four core chambers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chambers.map((c, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E5DFD4] hover:border-[#B8985A] p-8 sm:p-10 rounded-[2px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[2px] bg-[#0B1F3A] text-[#B8985A] flex items-center justify-center group-hover:bg-[#B8985A] group-hover:text-[#0B1F3A] transition-colors">
                      <span className="material-symbols-outlined text-[26px]">{c.icon}</span>
                    </div>
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-slate-subtle">
                      CHAMBER 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-1 group-hover:text-[#B8985A] transition-colors">
                    {c.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[#B8985A] font-semibold mb-4">
                    {c.lead}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-subtle font-light leading-relaxed mb-6">
                    {c.focus}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#F2EDE4]">
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10.5px] bg-[#FAF8F5] border border-[#E8E2D6] text-[#0B1F3A] px-2.5 py-1 rounded-[2px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. STATEWIDE COVERAGE ACROSS ALL 14 DISTRICTS & GCC LIAISON */}
      <section className="py-24 sm:py-32 bg-[#F4EFE6]/70 border-t border-[#E8E2D4]" id="statewide-coverage">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B8985A]/15 border border-[#B8985A]/40 rounded-[2px] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#0B1F3A] uppercase font-bold">
                  STATEWIDE JURISDICTION · ALL OVER KERALA
                </span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-[#0B1F3A]">
                We Provide Service All Over Kerala
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-subtle max-w-md font-light leading-relaxed">
              From Kasaragod to Thiruvananthapuram, ARVISTA provides direct statutory representation, land conveyance, licensing, and administrative liaison across <strong className="text-[#0B1F3A] font-semibold">all 14 revenue districts</strong> of Kerala.
            </p>
          </div>

          {/* Pan-Kerala 14 Revenue Districts Interactive Grid Card */}
          <div className="bg-[#0B1F3A] text-white p-7 sm:p-10 rounded-[2px] border border-[#B8985A]/40 shadow-xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8985A]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-8">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B8985A] font-bold block mb-1">
                    COMPLETE STATEWIDE TERRITORY
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Direct Operational Coverage Across All 14 Districts
                  </h3>
                  <p className="text-xs text-white/70 font-light mt-1 max-w-xl">
                    Our practicing advocates and field officers physically attend District Collectorates, Municipal Corporations, Town Planning desks, and Sub-Registrar offices in every revenue jurisdiction.
                  </p>
                </div>

                {/* Status Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-3.5 py-2 rounded-[2px] bg-white/5 border border-[#B8985A]/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-semibold text-white tracking-wider uppercase font-montserrat">14/14 Districts Active</span>
                  </div>
                  <div className="px-3.5 py-2 rounded-[2px] bg-[#B8985A]/20 border border-[#B8985A]/50 text-[#B8985A] text-xs font-semibold uppercase tracking-wider font-montserrat">
                    Zero Regional Limits
                  </div>
                </div>
              </div>

              {/* 3 Regional Columns displaying all 14 districts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {keralaDistricts.map((reg, rIdx) => (
                  <div key={rIdx} className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-[2px]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#B8985A]"></span>
                      <h4 className="font-cinzel text-sm sm:text-base font-bold text-white">
                        {reg.region}
                      </h4>
                    </div>
                    <p className="text-[10.5px] text-white/50 font-light mb-4 pb-3 border-b border-white/10">
                      {reg.subtitle}
                    </p>

                    <div className="space-y-2.5">
                      {reg.districts.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center justify-between text-xs bg-white/5 hover:bg-white/10 px-3 py-2 rounded-[2px] border border-white/5 transition-colors">
                          <span className="font-medium text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            {d.name}
                          </span>
                          <span className="text-[10px] text-[#B8985A] font-light tracking-wide">
                            {d.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Strip in District Matrix */}
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/70 font-light">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#B8985A]">verified</span>
                  <span>Physical representation at all 14 District Collectorates, KSPCB Regional Offices & Local Self Government Departments.</span>
                </div>
                <span className="text-[#B8985A] font-medium text-[11px] uppercase tracking-wider">
                  Statewide On-Ground Protocol Guaranteed
                </span>
              </div>
            </div>
          </div>

          {/* 4 Strategic Operational Hubs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalHubs.map((cor, idx) => (
              <div key={idx} className="bg-white border border-[#E5DFD4] p-6 sm:p-7 rounded-[2px] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-cinzel text-base sm:text-lg font-bold text-[#0B1F3A]">{cor.city}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  </div>
                  <div className="inline-block px-2 py-0.5 rounded-[2px] bg-[#FAF8F5] border border-[#B8985A]/30 text-[9.5px] uppercase tracking-wider text-[#B8985A] font-bold mb-3">
                    {cor.highlight}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#0B1F3A]/75 font-semibold block mb-2">
                    {cor.role}
                  </span>
                  <p className="text-xs text-slate-subtle font-light mb-4 leading-relaxed">
                    {cor.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2ECE1]">
                  <span className="text-[10px] uppercase tracking-wider text-slate-subtle font-bold block mb-1">
                    Operational Scope
                  </span>
                  <p className="text-[11px] text-[#0B1F3A]/85 font-light leading-snug">
                    {cor.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. THE CLIENT FIDUCIARY CHARTER */}
      <section className="py-20 sm:py-28 bg-[#071527] text-white border-t border-[#B8985A]/30">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="p-8 sm:p-14 bg-[#0B1F3A] border border-[#B8985A]/40 rounded-[2px] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-[10.5px] font-mono tracking-[0.25em] text-[#B8985A] uppercase font-bold block mb-2">
                  OUR PLEDGE TO EVERY CLIENT
                </span>
                <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-4">
                  The ARVISTA Fiduciary Charter
                </h3>
                <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-8 max-w-xl">
                  We measure our institutional standing not by the volume of filings, but by the legal invulnerability, fiscal integrity, and procedural speed delivered to our clients.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {commitments.map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#B8985A] text-[18px] shrink-0 mt-0.5">verified</span>
                      <div>
                        <span className="text-xs font-semibold text-white block mb-0.5">{c.label}</span>
                        <span className="text-[11px] text-white/60 font-light leading-snug block">{c.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#071527] border border-white/10 p-8 rounded-[2px] text-center flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#B8985A]/15 border border-[#B8985A] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[#B8985A] text-[28px]">lock</span>
                </div>
                <h4 className="font-cinzel text-lg text-white font-bold mb-2">
                  Schedule Private Executive Consultation
                </h4>
                <p className="text-xs text-white/65 font-light mb-6 max-w-xs">
                  Direct engagement under enterprise NDA with our senior corporate advocates and practice heads.
                </p>
                <a
                  href="#consultation-desk"
                  className="w-full py-3.5 px-6 bg-[#B8985A] hover:bg-[#c9a96b] text-[#0B1F3A] text-xs uppercase tracking-widest font-semibold rounded-[2px] transition-all shadow-lg"
                >
                  Consultation Intake Desk
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. INTAKE & FOOTER */}
      <ContactFooter />
    </div>
  );
}
