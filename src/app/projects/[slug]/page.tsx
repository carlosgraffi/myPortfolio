
import Topbar from "@/components/Topbar";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, ExternalLink, Users, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

// Handle async params properly in Next.js 15
async function getSlugFromParams(params: { slug?: string | string[] | Record<string, string> }): Promise<string> {
  if (!params) throw new Error("No params provided");
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  if (!slug) throw new Error("No slug in params");
  if (typeof slug === 'string') return slug;
  if (Array.isArray(slug)) return slug[0];
  return Object.values(slug)[0];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const slug = await getSlugFromParams(params);
    const project = getProjectBySlug(slug);

    if (!project) {
      return {
        title: 'Project not found | Carlos Graffi',
      };
    }

    return {
      title: `${project.title} | Carlos Graffi`,
      description: project.description,
      openGraph: {
        title: `${project.title} | Carlos Graffi`,
        description: project.description,
        url: `https://carlosgraffi.com/projects/${slug}`,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${project.title} | Carlos Graffi`,
        description: project.description,
      },
    };
  } catch (error) {
    console.error('Error in generateMetadata:', error);
    return {
      title: 'Projects | Carlos Graffi',
    };
  }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  try {
    const slug = await getSlugFromParams(params);
    const project = getProjectBySlug(slug);

    if (!project) {
      notFound();
    }

    return (
      <div className="min-h-screen">
        <Topbar />
        <main className="mx-4 md:mx-8 lg:mx-[8rem]">
          {/* Breadcrumb */}
          <nav className="py-6" aria-label="Breadcrumb">
            <ol className="flex text-sm text-gray-400">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
                >
                  Home
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
                >
                  Projects
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
              </li>
              <li className="text-white truncate max-w-[200px]" aria-current="page">
                {project.title}
              </li>
            </ol>
          </nav>

          {/* Back Button */}
          <Link 
            href="/projects" 
            className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
            aria-label="Back to all projects"
          >
            <ArrowLeft size={16} className="mr-2" />
            All Projects
          </Link>

          {/* Project Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-thunder mb-8">
              {project.title}
            </h1>

            {/* Project Details */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                <Calendar size={16} className="text-gray-400" />
                {project.year}
              </span>

              <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                <MapPin size={16} className="text-gray-400" />
                {project.organization}
              </span>

              {project.duration && (
                <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                  <Clock size={16} className="text-gray-400" />
                  {project.duration}
                </span>
              )}

              {project.impact && (
                <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                  <Users size={16} className="text-gray-400" />
                  {project.impact}
                </span>
              )}
            </div>

            {/* Role */}
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                Role: {project.role}
              </span>
            </div>

            {/* Technologies */}
            {project.technologies && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Project Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              {project.imageUrl ? (
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} project preview`}
                  className="w-full h-full object-top object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">{project.title}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Content */}
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <section className="mb-12" aria-labelledby="description-heading">
              <h2 id="description-heading" className="text-3xl font-bold mb-6 text-white">
                Description
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </section>

            {/* The Context */}
            {(project.context || project.longDescription) && (
              <section className="mb-12" aria-labelledby="context-heading">
                <h2 id="context-heading" className="text-3xl font-bold mb-6 text-white">
                  The Context
                </h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    {project.context ? (
                      project.context.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))
                    ) : (
                      project.longDescription!.split('\n\n').slice(0, 1).map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* The Problem */}
            {(project.problem || project.longDescription) && (
              <section className="mb-12" aria-labelledby="problem-heading">
                <h2 id="problem-heading" className="text-3xl font-bold mb-6 text-white">
                  The Problem
                </h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    {project.problem ? (
                      project.problem.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))
                    ) : (
                      project.longDescription!.split('\n\n').slice(1, 2).map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Our Take */}
            {(project.ourTake || project.longDescription) && (
              <section className="mb-12" aria-labelledby="take-heading">
                <h2 id="take-heading" className="text-3xl font-bold mb-6 text-white">
                  Our Take
                </h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    {project.ourTake ? (
                      project.ourTake.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))
                    ) : (
                      project.longDescription!.split('\n\n').slice(2, 3).map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* The Process */}
            {(project.process || project.longDescription) && (
              <section className="mb-12" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-3xl font-bold mb-6 text-white">
                  The Process
                </h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    {project.process ? (
                      project.process.split('\n\n').map((paragraph, i) => {
                        // Check if this paragraph contains bullet points
                        if (paragraph.includes('- ')) {
                          const listItems = paragraph.split('\n- ');
                          const intro = listItems.shift(); // Get the text before the first bullet

                          return (
                            <div key={i}>
                              {intro && <p className="mb-4">{intro}</p>}
                              <ul className="list-none pl-0 space-y-3">
                                {listItems.map((item, j) => (
                                  <li key={j} className="flex items-start">
                                    <span className="text-xl mr-3 text-gray-400">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        } else {
                          // Regular paragraph
                          return (
                            <p key={i}>
                              {paragraph}
                            </p>
                          );
                        }
                      })
                    ) : (
                      project.longDescription!.split('\n\n').slice(3).map((paragraph, i) => {
                        // Check if this paragraph contains bullet points
                        if (paragraph.includes('- ')) {
                          const listItems = paragraph.split('\n- ');
                          const intro = listItems.shift(); // Get the text before the first bullet

                          return (
                            <div key={i}>
                              {intro && <p className="mb-4">{intro}</p>}
                              <ul className="list-none pl-0 space-y-3">
                                {listItems.map((item, j) => (
                                  <li key={j} className="flex items-start">
                                    <span className="text-xl mr-3 text-gray-400">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        } else {
                          // Regular paragraph
                          return (
                            <p key={i}>
                              {paragraph}
                            </p>
                          );
                        }
                      })
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Outcomes section if available */}
            {project.outcomes && project.outcomes.length > 0 && (
              <section className="mb-12" aria-labelledby="outcomes-heading">
                <h2 id="outcomes-heading" className="text-3xl font-bold mb-6 text-white">
                  The Outcomes
                </h2>
                <ul className="list-none pl-0 space-y-4">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-xl mr-3 text-green-400">✓</span>
                      <span className="text-gray-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Project Links */}
            <section className="pt-8 pb-20" aria-labelledby="links-heading">
              <h2 id="links-heading" className="text-2xl font-bold mb-6">
                Explore Project
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                {project.projectUrl ? (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-black border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Visit live project"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visit Project
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center bg-gray-700 text-gray-400 border-2 border-gray-700 py-3 px-8 font-bold text-sm tracking-wider">
                    Internal Project
                  </span>
                )}
                
                <a
                  href="mailto:carlos@redisenar.com"
                  className="inline-flex items-center justify-center bg-transparent text-white border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Discuss this project"
                >
                  Discuss Project
                </a>
              </div>
            </section>
          </div>
        </main>
        <ScrollToTop />
      </div>
    );
  } catch (error) {
    console.error('Error in ProjectPage:', error);
    notFound();
  }
}
