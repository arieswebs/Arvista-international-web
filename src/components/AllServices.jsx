import { useState } from 'react';

export default function AllServices() {
  const [activeTab, setActiveTab] = useState('business');

  const tabs = [
    { id: 'business', label: 'Business Services' },
    { id: 'accounting', label: 'Accounting Services' },
    { id: 'property', label: 'Property & Documentation' },
    { id: 'liaison', label: 'Liaisoning Services' }
  ];

  const servicesData = {
    business: [
      { name: 'Sole Proprietorship', desc: 'Trade licenses, tax registrations & local establishment filings.' },
      { name: 'Partnership Firm & LLP', desc: 'Deed drafting, RoF registration, partner rights & operational covenants.' },
      { name: 'Company Formation Support', desc: 'Pvt Ltd, Public Ltd, and Section 8 non-profit incorporations.' },
      { name: 'One Person Company (OPC)', desc: 'Single founder limited liability structuring & nominee covenants.' },
      { name: 'Society & Trust Registration', desc: 'Non-governmental bylaws, charitable trusts & institutional filings.' },
      { name: 'UDYAM / MSME Registration', desc: 'Government priority registration, subsidies & bank preference.' },
      { name: 'Trade & Business Licence', desc: 'Panchayat, Municipal Corporation & State commercial clearance.' },
      { name: 'FSSAI Licence', desc: 'Food business operator basic, state, and central authority permits.' },
      { name: 'Drug Licences', desc: 'Retail, wholesale pharmacy, manufacturing & medical store permissions.' },
      { name: 'Digital Signature (DSC) & DIN', desc: 'Class 3 cryptotokens & Director Identification Number processing.' },
      { name: 'Import Export Code (IEC)', desc: 'DGFT central registration for international import/export trading.' },
      { name: 'Labour Registration', desc: 'Shop & Commercial Establishment Act compliance and registrations.' },
      { name: 'Trademark Registration', desc: 'Brand name search, filing, opposition hearings & trademark certificates.' },
      { name: 'MOU & Letter of Undertaking', desc: 'Legally binding covenants, consortium agreements & formal pledges.' },
      { name: 'Techno-Economic Project Report', desc: 'Comprehensive DPR for bank capital sanction and industrial subsidy.' },
      { name: 'Pollution Control Board Clearance', desc: 'State PCB Consent to Establish (CTE) & Consent to Operate (CTO).' },
      { name: 'Paramedical & Clinical Registration', desc: 'Clinical Establishments Act licensing & healthcare permits.' },
      { name: 'Hospital Registration', desc: 'Statutory accreditation, biomedical waste management & fire safety NOCs.' },
      { name: 'NDA Agreements', desc: 'Enforceable non-disclosure contracts & intellectual asset protection.' },
      { name: 'Business Agreements & Takeover', desc: 'Asset acquisition, shares transfer & merger documentation.' },
      { name: 'PR & Compliance Management', desc: 'Institutional public affairs and recurring statutory governance.' }
    ],
    accounting: [
      { name: 'GST Registration', desc: 'Taxpayer enrolment, jurisdiction tagging & composition scheme guidance.' },
      { name: 'GST Return Filing', desc: 'Monthly GSTR-1, 3B, annual 9/9C reconciliation & ITC recovery.' },
      { name: 'Income Tax Filing (ITR)', desc: 'Corporate, firm & high-net-worth individual structured returns.' },
      { name: 'Accounts Handling & MIS', desc: 'Daily ledger management, Tally/Zoho setups & executive MIS reporting.' },
      { name: 'PAN Card Processing', desc: 'Entity PAN, corrections, director linkage & NRI tax IDs.' },
      { name: 'Statutory & Internal Auditing', desc: 'Independent financial audits, stock audits & forensic risk reviews.' },
      { name: 'CIBIL Score Report & Correction', desc: 'Credit bureau dispute resolution, defaults rectifications & reporting fixes.' },
      { name: 'PF & ESI Registration & Returns', desc: 'Monthly challan filings, employee addition/exits & wage register maintenance.' },
      { name: 'TDS Compliance', desc: 'Quarterly Form 24Q/26Q returns and certified 16/16A deliveries.' },
      { name: 'ROC Annual Filing', desc: 'MCA Form AOC-4, MGT-7, director KYC & compliance certificate renewals.' },
      { name: 'Comprehensive Compliance Handling', desc: 'Annual corporate retainer overseeing all statutory authorities.' },
      { name: 'Bank Dispute Settlement', desc: 'NPA debt mediation, consortium restructuring & OTS agreements.' }
    ],
    property: [
      { name: 'Property Registration & Mutation', desc: 'Pokkuvaravu execution, Thandapper account allotment & tax updates.' },
      { name: 'Trust Deed & Will Deed', desc: 'Succession planning, family settlements & registered testamentary deeds.' },
      { name: 'Lease & Rent Agreements', desc: 'High-value commercial lease drafting, tenure covenants & stamp filings.' },
      { name: 'Sale Deed Drafting', desc: 'Bespoke conveyance contracts by senior High Court registered advocates.' },
      { name: 'Sale Agreement Preparation', desc: 'Earnest money terms, handover schedules & default remedies.' },
      { name: 'Stamp Paper & Franking', desc: 'E-stamp duty calculation, procurement & treasury authentication.' },
      { name: 'Title Verification (30+ Years)', desc: 'Chain of title investigation, lineage scrutiny & encumbrance checks.' },
      { name: 'Encumbrance & Certified Copies', desc: 'Nil Encumbrance Certificates (EC) & sub-registrar certified documents.' },
      { name: 'Power of Attorney & Notarization', desc: 'General & Special POA, consulate attestation & notary execution.' },
      { name: 'Legal Scrutiny & Search Report', desc: 'Exhaustive institutional property clearance reports for banks and funds.' },
      { name: 'Building & Land Valuation', desc: 'Government-approved registered valuer reports for capital and loans.' },
      { name: 'Land & Data Bank Conversion', desc: 'Kerala Conservation of Paddy Land & Wetland Act Form 5, 6, 7 & 9 filings.' }
    ],
    liaison: [
      { name: 'Certificate Correction', desc: 'Birth, educational, marriage & legal heir records rectification.' },
      { name: 'Vehicle / MVD Compliance', desc: 'Interstate transfers, commercial fleet registrations, NOCs & permits.' },
      { name: 'Insurance Support & Claims', desc: 'Commercial property, transit coverage & contested claim advocacy.' },
      { name: 'Passport & Consular Works', desc: 'MEA apostille, police clearance certificates (PCC) & embassy attestation.' },
      { name: 'Panchayath & Municipal Licences', desc: 'Building occupancy, commercial D&O permits & zoning approvals.' },
      { name: 'Investment Safety Report', desc: 'Quasi-judicial verification before enterprise land or equity purchase.' },
      { name: 'Local & Quasi-Judicial Authorities', desc: 'Revenue Divisional Office (RDO), Collectorate hearings & tribunal appearances.' },
      { name: 'Railway & Kochi Metro NOC', desc: 'Perimeter structural clearances, utility crossing sanctions & access permissions.' },
      { name: 'Statutory Newspaper Publication', desc: 'State & Central Gazette disclosures, loss of documents & legal notices.' }
    ]
  };

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
          {tabs.map(tab => (
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
            <div className="p-5 bg-[#F7F5F0] border border-[#E7E2D8] flex items-start gap-3.5 hover:border-[#B8985A] transition-colors" key={idx}>
              <span className="material-symbols-outlined text-[#B8985A] text-[20px] shrink-0 mt-0.5">check_circle</span>
              <div>
                <h4 className="text-sm font-semibold text-[#0B1F3A]">{service.name}</h4>
                <p className="text-xs text-slate-subtle mt-0.5">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
