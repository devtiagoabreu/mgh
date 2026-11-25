---
name: 18-handoff-04-security-interpretation-roadmap
description: Documentos 08, 09 e 10 do Developer Handoff Package.
source: docs/001/MAPA DE GOVERNO HUMANO - MGH™.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 43421-49951
---

# Handoff 04: Security, Interpretation E Roadmap

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# **ETAPA 2.29H — SECURITY, PRIVACY & NONFUNCTIONAL REQUIREMENTS**

No Documento 08 vamos consolidar num só lugar aquilo que hoje está distribuído pela arquitetura:

**LGPD**

**Identity Vault**

**controle de acesso**

**MFA**

**tokens**

**criptografia**

**logs**

**segredos**

**backup**

**restore**

**retenção**

**incidentes**

**DEV/STAGING/PROD**

**disponibilidade**

**performance**

**acessibilidade**

**observabilidade**

**dependências**

**CI/CD**

e os requisitos mínimos de segurança para que a Onda 0 possa começar.

Depois dele, teremos fechado praticamente todo o pacote necessário para o desenvolvedor **estimar a Fase A com responsabilidade**.

Perfeito. Agora vamos fechar o documento que impede o MGH de nascer metodologicamente sofisticado, mas tecnicamente frágil.

# **ETAPA 2.29H — SECURITY, PRIVACY & NONFUNCTIONAL REQUIREMENTS**

## **Documento 08 — Segurança, Privacidade e Requisitos Não Funcionais**

**Versão:** MGH-SEC-NFR-0.1
**Compatibilidade:** MGH-MASTER-P1.0-RC1
**Escopo imediato:** Fase A — Pilot Core / Onda 0
**Status:** PILOT

A regra-mãe deste documento será:

**No MGH, proteger a evidência significa proteger também a pessoa que produziu essa evidência.**

E outra:

**Segurança não será adicionada depois. Ela faz parte da arquitetura desde o primeiro participante.**

# **1. Objetivo deste documento**

Este documento define os requisitos mínimos de:

**segurança**

**privacidade**

**controle de acesso**

**segregação de dados**

**autenticação**

**auditoria**

**backup**

**recuperação**

**infraestrutura**

**performance**

**observabilidade**

**acessibilidade**

**continuidade**

para que a plataforma esteja apta a receber dados reais da Onda 0.

# **2. O que este documento NÃO pretende fazer**

Ele não substitui:

consultoria jurídica;

DPO/encarregado quando aplicável;

revisão especializada de segurança;

pentest futuro;

política corporativa definitiva.

Também não vamos inventar agora:

prazo jurídico exato de retenção;

base legal comercial definitiva;

SLA contratual;

normas psicométricas.

Esses pontos permanecem:

**deliberadamente abertos até o momento correto.**

# **3. Classificação inicial de informações**

Vamos adotar quatro classes internas:

| **Classe** | **Exemplo** |
| --- | --- |
| PUBLIC | material institucional público |
| INTERNAL | documentação operacional não sensível |
| CONFIDENTIAL | dados metodológicos, regras internas, resultados |
| RESTRICTED | identidade, credenciais, tokens, dados pessoais e controles críticos |

# **4. Exemplos práticos**

### **PUBLIC**

descrição institucional do MGH;

informações de marketing futuras.

### **INTERNAL**

backlog;

procedimentos internos gerais.

### **CONFIDENTIAL**

banco de itens;

scoring;

Evidence Dictionary;

UIG Library;

Golden Cases;

results pseudonimizados.

### **RESTRICTED**

nome;

e-mail;

telefone;

token de acesso;

credentials;

secrets;

Identity Vault.

# **5. Princípio de minimização de dados**

A plataforma coleta apenas aquilo que possui finalidade definida.

Não coletar “porque talvez um dia seja útil”.

Exemplos que não são necessários para O0:

CPF;

RG;

endereço;

salário;

estado civil;

religião;

dados de saúde.

Se no futuro algum dado adicional for realmente necessário:

nova análise de finalidade e privacidade.

# **6. Separação de identidade**

Mantemos o:

# **IDENTITY VAULT**

A arquitetura separa:

quem é a pessoa

de:

como ela respondeu.

PARTICIPANT\_IDENTITY

fica separada de:

ASSESSMENT

RESPONSE

SCORING\_RUN

EVIDENCE

INTERPRETATION.

# **7. O Score Engine não conhece identidade**

Requisito estrutural:

Score Engine recebe:

assessment\_id

e respostas canônicas.

Não recebe:

nome;

telefone;

e-mail.

O mesmo deverá valer para:

Evidence Engine;

Interpretation Engine.

# **8. Princípio do menor privilégio**

Cada usuário interno recebe apenas as permissões necessárias para sua função.

Não teremos:

“todo mundo é admin porque é mais fácil”.

# **9. RBAC**

Permissões poderão ser organizadas conceitualmente como:

participant.respond\_assessment

research.read\_assessment

research.write\_interview

research.export\_pseudonymized

methodology.review\_item

methodology.manage\_change\_request

admin.manage\_users

admin.manage\_assessment

identity.read

identity.export

instrument.publish

assessment.invalidate

Roles agrupam permissões.

# **10. Identity Access separado**

Um RESEARCHER pode visualizar:

MGH-O0-006

sem necessariamente saber:

quem é MGH-O0-006.

A permissão:

identity.read

é independente.

# **11. Autenticação interna**

Para usuários administrativos:

**credencial individual**

**senha robusta**

**nunca senha compartilhada**

**proteção contra tentativas abusivas**

**sessões seguras**

# **12. MFA**

Para ambiente piloto/produção:

MFA deve estar disponível e é fortemente recomendado como requisito obrigatório para funções administrativas sensíveis.

Especialmente:

ADMIN;

usuários com Identity Vault;

publicação metodológica;

exportações identificadas.

Para produção comercial futura:

MFA administrativo deve ser obrigatório.

# **13. Armazenamento de senha**

Senha nunca será armazenada:

em texto puro.

Utilizar algoritmo moderno de password hashing e parâmetros adequados à tecnologia escolhida.

Detalhe de implementação:

responsabilidade técnica.

Proibido:

MD5;

SHA simples para senha;

criptografia caseira.

# **14. Tokens do participante**

Os links individuais precisam utilizar tokens:

imprevisíveis;

suficientemente longos;

revogáveis;

não sequenciais;

não contendo PII.

Exemplo proibido:

/apply/alisson.campos/17



# **15. Token em logs**

O token completo:

nunca deve aparecer em log comum.

Quando necessário:

mascarar.

Exemplo:

abcd...91f2.

# **16. Token revogado**

Ao revogar:

o link antigo deixa de funcionar.

Registrar:

quem revogou;

quando;

motivo quando aplicável.

# **17. Resposta neutra para token inválido**

Não revelar:

se o assessment existe.

Mensagem pública:

“Este acesso não está disponível.”

Isso reduz enumeração e exposição de existência.

# **18. Transporte**

Todo tráfego real:

# **HTTPS/TLS**

Não aceitar aplicação real da Onda 0 via:

HTTP aberto.

# **19. Dados em repouso**

Banco, backups e storage devem utilizar mecanismos adequados de criptografia em repouso fornecidos pela infraestrutura escolhida.

Para informações particularmente sensíveis, poderá haver proteção adicional.

Mas:

não criaremos criptografia artesanal.

# **20. Secrets**

Secrets incluem:

DB password;

API keys;

JWT secrets;

encryption keys;

mail credentials;

cloud credentials.

Não ficam:

hard-coded;

commitados no Git;

em .env dentro do repositório;

em documentação pública.

# **21. Secret Management**

Utilizar:

secret manager do cloud;

vault apropriado;

ou mecanismo equivalente.

DEV, STAGING e PROD:

secrets diferentes.

# **22. Ambientes**

Separação obrigatória:

# **DEV**

dados sintéticos.

# **STAGING**

homologação.

# **PILOT/PROD**

dados reais.

# **23. Não usar banco compartilhado entre ambientes**

Evitar:

uma única base com coluna environment.

Preferir separação real.

Isso reduz:

erro humano;

exposição;

mistura de testes com dados reais.

# **24. Dados reais em desenvolvimento**

Regra padrão:

proibido.

Developer não deve copiar a base real da O0 para seu notebook para:

“testar mais rápido”.

Se algum caso extraordinário exigir diagnóstico:

procedimento formal;

minimização;

pseudonimização;

controle.

# **25. Dados sintéticos**

Golden Cases e ambientes de desenvolvimento utilizarão:

dados sintéticos.

Nunca:

respostas reais reutilizadas como fixture automática.

# **26. Audit Log**

Ações sensíveis precisam produzir:

registro de auditoria.

Exemplos:

login administrativo;

invalidação;

withdrawal;

revogação;

export;

publicação;

mudança de permission;

aprovação de versão.

# **27. Audit Log não é opcional**

Não basta termos:

logs da aplicação.

Precisamos saber:

quem fez o quê.

# **28. Audit Log append-only**

Idealmente:

registros de auditoria não são editáveis por usuários comuns.

Correção de uma ação errada acontece:

através de novo evento.

Não reescrevendo história.

# **29. Response Events vs Audit Logs**

Continuamos separando:

### **Response Event**

comportamento durante aplicação.

### **Audit Log**

ação administrativa.

### **Technical Log**

erro/performance.

### **Security Log**

auth/suspeita.

Não misturar conceitos.

# **30. PII em logs**

Logs técnicos não devem registrar automaticamente:

nome;

e-mail;

telefone;

resposta completa;

texto livre;

token completo.

Utilizar IDs técnicos quando possível.

# **31. Error Tracking externo**

Se utilizarmos serviço de terceiros para error tracking:

revisar quais dados são enviados.

Não mandar:

payload completo do assessment

apenas porque biblioteca faz isso por padrão.

Aplicar:

redaction.

# **32. Rate Limiting**

Endpoints públicos precisam de proteção proporcional contra:

abuso;

enumeration;

brute force;

spam;

automação maliciosa.

Especialmente:

access token;

login;

submit;

password reset futuro.

# **33. Proteção contra ataques comuns**

A implementação deve considerar controles contra riscos como:

SQL injection;

XSS;

CSRF quando aplicável;

broken access control;

IDOR;

credential stuffing;

insecure direct object reference;

upload inseguro futuro;

exposição de stack trace.

Não precisamos inventar tecnologia.

Precisamos exigir prática segura.

# **34. Authorization sempre no servidor**

Não confiar em:

botão escondido.

Se usuário não possui permissão:

backend rejeita.

Mesmo que alguém faça requisição manual pela API.

# **35. Participante não acessa outro participante**

Regra:

token de A não dá acesso a B.

Testado por:

SEC-004.

# **36. Não expor score target**

A API pública do participante não deve enviar:

D/I/S/C mappings;

facetas;

DR construct;

evidence codes;

relation groups.

Isso é:

segurança metodológica

segurança da aplicação.

# **37. Raw export**

Não disponibilizar endpoint público genérico:

/export-all-responses

Permissão específica.

Audit Log.

Quando possível:

export pseudonimizado como padrão.

# **38. Export identificado**

Só quando:

finalidade válida;

permissão adequada;

registro de auditoria.

Não porque:

“é admin”.

# **39. Consentimento versionado**

Precisamos armazenar:

qual versão foi apresentada;

quando;

aceite ou recusa.

Não basta:

consent = true.

# **40. Privacy Notice versionada**

O mesmo vale para aviso de privacidade quando separado do consentimento.

Assim conseguimos saber:

o que o participante foi informado naquele momento.

# **41. Retirada**

O sistema precisa permitir registrar:

WITHDRAWN.

Mas retirada metodológica:

não é sinônimo automático de remoção física imediata de todos os dados.

O tratamento correto dependerá:

finalidade;

obrigações;

base jurídica;

retenção;

direitos aplicáveis.

Por isso teremos workflow de privacidade separado.

# **42. Exclusão e anonimização**

A arquitetura deve conseguir suportar, quando legalmente aplicável:

exclusão;

anonimização;

restrição;

pseudonimização;

retenção necessária.

Não adotar:

DELETE CASCADE

como estratégia jurídica.

# **43. Retention Policy**

Ainda não congelaremos números como:

“guardar por cinco anos”.

O sistema deve, entretanto, suportar campos/conceitos como:

retention\_until

privacy\_status

legal\_hold

quando necessários.

Status:

OPEN — LEGAL/PRIVACY.

# **44. Legal basis futura**

Não congelaremos:

“consentimento será sempre a base jurídica”.

Para O0:

consentimento informado integra o desenho de pesquisa.

