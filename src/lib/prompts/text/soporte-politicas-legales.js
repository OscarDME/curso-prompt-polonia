// src/lib/prompts/text/soporte-politicas-legales.js

export const textPromptsSoportePoliticasLegales = [
  {
    id: "sop-pol-001",
    title: "Política de reembolsos (digital): clara, justa y fácil de aplicar (con ejemplos)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Redacta una política de reembolsos para producto digital con reglas, excepciones y ejemplos reales.",
    prompt: `Negocio: [tipo de negocio]
Producto digital: [curso/plantillas/SaaS/membresía]
País/mercado principal: [ ]
Canales de venta: [web/Stripe/Hotmart/etc.]
Condiciones actuales (si existen): [ ]

Crea una política de reembolsos completa (lista para web y Términos) con:
1) Definiciones: compra, acceso, entrega, consumo, prueba, renovación.
2) Elegibilidad: qué sí califica y qué no (por categorías).
3) Plazos: ventana de reembolso por tipo de producto (curso, SaaS, membresía).
4) Evidencia: qué necesitamos para procesar (evitar fricción).
5) Excepciones: fraude, abuso, chargebacks, múltiples cuentas.
6) Proceso: cómo solicitar, tiempos de respuesta, método de devolución.
7) Ejemplos (mínimo 8) “si pasa X → aplica Y”.
8) Resumen en 6 bullets “versión simple” para soporte.
9) Checklist interno de agente (10 pasos) para decidir.
10) Plantillas de respuesta: aprobado / negado / caso gris.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-002",
    title: "Política de cancelación y renovación (suscripciones): anti-confusión y anti-chargeback",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define cancelación, renovaciones, prorrateos y qué ocurre con el acceso.",
    prompt: `Producto: [SaaS/membresía]
Ciclo: [mensual/anual]
Prueba: [sí/no]
Prorrateo: [sí/no]
País: [ ]

Redacta una política completa que incluya:
1) Cómo funciona la renovación automática (lenguaje simple).
2) Cómo cancelar (pasos por plataforma) y qué confirma el usuario.
3) Qué pasa con el acceso (inmediato vs fin de ciclo).
4) Reembolsos en renovaciones: reglas claras por casos.
5) Cambio de plan: upgrade/downgrade, cuándo aplica, prorrateos.
6) Facturación fallida: reintentos, suspensión, notificaciones.
7) Prevención de confusión: 10 frases “claras” para UX/checkout.
8) Mini FAQ (12 preguntas) para clientes.
9) Macros de soporte (aprobación/negación/explicación) con tono humano.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-003",
    title: "Política de uso aceptable (AUP) para comunidad/membresía (conducta, sanciones, apelación)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Reglas de conducta: qué se permite, qué no, niveles de sanción y proceso de apelación.",
    prompt: `Plataforma: [Discord/foro/comunidad privada]
Tipo de audiencia: [ ]
Riesgos: [spam/acoso/estafas/NSFW]
Moderación: [equipo/herramientas]

Redacta una AUP completa con:
1) Principios (3–5) de convivencia.
2) Conductas prohibidas (lista granular por categorías).
3) Contenido prohibido y responsabilidades del usuario.
4) Niveles de acción: advertencia → mute → ban temporal → ban permanente.
5) Proceso de reporte: cómo reportar, qué info incluir, tiempos.
6) Proceso de apelación: plazos, criterios, decisión final.
7) Privacidad: qué se comparte y qué no en casos.
8) Macros para moderadores (10) para advertir/cerrar/banear con respeto.
9) Página “versión corta” en 8 bullets para onboarding.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-004",
    title: "Política de privacidad (resumen claro) + textos para consentimientos y cookies",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Crea un resumen entendible de privacidad y textos de consentimiento para banners y formularios.",
    prompt: `Tipo de negocio: [ ]
Datos recolectados: [email, nombre, pagos, analíticas, etc.]
Herramientas: [GA, Meta Pixel, Stripe, CRM]
Regiones: [UE/EEUU/MX/LatAm]

Genera:
1) “Resumen de privacidad” en lenguaje simple (máx 350 palabras).
2) Tabla de categorías de datos:
   - qué recolectamos
   - para qué
   - base legal (si aplica)
   - retención
3) Textos de consentimiento:
   - checkbox newsletter
   - checkbox términos
   - consentimiento marketing
