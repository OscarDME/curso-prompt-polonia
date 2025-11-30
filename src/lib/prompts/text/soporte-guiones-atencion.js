// src/lib/prompts/text/soporte-guiones-atencion.js

export const textPromptsSoporteGuionesAtencion = [
  {
    id: "sop-atn-001",
    title: "Guion maestro de atención (multicanal): saludo → diagnóstico → solución → cierre",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Guion completo para chat/email/llamada con árbol de diagnóstico, planes A/B/C y checklist del agente.",
    prompt: `Canal: [chat/email/llamada/WhatsApp]
Idioma: [ ]
Tono de marca: [cercano/neutral/premium]
Producto/servicio: [ ]
Situación: [describe el problema]
Restricciones (política/SLA): [ ]

Crea un GUION MAESTRO listo para copiar/pegar con:
1) Saludo inicial (3 versiones: estándar, empático, ultra breve).
2) Confirmación de identidad (si aplica) sin fricción (2 variantes).
3) Diagnóstico con árbol de preguntas:
   - 10 preguntas en orden, de menor a mayor esfuerzo para el cliente
   - qué señal buscas en cada respuesta
   - cuándo detener preguntas y pasar a solución
4) Parafraseo y validación:
   - 4 fórmulas para mostrar comprensión sin asumir culpa
5) Solución paso a paso:
   - Plan A (más probable) con pasos numerados (y qué debería ver el cliente)
   - Plan B si falla (por qué puede fallar / cómo corregir)
   - Plan C (escalación) con datos a recolectar
6) Cierre:
   - resumen 2 líneas
   - acción del cliente y acción del equipo
   - confirmación final (pregunta simple)
7) Seguimiento:
   - 2 mensajes si no responde (24h/72h)
8) Checklist interno (12 puntos) para QA y documentación del caso.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-002",
    title: "Guion de desescalada: cliente molesto (empatía → control → solución) con límites",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Desescalada real: frases exactas, límites, protocolos ante insultos y cierre con acuerdo.",
    prompt: `Contexto del enojo: [cobro/retraso/bug/mala atención/expectativa]
Canal: [chat/llamada/email]
Qué puedo ofrecer: [ ]
Qué NO puedo ofrecer: [ ]
Políticas relevantes: [ ]

Crea un guion con:
1) Apertura empática (6 variantes por intensidad).
2) “Tomar control” sin confrontar:
   - 8 frases para ordenar la conversación y avanzar
3) Diagnóstico mínimo:
   - 6 preguntas cortas, una por mensaje
   - cómo priorizar (urgencia vs impacto)
4) Propuesta de solución con opción A/B:
   - A: rápida (workaround)
   - B: completa (solución definitiva)
   - cómo presentar opciones para que el cliente elija
5) Cómo decir NO:
   - 10 formas de negar una petición sin sonar rígido
   - alternativas concretas por cada NO
6) Si hay insultos/amenazas:
   - protocolo en 4 pasos
   - frases de advertencia y cierre formal
7) Cierre:
   - confirmación explícita del acuerdo + próximo update`,
    thumbnail: "",
  },
  {
    id: "sop-atn-003",
    title: "Guion para reembolsos: elegible / no elegible / caso gris (con alternativas y objeciones)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Plantillas sólidas para aprobar o negar reembolsos sin conflicto, con alternativas y respuestas a objeciones.",
    prompt: `Producto/servicio: [ ]
Política de reembolso (resumen): [ ]
Motivo del cliente: [ ]
Canal: [ ]

Redacta 3 guiones:
A) ELEGIBLE:
- confirmación
- pasos y tiempos
- comprobante y cierre

B) NO ELEGIBLE:
- explicar política con lenguaje humano
- 4 alternativas (crédito, cambio, soporte, pausa, upgrade, etc.)
- 10 “frases prohibidas” y cómo reemplazarlas

C) CASO GRIS:
- pedir evidencia extra sin culpar
- mantener buena voluntad
- decidir y justificar con transparencia

