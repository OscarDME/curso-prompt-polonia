// src/lib/prompts/text/soporte-tecnico-scripts.js

export const textPromptsSoporteTecnicoScripts = [
  {
    id: "sop-tech-001",
    title: "Guion de diagnóstico técnico universal (web/app): 12 preguntas + árbol de decisión",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Script completo para diagnosticar incidencias técnicas sin perder tiempo: preguntas, ramas y siguiente acción.",
    prompt: `Producto: [web/app]
Tipo de incidencia reportada: [no carga / error / no inicia sesión / etc.]
Nivel de usuario: [básico/medio/avanzado]
Canal: [chat/email/whatsapp]
Datos disponibles: [captura/URL/error code]

Crea un guion para agente con:
1) Apertura empática (2 variantes) + resumen del problema (parafraseo).
2) 12 preguntas de diagnóstico (en orden óptimo) con:
   - qué buscamos confirmar
   - cómo pedirlo en lenguaje no técnico
   - qué respuesta esperada
3) Árbol de decisión (mín. 18 ramas) “si X → entonces Y”, cubriendo:
   - navegador/dispositivo
   - red/VPN
   - extensiones/adblock
   - caché/cookies
   - permisos/roles
   - sesión/2FA
4) “Quick fixes” (8) con instrucciones paso a paso.
5) Señales de bug real (8) + cuándo escalar a L2/ingeniería.
6) Checklist de datos para escalación (15 campos) + plantilla de handoff interno.
7) Mensaje de cierre con prevención (3 variantes).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-002",
    title: "Script: ‘No me deja iniciar sesión’ (password, 2FA, magic link, SSO) con soluciones por escenario",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion completo para login issues con ramas por contraseña, 2FA, enlaces, SSO y bloqueos.",
    prompt: `Método de login: [email/pass | magic link | Google | SSO]
Plataforma: [web/app]
Región/país: [ ]
Mensaje de error (si existe): [ ]

Escribe un script de soporte para login con:
1) Apertura + verificación de identidad (sin pedir contraseñas).
2) Diagnóstico por bloques:
   A) Email incorrecto / cuenta no existe
   B) Password incorrecto / reset no llega
   C) 2FA (código no llega, app, desincronización)
   D) Magic link expirado / no llega
   E) SSO (dominio, permisos, SCIM si aplica)
   F) Cuenta bloqueada / demasiados intentos
3) Para cada bloque:
   - pasos claros (5–10)
   - qué debería ver el usuario
   - solución alternativa si falla
4) Plantillas listas:
   - pedir captura (sin PII)
   - explicar por qué no pedimos password
   - confirmación de resolución
5) Criterios de escalación (10) + datos mínimos (15).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-003",
    title: "Script: error de pago / checkout fallando (3DS, banco, fondos, fraude, factura) + mensajes por pasarela",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para resolver pagos fallidos rápido con ramas por causa y copy listo para el cliente.",
    prompt: `Pasarela: [Stripe/PayPal/otro]
Modelo: [suscripción/one-time]
Errores vistos: [si hay, pega]
País del cliente: [ ]

Crea un script de pagos fallidos con:
1) Preguntas mínimas (6) para diagnosticar sin fricción.
2) Árbol de decisión (mín. 16 ramas) por causas:
   - fondos
   - límite bancario
   - 3DS/OTP no completado
   - tarjeta no soportada
   - AVS/CVC
   - bloqueo antifraude
   - VPN/ubicación
   - datos fiscales
3) Para cada rama:
   - explicación humana (sin culpar)
   - pasos concretos
   - alternativa (otra tarjeta, transferencia, link manual)
4) Plantillas de respuesta (10) por escenario.
5) Cómo manejar “me cobraron 2 veces” (paso a paso).
6) Cuándo escalar y qué logs pedir (sin exponer datos sensibles).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-004",
    title: "Script: ‘La página no carga / se queda en blanco’ (web) — caché, extensiones, DNS, status, HAR",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion específico para páginas en blanco o loading infinito con pasos en orden óptimo.",
    prompt: `URL afectada: [ ]
Navegador: [Chrome/Safari/etc.]
Dispositivo: [ ]
¿Afecta a varios usuarios? [sí/no/no sé]

Crea un script con:
1) Check rápido: status page / incidentes / mantenimiento (qué decir).
2) Pasos en orden (12–18):
   - modo incógnito
   - desactivar extensiones/adblock
   - limpiar caché/cookies del sitio
   - cambiar navegador
   - cambiar red
   - desactivar VPN/proxy
   - revisar DNS/flush (si aplica) explicado simple
3) Qué información pedir en cada paso (sin marear).
4) Si persiste: cómo recolectar evidencia:
   - consola (copiar errores)
   - HAR file (cómo exportarlo)
   - captura con timestamp