4) Copy para banner de cookies (3 versiones: corto/medio/largo).
5) FAQ privacidad (10).
6) Macros de soporte para solicitudes: acceso, corrección, borrado (DSAR).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-005",
    title: "Política de garantía y devoluciones (producto físico): plazos, estado, logística y excepciones",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define devoluciones en físico con criterios de estado, empaques, envíos y reembolsos.",
    prompt: `Producto físico: [ ]
Países de envío: [ ]
Plazo devolución: [ ]
Quién paga envío retorno: [cliente/empresa/depende]
Condiciones de estado: [nuevo/sin uso/etc.]

Redacta la política con:
1) Qué se puede devolver y por qué (defectos, cambio de opinión, talla, etc.).
2) Ventanas por tipo de devolución.
3) Estado del producto y empaques (criterios objetivos).
4) Proceso de RMA: pasos, etiquetas, dirección, tracking.
5) Inspección y resolución: reembolso/cambio/crédito.
6) Excepciones (higiene, personalizados, perecederos).
7) Ejemplos: 10 casos comunes y decisión.
8) Macros de soporte: pedir evidencia, aprobar, negar, “caso gris”.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-006",
    title: "Términos y condiciones (resumen operativo) para cursos digitales",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Incluye licencias, acceso, propiedad intelectual, límites y conducta del alumno.",
    prompt: `Curso: [ ]
Acceso: [vitalicio/12 meses]
Material descargable: [sí/no]
Comunidad incluida: [sí/no]
País: [ ]

Crea un resumen operativo de T&C con:
1) Licencia de uso (personal/no transferible) y límites.
2) Prohibiciones: compartir credenciales, reventa, scraping.
3) Acceso: qué incluye, qué no incluye, cambios de contenido.
4) Propiedad intelectual: marcas, materiales, grabaciones.
5) Conducta: convivencia en comunidad, sanciones.
6) Pagos y reembolsos: cómo se rige (sin contradicciones).
7) Descargo de responsabilidad (resultados no garantizados) en lenguaje claro.
8) Mini FAQ (10) y macros de soporte (8).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-007",
    title: "Cláusula de limitación de responsabilidad (explicada para humanos) + versión legal",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Dos versiones: lenguaje simple para web y una versión formal para T&C.",
    prompt: `Negocio: [ ]
Riesgos: [financiero/salud/tecnología/consultoría]
Jurisdicción: [ ]

Redacta:
1) Versión simple (120–180 palabras) explicando:
   - qué sí cubrimos
   - qué no cubrimos
   - límites razonables
2) Versión formal (T&C) más completa.
3) 6 ejemplos de interpretación (casos) para que soporte entienda.
4) 8 frases prohibidas en soporte que podrían “admitir culpa” + alternativas seguras.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-008",
    title: "Política anti-fraude y anti-abuso: reembolsos, múltiples cuentas, chargebacks, uso indebido",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define señales, umbrales, acciones y comunicación con el cliente sin acusar.",
    prompt: `Producto: [ ]
Señales de abuso conocidas: [ ]
Herramientas: [Stripe Radar, logs, etc.]

Crea:
1) Definiciones: fraude vs abuso vs error.
2) Señales y umbrales (lista de 20) con severidad.
3) Acciones por severidad:
   - pedir verificación
   - limitar acceso
   - suspender
   - negar reembolso
4) Plantillas de comunicación:
   - solicitud de verificación (sin acusar)
   - suspensión temporal
   - decisión final
5) Checklist interno para agentes (12).
6) Registro interno (campos/tags) y escalación a legal.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-009",
    title: "Guía legal-friendly para soporte: cómo disculparse y cómo NO (evitar admisiones)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Frases seguras, estructura de disculpa, y líneas rojas para agentes.",
    prompt: `Tipo negocio: [ ]
Riesgos: [bajo/alto]
Canales: [chat/email]

Crea una guía interna:
1) Principios de comunicación segura (7).
2) Disculpa en 5 pasos (sin admitir responsabilidad legal).
3) 25 frases seguras (por situación).
4) 20 frases peligrosas + reemplazo recomendado.
5) Cuándo escalar a legal (matriz de decisiones).
6) Plantilla de nota interna cuando hay riesgo legal.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-010",
    title: "Política de cambios de precio: comunicación, grandfathering, avisos y excepciones",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define cómo se anuncian cambios de precio y qué derechos tiene el cliente.",
    prompt: `Producto: [SaaS/membresía]
