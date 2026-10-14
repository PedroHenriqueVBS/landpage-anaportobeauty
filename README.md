# Ana Lucia Porto · Atendimento em domicílio & ALPORTO Academy

Site estático em Astro. A página principal apresenta cabelo e maquiagem em domicílio em Campina Grande/PB. O Descomplica Penteado continua disponível na aba de curso online, com seu checkout original. A terceira aba reúne os cursos presenciais de Ana, com formatos em turma e VIP.

## Executar e gerar a versão publicável

Execute os comandos na raiz `landpage-anaportobeauty/`, onde estão `package.json` e `astro.config.mjs`. Se o terminal estiver na pasta anterior `landpage-ana/`, entre na nova raiz com `cd landpage-anaportobeauty`.

```sh
npm ci
npm run dev
npm run build
```

O resultado publicável está em `dist/`. Não precisa de backend. O conteúdo, as tabelas de preços, a navegação e as perguntas são HTML estático. Um pequeno script controla o botão contextual de agendamento/compra no celular.

Os imports e os recursos do site usam caminhos relativos ao projeto ou à raiz pública do site, portanto continuam funcionando após mudar a pasta. O `.gitignore` fica na nova raiz e exclui dependências, build e cache do Astro.

O comando `npm run images` é opcional e regenera as artes antigas do curso online. Ele procura os originais na pasta Downloads do usuário ou na pasta definida por `ANA_IMAGES_DIR`; um caminho relativo nessa variável é resolvido a partir da raiz do projeto. A saída sempre vai para `public/images/` da pasta que contém este projeto, mesmo quando o script é executado de outro diretório. As imagens otimizadas existentes bastam para executar e publicar o site.

## Domínio oficial

O domínio oficial é `https://anaportobeauty.com.br`, configurado em `astro.config.mjs`. O comando `npm run build` já gera canonical, URLs absolutas de compartilhamento, `sitemap.xml` e sua referência em `robots.txt` com esse endereço.

Para usar outra origem em um ambiente específico, defina `SITE_URL` antes do build. Use apenas a origem HTTP(S), sem caminho ou parâmetros:

```sh
SITE_URL=https://anaportobeauty.com.br npm run build
```

Registrar o domínio não publica o site. A hospedagem deve servir o conteúdo de `dist/`, com DNS apontado para o provedor e HTTPS configurado. A versão com `www` deve redirecionar para `https://anaportobeauty.com.br`, que é a origem canônica.

Depois de publicar, confira o domínio HTTPS, as três páginas e `robots.txt`/`sitemap.xml`. Cadastre o domínio no Google Search Console e envie o sitemap. O posicionamento e a indexação dependem da publicação e do acompanhamento; o build local não comprova visibilidade no Google.

## Conteúdo e manutenção

- Atendimento principal: `src/pages/index.astro`.
- Curso preservado: `src/pages/curso-de-penteados.astro`.
- Cursos presenciais: `src/pages/cursos-presenciais.astro`.
- Informações, pacotes, materiais e perguntas dos cursos presenciais: `src/data/inpersonCourses.ts`.
- Serviços, preços e perguntas de atendimento: `src/data/services.ts`.
- WhatsApp, Instagram e TikTok: `src/data/site.ts`.
- SEO compartilhado: `src/components/PageHead.astro`.
- Navegação e contatos compartilhados: `SiteHeader.astro` e `SiteFooter.astro`.
- Identidade visual: `src/styles/global.css`; apresentação de atendimento: `src/styles/services.css`; cursos presenciais: `src/styles/inperson.css`.
- Checkout do curso: `src/components/CTA.astro`.

O WhatsApp foi confirmado pelo usuário como **+55 83 9613-0421**, apesar de os PDFs mostrarem um dígito adicional. O contato confirmado é centralizado em `site.ts` e utilizado por todos os links e pelos dados estruturados.

Serviços, preços, experiência e cidade foram transcritos dos dois PDFs fornecidos em 14/10/2026. As fotos do atendimento foram extraídas do catálogo e convertidas para WebP em duas resoluções. Não há necessidade dos anexos ou de seus caminhos locais para executar/publicar o site. Valores “a partir de” e a faixa de penteado infantil são apresentados como variáveis; deslocamento, reserva e horário são confirmados por WhatsApp.