5) Criterios de escalación + plantilla de ticket técnico interno.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-005",
    title: "Script: ‘No recibo correos’ (reset, facturas, notificaciones): spam, filtros, dominios corporativos",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para resolver deliverability sin pelear: checklist por Gmail/Outlook y escalación a IT.",
    prompt: `Tipo de email: [reset/login/factura]
Proveedor: [Gmail/Outlook/corporativo]
Dominio del cliente: [si aplica]

Crea un script con:
1) Checklist en 8 pasos (ordenado por probabilidad).
2) Pasos por proveedor:
   - Gmail: promociones/spam/filtros/búsqueda
   - Outlook: junk/rules/blocked senders
3) Whitelisting: qué agregar y cómo (pasos).
4) Caso corporativo:
   - cómo pedir ayuda al IT del cliente (plantilla)
   - qué datos pedir (sin complicar)
5) Señales de que el email fue enviado vs no (qué revisar internamente).
6) Plantillas de respuesta (8) + cierre preventivo.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-006",
    title: "Script: ‘Subida de archivos falla’ (formatos, tamaño, permisos, red) + soluciones con alternativas",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para errores de upload con ramas por tamaño, formato, permisos, red y navegador.",
    prompt: `Tipo de archivo: [imagen/video/pdf]
Tamaño: [ ]
Mensaje de error: [ ]
Plataforma: [web/app]

Crea un script con:
1) Diagnóstico mínimo (7 preguntas).
2) Árbol de decisión (14 ramas) por:
   - formato no soportado
   - tamaño excedido
   - nombre de archivo raro / caracteres
   - red inestable
   - permisos/cámara/almacenamiento (mobile)
   - navegador antiguo
3) Soluciones paso a paso (10), incluyendo:
   - compresión recomendada (sin herramientas específicas si no quieres)
   - convertir formato
   - subir por otro navegador/app
4) Evidencia para escalar (logs/consola) + plantilla de reporte interno.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-007",
    title: "Script: ‘Se duplicó un cargo / cobro desconocido’ (facturación): verificación, calma y resolución",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Maneja doble cobro o cargo no reconocido con protocolo claro y tono calmado.",
    prompt: `Pasarela: [ ]
Plan/producto: [ ]
Fecha del cargo: [ ]
Monto: [ ]
Email del cliente: [ ]

Crea un script con:
1) Apertura calmante + validación emocional.
2) Verificación de identidad segura (sin datos sensibles).
3) Diagnóstico por escenarios:
   - autorización pendiente vs cargo real
   - renovación + compra adicional
   - impuestos
   - cuentas múltiples
4) Pasos internos para verificar (checklist).
5) Resolución:
   - explicación
   - reembolso (si aplica)
   - evitar futuros cargos (cancelación)
6) Plantillas (10) y cuándo escalar a riesgo/fraude.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-008",
    title: "Script: ‘Nueva actualización rompió algo’ + cómo guiar al usuario en cambios de UX",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para reportes post-release: confirmar impacto, workaround y comunicación clara.",
    prompt: `Cambio reportado: [ ]
Versión: [ ]
Feature: [ ]
¿Hay workaround? [sí/no]

Crea un script con:
1) Cómo confirmar si es bug vs cambio intencional (preguntas).
2) Cómo explicar cambios de UX sin sonar defensivo.
3) 8 frases útiles para guiar “dónde está ahora”.
4) Workarounds temporales (si aplica) + cómo comunicarlos.
5) Plantillas:
   - acuse de bug
   - update sin novedades
   - resolución / cierre
6) Datos mínimos para ingeniería (checklist 15).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-009",
    title: "Script: ‘Va lento / rendimiento’ (web/app): métricas, red, device, optimización y escalación",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Protocolo para performance: preguntas correctas, quick wins y cómo medir mejoría.",
    prompt: `Plataforma: [web/app]
Qué se siente lento: [carga/acción X/búsqueda/export]
Región: [ ]
Dispositivo: [ ]

Crea un script con:
1) Definir “lento” con métricas simples (tiempo aproximado).
2) Diagnóstico por capas:
   - red
   - navegador/app
   - dispositivo
   - cuenta/datos (volumen)
3) Quick wins (10) con orden recomendado.
4) Cómo pedir evidencia útil sin ser pesado:
   - video corto con cronómetro
   - captura de consola (si web)
5) Criterios para escalar (8) + datos mínimos (15).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-010",
    title: "Script: ‘No puedo exportar/importar’ (CSV/JSON): formatos, encoding, límites y errores comunes",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para export/import: validar plantilla, encoding, separadores y límites.",
    prompt: `Operación: [exportar/importar]
Formato: [CSV/JSON]
Error: [ ]
Tamaño: [filas/MB]
Plataforma: [ ]