Para operação comercial futura:

base apropriada deverá ser analisada conforme o fluxo real.

# **45. Controlador e operador**

O projeto deverá futuramente documentar claramente:

quem atua como controlador;

quem atua como operador;

quais fornecedores subprocessam dados.

Esse desenho depende:

contratos;

modelo de negócio;

cloud;

serviços terceiros.

Não inventaremos neste documento.

# **46. Third-party services**

Qualquer fornecedor externo que receba dados precisa ser analisado.

Exemplos futuros:

cloud;

e-mail;

analytics;

LLM;

error tracking.

Pergunta básica:

Que dado realmente precisa sair do nosso ambiente?

# **47. Princípio para terceiros**

**Se o fornecedor não precisa da informação, não recebe a informação.**

Especialmente:

PII;

RAW;

item bank;

interpretation data.

# **48. Analytics**

Evitar analytics invasivo no participante.

Não precisamos de:

fingerprinting;

cross-site tracking;

ad-tech;

remarketing

dentro do assessment da O0.

Se alguma telemetria for usada:

finalidade operacional clara.

# **49. Cookies**

Utilizar apenas o necessário à operação no piloto, salvo futura política distinta.

Não precisamos:

cookies de publicidade.

# **50. IA — fronteira de privacidade**

No P1.0/O0:

IA não é requisito.

Se futuramente entrar:

RAW não deverá ser enviado indiscriminadamente para LLM.

Fluxo aprovado permanece:

Claims autorizados;

Actions;

constraints;

audience;

texto mínimo necessário.

# **51. Dados enviados a IA futura**

Preferência:

sem nome;

sem telefone;

sem e-mail;

sem 56 respostas;

sem dados desnecessários.

O texto a ser redigido deverá ser derivado do:

Claim Engine.

# **52. Fornecedor de IA**

Antes de uso comercial:

avaliar:

retenção;

treinamento sobre dados;

região;

contrato;

subprocessadores;

segurança;

controles de privacidade.

Essa decisão é futura.

# **53. Backup**

Obrigatório para produção/piloto.

Precisamos de:

backup automático;

frequência definida;

monitoramento;

retenção;

criptografia adequada.

# **54. Mas backup sozinho não basta**

Precisamos de:

# **RESTORE TEST**

Antes da O0:

restaurar ao menos uma cópia em ambiente controlado.

Confirmar:

participantes;

assessments;

responses;

events;

configuração crítica.

# **55. Resultado do Restore Test**

Registrar:

data;

backup utilizado;

tempo;

responsável;

resultado;

problemas.

Isso vira evidência de readiness.

# **56. RPO**

Recovery Point Objective:

quanto dado podemos perder após desastre?

O desenvolvedor deverá propor para piloto.

Não precisamos congelar SLA empresarial agora.

Mas:

não pode ser “não sei”.

# **57. RTO**

Recovery Time Objective:

quanto tempo precisamos para restaurar operação?

Também deve ser proposto/documentado.

# **58. Disaster Recovery**

Para O0, um plano simples pode ser suficiente.

Precisamos saber:

onde está backup;

como restaurar;

quem tem acesso;

como recriar app;

como restaurar DB;

como recuperar secrets.

# **59. Infraestrutura como código**

Não precisa ser obrigatória em versão sofisticada.

Mas a infraestrutura deve ser:

documentada e reproduzível.

Idealmente:

IaC ou configuração equivalente.

Evitar ambiente que só funciona porque:

“o desenvolvedor lembra como montou”.

# **60. Repositório**

Código deve estar em repositório controlado pela empresa/projeto.

Não apenas:

conta pessoal do programador.

A empresa deve possuir acesso administrativo.

# **61. Cloud**

Conta de cloud também deve ficar sob controle do projeto/empresa.

O fornecedor pode ter acesso.

Não:

ser o único dono da infraestrutura.

# **62. Domínio**

Mesma lógica:

credenciais e propriedade devem estar sob controle da empresa.

# **63. Banco**

Credenciais administrativas não podem ficar exclusivamente com fornecedor externo.

Precisamos de capacidade de takeover.

# **64. Handoffability**

Uma pergunta fundamental:

Se o desenvolvedor desaparecer amanhã, outro profissional consegue assumir?

Para isso precisamos:

código;

documentação;

migrations;

deploy;

secrets sob controle;

infra;

backups;

arquitetura.

# **65. CI/CD**

Fluxo recomendado:

Git

→ Pull Request

→ testes

→ build

→ staging

→ homologação

→ production.

Não:

edição manual em produção.

# **66. Branch protection**

Para componentes críticos:

evitar push direto à branch de produção.

Code review recomendado.

# **67. Golden Cases na pipeline**

Testes BLOCKING do:

GOLDEN-P1.0

fazem parte do CI.

Se falham:

build/deploy não segue.

# **68. Migrations**

Schema changes:

versionados;

testados;

reversibilidade ou plano de recuperação conforme caso;

nunca “alterei a tabela manualmente e esqueci”.

# **69. Rollback**

O desenvolvedor deve documentar estratégia para:

release problemática.

Não necessariamente rollback automático complexo.

Mas precisamos saber:

como voltar para uma versão estável?

# **70. Incident Management**

Precisamos de protocolo simples de incidentes.

Classificação inicial:

SEV1

SEV2

SEV3

SEV4.

# **71. SEV1**

Exemplos:

vazamento significativo;

perda de dados;

corrupção ampla de RAW;

acesso indevido crítico;

serviço totalmente indisponível durante wave crítica.

Ação:

resposta imediata e escalonamento.

# **72. SEV2**

Exemplos:

submit indisponível;

autosave falhando para muitos usuários;

score errado em produção;

problema sério de autorização sem evidência de exploração.

Alta prioridade.

# **73. SEV3**

Funcionalidade secundária afetada.

Exemplo:

dashboard de pesquisa com problema, mas aplicação funciona.

# **74. SEV4**

Problemas cosméticos.

Exemplo:

spacing;

texto operacional menor;

detalhe visual.

# **75. Incident Log**

Registrar:

quando detectado;

quem;

impacto;

versões;

participantes afetados;

contenção;

causa;

correção;

follow-up.

Principalmente se puder afetar:

validade dos dados.

# **76. Se incidente contaminar respostas**

Não apenas:

corrigir software.

Precisamos também registrar:

Occurrence

e avaliar:

impacto metodológico.

Mais uma vez:

software e metodologia estão ligados.

# **77. Observabilidade**

Precisamos monitorar pelo menos:

app availability;

erro rate;

DB connectivity;

save failures;

submit failures;

job failures;

queue backlog quando houver;

latência;

storage.

# **78. Alertas**

Não precisamos de NOC 24h no piloto.

Mas falhas críticas devem gerar:

alerta para responsável.

Especialmente durante janela ativa da Onda 0.

# **79. Health Checks**

Aplicação deve oferecer mecanismos técnicos equivalentes a:

liveness;

readiness.

Assim podemos diferenciar:

app está rodando

de:

app consegue atender corretamente.

# **80. Logs estruturados**

Preferir:

timestamp;

correlation\_id;

service/module;

event;

severity;

technical context.

Sem despejar:

payload sensível.

# **81. Correlation ID**

Pode ser útil para seguir uma operação:

request;

save;

submit;

job.

Sem usar PII como ID de correlação.

# **82. Nonfunctional — performance**

Targets iniciais:

| **Operação** | **Referência** |
| --- | --- |
| abertura de cenário | percepção <1s quando possível |
| salvar resposta | ideal <500ms |
| salvar resposta aceitável | <1s em condição normal |
| abertura inicial | ~<2s |
| dashboard | ~<2–3s |
| scoring | segundos |
| report futuro sem processamento pesado | referência <10s |

São:

targets de engenharia.

Não SLAs comerciais.

# **83. Performance não pode sacrificar integridade**

Não aceitar otimização que:

não grava Response Event;

não persiste Option Presentation;

mantém respostas somente no browser;

perde auditoria.

Melhor:

alguns milissegundos extras

do que:

dado irrecuperável.

# **84. Disponibilidade**

Para primeira versão comercial futura, já discutimos algo como:

99,5% como meta inicial possível.

Mas:

não é compromisso contratual da O0.

No piloto:

foco em estabilidade e recuperação.

# **85. Capacity Planning**

Não precisamos projetar para milhões de usuários simultâneos.

Mas precisamos estimar:

participantes simultâneos plausíveis;

admin users;

storage;

crescimento de Response Events;

backups.

Arquitetura deve suportar crescimento sem reescrita imediata.

# **86. Mobile**

Participant App:

# **mobile-first.**

Deve funcionar adequadamente em:

smartphones atuais;

larguras pequenas;

touch.

Admin:

desktop-first responsivo.

# **87. Navegadores**

O desenvolvedor deverá documentar:

browser support.

No mínimo versões atuais dos principais navegadores utilizados pelo público-alvo.

Não precisamos suportar:

navegador legado extremo.

# **88. Acessibilidade**

Objetivo futuro:

WCAG AA.

Já no piloto:

labels;

contraste;

navegação por teclado quando aplicável;

foco;

erro textual;

não depender só de cor;

tamanho de touch adequado.

# **89. Não utilizar cor como significado único**

Exemplo:

opção inválida só fica vermelha.

Também precisa:

mensagem/ícone/estado acessível.

# **90. Idioma**

P1.0:

pt-BR.

UI pode nascer preparada para i18n.

Mas:

tradução do instrumento não é tradução comum de software.

Uma versão em espanhol/inglês exigirá:

adaptação metodológica.

# **91. Timezone**

Backend deve preferencialmente armazenar timestamps:

UTC.

Interface converte conforme contexto.

Isso evita:

confusões;

horário de verão;

servidor em outra região.

# **92. Clock integrity**

Não usar relógio do navegador como única fonte de eventos críticos.

Servidor registra timestamps relevantes.

Client timestamps podem existir como complemento.

# **93. Data integrity constraints**

Banco deve impor quando possível:

FKs;

uniques;

enums/checks;

not-null;

compatibilidade de relationships.

Não depender exclusivamente do frontend.

# **94. Atomicidade**

Operações críticas:

submit;

publication;

invalidation;

score completion

precisam ser consistentes.

Não devemos ter estado intermediário impossível.

# **95. Concurrency**

Evitar:

duas sessões sobrescrevendo resposta;

dois score jobs duplicados;

dois submits simultâneos.

Utilizar:

locking;

version fields;

idempotency;

constraints

conforme decisão técnica.

# **96. Idempotência**

Aplicar especialmente em:

submit;

score;

Evidence Run futuro;

report generation;

ações assíncronas críticas.

Retry técnico não pode criar:

duplicação lógica.

# **97. Scalability**

Arquitetura modular monolith é escolha recomendada inicial.

Se futuro exigir:

podemos separar serviços.

Não criar microservices por antecipação.

# **98. Maintainability**

Código deve seguir:

separação de módulos;

testes;

convenções;

documentação;

migrations;

configuration management.

Evitar lógica metodológica duplicada.

# **99. Source of Truth**

Cada coisa precisa ter fonte de verdade.

Instrumento:

Instrument Registry.

Scoring:

Scoring Matrix/version.

Claims:

Claim Dictionary.

Actions:

Action Registry.

Não espalhar cópias diferentes em:

frontend;

PDF;

backend;

planilha.

# **100. Configuration Validation**

Antes de publicar:

Instrument Validator;

Score Validator;

compatibility checks;

Golden Cases.

Configuração inconsistente:

não sobe.

# **101. Dependency Management**

Bibliotecas devem ser:

versionadas;

atualizadas;

monitoradas para vulnerabilidades relevantes.

Evitar dependência abandonada para funções críticas quando houver alternativa adequada.

# **102. Software Composition**

Em maturidade maior, podemos usar:

dependency scanning;

SBOM;

security scanning.

Para O0:

ao menos higiene básica de dependências é esperada.

# **103. Pentest**

Não é obrigatório um pentest enterprise antes de oito participantes O0 se a arquitetura estiver adequadamente protegida e revisada.

Mas antes de escala comercial:

revisão especializada/pentest deve entrar no Gate técnico.

# **104. Security Review**

Antes da O0, pelo menos revisão técnica de:

auth;

authorization;

tokens;

public endpoints;

secrets;

logs;

backups;

deployment.

Antes de escala:

ampliar profundidade.

# **105. Privacy by Default**

Configuração padrão deve escolher opção mais restritiva.

Exemplo:

export:

pseudonimizado por padrão.

Não:

identificado por padrão e botão para remover nomes.

# **106. Privacy by Design**

