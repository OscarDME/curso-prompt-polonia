// src/lib/prompts/text/marketing-nurturing.js

export const textPromptsMarketingNurturing = [
  {
    id: "mnut-001",
    title: "Diseñar estrategia de nurturing (30 días) — del lead frío al ‘listo para comprar’",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Crea un plan completo de nurturing por 30 días con objetivos, piezas, métricas y reglas de segmentación.",
    prompt: `Contexto (rellena):
- Producto/servicio:
- Precio / ticket:
- Nicho / industria:
- ICP (quién compra y por qué):
- Principal objeción #1:
- Principal objeción #2:
- Tiempo típico de decisión (días):
- Canal principal de nurturing (email, WhatsApp, DM, comunidad):
- Lead magnet / razón por la que entran:
- Oferta final (call, checkout, demo, consultoría):
- Activos existentes (casos, testimonios, recursos):
- Riesgo de spam / límites de frecuencia:

Tarea:
1) Define el “estado final” del lead nutrido (qué cree, qué sabe, qué está listo para hacer).
2) Segmenta la lista en 3 niveles:
   - Frío (solo curiosidad)
   - Tibio (consideración)
   - Caliente (intención)
   Define criterios concretos de paso entre niveles.
3) Diseña un calendario de 30 días con 12–16 impactos (piezas):
   - objetivo de cada pieza
   - idea principal (1 frase)
   - CTA (micro-CTA) y CTA (macro)
4) Define 5 “hilos narrativos” que se repiten (pilares): autoridad, prueba, educación, objeciones, oferta.
5) Define métricas y umbrales (verde/amarillo/rojo) para saber si el nurturing funciona.
6) Termina con reglas: cuándo acelerar (oferta) y cuándo desacelerar (valor / higiene).
Formato: tabla en texto + checklist final.`,
    thumbnail: "",
  },
  {
    id: "mnut-002",
    title: "Secuencia ‘Onboarding de lead magnet’ (7 días) — entregar valor + preparar venta",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Escribe una secuencia completa para nuevos leads que descargan un recurso.",
    prompt: `Rellena:
- Lead magnet:
- Promesa del lead magnet:
- Oferta principal:
- Tono de marca (cercano/premium/directo):
- Objeción más común:
- Historia del fundador (si existe):
- Prueba social (si existe):
- Canal (email/whatsapp):

Tarea:
Crea 7 mensajes (uno por día) con:
1) Asunto (si email) + preheader (si aplica) o gancho (si WhatsApp).
2) Cuerpo completo:
   - Día 1: entrega + “cómo usar” + micro compromiso
   - Día 2: quick win guiado
   - Día 3: error común + corrección
   - Día 4: framework (3 pasos) + ejemplo
   - Día 5: caso/mini historia (sin inventar resultados: usa lenguaje “en nuestra experiencia”)
   - Día 6: objeción fuerte + respuesta
   - Día 7: transición a CTA principal (call/checkout/demo) con urgencia ética
3) Un micro-CTA por mensaje (responder, click, guardar, completar).
4) Segmentación: qué etiqueta pondrías si hacen click / responden / ignoran.
5) Variaciones: 2 versiones del Día 6 y Día 7 (tono suave vs directo).`,
    thumbnail: "",
  },
  {
    id: "mnut-003",
    title: "Nurturing por objeciones (matriz) — 8 objeciones × 3 mensajes cada una",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Crea un banco de nurturing que responde objeciones y calienta intención.",
    prompt: `Rellena:
- Oferta:
- ICP:
- Lista de objeciones (mínimo 8): precio, tiempo, confianza, “ya intenté”, “no es para mí”, etc.
- Prueba disponible (testimonios, garantías, procesos):
- Canal:

Tarea:
1) Para cada objeción, crea 3 mensajes:
   - Mensaje A: empatía + reframe
   - Mensaje B: educación + framework
   - Mensaje C: prueba + CTA suave
2) Cada mensaje debe incluir:
   - Hook inicial
   - Idea central
   - Micro-CTA
3) Termina con una matriz “qué disparar” según comportamiento:
   - abrió/leyó
   - clic
   - respondió
   - silencioso 14 días`,
    thumbnail: "",
  },
  {
    id: "mnut-004",
    title: "Secuencia ‘Puente’ (5 mensajes) — pasar de contenido gratuito a oferta sin fricción",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Transición suave de educación a venta: ideal después de un mini curso o challenge.",
    prompt: `Rellena:
- Contenido gratuito que consumieron (webinar, reto, video, lead magnet):
- Transformación prometida:
- Oferta:
- Precio:
- Principal duda del buyer:
- Canal:

Tarea:
Crea 5 mensajes:
1) Recap del aprendizaje + “lo que falta” (gap).
2) Diagnóstico: preguntas para autocalificar (checkbox style).
3) Caso/ejemplo con detalle del proceso.
4) Objeción principal + respuesta.
5) Invitación clara a la oferta (CTA) + “para quién sí / no”.
Incluye:
- 3 versiones del CTA final (suave, directo, premium)
- Script corto para responder si dicen “me interesa, dime más”.`,
    thumbnail: "",
  },
  {
    id: "mnut-005",
    title: "Nurturing evergreen (12 semanas) — calendario por temas y repetición inteligente",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Diseña un sistema evergreen de nurturing que no dependa de lanzamientos.",
    prompt: `Rellena:
- Oferta:
- ICP:
- Frecuencia (emails/semana o mensajes/semana):
- 5 pilares de contenido (educación, prueba, autoridad, objeciones, oferta):
- Estacionalidad (si aplica):

Tarea:
1) Crea un calendario de 12 semanas con:
   - tema semanal
   - objetivo semanal
   - 2–3 piezas por semana con título + resumen + CTA
2) Define “reglas de repetición”: qué reusar y cada cuánto sin cansar.
3) Define segmentación por intención (3 niveles) y qué piezas ve cada nivel.
4) Define 6 triggers automatizados (visita pricing, click CTA, reply, etc.) y qué secuencia dispara cada trigger.`,
    thumbnail: "",
  },

  {
    id: "mnut-006",
    title: "Nurturing para B2B (MQL → SQL) — secuencia de 9 correos orientada a reunión",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia consultiva para mover leads a call: enfoque, prueba, y autocalificación.",
    prompt: `Rellena:
- Servicio B2B:
- ICP (industria, tamaño):
- Rol objetivo:
- Problema central:
- KPI impactado:
- Oferta de entrada (audit/diagnóstico):
- Canal: email

Tarea:
Crea 9 emails con:
- Asunto: 4 opciones por email (sin spamwords)
- Estructura:
  1) Insight del problema + costo
  2) Error común en el mercado
  3) Framework (3 pasos)
  4) Caso/mini caso (con disclaimers)
  5) Objeción “ya tengo proveedor”
  6) Objeción “no hay presupuesto”
  7) Checklist de evaluación (para elegir proveedor)
  8) Invitación a diagnóstico (soft CTA)
  9) Último email: “breakup” elegante
Incluye:
- 10 preguntas de calificación para la llamada
- 6 respuestas a objeciones en reply`,
    thumbnail: "",
  },
  {
    id: "mnut-007",
    title: "Nurturing para eCommerce — post-compra que crea recompra (10 mensajes)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia post-compra: onboarding, uso, valor, reviews, cross-sell y recompra.",
    prompt: `Rellena:
- Producto:
- Uso esperado (cómo se usa):
- Objeciones post-compra:
- Complementos (cross-sell):
- Ventana de recompra:
- Canales (email/whatsapp):

Tarea:
Crea 10 mensajes:
1) Confirmación + expectativas claras
2) Cómo usar en 5 pasos
3) Errores comunes y cómo evitarlos
4) Tips pro + “momento aha”
5) Historia de cliente (uso real)
6) FAQ
7) Solicitar review (sin presión)
8) Cross-sell (educativo, no agresivo)
9) Recompra (incentivo opcional)
10) Re-engagement si no abren/leen
Incluye segmentación por comportamiento (abrió/clic/no).`,
    thumbnail: "",
  },
  {
    id: "mnut-008",
    title: "Nurturing por ‘micro compromisos’ — 14 días para mover a acción sin vender",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia de micro compromisos para aumentar confianza, replies y activación.",
    prompt: `Rellena:
- Oferta final:
- Tipo de prospecto:
- Principal fricción psicológica (miedo, duda, pereza):
- Canal:

Tarea:
Crea un plan de 14 días donde cada día tiene:
- Micro objetivo (una acción simple)
- Texto del mensaje (corto pero con intención)
- Pregunta final para responder
- Etiqueta/segmento si responden “sí/no”
Objetivo: que terminen listos para recibir oferta sin que parezca venta.`,
    thumbnail: "",
  },
  {
    id: "mnut-009",
    title: "Nurturing narrativo (story arc) — 6 correos que cuentan una historia y venden",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Storytelling por capítulos: conflicto, aprendizajes, prueba y CTA.",
    prompt: `Rellena:
- Personaje (tú/cliente/avatar):
- Conflicto:
- Punto de quiebre:
- Método:
- Resultado (sin prometer):
- Oferta:
- Canal:

Tarea:
Escribe 6 emails tipo serie:
1) “Antes” (situación real y dolor)
2) “El error” (lo que no funcionó)
3) “El insight” (descubrimiento)
4) “El método” (framework)
5) “La prueba” (mini caso, aprendizajes)
6) “La invitación” (CTA + para quién sí/no)
Incluye 3 asuntos por email y 2 CTAs alternas.`,
    thumbnail: "",
  },
  {
    id: "mnut-010",
    title: "Nurturing educativo (mini curso por email) — 5 lecciones + evaluación final",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Mini curso que enseña un sistema y termina con offer fit natural.",
    prompt: `Rellena:
- Tema del mini curso:
- ICP:
- Resultado que logran (aprendizaje):
- Oferta relacionada:
- Canal:

Tarea:
Crea:
- Email 0 (bienvenida + expectativas)
- 5 lecciones (cada una con ejercicio y ejemplo)
- Email final (evaluación: check de readiness + CTA)
Incluye:
- checklist imprimible (en texto)
- preguntas de autoevaluación (10)
- segmentación por score (0–3, 4–7, 8–10) y qué CTA darle a cada uno.`,
    thumbnail: "",
  },

  {
    id: "mnut-011",
    title: "Nurturing por ‘problema → causa raíz → solución’ — 12 piezas para 4 semanas",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Plan semanal con repetición inteligente: problema, root cause, solución y prueba.",
    prompt: `Rellena:
- Problema principal del ICP:
- Causas raíz (3):
- Solución (tu método):
- Oferta:
- Canal:

Tarea:
Crea 12 piezas (4 semanas × 3):
- Semana 1: problema (3 piezas, distintos ángulos)
- Semana 2: causas raíz
- Semana 3: solución (framework)
- Semana 4: prueba + objeciones + CTA
Cada pieza debe incluir:
- Hook
- Idea central
- Micro-CTA
- Segmento ideal (frío/tibio/caliente).`,
    thumbnail: "",
  },
  {
    id: "mnut-012",
    title: "Nurturing para leads ‘curiosos’ (no listos) — convertir curiosidad en intención",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia para leads que descargan por curiosidad: elevar dolor/claridad y mover a acción.",
    prompt: `Rellena:
- Oferta:
- Lead magnet:
- Señales de curiosidad (poca urgencia):
- Canal:

Tarea:
Crea 8 mensajes:
- 2 de educación (errores comunes)
- 2 de diagnóstico (preguntas para que se identifiquen)
- 2 de prueba (caso / evidencia)
- 1 de objeción “no es el momento”
- 1 de CTA a paso pequeño (audit/guía/call corta)
Incluye versiones para tono suave vs directo.`,
    thumbnail: "",
  },
  {
    id: "mnut-013",
    title: "Nurturing para leads que preguntan precio rápido — evitar ‘precio’ como filtro único",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia para cuando preguntan precio antes de entender valor: reframe, opciones y calificación.",
    prompt: `Rellena:
- Oferta:
- Precio/rango:
- Resultados típicos (sin prometer):
- Diferenciador:
- Canal (WhatsApp/DM/email):

Tarea:
1) Escribe 6 mensajes de nurturing (cortos pero potentes) que:
   - establecen contexto de valor
   - preguntan 2–3 cosas para calificar
   - muestran opciones (starter/mid/premium)
   - ofrecen un paso pequeño (diagnóstico)
2) Incluye 10 respuestas rápidas a:
   - “está caro”
   - “lo pensaré”
   - “mándame info”
   - “tienes descuento?”.`,
    thumbnail: "",
  },
  {
    id: "mnut-014",
    title: "Nurturing para no-show (reunión agendada pero no asistió) — recuperar sin perseguir",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia de rescate para no-shows: empatía, valor, re-agenda y descalificación elegante.",
    prompt: `Rellena:
- Servicio:
- Tipo de llamada:
- Calendario:
- Objecciones típicas:
- Canal:

Tarea:
Crea 6 mensajes:
1) “Todo bien” + re-agendar (suave)
2) Resource drop (checklist/guía)
3) Pregunta de prioridad (sí/no)
4) Reframe del costo de no resolverlo
5) Oferta alternativa (15 min / audit)
6) Breakup elegante
Incluye 2 versiones por mensaje: formal y cercano.`,
    thumbnail: "",
  },
  {
    id: "mnut-015",
    title: "Nurturing para carritos abandonados — 5 mensajes con psicología (sin desesperación)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia de abandono: fricción, confianza, FAQ, prueba social y CTA.",
    prompt: `Rellena:
- Producto:
- Precio:
- Motivos de abandono (envío, confianza, tiempo):
- Incentivo (opcional):
- Canal:

Tarea:
Crea 5 mensajes:
1) Recordatorio + beneficio principal
2) Pregunta simple (qué te detuvo)
3) Objección principal + respuesta
4) Prueba social + caso (sin exagerar)
5) Última llamada + urgencia ética (deadline real)
Incluye:
- 10 respuestas rápidas si contestan
- segmentación: si abrieron pero no compraron vs no abrieron.`,
    thumbnail: "",
  },

  {
    id: "mnut-016",
    title: "Nurturing por ‘prueba social’ — 8 historias de clientes (plantillas) para rotar",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Plantillas para contar casos sin inventar: contexto, fricción, proceso, aprendizaje y CTA.",
    prompt: `Rellena:
- Oferta:
- Tipos de clientes:
- Resultados típicos (cualitativos o cuantitativos):
- Canal:

Tarea:
Crea 8 plantillas de historia con estructura:
- Contexto del cliente (sin exponer datos sensibles)
- Problema y costo
- Qué intentó antes
- Qué hicimos (proceso)
- Resultado (con disclaimers)
- Lección aplicable a cualquiera
- CTA suave
Incluye variantes por industria/rol (B2B) o por situación (B2C).`,
    thumbnail: "",
  },
  {
    id: "mnut-017",
    title: "Nurturing con ‘contenido puente’ — decidir qué recurso dar según etapa del lead",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Sistema de recursos puente: cuál enviar, cuándo y con qué objetivo.",
    prompt: `Rellena:
- Oferta:
- 6 recursos disponibles (videos, guías, casos):
- Etapas del lead:
- Canal:

Tarea:
1) Crea un mapa:
   - Lead frío → recurso A (objetivo)
   - Lead tibio → recurso B
   - Lead caliente → recurso C
2) Para cada recurso:
   - mensaje de envío
   - micro-CTA
   - qué etiqueta asignar si consumen
3) Diseña 6 triggers (acciones del usuario) y qué recurso/flujo dispara cada uno.`,
    thumbnail: "",
  },
  {
    id: "mnut-018",
    title: "Nurturing para leads ‘silenciosos’ — reactivar sin vender (re-engagement 7 días)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia de reactivación: curiosidad, valor, encuesta, cleanup y CTA final.",
    prompt: `Rellena:
- Segmento inactivo (tiempo):
- Oferta:
- Recurso estrella:
- Canal:

Tarea:
Crea 7 mensajes:
1) “¿Sigues en esto?” (humano)
2) Quick win en 3 pasos
3) Pregunta de diagnóstico (elige A/B)
4) Caso corto / prueba
5) Encuesta (qué te interesa)
6) Oferta suave (paso pequeño)
7) “Si no te interesa, dime y te saco” (higiene)
Incluye:
- 3 versiones de asuntos/gancho por mensaje.`,
    thumbnail: "",
  },
  {
    id: "mnut-019",
    title: "Nurturing para leads que dijeron ‘después’ — sistema de seguimiento a 30/60/90 días",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia de seguimiento largo: valor, check-in, pruebas y reactivación periódica.",
    prompt: `Rellena:
- Oferta:
- Motivo típico de “después” (dinero/tiempo/prioridad):
- Canal:

Tarea:
Diseña un sistema 30/60/90 días con:
- qué enviar (valor) y qué preguntar (calificación)
- 2 piezas por checkpoint (una educativa y una de prueba)
- CTA suave en cada checkpoint
- regla: cuándo cerrar el loop (breakup)
Incluye plantillas listas para copiar/pegar.`,
    thumbnail: "",
  },
  {
    id: "mnut-020",
    title: "Nurturing de autoridad — 10 piezas que construyen ‘confianza’ sin presumir",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Piezas para elevar autoridad: insights, procesos, estándares, criterios y transparencia.",
    prompt: `Rellena:
- Servicio:
- ICP:
- Diferenciador real:
- Errores del mercado:
- Canal:

Tarea:
Crea 10 piezas (mensajes) con:
- Insight (qué casi nadie entiende)
- Mini ejemplo
- 1 regla/principio (tu estándar)
- Micro-CTA
Incluye 2 piezas específicas:
- “lo que nunca hacemos y por qué”
- “cómo pensamos sobre resultados y riesgos”`,
    thumbnail: "",
  },

  {
    id: "mnut-021",
    title: "Nurturing ‘pregunta-respuesta’ — secuencia basada en FAQs reales (12 mensajes)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Convierte FAQs en una secuencia que educa y acerca a la compra.",
    prompt: `Rellena:
- Oferta:
- 12 preguntas frecuentes del ICP:
- Canal:

Tarea:
Para cada pregunta, escribe un mensaje que incluya:
- Hook: la pregunta como apertura
- Respuesta con claridad (sin vender de inmediato)
- Mini ejemplo o analogía
- Micro-CTA (responder, ver recurso, etc.)
Termina con:
- 5 preguntas de “calificación” para detectar intención.`,
    thumbnail: "",
  },
  {
    id: "mnut-022",
    title: "Nurturing para leads que comparan (competencia) — ‘cómo elegir’ sin atacar",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Guía comparativa consultiva para leads en evaluación: criterios, riesgos, preguntas y CTA.",
    prompt: `Rellena:
- Oferta:
- Alternativas típicas (DIY, agencia, software, competencia):
- Criterios clave:
- Canal:

Tarea:
Crea 6 mensajes:
1) “Cómo elegir” (framework de 5 criterios)
2) Costo oculto de elegir mal
3) Preguntas que debes hacerle a cualquier proveedor (10)
4) Señales rojas (5)
5) Cómo trabajamos (resumen de proceso)
6) CTA a audit/diagnóstico para evaluar fit`,
    thumbnail: "",
  },
  {
    id: "mnut-023",
    title: "Nurturing por ‘niveles de sofisticación’ — adaptar lenguaje según conciencia del lead",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Mensajes por nivel de conciencia: problema, solución, producto y más consciente.",
    prompt: `Rellena:
- Oferta:
- Problema:
- Mecanismo:
- Canal:

Tarea:
1) Define 4 niveles de conciencia de tu lead:
   - no consciente
   - consciente del problema
   - consciente de la solución
   - consciente del producto
2) Crea 3 mensajes por nivel (12 total), cada uno con:
   - hook
   - idea central
   - ejemplo
   - micro-CTA
3) Define reglas para moverlos al siguiente nivel (acciones/etiquetas).`,
    thumbnail: "",
  },
  {
    id: "mnut-024",
    title: "Nurturing para leads de webinar — antes, durante, después (14 mensajes total)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Sistema completo para webinar: show-up, engagement, oferta, follow-up.",
    prompt: `Rellena:
- Webinar:
- Oferta:
- Fecha/hora:
- Bonos:
- Objeciones:
- Canales:

Tarea:
Crea:
- Pre-webinar: 5 mensajes (registro→asistencia)
- Día del webinar: 3 mensajes (recordatorios + link)
- Post-webinar: 6 mensajes (resumen + objeciones + CTA)
Incluye segmentación:
- asistió completo
- asistió parcial
- no asistió
y distinta copy para cada uno.`,
    thumbnail: "",
  },
  {
    id: "mnut-025",
    title: "Nurturing para leads de contenido orgánico — pasar de ‘me gusta’ a conversación",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Mensajes y pipelines para convertir engagement en DM/WhatsApp y luego a oferta.",
    prompt: `Rellena:
- Plataforma (IG/TikTok/LinkedIn):
- Oferta:
- Palabra clave para DM:
- Canal final (WhatsApp/Calendly):
- Tono:

Tarea:
1) Diseña un flujo de 8 mensajes DM:
   - inicio (keyword)
   - entrega de recurso
   - pregunta de diagnóstico
   - profundización
   - micro win
   - objeción
   - CTA a paso pequeño
   - cierre elegante
2) Añade 12 respuestas rápidas para:
   - “me interesa”
   - “cuánto cuesta”
   - “no tengo tiempo”
   - “lo pensaré”`,
    thumbnail: "",
  },

  {
    id: "mnut-026",
    title: "Nurturing para leads por referido — trato VIP sin sonar intenso",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia especial para leads recomendados: confianza rápida, contexto y CTA.",
    prompt: `Rellena:
- Quién refirió:
- Oferta:
- ICP:
- Canal:

Tarea:
Crea 6 mensajes:
1) Agradecimiento + referencia mencionada
2) Contexto: qué hacemos y para quién
3) Preguntas de diagnóstico (3)
4) Caso corto (relevante al referido)
5) Propuesta de next step (15 min)
6) Breakup elegante
Incluye 2 versiones: formal y cercano.`,
    thumbnail: "",
  },
  {
    id: "mnut-027",
    title: "Nurturing ‘anti-spam’ — plan de frecuencia, higiene y reputación (para listas sensibles)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Define cómo nutrir sin quemar la lista: segmentos, caps, limpieza y contenido.",
    prompt: `Rellena:
- Canal:
- Tamaño lista:
- Frecuencia actual:
- Quejas/unsubs:
- Oferta:

Tarea:
1) Define política de frecuencia:
   - nuevos leads
   - activos
   - inactivos
2) Define caps: máximo mensajes/semana por segmento.
3) Define checklist de deliverability/higiene.
4) Crea 8 ideas de emails de valor que reduzcan quejas.
5) Define plan de re-permission (si aplica) con copy incluida.`,
    thumbnail: "",
  },
  {
    id: "mnut-028",
    title: "Nurturing ‘score’ — asignar puntaje por comportamiento y disparar secuencias",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Sistema de lead scoring simple para activar ofertas según intención.",
    prompt: `Rellena:
- Oferta:
- Eventos trackeables (open, click, visita pricing, reply, etc.):
- Canal:
- CRM/ESP (si aplica):

Tarea:
1) Define un modelo de scoring (0–100):
   - qué suma puntos y cuánto
   - qué resta
2) Define 3 umbrales:
   - frío
   - tibio
   - caliente
3) Diseña qué secuencia se dispara en cada umbral (resumen).
4) Escribe 6 mensajes para “calientes” (venta consultiva) y 6 para “fríos” (educación).`,
    thumbnail: "",
  },
  {
    id: "mnut-029",
    title: "Nurturing para ofertas high-ticket — construir valor, seguridad y fit (10 emails)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia para ticket alto: reduce riesgo percibido y mejora calificación.",
    prompt: `Rellena:
- Oferta high-ticket:
- Precio:
- ICP:
- Riesgos percibidos:
- Prueba (credenciales/casos):
- CTA (aplicación/llamada):
- Canal: email

Tarea:
Crea 10 emails:
1) Reframe del problema (costo de no actuar)
2) Estándares: qué requiere el resultado
3) Framework completo (3–5 pasos)
4) Caso detallado (proceso > resultado)
5) Objeción precio + ROI + alternativas
6) Objeción tiempo + cómo lo hacemos viable
7) “Para quién NO es” (calificación)
8) FAQ (seguridad, soporte, tiempos)
9) Invitación a aplicar
10) Breakup premium
Incluye 3 asuntos por email y CTA suave vs directa.`,
    thumbnail: "",
  },
  {
    id: "mnut-030",
    title: "Nurturing para productos de bajo ticket — subir AOV con ‘value ladder’",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia para entry offer que prepara upsell: valor, hábito, upgrade.",
    prompt: `Rellena:
- Entry product:
- Upsell:
- Cross-sell:
- Ventana:
- Canal:

Tarea:
Crea 8 mensajes:
- 3 de activación (usar y obtener quick win)
- 2 de educación (mejorar resultados)
- 2 de prueba (historias, ejemplos)
- 1 de upgrade/upsell
Incluye: segmentación según consumo del producto.`,
    thumbnail: "",
  },

  {
    id: "mnut-031",
    title: "Nurturing por ‘comparación antes/después’ — 8 mensajes con contraste tangible",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Serie de mensajes que contrastan ‘antes vs después’ sin exagerar, centrado en proceso.",
    prompt: `Rellena:
- Oferta:
- Antes típico (dolor):
- Después esperado:
- Proceso:
- Canal:

Tarea:
Crea 8 mensajes, cada uno con:
- “Antes” (1–2 frases)
- “Después” (1–2 frases)
- “Qué cambió” (acción concreta)
- Micro-CTA
Incluye 2 mensajes dedicados a objeción y 1 a invitación final.`,
    thumbnail: "",
  },
  {
    id: "mnut-032",
    title: "Nurturing tipo ‘newsletter’ (semanal) — 12 ediciones con estructura fija",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Sistema de newsletter que educa y vende sin saturar: 12 entregas con secciones.",
    prompt: `Rellena:
- Tema central:
- Oferta:
- Audiencia:
- Tono:

Tarea:
Diseña 12 ediciones con:
- Título
- 1 insight principal (resumen)
- 1 mini caso/historia
- 1 checklist rápido
- CTA suave a recurso/oferta
Incluye una plantilla base repetible y variaciones para no sonar igual.`,
    thumbnail: "",
  },
  {
    id: "mnut-033",
    title: "Nurturing para ‘auditoría gratuita’ — convertir audit en propuesta (secuencia completa)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Desde que piden auditoría hasta que reciben propuesta: seguimiento, valor y cierre.",
    prompt: `Rellena:
- Qué auditas:
- Tiempo de entrega:
- Qué incluye:
- Oferta posterior:
- Canal:

Tarea:
Crea:
1) Mensaje de confirmación y expectativas (inmediato)
2) Mensaje para pedir inputs (checklist)
3) Mensaje de entrega del audit (estructura)
4) Mensaje de “roadmap” (prioridades)
5) Mensaje de propuesta (CTA a reunión)
6) Follow-ups 1–3
Incluye scripts para responder a ‘lo revisaré’ y ‘muy caro’.`,
    thumbnail: "",
  },
  {
    id: "mnut-034",
    title: "Nurturing por ‘preguntas de diagnóstico’ — secuencia socrática (8 mensajes)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Mensajes basados en preguntas que hacen que el lead se convenza a sí mismo.",
    prompt: `Rellena:
- Oferta:
- ICP:
- Dolor:
- Canal:

Tarea:
Crea 8 mensajes donde el núcleo es una pregunta poderosa.
Reglas:
- 1 pregunta principal por mensaje
- añade contexto breve (2–3 líneas)
- termina con micro-CTA (responder A/B o número)
Incluye “árbol de respuestas”: si responden A, qué follow-up mandas; si B, qué mandas.`,
    thumbnail: "",
  },
  {
    id: "mnut-035",
    title: "Nurturing de ‘prueba técnica’ — demostrar competencia sin abrumar (B2B)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia que muestra thinking y rigor: procesos, estándares, ejemplos y límites.",
    prompt: `Rellena:
- Servicio:
- ICP:
- 5 decisiones técnicas del servicio:
- Errores comunes del mercado:
- Canal:

Tarea:
Crea 7 mensajes:
- Cada uno explica 1 decisión técnica: qué es, por qué importa, cómo la hacemos, dónde falla lo típico.
- Incluye mini ejemplo y un “si quieres, te mando plantilla”.
- CTA final a diagnóstico o workshop.`,
    thumbnail: "",
  },

  {
    id: "mnut-036",
    title: "Nurturing para leads de campaña ‘precio’ — reconstruir valor (10 mensajes)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia para leads atraídos por precio: elevar estándares, outcomes y fit.",
    prompt: `Rellena:
- Oferta:
- Precio:
- Segmento (sensibles al precio):
- Diferenciador:
- Canal:

Tarea:
Crea 10 mensajes:
1) Estándares: lo barato sale caro (con tacto)
2) Qué incluye / qué NO
3) Cómo calcular ROI simple
4) Caso/ejemplo centrado en proceso
5) Objeción “puedo hacerlo yo”
6) Alternativa más barata (entry) si existe
7) “para quién sí/no”
8) Q&A
9) Oferta/CTA
10) Breakup
Incluye 2 tonos: cercano y premium.`,
    thumbnail: "",
  },
  {
    id: "mnut-037",
    title: "Nurturing con ‘mini herramientas’ — 8 entregas (plantillas/checklists) que generan reciprocidad",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Crea una serie de herramientas rápidas (texto) que el lead puede aplicar hoy.",
    prompt: `Rellena:
- Oferta:
- Tema:
- ICP:
- Canal:

Tarea:
Crea 8 entregas, cada una incluye:
- herramienta (plantilla/checklist/script)
- ejemplo rellenado
- instrucción “cómo usar”
- micro-CTA
- CTA suave a la oferta
No uses archivos adjuntos: todo debe ir en el texto.`,
    thumbnail: "",
  },
  {
    id: "mnut-038",
    title: "Nurturing para leads con ‘miedo al compromiso’ — reduce riesgo percibido (7 mensajes)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia para buyers con miedo: claridad, control, experiencia, pasos pequeños.",
    prompt: `Rellena:
- Oferta:
- Riesgo percibido:
- Alternativa de bajo riesgo (audit/pilot):
- Canal:

Tarea:
Crea 7 mensajes:
- valida miedo
- muestra pasos pequeños
- explica control y checkpoints
- describe “cómo minimizar riesgo”
- CTA a paso pequeño
Incluye 10 respuestas rápidas a objeciones de riesgo.`,
    thumbnail: "",
  },
  {
    id: "mnut-039",
    title: "Nurturing para leads que consumen contenido pero no actúan — ‘barrera invisible’",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia para “lurkers”: convertir consumo pasivo en acciones pequeñas y luego CTA.",
    prompt: `Rellena:
- Oferta:
- Señal: consumen pero no responden
- Canal:

Tarea:
Crea 8 mensajes:
1) “si has estado mirando en silencio…”
2) pregunta simple de diagnóstico
3) quick win guiado
4) objeción “no soy constante”
5) prueba (historia)
6) 3 errores por los que no avanzan
7) paso pequeño (audit/check)
8) CTA final
Incluye etiquetas por comportamiento.`,
    thumbnail: "",
  },
  {
    id: "mnut-040",
    title: "Kit de nurturing: 20 ‘micro CTAs’ y cuándo usarlos",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Lista completa de micro CTAs para aumentar replies, clicks y señales de intención.",
    prompt: `Contexto:
- Canal (email/whatsapp/dm):
- Oferta:
- Etapas del funnel:

Tarea:
1) Crea 20 micro-CTAs clasificados por etapa:
   - frío (curiosidad)
   - tibio (consideración)
   - caliente (intención)
2) Para cada micro-CTA:
   - ejemplo textual listo para copiar
   - qué etiqueta/segmento asignar si responden
3) Define 6 reglas: qué micro-CTA usar según comportamiento del lead.`,
    thumbnail: "",
  },

  {
    id: "mnut-041",
    title: "Nurturing para upsell B2B — de ‘proyecto’ a ‘retainer’ (8 mensajes)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia post proyecto para convertir a retainer: logros, roadmap, riesgos de parar.",
    prompt: `Rellena:
- Servicio realizado:
- Resultado/avances:
- Qué queda pendiente:
- Propuesta retainer:
- Canal:

Tarea:
Crea 8 mensajes:
1) Recap de lo logrado
2) “lo que viene” (roadmap)
3) Riesgo de detenerse (sin miedo, con lógica)
4) Nuevas oportunidades detectadas
5) ROI de continuidad
6) Pautas de trabajo (cadencia)
7) Propuesta clara (CTA)
8) Breakup elegante`,
    thumbnail: "",
  },
  {
    id: "mnut-042",
    title: "Nurturing por segmentos (3 secuencias) — mismo producto, 3 perfiles distintos",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Crea 3 mini-secuencias (5 mensajes cada una) para segmentos distintos del ICP.",
    prompt: `Rellena:
- Producto:
- Segmento A:
- Segmento B:
- Segmento C:
- Diferencias (dolor, lenguaje, prioridad):
- Canal:

Tarea:
1) Para cada segmento, crea una secuencia de 5 mensajes:
   - educación
   - diagnóstico
   - caso
   - objeción
   - CTA
2) Asegura que:
   - el vocabulario cambia
   - la prueba cambia
   - el CTA se ajusta (demo/call/checkout)
3) Agrega reglas para detectar a qué segmento pertenece el lead.`,
    thumbnail: "",
  },
  {
    id: "mnut-043",
    title: "Nurturing para ofertas con lista de espera — mantener interés hasta abrir carrito",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Plan para waitlist: expectativa, valor, prueba, sneak peeks, y transición a apertura.",
    prompt: `Rellena:
- Oferta:
- Fecha apertura:
- Bonus/beneficio por esperar:
- Canal:

Tarea:
Crea 12 mensajes para la lista de espera:
- 4 educación (provee valor real)
- 3 sneak peeks (lo que incluye)
- 2 prueba social
- 2 objeciones
- 1 aviso de apertura (CTA)
Incluye “calendar” por semanas y reglas de frecuencia.`,
    thumbnail: "",
  },
  {
    id: "mnut-044",
    title: "Nurturing ‘lo que nadie te dice’ — 10 piezas anti-cliché (autoridad y verdad)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Mensajes de autoridad basados en verdades incómodas (sin ser arrogante).",
    prompt: `Rellena:
- Nicho:
- Oferta:
- Mentiras/clichés comunes del mercado:
- Tono:

Tarea:
Crea 10 mensajes:
- Hook: “lo que nadie te dice…”
- Explicación con lógica + ejemplo
- Qué hacer distinto (paso 1–2)
- Micro-CTA
Incluye 5 comentarios/respuestas listos para haters/escépticos.`,
    thumbnail: "",
  },
  {
    id: "mnut-045",
    title: "Nurturing con ‘mini auditoría por mensaje’ — 6 prompts para analizar el caso del lead",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Mensajes que piden datos mínimos y devuelven mini diagnóstico para generar reciprocidad.",
    prompt: `Rellena:
- Servicio:
- Datos mínimos que necesitas (3–5):
- Canal:

Tarea:
Crea 6 mensajes tipo:
1) Pide 3 datos (muy simple)
2) Devuelve mini diagnóstico (estructura fija)
3) Recomienda 1 acción (quick win)
4) Pregunta de calificación
5) Ofrece audit completo (CTA)
6) Seguimiento suave
Incluye versión WhatsApp y versión Email.`,
    thumbnail: "",
  },

  {
    id: "mnut-046",
    title: "Nurturing para leads que ya compraron otra cosa — cross-sell por resultados, no por catálogo",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia para ofrecer un producto complementario basado en el progreso del cliente.",
    prompt: `Rellena:
- Producto comprado:
- Progreso esperado:
- Complemento ideal:
- Señales de readiness:
- Canal:

Tarea:
Crea 7 mensajes:
- 3 de progreso (celebrar y guiar)
- 2 de bloqueos típicos + solución
- 1 de recomendación de complemento (CTA suave)
- 1 de cierre con “si te sirve, te ayudo con X”
Incluye segmentación por comportamiento.`,
    thumbnail: "",
  },
  {
    id: "mnut-047",
    title: "Nurturing de ‘prueba de competencia’ — 5 breakdowns de casos (tipo ‘te muestro cómo pienso’)",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Mensajes donde analizas un caso (anónimo o hipotético) para demostrar criterio.",
    prompt: `Rellena:
- Oferta:
- Tipo de casos comunes:
- KPI:
- Canal:

Tarea:
Crea 5 breakdowns (mensajes largos) con:
- Contexto del caso
- Diagnóstico (3 hallazgos)
- Prioridades (top 3)
- Qué haría en 7 días
- Qué mediría
- CTA: “si quieres, reviso el tuyo”
Incluye 2 CTAs: DM y call.`,
    thumbnail: "",
  },
  {
    id: "mnut-048",
    title: "Nurturing con ‘mini retos’ — 4 retos semanales para activar leads",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Reto de 4 semanas (1 reto/semana) con instrucciones y seguimiento por mensajes.",
    prompt: `Rellena:
- Tema del reto:
- Oferta:
- Canal:

Tarea:
Crea un plan de 4 semanas:
- Semana 1–4: reto (tarea concreta), ejemplo, checklist
- Mensaje de inicio + 2 seguimientos por semana
- Mensaje de cierre semanal con reflexión y CTA suave
Incluye cómo premiar (sin regalo obligatorio) y cómo segmentar por participación.`,
    thumbnail: "",
  },
  {
    id: "mnut-049",
    title: "Nurturing ‘cierre ético’ — 6 mensajes finales para convertir sin presionar",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Secuencia final antes de cerrar la venta: claridad, para quién es/no, y urgencia real.",
    prompt: `Rellena:
- Oferta:
- Fecha límite real (si existe):
- Bonus:
- Garantía (si existe):
- Canal:

Tarea:
Crea 6 mensajes:
1) Recordatorio de valor (recap)
2) “para quién sí / no”
3) Caso/ejemplo (proceso y aprendizaje)
4) Objeción principal (respuesta)
5) Checklist de decisión (auto-calificación)
6) Última llamada (urgencia ética) + breakup opcional
Incluye 2 versiones: cálida y directa.`,
    thumbnail: "",
  },
  {
    id: "mnut-050",
    title: "Sistema completo de nurturing (Playbook) — reglas, segmentos, contenido, triggers, métricas",
    area: "Marketing & ventas",
    category: "Nurturing",
    summary:
      "Playbook integral para implementar nurturing: arquitectura, automatizaciones, calendario y KPIs.",
    prompt: `Rellena:
- Oferta:
- ICP:
- Canales (email/whatsapp/dm):
- Activos (lead magnets, casos, webinars):
- Restricciones (frecuencia, compliance):
- Métrica norte (NSM): leads, ventas, calls, etc.

Tarea:
Construye un playbook listo para implementar que contenga:
1) Arquitectura de segmentos (3–5 segmentos) con criterios concretos.
2) Mapa de secuencias (qué secuencia ve cada segmento).
3) Triggers (mínimo 10) y qué automatización dispara cada trigger.
4) Librería de contenidos (mínimo 25 ideas) clasificadas por:
   - educación
   - prueba
   - objeciones
   - oferta
5) Reglas de frecuencia y caps anti-fatiga.
6) Scoreboard (12 métricas max) con umbrales.
7) Rituales operativos: qué revisar diario/semanal/mensual.
8) Checklist de implementación (herramientas, etiquetas, UTMs, tracking).
Formato: secciones con headings + listas accionables.`,
    thumbnail: "",
  },
];