Crea un script con:
1) Checklist de validación (10) antes de culpar al sistema.
2) Ramas por problemas típicos:
   - separador coma/punto y coma
   - encoding UTF-8
   - columnas obligatorias ausentes
   - tipos de campo (fecha/numero)
   - límites
3) Soluciones explicadas paso a paso (12).
4) Plantillas de soporte (8) + datos para escalar si falla.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-011",
    title: "Script: permisos/roles — ‘No veo X / no puedo hacer Y’ (diagnóstico y resolución)",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para problemas de permisos con pasos claros y mensajes para admins.",
    prompt: `Sistema de roles: [admin/miembro/etc.]
Acción bloqueada: [ ]
Mensaje: [ ]

Crea un script con:
1) Confirmar rol actual (cómo pedir captura o ruta).
2) 10 señales de que es permissions issue vs bug.
3) Pasos para:
   - pedir al admin que cambie rol
   - verificar acceso a workspace correcto
   - refrescar permisos (logout/login)
4) Plantillas:
   - mensaje al usuario
   - mensaje para que el usuario reenvíe al admin
5) Criterios de escalación (si rol correcto y persiste) + datos mínimos.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-012",
    title: "Script: sesión/dispositivos — ‘me saca / se cierra sesión / login loops’",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para loops de login, cookies, múltiples sesiones, SSO y bloqueos.",
    prompt: `Plataforma: [web/app]
Frecuencia: [siempre/a veces]
Navegador: [ ]
VPN: [sí/no]

Crea un script con:
1) Checks rápidos (8).
2) Soluciones (12), incluyendo:
   - limpiar cookies del dominio
   - desactivar bloqueo de cookies 3rd party (explicado)
   - revisar reloj del dispositivo (2FA/SSO)
   - cerrar sesiones abiertas (si existe)
3) Evidencia: capturas, consola, HAR.
4) Plantillas de soporte (8) + escalación.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-013",
    title: "Script: notificaciones no llegan (push/in-app/email): configuración, permisos y prueba",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para notificaciones: settings, permisos, do-not-disturb, y pruebas controladas.",
    prompt: `Tipo: [push/in-app/email]
Dispositivo: [iOS/Android/Web]
Evento que debería notificar: [ ]

Crea un script con:
1) Confirmar configuración dentro del producto (pasos).
2) Para push:
   - permisos del OS
   - notifs silenciadas
   - ahorro de batería
3) Para email:
   - deliverability básico
4) Para in-app:
   - filtros/segmentación
5) Prueba controlada: cómo generar un evento de prueba.
6) Plantillas (8) y checklist de escalación (15).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-014",
    title: "Script: bugs intermitentes — cómo reproducir, aislar variables y documentar bien",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para casos raros: aislar condiciones, recopilar evidencia y evitar loops de preguntas.",
    prompt: `Síntoma: [ ]
Frecuencia: [1/10, 1/día]
Contexto sospechado: [red/datos/feature]

Crea un script con:
1) Preguntas para aislar variables (12) por:
   - hora
   - volumen de datos
   - navegador
   - feature flags
2) Cómo pedir “pasos para reproducir” sin frustrar (texto exacto).
3) Cómo solicitar evidencia mínima (video 20s, captura).
4) Plantilla interna para ingeniería con campos y ejemplo.
5) Mensajes de update (sin novedades) (3 variaciones).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-015",
    title: "Script: integración con terceros falla (Zapier/Meta/Google) + límites de soporte sin culpar",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para integraciones: validar permisos, tokens, rate limits y determinar responsabilidad.",
    prompt: `Integración: [ ]
Acción: [ ]
Error: [ ]
Tokens/API keys: [sí/no]

Crea un script con:
1) Checklist de conexión (10).
2) Diagnóstico por causas:
   - token expirado
   - permisos insuficientes
   - rate limits
   - cambios del tercero
   - webhooks caídos
3) Soluciones paso a paso (12) + workaround.
4) Plantillas:
   - pedir capturas del tercero
   - explicar límites de soporte
   - guiar a soporte del tercero (mensaje listo)
5) Datos mínimos para escalar internamente.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-016",
    title: "Script: problema móvil (iOS/Android) — permisos, caché app, reinstalación, versiones",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion específico móvil con pasos por OS y checklist de compatibilidad.",
    prompt: `OS: [iOS/Android]
Versión OS: [ ]
Versión app: [ ]
Síntoma: [ ]

Crea un script con:
1) Preguntas mínimas (8).
2) Soluciones por OS:
   - permisos (cámara, mic, almacenamiento)
   - cerrar app / reiniciar
   - limpiar caché (Android) / reinstalar (iOS)
   - actualizar app y OS
