// src/lib/prompts/text/soporte-docs.js

export const textPromptsSoporteDocs = [
  {
    id: "sop-doc-001",
    title: "Plantilla de artículo de ayuda (Help Center): estructura perfecta + checklist de calidad",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Genera un artículo de ayuda completo con pasos, capturas sugeridas, errores comunes y FAQ.",
    prompt: `Tema del artículo: [ ]
Producto/feature: [ ]
Audiencia: [principiante/mixta/avanzada]
Canal: [web/app]
Tono: [cercano/neutral/premium]
Objetivo del artículo: [resolver X sin contactar soporte]

Escríbeme un artículo de Help Center listo para publicar con:
1) Título SEO (3 opciones) + slug sugerido.
2) Resumen (2–3 líneas) + “cuándo usar” y “cuándo NO aplica”.
3) Requisitos previos (cuentas, permisos, plan).
4) Pasos principales (8–14) con:
   - acción exacta
   - qué debería ver el usuario
   - dónde puede fallar el paso
5) Sección “Errores comunes” (mín. 8) y su solución.
6) Solución alternativa / workaround (si aplica).
7) FAQ (10 preguntas) enfocadas en dudas reales.
8) Sección “Si aún no funciona”:
   - qué datos recopilar
   - cómo contactar soporte (plantilla)
9) Sugerencias de capturas/diagramas:
   - en qué paso
   - qué debe mostrar cada imagen
10) Checklist editorial (12 puntos): claridad, accesibilidad, consistencia, links.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-002",
    title: "Guía de inicio rápido (Quickstart) para nuevos usuarios: 15 minutos a primera victoria",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Quickstart para que el usuario logre un resultado palpable en menos de 15 minutos.",
    prompt: `Producto: [ ]
Resultado “primera victoria”: [ ]
Usuario ideal: [ ]
Plataforma: [web/app]
Tono: [ ]

Crea una guía Quickstart con:
1) Objetivo (una frase) + qué aprenderá.
2) Lista de requisitos (2–6).
3) Ruta en 3 fases:
   - Fase 1 (2–4 min): configuración mínima
   - Fase 2 (5–8 min): acción principal
   - Fase 3 (2–3 min): verificación + siguiente paso
4) Pasos numerados con micro-checks “¿ves esto?”.
5) Errores comunes (6) y cómo evitarlos.
6) “Siguiente nivel”: 5 cosas para explorar después.
7) CTA final: recurso relacionado + dónde pedir ayuda.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-003",
    title: "Documento “Cómo funciona” (conceptual): explicar el sistema sin tecnicismos + glosario",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Doc conceptual para reducir tickets: cómo funciona, por qué pasa X y cómo pensar el producto.",
    prompt: `Elemento a explicar: [suscripción/billing/feature/algoritmo]
Nivel del usuario: [ ]
Tono: [ ]

Escribe un documento conceptual que incluya:
1) Explicación en 3 niveles:
   - 1 párrafo ultra simple
   - explicación media con ejemplo
   - explicación más técnica (opcional)
2) “Lo que SÍ es” vs “lo que NO es” (tabla conceptual en texto).
3) 5 analogías útiles (sin cringe) para explicar a no técnicos.
4) Casos típicos (10): “si pasa X, significa Y”.
5) Glosario (12–20 términos) con definiciones simples.
6) Sección “mitos” (8) y corrección.
7) Cómo evitar errores: checklist (10).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-004",
    title: "FAQ maestro: 30 preguntas reales (agrupadas) + respuestas cortas y largas",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Crea un FAQ que realmente disminuya soporte: respuestas consistentes y accionables.",
    prompt: `Producto: [ ]
Tema: [acceso/billing/uso/seguridad]
Tono: [ ]

Genera un FAQ con:
1) 30 preguntas agrupadas en 5 secciones (6 preguntas cada una).
2) Para cada pregunta:
   - respuesta corta (1–2 líneas)
   - respuesta larga (5–8 líneas) con pasos si aplica
   - enlace sugerido a artículo relacionado (inventar título si no existe)
