// BASE DE DADOS ESTÁTICA – CABO FRIO
const cidadeData = {
  familia: {
    titulo: "🌊 Roteiro Família",
    praias: [
      "Praia das Conchas – mar calmo, ideal para crianças",
      "Praia do Forte – quiosques com playground"
    ],
    restaurantes: [
      "Quintal do Lago – espaço kids e cardápio infantil",
      "Don Quixote – massas e atendimento familiar"
    ],
    eventos: "Feira de artesanato na Praia do Forte (sábado 9h-16h)",
    dicas: "Use protetor solar infantil reaplicado a cada 2h."
  },
  economico: {
    titulo: "💰 Turismo Econômico",
    praias: ["Praia do Siqueira (gratuita, sem taxas)", "Praia das Dunas (acesso livre)"],
    restaurantes: ["Lanchonete Beira-Mar – PF por R$ 15", "Mercado Municipal – comida caseira a partir de R$ 12"],
    eventos: "Feira livre do bairro São Bento – frutas e artesanato barato",
    dicas: "Ônibus circular custa R$ 4,00 – linha 401 passa pelas principais praias."
  },
  premium: {
    titulo: "✨ Experiência Premium",
    praias: ["Praia do Forte com serviço de cadeira e guarda-sol", "Passeio de escuna para Ilha do Japonês"],
    restaurantes: ["Oysterr – frutos do mar e vista para a lagoa", "La Belle époque – jantar fino"],
    eventos: "Espetáculo no Teatro Municipal de Cabo Frio",
    dicas: "Alugue um barco particular com skipper – valores sob consulta."
  },
  cristao: {
    titulo: "⛪ Roteiro Cristão",
    praias: ["Praia do Forte (perto da Igreja Nossa Senhora da Assunção)"],
    restaurantes: ["Restaurante Sabor da Fé – opções vegetarianas", "Cantinho da Paz – música gospel ao vivo sábado"],
    eventos: "Missa na Igreja Matriz de Nossa Senhora da Assunção (19h – diariamente)",
    dicas: "Visite a Gruta de Nossa Senhora de Lourdes no bairro Jardim Caicara."
  },
  cultural: {
    titulo: "🎭 Turismo Cultural",
    praias: ["Praia do Forte (ao lado do Museu de Arte Religiosa)"],
    restaurantes: ["Casa da Cultura – café literário"],
    eventos: "Exposição no Museu de Cabo Frio (terça a domingo, 10h-17h)",
    dicas: "Roteiro de arquitetura colonial – comece na Rua dos Biquínis."
  },
  gastronomico: {
    titulo: "🍽️ Gastronomia Local",
    praias: ["Praia do Forte – quiosques com petiscos"],
    restaurantes: ["Tasca do Porto – bacalhau e vinhos", "Empório da Lagoa – frutos do mar frescos"],
    eventos: "Festival do Camarão (se houver data, coloque fixo: todo domingo na Orla)",
    dicas: "Experimente a tainha assada na Praia das Conchas."
  },
  pet: {
    titulo: "🐾 Pet Friendly",
    praias: ["Praia do Siqueira (aceita cães na coleira)", "Praia das Dunas (mais vazia)"],
    restaurantes: ["Casa do Pet – petiscos para cães", "Boteco do Lago – área externa com pet"],
    eventos: "Parque Municipal – cachorródromo aos fins de semana",
    dicas: "Leve saquinho para dejetos e água fresca."
  },
  acessivel: {
    titulo: "♿ Acessibilidade",
    praias: ["Praia do Forte – rampa de acesso e cadeiras anfíbias (gratuitas)"],
    restaurantes: ["Pizzaria Acessível – banheiro adaptado e cardápio em braile"],
    eventos: "Centro de Cabo Frio – calçadas reformadas com piso tátil",
    dicas: "Ônibus da linha 400 tem elevador para cadeirantes."
  },
  eventos: {
    titulo: "📊 Corporativo / Eventos",
    praias: ["Praia do Forte – boa para happy hour"],
    restaurantes: ["Restaurante do Hotel Paradiso – sala para reuniões"],
    eventos: "Centro de Convenções de Cabo Frio – programação mensal",
    dicas: "Use o coworking gratuito da Biblioteca Pública (wi-fi estável)."
  }
};