Incluye:
- 12 objeciones típicas (precio/tiempo/confianza) y respuestas
- checklist interno de documentación (10 campos).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-004",
    title: "Guion de cancelación con retención ética (detectar motivo real → ofrecer ajuste → confirmar)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Reduce churn sin manipular: diagnóstico, alternativas útiles y cancelación limpia si insiste.",
    prompt: `Producto: [ ]
Plan del cliente: [ ]
Motivo probable: [precio/no uso/bug/falta valor/soporte]
Palancas permitidas: [pausa/downgrade/descuento/onboarding]
Canal: [ ]

Crea un guion con:
1) Apertura + validación (3 opciones).
2) Diagnóstico rápido (7 preguntas) para encontrar causa real.
3) Matriz motivo→oferta:
   - para cada motivo, 2 alternativas razonables y cómo presentarlas
4) Si acepta alternativa:
   - pasos exactos + confirmación por escrito
5) Si insiste en cancelar:
   - confirmación clara + qué conserva/pierde + fecha efectiva
   - despedida elegante y puerta abierta
6) Winback:
   - 2 mensajes (día 7 y día 21) adaptados al motivo.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-005",
    title: "Guion de onboarding express (7–10 min): cliente perdido → guía → mini victoria → siguiente paso",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Convierte confusión en progreso inmediato con diagnóstico suave, pasos concretos y verificación.",
    prompt: `Producto/feature: [ ]
Nivel del cliente: [principiante/intermedio]
Objetivo del cliente: [ ]
Canal: [chat/llamada]

Crea:
1) Diagnóstico sin vergüenza (6 preguntas).
2) Ruta guiada en 8–12 pasos:
   - qué hacer
   - qué debería ver en pantalla
   - errores comunes y correcciones
3) Mini-tarea de confirmación (1 acción simple).
4) Cierre:
   - resumen
   - “siguiente mejor paso” (prioridad 1)
   - 2 recursos sugeridos (si no existen, crear títulos + bullets).`,
    thumbnail: "",
  },

  {
    id: "sop-atn-006",
    title: "Guion para retrasos/logística: tracking, incidentes, reenvío y compensación (si aplica)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Plantilla para demoras: empatía + hechos + opciones + compromiso + seguimiento.",
    prompt: `Tipo operación: [ecommerce/servicios]
Estado: [ ]
Política compensación: [ ]
Canal: [ ]

Crea un guion:
1) Apertura empática (4 versiones).
2) Solicitud de datos mínima en 1 mensaje.
3) Explicación del estado:
   - versión corta
   - versión detallada pero simple
4) Opciones:
   - esperar con update programado
   - reenvío
   - reembolso parcial/total (si aplica)
5) Compromiso:
   - qué haremos y cuándo (sin prometer de más)
6) Seguimiento:
   - 3 macros si sigue sin update
   - 2 macros “aparece entregado pero no lo recibí”
7) Registro interno:
   - tags + campos obligatorios.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-007",
    title: "Macros de chat (30) para casos frecuentes: claridad + tono humano + CTA único",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Crea macros listas para copiar/pegar para acelerar soporte sin sonar robótico.",
    prompt: `Producto/servicio: [ ]
Tono: [cercano/neutral/premium]
Casos frecuentes (si tienes): [pega lista]

Genera 30 macros (1–3 líneas) con:
- TÍTULO de macro (corto)
- TEXTO
- CTA único claro (qué necesito del cliente)
Agrupa por:
1) Info general (6)
2) Cuenta/acceso (8)
3) Cobros (6)
4) Bugs (6)
5) Envíos/logística (4)

Incluye:
- 1 variante alternativa por macro (más directa)
- lista de 12 frases a evitar + reemplazo recomendado.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-008",
    title: "Guion de escalación a nivel 2: datos mínimos, expectativas, updates y cierre",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Escala sin perder confianza: recopila evidencia, define SLA y mantiene control.",
    prompt: `Tipo de caso: [bug/cobro/seguridad/legal]
SLA ideal: [ ]
Canal: [ ]

Crea:
1) Mensaje al cliente para escalar (3 versiones).
2) Checklist de evidencia (12–16 items) + plantilla para que el cliente responda fácil.
3) Cómo hablar de tiempos:
   - cuando hay ETA
   - cuando NO hay ETA (rangos + próximo update)
4) Updates:
   - 3 mensajes proactivos (con y sin novedades)
5) Resolución:
   - mensaje final con causa (alto nivel), solución, prevención, verificación
6) Registro interno:
   - plantilla de ticket (campos y tags).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-009",
    title: "Guion de upsell/cross-sell desde soporte (ético): solo si mejora la solución",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Detecta señales correctas, ofrece como opción y maneja objeciones sin presión.",
    prompt: `Producto: [ ]
Planes/upsells: [ ]
Problema del cliente: [ ]
Canal: [ ]

Crea un guion:
1) Primero resolver el problema base (frase puente).
2) Señales para proponer upgrade (7 señales).
3) Oferta ética:
   - 6 frases para presentar como “opción”
   - 3 ejemplos de copy según motivo (límite/velocidad/feature)
4) Objeciones y respuestas:
   - “no quiero pagar más”
   - “solo era una duda”
   - “lo pienso”
5) Cierre:
   - confirmar que la solución base quedó lista
   - comparativo simple (bullet A vs B).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-010",
    title: "Guion de llamada de soporte: control de tiempos, frases de transición y plantilla de notas",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Estructura de llamada para resolver rápido y documentar perfecto.",
    prompt: `Tipo: [técnico/facturación/onboarding]
