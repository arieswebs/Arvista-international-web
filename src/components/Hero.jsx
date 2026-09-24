import Navbar from './Navbar'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full bg-[#0B1F3A] text-white flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 25% 45%, rgba(18, 48, 90, 0.6) 0%, rgba(11, 31, 58, 0.95) 75%, rgb(7, 19, 38) 100%), radial-gradient(circle at 85% 20%, rgba(184, 152, 90, 0.15) 0%, transparent 60%)'}}></div>
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 pointer-events-none mix-blend-luminosity bg-cover bg-center" style={{backgroundImage: 'url("/hero-legal.jpg?v=1")', opacity: 0.45, maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.85) 60%, black 100%), linear-gradient(rgba(0, 0, 0, 0.6) 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.85) 60%, black 100%), linear-gradient(rgba(0, 0, 0, 0.6) 0%, black 15%, black 85%, transparent 100%)', maskComposite: 'source-in', WebkitMaskComposite: 'source-in'}}></div>
      
      <Navbar />

      <div className="relative z-20 flex-1 flex items-center w-full">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 w-full py-10 lg:py-16">
          <div className="max-w-[780px] flex flex-col items-start">
            <div className="flex items-center mb-6 hero-fade-1">
              <span className="inline-block w-10 h-[1px] bg-[#B8985A] mr-3 align-middle hero-line-anim"></span>
              <span className="text-xs tracking-[0.28em] text-[#B8985A] uppercase font-semibold font-montserrat">BUSINESS · HR · PROJECT CONSULTANCY</span>
            </div>
            <h1 className="text-white tracking-tight mb-6 hero-fade-2 font-cinzel" style={{fontSize: 'clamp(2.5rem, 5.5vw, 4.85rem)', lineHeight: '1.08', letterSpacing: '-0.01em'}}>Built on Trust.<br/>Driven by Expertise.</h1>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-light hero-fade-3 font-montserrat">End-to-end business, HR and project consultancy, from company formation to compliance, licensing and documentation.</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto hero-fade-4">
              <a className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#B8985A] hover:bg-[#c9a96b] text-[#0B1F3A] text-xs uppercase tracking-[0.18em] font-semibold rounded-[2px] shadow-lg transition-all duration-300 group font-montserrat" href="#consultation-desk">
                <span>CONTACT US</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 stroke-[#0B1F3A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </a>
              <a className="inline-flex items-center justify-center text-white/80 hover:text-white underline decoration-[#B8985A] decoration-1 underline-offset-8 text-xs sm:text-sm uppercase tracking-wider font-medium transition-colors py-2 font-montserrat" href="#services-explorer">Explore our services</a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full border-t border-[#B8985A]/30 bg-[#0B1F3A]/85 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-14 sm:h-16 flex items-center justify-between">
          <div className="text-[11px] sm:text-xs tracking-widest text-white/60 uppercase truncate pr-4 font-montserrat">
            <span className="hidden sm:inline">Company Formation · Compliance & Accounting · Property Documentation</span>
            <span className="sm:hidden">Formation · Compliance · Property</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 font-montserrat">
            <span className="text-[10px] tracking-[0.25em] text-[#B8985A] uppercase font-medium">SCROLL</span>
            <div className="w-[1px] h-6 bg-[#B8985A]/40 relative overflow-hidden">
              <div className="w-full h-full bg-[#B8985A] scroll-indicator-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
