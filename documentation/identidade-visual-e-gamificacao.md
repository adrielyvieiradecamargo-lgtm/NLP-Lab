# NLP Lab — identidade visual cyberpunk e trilha gamificada

## Conceito visual

A interface combina uma estética cyberpunk editorial com um ambiente acadêmico: superfícies azul-noite, acentos ciano e magenta, traços de circuito, brilho contido e tipografia de alto contraste. O objetivo é transmitir tecnologia sem sacrificar leitura, hierarquia ou acessibilidade.

## Paleta de interface

- Fundo principal: `#080d1c`.
- Superfícies: `#111a2f` e `#172542`.
- Texto principal: `#f0f5ff`.
- Texto secundário: `#b4c2df`.
- Ciano de interação: `#37e9ef`.
- Violeta de apoio: `#a78bfa`.
- Magenta de destaque: `#ff6cba`.
- Âmbar para estrelas e recompensas: `#ffc86b`.

O contraste foi reforçado em relação à versão anterior, com ampliação das fontes, botões maiores, estados de foco visíveis e textos auxiliares mais legíveis. A conformidade WCAG deve ser confirmada por auditoria automatizada e testes com usuários antes de declarar conformidade integral.

## Trilha em caminho

Os oito módulos são representados como portais alternados em um caminho vertical sinuoso. Um SVG decorativo conecta os nós. Cada nó representa um setor e contém estado de acesso, código do setor e progresso de três unidades, indicado por estrelas.

- Ciano: setor atual e disponível.
- Magenta: setor concluído.
- Azul-acinzentado: setor bloqueado.
- Estrelas âmbar: unidades concluídas.

A sequência é desbloqueada ao concluir as três atividades de cada módulo. Os cartões informativos apresentam objetivo, duração e progresso. Em telas menores, o mapa preserva a orientação vertical e alterna os nós entre os lados.

## Personagens autorais

Nex, Lyra e Tess são mascotes originais em SVG, criados para orientar a jornada e marcar pontos de progressão. Foram desenhados com formas geométricas, visor luminoso e paletas distintas. A inspiração de interação em mapas de aprendizagem gamificados não utiliza personagens, marcas ou elementos gráficos proprietários de outras plataformas.

## Mecânicas pedagógicas

A gamificação é vinculada à demonstração de aprendizagem: cada unidade concluída rende XP, cada módulo concluído libera uma conquista e os novos módulos são desbloqueados progressivamente. As estrelas representam unidades concluídas e não são concedidas por mera visita ao conteúdo.

## Limites técnicos

O caminho, os avatares, as estrelas e os indicadores são elementos visuais do produto. O progresso é salvo localmente no navegador. Não há conta, autenticação, ranking entre pessoas, sincronização entre dispositivos ou servidor de aprendizagem.