Privacidade precisa estar na arquitetura:

Identity Vault;

mínimo de PII;

separação;

RBAC;

audit;

retention-ready.

Não apenas:

uma política escrita no site.

# **107. Métricas de produto não podem virar vigilância**

Podemos medir:

completion;

save errors;

timing;

revisions.

Não precisamos capturar:

cada clique;

movimento do mouse;

fingerprinting

sem justificativa metodológica.

# **108. Frontend caching**

Cuidado com dados sensíveis em:

localStorage;

browser cache;

service workers.

Não deixar assessment completo persistido indefinidamente no dispositivo sem necessidade.

Estratégia final cabe ao desenvolvedor.

Requisito:

minimizar exposição local.

# **109. Logout administrativo**

Sessões administrativas devem possuir:

timeout apropriado;

revogação;

logout real.

Não usar sessões eternas.

# **110. Session hijacking**

Cookies/tokens devem usar controles apropriados:

Secure;

HttpOnly quando cabível;

SameSite;

rotation

conforme arquitetura escolhida.

# **111. Password reset**

Se implementado:

token expira;

uso único;

não revela existência de conta de forma inadequada;

auditável quando necessário.

# **112. Admin creation**

Criação de usuários administrativos:

não deve ser pública.

Precisa de:

admin autorizado;

invite;

workflow controlado.

# **113. Deactivation**

Funcionário/prestador sai do projeto:

acesso é removido.

Não:

senha continua funcionando por meses.

# **114. Access Review**

Mesmo na operação pequena:

periodicamente revisar:

quem tem acesso a quê.

Especialmente:

Identity Vault;

exports;

instrument publish.

# **115. Ownership técnico**

Antes da contratação, deve ficar claro:

**repositório — empresa**

**cloud — empresa**

**domínio — empresa**

**dados — sob governança da empresa**

**documentação — empresa**

**credenciais principais — empresa**

O desenvolvedor:

recebe acesso necessário para trabalhar.

Não o contrário.

# **116. Intellectual Property**

Os seguintes ativos metodológicos devem permanecer claramente como ativos do MGH/M2M:

instrumento;

banco de itens;

scoring;

Evidence Dictionary;

UIG Library;

Synthesis Rules;

Claim Dictionary;

Action Registry;

Language Policy;

nomes proprietários;

documentação metodológica.

O contrato jurídico deve refletir isso adequadamente.

# **117. Código desenvolvido**

Contrato deve esclarecer direitos sobre:

código;

documentação;

configuração;

infra;

deploy;

migrations;

artefatos.

Não precisamos redigir contrato jurídico aqui.

Mas precisamos marcar como:

requisito de contratação.

# **118. Vendor Lock-in**

Evitar solução em que:

apenas aquela pessoa consegue operar.

Isso não significa proibir serviços proprietários.

Significa:

documentar dependências e garantir acesso/portabilidade razoável.

# **119. Known Security Issues**

Antes de release:

lista de issues conhecidas.

Cada issue:

severity;

impact;

mitigação;

prazo.

Nenhum BLOCKING aberto antes da O0.

# **120. Security Gate pré-O0**

Antes do primeiro participante real:

| **Requisito** | **Resultado necessário** |
| --- | --- |
| HTTPS | PASS |
| Auth interno | PASS |
| Authorization/RBAC | PASS |
| Tokens seguros | PASS |
| Identity separation | PASS |
| Secrets fora do repo | PASS |
| PII redaction em logs | PASS |
| Public API sem score targets | PASS |
| Backup | PASS |
| Restore test | PASS |
| DEV/STAGING/PILOT separados | PASS |
| Audit Log | PASS |
| Export permissions | PASS |
| Rate protection | PASS |
| Critical security tests | PASS |

# **121. Gate comercial futuro**

Antes de uso comercial real, exigir camada mais forte:

security review formal;

privacy notice final;

contratos;

retention policy;

incident documentation;

monitoring;

MFA obrigatório;

backup/restore periódico;

dependency review;

possível pentest;

privacy/legal review;

policy para fornecedores/IA.

# **122. Matriz de responsabilidade**

Podemos congelar inicialmente:

| **Tema** | **Responsável principal** |
| --- | --- |
| metodologia | MGH |
| arquitetura/backend | Tecnologia |
| infraestrutura | Tecnologia |
| segurança técnica | Tecnologia |
| itens/scoring | MGH |
| LGPD/base jurídica | Legal/Privacy |
| validação psicométrica | Psicometrista |
| UX participante | Produto + Metodologia |
| relatório interpretativo | MGH |
| IA futura | MGH + Tecnologia + Privacy |

Isso reduz zonas cinzentas.

# **123. Nonfunctional Definition of Done**

A Fase A não será considerada pronta apenas porque:

“as telas funcionam”.

Também precisa:

* ambiente separado;
* TLS;
* RBAC;
* Identity Vault;
* backups;
* restore testado;
* logs adequados;
* audit log;
* secrets protegidos;
* CI/CD;
* migrations;
* monitoring básico;
* incident procedure;
* performance aceitável;
* mobile funcional;
* acessibilidade básica;
* documentação de deploy;
* código e infra sob controle da empresa.

# **124. O que NÃO pode ser adiado para “depois”**

Especialmente:

versionamento;

identity separation;

RAW preservation;

RBAC;

audit;

backup;

secrets;

environment separation.

Porque corrigir isso depois com dados reais existentes costuma ser muito mais caro e arriscado.

# **125. O que pode crescer progressivamente**

Podemos sofisticar depois:

WAF avançado;

SIEM;

SAST/DAST robustos;

pentest recorrente;

SOC;

HA multi-região;

disaster recovery enterprise;

SLA 99,99%.

Isso seria desproporcional à O0.

# **126. Princípio de proporcionalidade**

Nossa postura não será:

“segurança máxima possível custe o que custar”.

Nem:

“são só dez pessoas, então tanto faz”.

A regra é:

**segurança proporcional à sensibilidade do dado, ao risco e ao estágio do produto — sem ignorar fundamentos que precisariam existir desde o nascimento.**

# **127. Documento 08 concluído**

Com isso, o Developer Handoff passa a ter:

**01 — Executive Product Brief
02 — Functional Specification
03 — Architecture & Data Model
04 — Instrument Specification
05 — Scoring Specification
06 — O0 Research & Pilot Protocol
07 — Golden Cases & Acceptance Tests
08 — Security, Privacy & Nonfunctional Requirements**

Agora chegamos ao documento mais sofisticado do handoff metodológico:

# **ETAPA 2.29I — INTERPRETATION ENGINE SPECIFICATION**

No Documento 09 vamos reunir em uma única especificação técnica:

**Evidence Dictionary**

**Evidence Levels**

**Lineage**

**Independence Groups**

**Evidence Ceiling**

**32 UIGs**

**25 Primary**

**7 Modulators**

**Block Rules**

**Contextual Precedence**

**Collision Resolver**

**5 sínteses oficiais**

**30 Claims**

**30 Actions**

**Semantic Compression**

**Language Policy**

**Report Composer**

e a fronteira final da IA.

Será o documento que explica tecnicamente como o MGH sai de:

**“a pessoa respondeu isso”**

para:

**“o sistema está autorizado a recomendar isto — e somente isto.”**

Esse documento não precisa ser totalmente implementado na Fase A, mas é crucial para o desenvolvedor não construir hoje algo que torne o Motor de Governo™ impossível amanhã.

Perfeito. Agora entramos no documento que descreve o **Motor de Governo™ propriamente dito**.

# **ETAPA 2.29I — INTERPRETATION ENGINE SPECIFICATION**

## **Documento 09 — Especificação do Motor de Interpretação**

**Versão:** MGH-INTERP-SPEC-0.1
**Compatibilidade:** MGH-MASTER-P1.0-RC1
**Evidence Dictionary:** EVID-0.2
**UIG Library:** UIG-LIB-0.2
**Synthesis Library:** SYN-0.2
**Interpretation Engine:** INTERP-0.2
**Claim Dictionary:** CLAIM-DICT-0.1
**Action Registry:** ACTION-REG-0.1
**Language Policy:** LANG-POL-0.1
**Report Composer:** REPORT-COMP-0.1

A regra-mãe deste documento é:

**O teste mede. O Motor interpreta. O gestor decide.**

E tecnicamente:

**Nenhuma interpretação pode existir sem uma cadeia rastreável de evidência, regra, claim e ação autorizada.**

# **1. O que o Motor de Governo™ é**

O Motor não é um chatbot analisando personalidade.

Ele é um sistema de regras versionadas que recebe resultados produzidos pelo Score Engine e determina:

**quais evidências existem;**

**quais interpretações são autorizadas;**

**quais precisam ser bloqueadas;**

**quais combinações produzem um significado novo;**

**quais claims podem ser emitidos;**

**quais ações gerenciais podem ser recomendadas;**

**com qual nível de força isso pode ser escrito.**

A IA, quando existir, trabalhará somente no final dessa cadeia.

# **2. Pipeline oficial**

A arquitetura integrada fica:

RAW RESPONSES

↓

SCORE ENGINE

↓

DERIVED SCORES

↓

EVIDENCE ENGINE

↓

EVIDENCE RESULTS

↓

LINEAGE CHECK

↓

UIG ENGINE

↓

BLOCK ENGINE

↓

CONTEXTUAL PRECEDENCE

↓

COLLISION RESOLVER

↓

SYNTHESIS ENGINE

↓

CLAIM ENGINE

↓

ACTION ENGINE

↓

SEMANTIC COMPRESSION

↓

LANGUAGE POLICY

↓

REPORT COMPOSER

Essa ordem é importante.

Não permitiremos atalhos como:

Score → IA → perfil.

# **3. Responsabilidade de cada camada**

| **Camada** | **Pergunta respondida** |
| --- | --- |
| Score | Qual valor matemático foi produzido? |
| Evidence | O que esse valor autoriza considerar como evidência? |
| UIG | Qual hipótese gerencial relativamente pura pode decorrer dessa evidência? |
| Block | Há motivo para impedir essa interpretação? |
| Precedence | Qual evidência deve prevalecer quando existe diferença contextual? |
| Collision | As regras se complementam, tensionam ou contradizem? |
| Synthesis | A combinação produz significado novo útil? |
| Claim | O que o sistema está autorizado a afirmar? |
| Action | O que o gestor pode fazer? |
| Compression | O que é redundante e pode ser fundido? |
| Language | Com que força isso pode ser escrito? |
| Composer | O que efetivamente entra no relatório e em qual ordem? |

# **4. Primeira fronteira obrigatória**

As UIGs:

**não consultam respostas RAW diretamente.**

Fluxo obrigatório:

Response → Score → Evidence → UIG.

Isso impede que uma regra de interpretação descubra algo que o Score/Evidence Engine nunca autorizou.

# **5. Evidence Dictionary™**

O Evidence Dictionary é o catálogo oficial das evidências que o Motor conhece.

Regra:

**Se uma evidência não existe no Evidence Dictionary, o Motor não está autorizado a utilizá-la.**

Isso evita inferências como:

“resiliência”

“inteligência emocional”

“potencial”

aparecerem apenas porque parecem semanticamente relacionadas às respostas.

# **6. Estrutura de uma Evidence Definition**

A definição deverá conter conceitualmente:

evidence\_code

version

status

lens

construct

facet

context

source\_metric\_codes[]

source\_item\_codes[]

independence\_group

reportable

interpretive\_use

maximum\_evidence\_level

instrument\_compatibility[]

notes

Uma Evidence Definition é:

regra metodológica.

Uma Evidence Result é:

instância produzida para um assessment.

# **7. Estados de evidência**

Continuamos com:

| **Estado** | **Função** |
| --- | --- |
| UNCLASSIFIED | ainda não classificada |
| WEAK\_SIGNAL | sinal limitado |
| RELEVANT | evidência relevante |
| CONSISTENT | padrão suficientemente consistente segundo regra vigente |
| CONTEXTUAL | evidência específica de contexto |
| CONTRADICTORY | conflito relevante |
| INSUFFICIENT | insuficiente para uso interpretativo |

Os thresholds matemáticos definitivos ainda **não estão congelados**.

Esse ponto permanecerá pilot-dependent.

# **8. Evidence Level ≠ Evidence State**

Precisamos separar duas coisas.

**Evidence State** descreve a condição da evidência.

**Evidence Level** controla a força interpretativa autorizada.

No Motor, teremos:

E1 — SIGNAL

E2 — CONVERGENCE

E3 — ROBUST CONVERGENCE

No MGH-P1.0:

# **E3 não é permitido externamente.**

