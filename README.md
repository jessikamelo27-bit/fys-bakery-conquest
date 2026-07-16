# 🥐 FYS Bakery Conquest

Uma aplicação web interativa e gamificada projetada para treinar vendedores e promotores do grupo Heineken a contornar objeções e ativar a marca de refrigerantes **FYS** no canal de padarias do Brasil.

---

## 🎮 Demo

Acesse a versão online e jogue diretamente no seu navegador clicando no botão abaixo:

[![Jogar Agora](https://img.shields.io/badge/🎮-JOGAR%20AGORA-FF6B00?style=for-the-badge&logoWidth=40)](https://jessikamelo27-bit.github.io/fys-bakery-conquest/)

---

## 📷 Screenshots & GIFs

> [!NOTE]
> *Salve as capturas de tela e GIFs da sua aplicação rodando dentro das subpastas em `/assets` para que elas carreguem aqui!*

| 📷 Tela Inicial | 📷 Gameplay |
| :---: | :---: |
| ![Tela Inicial](assets/img/screenshot-home.png) | ![Gameplay](assets/img/screenshot-gameplay.png) |
| **📷 Vitória** | **📷 GIF de Demonstração** |
| ![Vitória](assets/img/screenshot-victory.png) | ![GIF Demo](assets/gif/demo.gif) |

---

## 💡 O Problema
No setor de distribuição de bebidas, os vendedores de campo tendem a focar prioritariamente em rotas de bares. Isso acontece porque a venda de cervejas e bebidas alcoólicas possui giro rápido e comissões robustas. 

Essa preferência acaba negligenciando o canal de **padarias no Brasil, que soma quase 80 mil pontos de venda.** Para abrir espaço neste mercado, o vendedor precisa saber expor o refrigerante FYS, apresentar suas qualidades de sabor e mostrar ao comerciante que a FYS gera maior lucro do que as marcas concorrentes tradicionais.

---

## 🚀 A Solução
O **FYS Bakery Conquest** é um simulador de vendas em estilo RPG de conversação. O vendedor visita padarias com diferentes perfis e precisa utilizar as melhores táticas de negociação da FYS (como menos açúcar, qualidade do grupo Heineken, testes cegos de sabor e propostas de combos com lanches locais) para contornar objeções dos donos e conquistar espaço nas geladeiras.

---

## ⚙️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/github%20pages-%23121013.svg?style=for-the-badge&logo=github&logoColor=white)
![MIT License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)

*   **Tempo de Desenvolvimento:** 4 horas
*   **Desenvolvido para:** Desafio de Projeto Final - DIO (Digital Innovation One)

---

## ✨ Funcionalidades

*   ✔ **Sistema de Diálogos & Objeções:** Árvore de decisões comerciais baseada em dados reais da live da FYS.
*   ✔ **Lógica de Humor e Fechamento:** Barras dinâmicas que reagem imediatamente a cada argumento do vendedor.
*   ✔ **Persistência de Dados:** Uso de `localStorage` para manter XP e distintivos salvos caso o navegador seja fechado.
*   ✔ **Interface Responsiva:** Otimizada para celulares de vendedores em campo e desktops de recrutadores.
*   ✔ **Gamificação:** Desbloqueio de medalhas (badges) exclusivas baseadas em seu desempenho de negociação.
*   ✔ **Feedback do Copiloto:** Um painel com feedbacks instrutivos que ensinam o vendedor sobre o posicionamento da FYS a cada rodada.

---

## 📁 Estrutura de Diretórios
A organização do projeto segue a arquitetura modular limpa e profissional:

```text
/
├── index.html        # Estrutura principal da SPA
├── LICENSE           # Licença MIT
├── README.md         # Documentação e portfólio (este arquivo)
├── css/
│   ├── variables.css # Definição de cores, fontes e design tokens
│   ├── animations.css# Transições visuais e keyframes de efeitos
│   └── style.css     # Estilos de layout estrutural e componentes
├── js/
│   ├── storage.js    # Controlador de leitura e gravação no localStorage
│   ├── game.js       # Banco de dados das rotas e controle de fluxo do jogo
│   ├── ui.js         # Atualizações do DOM, barras de progresso e chat
│   └── app.js        # Inicialização do jogo e escuta de eventos de clique
└── assets/
    ├── img/          # Capturas de tela (screenshots)
    ├── gif/          # Demonstração gravada em loop (GIF)
    ├── icons/        # Logotipos e ícones gráficos
    └── audio/        # Efeitos sonoros (expansão futura)
```

---

## ▶ Como Executar

### Execução Online
Basta acessar o link da demonstração:
👉 **[https://jessikamelo27-bit.github.io/fys-bakery-conquest/](https://jessikamelo27-bit.github.io/fys-bakery-conquest/)**

### Execução Local (Offline)
1. Clone o repositório em sua máquina:
   ```bash
   git clone https://github.com/jessikamelo27-bit/fys-bakery-conquest.git
   ```
2. Abra a pasta do projeto.
3. Dê um duplo clique no arquivo `index.html` para executá-lo diretamente no navegador (não requer servidor local).

---

## 📚 Aprendizados

Durante o desenvolvimento deste desafio, foi possível praticar e consolidar:
*   **Modularização de Front-end Estático:** Divisão de código CSS e JS mantendo a compatibilidade offline (sem gerar bloqueios de CORS que impediriam a abertura direta do arquivo `index.html` localmente).
*   **Técnicas de Gamificação (EdTech):** Aplicação de mecânicas de jogos (pontos de experiência, conquistas, barras de humor do cliente) para fixação de conteúdos de treinamento corporativo.
*   **Lógica de Árvore de Decisão:** Modelagem de dados de conversação interativa que respondem de forma condicional à escolha do usuário.

---

## 🔮 Melhorias Futuras

Se eu retornar a este projeto no futuro, pretendo implementar:
*   🏆 **Ranking de Vendedores:** Placar de líderes online conectado a um banco de dados na nuvem para engajar times comerciais.
*   💾 **Nuvem Save:** Salvamento integrado com contas corporativas.
*   🎵 **Efeitos de Áudio:** Músicas de fundo animadas e feedbacks sonoros para acertos e erros de negociações.
*   📱 **Análise de PDV por Foto:** Integração de IA de visão computacional para analisar fotos da geladeira tiradas pelo vendedor.

---

## 📄 Licença
Este projeto é distribuído sob os termos da licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