Frecuencia de cambios: [ ]
Grandfathering: [sí/no/por segmentos]
Aviso previo: [días]
País: [ ]

Redacta una política con:
1) Principio: por qué cambian precios (lenguaje humano).
2) Aviso: canales, tiempos, confirmación.
3) Qué pasa con planes existentes (migración/grandfathering).
4) Opciones del cliente: downgrade/cancelar/renovar anual antes.
5) Casos especiales: promociones, cupones, enterprise.
6) FAQ (12).
7) Macros de soporte (10) para objeciones duras.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-011",
    title: "Política de propiedad intelectual: licencia, usos permitidos y prohibidos (digital)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Evita reventa y filtraciones: licencia personal, límites, sanciones y evidencias.",
    prompt: `Tipo contenido: [curso/plantillas/prompts/videos]
Riesgos: [piratería/reventa]
Acceso: [ ]

Redacta:
1) Licencia (personal, no transferible) con ejemplos.
2) Usos permitidos (5–8) y prohibidos (10–15).
3) Medidas ante incumplimiento:
   - warnings
   - revocación
   - acciones legales (si aplica)
4) Proceso de reporte de filtración.
5) Macros de soporte:
   - advertencia
   - cierre por incumplimiento
   - solicitud de retiro`,
    thumbnail: "",
  },
  {
    id: "sop-pol-012",
    title: "Política de confidencialidad (NDA light) para consultoría/servicios",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Plantilla simple de NDA y explicación para clientes no legales.",
    prompt: `Servicio: [consultoría/agencia/desarrollo]
Información sensible: [ ]
Duración: [ ]
Jurisdicción: [ ]

Crea:
1) NDA light (resumen contractual) con:
   - definiciones
   - obligaciones
   - excepciones
   - duración
   - devolución/borrado
2) Versión simple para explicar al cliente (120–180 palabras).
3) Checklist interno antes de compartir documentos.
4) Plantilla de email para enviar NDA y pedir firma.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-013",
    title: "Política de datos y retención: cuánto guardamos, por qué y cómo borramos",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define retención por categorías y proceso interno de borrado.",
    prompt: `Datos: [cuentas, pagos, tickets, analíticas]
Herramientas: [CRM, Helpdesk, Stripe]
Región: [ ]

Genera:
1) Matriz de retención por tipo de dato:
   - duración
   - razón
   - sistema donde vive
2) Proceso interno de borrado/anónimo:
   - pasos
   - responsables
   - verificación
3) Comunicación al usuario:
   - plantilla “confirmación de borrado”
4) FAQ fácil (10) para soporte.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-014",
    title: "Política de menores de edad: acceso, consentimiento, restricción y soporte",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define reglas claras para menores (registro, compras, comunidad).",
    prompt: `Tipo producto: [ ]
Mercado: [ ]
Edad mínima deseada: [ ]

Redacta:
1) Reglas de acceso (edad mínima y verificación si aplica).
2) Consentimiento parental (cómo y cuándo).
3) Restricciones en comunidad/contenidos.
4) Proceso de soporte si detectamos menor:
   - pausar cuenta
   - solicitar confirmación
   - reembolso si corresponde
5) Macros de soporte (8) con tono respetuoso.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-015",
    title: "Política de cookies y tracking: versión legal + versión humana + preferencias",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Crea textos para cookie banner, centro de preferencias y soporte.",
    prompt: `Herramientas: [GA, Meta, Hotjar, etc.]
Países: [UE/LatAm]
Cookies: [necesarias/analíticas/marketing]

Genera:
1) Explicación humana (200–300 palabras).
2) Sección legal más completa para política.
3) Textos para:
   - banner (aceptar/rechazar/personalizar)
   - centro de preferencias (descripciones por categoría)