# **9. Evidence Ceiling™**

Cada regra pode possuir:

max\_evidence\_level.

Exemplo:

DEC-004 CONSULTATIVE INPUT

no P1.0:

máximo E1.

Mesmo que algum algoritmo interno tente promovê-lo:

o Ceiling vence.

# **10. External Reporting Ceiling**

Além do teto específico de cada regra:

MGH-P1.0.external\_reporting\_max = E2

Portanto:

mesmo uma evidência experimental que internamente fosse classificada acima disso não poderá produzir linguagem externa E3 no P1.0.

# **11. Lineage™**

Toda evidência precisa responder:

**de onde veio?**

Exemplo:

PC.D.AUTONOMY

precisa manter ligação com:

PC-007

PC-027

e respectivas respostas/score.

Sem lineage:

Evidence Result inválida para interpretação oficial.

# **12. Independence Group**

Esse é um dos mecanismos mais importantes do Motor.

Duas evidências podem ter nomes diferentes, mas compartilhar:

os mesmos itens.

Nesse caso:

não são independentes.

Exemplo:

PC.D

e:

PC.D.AUTONOMY

podem dividir parte da origem.

Logo:

duas métricas ≠ duas fontes independentes.

# **13. Derived Evidence não aumenta força sozinha**

Se temos:

DR.PERSISTENCE

e depois calculamos:

DR.CONFIG.HIGH\_PERSISTENCE\_LOW\_EXTERNALIZATION

a segunda não vira automaticamente uma segunda fonte independente.

Ela é:

derivada.

Portanto não serve sozinha para elevar E1 → E2.

# **14. Evidence sources principais do P1.0**

O Motor trabalhará inicialmente com famílias como:

### **PRC**

PRC.V.FORCED

PRC.A.FORCED

PRC.C.FORCED

PRC.V.INDEPENDENT

PRC.A.INDEPENDENT

PRC.C.INDEPENDENT

e evidências derivadas de convergência, concentração, multimodalidade ou divergência quando formalmente autorizadas.

### **PC**

D/I/S/C principais e as facetas autorizadas.

### **DR**

DR.SPEED

DR.IMPACT

DR.PERSISTENCE

DR.EXTERNALIZATION.

# **15. Duas evidências contextuais adicionais**

Mantemos:

PC.DECISION.CONSULTATIVE\_INPUT

e:

PC.DECISION.PROGRESSIVE\_COMMITMENT.

Ambas:

interpretive\_use = true

mas:

max\_evidence\_level = E1

no P1.0.

# **16. Historical Reference**

As referências:

HR.CHOLERIC

HR.SANGUINE

HR.PHLEGMATIC

HR.MELANCHOLIC

continuam com:

interpretive\_use = false.

O Motor de P1.0 não pode emitir:

“temperamento colérico”.

# **17. UIG Library™**

UIG significa:

**Unidade Interpretativa de Governo.**

Ela é a menor interpretação relativamente pura do Motor.

Regra conceitual:

**UIG interpreta uma unidade.**

**Synthesis interpreta uma combinação.**

**Modifier altera a aplicação.**

# **18. Arquitetura congelada da UIG Library**

Após nossa auditoria:

# **32 UIGs**

sendo:

# **25 PRIMARY**

e:

# **7 MODULATORS**

Isso substitui oficialmente a estrutura antiga de 40 UIGs.

# **19. UIGs primárias**

A estrutura oficial fica:

| **Domínio** | **UIGs primárias** |
| --- | --- |
| Comunicação | 3 |
| Delegação | 4 |
| Accountability | 3 |
| Feedback | 3 |
| Decisão | 5 |
| Pressão | 4 |
| Conflito | 3 |
| **Total** | **25** |

# **20. Comunicação**

As três UIGs primárias:

COM-001 — Structure Visual

COM-002 — Verbal Elaboration

COM-003 — Concrete Application

As antigas combinações:

Visual × Criterion;

Visual × Objectivity;

Verbal × Interaction

deixaram de ser UIGs puras e passaram a:

Synthesis Candidates.

# **21. Delegação**

Primárias:

DEL-001 — Autonomy

DEL-002 — Criteria

DEL-003 — Predictability / Transition Clarity

DEL-004 — Purpose / Stakeholders

Combinações como:

Autonomia × Critério

pertencem à camada de síntese.

# **22. Accountability**

Primárias:

ACC-001 — Cadence

ACC-002 — Objectivity

ACC-003 — Indicators

E:

ACC-004

ACC-005

passam a atuar como:

moduladores.

# **23. Feedback**

Primárias:

FDB-001 — Clear / Directed Correction

FDB-002 — Relational Preservation

FDB-003 — Evidence / Criterion

Enquanto:

FDB-004

e:

FDB-005

são moduladores.

# **24. Decisão**

Cinco UIGs:

DEC-001 — Advance with Incomplete Information

DEC-002 — Analysis by Criteria / Consequences

DEC-003 — Caution / Uncertainty Reduction

DEC-004 — Consultative Input

DEC-005 — Progressive Commitment

DEC-004 e DEC-005 mantêm Ceiling E1.

# **25. Pressão**

Quatro UIGs:

PRS-001 — Reaction Speed

PRS-002 — Functional Impact

PRS-003 — Persistence

PRS-004 — Externalization

Sem:

resilience;

emotional stability;

pressure performance score.

# **26. Conflito**

Três primárias:

CON-001 — Explicit Disagreement

CON-002 — Relational Preservation

CON-003 — Facts / Criteria / Responsibility

Enquanto:

CON-004, 005 e 006:

modulam aplicação.

# **27. Os sete Modulators**

| **Código** | **Função** |
| --- | --- |
| ACC-004 | espaçamento de checkpoints/autonomia |
| ACC-005 | baixa externalização no acompanhamento |
| FDB-004 | tempo para formular resposta |
| FDB-005 | retorno posterior |
| CON-004 | timing da reação em conflito |
| CON-005 | acompanhamento pós-conflito |
| CON-006 | necessidade de verificar posição explicitamente |

Modifier:

não deve criar sozinho uma conclusão central.

# **28. Semantic Ownership™**

Formalizamos o:

# **PRINCÍPIO DE PROPRIEDADE SEMÂNTICA**

Cada evidência possui um domínio descritivo principal.

Exemplo:

DR.EXTERNALIZATION

é descrito principalmente por:

PRS-004.

ACC-005 e CON-006:

utilizam a mesma evidência apenas para modular aplicação.

Isso evita três capítulos dizendo:

“a pessoa demonstra pouco externamente”.

# **29. Estrutura formal de uma UIG**

Uma UIG precisa possuir campos equivalentes a:

uig\_id

version

status

domain

behavior\_type

required\_evidence[]

strengthening\_evidence[]

weakening\_evidence[]

blocking\_conditions[]

minimum\_evidence\_level

maximum\_evidence\_level

hypothesis

managerial\_meaning

claim\_candidates[]

action\_candidates[]

source\_methodology

instrument\_compatibility[]

behavior\_type:

DESCRIBE

RECOMMEND

SUPPRESS

MODULATE

conforme função.

# **30. Block Rules™**

Existem cinco bloqueios oficiais.

| **Block** | **Função** |
| --- | --- |
| B1 | evidência insuficiente |
| B2 | evidência contraditória |
| B3 | contexto específico prevalece |
| B4 | domínio externo |
| B5 | generalização imprópria |

Essas regras têm autoridade para impedir um output mesmo quando outra regra aparentemente poderia gerar texto.

# **31. B1 — Insufficient Evidence**

Se a evidência necessária não existe:

não gerar.

Não substituir por:

frase genérica.

Esse comportamento já está protegido pelo GOLD-INT-007.

# **32. B2 — Contradictory Evidence**

Quando evidências relevantes entram em conflito lógico:

o Motor pode:

classificar tensão;

reduzir força;

buscar precedência contextual;

ou silenciar.

Não pode simplesmente:

escolher a que parece mais interessante.

# **33. B3 — Context Superior**

Quando existe evidência específica de contexto que contradiz uma tendência geral:

contexto vence.

Essa é uma das características distintivas do MGH.

# **34. B4 — External Domain**

Se a conclusão exigiria algo que o instrumento não mede:

bloqueia.

Exemplos:

competência;

maturidade;

inteligência;

caráter;

saúde mental;

job fit.

# **35. B5 — Improper Generalization**

Impede saltos como:

“escolheu autonomia em duas situações → sempre precisa trabalhar sozinho.”

Mesmo quando a origem da frase parece plausível.

# **36. Contextual Precedence™**

A ordem de precedência fica:

1. evidência contextual específica;
2. faceta diretamente relacionada;
3. dimensão geral;
4. convergência entre lentes;
5. referência histórica.

Com uma regra adicional:

convergência entre lentes nunca atropela contradição contextual forte.

# **37. Collision Resolver™**

O Motor precisa reconhecer quatro tipos de colisão:

| **Tipo** | **Significado** |
| --- | --- |
| C1 | complementar |
| C2 | tensão produtiva |
| C3 | contradição contextual |
| C4 | contradição lógica |

# **38. C1 — Complementar**

Duas evidências podem coexistir e melhorar a orientação.

Exemplo:

autonomia

critério.

Isso pode produzir uma síntese útil.

# **39. C2 — Productive Tension**

Dois movimentos aparentemente opostos podem coexistir.

Exemplo:

disposição para avançar

necessidade de análise.

Não precisamos escolher um.

Podemos produzir uma regra de governo:

informação mínima + deadline.

# **40. C3 — Contextual Contradiction**

Exemplo:

dimensão geral sugere maior confronto;

evidência específica de conflito sugere comportamento mais moderado.

A específica:

prevalece naquele contexto.

# **41. C4 — Logical Contradiction**

Exemplo técnico:

mesma execução registra simultaneamente:

DR.EXTERNALIZATION = HIGH

e:

DR.EXTERNALIZATION = LOW

como estados mutuamente excludentes.

Isso pode indicar:

erro;

inconsistência de regra;

Evidence Engine corrompido.

Resultado:

integrity flag.

# **42. Synthesis Engine™**

Uma Synthesis Rule só existe quando a combinação de evidências produz:

significado gerencial adicional,

e não apenas repetição.

Temos cinco sínteses oficiais no P1.0.

# **43. Synthesis Rules oficiais**

| **ID** | **Síntese** |
| --- | --- |
| SIN-DEL-001 | Autonomia × Critério |
| SIN-DEC-001 | Velocidade decisória × Análise |
| SIN-FDB-001 | Impacto × Baixa Externalização |
| SIN-PRS-001 | Reação rápida × Impacto elevado |
| SIN-PRS-002 | Persistência elevada × Baixa Externalização |

Status:

PILOT.

# **44. Synthesis Candidates**

Continuam como candidatas, não oficiais:

Visual × Criterion;

Visual × Objectivity;

Verbal × Interaction;

Concrete × Structured Transfer;

Objective × Predictable Follow-up;

Pressure-adapted follow-up;

outras colisões de Feedback/Conflito.

Status:

CANDIDATE.

Podem rodar em:

Shadow Mode.

# **45. Evidence Ceiling da síntese**

Regra congelada:

$FE\_{synthesis}\leq weakest(required components)$

Exemplo:

E2 + E1:

síntese máxima E1.

Uma combinação não fica automaticamente mais forte apenas porque juntamos duas coisas.

# **46. Synthesis também respeita lineage**

Se os dois componentes derivam essencialmente dos mesmos itens:

não temos duas fontes independentes.

A síntese pode existir semanticamente.

Mas isso não significa:

promoção de Evidence Level.

# **47. Shadow Mode™**

Uma regra CANDIDATE poderá executar internamente:

execution\_mode = SHADOW.

O sistema registra:

WOULD\_HAVE\_ACTIVATED.

Mas:

official\_output = false.

Isso permite evoluir o Motor com dados sem expor regra não autorizada.

# **48. Claim Engine™**

Depois de UIGs, Blocks e Synthesis, chegamos ao Claim.

Claim significa:

**proposição metodologicamente autorizada.**

Não necessariamente texto final.

Regra:

# **Se não existe Claim no catálogo, o sistema não pode dizer.**

# **49. Claim Dictionary™**

Versão:

CLAIM-DICT-0.1.

P1.0 possui:

# **30 Claims reportáveis**

correspondentes a:

25 famílias primárias interpretáveis

5 sínteses oficiais.

# **50. Distribuição dos Claims**

| **Domínio** | **Claims** |
| --- | --- |
| Comunicação | 3 |
| Delegação | 5 |
| Accountability | 3 |
| Feedback | 4 |
| Decisão | 6 |
| Pressão | 6 |
| Conflito | 3 |
| **Total** | **30** |

