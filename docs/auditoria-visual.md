# Auditoria visual e UX — Descomplica Penteado

Auditoria da primeira versão, com observação da página renderizada no navegador e correções aplicadas. Foco: visitante iniciante, tráfego mobile, clareza da oferta e identidade ALPORTO Academy.

## Os 10 pontos mais fracos e suas correções

| #   | Problema observado                                                                                                                                | Correção aplicada                                                                                                                                                      | Efeito esperado na experiência                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 1   | “A beleza começa nas suas mãos” funcionava como slogan, mas não explicava imediatamente o produto. Nome do curso discreto demais.                 | H1 “Aprenda penteados. Comece do zero.”; nome do curso mais legível; descrição curta com professora, formato e público.                                                | Entendimento imediato do que está sendo vendido e para quem.                                |
| 2   | Preço ausente junto ao primeiro CTA e tipografia excessivamente ornamental no preço da oferta. Condições de pagamento pequenas.                   | R$ 47,00 e acesso próximos do CTA inicial; preço em sans-serif na oferta; pagamento único, formatos e parcelamento com texto maior.                                    | Decisão de compra mais informada e valor fácil de localizar.                                |
| 3   | Corpo e legendas frequentemente em 8–13 px, contraste e hierarquia dependentes de texto muito pequeno.                                            | Corpo principal de 15–17 px, FAQ de 15–16 px, botões principais de 14–15 px; dourado escurecido e escala tipográfica responsiva.                                       | Leitura mais confortável sem perder a delicadeza da identidade.                             |
| 4   | CTA fixo visível desde o topo, competindo com o CTA principal e cobrindo parte da imagem.                                                         | Barra aparece somente após o CTA inicial sair da tela e se recolhe diante de outro CTA visível. Área de toque de 48 px; espaço inferior e margem de rolagem para foco. | Uma chamada de compra por contexto, com menor interferência na leitura.                     |
| 5   | Galeria mobile com três imagens grandes empilhadas, ritmo repetitivo e rolagem longa.                                                             | Técnica principal em largura inteira; duas combinações lado a lado; recortes proporcionais em componente reutilizável e títulos secundários alinhados.                 | Mais conteúdo visual em menos rolagem, mantendo texto rastreável e imagens reconhecíveis.   |
| 6   | Bloco de experiência imitando uma tela de curso sem mostrar aulas reais; arte distorcida no mobile e texto de cartaz aparecendo dentro da imagem. | Remoção do falso mockup; sequência “Assista / Pause / Volte” com instruções práticas e hierarquia clara.                                                               | Explica o uso do curso sem simular um player ou repetir a imagem promocional.               |
| 7   | Mesma montagem da professora repetida no hero e na biografia, com monogramas cortados e legendas sobrepostas.                                     | Penteado como imagem principal; retrato da professora reservado à apresentação, com enquadramento mais próximo e legenda sólida abaixo.                                | Produto e professora cumprem funções visuais distintas; rosto e identificação ficam claros. |
| 8   | Grande distância entre o CTA inicial e a oferta; títulos e espaços prolongavam a rolagem sem oportunidade contextual de compra.                   | Novo CTA após a galeria, acompanhado do preço; introdução mais curta e ritmo de espaçamento regular entre seções.                                                      | Permite comprar após conhecer o conteúdo, sem exigir a leitura de toda a página.            |
| 9   | Marca muito pequena no mobile, selo ornamental e símbolos Unicode com aparência inconsistente.                                                    | Assinatura ALPORTO ACADEMY ampliada; remoção do selo redundante; ícones SVG com traço único; cores, divisores e botões padronizados.                                   | Identidade mais consistente e acabamento visual mais cuidadoso.                             |
| 10  | FAQ com título abstrato e respostas pequenas; referência a uma lista de materiais que não podia ser consultada.                                   | Título “Dúvidas frequentes”; primeira resposta aberta; sinal de expansão consistente; lista textual de materiais dentro do próprio FAQ, acessível sem sair da página.  | Redução de dúvidas com leitura e interação claras, inclusive por teclado.                   |

## Revisão depois das alterações

- Comparação visual no navegador: primeira dobra, introdução, galeria, experiência, retrato, oferta, FAQ e fechamento.
- Larguras verificadas: 320, 390, 768, 1024 e 1440 px, sem rolagem horizontal.
- CTA inicial de 58 px; CTA fixo de pelo menos 48 px.
- Barra contextual conferida oculta no início, visível na galeria sem CTA em tela e recolhida diante de botões de compra.
- FAQ aberto/fechado com Enter; lista de materiais expandida e lida em layout mobile.
- CTA novo da galeria clicado no build de produção: navegação confirmada para o checkout oficial, sem compra ou envio de formulário.
- Build de produção concluído; H1 único, seis perguntas principais, JSON-LD válido e recursos locais existentes.
- Contraste calculado nas cores sólidas: texto secundário/creme 5,89:1; dourado/creme 4,95:1; texto do CTA claro/fundo 10,71:1. Não representa uma auditoria WCAG completa.
- Sem biblioteca de interface nova. Pequeno script controla a barra mobile; conteúdo, CTAs principais e FAQ continuam nativos e funcionais sem JavaScript.

## Limites

Esta é uma auditoria visual/UX com validação em viewport de navegador. Não foi feito experimento A/B, medição de conversão, teste em dispositivo físico ou nova auditoria do conteúdo da área de membros. O preço e os benefícios foram preservados da oferta e dos materiais já utilizados na primeira versão. Não foram adicionadas provas sociais, resultados financeiros, urgência ou garantias comerciais.
