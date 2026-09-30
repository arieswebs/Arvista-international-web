// Centralised services data used by AllServices grid and individual ServicePage routes.
// Each service has a unique slug, display name, short description, full details, and metadata.

export const serviceCategories = [
  { 
    id: 'business', 
    label: 'Business Services', 
    icon: 'corporate_fare',
    tagline: 'Formation, Licensing & IP Protection',
    description: 'Statutory entity formation, industrial trade licensing, regulatory clearances, and commercial documentation.'
  },
  { 
    id: 'hr', 
    label: 'HR Consultancy', 
    icon: 'groups_3',
    tagline: 'Staffing, Labor Law & Talent Governance',
    description: 'Statutory labor registrations, PF/ESI compliance, executive employment agreements, POSH protocols, and labor audits.'
  },
  { 
    id: 'project', 
    label: 'Project Consultancy', 
    icon: 'domain_verification',
    tagline: 'Feasibility, Clearances & Infrastructure',
    description: 'Bankable DPRs, PCB clearances (CTE/CTO), industrial zoning conversions, asset valuation, and Single Window sanctions.'
  },
  { 
    id: 'accounting', 
    label: 'Accounting Services', 
    icon: 'account_balance',
    tagline: 'Taxation, Audits & Statutory Filings',
    description: 'Comprehensive GST compliance, direct taxes, institutional audit, financial reporting, and ROC secretarial filings.'
  },
  { 
    id: 'property', 
    label: 'Property & Documentation', 
    icon: 'real_estate_agent',
    tagline: 'Title Search, Conveyance & Mutation',
    description: '30+ year high-court title searches, registered sale deeds, lease covenants, land conversions, and government valuations.'
  },
  { 
    id: 'liaison', 
    label: 'Liaisoning Services', 
    icon: 'handshake',
    tagline: 'Government Approvals, NOCs & Consular',
    description: 'Direct representation before municipal corporations, RTO, MEA consular offices, railways, and quasi-judicial tribunals.'
  }
];