# **51. Claim Schema**

****claim\_code

version

status

domain

semantic\_family

claim\_class

source\_rule\_ids[]

required\_evidence\_level

maximum\_external\_level

meaning

allowed\_assertions[]

forbidden\_extensions[]

action\_codes[]

audiences[]

suppression\_rules[]

instrument\_compatibility[]



# **52. Exemplo central de Claim**

CLM-DEL-S01-AUTONOMY-WITH-CRITERIA

Fonte:

SIN-DEL-001.

Significado:

definir resultado, prazo, alçada e critérios essenciais e, quando competência e maturidade permitirem, preservar liberdade de método.

O Claim não afirma:

que a pessoa “merece mais autonomia”.

Competência e maturidade são externas ao MGH.

# **53. Claim de Decisão**

CLM-DEC-S01-MINIMUM-INFO-DEADLINE

Fonte:

SIN-DEC-001.

Significado:

quando disposição para avançar e valorização de análise coexistem, definir informação indispensável e prazo de fechamento pode organizar a decisão.

# **54. Claim de Feedback**

CLM-FDB-S01-IMPACT-LOW-VISIBILITY

Significado autorizado:

impacto declarado pode ser maior do que sua manifestação externa sugere; entendimento precisa ser verificado diretamente.

Não autoriza:

“sofre em silêncio”.

# **55. Claims de Pressão**

As quatro dimensões DR podem gerar claims direcionais como:

Reaction Speed;

Functional Impact;

Persistence;

Visibility.

Mas sempre:

sem valor moral.

Mais rápido não é melhor.

Mais visível não é pior.

Mais persistente não significa fraqueza emocional.

# **56. Forbidden Claim Registry™**

O bloqueio global inclui pelo menos:

| **Código lógico** | **Domínio proibido** |
| --- | --- |
| INTELLIGENCE | inteligência |
| COMPETENCE | competência |
| MATURITY | maturidade |
| CHARACTER | caráter |
| HONESTY | honestidade |
| MENTAL\_HEALTH | saúde mental |
| DIAGNOSIS | diagnóstico |
| JOB\_FIT | adequação automática ao cargo |
| HIRING | decisão de contratação |
| PROMOTION | promoção automática |
| TERMINATION | demissão |
| RESILIENCE | resiliência como traço medido |
| EMOTIONAL\_STABILITY | estabilidade emocional |
| FIXED\_LEARNING\_STYLE | estilo fixo de aprendizagem |
| ABSOLUTE\_PERSONALITY\_IDENTITY | identidade psicológica absoluta |
| MORAL\_VALUE | valor moral |
| LEADERSHIP\_QUALITY | qualidade de liderança |
| COMPATIBILITY\_SCORE | percentual de compatibilidade |

Essa lista pode crescer.

Reduzi-la exigirá desenvolvimento metodológico específico.

# **57. Action Engine™**

Claim responde:

o que podemos dizer.

Action responde:

o que o gestor pode fazer.

Versão:

ACTION-REG-0.1.

Temos:

# **30 ações canônicas.**

# **58. Por que Action é separada de Claim**

Diferentes Claims podem produzir:

a mesma ação gerencial.

Exemplo:

DEFINE\_ESSENTIAL\_CRITERIA

pode ser útil em:

Delegação;

Feedback;

Decisão;

Accountability.

Se cada Claim inventasse sua própria frase:

teríamos enorme redundância.

# **59. Famílias de Action**

As 30 ações cobrem movimentos como:

estrutura visual;

elaboração verbal;

exemplo concreto;

resultado esperado;

critérios;

alçada;

liberdade de método;

prazo;

transição;

marcos;

stakeholders;

propósito;

cadência;

checkpoints;

indicadores;

impedimentos;

feedback estruturado;

respeito relacional;

tempo de resposta;

follow-up;

informação mínima;

deadline decisório;

incerteza crítica;

consulta;

compromisso progressivo;

separar primeira reação de posição final;

prioridade imediata;

nomear divergência;

separar fato/interpretação/decisão.

# **60. Action Constraints™**

Action não é ordem universal.

Exemplo:

PRESERVE\_METHOD\_FREEDOM

precisa respeitar:

competência;

maturidade;

risco;

procedimento obrigatório;

segurança.

O Motor não mede algumas dessas variáveis.

Logo o Constraint precisa permanecer no output.

# **61. Outro exemplo de Constraint**

ALLOW\_RESPONSE\_TIME

não significa:

“deixe a pessoa responder quando quiser.”

Em decisão time-sensitive:

deadline precisa existir.

Logo Action + Context produzem a recomendação correta.

# **62. Observation → Claim → Action → Language**

Essa separação é oficial.

**Observation**

evidência produzida.

**Claim**

o que podemos afirmar.

**Action**

o que pode ser feito.

**Language**

como comunicar.

A IA não pode pular essa cadeia.

# **63. Semantic Compression™**

É possível que dez regras produzam apenas cinco recomendações realmente distintas.

O Motor deve preferir:

qualidade e densidade

a:

volume.

Princípio:

# **INTERPRETIVE COMPRESSION™**

Muitas evidências podem sustentar poucas recomendações excelentes.

# **64. Regra de deduplicação por Action**

Se três Claims gerarem:

ACT-005 DEFINE\_ESSENTIAL\_CRITERIA

o relatório não precisa repetir:

“defina critérios”

três vezes.

O Composer pode:

fundir fontes;

preservar lineage;

renderizar uma vez no contexto mais útil.

# **65. Mas compressão não aumenta Evidence Level**

Três claims originados da mesma evidência não transformam:

E1

em:

E3.

Semantic Compression:

melhora apresentação.

Não:

força psicométrica.

# **66. Language Policy™**

Versão:

LANG-POL-0.1.

Regra:

**A linguagem nunca pode ser mais forte que a evidência.**

# **67. E1 — Signal**

Expressões permitidas:

“As respostas sugerem…”

“Pode ser útil…”

“Há um sinal…”

“Em algumas situações…”

Não usar:

“claramente”

“consistentemente”

“definitivamente”.

# **68. E2 — Convergence**

Pode utilizar:

“As evidências convergem…”

“Apareceu de forma recorrente…”

“Nas situações avaliadas, há uma tendência…”

Ainda não:

“Você é…”

“Sempre…”

# **69. E3**

Arquitetura preparada.

Externamente:

desabilitado P1.0.

# **70. Language Guardrails**

O Language Engine precisa evitar transformar:

comportamento contextual

em:

identidade.

Exemplo proibido:

“Você é visual.”

Autorizável:

“Nas situações avaliadas, recursos visuais apareceram como apoio relevante à organização de informações.”

# **71. Anti-Flattery Rule**

Não escrever:

“Você possui uma incrível capacidade…”

“Seu perfil revela enorme potencial…”

“Você é um líder diferenciado…”

Se isso não foi medido:

não existe.

O relatório precisa ser útil, não elogioso.

# **72. Anti-Dramatization Rule**

Também não:

“Seu perfil apresenta um grave risco…”

por causa de um eixo DR.

Preferir:

orientação operacional contextual.

# **73. Anti-Barnum Rule**

Toda afirmação interpretativa precisa apontar para:

claim\_code

e:

evidence\_lineage.

Sem isso:

não entra.

Assim evitamos textos que serviriam para qualquer pessoa.

# **74. Mandatory Constraints**

Certos Claims/Actions possuirão caveats obrigatórios.

Exemplo Delegação:

autonomia depende também de competência, maturidade e risco.

Mesmo se Language Engine utilizar IA:

caveat não pode desaparecer.

# **75. Language generation modes**

O Report Engine precisa suportar:

DETERMINISTIC

e futuramente:

AI\_ASSISTED.

O produto deve funcionar plenamente em:

DETERMINISTIC.

# **76. AI boundary**

A IA futura poderá receber algo como:

audience

domain

evidence\_level

claim\_codes[]

action\_codes[]

approved\_facts[]

mandatory\_constraints[]

forbidden\_claims[]

tone

language

Ela não recebe automaticamente:

56 respostas RAW.

# **77. IA pode fazer**

Ela poderá:

melhorar fluidez;

eliminar repetição;

adaptar linguagem à audiência;

combinar Claims autorizados;

melhorar coesão textual.

Não pode:

criar uma interpretação nova.

# **78. IA não pode fazer**

Não pode:

alterar score;

inventar Claim;

criar diagnóstico;

elevar Evidence Level;

ignorar Block;

inventar competência;

definir job fit;

remover caveat;

alterar números;

decidir contratação/demissão.

# **79. Generated Output Validation**

Se a IA produzir algo fora das restrições:

rejeitar.

Então usar:

deterministic\_output.

Exemplo:

Evidence E1.

IA escreve:

“Você claramente…”

Resultado:

Language Validation Fail.

# **80. Report Composer™**

O Composer decide:

**o que aparece;**

**o que é fundido;**

**o que é suprimido;**

**qual ordem;**

**qual audiência.**

Ele não cria evidência.

# **81. Prioridade de renderização**

A política inicial:

1. sínteses oficiais;
2. Claims contextuais;
3. Claims primários;
4. modifiers incorporados.

Modifiers normalmente:

não ganham seção própria.

# **82. Synthesis vence repetição**

Se:

DEL-001

DEL-002

SIN-DEL-001

estão ativas,

o relatório pode renderizar principalmente:

Claim de síntese.

As UIGs individuais permanecem:

na auditoria.

# **83. Suppression não apaga interpretação**

Precisamos distinguir:

suppressed\_for\_render = true

de:

rule inexistente.

Tudo continua registrado.

Só não precisa aparecer ao usuário.

# **84. Assinatura de Governo™**

A Assinatura não é:

novo tipo psicológico.

Ela é:

síntese narrativa dos Claims prioritários.

Idealmente:

3–5 mensagens centrais.

# **85. Assinatura não recebe tipologia**

Não teremos:

“Governante Executor Estratégico.”

“Dominante Visual.”

“Líder Analítico de Alta Pressão.”

Essa simplificação poderia destruir tudo que construímos em contextualidade.

# **86. Manual de Governo™**

Será a camada mais aplicada.

Organizado pelos sete contextos:

**Comunicação**

**Delegação**

**Accountability**

**Feedback**

**Decisão**

**Pressão**

**Conflito**

Mas uma seção não precisa aparecer só porque existe no template.

# **87. Silêncio autorizado**

Se determinado domínio possui evidência insuficiente:

não preencher com texto genérico.

Regra:

# **silêncio metodologicamente correto é melhor que interpretação inventada.**

# **88. Densidade do Manual**

Política inicial:

aproximadamente 5–8 recomendações prioritárias.

Não 30 Claims transformados em 30 conselhos.

# **89. Estrutura gerencial de recomendação**

Uma recomendação pode ser apresentada como:

### **GOVERNE ASSIM**

orientação principal.

### **NA PRÁTICA**

ação.

### **CUIDADO PARA NÃO CONFUNDIR**

limite.

Isso integra Claim + Action + Constraint.

# **90. Audience Adaptation**

Inicialmente três públicos possíveis:

| **Audience** | **Objetivo** |
| --- | --- |
| SELF | reflexão e autoconsciência |
| MANAGER | ação gerencial |
| RESEARCH/METHODOLOGY | auditoria técnica |

O mesmo Claim pode possuir formulação diferente.

O significado não muda.

# **91. Self Audience**

Linguagem:

“Suas respostas sugerem…”

“Pode ser útil observar…”

Não:

“Seu gestor deve…”

# **92. Manager Audience**

Linguagem mais operacional:

“Ao delegar…”

“Defina…”

“Verifique…”

Mas ainda contextualizada.

# **93. Research Audience**

Pode visualizar:

Evidence Code;

UIG;

Block;

Synthesis;

Claim;

Action;

Lineage;

Version;

Suppression;

Evidence Level.

Aqui a prioridade é:

auditabilidade.

# **94. Report lineage**

Uma frase futura precisa poder ser rastreada assim:

REPORT SENTENCE

↓

ACTION CODE

↓

CLAIM CODE

↓

SYNTHESIS / UIG

↓

EVIDENCE RESULT

↓

DERIVED SCORE

↓

SCORING RUN

↓

ITEM / OPTION

↓

RAW RESPONSE

Essa é a:

# **TRACEABILITY CHAIN™**

# **95. Caminho reverso**

Também precisamos conseguir partir do RAW:

“Por que essa resposta contribuiu para esta recomendação?”

e seguir toda a cadeia.

