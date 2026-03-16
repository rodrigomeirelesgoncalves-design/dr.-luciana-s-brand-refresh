import { useParams, Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";
import { getBlogImage } from "@/data/blogImages";
import BlogCtaWhatsapp from "@/components/BlogCtaWhatsapp";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { useEffect } from "react";

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <>
        <BlogHeader />
        <main className="pt-32 pb-20 text-center container mx-auto px-6">
          <h1 className="font-heading text-3xl mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-accent hover:underline">Voltar ao blog</Link>
        </main>
        <BlogFooter />
      </>
    );
  }

  // Split content into paragraphs and render with images and CTAs interspersed
  const paragraphs = article.content.split("\n\n");
  const totalParagraphs = paragraphs.length;
  const image1Position = Math.floor(totalParagraphs * 0.25);
  const ctaPosition = Math.floor(totalParagraphs * 0.5);
  const image2Position = Math.floor(totalParagraphs * 0.75);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Person",
      name: "Dra. Luciana Spinelli",
      jobTitle: "Psicóloga Clínica",
      url: "https://spinelli-site-design.lovable.app"
    },
    datePublished: "2026-03-16",
    publisher: {
      "@type": "Organization",
      name: "Luciana Spinelli Psicologia"
    },
    mainEntityOfPage: {
      "@type": "WebPage"
    },
    keywords: article.keywords.join(", ")
  };

  const faqJsonLd = article.faqSchema.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqSchema.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;

  const renderParagraph = (text: string, index: number) => {
    const trimmed = text.trim();
    if (trimmed.startsWith("## ")) {
      return <h2 key={index}>{trimmed.replace("## ", "")}</h2>;
    }
    if (trimmed.startsWith("### ")) {
      return <h3 key={index}>{trimmed.replace("### ", "")}</h3>;
    }
    // Handle bold text
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={index}>
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  };

  return (
    <>
      <BlogHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <main className="pt-20">
        {/* Article Header */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ← Voltar ao blog
              </Link>
              <span className="text-xs font-body tracking-widest uppercase text-accent border border-accent px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-muted-foreground text-sm">
              {article.date} · {article.readTime}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6 max-w-3xl article-content">
            {paragraphs.map((paragraph, index) => (
              <div key={index}>
                {renderParagraph(paragraph, index)}

                {index === image1Position && (
                  <img
                    src={getBlogImage(article.image1)}
                    alt={article.image1Alt}
                    className="w-full rounded-lg my-8 shadow-md"
                    loading="lazy"
                  />
                )}

                {index === ctaPosition && (
                  <BlogCtaWhatsapp
                    phrase={article.ctaPhrase}
                    whatsappText={article.ctaWhatsappText}
                    imageIndex={article.ctaImage}
                  />
                )}

                {index === image2Position && (
                  <img
                    src={getBlogImage(article.image2)}
                    alt={article.image2Alt}
                    className="w-full rounded-lg my-8 shadow-md"
                    loading="lazy"
                  />
                )}
              </div>
            ))}

            {/* Final CTA */}
            <div className="mt-16">
              <BlogCtaWhatsapp
                phrase={article.ctaPhrase}
                whatsappText={article.ctaWhatsappText}
                imageIndex={article.ctaImage}
              />
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-2xl md:text-3xl text-center mb-10">Artigos relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {blogArticles
                .filter((a) => a.slug !== article.slug)
                .slice(0, 3)
                .map((related) => (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={getBlogImage(related.image1)}
                        alt={related.image1Alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-accent uppercase tracking-widest">{related.category}</span>
                      <h3 className="font-heading text-base mt-2 text-foreground group-hover:text-accent transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <BlogFooter />
    </>
  );
};

export default BlogArticlePage;