3) 10 preguntas “típicas de conflicto” y cómo responder con calma.
4) Guía interna: cómo mantener el FAQ actualizado (proceso y frecuencia).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-005",
    title: "Base de conocimiento para soporte: taxonomía, etiquetas, estándares y mantenimiento",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Diseña la estructura de tu Help Center: categorías, tags y reglas de escritura.",
    prompt: `Tipo negocio: [SaaS/ecommerce/curso]
Volumen de artículos esperado: [ ]
Equipo: [ ]

Crea un plan de Knowledge Base con:
1) Taxonomía:
   - 8–12 categorías principales
   - 3–6 subcategorías por cada una
2) Sistema de tags (20–40 tags) con reglas de uso.
3) Estándares de documentación:
   - voz/tono
   - longitud objetivo
   - formato de pasos
   - cómo nombrar artículos
4) Proceso de actualización:
   - triggers (tickets, releases, cambios)
   - cadencia (semanal/mensual)
   - roles (owner/reviewer)
5) Métricas: qué medir (deflection rate, búsquedas fallidas, etc.).
6) Checklist editorial para aprobar un artículo.`,
    thumbnail: "",
  },

  {
    id: "sop-doc-006",
    title: "Runbook para agentes: cómo resolver un caso de inicio a fin (con plantillas)",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Manual interno del agente: diagnóstico, escalación, documentación y cierre consistente.",
    prompt: `Producto: [ ]
Tipos de casos: [lista corta]
Canales: [ ]

Crea un runbook interno con:
1) Flujo estándar (diagrama en texto) desde ticket → cierre.
2) Guía de diagnóstico: 12 preguntas base + cuándo usarlas.
3) “Do/Don’t” (15 pares).
4) Plantillas:
   - pedir datos
   - explicar política
   - escalar a L2
   - cierre con prevención
5) Checklist de documentación (10 campos obligatorios).
6) Escalación:
   - criterios
   - prioridad
   - datos mínimos a adjuntar
7) QA: criterios de calidad (rubric 1–5).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-007",
    title: "Artículo de troubleshooting (tipo árbol): ‘Si ves este error → haz esto’ (20 ramas)",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Documento estilo árbol de decisiones para errores comunes y soluciones rápidas.",
    prompt: `Problema genérico: [no carga/no inicia sesión/no puedo pagar/etc.]
Plataforma: [web/app]
Errores típicos: [si tienes, pégalos]

Crea un troubleshooting con:
1) Diagnóstico inicial (5 checks rápidos).
2) Árbol de decisiones en texto con 20 ramas:
   - condición → acción → resultado esperado
3) Workarounds seguros (5).
4) Cuándo escalar y qué datos adjuntar (checklist).
5) Sección “qué NO hacer” (10).
6) FAQ (10).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-008",
    title: "Release notes amigables (usuarios): resumen de cambios + impacto + acciones",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Plantilla de notas de versión que reduce tickets por cambios inesperados.",
    prompt: `Versión/fecha: [ ]
Cambios (pegar bullets): [ ]
Features nuevas: [ ]
Bugfixes: [ ]
Cambios breaking: [ ]

Escribe release notes con:
1) Resumen ejecutivo (5 bullets).
2) Qué cambia para el usuario (por roles/planes si aplica).
3) Cambios importantes (detallados) + antes vs después.
4) Si hay breaking changes:
   - quién se afecta
   - qué debe hacer
   - plazo
5) FAQ (8) anticipando dudas.
6) “Guía para soporte”:
   - macros (6)
   - tags
   - cuándo escalar.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-009",
    title: "Guía de migración: antes → después (pasos, riesgos, rollback y verificación)",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Documento de migración que evita tickets: pasos, verificación, fallback y checklist.",
    prompt: `Qué se migra: [plan/sistema/feature]
Audiencia: [usuarios/admins]
Riesgos: [ ]
Ventana: [ ]

