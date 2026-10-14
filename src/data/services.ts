// Valores transcritos dos materiais oficiais; faixas não são preços fixos.
export const serviceGroups = [
  {
    title: "Maquiagem & penteados",
    subtitle: "Para festas, eventos e momentos especiais.",
    services: [
      { name: "Maquiagem social", price: 180 },
      { name: "Penteado social", price: 180 },
      { name: "Penteado infantil", price: 160, maxPrice: 180 },
      { name: "Maquiagem infantil", price: 100 },
    ],
  },
  {
    title: "Cuidado com o cabelo",
    subtitle: "Do corte à finalização, no seu endereço.",
    services: [
      { name: "Escova", price: 50, startingAt: true },
      { name: "Babyliss", price: 80, startingAt: true },
      { name: "Tri-ondas", price: 120, startingAt: true },
      { name: "Corte feminino e infantil", price: 85 },
    ],
  },
];

export const bridalServices = [
  { name: "Maquiagem de noiva", price: 600 },
  { name: "Penteado de noiva", price: 600 },
  { name: "Teste de maquiagem", price: 550 },
  { name: "Teste de penteado", price: 550 },
  { name: "Acompanhamento na cerimônia", price: 1200 },
];

export const serviceQuestions = [
  {
    question: "Onde é feito o atendimento em domicílio?",
    answer:
      "Ana atende em domicílio em Campina Grande, Paraíba. Envie seu bairro e endereço pelo WhatsApp para confirmar disponibilidade e condições de deslocamento. Para outras localidades, consulte antes de reservar.",
  },
  {
    question: "Como agendar cabelo e maquiagem?",
    answer:
      "Envie pelo WhatsApp o serviço desejado, a data, o horário em que precisa estar pronta e o bairro do atendimento. Ana confirma a disponibilidade, o valor e os detalhes da reserva com você.",
  },
  {
    question: "Os valores incluem deslocamento?",
    answer:
      "O catálogo de noivas informa que o traslado é cobrado à parte. Nos demais serviços, confirme as condições de deslocamento e o valor total pelo WhatsApp antes de reservar. Escova, babyliss e tri-ondas têm valores a partir dos preços apresentados.",
  },
  {
    question: "É necessário um sinal para reservar?",
    answer:
      "O material de atendimento informa sinal de 30% para os serviços sociais e de cabelo, descontado do valor final. Para noivas, o catálogo informa sinal de 50% e o restante no dia. Confirme as condições de reserva e cancelamento antes do pagamento.",
  },
  {
    question: "Como preparar o cabelo para o penteado?",
    answer:
      "A orientação do material é estar com o cabelo limpo, lavado com shampoo e condicionador, sem hidratação. Combine com Ana os cuidados específicos para o penteado e para o seu cabelo.",
  },
  {
    question: "Há atendimento de maquiagem e penteado para noivas?",
    answer:
      "Sim. O catálogo inclui maquiagem e penteado de noiva, testes de maquiagem e penteado e acompanhamento na cerimônia. O acompanhamento tem reserva de 3 horas; consulte a organização dos horários e o deslocamento para o seu evento.",
  },
];

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function formatPrice(service: {
  price: number;
  maxPrice?: number;
  startingAt?: boolean;
}) {
  const value = currency.format(service.price);
  if (service.maxPrice)
    return `${value} a ${currency.format(service.maxPrice)}`;
  return service.startingAt ? `A partir de ${value}` : value;
}