4) Respuestas de soporte (6) a dudas frecuentes.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-016",
    title: "Plantillas DSAR: acceso, portabilidad, corrección y borrado de datos (paso a paso)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Procedimiento para solicitudes de privacidad: identidad, plazos, ejecución y confirmación.",
    prompt: `Región: [ ]
Helpdesk/CRM: [ ]
Tiempo objetivo: [ ]

Crea:
1) Proceso interno DSAR:
   - verificación de identidad (métodos permitidos)
   - búsqueda en sistemas (checklist)
   - extracción/portabilidad
   - corrección
   - borrado/anónimo
2) Plantillas al usuario:
   - confirmación de recepción
   - solicitud de verificación
   - entrega de datos
   - confirmación de borrado
3) Matriz de excepciones (cuándo no se puede borrar todo) en lenguaje simple.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-017",
    title: "Política de contenido generado por usuarios (UGC): licencias, moderación y remoción",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define licencia de UGC, derechos del usuario y cómo moderar/remover contenido.",
    prompt: `Plataforma: [comunidad/app]
Tipo de UGC: [posts, comentarios, archivos]
Moderación: [ ]

Redacta:
1) Derechos del usuario (propiedad) vs licencia a la plataforma (uso).
2) Contenidos prohibidos (categorías).
3) Proceso de moderación y remoción:
   - reportes
   - tiempos
   - apelación
4) Plantillas:
   - aviso de remoción
   - aviso de warning
   - confirmación de apelación`,
    thumbnail: "",
  },
  {
    id: "sop-pol-018",
    title: "Política de garantías de resultados (descargo): sin humo, claro y justo",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Crea disclaimers honestos para cursos/consultoría sin sonar agresivo.",
    prompt: `Oferta: [curso/consultoría]
Promesas de marketing actuales: [ ]
Riesgo: [alto/bajo]

Genera:
1) Descargo “humano” (120–180 palabras) que:
   - no prometa resultados
   - explique variables
   - sea empático
2) Versión formal para T&C.
3) 8 ejemplos de “qué sí decimos” en marketing vs “qué no decimos”.
4) Macro soporte para clientes que exigen resultado/reembolso por expectativas.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-019",
    title: "Política de préstamos/credenciales compartidas: detección, medidas y comunicación",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define uso personal y cómo actuar ante partage sin pelear con el cliente.",
    prompt: `Producto: [curso/SaaS]
Regla: [1 usuario / X dispositivos]
Señales: [IPs, sesiones, etc.]

Crea:
1) Regla clara (versión usuario).
2) Regla formal (T&C).
3) Proceso de enforcement:
   - advertencia
   - limitación
   - suspensión
4) Plantillas de soporte:
   - primer aviso
   - segundo aviso
   - acción final
5) Opciones para el cliente (upgrade, team plan, etc.).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-020",
    title: "Política de promociones y cupones: condiciones, caducidad, combinaciones y disputas",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Evita guerras por cupones: define reglas y respuestas para soporte.",
    prompt: `Promos típicas: [ ]
Reglas deseadas: [no combinable, 1 por cuenta, etc.]

Redacta:
1) Condiciones de uso de cupones/promos.
2) Caducidad y disponibilidad.
3) Errores comunes y cómo resolver:
   - cupón no aplica
   - cupón vencido
   - cupón ya usado
   - precio cambió
4) Macros de soporte (10) para cada caso con alternativas.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-021",
    title: "Política de cumplimiento de pagos: impagos, suspensiones, reintentos y reactivación",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define el ciclo de cobro fallido y suspensión sin sorprender al usuario.",
    prompt: `Producto: [SaaS/membresía]
Reintentos: [ ]
Suspensión: [día X]
Notificaciones: [email/in-app]

Genera:
1) Política: cronograma (día 0, 1, 3, 7…).
2) Textos de notificación por etapa (4–6 mensajes).
3) Qué pasa con datos/acceso durante suspensión.
4) Proceso de reactivación.
5) Macros de soporte y objeciones (10).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-022",
    title: "Política de soporte (SLA): prioridades P1–P4, tiempos y canales",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define alcance del soporte, prioridades y tiempos para evitar expectativas irreales.",
    prompt: `Canales: [email/chat/whatsapp]
Horario: [ ]
Equipo: [ ]
Clientes VIP: [sí/no]