Crea una guía con:
1) Contexto: por qué se migra y qué gana el usuario.
2) Requisitos previos.
3) Plan paso a paso (10–18 pasos) con puntos de verificación.
4) Riesgos y mitigaciones (10).
5) Plan de rollback (si aplica) explicado simple.
6) FAQ (10).
7) Guía para soporte: señales de fallos + macros (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-010",
    title: "Documento de políticas para soporte (operativo): convertir reglas en decisiones",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Convierte políticas largas en un manual accionable para agentes y QA.",
    prompt: `Políticas actuales (pegar o resumir): [ ]
Casos típicos: [ ]
Herramienta soporte: [Zendesk/Intercom/etc.]

Genera:
1) “Cheat sheet” en 1 página: reglas si→entonces.
2) Árbol de decisión para 3 temas:
   - reembolsos
   - cancelaciones
   - abuso/fraude
3) Macros listas para copiar (20) por escenario:
   - aprobado
   - negado
   - caso gris (pedir info)
4) Checklist de QA para auditar cumplimiento (12 criterios).
5) Guía de registro: tags obligatorios y campos.`,
    thumbnail: "",
  },

  {
    id: "sop-doc-011",
    title: "Documento SOP de ‘cómo escribir docs’: estilo, ejemplos buenos/malos y reglas",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Manual editorial para que toda tu documentación sea consistente.",
    prompt: `Marca/tono: [ ]
Audiencia: [ ]
Plataforma docs: [Notion/Help Center]
Nivel de detalle: [ ]

Crea un SOP editorial con:
1) Reglas de estilo (15) con ejemplos buenos/malos.
2) Formato estándar de artículo (plantilla).
3) Cómo escribir pasos:
   - verbo de acción
   - resultado esperado
   - solución si falla
4) Convenciones: nombres de menús, botones, placeholders.
5) Accesibilidad: lenguaje, contraste, alt text, evitar jerga.
6) Proceso: draft → review → publish → update.
7) Checklist final (20).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-012",
    title: "Mapa de contenidos: qué artículos escribir primero según tickets (priorización 80/20)",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Plan de contenidos para docs basado en impacto: tickets, búsquedas y fricciones top.",
    prompt: `Top tickets (si tienes, pega 10): [ ]
Top búsquedas fallidas (si tienes): [ ]
Producto: [ ]

Crea:
1) Método para priorizar (impacto × frecuencia × dificultad).
2) Lista de 25 artículos “must-have” con:
   - título
   - objetivo
   - sección donde vive
   - por qué reduce tickets
3) Roadmap 4 semanas para crear/actualizar.
4) KPI por semana (deflection, % tickets repetidos, etc.).
5) Plantilla para convertir ticket → artículo (pasos).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-013",
    title: "Plantilla de ‘Status Page’ y mensajes de incidente (docs + macros)",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Crea textos para status page y artículos de incidente con cadencia de updates.",
    prompt: `Incidente: [ ]
Impacto: [ ]
ETA: [ ]
Workaround: [ ]
Canales: [status page/email/social]

Genera:
1) Template status page:
   - investigando
   - identificado
   - monitoreando
   - resuelto
2) Artículo post-mortem (usuario):
   - qué pasó (alto nivel)
   - qué hicimos
   - prevención
3) FAQ incidente (10).
4) Macros soporte (10) para responder tickets durante el incidente.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-014",
    title: "Guía visual: lista de capturas sugeridas + estándar de anotaciones (flechas, blur, etc.)",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Estandariza capturas en docs: qué capturar, cómo anotar y cómo ocultar datos.",
    prompt: `Producto: [web/app]
Áreas sensibles: [emails/pagos]
Estilo: [minimal/explicativo]

Define un estándar de screenshots con:
1) Cuándo usar captura vs GIF vs video.
2) Reglas de anotación:
   - flechas
   - resaltados
   - blur de datos
3) Convenciones: tamaños, resolución, formato, nombres de archivo.
4) “Qué capturar” en 10 tipos de artículos comunes.
5) Checklist de privacidad para imágenes (12).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-015",
    title: "Documento de capacitación para nuevos agentes: 7 días, tareas, evaluación y recursos",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Plan de onboarding para agentes con tareas diarias y rubricas de evaluación.",
    prompt: `Equipo: [número]
Herramientas: [helpdesk, CRM]
Producto: [ ]
Horario: [ ]

Crea un plan 7 días con:
1) Objetivos por día.
2) Módulos: producto, tono, políticas, herramientas, escalación.
3) Tareas prácticas (2–3 por día).
4) “Shadowing” y revisión de tickets.
5) Rubrica de evaluación (1–5) con 8 criterios.
6) Quiz final (15 preguntas) para validar comprensión.
7) Checklist para activar agente a producción.`,
    thumbnail: "",
  },

  {
    id: "sop-doc-016",
    title: "Plantilla de artículo bilingüe (ES/EN): mantener consistencia y evitar traducciones raras",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Estructura para docs en dos idiomas con glosarios y consistencia de términos.",
    prompt: `Tema: [ ]
Terminología clave: [ ]
Voz: [ ]

Crea:
1) Plantilla paralela ES/EN con secciones fijas.
2) Glosario de términos (20) con traducción preferida.
3) Reglas para no traducir: nombres de botones, features, etc.
4) Checklist de QA lingüístico (12).
5) Ejemplo de 1 sección ya escrita en ambos idiomas.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-017",
    title: "Documento de ‘compatibilidad’ (browsers/devices): tabla clara + troubleshooting por plataforma",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Especifica compatibilidad y soluciones cuando el usuario está en entorno no soportado.",
    prompt: `Producto: [ ]
Soporte oficial: [Chrome/Firefox/iOS/etc.]
Limitaciones: [ ]

Crea un doc con:
1) Tabla (en texto) de compatibilidad:
   - navegador/dispositivo
   - soportado sí/no
   - notas
