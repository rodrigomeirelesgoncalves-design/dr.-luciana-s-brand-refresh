// Blog image imports
import dep1 from "@/assets/blog/dependencia-emocional-1.jpg";
import dep2 from "@/assets/blog/dependencia-emocional-2.jpg";
import perf1 from "@/assets/blog/perfil-mulher-narcisista-1.jpg";
import perf2 from "@/assets/blog/perfil-mulher-narcisista-2.jpg";
import sind1 from "@/assets/blog/sindrome-estocolmo-1.jpg";
import sind2 from "@/assets/blog/sindrome-estocolmo-2.jpg";
import cov1 from "@/assets/blog/narcisismo-covert-1.jpg";
import cov2 from "@/assets/blog/narcisismo-covert-2.jpg";
import fil1 from "@/assets/blog/filhos-narcisistas-1.jpg";
import fil2 from "@/assets/blog/filhos-narcisistas-2.jpg";
import hoov1 from "@/assets/blog/hoovering-1.jpg";
import hoov2 from "@/assets/blog/hoovering-2.jpg";
import love1 from "@/assets/blog/love-bombing-1.jpg";
import love2 from "@/assets/blog/love-bombing-2.jpg";
import lim1 from "@/assets/blog/limites-saudaveis-1.jpg";
import lim2 from "@/assets/blog/limites-saudaveis-2.jpg";
import imp1 from "@/assets/blog/impacto-saude-1.jpg";
import imp2 from "@/assets/blog/impacto-saude-2.jpg";
import rec1 from "@/assets/blog/reconstrucao-identidade-1.jpg";
import rec2 from "@/assets/blog/reconstrucao-identidade-2.jpg";

const imageMap: Record<string, string> = {
  "dependencia-emocional-1": dep1,
  "dependencia-emocional-2": dep2,
  "perfil-mulher-narcisista-1": perf1,
  "perfil-mulher-narcisista-2": perf2,
  "sindrome-estocolmo-1": sind1,
  "sindrome-estocolmo-2": sind2,
  "narcisismo-covert-1": cov1,
  "narcisismo-covert-2": cov2,
  "filhos-narcisistas-1": fil1,
  "filhos-narcisistas-2": fil2,
  "hoovering-1": hoov1,
  "hoovering-2": hoov2,
  "love-bombing-1": love1,
  "love-bombing-2": love2,
  "limites-saudaveis-1": lim1,
  "limites-saudaveis-2": lim2,
  "impacto-saude-1": imp1,
  "impacto-saude-2": imp2,
  "reconstrucao-identidade-1": rec1,
  "reconstrucao-identidade-2": rec2,
};

export const getBlogImage = (key: string): string => imageMap[key] || "";
export default imageMap;
