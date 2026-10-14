// Os pacotes dos PDFs são gerais; automaquiagem não tem preço próprio informado.
export const inpersonPrograms = [
  {
    id: "penteados",
    name: "Penteados",
    description:
      "Desenvolva sua técnica de penteados, com passo a passo detalhado e referências modernas e clássicas. Para começar ou aperfeiçoar sua prática.",
    poster: "curso-presencial-penteados",
    posterAlt:
      "Arte do curso de Penteados com Ana Lucia Porto, formatos turma e VIP, suporte e certificado de conclusão",
    message:
      "Olá, Ana! Tenho interesse no curso presencial de Penteados. Gostaria de confirmar o formato turma ou VIP, a carga horária, o valor total e as próximas datas.",
    materials: [
      {
        title: "Pentes e acessórios",
        items: [
          "Pente garfo e pente de cabo fino",
          "Bicos de pato e piranhas",
          "Grampos números 5 e 7",
          "Elásticos de látex e silicone",
          "Enchimento de rosca",
        ],
      },
      {
        title: "Produtos de preparação e acabamento",
        items: [
          "Spray extraforte e spray de brilho",
          "Texturizador líquido e pó texturizador",
          "Pomada finalizadora seca ou matte",
          "Mousse modelador",
          "Óleo reparador de pontas",
          "Proteção térmica líquida",
        ],
      },
    ],
  },
  {
    id: "maquiagem-pro",
    name: "Maquiagem Pro",
    description:
      "Uma formação de maquiagem para quem quer iniciar ou aperfeiçoar sua atuação. Combine com Ana o conteúdo e a prática de acordo com o seu momento.",
    poster: "curso-presencial-maquiagem-pro",
    posterAlt:
      "Arte do curso de Maquiagem Pro com Ana Lucia Porto, formatos turma e VIP, suporte e certificado de conclusão",
    message:
      "Olá, Ana! Tenho interesse no curso presencial de Maquiagem Pro. Gostaria de conhecer o conteúdo, os materiais, os formatos turma e VIP e o investimento total.",
    materials: [
      {
        title: "Preparação de pele",
        items: [
          "Demaquilante, água micelar, sabonete e tônico facial",
          "Hidratantes e primers para diferentes tipos de pele",
          "Protetor solar facial",
        ],
      },
      {
        title: "Base e correção",
        items: [
          "Bases e corretivos de tons variados",
          "Contornos cremosos ou bases mais escuras; iluminadores líquidos ou cremosos",
          "Pó solto translúcido, pó compacto e blushes",
          "Fixador de maquiagem em spray",
        ],
      },
      {
        title: "Pincéis e esponjas",
        items: [
          "Kit de pincéis com pelo menos 12 peças",
          "Pincéis para base, pó, blush, contorno e iluminador",
          "Pincéis de esfumar, aplicar sombra, chanfrado, lábios e detalhes",
          "Esponjas de maquiagem: 2 a 3 unidades",
        ],
      },
      {
        title: "Olhos",
        items: [
          "Paletas de sombras neutras e coloridas e primer de olhos",
          "Delineadores em gel, líquido e caneta",
          "Lápis preto, bege e marrom e máscara de cílios",
          "Cílios postiços, cola para cílios e curvex",
        ],
      },
      {
        title: "Sobrancelhas",
        items: [
          "Lápis ou sombra e gel ou máscara para sobrancelhas",
          "Tesourinha, pinça e escovinha",
        ],
      },
      {
        title: "Lábios",
        items: [
          "Hidratante labial e lápis de boca em tons variados",
          "Batons líquidos, cremosos e matte e gloss",
          "Paleta de batons opcional",
        ],
      },
      {
        title: "Higiene e organização",
        items: [
          "Álcool 70% em spray, algodão e hastes flexíveis",
          "Toalhas descartáveis ou lenços de papel",
          "Espátulas e plaquinhas de inox e limpador de pincéis",
          "Borrifador com água ou água termal e máscara facial",
        ],
      },
    ],
  },
  {
    id: "automaquiagem",
    name: "Automaquiagem",
    description:
      "Aprenda a fazer sua própria maquiagem com orientação de Ana e passo a passo detalhado. Consulte o conteúdo, a duração e o investimento para o formato desejado.",
    poster: "curso-presencial-automaquiagem",
    posterAlt:
      "Arte do curso de Automaquiagem com Ana Lucia Porto, formatos turma e VIP, suporte e certificado de conclusão",
    message:
      "Olá, Ana! Tenho interesse no curso presencial de Automaquiagem. Pode me informar o conteúdo, a duração, os materiais, o investimento e a disponibilidade para turma ou VIP?",
    materials: [],
  },
];

