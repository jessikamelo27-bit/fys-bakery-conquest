# FYS Bakery Conquest 🎮🥖
> **O Simulador de Vendas Gamificado para o Canal Off-Premise (Padarias) do Grupo HEINEKEN.**

Este repositório contém o projeto final desenvolvido para o desafio **"Copiloto de Vendas com IA para Atendimento ao Cliente"** da DIO.

O **FYS Bakery Conquest** é um protótipo interativo rodando 100% no navegador (Single Page Application) que gamifica o treinamento de promotores e vendedores do grupo Heineken para ativarem a marca de refrigerantes **FYS** em padarias brasileiras.

---

## 🎯 O Desafio & A Dor de Mercado
No mercado de bebidas, existe um comportamento comum entre a força de vendas: **os vendedores priorizam a rota de bares.** Isso ocorre porque os bares vendem bebidas alcoólicas (cervejas, chopes), que possuem alto valor, giro orgânico simples e comissões robustas.

Com isso, o **canal de padarias (que soma quase 80 mil estabelecimentos no Brasil)** acaba sendo negligenciado. Para entrar e vencer nesse canal, o vendedor precisa de treinamento dinâmico, abordagens personalizadas e argumentos sólidos sobre:
*   A qualidade e origem de FYS (fabricado pelo grupo HEINEKEN).
*   Os benefícios de sabor e saúde (30% menos açúcar, sem corantes artificiais).
*   A excelente rentabilidade comercial (margem de lucro superior ao líder de mercado).

---

## 💡 A Solução: RPG de Vendas
O **FYS Bakery Conquest** transforma o treinamento corporativo em um jogo de simulação de diálogos. O vendedor viaja por uma rota de padarias com perfis reais e enfrente objeções dos donos:

1.  **Seu Manoel (Padaria do Bairro):** Conservador, focado nas marcas líderes tradicionais. Suas objeções envolvem a falta de espaço nas geladeiras e o medo de o produto ficar "encalhado".
2.  **Dona Neuza (Panificadora Gourmet):** Focada em saúde e finanças de alto padrão. Ela questiona o visual das embalagens e se seus clientes (que preferem água/suco) comprariam refrigerante.
3.  **Rede Pão de Ouro (Corporativo - Key Account):** Desbloqueado após vencer os níveis 1 e 2. Simula uma negociação de alta escala baseada em combos locais.

---

## 🚀 Como Executar o Protótipo
O simulador foi construído em **HTML5, CSS3 (Vanilla) e JavaScript puro**, sem necessidade de instalação de dependências ou servidores complexos.

1.  Baixe ou clone este repositório.
2.  Navegue até a pasta `fys-bakery-conquest/`.
3.  Dê um duplo clique no arquivo `index.html` para abri-lo diretamente em qualquer navegador moderno.
4.  Jogue, teste diferentes abordagens e conquiste os distintivos!

---

## 🛠️ Tecnologias Utilizadas & Design System
Para criar uma experiência premium e que se destaque visualmente para os parceiros da Heineken, o design do app segue estas diretrizes:

*   **HTML5 Semântico:** Estrutura clara e acessível.
*   **CSS3 Moderno:**
    *   **Dark Mode Nativo:** Fundo escuro profundo para dar destaque aos contrastes neon.
    *   **Paleta de Cores Híbrida:** Mistura o verde institucional da Heineken com o laranja e azul elétrico de FYS.
    *   **Glassmorphism:** Uso de desfoque de fundo (`backdrop-filter`) e transparências para criar painéis modernos que parecem vidro flutuante.
    *   **Micro-animações:** Efeitos de pulsação luminosa no logotipo, transições de tela suaves e feedback dinâmico nas barras de métricas de humor.
*   **JavaScript:** Lógica de controle de estado, cálculo de pontos, validações e persistência de dados local com `localStorage` (o jogo lembra seu XP e conquistas mesmo se fechar a página!).

---

## 📁 Estrutura de Arquivos do Projeto
```text
fys-bakery-conquest/
├── index.html        # Estrutura e navegação Single Page Application (SPA)
├── style.css         # Estilização premium (Cores Heineken/FYS, Responsividade)
├── app.js            # Lógica das rotas de vendas, diálogos e dados do jogo
└── README.md         # Documentação e apresentação da entrega final (este arquivo)
```

---

## 🌟 O Que Este Projeto Entrega (Requisitos DIO)
*   **Desafio Escolhido:** Vendas no canal de padarias e contorno de objeções comerciais (Desafios 3, 5, 6 e 7 da FYS).
*   **Persona Alvo:** Vendedores e promotores de campo da Heineken.
*   **Como a IA/Gamificação Ajuda:** Treina a tomada de decisão rápida e fixa os argumentos chave de sabor, saudabilidade e margem de FYS em situações de alta pressão.
*   **Diferencial Estético:** Interface limpa, responsiva (funciona perfeitamente em telas de celulares dos vendedores) e alinhada ao tom jovem e autêntico de FYS.

---

## 🔮 Melhorias Futuras
1.  **Integração com LLM (Gemini/OpenAI):** Adicionar um modo "Livre" onde o vendedor digita a mensagem por extenso e a IA avalia semanticamente o nível do argumento em tempo real usando processamento de linguagem natural.
2.  **Ranking da Força de Vendas:** Criar uma tabela de classificação online para engajar os vendedores regionais a competirem entre si pelo maior XP.
3.  **Módulo de Inteligência de Campo:** Permitir que o vendedor envie fotos das geladeiras reais para o copiloto de IA analisar a exposição física e dar feedback corretivo.