Duración objetivo: [10–15 min]
Producto: [ ]

Diseña:
1) Apertura (30–60s): saludo + objetivo + confirmación.
2) Diagnóstico (3–5 min): preguntas en orden + por qué se pregunta.
3) Resolución (5–7 min): pasos + qué decir mientras el cliente ejecuta.
4) Cierre (1–2 min): recap + next steps + confirmación de satisfacción.
5) Plan B si no se resuelve en llamada: escalación + tiempos + seguimiento.
6) Plantilla de notas:
   - campos obligatorios
   - tags
   - resumen 3 líneas.`,
    thumbnail: "",
  },

  // ---- A partir de aquí: 40 prompts más (hasta llegar a 50). ----

  {
    id: "sop-atn-011",
    title: "Guion para “me cobraron doble”: verificación, explicación simple y resolución (3 escenarios)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Doble cobro: retención bancaria vs duplicado real vs ciclos de suscripción.",
    prompt: `Pasarela: [Stripe/PayPal/etc.]
Tipo: [suscripción/compra]
Datos: [correo, fecha, IDs]

Crea un guion:
1) Validación + tranquilidad (3 versiones).
2) Solicitud de datos mínima (1 mensaje).
3) Diagnóstico por escenarios:
   - retención bancaria
   - duplicado real
   - confusión de ciclos/planes
4) Resolución por escenario (pasos + tiempos).
5) Cierre con evidencia:
   - confirmación por escrito
   - mensaje de seguimiento a 48h.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-012",
    title: "Guion para “no puedo iniciar sesión”: recuperación, 2FA, verificación y prevención",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Login sin drama: pasos por plataforma y seguridad sin pedir datos sensibles.",
    prompt: `Sistema: [email+pass/SSO/magic link/2FA]
Plataforma: [web/app]
Error: [texto]

Crea:
1) Diagnóstico rápido (8 preguntas).
2) Solución paso a paso (Plan A/B/C):
   - reset
   - magic link
   - caché/incógnito
   - app (iOS/Android)
3) Seguridad:
   - cómo verificar identidad sin pedir contraseñas
   - qué hacer si hay sospecha de compromiso
4) Prevención (6 tips).
5) Escalación: checklist de datos técnicos.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-013",
    title: "Guion para “no funciona” (vago): convertir en repro steps + evidencia (sin frustrar)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Ordena caos: pasos reproducibles, esperado vs obtenido, entorno y pruebas rápidas.",
    prompt: `Cliente dice: “no funciona”
Feature: [ ]
Canal: [ ]

Crea un guion:
1) Validación (3 opciones).
2) Solicitar repro steps con plantilla:
   - Paso 1/2/3
   - Esperaba/Obtuve
   - Captura/video (si puede)
3) Entorno: dispositivo, navegador, versión, conexión.
4) Pruebas rápidas (6) y cómo explicarlas.
5) Si es bug: workaround + escalación + update plan.
6) Cierre: resumen + siguiente paso + confirmación.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-014",
    title: "Guion para clientes VIP: prioridad, lenguaje premium, seguimiento proactivo (sin prometer de más)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Experiencia VIP: 3 preguntas máximo, control total y updates proactivos.",
    prompt: `Nivel VIP: [ ]
SLA: [ ]
Problema: [ ]
Canal: [ ]

Crea guion premium:
1) Apertura con reconocimiento (sin exagerar).
2) Diagnóstico ultra eficiente (3 preguntas).
3) Solución:
   - pasos o escalación (con control)
4) Updates proactivos:
   - mensaje a 2h y a 24h (aunque no haya novedades)
5) Cierre:
   - confirmación + puerta abierta
6) Nota interna: checklist VIP + registro account health.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-015",
    title: "Guion de disculpa efectiva (sin admitir culpa legal): impacto → acción → prevención",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Cómo pedir disculpas bien sin meterte en líos: frases seguras y frases prohibidas.",
    prompt: `Situación: [ ]
Riesgo legal: [bajo/medio/alto]
Compensación permitida: [ ]

