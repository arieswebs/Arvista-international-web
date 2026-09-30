// Comprehensive curated institutional articles and statutory insight guides for Arvista International.

export const blogCategories = [
  'All',
  'Corporate Law & Structuring',
  'Industrial & Project Clearances',
  'Property & Real Estate',
  'HR & Labor Advisory',
  'Taxation & ROC Compliance',
  'Cross-Border & Foreign Investment'
];

export const blogsData = [
  {
    slug: 'company-incorporation-kochi-kerala-pvt-ltd-vs-llp',
    title: 'The 2026 Guide to Company Incorporation in Kochi & Kerala: Private Limited vs. LLP Compliance Roadmap',
    category: 'Corporate Law & Structuring',
    author: 'Corporate Practice Advisory Group',
    authorRole: 'Practicing Corporate Counsel',
    date: 'September 24, 2026',
    readTime: '7 min read',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'A definitive legal and tax roadmap comparing Private Limited Company and Limited Liability Partnership structures for technology startups, logistics hubs, and commercial ventures in Ernakulam and South India.',
    tags: ['Company Incorporation', 'Private Limited', 'LLP', 'MCA Filing', 'Kochi Business Setup'],
    content: [
      {
        heading: 'Strategic Structuring: The Foundation of Corporate Longevity',
        body: 'Selecting the appropriate statutory entity structure is the single most critical decision for entrepreneurs, NRIs, and institutional investors establishing operations in Kerala. In commercial hubs like Ernakulam, Infopark Kakkanad, and the Vallarpadam logistics corridor, founders frequently debate between the rigorous corporate prestige of a Private Limited Company and the contractual agility of a Limited Liability Partnership (LLP).'
      },
      {
        heading: 'Private Limited Company: When Institutional Scale is the Objective',
        body: 'A Private Limited Company structured under the Companies Act, 2013 remains the global standard for venture capital infusion, equity incentive plans (ESOPs), and banking credit facilities. Key advantages include:\n\n• Perpetual succession completely independent of director shareholding transfers.\n• Ability to issue equity shares, convertible debentures, and preference instruments.\n• Higher institutional credibility before commercial banks, NBFCs, and global suppliers.\n• Comprehensive statutory governance through formalized board resolutions and AGM structures.'
      },
      {
        heading: 'Limited Liability Partnership (LLP): Lean Operational Governance',
        body: 'Governed by the LLP Act, 2008, the LLP framework is ideally tailored for professional consulting practices, commercial real estate joint ventures, and closely held manufacturing enterprises that do not anticipate external venture funding. With zero mandatory statutory auditing thresholds until turnover exceeds ₹40 Lakhs or capital contribution exceeds ₹25 Lakhs, compliance overhead is significantly reduced.'
      },
      {
        heading: 'Comparative Statutory Matrix',
        table: [
          { feature: 'Governing Legislation', pvt: 'Companies Act, 2013', llp: 'LLP Act, 2008' },
          { feature: 'Minimum Members', pvt: '2 Directors / 2 Shareholders', llp: '2 Designated Partners' },
          { feature: 'Statutory Audit Requirement', pvt: 'Mandatory from Day 1', llp: 'Only if Turnover > ₹40L or Capital > ₹25L' },
          { feature: 'Foreign Direct Investment (FDI)', pvt: '100% Automatic Route in most sectors', llp: 'Permitted in 100% automatic sectors without performance conditions' },
          { feature: 'Annual ROC Filings', pvt: 'AOC-4, MGT-7, DIR-3 KYC', llp: 'Form 8 (Statement of Accounts), Form 11' }
        ]
      },
      {
        heading: 'The SPICe+ Workflow in Ernakulam & Central Kerala',
        body: 'Under current Ministry of Corporate Affairs (MCA) protocols, incorporation is executed through the integrated SPICe+ (INC-32) portal. This single application simultaneously reserves the entity name (Part A) and procures incorporation certificate, DIN allotment, PAN, TAN, EPFO, ESIC, Professional Tax, and bank account sanctions (Part B). ARVISTA coordinates with Registrar of Companies (ROC Ernakulam) to guarantee clean, query-free certification within 3 to 5 business days.'
      }
    ],
    takeaways: [
      'Private Limited is required if institutional equity fundraising or ESOP grants are planned.',
      'LLP offers substantial tax and compliance savings for service-oriented and closely-held operations.',
      'Both structures protect personal promoter assets from enterprise debt and liability.',
      'ROC Ernakulam processes clean SPICe+ submissions within 3 to 5 working days when name clearances adhere to Rule 8 of Company (Incorporation) Rules.'
    ]
  },
  {
    slug: 'kspcb-cte-cto-single-window-clearances-kerala',
    title: 'KSPCB Consent to Establish (CTE) & Single Window Clearances: Navigating Industrial Sanctions in Ernakulam',
    category: 'Industrial & Project Clearances',
    author: 'Industrial Clearances Desk',
    authorRole: 'Senior Administrative Liaison Lead',
    date: 'September 18, 2026',
    readTime: '9 min read',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'A comprehensive procedural breakdown of Kerala State Pollution Control Board categorizations, K-SWIFT single window approvals, and municipal trade licensing for manufacturing and processing projects.',
    tags: ['KSPCB', 'Consent to Establish', 'CTE / CTO', 'K-SWIFT', 'Industrial Licensing'],
    content: [
      {
        heading: 'Regulatory Framework: Environmental Clearances in Kerala',
        body: 'Industrial development in Kerala is subject to stringent environmental scrutiny administered by the Kerala State Pollution Control Board (KSPCB) under the Water (Prevention and Control of Pollution) Act, 1974, and the Air Act, 1981. For industrial corridors spanning Kalamassery, Eloor, Edayar, Angamaly, and KINFRA industrial parks, obtaining a valid Consent to Establish (CTE) before commencing civil foundation works is a strict legal prerequisite.'
      },
      {
        heading: 'Understanding Industry Color Categorization',
        body: 'The Central Pollution Control Board (CPCB) and KSPCB classify industrial operations into four distinct tiers based on Pollution Index (PI) scores:\n\n• Red Category (PI score 60 and above): Heavy chemical processing, major metal plating, large hospital facilities. Requires extensive EIA and state-level clearance.\n• Orange Category (PI score 41 to 59): Food processing units, mid-scale fabrication, formulation units. Managed by District Environmental Engineers.\n• Green Category (PI score 21 to 40): Small-scale bakeries, assembly operations, non-polluting commercial packaging.\n• White Category (PI score up to 20): Solar installations, small IT assembly. Exempt from consent, requiring only intimation.'
      },
      {
        heading: 'K-SWIFT Single Window Integration',
        body: 'The Kerala Single Window Interface for Fast and Transparent Clearances (K-SWIFT) platform has consolidated multi-department sanctions. Through K-SWIFT, enterprises submit composite applications spanning Fire Force NOC, District Medical Office approvals, Electrical Inspectorate sanctions, Groundwater Authority clearances, and Municipal Building permits.'
      },
      {
        heading: 'From CTE to Consent to Operate (CTO)',
        body: 'Consent to Establish permits the physical construction and machinery installation of the facility. Once construction is complete and pollution control measures (such as Effluent Treatment Plants - ETP or Sewage Treatment Plants - STP) are commissioned, a formal Consent to Operate (CTO) application is submitted accompanied by verified compliance test reports.'
      }
    ],
    takeaways: [
      'No civil construction or machinery installation should commence prior to obtaining KSPCB CTE.',
      'Orange and Green category units in Ernakulam can achieve fast-tracked clearance through structured DPR documentation.',
      'K-SWIFT provides statutory time-bound deemed approval mechanisms for compliant project proposals.',
      'ARVISTA maintains direct field representation before KSPCB District Offices and Central Environmental Engineer secretariats.'
    ]
  },
  {
    slug: '30-year-title-verification-commercial-property-kerala',
    title: '30-Year High-Court Title Verification in Kerala: Mitigating Encumbrance and Land Ceiling Risks',
    category: 'Property & Real Estate',
    author: 'Property Law & Conveyance Chambers',
    authorRole: 'High Court Practicing Advocate',
    date: 'August 30, 2026',
    readTime: '8 min read',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
    excerpt: 'Why institutional investors, family offices, and developers require an unbroken 30-year title trail, Kerala Land Reforms scrutiny, and revenue mutation audits prior to executing commercial property acquisitions.',
    tags: ['Title Search', 'Property Verification', 'Encumbrance Certificate', 'Kerala Land Reforms', 'Sale Deed Drafting'],
    content: [
      {
        heading: 'The High-Stakes Nature of Real Estate Conveyance in Kerala',
        body: 'Land transactions across Ernakulam, Kakkanad, Aluva, and coastal Kerala require exceptional legal rigor. Fragmented historical holdings, customary succession laws, matrilineal taravadu claims, and stringent provisions under the Kerala Land Reforms Act, 1963 make surface-level title checks hazardous for commercial buyers.'
      },
      {
        heading: 'Why 30 Years is the Absolute Legal Benchmark',
        body: 'Under the Indian Limitation Act, the maximum statutory window for adverse possession claims against private land is 12 years, and 30 years for government and statutory claims. An unbroken 30-year search conducted across the Sub-Registrar Office (SRO) registers establishes continuous, undisputed ownership lineage and ensures no hidden prior mortgages, attachment orders, or lis pendens litigations exist.'
      },
      {
        heading: 'Critical Documentation Checklist',
        body: 'A comprehensive title due diligence conducted by ARVISTA reviews:\n\n1. Mother Deeds (Moola Pathram): Primary title grants tracing ownership origins.\n2. Encumbrance Certificates (Form 15 & Form 16): Issued by the jurisdictional SRO.\n3. Revenue Records: Pokkuvaravu (mutation registers), Thandaper accounts, and land tax receipts (Pokkuvaravu Receipt).\n4. Survey Demarcation: Field Measurement Book (FMB) sketches and Resurvey discrepancies.\n5. Paddy & Wetland Audits: Verifying the land is not registered as "Nilam" (wetland) under the Kerala Conservation of Paddy Land and Wetland Act, 2008.'
      }
    ],
    takeaways: [
      'Encumbrance Certificate (EC) alone is never sufficient proof of clean title.',
      'Paddy Land & Wetland Act verification is mandatory to prevent construction injunctions.',
      'Revenue mutation (Thandaper) must align perfectly with SRO registered title deeds.',
      'A formal Legal Search Report signed by a practicing High Court advocate provides institutional immunity for commercial lenders and corporate buyers.'
    ]
  },
  {
    slug: 'new-labor-codes-pf-esi-compliance-south-india',
    title: 'New Labor Code Overhauls: PF, ESI, and Talent Governance Strategies for Growing Entities in South India',
    category: 'HR & Labor Advisory',
    author: 'HR Governance Practice',
    authorRole: 'Senior Labor Law Consultant',
    date: 'August 14, 2026',
    readTime: '6 min read',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
    excerpt: 'Strategic restructuring of compensation architectures under the Code on Wages, mandatory social security registrations, POSH committee protocols, and statutory labor register compliance.',
    tags: ['Labor Codes', 'Code on Wages', 'PF Compliance', 'ESI Registration', 'POSH Act'],
    content: [
      {
        heading: 'The Paradigm Shift in Indian Labor Regulations',
        body: 'India’s consolidation of 29 legacy central labor enactments into four comprehensive Labor Codes represents the most substantial industrial restructuring in decades. Growing corporate entities in Kerala and South India must proactively align compensation structures, working hour conventions, and statutory benefit provisions to prevent retroactive penalties.'
      },
      {
        heading: 'The 50% Basic Wage Rule: Restructuring Salary Cost-to-Company (CTC)',
        body: 'The Code on Wages introduces a standardized definition of "Wages", stipulating that basic wage, dearness allowance, and retaining allowance must constitute at least 50% of total compensation. Any excess exclusion of allowances will automatically be added back to basic wage calculations, directly impacting Provident Fund (PF) and Gratuity contributions.'
      },
      {
        heading: 'Mandatory Registrations & Operational Thresholds',
        body: '• Employees’ Provident Fund (EPFO): Mandatory upon crossing 20 employees, though voluntary coverage is widely adopted by growth-stage firms.\n• Employees’ State Insurance (ESIC): Mandatory for establishments employing 10 or more persons earning up to ₹21,000 monthly.\n• Kerala Shops & Commercial Establishments Act: Mandatory statutory registration for all offices within 60 days of operations commencing.'
      },
      {
        heading: 'POSH Act (2013) & Internal Committee Formalization',
        body: 'Any establishment with 10 or more employees must constitute an Internal Committee (IC) led by a presiding woman officer and an independent external member. Failure to file annual POSH reports before the District Officer carries severe financial penalties and cancellation of commercial licenses.'
      }
    ],
    takeaways: [
      'Salary structures must be evaluated against the 50% basic wage criterion to calculate true employer liability.',
      'Shops & Commercial registration must be renewed accurately to maintain valid local trade licenses.',
      'POSH compliance is strictly audited by municipal and state labor commissioners.',
      'ARVISTA administers full-spectrum statutory labor retainers from monthly returns to disciplinary inquiry procedures.'
    ]
  },
  {
    slug: 'nri-inward-investment-fema-rbi-gcc-corridors',
    title: 'Cross-Border Inward Investment & NRI Business Structuring: FEMA Guidelines, RBI Clearances, and GCC Corridors',
    category: 'Cross-Border & Foreign Investment',
    author: 'International Liaison Desk',
    authorRole: 'Cross-Border Fiduciary Advisor',
    date: 'July 28, 2026',
    readTime: '10 min read',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Navigating Foreign Direct Investment (FDI) reporting on the RBI FIRMS portal, NRE/NRO capital repatriations, and establishing GCC-to-Kerala joint ventures with zero regulatory friction.',
    tags: ['FEMA', 'RBI Compliance', 'NRI Investment', 'FDI Reporting', 'GCC Corridors'],
    content: [
      {
        heading: 'The GCC – South India Investment Bridge',
        body: 'Non-Resident Indians (NRIs) and overseas corporate bodies based across the United Arab Emirates, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain represent the primary catalyst for commercial real estate, healthcare, education, and hospitality investments in Kerala. Structuring these investments requires rigorous adherence to the Foreign Exchange Management Act (FEMA), 1999 and Reserve Bank of India (RBI) circulars.'
      },
      {
        heading: 'Repatriable vs. Non-Repatriable Investment Modes',
        body: 'Under Schedule 4 of the Foreign Exchange Management (Non-debt Instruments) Rules, 2019, investments made by NRIs on a non-repatriation basis are deemed domestic investments. This classification unlocks sectors otherwise restricted under foreign investment caps and simplifies procedural reporting. Conversely, repatriable investments routed via NRE accounts or foreign inward remittances require mandatory reporting.'
      },
      {
        heading: 'RBI FIRMS Portal & Single Master Form (SMF) Reporting',
        body: 'Whenever foreign capital is received into an Indian entity’s bank account, the Authorized Dealer (AD Category I Bank) issues a Foreign Inward Remittance Certificate (FIRC). Within 30 days of equity allotment, the company must file Form FC-GPR (Foreign Currency-Gross Provisional Return) on the RBI FIRMS portal to secure unique registration identification.'
      }
    ],
    takeaways: [
      'NRI non-repatriable investments are treated on par with domestic capital under FEMA.',
      'FDI allotments require Form FC-GPR filing within 30 days of share issuance to prevent compounding penalties.',
      'Commercial real estate development is permissible under FDI, but speculative raw agricultural land acquisition remains strictly prohibited for NRIs.',
      'ARVISTA coordinates directly with Authorized Dealer banks and RBI regional offices to secure smooth inward clearance.'
    ]
  },
  {
    slug: 'statutory-roc-annual-compliance-director-disqualification',
    title: 'Statutory ROC Annual Compliance: Avoiding Director Disqualification and Striking Off under Companies Act',
    category: 'Taxation & ROC Compliance',
    author: 'Secretarial & Statutory Audit Division',
    authorRole: 'Practicing Company Secretary & Fellow CA',
    date: 'July 12, 2026',
    readTime: '7 min read',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Essential statutory deadlines for AOC-4, MGT-7, DIR-3 KYC, and active company compliances. The legal and financial implications of default and restoration protocols before NCLT.',
    tags: ['ROC Compliance', 'AOC-4', 'MGT-7', 'Director Disqualification', 'NCLT Restoration'],
    content: [
      {
        heading: 'The Ministry of Corporate Affairs Enforcement Stance',
        body: 'Over recent fiscal cycles, the Ministry of Corporate Affairs (MCA) has automated statutory compliance enforcement through artificial intelligence and cross-portal data triangulation with the GST and Income Tax networks. Failure to file mandatory annual returns is no longer met with nominal late fees, but with immediate director disqualification under Section 164(2) and entity de-registration (strike-off) under Section 248.'
      },
      {
        heading: 'The Essential Annual Secretarial Calendar',
        body: 'Every registered Private Limited Company must complete the following annual mandates:\n\n1. Form AOC-4 (Financial Statements): Due within 30 days of holding the Annual General Meeting (AGM).\n2. Form MGT-7 / MGT-7A (Annual Return): Due within 60 days of the AGM.\n3. Form DIR-3 KYC: Mandatory annual biometric or web verification for every Director Identification Number (DIN) holder by September 30.\n4. Form DPT-3: Return of deposits and particulars of transactions not considered as deposits by June 30.\n5. Form MSME-1: Half-yearly return of outstanding dues to micro and small enterprises.'
      },
      {
        heading: 'Consequences of Default & NCLT Revival',
        body: 'If a company fails to file financial statements or annual returns for three consecutive continuous financial years, all directors suffer automatic statutory disqualification for five years, rendering their DINs inactive across all active board seats. Reviving a struck-off company necessitates formal legal petitioning before the National Company Law Tribunal (NCLT Kochi Bench) under Section 252.'
      }
    ],
    takeaways: [
      'Form DIR-3 KYC must be filed annually by September 30 to keep Director DINs operational.',
      'Late fees under MCA accrue at ₹100 per day per form with zero statutory ceiling.',
      'Three consecutive years of unfiled returns triggers automatic 5-year director disqualification.',
      'ARVISTA provides managed corporate secretarial retainers to protect boards from procedural default.'
    ]
  }
];

export function getBlogBySlug(slug) {
  return blogsData.find((b) => b.slug === slug);
}

export function getFeaturedBlog() {
  return blogsData.find((b) => b.featured) || blogsData[0];
}
