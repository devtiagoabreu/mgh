---
name: 02-scoring-key-based-on-axis
description: Trecho integral: scoring key based on axis.
source: docs/001/3.3 — ANX-003_ BANK-0.2 CANONICAL ITEM BANK.docx
version: 0.1
status: CANONICAL_CONTEXT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: true
source_lines: 573-1062
---

# scoring key based on axis

> **FONTE CANÔNICA DE CONTEXTO — TRANSCRIÇÃO INTEGRAL FATIADA.**
> `docs/002` é a fonte canônica para consumo por IA. Este arquivo contém
> apenas um trecho; o índice do original está em `00-indice.md`.
> Em conflito metodológico, anexos canônicos (`ANX-*`) prevalecem.
> Original auditável: campo `source` no frontmatter.

# scoring key based on axis

axis = x["context"]

if axis == "PERSISTENCE":

keys = {"A":1,"B":2,"C":3,"D":4}

else:

keys = {"A":4,"B":3,"C":2,"D":1}

for role in ["A","B","C","D"]:

option\_rows.append([order, code, t, role, "", "", keys[role], x["score\_targets"][0], "FIXED\_ORDER", "SOURCE\_REQUIRED",

"Exact ordinal alternative wording required; display order is fixed."])

relation\_rows = [

["RG-01","PC-007","PC-027","PC.D.AUTONOMY","Autonomia","Research relation group; not a sincerity score."],

["RG-02","PC-001","PC-023","DECISION\_UNCERTAINTY","Decisão sob incerteza","Research relation group; not a sincerity score."],

["RG-03","PC-016","PC-033","PC.S.CONSTANCY","Constância","Research relation group; not a sincerity score."],

["RG-04","PC-021","PC-028","PC.C.CRITERION","Critério / ambiguidade","Research relation group; not a sincerity score."],

["RG-05","TH-002","TH-015","DR.PERSISTENCE","Persistência pós-conflito","Research relation group; not a sincerity score."],

["RG-06","TH-003","TH-012","DR.EXTERNALIZATION","Externalização em contexto negativo","Research relation group; not a sincerity score."],

]

validation\_rows = [

["VAL-001","Scenario count","48","COUNT(01\_P1\_SCENARIOS.scenario\_order)","BLOCKING"],

["VAL-002","PC scenario count","24","COUNTIF(lens='PC')","BLOCKING"],

["VAL-003","PRC forced scenario count","8","COUNTIF(type='PRC\_FORCED\_CHOICE')","BLOCKING"],

["VAL-004","PRC independent scenario count","4","COUNTIF(type='PRC\_INDEPENDENT')","BLOCKING"],

["VAL-005","DR scenario count","12","COUNTIF(lens='DR')","BLOCKING"],

["VAL-006","Scored response count","56","SUM(scored\_response\_count)","BLOCKING"],

["VAL-007","PRC independent scored ratings","12","4 scenarios × 3 ratings","BLOCKING"],

["VAL-008","Relation groups","6","COUNT(04\_RELATION\_GROUPS)","BLOCKING"],

["VAL-009","Scenario order first","PC-001","scenario\_order=1","BLOCKING"],

["VAL-010","Scenario order last","PC-011R","scenario\_order=48","BLOCKING"],

["VAL-011","DR randomization","FALSE","All DR scenarios fixed-order","BLOCKING"],

["VAL-012","Published text completeness","48 scenario texts + all options","Must be 100% before P1.0 content publication","BLOCKING"],

]