Crea:
1) Estructura de disculpa en 5 pasos (guion textual).
2) 15 frases seguras + 10 frases a evitar (con reemplazo).
3) 5 disculpas cortas para chat.
4) 2 disculpas largas para email (2 tonos).
5) Guía para agente: cuándo escalar a legal + cómo documentar.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-016",
    title: "Guion proactivo de incidente: aviso inicial + FAQ + updates + mensaje de cierre",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Comunicaciones de incidentes: claro, humano, útil, con workaround y cadencia de updates.",
    prompt: `Incidente: [ ]
Impacto: [ ]
ETA: [ ]
Workaround: [ ]
Canales: [email/banner/status/chat]

Redacta:
1) Aviso inicial (120–180 palabras).
2) Versión corta (máx 240 caracteres).
3) FAQ (10 preguntas y respuestas).
4) Update #1 (avance) + Update #2 (en curso sin ETA) + Update #3 (resuelto).
5) Mensaje post-incidente:
   - qué pasó (alto nivel)
   - qué se hizo
   - qué se hará para prevenir
   - cómo reportar si persiste.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-017",
    title: "Guion de handoff interno (transferencia entre equipos) + mensaje al cliente",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Evita ping-pong: plantillas para cliente y para equipo receptor con evidencia y tags.",
    prompt: `Equipo receptor: [facturación/técnico/legal]
Caso: [ ]
Canal: [ ]

Crea:
A) Mensaje al cliente (3 versiones) explicando handoff + expectativas.
B) Handoff interno:
- resumen 5 líneas
- pasos ya intentados
- evidencia adjunta
- hipótesis
- prioridad y razón
- preguntas abiertas (3)
C) Checklist anti ping-pong (10 ítems) + tags recomendados.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-018",
    title: "Guion para “me atendieron mal”: recuperación de servicio y retención",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Recupera confianza: disculpa, re-encuadre, solución y seguimiento.",
    prompt: `Queja: [ ]
Canal: [ ]
Compensación permitida: [ ]

Crea:
1) Apertura sin defensividad (3 variantes).
2) Preguntas suaves (6) para entender y registrar.
3) Reparación:
   - acción inmediata
   - opción de compensación (si aplica)
4) Compromiso de mejora (sin promesas vacías).
5) Cierre + seguimiento 24–48h.
6) Nota interna: VoC + escalación a supervisor.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-019",
    title: "Guion para explicar políticas sin sonar robot: razón humana + alternativas",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Explica reglas con empatía y opciones, y maneja objeciones típicas.",
    prompt: `Política: [reembolsos/garantía/plazos/uso aceptable]
Caso: [ ]
Canal: [ ]

Crea:
1) Explicación breve (2–3 frases) + versión detallada (1 párrafo).
2) “Por qué existe” en lenguaje humano.
3) 4 alternativas concretas si la política no permite lo pedido.
4) Respuestas a objeciones:
   - “es injusto”
   - “otra empresa sí”
   - “nadie me avisó”
   - “quiero supervisor”
5) Cierre: resumen + siguiente paso.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-020",
    title: "Checklist de cierre perfecto: reducir re-contacto y prevenir futuros tickets",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Cierres que bajan re-contacto: resumen, prevención, recurso y confirmación.",
    prompt: `Caso resuelto: [ ]
Canal: [ ]

Crea 10 plantillas de cierre:
- 4 para chat (1–2 líneas)
- 4 para email (1 párrafo)
- 2 para llamada (guion hablado)
Cada cierre debe incluir:
1) Qué se resolvió (resumen)
2) Paso preventivo (si vuelve a pasar…)
3) Recurso/FAQ o tip
4) Pregunta final de confirmación

Incluye además:
- 6 respuestas si el cliente responde “sigue igual”.`,
    thumbnail: "",
  },

  // 30 prompts restantes (21–50)
  {
    id: "sop-atn-021",
    title: "Guion para facturación: invoice, VAT, datos fiscales y reenvío de comprobantes",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Resuelve dudas fiscales sin fricción: plantilla + datos mínimos + pasos claros.",
    prompt: `País: [ ]
Tipo cliente: [B2B/B2C]
Solicitud: [factura/VAT/datos fiscales/cambio razón social]
Canal: [ ]

Crea un guion:
1) Apertura + confirmación de solicitud.
2) Datos mínimos a pedir (en una sola lista) + razón de cada dato.
3) Pasos de resolución según solicitud:
   - reenvío comprobante
   - emisión/corrección factura
   - cambio datos fiscales
4) Tiempos y “siguiente update”.
5) Cierre + checklist interno para registrar.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-022",
    title: "Guion para contracargos/disputas: contención, evidencia, proceso y comunicación",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Maneja disputas sin confrontar: explica proceso, recolecta evidencia y reduce riesgo.",
    prompt: `Pasarela: [ ]
Disputa: [abierta/cerrada]
Motivo: [fraude/no reconocido/servicio no recibido]
Canal: [ ]

Crea:
1) Apertura cuidadosa (sin acusar).
2) Explicación del proceso (simple) + tiempos.
3) Evidencia a solicitar (checklist) y cómo pedirla.
4) Opciones:
   - resolver amigable (reembolso parcial/solución)
   - seguir disputa (si aplica)
