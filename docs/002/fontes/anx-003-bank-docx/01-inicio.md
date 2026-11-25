---
name: 01-inicio
description: Trecho integral: inicio.
source: docs/001/3.3 — ANX-003_ BANK-0.2 CANONICAL ITEM BANK.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 1-572
---

# inicio

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

from artifact\_tool import Blob, SpreadsheetFile

wb0 = SpreadsheetFile.import\_xlsx(Blob.load("/mnt/data/MGH\_Piloto\_Onda0\_Base\_Operacional\_v1.xlsx"))

print(wb0.inspect({"kind":"sheet","include":"id,name"}).ndjson)

{"kind":"sheet","id":"ws/t8qykc","name":"17\_LISTS","index":0,"range":"A1:X11","address":"A1:X11"}

{"kind":"sheet","id":"ws/3asq8g","name":"00\_README","index":1,"range":"A1:B14","address":"A1:B14"}

{"kind":"sheet","id":"ws/di93t7","name":"01\_PARTICIPANTS","index":2,"range":"A1:G1","address":"A1:G1"}

{"kind":"sheet","id":"ws/8qawdn","name":"02\_ASSESSMENTS","index":3,"range":"A1:V200","address":"A1:V200"}

{"kind":"sheet","id":"ws/af67n8","name":"03\_RESPONSES\_RAW","index":4,"range":"A1:R2000","address":"A1:R2000"}

{"kind":"sheet","id":"ws/jzzs8s","name":"04\_RESPONSE\_EVENTS","index":5,"range":"A1:K1","address":"A1:K1"}

{"kind":"sheet","id":"ws/uw9cm7","name":"05\_SELF\_FEEDBACK","index":6,"range":"A1:K1","address":"A1:K1"}

{"kind":"sheet","id":"ws/eavtru","name":"06\_COG\_INTERVIEWS","index":7,"range":"A1:K200","address":"A1:K200"}

{"kind":"sheet","id":"ws/ti9r3p","name":"07\_COG\_ITEM\_REVIEW","index":8,"range":"A1:K1","address":"A1:K1"}

{"kind":"sheet","id":"ws/5f8jdu","name":"08\_AUDIT\_FLAGS","index":9,"range":"A1:H1","address":"A1:H1"}

{"kind":"sheet","id":"ws/68kgdi","name":"09\_OCCURRENCES","index":10,"range":"A1:J1","address":"A1:J1"}

{"kind":"sheet","id":"ws/i5j63d","name":"10\_SCORING\_MATRIX","index":11,"range":"A1:L57","address":"A1:L57"}

{"kind":"sheet","id":"ws/s8bpxm","name":"11\_DERIVED\_SCORES","index":12,"range":"A1:K1500","address":"A1:K1500"}

{"kind":"sheet","id":"ws/s2fu46","name":"12\_HYPOTHESES","index":13,"range":"A1:J13","address":"A1:J13"}

{"kind":"sheet","id":"ws/fkv0tj","name":"13\_ITEM\_SURVIVAL","index":14,"range":"A1:L49","address":"A1:L49"}

{"kind":"sheet","id":"ws/mvcp1y","name":"14\_CHANGE\_LOG","index":15,"range":"A1:L1","address":"A1:L1"}

{"kind":"sheet","id":"ws/jh8wup","name":"15\_GATE\_REVIEW","index":16,"range":"A1:L15","address":"A1:L15"}

{"kind":"sheet","id":"ws/fzjc81","name":"16\_DASHBOARD\_O0","index":17,"range":"A1:E11","address":"A1:E11"}

for rng in ["10\_SCORING\_MATRIX!A1:L57","13\_ITEM\_SURVIVAL!A1:L49","12\_HYPOTHESES!A1:J13","00\_README!A1:B14"]:

print("RANGE", rng)

print(wb0.inspect({"kind":"table","range":rng,"include":"values,formulas","table\_max\_rows":80,"table\_max\_cols":20}).ndjson)

print()

RANGE 10\_SCORING\_MATRIX!A1:L57