3) Compatibilidad mínima (cómo explicarlo).
4) Evidencia a pedir: screen recording, pasos.
5) Escalación: datos mínimos (device model, build, etc.).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-017",
    title: "Script: ‘No puedo cambiar mi email / datos de facturación’ (verificación + pasos)",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Procedimiento seguro para cambios sensibles sin abrir riesgos de cuenta.",
    prompt: `Cambio solicitado: [email / nombre fiscal / VAT / tarjeta]
Riesgo: [alto]
Verificación: [método]

Crea un script con:
1) Verificación de identidad (sin pedir datos peligrosos).
2) Pasos guíados dentro del producto (si existe).
3) Si el usuario no tiene acceso al email viejo (escenarios).
4) Plantillas:
   - pedir verificación
   - confirmar cambio
   - negar por falta de pruebas (con alternativa)
5) Registro interno y escalación a seguridad si sospechoso.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-018",
    title: "Script: ‘Mi cuenta fue comprometida’ — protocolo de seguridad (contención, recuperación, prevención)",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Playbook de seguridad para soporte: pasos inmediatos, comunicación segura y escalación.",
    prompt: `Señales reportadas: [cambios no autorizados/login extraño]
Acceso del usuario: [sí/no]
2FA: [sí/no]

Crea un script con:
1) Mensaje inicial (calmante + urgente) + qué haremos.
2) Contención inmediata:
   - reset password
   - activar 2FA
   - cerrar sesiones
   - revisar email de cuenta
3) Evidencia mínima a recopilar.
4) Cuándo bloquear temporalmente y escalar.
5) Plantillas:
   - instrucciones al usuario
   - update mientras investigamos
   - cierre con prevención
6) Lista de “no hacer” (10) para agentes (privacidad/legal).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-019",
    title: "Script: ‘Recibo un error 500/502/503’ — cómo comunicar, dónde mirar y qué pedir",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para errores server-side: comunicación, workaround, recopilación y escalación.",
    prompt: `Error: [500/502/503]
Frecuencia: [ ]
Ruta/feature: [ ]
Región: [ ]

Crea un script con:
1) Mensaje humano: reconocemos + pedimos 2 datos.
2) Verificar status page/incidente y cómo decirlo.
3) Workarounds (5) seguros.
4) Datos mínimos para escalación:
   - timestamp
   - request id
   - cuenta
   - pasos
   - entorno
5) Plantillas para:
   - incidente en curso
   - sin incidente pero investigamos
   - resuelto`,
    thumbnail: "",
  },
  {
    id: "sop-tech-020",
    title: "Script: ‘No funciona en mi empresa’ (firewalls, proxies, dominios bloqueados) + plantilla para IT",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para entornos corporativos: proxy, whitelisting, puertos y comunicación con IT.",
    prompt: `Empresa: [ ]
Síntoma: [no carga/no login]
Red: [corporativa]
IT disponible: [sí/no]

Crea un script con:
1) Señales típicas de bloqueo corporativo.
2) Pasos para confirmar:
   - usar hotspot móvil
   - probar desde casa
3) Lista de requisitos genéricos para whitelisting:
   - dominios
   - puertos
   - endpoints (si aplica, deja placeholders)
4) Email plantilla para IT corporativo (claro, conciso, técnico-friendly).
5) Cómo dar seguimiento sin frustrar al usuario.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-021",
    title: "Script: ‘Funciona para otros, para mí no’ — aislar cuenta vs entorno vs datos",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para aislar si es un tema de cuenta, datos específicos o entorno del usuario.",
    prompt: `Síntoma: [ ]
¿Afecta solo a ese usuario? [sí]
Datos del usuario: [plan/rol]

Crea un script con:
1) Mensaje inicial + hipótesis (sin culpar).
2) Pasos para aislar:
   - probar otra cuenta
   - probar otra red
   - probar otro navegador
   - feature flags/roles
3) Si parece de datos: qué pedir (IDs, ejemplo mínimo).
4) Plantillas para update y escalación.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-022",
    title: "Script: ‘Mi export tarda demasiado’ (colas, límites, jobs) + cómo setear expectativas",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para procesos asíncronos: colas, tamaño, progreso y alternativas.",
    prompt: `Proceso: [export/import/render]
Volumen: [ ]
Tiempo esperado: [ ]
Plan: [ ]

Crea un script con:
1) Cómo explicar “colas” en lenguaje simple.
2) Preguntas para estimar (6).
3) Alternativas:
   - export parcial
   - filtros
   - dividir archivo
4) Plantillas:
   - confirmación de que está corriendo
   - update sin novedades
   - resolución
5) Criterios para escalar (job atascado, timeouts) + datos mínimos.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-023",
    title: "Script: ‘No se guardan cambios’ (autosave) — permisos, caché, conflictos y límites",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para problemas de guardado: conflictos, autosave, permisos y errores silenciosos.",
    prompt: `Pantalla/feature: [ ]
