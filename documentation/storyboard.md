# Storyboard — unidades da trilha

O storyboard descreve o fluxo didático, a ação esperada e o feedback. Os textos completos e as questões já estão implementados no arquivo `js/content.js` e renderizados pela interface.

## Modelo de tela por unidade

| Área da tela | Conteúdo | Função pedagógica |
|---|---|---|
| Identificação | Módulo, unidade e estado | Orientar localização e progresso |
| Título e contexto | Nome da unidade e módulo | Ativar o foco da aprendizagem |
| Objetivo | Resultado mensurável | Tornar expectativa explícita |
| Introdução | Conceito central | Criar enquadramento |
| Desenvolvimento | Seções explicativas | Construir conhecimento |
| Ideias essenciais | Síntese em tópicos | Apoiar revisão |
| Exemplo | Aplicação em português ou contexto de PLN | Relacionar conceito e uso |
| Desafio | Questão de múltipla escolha | Recuperar e verificar aprendizagem |
| Feedback | Explicação da alternativa correta | Corrigir concepções e consolidar conceito |
| Avanço | Próxima unidade ou módulo | Sinalizar progressão |

## Roteiro por unidade

### Módulo 1 — Introdução à linguagem e ao PLN

| Unidade | Conteúdo central | Exemplo/ação | Evidência |
|---|---|---|---|
| 1.1 O que é PLN? | Campo interdisciplinar e tarefas | Relacionar aplicações a tarefas | Diferenciar campo e produto |
| 1.2 História do PLN | Abordagens simbólicas, estatísticas e neurais | Comparar estratégias | Reconhecer mudanças históricas |
| 1.3 Etapas de um sistema | Dados, preparo, representação, modelo e avaliação | Relacionar pipeline à tarefa | Justificar sequência orientada à tarefa |

### Módulo 2 — Fundamentos linguísticos

| Unidade | Conteúdo central | Exemplo/ação | Evidência |
|---|---|---|---|
| 2.1 Morfologia | Morfemas, flexão e derivação | Analisar plural e formas verbais | Reconhecer flexão |
| 2.2 Sintaxe | Constituintes e relações | Interpretar ambiguidade de ligação | Explicar estrutura |
| 2.3 Semântica, pragmática e variação | Sentido, contexto e diversidade | Interpretar “banco” e variação | Reconhecer contexto e diversidade |

### Módulo 3 — Pré-processamento e tokenização

| Unidade | Conteúdo central | Exemplo/ação | Evidência |
|---|---|---|---|
| 3.1 Corpus e dados | Representatividade, documentação e qualidade | Analisar corpus de avaliações | Identificar dimensões de qualidade |
| 3.2 Tokenização | Tokens, palavras e subpalavras | Observar segmentação de frase | Distinguir token de palavra |
| 3.3 Normalização e formas | Stopwords, stemming e lematização | Comparar transformações | Justificar pré-processamento |

### Módulo 4 — Análise computacional

| Unidade | Conteúdo central | Exemplo/ação | Evidência |
|---|---|---|---|
| 4.1 POS tagging | Categorias gramaticais em contexto | Analisar “jantar” | Reconhecer ambiguidade categorial |
| 4.2 NER | Pessoas, organizações, lugares e datas | Identificar spans | Distinguir extração e compreensão |
| 4.3 Parsing | Dependências e papéis semânticos | Analisar sujeito e objeto | Distinguir sintaxe e semântica |

### Módulo 5 — Representação textual

| Unidade | Conteúdo central | Exemplo/ação | Evidência |
|---|---|---|---|
| 5.1 Bag of Words | Vocabulário e frequência | Comparar duas sequências | Identificar perda de ordem |
| 5.2 N-gramas e TF-IDF | Sequências locais e ponderação | Interpretar pesos | Distinguir contagem e ponderação |
| 5.3 Embeddings | Vetores e distribuição | Interpretar proximidade | Explicar representação distribuída |

### Módulo 6 — Aprendizado de máquina

| Unidade | Conteúdo central | Exemplo/ação | Evidência |
|---|---|---|---|
| 6.1 Dados e rótulos | Exemplos, atributos e vazamento | Classificar elementos de dataset | Reconhecer rótulo e vazamento |
| 6.2 Classificação e métricas | Sentimento, precisão, revocação e F1 | Escolher métrica conforme erro | Justificar avaliação |
| 6.3 Não supervisionado | Clustering e tópicos | Interpretar grupos exploratórios | Diferenciar paradigmas |

### Módulo 7 — Redes neurais e Transformers

| Unidade | Conteúdo central | Exemplo/ação | Evidência |
|---|---|---|---|
| 7.1 Redes para sequências | RNN, LSTM e GRU | Explicar atualização de estado | Reconhecer processamento sequencial |
| 7.2 Atenção | Query, Key e Value | Interpretar ponderação contextual | Explicar função da atenção |
| 7.3 Transformers e LLMs | Transformer, BERT, GPT | Comparar objetivos em alto nível | Distinguir arquitetura e família de modelo |

### Módulo 8 — Aplicações e ética

| Unidade | Conteúdo central | Exemplo/ação | Evidência |
|---|---|---|---|
| 8.1 Aplicações | Busca, tradução, atendimento e acessibilidade | Relacionar tarefa a aplicação | Identificar avaliação contextual |
| 8.2 Ética e diversidade | Viés, privacidade e cobertura | Propor mitigação | Identificar riscos e respostas |
| 8.3 Projeto integrador | Problema, dados, método e avaliação | Elaborar proposta orientada | Planejar aplicação responsável |

## Exemplo detalhado de interação: unidade 3.2

1. O estudante lê a definição de tokenização.
2. Compara token com palavra e subpalavra.
3. Observa um exemplo de segmentação em português.
4. Digita uma frase no laboratório.
5. Executa o tokenizador didático e vê palavras, números e pontuação separados.
6. Retorna à unidade e responde: “Token é necessariamente uma palavra completa?”
7. Se errar, recebe feedback que explica modelos subword.
8. Se acertar, recebe 20 XP uma única vez e pode avançar.

## Feedback geral

- **Acerto:** confirmar a resposta e apresentar uma explicação conceitual.
- **Erro:** não penalizar; orientar a revisão com uma pista conceitual.
- **Tentativa sem seleção:** solicitar que o estudante escolha uma alternativa.
- **Unidade já concluída:** permitir revisão sem conceder XP novamente.