2) Requisitos mínimos (hardware/red).
3) Troubleshooting por entorno (web, iOS, Android) con pasos.
4) FAQ (10).
5) Macros soporte (8) para “entorno no soportado” sin sonar duro.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-018",
    title: "KBA (Knowledge Base Article) de facturación: ‘Cómo leer tu factura’ + casos de impuestos",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Ayuda a usuarios a entender cargos, recibos, impuestos y conceptos comunes.",
    prompt: `Pasarela: [Stripe/etc.]
Impuestos: [VAT/IVA]
Países: [ ]

Escribe un artículo:
1) Estructura de una factura (campos y significado).
2) Diferencia entre recibo/factura/nota (según tu contexto).
3) Impuestos: por qué aparecen y cómo se calculan (alto nivel).
4) 10 casos comunes de confusión (doble cargo, retención, etc.).
5) Pasos para descargar factura/actualizar datos.
6) FAQ (12).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-019",
    title: "Guía de resolución de problemas ‘sin soporte’: autodiagnóstico en 5 minutos",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Checklist rápido de autodiagnóstico para reducir tickets básicos.",
    prompt: `Producto: [ ]
Problemas comunes: [lista]

Crea una guía “5 minutos” con:
1) 8 checks rápidos (ordenados por efecto).
2) 5 pasos específicos por plataforma (web/app).
3) Señales de que es un bug real (6).
4) Si necesitas soporte: plantilla de datos mínimos.
5) Mensaje de cierre humano: “si no se arregla, te ayudamos”.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-020",
    title: "Documento ‘cómo pedir ayuda al soporte’: qué incluir para resolver 2x más rápido",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Enseña a los usuarios a enviar tickets buenos con ejemplos.",
    prompt: `Canales soporte: [ ]
Datos técnicos útiles: [ ]

Escribe un artículo que incluya:
1) Por qué ayuda (explicación breve).
2) Plantilla de ticket ideal:
   - objetivo
   - pasos
   - esperado vs obtenido
   - entorno
   - evidencia
3) Ejemplos:
   - ticket malo (y por qué)
   - ticket bueno (y por qué)
4) Cómo tomar capturas/ grabar video corto.
5) FAQ (8).`,
    thumbnail: "",
  },

  {
    id: "sop-doc-021",
    title: "Documento interno: diccionario de macros y cuándo usarlas (para consistencia)",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Catálogo de macros (títulos, propósito, condiciones) para reducir variabilidad en soporte.",
    prompt: `Categorías: [billing, acceso, bugs, envíos]
Tono: [ ]

Crea un diccionario de macros con:
1) 40 macros (título + texto + cuándo usar + cuándo NO usar).
2) Tags asociados por macro.
3) “Macro combos”: secuencias de 3 macros para flujos comunes.
4) Guía anti-robot: cómo personalizar 1 línea sin romper consistencia.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-022",
    title: "Plantilla de documentación de procesos (SOP) para operaciones: pasos, roles, SLAs y riesgos",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Plantilla universal de SOP para cualquier proceso: roles, riesgos, QA y métricas.",
    prompt: `Proceso a documentar: [ ]
Herramientas: [ ]
Roles: [ ]

Crea un SOP con:
1) Propósito y alcance.
2) Roles y responsabilidades (RACI simplificado).
3) Inputs/outputs.
4) Pasos detallados (12–20).
5) Controles de calidad (checkpoints).
6) Riesgos y mitigaciones (10).
7) Métricas (5–8) para evaluar desempeño.
8) Checklist de ejecución (printable).
9) Plan de mejora continua.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-023",
    title: "Documento ‘guía para admins’: permisos, roles, seguridad y mejores prácticas",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Doc para administradores que reduce tickets de permisos y accesos.",
    prompt: `Producto: [ ]
Roles disponibles: [ ]
Acciones sensibles: [invitar, facturación, borrar]

Escribe una guía para admins con:
1) Qué puede hacer cada rol (tabla en texto).
2) Cómo asignar roles (pasos).
3) Mejores prácticas de seguridad (10).
4) Casos frecuentes (10) y cómo resolver.
5) Checklist “setup seguro” en 12 puntos.
6) FAQ (12).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-024",
    title: "Guía de ‘resolución de incidentes’ para soporte: playbook y mensajes preaprobados",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Playbook interno: severidad, comunicación, macros y coordinación con ingeniería.",
    prompt: `Producto: [ ]