¿Pasa siempre?: [ ]
Dispositivo: [ ]

Crea un script con:
1) Checks básicos (8) en orden.
2) Diagnóstico:
   - permisos/rol
   - sesión expirada
   - conflicto de pestañas
   - límites de campo
   - error de red
3) Soluciones (12) con instrucciones.
4) Evidencia para escalar:
   - consola logs
   - request id
   - video corto
5) Plantillas de soporte (8).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-024",
    title: "Script: ‘Webhooks no llegan’ — verificación, reintentos, firmas y troubleshooting",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion avanzado para integraciones por webhooks: endpoint, logs, firmas, reintentos y errores.",
    prompt: `Webhook: [evento]
Endpoint: [URL]
Firma/secreto: [sí/no]
Logs del cliente: [sí/no]

Crea un script con:
1) Checklist de verificación (10).
2) Diagnóstico por fallos:
   - endpoint caído
   - 4xx/5xx
   - timeout
   - firma inválida
   - rate limiting
3) Reintentos: cómo explicarlos y cómo probar.
4) Qué logs pedir y cómo (sin exponer secretos).
5) Plantillas para:
   - pedir evidencia técnica
   - explicar límites de soporte
   - cierre cuando se resuelve`,
    thumbnail: "",
  },
  {
    id: "sop-tech-025",
    title: "Script: ‘La app crashea’ — pasos de reproducción, versión, crash logs y workaround",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para crashes en móvil/desktop: reproducir, recopilar evidencia y dar alternativas.",
    prompt: `Plataforma: [iOS/Android/Desktop]
Versión app: [ ]
Paso que crashea: [ ]
Frecuencia: [ ]

Crea un script con:
1) Preguntas para reproducir (10).
2) Acciones inmediatas (actualizar, reiniciar, reinstalar).
3) Workarounds (5) realistas.
4) Evidencia:
   - modelo dispositivo
   - OS
   - video
   - crash log (si aplica, describe cómo)
5) Plantillas soporte (8) + escalación a ingeniería.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-026",
    title: "Script: ‘No puedo descargar/abrir contenido’ (PDF/video/curso) — DRM, navegador, extensiones",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para problemas de contenido digital: reproducción, descargas, bloqueos, permisos y alternativas.",
    prompt: `Tipo de contenido: [PDF/video/stream]
Plataforma: [ ]
Navegador: [ ]
Error: [ ]

Crea un script con:
1) Diagnóstico rápido (8).
2) Soluciones por tipo:
   - PDF: visor, permisos, bloqueos
   - Video: autoplay, DRM, navegador, extensiones
3) Alternativas: otro navegador, app, descarga directa (si existe).
4) Evidencia a pedir (captura, consola).
5) Macros (8) con tono calmado.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-027",
    title: "Script: ‘Error de sincronización’ (datos inconsistentes) — estados, refresh, conflictos",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para datos que no coinciden: refresh, caché, jobs, replica y verificación.",
    prompt: `Dato afectado: [ ]
Dónde difiere: [web vs app]
Frecuencia: [ ]

Crea un script con:
1) Cómo describir el problema y confirmar con ejemplos.
2) Checks:
   - refresh hard
   - logout/login
   - esperar job
   - verificar filtros
3) Soluciones (10) y cómo verificar consistencia.
4) Cuándo es bug: señales (8).
5) Datos mínimos para escalación (IDs, timestamps).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-028",
    title: "Script: ‘Problema con 2FA’ — backup codes, reloj del dispositivo, app autenticadora",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Protocolo para 2FA: códigos inválidos, pérdida de dispositivo y recuperación segura.",
    prompt: `2FA: [TOTP/SMS/email]
Usuario perdió acceso: [sí/no]
Backup codes: [sí/no]

Crea un script con:
1) Diagnóstico por escenarios (mín. 8):
   - reloj desincronizado
   - app migrada
   - códigos usados
   - SMS no llega
2) Pasos para resolver sin comprometer seguridad.
3) Proceso de recuperación (si no hay acceso):
   - verificación identidad
   - timeline
