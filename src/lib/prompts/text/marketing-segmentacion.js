// src/lib/prompts/text/marketing-segmentacion.js

export const textPromptsMarketingSegmentacion = [
  {
    id: "mseg-001",
    title: "Segmentación completa (ICP) — definir segmentos por problema, no por demografía",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Crea segmentos accionables basados en Jobs-To-Be-Done, dolor, intención y contexto de uso.",
    prompt: `Contexto (rellena):
- Producto/servicio:
- Precio / ticket:
- Mercado / país:
- Canal principal (ads/orgánico/email/whatsapp):
- Quién compra hoy (lo que sabes):
- Principales casos de uso:
- Competidores/alternativas:
- Objeciones típicas:
- Tiempo de decisión:
- Qué significa ‘éxito’ para el cliente:

Tarea:
1) Define 6–10 segmentos basados en:
   - Problema principal (Job-To-Be-Done)
   - Contexto (cuándo les duele más)
   - Urgencia (alta/media/baja)
   - Capacidad (dinero/tiempo/equipo)
2) Para cada segmento escribe:
   - nombre del segmento (claro y memorable)
   - “frase de momento” (ej: “cuando ____ pasa, necesito ____”)
   - disparadores de compra
   - 3 mensajes clave
   - oferta/CTA ideal (call, checkout, demo, lead magnet)
   - señales de “no fit”
3) Prioriza los segmentos (top 3) usando una matriz:
   - TAM accesible, facilidad de adquisición, margen/LTV, urgencia
4) Cierra con un plan de prueba de 2 semanas:
   - cómo validar cada segmento (ads, contenido, encuesta, llamadas).`,
    thumbnail: "",
  },
  {
    id: "mseg-002",
    title: "Segmentación por intención (cold / warm / hot) — reglas claras y triggers",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Define segmentos por intención y automatiza qué contenido/oferta recibe cada uno.",
    prompt: `Rellena:
- Canales (email/whatsapp/ads/site):
- Eventos trackeables (visita pricing, click CTA, reply, etc.):
- Oferta:
- Ventas (B2B/B2C) y ciclo:

Tarea:
1) Define 3 niveles:
   - Frío: definición + criterio
   - Tibio: definición + criterio
   - Caliente: definición + criterio
2) Define un scoring simple (0–100) con puntos por evento.
3) Define 8 triggers y qué acción disparan:
   - secuencia A/B/C
   - cambio de mensaje
   - oferta (soft/hard)
4) Define “caps” para no saturar.
5) Entrega una tabla con:
   Nivel | Criterio | Mensaje principal | CTA | Contenido recomendado | Frecuencia`,
    thumbnail: "",
  },
  {
    id: "mseg-003",
    title: "Segmentación por etapa del funnel — awareness → consideración → conversión",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Crea segmentos por nivel de conciencia y adapta la narrativa para cada uno.",
    prompt: `Rellena:
- Producto:
- Problema que resuelve:
- Mecanismo/solución:
- Objeciones:
- Canales:

Tarea:
1) Define 4 niveles de conciencia:
   - No consciente
   - Consciente del problema
   - Consciente de la solución
   - Consciente del producto
2) Para cada nivel:
   - objetivo de comunicación
   - 5 ángulos de mensaje
   - 3 tipos de contenido ideal
   - CTA apropiado
3) Da ejemplos (copy) de:
   - 2 hooks
   - 1 email/mensaje
   - 1 anuncio corto
por cada nivel.`,
    thumbnail: "",
  },
  {
    id: "mseg-004",
    title: "Segmentación por ‘Job-To-Be-Done’ — mapear jobs, pains, gains y ofertas",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Descompone tu mercado en jobs y alinea mensajes + oferta por cada job.",
    prompt: `Rellena:
- Producto:
- Principales usos:
- Resultados que buscan:
- Alternativas:

Tarea:
1) Identifica 8 Jobs-To-Be-Done (JTBD) concretos.
2) Para cada job:
   - situación detonante
   - resultado deseado
   - pain principal
   - alternativa actual
   - por qué falla
   - mensaje principal
   - oferta ideal (lead magnet/entry/prime)
3) Prioriza 3 JTBD por potencial y facilidad de adquisición.`,
    thumbnail: "",
  },
  {
    id: "mseg-005",
    title: "Segmentación por ‘capacidad’ (tiempo/dinero/equipo) — adaptar promesa y formato",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Crea segmentos según recursos reales del cliente y ajusta promesa, pacing y soporte.",
    prompt: `Rellena:
- Oferta:
- Formato (curso, servicio, SaaS):
- Soporte disponible:
- Precio:

Tarea:
1) Define 5 niveles de capacidad:
   - Tiempo (alto/bajo)
   - Dinero (alto/bajo)
   - Equipo (solo/pequeño/empresa)
2) Cruza y crea 4–6 segmentos finales.
3) Para cada segmento:
   - lo que NO debes prometer
   - la promesa realista (cómo suena)
   - formato recomendado (DIY, DFY, DWY)
   - CTA ideal
4) Termina con “cómo detectar capacidad” (preguntas para formulario/DM).`,
    thumbnail: "",
  },

  {
    id: "mseg-006",
    title: "Segmentación por industria (B2B) — verticales y mensajes por vertical",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Construye 6 verticales con dolores, KPIs y ejemplos para adaptar landing/ads.",
    prompt: `Rellena:
- Servicio B2B:
- KPI que mejoras:
- Industrias objetivo (si tienes):
- Casos o experiencia previa:

Tarea:
1) Propón 6 verticales relevantes.
2) Para cada vertical:
   - dolor #1 y #2
   - KPI principal
   - objeción típica
   - ejemplo de caso de uso
   - copy de 1 headline + 3 bullets
   - CTA recomendada
3) Recomienda 2 verticales para empezar y por qué.`,
    thumbnail: "",
  },
  {
    id: "mseg-007",
    title: "Segmentación por rol (B2B) — decisor vs usuario vs campeón interno",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Adapta mensajes y assets según rol: CFO/CEO/marketing manager/ops, etc.",
    prompt: `Rellena:
- Producto/servicio:
- Roles involucrados:
- Proceso de compra:
- Riesgos percibidos:

Tarea:
1) Define 3 roles típicos:
   - Decisor económico
   - Usuario principal
   - Campeón interno
2) Para cada rol:
   - qué le importa (prioridades)
   - objeciones
   - métricas de éxito
   - proof que necesita
   - mensaje principal y CTA
3) Crea 1 email y 1 anuncio corto por rol.`,
    thumbnail: "",
  },
  {
    id: "mseg-008",
    title: "Segmentación por comportamiento (RFM) — Recencia, Frecuencia, Valor",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Crea segmentos RFM listos para email/WhatsApp: reactivación, upsell, VIP y más.",
    prompt: `Rellena:
- Tipo de negocio (ecom/servicios):
- Ventana de compra/recompra:
- Datos disponibles (fechas, #compras, gasto):
- Productos/categorías:

Tarea:
1) Define umbrales RFM (alto/medio/bajo) para tu caso.
2) Crea 8 segmentos:
   - VIP (alto valor, alta frecuencia)
   - Nuevos (reciente, baja frecuencia)
   - En riesgo (no reciente)
   - Dormidos
   - Cazadores de ofertas, etc.
3) Para cada segmento:
   - objetivo (retener, upsell, winback)
   - 3 mensajes/ángulos
   - oferta recomendada
   - frecuencia segura
4) Crea un calendario de 4 semanas (qué segmento recibe qué).`,
    thumbnail: "",
  },
  {
    id: "mseg-009",
    title: "Segmentación por engagement (email) — activos / tibios / inactivos con plan de higiene",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Define reglas para segmentar por engagement y mejorar deliverability sin perder ventas.",
    prompt: `Rellena:
- ESP (Klaviyo/Mailchimp/etc.):
- Frecuencia de envío:
- Baseline de opens/clicks:
- Objetivo (ventas/nurturing):

Tarea:
1) Define segmentos:
   - Súper activos
   - Activos
   - Tibios
   - Inactivos 30/60/90
2) Define reglas exactas (ej: “ha abierto ≥2 de últimos 10”).
3) Para cada segmento:
   - tipo de contenido
   - frecuencia
   - CTA
4) Define un plan de re-engagement (7 días) y un plan de limpieza (cuándo y cómo).`,
    thumbnail: "",
  },
  {
    id: "mseg-010",
    title: "Segmentación por fuente de adquisición — adaptar promesa según ‘cómo llegaron’",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Convierte sources (ads, orgánico, referral, webinar) en segmentos con narrativa distinta.",
    prompt: `Rellena:
- Fuentes: (Meta ads, Google, TikTok, orgánico, afiliado, etc.)
- Lead magnets por fuente:
- Oferta:
- Objeciones:

Tarea:
1) Define 6 segmentos por fuente.
2) Para cada fuente:
   - expectativa con la que llegan
   - qué deben aprender primero
   - mensaje de bienvenida ideal
   - CTA apropiada
3) Crea 1 mensaje de onboarding por fuente (listo para copiar).`,
    thumbnail: "",
  },

  {
    id: "mseg-011",
    title: "Segmentación por ‘problema específico’ — 12 micro-segmentos con copy distinto",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Genera micro-segmentos por problema concreto y crea mensajes y recursos por cada uno.",
    prompt: `Rellena:
- Oferta:
- Problema general:
- Sub-problemas conocidos (si tienes):

Tarea:
1) Genera 12 micro-segmentos por sub-problema (muy específico).
2) Para cada micro-segmento:
   - nombre
   - síntoma típico
   - causa raíz probable
   - solución (idea)
   - recurso puente (lead magnet)
   - CTA final
3) Escribe 2 hooks y 1 headline por micro-segmento.`,
    thumbnail: "",
  },
  {
    id: "mseg-012",
    title: "Segmentación por triggers (momentos) — ‘cuando pasa X, compran más rápido’",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Encuentra detonantes situacionales y crea mensajes específicos por trigger.",
    prompt: `Rellena:
- Oferta:
- Momentos conocidos (ej: lanzamiento, crisis, contratar, salir al mercado):
- Canal:

Tarea:
1) Lista 10 triggers de compra (situaciones).
2) Para cada trigger:
   - emoción dominante
   - urgencia
   - promesa más relevante
   - objeción típica
   - CTA ideal
3) Escribe 1 anuncio corto y 1 DM por trigger.`,
    thumbnail: "",
  },
  {
    id: "mseg-013",
    title: "Segmentación por nivel de experiencia — principiante vs intermedio vs avanzado",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Adapta lenguaje, ejemplos y oferta según experiencia previa del cliente.",
    prompt: `Rellena:
- Oferta:
- Tema:
- Errores comunes:
- Canal:

Tarea:
1) Define 3 niveles (principiante/intermedio/avanzado) con criterios claros.
2) Para cada nivel:
   - qué creen hoy (creencias)
   - qué necesitan aprender
   - qué evitar (lo que los frustra)
   - mensaje principal y CTA
3) Escribe:
   - 1 email
   - 1 anuncio
   - 1 hook de video
para cada nivel.`,
    thumbnail: "",
  },
  {
    id: "mseg-014",
    title: "Segmentación por presupuesto — ‘precio sensible’ sin destruir margen",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por sensibilidad al precio y define ofertas escalonadas y copy adecuada.",
    prompt: `Rellena:
- Precio actual:
- Alternativas de menor ticket:
- Alternativas premium:
- Canal:

Tarea:
1) Define 3 segmentos:
   - Sensible al precio
   - Valor/ROI
   - Premium (status/seguridad)
2) Para cada segmento:
   - lenguaje recomendado
   - prueba que más pesa
   - formato de oferta (bundle, plan, garantía, prueba)
   - CTA
3) Escribe 2 versiones de pitch por segmento (corto y largo).`,
    thumbnail: "",
  },
  {
    id: "mseg-015",
    title: "Segmentación por objeción dominante — 8 segmentos según la razón por la que NO compran",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Crea segmentos por objeción y asigna nurturing/ads específicos para cada uno.",
    prompt: `Rellena:
- Oferta:
- Lista de objeciones reales (mínimo 8):
- Canales:

Tarea:
1) Convierte cada objeción en un segmento (ej: “No tengo tiempo”).
2) Para cada segmento:
   - qué necesitan ver/entender
   - mensaje principal (reframe)
   - recurso puente ideal
   - CTA final
3) Escribe 1 anuncio y 1 email por objeción.`,
    thumbnail: "",
  },

  {
    id: "mseg-016",
    title: "Segmentación por categoría de producto (eCommerce) — colecciones y bundles por intención",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Crea segmentos por intención de compra (uso) y asigna colecciones/bundles.",
    prompt: `Rellena:
- Catálogo (categorías):
- AOV:
- productos top:
- Estacionalidad:

Tarea:
1) Define 8 intenciones de compra (ej: regalo, uso diario, premium, urgente).
2) Para cada intención:
   - colección recomendada (productos)
   - bundle sugerido
   - copy de 1 headline + 5 bullets
   - CTA
3) Define flujo post-click: landing/colección y upsell.`,
    thumbnail: "",
  },
  {
    id: "mseg-017",
    title: "Segmentación por ciclo de vida — nuevo → activado → recurrente → en riesgo",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Define lifecycle stages y qué debe recibir cada uno para mejorar LTV.",
    prompt: `Rellena:
- Ventana típica de recompra:
- Producto:
- Canales post-compra:

Tarea:
1) Define 6 etapas del ciclo de vida con criterios numéricos.
2) Para cada etapa:
   - objetivo (activar, retener, upsell, winback)
   - 3 mensajes clave
   - oferta recomendada
3) Crea una tabla de automatizaciones por etapa.`,
    thumbnail: "",
  },
  {
    id: "mseg-018",
    title: "Segmentación por ‘mecanismo de solución’ — personas que creen en enfoques distintos",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por creencias: automatización vs creatividad vs disciplina vs herramientas.",
    prompt: `Rellena:
- Problema:
- Tu solución/método:
- “Escuelas” del mercado (si existen):
- Canal:

Tarea:
1) Define 4–6 segmentos por creencia/mecanismo.
2) Para cada segmento:
   - lenguaje y metáforas
   - qué evidencia les convence
   - qué objeción les frena
   - CTA ideal
3) Escribe 3 hooks por segmento.`,
    thumbnail: "",
  },
  {
    id: "mseg-019",
    title: "Segmentación a partir de data mínima — 5 preguntas mágicas de formulario/DM",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Diseña 5 preguntas que te permiten segmentar casi todo sin fricción.",
    prompt: `Rellena:
- Oferta:
- Canal donde preguntar (form/DM/WhatsApp):
- 3 resultados posibles del cliente:
- Restricciones:

Tarea:
1) Propón 5 preguntas (máx) y el set de respuestas (opciones) para segmentar:
   - capacidad
   - urgencia
   - dolor
   - experiencia
   - presupuesto
2) Mapea cada respuesta a un segmento (etiqueta).
3) Escribe el mensaje/thank you screen distinto para cada segmento (5 variaciones).`,
    thumbnail: "",
  },
  {
    id: "mseg-020",
    title: "Segmentación por lenguaje — detectar ‘palabras’ que delatan el segmento",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Identifica patrones de palabras por segmento y ajusta copy para resonar.",
    prompt: `Rellena:
- Nicho:
- Oferta:
- 20 frases reales de clientes (si no tienes, inventa ejemplos realistas):
- Canal:

Tarea:
1) Agrupa las frases en 4–6 clusters (segmentos).
2) Para cada cluster:
   - palabras que se repiten
   - emoción dominante
   - prioridad
   - copy recomendado (headline + 3 bullets + CTA)
3) Crea un glosario de ‘palabras prohibidas’ por segmento (lo que rechazan).`,
    thumbnail: "",
  },

  {
    id: "mseg-021",
    title: "Segmentación por ‘nivel de dolor’ — leve, moderado, crítico (mensajes distintos)",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Diferencia el dolor y la urgencia para no sobre-vender ni infra-vender.",
    prompt: `Rellena:
- Problema:
- Oferta:
- Señales de dolor:

Tarea:
1) Define 3 niveles de dolor con criterios observables.
2) Para cada nivel:
   - mensaje (qué decir)
   - tono (qué evitar)
   - CTA (paso apropiado)
3) Escribe 2 anuncios cortos por nivel.`,
    thumbnail: "",
  },
  {
    id: "mseg-022",
    title: "Segmentación por ‘momento de negocio’ — pre-lanzamiento, lanzamiento, escalado, crisis",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por etapa del negocio y ajusta oferta, promesa y prueba.",
    prompt: `Rellena:
- Nicho:
- Oferta:
- Etapas típicas de tus clientes:
- Canal:

Tarea:
1) Define 5 etapas del negocio del cliente.
2) Para cada etapa:
   - objetivo del cliente
   - miedo principal
   - métrica clave
   - mensaje y CTA
3) Crea una mini landing outline por etapa (secciones y bullets).`,
    thumbnail: "",
  },
  {
    id: "mseg-023",
    title: "Segmentación por canal preferido — ‘solo WhatsApp’, ‘solo email’, ‘solo llamada’",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por preferencia de comunicación y adapta el nurturing al canal.",
    prompt: `Rellena:
- Oferta:
- Canales disponibles:
- Assets por canal:

Tarea:
1) Define 4 segmentos por preferencia de canal.
2) Para cada segmento:
   - frecuencia ideal
   - estilo de copy
   - CTA apropiada
3) Crea 1 mensaje de onboarding y 1 de oferta por segmento.`,
    thumbnail: "",
  },
  {
    id: "mseg-024",
    title: "Segmentación por sensibilidad a riesgo — ‘quiero certeza’ vs ‘me gusta experimentar’",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por tolerancia al riesgo y adapta prueba, garantías y estructura de oferta.",
    prompt: `Rellena:
- Oferta:
- Riesgos percibidos:
- Garantías/pruebas:
- Canal:

Tarea:
1) Define 3 segmentos:
   - riesgo bajo (necesita certeza)
   - riesgo medio
   - riesgo alto (experimentador)
2) Para cada segmento:
   - prueba que más funciona
   - palabras a usar/evitar
   - CTA
3) Escribe 2 versiones de pitch por segmento.`,
    thumbnail: "",
  },
  {
    id: "mseg-025",
    title: "Segmentación por ‘lo que ya intentaron’ — DIY, agencia, cursos, herramientas",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por intentos previos y crea mensajes que respetan su historia sin juzgar.",
    prompt: `Rellena:
- Oferta:
- Alternativas que ya probaron:
- Por qué falló:
- Canal:

Tarea:
1) Crea 5 segmentos por intento previo.
2) Para cada segmento:
   - validación (empatía)
   - reframe (qué faltó)
   - por qué tu método encaja
   - CTA ideal
3) Escribe 1 email y 1 DM por segmento.`,
    thumbnail: "",
  },

  {
    id: "mseg-026",
    title: "Segmentación por ‘resultado deseado’ — velocidad, calidad, estabilidad, crecimiento",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por el objetivo final del cliente y asigna promesa, proof y oferta.",
    prompt: `Rellena:
- Oferta:
- 4 resultados deseados típicos:
- Canal:

Tarea:
1) Define 4–6 segmentos por resultado (ej: “quiero resultados rápidos”).
2) Para cada segmento:
   - promesa realista
   - riesgos/limitaciones
   - prueba ideal
   - CTA
3) Genera 3 hooks y 1 headline por segmento.`,
    thumbnail: "",
  },
  {
    id: "mseg-027",
    title: "Segmentación por ‘madurez de sistema’ — sin sistema vs con sistema vs optimización",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta según nivel de procesos y sistemas del cliente y adapta la solución.",
    prompt: `Rellena:
- Nicho:
- Oferta:
- Qué requiere tu solución (datos, procesos, etc.):

Tarea:
1) Define 3 niveles de madurez:
   - caótico (sin sistema)
   - estable (algo de sistema)
   - optimización (sistema sólido)
2) Para cada nivel:
   - qué necesitan primero
   - qué NO debes venderles aún
   - beneficios que más les importan
   - CTA apropiada
3) Crea un cuestionario de 8 ítems para clasificar a alguien.`,
    thumbnail: "",
  },
  {
    id: "mseg-028",
    title: "Segmentación por geografía y cultura — adaptar ejemplos, referencias y promesas",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por país/ciudad/cultura y ajusta copy sin estereotipos baratos.",
    prompt: `Rellena:
- Países/mercados objetivo:
- Oferta:
- Diferencias culturales conocidas:
- Canales:

Tarea:
1) Define 4 segmentos geográficos (o culturales) razonables.
2) Para cada segmento:
   - referencias y ejemplos que resuenan
   - tono (formal/informal)
   - objeciones típicas
   - CTA y oferta adaptada
3) Escribe 1 anuncio y 1 email por segmento (idioma local).`,
    thumbnail: "",
  },
  {
    id: "mseg-029",
    title: "Segmentación por comportamiento en web — rutas de página y contenido consumido",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Crea segmentos según navegación: blog readers, pricing visitors, checkout starters, etc.",
    prompt: `Rellena:
- Páginas clave (home, pricing, casos, checkout):
- Eventos trackeables:
- Oferta:
- Canal de activación (email/ads):

Tarea:
1) Define 8 segmentos basados en rutas:
   - visitó pricing 2+ veces
   - leyó 3 artículos del mismo cluster
   - inició checkout pero no compró
   - revisó casos, etc.
2) Para cada segmento:
   - hipótesis de intención
   - mensaje principal
   - recurso puente
   - CTA
3) Diseña una secuencia de 4 mensajes para el segmento “pricing visitor”.`,
    thumbnail: "",
  },
  {
    id: "mseg-030",
    title: "Segmentación por producto de entrada — mapear ‘entry’ → ‘core’ → ‘premium’",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta según qué producto compraron/descargaron y crea rutas de valor (ladder).",
    prompt: `Rellena:
- Entry offer:
- Core offer:
- Premium offer:
- Ventana típica de upgrade:
- Canal:

Tarea:
1) Define 5 segmentos por punto de entrada.
2) Para cada segmento:
   - qué deben lograr antes de subir de nivel
   - contenidos de nurturing (3 ideas)
   - momento correcto del upsell
   - mensaje de upsell (copy)
3) Crea un mapa de journey por niveles.`,
    thumbnail: "",
  },

  {
    id: "mseg-031",
    title: "Segmentación para anuncios (Meta/TikTok) — estructura de ad sets por segmento y creativos",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Convierte segmentos en ad sets y define qué creativos y KPI deben tener.",
    prompt: `Rellena:
- Oferta:
- Segmentos candidatos:
- Presupuesto:
- KPI objetivo:
- Creativos disponibles:

Tarea:
1) Propón estructura de campañas:
   - prospecting (segmentos)
   - remarketing (segmentos)
2) Para cada segmento:
   - ángulos creativos (3)
   - formatos recomendados (UGC, demo, prueba)
   - métrica principal y umbral
3) Define hipótesis por ad set y plan de test 14 días.`,
    thumbnail: "",
  },
  {
    id: "mseg-032",
    title: "Segmentación para contenido orgánico — pilares por segmento y series repetibles",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Define series de contenido por segmento para captar demanda cualificada.",
    prompt: `Rellena:
- Plataforma:
- Oferta:
- Segmentos:
- Frecuencia:

Tarea:
1) Escoge 3 segmentos prioridad.
2) Para cada segmento:
   - 4 pilares de contenido
   - 3 series (ej: “errores”, “casos”, “cómo hacerlo”)
   - 10 títulos específicos
3) Define CTAs por segmento (DM keyword, link, comentario).`,
    thumbnail: "",
  },
  {
    id: "mseg-033",
    title: "Segmentación por nivel de urgencia — ‘lo necesito ya’ vs ‘algún día’",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Separar urgencia cambia copy, oferta y seguimiento. Crea reglas y textos para cada uno.",
    prompt: `Rellena:
- Oferta:
- Señales de urgencia:
- Canal:

Tarea:
1) Define 3 niveles de urgencia con criterios observables.
2) Para cada nivel:
   - mensaje principal
   - frecuencia de follow-up
   - CTA
3) Escribe 3 mensajes de follow-up por urgencia.`,
    thumbnail: "",
  },
  {
    id: "mseg-034",
    title: "Segmentación por ‘nivel de confianza’ — escépticos vs creyentes vs fans",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Crea segmentos por confianza en la categoría y ajusta proof: datos, casos, garantía, demo.",
    prompt: `Rellena:
- Oferta:
- Categoría (qué venden):
- Pruebas disponibles:
- Canal:

Tarea:
1) Define 3 segmentos: escéptico, neutral, creyente.
2) Para cada uno:
   - qué prueba pesa más
   - qué lenguaje usar/evitar
   - CTA
3) Escribe un anuncio corto y un email corto por segmento.`,
    thumbnail: "",
  },
  {
    id: "mseg-035",
    title: "Segmentación por ‘barrera principal’ — conocimiento, ejecución, disciplina, herramientas",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Define segmentos por la barrera dominante y re-framea tu oferta para resolverla.",
    prompt: `Rellena:
- Oferta:
- Barreras típicas:
- Canal:

Tarea:
1) Define 4 segmentos por barrera.
2) Para cada segmento:
   - diagnóstico (cómo se ve)
   - solución (cómo lo encaras)
   - mensaje principal
   - CTA
3) Escribe 5 hooks por segmento.`,
    thumbnail: "",
  },

  {
    id: "mseg-036",
    title: "Segmentación avanzada (B2B) — cuentas objetivo (ABM lite) con hipótesis por cuenta",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Plan ABM ligero: define cuentas, hipótesis de dolor, mensajes y secuencias personalizadas.",
    prompt: `Rellena:
- Servicio B2B:
- Lista de 10–30 cuentas objetivo (nombres):
- Rol objetivo:
- KPI:
- Canales (email, LinkedIn):

Tarea:
1) Para cada cuenta (o tipo de cuenta), escribe hipótesis:
   - 2 dolores probables
   - 1 evento trigger (contratación, funding, expansión)
   - propuesta de valor en 1 frase
2) Crea 3 secuencias:
   - cold email 4 pasos
   - LinkedIn DM 4 pasos
   - follow-up 2 pasos
3) Define cómo medir éxito (replies, meetings, pipeline).`,
    thumbnail: "",
  },
  {
    id: "mseg-037",
    title: "Segmentación tipo ‘personas’ — 5 buyer personas útiles (sin relleno) con copy",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Crea 5 personas accionables con lenguaje real, motivadores, objeciones y mensajes.",
    prompt: `Rellena:
- Oferta:
- Nicho:
- Tipos de clientes actuales (si existen):

Tarea:
1) Crea 5 buyer personas con:
   - nombre del avatar
   - contexto y objetivo
   - dolor principal
   - objeciones
   - qué los convence
   - frases textuales (cómo hablan)
2) Para cada persona:
   - 1 headline
   - 3 bullets
   - 1 CTA
3) Termina con un mapa de “contenido por persona” (5 ideas cada una).`,
    thumbnail: "",
  },
  {
    id: "mseg-038",
    title: "Segmentación por ‘nivel de soporte requerido’ — autoservicio vs con guía vs DFY",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por necesidad de soporte y ajusta experiencia, onboarding y promesa.",
    prompt: `Rellena:
- Oferta:
- Capacidad de soporte (horas/semana):
- Tipos de soporte (chat, calls, comunidad):
- Canal:

Tarea:
1) Define 3 segmentos según soporte requerido.
2) Para cada segmento:
   - riesgos si les vendes el plan incorrecto
   - promesa realista
   - onboarding ideal
   - CTA
3) Escribe copy de pricing (3 planes) alineado a estos segmentos.`,
    thumbnail: "",
  },
  {
    id: "mseg-039",
    title: "Segmentación por etapa de adopción (innovators → early majority) — lenguaje y prueba",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Adapta copy según adopción: innovadores quieren novedad; majority quiere certeza.",
    prompt: `Rellena:
- Oferta:
- Categoría:
- Pruebas:
- Canal:

Tarea:
1) Define 4 segmentos de adopción.
2) Para cada segmento:
   - qué les importa
   - qué prueba necesitan
   - copy (headline + bullets + CTA)
3) Recomienda en qué segmento enfocarte según ticket y marca.`,
    thumbnail: "",
  },
  {
    id: "mseg-040",
    title: "Segmentación por dispositivo/experiencia — móvil-first vs desktop, fricciones y CTAs",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por comportamiento y fricción según dispositivo y ajusta funnel y mensajes.",
    prompt: `Rellena:
- Canales:
- % móvil vs desktop (si tienes):
- Oferta:
- Fricciones actuales:

Tarea:
1) Define 2–3 segmentos por dispositivo/experiencia:
   - scroll rápido
   - lectura profunda
2) Para cada segmento:
   - asset ideal (video corto, checklist, longform)
   - CTA ideal
   - cambios de página recomendados
3) Crea 2 anuncios y 2 versiones de landing hero copy por segmento.`,
    thumbnail: "",
  },

  {
    id: "mseg-041",
    title: "Segmentación para WhatsApp/DM — etiquetas mínimas y árbol de conversación",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Define etiquetas mínimas y flujo conversacional para segmentar en tiempo real.",
    prompt: `Rellena:
- Oferta:
- 3 preguntas de calificación:
- Canal (WhatsApp/IG DM):
- CTAs:

Tarea:
1) Define 8 etiquetas mínimas (max) para segmentar:
   - intención
   - presupuesto
   - urgencia
   - experiencia
2) Diseña un árbol de conversación con rutas A/B/C.
3) Escribe los mensajes exactos para:
   - preguntar
   - responder
   - cambiar de segmento
4) Cierra con un scoreboard diario para el canal.`,
    thumbnail: "",
  },
  {
    id: "mseg-042",
    title: "Segmentación por ‘fricción principal’ — credibilidad, claridad, complejidad, logística",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por el tipo de fricción y crea mensajes/activos para resolverla.",
    prompt: `Rellena:
- Oferta:
- Fricciones típicas:
- Canales:

Tarea:
1) Define 4 segmentos por fricción.
2) Para cada segmento:
   - activo ideal (caso, FAQ, demo, garantía, comparativa)
   - copy de 1 mensaje y 1 headline
   - CTA
3) Plan 14 días para reducir fricción por prioridad.`,
    thumbnail: "",
  },
  {
    id: "mseg-043",
    title: "Segmentación por ‘tipo de decisión’ — impulsiva vs consultiva vs comité",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Define segmentos según cómo deciden: rápido, con investigación o con aprobación múltiple.",
    prompt: `Rellena:
- Oferta:
- Ticket:
- Quién decide:
- Canal:

Tarea:
1) Define 3 segmentos por tipo de decisión.
2) Para cada uno:
   - mejores assets (VSL, PDF, demo, call)
   - mensajes y proof
   - CTA
3) Crea 1 secuencia corta por segmento (3 mensajes).`,
    thumbnail: "",
  },
  {
    id: "mseg-044",
    title: "Segmentación para remarketing — ventanas por intención y frecuencia recomendada",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta remarketing por intención (VC/ATC/IC) y define mensajes y límites.",
    prompt: `Rellena:
- Páginas/eventos:
- Ventanas (1–3, 4–7, 8–14, 15–30):
- Oferta:
- Creativos:

Tarea:
1) Define segmentos de remarketing por evento y ventana.
2) Para cada segmento:
   - objetivo
   - mensaje principal
   - creativo recomendado
   - KPI (CTR/CVR/CPA)
   - frecuencia máxima
3) Define reglas de fatiga y rotación semanal.`,
    thumbnail: "",
  },
  {
    id: "mseg-045",
    title: "Segmentación por ‘objeto de deseo’ — identidad futura (status, libertad, control, simplicidad)",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por motivación emocional e identidad para mejorar resonancia del copy.",
    prompt: `Rellena:
- Oferta:
- Emociones/motivaciones del público:
- Canales:

Tarea:
1) Define 5 motivaciones (status, libertad, seguridad, simplicidad, pertenencia).
2) Para cada motivación:
   - mensaje principal
   - prueba ideal
   - CTA
3) Escribe 3 hooks y 1 párrafo de venta por motivación.`,
    thumbnail: "",
  },

  {
    id: "mseg-046",
    title: "Segmentación y personalización de landing — bloques dinámicos por segmento",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Diseña una landing con bloques intercambiables según segmento (vertical, dolor, rol).",
    prompt: `Rellena:
- Oferta:
- Segmentos (3–5):
- Bloques disponibles (hero, caso, bullets, FAQ):
- Herramienta (si existe):

Tarea:
1) Define 3–5 segmentos que ameritan personalización.
2) Para cada segmento escribe:
   - hero (headline + sub)
   - 5 bullets
   - 3 FAQs
   - 1 prueba social ideal
3) Define reglas de enrutamiento (cómo detectas el segmento: UTM, formulario, quiz).
4) Cierra con checklist de coherencia (mensaje-CTA).`,
    thumbnail: "",
  },
  {
    id: "mseg-047",
    title: "Segmentación con quiz — diseñar quiz para clasificar y recomendar ruta",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Crea un quiz completo con preguntas, scoring, segmentos finales y recomendaciones por segmento.",
    prompt: `Rellena:
- Oferta:
- 3–5 segmentos finales deseados:
- Variables a medir (urgencia, experiencia, presupuesto, etc.):

Tarea:
1) Diseña un quiz de 8–12 preguntas (con opciones).
2) Define scoring (puntos) y reglas para asignar segmento.
3) Para cada segmento:
   - resultado (texto largo)
   - 3 recomendaciones
   - CTA
4) Escribe copy de la página del quiz (hero + bullets) y del email de resultados.`,
    thumbnail: "",
  },
  {
    id: "mseg-048",
    title: "Segmentación por cohortes — comparar comportamiento según semana/mes de adquisición",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Segmenta por cohorte temporal para detectar cambios de calidad y optimizar fuentes.",
    prompt: `Rellena:
- Periodo de análisis:
- Fuentes:
- Métricas disponibles:
- Oferta:

Tarea:
1) Define cohortes por semana (o mes).
2) Para cada cohorte, define KPIs a comparar:
   - CVR
   - CAC
   - LTV
   - tasa de respuesta
3) Propón hipótesis si una cohorte rinde distinto:
   - cambio de mensaje
   - cambio de canal
   - cambio de oferta
4) Define acciones recomendadas (qué probar) por cohorte.`,
    thumbnail: "",
  },
  {
    id: "mseg-049",
    title: "Segmentación final lista para ejecutar — 12 segmentos con mensajes, CTAs y assets",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Entrega un paquete ejecutable de segmentos con copy listo y plan de activación.",
    prompt: `Rellena:
- Oferta:
- Nicho:
- Canales:
- Activos disponibles:
- Restricciones:

Tarea:
Crea 12 segmentos accionables y para cada uno escribe:
- nombre
- criterio exacto (cómo se identifica)
- mensaje principal (1 frase)
- 2 ángulos adicionales
- oferta/CTA ideal
- asset recomendado (lead magnet, demo, caso, checklist)
- primer mensaje (copy listo)
Cierra con prioridades (top 3) y plan 14 días (tests).`,
    thumbnail: "",
  },
  {
    id: "mseg-050",
    title: "Sistema de segmentación (SOP) — etiquetas, reglas, fuentes, auditoría y mantenimiento",
    area: "Marketing & ventas",
    category: "Segmentación",
    summary:
      "Crea un SOP completo para mantener la segmentación saludable y usable por el equipo.",
    prompt: `Rellena:
- Herramientas (CRM/Email/WhatsApp):
- Canales:
- Oferta:
- Equipo (roles):

Tarea:
Escribe un SOP que incluya:
1) Principios: qué es un segmento válido (accionable, medible, útil).
2) Taxonomía de etiquetas (máx 30) y convenciones de nombres.
3) Reglas de asignación (por fuente, comportamiento, manual).
4) Auditoría semanal: qué revisar y cómo detectar etiquetas basura.
5) Mantenimiento mensual: limpieza, merges, retirement de segmentos.
6) Checklist de implementación (UTMs, eventos, formularios, consent).
Formato: headings + bullets + ejemplos de etiquetas.`,
    thumbnail: "",
  },
];