gap\_rows = [

["GAP-001","Exact scenario wording for all 48 P1.0 scenarios","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION",

"Recover exact previously authored wording from original MGH item-generation source; do not reconstruct."],

["GAP-002","Exact response-option wording for PC / PRC Forced / DR","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION",

"Recover original alternatives verbatim; no paraphrasing."],

["GAP-003","Canonical option IDs for every categorical/ordinal alternative","CRITICAL","BLOCKS\_IMPLEMENTATION\_FINALIZATION",

"Populate stable option IDs from original bank. Display position must remain separate."],

["GAP-004","Full BANK-0.2 candidate universe (68 candidate groups/items)","HIGH","NON\_BLOCKING\_FOR\_P1\_SUBSET",

"Current accessible source reliably identifies the 48 P1.0 application scenarios, not all BANK-0.2 candidates."],

["GAP-005","Exact PRC Independent statements and 1–5 scale labels","CRITICAL","BLOCKS\_CONTENT\_PUBLICATION",

"Recover exact V/A/C statements and published rating labels."],

["GAP-006","Canonical item\_text\_version per scenario/item","HIGH","BLOCKS\_RELEASE\_MANIFEST\_FINAL\_BINDING",

"Assign only after exact text source is recovered and frozen."],

]

# Create workbook

wb = Workbook.create()

s\_readme = wb.worksheets.add("00\_README")

s\_scen = wb.worksheets.add("01\_P1\_SCENARIOS")

s\_resp = wb.worksheets.add("02\_RESPONSE\_SCHEMA")

s\_opt = wb.worksheets.add("03\_OPTION\_REQUIREMENTS")

s\_rg = wb.worksheets.add("04\_RELATION\_GROUPS")

s\_val = wb.worksheets.add("05\_VALIDATION\_RULES")

s\_gap = wb.worksheets.add("06\_SOURCE\_GAPS")

s\_lists = wb.worksheets.add("07\_LISTS")

# Theme

navy = "#14213D"

gold = "#D4A017"

light = "#F5F7FA"

muted = "#E9EEF5"

red = "#FDECEC"

green = "#EAF6EE"

amber = "#FFF4D6"

white = "#FFFFFF"

dark = "#1B1F24"

border = "#C7D0DB"

def title\_block(sheet, title, subtitle, end\_col):

sheet.merge\_cells(f"A1:{end\_col}1")

sheet.get\_range("A1").values = [[title]]

sheet.get\_range(f"A1:{end\_col}1").format = {

"fill": navy, "font": {"bold": True, "color": white, "size": 16},

"vertical\_alignment": "center"

}

sheet.get\_range(f"A1:{end\_col}1").format.row\_height = 28

sheet.merge\_cells(f"A2:{end\_col}2")

sheet.get\_range("A2").values = [[subtitle]]

sheet.get\_range(f"A2:{end\_col}2").format = {

"fill": "#EEF2F7", "font": {"italic": True, "color": dark, "size": 10},

"wrap\_text": True, "vertical\_alignment": "center"

}

sheet.get\_range(f"A2:{end\_col}2").format.row\_height = 32

def header\_fmt(rng):

rng.format = {

"fill": gold,

"font": {"bold": True, "color": "#111111"},

"horizontal\_alignment": "center",

"vertical\_alignment": "center",

"wrap\_text": True,

"borders": {"bottom": {"style": "continuous", "color": "#8A6B00", "weight": 1}}

}

# README

title\_block(s\_readme, "MGH™ — ANX-003 | BANK-0.2 Canonical Item Bank",

"DRAFT DE CONSOLIDAÇÃO — subconjunto de implementação MGH-P1.0. Não publicar conteúdo até recuperar redações e option IDs canônicos.", "H")

readme\_rows = [

["Campo","Valor"],

["Anexo","ANX-003"],

["Ativo metodológico","BANK-0.2"],

["Instrumento alvo","MGH-P1.0"],

["Master baseline","MGH-MASTER-P1.0-RC1"],

["Document status","DRAFT — SOURCE RECOVERY REQUIRED"],

["Validation status","PILOT / NOT VALIDATED"],

["Scope desta planilha","48 cenários oficiais do P1.0 + 56 respostas pontuáveis + estrutura esperada de opções"],

["Limitação crítica","Os textos exatos dos cenários/opções e canonical option IDs não foram encontrados nos artefatos acessíveis nesta sessão."],

["Regra","Não reconstruir, resumir ou inventar wording. Campos ausentes permanecem SOURCE\_REQUIRED."],

["Fonte estrutural","MGH\_Piloto\_Onda0\_Base\_Operacional\_v1.xlsx / 10\_SCORING\_MATRIX + Master Specs"],

["Full BANK-0.2","O banco candidato total foi definido como 68; esta planilha não declara conter os 68 candidatos até que a fonte integral seja recuperada."],

["Próximo gate","Recuperar conteúdo original → preencher IDs/textos → revisão metodológica → congelar item\_text\_version → publicar ANX-003 final."],

]

