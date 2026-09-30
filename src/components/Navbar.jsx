import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { serviceCategories, servicesData } from '../data/services';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('business');
  const [mobileExpandedCat, setMobileExpandedCat] = useState(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const megaMenuRef = useRef(null);
  const servicesBtnRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Open mega menu and cancel pending close
  const openMegaMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  // Close mega menu after short delay so user can smoothly move cursor from nav to menu
  const closeMegaMenuWithDelay = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 220);
  };

  // Close mega menu immediately (e.g. when hovering other nav links)
  const closeMegaMenuImmediately = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(false);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

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

  // Close mega menu on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMegaMenuOpen &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target) &&
        servicesBtnRef.current &&
        !servicesBtnRef.current.contains(event.target)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMegaMenuOpen(false);
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMegaMenuOpen]);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/#core-pillars', isServices: true },
    { name: 'CAREERS', href: '/careers' },
    { name: 'BLOGS', href: '/blogs' },
    { name: 'FAQS', href: '/#faq' },
    { name: 'CONTACT US', href: '/#consultation-desk' }
  ];

  // For hash links on the home page, use regular <a> to enable smooth scroll;
  // for navigation from other pages, use <Link> so React Router handles the transition
  const NavAnchor = ({ href, children, className, onClick, onMouseEnter }) => {
    if (isHome && href.startsWith('/#')) {
      return (
        <a 
          href={href.replace('/', '')} 
          className={className} 
          onClick={onClick}
          onMouseEnter={onMouseEnter}
        >
          {children}
        </a>
      );
    }
    return (
      <Link 
        to={href} 
        className={className} 
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        {children}
      </Link>
    );
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsMegaMenuOpen((prev) => !prev);
  };

  const currentCategoryData = serviceCategories.find((c) => c.id === activeCategory);
  const activeServicesList = servicesData[activeCategory] || [];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] border-b border-[#E5E0D5]/80 shadow-[0_4px_30px_rgba(0,0,0,0.04)] transition-all duration-300 ${
        isMegaMenuOpen ? 'bg-[#F7F5F0]' : 'bg-[#F7F5F0]/95 backdrop-blur-xl'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 lg:h-24 flex items-center justify-between">
          
          {/* Brand Logo (Left) */}
          <Link 
            to="/" 
            onMouseEnter={closeMegaMenuImmediately}
            onClick={() => setIsMegaMenuOpen(false)}
            className="flex items-center shrink-0 z-50 group"
          >
            <img 
              src="/ArvistaPNGUP.png?v=3" 
              alt="ARVISTA INTERNATIONAL" 
              className="h-7 sm:h-8 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation (Centered) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 font-montserrat">
            {navLinks.map((link, idx) => {
              if (link.isServices) {
                return (
                  <button
                    key={idx}
                    ref={servicesBtnRef}
                    type="button"
                    onClick={handleServicesClick}
                    onMouseEnter={openMegaMenu}
                    onMouseLeave={closeMegaMenuWithDelay}
                    aria-expanded={isMegaMenuOpen}
                    aria-haspopup="true"
                    className={`group relative text-[10px] xl:text-xs tracking-[0.18em] xl:tracking-[0.2em] uppercase font-semibold transition-colors duration-300 py-2 inline-flex items-center gap-1 cursor-pointer ${
                      isMegaMenuOpen ? 'text-[#B8985A]' : 'text-[#0B1F3A]/85 hover:text-[#0B1F3A]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span 
                      className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${
                        isMegaMenuOpen ? 'rotate-180 text-[#B8985A]' : 'text-[#0B1F3A]/50 group-hover:text-[#0B1F3A]'
                      }`}
                    >
                      expand_more
                    </span>
                    <span 
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-[#B8985A] transition-all duration-300 ease-out rounded-full ${
                        isMegaMenuOpen ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    ></span>
                  </button>
                );
              }

              return (
                <NavAnchor 
                  key={idx} 
                  href={link.href} 
                  onMouseEnter={closeMegaMenuImmediately}
                  onClick={() => setIsMegaMenuOpen(false)}
                  className="group relative text-[10px] xl:text-xs tracking-[0.18em] xl:tracking-[0.2em] uppercase text-[#0B1F3A]/85 hover:text-[#0B1F3A] font-semibold transition-colors duration-300 py-2"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#B8985A] transition-all duration-300 ease-out group-hover:w-full rounded-full opacity-0 group-hover:opacity-100"></span>
                </NavAnchor>
              );
            })}
          </nav>

          {/* Right Action & Mobile Controls */}
          <div className="flex items-center gap-4">
            <div 
              className="hidden lg:flex items-center"
              onMouseEnter={closeMegaMenuImmediately}
            >
              <NavAnchor 
                href="/#consultation-desk" 
                onClick={() => setIsMegaMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border border-[#B8985A] bg-[#B8985A] text-white hover:bg-[#9a7e48] hover:border-[#9a7e48] text-[11px] sm:text-xs uppercase tracking-widest rounded-[2px] transition-all duration-300 font-semibold whitespace-nowrap font-montserrat shadow-sm hover:shadow-lg hover:-translate-y-0.5"
              >
                Book a Consultation
              </NavAnchor>
            </div>

            {/* Mobile: Hamburger Button */}
            <button 
              className="lg:hidden p-2 text-[#0B1F3A] transition-transform duration-300 active:scale-95 z-[110]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                 <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                 <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* DESKTOP MEGA MENU DROPDOWN — LUXURY INSTITUTIONAL ADVISORY PAVILION       */}
      {/* ========================================================================= */}
        <div 
          ref={megaMenuRef}
          onMouseEnter={openMegaMenu}
          onMouseLeave={closeMegaMenuWithDelay}
          style={{ backgroundColor: '#FAF8F4' }}
          className={`hidden lg:block fixed top-16 sm:top-20 lg:top-24 left-0 w-full z-[120] border-t-2 border-[#B8985A] border-b border-[#E6E0D5] shadow-[0_35px_80px_rgba(11,31,58,0.35)] transition-all duration-300 ease-out origin-top ${
            isMegaMenuOpen 
              ? 'opacity-100 translate-y-0 visible pointer-events-auto' 
              : 'opacity-0 -translate-y-3 invisible pointer-events-none'
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-6 xl:px-10 pt-6 pb-5">
            
            {/* Split Master-Detail Layout */}
            <div className="flex items-stretch gap-6 xl:gap-8 min-h-[460px]">
              
              {/* Left Column: Practice Divisions Selector */}
              <div className="w-[300px] xl:w-[330px] shrink-0 flex flex-col justify-between border-r border-[#EAE4D8] pr-5 xl:pr-6">
                <div>
                  {/* Section Title */}
                  <div className="flex items-center justify-between pb-3 mb-2.5 border-b border-[#E8E2D4]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>
                      <span className="text-[10.5px] font-bold tracking-[0.25em] text-[#0B1F3A] uppercase font-montserrat">
                        Practice Divisions
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8985A] font-semibold">
                      06 Areas
                    </span>
                  </div>

                  {/* Vertical List of Practice Divisions */}
                  <div className="flex flex-col gap-1">
                    {serviceCategories.map((category) => {
                      const count = servicesData[category.id]?.length || 0;
                      const isActive = activeCategory === category.id;
                      return (
                        <button
                          key={category.id}
                          type="button"
                          onMouseEnter={() => setActiveCategory(category.id)}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full text-left py-2.5 px-3 rounded-[2px] transition-all duration-200 cursor-pointer relative group flex items-center justify-between ${
                            isActive
                              ? 'bg-[#0B1F3A] text-white shadow-md'
                              : 'text-[#0B1F3A] hover:bg-[#F4EFE6]/80'
                          }`}
                        >
                          {/* Left Accent Bar for Active State */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#B8985A]" />
                          )}

                          <div className="flex items-center gap-3 min-w-0 pr-2">
                            <span className={`material-symbols-outlined text-[19px] shrink-0 transition-colors ${
                              isActive ? 'text-[#B8985A]' : 'text-[#B8985A]/80 group-hover:text-[#B8985A]'
                            }`}>
                              {category.icon}
                            </span>
                            <div className="min-w-0">
                              <h4 className={`text-xs xl:text-[13px] font-cinzel font-semibold tracking-wide truncate ${
                                isActive ? 'text-white' : 'text-[#0B1F3A] group-hover:text-[#0B1F3A]'
                              }`}>
                                {category.label}
                              </h4>
                              <p className={`text-[10px] leading-tight truncate transition-colors ${
                                isActive ? 'text-[#B8985A]' : 'text-slate-subtle'
                              }`}>
                                {category.tagline}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-[2px] ${
                              isActive ? 'bg-[#16335C] text-[#B8985A]' : 'bg-[#EAE4D8]/70 text-[#0B1F3A]/70'
                            }`}>
                              {count}
                            </span>
                            <span className={`material-symbols-outlined text-[15px] transition-transform duration-200 ${
                              isActive ? 'text-[#B8985A] translate-x-0.5' : 'text-transparent group-hover:text-[#0B1F3A]/30'
                            }`}>
                              chevron_right
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Directory Link at bottom of left column */}
                <div className="pt-3 border-t border-[#E8E2D4]">
                  <NavAnchor
                    href="/#core-pillars"
                    onClick={() => setIsMegaMenuOpen(false)}
                    className="w-full py-2 px-2 text-[10.5px] uppercase tracking-wider font-semibold text-[#0B1F3A] hover:text-[#B8985A] transition-colors flex items-center justify-between group"
                  >
                    <span>Strategic Practice Matrix</span>
                    <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform text-[#B8985A]">
                      arrow_forward
                    </span>
                  </NavAnchor>
                </div>
              </div>

              {/* Center Panel: Services Display for the Hovered Main Service */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  {/* Active Practice Header Bar */}
                  <div className="flex items-start justify-between gap-4 pb-3.5 mb-3.5 border-b border-[#E8E2D4]">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#B8985A] font-semibold">
                          DIVISION 0{serviceCategories.findIndex((c) => c.id === activeCategory) + 1} OF 06
                        </span>
                        <span className="text-[#0B1F3A]/25">•</span>
                        <span className="text-[10px] uppercase tracking-wider text-[#0B1F3A]/70 font-medium">
                          {activeServicesList.length} Statutory Clearances & Practices
                        </span>
                      </div>
                      <h3 className="font-cinzel text-lg xl:text-xl font-bold text-[#0B1F3A] tracking-wide">
                        {currentCategoryData?.label}
                      </h3>
                      <p className="text-xs text-slate-subtle mt-0.5 max-w-xl font-light leading-relaxed">
                        {currentCategoryData?.description}
                      </p>
                    </div>

                    <NavAnchor
                      href="/#consultation-desk"
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="hidden xl:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#B8985A] hover:text-[#9a7e48] transition-colors group shrink-0 pt-1"
                    >
                      <span>Inquire Practice</span>
                      <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </NavAnchor>
                  </div>

                  {/* Refined Services Grid (Clean 2-Column Editorial Layout) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 max-h-[46vh] overflow-y-auto pr-3 pb-2 mega-menu-scroll">
                    {activeServicesList.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="group relative flex items-start gap-2.5 p-2 rounded-[2px] bg-white/70 hover:bg-white border border-[#EDE8E0] hover:border-[#B8985A]/70 shadow-[0_1px_2px_rgba(0,0,0,0.015)] hover:shadow-md transition-all duration-200"
                      >
                        <span className="material-symbols-outlined text-[16px] text-[#B8985A] mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                          {service.icon || 'check_circle'}
                        </span>
                        <div className="flex-1 min-w-0 pr-1">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="text-[12.5px] font-semibold text-[#0B1F3A] group-hover:text-[#B8985A] transition-colors truncate">
                              {service.name}
                            </h4>
                            <span className="material-symbols-outlined text-[13px] text-[#0B1F3A]/20 group-hover:text-[#B8985A] group-hover:translate-x-0.5 transition-all shrink-0">
                              chevron_right
                            </span>
                          </div>
                          <p className="text-[10.5px] text-slate-subtle truncate mt-0.5 font-light leading-snug">
                            {service.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Micro note at bottom of services grid */}
                <div className="pt-2.5 border-t border-[#E8E2D4] flex items-center justify-between text-[11px] text-slate-subtle">
                  <span>Click any practice for statutory criteria, required documentation & regulatory scope.</span>
                  <span className="font-semibold text-[#0B1F3A]">Showing {activeServicesList.length} specialized mandates</span>
                </div>
              </div>

              {/* Right Panel: Executive Practice Spotlight Card */}
              <div className="hidden xl:flex w-[270px] shrink-0 border-l border-[#EAE4D8] pl-6 flex-col justify-between">
                <div className="bg-[#0B1F3A] text-white p-5 rounded-[2px] relative overflow-hidden shadow-lg border-t-2 border-[#B8985A]">
                  {/* Subtle ambient gold glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8985A]/10 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-1.5 text-[#B8985A] mb-2.5">
                      <span className="material-symbols-outlined text-[17px]">verified_user</span>
                      <span className="text-[9.5px] font-bold tracking-[0.22em] uppercase font-montserrat">
                        Institutional Counsel
                      </span>
                    </div>

                    <h4 className="font-cinzel text-[13.5px] text-white font-bold mb-2 leading-snug">
                      High-Stakes Advisory & Field Liaison
                    </h4>
                    <p className="text-[10.5px] text-white/75 font-light leading-relaxed mb-3.5">
                      Direct counsel led by practicing corporate advocates, senior chartered accountants, and experienced administrative liaison officers.
                    </p>

                    <div className="pt-3 border-t border-white/10 space-y-1.5 mb-4">
                      <div className="flex items-center gap-2 text-[10.5px] text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>
                        <span>Multi-Department Regulatory Clearances</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10.5px] text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>
                        <span>Zero Procedural Opacity or Hidden Fees</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10.5px] text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8985A]"></span>
                        <span>Air-Gapped Archives & Enterprise NDAs</span>
                      </div>
                    </div>

                    <NavAnchor
                      href="/#consultation-desk"
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#B8985A] hover:bg-[#9a7e48] text-white text-[10.5px] uppercase tracking-wider font-semibold rounded-[2px] transition-all shadow-sm group"
                    >
                      <span>Book Private Consultation</span>
                      <span className="material-symbols-outlined text-[13px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </NavAnchor>
                  </div>
                </div>

                {/* Regional Jurisdictions Footer in Spotlight */}
                <div className="pt-3 border-t border-[#EAE4D8]">
                  <p className="text-[9.5px] uppercase tracking-wider text-slate-subtle font-semibold mb-1">
                    Statewide Jurisdiction Across Kerala
                  </p>
                  <p className="text-[11px] text-[#0B1F3A] font-medium leading-tight">
                    All 14 Districts of Kerala • Ernakulam HQ • Statewide Field Liaison • GCC Corridor
                  </p>
                </div>
              </div>

            </div>

            {/* Mega Menu Footer Strip */}
            <div className="mt-4 pt-3 border-t border-[#E8E2D4] flex flex-wrap items-center justify-between gap-4 text-xs text-[#0B1F3A]/80">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span className="font-medium text-[#0B1F3A]">Direct Desk Active</span>
                  <span className="text-slate-subtle">• Mon – Sat (9:00 AM – 6:30 PM IST)</span>
                </div>
                <span className="hidden sm:inline text-[#0B1F3A]/20">|</span>
                <div className="hidden sm:flex items-center gap-1.5 text-slate-subtle">
                  <span className="material-symbols-outlined text-[15px] text-[#B8985A]">lock</span>
                  <span>Strict Confidentiality Guaranteed</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <NavAnchor
                  href="/#consultation-desk"
                  onClick={() => setIsMegaMenuOpen(false)}
                  className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#B8985A] hover:text-[#9a7e48] transition-colors"
                >
                  <span>Request Urgent Statutory Filing</span>
                  <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                </NavAnchor>
              </div>
            </div>

          </div>
        </div>

        {/* Mega Menu Backdrop Overlay */}
        {isMegaMenuOpen && (
          <div 
            className="hidden lg:block fixed inset-0 top-16 sm:top-20 lg:top-24 z-[110] transition-opacity duration-300 pointer-events-auto"
            style={{ backgroundColor: 'rgba(11, 31, 58, 0.72)', backdropFilter: 'blur(4px)' }}
            onClick={() => setIsMegaMenuOpen(false)}
          />
        )}

        {/* ========================================================================= */}
        {/* MOBILE MENU OVERLAY                                                       */}
        {/* ========================================================================= */}
        <div className={`lg:hidden fixed top-0 left-0 w-full h-[100dvh] bg-[#F7F5F0] z-[105] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col pt-16 pb-8 px-6 overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}>
          <div className="flex justify-center mb-4">
            <img src="/ArvistaPNGUP.png?v=3" alt="ARVISTA INTERNATIONAL" className="h-8 w-auto object-contain" />
          </div>
          
          <nav className="flex flex-col items-center justify-start flex-1 gap-5 py-4 w-full max-w-md mx-auto">
            {navLinks.map((link, idx) => {
              if (link.isServices) {
                return (
                  <div key={idx} className="w-full flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-center gap-1.5 text-sm sm:text-base tracking-[0.25em] uppercase text-[#0B1F3A] font-bold py-1 w-full"
                    >
                      <span>{link.name}</span>
                      <span className={`material-symbols-outlined text-[20px] text-[#B8985A] transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>

                    {/* Mobile Services Accordion */}
                    {isMobileServicesOpen && (
                      <div className="w-full mt-3 bg-white border border-[#E5E0D5] rounded-[3px] p-3 shadow-sm flex flex-col gap-2">
                        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-bold text-[#B8985A] px-2 py-1.5 border-b border-[#E5E0D5]">
                          <span>Main Services</span>
                          <span className="text-[9px] text-[#0B1F3A]/60 font-normal">Tap to expand</span>
                        </div>
                        {serviceCategories.map((cat) => {
                          const isCatExpanded = mobileExpandedCat === cat.id;
                          return (
                            <div key={cat.id} className="border-b border-[#F0ECE1] last:border-b-0 pb-1">
                              <button
                                type="button"
                                onClick={() => setMobileExpandedCat(isCatExpanded ? null : cat.id)}
                                className={`w-full flex items-center justify-between py-2 px-2 text-xs font-semibold transition-colors text-left ${
                                  isCatExpanded ? 'text-[#B8985A] bg-[#FAF8F5]' : 'text-[#0B1F3A] hover:text-[#B8985A]'
                                }`}
                              >
                                <span className="flex items-center gap-2 min-w-0 pr-2">
                                  <span className="material-symbols-outlined text-[16px] text-[#B8985A] shrink-0">
                                    {cat.icon}
                                  </span>
                                  <span className="truncate">{cat.label}</span>
                                </span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ${
                                  isCatExpanded ? 'bg-[#0B1F3A] text-white' : 'bg-[#E5E0D5] text-[#0B1F3A]'
                                }`}>
                                  {servicesData[cat.id]?.length}
                                </span>
                              </button>

                              {isCatExpanded && (
                                <div className="pl-6 pr-2 py-2 flex flex-col gap-2 bg-[#FAF8F5] rounded max-h-48 overflow-y-auto">
                                  {servicesData[cat.id]?.map((srv) => (
                                    <Link
                                      key={srv.slug}
                                      to={`/services/${srv.slug}`}
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsMobileServicesOpen(false);
                                      }}
                                      className="text-xs text-[#0B1F3A]/80 hover:text-[#B8985A] py-1 border-b border-[#EFECE6] last:border-0 flex items-center justify-between"
                                    >
                                      <span className="truncate">{srv.name}</span>
                                      <span className="material-symbols-outlined text-[14px] text-[#B8985A]">
                                        arrow_forward
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}

                        <NavAnchor
                          href="/#core-pillars"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="mt-2 text-center py-2 bg-[#0B1F3A] text-white text-[11px] uppercase tracking-wider font-semibold rounded-[2px]"
                        >
                          Explore Strategic Pillars
                        </NavAnchor>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavAnchor
                  key={idx} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-sm sm:text-base tracking-[0.25em] uppercase text-[#0B1F3A] font-bold py-1" 
                >
                  {link.name}
                </NavAnchor>
              );
            })}
            
            <div className="mt-4 w-full flex flex-col items-center">
              <span className="w-12 h-[1px] bg-[#E5E0D5] mb-6"></span>
              <NavAnchor 
                href="/#consultation-desk"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#B8985A] bg-[#B8985A] text-white text-[11px] uppercase tracking-[0.2em] rounded-[2px] font-bold whitespace-nowrap font-montserrat w-full max-w-[280px] shadow-lg active:scale-95 transition-transform" 
              >
                Book a Consultation
              </NavAnchor>
            </div>
          </nav>
        </div>
    </>
  );
}
