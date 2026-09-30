import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import ContactFooter from './ContactFooter';
import { getBlogBySlug, blogsData } from '../data/blogs';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = getBlogBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (blog) {
      document.title = `${blog.title} | ARVISTA Intelligence`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', blog.excerpt);
      }
    }
  }, [slug, blog]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center px-6">
        <h1 className="font-cinzel text-3xl text-[#0B1F3A] mb-3">Article Not Found</h1>
        <p className="text-slate-subtle mb-6 text-sm">The statutory brief you are seeking is unavailable or has been archived.</p>
        <Link to="/blogs" className="px-6 py-3 bg-[#B8985A] text-white text-xs uppercase tracking-widest font-semibold rounded-[2px]">
          Return to All Articles
        </Link>
      </div>
    );
  }

  const relatedBlogs = blogsData.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0B1F3A] flex flex-col font-montserrat">
      <Navbar />

      {/* Article Header Section */}
      <header className="relative bg-[#0B1F3A] text-white pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden isolate">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-center" style={{ backgroundImage: `url("${blog.coverImage}")` }}></div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 75% 30%, rgba(184, 152, 90, 0.15) 0%, transparent 65%)' }}></div>
        
        <div className="max-w-[960px] mx-auto px-6 lg:px-8 relative z-10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#B8985A] hover:text-[#d4b77d] transition-colors mb-6 group font-semibold"
          >
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <span>Back to Regulatory Intelligence</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-[#B8985A] text-[#0B1F3A] text-[10px] font-mono uppercase tracking-wider font-bold rounded-[2px]">
              {blog.category}
            </span>
            <span className="text-xs text-white/60">{blog.date}</span>
            <span className="text-white/40">•</span>
            <span className="text-xs text-white/60">{blog.readTime}</span>
          </div>

          <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.18] mb-6 text-white">
            {blog.title}
          </h1>

          <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed mb-6 max-w-3xl">
            {blog.excerpt}
          </p>

          <div className="pt-6 border-t border-white/10 flex items-center gap-4 text-xs text-white/70">
            <div className="w-10 h-10 rounded-[2px] bg-[#B8985A] text-[#0B1F3A] flex items-center justify-center font-bold font-cinzel text-sm shrink-0">
              AI
            </div>
            <div>
              <div className="font-semibold text-white">{blog.author}</div>
              <div className="text-[11px] text-[#B8985A]">{blog.authorRole}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Content & Table of Contents */}
      <main className="max-w-[960px] mx-auto px-6 lg:px-8 py-16 sm:py-20 flex-1 w-full">
        
        {/* Key Statutory Takeaways Card */}
        {blog.takeaways && (
          <div className="mb-12 p-6 sm:p-8 bg-[#0B1F3A] text-white rounded-[2px] border-l-4 border-[#B8985A] shadow-xl">
            <div className="flex items-center gap-2 text-[#B8985A] text-xs uppercase tracking-widest font-bold mb-3 font-montserrat">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>Statutory Counsel Takeaways</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/85 font-light">
              {blog.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[15px] text-[#B8985A] shrink-0 mt-0.5">check_circle</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Sections */}
        <article className="space-y-10 text-slate-charcoal">
          {blog.content.map((sec, idx) => (
            <section key={idx} className="space-y-3.5">
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#0B1F3A] tracking-tight">
                {sec.heading}
              </h2>

              {sec.body && (
                <p className="text-sm sm:text-base text-slate-subtle leading-relaxed font-light whitespace-pre-line">
                  {sec.body}
                </p>
              )}

              {/* Optional Data Table */}
              {sec.table && (
                <div className="mt-6 overflow-x-auto border border-[#E5DFD4] rounded-[2px] shadow-xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#0B1F3A] text-white">
                        <th className="p-3.5 font-semibold font-cinzel tracking-wider border-b border-white/10">Feature</th>
                        <th className="p-3.5 font-semibold font-cinzel tracking-wider border-b border-white/10">Private Limited</th>
                        <th className="p-3.5 font-semibold font-cinzel tracking-wider border-b border-white/10">LLP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sec.table.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}>
                          <td className="p-3.5 font-medium text-[#0B1F3A] border-b border-[#EAE4D8]">{row.feature}</td>
                          <td className="p-3.5 text-slate-subtle border-b border-[#EAE4D8]">{row.pvt}</td>
                          <td className="p-3.5 text-slate-subtle border-b border-[#EAE4D8]">{row.llp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-[#E8E2D4] flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-subtle uppercase tracking-wider font-semibold mr-2">Practice Tags:</span>
          {blog.tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-white border border-[#E5DFD4] text-[#0B1F3A] px-2.5 py-1 rounded-[2px] font-mono">
              #{tag}
            </span>
          ))}
        </div>

        {/* Practice Lead Consultation Card */}
        <div className="mt-14 p-8 bg-white border-2 border-[#B8985A]/40 rounded-[2px] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B8985A] font-bold block mb-1">
              DIRECT ENGAGEMENT
            </span>
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#0B1F3A] mb-1">
              Need Specific Advisory On This Subject?
            </h3>
            <p className="text-xs text-slate-subtle font-light max-w-lg leading-relaxed">
              Schedule a confidential preliminary consultation with our practicing corporate advocates and liaison leads.
            </p>
          </div>
          <a
            href="#consultation-desk"
            className="px-6 py-3 bg-[#0B1F3A] hover:bg-[#16335C] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] shadow-sm shrink-0"
          >
            Consult Practice Lead
          </a>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-10 border-t border-[#E8E2D4]">
          <h3 className="font-cinzel text-xl font-bold text-[#0B1F3A] mb-6">
            Related Regulatory Analyses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blogs/${rel.slug}`}
                className="bg-white border border-[#E8E2D6] p-4 rounded-[2px] hover:border-[#B8985A] transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <span className="text-[9.5px] font-mono text-[#B8985A] uppercase tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-cinzel text-xs font-bold text-[#0B1F3A] group-hover:text-[#B8985A] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="mt-3 pt-2 border-t border-[#F2ECE1] text-[10px] text-slate-subtle flex items-center justify-between">
                  <span>{rel.readTime}</span>
                  <span className="text-[#B8985A] group-hover:translate-x-0.5 transition-transform">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>

      <ContactFooter />
    </div>
  );
}
