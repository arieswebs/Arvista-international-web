import { useState } from 'react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "What is the typical timeline for private limited company incorporation?",
      a: "Once name approval and statutory KYC credentials (PAN, address verification, and Class 3 DSC tokens) are verified, incorporation through MCA SPICe+ typically concludes in 4 to 7 working days, resulting in immediate issuance of the Certificate of Incorporation (COI), PAN, and TAN."
    },
    {
      q: "What documents are mandatory for initial corporate consultation?",
      a: "For our preliminary advisory diagnostic, no sensitive corporate documents are immediately required. A concise brief detailing your proposed corporate structure, registered operational locality, and intended line of commerce allows our partners to formulate the initial compliance blueprint."
    },
    {
      q: "Can ARVISTA manage multi-departmental clearances concurrently?",
      a: "Yes. Our structure allows parallel workflows: our chartered accountants process GST and MCA documentation simultaneously while our senior field advocates engage with the Pollution Control Board, Fire & Rescue Services, and Municipal Corporations, significantly reducing total commissioning lag."
    },
    {
      q: "Do you support cross-border entities and Non-Resident Indian (NRI) setups?",
      a: "We maintain dedicated foreign advisory desks assisting international corporations and NRI directors. This includes Indian consular attestations, MEA apostilles, Special Power of Attorney drafting, RBI FEMA reporting, and overseas subsidiary incorporations."
    },
    {
      q: "How does ARVISTA safeguard confidential business plans and trade secrets?",
      a: "All client engagements are governed by rigorous bilateral Non-Disclosure Agreements prior to file intake. Case files are archived in encrypted private repositories with role-restricted access, adhering to ISO 27001 data governance standards and advocate-client privilege protections."
    }
  ];

  return (
    <section className="bg-white py-24 sm:py-28" id="faq">
      <div className="max-w-[880px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#B8985A]"></span>
            <span className="text-[11px] tracking-[0.28em] text-[#B8985A] uppercase font-semibold">CLIENT INQUIRIES</span>
            <span className="w-6 h-[1px] bg-[#B8985A]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl text-[#0B1F3A] font-semibold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-subtle font-light">Clarity on statutory timelines, mandatory compliance, and our engagement terms.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div className="bg-[#F7F5F0] border border-[#E7E2D8] p-5 sm:p-6 transition-all" key={idx}>
              <button 
                className="w-full flex items-center justify-between text-left focus:outline-none" 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-cinzel text-base sm:text-lg text-[#0B1F3A] font-medium pr-4">{faq.q}</span>
                <span className={`material-symbols-outlined text-[#B8985A] text-[24px] shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              
              {openIdx === idx && (
                <div className="mt-4 pt-4 border-t border-[#E5E0D5] text-xs sm:text-sm text-slate-subtle font-light leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
