# Acessibilidade, validação e controle de qualidade

## 1. Diretrizes de interface

O protótipo adota como referência as WCAG 2.2 e práticas de HTML semântico. Foram incluídos:

- Idioma da página declarado como `pt-BR`.
- Link para pular ao conteúdo principal.
- Elementos HTML semânticos (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Rótulos associados aos campos de formulário.
- Mensagens de feedback em regiões com `aria-live` ou `role="status"`.
- Botões com nomes acessíveis.
- Navegação por teclado nos controles nativos.
- Estados de foco e realce visual.
- Alternativas de texto para o diagrama SVG principal.
- Layout responsivo e preferência por movimento reduzido.
- Uso de texto e rótulos além de cor para comunicar estados.

## 2. Limitações e itens para auditoria

Este projeto **não declara conformidade certificada com WCAG 2.2 AA**. Uma auditoria completa ainda deve incluir:

- Medição de contraste de todos os pares de texto e fundo.
- Teste manual com teclado em todos os fluxos e diálogos.
- Testes com leitores de tela (NVDA, VoiceOver ou equivalentes).
- Verificação de ordem de foco e gerenciamento de foco em diálogos.
- Verificação de zoom de 200% e reflow em larguras estreitas.
- Avaliação de textos alternativos em todos os elementos visuais futuros.
- Testes com pessoas com deficiência.

## 3. Plano de teste funcional

| ID | Caso | Resultado esperado |
|---|---|---|
| T01 | Abrir a página inicial | Hero, navegação e painéis são apresentados |
| T02 | Navegar pelas seis áreas | Cada botão abre a seção correspondente |
| T03 | Buscar um conceito | Resultados correspondem ao texto digitado |
| T04 | Filtrar conceitos | Apenas a categoria selecionada é exibida |
| T05 | Abrir unidade do módulo 1 | Conteúdo, objetivo, exemplo e questão aparecem |
| T06 | Responder incorretamente | Feedback orientador e nova tentativa disponíveis |
| T07 | Responder corretamente | Unidade concluída e XP creditado uma vez |
| T08 | Tentar abrir módulo bloqueado | Ação é impedida e mensagem é exibida |
| T09 | Concluir módulo | Próximo módulo é desbloqueado e emblema concedido |
| T10 | Atualizar a página | Progresso persiste no mesmo navegador |
| T11 | Executar ferramenta de laboratório | Resultado é calculado no navegador |
| T12 | Reexecutar ferramenta | XP de exploração não é duplicado |
| T13 | Buscar termo no glossário | Entradas são filtradas |
| T14 | Reiniciar progresso | Estado local é removido após confirmação |
| T15 | Usar viewport móvel | Navegação móvel e colunas se reorganizam |

## 4. Validação pedagógica futura

Recomenda-se um teste com 5 a 8 estudantes universitários com perfis distintos, preferencialmente de Linguística/Letras e de cursos tecnológicos. Solicitar que cada participante:

1. Identifique o objetivo da trilha.
2. Inicie a unidade de tokenização.
3. Execute uma ferramenta no laboratório.
4. Responda uma questão e explique o feedback recebido.
5. Explique a diferença entre a demonstração heurística e um modelo treinado.

Registrar tempo aproximado, pontos de confusão, erros de navegação e percepção de utilidade. Revisar interface e conteúdo com base nas observações. Nenhum teste com participantes foi realizado ou alegado na versão inicial.

## 5. Registro de validação técnica

A validação desta entrega deve ser registrada apenas após execução real dos testes descritos. Não marcar como aprovado aquilo que não foi verificado. O README identifica a aplicação como protótipo funcional e lista limitações conhecidas.
