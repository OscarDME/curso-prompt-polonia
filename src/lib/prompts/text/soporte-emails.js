// src/lib/prompts/text/soporte-emails.js

export const textPromptsSoporteEmails = [
  {
    id: "sop-email-001",
    title: "Email de primera respuesta (universal): confirma, calma, y pide lo mínimo (sin ida y vuelta)",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Email inicial que reduce tiempos: empatía + resumen + 1 CTA + datos mínimos.",
    prompt: `Contexto del ticket: [pegar mensaje del cliente]
Producto/servicio: [ ]
Tono: [cercano/neutral/premium]
Objetivo: [resolver / diagnosticar / escalar]
Datos que necesito: [lista]

Escríbeme un email de primera respuesta con:
1) Asunto (5 opciones): claro, humano, sin sonar robot.
2) Apertura empática (sin exagerar) + confirmación de recepción.
3) Resumen del problema en 1–2 frases (parafraseo para validar).
4) 1 CTA único (muy claro) para conseguir lo que falta:
   - si necesito datos → pedirlos en bullets con ejemplos
   - si necesito que haga pasos → máx. 5 pasos, numerados
5) “Qué haremos nosotros” (2–3 bullets) para generar confianza.
6) Cierre: disponibilidad + tiempo de seguimiento (sin prometer fechas exactas) + firma.
Incluye 2 versiones extra:
- versión corta (<= 90 palabras)
- versión súper premium (más cálida y detallada).`,
    thumbnail: "",
  },
  {
    id: "sop-email-002",
    title: "Email de solicitud de datos técnicos (sin intimidar): captura, pasos, entorno, timestamps",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Pedir evidencia técnica sin frustrar: preguntas precisas, checklist y ejemplos.",
    prompt: `Incidencia: [ ]
Plataforma: [web/app]
Nivel del usuario: [básico/medio/avanzado]
Qué ya intentó: [ ]

Escribe un email para solicitar datos técnicos con:
1) Asunto (4 opciones).
2) Explicación breve de por qué pedimos estos datos (humano y calmado).
3) Checklist en bullets (8–12) con ejemplos:
   - pasos para reproducir
   - esperado vs obtenido
   - navegador/OS/dispositivo
   - captura o video corto
   - timestamp y zona horaria
   - URL exacta / screen
4) Instrucciones opcionales (fáciles) para:
   - abrir incógnito
   - desactivar extensiones
   - hard refresh
5) CTA único al final: “respóndenos con X”.
Incluye versión ultra-corta para clientes molestos.`,
    thumbnail: "",
  },
  {
    id: "sop-email-003",
    title: "Email de seguimiento sin respuesta (Día 2 / Día 5 / Último intento): educado y eficaz",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Secuencia de follow-up para reactivar tickets sin sonar pasivo-agresivo.",
    prompt: `Contexto: [resumen del ticket]
Qué falta del cliente: [dato/paso]
Tono: [ ]

Crea 3 emails:
1) Follow-up Día 2: corto, amable, 1 CTA.
2) Follow-up Día 5: ofrece alternativa (call, captura, otro canal).
3) Último intento: avisa cierre automático + cómo reabrir.
Para cada email incluye:
- 3 opciones de asunto
- texto completo
- 1 línea opcional “si tienes prisa, responde solo con ____”.`,
    thumbnail: "",
  },
  {
    id: "sop-email-004",
    title: "Email de cierre exitoso: confirmación + resumen de solución + prevención + recursos",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Cierre que deja buena impresión: confirma, explica, previene y guía.",
    prompt: `Problema: [ ]
Solución aplicada: [ ]
Causa probable: [ ]
Recursos: [links/títulos]

Escribe un email de cierre con:
1) Asunto (4 opciones).
2) Confirmación de que ya debería estar resuelto + cómo verificar (2–3 checks).
3) Resumen de la solución en 3 bullets (sin tecnicismos).
4) Prevención: 5 recomendaciones concretas para evitar que vuelva a pasar.
5) Recursos: 3 links sugeridos (poner títulos aunque no existan aún).
6) Cierre cálido + invitación a responder si reaparece.
Incluye versión corta (<= 120 palabras).`,
    thumbnail: "",
  },
  {
    id: "sop-email-005",
    title: "Email para cliente molesto: desescalar, validar, proponer plan y recuperar confianza",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Respuesta para tensión alta: empatía, límites sanos, plan claro y un siguiente paso.",
    prompt: `Mensaje del cliente (pegar): [ ]
Contexto real: [qué pasó]
Qué puedes ofrecer: [solución/alternativa]
Qué NO puedes ofrecer: [límites/política]

Escribe un email que:
1) Valide emoción sin admitir culpa indebida.
2) Resuma el problema en 1–2 frases.
3) Proponga un plan en 3 pasos (qué hace el cliente / qué hacemos nosotros / cuándo actualizamos).
4) Ofrezca 2 alternativas (por ejemplo: workaround vs escalación).
5) Mantenga límites con respeto (si aplica).
6) Termine con un CTA único.
Incluye 2 variantes: una “muy neutral” y otra “más cercana”.`,
    thumbnail: "",
  },

  {
    id: "sop-email-006",
    title: "Email de reembolso aprobado: confirmación, tiempos, comprobante y próximos cargos",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Mensaje claro para reembolso: qué se reembolsa, cuándo se refleja y qué pasa con el acceso.",
    prompt: `Producto/plan: [ ]
Monto: [ ]
Método de pago: [ ]
Política: [ ]
Acceso: [se mantiene/se corta]

Escribe un email de reembolso aprobado con:
1) Asunto (4 opciones).
2) Confirmación del reembolso + importe y referencia (placeholders).
3) Tiempos estimados (sin prometer exacto) y por qué depende del banco.
4) Qué pasa con el acceso/renovaciones futuras.
5) Instrucciones si no lo ve reflejado (checklist 6).
6) Cierre amable + CTA para dudas.`,
    thumbnail: "",
  },
  {
    id: "sop-email-007",
    title: "Email de reembolso rechazado (con alternativa): firme, empático y sin conflicto",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Negativa de reembolso con explicación humana + alternativas para ayudar al cliente.",
    prompt: `Motivo del rechazo: [ ]
Política aplicada: [ ]
Alternativas que SÍ puedes ofrecer: [crédito/cambio plan/extensión]

Escribe un email con:
1) Asunto (4 opciones).
2) Explicación breve y humana del por qué (sin sonar legalista).
3) Cita resumida de la política (sin copiar/pegar largo).
4) 2–3 alternativas concretas (con pasos).
5) CTA único para elegir alternativa.
Incluye versión “muy corta” para evitar debate.`,
    thumbnail: "",
  },
  {
    id: "sop-email-008",
    title: "Email de cancelación confirmada: qué cambia, hasta cuándo, y cómo reactivar luego",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Confirmación de cancelación que evita tickets: acceso, renovación, datos y reactivación.",
    prompt: `Plan: [ ]
Fecha de fin de acceso: [ ]
Motivo: [opcional]
¿Ofrecer retención? [sí/no]

Escribe un email con:
1) Asunto (4 opciones).
2) Confirmación de cancelación.
3) Acceso: hasta cuándo y qué se conserva (datos, historial).
4) Cómo reactivar (pasos).
5) (Opcional) Oferta de retención no invasiva: 2 alternativas.
6) Cierre cordial.`,
    thumbnail: "",
  },
  {
    id: "sop-email-009",
    title: "Email de incidente (status): investigando / identificado / monitoreando / resuelto (4 plantillas)",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Pack de emails por estado de incidente: claridad, calma, workaround y próximos updates.",
    prompt: `Incidente: [ ]
Impacto: [quién se afecta]
Workaround: [si existe]
Canal: [email]

Crea 4 emails:
1) Investigando
2) Identificado
3) Monitoreando
4) Resuelto

Cada email debe incluir:
- 3 asuntos
- resumen del impacto
- qué estamos haciendo
- workaround (si aplica)
- cuándo daremos próxima actualización (sin hora exacta)
- cierre empático.`,
    thumbnail: "",
  },
  {
    id: "sop-email-010",
    title: "Email: ‘necesitamos tu autorización’ (permisos/admin): pedir acción al admin sin fricción",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Pide al usuario que involucre al admin con un mensaje listísimo para reenviar.",
    prompt: `Acción requerida del admin: [cambiar rol/activar feature]
Contexto: [ ]
Tono: [ ]

Escribe un email al usuario con:
1) Asunto (3 opciones).
2) Explicación breve: por qué requiere admin.
3) Pasos para el usuario (2–3).
4) Un bloque “Mensaje para reenviar a tu admin” (copy listo) con:
   - contexto
   - pasos exactos en el producto (placeholders)
   - qué confirmar al final
5) Cierre + CTA único.`,
    thumbnail: "",
  },

  {
    id: "sop-email-011",
    title: "Email de ‘pasos de solución’ (máxima claridad): instrucciones numeradas + ‘qué deberías ver’",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Email con pasos que el cliente sí sigue: pasos cortos, resultado esperado y plan B.",
    prompt: `Problema: [ ]
Solución propuesta: [ ]
Plataforma: [web/app]
Nivel usuario: [ ]

Escribe un email con:
1) Asunto (4).
2) 6–10 pasos numerados, cada uno con:
   - acción exacta
   - qué deberías ver
   - si no aparece, qué hacer (plan B)
3) Una sección “si te funciona” (cómo confirmarlo).
4) Una sección “si no te funciona” (qué datos enviarnos).
5) Cierre con un CTA único.`,
    thumbnail: "",
  },
  {
    id: "sop-email-012",
    title: "Email para ‘caso duplicado’ o ‘ya existe ticket’: ordena, reduce ruido y mantiene buen tono",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Mensaje para unificar tickets sin sonar regaño, con explicación y siguiente paso.",
    prompt: `Ticket principal: [ID]
Ticket duplicado: [ID]
Estado: [ ]

Escribe un email con:
1) Asunto (3).
2) Explicación de por qué unificamos (velocidad/claridad).
3) Indica en qué ticket haremos updates.
4) Pide confirmación de 1 cosa (si falta).
5) Cierre amable.`,
    thumbnail: "",
  },
  {
    id: "sop-email-013",
    title: "Email de ‘solución temporal / workaround’: explica límites, duración y próximo update",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Mensajes para workarounds: honestos, accionables y con expectativas claras.",
    prompt: `Bug: [ ]
Workaround: [ ]
Limitaciones del workaround: [ ]
Siguiente update: [ ]

Escribe un email con:
1) Asunto (4).
2) Qué pasa (alto nivel).
3) Workaround paso a paso (5–8 pasos).
4) Qué NO hará el workaround (límites).
5) Qué estamos haciendo para el fix.
6) CTA único: confirmar si le funciona o enviarnos X info.`,
    thumbnail: "",
  },
  {
    id: "sop-email-014",
    title: "Email de escalación a ingeniería (interno): impecable, reproducible y con datos completos",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Plantilla interna para escalar: pasos exactos, expected/actual, entorno y evidencia.",
    prompt: `Bug/incidencia: [ ]
Severidad: [P1-P4]
Cuenta/Org ID: [ ]
URLs: [ ]
Timestamps: [ ]
Evidencia: [capturas/logs/HAR]

Escribe un email interno a ingeniería con:
1) Asunto con formato estándar: [Sev][Área] resumen corto.
2) Contexto del cliente (sin PII).
3) Pasos para reproducir (numerados).
4) Expected vs Actual.
5) Alcance: cuántos usuarios, desde cuándo, regiones.
6) Evidencia adjunta.
7) Hipótesis (opcional) + prioridad recomendada.
8) Preguntas concretas (máx 3) para desbloquear.
Incluye versión corta para Slack.`,
    thumbnail: "",
  },
  {
    id: "sop-email-015",
    title: "Email de verificación de identidad (cambios sensibles): seguro, claro y sin fricción",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Pide verificación para cambios sensibles sin pedir datos peligrosos.",
    prompt: `Cambio solicitado: [email/propietario/2FA]
Riesgo: [alto]
Métodos permitidos: [últimos 4 de tarjeta? NO / datos seguros sí]
Políticas: [ ]

Escribe un email con:
1) Asunto (3).
2) Explicación humana de por qué verificamos.
3) Lista de 2–3 métodos de verificación permitidos (con ejemplos).
4) Qué NO pedimos nunca (1–2 líneas).
5) CTA único: responder con X.
6) Cierre calmo y profesional.`,
    thumbnail: "",
  },

  {
    id: "sop-email-016",
    title: "Email para IT corporativo: whitelisting/puertos/dominios + qué prueba necesitamos",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Mensaje técnico-friendly para IT cuando hay firewall/proxy bloqueando el producto.",
    prompt: `Empresa: [ ]
Síntoma: [ ]
Dominios requeridos: [placeholders]
Puertos: [placeholders]
Endpoints: [placeholders]

Escribe un email para IT con:
1) Asunto (3).
2) Resumen del problema y cómo confirmarlo (hotspot test).
3) Requisitos de red (dominios/puertos/endpoints) en formato copy/paste.
4) Qué logs o pruebas pedimos (sin herramientas específicas si no quieres).
5) Contacto y cierre.
Además, crea una versión “para reenviar” al cliente no técnico.`,
    thumbnail: "",
  },
  {
    id: "sop-email-017",
    title: "Email de ‘cambio de plan’ (upgrade/downgrade): prorrateo explicado con ejemplo simple",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Aclaración de prorrateo y efectos de upgrade/downgrade para evitar confusiones.",
    prompt: `Planes: [ ]
Prorrateo: [sí/no]
Caso: [upgrade/downgrade]
Fecha: [ ]

Escribe un email con:
1) Asunto (3).
2) Qué pasará (en bullets).
3) Ejemplo numérico simple (con placeholders).
4) Qué cambia en features/límites y cuándo.
5) FAQ mini (5).
6) CTA para confirmar si quiere proceder.`,
    thumbnail: "",
  },
  {
    id: "sop-email-018",
    title: "Email de ‘factura/IVA/VAT’: explicaciones claras + cómo actualizar datos fiscales",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Responde dudas fiscales con claridad, sin sonar abogado, y guía al usuario a actualizar datos.",
    prompt: `País: [ ]
Documento: [factura/recibo]
Duda: [ ]

Escribe un email con:
1) Asunto (3).
2) Respuesta clara de la duda.
3) Pasos para actualizar datos fiscales (5–8).
4) Qué esperar después (tiempos, regeneración).
5) Qué datos necesitamos si no puede (lista).
6) Cierre con CTA único.`,
    thumbnail: "",
  },
  {
    id: "sop-email-019",
    title: "Email de ‘pedido de captura/video’ (sin PII): cómo pedir evidencia con privacidad",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Solicita capturas útiles sin comprometer datos: instrucciones y qué ocultar.",
    prompt: `Incidencia: [ ]
Qué necesitamos ver: [pantalla/errores]
Nivel usuario: [ ]

Escribe un email con:
1) Asunto (3).
2) Explicación breve: “esto nos ayuda a resolver más rápido”.
3) Instrucciones:
   - cómo tomar captura
   - cómo grabar video 20s
   - qué datos ocultar (emails, pagos, etc.)
4) Checklist (6) de lo que debe incluir la evidencia.
5) CTA único: responder adjuntando X.`,
    thumbnail: "",
  },
  {
    id: "sop-email-020",
    title: "Email de post-mortem (usuario): qué pasó, cómo lo solucionamos y qué cambia para el futuro",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Comunicación post-incidente: transparencia sin tecnicismos y acciones concretas.",
    prompt: `Incidente: [ ]
Impacto: [ ]
Duración: [ ]
Causa (alto nivel): [ ]
Acciones preventivas: [ ]

Escribe un email con:
1) Asunto (4).
2) Resumen (3 bullets).
3) Qué pasó (alto nivel) sin jerga.
4) Qué hicimos para resolver.
5) Qué haremos para que no pase (5 acciones).
6) Si el usuario debe hacer algo, listarlo (máx 3 pasos).
7) Cierre empático + canal para dudas.`,
    thumbnail: "",
  },

  {
    id: "sop-email-021",
    title: "Email para recuperar confianza tras error del equipo: disculpa responsable + plan + compensación (si aplica)",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Disculpa profesional que no suena corporativa: acepta, explica, repara, previene.",
    prompt: `Qué salió mal: [ ]
Impacto al cliente: [ ]
Qué haremos: [ ]
Compensación (si aplica): [ ]

Escribe un email con:
1) Asunto (3).
2) Disculpa responsable (sin dramatizar).
3) Qué pasó (alto nivel) + reconocimiento del impacto.
4) Plan en 3 pasos (acción inmediata, solución, prevención).
5) Compensación (si aplica) explicada simple.
6) CTA único + cierre humano.`,
    thumbnail: "",
  },
  {
    id: "sop-email-022",
    title: "Email para ‘política aplicada’ (sin sonar legal): explicar reglas con empatía + alternativas",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Explicar políticas (reembolso, uso, abuso) con tono humano y opciones útiles.",
    prompt: `Política: [ ]
Caso del cliente: [ ]
Alternativas: [crédito/pausa/cambio plan]

Escribe un email con:
1) Asunto (3).
2) Validación + resumen del caso.
3) Explicación simple de la política y por qué existe.
4) Cómo aplica al caso (sin sonar acusatorio).
5) 2–3 alternativas con pasos.
6) CTA único.`,
    thumbnail: "",
  },
  {
    id: "sop-email-023",
    title: "Email de ‘confirmación de requisitos’ antes de avanzar (reduce sorpresas): permisos, plan, entorno",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Confirma requisitos (plan/rol/compatibilidad) antes de intentar una solución compleja.",
    prompt: `Acción objetivo: [ ]
Requisitos: [plan/rol/navegador]
Cliente: [ ]

Escribe un email con:
1) Asunto (3).
2) Explica que para hacerlo rápido necesitamos confirmar requisitos.
3) Checklist (8–12) con:
   - plan
   - rol
   - navegador/OS
   - configuración
4) Si no cumple requisito: alternativas (3).
5) CTA único: responder con el checklist completado.`,
    thumbnail: "",
  },
  {
    id: "sop-email-024",
    title: "Email de ‘instrucciones para admin’ (reenviable): pasos exactos + checklist de confirmación",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Texto perfecto para que el cliente lo reenvíe al admin sin perder contexto.",
    prompt: `Acción admin: [ ]
Ruta en el producto: [ ]
Qué confirmar: [ ]

Crea un email al usuario con:
1) Asunto (2).
2) Bloque reenviable al admin que incluya:
   - contexto breve
   - pasos exactos (numerados)
   - qué confirmar al final
   - captura que sería útil (opcional)
3) Cierre y CTA único.`,
    thumbnail: "",
  },
  {
    id: "sop-email-025",
    title: "Email ‘mensaje final’ para cierre automático: amable, útil y con puerta abierta",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Cerrar ticket sin resentimiento: qué se intentó, cómo reabrir y recursos.",
    prompt: `Resumen del caso: [ ]
Qué faltó del cliente: [ ]
Recursos: [ ]

Escribe un email con:
1) Asunto (3).
2) Indicar que cerraremos el ticket por ahora (tono suave).
3) Resumen de lo intentado (3 bullets).
4) Cómo reabrir: “responde a este correo con X”.
5) Recursos sugeridos (3).
6) Cierre cálido.`,
    thumbnail: "",
  },

  {
    id: "sop-email-026",
    title: "Email de ‘confirmación de bug’ (sin prometer ETA): reconocimiento + workaround + próximos updates",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Confirmar bug sin prometer fechas: qué haremos y cómo mantendremos informado.",
    prompt: `Bug: [ ]
Impacto: [ ]
Workaround: [sí/no]
Prioridad: [ ]

Escribe un email con:
1) Asunto (3).
2) Confirmación de que es un bug + disculpa breve.
3) Workaround (si existe) con pasos claros.
4) Qué datos seguimos investigando (2–3 puntos).
5) Cómo daremos updates (sin horas exactas).
6) CTA único: confirmar si workaround funciona / enviar evidencia.`,
    thumbnail: "",
  },
  {
    id: "sop-email-027",
    title: "Email para ‘bug no reproducible’ (sin culpar): pedir detalles correctos y mantener confianza",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Cuando no reproduces el bug: cómo pedir evidencia sin frustrar.",
    prompt: `Síntoma: [ ]
Qué intentaste: [ ]
Tono: [ ]

Escribe un email con:
1) Asunto (3).
2) Explica que queremos replicarlo para arreglarlo definitivamente.
3) Pide solo lo necesario (checklist 8–10) con ejemplos.
4) Ofrece 2 alternativas rápidas:
   - video 20s
   - llamada breve
5) CTA único y cierre humano.`,
    thumbnail: "",
  },
  {
    id: "sop-email-028",
    title: "Email ‘pasarela de pago’ (Stripe/PayPal): cómo explicar fallos sin culpar al banco ni al cliente",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Plantilla para pagos fallidos con tono neutral, pasos concretos y alternativa.",
    prompt: `Error: [ ]
Pago: [suscripción/one-time]
País: [ ]

Escribe un email con:
1) Asunto (3).
2) Explicación neutral de causas comunes (4 bullets).
3) Pasos para resolver (6–8).
4) Alternativa: otra tarjeta/método/link.
5) CTA único: confirmar si pudo completar y qué error ve si no.`,
    thumbnail: "",
  },
  {
    id: "sop-email-029",
    title: "Email ‘entorno no soportado’ (browser/OS): decirlo con tacto + opciones reales",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Comunicar incompatibilidad sin sonar arrogante: ofrece caminos y verificación.",
    prompt: `Entorno actual: [ ]
Entorno soportado: [ ]
Problema: [ ]

Escribe un email con:
1) Asunto (3).
2) Explica compatibilidad de forma amable.
3) 2 opciones concretas para continuar hoy.
4) Pasos para actualizar/cambiar (breve).
5) CTA único: confirmar si pudo con la opción A o B.`,
    thumbnail: "",
  },
  {
    id: "sop-email-030",
    title: "Email ‘problema intermitente’: aislar variables con pocas preguntas + plan de seguimiento",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Para errores aleatorios: pedir contexto útil y proponer plan sin agotar al cliente.",
    prompt: `Síntoma: [ ]
Frecuencia: [ ]
Contexto sospechado: [red/datos]

Escribe un email con:
1) Asunto (3).
2) 6 preguntas de alto valor (no más).
3) Solicitud opcional de evidencia (video 20s).
4) Plan de seguimiento: qué probaremos nosotros y cómo avisaremos.
5) CTA único.`,
    thumbnail: "",
  },

  {
    id: "sop-email-031",
    title: "Email para ‘acceso a contenido/curso’: explicar bloqueo, validar compra y recuperar acceso",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Plantilla para casos de “compré pero no veo”: validación de email, estado pago y solución.",
    prompt: `Producto comprado: [ ]
Email usado para compra: [ ]
Plataforma: [ ]
Estado: [bloqueado/no aparece]

Escribe un email con:
1) Asunto (3).
2) Validar compra en 3 datos (sin PII sensible).
3) Pasos para acceder correctamente (6–8).
4) Si usó email incorrecto: cómo resolver.
5) CTA único: responder con los 3 datos para localizar la compra.`,
    thumbnail: "",
  },
  {
    id: "sop-email-032",
    title: "Email ‘solicitud de excepción’ (caso gris): cómo pedir aprobación interna y responder al cliente",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Dos correos: uno interno para pedir excepción y otro al cliente mientras se revisa.",
    prompt: `Caso: [ ]
Política: [ ]
Por qué es caso gris: [ ]
Qué excepción se solicita: [ ]

Crea:
A) Email interno a supervisor:
- asunto
- resumen
- evidencia
- recomendación
- riesgo
- respuesta solicitada

B) Email al cliente:
- asunto
- agradecimiento
- que lo estamos revisando
- qué necesitamos si falta algo
- próximo update (sin hora exacta)`,
    thumbnail: "",
  },
  {
    id: "sop-email-033",
    title: "Email ‘solicitud de confirmación final’: checklist de 3 puntos para cerrar con seguridad",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Antes de cerrar: confirmar con el cliente en 3 checks y evitar reabrir.",
    prompt: `Solución aplicada: [ ]
Feature: [ ]
Tono: [ ]

Escribe un email con:
1) Asunto (2–3).
2) 3 checks para confirmar (en bullets).
3) Si algo falla: 1 CTA para responder con evidencia mínima.
4) Cierre amable.`,
    thumbnail: "",
  },
  {
    id: "sop-email-034",
    title: "Email ‘migración/cambio importante’: instrucción clara + antes/después + ‘qué hacer hoy’",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Comunicar cambios grandes con guía práctica y transmisión de tranquilidad.",
    prompt: `Cambio: [ ]
A quién afecta: [ ]
Fecha: [ ]
Acciones requeridas: [ ]

Escribe un email con:
1) Asunto (4).
2) Resumen ejecutivo (3 bullets).
3) Antes vs después (6 bullets).
4) Qué debe hacer el usuario hoy (máx 5 pasos).
5) Qué pasa si no hace nada (honesto).
6) FAQ mini (6).
7) Cierre con CTA único.`,
    thumbnail: "",
  },
  {
    id: "sop-email-035",
    title: "Email ‘renovación/cobro próximo’: preventiva, clara, reduce disputas",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Aviso de renovación: fecha, monto, cómo cancelar/cambiar, y evitar reclamos.",
    prompt: `Plan: [ ]
Monto: [ ]
Fecha: [ ]
Cómo cancelar: [ruta/pasos]

Escribe un email con:
1) Asunto (4).
2) Información clave (fecha, monto, método) en bullets.
3) Cómo actualizar pago (pasos 4–6).
4) Cómo cancelar o cambiar plan (pasos).
5) FAQ mini (5).
6) Cierre amable.`,
    thumbnail: "",
  },

  {
    id: "sop-email-036",
    title: "Email ‘pedido de reseña/feedback’ (tras resolución): breve, humano y útil para mejorar",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Pedir feedback sin molestar: 2 preguntas útiles y opción de respuesta rápida.",
    prompt: `Caso resuelto: [ ]
Tono: [ ]

Escribe un email con:
1) Asunto (3).
2) Agradecimiento + confirmación de que se resolvió.
3) 2 preguntas ultra simples:
   - ¿te sirvió la solución?
   - ¿qué podríamos mejorar?
4) CTA: responder con un número (1–5) y 1 línea opcional.
Incluye versión súper corta.`,
    thumbnail: "",
  },
  {
    id: "sop-email-037",
    title: "Email ‘cliente VIP/premium’: tono ultra cuidado + aceleración + ownership",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Respuesta premium: ownership total, pasos claros y seguimiento proactivo (sin prometer).",
    prompt: `Cliente: [VIP]
Caso: [ ]
Prioridad: [ ]

Escribe un email con:
1) Asunto (3).
2) Apertura premium (cálida, breve).
3) Ownership: “me encargo personalmente”.
4) Plan en 3 pasos + qué necesito (si aplica).
5) Compromiso de seguimiento (sin prometer tiempos exactos).
6) Cierre elegante + firma.`,
    thumbnail: "",
  },
  {
    id: "sop-email-038",
    title: "Email ‘usuario confundido con la plataforma’: guía de navegación + recursos + propuesta de siguiente paso",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Ayuda al usuario a ubicarse: 3 rutas típicas, tips y CTA único.",
    prompt: `Producto: [ ]
Qué busca el usuario: [ ]
Nivel: [principiante]

Escribe un email con:
1) Asunto (3).
2) Explica en 2 líneas “cómo navegar”.
3) 3 rutas típicas (A/B/C) con pasos.
4) 5 tips para evitar errores comunes.
5) Recursos sugeridos (3).
6) CTA único: decirnos cuál ruta quiere seguir.`,
    thumbnail: "",
  },
  {
    id: "sop-email-039",
    title: "Email ‘solicitud legal/suscripción cancelada por abuso’: firme, profesional y con límites claros",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Plantilla para situaciones delicadas: límites, referencia a políticas y canal correcto.",
    prompt: `Situación: [abuso/fraude/legal request]
Política: [ ]
Qué puedes decir: [ ]

Escribe un email con:
1) Asunto (3).
2) Respuesta firme y respetuosa.
3) Referencia breve a términos/política (sin copiar texto largo).
4) Qué pasos puede seguir el usuario (si corresponde).
5) Cierre que evita escalada.
Incluye versión súper corta.`,
    thumbnail: "",
  },
  {
    id: "sop-email-040",
    title: "Email ‘reconexión de integración’ (OAuth/webhooks): pasos claros + verificación + qué enviar si falla",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Guía para reconectar integraciones con verificación y solicitud de evidencia mínima.",
    prompt: `Integración: [ ]
Problema: [ ]
Plataforma: [ ]

Escribe un email con:
1) Asunto (3).
2) Pasos para desconectar y reconectar (8–12) con “qué verás”.
3) Paso de verificación: cómo probar en 1 minuto.
4) Si falla: 6 datos a enviar (captura, error, timestamp, cuenta).
5) CTA único.`,
    thumbnail: "",
  },

  {
    id: "sop-email-041",
    title: "Email ‘confirmación de actualización de datos’ (perfil/facturación): resumen + qué revisar",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Confirma cambios de datos: qué se actualizó y cómo verificar (reduce tickets).",
    prompt: `Cambio: [ ]
Dato anterior: [opcional]
Dato nuevo: [ ]
Qué debe verificar: [ ]

Escribe un email con:
1) Asunto (3).
2) Confirmación del cambio.
3) 3 checks de verificación.
4) Qué hacer si ve algo raro (CTA único).
5) Cierre breve y amable.`,
    thumbnail: "",
  },
  {
    id: "sop-email-042",
    title: "Email ‘respuesta a disputa de cargo’ (chargeback): tono serio + pasos + evidencia",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Plantilla para manejar chargebacks: recolectar datos, explicar proceso y buscar resolución.",
    prompt: `Pasarela: [ ]
Cargo: [ ]
Motivo disputa: [ ]
Estado: [abierta]

Escribe un email con:
1) Asunto (3).
2) Explicación breve del proceso y por qué conviene resolver directo.
3) Qué datos necesitamos (checklist 8) para investigar.
4) Opciones de resolución (según política).
5) CTA único y tono muy profesional.`,
    thumbnail: "",
  },
  {
    id: "sop-email-043",
    title: "Email ‘solución en 2 opciones’: A/B para que el cliente elija sin confusión",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Ofrece dos caminos claros (workaround vs fix) y reduce tiempo de decisión.",
    prompt: `Problema: [ ]
Opción A: [rápida]
Opción B: [más completa]
Tono: [ ]

Escribe un email con:
1) Asunto (3).
2) Resumen corto del problema.
3) Opción A:
   - pasos (3–6)
   - pros/contras
4) Opción B:
   - pasos (3–6)
   - pros/contras
5) CTA único: “responde A o B” + 1 dato si hace falta.`,
    thumbnail: "",
  },
  {
    id: "sop-email-044",
    title: "Email ‘documentación personalizada’: explicar un proceso al cliente con mini-guía creada para su caso",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Mini-doc dentro del email: guía por pasos adaptada al caso real del cliente.",
    prompt: `Cliente quiere lograr: [ ]
Contexto (roles/plan): [ ]
Restricciones: [ ]

Escribe un email tipo mini-documentación con:
1) Asunto (3).
2) “Objetivo” y “Resultado esperado”.
3) Requisitos previos.
4) Pasos (10–14) con:
   - acción
   - resultado esperado
   - error típico y solución
5) Checklist final de verificación.
6) CTA único para confirmar éxito o decir en qué paso se quedó.`,
    thumbnail: "",
  },
  {
    id: "sop-email-045",
    title: "Email ‘plantilla de onboarding’ post-compra: acceso, primeros pasos, recursos y soporte",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Email de bienvenida después de comprar: acceso, quickstart y dónde pedir ayuda.",
    prompt: `Producto: [ ]
Acceso: [ruta]
Recursos: [links o títulos]
Tono: [ ]

Escribe un email con:
1) Asunto (5 opciones).
2) Bienvenida + qué incluye.
3) Cómo acceder (pasos 4–6).
4) Quickstart (3 acciones para primera victoria).
5) Recursos (3) + comunidad (si hay).
6) Soporte: cómo pedir ayuda (qué incluir).
7) Cierre cálido.`,
    thumbnail: "",
  },

  {
    id: "sop-email-046",
    title: "Email ‘responder a solicitud de feature’: validar, aclarar, y convertir en insight accionable",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Responde solicitudes de features sin prometer: preguntas útiles y seguimiento.",
    prompt: `Solicitud del cliente: [ ]
Estado del roadmap: [desconocido/no/quizá]
Tono: [ ]

Escribe un email con:
1) Asunto (3).
2) Validación y agradecimiento.
3) 5 preguntas para entender el caso de uso (máximo valor).
4) Qué podemos sugerir hoy (workaround) si aplica.
5) Qué haremos con el feedback (sin prometer).
6) CTA único: responder las 5 preguntas.`,
    thumbnail: "",
  },
  {
    id: "sop-email-047",
    title: "Email ‘respuesta por SLA’ (cuando va a tardar): transparencia + próximos pasos + calma",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Cuando no hay solución inmediata: cómo comunicarse con transparencia sin irritar.",
    prompt: `Caso: [ ]
Razón de demora: [depende de tercero/needs engineering]
Workaround: [sí/no]
Tono: [ ]

Escribe un email con:
1) Asunto (3).
2) Reconocer urgencia del cliente.
3) Explicar por qué tomará más (sin tecnicismos).
4) Qué haremos mientras tanto (3 bullets).
5) Workaround (si existe).
6) CTA único: confirmar si workaround ayuda / enviar dato faltante.`,
    thumbnail: "",
  },
  {
    id: "sop-email-048",
    title: "Email ‘confirmación de devolución parcial’ o ajuste: desglose claro y cómo se refleja",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Para reembolsos parciales/ajustes: desglose claro, razón y pasos para verificar.",
    prompt: `Monto total: [ ]
Monto ajustado: [ ]
Razón: [prorrateo/descuento/ajuste]
Pasarela: [ ]

Escribe un email con:
1) Asunto (3).
2) Explicación breve del ajuste.
3) Desglose en bullets (placeholders).
4) Cómo se reflejará (tiempos y dónde mirar).
5) CTA único: responder si no lo ve tras X días hábiles (sin prometer exacto).`,
    thumbnail: "",
  },
  {
    id: "sop-email-049",
    title: "Email ‘mensaje de prevención de fraude’ (sin acusar): verificación adicional y siguiente paso",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Cuando el sistema marca riesgo: pedir verificación extra sin acusar ni alarmar.",
    prompt: `Señal de riesgo: [ ]
Qué requiere: [verificación]
Tono: [muy profesional]

Escribe un email con:
1) Asunto (3).
2) Explicación neutral: “por seguridad”.
3) Qué necesitamos (2–3 métodos permitidos) con ejemplos.
4) Qué NO pedimos nunca.
5) CTA único + cierre tranquilo.`,
    thumbnail: "",
  },
  {
    id: "sop-email-050",
    title: "Email ‘recap’ interno para equipo (handoff): resumen del caso, estado, riesgos y siguiente acción",
    area: "Atención al Cliente & SOPs",
    category: "Emails",
    summary:
      "Handoff interno perfecto: contexto, estado, evidencia, riesgos y próxima acción.",
    prompt: `Caso: [ ]
Cliente: [sin PII]
Estado: [ ]
Bloqueos: [ ]
Evidencia: [ ]
Siguiente acción: [ ]

Escribe un email interno con:
1) Asunto estándar.
2) Resumen del caso (3 bullets).
3) Timeline (3–6 eventos con timestamps).
4) Qué se probó y resultados.
5) Riesgos/impacto.
6) Próxima acción clara + owner recomendado.
Incluye versión corta para Slack.`,
    thumbnail: "",
  },
];