Isso será especialmente útil em:

pesquisa;

debug;

auditoria;

evolução metodológica.

# **96. Interpretation Run**

Uma execução futura deve registrar:

interpretation\_run\_id

assessment\_id

evidence\_run\_id

interpretation\_version

uig\_library\_version

synthesis\_version

claim\_dictionary\_version

action\_registry\_version

language\_policy\_version

status

mode

started\_at

completed\_at



# **97. Runs são imutáveis**

Nova versão interpretativa:

novo Run.

Não sobrescrever a interpretação histórica.

Isso permite perguntar no futuro:

“O que o Motor P0.2 disse?”

versus:

“O que o Motor 2.5 diria para o mesmo RAW?”

# **98. Research Internal Mode**

Na Onda 0:

participant\_report\_enabled = false.

Mas poderemos executar:

mode = RESEARCH\_INTERNAL.

Objetivo:

estudar comportamento das regras.

Não entregar como resultado psicológico ao participante.

# **99. Candidate Shadow Mode**

Uma interpretação candidata pode ser registrada com:

mode = SHADOW.

Ela não alimenta:

output oficial.

Isso permite pesquisa segura.

# **100. Interpretation Engine não faz decisão trabalhista**

Mesmo futuramente, outputs como:

HIRE

FIRE

PROMOTE

não devem existir como actions do MGH Individual.

O produto pode apoiar:

gestão da relação e do trabalho.

Não substituir:

decisão humana.

# **101. Um exemplo completo**

Imagine:

Evidence:

PC.D.AUTONOMY = CONSISTENT

PC.C.CRITERION = RELEVANT

Lineage Check:

fontes suficientes segundo regra vigente.

UIG Engine:

DEL-001 ACTIVE

DEL-002 ACTIVE.

Block Engine:

sem bloqueio.

Collision:

complementar.

Synthesis:

SIN-DEL-001 ACTIVE.

Evidence final da síntese:

limitada pelo componente mais fraco.

Claim:

CLM-DEL-S01-AUTONOMY-WITH-CRITERIA.

Actions:

resultado;

critério;

alçada;

liberdade de método;

prazo.

Constraint:

competência/maturidade/risco precisam ser avaliados externamente.

Language E1, por exemplo:

“Pode ser útil definir claramente resultado, prazo, alçada e critérios essenciais e, quando competência e maturidade permitirem, preservar espaço para escolha do método de execução.”

Essa frase possui:

origem completa.

# **102. Exemplo de conflito contextual**

PC.D geral:

relevante.

Contexto específico de conflito:

baixo sinal de confronto explícito.

A regra geral candidata diz:

“abordagem direta”.

Mas:

Contextual Precedence ativa B3.

Resultado:

não generalizar D para conflito.

Isso é exatamente o tipo de erro que queremos evitar em instrumentos comportamentais simplificados.

# **103. Exemplo DR**

Impact:

elevado.

Externalization:

baixa.

Síntese autorizada:

SIN-FDB-001.

Claim:

comportamento externo pode não demonstrar proporcionalmente o impacto declarado.

Action:

verificar entendimento/impedimentos diretamente.

Proibido:

“esconde sentimentos”.

# **104. Exemplo de Decision Governance™**

Forward Movement relevante.

Analysis relevante.

Em vez de produzir:

“decida rápido”

“analise mais”,

ativamos:

SIN-DEC-001.

Action:

informação indispensável + prazo de decisão.

Esse é o espírito do Motor.

# **105. Princípio de Governo em Pressão™**

No DR:

governar o evento antes de interpretar a pessoa.

Por isso Pressão deve priorizar ações como:

prioridade;

primeiro movimento;

timing;

follow-up.

Não:

rótulos emocionais.

# **106. Princípio de Resolução Explícita™**

Em conflito:

conflito não está resolvido apenas porque a conversa acabou.

A resolução gerencial depende de:

posição;

decisão;

responsabilidade;

próximo passo

suficientemente claros.

O Motor pode recomendar isso quando evidências autorizarem.

# **107. Princípio de Governo da Decisão™**

Qualidade de governo não é:

sempre decidir rápido

ou:

sempre analisar muito.

É saber:

quais decisões exigem velocidade;

quais exigem análise;

quais informações são indispensáveis;

quem possui alçada.

Isso orienta o domínio Decision.

# **108. Interpretation Test Suite**

O Motor deverá preservar os Golden Cases:

GOLD-INT-001 a 008

e:

GOLD-SYN-001/002

além de testes específicos para:

Evidence Ceiling;

Contextual Precedence;

Forbidden Claims;

Language Strength;

Action Constraints;

Semantic Compression.

Esses testes não dependem dos thresholds empíricos ainda abertos porque podem usar:

evidências sintéticas já classificadas.

# **109. O que fica fora da implementação Fase A**

Na Fase A mínima, não é obrigatório construir integralmente:

Evidence Engine;

UIG Engine;

Claim Engine;

Language Engine;

Report Composer.

Mas o desenvolvedor precisa:

preservar as interfaces arquitetônicas e o modelo de dados necessário para recebê-los.

Não queremos refazer o sistema inteiro na Fase C.

# **110. Ordem de implementação futura**

Depois da Fase A:

### **Fase B**

Research & Scoring aprofundados.

### **Fase C**

Motor de Governo completo:

Evidence;

UIG;

Blocks;

Precedence;

Collision;

Synthesis;

Claims;

Actions.

### **Fase D**

MGH Individual comercial:

Language;

Reports;

Assinatura;

Manual.

### **Fase E**

Mapa de Relação;

Sala de Comando Humana;

Organização.

# **111. Contrato interno entre módulos**

Score Engine entrega:

métricas.

Evidence Engine entrega:

evidências classificadas.

Interpretation Engine entrega:

UIG/SIN/Blocks.

Claim Engine entrega:

Claims autorizados.

Action Engine entrega:

ações.

Language Engine entrega:

texto.

Nenhum módulo deve absorver silenciosamente a função do seguinte.

# **112. Anti-pattern crítico**

Não aceitar uma função como:

analyzeUserProfile(responses)

fazendo:

score + interpretação + IA + relatório

em uma caixa preta.

O MGH precisa permanecer:

decomponível.

# **113. Outro anti-pattern**

Não salvar somente:

relatório final.

Se texto final não puder ser rastreado até Evidence e Claim:

arquitetura falhou.

# **114. Outro anti-pattern**

Não criar uma coleção de:

if score > X then text Y

espalhada pelo código.

As regras precisam ser:

versionadas;

registradas;

auditáveis.

# **115. Business Rule Registry**

O desenvolvedor poderá implementar as regras por:

configuração versionada;

rule engine simples;

código fortemente tipado;

ou combinação.

A tecnologia não está congelada.

O comportamento está.

# **116. Evitar rule engine exagerado**

Também não precisamos comprar uma plataforma gigantesca de BPM apenas porque temos regras.

Para o estágio atual:

clareza + versionamento + testes

são mais importantes que uma ferramenta sofisticada.

# **117. Interpretation Engine deve funcionar sem IA**

Esse requisito continua absoluto.

Se amanhã nenhum provedor de LLM estiver disponível:

Score;

Evidence;

UIG;

Claim;

Action;

deterministic report

continuam funcionando.

# **118. Definition of Done — Motor futuro**

O Interpretation Engine será considerado corretamente implementado quando:

* Evidence Dictionary estiver versionado;
* lineage íntegra;
* independence groups funcionando;
* ceilings funcionando;
* 32 UIGs registradas;
* modifiers separados;
* blocks funcionando;
* contextual precedence funcionando;
* collisions registradas;
* 5 synthesis rules funcionando;
* Claim Dictionary fechado;
* Forbidden Claim Registry aplicado;
* Action Registry funcionando;
* constraints aplicados;
* semantic compression funcionando;
* Language Policy aplicada;
* fallback determinístico funcionando;
* Golden Interpretation Cases passando;
* Report sentence → RAW rastreável;
* Runs imutáveis e versionados.

# **DOCUMENTO 09 — CONCLUÍDO**

Agora temos:

**01 — Executive Product Brief
02 — Functional Specification
03 — Architecture & Data Model
04 — Instrument Specification
05 — Scoring Specification
06 — O0 Research & Pilot Protocol
07 — Golden Cases & Acceptance Tests
08 — Security, Privacy & Nonfunctional Requirements
09 — Interpretation Engine Specification**

Neste ponto, o desenvolvedor já consegue enxergar tanto **o que precisa construir agora** quanto **para onde a arquitetura precisa evoluir**, sem confundir as duas coisas.

O próximo documento será extremamente importante para evitar um orçamento de “sistema inteiro” quando precisamos contratar primeiro apenas o necessário:

# **ETAPA 2.29J — TECHNICAL ROADMAP & SCOPE CONTROL**

No Documento 10 vamos transformar tudo em **Fases A, B, C, D e E**, definindo para cada uma:

**o que entra;**

**o que fica de fora;**

**dependências;**

**critério de início;**

**Definition of Done;**

**entregáveis;**

**o que deve ser orçado agora;**

**o que deve receber apenas estimativa arquitetural;**

e principalmente:

# **como impedir scope creep durante a primeira contratação.**

Esse será provavelmente o documento que você colocará ao lado do orçamento do desenvolvedor para verificar se ele realmente está precificando o que pedimos — nem menos, nem muito mais.

Perfeito. Agora vamos transformar toda a arquitetura em um plano de execução que também funcione como **barreira contra orçamento inflado, subdimensionamento e scope creep**.

# **ETAPA 2.29J — TECHNICAL ROADMAP & SCOPE CONTROL**

## **Documento 10 — Roadmap Técnico e Controle de Escopo**

**Versão:** MGH-ROADMAP-0.1
**Compatibilidade:** MGH-MASTER-P1.0-RC1
**Objetivo:** estabelecer a sequência oficial de desenvolvimento do MGH™, os limites de cada contratação e os critérios para passagem entre fases.

A regra-mãe deste documento será:

**Preparar a arquitetura para o futuro não significa construir o futuro inteiro agora.**

E, para a primeira contratação:

**Neste momento não precisamos de escala. Precisamos de integridade.**

# **1. O princípio de desenvolvimento do MGH™**

O MGH não será desenvolvido como um único projeto gigantesco até “ficar pronto”.

Será construído em cinco fases progressivas:

| **Fase** | **Nome** | **Objetivo central** |
| --- | --- | --- |
| **A** | Pilot Core | conseguir executar a Onda 0 com integridade |
| **B** | Research & Scoring | transformar dados das ondas em capacidade de pesquisa e evolução |
| **C** | Motor de Governo™ | implementar a interpretação versionada |
| **D** | MGH Individual | transformar o Motor em produto individual utilizável |
| **E** | Ecossistema MGH | relação, equipe e organização |

A primeira proposta comercial do desenvolvedor deverá detalhar:

# **FASE A**

As demais devem receber, no máximo, visão arquitetural e estimativa macro.

# **2. Por que não contratar tudo agora?**

Porque ainda teremos:

Onda 0;

Onda 1;

Onda 2;

ajustes de itens;

ajustes de scoring;

calibração de evidências;

revisão metodológica.

Construir hoje todo o produto comercial final significaria correr o risco de:

pagar para sofisticar interfaces em cima de regras que ainda passarão por pesquisa.

Portanto:

**o software evolui junto com a maturidade metodológica.**

# **3. FASE A — PILOT CORE**

Esta é a contratação inicial.

Objetivo:

permitir que o MGH-P1.0 seja aplicado na Onda 0 de maneira segura, rastreável e cientificamente aproveitável.

Não estamos contratando ainda:

“o MGH comercial”.

Estamos contratando:

**a infraestrutura de pesquisa que permitirá ao MGH se tornar um produto confiável.**

# **4. Escopo obrigatório da Fase A**

A Fase A contém oito macroentregas:

| **Bloco** | **Entrega** |
| --- | --- |
| A1 | Participant App |
| A2 | Instrument Registry P1.0 |
| A3 | Response/Event Engine |
| A4 | Admin & Research O0 |
| A5 | Score Engine P1.0 |
| A6 | Data/Version/Audit |
| A7 | Security & Infrastructure |
| A8 | Golden Tests & Deployment |

Esses blocos deverão aparecer separadamente no orçamento.

# **5. A1 — Participant App**

Inclui:

acesso seguro;

consentimento;

contexto profissional;

instruções;

48 cenários;

randomizações autorizadas;

autosave;

retomada;

navegação;

SELF;

feedback;

submit;

confirmação.

A experiência precisa funcionar muito bem:

em celular.

Não requer ainda:

identidade visual comercial sofisticada;

animações premium;

gamificação.

# **6. A2 — Instrument Registry**

Inclui suporte estruturado a:

instrument version;

cenários;

itens;

text versions;

options;

presentation rules;

randomization;

SELF;

Relation Groups;

Release Manifest.

O P1.0 publicado precisa ser:

imutável.

# **7. A3 — Response & Event Engine**

Inclui:

Response;

Response Events;

first response;

final response;

revision count;

Option Presentation;

resume;

timing;

navegação;

submit transaction.

Esse bloco é crítico.

Se houver necessidade de corte de orçamento:

**não cortar rastreabilidade do RAW.**

# **8. A4 — Admin & Research O0**

Inclui:

participantes;

assessment generation;

dashboard operacional;

cognitive interviews;

item reviews;

flags;

occurrences;

item survival;

hypotheses;

change log;

Gate Review;

exports.

Esse módulo diferencia:

“questionário online”

de:

**plataforma de pesquisa.**

# **9. A5 — Score Engine P1.0**

Inclui integralmente:

PC;

PRC Forced;

PRC Independent;

DR;

facets autorizadas;

ranking;

empates;

gaps;

entropia;

lineage;

versioning;

Golden Cases.

Não inclui:

interpretação comercial.

# **10. A6 — Data, Version & Audit**

Inclui:

Identity Vault;

Assessment;

Release Manifest;

Runs;

versionamento;

Audit Log;

RAW/CLEAN/DERIVED separation;

migrations;

immutability rules.

Isso precisa nascer na Fase A.

# **11. A7 — Security & Infrastructure**

Inclui pelo menos:

HTTPS;

auth interna;

RBAC;

proteção de tokens;

secrets;

DEV/STAGING/PILOT;

backup;

restore test;

logs;

monitoramento básico;

proteção de endpoints;

deployment control.

Não é:

“extra de segurança”.

É parte do MVP.

# **12. A8 — Golden Tests & Deployment**

Inclui:

instrument validator;

score Golden Cases;

flow tests;

security blockers;

CI;

staging;

release;

homologação;

documentação operacional mínima.

A Fase A termina somente quando:

MGH-O0-001 puder ser autorizado.

# **13. O que NÃO entra na Fase A**

Quero deixar isso explícito para o orçamento.

| **Fora do escopo inicial** | **Motivo** |
| --- | --- |
| Relatório comercial automático | ainda não necessário para O0 |
| Assinatura de Governo externa | pesquisa primeiro |
| Manual de Governo externo | pesquisa primeiro |
| IA generativa | desnecessária |
| Mapa de Relação™ | fase futura |
| Sala de Comando Humana™ | fase futura |
| Dashboard empresarial | fase futura |
| Matching pessoa/cargo | não autorizado |
| Compatibilidade percentual | não autorizado |
| Contratação/demissão automatizada | proibido |
| Aplicativo iOS/Android nativo | desnecessário |
| Pagamentos | fora da pesquisa |
| Assinaturas comerciais | futuro |
| CRM | não é núcleo do produto |
| Gamificação | não necessária |
| MGH 360™ | futuro |

Se aparecerem no primeiro orçamento como obrigatórios:

perguntar por quê.

# **14. Definition of Done da Fase A**

A Fase A estará concluída quando:

MGH-P1.0 estiver publicado e validado pelo Instrument Validator;

Participant App estiver homologado;

48 cenários e 56 respostas funcionarem corretamente;

RAW e Response Events forem preservados;

randomização estiver correta;

resume funcionar;

submit for idempotente;

Score Engine passar todos os Golden Cases;

Admin O0 estiver funcional;

export estiver testado;

RBAC estiver funcional;

backup e restore tiverem sido testados;

Release Manifest estiver congelado;

nenhum blocker crítico estiver aberto.

Resultado:

# **Onda 0 operacionalmente autorizada.**

# **15. O que NÃO significa concluir a Fase A**

Não significa:

MGH validado.

Não significa:

produto comercial pronto.

Não significa:

relatório final pronto.

Significa:

**temos infraestrutura confiável para começar a aprender com dados reais.**

# **16. FASE B — RESEARCH & SCORING**

A Fase B começa quando:

a Onda 0 tiver produzido dados suficientes para justificar evolução.

Objetivo:

ampliar capacidade de análise, versionamento e pesquisa para O1/O2.

# **17. Escopo provável da Fase B**

Entram coisas como:

analytics de itens;

exports avançados;

comparação entre waves;

histórico de versões;

facets analytics;

Relation Group analysis;

quality flags;

dashboards metodológicos;

automatização de hipóteses simples;

mais ferramentas de pesquisa;

suporte a novas versões de instrumentos;

reprocessing controls.

Aqui começa a ser especialmente importante trabalhar com:

dados reais do piloto.

# **18. Fase B não é Motor de Governo ainda**

Podemos executar algumas interpretações:

em Shadow Mode.

Mas o objetivo principal continua sendo:

**melhorar o instrumento e compreender os dados.**

# **19. Gate A → B**

A Fase B deve começar após:

O0 completada ou suficientemente avançada;

principais problemas técnicos corrigidos;

Item Survival inicial realizado;

Change Log consolidado;

decisão sobre P1.1/P2.0;

prioridades de pesquisa definidas.

Não precisamos contratar B automaticamente no mesmo contrato da A.

# **20. FASE C — MOTOR DE GOVERNO™**

Aqui implementamos o cérebro interpretativo completo.

Entram:

Evidence Engine;

Evidence Dictionary;

Lineage;

Independence Groups;

Evidence Ceiling;

32 UIGs;

Block Engine;

Contextual Precedence;

Collision Resolver;

Synthesis Engine;

Claim Engine;

Action Engine;

Semantic Compression;

Interpretation Runs;

Shadow Mode.

# **21. A Fase C só deve ganhar força após dados reais**

Porque ainda precisamos aprender:

thresholds;

comportamento das facetas;

relações entre fontes;

limites de evidência.

A arquitetura já está desenhada.

Mas:

**algumas parametrizações precisam ser alimentadas pelo piloto.**

# **22. O que é importante construir antes na Fase C**

A prioridade não será:

deixar o relatório bonito.

Será:

conseguir demonstrar matematicamente e metodologicamente por que cada Claim apareceu.

Primeiro:

auditabilidade.

Depois:

estética.

# **23. Definition of Done da Fase C**

Em alto nível:

cada Evidence Result possui lineage;

UIGs são versionadas;

Blocks funcionam;

precedência funciona;

colisões são registradas;

cinco sínteses oficiais funcionam;

30 Claims são fechados;

Forbidden Claim Registry funciona;

30 Actions são mapeadas;

e cada Claim pode ser rastreado até RAW.

Ainda poderemos continuar com:

output interno.

# **24. FASE D — MGH INDIVIDUAL**

É aqui que começamos a transformar o sistema em produto comercial individual.

Entram:

Language Engine;

120 templates-base ou arquitetura equivalente;

Report Composer;

Assinatura de Governo™;

Manual de Governo™;

versão SELF;

versão MANAGER;

PDF/relatório digital;

experiência de leitura;

plano de aplicação;

admin comercial;

possíveis fluxos de pagamento/licenciamento, se fizer sentido.

# **25. A Fase D pode utilizar IA**

Mas apenas segundo nossa arquitetura:

Claims + Actions + Constraints → IA de linguagem.

Não:

respostas RAW → IA → análise.

E deve existir:

deterministic fallback.

# **26. Gate C → D**

Antes de começar relatório comercial, precisamos ter confiança razoável em:

Evidence Rules;

Claims;

Actions;

Block Rules;

limites;

Golden Interpretation Cases.

Não faz sentido polir um relatório cuja lógica interpretativa ainda está mudando diariamente.

# **27. FASE E — ECOSSISTEMA MGH™**

Depois do Individual estabilizado:

# **Mapa de Relação™**

Comparação estruturada entre duas pessoas.

Não:

“compatibilidade 87%”.

Mas:

diferenças;

pontos de ajuste;

comunicação;

delegação;

conflito;

governo da relação.

# **28. Sala de Comando Humana™**

Camada de equipe.

Pode permitir:

visão agregada;

distribuições;

riscos de comunicação;

rituais;

tensões;

necessidades de governo.

Mas deve respeitar:

limitações ipsativas e psicométricas.

Não basta somar D/I/S/C de todo mundo indiscriminadamente.

# **29. Organização**

Futuramente:

estrutura;

lideranças;

equipes;

histórico;

reavaliações;

Mapa de Governo Humano ao longo do tempo.

Possivelmente integrado à:

Sala de Comando da M2M.

# **30. MGH 360™**

Permanece futuro.

Seria camada de observadores:

autoavaliação

versus:

percepções externas.

Mas precisa de:

novo desenho metodológico.

Não é apenas:

mandar o mesmo questionário para colegas.

# **31. Roadmap resumido**

| **Fase** | **Construção** | **Dependência metodológica** | **Contratar agora?** |
| --- | --- | --- | --- |
| A | Pilot Core | especificação atual | **SIM** |
| B | Research & Scoring | O0/O1 | depois |
| C | Motor de Governo | dados + regras calibradas | depois |
| D | Produto Individual | Motor suficientemente estável | depois |
| E | Relação/Equipe/Organização | Individual estabilizado | depois |

Isso deve aparecer em toda proposta.

# **32. COMO O DESENVOLVEDOR DEVE ORÇAR**

Quero pedir duas coisas diferentes.

### **FASE A**

**orçamento detalhado.**

Com:

horas;

entregáveis;

prazo;

dependências;

milestones;

custos recorrentes;

suporte;

critérios de aceite.

### **FASES B–E**

Apenas:

**estimativa arquitetural macro, não proposta fechada.**

Porque ainda existem variáveis metodológicas não resolvidas.

# **33. Estrutura recomendada da proposta comercial**

Eu pediria que a proposta viesse com uma tabela semelhante:

| **Bloco** | **Horas** | **Valor** | **Prazo** | **Dependências** |
| --- | --- | --- | --- | --- |
| Participant App |  |  |  |  |
| Admin/Research |  |  |  |  |
| Backend/Data |  |  |  |  |
| Score Engine |  |  |  |  |
| Security/Infra |  |  |  |  |
| Automated Tests |  |  |  |  |
| Deploy |  |  |  |  |
| Documentation |  |  |  |  |

Não aceitar apenas:

“Sistema MGH: R$ XX.XXX”.

Precisamos saber o que está sendo precificado.

# **34. Prazo também deve ser quebrado**

Não quero apenas:

“90 dias”.

Quero milestones.

Exemplo conceitual:

**M1 — arquitetura + banco**

**M2 — Participant App**

**M3 — Admin O0**

**M4 — Score Engine**

**M5 — Security/Tests**

**M6 — Staging/Homologação**

**M7 — Release O0**

As datas concretas virão da proposta.

# **35. Pagamento ligado a milestone**

Contratualmente, pode ser interessante atrelar parte dos pagamentos a:

entregas verificáveis.

Não apenas:

passagem do tempo.

A estrutura jurídica precisa ser revisada separadamente.

Mas como princípio de gestão:

faz sentido.

# **36. O que constitui mudança de escopo?**

Exemplo:

durante Fase A resolvemos adicionar:

pagamento por cartão.

Isso é:

**novo escopo.**

Mas:

Score Engine entrega D=23 quando deveria entregar 24.

Isso é:

**correção de defeito.**

Não Change Request pago.

Essa distinção precisa estar clara.

# **37. Bug não é feature nova**

Importante para contrato.

Se specification diz:

resume preserva Option Presentation

e implementação não preserva,

corrigir:

não é melhoria adicional.

É requisito não atendido.

# **38. Melhoria fora da specification**

Exemplo:

depois queremos:

autenticação por Google.

Se não estava no escopo:

Change Request.

Tudo bem.

Apenas precisa ser tratado como:

novo trabalho.

# **39. Change Request mínimo**

Toda mudança de escopo durante desenvolvimento deverá registrar:

CR ID

descrição;

motivo;

impacto;

horas adicionais;

custo;

prazo;

componentes afetados;

risco metodológico;

aprovação.

Sem:

“já aproveitei e fiz”.

# **40. Methodology Change ≠ Software Change**

Se durante O0 decidirmos:

reescrever PC-035,

isso é primeiro:

mudança metodológica.

Só depois:

mudança de configuração/software.

Precisamos versionar antes.

O programador não deve alterar diretamente porque recebeu uma mensagem no WhatsApp.

# **41. Um canal formal para mudanças**

Podemos trabalhar operacionalmente pelo que for conveniente.

