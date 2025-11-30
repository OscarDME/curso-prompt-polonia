// src/lib/prompts/text/marketing-whatsapp-email.js

export const textPromptsMarketingWhatsappEmail = [
  {
    id: "mwe-001",
    title:
      "Secuencia WhatsApp (D0–D3) para leads fríos: calentar sin vender + microcompromisos",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Secuencia completa de WhatsApp para convertir leads fríos en conversaciones reales sin presión.",
    prompt: `Contexto:
- Nicho/industria: [ ]
- Oferta: [ ]
- Lead magnet u origen del lead: [anuncio / DM / webinar / referral / contenido]
- Nivel de conciencia del lead: [no sabe / problema consciente / solución consciente / producto consciente]
- Tono de marca: [cercano/serio/divertido/premium]
- País/modismos: [ ]
- Objeción típica: [precio/tiempo/confianza/“no lo necesito”]

Crea una secuencia de WhatsApp de 4 días (D0, D1, D2, D3) con:
1) Objetivo por día (microobjetivo medible).
2) Mensajes (2–4 por día) con longitud realista:
   - apertura y permiso (“¿te viene bien?”)
   - pregunta de diagnóstico corta
   - mini insight o micro-valor personalizado (sin link al principio)
   - CTA mínimo (responder con 1 palabra o número)
3) Variantes por estilo:
   - tono ultra cercano
   - tono profesional
4) Reglas anti-spam:
   - evitar links en los 2 primeros mensajes
   - no más de 2 preguntas seguidas
   - usar “break lines” para mejor lectura
5) Respuestas preparadas (macros) para 8 escenarios:
   - “¿cuánto cuesta?”
   - “no tengo tiempo”
   - “mándame info”
   - “luego”
   - “no me interesa”
   - visto/sin respuesta
   - “¿quién eres?”
   - “me interesa, ¿qué sigue?”
6) Cierre del día 3 con transición suave a llamada/checkout SOLO si hay interés.`,
    thumbnail: "",
  },
  {
    id: "mwe-002",
    title:
      "Secuencia WhatsApp de cierre (6 mensajes) para lead caliente: diagnóstico, propuesta y cierre limpio",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Guion de WhatsApp para cerrar ventas con preguntas clave, propuesta y CTA sin incomodar.",
    prompt: `Datos:
- Producto/servicio: [ ]
- Precio y opciones: [ ]
- Garantía: [ ]
- Tipo de cliente ideal: [ ]
- Resultado prometido (realista): [ ]
- Tiempo de implementación: [ ]
- Objeción #1: [ ]
- Objeción #2: [ ]

Escribe un guion de WhatsApp en 6 mensajes (cada uno con 1 propósito):
1) Apertura + confirmación de contexto (“para ubicarme…”)
2) Preguntas de diagnóstico (en un solo mensaje, formato numerado)
3) Reflejo (mirror) de lo que dijo + “si entendí bien…”
4) Propuesta: 2 opciones (A/B), con bullets, sin texto largo
5) Manejo de objeción anticipada (elige la más común)
6) Cierre con CTA claro + alternativa (si no es momento: agendar / lista de espera)

Incluye:
- 3 variantes del mensaje #4 (propuesta) por tono: cercano, premium, directo
- 5 cierres diferentes (suave, medio, fuerte, consultivo, “última pregunta”)
- 1 versión para venta B2B y 1 para B2C.`,
    thumbnail: "",
  },
  {
    id: "mwe-003",
    title:
      "Email de bienvenida (post-lead magnet): autoridad + valor inmediato + ‘reply trigger’",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email 1 de onboarding: entrega, expectativa, credibilidad y disparador de respuesta.",
    prompt: `Contexto:
- Lead magnet: [ ]
- Promesa principal: [ ]
- Perfil del lector: [ ]
- Oferta final: [ ]
- Tono: [ ]

Redacta un email de bienvenida que incluya:
1) 8 asuntos (4 curiosidad, 2 directos, 2 ultra cortos).
2) Primer párrafo con “pattern interrupt” (1–2 líneas).
3) Entrega del recurso (usa placeholders si hay links).
4) Mini historia de autoridad (5–7 líneas) sin sonar presumido.
5) 3 aprendizajes accionables relacionados al recurso (bullets con ejemplos).
6) “Reply trigger”: 1 pregunta que aumente replies (con 3 opciones de respuesta tipo A/B/C).
7) CTA suave al siguiente paso (leer / ver video / responder / agendar), sin vender duro.
8) P.S. con recordatorio y refuerzo emocional.

Crea 2 versiones:
- Versión corta (<= 180 palabras)
- Versión larga (450–650 palabras).`,
    thumbnail: "",
  },
  {
    id: "mwe-004",
    title:
      "Secuencia Email (5 correos) de nurturing: problema → insight → caso → oferta suave → cierre",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Secuencia completa para convertir leads en compradores sin quemarlos.",
    prompt: `Datos:
- Nicho: [ ]
- Dolor principal: [ ]
- Deseo principal: [ ]
- Mecanismo único (tu enfoque): [ ]
- Caso real o ejemplo: [si no hay, usa un ejemplo hipotético sin afirmar que es real]
- Oferta: [ ]
- CTA final: [agendar/checkout/DM]

Crea una secuencia de 5 emails con:
Email 1: “El error más común” (educación + reframe)
Email 2: “La verdad incómoda” (mito vs realidad)
Email 3: “Mini caso / historia” (antes-después con detalles)
Email 4: “Cómo se ve el proceso” (framework en pasos)
Email 5: “Invitación” (oferta suave + urgencia ética)

Para cada email entrega:
- 10 asuntos (mezcla de estilos)
- preheader
- cuerpo completo (350–700 palabras)
- CTA principal + CTA alterno (para tímidos)
- 2 P.S. distintos (uno lógico, uno emocional)

Extra:
- agrega 1 versión “modo WhatsApp” (resumen en 3 mensajes) de cada email.`,
    thumbnail: "",
  },
  {
    id: "mwe-005",
    title:
      "WhatsApp: reactivación de leads ‘visto y no respondió’ (7 días) con elegancia",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Secuencia para reactivar chats muertos sin insistir: humor leve, valor y salida digna.",
    prompt: `Contexto:
- Qué se habló antes: [ ]
- Oferta: [ ]
- Objeción probable: [ ]
- Tono: [cercano/premium]

Crea una secuencia de reactivación en WhatsApp para 7 días (1 mensaje por día) con:
1) Mensajes cortos (1–3 líneas), naturales, sin presión.
2) Estructura por día:
   - Día 1: check-in con permiso
   - Día 2: micro-valor (tip)
   - Día 3: pregunta de prioridad (A/B)
   - Día 4: prueba social mini
   - Día 5: oferta de ayuda (diagnóstico)
   - Día 6: cierre elegante (“¿lo dejo aquí?”)
   - Día 7: último mensaje con puerta abierta
3) 3 variantes por día (neutro, humor suave, premium).
4) Respuestas preparadas si:
   - responde “sí”
   - responde “no”
   - responde “¿precio?”
   - no responde`,
    thumbnail: "",
  },
  {
    id: "mwe-006",
    title:
      "Email para ‘mándame info’ (one-shot): brochure textual que convierte + CTA claro",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email único para cuando piden info: resume oferta, beneficios, proceso, FAQs y cierre.",
    prompt: `Datos:
- Oferta: [ ]
- Para quién NO es: [ ]
- Beneficios principales: [ ]
- Proceso (pasos): [ ]
- Precio: [ ]
- Garantía/condiciones: [ ]
- Objeciones típicas: [ ]

Escribe un email “mándame info” que incluya:
1) 6 asuntos.
2) Apertura directa: “Te mando la info completa aquí…”
3) Qué es + para quién es (y para quién no).
4) Beneficios (6 bullets) con ejemplos concretos.
5) Proceso en 5 pasos (qué pasa, qué entregas, qué recibes).
6) Prueba social (2 mini ejemplos: si no hay, redacta como ‘lo que suele pasar’ sin afirmar que es real).
7) FAQ (8 preguntas) incluyendo precio, tiempos, soporte, resultados.
8) CTA principal + CTA alterno.
9) Cierre con: “si me respondes con X, te recomiendo la opción ideal”.

Incluye versión corta (<= 200 palabras) sin perder la esencia.`,
    thumbnail: "",
  },
  {
    id: "mwe-007",
    title:
      "WhatsApp: manejo de objeción ‘está caro’ (sin bajar precio): 9 respuestas por ángulo",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Respuestas listas para precio: valor, ROI, riesgo, comparación, opciones y cierre.",
    prompt: `Datos:
- Precio: [ ]
- Alternativas baratas (competencia/hacerlo solo): [ ]
- Resultado que entrega: [ ]
- Tiempo para lograr resultado: [ ]
- Garantía: [ ]
- Tipo cliente: [B2B/B2C]

Genera 9 respuestas de WhatsApp para “está caro” (2–4 líneas cada una), usando estos ángulos:
1) ROI con ejemplo numérico
2) Comparación vs costo de no hacerlo
3) Desglose de lo que incluye (valor percibido)
4) Proceso y expertise (por qué no es comodity)
5) Garantía / riesgo reducido
6) Opciones de pago / plan escalonado
7) Priorización: “si tu prioridad hoy es X…”
8) Pregunta diagnóstica que reencuadra (“¿qué te gustaría lograr exactamente?”)
9) Cierre consultivo (decisión en 10 segundos)

Incluye:
- 3 respuestas para B2B
- 3 respuestas para B2C
- 3 respuestas tono premium.`,
    thumbnail: "",
  },
  {
    id: "mwe-008",
    title:
      "Email de recuperación de carrito (3 correos): empatía + objeción + prueba + urgencia ética",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Secuencia para recuperar ventas perdidas sin agresividad.",
    prompt: `Datos:
- Producto: [ ]
- Precio: [ ]
- Beneficio principal: [ ]
- Objeción dominante: [ ]
- Urgencia real: [cierre / cupos / bonus]
- Incentivo (si hay): [ ]

Crea 3 emails:
Email 1 (1–2h): “¿Te atoraste?” (ayuda + soporte)
Email 2 (24h): objeción + prueba social
Email 3 (48–72h): último aviso + urgencia ética

Para cada email:
- 8 asuntos + preheader
- cuerpo completo (250–500 palabras)
- CTA principal
- 2 P.S. distintos

Además crea 1 versión en WhatsApp (2 mensajes) por email.`,
    thumbnail: "",
  },
  {
    id: "mwe-009",
    title:
      "WhatsApp: secuencia post-compra (D0–D7) para reducir reembolsos y aumentar activación",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Onboarding por WhatsApp: expectativas, primera victoria, hábitos y soporte.",
    prompt: `Producto: [ ]
Primera victoria (quick win): [ ]
Motivos típicos de reembolso: [ ]
Soporte: [canal]

Crea una secuencia D0 a D7 con 1 mensaje por día:
- D0: bienvenida + qué esperar + primer paso
- D1: quick win guiado
- D2: error común y cómo evitarlo
- D3: checklist de progreso (responde 1–3)
- D4: historia/caso mini + lección
- D5: hábito (rutina sugerida)
- D6: oferta de ayuda (diagnóstico)
- D7: invitación a referir/reseña (suave)

Incluye:
- 2 variantes por día (cercano y premium)
- 1 macro de respuesta si el usuario está perdido
- 1 macro si el usuario está avanzando rápido`,
    thumbnail: "",
  },
  {
    id: "mwe-010",
    title:
      "Email de lanzamiento ‘open cart’ (día 1): historia + mecanismo + oferta clara + CTA",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email principal de lanzamiento: vende con narrativa + claridad (sin humo).",
    prompt: `Datos:
- Oferta: [ ]
- Precio: [ ]
- Bonus: [ ]
- Fecha de cierre: [ ]
- Audiencia: [ ]
- Gran dolor: [ ]
- Gran deseo: [ ]
- Mecanismo único: [ ]

Escribe un email de open cart (600–900 palabras) con:
1) 12 asuntos (mezcla curiosidad, directo, beneficio, historia).
2) Hook con historia realista (7–10 líneas).
3) Reframe: por qué lo intentado no funciona.
4) Presenta el mecanismo con analogía clara.
5) Qué incluye (bullets: módulos/entregables).
6) Para quién es / no es.
7) Bonus + por qué existe.
8) CTA fuerte y claro (link placeholder).
9) FAQ (6) enfocada en objeciones.
10) Cierre emocional + P.S. con urgencia ética.`,
    thumbnail: "",
  },

  {
    id: "mwe-011",
    title:
      "WhatsApp: mini-lanzamiento (3 días) para audiencia pequeña: valor → caso → oferta",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Lanzamiento por WhatsApp: 3 días, 2 mensajes por día, sin quedar como vendedor.",
    prompt: `Datos:
- Oferta: [ ]
- Precio: [ ]
- Objeción #1: [ ]
- Caso o historia: [ ]
- Tono: [ ]

Crea un mini-lanzamiento por WhatsApp:
Día 1: 2 mensajes de valor (insight + tip accionable)
Día 2: 2 mensajes (historia/caso + lección)
Día 3: 2 mensajes (oferta + CTA)

Cada mensaje:
- 2–5 líneas
- 1 idea principal
- 1 pregunta o micro CTA

Incluye:
- 3 variaciones por día (cercano, profesional, humor suave)
- Respuestas preparadas si preguntan precio, garantía, y “no tengo tiempo”.`,
    thumbnail: "",
  },
  {
    id: "mwe-012",
    title:
      "Email ‘Last Call’ (cierre carrito): tensión + claridad + recap + CTA (sin manipulación)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email de cierre: repaso, objeciones, urgencia real y CTA final.",
    prompt: `Datos:
- Oferta: [ ]
- Qué se pierde al cerrar: [bonus/cupos/precio]
- Objeciones principales: [ ]
- Tono: [directo/premium]

Escribe un email de cierre (450–750 palabras) con:
1) 10 asuntos (incluye 2 ultra cortos).
2) Apertura “último aviso” sin sonar agresivo.
3) Recap:
   - qué es
   - para quién
   - transformación
4) 3 objeciones respondidas con ejemplos.
5) CTA final (link placeholder) + alternativa (responder “PREGUNTA”).
6) P.S. doble:
   - P.S. lógico
   - P.S. emocional`,
    thumbnail: "",
  },
  {
    id: "mwe-013",
    title:
      "WhatsApp: guion de calificación (lead qualification) en 7 preguntas + scoring",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Califica leads en WhatsApp sin interrogatorio: preguntas cortas + scoring y siguiente paso.",
    prompt: `Oferta: [ ]
Cliente ideal: [ ]
Precio: [ ]
Resultado: [ ]

Crea un guion de WhatsApp con:
1) Intro con permiso (1–2 líneas).
2) 7 preguntas (una por mensaje) para validar:
   - urgencia
   - presupuesto
   - autoridad de decisión
   - problema real
   - capacidad de implementación
3) Sistema de scoring (0–20) con reglas claras.
4) Resultado según score:
   - 0–7: nutrir
   - 8–14: agendar
   - 15–20: cerrar
5) Mensajes de transición para cada resultado (3 variantes).`,
    thumbnail: "",
  },
  {
    id: "mwe-014",
    title:
      "Email ‘case study’ de venta: estructura narrativa con datos, fracasos y aprendizajes",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Caso de estudio que vende: historia, métricas, obstáculos, método y CTA.",
    prompt: `Caso:
- Tipo de cliente: [ ]
- Situación inicial: [ ]
- Obstáculo: [ ]
- Proceso: [ ]
- Resultado: [métricas]
- Oferta a la que lleva: [ ]

Escribe un email case study (650–1,000 palabras) con:
1) 10 asuntos.
2) Contexto y lo que estaba intentando (fallos realistas).
3) Diagnóstico del problema raíz.
4) Proceso en 5 etapas (con detalles).
5) Resultado con métricas (y cualitativo).
6) Lecciones (5 bullets).
7) CTA suave a la oferta + alternativa para responder “CASO”.
Incluye versión corta (300 palabras) para audiencias frías.`,
    thumbnail: "",
  },
  {
    id: "mwe-015",
    title:
      "WhatsApp: guion para vender por notas de voz (3 audios): estructura y texto exacto",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Estructura de 3 notas de voz cortas que cierran ventas sin sonar agresivo.",
    prompt: `Oferta: [ ]
Tono: [ ]
Duración por audio: [20–35s]
Objeción principal: [ ]

Crea:
1) Guion de Audio 1 (contexto + diagnóstico) con texto exacto.
2) Guion de Audio 2 (solución + por qué funciona) con analogía.
3) Guion de Audio 3 (propuesta + CTA) con cierre consultivo.

Incluye:
- versión alternativa en texto (por si no usan audios)
- 5 “frases puente” para responder sin improvisar
- 3 cierres distintos (suave, directo, premium).`,
    thumbnail: "",
  },

  {
    id: "mwe-016",
    title:
      "Email segmentado por objeción (tiempo / dinero / confianza): 3 emails distintos, misma oferta",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Misma oferta, 3 ángulos: objeción dominante según segmento.",
    prompt: `Oferta: [ ]
Precio: [ ]
Garantía: [ ]
Pruebas: [testimonios/portafolio]
Tono: [ ]

Crea 3 emails (400–650 palabras cada uno):
A) Segmento TIEMPO: “cómo hacerlo sin tiempo”
B) Segmento DINERO: “cómo recuperar inversión / evitar costo oculto”
C) Segmento CONFIANZA: “por qué funciona + prueba + transparencia”

Para cada email:
- 10 asuntos + preheader
- hook distinto
- 5 bullets de beneficio alineados
- CTA principal + CTA alterno
- 2 P.S. distintos`,
    thumbnail: "",
  },
  {
    id: "mwe-017",
    title:
      "WhatsApp: script para pedir referrals (sin vergüenza) + mensaje reenviable listo",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Pide recomendación después de buen resultado con copy reenviable listo.",
    prompt: `Resultado logrado por el cliente: [ ]
A quién quieres referidos: [perfil]
Incentivo: [si aplica]
Tono: [ ]

Crea:
1) 3 mensajes de WhatsApp para pedir referido (2–5 líneas).
2) Mensaje reenviable (copy listo) en 3 tonos:
   - casual
   - profesional
   - premium
3) Respuestas para:
   - “sí, tengo a alguien”
   - “no conozco a nadie”
   - “luego”
4) Variante para pedir reseña/testimonio también (suave).`,
    thumbnail: "",
  },
  {
    id: "mwe-018",
    title:
      "Email de upsell post-compra: conecta con progreso actual + next level + oferta limitada",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Upsell que no molesta: basado en progreso y próxima etapa, con urgencia ética.",
    prompt: `Producto inicial: [ ]
Upsell: [ ]
Precio upsell: [ ]
Progreso típico a 7 días: [ ]
Urgencia real: [bonus/fecha]

Escribe un email (450–750 palabras) con:
1) 10 asuntos.
2) Felicitación por progreso (específico).
3) Próximo cuello de botella que viene.
4) Presenta upsell como solución + por qué ahora.
5) Qué incluye (bullets) + para quién NO es.
6) Oferta/bonus con urgencia real.
7) CTA + alternativa “responde con UPSELL”.
Incluye versión corta (<= 200 palabras).`,
    thumbnail: "",
  },
  {
    id: "mwe-019",
    title:
      "WhatsApp: seguimiento post-cotización (B2B) — 5 mensajes con valor + cierre consultivo",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Follow-up B2B después de enviar propuesta: valor, claridad y siguiente paso.",
    prompt: `Servicio: [ ]
Precio: [ ]
Decisor: [rol]
Tiempo típico de decisión: [ ]
Objeción común: [ ]

Crea 5 mensajes (uno cada 2–3 días) con:
1) Recordatorio breve + pregunta única
2) Aclaración de ROI (mini cálculo)
3) Caso similar (mini historia)
4) Implementación: cómo lo hacemos fácil
5) Cierre: “¿cerramos o lo dejamos aquí?” con elegancia

Incluye:
- 2 variantes por mensaje (cercano/profesional)
- 1 versión por email (si el cliente prefiere email).`,
    thumbnail: "",
  },
  {
    id: "mwe-020",
    title:
      "Email de propuesta comercial (B2B): objetivos, alcance, entregables, timeline, inversión y riesgos",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Propuesta por email: objetivos, alcance, entregables, timeline, inversión y próximos pasos.",
    prompt: `Cliente (industria): [ ]
Objetivo (KPI): [ ]
Alcance: [ ]
Timeline: [ ]
Inversión: [ ]
Riesgos/dependencias del cliente: [ ]

Escribe un email-propuesta B2B con:
1) 6 asuntos
2) Resumen ejecutivo (máx 8 bullets)
3) Objetivos medibles (3–5)
4) Alcance y entregables (lista detallada)
5) Plan por semanas (timeline)
6) Roles y responsabilidades (Nosotros vs Cliente)
7) Inversión + condiciones (claras)
8) Riesgos y cómo mitigarlos (3–6)
9) Próximo paso: agendar call / aprobación por reply

Incluye un bloque final “TL;DR” de 5 bullets.`,
    thumbnail: "",
  },

  {
    id: "mwe-021",
    title:
      "WhatsApp: convertir comentarios/DM en lead: guion para pasar a WhatsApp sin fricción",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "De IG/TikTok DM a WhatsApp: permiso, contexto, valor y transición.",
    prompt: `Plataforma origen: [IG/TikTok]
Tema del comentario: [ ]
Oferta: [ ]
Tono: [ ]

Crea guion de 5 mensajes para:
1) responder DM con valor y pregunta
2) pedir permiso para enviar detalle
3) ofrecer “te lo mando por WhatsApp para que no se pierda”
4) pedir número con frase natural
5) primer mensaje en WhatsApp (calienta + pregunta)

Incluye variantes:
- persona tímida
- persona agresiva
- persona solo curiosea`,
    thumbnail: "",
  },
  {
    id: "mwe-022",
    title:
      "Email ‘pregunta única’ que dispara replies: investigación de mercado sin que parezca encuesta",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email corto para entender dolores y convertir en conversación 1:1.",
    prompt: `Nicho: [ ]
Tema: [ ]
Tono: [ ]

Escribe un email (<= 180 palabras) con:
1) 8 asuntos
2) Contexto breve: por qué preguntas ahora
3) 1 pregunta potente (no doble) que revele dolor real
4) 3 opciones de respuesta A/B/C para facilitar
5) Cierre humano

Incluye 2 variantes: cercano y profesional.`,
    thumbnail: "",
  },
  {
    id: "mwe-023",
    title:
      "WhatsApp: guion de ‘diagnóstico gratuito’ (10 min) que filtra curiosos y atrae serios",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Ofrece diagnóstico sin regalar consultoría: preguntas, límites y CTA a agenda/checkout.",
    prompt: `Oferta: [ ]
Qué incluye diagnóstico: [ ]
Qué NO incluye: [ ]
Tono: [ ]

Crea un guion de WhatsApp con:
1) Mensaje de invitación (3 variantes).
2) 5 preguntas rápidas para filtrar (en 5 mensajes).
3) Respuestas según perfil:
   - curioso sin presupuesto
   - interesado serio
   - urgencia alta
4) Cierre:
   - si califica → agenda/checkout
   - si no califica → recurso gratuito + salida elegante
Incluye copy para enviar link de agenda sin sonar vendedor.`,
    thumbnail: "",
  },
  {
    id: "mwe-024",
    title:
      "Email ‘objeción tiempo’ para cursos/servicios: plan de 20 minutos al día + estructura semanal",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Rompe la objeción ‘no tengo tiempo’ con plan realista y ejemplos.",
    prompt: `Oferta: [ ]
Tiempo mínimo viable: [ ]
Transformación: [ ]
Perfil lector: [trabajo, familia, etc.]
Tono: [ ]

Escribe un email (500–850 palabras) con:
1) 10 asuntos
2) Historia breve de alguien sin tiempo
3) Plan de implementación:
   - 20 min/día (qué hacer)
   - alternativa 3 días/semana
4) Cómo medir progreso (3 métricas)
5) Respuesta a 3 objeciones derivadas
6) CTA suave + alternativa “responde TIEMPO”.`,
    thumbnail: "",
  },
  {
    id: "mwe-025",
    title:
      "WhatsApp: secuencia para vender low-ticket (≤ $49) sin llamada (8 mensajes)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Cierre directo para low-ticket: prueba, beneficio, urgencia y CTA a checkout.",
    prompt: `Producto: [ ]
Precio: [ ]
Resultado rápido: [ ]
Urgencia real: [bonus/stock]
Tono: [ ]

Crea 8 mensajes de WhatsApp:
1) Permiso + contexto
2) Diagnóstico (1 pregunta)
3) Insight y reframe
4) Presentación del producto (1 párrafo)
5) Beneficios en bullets
6) Prueba social mini
7) Urgencia ética
8) CTA a link (placeholder) + alternativa

Incluye:
- 3 respuestas para “¿es seguro?”
- 3 respuestas para “¿y si no me sirve?”`,
    thumbnail: "",
  },

  {
    id: "mwe-026",
    title:
      "Email ‘anti-humo’: vende sin prometer milagros (transparencia + restricciones + plan)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email que construye confianza: qué sí, qué no, y cómo se logra con trabajo real.",
    prompt: `Oferta: [ ]
Resultados realistas: [ ]
Limitaciones: [ ]
Para quién no funciona: [ ]
Tono: [ ]

Escribe un email (550–900 palabras) con:
1) 10 asuntos
2) Declaración de honestidad (hook)
3) Qué NO prometemos (lista)
4) Qué SÍ pasa si haces el proceso (con ejemplos)
5) Requisitos del cliente (3–7)
6) Cómo apoyamos (soporte, comunidad, etc.)
7) CTA a aplicar / agendar / comprar
8) P.S. con “si dudas, responde con tu contexto en 3 líneas”.`,
    thumbnail: "",
  },
  {
    id: "mwe-027",
    title:
      "WhatsApp: de “me interesa” a “pagado” (sin presionar) — desbloquear fricción y cerrar",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Cuando ya dijo que sí pero no paga: identifica fricción y cierra con respeto.",
    prompt: `Oferta: [ ]
Precio: [ ]
Fricción típica: [link/tiempo/dudas]
Tono: [ ]

Crea guion en 5 pasos:
1) Check-in breve
2) Pregunta para detectar fricción (A/B/C)
3) Resolver fricción (3 plantillas según respuesta)
4) Reconfirmar resultado (mirror)
5) CTA final con dos opciones:
   - pagar ahora (link placeholder)
   - agendar 10 min (si duda)

Incluye 10 respuestas rápidas para objeciones comunes.`,
    thumbnail: "",
  },
  {
    id: "mwe-028",
    title:
      "Email ‘lista de espera’: convierte ‘no está abierto’ en deseo (valor + prioridad + aviso)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email para lista de espera: expectativa, autoridad y personas comprometidas.",
    prompt: `Oferta cerrada: [ ]
Razón cierre: [cupos/temporada]
Beneficio: [ ]
Tono: [ ]

Escribe un email (400–650 palabras) con:
1) 8 asuntos
2) Por qué está cerrado (sin drama)
3) Qué recibirá la lista de espera (3–5 bullets)
4) Cómo se prioriza (regla clara)
5) Reply trigger: responder con su objetivo y obstáculo
6) CTA: unirse a lista (placeholder).`,
    thumbnail: "",
  },
  {
    id: "mwe-029",
    title:
      "WhatsApp: mensaje para enviar link de compra sin perder momentum (ancla de valor + confirmación)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Envía el link con contexto: valor, cómo saber si es para él y apoyo si se atora.",
    prompt: `Oferta: [ ]
Precio: [ ]
Link: [placeholder]
Tono: [ ]

Crea 6 variantes del mensaje “aquí va el link”:
- 2 ultracortas
- 2 con ancla de valor (beneficio + recordatorio)
- 2 premium (cuidado + soporte)

Incluye una línea final opcional:
- “si te atoras, dime en qué paso y lo resolvemos”.`,
    thumbnail: "",
  },
  {
    id: "mwe-030",
    title:
      "Email de ‘rescate’ para no compradores post-lanzamiento: valor + encuesta + oferta mínima",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Después del cierre: recupera aprendiendo y, si aplica, ofrece alternativa sin presión.",
    prompt: `Oferta que cerró: [ ]
Alternativa low-tier (si existe): [ ]
Razones típicas de no compra: [ ]
Tono: [ ]

Escribe un email (450–750 palabras) con:
1) 10 asuntos
2) Agradecimiento + cierre real
3) 1 gran aprendizaje para el lector (valor)
4) Mini encuesta (3 preguntas, 1 línea cada una)
5) Oferta mínima opcional (si aplica) sin presión
6) CTA principal: responder encuesta`,
    thumbnail: "",
  },

  {
    id: "mwe-031",
    title:
      "WhatsApp: vender con historia personal (story selling) en 6 mensajes (antes → quiebre → descubrimiento)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Story-selling por WhatsApp que se siente humano: antes, quiebre, búsqueda, descubrimiento, resultado, invitación.",
    prompt: `Tema de historia: [ ]
Oferta: [ ]
Resultado: [ ]
Tono: [ ]

Crea 6 mensajes:
1) Antes (dolor)
2) Quiebre (momento)
3) Búsqueda (intentos fallidos)
4) Descubrimiento (mecanismo)
5) Resultado (evidencia)
6) Invitación (CTA suave)

Cada uno con 2–4 líneas.

Incluye 3 versiones: cercana, profesional, premium.`,
    thumbnail: "",
  },
  {
    id: "mwe-032",
    title:
      "Email ‘comparación’: tu enfoque vs alternativa (sin atacar competencia) + decisión guiada",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Comparativo elegante: criterios, trade-offs y recomendación según perfil.",
    prompt: `Oferta: [ ]
Alternativas: [hacerlo solo/otro servicio]
Criterios: [tiempo/dinero/soporte/control]
Tono: [ ]

Escribe un email (500–850 palabras) con:
1) 10 asuntos
2) Marco de decisión: 5 criterios con explicación
3) “Si tú eres X, elige Y” (4 perfiles)
4) Beneficios de tu enfoque sin atacar al otro
5) CTA + alternativa responder “DUDO”.`,
    thumbnail: "",
  },
  {
    id: "mwe-033",
    title:
      "WhatsApp: agendar llamada (sin sonar ‘vendehumos’) + confirmación + recordatorios + no-show",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Agendar llamadas: pre-frames, compromisos, recordatorios y manejo de no-shows.",
    prompt: `Oferta: [ ]
Duración llamada: [15/30]
Objetivo llamada: [diagnóstico/cierre]
Link agenda: [placeholder]
Tono: [ ]

Crea:
1) Mensaje para invitar a llamada (3 variantes)
2) Mensaje de confirmación (incluye qué preparar)
3) Recordatorio 24h y 1h antes (2 variantes cada uno)
4) Mensaje si no se presenta (no-show) sin culpar
5) Mensaje post-llamada para cerrar o dar siguiente paso`,
    thumbnail: "",
  },
  {
    id: "mwe-034",
    title:
      "Email ‘objeción confianza’: transparencia extrema (qué incluye, qué no, riesgos, ejemplos)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email de confianza: reduce escepticismo con detalles, límites y claridad.",
    prompt: `Oferta: [ ]
Duración: [ ]
Soporte: [ ]
Limitaciones: [ ]
Prueba social: [ ]
Tono: [ ]

Escribe un email (650–1,000 palabras) con:
1) 12 asuntos
2) Qué es / qué no es (lista)
3) Qué incluye (detallado)
4) Resultados típicos y condiciones
5) Riesgos y mitigación
6) 2 ejemplos (mini casos hipotéticos si no hay reales)
7) CTA + alternativa “responde con tu contexto y te digo si aplica”.`,
    thumbnail: "",
  },
  {
    id: "mwe-035",
    title:
      "WhatsApp: ‘cierre por decisión’ — guía la decisión con 5 preguntas (sin presión)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Cierre consultivo: guía la decisión con preguntas y salida digna.",
    prompt: `Oferta: [ ]
Precio: [ ]
Tono: [ ]

Crea un guion de WhatsApp que:
1) Reconfirme objetivo del lead
2) Haga 5 preguntas (una por mensaje) sobre urgencia, prioridad, acción, soporte y presupuesto
3) Dé una recomendación honesta (comprar ahora / esperar / alternativa)
4) Cierre con CTA único según recomendación

Incluye 3 variantes de frases para “no es el momento” sin romper relación.`,
    thumbnail: "",
  },

  {
    id: "mwe-036",
    title:
      "Email ‘secuencia de objeciones’ (3 correos): precio → tiempo → confianza",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Tridente de objeciones: 3 correos consecutivos, cada uno golpea una objeción fuerte.",
    prompt: `Oferta: [ ]
Precio: [ ]
Mecanismo: [ ]
Prueba social: [ ]
Tono: [ ]

Crea 3 emails (450–750 palabras):
Email A: Precio (ROI, costo de no actuar, opciones)
Email B: Tiempo (plan mínimo viable, ritmo)
Email C: Confianza (transparencia, prueba, riesgos)

Para cada email:
- 10 asuntos + preheader
- 1 historia breve (realista)
- 5 bullets de valor
- CTA + alternativa reply-trigger`,
    thumbnail: "",
  },
  {
    id: "mwe-037",
    title:
      "WhatsApp: nurture express en 3 mensajes (cuando el lead dice ‘mándame algo’)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Mini nurturing: valor + diagnóstico + CTA a siguiente paso en 3 mensajes.",
    prompt: `Oferta: [ ]
Lead dice: “mándame algo”
Tono: [ ]
Link (si aplica): [placeholder]

Crea 3 mensajes:
1) 1 insight + pregunta corta
2) Micro framework (3 pasos) + ejemplo
3) CTA suave (agendar / ver info / responder)

Incluye 5 variantes por tono: cercano, profesional, humor suave, premium, ultra corto.`,
    thumbnail: "",
  },
  {
    id: "mwe-038",
    title:
      "Email con ‘framework completo’ (sin adjunto): enseña el método y vende al final",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email educativo que entrega framework completo y conduce a la oferta.",
    prompt: `Tema del framework: [ ]
Oferta relacionada: [ ]
Tono: [ ]

Escribe un email (700–1,200 palabras) con:
1) 12 asuntos
2) Explicación del framework (5–7 pasos) con:
   - objetivo de cada paso
   - ejemplo aplicado
   - error común
3) Cómo usarlo hoy (checklist)
4) CTA a la oferta como “atajo” o “acompañamiento”, sin presión
5) P.S. con pregunta para replies`,
    thumbnail: "",
  },
  {
    id: "mwe-039",
    title:
      "WhatsApp: vender servicio high-ticket (consultivo) — diagnóstico → propuesta → precio al final",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Secuencia consultiva para high-ticket: diagnóstico, valor, propuesta y precio al final.",
    prompt: `Servicio: [ ]
Rango precio: [ ]
Cliente ideal: [ ]
Resultado: [ ]
Tono: [ ]

Crea una secuencia de WhatsApp en 9 mensajes:
1) Contexto y permiso
2) Diagnóstico 1
3) Diagnóstico 2
4) Diagnóstico 3
5) Resumen espejo (lo que entendí)
6) Lo que suele funcionar (mecanismo)
7) Oferta en 2 opciones (sin precio)
8) Precio + qué incluye + condiciones
9) CTA a llamada / aplicación

Incluye:
- frases para introducir precio sin tensión
- 6 manejos de objeción (precio, tiempo, confianza, “lo consulto”, “luego”, “mándame info”).`,
    thumbnail: "",
  },
  {
    id: "mwe-040",
    title:
      "Email ‘aplicación’ para high-ticket: filtra y aumenta compromiso (criterios + preguntas + CTA)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email que invita a aplicar: criterios, expectativas, preguntas y CTA.",
    prompt: `Servicio: [ ]
Resultados: [ ]
Requisitos: [ ]
Criterios de aceptación: [ ]
Tono: [premium]

Escribe un email (500–900 palabras) con:
1) 10 asuntos
2) Por qué aplicamos (calidad, resultados)
3) Para quién es / no es (detallado)
4) Qué incluye y cómo se trabaja
5) Preguntas de aplicación (8–12) bien diseñadas
6) CTA a formulario (placeholder)
7) Cierre premium + P.S. para dudas`,
    thumbnail: "",
  },

  {
    id: "mwe-041",
    title:
      "WhatsApp: ciclo completo para webinar (invitar + recordar + follow-up por asistencia)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Todo el ciclo: invitar, recordar y convertir post-webinar por WhatsApp.",
    prompt: `Webinar:
- Tema: [ ]
- Fecha/hora: [ ]
- Beneficio: [ ]
- Oferta post-webinar: [ ]
- Link registro: [placeholder]
- Link replay: [placeholder]
- Tono: [ ]

Crea:
1) Invitación (3 variantes)
2) Recordatorio 24h, 2h, 15min (2 variantes cada uno)
3) Mensaje “ya estamos en vivo” (1)
4) Follow-up post-webinar:
   - asistentes (3 mensajes)
   - no asistentes (3 mensajes)

Cada mensaje:
- 2–6 líneas
- 1 CTA único (registrarse/asistir/replay/oferta)`,
    thumbnail: "",
  },
  {
    id: "mwe-042",
    title:
      "Email de invitación a webinar (alta conversión): promesa + bullets + autoridad + CTA",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email para llenar webinar: claro, atractivo y sin relleno.",
    prompt: `Webinar:
- Tema: [ ]
- Duración: [ ]
- Para quién: [ ]
- Resultado: [ ]
- Host/autoridad: [ ]
- Link registro: [placeholder]
- Tono: [ ]

Escribe un email (450–750 palabras) con:
1) 12 asuntos + preheader
2) Hook con dolor + promesa
3) Qué aprenderán (8 bullets) con resultados concretos
4) Para quién es/no es
5) CTA (placeholder)
6) Mini bio (autoridad) + cierre

Incluye versión corta (<= 180 palabras).`,
    thumbnail: "",
  },
  {
    id: "mwe-043",
    title:
      "WhatsApp: pack de respuestas rápidas para preguntas repetidas (precio, garantía, soporte, entrega)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Macros cortas (1–4 líneas) listas para copiar y pegar con tono humano.",
    prompt: `Oferta: [ ]
Precio: [ ]
Garantía: [ ]
Entrega: [ ]
Soporte: [ ]
Tono: [ ]

Genera un pack de 25 respuestas rápidas de WhatsApp, agrupadas:
A) Precio (5)
B) Garantía (5)
C) Qué incluye / entrega (5)
D) Resultados / expectativas (5)
E) Soporte / tiempos (5)

Cada respuesta:
- 1–4 líneas
- termina con 1 pregunta opcional para avanzar.`,
    thumbnail: "",
  },
  {
    id: "mwe-044",
    title:
      "Email para ejecutivos (B2B): ultra legible — TL;DR + business case + riesgos + CTA",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email B2B tipo ejecutivo: problema, propuesta, ROI, riesgos, siguiente paso.",
    prompt: `Cliente (industria): [ ]
Problema: [ ]
Propuesta: [ ]
ROI estimado: [ ]
Timeline: [ ]
Inversión: [ ]
Tono: [corporativo]

Escribe un email estilo ejecutivo que:
1) Empiece con TL;DR (máx 8 bullets)
2) Incluya mini business case (coste actual vs con solución) con ejemplo numérico
3) Riesgos y dependencias (3–5)
4) Próximo paso claro (reunión/aprobación)

Incluye 6 asuntos.`,
    thumbnail: "",
  },
  {
    id: "mwe-045",
    title:
      "WhatsApp: oferta relámpago (flash) sin quemar confianza (ética) — inicio + recordatorio + cierre",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Flash sale por WhatsApp: claridad, condiciones, y cierre sin manipulación.",
    prompt: `Oferta: [ ]
Descuento/bonus: [ ]
Duración real: [ ]
Condiciones: [ ]
Tono: [ ]

Crea:
1) Mensaje inicial (3 variantes)
2) Recordatorio mitad de ventana (2 variantes)
3) Último aviso (2 variantes)
4) Respuestas a 8 objeciones rápidas
Incluye frase de “si no es tu momento, todo bien…” para cuidar marca.`,
    thumbnail: "",
  },

  {
    id: "mwe-046",
    title:
      "Email benefit-driven (1 resultado + 1 mecanismo + 1 prueba + CTA): directo y potente",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Estructura directa: promesa, mecanismo, prueba, oferta, CTA.",
    prompt: `Resultado: [ ]
Mecanismo: [ ]
Prueba: [testimonio/datos]
Oferta: [ ]
Tono: [ ]

Escribe un email (400–650 palabras) con:
1) 12 asuntos (incluye algunos con números)
2) Promesa específica (sin humo)
3) Explica el mecanismo con ejemplo
4) Inserta prueba social (2 piezas)
5) Oferta en bullets (qué incluye)
6) CTA + alternativa “responde con ‘LISTO’”
Incluye versión súper corta (<= 120 palabras).`,
    thumbnail: "",
  },
  {
    id: "mwe-047",
    title:
      "WhatsApp: recopilar requerimientos B2B para propuesta (sin reunión) — 8 mensajes",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Recolecta requerimientos por WhatsApp de forma ordenada y profesional.",
    prompt: `Servicio: [ ]
Industria: [ ]
Objetivo: [KPI]
Plazo: [ ]
Tono: [ ]

Crea 8 mensajes para:
1) Alinear objetivo
2) Confirmar alcance
3) Identificar restricciones
4) Recolectar datos mínimos
5) Confirmar stakeholders
6) Timeline
7) Presupuesto rango (sin incomodar)
8) Confirmación: “con esto preparo propuesta”

Incluye:
- 2 variantes por mensaje (cercano y corporativo)
- mensaje final con “qué recibirás” (sin prometer hora exacta).`,
    thumbnail: "",
  },
  {
    id: "mwe-048",
    title:
      "Email para agendar llamada que aporta valor: outcome claro + preparación + CTA",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email para agenda: vende el outcome de la llamada (diagnóstico real).",
    prompt: `Llamada: [15/30]
Outcome de la llamada: [claridad/plan/diagnóstico]
Link: [placeholder]
Tono: [ ]

Escribe un email con:
1) 8 asuntos
2) Qué lograremos en la llamada (3 bullets)
3) Qué preparar (5 bullets, simple)
4) 2 opciones de horarios (placeholders) + link agenda
5) Cierre humano + P.S. para quien no quiere llamada (alternativa).`,
    thumbnail: "",
  },
  {
    id: "mwe-049",
    title:
      "WhatsApp: discovery rápido (5 preguntas) + propuesta instantánea personalizada (2 perfiles)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Mini discovery: 5 preguntas y luego una propuesta personalizada en 1 mensaje.",
    prompt: `Oferta: [ ]
Tipo cliente: [ ]
Tono: [ ]

Crea:
1) 5 preguntas (una por mensaje) para descubrir:
   - objetivo
   - situación actual
   - freno principal
   - intento previo
   - urgencia
2) Luego:
   - simula respuestas de 2 perfiles distintos
   - crea 2 propuestas instantáneas (1 mensaje cada una) con:
     - espejo
     - plan de 3 pasos
     - CTA

Incluye 3 variantes de CTA (suave, medio, fuerte).`,
    thumbnail: "",
  },
  {
    id: "mwe-050",
    title:
      "Email de seguimiento post-reunión (B2B): recap, decisiones, próximos pasos, riesgos (+ CTA de aprobación)",
    area: "Marketing & ventas",
    category: "WhatsApp & Email",
    summary:
      "Email de recap que acelera cierres: acuerdos, pendientes, owners y decisión rápida.",
    prompt: `Reunión: [tema]
Participantes (roles): [ ]
Acuerdos: [ ]
Pendientes: [ ]
Propuesta: [ ]
Tono: [corporativo]

Escribe un email post-reunión con:
1) 6 asuntos
2) Resumen en 6 bullets
3) Decisiones tomadas vs por tomar
4) Próximos pasos con owner (Cliente/Nosotros) (tabla textual con bullets)
5) Riesgos/dependencias (3–5)
6) CTA: confirmar por reply con “APROBADO” o “AJUSTES”

Incluye versión breve (<= 160 palabras).`,
    thumbnail: "",
  },
];
