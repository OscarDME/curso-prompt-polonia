// src/lib/prompts/text/marketing-objetivos.js

export const textPromptsMarketingObjetivos = [
  {
    id: "mobj-001",
    title: "Definir objetivo principal de campaña (con jerarquía: negocio → marketing → canal)",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Convierte una idea de campaña en un objetivo claro, medible y alineado al negocio.",
    prompt: `Contexto (rellena):
- Producto/servicio:
- Ticket promedio y margen (si aplica):
- Modelo (ecom, infoproducto, SaaS, servicios):
- Mercado/país:
- Periodo de campaña (fechas):
- Restricción principal (presupuesto, tiempo, equipo):
- Canales disponibles (Meta/Google/TikTok/Email/WhatsApp/Orgánico/Partners):
- Datos actuales (si tienes): tráfico, leads, CVR, CAC, LTV, ROAS, MQL→SQL, close rate

Tarea:
1) Propón 3 objetivos de negocio posibles (ej: ingresos, retención, activación, expansión) y elige el más razonable con base en el contexto.
2) Traduce ese objetivo (negocio) a:
   - objetivo de marketing (ej: demanda, leads, pipeline, activación)
   - objetivo por canal (qué debe lograr cada canal)
3) Define KPI primario, 2 KPIs secundarios y 3 indicadores operativos (leading indicators).
4) Define un objetivo SMART final (una frase) + versión “para el equipo” (más simple) + versión “para dirección” (más ejecutiva).
5) Incluye supuestos y condiciones para lograrlo (no prometer).
6) Termina con un checklist de validación: “si tu objetivo no cumple X, ajusta”.`,
    thumbnail: "",
  },
  {
    id: "mobj-002",
    title: "Árbol de objetivos (Goal Tree) — de ingresos a métricas accionables",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Construye un árbol que conecta ingresos → conversiones → volúmenes → actividades.",
    prompt: `Rellena:
- Meta de ingresos (monto):
- Precio/ticket promedio:
- Conversion rate (si existe) o estimación:
- Lead→Venta (si aplica):
- Tráfico actual:
- Periodo:

Tarea:
1) Crea un Goal Tree calculando:
   - #ventas necesarias
   - #leads necesarios
   - #visitas necesarias
   - #impresiones/clics estimadas (si hay ads)
2) Identifica 3 puntos de apalancamiento: qué variable movería más el resultado.
3) Propón 2 escenarios:
   - conservador
   - agresivo
4) Para cada escenario: metas numéricas por semana y por canal (si aplica).
5) Cierra con “qué medir cada día / cada semana” (ritual de seguimiento).`,
    thumbnail: "",
  },
  {
    id: "mobj-003",
    title: "Objetivos por etapa del funnel (Awareness → Consideración → Conversión → Retención)",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos y KPIs por etapa de funnel con métricas coherentes.",
    prompt: `Contexto:
- Producto:
- Bewareness actual (bajo/medio/alto):
- Tipo de compra (impulso/considerada):
- Ciclo de venta (días):
- Canales:

Tarea:
1) Define 1 objetivo por cada etapa:
   - Awareness
   - Consideración
   - Conversión
   - Retención/Referral
2) Para cada etapa:
   - KPI primario
   - 2 KPIs secundarios
   - 3 tácticas recomendadas
   - señales de que está fallando
3) Recomienda dónde enfocar en las próximas 4 semanas y por qué (según contexto).
4) Incluye un “scoreboard” semanal con 6–10 métricas máximas.`,
    thumbnail: "",
  },
  {
    id: "mobj-004",
    title: "OKRs de marketing (O + 3–5 KRs) para 30 días / 90 días",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Crea OKRs realistas con KRs medibles, milestones y responsables sugeridos.",
    prompt: `Rellena:
- Meta de la empresa:
- Producto:
- Equipo (roles disponibles):
- Restricciones:
- Canales:
- Baseline actual (si existe):

Tarea:
1) Propón 2 Objetivos (O) posibles; elige el mejor.
2) Crea 3–5 Key Results (KRs) medibles.
3) Desglosa cada KR en:
   - iniciativas (3–6)
   - dueño sugerido (rol)
   - milestones semanales
4) Define “anti-métricas” (vanity) que NO usaremos.
5) Añade un plan de revisión semanal (qué se decide cuando un KR va rojo).`,
    thumbnail: "",
  },
  {
    id: "mobj-005",
    title: "Objetivo de lanzamiento (pre-lanzamiento → lanzamiento → post) con métricas por fase",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Estructura objetivos por fases de lanzamiento, evitando confusión de métricas.",
    prompt: `Rellena:
- Oferta/lanzamiento:
- Fechas:
- Audiencias:
- Canales:
- Meta de ingresos o ventas:
- Activos (lista de email, comunidad, partners):

Tarea:
1) Define objetivos por fase:
   - Pre (generar expectativa y leads)
   - Launch (conversión)
   - Post (retención, upsell, reviews)
2) Para cada fase:
   - KPI primario
   - leading indicators diarios
   - benchmarks/umbrales (qué sería “bueno”)
3) Propón un tablero de control (12 métricas max) por fase.
4) Incluye plan de contingencia si:
   - CTR bajo
   - CVR bajo
   - leads baratos pero baja calidad
   - alta fricción de checkout.`,
    thumbnail: "",
  },
  {
    id: "mobj-006",
    title: "Definir objetivo de contenido (orgánico) alineado a ventas (sin métricas vanity)",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Convierte objetivos de contenido en pasos medibles, orientados a demanda y conversión.",
    prompt: `Rellena:
- Nicho:
- Oferta:
- Canal (IG/TikTok/YT/LinkedIn):
- Frecuencia:
- Objetivo de negocio (ventas/leads):
- Activos (lead magnet, landing, DM keyword):

Tarea:
1) Define 3 objetivos de contenido (ej: awareness cualificado, leads por DM, visitas a landing).
2) Elige 1 objetivo principal para 30 días.
3) Define:
   - KPI primario
   - 2 KPIs secundarios
   - 5 métricas operativas (ej: guardados, completión, DMs, clicks)
4) Crea un plan de medición semanal + criterios para pivotar.
5) Propón 3 “experimentos” (A/B) para aprender rápido.`,
    thumbnail: "",
  },
  {
    id: "mobj-007",
    title: "Objetivo de performance (ads) — ROAS/CAC con reglas de decisión",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos para campañas pagas incluyendo reglas claras para escalar/pausar.",
    prompt: `Rellena:
- Producto:
- Ticket y margen:
- CAC máximo tolerable:
- ROAS objetivo (si aplica):
- Presupuesto:
- Periodo:
- Canales de ads:

Tarea:
1) Define objetivo primario (ROAS o CAC) y justifica según margen.
2) Define:
   - KPI primario
   - KPI secundario (CPA, CVR, AOV, etc.)
   - leading indicators (CTR, CPC, ATC, etc.)
3) Crea “reglas de decisión”:
   - cuándo pausar
   - cuándo iterar
   - cuándo escalar
4) Incluye objetivo semanal y diario (con rangos).
5) Termina con una checklist de setup para asegurar medición correcta.`,
    thumbnail: "",
  },
  {
    id: "mobj-008",
    title: "Objetivos para WhatsApp/DM (conversaciones → cierres) con embudo de mensajes",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Objetivos medibles para venta por conversación: respuesta, calificación, cierre.",
    prompt: `Rellena:
- Oferta:
- Canal (WhatsApp/IG DM):
- Volumen actual de chats por día:
- Tiempo de respuesta:
- Tasa de cierre actual (si existe):
- Objeciones típicas:

Tarea:
1) Define objetivo principal para 30 días (ventas o cierres).
2) Construye el embudo:
   - chats iniciados
   - chats respondidos
   - chats calificados
   - oferta enviada
   - cierre
3) Pon targets por etapa (por día/semana).
4) Define 5 KPIs operativos (tiempo respuesta, follow-ups, etc.).
5) Diseña un scoreboard y ritual diario (15 min) para mover el número.`,
    thumbnail: "",
  },
  {
    id: "mobj-009",
    title: "Objetivo de email marketing — ingresos por envío y salud de lista",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos de email que balanceen ingresos y deliverability.",
    prompt: `Rellena:
- Tipo de lista:
- Tamaño:
- Frecuencia de envíos:
- Oferta:
- Ventas actuales por email (si hay):
- Segmentos:

Tarea:
1) Define objetivo principal (ingresos/mes o ingresos/envío).
2) Define objetivos de salud de lista:
   - quejas spam
   - rebotes
   - inactivos
3) Define KPIs:
   - primario (revenue/email)
   - secundarios (CTR, reply rate, conversion)
4) Crea plan 30 días con:
   - tipos de campañas (promo, valor, nurturing)
   - metas semanales
5) Incluye reglas de higiene: cuándo limpiar, reengage, segmentar.`,
    thumbnail: "",
  },
  {
    id: "mobj-010",
    title: "Objetivo de retención (post compra) — reducir devoluciones y aumentar recompra",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos post-compra con métricas de retención/recompra y experiencia.",
    prompt: `Rellena:
- Producto:
- Window de recompra (días):
- Problema post-compra típico (uso, onboarding, expectativas):
- Canales post-compra (email, WhatsApp, comunidad):
- % devoluciones (si existe):

Tarea:
1) Define objetivo principal (recompra, retención o reducción de devoluciones).
2) Selecciona 3 KPIs:
   - tasa de recompra
   - NPS/CSAT
   - devoluciones/tickets
3) Define 4 iniciativas de retención (onboarding, tips, contenido, soporte).
4) Crea metas por semana y señales de alerta.
5) Incluye un “mapa de momentos” post compra (día 0, 1, 3, 7, 14, 30).`,
    thumbnail: "",
  },

  {
    id: "mobj-011",
    title: "Objetivos por producto (portfolio) — priorizar qué empujar según impacto",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos por SKU/oferta: foco, KPI, canal y argumentos.",
    prompt: `Rellena:
- Lista de productos/ofertas (con precio y margen):
- Inventario (si aplica):
- Tracción actual por producto:
- Temporada:
- Capacidad operativa (soporte/entrega):

Tarea:
1) Clasifica productos en:
   - Hero (principal)
   - Profit (margen)
   - Entry (adquisición)
   - Niche (segmento)
2) Define objetivo por categoría (ventas, leads, awareness, retención).
3) KPI por producto + canal recomendado.
4) Propón 2 hipótesis por producto para probar en 30 días.
5) Cierra con un calendario de prioridades semanal.`,
    thumbnail: "",
  },
  {
    id: "mobj-012",
    title: "Objetivos de experimentación (growth) — 10 tests con hipótesis y criterio de éxito",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Convierte “hay que probar cosas” en tests medibles con criterio claro.",
    prompt: `Rellena:
- Canal principal:
- Métrica a mejorar (CTR, CVR, CAC, AOV, MQL→SQL):
- Baseline:
- Restricciones:

Tarea:
1) Genera 10 experimentos priorizados (impacto vs esfuerzo).
2) Para cada experimento:
   - hipótesis (si hacemos X, entonces Y)
   - métrica primaria
   - criterio de éxito (umbral)
   - duración mínima
   - riesgos
3) Define un objetivo macro de aprendizaje (qué necesitamos saber en 30 días).
4) Propón el orden semanal de ejecución (4 semanas).`,
    thumbnail: "",
  },
  {
    id: "mobj-013",
    title: "Objetivo de rebrand/repositioning — awareness cualificado + mensaje validado",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos realistas para reposicionamiento: señal de mercado y validación de mensaje.",
    prompt: `Rellena:
- Marca actual:
- Nuevo posicionamiento:
- ICP:
- 3 claims a validar:
- Canales:

Tarea:
1) Define objetivo principal (validación de mensaje, no solo alcance).
2) Define 3 señales de validación:
   - replies cualificados
   - demos/diagnósticos
   - conversion en landing
3) Define KPIs y metas por semana (4–6 semanas).
4) Diseña 5 tests de mensaje (ads, posts, email, webinar).
5) Incluye plan de “aprendizaje”: cómo decidir el mensaje final.`,
    thumbnail: "",
  },
  {
    id: "mobj-014",
    title: "Objetivos para eCommerce — AOV, CVR, CAC con “palancas” y prioridades",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos específicos para eCommerce con palancas por etapa.",
    prompt: `Rellena:
- AOV:
- CVR:
- CAC:
- Margen:
- Categoría producto:
- Top fuentes de tráfico:

Tarea:
1) Define objetivo principal (uno): subir AOV / subir CVR / bajar CAC.
2) Lista 5 palancas para ese objetivo (ej: bundles, shipping threshold, PDP, trust).
3) Define métricas leading (ATC, initiate checkout, etc.).
4) Define metas semanales y criterio de éxito.
5) Crea un “plan de 2 semanas” con quick wins y “plan 6 semanas” con cambios mayores.`,
    thumbnail: "",
  },
  {
    id: "mobj-015",
    title: "Objetivos para SaaS — activación, retención, expansión (con métricas North Star)",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define North Star y objetivos por etapa para SaaS sin perder foco.",
    prompt: `Rellena:
- SaaS:
- ICP:
- Evento de activación (Aha moment):
- Ciclo de venta:
- Churn:
- ARPA/LTV:

Tarea:
1) Define North Star Metric (NSM) razonable y por qué.
2) Define 3 objetivos:
   - adquisición/pipeline
   - activación
   - retención/expansión
3) KPIs por objetivo + metas 30/90 días (rangos).
4) 10 iniciativas ordenadas para mover NSM.
5) Ritual semanal y tablero ejecutivo.`,
    thumbnail: "",
  },

  {
    id: "mobj-016",
    title: "Objetivo para campaña de remarketing — recuperar intención sin quemar audiencia",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos de remarketing: frecuencia, CPA, segmentación y límites.",
    prompt: `Rellena:
- Producto:
- Audiencias (visitors, ATC, IC, lead):
- Ventana de retargeting:
- Oferta:
- Presupuesto:

Tarea:
1) Define objetivo (CPA/CAC o CVR retargeting).
2) Define frecuencia máxima y señales de fatiga.
3) Define KPI primario y secundarios.
4) Metas por segmento (ATC vs IC vs ViewContent).
5) Reglas de pausar/rotar creatividades.`,
    thumbnail: "",
  },
  {
    id: "mobj-017",
    title: "Objetivo de comunidad (Discord/Telegram) — engagement que genera ventas",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Objetivos de comunidad conectados a negocio: activación, referrals, soporte.",
    prompt: `Rellena:
- Comunidad:
- Oferta:
- Tamaño:
- Actividad actual:
- Metas negocio:

Tarea:
1) Define objetivo principal (ej: leads/mes desde comunidad, retención, soporte).
2) KPIs de comunidad que importan (no vanidad): participación activa, ayuda entre miembros, referrals.
3) Define 4 rituales semanales (AMAs, retos, workshops).
4) Metas por semana (30 días) y cómo medir.
5) Plan anti-spam y segmentación.`,
    thumbnail: "",
  },
  {
    id: "mobj-018",
    title: "Objetivos por canal (matriz) — qué debe lograr IG vs Email vs Ads vs SEO",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Crea una matriz de objetivos por canal y evita que todos midan lo mismo.",
    prompt: `Rellena:
- Canales activos:
- Oferta:
- Funnel:
- Recursos disponibles:

Tarea:
1) Crea una matriz donde cada canal tiene:
   - rol (awareness, captura, nurture, conversión, retención)
   - KPI primario
   - 2 KPIs secundarios
   - 2 tácticas clave
2) Define cómo se pasan usuarios entre canales (handoff).
3) Define metas mensuales por canal + metas semanales.
4) Cierra con 5 errores comunes al definir objetivos por canal.`,
    thumbnail: "",
  },
  {
    id: "mobj-019",
    title: "Objetivos de lanzamiento por cohorte (cohort-based goals) — semana a semana",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Divide metas por cohortes semanales para diagnosticar rápido dónde se rompe el funnel.",
    prompt: `Rellena:
- Periodo completo (semanas):
- Meta ingresos/ventas:
- Conversión estimada:
- Canales:

Tarea:
1) Divide la campaña en cohortes por semana con:
   - meta de leads
   - meta de ventas
   - meta de revenue
2) Define KPI por cohorte:
   - CAC
   - CVR
   - show-up rate (si webinars)
3) Define gatillos: si cohorte semana 1 <80% meta, qué ajustas en semana 2.
4) Incluye scoreboard y plantilla de reporte semanal.`,
    thumbnail: "",
  },
  {
    id: "mobj-020",
    title: "Objetivos para agencia/freelancer — objetivos que el cliente entiende y firma",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Formula objetivos claros para clientes: entregables, KPIs, supuestos y límites.",
    prompt: `Rellena:
- Cliente:
- Servicio contratado:
- KPI deseado:
- Presupuesto:
- Restricciones:
- Timeline:

Tarea:
1) Redacta 1 objetivo principal + 3 objetivos secundarios.
2) Define qué depende de ti vs del cliente.
3) Define métricas que NO garantizas (y por qué).
4) Define cadencia de reporting y formato.
5) Escribe una sección “criterio de éxito” y “criterio de no-éxito” (honesto).`,
    thumbnail: "",
  },

  {
    id: "mobj-021",
    title: "Objetivos para campaña de awareness (top of funnel) — cualificar, no solo reach",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos de awareness con señales de calidad y continuidad.",
    prompt: `Rellena:
- Producto:
- ICP:
- Mensaje:
- Canales:
- Presupuesto:

Tarea:
1) Define objetivo principal (awareness cualificado).
2) KPIs: reach, VTR/retención, visitas de calidad, engagement con intención.
3) Define umbrales de calidad (ej: % video completado, clicks cualificados).
4) Define “siguiente paso” obligatorio (retarget a consideración).
5) Crea un plan de medición semanal + rotación creativa.`,
    thumbnail: "",
  },
  {
    id: "mobj-022",
    title: "Objetivos para consideración (mid funnel) — convertir atención en intención",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Objetivos mid-funnel: leads, contenido puente, demos, carritos, etc.",
    prompt: `Rellena:
- Oferta:
- Lead magnet / VSL / webinar:
- Audiencia:
- Canales:

Tarea:
1) Define objetivo primario de consideración (leads cualificados / demos / ATC).
2) Define KPIs: CPL/CPQL, landing CVR, show-up (si webinars), reply rate.
3) Define contenidos puente (3) + entregables (checklist, calculadora, guía).
4) Metas semanales y reglas para optimizar.`,
    thumbnail: "",
  },
  {
    id: "mobj-023",
    title: "Objetivos de conversión (bottom funnel) — cerrar sin descuentos estúpidos",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos bottom funnel con foco en conversion quality y margen.",
    prompt: `Rellena:
- Oferta:
- Precio y margen:
- Point of friction (checkout, confianza, envío):
- Objeciones:
- Canales:

Tarea:
1) Define objetivo primario (CVR, CAC, revenue).
2) Define 3 palancas de conversión (trust, oferta, fricción).
3) Define metas por semana y leading indicators (checkout starts, payment attempts).
4) Crea reglas: cuándo usar incentivo, cuándo no.
5) Termina con checklist de CRO.`,
    thumbnail: "",
  },
  {
    id: "mobj-024",
    title: "Objetivos de segmentación — metas por segmento (nuevo vs recurrente, frío vs caliente)",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos por segmento para evitar promedio engañoso.",
    prompt: `Rellena:
- Segmentos disponibles:
- Oferta:
- Métricas por segmento (si existen):
- Canales:

Tarea:
1) Propón 4 segmentos clave (frío, tibio, caliente, cliente).
2) Define objetivo primario por segmento + KPI.
3) Define mensaje y canal por segmento (breve).
4) Metas semanales por segmento.
5) Cómo reportar sin confusión (tabla sugerida).`,
    thumbnail: "",
  },
  {
    id: "mobj-025",
    title: "Objetivo de posicionamiento por precio (premium vs accesible) — coherencia de métricas",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Alinea objetivos según posicionamiento de precio: premium necesita otras señales.",
    prompt: `Rellena:
- Precio:
- Competencia:
- ICP:
- Ciclo de compra:
- Prueba social:

Tarea:
1) Define si el posicionamiento debe ser premium o accesible (argumenta).
2) Define objetivos y KPIs coherentes con ese posicionamiento.
3) Define señales de calidad (ej: calls booked, replies, demo requests).
4) Metas 30 días y 90 días con supuestos.`,
    thumbnail: "",
  },

  {
    id: "mobj-026",
    title: "Objetivos para nuevo canal (TikTok/YouTube/LinkedIn) — metas realistas de aprendizaje",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos de entrada a canal: consistencia, aprendizaje, señales de demanda.",
    prompt: `Rellena:
- Canal nuevo:
- Oferta:
- Recursos (tiempo/edición):
- KPI deseado final:
- Experiencia previa:

Tarea:
1) Define objetivo de 30 días enfocado en aprendizaje (no solo resultados).
2) Establece:
   - output (n° piezas)
   - signal (retención, clicks, DMs)
   - outcome (leads/ventas)
3) Define “criteria to continue” y “criteria to stop/pivot”.
4) Diseña 8 experimentos de contenido por semana.`,
    thumbnail: "",
  },
  {
    id: "mobj-027",
    title: "Objetivos para campaña con influencer/afiliados — alineación y medición",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos y KPIs para colaboraciones: alcance, tráfico, ventas atribuibles.",
    prompt: `Rellena:
- Producto:
- Tipo de influencer:
- Modelo (pago fijo/afiliado):
- Código/UTM:
- Ventana:

Tarea:
1) Define objetivo principal (ventas/CPA/lead gen).
2) Define KPIs: ER, clicks, CVR landing, ventas, AOV.
3) Define criterios de éxito por influencer (mínimos).
4) Define plan de contenido (3 piezas) y reglas de tracking.
5) Define cómo iterar si el influencer trae tráfico pero no ventas.`,
    thumbnail: "",
  },
  {
    id: "mobj-028",
    title: "Objetivos para campaña de reactivación (clientes inactivos / leads fríos)",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos de reactivación: reply rate, conversión, win-back.",
    prompt: `Rellena:
- Segmento a reactivar:
- Tiempo de inactividad:
- Oferta:
- Canales (email/whatsapp):
- Historial:

Tarea:
1) Define objetivo principal (win-back revenue o reactivación de interés).
2) Define KPIs: reply rate, CTR, conversion, unsub.
3) Define 3 mensajes/ángulos y cómo medir cuál gana.
4) Metas semanales y reglas de limpieza de lista.`,
    thumbnail: "",
  },
  {
    id: "mobj-029",
    title: "Objetivos para evento presencial (ventas + leads + contenido) con métricas por etapa",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos para evento: registros, asistencia, leads, cierres, contenido.",
    prompt: `Rellena:
- Evento:
- Capacidad:
- Precio (si aplica):
- Objetivo negocio:
- Canales:

Tarea:
1) Define objetivos:
   - registros
   - asistencia
   - leads cualificados
   - ventas/cierres
   - piezas de contenido generadas
2) KPI por objetivo + metas por semana.
3) Plan de seguimiento post-evento (7–14 días) con objetivos de cierre.`,
    thumbnail: "",
  },
  {
    id: "mobj-030",
    title: "Objetivos para PR / prensa — señales de demanda y reputación (no solo menciones)",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos de PR conectados a negocio: tráfico cualificado, confianza, leads.",
    prompt: `Rellena:
- Marca:
- Mensaje:
- Público:
- Medios objetivo:
- Activo de conversión (landing, lead magnet):

Tarea:
1) Define objetivo principal de PR (reputación + demanda).
2) Define KPIs: visitas branded, búsquedas, leads, menciones de calidad.
3) Define meta por periodo y cómo atribuir (UTMs, picos).
4) Plan de “activación” después de cada mención.`,
    thumbnail: "",
  },

  {
    id: "mobj-031",
    title: "Descomponer objetivo en tareas (Workback plan) — desde deadline hacia hoy",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Plan backward para asegurar ejecución: hitos, dependencias, owners.",
    prompt: `Rellena:
- Objetivo final (SMART):
- Deadline:
- Activos faltantes (landing, creatives, emails):
- Equipo/roles:

Tarea:
1) Crea un workback plan por semanas (o días si faltan <14 días).
2) Incluye:
   - entregables
   - dueño (rol)
   - dependencias
   - fecha límite interna
3) Define “critical path” (lo que si se retrasa, rompe todo).
4) Define rituales de control (3 reuniones máximas).`,
    thumbnail: "",
  },
  {
    id: "mobj-032",
    title: "Objetivos con restricciones (budget/time/team) — define qué sacrificar conscientemente",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Ajusta objetivos a restricciones reales: triángulo alcance/tiempo/calidad.",
    prompt: `Rellena:
- Objetivo deseado:
- Presupuesto:
- Tiempo:
- Equipo:
- Canales:

Tarea:
1) Evalúa viabilidad y marca:
   - lo posible
   - lo arriesgado
   - lo imposible
2) Propón versión recalibrada del objetivo (realista) + su KPI.
3) Define qué sacrificas:
   - alcance
   - velocidad
   - calidad
4) Propón 3 palancas para recuperar performance sin aumentar recursos.`,
    thumbnail: "",
  },
  {
    id: "mobj-033",
    title: "Objetivos por mercado (local vs internacional) — ajustar KPI y mensaje",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos cuando cambias de país/idioma: benchmarks y señales de product-market fit.",
    prompt: `Rellena:
- País actual:
- Nuevo país:
- Canales:
- Oferta:
- Prueba social disponible:

Tarea:
1) Define objetivo de entrada al mercado (30/90 días).
2) KPIs de validación: CTR, CPC, CVR, replies, demos.
3) Define 3 hipótesis culturales (mensajes) a testear.
4) Metas por semana y plan de aprendizaje.`,
    thumbnail: "",
  },
  {
    id: "mobj-034",
    title: "Objetivos para producto nuevo vs producto maduro — qué cambia y qué debes medir",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Alinea objetivos según etapa: descubrimiento vs optimización.",
    prompt: `Rellena:
- Producto:
- Etapa (nuevo/maduro):
- Datos actuales:
- Canales:

Tarea:
1) Si es nuevo: define objetivos de aprendizaje + demanda inicial.
2) Si es maduro: define objetivos de eficiencia (CAC/ROAS/CVR).
3) Define tablero mínimo para cada caso.
4) Define “gates” para pasar de etapa nuevo → optimización.`,
    thumbnail: "",
  },
  {
    id: "mobj-035",
    title: "Objetivos de pricing/promoción — aumentar margen sin matar conversión",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos cuando cambias precio: margen, CVR, churn, percepción.",
    prompt: `Rellena:
- Precio actual:
- Precio nuevo:
- Razón del cambio:
- Margen:
- Competencia:

Tarea:
1) Define objetivo principal (margen/conversión/retención).
2) Define KPIs y umbrales de alerta.
3) Propón 3 experimentos de anclaje/oferta para sostener CVR.
4) Plan de comunicación (email, landing, scripts) con objetivos por canal.`,
    thumbnail: "",
  },

  {
    id: "mobj-036",
    title: "Objetivo de lead quality — pasar de ‘muchos leads’ a ‘leads que compran’",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos de calidad: MQL→SQL, show-up, close rate, pipeline.",
    prompt: `Rellena:
- Producto/servicio:
- Lead fuentes:
- Problema: leads basura vs pocos cierres
- Baseline: MQL→SQL, show up, close rate (si existe)

Tarea:
1) Define objetivo principal como “calidad”, no volumen.
2) Define KPIs:
   - CPQL
   - SQL rate
   - close rate
   - CAC
3) Define 5 cambios para mejorar calidad (mensaje, formulario, calificación, nurture).
4) Metas semanales y cómo medir mejora real.`,
    thumbnail: "",
  },
  {
    id: "mobj-037",
    title: "Objetivos para call booking (B2B/B2C high ticket) — de clicks a reuniones",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Objetivos de citas: show-up, set rate, close rate y valor del pipeline.",
    prompt: `Rellena:
- Oferta:
- Precio:
- Calendly funnel:
- Show-up rate:
- Close rate:
- Presupuesto:

Tarea:
1) Define objetivo de reuniones (número) y pipeline ($).
2) Define embudo: clicks → leads → booked → showed → closed.
3) Targets por etapa + reglas si cae show-up.
4) Crea scoreboard diario y semanal.
5) Define 3 palancas de mejora (reminders, calificación, oferta de llamada).`,
    thumbnail: "",
  },
  {
    id: "mobj-038",
    title: "Objetivos para SEO (90 días) — metas por contenido, rankings y leads",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos SEO realistas: output, calidad, rankings proxy y leads.",
    prompt: `Rellena:
- Nicho:
- Oferta:
- Estado SEO actual:
- Recursos (writers):
- Prioridades:

Tarea:
1) Define objetivos 30/60/90 días (output y outcomes).
2) KPIs: publicaciones, indexación, posiciones (top 10), clicks, leads.
3) Define 3 clusters y metas por cluster.
4) Plan de medición y decisiones mensuales.`,
    thumbnail: "",
  },
  {
    id: "mobj-039",
    title: "Objetivos para partnerships — leads compartidos y revenue atribuible",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos para alianzas: pipeline, conversaciones, revenue y actividad.",
    prompt: `Rellena:
- Partner ideal:
- Audiencia:
- Formato (webinar, bundle, referral):
- Ventana:
- Oferta:

Tarea:
1) Define objetivo principal (leads, pipeline, revenue).
2) KPI primario + secundarios (reuniones, CTR, CVR).
3) Define actividad mínima por partner (n° envíos, posts, etc).
4) Define reporte y reglas de continuidad (seguir/cortar).`,
    thumbnail: "",
  },
  {
    id: "mobj-040",
    title: "Objetivos con ‘North Star’ para marketing personal (marca personal) — señales que importan",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Fija NSM para marca personal: demanda entrante, DMs cualificados, calls.",
    prompt: `Rellena:
- Oferta:
- Plataforma:
- Tiempo disponible:
- Baseline:
- Público:

Tarea:
1) Define NSM ideal (ej: calls booked/mes, DMs cualificados/semana).
2) Define 3 objetivos por debajo (contenido, lead capture, nurture).
3) Define scoreboard semanal.
4) Define “cadencia”: qué haces diario/semanal y qué resultados esperas.`,
    thumbnail: "",
  },

  {
    id: "mobj-041",
    title: "Objetivo tipo ‘Scoreboard’ (12 métricas máximas) — dashboard ejecutivo para campaña",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Diseña un scoreboard simple que el equipo realmente use para decidir.",
    prompt: `Rellena:
- Campaña:
- Canales:
- KPI primario:
- Funnel:

Tarea:
1) Selecciona 12 métricas o menos y agrúpalas:
   - Salud de adquisición
   - Salud de intención
   - Salud de conversión
   - Salud de retención
2) Define frecuencia de revisión para cada métrica (diaria/semanal).
3) Define umbrales (verde/amarillo/rojo).
4) Define acciones asociadas a rojo (qué hacer, no solo mirar).`,
    thumbnail: "",
  },
  {
    id: "mobj-042",
    title: "Objetivos por creatividad (ads) — qué debe mover cada tipo de creativo",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivo por ángulo creativo: hook, prueba, oferta, objeción.",
    prompt: `Rellena:
- Producto:
- Ángulos creativos usados:
- Problema actual (CTR bajo, CVR bajo, etc):
- Canales:

Tarea:
1) Define 5 tipos de creatividades y su objetivo:
   - Hook/awareness
   - Prueba social
   - Demo
   - Objection handling
   - Oferta
2) KPI por tipo (CTR, hold rate, CVR).
3) Define metas y criterios de éxito por tipo.
4) Define plan de rotación semanal (cuántas nuevas por tipo).`,
    thumbnail: "",
  },
  {
    id: "mobj-043",
    title: "Objetivos cuando ‘todo falla’ — diagnóstico rápido (qué objetivo debes priorizar hoy)",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Framework para decidir el objetivo de la semana cuando hay caos y datos mixtos.",
    prompt: `Rellena:
- Síntomas (CTR, CPC, leads, CVR, ventas):
- Canales:
- Oferta:
- Cambios recientes:

Tarea:
1) Diagnostica en qué parte del funnel está el fallo (top/mid/bottom/fulfillment).
2) Define 1 objetivo único para 7 días (máxima prioridad).
3) Define 3 acciones de alto impacto para esa semana.
4) Define qué NO haremos (stop doing).
5) Define cómo sabrás en 72 horas si vas mejor o peor.`,
    thumbnail: "",
  },
  {
    id: "mobj-044",
    title: "Objetivos de calidad creativa — consistencia, claridad, credibilidad (para contenido y ads)",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos que mejoran la calidad del mensaje (no solo KPIs de compra).",
    prompt: `Rellena:
- Marca:
- Oferta:
- Problema actual (confusión, desconfianza, mensajes dispersos):

Tarea:
1) Define 3 objetivos de calidad:
   - claridad de oferta
   - credibilidad/prueba
   - consistencia narrativa
2) Define indicadores de calidad (internos y externos).
3) Define checklist de auditoría de piezas (10 puntos).
4) Define plan 30 días para elevar calidad con entregables semanales.`,
    thumbnail: "",
  },
  {
    id: "mobj-045",
    title: "Objetivos de upsell/cross-sell — aumentar LTV sin aumentar CAC",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos para elevar LTV: tasa upsell, take rate, AOV, margen.",
    prompt: `Rellena:
- Producto principal:
- Upsell/cross-sell disponibles:
- AOV actual:
- Window post compra:
- Canales:

Tarea:
1) Define objetivo principal (LTV/AOV take rate).
2) Define KPIs y metas por semana.
3) Define 3 puntos de inserción:
   - checkout
   - post compra
   - email/whatsapp
4) Define 5 hipótesis de bundles/ofertas a probar.`,
    thumbnail: "",
  },

  {
    id: "mobj-046",
    title: "Objetivo de velocidad (time-to-launch) — lanzar en 7 días sin romper calidad",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivo de salida rápida: entregables mínimos, riesgos aceptables y control.",
    prompt: `Rellena:
- Oferta:
- Fecha objetivo:
- Activos mínimos:
- Equipo:
- Riesgos:

Tarea:
1) Define el MVP del lanzamiento (qué sí o sí debe existir).
2) Define objetivo principal (salir a mercado y medir).
3) Define métricas mínimas de validación en 72 horas.
4) Lista de “must not ship” (cosas que no pueden fallar).
5) Workback plan día a día.`,
    thumbnail: "",
  },
  {
    id: "mobj-047",
    title: "Objetivos de pricing por segmento — misma oferta, diferentes objetivos según cliente",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos por segmento para pricing: premium vs volumen vs entrada.",
    prompt: `Rellena:
- Segmentos:
- Disposición a pagar:
- Oferta:
- Canales:

Tarea:
1) Define objetivo por segmento (margen vs volumen vs adquisición).
2) KPIs por segmento.
3) Mensaje por segmento (1–2 frases).
4) Plan de medición y cuándo separar campañas/landings.`,
    thumbnail: "",
  },
  {
    id: "mobj-048",
    title: "Objetivos de reducción de fricción — checkout/landing/call booking",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivo enfocado en fricción: tasa de abandono y pasos del funnel.",
    prompt: `Rellena:
- Punto de fricción (form, checkout, calendario):
- Paso actual donde cae la gente:
- Baseline:
- Herramientas:

Tarea:
1) Define objetivo principal (reducir abandono X%).
2) Define métricas por paso (step conversion).
3) Define 10 hipótesis de fricción + fixes.
4) Plan de tests (2 semanas) con criterio de éxito.`,
    thumbnail: "",
  },
  {
    id: "mobj-049",
    title: "Objetivos con atribución imperfecta — cómo medir cuando no hay tracking perfecto",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Define objetivos y medición cuando hay iOS, dark social, ventas por WhatsApp, etc.",
    prompt: `Rellena:
- Canales:
- Ventas por DM/WhatsApp:
- Problemas de tracking:
- KPI que sí puedes medir:

Tarea:
1) Define objetivo principal y métricas proxy (leading).
2) Define sistema de “self-reported attribution” (preguntas en checkout/DM).
3) Define tablero híbrido: datos directos + proxies.
4) Define reglas de decisión para escalar sin tener certeza 100%.`,
    thumbnail: "",
  },
  {
    id: "mobj-050",
    title: "Objetivo final + contrato de medición — documento simple para alinear a todo el equipo",
    area: "Marketing & ventas",
    category: "Objetivos",
    summary:
      "Plantilla de ‘contrato de objetivos’: qué medimos, cómo y qué significa éxito.",
    prompt: `Rellena:
- Campaña:
- Objetivo inicial:
- KPIs:
- Canales:
- Supuestos:
- Responsables:

Tarea:
Redacta un documento corto (1 página) que incluya:
1) Objetivo SMART (1 frase).
2) KPIs (primario/secundarios) con definiciones exactas.
3) Supuestos y dependencias (qué debe pasar).
4) Umbrales (verde/amarillo/rojo) por KPI.
5) Ritmo de reporting y quién decide.
6) Qué NO medimos y por qué.
7) Lista de riesgos y mitigaciones.
Debe quedar listo para copiar en Notion/Docs.`,
    thumbnail: "",
  },
];
