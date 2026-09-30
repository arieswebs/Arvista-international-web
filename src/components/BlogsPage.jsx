import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ContactFooter from './ContactFooter';
import { blogsData, blogCategories, getFeaturedBlog } from '../data/blogs';

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const featuredBlog = getFeaturedBlog();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Statutory Insights & Legal Intelligence | ARVISTA INTERNATIONAL';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Regulatory analysis, corporate law updates, industrial clearances, and tax governance insights for founders, directors, and investors in Ernakulam, Kochi, and Kerala.'
      );
    }
  }, []);

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0B1F3A] flex flex-col font-montserrat">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#0B1F3A] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden isolate">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url("/hero-legal.jpg?v=1")' }}></div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 75% 35%, rgba(184, 152, 90, 0.14) 0%, transparent 60%)' }}></div>
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B8985A]"></span>
              <span className="text-[11px] sm:text-xs tracking-[0.28em] text-[#B8985A] uppercase font-semibold">
                ARVISTA INTELLIGENCE DESK
              </span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] mb-6">
              Statutory Intelligence, Regulatory Overhauls & Jurisdictional Briefs.
            </h1>
            <p className="text-white/75 text-base sm:text-lg font-light leading-relaxed mb-8">
              Authoritative legal and fiscal perspectives authored by practicing advocates, chartered accountants, and liaison leads across Kerala and South India.
            </p>

            {/* Instant Search Bar */}
            <div className="relative max-w-xl">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#B8985A] text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search regulations, MCA forms, KSPCB clearances, labor codes..."
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs sm:text-sm rounded-[2px] focus:outline-none focus:border-[#B8985A] focus:bg-[#071527] transition-all backdrop-blur-md"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills Strip */}
      <section className="bg-white border-b border-[#E8E2D4] sticky top-16 sm:top-20 lg:top-24 z-40 shadow-xs">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3.5 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 whitespace-nowrap">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B1F3A] text-white shadow-sm'
                    : 'bg-[#FAF8F5] text-[#0B1F3A] hover:bg-[#EFEAE0] border border-[#E8E2D6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 sm:py-24">
        
        {/* Featured Editorial Spotlight (Only shown when filter is All and no search) */}
        {selectedCategory === 'All' && !searchQuery && featuredBlog && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B8985A]"></span>
              <span className="text-[10px] tracking-[0.25em] text-[#B8985A] uppercase font-bold font-montserrat">
                FEATURED EDITORIAL ADVISORY
              </span>
            </div>
            
            <div className="bg-white border border-[#E5DFD4] rounded-[2px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto">
                <img 
                  src={featuredBlog.coverImage} 
                  alt={featuredBlog.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-[#0B1F3A] text-[#B8985A] text-[10px] font-mono uppercase tracking-wider font-bold rounded-[2px]">
                    {featuredBlog.category}
                  </span>
                </div>
              </div>
              
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-subtle mb-3">
                    <span>{featuredBlog.date}</span>
                    <span>•</span>
                    <span>{featuredBlog.readTime}</span>
                    <span>•</span>
                    <span className="text-[#B8985A] font-semibold">{featuredBlog.authorRole}</span>
                  </div>
                  
                  <h2 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1F3A] mb-4 leading-snug">
                    <Link to={`/blogs/${featuredBlog.slug}`} className="hover:text-[#B8985A] transition-colors">
                      {featuredBlog.title}
                    </Link>
                  </h2>
                  
                  <p className="text-xs sm:text-sm text-slate-subtle font-light leading-relaxed mb-6">
                    {featuredBlog.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#F0ECE1] flex items-center justify-between">
                  <span className="text-xs text-slate-subtle">By {featuredBlog.author}</span>
                  <Link
                    to={`/blogs/${featuredBlog.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#B8985A] hover:text-[#9a7e48] transition-colors group"
                  >
                    <span>Read Statutory Brief</span>
                    <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section Heading */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#E8E2D4]">
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#0B1F3A]">
            {selectedCategory === 'All' ? 'All Practice Articles' : selectedCategory}
          </h3>
          <span className="text-xs text-slate-subtle font-mono">
            {filteredBlogs.length} Articles Found
          </span>
        </div>

        {/* Articles Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#E8E2D4] rounded-[2px] p-8">
            <span className="material-symbols-outlined text-4xl text-[#B8985A] mb-2">article</span>
            <h4 className="font-cinzel text-lg font-bold text-[#0B1F3A] mb-1">No articles found</h4>
            <p className="text-xs text-slate-subtle mb-4">No published insights match your current search criteria.</p>
            <button
              type="button"
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#0B1F3A] text-white text-xs uppercase tracking-wider rounded-[2px]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article 
                key={blog.slug} 
                className="bg-white border border-[#E8E2D6] rounded-[2px] overflow-hidden flex flex-col justify-between hover:border-[#B8985A] hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img 
                      src={blog.coverImage} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 bg-[#0B1F3A]/90 text-[#B8985A] text-[9.5px] font-mono uppercase tracking-wider font-bold rounded-[2px] backdrop-blur-xs">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] text-slate-subtle mb-2.5">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#0B1F3A] mb-2.5 line-clamp-2 leading-snug group-hover:text-[#B8985A] transition-colors">
                      <Link to={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h4>

                    <p className="text-xs text-slate-subtle font-light line-clamp-3 leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#F2ECE1] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {blog.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-[#FAF8F5] text-slate-subtle px-1.5 py-0.5 rounded-[2px]">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#B8985A] hover:text-[#9a7e48] transition-colors group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      <ContactFooter />
    </div>
  );
}