5) Cierre:
   - confirmación por escrito
   - seguimiento programado.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-023",
    title: "Guion para seguridad: sospecha de cuenta comprometida (bloqueo, verificación, recuperación)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Protocolo textual para incidentes de seguridad sin pedir datos sensibles.",
    prompt: `Señales: [inicio extraño/cambios no autorizados/2FA]
Canal: [ ]

Crea un guion:
1) Apertura de seguridad (calma + control).
2) Acciones inmediatas (paso a paso) para proteger:
   - reset
   - cerrar sesiones
   - activar 2FA
3) Verificación identidad (métodos permitidos) sin pedir contraseñas.
4) Si hay daño:
   - qué datos revisar
   - cómo revertir
5) Cierre:
   - resumen + checklist preventiva + seguimiento.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-024",
    title: "Guion para abuso en soporte: insultos, acoso y lenguaje inapropiado (límites + cierre)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Límites firmes y respetuosos: advertencia, registro y cierre seguro.",
    prompt: `Política de conducta: [pega resumen]
Canal: [ ]

Crea:
1) Mensaje de límite suave (3 versiones).
2) Advertencia formal (3 versiones).
3) Cierre de conversación (2 versiones).
4) Protocolo interno:
   - qué registrar
   - cuándo escalar
   - cuándo bloquear
5) Frases prohibidas (10) y alternativas.`,

    thumbnail: "",
  },
  {
    id: "sop-atn-025",
    title: "Guion para soporte técnico: pedir logs/capturas sin abrumar + plantilla de reporte",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Recolecta evidencia técnica con método y lenguaje simple.",
    prompt: `Plataforma: [web/app]
Tipo de evidencia: [captura/video/log]
Canal: [ ]

Crea:
1) Cómo pedir evidencia (3 tonos: amable/directo/premium).
2) Instrucciones paso a paso para:
   - captura
   - video corto
   - copiar/pegar error
3) Plantilla de reporte:
   - pasos para reproducir
   - esperado vs obtenido
   - entorno
   - frecuencia
4) Cierre:
   - confirmación
   - próximos pasos + update plan.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-026",
    title: "Guion para WhatsApp: micro-mensajes, confirmaciones entre pasos y seguimiento",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Soporte por WhatsApp sin muros de texto: bloques cortos, confirmaciones y macros.",
    prompt: `Producto: [ ]
Caso: [ ]
Tono: [ ]

Crea:
1) Guion en 8–12 mensajes cortos (con pausas).
2) Confirmación entre pasos (frases exactas).
3) 3 mensajes si el cliente tarda en responder.
4) 12 macros WhatsApp para casos típicos.
5) Cierre con resumen y prevención.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-027",
    title: "Guion para email de soporte: estructura clara + CTA único + versiones por tono",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Emails que avanzan casos: resumen, lo revisado, pasos y CTA único.",
    prompt: `Caso: [ ]
Tono: [cercano/corporativo]
Urgencia: [ ]

Crea:
1) 8 asuntos.
2) Plantilla de email:
   - resumen del problema
   - lo que hicimos/revisamos
   - pasos recomendados
   - CTA único (qué necesito)
   - cierre
3) Versión “urgente” y versión “sensible”.
4) Checklist antes de enviar (10 items).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-028",
    title: "Guion para responder reseñas negativas (público) + puente a canal privado",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Respuestas públicas elegantes sin discutir ni pedir datos sensibles.",
    prompt: `Reseña (pegar): [ ]
Plataforma: [Google/Trustpilot/App Store]
Política privacidad: [ ]

Crea:
1) Respuesta pública (80–120 palabras).
2) 3 variantes según tono (agresiva/decepcionada/sarcástica).
3) Mensaje privado follow-up:
   - pedir datos mínimos
   - proponer solución
4) “No decir”: 10 frases y por qué.`,

    thumbnail: "",
  },
  {
    id: "sop-atn-029",
    title: "Guion para comunicar tiempos (SLA) sin prometer: rangos, updates y manejo de presión",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Cómo hablar de tiempos sin quedar mal: frases, estructura y seguimiento proactivo.",
    prompt: `SLA real: [ ]
Caso: [ ]
Canal: [ ]

Crea:
1) 15 frases para comunicar tiempos: certeza/rango/incertidumbre.
2) Estructura “tiempo + próximo update” (plantillas).
3) Respuestas a presión:
   - “lo necesito ya”
   - “me están ignorando”
   - “esto es inaceptable”
4) 3 mensajes proactivos si se retrasa.
5) Nota interna: cuándo escalar por SLA.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-030",
    title: "Guion para solicitar información sin fricción: 1 pregunta compacta + opciones",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Recoge datos sin intercambiar 20 mensajes: petición compacta y amigable.",
    prompt: `Caso: [ ]
Datos necesarios: [correo, pedido, captura, etc.]
Canal: [ ]

Creá:
1) 8 versiones de “pregunta compacta” para pedir varios datos a la vez.
2) Variante para clientes apurados (ultra corta).
3) Variante para clientes sensibles (ultra empática).
4) Cómo validar datos recibidos sin hacer sentir al cliente “culpable”.
5) Cierre confirmando: “con esto ya puedo avanzar”.`,
    thumbnail: "",
  },

  {
    id: "sop-atn-031",
    title: "Guion para soporte ‘multitema’: el cliente trae 5 problemas (prioriza y resuelve por bloques)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Ordena múltiples problemas sin perder control ni cansar al cliente.",
    prompt: `Lista de problemas: [pega]
Canal: [ ]

Crea un guion:
1) Validación (sin abrumar).
2) Propuesta de orden por impacto/urgencia/dependencias (3 métodos).
3) Resolución por bloques:
   - confirmar al terminar cada bloque
4) Qué se resuelve hoy vs qué se escala (con explicación).
5) Cierre con checklist final + próximos pasos.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-032",
    title: "Guion para incertidumbre: ‘no lo sé aún’ con transparencia, acción y seguimiento",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Frases para no inventar: lo que sabemos, lo que verificamos, próximos pasos, updates.",
    prompt: `Caso: [ ]
Qué no está claro: [ ]
Canal: [ ]

Crea:
1) 12 frases para decir “aún lo confirmo” con confianza.
2) Plantilla de respuesta:
   - lo que sí sabemos
   - lo que investigamos
   - el siguiente paso
   - cuándo actualizamos
3) 3 updates (con y sin novedades).
4) 12 frases a evitar + reemplazo.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-033",
    title: "Guion para “quiero un supervisor”: contención, solución primero y escalación cuando aplica",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Maneja escalación sin bloquear: criterios, alternativas y handoff perfecto.",
    prompt: `Caso: [ ]
Políticas: [ ]
Canal: [ ]

Crea:
1) Validación + intención (3 variantes).
2) Frases para intentar resolver antes (5).
3) Criterios de escalación (sí/no) y cómo explicarlo.
4) Si escalas: mensaje al cliente + plantilla interna.
5) Si no escalas: cómo decir no con alternativas.
6) Cierre con acuerdo y seguimiento.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-034",
    title: "Guion para cobro sin entrega: pago ok pero no recibido (digital/físico) con prevención",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Soluciona rápido: verificación, entrega manual, seguimiento y tips preventivos.",
    prompt: `Tipo entrega: [email/descarga/envío]
Pago: [ ]
Canal: [ ]

Crea:
1) Apertura calmante (3).
2) Verificación mínima (datos).
3) Diagnóstico por causas (5) y solución por causa.
4) Entrega manual / reenvío (pasos).
5) Prevención (6 tips).
6) Cierre: confirmación + seguimiento 24h.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-035",
    title: "Guion para bugs intermitentes: frecuencia, condiciones, workaround y monitoreo",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Casos difíciles: intermitencia. Estructura para mapear condiciones y dar workaround.",
    prompt: `Bug: [ ]
Frecuencia: [a veces/siempre]
Plataforma: [ ]

Crea:
1) Preguntas para mapear condiciones (10).
2) Cómo pedir “cuándo sí/cuándo no” (plantilla).
3) Workarounds (3–5) según causas posibles.
4) Escalación con evidencia:
   - logs/capturas
   - pasos y condiciones