{"kind":"table","sheet":"10\_SCORING\_MATRIX","address":"A1:L57","rows":57,"cols":12,"values":[["scenario\_order","scenario\_code","item\_code","lens","response\_format","context","randomizable","score\_target","scoring\_rule","facet\_signal","relation\_group","notes"],[1,"PC-001","PC-001","PC","CATEGORICAL","DECISION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.DECISION\_SPEED","RG-02","Option order may be randomized; scoring follows option\_id, never display posi..."],[2,"PRC-001","PRC-001","PRC","CATEGORICAL","COMMUNICATION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[3,"TH-003","TH-003","DR","ORDINAL","EXTERNALIZATION","FALSE","DR.EXTERNALIZATION","A=4,B=3,C=2,D=1",null,"RG-06","3 items per axis; normalize with ((sum-3)/9)\*100."],[4,"PC-009R","PC-009R","PC","CATEGORICAL","RELATIONSHIP","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.SOCIABILITY",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[5,"TH-001","TH-001","DR","ORDINAL","SPEED","FALSE","DR.SPEED","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[6,"PC-021","PC-021","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.CRITERION","RG-04","Option order may be randomized; scoring follows option\_id, never display posi..."],[7,"PRC-004R","PRC-004R-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[7,"PRC-004R","PRC-004R-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[7,"PRC-004R","PRC-004R-V","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.V.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[8,"PC-014","PC-014","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.PATIENCE",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[9,"PC-007","PC-007","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.AUTONOMY","RG-01","Option order may be randomized; scoring follows option\_id, never display posi..."],[10,"PRC-003","PRC-003","PRC","CATEGORICAL","DECISION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[11,"TH-010","TH-010","DR","ORDINAL","PERSISTENCE","FALSE","DR.PERSISTENCE","A=1,B=2,C=3,D=4",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[12,"PC-035","PC-035","PC","CATEGORICAL","COMMUNICATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.EXPRESSIVENESS",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[13,"TH-006","TH-006","DR","ORDINAL","SPEED","FALSE","DR.SPEED","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[14,"PC-018","PC-018","PC","CATEGORICAL","FEEDBACK","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.RELATIONAL\_MAINTENANCE",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[15,"PRC-012","PRC-012","PRC","CATEGORICAL","EXECUTION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[16,"PC-019","PC-019","PC","CATEGORICAL","DECISION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.ANALYSIS",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[17,"PC-016","PC-016","PC","CATEGORICAL","EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.CONSTANCY","RG-03","Option order may be randomized; scoring follows option\_id, never display posi..."],[18,"PRC-005","PRC-005","PRC","CATEGORICAL","EXECUTION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[19,"TH-012","TH-012","DR","ORDINAL","EXTERNALIZATION","FALSE","DR.EXTERNALIZATION","A=4,B=3,C=2,D=1",null,"RG-06","3 items per axis; normalize with ((sum-3)/9)\*100."],[20,"PC-010","PC-010","PC","CATEGORICAL","COMMUNICATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.PERSUASION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[21,"TH-004R","TH-004R","DR","ORDINAL","IMPACT","FALSE","DR.IMPACT","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[22,"PC-028","PC-028","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.CRITERION","RG-04","Option order may be randomized; scoring follows option\_id, never display posi..."],[23,"PRC-011","PRC-011","PRC","CATEGORICAL","COMMUNICATION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[24,"PC-012","PC-012","PC","CATEGORICAL","CHANGE","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.MOBILIZATION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[25,"PC-002","PC-002","PC","CATEGORICAL","CONFLICT","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.CONFRONTATION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[26,"PRC-006R","PRC-006R-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[26,"PRC-006R","PRC-006R-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[26,"PRC-006R","PRC-006R-V","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.V.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[27,"TH-007","TH-007","DR","ORDINAL","SPEED","FALSE","DR.SPEED","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[28,"PC-020R","PC-020R","PC","CATEGORICAL","EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.PRECISION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[29,"TH-002","TH-002","DR","ORDINAL","PERSISTENCE","FALSE","DR.PERSISTENCE","A=1,B=2,C=3,D=4",null,"RG-05","3 items per axis; normalize with ((sum-3)/9)\*100."],[30,"PC-023","PC-023","PC","CATEGORICAL","DECISION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.CAUTION","RG-02","Option order may be randomized; scoring follows option\_id, never display posi..."],[31,"PRC-002","PRC-002","PRC","CATEGORICAL","COMMUNICATION","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[32,"PC-033","PC-033","PC","CATEGORICAL","EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.CONSTANCY","RG-03","Option order may be randomized; scoring follows option\_id, never display posi..."],[33,"PC-027","PC-027","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.AUTONOMY","RG-01","Option order may be randomized; scoring follows option\_id, never display posi..."],[34,"PRC-014I","PRC-014I-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[34,"PRC-014I","PRC-014I-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[34,"PRC-014I","PRC-014I-V","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.V.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[35,"TH-013","TH-013","DR","ORDINAL","EXTERNALIZATION","FALSE","DR.EXTERNALIZATION","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[36,"PC-036","PC-036","PC","CATEGORICAL","EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.C.QUALITY",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[37,"TH-008R","TH-008R","DR","ORDINAL","IMPACT","FALSE","DR.IMPACT","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[38,"PC-015","PC-015","PC","CATEGORICAL","CONFLICT","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.COOPERATION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[39,"PRC-009","PRC-009","PRC","CATEGORICAL","FEEDBACK","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[40,"PC-008","PC-008","PC","CATEGORICAL","PRESSURE\_EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.RESULT\_ORIENTATION",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[41,"PC-017","PC-017","PC","CATEGORICAL","CHANGE","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.PREDICTABILITY",null,"Option order may be randomized; scoring follows option\_id, never display posi..."],[42,"PRC-010I","PRC-010I-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[42,"PRC-010I","PRC-010I-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[42,"PRC-010I","PRC-010I-V","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.V.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direc..."],[43,"TH-015","TH-015","DR","ORDINAL","PERSISTENCE","FALSE","DR.PERSISTENCE","A=1,B=2,C=3,D=4",null,"RG-05","3 items per axis; normalize with ((sum-3)/9)\*100."]],"valuesTruncated":true,"valuesPreviewRows":52,"valuesPreviewCols":12,"valuesPreviewAddress":"A1:L52"}

RANGE 13\_ITEM\_SURVIVAL!A1:L49

{"kind":"table","sheet":"13\_ITEM\_SURVIVAL","address":"A1:L49","rows":49,"cols":12,"values":[["item\_code","instrument\_version","cognitive\_status","alternative\_fit","desirability\_status","distribution\_status","timing\_status","revision\_status","quantitative\_status","relation\_status","final\_decision","decision\_reason"],["PC-001","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-001","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-003","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-009R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-001","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-021","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-004R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-014","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-007","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-003","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-010","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-035","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-006","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-018","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-012","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-019","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-016","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-005","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-012","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-010","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-004R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-028","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-011","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-012","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-002","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-006R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-007","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-020R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-002","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-023","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-002","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-033","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-027","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-014I","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-013","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-036","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-008R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-015","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-009","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-008","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-017","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-010I","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-015","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-029","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["TH-009R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-005","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PRC-015","MGH-P1.0",null,null,null,null,null,null,null,null,null,null],["PC-011R","MGH-P1.0",null,null,null,null,null,null,null,null,null,null]]}

RANGE 12\_HYPOTHESES!A1:J13

{"kind":"table","sheet":"12\_HYPOTHESES","address":"A1:J13","rows":13,"cols":10,"values":[["hypothesis\_id","version","statement","expected\_direction","variables","registered\_before\_wave","challenge\_condition","status","analysis\_reference","notes"],["H-001","1.0","PRC.V.INDEPENDENT apresentará relação positiva com SELF-06.","POSITIVE","PRC.V.INDEPENDENT; SELF-06","O1","Ausência persistente de associação em amostra adequada ou associação inversa.","OPEN",null,null],["H-002","1.0","PRC.A.INDEPENDENT apresentará relação positiva com SELF-07.","POSITIVE","PRC.A.INDEPENDENT; SELF-07","O1","Ausência persistente de associação em amostra adequada ou associação inversa.","OPEN",null,null],["H-003","1.0","PRC.C.INDEPENDENT apresentará relação positiva com SELF-08.","POSITIVE","PRC.C.INDEPENDENT; SELF-08","O1","Ausência persistente de associação em amostra adequada ou associação inversa.","OPEN",null,null],["H-004","1.0","Sinais de PC.D.AUTONOMY apresentarão relação positiva com SELF-02.","POSITIVE","PC.D.AUTONOMY; SELF-02","O1","Ausência persistente de relação ou padrão inverso em amostra adequada.","OPEN",null,null],["H-005","1.0","Sinais de PC.C.CRITERION apresentarão relação positiva com SELF-03.","POSITIVE","PC.C.CRITERION; SELF-03","O1","Ausência persistente de relação ou padrão inverso em amostra adequada.","OPEN",null,null],["H-006","1.0","DR.EXTERNALIZATION apresentará relação positiva com SELF-04.","POSITIVE","DR.EXTERNALIZATION; SELF-04","O1","Ausência persistente de associação ou associação inversa.","OPEN",null,null],["H-007","1.0","DR.PERSISTENCE apresentará relação positiva com SELF-05.","POSITIVE","DR.PERSISTENCE; SELF-05","O1","Ausência persistente de associação ou associação inversa.","OPEN",null,null],["H-008","1.0","Sinais relacionados à velocidade decisória apresentarão relação positiva com SELF-01.","POSITIVE","PC.D.DECISION\_SPEED; SELF-01","O1","Ausência persistente de relação ou relação inversa.","OPEN",null,null],["H-009","1.0","Pares RG-01 a RG-06 apresentarão convergência superior ao esperado por escolhas sem relação.","POSITIVE","RG-01..RG-06","O1","Convergência indistinguível de pares não relacionados.","OPEN",null,null],["H-010","1.0","Alternativas PC não apresentarão concentração sistemática extrema em uma única dimensão através da maioria dos itens.","BALANCED","PC item distributions","O1","Maioria dos itens com alternativa dominante extrema sem justificativa contextual.","OPEN",null,null],["H-011","1.0","PRC Forced e PRC Independent apresentarão alguma convergência, mas não equivalência perfeita.","POSITIVE\_NOT\_PERFECT","PRC FORCED; PRC INDEPENDENT","O1","Ausência persistente de convergência ou equivalência quase perfeita sistemática.","OPEN",null,null],["H-012","1.0","Os quatro eixos DR apresentarão padrões parcialmente independentes e não uma única dimensão geral.","PARTIAL\_INDEPENDENCE","DR.SPEED; DR.IMPACT; DR.PERSISTENCE; DR.EXTERNALIZATION","O2","Eixos colapsam sistematicamente em um único padrão geral.","OPEN",null,null]]}

RANGE 00\_README!A1:B14

{"kind":"table","sheet":"00\_README","address":"A1:B14","rows":14,"cols":2,"values":[["MGH™ — Base Operacional do Piloto Onda 0",null],[null,null],["Versão: DATA-P1.0 | Instrumento: MGH-P1.0 | Scoring: SCORE-P1.0",null],[null,null],["Tema","Diretriz"],["PRINCÍPIO","A base foi desenhada para rastrear resposta → score → evidência → interpretação. RAW nunca é sobrescrito."],["IDENTIDADE","Dados identificáveis devem ficar separados da base analítica. Use participant\_code na análise."],["RAW","03\_RESPONSES\_RAW e 04\_RESPONSE\_EVENTS devem ser tratados como append-only."],["DERIVED","11\_DERIVED\_SCORES pode ser recalculada por versão de algoritmo, sem alterar RAW."],["ONDA 0","Objetivo: compreensão, adequação das alternativas, desejabilidade, tempo, revisões e problemas de mapeamento."],["NÃO USAR PARA","Contratação, demissão, promoção, punição, remuneração, diagnóstico psicológico ou avaliação de competência."],["TIMESTAMPS","Armazenar em UTC. Converter para horário local apenas na interface."],["VERSÕES","Mudanças em itens, score, evidência ou interpretação devem entrar no 14\_CHANGE\_LOG."],["STATUS DO ARQUIVO","Base operacional pronta para receber MGH-O0-001."]]}

print(wb0.inspect({"kind":"table","range":"10\_SCORING\_MATRIX!A44:L57","include":"values,formulas","table\_max\_rows":20,"table\_max\_cols":12}).ndjson)

{"kind":"table","sheet":"10\_SCORING\_MATRIX","address":"A44:L57","rows":14,"cols":12,"values":[[37,"TH-008R","TH-008R","DR","ORDINAL","IMPACT","FALSE","DR.IMPACT","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[38,"PC-015","PC-015","PC","CATEGORICAL","CONFLICT","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.COOPERATION",null,"Option order may be randomized; scoring follows option\_id, never display position."],[39,"PRC-009","PRC-009","PRC","CATEGORICAL","FEEDBACK","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[40,"PC-008","PC-008","PC","CATEGORICAL","PRESSURE\_EXECUTION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.RESULT\_ORIENTATION",null,"Option order may be randomized; scoring follows option\_id, never display position."],[41,"PC-017","PC-017","PC","CATEGORICAL","CHANGE","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.S.PREDICTABILITY",null,"Option order may be randomized; scoring follows option\_id, never display position."],[42,"PRC-010I","PRC-010I-A","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.A.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed."],[42,"PRC-010I","PRC-010I-C","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.C.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed."],[42,"PRC-010I","PRC-010I-V","PRC","RATING","MULTI\_CONTEXT","TRUE","PRC.V.INDEPENDENT","Rating 1–5; mean across 4 indicators per modality",null,null,"Parent scenario has 3 independent ratings; visual order may vary, scale direction fixed."],[43,"TH-015","TH-015","DR","ORDINAL","PERSISTENCE","FALSE","DR.PERSISTENCE","A=1,B=2,C=3,D=4",null,"RG-05","3 items per axis; normalize with ((sum-3)/9)\*100."],[44,"PC-029","PC-029","PC","CATEGORICAL","CONFLICT","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.D.ASSERTIVENESS",null,"Option order may be randomized; scoring follows option\_id, never display position."],[45,"TH-009R","TH-009R","DR","ORDINAL","IMPACT","FALSE","DR.IMPACT","A=4,B=3,C=2,D=1",null,null,"3 items per axis; normalize with ((sum-3)/9)\*100."],[46,"PC-005","PC-005","PC","CATEGORICAL","DELEGATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","TRANSVERSAL",null,"Option order may be randomized; scoring follows option\_id, never display position."],[47,"PRC-015","PRC-015","PRC","CATEGORICAL","CHANGE","TRUE","PRC.V/A/C.FORCED","Selected modality receives +1; 8 forced-choice scenarios total",null,null,"Relative preference only; not a percentage of personality."],[48,"PC-011R","PC-011R","PC","CATEGORICAL","CHANGE\_IDEATION","TRUE","PC.D/I/S/C","Selected semantic option gives +1 to mapped PC dimension; item weight=1.0","PC.I.ENTHUSIASM",null,"Option order may be randomized; scoring follows option\_id, never display position."]]}

from artifact\_tool import Workbook, SpreadsheetFile

from collections import OrderedDict, defaultdict

# Read canonical metadata from existing operational workbook (already imported as wb0)

# Extract scoring matrix rows.

inspect = wb0.inspect({

"kind":"table",

"range":"10\_SCORING\_MATRIX!A1:L57",

"include":"values",

"table\_max\_rows":80,

"table\_max\_cols":12

})

data = inspect.data["values"] if hasattr(inspect, "data") else None

print(type(inspect))

---------------------------------------------------------------------------

TypeError Traceback (most recent call last)

Cell In[4], line 13

9 "include":"values",

10 "table\_max\_rows":80,

11 "table\_max\_cols":12

12 })

---> 13 data = inspect.data["values"] if hasattr(inspect, "data") else None

14 print(type(inspect))

File /tmp/tmp.QlpUkOUI9D/artifact\_tool\_v2-2.8.66/artifact\_tool/rpc/remote.py:886, in RemoteAttr.\_\_getitem\_\_(self, k)

885 'Could not get source, probably due dynamically evaluated source code.'

TypeError: 'NoneType' object is not subscriptable

import json, math, os, textwrap

from artifact\_tool import Blob, SpreadsheetFile, Workbook

wb0 = SpreadsheetFile.import\_xlsx(Blob.load("/mnt/data/MGH\_Piloto\_Onda0\_Base\_Operacional\_v1.xlsx"))

s = wb0.inspect({

"kind":"table",

"range":"10\_SCORING\_MATRIX!A1:L57",

"include":"values",

"table\_max\_rows":80,

"table\_max\_cols":12

})

obj = json.loads(s.ndjson)

rows = obj["values"]

len(rows), rows[0], rows[-1]

(52,

['scenario\_order',

'scenario\_code',

'item\_code',

'lens',

'response\_format',

'context',

'randomizable',

'score\_target',

'scoring\_rule',

'facet\_signal',

'relation\_group',

'notes'],

[43,

'TH-015',

'TH-015',

'DR',

'ORDINAL',

'PERSISTENCE',

'FALSE',

'DR.PERSISTENCE',

'A=1,B=2,C=3,D=4',

None,

'RG-05',

'3 items per axis; normalize with ((sum-3)/9)\*100.'])

s2 = wb0.inspect({

"kind":"table",

"range":"10\_SCORING\_MATRIX!A44:L57",

"include":"values",

"table\_max\_rows":20,

"table\_max\_cols":12

})

obj2 = json.loads(s2.ndjson)

tail = obj2["values"]

rows\_full = rows + tail[1:] if tail and tail[0][0]==rows[-1][0] else rows + tail

len(rows\_full), rows\_full[-1]

(66,

[48,

'PC-011R',

'PC-011R',

'PC',

'CATEGORICAL',

'CHANGE\_IDEATION',

'TRUE',

'PC.D/I/S/C',

'Selected semantic option gives +1 to mapped PC dimension; item weight=1.0',

'PC.I.ENTHUSIASM',

None,

'Option order may be randomized; scoring follows option\_id, never display position.'])

header = rows\_full[0]

seen=set()

dedup=[]

for r in rows\_full[1:]:

key=tuple(r)

if key not in seen:

seen.add(key)

dedup.append(r)

len(dedup), dedup[0], dedup[-1]

(62,

[1,

'PC-001',

'PC-001',

'PC',

'CATEGORICAL',

'DECISION',

'TRUE',

'PC.D/I/S/C',

'Selected semantic option gives +1 to mapped PC dimension; item weight=1.0',

'PC.D.DECISION\_SPEED',

'RG-02',

'Option order may be randomized; scoring follows option\_id, never display posi...'],

[48,

'PC-011R',

'PC-011R',

'PC',

'CATEGORICAL',

'CHANGE\_IDEATION',

'TRUE',

'PC.D/I/S/C',

'Selected semantic option gives +1 to mapped PC dimension; item weight=1.0',

'PC.I.ENTHUSIASM',

None,

'Option order may be randomized; scoring follows option\_id, never display position.'])

sheet\_sc = wb0.worksheets.get\_item("10\_SCORING\_MATRIX")

vals = sheet\_sc.get\_range("A1:L57").values

type(vals), len(vals), vals[0], vals[-1]

(list,

57,

['scenario\_order',

'scenario\_code',

'item\_code',

'lens',

'response\_format',

'context',

'randomizable',

'score\_target',

'scoring\_rule',

'facet\_signal',

'relation\_group',

'notes'],

[48,

'PC-011R',

'PC-011R',

'PC',

'CATEGORICAL',

'CHANGE\_IDEATION',

'TRUE',

'PC.D/I/S/C',

'Selected semantic option gives +1 to mapped PC dimension; item weight=1.0',

'PC.I.ENTHUSIASM',

None,

'Option order may be randomized; scoring follows option\_id, never display position.'])

from artifact\_tool import Workbook, SpreadsheetFile

from collections import OrderedDict

# Source metadata from operational workbook

vals = wb0.worksheets.get\_item("10\_SCORING\_MATRIX").get\_range("A1:L57").values

headers = vals[0]

rows = [dict(zip(headers, r)) for r in vals[1:]]

# Group into 48 scenarios preserving order

scenario\_map = OrderedDict()

for r in rows:

order = int(r["scenario\_order"])

if order not in scenario\_map:

scenario\_map[order] = {

"scenario\_order": order,

"scenario\_code": r["scenario\_code"],

"lens": r["lens"],

"response\_format": r["response\_format"],

"context": r["context"],

"randomizable": r["randomizable"],

"item\_codes": [],

"score\_targets": [],

"facet\_signals": [],

"relation\_groups": [],

"scoring\_rules": [],

"notes": [],

}

x = scenario\_map[order]

for field, key in [("item\_codes","item\_code"),("score\_targets","score\_target"),

("facet\_signals","facet\_signal"),("relation\_groups","relation\_group"),

("scoring\_rules","scoring\_rule"),("notes","notes")]:

v = r[key]

if v not in (None, "") and v not in x[field]:

x[field].append(v)

# mapping type + policies

def scenario\_type(x):

if x["lens"] == "PC":

return "PC\_FORCED\_CHOICE"

if x["lens"] == "DR":

return "DR\_ORDINAL"

if x["lens"] == "PRC" and x["response\_format"] == "RATING":

return "PRC\_INDEPENDENT"

return "PRC\_FORCED\_CHOICE"

def rand\_policy(x):

t = scenario\_type(x)

if t == "PC\_FORCED\_CHOICE":

return "OPTIONS\_RANDOMIZED\_SERVER\_SIDE"

if t == "PRC\_FORCED\_CHOICE":

return "OPTIONS\_RANDOMIZED\_SERVER\_SIDE"

if t == "PRC\_INDEPENDENT":

return "V\_A\_C\_BLOCK\_ORDER\_MAY\_RANDOMIZE; SCALE\_DIRECTION\_FIXED"

return "NO\_RANDOMIZATION"

scenario\_rows = []

for order, x in scenario\_map.items():

t = scenario\_type(x)

count = 3 if t == "PRC\_INDEPENDENT" else 1

scenario\_rows.append([

order,

x["scenario\_code"],

"; ".join(x["item\_codes"]),

x["lens"],

t,

x["context"],

rand\_policy(x),

count,

"YES",

"; ".join(x["score\_targets"]),

"; ".join(x["facet\_signals"]),

"; ".join(x["relation\_groups"]),

"", # exact scenario text

"SOURCE\_REQUIRED",

"BANK-0.2",

"MGH-P1.0",

"PILOT",

"Exact canonical wording not present in currently accessible artifacts. Do not paraphrase for implementation."

])

# Response schema rows from source, exactly 56

response\_rows = []

for r in rows:

response\_rows.append([

int(r["scenario\_order"]), r["scenario\_code"], r["item\_code"], r["lens"],

r["response\_format"], r["context"], r["randomizable"], r["score\_target"],

r["scoring\_rule"], r["facet\_signal"] or "", r["relation\_group"] or "",

r["notes"] or "", "BANK-0.2", "SCORE-P1.0", "PILOT"

])

# Expected option / rating structure

option\_rows = []

for order, x in scenario\_map.items():

t = scenario\_type(x)

code = x["scenario\_code"]

if t == "PC\_FORCED\_CHOICE":

for role in ["D","I","S","C"]:

option\_rows.append([order, code, t, role, "", "", 1, "PC."+role, "RANDOMIZED", "SOURCE\_REQUIRED",

"Canonical option\_id and exact wording required from original item source."])

elif t == "PRC\_FORCED\_CHOICE":

for role in ["V","A","C"]:

option\_rows.append([order, code, t, role, "", "", 1, f"PRC.{role}.FORCED", "RANDOMIZED", "SOURCE\_REQUIRED",

"One option per modality; exact canonical option\_id/text required."])

elif t == "PRC\_INDEPENDENT":

for role in ["V","A","C"]:

option\_rows.append([order, code, t, role, "", "", "", f"PRC.{role}.INDEPENDENT", "BLOCK\_ORDER\_MAY\_RANDOMIZE", "SOURCE\_REQUIRED",

"Independent 1–5 rating statement; exact statement and scale labels required."])

else: # DR

