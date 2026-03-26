export interface BrazilState {
  uf: string;
  name: string;
  cities: string[];
}

export const brazilStates: BrazilState[] = [
  { uf: "AC", name: "Acre", cities: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó", "Brasileia", "Senador Guiomard", "Plácido de Castro", "Xapuri", "Epitaciolândia"] },
  { uf: "AL", name: "Alagoas", cities: ["Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios", "União dos Palmares", "Penedo", "São Miguel dos Campos", "Marechal Deodoro", "Delmiro Gouveia", "Coruripe"] },
  { uf: "AP", name: "Amapá", cities: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Mazagão", "Porto Grande", "Tartarugalzinho", "Pedra Branca do Amapari", "Vitória do Jari", "Calçoene"] },
  { uf: "AM", name: "Amazonas", cities: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari", "Tefé", "Tabatinga", "Maués", "Iranduba", "Humaitá"] },
  { uf: "BA", name: "Bahia", cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas"] },
  { uf: "CE", name: "Ceará", cities: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral", "Crato", "Itapipoca", "Maranguape", "Iguatu", "Quixadá"] },
  { uf: "DF", name: "Distrito Federal", cities: ["Brasília", "Ceilândia", "Taguatinga", "Samambaia", "Plano Piloto", "Águas Claras", "Recanto das Emas", "Gama", "Santa Maria", "Sobradinho"] },
  { uf: "ES", name: "Espírito Santo", cities: ["Vitória", "Vila Velha", "Serra", "Cariacica", "Cachoeiro de Itapemirim", "Linhares", "São Mateus", "Colatina", "Guarapari", "Aracruz"] },
  { uf: "GO", name: "Goiás", cities: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Águas Lindas de Goiás", "Valparaíso de Goiás", "Trindade", "Formosa", "Novo Gama"] },
  { uf: "MA", name: "Maranhão", cities: ["São Luís", "Imperatriz", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas", "Santa Inês"] },
  { uf: "MT", name: "Mato Grosso", cities: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra", "Cáceres", "Sorriso", "Lucas do Rio Verde", "Primavera do Leste", "Barra do Garças"] },
  { uf: "MS", name: "Mato Grosso do Sul", cities: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã", "Naviraí", "Nova Andradina", "Aquidauana", "Sidrolândia", "Maracaju"] },
  { uf: "MG", name: "Minas Gerais", cities: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Ribeirão das Neves", "Uberaba", "Governador Valadares", "Ipatinga"] },
  { uf: "PA", name: "Pará", cities: ["Belém", "Ananindeua", "Santarém", "Marabá", "Castanhal", "Parauapebas", "Marituba", "Abaetetuba", "Cametá", "Bragança"] },
  { uf: "PB", name: "Paraíba", cities: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Sousa", "Cabedelo", "Cajazeiras", "Guarabira", "Sapé"] },
  { uf: "PR", name: "Paraná", cities: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "São José dos Pinhais", "Foz do Iguaçu", "Colombo", "Guarapuava", "Paranaguá"] },
  { uf: "PE", name: "Pernambuco", cities: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina", "Paulista", "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Vitória de Santo Antão"] },
  { uf: "PI", name: "Piauí", cities: ["Teresina", "Parnaíba", "Picos", "Piripiri", "Floriano", "Campo Maior", "Barras", "União", "Altos", "José de Freitas"] },
  { uf: "RJ", name: "Rio de Janeiro", cities: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "São João de Meriti", "Campos dos Goytacazes", "Petrópolis", "Volta Redonda"] },
  { uf: "RN", name: "Rio Grande do Norte", cities: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macaíba", "Ceará-Mirim", "Caicó", "Assu", "Currais Novos", "São José de Mipibu"] },
  { uf: "RS", name: "Rio Grande do Sul", cities: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande"] },
  { uf: "RO", name: "Rondônia", cities: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal", "Rolim de Moura", "Jaru", "Guajará-Mirim", "Ouro Preto do Oeste", "Pimenta Bueno"] },
  { uf: "RR", name: "Roraima", cities: ["Boa Vista", "Rorainópolis", "Caracaraí", "Alto Alegre", "Pacaraima", "Cantá", "Mucajaí", "Bonfim", "Normandia", "São João da Baliza"] },
  { uf: "SC", name: "Santa Catarina", cities: ["Florianópolis", "Joinville", "Blumenau", "São José", "Chapecó", "Criciúma", "Itajaí", "Lages", "Jaraguá do Sul", "Palhoça"] },
  { uf: "SP", name: "São Paulo", cities: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Santo André", "Osasco", "São José dos Campos", "Ribeirão Preto", "Sorocaba", "Santos"] },
  { uf: "SE", name: "Sergipe", cities: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "São Cristóvão", "Estância", "Tobias Barreto", "Itabaianinha", "Simão Dias", "Capela"] },
  { uf: "TO", name: "Tocantins", cities: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins", "Guaraí", "Colinas do Tocantins", "Dianópolis", "Tocantinópolis", "Miracema do Tocantins"] },
];
