import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT US', href: '#why-arvista' },
    { name: 'SERVICES', href: '#services-explorer' },
    { name: 'CAREERS', href: '#careers' },
    { name: 'BLOGS', href: '#blogs' },
    { name: 'FAQS', href: '#faq' },
    { name: 'CONTACT US', href: '#consultation-desk' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] bg-[#F7F5F0]/95 backdrop-blur-xl border-b border-[#E5E0D5]/80 shadow-[0_4px_30px_rgba(0,0,0,0.04)] transition-all duration-500">
        
        {/* Desktop: Extreme Right Button */}
        <div className="hidden lg:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 items-center z-50">
          <a className="inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 border border-[#B8985A] bg-transparent text-[#0B1F3A] hover:bg-[#B8985A] hover:text-white text-[11px] sm:text-xs uppercase tracking-widest rounded-[2px] transition-all duration-300 font-semibold whitespace-nowrap font-montserrat shadow-sm hover:shadow-lg hover:-translate-y-0.5" href="#consultation-desk">
            Book a Consultation
          </a>
        </div>

        {/* Mobile: Hamburger Button */}
        <button 
          className="lg:hidden absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[110] p-2 text-[#0B1F3A] transition-transform duration-300 active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
             <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
             <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          )}
        </button>

        {/* Centered Navigation (Desktop) */}
        <div className="max-w-[1280px] mx-auto px-6 h-16 sm:h-20 lg:h-24 flex items-center justify-center">
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 font-montserrat">
            {navLinks.map((link, idx) => (
              <a key={idx} className="group relative text-[10px] xl:text-xs tracking-[0.18em] xl:tracking-[0.2em] uppercase text-[#0B1F3A]/85 hover:text-[#0B1F3A] font-semibold transition-colors duration-300 py-2" href={link.href}>
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#B8985A] transition-all duration-300 ease-out group-hover:w-full rounded-full opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed top-0 left-0 w-full h-[100dvh] bg-[#F7F5F0] z-[105] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col pt-24 pb-8 px-6 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8 overflow-y-auto">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`text-sm sm:text-base tracking-[0.25em] uppercase text-[#0B1F3A] font-bold transition-all duration-500 delay-[${idx * 50}ms] ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
                href={link.href}
              >
                {link.name}
              </a>
            ))}
            
            <div className={`mt-4 w-full flex flex-col items-center transition-all duration-500 delay-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-12 h-[1px] bg-[#E5E0D5] mb-8"></span>
              <a 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#B8985A] bg-[#B8985A] text-white text-[11px] uppercase tracking-[0.2em] rounded-[2px] font-bold whitespace-nowrap font-montserrat w-full max-w-[280px] shadow-lg active:scale-95 transition-transform" 
                href="#consultation-desk"
              >
                Book a Consultation
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Invisible placeholder to maintain document flow */}
      <div className="h-16 sm:h-20 lg:h-24 w-full shrink-0 bg-[#0B1F3A]"></div>
    </>
  )
}
