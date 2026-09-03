import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import BlogSection from "@/components/BlogSection";
import ScrollToTop from "@/components/ScrollToTop";
import ProjectsSection from "@/components/ProjectsSection";
import NotesSection from "@/components/NotesSection";
import CurrentlySection from "@/components/CurrentlySection";
import Script from "next/script";
import { getSubstackPosts } from "@/lib/substack";

export default async function Home() {
  const posts = await getSubstackPosts();
  return (
    <div className="min-h-screen">
      <Topbar />
      <main className="mx-4 md:mx-8 lg:mx-[8rem]">
        <Header />

        {/* About Section */}
        <section className="py-16 md:py-24 lg:py-32" aria-labelledby="about-title">
          <div className="max-w-3xl mx-auto">
            <h2 id="about-title" className="text-4xl md:text-5xl font-thunder mb-8">
              About Me
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                I'm Carlos. A designer who builds things with a purpose.
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                Over the last 10+ years, I've designed, led, and launched products at the intersection of design, technology, and (recently) climate action.
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                My journey as a designer goes back to my teenage years, digitizing old graffitis in Photoshop. Without knowing it, a mindset started growing then: <span className="text-white font-semibold mr-2">find a purpose, learn how to do it.</span>I became a self-taught designer. Spent a couple of years training and nurturing from different experiences: from graphic design, branding and video editing to UX/UI, a splash of frontend development and a lot of doing, doing and doing. I became a jack of all trades, but always looking for making an impact. To meaningfully change.
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                Since 2022, I've been leading product design at the Open Earth Foundation, developing open-source digital tools to accelerate climate action. In 2025, I became Head of Impact, ensuring our tools contribute to real-world emissions reductions and climate strategy implementation across 5,500+ cities in Latin America.
              </p>              
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                I now also have my own project ("Rediseñar"), a space where I keep building tools for citizen and climate action against environmental and social crisis in Argentina. My purpose is to collaborate and constantly to share how design goes beyond definitions, users and aesthetics. <span className="text-white font-semibold mr-2">It's a powerful tool we have for social change.</span>
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400">Years designing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5,500+</div>
                  <div className="text-sm text-gray-400">Cities served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400">Climate tools launched</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$7M+</div>
                  <div className="text-sm text-gray-400">Won in grants</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CurrentlySection />
        <ProjectsSection />
        <NotesSection />
        <BlogSection posts={posts} />

        {/* Contact Section */}
        <section className="py-16 md:py-24 lg:py-32 border-t border-gray-700" aria-labelledby="contact-title">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="contact-title" className="text-3xl md:text-4xl font-thunder mb-6">
              Let's connect
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Interested in collaborating, creating something together or just want to say hi? Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:carlos@redisen.ar"
                className="inline-block bg-white text-black border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Send email to Carlos"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/carlosgraffi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent text-white border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="View LinkedIn profile"
              >
                My LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Carbon Info Section */}
        <section
          className="py-24 min-w-screen mx-auto justify-items-center align-middle w-full"
          aria-label="Carbon emissions information"
        >
          <div className="py-12 text-gray-400 max-w-sm text-center text-sm">
            <p className="block pb-4 tracking-widest text-xl">~0.05g of CO2</p>
            <p className="block pb-4">
              Generated per visit. This portfolio is built with environmental consciousness and achieved the highest rating (A+) on{" "}
              <a
                href="https://www.websitecarbon.com/website/carlosgraffi-com/"
                className="text-blue underline hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View carbon emissions report"
              >
                WebsiteCarbon
              </a>
              , being more efficient than 95% of websites globally.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div id="wcb" className="carbonbadge wcb-d"></div>
            <a
              href="https://www.thegreenwebfoundation.org/green-web-check/?url=https%3A%2F%2Fwww.carlosgraffi.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Green hosting verification by The Green Web Foundation"
            >
              <img
                src="https://app.greenweb.org/api/v3/greencheckimage/www.carlosgraffi.com?nocache=true"
                alt="This website runs on green hosting - verified by thegreenwebfoundation.org"
                width={200}
                height={95}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
          <Script
            src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
            strategy="lazyOnload"
          />
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}