4) Plantillas de soporte (10) + registro interno obligatorio.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-029",
    title: "Script: ‘CORS/blocked by browser’ (web avanzado) — explicar simple + datos para ingeniería",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para errores técnicos raros en web: explicar sin tecnicismos y escalar con evidencia.",
    prompt: `Error en consola: [pegar]
Acción: [ ]
Ambiente: [prod/staging]
Navegador: [ ]

Crea un script con:
1) Mensaje al cliente (humano) explicando que es un bloqueo del navegador.
2) Check rápido:
   - restricciones corporativas
   - extensiones
   - cookies/bloqueos
3) Solicitud de evidencia:
   - captura consola
   - HAR
   - request id
4) Plantilla interna para dev con:
   - pasos
   - expected/actual
   - logs
   - entorno`,
    thumbnail: "",
  },
  {
    id: "sop-tech-030",
    title: "Script: ‘Error 429 / rate limit’ — explicar límites, soluciones y upgrades",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para rate limiting: causas, ventanas, backoff y alternativas.",
    prompt: `Acción que dispara 429: [ ]
Plan del usuario: [ ]
Límites actuales: [si los tienes]

Crea un script con:
1) Explicación simple de rate limits.
2) Diagnóstico: burst vs steady usage.
3) Soluciones:
   - esperar ventana
   - reducir frecuencia
   - batch requests
   - caching
4) Plantillas:
   - explicación + pasos
   - sugerir upgrade (sin presionar)
5) Datos mínimos para escalar si el límite parece incorrecto.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-031",
    title: "Script: ‘No puedo conectar mi dominio / DNS’ — explicación para no técnicos + checklist por registros",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para conectar dominio: A/CNAME/TXT, propagación, TTL y verificación.",
    prompt: `Proveedor DNS: [GoDaddy/Cloudflare/etc.]
Registros esperados: [A/CNAME/TXT]
Error: [ ]

Crea un script con:
1) Explicación simple de DNS y propagación (sin jerga).
2) Checklist de verificación (12):
   - registro correcto
   - host
   - TTL
   - conflictos
3) Pasos por tipo de registro (A/CNAME/TXT) con ejemplos de valores (placeholders).
4) Cómo verificar con herramientas (sin nombrar herramientas específicas si no quieres).
5) Plantillas para pedir captura del panel DNS (sin datos sensibles).
6) Cuándo escalar y qué datos enviar a ingeniería.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-032",
    title: "Script: ‘Mi API key no funciona’ — permisos, scopes, revocación y rotación segura",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para problemas con API keys: confirmar scopes, regenerar y buenas prácticas.",
    prompt: `API: [ ]
Error: [401/403/other]
Uso: [server/client]
Región: [ ]

Crea un script con:
1) Diagnóstico por códigos:
   - 401 (auth)
   - 403 (permisos)
   - 404 (endpoint)
2) Checklist:
   - key correcta
   - headers
   - scopes/roles
   - entorno prod vs test
3) Rotación segura:
   - generar nueva, revocar vieja
   - evitar compartir en tickets
4) Plantillas de soporte (8) + datos mínimos para escalación.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-033",
    title: "Script: ‘Problemas con cámara/micro’ (web/zoom-like) — permisos OS/navegador y pruebas",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para permisos de cámara/micro con pasos por navegador y OS.",
    prompt: `Plataforma: [web]
Navegador: [ ]
OS: [ ]
Dispositivo: [ ]

Crea un script con:
1) Checks rápidos (8).
2) Pasos para habilitar permisos en:
   - Chrome
   - Safari
   - Edge
3) Conflictos típicos:
   - otra app usando micro
   - auriculares bluetooth
   - bloqueo corporativo
4) Prueba de audio/video controlada.
5) Plantillas soporte (8) + escalación.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-034",
    title: "Script: ‘Mi contenido no aparece / está desordenado’ — caché, filtros, indexación y permisos",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para datos faltantes: filtros, indexación, jobs y permisos.",
    prompt: `Contenido: [ ]
Dónde debería aparecer: [ ]
Filtro usado: [ ]
Tiempo desde creación: [ ]

Crea un script con:
1) Confirmar filtros/orden (pasos).
2) Verificar permisos/rol/workspace.
3) Espera de indexación: cómo explicarlo.
4) Soluciones (10):
   - refresh
   - limpiar caché
   - reintentar
5) Señales de bug (8) + datos para escalar (IDs/timestamps).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-035",
    title: "Script: ‘Error al enviar formulario’ — validaciones, captcha, cookies, extensiones",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para fallos al enviar formularios, incluyendo validaciones invisibles y captcha.",
    prompt: `Formulario: [contacto/checkout/registro]
Error: [ ]
Navegador: [ ]
Adblock: [sí/no]

Crea un script con:
1) Diagnóstico rápido (8).
2) Soluciones:
   - completar campos obligatorios
   - desactivar adblock
   - permitir cookies
   - probar incógnito
   - reintentar en otra red
3) Evidencia:
   - captura del error
   - consola
   - timestamp
