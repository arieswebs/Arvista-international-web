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
    { name: 'ABOUT US', href: '/#why-arvista' },
    { name: 'SERVICES', href: '/#services-explorer', isServices: true },
    { name: 'CAREERS', href: '/#careers' },
    { name: 'BLOGS', href: '/#blogs' },
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
      <header className="fixed top-0 left-0 w-full z-[100] bg-[#F7F5F0]/95 backdrop-blur-xl border-b border-[#E5E0D5]/80 shadow-[0_4px_30px_rgba(0,0,0,0.04)] transition-all duration-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 lg:h-24 flex items-center justify-between">
          
          {/* Brand Logo (Left) */}
          <Link 
            to="/" 
            onMouseEnter={closeMegaMenuImmediately}
            onClick={() => setIsMegaMenuOpen(false)}
            className="flex items-center shrink-0 z-50 group"
          >
            <img 
              src="/ArvistaPNGUP.png" 
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

        {/* ========================================================================= */}
        {/* DESKTOP MEGA MENU DROPDOWN                                               */}
        {/* ========================================================================= */}
        <div 
          ref={megaMenuRef}
          onMouseEnter={openMegaMenu}
          onMouseLeave={closeMegaMenuWithDelay}
          className={`hidden lg:block fixed top-16 sm:top-20 lg:top-24 left-0 w-full z-[95] bg-[#FAF8F5] border-b border-[#E5E0D5] shadow-[0_25px_60px_-15px_rgba(11,31,58,0.2)] transition-all duration-300 ease-out origin-top ${
            isMegaMenuOpen 
              ? 'opacity-100 translate-y-0 visible pointer-events-auto' 
              : 'opacity-0 -translate-y-3 invisible pointer-events-none'
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-6 xl:px-10 pt-6 pb-4">
            
            {/* Mega Menu Top Category Tabs */}
            <div className="flex items-center justify-between border-b border-[#E5E0D5] pb-3 mb-4 gap-4">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
                <span className="text-[10px] tracking-[0.25em] text-[#B8985A] uppercase font-bold mr-1 hidden xl:inline shrink-0">
                  PRACTICES:
                </span>
                {serviceCategories.map((category) => {
                  const count = servicesData[category.id]?.length || 0;
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onMouseEnter={() => setActiveCategory(category.id)}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-[2px] text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-[#0B1F3A] border border-[#0B1F3A] text-white shadow-sm'
                          : 'bg-white/80 border border-[#E2DDD3] text-[#0B1F3A]/80 hover:text-[#0B1F3A] hover:bg-white hover:border-[#B8985A]/60'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[16px] ${isActive ? 'text-[#B8985A]' : 'text-[#B8985A]/80'}`}>
                        {category.icon}
                      </span>
                      <span>{category.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-medium ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#EFECE6] text-[#0B1F3A]/80'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <NavAnchor
                href="/#services-explorer"
                onClick={() => setIsMegaMenuOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#B8985A] hover:text-[#9a7e48] transition-colors whitespace-nowrap group shrink-0"
              >
                <span>Full Services Directory</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </NavAnchor>
            </div>

            {/* Active Category Header Bar */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#B8985A] text-[20px]">
                  {currentCategoryData?.icon}
                </span>
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#0B1F3A] tracking-wide">
                  {currentCategoryData?.label}
                </h3>
                <span className="text-xs text-slate-subtle">
                  ({activeServicesList.length} services available)
                </span>
              </div>
              <span className="text-[11px] text-slate-subtle italic hidden sm:inline">
                Click any service to view complete statutory scope, procedures & deliverables
              </span>
            </div>

            {/* Services Grid for Active Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 max-h-[58vh] overflow-y-auto pr-2 pb-3 mega-menu-scroll">
              {activeServicesList.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={() => setIsMegaMenuOpen(false)}
                  className="group flex items-start gap-2.5 px-3 py-2 rounded-[2px] bg-white hover:bg-[#F4EFE6] border border-[#E9E5DD] hover:border-[#B8985A]/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-200 h-[56px]"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#B8985A] mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                    {service.icon || 'check_circle'}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="text-xs font-semibold text-[#0B1F3A] group-hover:text-[#B8985A] transition-colors truncate">
                        {service.name}
                      </h4>
                      <span className="material-symbols-outlined text-[13px] text-[#0B1F3A]/25 group-hover:text-[#B8985A] group-hover:translate-x-0.5 transition-all shrink-0">
                        chevron_right
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-subtle truncate mt-0.5 leading-snug">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mega Menu Footer Strip */}
            <div className="mt-5 pt-3.5 border-t border-[#E5E0D5] flex flex-wrap items-center justify-between gap-4 bg-[#F2EDE4]/70 -mx-6 xl:-mx-10 -mb-4 px-6 xl:px-10 py-3 rounded-b-[2px]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#B8985A] text-[20px] shrink-0">verified</span>
                <p className="text-xs text-[#0B1F3A]/85">
                  Looking for multi-jurisdiction licensing or high-court representation? <span className="font-semibold text-[#0B1F3A]">50+ statutory practices handled directly.</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <NavAnchor
                  href="/#consultation-desk"
                  onClick={() => setIsMegaMenuOpen(false)}
                  className="inline-flex items-center justify-center px-4 py-1.5 border border-[#B8985A] bg-[#B8985A] text-white hover:bg-[#9a7e48] hover:border-[#9a7e48] text-[10px] xl:text-[11px] uppercase tracking-wider rounded-[2px] transition-all duration-200 font-semibold shadow-sm"
                >
                  Schedule Private Consultation
                </NavAnchor>
                <button
                  type="button"
                  onClick={() => setIsMegaMenuOpen(false)}
                  className="text-xs text-slate-subtle hover:text-[#0B1F3A] px-2 py-1 transition-colors"
                >
                  Close [Esc]
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Mega Menu Backdrop Overlay */}
        {isMegaMenuOpen && (
          <div 
            className="hidden lg:block fixed inset-0 top-16 sm:top-20 lg:top-24 bg-[#0B1F3A]/30 backdrop-blur-[2px] z-[90] transition-opacity duration-300"
            onClick={() => setIsMegaMenuOpen(false)}
          />
        )}

        {/* ========================================================================= */}
        {/* MOBILE MENU OVERLAY                                                       */}
        {/* ========================================================================= */}
        <div className={`lg:hidden fixed top-0 left-0 w-full h-[100dvh] bg-[#F7F5F0] z-[105] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col pt-16 pb-8 px-6 overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}>
          <div className="flex justify-center mb-4">
            <img src="/ArvistaPNGUP.png" alt="ARVISTA INTERNATIONAL" className="h-8 w-auto object-contain" />
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
                        <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#B8985A] px-2 py-1 border-b border-[#E5E0D5]">
                          Select Practice Area
                        </div>
                        {serviceCategories.map((cat) => {
                          const isCatExpanded = mobileExpandedCat === cat.id;
                          return (
                            <div key={cat.id} className="border-b border-[#F0ECE1] last:border-b-0 pb-1">
                              <button
                                type="button"
                                onClick={() => setMobileExpandedCat(isCatExpanded ? null : cat.id)}
                                className="w-full flex items-center justify-between py-2 px-2 text-xs font-semibold text-[#0B1F3A] hover:text-[#B8985A] transition-colors"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="material-symbols-outlined text-[16px] text-[#B8985A]">
                                    {cat.icon}
                                  </span>
                                  <span>{cat.label}</span>
                                </span>
                                <span className="text-[10px] bg-[#E5E0D5] text-[#0B1F3A] px-1.5 py-0.5 rounded-full">
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
                          href="/#services-explorer"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="mt-2 text-center py-2 bg-[#0B1F3A] text-white text-[11px] uppercase tracking-wider font-semibold rounded-[2px]"
                        >
                          Explore Full Grid (All 50+)
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
      </header>

      {/* Invisible placeholder to maintain document flow */}
      <div className="h-16 sm:h-20 lg:h-24 w-full shrink-0 bg-[#0B1F3A]"></div>
    </>
  );
}
