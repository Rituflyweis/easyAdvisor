import Slider from 'react-slick'
import { useRef } from 'react'
import CategoryCard from '../components/CategoryCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import Logo from '../components/Logo.jsx'
import { Link } from 'react-router-dom'

export default function Home({ onNavigate }) {
  const handleNav = (e, to) => {
    if (!onNavigate) return
    e.preventDefault()
    onNavigate(to)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-zinc-100 bg-gradient-to-r from-[var(--ui-gradient-start)] to-[var(--ui-gradient-end)] text-white">
        <div className="mx-auto max-w-7xl inner h-16 flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <Logo size={32} />
            <span className="text-lg font-semibold">Easy Advising</span>
          </div>
          {/* Search */}
          <div className="hidden md:flex grow">
            <div className="relative w-full">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M10 2a8 8 0 015.292 13.708l4 4a1 1 0 11-1.414 1.414l-4-4A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z"/></svg>
              </span>
              <input className="w-full rounded-full border border-white/40 bg-white/90 px-10 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/60" placeholder="Search experts, topics..." />
            </div>
          </div>
          {/* CTA buttons */}
          <div className="ml-auto flex items-center gap-3">
            <a href="https://play.google.com/store/apps/details?id=com.easyadvising.app&pcampaignid=web_share" className="btn-primary hidden sm:inline-flex" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M16.365 1.43c.42-.49 1.07-.82 1.71-.89.08.64-.17 1.3-.59 1.78-.42.5-1.1.86-1.75.8-.07-.62.2-1.28.63-1.7zM12.5 5.2c1.13 0 2.4-.78 3.22-.78.78 0 1.95.74 2.7.74.04 0 .07 0 .1-.01-.26.8-.8 1.53-1.38 2.12-.64.67-1.35 1.35-2.29 1.35-.92 0-1.22-.44-2.22-.44-1.03 0-1.46.43-2.31.43-.96 0-1.73-.79-2.37-1.47-1.28-1.36-2.27-3.43-1.89-5.37.99.04 1.83.67 2.41.67.86 0 1.77-.6 2.83-.6.86 0 1.6.36 2.2.96-.03.06-.04.12-.04.18 0 .07.01.15.04.21z"/></svg>
              <span>Download App</span>
            </a>
          
          </div>
        </div>
      </header>

      {/* Hero */}
      {/* Hero */}
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-white to-[color-mix(in_oklab,var(--brand-primary)_10%,white)]">
        <div className="mx-auto max-w-7xl inner">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--brand-primary)_30%,transparent)] bg-[color-mix(in_oklab,var(--brand-primary)_12%,white)] px-3 py-1 text-xs text-[var(--brand-primary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
                Trusted Advice
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                Verified Experts. <span className="text-[#362695]">Real Talk.</span> Trusted Second Opinions.
              </h1>
              <p className="mt-4 text-lg text-zinc-600">
               Get expert consultation from verified professionals on health, legal, career, finance, and more - anytime, through chat, Audio call or Video call.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="https://play.google.com/store/apps/details?id=com.easyadvising.app&pcampaignid=web_share" target="_blank" rel="noreferrer" className="btn-primary">Download Easy Advising App</a>
                <a href="#browse" className="btn-primary">Browse categories</a>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a href="https://play.google.com/store/apps/details?id=com.easyadvising.app&pcampaignid=web_share" target="_blank" rel="noreferrer" className="btn-primary px-4 py-2">Android (Play Store)</a>
                <a href="https://apps.apple.com/app/id0000000000" target="_blank" rel="noreferrer" className="btn-primary px-4 py-2">iOS (App Store)</a>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -top-6 -left-6 h-40 w-40 rounded-full bg-[var(--brand-primary)]/30 blur-2xl" />
              <div className="relative mx-auto max-w-xl sm:max-w-2xl overflow-hidden rounded-2xl  h-72 sm:h-96 lg:h-[28rem]">
                <img
                  src="/asset/image1.png"
                  alt="Advising app preview (Figma export)"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain object-top"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-[var(--brand-secondary)]/30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust blurb */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg text-zinc-700">
            On Easy Advising, you get an honest, unbiased second opinion—no sales pitch, no pressure.
            Just real conversations with verified professionals you can trust.
          </p>
        </div>
      </section>

      {/* Categories Carousel */}
      <section id="browse" className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl inner">
          {(() => {
            const sliderRef = useRef(null)
            const settings = {
              dots: false,
              arrows: false,
              infinite: true,
              speed: 500,
              slidesToShow: 4,
              slidesToScroll: 1,
              responsive: [
                { breakpoint: 1280, settings: { slidesToShow: 3 } },
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 640, settings: { slidesToShow: 1 } },
              ],
            }
            const items = [
              { title: 'Health', href: '#categories', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop' },
              { title: 'Career', href: '#categories', img: 'https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?q=80&w=1000&auto=format&fit=crop' },
              { title: 'Finance', href: '#categories', img: 'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1000&auto=format&fit=crop' },
              { title: 'Legal', href: '#categories', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop' },
              { title: 'Astrology', href: '#categories', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop' },
              { title: 'Tourism', href: '#tourism', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop' },
            ]
            return (
              <>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-3xl subheading">Online Consultation App - Easy Advising</h2>
                  <div className="flex items-center gap-2">
                    <button type="button" aria-label="Previous" onClick={() => sliderRef.current?.slickPrev()} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--brand-primary)]/40 text-[var(--brand-primary)] hover:bg-[color-mix(in_oklab,var(--brand-primary)_10%,white)]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                    </button>
                    <button type="button" aria-label="Next" onClick={() => sliderRef.current?.slickNext()} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--brand-primary)]/40 text-[var(--brand-primary)] hover:bg-[color-mix(in_oklab,var(--brand-primary)_10%,white)]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
                    </button>
                  </div>
                </div>
                <div className="mt-8">
                  <Slider ref={sliderRef} {...settings}>
                    {items.map((c, i) => (
                      <a key={i} href={c.href} className="group block px-2 focus:outline-none">
                        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                          <img src={c.img} alt={c.title} loading="lazy" className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          <div className="p-4">
                            <h3 className="text-base font-semibold text-zinc-900">{c.title}</h3>
                            <p className="mt-1 text-xs text-zinc-600">Tap to learn more</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </Slider>
                </div>
              </>
            )
          })()}
        </div>
      </section>

      {/* Categories & Subcategories */}
      <section id="categories" className="py-12 sm:py-16 bg-zinc-50">
        <div className="mx-auto max-w-7xl inner">
          <h2 className="text-3xl subheading">Categories & Subcategories</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Health */}
            <CategoryCard
              title="Health"
              imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1280&auto=format&fit=crop"
            >
              <p>Talk to trusted professionals for physical and mental well-being, including natural and alternative therapies.</p>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                <li>Mental Health: Get support from certified psychologists and therapists for stress, anxiety, and emotional challenges</li>
                <li>Yoga & Fitness: Personalized yoga sessions, fitness tips, and workout planning</li>
                <li>Nutritionist: Diet advice, weight loss plans, and healthy eating habits</li>
                <li>Sexologist: Confidential sessions on sexual health, performance, and relationships</li>
                <li>Gynecologist: Consult for menstrual issues, pregnancy queries, and female reproductive health</li>
                <li>Child Counseling & Parenting: Tips and guidance for raising emotionally healthy children</li>
                <li>Dermatologist: Skin issues, acne, hair fall, pigmentation, and more</li>
                <li>Ayurveda & Homeopathy: Natural remedies and holistic treatment for chronic and lifestyle diseases</li>
              </ul>
            </CategoryCard>

            {/* Career */}
            <CategoryCard
              title="Career"
              imageSrc="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?q=80&w=1280&auto=format&fit=crop"
            >
              <p>Get practical advice from people actually working in the fields you're interested in, including soft skills.</p>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                <li>Career Counseling: Explore suitable career paths based on your interests and abilities</li>
                <li>Resume Review: Improve your CV and get noticed by recruiters</li>
                <li>Study Abroad Guidance: Talk to students and experts who've studied overseas</li>
                <li>Field-Specific Guidance: Talk to professionals from your target field and current industry trends</li>
                <li>English Speaking: Improve your fluency, vocabulary, and confidence</li>
              </ul>
            </CategoryCard>

            {/* Finance */}
            <CategoryCard
              title="Finance"
              imageSrc="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1280&auto=format&fit=crop"
            >
              <p>Manage your money wisely with expert insights on budgeting, saving, investing, and more.</p>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                <li>Investment Advisor: Understand where and how to invest your money safely</li>
                <li>Tax Consultant: File taxes and plan tax-saving strategies</li>
                <li>Crypto & Stock Market: Beginner-friendly advice to enter high-risk markets</li>
              </ul>
            </CategoryCard>

            {/* Legal */}
            <CategoryCard
              title="Legal"
              imageSrc="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1280&auto=format&fit=crop"
            >
              <p>Explore second opinions in:</p>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                <li>Consumer Rights: Understand what you're entitled to regarding faulty products, delayed services, or unfair practices</li>
                <li>Property & Rent Disputes: Get clarity on rental agreements, eviction issues, property ownership, and builder delays</li>
                <li>Employment & Workplace Issues: Wrongful termination, unpaid salaries, harassment, or contract clauses</li>
                <li>Marriage & Family Law: Divorce, maintenance, custody, or domestic rights—with empathy and privacy</li>
                <li>Contract & Document Review: Don't sign blindly—get a legal expert's opinion on agreements and job contracts</li>
                <li>Notices & Legal Communication: Understand legal notices and your next step</li>
                <li>Cyber & Online Harassment: Guidance if you're facing online fraud, blackmail, privacy breach, or identity misuse</li>
                <li>Basic Criminal Law Queries: FIRs, police complaints, and bail-related questions in a safe and simple way</li>
              </ul>
              <p className="mt-3 text-xs text-zinc-500">Book a call or chat anytime—our legal experts are here to offer clarity, not complexity.</p>
            </CategoryCard>

            {/* Astrology */}
            <CategoryCard
              title="Astrology"
              imageSrc="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1280&auto=format&fit=crop"
            >
              <p>Seek spiritual and astrological insights from verified professionals.</p>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                <li>Personal Horoscope: Understand your birth chart, future prediction and career path</li>
                <li>Matchmaking: Match kundlis for marriage compatibility</li>
              </ul>
            </CategoryCard>

            {/* Tourism */}
            <CategoryCard
              title="Tourism"
              imageSrc="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1280&auto=format&fit=crop"
            >
              <p>Plan your travels better with local experts and frequent travelers.</p>
              <ul className="mt-4 list-disc pl-5 space-y-1">
                <li>Domestic Destinations: Discover hidden gems and travel tips across India</li>
                <li>International Travel: Get visa, budget and stay planning help</li>
                <li>Travel Safety & Planning: Solo, group or family — plan safer and smarter</li>
              </ul>
            </CategoryCard>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 bg-zinc-50" id="how">
        <div className="mx-auto max-w-7xl inner">
          <h2 className="text-3xl subheading">How It Works</h2>
          <ol className="mt-6 list-decimal pl-6 space-y-2 text-sm text-zinc-700">
            <li>Choose a category.</li>
            <li>Select an expert.</li>
            <li>Book a session (Chat, Call, or Video Call).</li>
            <li>Get honest advice in real-time.</li>
          </ol>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-white" id="why">
        <div className="mx-auto max-w-7xl inner">
          <h2 className="text-3xl subheading">Why Choose Us</h2>
          <ul className="mt-6 list-disc pl-5 space-y-2 text-sm text-zinc-700">
            <li>Verified Professionals</li>
            <li>Pay-Per-Minute Model</li>
            <li>Transparent Pricing Example: Pay only for the time you use</li>
            <li>No Third-party Scripts — 100% Real Advice</li>
            <li>Diverse Categories for Every Need</li>
          </ul>
        </div>
      </section>

      {/* Become an Advisor */}
      <section className="py-12 sm:py-16 bg-zinc-50" id="advisor">
        <div className="mx-auto max-w-7xl inner">
          <h2 className="text-3xl subheading">Want to Become an Advisor?</h2>
          <p className="mt-3 text-sm text-zinc-700">If you're a working professional and want to share your knowledge, join us!</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="https://play.google.com/store/apps/details?id=com.easyadvising.consultant&pcampaignid=web_share" target="_blank" rel="noreferrer" className="btn-primary">Download the Easy Advising – Advisor App</a>
            <div className="flex gap-3">
              <a href="https://play.google.com/store/apps/details?id=com.easyadvising.consultant&pcampaignid=web_share" target="_blank" rel="noreferrer" className="btn-primary px-4 py-2">Android (Play Store)</a>
              <a href="https://apps.apple.com/app/id0000000000" target="_blank" rel="noreferrer" className="btn-primary px-4 py-2">iOS (App Store)</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - enhanced */}
      <section className="py-12 sm:py-16 bg-white" id="testimonials">
        <div className="mx-auto max-w-7xl inner">
          <h2 className="text-3xl subheading">What Our Users Say</h2>
          {/* Summary row */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-amber-700">
              <span className="inline-flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 ${i < 5 ? 'text-amber-500' : 'text-zinc-300'}`}><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.175 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </span>
              <span className="font-semibold">4.8/5</span>
            </div>
            <span className="text-zinc-600">Based on 1,200+ verified sessions</span>
          </div>
          {(() => {
            const tRef = useRef(null)
            const settings = {
              dots: false,
              arrows: false,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 4000,
              pauseOnHover: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive: [
                { breakpoint: 1280, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { slidesToShow: 1 } },
              ],
            }
            const reviews = [
              { name: 'Riya', role: 'Career Change', rating: 5, text: 'I got real-time advice from a top career coach. It changed my life!', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=crop' },
              { name: 'Aman', role: 'Nutrition Session', rating: 5, text: 'Had a great session with a nutritionist. Very practical and helpful!', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop' },
              { name: 'Sneha', role: 'Wellness', rating: 4, text: 'Loved the personal touch. No bots, only real people!', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop' },
            ]
            return (
              <div className="mt-6">
                <div className="mb-4 flex justify-end gap-2">
                  <button type="button" aria-label="Previous" onClick={() => tRef.current?.slickPrev()} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--brand-primary)]/40 text-[var(--brand-primary)] hover:bg-[color-mix(in_oklab,var(--brand-primary)_10%,white)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                  </button>
                  <button type="button" aria-label="Next" onClick={() => tRef.current?.slickNext()} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--brand-primary)]/40 text-[var(--brand-primary)] hover:bg-[color-mix(in_oklab,var(--brand-primary)_10%,white)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
                  </button>
                </div>
                <Slider ref={tRef} {...settings}>
                  {reviews.map((r, idx) => (
                    <div key={idx} className="px-2">
                      <TestimonialCard {...r} />
                    </div>
                  ))}
                </Slider>
              </div>
            )
          })()}
        </div>
      </section>

      {/* Blogs */}
      <section className="py-12 sm:py-16 bg-zinc-50" id="blogs">
        <div className="mx-auto max-w-7xl inner">
          <h2 className="text-3xl subheading">Read Our Blogs</h2>
          <p className="mt-3 text-sm text-zinc-700">Explore insightful blogs across career growth, health tips, financial planning, legal know-how, and more.</p>
          {/* <ul className="mt-4 list-disc pl-5 text-sm text-zinc-700 space-y-1">
            <li>Stay updated and informed</li>
            <li>Learn from real experts</li>
            <li>Discover what's trending in your field</li>
          </ul> */}
        </div>
      </section>

      {/* About Us */}
      <section className="py-12 sm:py-16 bg-white" id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl subheading">About Us</h2>
          <p className="mt-3 text-sm text-zinc-700">We are a Delhi-based startup working to bridge the gap between professionals and knowledge seekers.</p>
          <p className="mt-3 text-sm text-zinc-700">At <span className="font-semibold">Easy Advising</span>, we believe that the right guidance at the right time can change everything.</p>
          <p className="mt-3 text-sm text-zinc-700">Our mission is to make expert advice accessible to everyone.</p>
          <p className="mt-3 text-sm text-zinc-700">Every advisor on our platform is carefully verified, and you can connect via chat, call, or video, whenever you need support.</p>
          <p className="mt-3 text-sm text-zinc-700">We’re not just a platform—we’re your trusted decision partner.</p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-12 sm:py-16 bg-gradient-to-b from-[color-mix(in_oklab,var(--brand-secondary)_12%,white)] to-white">
        <div className="mx-auto max-w-3xl inner text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Ready to get started?</h2>
          <p className="mt-3 text-zinc-600">Book your session in seconds</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://play.google.com/store/apps/details?id=com.easyadvising.app&pcampaignid=web_share" target="_blank" rel="noreferrer" className="btn-primary">Create Account</a>
            <a href="https://play.google.com/store/apps/details?id=com.easyadvising.app&pcampaignid=web_share" target="_blank" rel="noreferrer" className="btn-primary">Book  Now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="mt-auto border-t border-zinc-200 bg-gradient-to-r from-[var(--ui-gradient-start)] to-[var(--ui-gradient-end)] text-white">
        <div className="mx-auto max-w-7xl inner py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold text-zinc-900">Know Us</h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li><a className="hover:text-zinc-900" href="#about">About Us</a></li>
                <li><a className="hover:text-zinc-900" href="#blogs">Blog</a></li>
                <li><a className="hover:text-zinc-900" href="#advisor">Become an Advisor</a></li>
                <li><a className="hover:text-zinc-900" href="#">IP Policy</a></li>
                <li><Link className="hover:text-zinc-900" to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Our Policies</h4>
              <ul className="mt-3 space-y-3 text-sm text-white/80">
                <li><Link className="hover:text-white" to="/privacy">Privacy Policy</Link></li>
                <li><Link className="hover:text-white" to="/refund">Refund Policy</Link></li>
                <li><Link className="hover:text-white" to="/terms">Terms and Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Other</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li><Link className="hover:text-white" to="/terms">Terms and Conditions</Link></li>
              </ul>
            </div>
            <div>
              <div className="mt-5">
                <h5 className="text-sm font-semibold">Download App</h5>
                <div className="mt-3 flex items-center gap-3">
                  <a href="https://apps.apple.com/app/id0000000000" target="_blank" rel="noreferrer">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.easyadvising.app&pcampaignid=web_share" target="_blank" rel="noreferrer">
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-15 object-contain" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} Easy Advising. All Rights Reserved.</span>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/17ZZeRHRK6/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.88-3.99 1.12 0 2.29.2 2.29.2v2.52h-1.29c-1.27 0-1.66.79-1.66 1.6V12h2.83l-.45 2.91h-2.38v7.04A10 10 0 0022 12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/easy-advising/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.78v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 5.99 3.33 5.99 7.66V24h-5v-6.8c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.6 1.76-2.6 3.58V24h-5V8.98z"/></svg>
              </a>
              <a href="https://instagram.com/easyadvising" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