4) Plantillas (8) + escalación.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-036",
    title: "Script: ‘Problema con enlaces’ (expiran/no abren) — tracking, seguridad, redirecciones",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para links rotos o expirados: causas, regeneración y alternativas.",
    prompt: `Tipo link: [magic link/descarga/invitación]
Mensaje: [expirado/invalid]
Proveedor email: [ ]

Crea un script con:
1) Causas típicas (8) y cómo explicarlas.
2) Pasos:
   - pedir generar nuevo
   - copiar/pegar en navegador
   - abrir en incógnito
3) Caso: cliente corporativo con filtros anti-phishing.
4) Plantillas (8) y criterios de escalación.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-037",
    title: "Script: ‘Problema con renovaciones’ — confirma estado, pagos, prorrateos y acceso",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para renovación que no se aplica o acceso incorrecto: billing + estados de suscripción.",
    prompt: `Plan: [ ]
Fecha renovación: [ ]
Estado acceso: [activo/inactivo]
Pasarela: [ ]

Crea un script con:
1) Preguntas de diagnóstico (8).
2) Verificaciones internas (checklist):
   - estado suscripción
   - último pago
   - invoice status
   - prorrateo
3) Resoluciones:
   - reintentar cobro
   - reactivar
   - ajustar acceso
4) Plantillas (10) + escalación si datos inconsistentes.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-038",
    title: "Script: ‘Me aparece contenido bloqueado’ — validar plan, cache, sincronización, licencias",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para gating incorrecto: plan/rol, caché, licencias y estados.",
    prompt: `Contenido: [ ]
Plan del usuario: [ ]
Sección: [ ]
¿Cambia si refresca?: [sí/no]

Crea un script con:
1) Confirmar plan y permisos (pasos).
2) Checks:
   - logout/login
   - refrescar hard
   - borrar caché del sitio
3) Verificaciones internas:
   - entitlement flags
   - fecha de expiración
4) Resolución:
   - sincronizar acceso
   - reasignar licencia
5) Plantillas (8) + criterios de escalación.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-039",
    title: "Script: ‘Problema de timezone/fechas’ (calendarios, vencimientos) — reloj, región, DST",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para bugs de fechas: reloj del dispositivo, zona horaria, DST y formatos.",
    prompt: `Feature: [calendario/vencimiento]
País: [ ]
Hora incorrecta: [ ]
Dispositivo: [ ]

Crea un script con:
1) Comprobar reloj dispositivo y zona horaria.
2) Revisar configuración de cuenta (si existe).
3) Explicar DST de forma simple.
4) Soluciones (8) y verificación.
5) Datos mínimos para escalar si persiste.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-040",
    title: "Script: ‘Bug en producción’ — cómo contener, comunicar, recoger evidencia y cerrar el loop",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Playbook para bugs reales: contención, updates, coordinación y comunicación final.",
    prompt: `Bug: [ ]
Severidad: [P1-P4]
Workaround: [sí/no]

Crea playbook con:
1) Mensaje inicial al cliente (3 variantes por severidad).
2) Contención:
   - workaround
   - limitar acción
   - pausar feature
3) Evidencia mínima (checklist 15).
4) Updates:
   - cada cuánto
   - qué decir SIN prometer ETA
5) Cierre:
   - confirmación con el cliente
   - resumen de lo que pasó (alto nivel)
   - prevención / consejos`,
    thumbnail: "",
  },

  {
    id: "sop-tech-041",
    title: "Script: ‘Error 403/Forbidden’ — permisos, WAF, región, cookies y autenticación",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para 403: diferenciar permisos vs bloqueo de seguridad y resolver rápido.",
    prompt: `Ruta: [ ]
Navegador: [ ]
VPN: [sí/no]
Región: [ ]

Crea un script con:
1) Diagnóstico por hipótesis (permisos vs bloqueo).
2) Checks (10):
   - logout/login
   - cookies
   - VPN
   - otra red
3) Si parece WAF/bloqueo:
   - pedir IP pública (si aplica) con explicación humana
   - timestamp
4) Plantillas (8) + escalación a seguridad/infra.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-042",
    title: "Script: ‘Error 404’ — enlace incorrecto vs recurso borrado vs permisos",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para 404: validar URL, navegación correcta, permisos y recursos eliminados.",
    prompt: `URL: [ ]
Recurso: [ ]
Acción: [ ]

Crea un script con:
1) Verificar URL y si está desactualizada (pasos).
2) Confirmar si el recurso fue borrado o movido.
3) Permisos/roles: cómo confirmarlo.
4) Soluciones (8) + alternativa (buscar desde app).
5) Plantillas (6) para responder rápido.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-043",
    title: "Script: ‘Problema con cache’ — hard refresh, service workers, limpiar site data",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para comportamientos raros por cache/service workers con pasos seguros.",
    prompt: `Síntoma: [UI vieja / cambios no aparecen]
Navegador: [Chrome/Safari]
Plataforma: [web]

Crea un script con:
1) Explicación simple de cache.
2) Pasos:
   - hard refresh
   - limpiar cache/cookies del sitio
   - limpiar “site data”
   - desactivar service worker (si aplica) explicado friendly
3) Cómo verificar que se actualizó.
4) Plantillas (6) y escalación si persiste.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-044",
    title: "Script: ‘Mi invitación a workspace no funciona’ — expiración, email, permisos y reenvío",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para invites: expiración, cuentas duplicadas, dominios corporativos y reenvío correcto.",
    prompt: `Invitación: [workspace/team]