s\_readme.get\_range(f"A4:B{3+len(readme\_rows)}").values = readme\_rows

header\_fmt(s\_readme.get\_range("A4:B4"))

s\_readme.get\_range("A5:A20").format.font = {"bold": True, "color": navy}

s\_readme.get\_range("A4:B20").format.wrap\_text = True

s\_readme.get\_range("A:A").format.column\_width = 25

s\_readme.get\_range("B:B").format.column\_width = 90

s\_readme.freeze\_panes.freeze\_rows(4)

# Scenarios

title\_block(s\_scen, "01 — P1.0 Scenario Registry",

"48 cenários oficiais. Texto canônico deliberadamente em branco onde a fonte literal ainda não foi recuperada.", "R")

scen\_headers = ["scenario\_order","scenario\_code","scored\_item\_codes","lens","scenario\_type","context",

"randomization\_policy","scored\_response\_count","required","score\_targets","facet\_signals",

"relation\_group","scenario\_text\_canonical","text\_source\_status","bank\_version",

"instrument\_version","status","implementation\_note"]

s\_scen.get\_range(f"A4:R{3+1+len(scenario\_rows)}").values = [scen\_headers] + scenario\_rows

header\_fmt(s\_scen.get\_range("A4:R4"))

s\_scen.freeze\_panes.freeze\_rows(4)

s\_scen.get\_range("A5:R52").format.wrap\_text = True

# widths

widths = [10,15,26,8,22,20,34,12,10,28,28,14,48,18,12,14,10,52]

for idx,w in enumerate(widths):

col = chr(65+idx) if idx < 26 else None

if col:

s\_scen.get\_range(f"{col}:{col}").format.column\_width = w

s\_scen.get\_range("N5:N52").conditional\_formats.add\_custom('=N5="SOURCE\_REQUIRED"', {"fill": red, "font": {"color":"#8B1E1E","bold":True}})

s\_scen.tables.add(f"A4:R{3+1+len(scenario\_rows)}", True, "P1ScenarioRegistry")

# Response schema

title\_block(s\_resp, "02 — P1.0 Scored Response Schema",

"56 respostas pontuáveis derivadas dos 48 cenários. Estrutura baseada na matriz operacional já existente.", "O")

resp\_headers = ["scenario\_order","scenario\_code","item\_code","lens","response\_format","context","randomizable",

"score\_target","scoring\_rule","facet\_signal","relation\_group","notes","bank\_version","scoring\_version","status"]

s\_resp.get\_range(f"A4:O{3+1+len(response\_rows)}").values = [resp\_headers] + response\_rows

header\_fmt(s\_resp.get\_range("A4:O4"))

s\_resp.freeze\_panes.freeze\_rows(4)

s\_resp.get\_range(f"A5:O{4+len(response\_rows)}").format.wrap\_text = True

resp\_widths=[10,15,18,8,15,20,12,24,48,28,12,48,12,14,10]

for idx,w in enumerate(resp\_widths):

col=chr(65+idx)

s\_resp.get\_range(f"{col}:{col}").format.column\_width=w

s\_resp.tables.add(f"A4:O{3+1+len(response\_rows)}", True, "P1ResponseSchema")

# Options requirements

title\_block(s\_opt, "03 — Option & Rating Requirements",

"Estrutura esperada por cenário. option\_id e wording permanecem vazios até recuperação da fonte canônica.", "K")

opt\_headers = ["scenario\_order","scenario\_code","scenario\_type","semantic\_role\_or\_slot","canonical\_option\_id",

"option\_text\_canonical","raw\_points\_or\_scale","score\_target","presentation\_policy","source\_status","note"]

s\_opt.get\_range(f"A4:K{3+1+len(option\_rows)}").values = [opt\_headers] + option\_rows

header\_fmt(s\_opt.get\_range("A4:K4"))

s\_opt.freeze\_panes.freeze\_rows(4)

s\_opt.get\_range(f"A5:K{4+len(option\_rows)}").format.wrap\_text = True

opt\_widths=[10,15,22,20,22,50,18,24,28,18,52]

for idx,w in enumerate(opt\_widths):

col=chr(65+idx)

s\_opt.get\_range(f"{col}:{col}").format.column\_width=w

s\_opt.get\_range(f"J5:J{4+len(option\_rows)}").conditional\_formats.add\_custom('=J5="SOURCE\_REQUIRED"', {"fill": red, "font":{"color":"#8B1E1E","bold":True}})

s\_opt.tables.add(f"A4:K{3+1+len(option\_rows)}", True, "OptionRequirements")

# Relation groups

title\_block(s\_rg, "04 — Relation Group Registry",

"Pares de pesquisa. Não geram índice de sinceridade, mentira ou consistência percentual.", "F")

rg\_headers=["relation\_group","item\_a","item\_b","construct\_or\_theme\_code","theme","rule"]

s\_rg.get\_range("A4:F10").values=[rg\_headers]+relation\_rows

header\_fmt(s\_rg.get\_range("A4:F4"))

s\_rg.get\_range("A4:F10").format.wrap\_text=True

for col,w in zip(list("ABCDEF"),[14,14,14,28,28,55]):

s\_rg.get\_range(f"{col}:{col}").format.column\_width=w

s\_rg.freeze\_panes.freeze\_rows(4)

s\_rg.tables.add("A4:F10", True, "RelationGroupRegistry")

# Validation

title\_block(s\_val, "05 — Publication & Integrity Validation Rules",

"Regras que devem passar antes de o conteúdo P1.0 ser considerado publicável/implementável.", "E")

val\_headers=["validation\_id","rule","expected","verification","severity"]

s\_val.get\_range(f"A4:E{4+len(validation\_rows)}").values=[val\_headers]+validation\_rows

header\_fmt(s\_val.get\_range("A4:E4"))

s\_val.get\_range(f"A4:E{4+len(validation\_rows)}").format.wrap\_text=True

for col,w in zip(list("ABCDE"),[14,35,24,44,16]):

s\_val.get\_range(f"{col}:{col}").format.column\_width=w

s\_val.get\_range(f"E5:E{4+len(validation\_rows)}").conditional\_formats.add\_custom('=E5="BLOCKING"', {"fill": red, "font":{"color":"#8B1E1E","bold":True}})

s\_val.freeze\_panes.freeze\_rows(4)

s\_val.tables.add(f"A4:E{4+len(validation\_rows)}", True, "ValidationRules")

# Gaps

title\_block(s\_gap, "06 — Source Recovery Gaps",

"Pendências documentais que não podem ser preenchidas por inferência. Resolver antes da publicação final do BANK.", "E")

gap\_headers=["gap\_id","missing\_asset","priority","blocks","required\_action"]

s\_gap.get\_range(f"A4:E{4+len(gap\_rows)}").values=[gap\_headers]+gap\_rows

header\_fmt(s\_gap.get\_range("A4:E4"))

s\_gap.get\_range(f"A4:E{4+len(gap\_rows)}").format.wrap\_text=True

for col,w in zip(list("ABCDE"),[14,48,14,32,72]):

s\_gap.get\_range(f"{col}:{col}").format.column\_width=w

s\_gap.get\_range(f"C5:C{4+len(gap\_rows)}").conditional\_formats.add\_custom('=C5="CRITICAL"', {"fill": red, "font":{"color":"#8B1E1E","bold":True}})