Severidades: [P1-P4]
Canales: [status/chat/email]

Crea playbook con:
1) Definición de severidades con ejemplos.
2) Acciones por severidad (qué hace soporte).
3) Mensajes preaprobados (15) para clientes y internos.
4) Checklist para abrir incidente (10).
5) Checklist para cerrar incidente (10).
6) Plantilla de postmortem interno (RCA).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-025",
    title: "Documento de ‘terminología oficial’: nombres exactos de features, botones y pantallas",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Evita confusión: glosario de UI oficial para soporte y docs.",
    prompt: `Producto: [ ]
Idioma: [ES]
Listar pantallas/menús: [si tienes, pega]

Crea:
1) Glosario UI:
   - nombre oficial
   - sinónimos que la gente usa
   - dónde está
2) Reglas para referirse a botones/menús en texto.
3) Lista de 25 frases estándar para guiar navegación.
4) Checklist editorial para mantener consistencia.`,
    thumbnail: "",
  },

  {
    id: "sop-doc-026",
    title: "Doc de ‘permisos y errores’: tabla de error → causa → solución → quién puede arreglar",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Mapa de permisos: reduce tickets de “no puedo” y acelera escalación al dueño correcto.",
    prompt: `Sistema de roles: [ ]
Errores comunes: [ ]

Crea un documento con:
1) Tabla (texto) de 25 errores:
   - mensaje visible
   - causa probable
   - solución
   - rol necesario
2) Guía: cómo detectar si el usuario no tiene permisos (señales).
3) Macros (8) para pedir al admin que lo habilite.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-027",
    title: "Doc de ‘integraciones’: guía por integración + troubleshooting + límites de soporte",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Crea artículos consistentes por integración con pasos y troubleshooting específico.",
    prompt: `Integración: [Zapier/Meta/Google/etc.]
Objetivo típico: [ ]
Requisitos: [API keys/roles]

Escribe un artículo con:
1) Qué hace la integración y casos de uso (5).
2) Requisitos previos y permisos.
3) Conexión paso a paso (10–14).
4) Verificación: cómo confirmar que funciona.
5) Troubleshooting (12) por errores frecuentes.
6) Limitaciones y qué NO soporta tu equipo.
7) FAQ (10) + plantilla para solicitar soporte al tercero.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-028",
    title: "Plantilla de ‘manual de usuario’ corto: módulos, navegación, tips y atajos",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Manual compacto para usuarios que no quieren leer; orientado a tareas.",
    prompt: `Producto: [ ]
Módulos: [lista]
Tareas principales: [lista]

Crea un manual corto con:
1) Mapa de navegación (texto).
2) 10 tareas principales con mini pasos.
3) 10 tips/atajos (mejores prácticas).
4) “Errores típicos” (8) y cómo evitarlos.
5) FAQ (10) + recursos recomendados.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-029",
    title: "Doc para soporte de “cambios en UX”: antes vs después + dónde está ahora + por qué",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Ayuda a usuarios confundidos por cambios: mapa antes/después y guía rápida.",
    prompt: `Cambio UX: [ ]
Pantallas afectadas: [ ]
Motivo del cambio: [ ]

Genera:
1) Resumen del cambio (2–3 líneas).
2) Antes vs después (lista de 8–12 diferencias).
3) “Dónde está ahora” con pasos por tarea (8 tareas).
4) FAQ (10) y macros soporte (8).
5) Nota para evitar tickets: copy sugerido in-app.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-030",
    title: "Checklist de auditoría de documentación: detectar artículos rotos, desactualizados y confusos",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Sistema práctico para revisar docs mensualmente con criterios concretos.",
    prompt: `Plataforma docs: [ ]
Frecuencia: [mensual]
Fuentes de señal: [tickets/búsqueda]

Crea:
1) Checklist de auditoría (25 puntos) con:
   - claridad
   - exactitud
   - enlaces
   - screenshots
   - SEO básico
2) Método para detectar artículos candidatos a actualizar (10 señales).
3) Plantilla de reporte de auditoría (campos).
4) Plan de mantenimiento mensual (3 horas/semana).`,
    thumbnail: "",
  },

  {
    id: "sop-doc-031",
    title: "Plantilla de ‘documentación para soporte’: cómo escribir un “Known Issues” que sirva",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Estandariza Known Issues: síntomas, workaround, estado y a quién afecta.",
    prompt: `Producto/versión: [ ]
Lista de issues (si tienes): [ ]

Crea un formato Known Issues con:
1) Campos obligatorios por issue:
   - síntoma
   - a quién afecta
   - severidad
   - workaround
   - estado
   - ETA (si existe)
2) Ejemplo de 5 issues ya completados (inventados si hace falta).
3) Macros de soporte para cada estado (6).
4) Reglas de actualización y cadencia.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-032",
    title: "Guía de “cómo exportar/importar datos”: pasos, formatos, límites y errores comunes",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Artículo completo de export/import con ejemplos de CSV y troubleshooting.",
    prompt: `Tipo de datos: [usuarios/contactos/pedidos]
Formato: [CSV/JSON]
Límites: [filas/tamaño]

Escribe una guía con:
1) Exportar: pasos + qué campos se incluyen.
2) Importar: plantilla de archivo (campos, ejemplos de filas).
3) Validaciones y errores comunes (12) + solución.
4) Buenas prácticas: limpiar datos, encoding, separadores.
5) Verificación post-import.
6) FAQ (10) + cómo pedir soporte si falla.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-033",
    title: "Documento de “cuentas y seguridad”: 2FA, sesiones, dispositivos, actividad y recuperación",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Doc de seguridad para reducir tickets y aumentar confianza.",
    prompt: `Sistemas: [2FA/email/pass/SSO]
Plataforma: [ ]

Crea un artículo con:
1) Cómo activar 2FA (pasos).
2) Cómo ver y cerrar sesiones.
3) Qué hacer si sospechas compromiso (pasos inmediatos).
4) Recuperación de cuenta (sin pedir contraseñas).
5) Señales de phishing (10).
6) FAQ (12) + macros soporte (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-034",
    title: "Documento ‘facturación fallida’: reintentos, causas, soluciones y suspensión",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Artículo completo para fallos de pago con soluciones por causa y cronograma.",
    prompt: `Pasarela: [ ]
Causas comunes: [fondos insuficientes/banco/3DS]
Política suspensión: [ ]

Escribe un artículo con:
1) Qué significa “pago fallido”.
2) Cronograma de reintentos y notificaciones.
3) Causas (10) con soluciones específicas.
4) Cómo actualizar método de pago (pasos).
5) Qué pasa con acceso/datos.
6) FAQ (12) + macros soporte (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-035",
    title: "Plantilla de ‘guía para soporte’: cómo escribir respuestas con un solo CTA (reduce ida y vuelta)",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Manual interno para responder mejor: 1 CTA, empatía y verificación.",
    prompt: `Canal: [chat/email]
Tono: [ ]

Crea una guía con:
1) Estructura de respuesta en 7 líneas.
2) Cómo resumir el problema (parafraseo).
3) Cómo dar pasos: máximo 2 por mensaje (chat) o 6 por email.
4) CTA único: cómo formularlo (10 ejemplos).
5) Verificación de éxito: 10 frases.
6) Anti-patrones: 12 errores típicos y cómo evitarlos.`,
    thumbnail: "",
  },

  {
    id: "sop-doc-036",
    title: "Documento de ‘estándares de soporte’: tiempos, tono, macro-uso y cierre",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Define cómo se ve “soporte excelente” en tu equipo.",
    prompt: `Equipo: [ ]
Canales: [ ]
SLA objetivo: [ ]

Crea un estándar interno con:
1) Principios (5–7).
2) Tono/voz (do/don’t + ejemplos).
3) Tiempos: respuesta inicial, updates, cierre.
4) Uso de macros: cuándo sí/cuándo no.
5) Calidad: checklist (15) y rubric.
6) Cómo manejar casos difíciles (cliente molesto, legal, etc.).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-037",
    title: "Guía para ‘cambios de plan’: upgrade/downgrade, prorrateo y efectos en features",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Artículo para reducir tickets de billing: qué pasa al cambiar de plan.",
    prompt: `Planes: [lista]
Prorrateo: [sí/no]
Efectos: [límites, features]

Escribe un artículo con:
1) Qué pasa al upgrade (cuándo aplica, cargo).
2) Qué pasa al downgrade (cuándo aplica, límites).
3) Prorrateo explicado con ejemplo numérico simple.
4) Casos típicos (12) y respuestas.
5) FAQ (12) + macros soporte (10).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-038",
    title: "Doc de ‘resolución de conflictos’: cuando soporte y cliente no están de acuerdo",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Guía interna para manejar disputas: evidencia, políticas y desescalada.",
    prompt: `Tipo conflicto: [reembolso/política/bug]
Políticas: [ ]

Crea un doc interno con:
1) Principio: empatía sin ceder a abuso.
2) Cómo reunir evidencia (checklist).
3) Cómo explicar políticas en humano.
4) Cómo ofrecer alternativas.
5) Protocolo de escalación a supervisor/legal.
6) Macros “difíciles” (12) con frases seguras.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-039",
    title: "Documento de ‘capas de soporte’: L1/L2/L3 y criterios de escalación",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Define claramente responsabilidades por nivel para evitar ping-pong.",
    prompt: `Equipo: [soporte/ingeniería/ops]