export const servicesData = {
  business: [
    {
      slug: 'sole-proprietorship',
      name: 'Sole Proprietorship',
      desc: 'Trade licenses, tax registrations & local establishment filings.',
      icon: 'storefront',
      heroSubtitle: 'BUSINESS FORMATION',
      tagline: 'The fastest path from concept to commerce.',
      overview: 'A Sole Proprietorship is the simplest and most cost-effective business structure in India, ideal for individual entrepreneurs launching retail shops, freelance practices, service establishments, or small-scale manufacturing units. ARVISTA manages the complete lifecycle — from municipal trade licensing through tax registrations to statutory compliance — ensuring you are operational within days, not weeks.',
      keyDeliverables: [
        'Municipal / Panchayat Trade License procurement',
        'GST Registration & composition scheme advisory',
        'UDYAM (MSME) Registration for government priority benefits',
        'Shop & Commercial Establishment Act registration',
        'PAN & TAN processing for the proprietor entity',
        'Current account opening facilitation with banking partners',
        'Professional Tax registration (state-specific)'
      ],
      process: [
        { step: 'Consultation', detail: 'Free preliminary call to understand your business nature, locality, and licensing requirements.' },
        { step: 'Document Assembly', detail: 'We prepare a precise checklist — Aadhaar, PAN, address proof, rent agreement, and trade-specific documents.' },
        { step: 'Filing & Liaison', detail: 'Our field executives file applications at the relevant municipal corporation, GST portal, and UDYAM portal simultaneously.' },
        { step: 'Delivery & Support', detail: 'All certificates and registrations are delivered digitally and physically, with 12-month compliance support included.' }
      ],
      faqs: [
        { q: 'How long does it take to register a Sole Proprietorship?', a: 'Typically 3–7 working days for all basic registrations (Trade License, GST, UDYAM) once documents are submitted.' },
        { q: 'Do I need a separate PAN for my proprietorship?', a: 'No. The proprietor\'s personal PAN serves as the business PAN. A separate TAN may be required if you deduct TDS.' },
        { q: 'Can a Sole Proprietorship be converted to an LLP or Pvt Ltd later?', a: 'Yes. ARVISTA assists with seamless entity migration, including asset transfer, GST migration, and re-registration of licenses.' }
      ],
    },
    {
      slug: 'partnership-firm-llp',
      name: 'Partnership Firm & LLP',
      desc: 'Deed drafting, RoF registration, partner rights & operational covenants.',
      icon: 'group',
      heroSubtitle: 'PARTNERSHIP STRUCTURING',
      tagline: 'Formalise your alliance with institutional-grade documentation.',
      overview: 'Whether you are two co-founders launching a venture or a family establishing a multi-generational business partnership, ARVISTA drafts and registers your Partnership Deed or LLP Agreement with meticulous legal precision. We cover everything from Registrar of Firms (RoF) filing to MCA LLP incorporation, profit-sharing covenants, partner liability clauses, and exit mechanisms.',
      keyDeliverables: [
        'Partnership Deed drafting by senior advocates',
        'Registrar of Firms (RoF) state registration',
        'LLP Agreement drafting & MCA filing',
        'DPIN (Designated Partner Identification Number) processing',
        'Digital Signature Certificate (DSC) procurement',
        'GST, PAN & TAN registration for the entity',
        'Partnership amendment & reconstitution support'
      ],
      process: [
        { step: 'Structure Advisory', detail: 'We analyse your business needs to recommend Partnership vs LLP, covering liability, taxation, and compliance differences.' },
        { step: 'Deed / Agreement Drafting', detail: 'Senior advocates draft comprehensive legal documents covering profit-sharing, management rights, dispute resolution, and exit clauses.' },
        { step: 'Government Filing', detail: 'Filing at the Registrar of Firms (for partnerships) or MCA portal (for LLPs), along with all ancillary registrations.' },
        { step: 'Certification & Compliance', detail: 'Deliver signed, stamped, and registered deed. Set up annual compliance calendar for filings.' }
      ],
      faqs: [
        { q: 'What is the difference between a Partnership Firm and an LLP?', a: 'In a Partnership Firm, partners have unlimited personal liability. An LLP (Limited Liability Partnership) provides personal asset protection — partners are only liable up to their capital contribution.' },
        { q: 'How many partners are needed for an LLP?', a: 'Minimum 2 Designated Partners are required. There is no maximum limit for total partners.' },
        { q: 'Is LLP annual compliance mandatory even if there is no revenue?', a: 'Yes. Annual Return (Form 11) and Statement of Account (Form 8) must be filed with MCA every year, regardless of turnover.' }
      ],
    },
    {
      slug: 'company-formation',
      name: 'Company Formation Support',
      desc: 'Pvt Ltd, Public Ltd, and Section 8 non-profit incorporations.',
      icon: 'domain',
      heroSubtitle: 'CORPORATE INCORPORATION',
      tagline: 'Institutional-grade company structures for ambitious enterprises.',
      overview: 'ARVISTA handles end-to-end company incorporation through the MCA SPICe+ portal, covering Private Limited, Public Limited, and Section 8 (non-profit) companies. From name reservation through MOA/AOA drafting, DIN procurement, registered office verification, to post-incorporation compliance setup — we deliver your Certificate of Incorporation with PAN, TAN, GST, and bank account readiness.',
      keyDeliverables: [
        'MCA SPICe+ name reservation & incorporation',
        'MOA & AOA drafting aligned with your business objects',
        'Director DIN & Digital Signature Certificate (DSC)',
        'Certificate of Incorporation with PAN & TAN',
        'Post-incorporation GST registration',
        'Corporate bank account opening support',
        'Registered office address verification & compliance'
      ],
      process: [
        { step: 'Entity Design', detail: 'Advisory on optimal structure — Pvt Ltd vs OPC vs Section 8 — based on investment plans, shareholding, and regulatory landscape.' },
        { step: 'Name & Document Preparation', detail: 'Company name availability check (RUN), DSC & DIN procurement, MOA/AOA drafting.' },
        { step: 'SPICe+ Filing', detail: 'Comprehensive MCA filing including AGILE-PRO for GST, EPFO, ESIC registrations in a single application.' },
        { step: 'Post-Incorporation', detail: 'Deliver COI, set up statutory registers, first board resolution, share certificate issuance, and compliance calendar.' }
      ],
      faqs: [
        { q: 'What is the minimum capital required for a Private Limited Company?', a: 'There is no minimum paid-up capital requirement since 2015. You can incorporate with as little as ₹1 lakh authorised capital.' },
        { q: 'How many directors and shareholders are needed?', a: 'Minimum 2 directors (at least 1 must be Indian resident) and 2 shareholders for a Private Limited Company.' },
        { q: 'What is SPICe+?', a: 'SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) is MCA\'s integrated web form that combines incorporation, DIN, PAN, TAN, EPFO, ESIC, GST, and bank account opening in one filing.' }
      ],
    },
    {
      slug: 'one-person-company',
      name: 'One Person Company (OPC)',
      desc: 'Single founder limited liability structuring & nominee covenants.',
      icon: 'person',
      heroSubtitle: 'SOLO INCORPORATION',
      tagline: 'Full corporate protection for the solo entrepreneur.',
      overview: 'An OPC allows a single individual to own and operate a company with limited liability — combining the operational simplicity of a sole proprietorship with the legal protection of a private limited company. ARVISTA handles the complete OPC incorporation including nominee director appointment, MOA/AOA drafting, and all MCA formalities.',
      keyDeliverables: [
        'OPC incorporation through MCA SPICe+',
        'Nominee director consent letter & Form INC-3',
        'MOA & AOA with single-member provisions',
        'DIN & DSC for the sole director',
        'PAN, TAN & GST registration',
        'First board resolutions & statutory registers',
        'Annual compliance advisory for 12 months'
      ],
      process: [
        { step: 'Eligibility Check', detail: 'Verify Indian citizenship, residency, and confirm no existing OPC or Pvt Ltd directorship conflicts.' },
        { step: 'Nominee Appointment', detail: 'Identify and onboard a nominee director with proper consent documentation (INC-3).' },
        { step: 'Filing & Incorporation', detail: 'SPICe+ application with integrated PAN, TAN, EPFO, ESIC, and GST registration.' },
        { step: 'Handover & Setup', detail: 'Deliver COI, set up bank account, and initiate compliance tracking.' }
      ],
      faqs: [
        { q: 'Who can form an OPC?', a: 'Only a naturally born Indian citizen who is also a resident of India (stayed 120+ days in the preceding financial year) can form an OPC.' },
        { q: 'What happens if OPC turnover exceeds ₹2 crore?', a: 'The OPC must mandatorily convert to a Private Limited Company within 6 months of exceeding the threshold.' },
        { q: 'Can an OPC have employees?', a: 'Absolutely. An OPC can hire unlimited employees and operate like any other company.' }
      ],
    },
    {
      slug: 'society-trust-registration',
      name: 'Society & Trust Registration',
      desc: 'Non-governmental bylaws, charitable trusts & institutional filings.',
      icon: 'volunteer_activism',
      heroSubtitle: 'NON-PROFIT FORMATION',
      tagline: 'Institutionalise your social mission with legal permanence.',
      overview: 'ARVISTA assists NGOs, charitable foundations, educational trusts, and community organisations in registering under the Indian Trusts Act, Societies Registration Act, or Section 8 of the Companies Act. We draft trust deeds, society bylaws, and manage all registration formalities including 12A and 80G tax exemption applications.',
      keyDeliverables: [
        'Trust Deed / Society Bylaws drafting',
        'Charity Commissioner / Registrar of Societies registration',
        'Section 12A & 80G income tax exemption applications',
        'FCRA registration for foreign donations',
        'PAN, TAN & bank account setup',
        'Annual compliance and renewal management'
      ],
      process: [
        { step: 'Structure Selection', detail: 'Advisory on Trust vs Society vs Section 8 Company based on your objectives and funding sources.' },
        { step: 'Document Drafting', detail: 'Comprehensive trust deed or society memorandum & rules covering governance, asset management, and dissolution.' },
        { step: 'Registration', detail: 'Filing with Charity Commissioner, District Registrar, or MCA as applicable.' },
        { step: 'Tax Exemptions', detail: 'Apply for 12A registration and 80G certification to enable donor tax benefits.' }
      ],
      faqs: [
        { q: 'What is the minimum number of members for a Society?', a: 'Minimum 7 members are required to register a Society under the Societies Registration Act.' },
        { q: 'What is the difference between 12A and 80G?', a: '12A exempts the trust/society from paying income tax on its income. 80G allows donors to claim a deduction on their taxable income for donations made to the entity.' },
        { q: 'Can a trust engage in commercial activities?', a: 'A charitable trust can undertake incidental commercial activities as long as the profits are applied towards its charitable objects.' }
      ],
    },
    {
      slug: 'udyam-msme-registration',
      name: 'UDYAM / MSME Registration',
      desc: 'Government priority registration, subsidies & bank preference.',
      icon: 'factory',
      heroSubtitle: 'MSME ENTERPRISE',
      tagline: 'Unlock government subsidies, priority lending, and tender advantages.',
      overview: 'UDYAM Registration (formerly MSME / Udyog Aadhaar) is the Government of India\'s official recognition for micro, small, and medium enterprises. ARVISTA handles the complete UDYAM portal filing, ensuring accurate classification and enabling access to priority sector lending, government tender preference, and subsidy schemes.',
      keyDeliverables: [
        'UDYAM Registration certificate with unique ID',
        'Correct enterprise classification (Micro/Small/Medium)',
        'Aadhaar-linked filing on the official MSME portal',
        'Integration advisory with GeM portal for government tenders',
        'Bank liaison for priority sector lending benefits',
        'Annual UDYAM data update support'
      ],
      process: [
        { step: 'Eligibility Assessment', detail: 'Verify investment and turnover thresholds against current MSME classification criteria.' },
        { step: 'Data Compilation', detail: 'Gather Aadhaar, PAN, bank details, NIC codes, and investment/turnover declarations.' },
        { step: 'Portal Filing', detail: 'Complete registration on the UDYAM portal with accurate NIC code classification.' },
        { step: 'Certificate Delivery', detail: 'Deliver permanent UDYAM certificate and advise on subsidy/scheme eligibility.' }
      ],
      faqs: [
        { q: 'Is UDYAM registration mandatory?', a: 'It is mandatory for enterprises seeking MSME benefits from government, banks, and for participation in government e-marketplace (GeM) tenders.' },
        { q: 'Is there any fee for UDYAM registration?', a: 'The government portal charges no fee. ARVISTA charges a nominal professional fee for end-to-end filing and advisory.' },
        { q: 'Can a Private Limited Company register under UDYAM?', a: 'Yes. Any entity — proprietorship, partnership, LLP, Pvt Ltd, or even cooperative — can register if it meets the investment and turnover criteria.' }
      ],
    },
    {
      slug: 'trade-business-licence',
      name: 'Trade & Business Licence',
      desc: 'Panchayat, Municipal Corporation & State commercial clearance.',
      icon: 'badge',
      heroSubtitle: 'COMMERCIAL LICENSING',
      tagline: 'Local authority approvals for lawful commercial operations.',
      overview: 'Every business operating from a physical premises in India requires a Trade License from the local governing body — Panchayat, Municipality, or Municipal Corporation. ARVISTA handles the complete application, document preparation, inspection coordination, and license procurement for retail, wholesale, manufacturing, hospitality, and professional service establishments.',
      keyDeliverables: [
        'Trade License application & procurement',
        'Building occupancy certificate verification',
        'Fire safety NOC coordination',
        'Health & sanitation clearance support',
        'Signage and advertisement permissions',
        'Annual renewal management'
      ],
      process: [
        { step: 'Site Assessment', detail: 'Verify premises eligibility, zoning compliance, and occupancy certifications.' },
        { step: 'Application Preparation', detail: 'Compile required documents — property proof, identity, NOCs, building plan approvals.' },
        { step: 'Filing & Inspection', detail: 'Submit application and coordinate with inspectors for site verification.' },
        { step: 'License Delivery', detail: 'Procure and deliver the approved Trade License with renewal calendar setup.' }
      ],
      faqs: [
        { q: 'Is a Trade License mandatory for online businesses?', a: 'If you operate from a physical office or warehouse, yes. Purely digital businesses without physical premises may not require a municipal trade license but may need other registrations.' },
        { q: 'What is the validity of a Trade License?', a: 'Typically 1 year, renewable annually. Some municipalities issue licenses for up to 5 years.' },
        { q: 'Can ARVISTA handle licenses in multiple cities?', a: 'Yes. We have field presence across Kerala and pan-India liaison capability for multi-location businesses.' }
      ],
    },
    {
      slug: 'fssai-licence',
      name: 'FSSAI Licence',
      desc: 'Food business operator basic, state, and central authority permits.',
      icon: 'restaurant',
      heroSubtitle: 'FOOD SAFETY LICENSING',
      tagline: 'Mandatory FSSAI compliance for every food business operator.',
      overview: 'The Food Safety and Standards Authority of India (FSSAI) mandates that every food business operator — from street vendors to large manufacturers — obtain appropriate licensing. ARVISTA determines your correct license tier (Basic Registration, State License, or Central License) based on turnover and business type, and manages the entire application process.',
      keyDeliverables: [
        'FSSAI license tier assessment (Basic / State / Central)',
        'Complete application filing on FoSCoS portal',
        'Food safety management plan preparation',
        'Inspection coordination & compliance advisory',
        'License renewal and modification support',
        'Label compliance review for packaged food products'
      ],
      process: [
        { step: 'Tier Classification', detail: 'Determine Basic Registration (<₹12L turnover), State License (₹12L–20Cr), or Central License (>₹20Cr) requirement.' },
        { step: 'Document Preparation', detail: 'Compile food safety plan, premises layout, water test reports, and business entity documents.' },
        { step: 'FoSCoS Filing', detail: 'Submit application on the FSSAI online portal with all supporting documentation.' },
        { step: 'Inspection & Approval', detail: 'Coordinate food inspector visit and address any compliance observations for license issuance.' }
      ],
      faqs: [
        { q: 'Who needs an FSSAI license?', a: 'Every business involved in manufacturing, processing, packaging, storage, distribution, or sale of food products — including restaurants, caterers, and cloud kitchens.' },
        { q: 'What is the penalty for operating without FSSAI?', a: 'Fines up to ₹5 lakh and imprisonment up to 6 months under the Food Safety and Standards Act, 2006.' },
        { q: 'How long is the FSSAI license valid?', a: 'You can choose validity from 1 to 5 years at the time of application. Renewal must be filed 30 days before expiry.' }
      ],
    },
    {
      slug: 'drug-licences',
      name: 'Drug Licences',
      desc: 'Retail, wholesale pharmacy, manufacturing & medical store permissions.',
      icon: 'medication',
      heroSubtitle: 'PHARMACEUTICAL LICENSING',
      tagline: 'Statutory approvals for retail, wholesale, and manufacturing pharma operations.',
      overview: 'Operating a pharmacy, medical store, or pharmaceutical manufacturing unit in India requires specific Drug Licenses under the Drugs and Cosmetics Act, 1940. ARVISTA handles applications for retail drug licenses (Form 20/21), wholesale licenses (Form 20B/21B), and manufacturing licenses, coordinating with the State Drug Controller and Central Drug Standards Control Organisation.',
      keyDeliverables: [
        'Retail Drug License (Form 20/21) application',
        'Wholesale Drug License (Form 20B/21B) application',
        'Pharmacist registration & appointment documentation',
        'Premises compliance assessment for drug storage',
        'Drug Inspector coordination & inspection preparation',
        'License renewal and amendment management'
      ],
      process: [
        { step: 'License Classification', detail: 'Determine required license type based on business activity — retail sale, wholesale distribution, or manufacturing.' },
        { step: 'Premises & Personnel', detail: 'Ensure premises meets storage standards and qualified pharmacist is appointed as per regulations.' },
        { step: 'Application Filing', detail: 'Prepare and submit application to State Drug Control Department with all required documents.' },
        { step: 'Inspection & Issuance', detail: 'Coordinate Drug Inspector visit, address observations, and obtain approved license.' }
      ],
      faqs: [
        { q: 'Do I need a pharmacist to get a drug license?', a: 'Yes. A registered pharmacist must be appointed and present during operating hours. Their registration certificate is mandatory for the application.' },
        { q: 'What is the difference between Form 20 and Form 21?', a: 'Form 20 covers drugs listed in Schedule C, C1, and X. Form 21 covers drugs not listed in these schedules. Most pharmacies need both.' },
        { q: 'Can ARVISTA help with Ayurvedic drug licenses?', a: 'Yes. We handle Ayurvedic, Siddha, Unani, and Homeopathic drug manufacturing and sale licenses as well.' }
      ],
    },
    {
      slug: 'digital-signature-din',
      name: 'Digital Signature (DSC) & DIN',
      desc: 'Class 3 cryptotokens & Director Identification Number processing.',
      icon: 'verified_user',
      heroSubtitle: 'DIGITAL CREDENTIALS',
      tagline: 'Essential digital identity instruments for directors and signatories.',
      overview: 'Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) are foundational requirements for company incorporation, MCA filings, GST registration, and e-tendering. ARVISTA processes Class 3 DSC tokens and DIN applications with express turnaround, ensuring your directors are compliance-ready for all statutory digital filings.',
      keyDeliverables: [
        'Class 3 Digital Signature Certificate (2-year validity)',
        'USB crypto token with pre-loaded DSC',
        'DIN (Director Identification Number) application via DIR-3',
        'eKYC verification & Aadhaar-based authentication',
        'DSC renewal and revocation management',
        'Multi-DSC coordination for boards with multiple directors'
      ],
      process: [
        { step: 'Identity Verification', detail: 'Collect PAN, Aadhaar, photograph, and contact details for eKYC authentication.' },
        { step: 'DSC Application', detail: 'Apply with a licensed Certifying Authority for Class 3 DSC issuance on a secure USB token.' },
        { step: 'DIN Filing', detail: 'File DIR-3 KYC / SPICe+ for DIN allotment through the MCA portal.' },
        { step: 'Delivery', detail: 'Deliver physical USB token with activated DSC and DIN allotment letter.' }
      ],
      faqs: [
        { q: 'What is a Class 3 DSC?', a: 'Class 3 DSC is the highest level of digital signature in India, required for MCA filings, e-tendering, and income tax e-filings. It provides identity authentication and document signing capability.' },
        { q: 'How long does it take to get a DSC?', a: 'Express processing takes 1–2 working days. Standard processing takes 3–5 working days.' },
        { q: 'Is annual DIN KYC mandatory?', a: 'Yes. Every director must file DIR-3 KYC annually before September 30 to keep their DIN active. Failure attracts a ₹5,000 penalty.' }
      ],
    },
    {
      slug: 'import-export-code',
      name: 'Import Export Code (IEC)',
      desc: 'DGFT central registration for international import/export trading.',
      icon: 'public',
      heroSubtitle: 'INTERNATIONAL TRADE',
      tagline: 'Your gateway to cross-border commerce.',
      overview: 'The Importer Exporter Code (IEC) issued by the Directorate General of Foreign Trade (DGFT) is a mandatory 10-digit registration for any entity engaged in import or export of goods and services from India. ARVISTA handles the complete IEC application including DGFT portal filing, bank certificate procurement, and RCMC (Registration Cum Membership Certificate) advisory.',
      keyDeliverables: [
        'IEC registration on DGFT portal',
        'Bank certificate procurement for IEC',
        'AD Code registration with customs',
        'RCMC advisory for export incentive schemes',
        'IEC modification and annual updation',
        'Customs clearance documentation guidance'
      ],
      process: [
        { step: 'Eligibility Check', detail: 'Verify entity registration, PAN, and business address documentation.' },
        { step: 'Bank Coordination', detail: 'Obtain Authorized Dealer (AD) code and banker\'s certificate from your bank.' },
        { step: 'DGFT Filing', detail: 'Complete online application on the DGFT portal with digital signature.' },
        { step: 'IEC Delivery', detail: 'Deliver IEC certificate and assist with AD code registration at the relevant customs port.' }
      ],
      faqs: [
        { q: 'Is IEC required for service exports (software, consulting)?', a: 'IEC is technically required for services export, though some exemptions exist for services exported via electronic mode when payment is received in INR.' },
        { q: 'Does IEC have a validity period?', a: 'IEC is valid for lifetime but must be updated annually on the DGFT portal (July–September window).' },
        { q: 'Can a proprietorship get an IEC?', a: 'Yes. Any entity — proprietorship, partnership, LLP, company — can obtain an IEC.' }
      ],
    },
    {
      slug: 'trademark-registration',
      name: 'Trademark Registration',
      desc: 'Brand name search, filing, opposition hearings & trademark certificates.',
      icon: 'shield',
      heroSubtitle: 'INTELLECTUAL PROPERTY',
      tagline: 'Protect your brand identity with permanent legal ownership.',
      overview: 'A registered trademark grants exclusive legal rights to your brand name, logo, tagline, or combination mark across India. ARVISTA conducts comprehensive trademark searches, files applications under the Trade Marks Act 1999, handles examination reports, opposition proceedings, and ensures your mark progresses to registration and publication in the Trademarks Journal.',
      keyDeliverables: [
        'Comprehensive trademark search report (TM-class wise)',
        'Trademark application filing (TM-A) under correct class(es)',
        'Examination report response and objection handling',
        'Opposition hearing representation',
        'Registration certificate procurement',
        'Trademark renewal (every 10 years) support',
        'Trademark watch service for infringement monitoring'
      ],
      process: [
        { step: 'Search & Clearance', detail: 'Exhaustive search of the IP India database to identify conflicts and assess registrability.' },
        { step: 'Application Filing', detail: 'File TM-A application online with the Registrar of Trademarks under the correct Nice Classification.' },
        { step: 'Prosecution', detail: 'Respond to examination reports, attend hearings, and overcome objections raised by the Registrar.' },
        { step: 'Registration', detail: 'Upon acceptance and publication, obtain the Registration Certificate with ™ to ® transition.' }
      ],
      faqs: [
        { q: 'How long does trademark registration take in India?', a: 'Typically 12–18 months from filing to registration, assuming no opposition. You can use ™ symbol immediately upon filing.' },
        { q: 'Can I register a logo and name together?', a: 'Yes. You can file as a word mark (name only), device mark (logo only), or composite mark (name + logo combined).' },
        { q: 'Is trademark registration valid across India?', a: 'Yes. Once registered, a trademark is protected throughout India. For international protection, we assist with Madrid Protocol filings.' }
      ],
    },
    {
      slug: 'mou-letter-of-undertaking',
      name: 'MOU & Letter of Undertaking',
      desc: 'Legally binding covenants, consortium agreements & formal pledges.',
      icon: 'description',
      heroSubtitle: 'LEGAL AGREEMENTS',
      tagline: 'Formal instruments for strategic commercial partnerships.',
      overview: 'ARVISTA drafts Memorandums of Understanding (MOUs), Letters of Undertaking (LOUs), Joint Venture agreements, and consortium covenants that are legally precise, commercially practical, and enforceable. Our senior advocates ensure every clause protects your interests while maintaining fair balance between all parties.',
      keyDeliverables: [
        'MOU drafting for business partnerships',
        'Letter of Undertaking for banking and commercial obligations',
        'Joint Venture agreement structuring',
        'Consortium agreements for tendering/bidding',
        'Non-compete and non-solicitation clauses',
        'Stamp duty calculation and execution support'
      ],
      process: [
        { step: 'Terms Discussion', detail: 'Detailed consultation on commercial terms, obligations, timelines, and dispute resolution mechanisms.' },
        { step: 'Drafting', detail: 'Senior advocate drafts the document with comprehensive protective clauses for your side.' },
        { step: 'Review & Negotiation', detail: 'Facilitate counter-party review, negotiate amendments, and arrive at mutually agreed terms.' },
        { step: 'Execution', detail: 'Stamp duty procurement, signing ceremony facilitation, notarization, and registered delivery.' }
      ],
      faqs: [
        { q: 'Is an MOU legally enforceable?', a: 'It depends on the language. An MOU can be legally binding if it contains specific enforceable obligations. We draft them with clear binding and non-binding sections.' },
        { q: 'Do MOUs need stamp duty?', a: 'If the MOU contains financial obligations or commitments, it typically requires stamp duty as per state-specific Stamp Act schedules.' },
        { q: 'Can ARVISTA draft MOUs for international parties?', a: 'Yes. We draft cross-border MOUs with appropriate governing law, jurisdiction, and dispute resolution (arbitration) clauses.' }
      ],
    },
    {
      slug: 'paramedical-clinical-registration',
      name: 'Paramedical & Clinical Registration',
      desc: 'Clinical Establishments Act licensing & healthcare permits.',
      icon: 'local_hospital',
      heroSubtitle: 'HEALTHCARE LICENSING',
      tagline: 'Statutory licensing for clinics, labs, and paramedical centres.',
      overview: 'All clinical establishments — including diagnostic labs, physiotherapy centres, dental clinics, nursing homes, and speciality clinics — must register under the Clinical Establishments (Registration and Regulation) Act. ARVISTA handles complete registration including infrastructure compliance verification, qualified personnel documentation, and liaison with the District Medical Officer.',
      keyDeliverables: [
        'Clinical Establishments Act registration',
        'District Medical Officer application & coordination',
        'Infrastructure compliance assessment',
        'Qualified personnel documentation',
        'Biomedical waste management tie-up facilitation',
        'Fire safety NOC and building compliance verification'
      ],
      process: [
        { step: 'Compliance Audit', detail: 'Assess your facility against Clinical Establishments Act requirements for your speciality category.' },
        { step: 'Documentation', detail: 'Compile practitioner qualifications, equipment inventory, facility plans, and compliance certificates.' },
        { step: 'Registration Filing', detail: 'Submit application to District Medical Officer with all supporting documentation.' },
        { step: 'Inspection & Approval', detail: 'Coordinate site inspection and address any deficiency observations for approval.' }
      ],
      faqs: [
        { q: 'Which establishments need clinical registration?', a: 'Any facility offering diagnosis, treatment, or care for illness, injury, or pregnancy — including single-doctor clinics.' },
        { q: 'Can unqualified persons run a clinical establishment?', a: 'No. The Act mandates that only qualified and registered medical practitioners can own and operate clinical establishments.' },
        { q: 'Is biomedical waste management mandatory?', a: 'Yes. All clinical establishments must have a valid agreement with an authorized biomedical waste management facility.' }
      ],
    },
    {
      slug: 'hospital-registration',
      name: 'Hospital Registration',
      desc: 'Statutory accreditation, biomedical waste management & fire safety NOCs.',
      icon: 'emergency',
      heroSubtitle: 'HOSPITAL ESTABLISHMENT',
      tagline: 'Comprehensive licensing for hospital commissioning.',
      overview: 'Establishing a hospital requires clearances from multiple authorities — Health Department, Fire & Rescue Services, Pollution Control Board, Municipality, and Atomic Energy Regulatory Board (for radiology). ARVISTA manages this complex multi-departmental process as a single-window service, ensuring all consents converge for timely commissioning.',
      keyDeliverables: [
        'Clinical Establishments Act registration',
        'Fire & Rescue Services NOC',
        'PCB Consent to Establish / Operate',
        'Biomedical waste management authorization',
        'AERB license for radiology equipment',
        'Municipal building occupancy certificate',
        'NABH/NABL pre-accreditation advisory'
      ],
      process: [
        { step: 'Regulatory Mapping', detail: 'Identify all applicable licenses based on hospital size, specialities, and equipment inventory.' },
        { step: 'Parallel Applications', detail: 'File simultaneously with Health Department, Fire Services, PCB, AERB, and Municipality.' },
        { step: 'Multi-Agency Coordination', detail: 'Manage inspections and compliance from multiple departments concurrently.' },
        { step: 'Commissioning', detail: 'Consolidate all approvals and prepare for operational launch with full compliance certification.' }
      ],
      faqs: [
        { q: 'How many licenses does a hospital typically need?', a: 'A multi-speciality hospital typically requires 15–25 different licenses and clearances. ARVISTA manages all of them.' },
        { q: 'Can ARVISTA help with NABH accreditation?', a: 'We provide pre-accreditation advisory and documentation support. The NABH accreditation process itself is conducted by NABH assessors.' },
        { q: 'What about radiology and nuclear medicine licenses?', a: 'We handle AERB (Atomic Energy Regulatory Board) applications for X-ray, CT, MRI, and nuclear medicine equipment licensing.' }
      ],
    },
    {
      slug: 'nda-agreements',
      name: 'NDA Agreements',
      desc: 'Enforceable non-disclosure contracts & intellectual asset protection.',
      icon: 'lock',
      heroSubtitle: 'CONFIDENTIALITY PROTECTION',
      tagline: 'Ironclad protection for your trade secrets and proprietary information.',
      overview: 'Non-Disclosure Agreements are critical for protecting sensitive business information during partner negotiations, employee onboarding, vendor engagements, and investor discussions. ARVISTA drafts NDAs that are legally enforceable under Indian contract law, with clear definitions of confidential information, obligations, term, remedies, and jurisdiction.',
      keyDeliverables: [
        'Unilateral NDA (one-way confidentiality)',
        'Bilateral / Mutual NDA (two-way confidentiality)',
        'Multi-party NDA for consortium discussions',
        'Employee NDA with IP assignment clauses',
        'Investor NDA with carve-out provisions',
        'Penalty and injunctive relief clauses'
      ],
      process: [
        { step: 'Scope Definition', detail: 'Define what constitutes confidential information, parties involved, and purpose of disclosure.' },
        { step: 'Drafting', detail: 'Draft NDA with appropriate term, territory, exclusions, and remedies tailored to your situation.' },
        { step: 'Review', detail: 'Counter-party review, negotiations, and finalisation of mutually acceptable terms.' },
        { step: 'Execution', detail: 'Signing, stamping (if required), and distribution of executed copies to all parties.' }
      ],
      faqs: [
        { q: 'Are NDAs enforceable in India?', a: 'Yes. NDAs are enforceable under the Indian Contract Act, 1872. Courts regularly enforce them through injunctions and damages.' },
        { q: 'Do NDAs need stamp duty?', a: 'NDAs creating financial obligations may require stamp duty depending on state laws. We advise on applicability.' },
        { q: 'What is a typical NDA term?', a: 'Most commercial NDAs run for 2–5 years, with certain obligations (trade secrets) surviving perpetually.' }
      ],
    },
    {
      slug: 'business-agreements-takeover',
      name: 'Business Agreements & Takeover',
      desc: 'Asset acquisition, shares transfer & merger documentation.',
      icon: 'swap_horiz',
      heroSubtitle: 'CORPORATE TRANSACTIONS',
      tagline: 'Structured documentation for acquisitions, mergers, and transfers.',
      overview: 'Business acquisitions, share transfers, asset purchases, and corporate restructuring require meticulously drafted legal documentation to protect all parties. ARVISTA\'s senior advocates draft and negotiate acquisition agreements, share purchase agreements, business transfer agreements, and merger documentation with due diligence support.',
      keyDeliverables: [
        'Share Purchase Agreement (SPA) drafting',
        'Business Transfer Agreement (BTA)',
        'Asset Purchase Agreement',
        'Due diligence checklist and coordination',
        'Shareholder Agreement with drag/tag-along rights',
        'Board and shareholder resolution drafting',
        'MCA filing for share transfer and directorship changes'
      ],
      process: [
        { step: 'Transaction Structuring', detail: 'Determine optimal structure — share purchase vs asset purchase vs slump sale — considering tax and regulatory implications.' },
        { step: 'Due Diligence', detail: 'Coordinate legal, financial, and regulatory due diligence on the target entity.' },
        { step: 'Documentation', detail: 'Draft transaction documents with comprehensive warranties, indemnities, and conditions precedent.' },
        { step: 'Execution & Closing', detail: 'Facilitate signing, regulatory filings, share transfers, and post-closing compliance.' }
      ],
      faqs: [
        { q: 'What is the difference between SPA and BTA?', a: 'SPA transfers ownership through shares (entity continues). BTA transfers specific business assets and liabilities (new entity may receive them).' },
        { q: 'Is due diligence mandatory?', a: 'While not legally mandatory, due diligence is strongly recommended to uncover hidden liabilities, regulatory non-compliances, and litigation risks.' },
        { q: 'Can ARVISTA handle cross-border acquisitions?', a: 'We handle the Indian regulatory side of cross-border transactions including FEMA compliance, RBI filings, and SEBI requirements.' }
      ],
    },
    {
      slug: 'pr-compliance-management',
      name: 'PR & Compliance Management',
      desc: 'Institutional public affairs and recurring statutory governance.',
      icon: 'verified',
      heroSubtitle: 'CORPORATE GOVERNANCE',
      tagline: 'Ongoing compliance management for institutional peace of mind.',
      overview: 'Annual statutory compliance is a continuous obligation for every registered entity — from ROC annual returns and GST filings to labour law renewals and trade license updates. ARVISTA\'s retained compliance service ensures every deadline is met, every filing is accurate, and your entity remains in good standing with all regulatory authorities.',
      keyDeliverables: [
        'Annual compliance calendar and tracker',
        'ROC annual return filing (AOC-4, MGT-7)',
        'GST annual return preparation',
        'Income tax return filing coordination',
        'Labour law compliance and renewals',
        'Board meeting and AGM facilitation',
        'Quarterly compliance status reports to management'
      ],
      process: [
        { step: 'Compliance Audit', detail: 'Comprehensive audit of current compliance status across all regulatory authorities.' },
        { step: 'Calendar Setup', detail: 'Create a customised 12-month compliance calendar with advance reminders and deadlines.' },
        { step: 'Ongoing Management', detail: 'File all returns, renewals, and statutory documents as per the compliance calendar.' },
        { step: 'Reporting', detail: 'Quarterly compliance health reports to directors/management with risk highlights.' }
      ],
      faqs: [
        { q: 'What does the annual compliance retainer include?', a: 'All ROC filings, GST returns, income tax coordination, labour law renewals, and board meeting documentation for a fixed annual fee.' },
        { q: 'How does ARVISTA track compliance deadlines?', a: 'We use proprietary compliance management software with automated reminders and a dedicated relationship manager for each client.' },
        { q: 'Can this service be customised for specific compliance areas?', a: 'Absolutely. We offer modular compliance packages — you can choose MCA-only, GST-only, or full-spectrum compliance management.' }
      ],
    }
  ],
    hr: [
    {
        "slug": "labour-registration",
        "name": "Labour Registration & Licensing",
        "desc": "Shop & Commercial Establishment Act, CLRA licensing & statutory labour compliance.",
        "icon": "badge",
        "heroSubtitle": "LABOUR LAW & STATUTORY COMPLIANCE",
        "tagline": "End-to-end statutory workforce compliance, registrations, and government labour licensing.",
        "overview": "Every commercial establishment, industrial factory, and service business employing personnel in India must comply with state and central labour legislation. ARVISTA manages registrations and licensing under the Kerala Shops & Commercial Establishments Act, Contract Labour (Regulation and Abolition) Act (CLRA), Inter-State Migrant Workers Act, and the new Occupational Safety, Health and Working Conditions Code. We protect corporate founders and directors from punitive inspections while instituting fair, legally audited operational frameworks for your workforce.",
        "keyDeliverables": [
            "Shop & Commercial Establishment Act registration and annual renewals",
            "Contract Labour (CLRA) registration for Principal Employers and Contractors",
            "Factory License procurement and factory plan engineering approvals",
            "Labour Welfare Fund (LWF) establishment registration and compliance",
            "Statutory physical and digital registers setup (Muster Roll, Wage Register, Overtime)",
            "Representation before jurisdictional Labour Officers during inspections and summons",
            "Professional Tax employer registration and local body filing"
        ],
        "process": [
            {
                "step": "Workforce Audit",
                "detail": "Evaluate employee headcount, commercial premises classification, and third-party contractor contracts against applicable state acts."
            },
            {
                "step": "Documentation Assembly",
                "detail": "Prepare rent agreements, utility records, director identity verifications, muster rolls, and statutory undertakings."
            },
            {
                "step": "Departmental Filing",
                "detail": "Submit electronic applications with state Labour Department portals and coordinate with local labour commissioners."
            },
            {
                "step": "Licensing & Compliance Delivery",
                "detail": "Deliver certified registration certificates and set up permanent statutory compliance calendars and notice boards."
            }
        ],
        "faqs": [
            {
                "q": "When is a Shop & Commercial Establishment registration required?",
                "a": "Under statutory state laws, registration is mandatory within 30 days of commencing commercial operations, regardless of whether your business operates from an office or in a hybrid format."
            },
            {
                "q": "When does the Contract Labour (CLRA) Act apply?",
                "a": "CLRA applies to any establishment that employs 20 or more contract workmen on any day of the accounting year. The principal employer must obtain a Registration Certificate, and contractors must obtain licenses."
            },
            {
                "q": "What are the penalties for non-compliance with labour laws?",
                "a": "Failure to register or maintain statutory registers carries substantial monetary penalties, cessation of commercial operations, and potential criminal liability for designated directors."
            }
        ],
    },
    {
        "slug": "pf-esi-registration",
        "name": "EPF & ESIC Registration & Returns",
        "desc": "Employee social security registration, monthly ECR challan filings & compliance audits.",
        "icon": "health_and_safety",
        "heroSubtitle": "SOCIAL SECURITY GOVERNANCE",
        "tagline": "Employee social security compliance — EPFO, ESIC, monthly filings, and payroll governance.",
        "overview": "Establishments employing 20 or more persons must register under the Employees' Provident Fund Organisation (EPFO). Commercial and industrial units employing 10 or more persons with monthly wages up to ₹21,000 must register under the Employees' State Insurance Corporation (ESIC). ARVISTA manages complete setup on the unified Shram Suvidha portal, digital UAN activation, monthly contribution computations, ECR challan generation, and inspectoral grievance defense.",
        "keyDeliverables": [
            "EPFO employer registration and establishment code allotment",
            "ESIC employer registration and branch unit mapping",
            "Universal Account Number (UAN) generation and Aadhaar/Bank digital KYC",
            "Monthly PF & ESIC contribution computation and ECR challan filing",
            "ESIC monthly payment challans and half-yearly Return of Contributions",
            "PF annual returns, transfer assistance, and grievance redressal on EPFiGMS",
            "Direct representation during EPFO/ESIC inspectoral audits and Section 7A inquiries"
        ],
        "process": [
            {
                "step": "Establishment Onboarding",
                "detail": "Register establishment on unified Shram Suvidha and EPFO/ESIC portals using director DSC."
            },
            {
                "step": "Employee KYC Seeding",
                "detail": "Generate UANs, seed Aadhaar, bank details, and PAN for all eligible employees on the employer portal."
            },
            {
                "step": "Monthly Challan Filing",
                "detail": "Compute wage deductions, generate Electronic Challan cum Return (ECR), and ensure timely deposit before the 15th."
            },
            {
                "step": "Annual Audits & Reconciliations",
                "detail": "File annual returns and maintain digital registers for inspectoral defense."
            }
        ],
        "faqs": [
            {
                "q": "Is EPF registration mandatory for companies with fewer than 20 employees?",
                "a": "It is not mandatory, but voluntary registration is permitted and widely adopted by growing companies to attract top talent and provide statutory retirement benefits."
            },
            {
                "q": "What is the current EPF contribution breakdown?",
                "a": "Employer contributes 12% (3.67% to EPF + 8.33% to EPS) and employee contributes 12% of basic wages plus dearness allowance."
            },
            {
                "q": "What is the consequence of late PF/ESI payment?",
                "a": "Late payment attracts statutory damages ranging from 5% to 25% under Section 14B, plus penal interest at 12% per annum under Section 7Q of the EPF Act."
            }
        ],
    },
    {
        "slug": "executive-contracts-nda",
        "name": "Executive Contracts & NDAs",
        "desc": "Watertight C-suite employment agreements, restrictive covenants, IP assignment & NDAs.",
        "icon": "history_edu",
        "heroSubtitle": "TALENT CONTRACTS & IP RETENTION",
        "tagline": "Watertight legal protection for executive hiring, intellectual property retention, and trade secrets.",
        "overview": "Hiring key executives and technical leaders requires bespoke contractual governance that goes far beyond generic offer letters. ARVISTA drafts robust, enforceable employment contracts containing critical restrictive covenants, trade secret confidentiality, intellectual property assignment, non-solicitation, and structured severance frameworks tailored to protect shareholder value and proprietary enterprise know-how.",
        "keyDeliverables": [
            "C-suite and senior leadership employment contract drafting",
            "Comprehensive Non-Disclosure Agreements (NDA) and trade secret covenants",
            "Intellectual Property (IP) assignment and Work-for-Hire provisions",
            "Non-solicitation covenants covering clients, suppliers, and key employees",
            "Executive performance clawback provisions and structured severance agreements",
            "Dual-employment, moonlighting prevention, and conflict of interest policies",
            "Director service agreements and board representation covenants"
        ],
        "process": [
            {
                "step": "Role & Risk Diagnostic",
                "detail": "Assess executive access to trade secrets, client lists, IP assets, and competitive market risks."
            },
            {
                "step": "Contractual Drafting",
                "detail": "Corporate advocates craft tailored employment agreements embedding watertight IP assignment and restrictive terms."
            },
            {
                "step": "Review & Closing",
                "detail": "Align with corporate HR and the executive candidate to ensure fair, clear, and enforceable execution."
            },
            {
                "step": "Execution & Archival",
                "detail": "Formal digital/physical execution with proper stamp duty compliance and secure digital vaulting."
            }
        ],
        "faqs": [
            {
                "q": "Are non-compete clauses legally enforceable in India?",
                "a": "Section 27 of the Indian Contract Act voids post-termination non-competes. However, confidentiality, during-employment exclusivity, and client/employee non-solicitation covenants are fully upheld by Indian courts."
            },
            {
                "q": "Why is an explicit IP Assignment clause critical?",
                "a": "Under Indian copyright and patent law, without an explicit written assignment clause specifying transfer of rights, IP created by employees or consultants can remain contested."
            },
            {
                "q": "Can ARVISTA customize contracts for cross-border executive appointments?",
                "a": "Yes. We draft dual-jurisdiction contracts addressing foreign currency compensation, tax residency, and cross-border arbitration venues."
            }
        ],
    },
    {
        "slug": "posh-compliance-policy",
        "name": "POSH Policy & IC Committee Setup",
        "desc": "Prevention of Sexual Harassment compliance, Internal Committee constitution & annual filing.",
        "icon": "shield_person",
        "heroSubtitle": "WORKPLACE SAFETY & GOVERNANCE",
        "tagline": "Mandatory POSH compliance, Internal Committee constitution, and statutory district filings.",
        "overview": "Under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH), every employer with 10 or more employees must formulate a gender-neutral POSH policy, constitute an Internal Committee (IC) led by a senior woman and an empaneled external legal expert, conduct periodic employee sensitization, and file annual compliance reports with the District Officer.",
        "keyDeliverables": [
            "Bespoke corporate POSH policy drafting and digital dissemination",
            "Internal Committee (IC) formal constitution order and tenure appointment letters",
            "Empaneled External Presiding / Legal Member representation for your committee",
            "Employee sensitization sessions and interactive IC training modules",
            "Quasi-judicial inquiry procedural handbook and case-handling documentation",
            "Annual POSH compliance report drafting and statutory submission to the District Officer",
            "Workplace safety audit and statutory display notice compliance"
        ],
        "process": [
            {
                "step": "Policy Formulation",
                "detail": "Draft customized POSH policy aligned with your enterprise culture, remote operations, and statutory regulations."
            },
            {
                "step": "Committee Constitution",
                "detail": "Appoint internal employee members and assign a certified ARVISTA external advocate to the committee."
            },
            {
                "step": "Workforce Sensitization",
                "detail": "Deliver live or virtual interactive workshops for employees and managers on respectful workplace conduct."
            },
            {
                "step": "Statutory Reporting",
                "detail": "Consolidate annual complaint statistics and submit the mandatory return to the District Collectorate before December 31."
            }
        ],
        "faqs": [
            {
                "q": "Is POSH compliance mandatory for remote or IT companies?",
                "a": "Yes. The definition of 'workplace' under the POSH Act extends to virtual workspaces, remote work channels, official travel, and digital communication platforms."
            },
            {
                "q": "Who qualifies as an External Member on the Internal Committee?",
                "a": "A person associated with NGOs or associations committed to women's causes, or an advocate familiar with sexual harassment and labor jurisprudence. ARVISTA provides qualified empaneled experts."
            },
            {
                "q": "What is the penalty for failing to constitute an Internal Committee?",
                "a": "A direct monetary fine of ₹50,000 for the first offense, double the fine for subsequent non-compliance, and potential revocation of your municipal commercial trade licenses."
            }
        ],
    },
    {
        "slug": "hr-handbook-policy-design",
        "name": "HR Manuals & Workplace Policies",
        "desc": "Standing orders, code of conduct, leave governance, remote protocols & disciplinary rules.",
        "icon": "menu_book",
        "heroSubtitle": "ORGANISATIONAL INFRASTRUCTURE",
        "tagline": "Institutional HR frameworks, employee handbooks, and operational conduct manuals.",
        "overview": "A growing enterprise requires clear, systematic operational rules to prevent employee disputes and maintain institutional rigor. ARVISTA designs comprehensive Employee Handbooks, Industrial Standing Orders, code of conduct guidelines, leave policies, and disciplinary protocols. We transform ad-hoc startup practices into mature, audited corporate operations.",
        "keyDeliverables": [
            "Comprehensive Employee Handbook tailored to your industry scale",
            "Certified Industrial Standing Orders preparation and certification (for factories/units)",
            "Leave, attendance, overtime, and hybrid/remote work operational protocols",
            "Corporate Code of Conduct, Ethics, Anti-Bribery, and Whistleblower policy",
            "Performance Improvement Plan (PIP) framework and disciplinary guidelines",
            "Separation, exit interview, asset clearance, and full-and-final settlement protocols",
            "Data privacy and company IT asset acceptable use agreements"
        ],
        "process": [
            {
                "step": "Operational Discovery",
                "detail": "Review existing work timings, shift rosters, compensation structures, and management pain points."
            },
            {
                "step": "Policy Formulation",
                "detail": "Draft clear, comprehensive policies aligning organizational goals with state and central labor enactments."
            },
            {
                "step": "Executive Alignment",
                "detail": "Review drafts with management and HR leadership to refine operational workflows."
            },
            {
                "step": "Rollout & Sign-off",
                "detail": "Deploy digital handbook, obtain employee digital acknowledgments, and conduct manager briefing sessions."
            }
        ],
        "faqs": [
            {
                "q": "When are Certified Standing Orders mandatory?",
                "a": "Industrial establishments employing 100 or more workmen (reduced to 50 in certain states) must obtain certified standing orders under the Industrial Employment (Standing Orders) Act."
            },
            {
                "q": "Can policies be updated for hybrid or work-from-home teams?",
                "a": "Yes. We incorporate dedicated provisions for tracking productivity, home-office cybersecurity, confidential data protection, and equipment stewardship."
            },
            {
                "q": "How do structured HR policies protect employers during labor disputes?",
                "a": "Documented codes of conduct and transparent disciplinary procedures provide decisive legal proof during wrongful termination claims or conciliation proceedings."
            }
        ],
    },
    {
        "slug": "statutory-labor-audit",
        "name": "Statutory Labour & Payroll Audit",
        "desc": "Wage code audit, minimum wages, bonus, gratuity & statutory register scrutinies.",
        "icon": "rule",
        "heroSubtitle": "LABOUR RISK & DUE DILIGENCE",
        "tagline": "Exhaustive employer compliance audits to pre-empt penalties and labour inspections.",
        "overview": "A proactive labour audit by ARVISTA reviews your payroll calculations, contractor agreements, overtime registers, bonus payments, and gratuity provisioning against prevailing state and central labour legislations. We produce a comprehensive, prioritised risk matrix that eliminates latent liabilities before government labour enforcement officers initiate inspections.",
        "keyDeliverables": [
            "Comprehensive audit of minimum wages and wage code compliance",
            "Payment of Bonus Act, Payment of Gratuity Act, and maternity benefit liability scrutiny",
            "Contract labour vendor compliance review and indemnity verification",
            "Physical and digital statutory register verification (Forms A through E)",
            "Overtime calculation accuracy and statutory working hour compliance review",
            "Executive Labour Audit Report with traffic-light risk prioritization",
            "Corrective action roadmap and advisory support during labour officer summons"
        ],
        "process": [
            {
                "step": "Data Collection",
                "detail": "Securely compile payroll sheets, contractor service agreements, muster rolls, and challans."
            },
            {
                "step": "Statutory Verification",
                "detail": "Senior labour advocates audit records against minimum wage notifications, social security caps, and state rules."
            },
            {
                "step": "Audit Report Issuance",
                "detail": "Present detailed audit report identifying financial exposures, non-compliances, and risk ratings."
            },
            {
                "step": "Remediation",
                "detail": "Assist in drafting missing registers, revising contract clauses, and updating payroll structures."
            }
        ],
        "faqs": [
            {
                "q": "Who performs the labour audit at ARVISTA?",
                "a": "Audits are performed by senior practicing labour advocates, certified payroll consultants, and former administrative labour enforcement officers."
            },
            {
                "q": "Why is contractor compliance audit essential for principal employers?",
                "a": "Under Indian law, if a security, housekeeping, or staffing agency fails to pay minimum wages or deposit PF/ESI, the principal employer is legally liable for all dues and damages."
            },
            {
                "q": "How often should a company conduct a labour compliance audit?",
                "a": "We recommend an annual audit or an immediate audit prior to private equity funding, mergers, or initial public offerings."
            }
        ],
    }
],
  project: [
    {
        "slug": "project-report",
        "name": "Techno-Economic Project Report (DPR)",
        "desc": "Comprehensive DPR for bank capital sanction, syndicate finance & MSME industrial subsidy.",
        "icon": "analytics",
        "heroSubtitle": "BANKABLE PROJECT FEASIBILITY",
        "tagline": "Bank-ready project reports, financial models, and feasibility documentation.",
        "overview": "A Detailed Project Report (DPR) or Techno-Economic Viability (TEV) study is the cornerstone for securing bank term loans, consortium project finance, SIDBI assistance, and central/state industrial capital investment subsidies. ARVISTA prepares comprehensive, bank-compliant DPRs encompassing market dynamics, manufacturing capacity, engineering civil estimates, cash-flow models, sensitivity analyses, and CMA data vetted by chartered accountants.",
        "keyDeliverables": [
            "Detailed Project Report (DPR) tailored to bank underwriting formats",
            "5 to 10-year comprehensive financial projections (P&L, Balance Sheet, Cash Flow)",
            "DSCR, IRR, break-even point (BEP), and financial sensitivity modeling",
            "Techno-Economic Viability (TEV) assessment for large capital investments",
            "Credit Monitoring Arrangement (CMA) data preparation for bank syndicates",
            "State industrial policy subsidy eligibility assessment and filing documentation",
            "Direct representation during bank credit appraisal meetings"
        ],
        "process": [
            {
                "step": "Project Scoping",
                "detail": "Deep-dive consultation with project promoters to define plant capacity, capital expenditure, and commercial timelines."
            },
            {
                "step": "Market & Technical Analysis",
                "detail": "Conduct sector benchmarking, technical plant feasibility, and supply-chain logistics evaluations."
            },
            {
                "step": "Financial Modeling",
                "detail": "Build dynamic financial models assessing debt service coverage, working capital cycles, and investor IRR."
            },
            {
                "step": "Bank Delivery & Defense",
                "detail": "Deliver certified bankable reports and support founders in answering technical credit queries from bankers."
            }
        ],
        "faqs": [
            {
                "q": "Which banks accept ARVISTA Detailed Project Reports?",
                "a": "Our reports are accepted by all major nationalised banks (SBI, Canara, PNB, Union Bank), premier private banks (HDFC, ICICI, Federal Bank), SIDBI, and state industrial development corporations."
            },
            {
                "q": "Can your DPR be used to claim government capital subsidies?",
                "a": "Yes. We format DPRs in compliance with PMEGP, CGTMSE, Kerala State Industrial Development Corporation (KSIDC), and central MSME capital subsidy schemes."
            },
            {
                "q": "What key financial indicators do banks scrutinize in a DPR?",
                "a": "Lenders evaluate the Debt Service Coverage Ratio (DSCR, ideally 1.5–2.0), Internal Rate of Return (IRR), Return on Capital Employed (ROCE), and promoter equity margin."
            }
        ],
    },
    {
        "slug": "pollution-control-clearance",
        "name": "Pollution Control Board Clearance",
        "desc": "State PCB industrial categorization, Consent to Establish (CTE) & Consent to Operate (CTO).",
        "icon": "eco",
        "heroSubtitle": "ENVIRONMENTAL CLEARANCE & PCB SANCTIONS",
        "tagline": "State PCB consents, environmental clearances, and statutory waste management.",
        "overview": "Industrial manufacturing units, healthcare facilities, commercial hospitality ventures, and residential complexes must obtain Consent to Establish (CTE) and Consent to Operate (CTO) from the State Pollution Control Board (KSPCB). ARVISTA manages the end-to-end statutory process: Red/Orange/Green/White sector classification, effluent treatment design review, online OCMMS filing, field inspection liaison, and renewable consent renewals.",
        "keyDeliverables": [
            "Industrial categorization analysis under Red, Orange, Green, and White classifications",
            "Consent to Establish (CTE) application filing on KSPCB OCMMS portal",
            "Consent to Operate (CTO) application procurement prior to commercial production",
            "Effluent Treatment Plant (ETP) / Sewage Treatment Plant (STP) layout schematic advisory",
            "Air emission stacks, generator acoustic hoods, and ambient noise compliance documentation",
            "Hazardous waste management authorization and biomedical waste compliance",
            "Liaison during board engineer site inspections and query clarifications"
        ],
        "process": [
            {
                "step": "Industry Classification",
                "detail": "Determine precise environmental category (Red/Orange/Green/White) based on pollution index score and raw materials."
            },
            {
                "step": "Technical Documentation",
                "detail": "Prepare manufacturing process flowcharts, water balance charts, and waste mitigation schematics."
            },
            {
                "step": "Portal Submission",
                "detail": "Submit electronic application through KSPCB OCMMS with statutory fee remittance."
            },
            {
                "step": "Inspection & Order Procurement",
                "detail": "Assist during board engineer factory inspection and secure formal Consent Order."
            }
        ],
        "faqs": [
            {
                "q": "What is the operational difference between CTE and CTO?",
                "a": "Consent to Establish (CTE) must be secured before starting civil construction or placing plant machinery. Consent to Operate (CTO) is secured after installation and before commercial production starts."
            },
            {
                "q": "What happens if a facility operates without PCB consent?",
                "a": "Section 33A of the Water Act and Section 31A of the Air Act authorize the board to order immediate closure, electricity disconnection, and levy severe environmental damage compensation."
            },
            {
                "q": "How long is PCB consent valid?",
                "a": "Validity ranges from 1 year to 5 years depending on whether the unit falls under the Red, Orange, or Green category, after which timely renewal is required."
            }
        ],
    },
    {
        "slug": "land-data-bank-conversion",
        "name": "Land & Data Bank Conversion",
        "desc": "Kerala Conservation of Paddy Land & Wetland Act Form 5, 6, 7 & 9 filings & KLU sanctions.",
        "icon": "landscape",
        "heroSubtitle": "STATUTORY LAND USE CONVERSION",
        "tagline": "Statutory conversion of paddy land, wetland, and unnotified land for commercial development.",
        "overview": "Utilizing land parcels for industrial, commercial, or institutional projects in Kerala requires rigorous compliance with the Kerala Conservation of Paddy Land and Wetland Act, 2008. ARVISTA manages Form 5 (Data Bank exclusion), Form 6 (land use conversion for unnotified land), Form 7 (commercial classification changes), and Kerala Land Utilisation (KLU) orders through RDOs, Tahsildars, and the District Collectorate.",
        "keyDeliverables": [
            "Comprehensive revenue record and local body Data Bank status scrutiny",
            "Form 5 application filing for exclusion of wrongfully classified land from Data Bank",
            "KSREC satellite imagery analysis and historical land profile verification",
            "Form 6 application for permission to use unnotified land for commercial/residential purposes",
            "Form 7 application for change in nature of unnotified land exceeding statutory ceilings",
            "Treasury fee calculation and challan deposit coordination",
            "Village Officer, Agricultural Officer (Krishi Bhavan), and RDO hearing representation",
            "Procurement of final conversion order and land revenue B-Register mutation"
        ],
        "process": [
            {
                "step": "Status Scrutiny",
                "detail": "Examine village B-Register, Thandapper, and Local Level Monitoring Committee (LLMC) Data Bank records."
            },
            {
                "step": "Application Assembly",
                "detail": "Prepare survey sketch, boundary demarcation, and KSREC satellite study application."
            },
            {
                "step": "Administrative Follow-up",
                "detail": "Represent client before Agricultural Officer, Village Officer, and RDO during local site inspections."
            },
            {
                "step": "Final Sanction",
                "detail": "Obtain statutory conversion order and update land tax category from Nilam to Purayidom."
            }
        ],
        "faqs": [
            {
                "q": "What is a Form 5 application?",
                "a": "Form 5 is filed to remove a property erroneously included in the Data Bank as paddy land or wetland, supported by satellite imagery showing prior conversion."
            },
            {
                "q": "What is the government fee for land conversion under Form 6?",
                "a": "Land up to 25 cents is exempt from government conversion fees. Above 25 cents, fees are calculated as a percentage of the government fair value of the land."
            },
            {
                "q": "How long does the land conversion process take in Kerala?",
                "a": "Typically 3 to 9 months depending on the jurisdiction, KSREC report turnaround, and RDO hearing schedules."
            }
        ],
    },
    {
        "slug": "building-land-valuation",
        "name": "Turnkey Asset & Project Valuation",
        "desc": "Government & bank panel registered valuer reports for capital loans, syndicates and equity.",
        "icon": "home_work",
        "heroSubtitle": "CERTIFIED ASSET VALUATION",
        "tagline": "Registered valuer reports for project finance, banking syndication, and statutory tax filing.",
        "overview": "ARVISTA delivers certified valuation reports through IBBI-registered valuers for commercial land, industrial factories, hospital complexes, plant & machinery. Our valuations conform to International Valuation Standards (IVS) and are accepted across public and private sector banks, financial institutions, debt recovery tribunals, and income tax authorities under Section 50C.",
        "keyDeliverables": [
            "On-site physical inspection, engineering measurements, and boundary verification",
            "Fair Market Value (FMV), Realizable Value, and Distress Sale Value (DSV) assessment",
            "Detailed building cost estimation using CPWD/State PWD schedule of rates",
            "Depreciation analysis for industrial buildings, plant, and machinery",
            "Certification by IBBI Registered Valuer with official seal and registration credentials",
            "Formats conforming specifically to bank consortium and financial institution underwriting",
            "Capital gains tax valuation (Section 50C / 54F) for income tax proceedings"
        ],
        "process": [
            {
                "step": "Physical Inspection",
                "detail": "Registered valuer and civil engineering team conduct physical site measurements, structural inspection, and photo inventory."
            },
            {
                "step": "Market Benchmarking",
                "detail": "Cross-reference government guideline values, recent registered transactions, and infrastructural growth in the vicinity."
            },
            {
                "step": "Computation",
                "detail": "Apply recognized valuation methodologies: Cost Approach, Market Approach, and Income Capitalization."
            },
            {
                "step": "Certification",
                "detail": "Issue formally certified valuation report with supporting maps, drawings, and valuer affidavits."
            }
        ],
        "faqs": [
            {
                "q": "Who are IBBI Registered Valuers?",
                "a": "Valuers licensed by the Insolvency and Bankruptcy Board of India under the Companies Act, whose reports carry statutory evidentiary value."
            },
            {
                "q": "Which financial institutions accept ARVISTA valuation reports?",
                "a": "SBI, Canara Bank, HDFC, ICICI, Federal Bank, South Indian Bank, SIDBI, NBFCs, and state financial institutions."
            },
            {
                "q": "How quickly can a valuation report be delivered?",
                "a": "Standard valuation reports are delivered within 7 to 10 working days following site inspection. Express timelines can be arranged for critical loan deadlines."
            }
        ],
    },
    {
        "slug": "industrial-zoning-noc",
        "name": "Single Window & Industrial Clearances",
        "desc": "District Industries Centre (DIC), Single Window Clearance Board & Fire/Safety sanctions.",
        "icon": "fact_check",
        "heroSubtitle": "INTEGRATED INDUSTRIAL SANCTIONS",
        "tagline": "Fast-track composite industrial sanctions through Single Window Clearance Boards.",
        "overview": "Commissioning an industrial plant or large commercial project in Kerala requires clearances across multiple statutory departments: District Industries Centre (DIC), Town & Country Planning, Fire & Rescue Services, Electrical Inspectorate, Factory Inspectorate, and local bodies. ARVISTA prepares composite dossiers and represents projects before the District Single Window Clearance Board to secure binding composite clearances within statutory time limits.",
        "keyDeliverables": [
            "District Industries Centre (DIC) MSME / Large Enterprise project registration",
            "District Single Window Clearance Board composite application preparation and filing",
            "Fire & Rescue Services Department No Objection Certificate (Fire NOC)",
            "Town & Country Planning layout approval and commercial zoning permissions",
            "Chief Electrical Inspectorate (CEI) power scheme sanction liaison",
            "Factory Inspectorate plan approval and structural stability verification",
            "Expedited composite clearance license issuance"
        ],
        "process": [
            {
                "step": "Master Scoping",
                "detail": "Review civil master plans, electrical power connected load requirements, and hazard profiles."
            },
            {
                "step": "Composite Dossier Preparation",
                "detail": "Compile comprehensive drawings, environmental reports, and structural safety documents."
            },
            {
                "step": "Single Window Filing",
                "detail": "Submit composite dossier to the District Single Window Board under the Industrial Single Window Act."
            },
            {
                "step": "Agency Coordination & Sanction",
                "detail": "Coordinate synchronized technical inspections across departments and secure formal composite clearance."
            }
        ],
        "faqs": [
            {
                "q": "What is the advantage of the Single Window Clearance Board?",
                "a": "It provides a statutory, legally binding mechanism where applications must be decided within 30 days. Deemed clearance provisions apply if departments fail to respond in time."
            },
            {
                "q": "When is a Fire NOC mandatory for projects?",
                "a": "Mandatory for buildings taller than 15 meters, assembly occupancies, hazardous industrial units, hospitals, and commercial complexes with floor areas exceeding statutory thresholds."
            },
            {
                "q": "Does ARVISTA handle follow-up with all individual departments?",
                "a": "Yes. Our specialized industrial liaison team attends site visits and coordinates directly with engineers in each technical wing."
            }
        ],
    },
    {
        "slug": "railway-metro-noc",
        "name": "Infrastructure Corridor NOCs",
        "desc": "Railway perimeter clearances, Kochi Metro corridor approvals & utility crossings.",
        "icon": "train",
        "heroSubtitle": "INFRASTRUCTURE CORRIDORS & STRATEGIC NOCS",
        "tagline": "Statutory approvals for construction adjacent to rail, metro, and national highway corridors.",
        "overview": "Civil construction, access roads, overbridges, high-tension lines, or utility pipeline crossings in proximity to Indian Railways (Southern Railway), Kochi Metro Rail (KMRL) corridors, or National Highways Authority of India (NHAI) require formal No Objection Certificates. ARVISTA manages technical vetting, engineering submissions, joint field inspections, and sanction orders.",
        "keyDeliverables": [
            "Railway boundary buffer zone and track alignment proximity assessment",
            "Southern Railway Division Engineer application preparation and technical plan submission",
            "Kochi Metro Rail Limited (KMRL) corridor NOC for construction within protected zones",
            "NHAI highway access permission and pipeline/cable underground crossing sanctions",
            "Structural stability and foundation depth verification by empaneled chartered engineers",
            "Joint field inspection coordination with infrastructure divisional engineers",
            "Formal corridor clearance delivery and compliance monitoring"
        ],
        "process": [
            {
                "step": "Proximity Assessment",
                "detail": "Survey exact distance from outermost railway rail, metro viaduct pier, or national highway right-of-way."
            },
            {
                "step": "Engineering Plan Assembly",
                "detail": "Prepare structural cross-sections, piling depths, foundation designs, and drainage mitigation plans."
            },
            {
                "step": "Departmental Submission",
                "detail": "Submit formal files to the Divisional Railway Manager (DRM) or KMRL Technical Directorate."
            },
            {
                "step": "Field Inspection & Clearance",
                "detail": "Participate in joint site inspections with railway/metro engineers and obtain formal NOC."
            }
        ],
        "faqs": [
            {
                "q": "What is the railway buffer zone for building construction?",
                "a": "Generally, construction within 30 meters from the outermost railway track requires a formal Railway NOC to ensure structural safety and train transit integrity."
            },
            {
                "q": "Is Metro NOC mandatory for properties adjacent to the metro line?",
                "a": "Yes. Construction within 20 meters from either side of the metro viaduct or station footprint requires statutory KMRL clearance."
            },
            {
                "q": "How long does an infrastructure NOC process take?",
                "a": "Typically 30 to 60 working days depending on division board schedules and engineering verifications."
            }
        ],
    }
],
  accounting: [
    {
      slug: 'gst-registration',
      name: 'GST Registration',
      desc: 'Taxpayer enrolment, jurisdiction tagging & composition scheme guidance.',
      icon: 'receipt_long',
      heroSubtitle: 'TAX REGISTRATION',
      tagline: 'Mandatory GST enrolment for businesses exceeding threshold limits.',
      overview: 'GST Registration is mandatory for businesses with turnover exceeding ₹40 lakh (₹20 lakh for services / special category states) and for inter-state suppliers, e-commerce operators, and certain notified categories. ARVISTA handles the complete registration process on the GST portal, including GSTIN allotment, jurisdiction tagging, and composition scheme advisory.',
      keyDeliverables: ['GSTIN allotment on GST portal', 'Composition scheme eligibility assessment', 'Place of supply and jurisdiction determination', 'GST registration certificate', 'HSN/SAC code classification advisory', 'Input Tax Credit (ITC) readiness setup'],
      process: [
        { step: 'Eligibility Check', detail: 'Assess turnover, business type, and inter-state activity to confirm registration requirement.' },
        { step: 'Document Collection', detail: 'Gather PAN, Aadhaar, business address proof, bank details, and authorisation.' },
        { step: 'Portal Filing', detail: 'Complete GST REG-01 application with proper HSN/SAC classification.' },
        { step: 'GSTIN Delivery', detail: 'Deliver registration certificate, set up invoicing format, and advise on first return filing.' }
      ],
      faqs: [
        { q: 'What is the penalty for not registering under GST?', a: '10% of tax due or ₹10,000 (whichever is higher). In case of deliberate evasion, 100% of tax due.' },
        { q: 'Can I register voluntarily below the threshold?', a: 'Yes. Voluntary registration is allowed and is beneficial for availing Input Tax Credit on purchases.' },
        { q: 'How long does GST registration take?', a: 'Typically 3–7 working days if all documents are in order and Aadhaar authentication is completed.' }
      ],
    },
    { slug: 'gst-return-filing', name: 'GST Return Filing', desc: 'Monthly GSTR-1, 3B, annual 9/9C reconciliation & ITC recovery.', icon: 'calculate', heroSubtitle: 'TAX COMPLIANCE', tagline: 'Timely, accurate GST return filings with maximum ITC recovery.', overview: 'GST compliance requires monthly filing of GSTR-1 (outward supplies), GSTR-3B (summary return), and annual GSTR-9/9C reconciliation. ARVISTA ensures timely filing, accurate ITC matching, and proactive identification of mismatches to prevent show-cause notices and interest liabilities.', keyDeliverables: ['Monthly GSTR-1 & GSTR-3B filing', 'Quarterly GSTR-1 (for QRMP scheme)', 'Annual GSTR-9 & GSTR-9C reconciliation', 'ITC reconciliation with GSTR-2B', 'E-way bill compliance advisory', 'GST audit support and documentation'], process: [{ step: 'Data Collection', detail: 'Monthly collection of sales, purchase invoices, and credit/debit notes.' }, { step: 'Reconciliation', detail: 'Match purchase data with GSTR-2B for ITC eligibility confirmation.' }, { step: 'Return Filing', detail: 'File GSTR-1 by 11th and GSTR-3B by 20th of following month.' }, { step: 'Annual Return', detail: 'Prepare and file GSTR-9/9C annual reconciliation by December 31.' }], faqs: [{ q: 'What is the late filing penalty for GSTR-3B?', a: '₹50/day for nil returns and ₹100/day for non-nil returns, subject to a maximum of ₹5,000 per return.' }, { q: 'What is ITC reconciliation?', a: 'Matching your purchase records with supplier filings in GSTR-2B to ensure you claim only eligible Input Tax Credit.' }, { q: 'Can ARVISTA handle multi-state GST filings?', a: 'Yes. We manage filings for businesses with GSTINs in multiple states from a single point of contact.' }], timeline: 'Monthly ongoing', startingPrice: '₹1,499/month' },
    { slug: 'income-tax-filing', name: 'Income Tax Filing (ITR)', desc: 'Corporate, firm & high-net-worth individual structured returns.', icon: 'savings', heroSubtitle: 'INCOME TAX', tagline: 'Structured, optimised tax returns for entities and individuals.', overview: 'ARVISTA files income tax returns for companies, firms, HUFs, trusts, and high-net-worth individuals with a focus on legitimate tax optimisation, accurate computation, and compliance with the latest Finance Act provisions. We handle ITR-1 through ITR-7, advance tax calculations, capital gains computation, and international taxation matters.', keyDeliverables: ['ITR preparation and e-filing for all entity types', 'Advance tax computation and payment advisory', 'Capital gains tax computation (equity, property, crypto)', 'TDS credit matching with Form 26AS & AIS', 'Tax planning and legitimate savings advisory', 'Response to income tax notices and scrutiny'], process: [{ step: 'Information Gathering', detail: 'Collect financial statements, Form 16/16A, bank statements, investment proofs, and AIS.' }, { step: 'Tax Computation', detail: 'Compute taxable income, apply deductions, calculate tax liability under old/new regime.' }, { step: 'ITR Filing', detail: 'Prepare and e-file the correct ITR form with digital signature or EVC verification.' }, { step: 'Post-Filing', detail: 'Verify filing acknowledgment, track refund status, and retain documentation for record.' }], faqs: [{ q: 'Which ITR form should I file?', a: 'It depends on your income sources and entity type. Salaried individuals file ITR-1/2, businesses file ITR-3/4, companies file ITR-6, and trusts file ITR-7.' }, { q: 'What is the due date for filing ITR?', a: 'July 31 for individuals/HUFs (non-audit), October 31 for businesses requiring audit, November 30 for transfer pricing cases.' }, { q: 'Can you help with tax-saving investments?', a: 'Yes. We provide comprehensive tax planning advisory covering 80C, 80D, 80G, and other deduction sections before year-end.' }], timeline: '3–7 working days', startingPrice: '₹2,999' },
    { slug: 'accounts-handling-mis', name: 'Accounts Handling & MIS', desc: 'Daily ledger management, Tally/Zoho setups & executive MIS reporting.', icon: 'monitoring', heroSubtitle: 'FINANCIAL MANAGEMENT', tagline: 'Professional bookkeeping and executive reporting for informed decisions.', overview: 'ARVISTA provides outsourced accounting services including daily transaction recording, bank reconciliation, accounts payable/receivable management, and monthly MIS reporting. We work on Tally Prime, Zoho Books, and QuickBooks to deliver accurate, real-time financial visibility for founders and CFOs.', keyDeliverables: ['Daily transaction recording & categorisation', 'Bank reconciliation (monthly)', 'Accounts payable & receivable management', 'Monthly P&L, Balance Sheet, and Cash Flow reports', 'Executive MIS dashboard reports', 'Tally Prime / Zoho Books setup and maintenance'], process: [{ step: 'Setup', detail: 'Configure accounting software, chart of accounts, and reporting templates aligned with your business.' }, { step: 'Ongoing Recording', detail: 'Daily/weekly transaction entry, invoice processing, and expense categorisation.' }, { step: 'Reconciliation', detail: 'Monthly bank reconciliation, inter-company adjustments, and ledger verification.' }, { step: 'Reporting', detail: 'Monthly MIS reports with key metrics, variance analysis, and management commentary.' }], faqs: [{ q: 'Which accounting software do you support?', a: 'Tally Prime, Zoho Books, QuickBooks, and custom ERP integrations. We recommend based on your business size and needs.' }, { q: 'Can your team work on our existing software?', a: 'Yes. Our accountants are trained on all major platforms and can work on your existing setup.' }, { q: 'Is this suitable for startups?', a: 'Absolutely. We offer startup-friendly packages starting from basic bookkeeping to full-stack financial management.' }], timeline: 'Ongoing monthly', startingPrice: '₹4,999/month' },
    { slug: 'pan-card-processing', name: 'PAN Card Processing', desc: 'Entity PAN, corrections, director linkage & NRI tax IDs.', icon: 'credit_card', heroSubtitle: 'TAX IDENTITY', tagline: 'PAN processing for entities, directors, and NRI taxpayers.', overview: 'ARVISTA processes PAN (Permanent Account Number) applications for all entity types — companies, LLPs, trusts, societies, and individuals. We handle new applications, corrections, reprint, and Aadhaar-PAN linking with express turnaround.', keyDeliverables: ['New PAN application (Form 49A/49AA)', 'PAN correction and update', 'NRI PAN application processing', 'Aadhaar-PAN linking', 'Entity PAN for companies and trusts', 'PAN-based TAN application'], process: [{ step: 'Application Preparation', detail: 'Complete Form 49A (Indian) or 49AA (foreign) with supporting documents.' }, { step: 'Filing', detail: 'Submit application through NSDL/UTIITSL portal.' }, { step: 'Tracking', detail: 'Monitor application status and resolve any verification queries.' }, { step: 'Delivery', detail: 'e-PAN delivery within 48 hours, physical card within 15 days.' }], faqs: [{ q: 'How quickly can I get an e-PAN?', a: 'Instant e-PAN (for Aadhaar-linked individuals) takes minutes. Standard e-PAN takes 2–3 working days.' }, { q: 'Can NRIs get a PAN?', a: 'Yes. NRIs and foreign nationals can apply using Form 49AA with passport as identity proof.' }, { q: 'Is PAN-Aadhaar linking mandatory?', a: 'Yes. PAN becomes inoperative if not linked with Aadhaar by the prescribed deadline.' }], timeline: '2–7 working days', startingPrice: '₹499' },
    { slug: 'statutory-internal-auditing', name: 'Statutory & Internal Auditing', desc: 'Independent financial audits, stock audits & forensic risk reviews.', icon: 'fact_check', heroSubtitle: 'AUDIT & ASSURANCE', tagline: 'Independent verification and risk assessment for corporate integrity.', overview: 'ARVISTA coordinates statutory audits (as mandated by Companies Act), internal audits for operational efficiency, stock audits for inventory verification, and forensic reviews for fraud detection. Our network of empaneled Chartered Accountants ensures independent, rigorous, and compliant audit deliverables.', keyDeliverables: ['Statutory audit coordination (Companies Act)', 'Internal audit and process review', 'Stock audit and inventory verification', 'Revenue audit and expense validation', 'Tax audit (Section 44AB) support', 'Audit report preparation and management letter'], process: [{ step: 'Scope Definition', detail: 'Define audit scope, period, and specific areas of focus.' }, { step: 'Fieldwork', detail: 'Conduct audit procedures — sampling, verification, reconciliation, and testing.' }, { step: 'Findings', detail: 'Document observations, control weaknesses, and improvement recommendations.' }, { step: 'Reporting', detail: 'Present audit report with management letter and action plan.' }], faqs: [{ q: 'When is statutory audit mandatory?', a: 'All companies registered under Companies Act must conduct annual statutory audit. For other entities, it depends on turnover thresholds.' }, { q: 'What is the difference between statutory and internal audit?', a: 'Statutory audit is a legal requirement focused on financial statement accuracy. Internal audit is a management tool focused on operational efficiency and risk management.' }, { q: 'Can you conduct surprise audits?', a: 'Yes. We conduct surprise stock audits, cash audits, and operational audits as per management requirements.' }], timeline: '15–30 working days', startingPrice: '₹14,999' },
    { slug: 'cibil-score-report', name: 'CIBIL Score Report & Correction', desc: 'Credit bureau dispute resolution, defaults rectifications & reporting fixes.', icon: 'credit_score', heroSubtitle: 'CREDIT MANAGEMENT', tagline: 'Repair and optimise your credit profile for banking access.', overview: 'A poor CIBIL score can block loan approvals, credit card applications, and even business partnerships. ARVISTA provides comprehensive credit health analysis, identifies errors and defaults, files disputes with credit bureaus, and coordinates with lenders for corrections and settlements.', keyDeliverables: ['Comprehensive CIBIL/credit bureau report analysis', 'Error identification and dispute filing', 'Default settlement and NOC procurement', 'Credit score improvement advisory', 'Lender coordination for record correction', 'Post-correction score monitoring'], process: [{ step: 'Report Analysis', detail: 'Pull credit reports from all 4 bureaus and identify errors, defaults, and discrepancies.' }, { step: 'Dispute Filing', detail: 'File formal disputes with CIBIL/Experian/Equifax/CRIF for incorrect entries.' }, { step: 'Lender Coordination', detail: 'Work directly with banks and NBFCs to correct reporting errors and obtain NOCs.' }, { step: 'Score Monitoring', detail: 'Track score improvement over 3–6 months and advise on credit behaviour.' }], faqs: [{ q: 'How long does credit repair take?', a: 'Simple errors take 30–45 days. Default settlements and corrections can take 60–120 days.' }, { q: 'Can settled accounts be removed from CIBIL?', a: 'Settled accounts remain for 7 years but the status can be updated from "settled" to "closed" if full payment is made and lender confirms.' }, { q: 'Do you guarantee score improvement?', a: 'We do not guarantee specific scores, but our dispute resolution has a 90%+ success rate for legitimate errors.' }], timeline: '30–120 working days', startingPrice: '₹4,999' },
    { slug: 'pf-esi-registration', name: 'PF & ESI Registration & Returns', desc: 'Monthly challan filings, employee addition/exits & wage register maintenance.', icon: 'health_and_safety', heroSubtitle: 'SOCIAL SECURITY', tagline: 'Employee social security compliance — PF, ESI, and payroll governance.', overview: 'Establishments with 20+ employees must register under EPFO. Those with 10+ employees and wages up to ₹21,000 must register under ESIC. ARVISTA handles complete registration, monthly challan generation, employee addition/exit, annual returns, and dispute resolution.', keyDeliverables: ['EPFO employer registration', 'ESIC employer registration', 'Monthly PF/ESI challan generation and filing', 'Employee UAN activation and KYC', 'Annual PF returns and ESIC half-yearly returns', 'PF transfer, withdrawal, and advance claim support'], process: [{ step: 'Registration', detail: 'Register establishment on EPFO and ESIC portals with employer code allotment.' }, { step: 'Employee Onboarding', detail: 'Generate UAN, activate KYC, and link bank accounts for each employee.' }, { step: 'Monthly Filing', detail: 'Compute contributions, generate ECR, and file monthly challans before 15th.' }, { step: 'Annual Compliance', detail: 'File annual returns and ensure all employees\' KYC is current.' }], faqs: [{ q: 'Is PF registration mandatory for less than 20 employees?', a: 'Voluntary registration is available. Once registered, even with fewer employees, compliance is mandatory.' }, { q: 'What is the current PF contribution rate?', a: '12% each from employer and employee on basic wages + DA (up to ₹15,000/month statutory ceiling).' }, { q: 'Can ARVISTA handle PF/ESI for multiple branches?', a: 'Yes. We manage multi-branch compliance with centralised reporting and branch-wise segregation.' }], timeline: '5–10 working days', startingPrice: '₹3,999' },
    { slug: 'tds-compliance', name: 'TDS Compliance', desc: 'Quarterly Form 24Q/26Q returns and certified 16/16A deliveries.', icon: 'request_quote', heroSubtitle: 'TAX DEDUCTION', tagline: 'Accurate TDS deduction, deposit, and return filing.', overview: 'Tax Deducted at Source (TDS) compliance involves deducting tax at prescribed rates on specified payments, depositing with the government, and filing quarterly returns. ARVISTA manages end-to-end TDS compliance including rate advisory, challan generation, quarterly return filing, and Form 16/16A issuance.', keyDeliverables: ['TDS rate advisory and applicability check', 'Monthly TDS challan generation and deposit', 'Quarterly TDS return filing (24Q, 26Q, 27Q, 27EQ)', 'Form 16 & 16A generation and distribution', 'Lower deduction certificate (LDC) application support', 'TDS assessment and notice response'], process: [{ step: 'Rate Advisory', detail: 'Determine applicable TDS rates for each payment type and payee category.' }, { step: 'Deduction & Deposit', detail: 'Compute TDS, generate challans, and ensure timely government deposit.' }, { step: 'Return Filing', detail: 'File quarterly returns with accurate deductee details and PAN validation.' }, { step: 'Certificate Issuance', detail: 'Generate and distribute Form 16 (salary) and Form 16A (non-salary) to deductees.' }], faqs: [{ q: 'When must TDS be deposited?', a: 'By 7th of the following month. For March deductions, by April 30.' }, { q: 'What is the penalty for late TDS filing?', a: 'Late filing fee of ₹200/day under Section 234E, plus interest at 1.5%/month on the TDS amount.' }, { q: 'Can TDS be avoided with a lower deduction certificate?', a: 'Yes. ARVISTA assists in obtaining LDC (Form 13) from the income tax department for eligible cases.' }], timeline: 'Quarterly ongoing', startingPrice: '₹2,499/quarter' },
    { slug: 'roc-annual-filing', name: 'ROC Annual Filing', desc: 'MCA Form AOC-4, MGT-7, director KYC & compliance certificate renewals.', icon: 'assignment', heroSubtitle: 'CORPORATE FILING', tagline: 'Mandatory annual filings to keep your company in good standing.', overview: 'Every company registered under the Companies Act must file annual returns (MGT-7/MGT-7A) and financial statements (AOC-4) with the Registrar of Companies within prescribed timelines. ARVISTA ensures timely filing, director KYC compliance, and resolution of any MCA compliance defaults.', keyDeliverables: ['AOC-4 (financial statements) filing', 'MGT-7/MGT-7A (annual return) filing', 'DIR-3 KYC for all directors', 'ADT-1 (auditor appointment) filing', 'Board resolutions and meeting minutes', 'Compliance certificate preparation'], process: [{ step: 'Document Collection', detail: 'Gather audited financial statements, board resolutions, and director details.' }, { step: 'Form Preparation', detail: 'Prepare AOC-4 and MGT-7 forms with accurate financial and shareholding data.' }, { step: 'Filing', detail: 'E-file with MCA using director\'s DSC within prescribed deadlines.' }, { step: 'Confirmation', detail: 'Obtain filing acknowledgment and update compliance tracker.' }], faqs: [{ q: 'What is the deadline for AOC-4 filing?', a: 'Within 30 days of the AGM (which must be held within 6 months of financial year end). For March year-end companies, AOC-4 is due by October 29.' }, { q: 'What happens if ROC filing is delayed?', a: 'Late filing fee of ₹100/day (up to 12x the normal fee). Continued non-compliance can lead to company strike-off.' }, { q: 'Is DIR-3 KYC separate from annual filing?', a: 'Yes. Every director must file DIR-3 KYC annually by September 30, regardless of whether the company has filed its annual returns.' }], timeline: '7–15 working days', startingPrice: '₹5,999' },
    { slug: 'comprehensive-compliance', name: 'Comprehensive Compliance Handling', desc: 'Annual corporate retainer overseeing all statutory authorities.', icon: 'task_alt', heroSubtitle: 'FULL COMPLIANCE', tagline: 'One retainer. Every filing. Complete peace of mind.', overview: 'ARVISTA\'s comprehensive compliance retainer covers all annual filings across MCA, GST, Income Tax, Labour Laws, and State Authorities. A dedicated relationship manager tracks every deadline, files every return, and delivers quarterly compliance health reports — so you can focus on growing your business.', keyDeliverables: ['All ROC/MCA annual filings', 'Monthly GST return filings', 'Income tax return preparation', 'PF/ESI monthly compliance', 'TDS quarterly returns', 'Board meeting facilitation and minutes', 'Quarterly compliance health reports'], process: [{ step: 'Onboarding Audit', detail: 'Complete compliance health check across all regulatory authorities.' }, { step: 'Calendar Setup', detail: 'Deploy compliance calendar with automated reminders for every deadline.' }, { step: 'Ongoing Execution', detail: 'File all returns, renewals, and statutory documents on schedule.' }, { step: 'Reporting', detail: 'Quarterly dashboard reports with compliance status and risk alerts.' }], faqs: [{ q: 'What entities benefit most from this service?', a: 'Companies with 10+ employees and annual turnover above ₹1 crore benefit most due to the volume of compliance obligations.' }, { q: 'Can we start mid-year?', a: 'Yes. We conduct a catch-up audit, resolve any backlogs, and then transition to proactive compliance management.' }, { q: 'Is there a single point of contact?', a: 'Yes. Every client gets a dedicated relationship manager who coordinates all compliance activities.' }], timeline: 'Annual retainer', startingPrice: '₹29,999/year' },
    { slug: 'bank-dispute-settlement', name: 'Bank Dispute Settlement', desc: 'NPA debt mediation, consortium restructuring & OTS agreements.', icon: 'gavel', heroSubtitle: 'DISPUTE RESOLUTION', tagline: 'Structured negotiation for NPA resolution and debt settlement.', overview: 'ARVISTA mediates bank disputes including NPA classifications, one-time settlement (OTS) negotiations, consortium lending issues, and SARFAESI Act proceedings. Our team includes certified debt resolution specialists who negotiate on your behalf with banks, ARCs, and the DRT.', keyDeliverables: ['NPA account analysis and rectification', 'One-Time Settlement (OTS) negotiation', 'SARFAESI Act response and representation', 'Debt restructuring proposal preparation', 'DRT/DRAT hearing representation', 'Bank ombudsman complaint filing'], process: [{ step: 'Case Analysis', detail: 'Review loan documents, repayment history, NPA classification, and recovery notices.' }, { step: 'Strategy Development', detail: 'Develop negotiation strategy — OTS, restructuring, or legal defence.' }, { step: 'Negotiation', detail: 'Engage directly with bank recovery department or authorised officer.' }, { step: 'Settlement Execution', detail: 'Execute settlement deed, obtain NOC, and clear CIBIL records.' }], faqs: [{ q: 'What is OTS (One-Time Settlement)?', a: 'OTS is a negotiated settlement where the borrower pays a lump sum (typically 50–80% of outstanding) to fully settle the account.' }, { q: 'Can NPA status be reversed?', a: 'Yes. If payments are brought current and maintained for a qualifying period, NPA status can be upgraded to standard.' }, { q: 'Does ARVISTA represent in DRT hearings?', a: 'Yes. Our legal team represents clients in Debt Recovery Tribunal and Appellate Tribunal proceedings.' }], timeline: '30–180 working days', startingPrice: '₹14,999' }
  ],
  property: [
    { slug: 'property-registration-mutation', name: 'Property Registration & Mutation', desc: 'Pokkuvaravu execution, Thandapper account allotment & tax updates.', icon: 'home', heroSubtitle: 'PROPERTY TRANSFER', tagline: 'End-to-end property registration and revenue record mutation.', overview: 'Property registration in Kerala involves execution of sale deed at the Sub-Registrar\'s office followed by mutation (Pokkuvaravu) in revenue records. ARVISTA handles the complete process from stamp duty calculation, document drafting, Sub-Registrar appointment coordination, to Thandapper account allotment and tax assessment transfer.', keyDeliverables: ['Sale deed execution at Sub-Registrar office', 'Stamp duty calculation and e-stamp procurement', 'Pokkuvaravu (mutation) application filing', 'Thandapper account number allotment', 'Revenue record (thandapper) verification', 'Building tax assessment transfer'], process: [{ step: 'Document Verification', detail: 'Verify title chain, encumbrance certificate, and seller authority documents.' }, { step: 'Deed Drafting', detail: 'Senior advocate drafts the sale deed with comprehensive terms and warranties.' }, { step: 'Registration', detail: 'Coordinate Sub-Registrar appointment, stamp duty payment, and registration formalities.' }, { step: 'Mutation', detail: 'File Pokkuvaravu application and follow up until Thandapper transfer is completed.' }], faqs: [{ q: 'What is Pokkuvaravu?', a: 'Pokkuvaravu is the process of transferring (mutating) revenue records from the seller\'s name to the buyer\'s name in the village revenue records.' }, { q: 'What is stamp duty in Kerala?', a: 'Currently 8% of property value (market value or consideration, whichever is higher) plus 2% registration fee.' }, { q: 'How long does mutation take?', a: 'Typically 30–60 days after filing application, depending on the Village Officer\'s processing timeline.' }], timeline: '15–60 working days', startingPrice: '₹7,999' },
    { slug: 'trust-deed-will-deed', name: 'Trust Deed & Will Deed', desc: 'Succession planning, family settlements & registered testamentary deeds.', icon: 'history_edu', heroSubtitle: 'SUCCESSION PLANNING', tagline: 'Protect your legacy with legally binding succession instruments.', overview: 'ARVISTA drafts and registers Trust Deeds for family trusts, charitable trusts, and asset protection trusts. We also prepare registered and privileged Wills, family settlement deeds, and succession planning documents to ensure orderly wealth transfer across generations.', keyDeliverables: ['Trust Deed drafting and registration', 'Will deed drafting (simple & complex estates)', 'Family Settlement Deed preparation', 'Succession planning advisory', 'Testamentary trust creation', 'Codicil (will amendment) drafting'], process: [{ step: 'Estate Assessment', detail: 'Comprehensive review of assets, liabilities, legal heirs, and succession preferences.' }, { step: 'Structuring', detail: 'Design optimal trust/will structure balancing family needs, tax efficiency, and legal compliance.' }, { step: 'Drafting', detail: 'Senior advocate drafts comprehensive documents with dispute-prevention clauses.' }, { step: 'Registration', detail: 'Execute and register at Sub-Registrar office with witnesses and proper stamp duty.' }], faqs: [{ q: 'Is a Will valid without registration?', a: 'Yes. An unregistered Will is valid if signed by the testator and attested by two witnesses. Registration is optional but recommended for evidentiary strength.' }, { q: 'Can a Trust be revoked?', a: 'A revocable trust can be revoked by the settlor. An irrevocable trust generally cannot be revoked once created, with certain exceptions.' }, { q: 'What is a Family Settlement Deed?', a: 'A legally binding document where family members agree to divide family properties among themselves to avoid future disputes.' }], timeline: '5–15 working days', startingPrice: '₹5,999' },
    { slug: 'lease-rent-agreements', name: 'Lease & Rent Agreements', desc: 'High-value commercial lease drafting, tenure covenants & stamp filings.', icon: 'apartment', heroSubtitle: 'LEASE DOCUMENTATION', tagline: 'Professionally drafted lease agreements for commercial and residential properties.', overview: 'ARVISTA drafts comprehensive lease and rental agreements for commercial offices, retail spaces, industrial premises, warehouses, and residential properties. Our agreements include detailed clauses on rent escalation, lock-in period, fit-out provisions, maintenance obligations, sub-lease restrictions, and dispute resolution mechanisms.', keyDeliverables: ['Commercial lease agreement drafting', 'Residential rent agreement preparation', 'Leave & license agreement', 'Sub-lease agreement with landlord consent', 'Lease renewal and modification', 'Stamp duty calculation and e-stamp procurement', 'Registration at Sub-Registrar office (for leases > 11 months)'], process: [{ step: 'Terms Negotiation', detail: 'Assist in negotiating key commercial terms — rent, deposit, escalation, and lock-in.' }, { step: 'Drafting', detail: 'Draft comprehensive agreement with protective clauses for your position (landlord or tenant).' }, { step: 'Review', detail: 'Counter-party review and negotiate final terms.' }, { step: 'Execution', detail: 'Stamp duty procurement, signing, and registration if required.' }], faqs: [{ q: 'Do rental agreements need to be registered?', a: 'Agreements for lease periods exceeding 11 months must be compulsorily registered at the Sub-Registrar office.' }, { q: 'What is the stamp duty on rental agreements?', a: 'In Kerala, stamp duty is calculated on the total rent for the lease period, with rates varying by local area.' }, { q: 'Can you draft agreements for furnished serviced offices?', a: 'Yes. We include specific clauses for furniture inventory, maintenance responsibilities, and fit-out provisions.' }], timeline: '3–7 working days', startingPrice: '₹3,999' },
    { slug: 'sale-deed-drafting', name: 'Sale Deed Drafting', desc: 'Bespoke conveyance contracts by senior High Court registered advocates.', icon: 'edit_document', heroSubtitle: 'CONVEYANCE', tagline: 'Precision-crafted sale deeds by senior registered advocates.', overview: 'The Sale Deed is the most critical document in any property transaction — it is the legal instrument that transfers ownership. ARVISTA\'s senior High Court advocates draft bespoke sale deeds with comprehensive terms covering consideration, payment schedule, title warranties, encumbrance declarations, boundary descriptions, and indemnities.', keyDeliverables: ['Bespoke Sale Deed drafting', 'Title chain verification and warranty clauses', 'Schedule of property with survey details', 'Payment schedule and handover terms', 'Indemnity and representations clauses', 'Sub-Registrar appointment coordination'], process: [{ step: 'Title Review', detail: 'Verify parent documents, title chain, and encumbrance status.' }, { step: 'Terms Finalisation', detail: 'Confirm consideration, payment mode, handover date, and special conditions.' }, { step: 'Drafting', detail: 'Senior advocate drafts deed with comprehensive protective provisions.' }, { step: 'Execution', detail: 'Coordinate signing, stamp duty, and registration at Sub-Registrar office.' }], faqs: [{ q: 'What makes ARVISTA\'s deed drafting different?', a: 'Our deeds are drafted by advocates with 15+ years of High Court practice. They include comprehensive warranties, indemnities, and dispute prevention clauses rarely found in template deeds.' }, { q: 'Can the deed be drafted in Malayalam?', a: 'Yes. We draft in English, Malayalam, or bilingual formats as required for the Sub-Registrar jurisdiction.' }, { q: 'Is deed drafting included in the registration service?', a: 'Our property registration service includes basic deed drafting. Complex transactions with multiple sellers, conditions, or staged payments attract additional fees.' }], timeline: '3–5 working days', startingPrice: '₹4,999' },
    { slug: 'sale-agreement-preparation', name: 'Sale Agreement Preparation', desc: 'Earnest money terms, handover schedules & default remedies.', icon: 'handshake', heroSubtitle: 'PRE-SALE DOCUMENTATION', tagline: 'Binding pre-sale agreements with earnest money protection.', overview: 'A Sale Agreement (Agreement to Sell) is executed before the final Sale Deed to lock in terms, protect earnest money, and set timelines for completion. ARVISTA drafts comprehensive sale agreements covering advance payments, due diligence periods, title verification contingencies, default remedies, and timeline for execution of the final sale deed.', keyDeliverables: ['Sale Agreement drafting with earnest money terms', 'Advance payment receipt documentation', 'Due diligence period and contingency clauses', 'Timeline for title verification and final deed', 'Default and forfeiture clauses', 'Stamp duty and registration of agreement'], process: [{ step: 'Terms Discussion', detail: 'Negotiate and finalise sale price, advance amount, due diligence period, and completion timeline.' }, { step: 'Drafting', detail: 'Draft agreement with comprehensive terms, contingencies, and default remedies.' }, { step: 'Review', detail: 'Both parties review and negotiate final terms.' }, { step: 'Execution', detail: 'Sign with proper stamp duty and witness attestation. Register if required.' }], faqs: [{ q: 'Is a Sale Agreement the same as a Sale Deed?', a: 'No. An Agreement to Sell is a promise to transfer property in the future. A Sale Deed is the actual transfer document.' }, { q: 'Is stamp duty required on Sale Agreements?', a: 'Yes. Stamp duty is applicable on Sale Agreements, though rates may differ from Sale Deed stamp duty.' }, { q: 'What happens if the seller backs out?', a: 'The buyer can seek specific performance (court-ordered completion) or claim damages as per the agreement terms.' }], timeline: '2–5 working days', startingPrice: '₹3,499' },
    { slug: 'stamp-paper-franking', name: 'Stamp Paper & Franking', desc: 'E-stamp duty calculation, procurement & treasury authentication.', icon: 'receipt', heroSubtitle: 'STAMP DUTY', tagline: 'Accurate stamp duty calculation and e-stamp procurement.', overview: 'Stamp duty is payable on various legal documents — sale deeds, lease agreements, partnership deeds, MOUs, and affidavits. ARVISTA provides accurate stamp duty calculation based on current state tariffs, procures e-stamps from authorised Stock Holding Corporation of India outlets, and arranges franking where applicable.', keyDeliverables: ['Stamp duty calculation for all document types', 'E-stamp paper procurement', 'Franking service for high-value documents', 'Adjudication application for complex cases', 'Stamp duty refund applications', 'Deficiency stamp duty advice and rectification'], process: [{ step: 'Assessment', detail: 'Calculate stamp duty based on document type, consideration value, and state schedule rates.' }, { step: 'Procurement', detail: 'Obtain e-stamp certificates from authorised SHCIL centres.' }, { step: 'Verification', detail: 'Verify e-stamp authenticity through SHCIL online portal.' }, { step: 'Delivery', detail: 'Deliver authenticated e-stamps ready for document execution.' }], faqs: [{ q: 'What is e-stamp?', a: 'E-stamp is an electronic form of stamp duty payment through SHCIL (Stock Holding Corporation of India), replacing traditional stamp paper.' }, { q: 'Can I verify an e-stamp\'s authenticity?', a: 'Yes. Every e-stamp has a unique identification number that can be verified on the SHCIL portal.' }, { q: 'What is the penalty for insufficient stamp duty?', a: 'Documents with deficient stamp duty are inadmissible as evidence in court. The deficiency plus penalty (2–10x) must be paid for rectification.' }], timeline: '1–2 working days', startingPrice: '₹999' },
    { slug: 'title-verification', name: 'Title Verification (30+ Years)', desc: 'Chain of title investigation, lineage scrutiny & encumbrance checks.', icon: 'search', heroSubtitle: 'TITLE SEARCH', tagline: 'Exhaustive 30+ year title chain investigation for absolute certainty.', overview: 'ARVISTA conducts comprehensive title verification covering 30+ years of ownership history, including chain of title investigation, family lineage scrutiny, encumbrance certificate analysis, revenue record verification, court case searches, and government acquisition checks. This is essential before any high-value property purchase, mortgage, or investment.', keyDeliverables: ['30+ year chain of title investigation', 'Encumbrance certificate analysis (last 30 years)', 'Revenue record (thandapper/pahani) verification', 'Court case search (civil & criminal)', 'Government acquisition/notification check', 'Comprehensive Title Search Report'], process: [{ step: 'Document Collection', detail: 'Gather parent documents, survey numbers, and current ownership details.' }, { step: 'Sub-Registrar Search', detail: 'Physical search at Sub-Registrar office for all transactions on the property for 30+ years.' }, { step: 'Revenue & Court Records', detail: 'Verify revenue records and search for pending litigation or government notifications.' }, { step: 'Report', detail: 'Deliver comprehensive Title Search Report with clear opinion on marketability.' }], faqs: [{ q: 'Why 30 years?', a: 'Most banks require 30+ year searches for mortgage loans. Additionally, adverse possession claims can be raised for 12+ years of continuous possession, making longer searches essential.' }, { q: 'Is this different from an Encumbrance Certificate?', a: 'An EC only shows registered transactions. Title verification includes unregistered claims, revenue records, court cases, and government notifications that an EC does not capture.' }, { q: 'How is the report used?', a: 'Banks rely on this for mortgage approval. Buyers use it for due diligence. Investors use it for risk assessment before purchase.' }], timeline: '10–20 working days', startingPrice: '₹9,999' },
    { slug: 'encumbrance-certified-copies', name: 'Encumbrance & Certified Copies', desc: 'Nil Encumbrance Certificates (EC) & sub-registrar certified documents.', icon: 'verified', heroSubtitle: 'DOCUMENT PROCUREMENT', tagline: 'Official encumbrance certificates and certified document copies.', overview: 'ARVISTA procures Encumbrance Certificates (EC), certified copies of registered documents, and revenue extracts from Sub-Registrar offices and Village offices across Kerala. We handle both online applications and physical visits where manual search is required.', keyDeliverables: ['Encumbrance Certificate (EC) procurement', 'Nil Encumbrance Certificate for loan applications', 'Certified copies of registered documents', 'Revenue extracts and Thandapper copies', 'Land tax receipt procurement', 'Possession certificate from Village Office'], process: [{ step: 'Application', detail: 'Apply online or physically at the relevant Sub-Registrar/Village office.' }, { step: 'Search Period', detail: 'Specify search period (typically 15–30 years for bank requirements).' }, { step: 'Procurement', detail: 'Follow up and collect certificates/copies from the issuing office.' }, { step: 'Delivery', detail: 'Deliver authenticated documents with verification summary.' }], faqs: [{ q: 'How long is an EC valid?', a: 'An EC has no expiry but banks typically accept ECs issued within the last 3–6 months.' }, { q: 'Can I get EC for property in any district?', a: 'Yes. We procure ECs from Sub-Registrar offices across all districts in Kerala.' }, { q: 'What if an EC shows encumbrances?', a: 'We analyze the encumbrances and advise on their nature — whether they affect marketable title or are routine entries.' }], timeline: '5–15 working days', startingPrice: '₹1,999' },
    { slug: 'power-of-attorney', name: 'Power of Attorney & Notarization', desc: 'General & Special POA, consulate attestation & notary execution.', icon: 'assignment_ind', heroSubtitle: 'LEGAL AUTHORITY', tagline: 'Authorise representatives with legally binding Power of Attorney.', overview: 'ARVISTA drafts, notarizes, and registers Powers of Attorney — General Power of Attorney (GPA) for comprehensive representation and Special Power of Attorney (SPA) for specific transactions. We handle NRI POAs requiring consular attestation, apostille, and MEA authentication for use in India.', keyDeliverables: ['General Power of Attorney (GPA) drafting', 'Special Power of Attorney (SPA) drafting', 'Notarization and registration', 'NRI POA with consulate attestation', 'Apostille and MEA authentication', 'POA revocation and modification'], process: [{ step: 'Scope Definition', detail: 'Define powers to be granted, specific transactions, and duration of authority.' }, { step: 'Drafting', detail: 'Draft POA with precise powers, limitations, and revocation provisions.' }, { step: 'Execution', detail: 'Notarization, stamping, and registration at Sub-Registrar office.' }, { step: 'Authentication', detail: 'For NRI POAs — consular attestation, apostille, and MEA authentication.' }], faqs: [{ q: 'Can property be sold through a GPA?', a: 'A registered GPA can be used for property transactions, but the Supreme Court has held that GPA-based sales without a registered Sale Deed are not legally valid transfers.' }, { q: 'How do NRIs execute POA?', a: 'NRIs can execute POA before the Indian Consulate/Embassy in their country of residence, or before a notary public with apostille/MEA attestation.' }, { q: 'Can a POA be revoked?', a: 'Yes. The principal can revoke the POA at any time through a registered revocation deed.' }], timeline: '3–10 working days', startingPrice: '₹3,999' },
    { slug: 'legal-scrutiny-search-report', name: 'Legal Scrutiny & Search Report', desc: 'Exhaustive institutional property clearance reports for banks and funds.', icon: 'policy', heroSubtitle: 'LEGAL OPINION', tagline: 'Bank-grade property search reports by senior advocates.', overview: 'Legal Scrutiny Reports are formal legal opinions on property titles issued by senior advocates. These reports are required by banks for mortgage approval, by investors for due diligence, and by buyers for risk assessment. ARVISTA\'s reports are accepted by all major banks and financial institutions.', keyDeliverables: ['Formal Legal Opinion on property title', 'Title chain verification (30+ years)', 'Encumbrance analysis and risk assessment', 'Schedule of property with survey details', 'Bank-format Legal Scrutiny Report', 'Advocate-certified search report'], process: [{ step: 'Document Review', detail: 'Examine all title documents, agreements, and revenue records.' }, { step: 'Physical Search', detail: 'Conduct physical search at Sub-Registrar office and revenue offices.' }, { step: 'Legal Analysis', detail: 'Senior advocate analyses title chain, identifies risks, and forms legal opinion.' }, { step: 'Report Issuance', detail: 'Issue formal Legal Scrutiny Report with advocate seal and certification.' }], faqs: [{ q: 'Which banks accept your Legal Scrutiny Reports?', a: 'Our reports are accepted by SBI, HDFC, ICICI, Canara Bank, Federal Bank, South Indian Bank, and all major nationalised and private banks.' }, { q: 'Is this report mandatory for bank loans?', a: 'Yes. All banks require a Legal Scrutiny Report from an approved advocate before sanctioning property-backed loans.' }, { q: 'How is this different from Title Verification?', a: 'Title Verification is a factual search. Legal Scrutiny Report includes a formal legal opinion and certification by a senior advocate.' }], timeline: '10–15 working days', startingPrice: '₹7,999' },
    { slug: 'building-land-valuation', name: 'Building & Land Valuation', desc: 'Government-approved registered valuer reports for capital and loans.', icon: 'home_work', heroSubtitle: 'PROPERTY VALUATION', tagline: 'Government-approved valuation reports for banks, courts, and tax authorities.', overview: 'ARVISTA provides property valuation reports through government-approved registered valuers for bank loans, court proceedings, income tax assessments, company audits, and insurance claims. Valuations cover land, buildings, industrial plants, and commercial properties.', keyDeliverables: ['Fair market value determination', 'Government-approved valuer certification', 'Bank-format valuation report', 'Insurance valuation assessment', 'Court-directed valuation compliance', 'Income tax Section 50C valuation support'], process: [{ step: 'Property Inspection', detail: 'Registered valuer conducts physical site inspection and measurement.' }, { step: 'Market Analysis', detail: 'Research comparable sales, guideline values, and market trends in the area.' }, { step: 'Valuation', detail: 'Apply appropriate valuation methodology — market approach, cost approach, or income approach.' }, { step: 'Report', detail: 'Issue certified valuation report in the format required by the requesting authority.' }], faqs: [{ q: 'Who are registered valuers?', a: 'Valuers registered with the Insolvency and Bankruptcy Board of India (IBBI) under the Companies (Registered Valuers and Valuation) Rules.' }, { q: 'Is valuation mandatory for property transactions?', a: 'Not always, but it is required for bank loans, insurance claims, income tax assessments (capital gains), and company balance sheet reporting.' }, { q: 'What is the guideline value?', a: 'The minimum value set by the government for stamp duty calculation. Market value is typically higher than guideline value.' }], timeline: '7–15 working days', startingPrice: '₹5,999' },
    { slug: 'land-data-bank-conversion', name: 'Land & Data Bank Conversion', desc: 'Kerala Conservation of Paddy Land & Wetland Act Form 5, 6, 7 & 9 filings.', icon: 'landscape', heroSubtitle: 'LAND CONVERSION', tagline: 'Statutory conversion of paddy land and wetland for development.', overview: 'In Kerala, converting paddy land or wetland for non-agricultural purposes requires specific approvals under the Kerala Conservation of Paddy Land and Wetland Act, 2008. ARVISTA handles Form 5 (application for conversion), Form 6 (exemption), Form 7 (data bank addition), and Form 9 (reclamation of wetland) applications with the Revenue Department.', keyDeliverables: ['Form 5 conversion application filing', 'Form 6 exemption application', 'Form 7 data bank inclusion application', 'Form 9 wetland reclamation application', 'Revenue Department liaison', 'RDO/Collector hearing representation'], process: [{ step: 'Land Classification', detail: 'Determine current classification — paddy land, wetland, or data bank — from revenue records.' }, { step: 'Application Preparation', detail: 'Prepare application with survey sketch, adjacent land details, and intended purpose documentation.' }, { step: 'Filing', detail: 'Submit application with Revenue Department and pay applicable fees.' }, { step: 'Follow-up', detail: 'Attend hearings, respond to queries, and obtain conversion/exemption order.' }], faqs: [{ q: 'Can all paddy land be converted?', a: 'No. Conversion is permitted only for specific purposes and is subject to Local Self-Government and Revenue Department approval.' }, { q: 'What is the data bank?', a: 'The data bank is a registry of paddy land and wetland maintained by the government. Land in the data bank has stricter conversion restrictions.' }, { q: 'How long does conversion approval take?', a: 'Typically 6–12 months depending on the type of application and jurisdictional clearances required.' }], timeline: '6–12 months', startingPrice: '₹14,999' }
  ],
  liaison: [
    { slug: 'certificate-correction', name: 'Certificate Correction', desc: 'Birth, educational, marriage & legal heir records rectification.', icon: 'edit_note', heroSubtitle: 'RECORD CORRECTION', tagline: 'Official corrections to vital records and government certificates.', overview: 'ARVISTA handles corrections in birth certificates, educational certificates, marriage certificates, passport, Aadhaar, and legal heir certificates. We liaise with the relevant issuing authorities — municipalities, universities, Registrar of Marriages, and passport offices — to process corrections efficiently.', keyDeliverables: ['Birth certificate name/date correction', 'Educational certificate correction (University)', 'Marriage certificate correction', 'Aadhaar card correction', 'Passport name/date of birth correction', 'Legal Heir Certificate procurement', 'Gazette notification for name change'], process: [{ step: 'Document Review', detail: 'Review the error, supporting documents, and identify the issuing authority.' }, { step: 'Application', detail: 'Prepare and submit correction application with supporting evidence.' }, { step: 'Follow-up', detail: 'Liaise with the authority, attend hearings if required, and track progress.' }, { step: 'Delivery', detail: 'Procure and deliver corrected certificate/document.' }], faqs: [{ q: 'How long does a birth certificate correction take?', a: 'Simple spelling corrections take 15–30 days. Date of birth changes may require court order and take 2–3 months.' }, { q: 'Is a Gazette notification mandatory for name change?', a: 'For passport changes, both Gazette notification and newspaper publication are mandatory. For other purposes, it varies.' }, { q: 'Can educational certificates be corrected after many years?', a: 'Yes. Universities and boards accept correction applications regardless of the year of passing, with proper supporting documents.' }], timeline: '15–90 working days', startingPrice: '₹2,999' },
    { slug: 'vehicle-mvd-compliance', name: 'Vehicle / MVD Compliance', desc: 'Interstate transfers, commercial fleet registrations, NOCs & permits.', icon: 'directions_car', heroSubtitle: 'VEHICLE REGISTRATION', tagline: 'Complete motor vehicle department compliance and liaison.', overview: 'ARVISTA handles all Motor Vehicle Department (MVD) related matters including vehicle registration transfers, interstate NOCs, commercial vehicle permits, fitness certificates, hypothecation addition/removal, and address changes. We have liaison capability across all Kerala RTOs and inter-state coordination for vehicle transfers.', keyDeliverables: ['Vehicle ownership transfer', 'Interstate NOC procurement and cancellation', 'Commercial vehicle permit applications', 'Fitness certificate renewal', 'Hypothecation addition/removal', 'Address/name change in RC', 'Insurance transfer coordination'], process: [{ step: 'Requirement Assessment', detail: 'Identify specific MVD service needed and gather required documents.' }, { step: 'Application Preparation', detail: 'Complete relevant forms and compile supporting documents.' }, { step: 'RTO Filing', detail: 'Submit applications at the jurisdictional RTO.' }, { step: 'Follow-up & Delivery', detail: 'Track application, attend inspections if needed, and deliver updated documents.' }], faqs: [{ q: 'How long does interstate vehicle transfer take?', a: 'Typically 30–45 days including NOC issuance, re-registration, and new RC delivery.' }, { q: 'Can ARVISTA handle transfers in other states?', a: 'We coordinate with RTOs across India for NOC procurement and have partner networks in major states.' }, { q: 'Is fitness certificate different from insurance?', a: 'Yes. Fitness certificate is a government-mandated roadworthiness check for commercial vehicles. Insurance is a financial protection product.' }], timeline: '7–45 working days', startingPrice: '₹2,499' },
    { slug: 'insurance-support-claims', name: 'Insurance Support & Claims', desc: 'Commercial property, transit coverage & contested claim advocacy.', icon: 'shield', heroSubtitle: 'INSURANCE ADVISORY', tagline: 'Strategic insurance placement and contested claim resolution.', overview: 'ARVISTA provides insurance advisory for commercial property, industrial equipment, professional liability, transit/marine cargo, and group health policies. We also handle contested claim advocacy, documentation preparation, surveyor coordination, and Insurance Ombudsman complaints for disputed or delayed claims.', keyDeliverables: ['Commercial insurance advisory and placement', 'Claim documentation preparation', 'Surveyor/loss assessor coordination', 'Contested claim advocacy', 'Insurance Ombudsman complaint filing', 'Policy review and gap analysis'], process: [{ step: 'Risk Assessment', detail: 'Analyse your business risks and existing coverage gaps.' }, { step: 'Policy Placement', detail: 'Recommend and place optimal coverage through insurer network.' }, { step: 'Claim Support', detail: 'Prepare documentation, coordinate with surveyor, and negotiate with insurer.' }, { step: 'Dispute Resolution', detail: 'Escalate to Insurance Ombudsman or Consumer Forum for disputed claims.' }], faqs: [{ q: 'Does ARVISTA sell insurance?', a: 'We provide advisory and facilitate placement through licensed brokers and agents. Our primary value is in claim advocacy and dispute resolution.' }, { q: 'What is the Insurance Ombudsman?', a: 'An independent grievance redressal authority that resolves insurance complaints up to ₹30 lakh without legal costs.' }, { q: 'Can you help with rejected health insurance claims?', a: 'Yes. We review rejection reasons, prepare counter-documentation, and file appeals/complaints as appropriate.' }], timeline: '30–120 working days', startingPrice: '₹4,999' },
    { slug: 'passport-consular-works', name: 'Passport & Consular Works', desc: 'MEA apostille, police clearance certificates (PCC) & embassy attestation.', icon: 'flight', heroSubtitle: 'CONSULAR SERVICES', tagline: 'Passport processing, apostille, and international document authentication.', overview: 'ARVISTA handles passport applications (fresh, renewal, tatkal), Police Clearance Certificates, MEA apostille, embassy/consulate attestation, and HRD attestation for educational documents. We have dedicated representation at the Regional Passport Office and MEA authentication centres.', keyDeliverables: ['Passport application (fresh/renewal/tatkal)', 'Police Clearance Certificate (PCC) procurement', 'MEA Apostille for international documents', 'Embassy/Consulate attestation', 'HRD attestation for educational certificates', 'ECR/ECNR stamp conversion', 'Name/address change in passport'], process: [{ step: 'Document Preparation', detail: 'Compile required documents based on passport service type.' }, { step: 'Application Filing', detail: 'Submit online application and book appointment at PSK/RPO.' }, { step: 'Police Verification', detail: 'Coordinate police verification process and resolve any delays.' }, { step: 'Delivery', detail: 'Track application and ensure timely delivery of passport/PCC.' }], faqs: [{ q: 'How long does a tatkal passport take?', a: 'Typically 3–5 working days from appointment date, subject to police verification completion.' }, { q: 'What is apostille?', a: 'Apostille is a form of document authentication recognized in 124+ countries under the Hague Convention. It certifies the document\'s authenticity for international use.' }, { q: 'Is PCC required for all countries?', a: 'Most countries require PCC for work visas, permanent residency, and immigration applications. Tourist visas generally do not require PCC.' }], timeline: '7–30 working days', startingPrice: '₹2,999' },
    { slug: 'panchayath-municipal-licences', name: 'Panchayath & Municipal Licences', desc: 'Building occupancy, commercial D&O permits & zoning approvals.', icon: 'location_city', heroSubtitle: 'LOCAL GOVERNMENT', tagline: 'Complete local body licensing and building compliance.', overview: 'ARVISTA handles all Panchayat and Municipal Corporation licensing including building permits, occupancy certificates, commercial D&O (Dangerous & Offensive) trade permits, signage permissions, and zoning compliance certificates. We maintain direct liaison with local body officials across Kerala.', keyDeliverables: ['Building permit application', 'Occupancy certificate procurement', 'D&O trade license', 'Building number allotment', 'Commercial zoning verification', 'Signage and advertisement permits', 'Building tax assessment'], process: [{ step: 'Compliance Check', detail: 'Verify building plan approval, completion status, and applicable licensing requirements.' }, { step: 'Application', detail: 'Prepare and submit applications with building plans, ownership documents, and NOCs.' }, { step: 'Inspection', detail: 'Coordinate with local body officials for site inspection and compliance verification.' }, { step: 'License Delivery', detail: 'Procure approved licenses, occupancy certificates, and building numbers.' }], faqs: [{ q: 'Can commercial activity start before occupancy certificate?', a: 'No. Operating a commercial establishment without a valid occupancy certificate can result in penalties and seal orders.' }, { q: 'What is a D&O permit?', a: 'A Dangerous & Offensive trade permit is required for businesses involving chemicals, inflammable materials, noise, emissions, or other hazardous activities.' }, { q: 'Do all buildings need building numbers?', a: 'Yes. All buildings must obtain a building number from the local body for postal address, utility connections, and tax purposes.' }], timeline: '15–45 working days', startingPrice: '₹4,999' },
    { slug: 'investment-safety-report', name: 'Investment Safety Report', desc: 'Quasi-judicial verification before enterprise land or equity purchase.', icon: 'security', heroSubtitle: 'INVESTMENT DUE DILIGENCE', tagline: 'Comprehensive risk verification before high-value investments.', overview: 'Before committing capital to property, business, or equity investments, ARVISTA provides comprehensive Investment Safety Reports covering title verification, regulatory compliance, litigation history, promoter background, financial health assessment, and market risk analysis. This report protects investors from hidden risks and potential losses.', keyDeliverables: ['Property title chain verification', 'Litigation and court case search', 'Regulatory compliance verification', 'Promoter/partner background check', 'Financial health assessment', 'Market and location risk analysis', 'Comprehensive Investment Safety Report'], process: [{ step: 'Investment Brief', detail: 'Understand the proposed investment — property, business, or equity — and its key parameters.' }, { step: 'Multi-Track Investigation', detail: 'Conduct parallel searches across revenue offices, courts, regulatory authorities, and financial databases.' }, { step: 'Analysis', detail: 'Analyse findings, assess risk levels, and form independent opinion on investment safety.' }, { step: 'Report & Advisory', detail: 'Deliver comprehensive report with risk ratings, red flags, and proceed/caution recommendation.' }], faqs: [{ q: 'Is this suitable for NRI property investors?', a: 'Absolutely. This is our most popular service among NRI clients purchasing property or investing in businesses in Kerala remotely.' }, { q: 'What types of investments do you cover?', a: 'Land/property purchases, business acquisitions, equity investments, joint ventures, and franchise investments.' }, { q: 'How independent is the report?', a: 'We provide completely independent assessments. We do not take commissions from sellers, agents, or promoters. Our fee is solely from the investor.' }], timeline: '15–30 working days', startingPrice: '₹14,999' },
    { slug: 'local-quasi-judicial-authorities', name: 'Local & Quasi-Judicial Authorities', desc: 'Revenue Divisional Office (RDO), Collectorate hearings & tribunal appearances.', icon: 'account_balance', heroSubtitle: 'GOVERNMENT LIAISON', tagline: 'Professional representation before government and quasi-judicial bodies.', overview: 'ARVISTA provides professional representation before Revenue Divisional Officers (RDO), District Collectors, Tahsildars, Taluk Land Boards, Village Tribunals, and other quasi-judicial authorities. We handle land disputes, revenue proceedings, ceiling land matters, and administrative hearings with experienced field advocates.', keyDeliverables: ['RDO hearing representation', 'Collector/ADM representation', 'Tahsildar/Village Officer liaison', 'Land Tribunal hearing support', 'Revenue court petition filing', 'Government order compliance coordination'], process: [{ step: 'Case Review', detail: 'Review pending matters, hearing notices, and government communications.' }, { step: 'Strategy', detail: 'Develop representation strategy and prepare petition/counter-statement.' }, { step: 'Hearing', detail: 'Attend hearings with experienced revenue law practitioner.' }, { step: 'Order Compliance', detail: 'Ensure compliance with orders and advise on appeal options if needed.' }], faqs: [{ q: 'Which authorities do you represent before?', a: 'RDO, ADM, District Collector, Tahsildar, Village Officer, Land Tribunal, Rent Control Court, and other quasi-judicial bodies.' }, { q: 'Is this different from court representation?', a: 'Yes. Quasi-judicial authorities follow administrative procedures, not formal court procedures. Our specialists are experienced in administrative law practice.' }, { q: 'Can revenue court orders be appealed?', a: 'Yes. Orders of Tahsildar can be appealed to RDO, then to Collector, and ultimately to Revenue Court or High Court through writ petitions.' }], timeline: 'Case-dependent', startingPrice: '₹4,999' },
    { slug: 'railway-metro-noc', name: 'Railway & Kochi Metro NOC', desc: 'Perimeter structural clearances, utility crossing sanctions & access permissions.', icon: 'train', heroSubtitle: 'INFRASTRUCTURE NOC', tagline: 'NOCs from Railways and Metro for construction near infrastructure corridors.', overview: 'Construction activities within specified distances of railway tracks, Kochi Metro alignment, and other infrastructure corridors require No Objection Certificates from the respective authorities. ARVISTA handles NOC applications with Indian Railways (Southern Railway), Kochi Metro Rail Ltd (KMRL), and NHAI for buildings, utility crossings, and access roads.', keyDeliverables: ['Railway NOC for construction near tracks', 'Kochi Metro NOC for alignment proximity', 'NHAI NOC for highway proximity construction', 'Utility crossing permissions (water, sewer, cable)', 'Building height clearance certifications', 'Access road permissions from infrastructure authorities'], process: [{ step: 'Proximity Assessment', detail: 'Determine distance from railway/metro alignment and applicable clearance requirements.' }, { step: 'Application Preparation', detail: 'Prepare application with building plans, site plans, and structural details.' }, { step: 'Filing', detail: 'Submit application at the relevant Division/Zone office with all documentation.' }, { step: 'Follow-up', detail: 'Attend site inspections, respond to queries, and obtain NOC.' }], faqs: [{ q: 'What is the railway buffer zone?', a: 'Generally 30 metres from the outermost track for building construction, but varies based on the type of construction and railway category.' }, { q: 'Is Metro NOC required for all buildings near the Metro?', a: 'Buildings within 20 metres of the Metro alignment require NOC from KMRL. The distance varies by type of construction.' }, { q: 'How long does Railway NOC take?', a: 'Typically 30–60 days from application, depending on the Division Engineer\'s processing timeline.' }], timeline: '30–60 working days', startingPrice: '₹7,999' },
    { slug: 'statutory-newspaper-publication', name: 'Statutory Newspaper Publication', desc: 'State & Central Gazette disclosures, loss of documents & legal notices.', icon: 'newspaper', heroSubtitle: 'LEGAL PUBLICATION', tagline: 'Official gazette notifications and statutory newspaper publications.', overview: 'Certain legal procedures require mandatory newspaper publication — name changes, company name changes, loss of documents, public notices, legal heir declarations, and regulatory notifications. ARVISTA handles publications in the Kerala State Gazette, Central Gazette, and leading newspapers (both English and Malayalam) with proper legal drafting.', keyDeliverables: ['Kerala State Gazette notification', 'Central Government Gazette publication', 'Newspaper publication (English & Malayalam)', 'Legal notice drafting and publication', 'Loss of document notice', 'Name change notification', 'Company name change publication'], process: [{ step: 'Notice Drafting', detail: 'Draft the legal notice with proper format, content, and disclaimers as required by law.' }, { step: 'Publication', detail: 'Arrange publication in prescribed newspapers/gazette within required timelines.' }, { step: 'Documentation', detail: 'Collect published newspaper copies and gazette notifications as evidence.' }, { step: 'Delivery', detail: 'Deliver certified copies of published notices for your records and legal proceedings.' }], faqs: [{ q: 'Which newspapers are acceptable for legal notices?', a: 'It depends on the purpose. Courts and authorities typically require one English and one regional language newspaper with specified circulation. We use established publications.' }, { q: 'How quickly can a notice be published?', a: 'Newspaper notices can be published within 2–3 days. Gazette notifications take 15–30 days.' }, { q: 'Is Gazette notification mandatory for name change?', a: 'Yes. For passport changes and official record amendments, both Gazette notification and newspaper publication are required.' }], timeline: '3–30 working days', startingPrice: '₹1,999' }
  ]
};

// Helper to get a flat array of all services
export function getAllServices() {
  return Object.entries(servicesData).flatMap(([categoryId, services]) =>
    services.map(s => ({ ...s, categoryId }))
  );
}

// Helper to find a service by slug
export function getServiceBySlug(slug) {
  for (const [categoryId, services] of Object.entries(servicesData)) {
    const found = services.find(s => s.slug === slug);
    if (found) return { ...found, categoryId };
  }
  return null;
}

// Helper to get category info
export function getCategoryById(id) {
  return serviceCategories.find(c => c.id === id);
}
