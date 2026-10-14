# Direção e fontes · 7 de setembro de 2026

## Estratégia visual

Educação em beleza com composição editorial: fundo creme, marrom escuro, dourado pontual e Cormorant Garamond. Fotografia em arco no hero; galeria horizontal no desktop e vertical no celular; oferta escura como ponto de maior contraste. Marca tipográfica inspirada nas artes oficiais, sem apresentar uma reconstrução vetorial como logotipo original.

O visitante encontra produto, público e transformação no primeiro bloco. O percurso segue identificação, técnicas, experiência de aprendizado, professora, oferta, FAQ e CTA final. A compra sempre leva ao mesmo checkout. Em telas pequenas, CTA fixo com valor; o rodapé tem espaço inferior para não ser coberto.

## Referências consultadas

- https://www.masterclass.com/ — promessa curta, produto educacional apresentado com prioridade visual e ação principal clara. Página pública consultada em 07/09/2026.
- https://www.awwwards.com/academy/ — referências de apresentação de cursos e hierarquia de catálogo nos resultados públicos de busca; leitura direta indisponível. Nenhuma composição foi copiada. Não há alegação de taxa de conversão dessas referências.
- As três artes fornecidas pelo usuário determinam paleta, imagens, personalidade e informações complementares. Recortes proporcionais em CSS; arquivos completos preservados em WebP.

## Informações verificadas e limites

Checkout https://pay.kiwify.com.br/TVxs1tl aberto no navegador em 07/09/2026: nome Descomplica Penteado; R$ 47,00 à vista; opção 2x de R$ 24,74, com acréscimo; Pix, boleto e cartão. Nenhum formulário preenchido nem compra realizada.

Arte 19.04.58: proposta para iniciantes, aulas passo a passo, tranças embutida/lateral/espinha de peixe/cascata, semipreso e rabo de cavalo, acesso vitalício e uso de celular/tablet/computador. Essas informações vêm do material oficial fornecido, não de uma auditoria da área de membros atual. Não foi afirmada quantidade de aulas, carga horária ou número de alunas. Certificado e comunidade não foram destacados nesta versão, mesmo constando na arte, pois sua operação atual não foi conferida.

Arte 19.05.02: professora Ana Lucia Porto, ALPORTO Academy e frase institucional. Arte 19.04.45: materiais utilizados como referência para a resposta do FAQ. Não se afirma que ferramentas são fornecidas nem que todos os itens são obrigatórios.

A imagem de experiência é um recorte do material promocional, não uma captura do player de aulas. Não há botão de reprodução que simule um vídeo inexistente.

## Antes de publicar

Definir SITE_URL com o domínio final. Revisar com a professora se técnicas e acesso anunciados nas artes continuam correspondendo ao produto entregue. Não foram inventadas garantias comerciais, certificações, números, depoimentos, resultados financeiros, desconto ou urgência. Preço deve acompanhar futuras alterações do checkout.

## Validação realizada

- Build de produção concluído com Astro 7.3.1.
- Navegador: larguras 320, 390, 768, 1024 e 1440 px sem transbordamento horizontal. Revisão visual de hero, galeria, professora, oferta e FAQ; corrigidos recortes e largura mínima do card de oferta.
- FAQ expandido por clique e resposta visível. CTA da oferta clicado e navegação confirmada para o checkout correto; nenhuma compra realizada.
- HTML de produção: H1 único, seis FAQs, dados estruturados válidos, recursos locais existentes e zero JavaScript executável.
- `npm audit --omit=dev`: nenhuma vulnerabilidade reportada.
- Core Web Vitals em tráfego real e teste em aparelho físico não foram realizados. A verificação responsiva usou viewport de navegador.
- Servidor de teste encerrado após as verificações.

## Revisão visual posterior

A auditoria em `docs/auditoria-visual.md` substitui a direção de alguns blocos e a validação da primeira versão descritas acima. O hero agora destaca um penteado; a professora tem recorte próprio; o mockup promocional foi removido. Há um pequeno script de visibilidade contextual do CTA mobile, portanto a versão atual não é mais zero JavaScript. FAQ e conteúdo permanecem nativos.
