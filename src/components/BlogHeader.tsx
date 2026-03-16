import { Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl md:text-2xl text-foreground">
          Luciana Spinelli
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-body tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
            Início
          </Link>
          <Link to="/blog" className="text-sm font-body tracking-wider uppercase text-foreground font-medium">
            Blog
          </Link>
        </nav>
        <a
          href="https://wa.me/5566999784828?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20discri%C3%A7%C3%A3o."
          target="_blank"
          rel="noopener noreferrer"
          className="cta-whatsapp text-xs py-2 px-4"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
};

export default BlogHeader;