Herramienta tickets: [ ]
Severidades: [ ]

Crea un doc con:
1) Qué resuelve L1, L2, L3 (lista detallada).
2) Criterios para escalar (por tipo de caso).
3) Datos mínimos por escalación (checklist).
4) SLA interno entre equipos.
5) Plantillas:
   - handoff
   - update al cliente
   - resolución final`,
    thumbnail: "",
  },
  {
    id: "sop-doc-040",
    title: "Doc de ‘plantillas de comunicación’: pack completo para soporte (40 piezas)",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Kit de comunicación: saludos, pedir datos, updates, cierres, políticas, escalación.",
    prompt: `Producto: [ ]
Tono: [ ]
Canales: [chat/email/WhatsApp]

Genera un pack de 40 piezas:
- 8 saludos (por canal)
- 8 pedir datos (compacto)
- 6 updates (con y sin novedades)
- 8 cierres (con prevención)
- 6 políticas (reembolso/cancelación/etc.)
- 4 escalación (L2/legal)

Cada pieza debe incluir:
1) Texto
2) Cuándo usar
3) 1 variante alternativa (más directa).`,
    thumbnail: "",
  },

  {
    id: "sop-doc-041",
    title: "Doc para ‘errores de correo’: no llega email, spam, dominios, whitelisting",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Guía completa para problemas de correo: pasos por proveedor y checklist.",
    prompt: `Tipo email: [login/recibos/notificaciones]
Proveedores comunes: [Gmail/Outlook]
Dominio: [ ]

Escribe un artículo con:
1) Checklist rápido (8).
2) Pasos por proveedor (Gmail/Outlook) para revisar spam y filtros.
3) Whitelisting (cómo hacerlo) + qué direcciones agregar.
4) Problemas de dominio corporativo (IT).
5) Si persiste: qué datos pedir (headers si aplica).
6) FAQ (10) + macros soporte (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-042",
    title: "Guía ‘descargas y accesos’: links expirados, límites, y recuperación",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Doc para productos digitales: recuperar accesos y solucionar links expirados.",
    prompt: `Producto digital: [ ]
Links: [expiran/no]
Plataforma: [ ]

Crea un artículo con:
1) Cómo acceder a compras (pasos).
2) Links expirados: por qué y cómo regenerar.
3) Límites de descargas (si aplica).
4) Problemas comunes (10) y solución.
5) Si hay sospecha de phishing: qué hacer.
6) FAQ (10) + macros soporte (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-043",
    title: "Doc ‘cómo reportar bugs’ para power users: repro, logs, HAR y videos cortos",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Guía avanzada para reportes de bugs de alta calidad.",
    prompt: `Producto: [web]
Usuarios avanzados: [sí]
Herramientas: [Chrome]

Escribe una guía con:
1) Plantilla de bug report.
2) Cómo grabar video corto útil (qué mostrar).
3) Cómo sacar consola logs (pasos).
4) Cómo exportar HAR file (pasos) si aplica.
5) Cómo anonimizar datos antes de enviar.
6) Qué NO enviar (datos sensibles).
7) FAQ (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-044",
    title: "Doc de ‘cumplimiento y privacidad’ para soporte: qué registrar en tickets y qué no",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Reglas de privacidad para agentes: PII, pagos, contraseñas, capturas y retención.",
    prompt: `Región: [ ]
Herramienta tickets: [ ]

Crea un doc interno con:
1) Qué NO pedir nunca (lista).
2) Qué sí pedir y cómo (más seguro).
3) Cómo manejar capturas con PII (blur, redacción).
4) Retención de tickets: qué queda y por cuánto (alto nivel).
5) Plantillas seguras para pedir verificación.
6) Checklist de cumplimiento (15).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-045",
    title: "Doc para ‘usuarios empresariales’: onboarding, seguridad, SSO y mejores prácticas",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Guía enterprise para reducir tickets: SSO, roles, seguridad y soporte.",
    prompt: `Producto: [ ]
SSO: [sí/no]
Roles: [ ]

Escribe un documento enterprise con:
1) Checklist de onboarding (15).
2) Configuración recomendada (seguridad, roles).
3) SSO (si aplica): pasos + troubleshooting.
4) Gestión de usuarios y accesos.
5) FAQ (12) + macros soporte (10).`,
    thumbnail: "",
  },

  {
    id: "sop-doc-046",
    title: "Doc ‘cómo leer un error’: plantilla para estandarizar mensajes de error y acciones",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Convierte errores técnicos en mensajes útiles con acciones y links.",
    prompt: `Sistema: [ ]