Mas decisão oficial deve terminar registrada em:

Change Log / issue / specification.

Não depender de:

mensagem perdida em conversa.

# **42. Scope Freeze da Fase A**

Antes de começar desenvolvimento:

backlog P0/P1 congelado.

P2 pode possuir flexibilidade.

Se aparecer nova ideia:

colocamos em:

BACKLOG FUTURE.

Não interrompemos desenvolvimento toda semana.

# **43. Prioridades**

### **P0 — BLOCKER**

instrumento;

RAW;

score;

versionamento;

segurança fundamental;

submit;

Golden Cases.

### **P1 — PILOT CRITICAL**

Research Admin;

resume;

events;

occurrences;

exports;

Gate.

### **P2 — ENHANCEMENT**

polimento;

analytics adicionais;

shadow UI;

refinamentos não essenciais.

Se orçamento apertar:

negociamos P2 primeiro.

Não P0.

# **44. Critério para corte de custo**

A pergunta não deve ser:

“qual tela podemos tirar?”

Mas:

“qual funcionalidade não é necessária para preservar integridade da Onda 0?”

Exemplo:

animação:

pode cortar.

Response Event:

não.

# **45. Technical Debt**

Alguma dívida técnica pode ser conscientemente aceita.

Mas precisa ser:

documentada;

justificada;

com impacto conhecido;

e sem ameaçar integridade de dados.

Não aceitar como dívida:

ausência de versionamento.

Isso é dívida estrutural perigosa.

# **46. Build vs Buy**

O desenvolvedor poderá sugerir serviços prontos para:

auth;

e-mail;

hosting;

monitoring;

storage.

Não precisamos construir tudo do zero.

Mas toda escolha precisa responder:

custo;

lock-in;

privacidade;

continuidade;

controle.

# **47. Low-code / no-code**

Pode ser utilizado em partes não críticas se fizer sentido.

Mas eu seria cauteloso em colocar o núcleo de:

RAW;

versionamento;

Score Engine;

lineage

em solução que limite controle técnico.

A decisão deve ser arquitetural, não ideológica.

# **48. Não escolher tecnologia antes do problema**

Nós não vamos entrar na reunião dizendo:

“tem que ser React + Node + PostgreSQL + AWS.”

Podemos ter preferências.

Mas o desenvolvedor deve justificar o stack.

O requisito é:

comportamento + integridade + takeover.

# **49. Critérios para avaliar o stack proposto**

Perguntas importantes:

consegue versionar bem?

tem boa testabilidade?

migrations confiáveis?

bom controle de auth?

ecossistema mantido?

deploy reproduzível?

time futuro consegue contratar profissionais?

custos são proporcionais?

dados são portáveis?

# **50. Requisitos de documentação**

A Fase A precisa terminar com documentação suficiente para outro desenvolvedor entender:

como executar localmente;

variáveis necessárias;

como rodar migrations;

como rodar testes;

como publicar;

como restaurar backup;

como cadastrar instrumento;

como operar Golden Cases.

Não precisamos de um livro de 500 páginas.

Precisamos de:

conhecimento transferível.

# **51. Repository Ownership**

Desde o primeiro commit:

repositório sob controle da empresa.

Desenvolvedor recebe acesso.

Não:

projeto fica seis meses no GitHub pessoal dele e só depois vemos.

# **52. Infra Ownership**

Mesma regra:

cloud;

database;

domain;

e-mail técnico;

secrets principais

sob governança da empresa.

# **53. Custos recorrentes**

Proposta deve separar:

desenvolvimento;

infra mensal;

serviços de terceiros;

monitoramento;

e-mail;

backup;

suporte;

eventual IA futura.

Não misturar:

R$ X do projeto

com:

custos mensais escondidos.

# **54. Suporte pós-release**

Precisamos negociar:

período de estabilização.

Exemplo conceitual:

correções de bugs da Fase A por determinada janela após release.

Prazo concreto:

contrato.

Mas precisa existir.

# **55. Garantia de bug**

Se Golden Case falhar um mês depois por código da entrega:

não deve virar automaticamente:

nova feature cobrada.

Definição contratual jurídica depois.

Mas requisito funcional é claro.

# **56. Code Review**

Idealmente:

Pull Requests.

Mesmo se houver um único desenvolvedor principal, podemos exigir:

processo mínimo de revisão e histórico.

Em projeto crítico maior:

segundo revisor.

# **57. Handoff obrigatório**

Ao fim de milestone ou contrato:

código atualizado;

migrations;

documentação;

credenciais sob posse da empresa;

último deploy;

known issues;

backup status;

test report.

Isso evita dependência.

# **58. Critério de aceite por milestone**

Exemplo:

M2 Participant App não é aceita porque:

“as telas estão bonitas”.

Precisa passar:

E2E;

autosave;

resume;

randomização;

events;

mobile.

Cada milestone deve possuir:

Acceptance Criteria.

# **59. Quem aceita o quê**

### **Tecnologia**

confirma funcionamento técnico.

### **MGH**

confirma aderência metodológica.

### **Segurança/Privacy**

confirma requisitos críticos quando necessário.

Esse modelo evita:

“funcionou para mim”.

# **60. Homologação em Staging**

Nenhuma funcionalidade crítica deve ser testada pela primeira vez:

em produção com participante real.

Fluxo:

DEV

→ STAGING

→ homologação

→ PILOT.

# **61. Dry Run obrigatório**

Antes da O0:

assessment sintético completo.

Idealmente:

mais de um.

Um mobile.

Um desktop.

Um com interrupção.

Um com revisões.

# **62. Pilot Release**

A versão liberada para O0 deverá possuir identificação explícita.

Exemplo conceitual:

APP-PILOT-1.0.0

associada a:

MGH-MASTER-P1.0-RC1.

Se houver hotfix:

1.0.1.

Instrumento não muda necessariamente.

# **63. Hotfix durante O0**

Hotfix técnico pode ocorrer se necessário.

Exemplo:

erro visual.

Mas se alterar:

resposta;

scoring;

item;

randomização;

semântica,

precisamos avaliar impacto na wave.

# **64. Feature Freeze durante O0**

Quando a wave começar:

evitar novas features.

Só:

bug fix;

segurança;

estabilidade;

mudanças metodologicamente aprovadas quando inevitáveis.

Quanto mais estável o ambiente:

melhores os dados.

# **65. Rollback criteria**

Se release produz:

perda de resposta;

scoring errado;

erro de autorização;

corrupção;

submit quebrado,

deve existir capacidade de:

interromper aplicação e restaurar versão estável.

# **66. Desenvolvimento do Motor na primeira contratação**

Minha recomendação permanece:

**não contratar a Fase C completa agora.**

Mas podemos pedir ao desenvolvedor que:

preserve interfaces;

use naming consistente;

evite acoplamento;

e estime macro esforço futuro.

Isso reduz retrabalho.

# **67. O que eu não faria**

Não pediria:

“Já faça o Evidence Engine aproveitando que está mexendo.”

Sem os thresholds suficientemente amadurecidos.

Isso mistura:

antecipação

com:

desperdício.

# **68. O que eu faria**

Criaria no design técnico:

interfaces e boundaries.

Exemplo:

Score Engine produz resultados estruturados de modo que:

Evidence Engine futuro consiga consumir sem migrar todo banco.

Isso é preparação inteligente.

# **69. Developer Roadmap Deliverable**

Na proposta técnica, o desenvolvedor deverá responder:

arquitetura escolhida;

stack;

milestones da Fase A;

horas/custos;

riscos;

dependências;

premissas;

exclusões;

custos recorrentes;

abordagem de testes;

segurança;

como as Fases B–E encaixariam futuramente.

# **70. Um bom orçamento**

Um bom orçamento pode dizer:

“Não consigo estimar Fase C com precisão agora porque os thresholds ainda dependem do piloto, mas a arquitetura proposta permite adicioná-la sem alterar o núcleo.”

Isso é:

maturidade técnica.

# **71. Um orçamento preocupante**

“Faço tudo por R$ X, incluindo IA, aplicativo, relatório, equipe e dashboard.”

sem perguntar praticamente nada.

Pode ser:

subestimação grave.

Ou implementação simplificada incompatível com nossa arquitetura.

# **72. Outro sinal de alerta**

O desenvolvedor quer remover:

versionamento;

events;

audit;

Golden Cases

para:

“entregar mais rápido”.

Precisamos entender que esses são:

núcleo do produto,

não luxo.

# **73. Outro alerta**

“Depois que tiver mais cliente a gente separa identidade.”

Não.

Identity separation nasce agora.

# **74. Outro alerta**

“O score fica numa função no frontend porque é mais simples.”

Não.

Score precisa ser:

server-side;

versionado;

testável;

auditável.

# **75. Outro alerta**

“Mandamos as respostas para a IA e ela monta o resultado.”

Completamente incompatível com o MGH.

# **76. Pergunta decisiva na reunião**

Eu faria esta:

**“Se daqui a dois anos eu alterar completamente meu algoritmo interpretativo, você consegue recalcular um assessment feito hoje sem perder o score e a interpretação originais?”**

A resposta desejável é:

sim, usando RAW imutável + Runs versionados.

Se houver confusão:

precisamos aprofundar arquitetura.

# **77. Segunda pergunta decisiva**

**“Como você garante que uma mudança futura em uma pergunta não altere silenciosamente o histórico de quem respondeu a versão anterior?”**

Resposta deve envolver:

versionamento e imutabilidade.

# **78. Terceira**

**“Como os Golden Cases entram no seu processo de deploy?”**

Se a pessoa disser:

“Testamos manualmente no final”,

não é suficiente para o núcleo crítico.

# **79. Quarta**

**“Quem será dono do repositório, cloud e banco?”**

Resposta:

a empresa/projeto.

# **80. Quinta**

**“Como outra pessoa assumiria o projeto se você não pudesse continuar?”**

Não é desconfiança.

É:

governança empresarial.

Exatamente coerente com o que a M2M ensina.

# **81. Roadmap de dependência**

Nossa sequência fica oficialmente:

MASTER SPEC

↓

FASE A — PILOT CORE

↓

O0

↓

GATE

↓

FASE B — RESEARCH & SCORING

↓

O1 / O2

↓

FASE C — MOTOR DE GOVERNO

↓

TESTES / CALIBRAÇÃO

↓

FASE D — MGH INDIVIDUAL

↓

COMERCIALIZAÇÃO CONTROLADA

↓

FASE E — RELAÇÃO / EQUIPE / ORGANIZAÇÃO

Não precisamos seguir de forma rigidamente linear em todas as microtarefas.

Mas essa é a dependência estratégica.

# **82. Controle de escopo oficial**

A partir deste momento, qualquer nova ideia poderá receber uma destas classificações:

PHASE\_A\_REQUIRED

PHASE\_A\_OPTIONAL

PHASE\_B

PHASE\_C

PHASE\_D

PHASE\_E

BACKLOG\_FUTURE

Isso é simples e muito útil.

# **83. Parking Lot™**

Quero inclusive registrar um conceito:

# **MGH PARKING LOT™**

Toda boa ideia que não pertence à fase atual vai para lá.

Isso impede duas coisas:

perder a ideia

e:

desorganizar o desenvolvimento atual.

# **84. Exemplo**

Ideia:

“Seria legal o gestor receber notificações semanais com recomendações baseadas no perfil.”

Boa ideia?

Talvez.

Fase A?

# **NÃO.**

Status:

BACKLOG\_FUTURE.

Seguimos trabalhando.

# **85. Definition of Roadmap Governance**

Cada nova funcionalidade responde quatro perguntas:

Qual problema resolve?

Qual fase precisa dela?

Qual dependência metodológica existe?

O que acontece se não fizermos agora?

Se resposta for:

“seria legal”,

provavelmente não é P0.

# **86. Nosso objetivo na primeira contratação**

Quero deixar esta frase oficial para você usar:

**“Eu não quero contratar o MGH inteiro agora. Quero contratar a fundação correta do MGH inteiro e construir apenas o que é necessário para executar a Onda 0 com integridade.”**

Isso resume o Documento 10.

# **DOCUMENTO 10 — CONCLUÍDO**

Agora o Developer Handoff possui:

**01 — Executive Product Brief
02 — Functional Specification
03 — Architecture & Data Model
04 — Instrument Specification
05 — Scoring Specification
06 — O0 Research & Pilot Protocol
07 — Golden Cases & Acceptance Tests
08 — Security, Privacy & NFR
09 — Interpretation Engine Specification
10 — Technical Roadmap & Scope Control**

A próxima etapa será:

