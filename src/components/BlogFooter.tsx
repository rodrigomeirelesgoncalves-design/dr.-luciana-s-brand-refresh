import { Link } from "react-router-dom";

const BlogFooter = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-xl text-primary-foreground mb-4">Luciana Spinelli</h3>
            <p className="text-primary-foreground/60 text-sm font-body leading-relaxed">
              Psicóloga Clínica · CRP 18/03885<br />
              Especialista em reconstrução de identidade e libertação do ciclo narcisista.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm tracking-wider uppercase text-primary-foreground/80 mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Início</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-sm tracking-wider uppercase text-primary-foreground/80 mb-4">Contato</h4>
            <a
              href="https://wa.me/5566999784828?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              WhatsApp: (66) 99978-4828
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Luciana Spinelli. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
