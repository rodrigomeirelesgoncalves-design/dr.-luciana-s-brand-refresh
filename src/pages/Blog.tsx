import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";
import { getBlogImage } from "@/data/blogImages";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";

const Blog = () => {
  return (
    <>
      <BlogHeader />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 text-center bg-secondary/30">
          <div className="container mx-auto px-6">
            <span className="text-sm font-body tracking-widest uppercase text-accent">Blog</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-foreground">
              Conhecimento é proteção
            </h1>
            <p className="text-body-text max-w-2xl mx-auto text-lg">
              Artigos sobre narcisismo, relacionamentos tóxicos e reconstrução emocional para mulheres de alto valor.
            </p>
          </div>
        </section>

        {/* Featured */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
              <div className="rounded-lg overflow-hidden aspect-[16/10]">
                <img
                  src={getBlogImage(blogArticles[0].image1)}
                  alt={blogArticles[0].image1Alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-xs font-body tracking-widest uppercase text-accent border border-accent px-3 py-1 rounded-full">
                  {blogArticles[0].category}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl mt-4 mb-4 text-foreground">
                  {blogArticles[0].title}
                </h2>
                <p className="text-body-text mb-4">{blogArticles[0].excerpt}</p>
                <p className="text-sm text-muted-foreground mb-6">
                  {blogArticles[0].date} · {blogArticles[0].readTime}
                </p>
                <Link
                  to={`/blog/${blogArticles[0].slug}`}
                  className="font-body text-sm tracking-wider uppercase text-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  Ler artigo completo →
                </Link>
              </div>
            </div>

            {/* Grid */}
            <h2 className="font-heading text-2xl md:text-3xl mb-10 text-foreground">Todos os artigos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={getBlogImage(article.image1)}
                      alt={article.image1Alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-body tracking-widest uppercase text-accent">
                      {article.category}
                    </span>
                    <h3 className="font-heading text-lg mt-2 mb-3 text-foreground group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-body-text text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                    <p className="text-xs text-muted-foreground">
                      {article.date} · {article.readTime}
                    </p>
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

export default Blog;
