---
name: 01-gate-de-crise
description: Gate de segurança humana para sinais de crise em campo livre na Fase A
source: docs/002/context.md
version: 0.1
status: OPERATIONAL_DRAFT
verified: 2026-11-25
classification: CONFIDENTIAL
canonical: false
derived_from:
  - docs/plano-de-desenvolvimento.md
  - docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md
  - skill:mental-health-crisis-protocol
  - skill:evidence-based-scales
  - skill:counseling-frameworks
---

# 01 — Gate de crise (Fase A)

> Documento **operacional e derivado**. Não é protocolo clínico, não habilita
> intervenção terapêutica e não altera instrumento, scoring, sequência nem
> Fase A. Em conflito, valem anexos canônicos (`ANX-*`), depois `docs/002`
> e o plano aprovado.
>
> Jurisdição: BR é **hipótese de trabalho** a validar por Legal/Privacy
> (CLT + LGPD + CFM quando aplicável), não fato presumido. Os contatos
> listados precisam ser **revalidados antes de qualquer publicação**.

## 1. Quando o gate dispara

O gate dispara por **padrão de sinal**, não por palavra-chave. Uma frase
ambígua, uma mudança de comportamento ou um contexto recente podem ser
suficientes. Na dúvida, **pergunte**; dúvida não é motivo para descartar.

Os exemplos entre aspas abaixo ilustram escuta em linguagem natural. **Não
são itens, opções, rótulos SELF nem texto de consentimento do MGH.**

| Categoria | Sinais que exigem gate | Checagem mínima |
|---|---|---|
| Ideação / passividade | "não quero mais acordar"; "seria melhor eu não estar aqui" | Pergunta direta e não julgadora sobre desejo de se machucar ou não querer viver |
| Plano / meios / intenção | Horário, local, método, acesso a armas ou medicamentos | Perguntar se há plano e se há algo por perto que possa ser usado |
| Comportamento | Doar pertences, despedidas, parar de cuidar de si, isolamento súbito | Verificar com a pessoa, sem acusação, o que mudou e quem está por perto |
| Estado mental | Alucinações, delírios, mania (sono reduzido com energia elevada), agitação extrema | Não argumentar com o conteúdo; interromper o fluxo e acionar humano |
| Contexto | Luto, perda de emprego, término, abuso, uso de substâncias, alta recente de internação | Considerar contexto como agravante, nunca como "explicação" que neutralize o sinal |
| Dados estruturados | Se alguma escala clínica tiver sido aplicada **fora do produto Fase A**: item 9 do PHQ-9 > 0, piora ≥ 5 pontos/mês, WHO-5 muito baixo | Rodar o gate antes de qualquer psicoeducação. O MGH-P1.0 **não aplica escalas clínicas** na Fase A |

Regras de detecção:

- Negação coerente reduz a chance, mas **não encerra** a checagem se o
  comportamento ou o contexto continuar apontando risco.
- Um único sinal forte (ex.: plano com meios) já basta para o gate.
- Sinal em campo livre **não é sinônimo** de conteúdo metodológico nem de
  dado de pesquisa aproveitável — ver §5.

## 2. Estratificação conservadora

Classificação é **provisória**. Na dúvida, **suba um nível**.

| Nível | Critérios mínimos | Ação imediata | Horizonte |
|---|---|---|---|
| **Imminente** | Tentativa em curso; plano + meios + intenção imediata; risco de vida; alucinações/delírios com risco; agitação extrema | Interromper tudo: emergência (SAMU 192 / Bombeiros 193), não deixar a pessoa sozinha, acionar revisor humano nomeado | **Minutos** |
| **Alto** | Ideação ativa com plano; tentativa recente; despedida/doação de bens; consumo de álcool/drogas com ideação; psicose/mania com risco | Acolher + encaminhar avaliação presencial + plano de segurança + follow-up humano nomeado | **≤ 24 h** |
| **Moderado** | Ideação sem plano/intenção; desesperança; isolamento; piora rápida; item 9 positivo em escala externa | Acolher + nomear recurso + encaminhar + checar apoios + monitorar com humano | **48–72 h** |
| **Baixo / ambíguo** | Palavra solta; negação com coerência; sem histórico conhecido | Checagem direta e não julgadora, psicoeducação curta, reclassificar com a resposta | **Próximo contato** |

Horizontes são de **encaminhamento humano**, não promessa de resolução. Uma
pontuação de escala é sinal de risco, nunca veredito clínico.

## 3. Ordem obrigatória

Esta ordem não é opcional e não pode ser invertida por IA, relatório ou
fluxo de pesquisa:

1. **Nomear o recurso antes de qualquer conselho.** No Brasil: CVV 188
   (24 h, gratuito) para conversa; SAMU 192 ou Bombeiros 193 para
   emergência. Fora do Brasil, substituir pelos serviços locais
   correspondentes. **Revalidar antes de publicar.**
