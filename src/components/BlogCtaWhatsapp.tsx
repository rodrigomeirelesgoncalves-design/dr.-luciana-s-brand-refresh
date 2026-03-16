import { getWhatsappLink } from "@/data/blogArticles";

import draLuciana1 from "@/assets/dra-luciana-1.jpeg";
import draLuciana2 from "@/assets/dra-luciana-2.png";
import draLuciana3 from "@/assets/dra-luciana-3.jpeg";
import draLuciana4 from "@/assets/dra-luciana-4.jpeg";
import draLuciana5 from "@/assets/dra-luciana-5.jpeg";
import draLuciana6 from "@/assets/dra-luciana-6.jpeg";
import draLuciana7 from "@/assets/dra-luciana-7.jpeg";

const draPhotos: Record<number, string> = {
  1: draLuciana1,
  2: draLuciana2,
  3: draLuciana3,
  4: draLuciana4,
  5: draLuciana5,
  6: draLuciana6,
  7: draLuciana7,
};

interface BlogCtaWhatsappProps {
  phrase: string;
  whatsappText: string;
  imageIndex: number;
}

const BlogCtaWhatsapp = ({ phrase, whatsappText, imageIndex }: BlogCtaWhatsappProps) => {
  return (
    <div className="cta-inline flex flex-col md:flex-row items-center gap-6 md:gap-8 not-prose">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent">
        <img
          src={draPhotos[imageIndex] || draPhotos[1]}
          alt="Dra. Luciana Spinelli - Psicóloga Especialista em Narcisismo"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <p className="font-heading text-lg md:text-xl text-foreground italic mb-4">
          "{phrase}"
        </p>
        <p className="text-muted-foreground text-sm mb-4">
          Dra. Luciana Spinelli · Psicóloga Clínica · CRP 18/03885
        </p>
        <a
          href={getWhatsappLink(whatsappText)}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-whatsapp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Conversar com a Dra. Luciana
        </a>
      </div>
    </div>
  );
};

export default BlogCtaWhatsapp;