Redacta:
1) Alcance: qué cubre soporte y qué no.
2) Prioridades P1–P4 con ejemplos claros.
3) SLA por prioridad y por plan.
4) Proceso de escalación.
5) Política de emergencias y mantenimiento.
6) Resumen público (8 bullets) + guía interna para agentes.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-023",
    title: "Política de accesibilidad: compromisos, soporte y mejoras (versión humana)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Compromiso accesible: cómo pedir ayuda, cómo se tratan solicitudes y plazos.",
    prompt: `Producto: [web/app]
Audiencia: [ ]
Recursos: [equipo/limitado]

Crea:
1) Declaración de accesibilidad (humana) con compromisos realistas.
2) Canal para reportar problemas + qué info pedir.
3) Proceso interno: evaluación → fix → comunicación.
4) FAQ (8) y macros de soporte (6).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-024",
    title: "Política de envíos internacionales: aduanas, impuestos, tiempos y responsabilidades",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Evita conflictos: define responsabilidades de aduanas y cómo informar al cliente.",
    prompt: `Países destino: [ ]
Courier: [ ]
Incoterms (si aplica): [ ]

Redacta:
1) Tiempos estimados realistas y variaciones.
2) Aduanas e impuestos: quién paga y cómo se informa.
3) Qué pasa si el paquete es retenido o devuelto.
4) Proceso de reclamo con courier.
5) Macros de soporte (10) para casos típicos.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-025",
    title: "Política anti-spam y comunicaciones: frecuencia, opt-out y preferencias",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Textos para newsletter/marketing: opt-out, preferencias y manejo de reclamos.",
    prompt: `Canales: [email/WhatsApp/SMS]
Tipo de mensajes: [marketing/operacionales]
Preferencias: [sí/no]

Crea:
1) Política de comunicaciones (humana) con:
   - qué enviamos
   - frecuencia
   - cómo darse de baja
2) Texto para footer de emails.
3) Macros de soporte (8) para:
   - “no me escriban”
   - “me di de baja y siguen”
   - “nunca me suscribí”
4) Proceso interno de supresión (checklist).`,
    thumbnail: "",
  },

  {
    id: "sop-pol-026",
    title: "Plantillas legales para soporte: aprobado/negado/caso gris (tono humano + seguro)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Pack de macros para casos con riesgo legal: claridad sin admisión.",
    prompt: `Tema: [reembolso/chargeback/infracción/privacidad]
Tono: [ ]

Crea un pack con:
1) Plantilla “aprobado” (2 versiones).
2) Plantilla “negado” con alternativas (2 versiones).
3) Plantilla “caso gris: pedir info” (2 versiones).
4) 12 frases seguras y 12 frases peligrosas a evitar.
5) Sección “nota interna” para agentes: qué registrar y cómo.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-027",
    title: "Política de disputas y resolución: mediación, arbitraje (si aplica) y contacto",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Cómo manejar conflictos: escalación, contacto formal y pasos ordenados.",
    prompt: `Jurisdicción: [ ]
Canal legal: [email]
Tipo negocio: [ ]

Redacta:
1) Proceso de reclamo formal (pasos).
2) Plazos de respuesta.
3) Qué información se solicita.
4) Cómo se documenta internamente.
5) Resumen para soporte (qué decir y qué no decir).
6) Plantillas para:
   - acuse de recibo
   - solicitud de información
   - resolución propuesta`,
    thumbnail: "",
  },
  {
    id: "sop-pol-028",
    title: "Política de pruebas y trials: qué incluye, límites, conversión y reembolsos",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define pruebas gratis sin sorpresas: límites y conversión transparente.",
    prompt: `Trial: [7/14/30 días]
Requiere tarjeta: [sí/no]
Límites: [features/uso]
Conversión: [auto/manual]

Redacta:
1) Política de trial (humana + clara).
2) Textos para checkout y email:
   - inicio trial
   - recordatorio antes de convertir
   - confirmación de conversión
3) Reembolsos relacionados con trial.
4) FAQ (10) y macros de soporte (8).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-029",
    title: "Política de cambios en el servicio: mantenimiento, cambios de features y deprecated",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Cómo comunicar cambios: avisos, alternativas y soporte sin prometer roadmap.",
    prompt: `Producto: [ ]
Cambios típicos: [ ]
Canales aviso: [email/in-app/status]

Crea:
1) Política de cambios con:
   - mantenimiento programado
   - cambios de features
   - eliminaciones/deprecations
2) Avisos modelo (3):
   - anuncio
   - recordatorio
   - cierre
3) FAQ (8) y macros (8) para objeciones.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-030",
    title: "Política de uso de IA y contenido generado: responsabilidades y límites (para prompts/cursos IA)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define responsabilidades sobre outputs de IA, derechos y precauciones.",
    prompt: `Producto: [prompts/curso IA/SaaS]