export const groupTraining = {
  price: 960,
  minimumStudents: 4,
  hours: 15,
  days: 3,
  hoursPerDay: 5,
  supportMonths: 2,
};

export const vipTraining = [
  { hours: 5, price: 890 },
  { hours: 10, price: 1690 },
  { hours: 15, price: 2590 },
  { hours: 20, price: 2890 },
];

export const enrollment = { fee: 80, depositPercent: 50 };

export const cuttingMaterials = [
  {
    title: "Ferramentas de corte",
    items: [
      "Tesoura de corte profissional de 6 ou 6,5 polegadas e tesoura de desfiar",
      "Máquina de corte com pentes de 1 a 4 mm e navalha com lâminas descartáveis",
      "Pentes fino, largo e de cabo de metal e borrifador de água",
      "Presilhas, escova raquete, capa de corte e avental profissional",
    ],
  },
  {
    title: "Ferramentas para escova",
    items: [
      "Secador profissional de 2.000 W ou mais, com bico direcionador",
      "Escovas térmicas tamanhos 2, 3 e 4 e escova ventilada ou raquete",
      "Pente de cabo de rato, grampos, presilhas e escova de acabamento",
    ],
  },
  {
    title: "Produtos profissionais",
    items: [
      "Shampoo neutro ou de limpeza profunda e condicionador hidratante",
      "Leave-in ou creme para escova e protetor térmico",
      "Óleo reparador ou sérum, spray de brilho ou finalizador e pomada ou cera",
    ],
  },
];

export const inpersonQuestions = [
  {
    question: "Os cursos presenciais são para iniciantes?",
    answer:
      "A proposta de Ana atende tanto quem está começando quanto profissionais que buscam aperfeiçoamento. Conte sua experiência e o que deseja aprender para combinar o conteúdo e o formato adequados.",
  },
  {
    question: "Qual é a diferença entre turma e VIP?",
    answer:
      "O pacote em turma começa com 4 pessoas e tem 15 horas de aulas, divididas em 3 tardes de 5 horas. O VIP oferece opções de 5, 10, 15 ou 20 horas. Combine com Ana o curso, o conteúdo e a organização das aulas. Para automaquiagem, confirme os formatos, valores e duração na consulta.",
  },
  {
    question: "Onde acontecem as aulas e quais são as próximas datas?",
    answer:
      "As aulas podem acontecer no estúdio de Ana ou no local da aluna, conforme combinado. Fora do estúdio, há taxa de deslocamento e a aluna fica responsável por conseguir a modelo para as aulas. Consulte endereço, datas e horários disponíveis pelo WhatsApp antes de reservar.",
  },
  {
    question: "Como funciona a reserva e o pagamento?",
    answer:
      "A reserva é confirmada com sinal de 50% do valor do curso e taxa de inscrição de R$ 80, pagos via Pix. O restante é pago no dia do curso, por Pix, dinheiro ou cartão, com juros da maquineta. Confirme o valor total, o deslocamento quando necessário e as condições de cancelamento antes do pagamento.",
  },
  {
    question: "Preciso levar materiais ou conseguir uma modelo?",
    answer:
      "Consulte as listas de referência de Penteados, Maquiagem Pro e Corte e Escova nesta página. Combine quais itens são necessários e como serão organizados no seu curso. Na turma, a responsabilidade pelas modelos é a combinar; para aulas fora do estúdio, a aluna precisa conseguir a modelo.",
  },
  {
    question: "O curso tem certificado e suporte após as aulas?",
    answer:
      "O pacote em turma inclui certificado digital e impresso e assessoria por WhatsApp por 2 meses após o curso. As artes dos cursos também apresentam certificado de conclusão e suporte exclusivo. Confirme com Ana o certificado e as condições de suporte do formato VIP ou de automaquiagem que escolher.",
  },
  {
    question: "Quanto custa o curso de automaquiagem?",
    answer:
      "O investimento, a duração e a organização do curso de automaquiagem são informados diretamente por Ana pelo WhatsApp. Conte se prefere turma ou VIP para receber os detalhes antes de reservar.",
  },
];