5) Seguimiento:
   - cómo informar progreso
   - cómo pedir confirmación de que quedó estable.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-036",
    title: "Guion para soporte sin acceso: el cliente no puede compartir pantalla ni capturas",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Diagnóstico por preguntas de alta señal y guías descriptivas paso a paso.",
    prompt: `Limitación: no hay capturas ni screen share
Producto: [ ]
Canal: [chat/llamada]

Crea:
1) Estrategia de diagnóstico por “sí/no” (12 preguntas de alta señal).
2) Instrucciones descriptivas:
   - cómo guiar por menús sin screenshots
   - cómo confirmar que está en la pantalla correcta
3) Plan A/B/C.
4) Cierre: resumen + siguiente paso + seguimiento.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-037",
    title: "Guion para “me cambió el precio”: comunicación de cambios, grandfathering y alternativas",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Maneja sensibilidad de precio: empatía + reglas + opción justa.",
    prompt: `Cambio: [subida/precio nuevo]
Política: [grandfathering/descuento/ninguno]
Canal: [ ]

Crea:
1) Apertura empática (3).
2) Explicación clara del cambio (sin corporativismo).
3) Opciones:
   - mantener plan (si aplica)
   - downgrade
   - pausa
   - descuento temporal (si permitido)
4) Objeciones y respuestas (10).
5) Cierre: confirmación de lo acordado.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-038",
    title: "Guion para prevención de churn: detectar “señales de abandono” en tickets y actuar",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Convierte tickets en retención: señales, preguntas, intervención y seguimiento.",
    prompt: `Producto: [ ]
Señales observadas: [frustración/no valor/no uso]
Canal: [ ]

Crea:
1) Lista de 12 señales de churn en texto del cliente.
2) 6 preguntas para detectar causa raíz.
3) Intervenciones por causa:
   - onboarding
   - ajuste de plan
   - solución técnica
   - educación/recursos
4) Plantilla de seguimiento a 7 días.
5) Nota interna: tags VoC + bandeja “riesgo”.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-039",
    title: "Guion para soporte B2B: stakeholders, severidad, SLA, impacto y roadmap de solución",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Soporte enterprise: severidad, impacto, comunicación ejecutiva y updates.",
    prompt: `Cliente B2B: [industria]
Severidad: [P1/P2/P3]
Impacto: [usuarios afectados]
Canal: [email/llamada]

Crea:
1) Mensaje inicial (ejecutivo) con:
   - resumen
   - impacto
   - acción inmediata
   - próximo update
2) Diagnóstico con datos clave (lista).
3) Plan de solución: now/next/later.
4) Updates programados (3).
5) Cierre: RCA alto nivel + prevención + confirmación.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-040",
    title: "Guion para educación del cliente: explicar ‘por qué pasa’ sin tecnicismos",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Explica causas sin aburrir: analogías, ejemplos y checklist preventivo.",
    prompt: `Problema: [ ]
Audiencia: [no técnica/mixta/técnica]
Canal: [ ]

Crea:
1) Explicación simple (2–3 frases).
2) Explicación con analogía (1).
3) Explicación técnica (1 párrafo) opcional.
4) Qué puede hacer el cliente para evitarlo (checklist 8–12).
5) Cierre: confirmación + recurso adicional.`,
    thumbnail: "",
  },

  {
    id: "sop-atn-041",
    title: "Guion para solicitudes fuera de alcance: decir no + ofrecer alternativa útil (sin fricción)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Cómo negar lo que no puedes hacer sin perder al cliente.",
    prompt: `Solicitud fuera de alcance: [ ]
Razón: [política/limitación técnica]
Alternativas posibles: [ ]

Crea:
1) 8 formas de decir NO con respeto.
2) 6 alternativas útiles (aunque sea ‘cómo lograrlo’).
3) 6 respuestas a objeciones del cliente.
4) Cierre: resumen + siguiente paso.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-042",
    title: "Guion para tickets repetidos (mismo cliente): reconocer historial y romper el ciclo",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Cuando vuelve por lo mismo: reconocer, investigar raíz, solución definitiva y seguimiento.",
    prompt: `Historial: [describe]
Problema recurrente: [ ]
Canal: [ ]

Crea:
1) Apertura reconociendo historial (sin culpar).
2) Preguntas de causa raíz (10).
3) Acciones:
   - solución rápida (workaround)
   - solución definitiva (cambios/ajustes)
4) Seguimiento:
   - check-in a 48h
   - check-in a 7 días
5) Nota interna: etiqueta “recurrente” + VoC.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-043",
    title: "Guion para soporte en temporada alta: colas largas, ansiedad y priorización sin caos",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Maneja volumen: expectativas, macros, priorización y cierres eficientes.",
    prompt: `Temporada alta: [Black Friday/lanzamiento/etc.]
SLA real: [ ]
Canal: [ ]

Crea:
1) Mensaje inicial de alta demanda (3 versiones).
2) Plantilla de priorización:
   - urgencia vs impacto
   - criterios
3) 15 macros “high volume” (solicitar datos, confirmar, escalar, cerrar).
4) Cómo evitar prometer:
   - 12 reemplazos de frases peligrosas
5) Cierre eficiente con prevención.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-044",
    title: "Guion para ‘cliente confundido’: simplificar, dividir en pasos y confirmar comprensión",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Convertir confusión en claridad usando chunking, confirmaciones y mini-checks.",
    prompt: `Tema: [ ]
