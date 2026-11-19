# Documento de concepção — NLP Lab

**Projeto:** NLP Lab — Laboratório de Linguagem e Inteligência Artificial  
**Natureza:** projeto autoral de portfólio  
**Público principal:** estudantes universitários de diferentes áreas  
**Idioma:** português brasileiro  
**Versão:** 1.0

## 1. Problema educacional

O Processamento de Linguagem Natural costuma ser apresentado por meio de descrições técnicas fragmentadas ou exemplos de programação que pressupõem conhecimentos prévios. Estudantes de Letras, Linguística, Comunicação e cursos tecnológicos podem ter dificuldade para construir uma visão integrada entre fenômenos linguísticos, representações computacionais e aplicações de IA.

O NLP Lab foi concebido para apoiar uma primeira aproximação estruturada ao campo, articulando conceitos linguísticos, métodos computacionais, experimentação e reflexão crítica.

## 2. Propósito

Oferecer um ambiente introdutório em que o estudante possa compreender conceitos fundamentais de PLN, observar demonstrações de operações sobre textos e avaliar criticamente aplicações de linguagem computacional.

## 3. Público-alvo e perfil de entrada

Estudantes universitários de Letras e Linguística, Computação, ADS, Ciência de Dados, Comunicação e áreas interdisciplinares. Não se pressupõe domínio de programação, estatística avançada ou matemática superior. Recomenda-se familiaridade com leitura de textos e uso básico de navegador.

### Necessidades consideradas

- Conectar conceitos abstratos a exemplos de português brasileiro.
- Ter vocabulário técnico explicado com clareza.
- Avançar do entendimento linguístico para métodos computacionais.
- Experimentar pequenas operações sem instalar ferramentas.
- Compreender limites, vieses e responsabilidades de sistemas de PLN.

## 4. Proposta de valor educacional

O produto articula quatro dimensões:

1. **Compreender:** explicações conceituais e exemplos comentados.
2. **Observar:** demonstrações de como textos são segmentados, representados ou classificados.
3. **Experimentar:** ferramentas no navegador com entrada do estudante.
4. **Avaliar criticamente:** desafios sobre adequação metodológica, qualidade de dados, erros e impactos sociais.

## 5. Princípios de Design Educacional

- Progressão do conhecido ao abstrato: partir de frases e textos em português para representações e modelos.
- Alinhamento construtivo: cada objetivo aparece no conteúdo, na atividade e no critério de avaliação.
- Prática de recuperação: questões curtas após cada unidade.
- Feedback explicativo: não apenas informar acerto, mas esclarecer o conceito.
- Aprendizagem ativa: comparar, classificar, testar e justificar decisões.
- Contextualização: usar situações de pesquisa, universidade, comunicação e serviços.
- Metacognição: tornar visíveis limites dos métodos e escolhas de representação.
- Gamificação moderada: XP e conquistas reconhecem conclusão e exploração, sem punição ou competição social.

## 6. Arquitetura da experiência

| Área | Função pedagógica |
|---|---|
| Visão geral | Orientar e apresentar objetivos e percursos |
| Explorar o PLN | Navegação não linear por conceitos |
| Trilha de aprendizagem | Percurso estruturado em oito módulos |
| Laboratório | Experimentação com textos e algoritmos didáticos |
| Biblioteca | Consulta a glossário e referências |
| Meu progresso | Visualização local de unidades, XP e emblemas |

## 7. Narrativa de gamificação

O estudante assume o papel simbólico de pesquisador em formação no laboratório. A progressão é organizada em oito emblemas, um por módulo, e marcas por primeira execução de experimentos. XP é concedido uma vez por unidade concluída e uma vez por ferramenta explorada. A mecânica não representa certificação formal nem proficiência profissional.

## 8. Decisões tecnológicas

A primeira versão é uma aplicação estática HTML, CSS e JavaScript. A decisão reduz barreiras de publicação e permite demonstrações sem API externa. O estado de aprendizagem é salvo no `localStorage`, portanto é específico do navegador e dispositivo.

Não existe autenticação, banco de dados, serviço de IA conectado ou telemetria. As heurísticas do laboratório são identificadas como didáticas. Para modelos reais, seria necessário backend, dependências e avaliação apropriada.

## 9. Escopo e limites

**Incluído:** oito módulos, 24 unidades, uma questão formativa por unidade, sete experimentos demonstrativos, glossário, referências, gamificação e documentação pedagógica.

**Não incluído nesta versão:** avaliação automática de texto livre, correção de redação por IA, execução de spaCy ou Transformers no navegador, contas de usuário, sincronização remota, emissão de certificado oficial, fórum, painel docente e coleta de dados pessoais.

## 10. Critérios de sucesso do protótipo

- Navegação entre todas as áreas sem links quebrados.
- O estudante consegue iniciar e concluir unidades com feedback.
- O progresso é preservado após recarregar a página no mesmo navegador.
- As demonstrações processam entradas e explicam limitações.
- Os objetivos, conteúdos e avaliações são coerentes.
- A experiência é utilizável em telas desktop e celular.
- A documentação permite a um avaliador entender as decisões pedagógicas e técnicas.

## 11. Próxima etapa de validação

Aplicar teste exploratório com estudantes universitários: observar se conseguem localizar a trilha, explicar o objetivo de uma unidade, completar uma atividade, interpretar o feedback e compreender a diferença entre demonstração heurística e modelo treinado. Registrar dificuldades observadas e revisar conteúdo e interface. Nenhum resultado de validação com usuários é alegado nesta versão.