Casos de uso sensibles: [salud/finanzas/legal]
Jurisdicción: [ ]

Redacta:
1) Descargo sobre outputs (no consejo profesional).
2) Responsabilidad del usuario: verificación, cumplimiento, derechos de autor.
3) Prohibiciones: uso ilegal, suplantación, etc.
4) Guía de buenas prácticas (10).
5) FAQ (10) y macros de soporte (8).`,
    thumbnail: "",
  },

  {
    id: "sop-pol-031",
    title: "Política de eliminación de cuenta: acceso, datos, facturación y efectos posteriores",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Cierra bien: qué se borra, qué se conserva y por qué (retención).",
    prompt: `Producto: [ ]
Región: [ ]
Sistemas: [CRM/helpdesk/Stripe]

Crea:
1) Política de eliminación:
   - qué se borra
   - qué se anonimiza
   - qué se conserva y por cuánto (razón)
2) Proceso para el usuario (pasos).
3) Plantillas de soporte:
   - confirmación recepción
   - solicitud verificación
   - confirmación final
4) FAQ (8).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-032",
    title: "Política de backups y recuperación: límites, tiempos y expectativas (SaaS)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define si hay backups, cuánto tiempo, y qué recuperaciones se pueden hacer.",
    prompt: `Producto SaaS: [ ]
Backups: [sí/no]
Retención backups: [ ]
Restauración: [sí/no/costo]

Redacta:
1) Política de backups (clara, sin prometer lo imposible).
2) Qué se puede recuperar y qué no.
3) Tiempos estimados y proceso.
4) Plantillas de soporte (6) para solicitudes de restore.
5) Nota interna: cuándo aprobar restore y qué registrar.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-033",
    title: "Política de soporte a integraciones de terceros: límites y responsabilidades",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define qué soportas en Zapier/Meta/Google/etc. y dónde termina tu responsabilidad.",
    prompt: `Integraciones: [lista]
Soporte que sí das: [ ]
Soporte que no das: [ ]

Crea:
1) Política de integraciones:
   - alcance (lo que sí)
   - fuera de alcance (lo que no)
2) Checklist de diagnóstico antes de escalar.
3) Macros de soporte:
   - “parece del tercero”
   - “necesito estas capturas”
   - “aquí está el workaround”
4) FAQ (10).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-034",
    title: "Política de eventos y talleres presenciales: cancelación, asistencia y reembolsos",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Reglas claras para eventos: cambios de nombre, no-shows, fuerza mayor.",
    prompt: `Evento: [ ]
Fecha: [ ]
Capacidad: [ ]
Reembolso: [reglas]

Redacta:
1) Cancelación por parte del cliente (ventanas y porcentajes si aplica).
2) Cancelación por parte del organizador (fuerza mayor).
3) Transferencia de entrada a otra persona.
4) No-show y tardanzas.
5) Cambios de fecha/lugar.
6) Macros de soporte (10) para casos reales.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-035",
    title: "Política de afiliados: términos, pagos, fraude y terminación (resumen operativo)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Estructura reglas para afiliados: atribución, pagos, devoluciones y abuso.",
    prompt: `Programa afiliados: [ ]
Comisión: [ ]
Ventana de atribución: [ ]
Pago mínimo: [ ]
Herramienta: [ ]

Crea:
1) Términos operativos:
   - atribución
   - pagos
   - devoluciones/chargebacks
   - fraude y auto-compra
   - terminación
2) FAQ afiliados (12).
3) Macros soporte (10) para disputas de comisión.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-036",
    title: "Política de soporte para contenido sensible: salud/finanzas/legal (limitaciones y escalación)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Cubre límites: no dar consejo profesional; guías de escalación y plantillas.",
    prompt: `Tema sensible: [salud/finanzas/legal]
Producto/curso: [ ]
Mercados: [ ]

Crea:
1) Política de limitaciones (humana).
2) Mensajes de soporte para:
   - solicitud de consejo profesional
   - insistencia del cliente
3) Cuándo escalar o rechazar.
4) Recursos alternativos sugeridos (no específicos).
5) Nota interna: frases seguras y prohibidas.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-037",
    title: "Política de contenido y copyright: DMCA/takedowns (proceso y plantillas)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Proceso para reclamos de copyright: recepción, verificación, acción y apelación.",
    prompt: `Plataforma: [web/comunidad]