Errores frecuentes: [pega lista]

Crea un estándar:
1) Formato de error:
   - título
   - qué pasó (humano)
   - qué hacer ahora (acción)
   - detalles técnicos (colapsable)
   - link a artículo
2) 15 ejemplos de errores reescritos siguiendo el estándar.
3) Guía para soporte: cómo mapear error → artículo → macro.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-047",
    title: "Doc de ‘subida de archivos’: formatos, tamaños, errores y soluciones",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Artículo completo de uploads con límites, compresión y troubleshooting.",
    prompt: `Tipo archivos: [imágenes/videos/docs]
Límites: [tamaño/formato]
Plataforma: [web/app]

Escribe un artículo con:
1) Requisitos (formatos/tamaños).
2) Cómo subir (pasos).
3) Errores comunes (12) con solución.
4) Consejos: compresión y calidad.
5) FAQ (10) + macros soporte (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-048",
    title: "Doc ‘inventario de artículos’: lista de docs críticos + owner + fecha + próxima revisión",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Plantilla para mantener tu base de conocimiento viva y actualizada.",
    prompt: `Categorías: [ ]
Owners: [equipo/personas]
Frecuencia revisión: [ ]

Crea un inventario en formato tabla-en-texto con columnas:
- Título
- Categoría
- Owner
- Última actualización
- Próxima revisión
- Indicadores (tickets asociados, búsquedas)
Incluye:
1) 25 artículos “críticos” sugeridos para tu negocio.
2) Procedimiento mensual (pasos) para revisar y actualizar.
3) Cómo decidir “archivar” vs “actualizar”.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-049",
    title: "Doc de ‘procedimiento de reembolsos’ (interno): pasos por pasarela + controles",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "SOP interno para procesar reembolsos con controles, registros y comunicación.",
    prompt: `Pasarela: [Stripe/PayPal/etc.]
Política: [ ]
Roles: [ ]

Crea un SOP interno con:
1) Requisitos previos (verificaciones).
2) Pasos exactos en la pasarela (genéricos si no hay detalle).
3) Controles anti-fraude.
4) Comunicación al cliente:
   - aprobado
   - tiempos
   - comprobante
5) Registro interno:
   - campos obligatorios
   - tags
6) Auditoría: checklist (10).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-050",
    title: "Doc de ‘control de calidad de soporte’: rubric, ejemplos y proceso de coaching",
    area: "Atención al Cliente & SOPs",
    category: "Docs",
    summary:
      "Sistema de QA para soporte: criterios, puntuación, ejemplos y plan de mejora.",
    prompt: `Equipo: [ ]
Canales: [ ]
Objetivo: [CSAT/deflection]

Crea un doc con:
1) Rubric QA (1–5) con 10 criterios:
   - claridad, empatía, CTA único, exactitud, políticas, etc.
2) Ejemplos de:
   - respuesta 5/5
   - respuesta 3/5
   - respuesta 1/5
3) Proceso de revisión:
   - muestreo
   - feedback
   - coaching
4) Plan de mejora por agente (plantilla).
5) Métricas y cómo interpretarlas.`,
    thumbnail: "",
  },
];
