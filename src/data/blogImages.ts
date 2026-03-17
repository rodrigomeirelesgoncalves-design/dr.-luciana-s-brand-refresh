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

// New articles images
import gas1 from "@/assets/blog/gaslighting-1.jpg";
import gas2 from "@/assets/blog/gaslighting-2.jpg";
import trau1 from "@/assets/blog/trauma-bonding-1.jpg";
import trau2 from "@/assets/blog/trauma-bonding-2.jpg";
import fly1 from "@/assets/blog/flying-monkeys-1.jpg";
import fly2 from "@/assets/blog/flying-monkeys-2.jpg";
import cicl1 from "@/assets/blog/ciclo-abuso-1.jpg";
import cicl2 from "@/assets/blog/ciclo-abuso-2.jpg";
import narc_t1 from "@/assets/blog/narcisismo-trabalho-1.jpg";
import narc_t2 from "@/assets/blog/narcisismo-trabalho-2.jpg";
import cod1 from "@/assets/blog/codependencia-1.jpg";
import cod2 from "@/assets/blog/codependencia-2.jpg";
import lut1 from "@/assets/blog/luto-narcisista-1.jpg";
import lut2 from "@/assets/blog/luto-narcisista-2.jpg";
import manip1 from "@/assets/blog/manipulacao-financeira-1.jpg";
import manip2 from "@/assets/blog/manipulacao-financeira-2.jpg";
import tri1 from "@/assets/blog/triangulacao-1.jpg";
import tri2 from "@/assets/blog/triangulacao-2.jpg";
import par1 from "@/assets/blog/parentalidade-narcisista-1.jpg";
import par2 from "@/assets/blog/parentalidade-narcisista-2.jpg";
import sil1 from "@/assets/blog/silent-treatment-1.jpg";
import sil2 from "@/assets/blog/silent-treatment-2.jpg";
import desv1 from "@/assets/blog/desvalorizacao-descarte-1.jpg";
import desv2 from "@/assets/blog/desvalorizacao-descarte-2.jpg";
import auto1 from "@/assets/blog/autoestima-pos-abuso-1.jpg";
import auto2 from "@/assets/blog/autoestima-pos-abuso-2.jpg";
import ndig1 from "@/assets/blog/narcisismo-digital-1.jpg";
import ndig2 from "@/assets/blog/narcisismo-digital-2.jpg";
import recup1 from "@/assets/blog/recuperacao-pos-trauma-1.jpg";
import recup2 from "@/assets/blog/recuperacao-pos-trauma-2.jpg";

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
  // New articles
  "gaslighting-1": gas1,
  "gaslighting-2": gas2,
  "trauma-bonding-1": trau1,
  "trauma-bonding-2": trau2,
  "flying-monkeys-1": fly1,
  "flying-monkeys-2": fly2,
  "ciclo-abuso-1": cicl1,
  "ciclo-abuso-2": cicl2,
  "narcisismo-trabalho-1": narc_t1,
  "narcisismo-trabalho-2": narc_t2,
  "codependencia-1": cod1,
  "codependencia-2": cod2,
  "luto-narcisista-1": lut1,
  "luto-narcisista-2": lut2,
  "manipulacao-financeira-1": manip1,
  "manipulacao-financeira-2": manip2,
  "triangulacao-1": tri1,
  "triangulacao-2": tri2,
  "parentalidade-narcisista-1": par1,
  "parentalidade-narcisista-2": par2,
  "silent-treatment-1": sil1,
  "silent-treatment-2": sil2,
  "desvalorizacao-descarte-1": desv1,
  "desvalorizacao-descarte-2": desv2,
  "autoestima-pos-abuso-1": auto1,
  "autoestima-pos-abuso-2": auto2,
  "narcisismo-digital-1": ndig1,
  "narcisismo-digital-2": ndig2,
  "recuperacao-pos-trauma-1": recup1,
  "recuperacao-pos-trauma-2": recup2,
};

export const getBlogImage = (key: string): string => imageMap[key] || "";
export default imageMap;