Canal legal: [email]
País: [ ]

Genera:
1) Proceso de takedown:
   - qué debe incluir el reclamo
   - tiempos
   - acciones
2) Plantillas:
   - acuse de recibo
   - solicitud de info faltante
   - confirmación de retiro
   - aviso al usuario afectado
3) Proceso de contra-notificación (si aplica) a nivel general.
4) Checklist interno.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-038",
    title: "Política de devoluciones por “producto no recibido”: criterios, investigación y resolución",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define cuándo reembolsas, cuándo reenvías y cómo investigas el courier.",
    prompt: `Courier: [ ]
Estatus: [entregado/pendiente]
Prueba de entrega: [sí/no]
Zona de riesgo: [sí/no]

Redacta:
1) Criterios para investigar (plazos, evidencia).
2) Qué pedir al cliente (mínimo).
3) Proceso con courier (pasos).
4) Resolución por escenarios:
   - reenvío
   - reembolso
   - espera con update
5) Macros soporte (10).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-039",
    title: "Política de reembolso por error del cliente: compras duplicadas, plan equivocado, equivocación",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Reglas para casos humanos: compra incorrecta y cómo resolver sin abrir abuso.",
    prompt: `Producto: [ ]
Casos comunes: [duplicado/plan equivocado]
Ventana “gracia”: [horas/días]

Crea:
1) Política de “gracia” (si aplica) con límites.
2) Criterios de aprobación:
   - tiempo desde compra
   - uso/consumo
   - historial
3) Alternativas: cambio de plan, crédito, soporte.
4) Plantillas de soporte (aprobado/negado/caso gris).
5) Checklist interno anti-abuso.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-040",
    title: "Política de reembolsos en cursos: progreso consumido, módulos vistos, descargas y excepciones",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Diseña una política justa basada en consumo real sin ser agresiva.",
    prompt: `Curso: [ ]
Plataforma: [ ]
Se puede medir progreso: [sí/no]
Material descargable: [sí/no]

Redacta:
1) Criterios por consumo:
   - % visto
   - descargas
   - tiempo desde compra
2) Excepciones razonables.
3) Proceso de solicitud.
4) Macros de soporte (12).
5) Página “resumen simple” para checkout.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-041",
    title: "Pack de cláusulas para checkout: términos, reembolsos, suscripción, licencia (copy corto)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Textos cortos para checkout que reducen disputas y confusión.",
    prompt: `Producto: [ ]
Modelo: [1 pago/suscripción]
Reembolso: [sí/no/condiciones]
Licencia: [personal/no transferible]

Genera copies cortos para:
1) Caja de términos (1–2 líneas).
2) Caja de reembolso (1–2 líneas) clara.
3) Caja de renovación automática (si aplica) (1–2 líneas).
4) Caja de licencia/uso (1–2 líneas).
5) Nota anti-chargeback (humana, no amenazante).
6) 10 variantes por elemento (para A/B).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-042",
    title: "Matriz interna de escalación legal: qué casos deben ir a legal y cómo documentarlos",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Guía para agentes: umbrales de riesgo, checklist y plantillas internas.",
    prompt: `Tipo negocio: [ ]
Riesgos: [ ]

Crea:
1) Matriz de escalación (tabla lógica) con:
   - tipo de caso
   - severidad
   - acción inmediata
   - quién decide
2) Checklist de documentación (15 campos).
3) Plantilla de nota interna “legal risk”.
4) Frases seguras para soporte mientras se investiga (10).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-043",
    title: "Política de grabación de llamadas y consentimiento: textos por región y canal",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Incluye scripts de aviso, alternativas y cómo registrar consentimiento.",
    prompt: `Canales: [llamada/zoom]
Región: [ ]
Finalidad: [calidad/seguridad]

Genera:
1) Script de aviso de grabación (3 tonos).
2) Qué hacer si el cliente no consiente:
   - alternativa (no grabar / email)
