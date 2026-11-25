---
name: 03-compact-verification
description: Trecho integral: Compact verification.
source: docs/001/3.3 — ANX-003_ BANK-0.2 CANONICAL ITEM BANK.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1063-1187
---

# Compact verification

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# Compact verification

for rng in ["00\_README!A1:H13","01\_P1\_SCENARIOS!A1:R12","02\_RESPONSE\_SCHEMA!A1:O12","06\_SOURCE\_GAPS!A1:E12"]:

print(rng)

print(wb.inspect({"kind":"table","range":rng,"include":"values,formulas","table\_max\_rows":20,"table\_max\_cols":20}).ndjson)

print()

print(wb.inspect({

"kind":"match",

"search\_term":"#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",

"options":{"use\_regex":True,"max\_results":100},

"summary":"final formula error scan"

}).ndjson)

00\_README!A1:H13

{"kind":"table","sheet":"00\_README","address":"A1:H13","rows":13,"cols":8,"values":[["MGH™ — ANX-003 | BANK-0.2 Canonical Item Bank",null,null,null,null,null,null,null],["DRAFT DE CONSOLIDAÇÃO — subconjunto de implementação MGH-P1.0. Não publicar conteúdo até recuperar redações e option IDs canônicos.",null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],["Campo","Valor",null,"Integrity Snapshot",null,null,null,null],["Anexo","ANX-003",null,"Metric","Expected","Current","Status","Note"],["Ativo metodológico","BANK-0.2",null,"P1.0 scenarios",48,48,"PASS","Registry structural count"],["Instrumento alvo","MGH-P1.0",null,"Scored responses",56,56,"PASS","From 10\_SCORING\_MATRIX"],["Master baseline","MGH-MASTER-P1.0-RC1",null,"Relation groups",6,6,"PASS","RG-01..RG-06"],["Document status","DRAFT — SOURCE RECOVERY REQUIRED",null,"Exact scenario texts",48,0,"BLOCKED","Source recovery required"],["Validation status","PILOT / NOT VALIDATED",null,"Canonical option IDs","All",0,"BLOCKED","Source recovery required"],["Scope desta planilha","48 cenários oficiais do P1.0 + 56 respostas pontuáveis + estrutura esperada de opções",null,null,null,null,null,null],["Limitação crítica","Os textos exatos dos cenários/opções e canonical option IDs não foram encontrados nos artefatos acessíveis nesta sessão.",null,null,null,null,null,null],["Regra","Não reconstruir, resumir ou inventar wording. Campos ausentes permanecem SOURCE\_REQUIRED.",null,null,null,null,null,null]]}

01\_P1\_SCENARIOS!A1:R12