2. **Pedir uma ação concreta e pequena.** Exemplo de formato: "pode ligar
   para alguém agora e me dizer quando essa pessoa chegou?". Uma ação por
   vez; sem exigir relato completo.
3. **Reduzir acesso a meios de forma colaborativa.** Medicamentos, armas,
   locais e acessos são tratados com a pessoa, sem tom de punição e sem
   apreensão improvisada.
4. **Sinalizar para revisor humano nomeado.** Em produto, isso significa
   flag + notificação para pessoa identificada. Se houver conflito de
   interesse — por exemplo, o sinal envolver o próprio mentor, o vínculo
   de mentoria ou a avaliação daquele mentorado — o revisor é **diferente
   do `MENTOR_OWNER`**. Registrar nome, data e justificativa da escolha.
   Nunca responder sozinho em risco alto ou imminente.
5. **Registrar o mínimo necessário.** Nível, sinais observados,
   encaminhamento oferecido, hora (UTC), `tenantId` e revisor nomeado.
   Sem transcrição integral do campo livre, sem PII desnecessária e sem
   repassar conteúdo sensível ao mentor.

## 4. Plano de segurança (adaptado de Stanley-Brown)

Usar quando houver risco **moderado ou alto** e a pessoa estiver disposta.
**Preencher junto, nunca imposto.** Se a pessoa não quiser, registrar apenas
a oferta e seguir com o encaminhamento adequado.

1. Sinais de alerta (pensamentos, humor, situações, comportamentos).
2. Estratégias internas de acalmação, sem depender de outra pessoa.
3. Pessoas e lugares que distraem ou acolhem.
4. Pessoas para contatar (nome e telefone, se a pessoa quiser fornecer).
5. Profissionais e serviços (psicólogo, psiquiatra, CVV 188, SAMU 192).
6. Restrição de meios (medicamentos, armas, acessos), com apoio.

Este é um **modelo operacional**, não formulário final nem texto de
instrumento. Revisar em cada contato relevante: **plano desatualizado não
conta como plano**. A construção do plano não substitui avaliação
profissional.

## 5. Regra O0 — sinal em campo livre

Sinal de crise identificado em campo livre da Onda 0 é **evento de
segurança da pesquisa**. Tratamento obrigatório:

- **Não é score:** não entra no Score Engine, não altera derived scores,
  não é regra de interpretação, não muda versão metodológica.
- **Não é flag de qualidade:** não vira `CMP`/`AMB`/`NFA`/`TWO`/`DES`/
  `CTX`/`VOC`/`RED`/`COG`/`MAP`, não é evidência de clareza de item nem
  de validade do instrumento. Item com sinal não é "melhor" nem "pior"
  por causa disso.
- **Não é conteúdo para o mentor:** o default é agregados e o
  `OPEN-TEN-001` permanece fechado. O encaminhamento vai para o revisor
  humano nomeado, não para o workspace do mentor. Não copiar trecho do
  campo livre para relatório, dashboard, exportação ou conversa com o
  mentor.
- **IA fora da Fase A:** nenhum modelo faz scoring, interpretação,
  classificação de risco, resumo do sinal ou sugestão de conduta. A
  detecção e a decisão são humanas e nomeadas.
- O fluxo normal de pesquisa fica **suspenso para aquele participante**
  enquanto o gate é conduzido. Isso não é punição nem exclusão silenciosa;
  é medida de segurança com registro.

## 6. Limites duros

Não fazer, em nenhuma circunstância:

- Diagnóstico, laudo, indicação de medicação, dose ou ajuste de tratamento.
- Psicoterapia, processamento de trauma ou "abrir a ferida" em crise.
- Promessa de **sigilo absoluto** quando há risco iminente.
- Resposta automática do tipo "tô preocupado com você" como única
  intervenção.
- "Vai ficar tudo bem", "pense na sua família", "é só uma fase" ou
  qualquer tranquilização que invalide o relato.
- Transformar MGH em vigilância de bem-estar, métrica de RH ou insumo de
  decisão de emprego.
- Manter conversa terapêutica após sinal de risco alto sem encaminhamento.

A função deste gate é **organizar encaminhamento seguro e registrá-lo**,
não produzir interpretação sobre a pessoa.

## 7. Fontes

- Skills: `mental-health-crisis-protocol`, `evidence-based-scales`,
  `counseling-frameworks`, `people-governance-psychology`.
- `docs/plano-de-desenvolvimento.md` §2.4, §3 (P6) e §7.
- `docs/002/decisoes/01-saas-multitenant-mentor-mentorados.md` §2, §4, §6
  e §9 (`OPEN-TEN-001`).
- `docs/002/fontes/fase-3-consolidacao/02-23-anx-014-forbidden-claim-registrytm.md`
  (saúde mental e diagnóstico como Forbidden Claims).
- Padrões adaptados de C-SSRS/SAFE-T, Stanley-Brown Safety Plan e WHO
  mhGAP. Nenhum texto dessas fontes foi copiado como instrumento MGH.