s\_gap.get\_range(f"C5:C{4+len(gap\_rows)}").conditional\_formats.add\_custom('=C5="HIGH"', {"fill": amber, "font":{"color":"#7A5200","bold":True}})

s\_gap.freeze\_panes.freeze\_rows(4)

s\_gap.tables.add(f"A4:E{4+len(gap\_rows)}", True, "SourceGaps")

# Lists

title\_block(s\_lists, "07 — Controlled Values", "Listas de referência para consolidação do BANK-0.2.", "F")

lists = [

["category","value","description","","",""],

["lens","PC","Padrões Comportamentais","","",""],

["lens","PRC","Preferências de Representação e Comunicação","","",""],

["lens","DR","Dinâmica de Reação","","",""],

["scenario\_type","PC\_FORCED\_CHOICE","1 escolha entre 4 alternativas","","",""],

["scenario\_type","PRC\_FORCED\_CHOICE","1 escolha entre 3 alternativas","","",""],

["scenario\_type","PRC\_INDEPENDENT","3 ratings independentes 1–5","","",""],

["scenario\_type","DR\_ORDINAL","1 escolha entre 4 alternativas ordinais","","",""],

["source\_status","SOURCE\_REQUIRED","Texto/ID canônico ainda precisa ser recuperado","","",""],

["status","PILOT","Autorizado somente para piloto da versão","","",""],

]

s\_lists.get\_range("A4:F13").values=lists

header\_fmt(s\_lists.get\_range("A4:F4"))

s\_lists.get\_range("A4:F13").format.wrap\_text=True

s\_lists.get\_range("A:A").format.column\_width=22

s\_lists.get\_range("B:B").format.column\_width=28

s\_lists.get\_range("C:C").format.column\_width=60

# Overall formatting and row heights

for sh in [s\_readme,s\_scen,s\_resp,s\_opt,s\_rg,s\_val,s\_gap,s\_lists]:

sh.get\_range("A1:Z200").format.vertical\_alignment = "top"

# Verification formulas in README sidebar

s\_readme.get\_range("D4:H4").merge()

s\_readme.get\_range("D4").values=[["Integrity Snapshot"]]

s\_readme.get\_range("D4:H4").format={"fill":navy,"font":{"bold":True,"color":white},"horizontal\_alignment":"center"}

snap = [

["Metric","Expected","Current","Status","Note"],

["P1.0 scenarios",48,48,"PASS","Registry structural count"],

["Scored responses",56,56,"PASS","From 10\_SCORING\_MATRIX"],

["Relation groups",6,6,"PASS","RG-01..RG-06"],

["Exact scenario texts",48,0,"BLOCKED","Source recovery required"],

["Canonical option IDs","All",0,"BLOCKED","Source recovery required"],

]

s\_readme.get\_range("D5:H10").values=snap

header\_fmt(s\_readme.get\_range("D5:H5"))

s\_readme.get\_range("D5:H10").format.wrap\_text=True

for col,w in zip(list("DEFGH"),[24,14,14,16,38]):

s\_readme.get\_range(f"{col}:{col}").format.column\_width=w

s\_readme.get\_range("G6:G10").conditional\_formats.add\_custom('=G6="PASS"', {"fill":green,"font":{"color":"#1E6B3A","bold":True}})

s\_readme.get\_range("G6:G10").conditional\_formats.add\_custom('=G6="BLOCKED"', {"fill":red,"font":{"color":"#8B1E1E","bold":True}})

out = "/mnt/data/MGH\_ANX-003\_BANK-0.2\_P1.0\_Canonical\_Item\_Bank\_DRAFT\_v0.1.xlsx"

SpreadsheetFile.export\_xlsx(wb).save(out)

out

'/mnt/data/MGH\_ANX-003\_BANK-0.2\_P1.0\_Canonical\_Item\_Bank\_DRAFT\_v0.1.xlsx'