Email invitado: [ ]
Expira: [sí/no]
Proveedor: [ ]

Crea un script con:
1) Diagnóstico:
   - email correcto vs alias
   - cuenta preexistente
   - invitación expirada
2) Pasos para reenviar correctamente.
3) Caso corporativo (filtros IT).
4) Plantillas (8) para admin y para invitado.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-045",
    title: "Script: ‘No puedo restablecer contraseña’ — deliverability, tokens expirados, seguridad",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para password reset: no llega email, token inválido, bloqueos y flujo seguro.",
    prompt: `Email del usuario: [ ]
Proveedor: [ ]
¿Recibe otros emails?: [sí/no]
Token: [expirado/invalid]

Crea un script con:
1) Checklist deliverability (8).
2) Reenviar reset: mejores prácticas.
3) Token expirado: explicación y solución.
4) Verificación si hay sospecha de compromiso.
5) Plantillas (10) y escalación a seguridad si aplica.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-046",
    title: "Script: ‘No puedo usar feature X’ — validar feature flags, rollout, plan y región",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para features no disponibles: rollout gradual, flags, planes y regiones.",
    prompt: `Feature: [ ]
Plan: [ ]
Región: [ ]
Rollout: [gradual]

Crea un script con:
1) Confirmar plan/rol.
2) Confirmar región y rollout:
   - cómo explicarlo sin frustrar
3) Workaround/alternativas temporales.
4) Plantillas:
   - “aún no disponible”
   - “ya habilitado, prueba esto”
5) Datos mínimos para verificar flags internamente.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-047",
    title: "Script: ‘Error al conectar Google/Meta’ (OAuth) — scopes, popup blockers, cookies",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para fallos OAuth: popups, cookies, scopes, cuentas múltiples y permisos.",
    prompt: `Proveedor OAuth: [Google/Meta]
Navegador: [ ]
Error: [ ]

Crea un script con:
1) Checks rápidos:
   - permitir popups
   - cookies 3rd party
   - desactivar adblock
2) Ramas:
   - permisos negados
   - cuenta equivocada
   - scopes cambiaron
3) Pasos para desconectar y reconectar seguro.
4) Evidencia para escalar si el proveedor falla.
5) Plantillas (8).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-048",
    title: "Script: ‘No puedo generar/descargar factura’ — datos fiscales, estados y documentos",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para facturas: datos fiscales, VAT/IVA, estados de pago y descarga.",
    prompt: `Pasarela: [ ]
País: [ ]
Tipo doc: [recibo/factura]
Problema: [no aparece/no descarga]

Crea un script con:
1) Verificar estado del pago (paid/pending/refunded).
2) Verificar datos fiscales (campos obligatorios).
3) Pasos para descargar.
4) Casos especiales: impuesto aplicado, empresa, VAT.
5) Plantillas (10) + escalación si falta generar documento.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-049",
    title: "Script: ‘Me bloquea el antivirus/adblock’ — cómo guiar sin culpar + alternativas",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion para bloqueos por seguridad del usuario: explicar, pedir pruebas y dar camino alterno.",
    prompt: `Producto: [ ]
Bloqueador: [adblock/antivirus/corporate]
Síntoma: [no carga/botón no responde]

Crea un script con:
1) Señales de bloqueo (6).
2) Cómo pedir que prueben sin bloqueador (mensajes humanos).
3) Alternativa: navegador limpio/perfil nuevo/incógnito.
4) Qué pedir como evidencia (captura de extensión, lista).
5) Plantillas (8) y cuándo escalar.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-050",
    title: "Script: cierre técnico excelente — confirmar solución, documentar causa y prevenir recurrencia",
    area: "Atención al Cliente & SOPs",
    category: "Soporte Técnico (Scripts)",
    summary:
      "Guion de cierre para tickets técnicos: verificación, causa probable, prevención y recursos.",
    prompt: `Nivel del usuario: [ ]
Incidencia: [ ]
Solución aplicada: [ ]

Crea un script de cierre con:
1) Confirmación de éxito (preguntas y checks).
2) Resumen de la causa (en humano) sin culpar.
3) Prevención:
   - 5 recomendaciones concretas
   - link a docs sugerido (inventar título si no existe)
4) Registro interno:
   - tags
   - categoría
   - root cause probable
5) 5 variantes de cierre por tono:
   - neutro
   - cercano
   - premium
   - muy breve (chat)
   - detallado (email).`,
    thumbnail: "",
  },
];
