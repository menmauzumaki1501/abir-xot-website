import { useEffect, useRef, useState } from 'react';

// Design Philosophy: Dark, cinematic aesthetic with gold accents
// - Dark obsidian background (#0A0A0A) with charcoal secondary (#1A1A1A)
// - Gold primary accent (#FFD700) for emphasis and interactive elements
// - Serif font (Playfair Display) for display text, Sans-serif (Satoshi) for body
// - Smooth transitions and scroll-triggered fade-ups for cinematic feel

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up, .stagger-children').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-8 bg-gradient-to-b from-black/95 to-transparent backdrop-blur-md">
        <a href="#home" className="text-2xl font-bold text-[#FFD700]">
          ABIR XOT
        </a>
        <div className="flex gap-12">
          <a href="#home" className="text-sm uppercase tracking-widest hover:text-[#FFD700] transition-colors duration-300">Home</a>
          <a href="#bio" className="text-sm uppercase tracking-widest hover:text-[#FFD700] transition-colors duration-300">Biography</a>
          <a href="#artistry" className="text-sm uppercase tracking-widest hover:text-[#FFD700] transition-colors duration-300">Artistry</a>
          <a href="#expertise" className="text-sm uppercase tracking-widest hover:text-[#FFD700] transition-colors duration-300">Expertise</a>
          <a href="#contact" className="text-sm uppercase tracking-widest hover:text-[#FFD700] transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* Page Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            onClick={() => setActiveSection(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === i
                ? 'bg-[#FFD700] opacity-100 scale-150'
                : 'bg-gray-400 opacity-30'
            }`}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen pt-20 flex items-center overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A]">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-60"
          style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.15), transparent 70%)',
          }}
        />

        <div className="container relative z-10 max-w-4xl px-4 md:px-16">
          <div className="fade-up">
            <h1 className="text-6xl md:text-7xl font-bold uppercase leading-tight mb-6 font-serif">
              Voice Rooted
              <span className="block text-[#FFD700] ml-8">in Faith</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Exploring the intersection of spirituality, artistry, and cultural identity through music and spoken word.
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <button className="px-10 py-4 border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0A0A0A] transition-all duration-300 font-semibold tracking-wide">
                Explore Work
              </button>
              <button className="px-10 py-4 border-2 border-gray-400 text-white hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-300 font-semibold tracking-wide">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Soundwave Animation */}
        <div className="absolute bottom-8 left-16 flex gap-1 h-16">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-[#FFD700] opacity-30"
              style={{
                height: `${30 + Math.random() * 70}%`,
                animation: `pulse 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Cultural Strip */}
      <section className="w-full py-8 border-t border-b border-white/5 text-center bg-gradient-to-r from-transparent via-[#FFD700]/5 to-transparent">
        <h2 className="text-3xl font-serif text-[#FFD700] mb-2">বিশ্বাসের কণ্ঠস্বর</h2>
        <p className="text-gray-300 tracking-widest uppercase text-sm">A Voice Rooted in Faith and Culture</p>
      </section>

      {/* Dual Identity Block */}
      <section id="bio" className="py-24 bg-[#0A0A0A]">
        <div className="container px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 fade-up">
            <div className="relative p-12 bg-white/2 border border-white/5 hover:border-[#FFD700] transition-all duration-300 group">
              <div className="absolute inset-0 left-0 top-0 w-1 h-0 bg-[#FFD700] group-hover:h-full transition-all duration-300" />
              <h3 className="text-4xl text-[#FFD700] mb-6 font-serif">The Artist</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Abir XOT is a multidisciplinary artist whose work spans music, spoken word, and cultural commentary. With roots in Bengali tradition and a global perspective, their practice explores themes of faith, identity, and belonging.
              </p>
            </div>
            <div className="relative p-12 bg-white/2 border border-white/5 hover:border-[#FFD700] transition-all duration-300 group">
              <div className="absolute inset-0 left-0 top-0 w-1 h-0 bg-[#FFD700] group-hover:h-full transition-all duration-300" />
              <h3 className="text-4xl text-[#FFD700] mb-6 font-serif">The Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Through art, Abir seeks to bridge traditional and contemporary expressions, creating spaces where spirituality meets innovation. Each project is an invitation to reflect on what it means to belong in a complex, interconnected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-[#1A1A1A]">
        <div className="container px-4 md:px-16">
          <h2 className="text-5xl font-bold uppercase mb-16 text-center fade-up font-serif">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {['Music Production', 'Spoken Word', 'Cultural Curation', 'Community Building'].map((item, i) => (
              <div key={i} className="p-8 text-center bg-white/2 border border-white/5 hover:border-[#FFD700] hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-xl text-[#FFD700] mb-3 font-semibold">{item}</h4>
                <p className="text-gray-400 text-sm">Specialized practice in contemporary and traditional forms</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Strip */}
      <section className="py-24 text-center relative">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-px bg-[#FFD700] opacity-30" />
        <div className="container max-w-4xl px-4 md:px-16">
          <p className="text-4xl md:text-5xl font-serif italic text-white leading-relaxed fade-up">
            "Art is not about expressing what is, but about imagining what could be—and inviting others to see it with you."
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-px bg-[#FFD700] opacity-30" />
      </section>

      {/* Timeline Section */}
      <section id="artistry" className="py-24 bg-[#0A0A0A]">
        <div className="container max-w-3xl px-4 md:px-16">
          <h2 className="text-5xl font-bold uppercase mb-16 fade-up font-serif">Journey</h2>
          <div className="relative pl-8 stagger-children">
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#FFD700] to-transparent" />
            {[
              { year: '2018', content: 'Started exploring music production and spoken word' },
              { year: '2020', content: 'Released debut EP "Roots & Reflections"' },
              { year: '2022', content: 'Collaborated with international artists on cross-cultural projects' },
              { year: '2024', content: 'Launched community platform for emerging voices' },
            ].map((item, i) => (
              <div key={i} className="mb-12 relative">
                <div className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-[#FFD700] shadow-lg" style={{ boxShadow: '0 0 20px #FFD700' }} />
                <div className="text-2xl text-[#FFD700] font-semibold mb-2">{item.year}</div>
                <p className="text-gray-300 text-lg">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#1A1A1A]">
        <div className="container max-w-2xl px-4 md:px-16">
          <h2 className="text-5xl font-bold uppercase mb-16 text-center fade-up font-serif">Get in Touch</h2>
          <form className="p-12 bg-white/2 border border-white/5 rounded-lg space-y-6">
            <div>
              <label className="block text-gray-300 text-sm uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/3 border border-white/5 text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/3 border border-white/5 text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm uppercase tracking-wider mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 bg-white/3 border border-white/5 text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300 min-h-32"
                placeholder="Your message..."
              />
            </div>
            <button className="w-full px-6 py-3 bg-[#FFD700] text-[#0A0A0A] font-semibold hover:bg-transparent hover:text-[#FFD700] hover:border hover:border-[#FFD700] transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 text-center relative bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.15), transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
        <div className="container relative z-10 px-4 md:px-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 fade-up font-serif">Ready to Collaborate?</h2>
          <button className="px-12 py-4 border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0A0A0A] transition-all duration-300 font-semibold tracking-wide text-lg">
            Start a Conversation
          </button>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scaleY(0.5); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