{"kind":"table","sheet":"01\_P1\_SCENARIOS","address":"A1:R12","rows":12,"cols":18,"values":[["01 — P1.0 Scenario Registry",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["48 cenários oficiais. Texto canônico deliberadamente em branco onde a fonte literal ainda não foi recuperada.",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["scenario\_order","scenario\_code","scored\_item\_codes","lens","scenario\_type","context","randomization\_policy","scored\_response\_count","required","score\_targets","facet\_signals","relation\_group","scenario\_text\_canonical","text\_source\_status","bank\_version","instrument\_version","status","implementation\_note"],[1,"PC-001","PC-001","PC","PC\_FORCED\_CHOICE","DECISION","OPTIONS\_RANDOMIZED\_SERVER\_SIDE",1,"YES","PC.D/I/S/C","PC.D.DECISION\_SPEED","RG-02","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[2,"PRC-001","PRC-001","PRC","PRC\_FORCED\_CHOICE","COMMUNICATION","OPTIONS\_RANDOMIZED\_SERVER\_SIDE",1,"YES","PRC.V/A/C.FORCED","","","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[3,"TH-003","TH-003","DR","DR\_ORDINAL","EXTERNALIZATION","NO\_RANDOMIZATION",1,"YES","DR.EXTERNALIZATION","","RG-06","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[4,"PC-009R","PC-009R","PC","PC\_FORCED\_CHOICE","RELATIONSHIP","OPTIONS\_RANDOMIZED\_SERVER\_SIDE",1,"YES","PC.D/I/S/C","PC.I.SOCIABILITY","","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[5,"TH-001","TH-001","DR","DR\_ORDINAL","SPEED","NO\_RANDOMIZATION",1,"YES","DR.SPEED","","","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[6,"PC-021","PC-021","PC","PC\_FORCED\_CHOICE","DELEGATION","OPTIONS\_RANDOMIZED\_SERVER\_SIDE",1,"YES","PC.D/I/S/C","PC.C.CRITERION","RG-04","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[7,"PRC-004R","PRC-004R-A; PRC-004R-C; PRC-004R-V","PRC","PRC\_INDEPENDENT","MULTI\_CONTEXT","V\_A\_C\_BLOCK\_ORDER\_MAY\_RANDOMIZE; SCALE\_DIRECTION\_FIXED",3,"YES","PRC.A.INDEPENDENT; PRC.C.INDEPENDENT; PRC.V.INDEPENDENT","","","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."],[8,"PC-014","PC-014","PC","PC\_FORCED\_CHOICE","DELEGATION","OPTIONS\_RANDOMIZED\_SERVER\_SIDE",1,"YES","PC.D/I/S/C","PC.S.PATIENCE","","","SOURCE\_REQUIRED","BANK-0.2","MGH-P1.0","PILOT","Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."]]}

02\_RESPONSE\_SCHEMA!A1:O12

{"kind":"table","sheet":"02\_RESPONSE\_SCHEMA","address":"A1:O12","rows":12,"cols":15,"values":[["02 — P1.0 Scored Response Schema",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["56 respostas pontuáveis derivadas dos 48 cenários. Estrutura baseada na matriz operacional já existente.",null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["scenario\_order","scenario\_code","item\_code","lens","response\_format","context","randomizable","score\_target","scoring\_rule","facet\_signal","relation\_group","notes","bank\_version","scoring\_version","status"],[1,"PC-001","PC-001","PC","CATEGORICAL","DECISION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.DECISION\_SPEED","RG-02","Option order may be randomized; scoring follows option\_id, never display position.","BANK-0.2","SCORE-P1.0","PILOT"],[2,"PRC-001","PRC-001","PRC","CATEGORICAL","COMMUNICATION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total","","","Relative preference only; not a percentage of personality.","BANK-0.2","SCORE-P1.0","PILOT"],[3,"TH-003","TH-003","DR","ORDINAL","EXTERNALIZATION","FALSE","DR.EXTERNALIZATION","A=4,B=3,C=2,D=1","","RG-06","3 items per axis; normalize with ((sum-3)/9)\*100.","BANK-0.2","SCORE-P1.0","PILOT"],[4,"PC-009R","PC-009R","PC","CATEGORICAL","RELATIONSHIP","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.SOCIABILITY","","Option order may be randomized; scoring follows option\_id, never display position.","BANK-0.2","SCORE-P1.0","PILOT"],[5,"TH-001","TH-001","DR","ORDINAL","SPEED","FALSE","DR.SPEED","A=4,B=3,C=2,D=1","","","3 items per axis; normalize with ((sum-3)/9)\*100.","BANK-0.2","SCORE-P1.0","PILOT"],[6,"PC-021","PC-021","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.CRITERION","RG-04","Option order may be randomized; scoring follows option\_id, never display position.","BANK-0.2","SCORE-P1.0","PILOT"],[7,"PRC-004R","PRC-004R-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality","","","Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed.","BANK-0.2","SCORE-P1.0","PILOT"],[7,"PRC-004R","PRC-004R-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality","","","Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed.","BANK-0.2","SCORE-P1.0","PILOT"]]}

06\_SOURCE\_GAPS!A1:E12

{"kind":"table","sheet":"06\_SOURCE\_GAPS","address":"A1:E12","rows":12,"cols":5,"values":[["06 — Source Recovery Gaps",null,null,null,null],["Pendências documentais que não podem ser preenchidas por inferência. Resolver antes da publicação final do BANK.",null,null,null,null],[null,null,null,null,null],["gap\_id","missing\_asset","priority","blocks","required\_action"],["GAP-001","Exact scenario wording for all 48 P1.0 scenarios","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION","Recover exact previously authored wording from original MGH item-generation source; do not reconstruct."],["GAP-002","Exact response-option wording for PC / PRC Forced / DR","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION","Recover original alternatives verbatim; no paraphrasing."],["GAP-003","Canonical option IDs for every categorical/ordinal alternative","CRITICAL","BLOCKS\_IMPLEMENTATION\_FINALIZATION","Populate stable option IDs from original bank. Display position must remain separate."],["GAP-004","Full BANK-0.2 candidate universe (68 candidate groups/items)","HIGH","NON\_BLOCKING\_FOR\_P1\_SUBSET","Current accessible source reliably identifies the 48 P1.0 application scenarios, not all BANK-0.2 candidates."],["GAP-005","Exact PRC Independent statements and 1–5 scale labels","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION","Recover exact V/A/C statements and published rating labels."],["GAP-006","Canonical item\_text\_version per scenario/item","HIGH","BLOCKS\_RELEASE\_MANIFEST\_FINAL\_BINDING","Assign only after exact text source is recovered and frozen."],[null,null,null,null,null],[null,null,null,null,null]]}

{"kind":"notice","message":"Cell search matched 0 entries."}

preview = wb.render({"sheet\_name":"00\_README","range":"A1:H13","scale":1.4})

preview.save("/mnt/data/MGH\_ANX003\_preview.png")

print("/mnt/data/MGH\_ANX003\_preview.png")

/mnt/data/MGH\_ANX003\_preview.png

Sim. Retomamos exatamente do ponto em que paramos na Fase 3.3.

ANX-003 — BANK-0.2 CANONICAL ITEM BANK

Eu já consolidei a estrutura técnica do banco em uma nova planilha:

Ela contém:

00\_README — controle, baseline, status e limitações

01\_P1\_SCENARIOS — os 48 cenários oficiais, na ordem congelada

02\_RESPONSE\_SCHEMA — as 56 respostas pontuáveis

03\_OPTION\_REQUIREMENTS — estrutura esperada de alternativas/ratings

04\_RELATION\_GROUPS — RG-01 a RG-06

05\_VALIDATION\_RULES — regras bloqueantes para publicação

06\_SOURCE\_GAPS — tudo que ainda precisa ser recuperado da fonte original

07\_LISTS — valores controlados

Também reaproveitei a nossa Base Operacional da Onda 0, principalmente a matriz de scoring, para consolidar contextos, facetas, Relation Groups, randomização, tipos de cenário e chaves DR.

Mas apareceu um ponto importante

O ANX-003 está correto estruturalmente, porém ainda está com status:

DRAFT — SOURCE RECOVERY REQUIRED

Eu procurei nos materiais acessíveis do projeto e na nossa base operacional, mas não encontrei a redação literal completa dos 48 cenários e de todas as alternativas que escrevemos originalmente.

E não vou reconstruí-las de memória, porque isso violaria uma regra que nós mesmos definimos:

o Banco Canônico não pode conter perguntas reconstruídas, resumidas ou “parecidas”. Precisa conter exatamente a versão metodológica aprovada.

Por isso, os campos de texto ficaram deliberadamente vazios e marcados:

SOURCE\_REQUIRED.

O arquivo também registra que o BANK-0.2 chegou a um universo candidato de 68 itens/grupos, enquanto a fonte operacional que temos acessível hoje nos permite identificar com segurança o subconjunto oficial dos 48 cenários do P1.0, não todo o universo candidato.

Isso trava o desenvolvedor?

Não trava a fundação técnica.

Ele continua podendo trabalhar em:

arquitetura, banco, migrations, Instrument Registry, Assessment Engine, Response/Event Engine, randomização, versionamento, RBAC, infraestrutura etc.

Mas ele não deve cadastrar como definitivos os textos e opções do instrumento até recebermos o conteúdo literal canônico.

Onde estamos agora

Na Fase 3.3:

ANX-001 — Release Manifest ✅

ANX-002 — Version Compatibility Matrix ✅

ANX-003 — BANK-0.2 🟡 estrutura concluída / conteúdo literal pendente

E podemos continuar imediatamente, sem esperar essa recuperação, porque os próximos dois anexos dependem principalmente de regras que já temos documentadas:

ANX-004 — MGH-P1.0 Application Sequence

Vai congelar tecnicamente os 48 cenários, ordem, tipos, contagem de respostas, randomização e Relation Groups.

Depois:

ANX-005 — SCORE-P1.0 Scoring Matrix

Esse será outro anexo crítico para o desenvolvedor, porque transformará o scoring em uma matriz implementável e testável.

Então nosso próximo movimento pode ser ANX-004, enquanto mantemos a recuperação dos textos literais do BANK como pendência crítica paralela.