3) Cómo registrar consentimiento internamente (campos).
4) Texto para política pública (humano).
5) FAQ (8) para clientes.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-044",
    title: "Política de accesos compartidos en planes team: roles, límites y responsabilidad",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define roles, admins, responsabilidad por usuarios y seguridad.",
    prompt: `Producto: [SaaS]
Plan team: [sí/no]
Roles: [admin/miembro/visor]

Redacta:
1) Definición de roles y permisos.
2) Responsabilidad del admin sobre accesos.
3) Límites de dispositivos/sesiones.
4) Proceso de alta/baja de usuarios.
5) Macros soporte (10) para conflictos de roles y accesos.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-045",
    title: "Política de “uso justo” (fair use) en planes ilimitados: límites razonables y enforcement",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Protege infraestructura sin engañar: define “ilimitado” con uso justo.",
    prompt: `Plan “ilimitado”: [ ]
Recursos críticos: [API/descargas/consultas]
Señales abuso: [ ]

Crea:
1) Definición de fair use (humana) y formal.
2) Ejemplos: 10 casos que sí y 10 que no.
3) Proceso de enforcement escalonado.
4) Plantillas de soporte (8) sin acusar.
5) Alternativa: plan enterprise/upgrade.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-046",
    title: "Política de devoluciones por daño en transporte: evidencia, plazos y resolución",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define qué fotos pedir, tiempos y decisiones (reenvío/reembolso).",
    prompt: `Producto físico: [ ]
Courier: [ ]
Ventana para reportar: [ ]

Redacta:
1) Plazo para reportar daño (y por qué).
2) Evidencia mínima:
   - fotos del paquete
   - etiquetas
   - producto
3) Proceso:
   - revisión
   - resolución
   - logística
4) Plantillas soporte (10).
5) Checklist interno anti-fraude.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-047",
    title: "Política de cambios de dirección tras compra: criterios y límites",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Evita pérdidas: cuándo se puede cambiar dirección y qué comprobaciones hacer.",
    prompt: `Tipo: [físico]
Estado pedido: [preparación/enviado]
Riesgo fraude: [alto/bajo]

Crea:
1) Política: cuándo sí y cuándo no se cambia dirección.
2) Verificación de identidad (métodos permitidos).
3) Procedimiento interno.
4) Plantillas soporte (8) para:
   - aprobado
   - negado
   - caso gris`,
    thumbnail: "",
  },
  {
    id: "sop-pol-048",
    title: "Política de regalos (gift purchases): acceso, transferencias, reembolsos y disputas",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Reglas para compras regalo sin caos: quién es titular, cómo transferir y soporte.",
    prompt: `Producto: [digital/físico]
Regalo: [sí/no]
Transferible: [sí/no]

Redacta:
1) Quién es titular de compra y acceso.
2) Cómo se entrega el regalo y se activa.
3) Reembolsos: quién puede pedirlo y cuándo.
4) Disputas frecuentes (8) y resolución.
5) Macros soporte (10).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-049",
    title: "Política de comunicación de cambios legales/políticas: avisos, aceptación y registro",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Define cómo notificas actualizaciones de términos, y cómo se registra aceptación.",
    prompt: `Producto: [ ]
Canales de aviso: [email/in-app]
Aceptación: [clickwrap/browsewrap]

Crea:
1) Política de actualizaciones:
   - cuándo se notifican
   - cuándo entran en vigor
2) Textos:
   - email de actualización
   - banner in-app
   - modal de aceptación
3) Proceso interno:
   - versionado
   - registro de aceptación
4) FAQ (8) y macros de soporte (6).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-050",
    title: "Kit de ‘resumen para soporte’: convertir políticas largas en reglas accionables (cheat sheet)",
    area: "Atención al Cliente & SOPs",
    category: "Políticas & Legales",
    summary:
      "Transforma políticas en un manual operativo para agentes con decisiones rápidas y macros.",
    prompt: `Pega aquí tus políticas (o resume): [ ]
Objetivo: soporte rápido y consistente

Genera:
1) Cheat sheet en 1 página:
   - reglas “si pasa X → hacemos Y”
   - excepciones
   - escalaciones
2) Árbol de decisiones:
   - reembolsos
   - cancelaciones
   - abuso/fraude
3) 25 macros de soporte: aprobar/negado/caso gris/escala.
4) Lista de “líneas rojas” (10) y frases seguras (10).
5) Checklist de auditoría: cómo asegurar que agentes siguen políticas.`,
    thumbnail: "",
  },
];