O SEO usa títulos e descrições distintos, conteúdo local rastreável, links entre páginas, imagens com dimensões/descrições e um catálogo estruturado de serviços. Não foram inventados endereço de salão, horários comerciais, bairros, avaliações ou certificações. Os dados estruturados descrevem uma organização com serviços em domicílio; não anunciam um estabelecimento físico nem garantem resultados especiais no Google.

## Cursos presenciais

As informações vêm dos dois catálogos Beauty Docs e das seis imagens fornecidas em 14/10/2026. A página apresenta Penteados, Maquiagem Pro e Automaquiagem com as artes oficiais, além de Corte e Escova, identificado no catálogo geral. As seis imagens foram otimizadas em WebP com duas resoluções; a foto da mentora foi extraída do PDF. Os arquivos já estão em `public/images` e os originais não são necessários para o build.

Os catálogos apresentam o pacote Turma de R$ 960 por aluno(a), a partir de quatro pessoas, com 15 horas em três tardes de cinco horas; certificado digital/impresso e suporte WhatsApp por dois meses pertencem a esse pacote. O VIP tem opções de 5, 10, 15 e 20 horas por R$ 890, R$ 1.690, R$ 2.590 e R$ 2.890, respectivamente. Os pacotes são exibidos em uma seção própria e a aplicação ao curso escolhido é confirmada na consulta. Automaquiagem não tem valor específico nos PDFs e fica com investimento e duração sob consulta.

A reserva informa sinal de 50% do curso e inscrição adicional de R$ 80 por Pix. O restante e eventual deslocamento são combinados com Ana. Listas de materiais são referências, sem promessa de kit fornecido. Não foram inventados calendário, endereço das aulas, limite de vagas, duração por curso ou atendimento VIP individual. As aulas podem ocorrer no estúdio ou no local da aluna, conforme condições combinadas.

Os documentos `docs/design.md` e `docs/auditoria-visual.md` registram versões anteriores da página do curso. O preço e os benefícios do curso são os já presentes no site; devem acompanhar futuras alterações da oferta na Kiwify.

## Verificação desta versão

Build estático concluído com as três páginas. Layout e aba ativa conferidos em 320, 390, 768, 1024 e 1440 px, sem rolagem horizontal; FAQ, listas de materiais por clique e teclado, recursos locais e URLs de WhatsApp/checkout conferidos. Lighthouse mobile na nova página de cursos presenciais: SEO 100, acessibilidade 100 e boas práticas 100. Isso não representa medição de tráfego real nem comprovação de posicionamento no Google.

Em 14/10/2026, o domínio oficial foi configurado. Canonical, URLs de compartilhamento, dados estruturados, sitemap e robots do build foram conferidos para `https://anaportobeauty.com.br`. DNS, HTTPS público e publicação dependem da configuração da hospedagem.

## Otimizações de SEO e desempenho — 14/10/2026

O curso online usa título e H1 descritivos, e o botão do cabeçalho segue para o checkout centralizado em `src/data/site.ts`. A navegação mobile ocupa uma linha com rolagem horizontal e links de pelo menos 44 px de altura. O conteúdo de agendamento destaca Campina Grande e as condições de deslocamento confirmadas. Bairros específicos, novas fotos autorizadas e cidade/endereço das aulas permanecem pendentes de confirmação.

`npm run images:course` gera recortes responsivos a partir da arte WebP já incluída. Os maiores recortes juntos têm 54.498 bytes, contra 219.036 bytes da arte anterior. O recorte principal é reutilizado no hero e na seção de técnicas. Não há ampliação artificial na geração dos arquivos.

No build, `scripts/version-static-assets.mjs` cria cópias de imagens e fontes em `/media/` com hash do conteúdo e atualiza HTML (incluindo srcset e dados estruturados) e CSS. Os caminhos antigos continuam disponíveis. `public/_headers` configura um ano de cache imutável apenas para `/media/*`, em hospedagens compatíveis com esse arquivo, como Cloudflare Pages. Se o provedor ignorar `_headers`, configure a mesma regra nele. Não aplique cache imutável aos caminhos antigos nem ao HTML. O cache em produção só estará confirmado após publicar e verificar o cabeçalho HTTP de uma URL versionada.

Validação desta alteração: build concluído; referências locais, srcset, JSON-LD e hashes conferidos; três páginas sem overflow horizontal em 320 e 1440 px e curso inspecionado visualmente em 390 px. Não foi realizada nova medição de Lighthouse/Core Web Vitals nem publicação.
