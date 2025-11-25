# Soulslike DB

> Uma aplicação web interativa para explorar e buscar os **top 20 jogos soulslike** mais bem avaliados.

![Badge](https://img.shields.io/badge/status-active-brightgreen) ![Badge](https://img.shields.io/badge/license-MIT-blue) ![Badge](https://img.shields.io/badge/made%20with-HTML%2FCSS%2FJS-yellow)

## Sobre o Projeto

**Soulslike DB** é uma aplicação web criada durante a **Imersão Alura Dev com Gemini**. Começou com uma base genérica (sobre linguagens de programação) e foi totalmente adaptada e personalizada para um tema que eu realmente gosto: **jogos desafiadores do gênero soulslike**.

A aplicação oferece uma interface limpa e responsiva para descobrir os melhores soulslikes do mercado, com informações detalhadas e links diretos para as principais plataformas de distribuição.

## Features

- Busca em tempo real — filtre por nome, descrição ou ano de lançamento
- Design responsivo — funciona perfeitamente em desktop, tablet e mobile
- Sistema de avaliações — badges coloridas indicam a nota dos críticos (0-10)
- Grid inteligente — cards adaptáveis que se ajustam ao tamanho da tela
- Links diretos — acesse cada jogo em Steam, PlayStation Network e Xbox Store
- Tema escuro minimalista — design elegante e sem distrações
- Acessibilidade — código semântico e contraste adequado

## Quick Start

### Clone o repositório

```bash
git clone https://github.com/gsales2/soulslike-db.git
cd soulslike-db
```

### Abra no navegador

```bash
# Opção 1: Arraste o arquivo index.html para o navegador
# Opção 2: Use um servidor local (recomendado)
python3 -m http.server 8000
# Depois acesse: http://localhost:8000
```

## Estrutura do Projeto

```
soulslike-db/
├── index.html       # Estrutura HTML da aplicação
├── style.css        # Estilos CSS minimalistas
├── script.js        # Lógica JavaScript (busca, renderização)
├── data.json        # Base de dados com top 20 soulslikes
└── README.md        # Esta documentação
```

## Top 20 Inclusos

1. **Elden Ring** (2022) - 9.5/10
2. **Bloodborne** (2015) - 9.3/10
3. **Dark Souls (Remastered)** (2011) - 9.2/10
4. **Dark Souls III** (2016) - 9.0/10
5. **Sekiro: Shadows Die Twice** (2019) - 9.1/10
6. **Demon's Souls (Remake)** (2020) - 9.0/10
7. **Nioh** (2017) - 8.6/10
8. **Nioh 2** (2020) - 8.7/10
9. **Hollow Knight** (2017) - 9.0/10
10. **Remnant: From the Ashes** (2019) - 8.1/10
11. **Salt and Sanctuary** (2016) - 8.0/10
12. **Blasphemous** (2019) - 7.8/10
13. **Mortal Shell** (2020) - 7.2/10
14. **Code Vein** (2019) - 7.5/10
15. **The Surge** (2017) - 7.0/10
16. **The Surge 2** (2019) - 7.3/10
17. **Lords of the Fallen (2023)** (2023) - 7.8/10
18. **Ashen** (2018) - 7.0/10
19. **Hellpoint** (2020) - 6.8/10
20. **Dark Souls II: Scholar of the First Sin** (2015) - 8.4/10

## Tecnologias Utilizadas

- HTML5 — estrutura semântica
- CSS3 — design responsivo sem frameworks
- JavaScript Vanilla — busca e renderização dinâmica
- JSON — base de dados dos jogos

## Design

O projeto segue uma **filosofia minimalista**:

- Paleta de cores: azul primário (`#8ab4f8`), tons de cinza
- Sem gradientes — cores sólidas para elegância
- Tipografia limpa com **Quicksand** do Google Fonts
- Espaçamento generoso e layout respirável

### Componentes principais

- Header sticky — mantém a barra de busca visível ao rolar
- Cards em grid — adaptáveis de 1 a 4 colunas
- Badges de nota — coloridas por faixa (verde alto, amarelo médio, vermelho baixo)
- Footer minimalista — links para redes sociais e Steam

## Como Usar a Busca

1. Digite no campo de busca qualquer termo
2. Clique em "Buscar" ou pressione **Enter**
3. Veja os resultados em tempo real
4. Para ver todos novamente, limpe o campo e busque com vazio

**Busca funciona por:**

- Nome do jogo (ex: "Elden Ring")
- Ano de lançamento (ex: "2022")
- Termos da descrição (ex: "FromSoftware", "mundo aberto")

## Responsividade

- Desktop (>768px) — 4 colunas de cards
- Tablet (768px) — 2-3 colunas
- Mobile (<480px) — 1 coluna, header otimizado

## Estrutura de Dados

Cada jogo contém:

```json
{
  "nome": "Elden Ring",
  "descricao": "Ação-RPG de mundo aberto com combate desafiador...",
  "ano": 2022,
  "links": {
    "steam": "https://store.steampowered.com/search/?term=Elden%20Ring",
    "psn": "https://store.playstation.com/search/elden%20ring",
    "xbox": "https://www.xbox.com/search?q=elden%20ring"
  },
  "nota": 9.5
}
```

## Melhorias Futuras

- Adicionar ícones SVG para as plataformas (Steam, PSN, Xbox)
- Implementar ordenação por nota ou ano
- Adicionar filtro por plataforma disponível
- Sistema de favoritos com localStorage
- Dark mode toggle (atualmente em tema escuro)
- Integração com APIs de avaliações (Metacritic, OpenCritic)
- Cards com imagens/capas dos jogos
- Paginação ou infinite scroll

## Aprendizado

Este projeto foi desenvolvido durante a **Imersão Alura Dev com Gemini** e demonstra:

- Manipulação de DOM com JavaScript vanilla
- Fetch API para carregar dados JSON
- CSS Grid responsivo
- Boas práticas de código (sem comentários desnecessários)
- Design minimalista e funcional
- Acessibilidade web básica

**Nota:** A base inicial fornecida pela Alura era sobre linguagens de programação. Eu adaptei toda a lógica, estilo e dados para criar este catálogo de soulslike.

## Contato

Desenvolvido por **Gabriel Sales**

- GitHub: https://github.com/gsales2
- LinkedIn: https://www.linkedin.com/in/gabriel-sales-143a82231/
- Steam: https://steamcommunity.com/profiles/76561198155737384/

## Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para usar, modificar e distribuir.

---

**Desenvolvido durante a Imersão Alura Dev com Gemini**