Canal: [ ]

Crea:
1) 6 frases para simplificar sin sonar condescendiente.
2) Instrucciones en bloques (máx 2 pasos por mensaje) + confirmación.
3) Mini-checks:
   - 5 preguntas cortas para comprobar comprensión
4) Plan de recursos:
   - 2 recursos (guía/FAQ) con estructura.
5) Cierre confirmando “¿ya quedó listo?”.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-045",
    title: "Guion para soporte con evidencia contradictoria: cliente dice A, sistema dice B",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Maneja discrepancias sin acusar: validación, verificación y resolución.",
    prompt: `Discrepancia: [ ]
Canal: [ ]

Crea:
1) Apertura sin culpa (3).
2) Proceso de verificación:
   - 6 pasos
   - datos a pedir
3) Explicaciones posibles (5) en lenguaje simple.
4) Resolución por escenarios.
5) Cierre con confirmación y seguimiento.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-046",
    title: "Guion para soporte en comunidad/Discord: respuesta pública + seguimiento privado",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Soporte público: ayuda sin exponer datos, y puente a DM/ticket.",
    prompt: `Plataforma: [Discord/Comunidad]
Caso: [ ]

Crea:
1) Respuesta pública (breve) que:
   - valide
   - aporte 1–2 pasos
   - pida pasar a DM/ticket para datos
2) Mensaje privado para recolectar datos (plantilla).
3) Cierre público cuando se resuelve (sin detalles sensibles).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-047",
    title: "Guion para soporte de feature request: no es bug, es solicitud (empatía + gestión)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Maneja solicitudes: reconocer, clarificar, registrar y expectativas sin prometer roadmap.",
    prompt: `Solicitud: [ ]
Producto: [ ]
Canal: [ ]

Crea:
1) Validación + agradecimiento (3).
2) Preguntas para clarificar (6):
   - caso de uso
   - impacto
   - frecuencia
3) Cómo registrar internamente (tags + formato).
4) Cómo comunicar expectativas sin prometer:
   - 10 frases seguras
5) Alternativas actuales (workarounds) y recursos.
6) Cierre: confirmación de que quedó registrada.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-048",
    title: "Guion para errores del cliente (misconfig): corregir sin culpar y enseñar preventivo",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Cuando es error de configuración del usuario: tacto, guía y prevención.",
    prompt: `Misconfig: [ ]
Canal: [ ]

Crea:
1) Frases para señalar la causa sin culpar (8).
2) Pasos para corregir (A/B/C).
3) Prevención:
   - checklist de configuración (10)
4) Cierre:
   - confirmar que funciona
   - “si vuelve a pasar, revisa X primero”.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-049",
    title: "Guion para soporte con barrera de idioma: simple, estructurado, confirmaciones",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Comunicación simple: frases cortas, pasos claros y confirmaciones para evitar malentendidos.",
    prompt: `Idioma del cliente: [ ]
Nivel: [bajo/medio]
Canal: [ ]

Crea un guion:
1) Frases ultra simples (10) para:
   - validar
   - pedir datos
   - dar pasos
2) Instrucciones “one step per message”.
3) Confirmaciones:
   - 8 preguntas de confirmación (sí/no)
4) Cierre:
   - resumen y recurso visual sugerido (si aplica).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-050",
    title: "Guion universal para cerrar tickets con métricas: CSAT, motivo, tags y aprendizaje (VoC)",
    area: "Atención al Cliente & SOPs",
    category: "Guiones de Atención",
    summary:
      "Cierre que alimenta mejora continua: CSAT, etiquetado y resumen interno.",
    prompt: `Caso: [ ]
Canal: [ ]
Tags disponibles: [ ]

Crea:
1) Mensaje final al cliente solicitando CSAT (3 variantes) sin presión.
2) Pregunta opcional de feedback (1 línea) para insights.
3) Plantilla interna de cierre:
   - resumen (3 líneas)
   - causa raíz
   - resolución
   - tiempo total
   - tags (motivo/submotivo)
   - oportunidad de producto (si aplica)
4) Lista de 12 tags recomendados para este tipo de archivo.
5) Buenas prácticas para evitar “cierre prematuro”.`,
    thumbnail: "",
  },
];
