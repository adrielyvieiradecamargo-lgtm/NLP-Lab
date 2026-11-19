<img width="1894" height="915" alt="image" src="https://github.com/user-attachments/assets/d6bd1a0c-4845-4ba7-ab44-3092825a8dd4" />








# NLP Lab — Laboratório de Linguagem e Inteligência Artificial

> **Explore a linguagem. Compreenda a inteligência artificial. Experimente o PLN.**

O NLP Lab é um projeto educacional autoral, em português brasileiro, que reúne fundamentos de Linguística e Processamento de Linguagem Natural (PLN), uma trilha formativa de oito módulos, experimentos executados no navegador e elementos de gamificação.

**Status:** protótipo funcional de portfólio · **Versão:** 1.0 · **Stack:** HTML5, CSS3 e JavaScript puro.

## Demonstração local

Não há etapa de compilação nem instalação de dependências. Como o projeto utiliza arquivos JavaScript locais, execute um servidor HTTP simples a partir desta pasta:

```bash
python -m http.server 8000
```

Abra <http://localhost:8000> no navegador.

Também é possível abrir `index.html` diretamente em navegadores modernos. Para uma experiência mais próxima da publicação, prefira o servidor local.

## Publicar no GitHub Pages

1. Crie um repositório público, por exemplo `nlp-lab`.
2. Envie o conteúdo desta pasta para a raiz do repositório.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch principal e a pasta `/ (root)` e salve.
6. Aguarde a publicação e abra a URL apresentada pelo GitHub Pages.

Os caminhos de CSS, JavaScript e favicon são relativos para permitir publicação na raiz de um repositório Pages.

## O que está implementado

- Página inicial com visão geral, percurso, indicadores e atalhos.
- Área “Explorar o PLN”, com pesquisa e filtros por categoria.
- Trilha de 8 módulos e 24 unidades, com objetivos, conteúdo, exemplos e questões de verificação.
- Desbloqueio progressivo de módulos: o próximo módulo abre após concluir as três unidades do anterior.
- Feedback explicativo nas questões; resposta incorreta permite nova tentativa.
- XP, níveis, emblemas por módulo e marcas de experimentos.
- Laboratório com tokenização, pré-processamento, n-gramas, TF-IDF, reconhecimento heurístico de entidades, sentimento lexical e ambiguidade.
- Glossário, referências e busca.
- Painel de progresso salvo em `localStorage` no navegador atual.
- Layout responsivo e recursos básicos de acessibilidade, incluindo navegação por teclado, foco visível, rótulos, região de feedback e preferência por movimento reduzido.

## Limites técnicos importantes

Este protótipo é **estático e local**. Não possui cadastro real, autenticação, banco de dados, sincronização entre dispositivos, painel docente ou integração com um modelo de IA hospedado.

As ferramentas do laboratório são demonstrações pedagógicas implementadas em JavaScript:

- **Tokenização:** expressão regular simples para palavras, números e pontuação; não é BPE ou WordPiece.
- **Stemming:** regras de sufixos simplificadas.
- **Lematização:** mapa pequeno de exemplos, não um lematizador completo.
- **N-gramas e TF-IDF:** cálculos realizados sobre os textos inseridos pelo usuário; TF-IDF usa TF bruto e IDF suavizado `log((N + 1)/(df + 1)) + 1`.
- **NER:** heurísticas de padrões e lista limitada de expressões; não é um modelo treinado.
- **Sentimento:** léxico fixo pequeno; não trata contexto, ironia ou negação de modo robusto.
- **Ambiguidade:** exercício orientado com exemplos predefinidos, não análise automática aberta.

Esses limites estão indicados também na interface. Para operação com modelos reais em português, uma evolução poderia integrar um backend seguro com bibliotecas como spaCy ou Transformers. Chaves de API nunca devem ser colocadas no JavaScript do navegador.

## Estrutura

```text
nlp-lab/
├── index.html
├── assets/
│   └── favicon.svg
├── css/
│   ├── tokens.css
│   └── style.css
├── js/
│   ├── content.js
│   ├── labs.js
│   └── app.js
└── documentation/
    ├── concepcao.md
    ├── plano-de-ensino.md
    ├── mapa-da-trilha.md
    ├── storyboard.md
    ├── avaliacao-e-rubrica.md
    ├── acessibilidade-e-validacao.md
    └── referencias.md
```

## Documentação pedagógica

- [Concepção do produto](documentation/concepcao.md)
- [Plano de ensino](documentation/plano-de-ensino.md)
- [Mapa da trilha](documentation/mapa-da-trilha.md)
- [Storyboard](documentation/storyboard.md)
- [Avaliação e rubrica](documentation/avaliacao-e-rubrica.md)
- [Acessibilidade e validação](documentation/acessibilidade-e-validacao.md)
- [Referências](documentation/referencias.md)

## Como descrever no portfólio

**NLP Lab — Laboratório de Linguagem e Inteligência Artificial**

Projeto autoral de Design Educacional e desenvolvimento web para ensino introdutório de Processamento de Linguagem Natural. Integra uma trilha de aprendizagem de oito módulos, conteúdos de Linguística e PLN, experimentos didáticos interativos, avaliação formativa, feedback e gamificação. Desenvolvido com HTML, CSS e JavaScript, com documentação pedagógica e publicação preparada para GitHub Pages.

> Apresente como projeto autoral. Não descreva como experiência profissional, certificação, curso institucional ou plataforma de IA em produção.

## Próximas evoluções possíveis

1. Teste de usabilidade com estudantes universitários e revisão dos conteúdos a partir dos resultados.
2. Backend opcional para contas, sincronização e relatórios agregados, com política de privacidade.
3. Integração demonstrativa com spaCy ou modelo Transformers servido por backend.
4. Mais atividades práticas em Python e notebooks para corpus em português.
5. Revisão de acessibilidade com auditoria automatizada e testes com tecnologias assistivas.

## Verificações executadas nesta entrega

- Sintaxe JavaScript verificada com `node --check` nos três arquivos de lógica.
- Validador de conteúdo executado com `node tests/validate-content.js`.
- Estrutura HTML analisada e referências locais conferidas.
- Arquivos HTML, CSS, JavaScript e documentação respondendo pelo servidor HTTP local.
- Testes completos de interação em navegador e auditoria WCAG com tecnologia assistiva ainda precisam ser realizados em ambiente de navegador não restrito.


## Redesign visual — Cyberpunk Learning Path

A interface utiliza uma identidade visual cyberpunk autoral, com fundo azul-noite, acentos ciano e magenta, contraste reforçado e tipografia ampliada. A trilha foi redesenhada como um caminho vertical sinuoso com oito portais, estados de progresso, estrelas por unidade e um mascote original chamado Nex. A referência de percurso gamificado serviu apenas como inspiração de interação; a identidade visual e o personagem são próprios do NLP Lab.

O mascote está em `assets/mascot-nex.svg` e os estilos novos ficam em `css/cyberpunk.css`, separados do CSS estrutural original para facilitar manutenção.


## Personagens e progressão visual

O mapa da trilha apresenta oito portais em um caminho sinuoso vertical, com estados atual, bloqueado e concluído, estrelas por unidade e personagens originais Nex, Lyra e Tess. A nova direção visual está documentada em `documentation/identidade-visual-e-gamificacao.md`.
