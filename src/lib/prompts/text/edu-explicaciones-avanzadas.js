// src/lib/prompts/text/edu-explicaciones-avanzadas.js

export const textPromptsEduExplicacionesAvanzadas = [
  {
    id: "edu-adv-001",
    title: "Explicación avanzada tipo ‘capas’: intuición → formalismo → práctica",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Descompone un tema complejo en 3 capas: intuición, rigor y aplicación con ejercicios.",
    prompt: `Tema a explicar: [ESCRIBE AQUÍ]

Contexto:
- Nivel del estudiante (universidad, máster, profesional).
- Área (matemáticas, programación, economía, medicina, etc.).
- Objetivo (entender, resolver problemas, pasar examen, aplicar en trabajo).
- Conocimientos previos (lista corta).
- Restricciones (sin notación avanzada / sí notación / con ejemplos reales).

Entrega una explicación en 3 capas:

CAPA 1 — Intuición (para “entender de verdad”):
- Explica la idea con 2 analogías potentes (distintas entre sí).
- Describe el “error mental típico” que hace que la gente no lo entienda.
- Da una mini-historia o caso real que lo vuelva memorable.

CAPA 2 — Formalismo (rigor sin humo):
- Define conceptos clave (glosario de 8–12 términos).
- Explica los supuestos y límites (lo que NO cubre).
- Incluye 1 demostración o derivación guiada (paso a paso) o un argumento riguroso equivalente según el área.

CAPA 3 — Práctica (transferencia):
- 3 ejemplos resueltos (de fácil → medio → difícil).
- 5 ejercicios propuestos (con pistas, no la solución).
- Checklist para detectar si lo entendí (10 ítems).

Cierre:
- 5 preguntas tipo examen (con criterios de evaluación).
- “Mapa mental” en bullets (jerarquía, máximo 20 líneas).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-002",
    title: "Tutor socrático avanzado: aprende guiado por preguntas (sin spoon-feeding)",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Enseña un concepto mediante preguntas graduadas que obligan a razonar.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [intermedio / avanzado]
Formato: [texto / programación / cálculo / estudio de caso]

Actúa como tutor socrático.
Reglas:
- No des la solución directa al inicio.
- Haz preguntas en escalera: de comprensión → inferencia → aplicación → crítica.
- Cuando el estudiante “falle”, da una pista mínima y pregunta de nuevo.

Estructura:
1) Diagnóstico rápido (5 preguntas) para detectar brechas.
2) Ruta de aprendizaje (8–12 pasos), cada paso contiene:
   - 1 pregunta
   - respuesta esperada (oculta entre corchetes al final)
   - error común
   - pista
3) Mini-reto final (problema integrador) con rúbrica de evaluación (criterios).

Al final:
- Resumen en 12 bullets de lo aprendido (sin tecnicismos innecesarios).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-003",
    title: "Explicación con ‘principios primero’: derive todo desde axiomas",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Construye un tema desde fundamentos: axiomas, principios, consecuencias y límites.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Campo: [física / finanzas / ML / derecho / etc.]
Nivel: [avanzado]

Entrega:
A) Principios base (3–7) como “leyes” del tema.
B) Para cada principio:
   - Qué afirma
   - Por qué es razonable
   - Implicación inmediata
   - Contraejemplo o caso límite
C) Derivación: usa los principios para construir:
   - 2 teoremas/insights principales
   - 2 herramientas prácticas (métodos/procedimientos)
D) Aplicación avanzada:
   - 2 problemas estilo examen (resueltos paso a paso)
   - 1 caso real (con datos hipotéticos) y tu análisis

Cierre:
- “Dónde esto se rompe” (5 límites).
- Bibliografía conceptual (3–6 ideas/temas para estudiar después).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-004",
    title: "Explica como paper: abstract, método, resultados, discusión",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Estructura de paper académico para entender un concepto con rigor.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Audiencia: [ingenieros / economistas / médicos / etc.]

Redacta la explicación como si fuera un mini-paper:
- Título
- Abstract (100–150 palabras)
- Introducción (problema y motivación)
- Marco teórico (definiciones + supuestos)
- Método (procedimiento o derivación)
- Resultados (ejemplos o implicaciones clave)
- Discusión (limitaciones, interpretaciones)
- Conclusión (3 aportes claros)
- “Lectura recomendada” (sin links, solo temas/obras)

Incluye:
- 1 figura descrita en texto (qué sería el gráfico/diagrama y cómo leerlo).
- 2 preguntas de revisión (tipo peer-review).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-005",
    title: "Explicación avanzada con comparación de modelos (A vs B vs C)",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Compara 2–3 enfoques del mismo tema: supuestos, trade-offs y cuándo usar cada uno.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Modelos/enfoques a comparar: [A], [B], [C] (si no los sabes, proponlos tú)

Entrega:
1) Tabla conceptual (sin formato tabla, en bullets) con:
   - Objetivo de cada enfoque
   - Supuestos
   - Ventajas
   - Desventajas
   - Cuándo falla
2) Ejemplo único (mismo problema) resuelto con cada enfoque.
3) “Guía de decisión” en forma de árbol:
   - Si tienes X → usa A
   - Si tienes Y → usa B
   - Etc.
4) 10 preguntas tipo examen que confunden A y B (y cómo distinguirlos).

Cierre:
- Errores de principiante (8) y errores de experto (5).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-006",
    title: "Explicable + demostración guiada: prueba paso a paso (nivel alto)",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Demostración o argumentación formal guiada con checkpoints de comprensión.",
    prompt: `Enuncia el resultado a demostrar/justificar: [ESCRIBE AQUÍ]
Campo: [matemáticas / CS / economía / física / filosofía]

Crea una demostración guiada:
A) Intuición previa (por qué debería ser cierto).
B) Preparación:
   - Definiciones necesarias
   - Lemas previos (1–3)
   - Notación (clara)
C) Demostración en pasos numerados con checkpoints:
   - Paso i: qué hacemos
   - Por qué lo hacemos
   - Qué podría salir mal
   - Mini-chequeo: “si entiendes esto, responde X”
D) Interpretación:
   - Qué significa el resultado en el mundo real
   - 2 corolarios útiles
E) Ejercicio espejo:
   - Plantea un resultado parecido y guía cómo probarlo (sin resolverlo).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-007",
    title: "Explicación como ingeniería: especificación → casos borde → verificación",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Ideal para temas técnicos: define, prueba contra casos límite y valida.",
    prompt: `Tema/herramienta: [ESCRIBE AQUÍ]
Contexto de uso: [producción / academia / investigación]

Estructura la explicación así:
1) Especificación (qué hace EXACTAMENTE y qué no hace).
2) Invariantes / garantías (3–7).
3) Casos borde (mínimo 10) con:
   - Entrada/condición
   - Comportamiento esperado
   - Por qué es importante
4) Pruebas de verificación:
   - 6 tests mentales
   - 6 tests prácticos
5) Troubleshooting:
   - 8 fallos comunes
   - diagnóstico
   - solución

Cierre:
- Checklist para implementación/aplicación segura (12 ítems).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-008",
    title: "Explicación con ‘mapa de dependencia’: qué aprender primero y por qué",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Construye un mapa de prerequisitos y ruta óptima de estudio para un tema difícil.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Tiempo disponible: [X horas/semana]
Objetivo: [examen / proyecto / trabajo]

Entrega:
A) Prerrequisitos:
- Lista de conceptos mínimos (10–20)
- Qué tan críticos son (alto/medio/bajo)
B) Mapa de dependencias (en bullets con indentación):
- Concepto raíz
  - subtema
    - subsubtema
C) Ruta de estudio (14 días o 4 semanas):
- Día/semana: objetivo, lectura/práctica, mini-evaluación
D) Evaluaciones:
- 2 mini-exámenes de 10 preguntas (con respuestas)
- 1 proyecto integrador (enunciado + rúbrica)

Cierre:
- Señales de que estás listo (10).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-009",
    title: "Explicación avanzada con analogías múltiples (y límites de cada analogía)",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Explica con analogías, pero también explica cuándo fallan para no confundir.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Audiencia: [técnica / no técnica / mixta]

Crea:
1) Explicación base (clara y rigurosa).
2) 4 analogías desde dominios distintos (ej. cocina, música, tráfico, biología).
3) Por cada analogía:
   - Qué mapea a qué (correspondencias)
   - Qué ayuda a entender
   - Dónde se rompe (caso límite)
4) Mini-prueba:
   - 6 preguntas que solo puedes contestar si entendiste y no te quedaste en la analogía.

Cierre:
- Una analogía “anti-analogía”: ejemplo que demuestra el límite.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-010",
    title: "Explicación con errores: aprende por contraejemplos y fallos típicos",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Enseña a nivel alto mostrando fallos comunes y cómo diagnosticarlos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [avanzado]

Genera:
A) 12 errores típicos (principiante→intermedio→avanzado).
B) Para cada error:
   - Síntoma (cómo se ve)
   - Causa conceptual
   - Ejemplo mínimo que lo produce
   - Cómo corregirlo (procedimiento)
C) 3 contraejemplos clásicos (casos donde “intuición” falla).
D) 2 problemas trampas, con solución explicada y “por qué esto engaña”.

Cierre:
- Checklist mental de 10 preguntas para evitar esos errores.`,
    thumbnail: "",
  },

  {
    id: "edu-adv-011",
    title: "Explicación avanzada para presentar en clase: guion + diapositivas",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Prepara una clase avanzada: narrativa, pizarra, ejercicios y ritmo.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Duración: [45/60/90 minutos]
Nivel: [avanzado]

Entrega:
1) Objetivos de aprendizaje (5–8).
2) Estructura minuto a minuto (timeline).
3) Guion del docente (lo que dirías) con:
   - 3 momentos de “pregunta al grupo”
   - 2 mini demostraciones
   - 1 pausa de síntesis
4) Contenido de diapositivas:
   - Título de slide
   - 3–5 bullets por slide
   - 1 figura sugerida
5) Práctica:
   - 8 ejercicios (de fácil a difícil) + respuestas breves
6) Evaluación final (10 preguntas) + rúbrica.

Cierre:
- Cómo adaptar la clase si el grupo se pierde (plan B).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-012",
    title: "Explicación para autodidacta: de cero a experto con checkpoints",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Diseña aprendizaje autónomo: teoría mínima, práctica intensa, métricas y feedback.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Tu objetivo final: [resultados concretos]
Tiempo: [horas/semana]
Nivel actual: [novato/intermedio]

Crea un plan de 30 días:
- Semana 1: fundamentos (qué medir y por qué)
- Semana 2: problemas típicos
- Semana 3: casos reales
- Semana 4: proyecto final

Para cada día:
- Objetivo
- Conceptos
- Ejercicio práctico
- Mini-test (3 preguntas) con respuestas
- Señal de progreso (métrica concreta)

Incluye:
- Lista de 20 problemas estilo “drill”
- Proyecto final con rúbrica detallada (criterios y puntajes).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-013",
    title: "Explicación avanzada con ‘modelo mental’: dibuja la idea en tu cabeza",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Construye un modelo mental explícito con piezas, flechas, dinámica y predicciones.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Construye un modelo mental:
1) Componentes (8–12 piezas).
2) Relaciones (flechas): qué causa qué.
3) Variables clave (qué cambia y qué se mantiene).
4) Predicciones del modelo:
   - Si sube X, baja Y (mínimo 10 predicciones).
5) Casos donde el modelo falla (5).
6) Cómo “simular” mentalmente un caso (paso a paso).
7) 3 ejercicios para practicar el modelo (con solución).

Cierre:
- “Reglas de bolsillo” (10 heurísticas).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-014",
    title: "Explicación en forma de debate: tesis, antítesis y síntesis",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Explora un tema complejo con argumentos opuestos y una síntesis útil.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Pregunta polémica del tema: [ESCRIBE AQUÍ]

Crea un debate estructurado:
A) Tesis (postura A): 5 argumentos fuertes + evidencia/razonamiento.
B) Antítesis (postura B): 5 argumentos fuertes + evidencia/razonamiento.
C) Refutaciones cruzadas (A refuta B y B refuta A) con 6 puntos por lado.
D) Síntesis: cuándo A tiene razón, cuándo B tiene razón, y cómo decidir en la práctica.

Incluye:
- 8 preguntas para moderar el debate.
- Conclusión práctica en 7 bullets.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-015",
    title: "Explicación con ‘caso de estudio’: datos → hipótesis → decisión",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Aprende un concepto aplicándolo a un caso realista con datos hipotéticos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Industria/contexto: [ESCRIBE AQUÍ]

Construye un caso de estudio:
1) Contexto y objetivo.
2) Datos (inventados pero plausibles): 10–20 variables.
3) Preguntas guía (10).
4) Análisis paso a paso aplicando el tema.
5) 3 decisiones posibles y trade-offs.
6) Recomendación final con justificación.

Incluye:
- “Qué información faltaría” (8 ítems).
- 5 errores que un analista cometería aquí.`,
    thumbnail: "",
  },

  {
    id: "edu-adv-016",
    title: "Explicación avanzada para entrevistas técnicas/exámenes orales",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Entrena respuestas de alto nivel: claridad, estructura, rigor y ejemplos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Tipo de evaluación: [entrevista técnica / examen oral / defensa de tesis]

Entrega:
1) Respuesta ideal de 2 minutos (estructura: definición → intuición → ejemplo → límite).
2) Respuesta ideal de 8 minutos (más profunda con derivación).
3) 12 preguntas difíciles que te podrían hacer.
4) Para cada pregunta:
   - respuesta modelo
   - error común
   - “señal de madurez” (qué menciona un experto)

Incluye:
- 5 analogías rápidas que puedes usar si el entrevistador no entiende.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-017",
    title: "Explicación avanzada con ejercicios resueltos estilo ‘cadena de razonamiento’",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Resuelve problemas mostrando decisiones, alternativas y verificación.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Genera 3 problemas (fácil/medio/difícil) y resuélvelos así:
- Replanteo del problema (qué pide realmente)
- Datos y variables
- Estrategias posibles (2–3) y por qué eliges una
- Solución paso a paso
- Verificación (cómo compruebas que está bien)
- “Si cambias X, qué pasa” (sensibilidad)

Cierra con:
- 8 ejercicios adicionales con pistas
- 10 errores al resolverlos y cómo evitarlos`,
    thumbnail: "",
  },
  {
    id: "edu-adv-018",
    title: "Explicación con ‘construcción desde ejemplo’: generaliza a teoría",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Empieza por ejemplos concretos y deriva la teoría general y sus límites.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Estructura:
1) 3 ejemplos concretos (muy diferentes).
2) Para cada ejemplo:
   - qué patrón aparece
   - qué variable manda
3) Generalización:
   - formula la “regla” o teoría
   - define condiciones
4) Contraejemplo:
   - caso donde falla
5) Aplicación:
   - 2 problemas nuevos resueltos

Cierre:
- “Reglas de decisión” (8 bullets) y “alertas” (5).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-019",
    title: "Explicación avanzada ‘de caja negra a caja blanca’: cómo funciona por dentro",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Pasa de uso práctico a entendimiento interno: componentes, flujo y fallos.",
    prompt: `Tema/herramienta: [ESCRIBE AQUÍ]

Entrega:
A) Caja negra:
- Qué entra, qué sale, qué optimiza (si aplica)
- 5 ejemplos de uso correcto
B) Caja blanca:
- Componentes internos (8–12)
- Flujo paso a paso (como diagrama descrito)
- Parámetros y su efecto
C) Fallos y diagnósticos:
- 10 fallos típicos
- señales
- causas internas
- solución
D) Profundización:
- 6 preguntas avanzadas con respuestas modelo

Cierre:
- Checklist de buena práctica (12).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-020",
    title: "Explicación avanzada para ‘transferencia’: aplica lo aprendido a un dominio nuevo",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Enseña el concepto y luego obliga a aplicarlo fuera de su contexto típico.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Dominio típico: [A]
Dominio nuevo: [B] (elige uno distinto: medicina, economía, deporte, arte, etc.)

Entrega:
1) Explica el tema en dominio A (con rigor).
2) Identifica su “núcleo transferible” (5–8 principios).
3) Replantea el tema en dominio B:
   - mapeo de variables
   - ajustes de supuestos
4) Resuelve 2 casos en dominio B (paso a paso).
5) 6 ejercicios de transferencia (enunciado + pista).

Cierre:
- Lista de “trampas” de transferencia (8) y cómo evitarlas.`,
    thumbnail: "",
  },

  {
    id: "edu-adv-021",
    title: "Explicación avanzada ‘con historia’: narrativa para recordar (sin perder rigor)",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Enmarca el concepto como historia (problema, tensión, descubrimiento) con formalismo integrado.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Contexto histórico o ficticio: [elige: laboratorio, empresa, guerra, expedición, startup, hospital]
Tono: [serio / épico / cercano]

Crea una explicación narrativa:
- Acto 1: problema real (por qué importa)
- Acto 2: intento fallido (error común)
- Acto 3: insight (formalismo y definición)
- Acto 4: aplicación (ejemplo resuelto)
- Acto 5: límite y lección

Incluye:
- Glosario (10 términos)
- 5 preguntas de comprensión
- 5 ejercicios de aplicación con pistas`,
    thumbnail: "",
  },
  {
    id: "edu-adv-022",
    title: "Explicación avanzada ‘con simulación mental’: predice resultados",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Aprende prediciendo: cambia variables y pronostica; luego verifica con reglas.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Entrega:
1) Modelo simplificado (variables, relaciones).
2) 12 escenarios “¿qué pasa si...?”
   - cambia 1 variable por vez
   - luego cambia 2 variables combinadas (interacciones)
3) Para cada escenario:
   - predicción razonada
   - explicación (qué regla aplica)
4) 3 escenarios sorpresa (“intuición falla”) y por qué.

Cierre:
- 10 preguntas ‘si esto, entonces qué’ para autoevaluación.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-023",
    title: "Explicación avanzada con ‘notación mínima’: rigor con símbolos necesarios",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Usa solo la notación imprescindible; define todo y evita símbolos innecesarios.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [avanzado]
Restricción: “notación mínima”

Entrega:
- Define notación (5–10 símbolos máximo).
- Explica el concepto usando esa notación con claridad.
- 2 derivaciones cortas (o argumentos), completamente explicadas.
- 3 ejemplos resueltos.
- 6 ejercicios con pistas.

Cierre:
- Lista de 8 errores de notación que crean confusión.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-024",
    title: "Explicación avanzada ‘para programar’: del concepto al algoritmo",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Convierte teoría en pasos algorítmicos: pseudocódigo, complejidad y tests.",
    prompt: `Concepto: [ESCRIBE AQUÍ]
Lenguaje objetivo: [Python/JS/Java/etc.]

Entrega:
1) Explicación conceptual (qué, por qué).
2) Especificación: entradas/salidas, supuestos.
3) Algoritmo:
   - pseudocódigo
   - análisis de complejidad
   - casos borde
4) Implementación orientativa (código ejemplo si aplica).
5) Tests:
   - 8 pruebas unitarias sugeridas
   - 5 pruebas de estrés

Cierre:
- 6 errores de implementación y cómo detectarlos.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-025",
    title: "Explicación avanzada ‘para investigación’: preguntas abiertas y límites",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Enseña y luego conecta con fronteras: límites, controversias, investigación.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Entrega:
A) Explicación rigurosa del estado “estándar” del tema.
B) Limitaciones (técnicas, conceptuales, empíricas).
C) Controversias o debates (3–6) con:
   - postura A
   - postura B
   - evidencia
D) Preguntas abiertas (8–12) que aún se investigan.
E) Propuesta de mini-proyecto (1–2 semanas) para explorar una pregunta.

Cierre:
- Cómo evaluar papers del tema (checklist de 12 puntos).`,
    thumbnail: "",
  },

  {
    id: "edu-adv-026",
    title: "Explicación avanzada ‘con rúbrica’: cómo evaluar soluciones de estudiantes",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Crea criterios de evaluación y ejemplos de respuestas buenas/malas.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Tipo de tarea: [problema / ensayo / proyecto / presentación]

Entrega:
1) Enunciado de tarea (claro, no ambiguo).
2) Rúbrica:
   - criterios (6–10)
   - niveles (excelente/bien/regular/mal)
   - descriptores concretos
3) Ejemplos:
   - 1 respuesta excelente (modelo)
   - 1 respuesta media (con fallas)
   - 1 respuesta mala (con fallas)
4) Feedback tipo:
   - 10 comentarios reutilizables (constructivos)

Cierre:
- 8 errores que penalizar sí o sí y por qué.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-027",
    title: "Explicación avanzada ‘para memoria’: mnemotecnia + estructura",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Crea técnicas para recordar temas complejos: chunking, historias, palacio mental.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Entrega:
1) Chunking: divide el tema en 6–10 “bloques”.
2) Mnemotecnia:
   - acrónimo o frase recordatoria (sin cringe)
   - historia corta que encodee conceptos
3) Palacio mental:
   - 8–12 “estaciones” con objetos simbólicos
4) Tarjetas (flashcards):
   - 20 Q/A avanzadas
5) Prueba:
   - mini-examen de 15 preguntas

Cierre:
- Plan de repaso espaciado de 14 días.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-028",
    title: "Explicación ‘con visualización’: describe 3 diagramas imprescindibles",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Aunque no dibujes, define diagramas clave: ejes, variables, lectura e interpretación.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Entrega:
- 3 diagramas/figuras clave (descríbelos con precisión):
  1) Qué muestra (ejes/elementos)
  2) Cómo se lee
  3) Qué insight da
  4) Errores de interpretación
- Luego, explica el tema referenciando esos diagramas como anclas.
- 2 ejemplos resueltos usando cada diagrama.
- 6 ejercicios donde el estudiante elige el diagrama correcto.

Cierre:
- “Guía de lectura de figuras” (10 reglas).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-029",
    title: "Explicación avanzada ‘tipo consultoría’: problema → diagnóstico → recomendación",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Aplica un concepto a un problema práctico con estilo consultoría (MECE, hipótesis).",
    prompt: `Tema: [ESCRIBE AQUÍ]
Problema práctico: [ESCRIBE AQUÍ]
Contexto: [empresa/escuela/lab/etc.]

Entrega:
1) Clarificación del problema (preguntas MECE).
2) Hipótesis (3–5) y qué datos validarían cada una.
3) Marco del tema aplicado al problema (paso a paso).
4) Diagnóstico con datos hipotéticos.
5) Recomendaciones (priorizadas) + riesgos + plan de implementación.
6) Métricas de éxito (6–10 KPIs).

Cierre:
- “Qué haría si me equivoco” (plan de contingencia).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-030",
    title: "Explicación avanzada ‘dual’: para matemáticos y para practicantes",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Dos explicaciones paralelas: una formal y una aplicada, conectadas por mapeo.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Entrega dos versiones:
A) Versión formal:
- definiciones
- teorema/resultado
- derivación o demostración corta
- 2 ejercicios formales
B) Versión aplicada:
- intuición
- reglas de uso
- 3 casos reales
- checklist para aplicar

Luego:
- Mapeo: por cada elemento formal, cuál es su interpretación práctica (10 pares).

Cierre:
- 10 preguntas de examen mixtas (formal + aplicada).`,
    thumbnail: "",
  },

  {
    id: "edu-adv-031",
    title: "Explicación avanzada ‘con trampas’ (estilo olimpíada/examen difícil)",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Entrena para dificultad alta con problemas trampa, estrategias y verificación.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]

Entrega:
- 6 problemas trampa (progresivos).
- Para cada problema:
  - por qué es trampa
  - estrategia correcta
  - solución paso a paso
  - verificación
- 10 heurísticas para detectar trampas.
- 8 ejercicios extra (sin solución) con pistas.

Cierre:
- Plan de práctica (7 sesiones) para dominar estas trampas.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-032",
    title: "Explicación avanzada ‘con preguntas de seguimiento’: estilo profesor estricto",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Explica y luego presiona con repreguntas; ideal para consolidar dominio.",
    prompt: `Tema: [ESCRIBE AQUÍ]

1) Explica el tema (rigurosamente, sin exceso de jerga).
2) Luego haz 15 repreguntas difíciles:
   - “¿y si…?”
   - “¿bajo qué condiciones…?”
   - “¿qué pasa si se viola el supuesto…?”
   - “compara con…”

Para cada pregunta:
- respuesta modelo (concisa, precisa)
- error típico
- cómo detecto si realmente lo entendí

Cierre:
- 12 bullets de “señales de dominio” del tema.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-033",
    title: "Explicación avanzada: construye un ‘cheat sheet’ de una página",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Resumen ultra denso pero entendible: fórmulas/ideas, casos, límites y pasos.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Crea un cheat sheet de 1 página (en texto):
- Definiciones esenciales (10)
- Fórmulas/leyes/reglas (si aplica) con interpretación
- Procedimiento paso a paso (checklist)
- Casos típicos (6)
- Casos borde (6)
- Errores comunes (10)
- 8 preguntas flash con respuestas
- 3 mini-ejemplos resueltos

Regla:
- Todo debe caber en formato compacto, estilo apuntes.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-034",
    title: "Explicación avanzada para ‘enseñar a otros’: el alumno se vuelve profesor",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Crea material para que el estudiante explique el tema: guion, ejemplos y preguntas.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Entrega un kit para enseñar:
1) Explicación de 5 minutos (guion).
2) Explicación de 20 minutos (estructura + puntos).
3) 3 analogías con límites.
4) 3 demostraciones o ejemplos en pizarra (paso a paso).
5) 12 preguntas para evaluar comprensión (con respuestas).
6) 6 ejercicios para practicar (con pistas).

Cierre:
- Errores al enseñar este tema (8) y cómo evitarlos.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-035",
    title: "Explicación avanzada con ‘metacognición’: cómo pensar el tema",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "No solo explica el tema: enseña el tipo de pensamiento que requiere.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Entrega:
A) Qué tipo de pensamiento requiere:
- matemático, causal, probabilístico, sistémico, clínico, etc.
B) 10 preguntas metacognitivas para resolver problemas del tema.
C) Estrategias:
- cómo empezar
- cómo verificar
- cómo detectar supersimplificación
D) 3 problemas resueltos destacando el pensamiento (no solo pasos).
E) 6 ejercicios con “qué pensamiento practicar”.

Cierre:
- Checklist mental para cuando te atasques (12).`,
    thumbnail: "",
  },

  {
    id: "edu-adv-036",
    title: "Explicación avanzada ‘de intuición errónea a intuición correcta’",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Corrige intuiciones equivocadas con ejemplos, contraejemplos y reconstrucción mental.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Estructura:
1) Intuición errónea típica (cómo piensa la mayoría).
2) Por qué parece razonable (empatía).
3) Contraejemplo mínimo (lo rompe).
4) Reconstrucción de intuición correcta:
   - nueva metáfora
   - nueva regla
   - nuevo hábito mental
5) 3 ejemplos resueltos mostrando el nuevo hábito.
6) 8 ejercicios para practicar.

Cierre:
- 10 señales de que volviste a la intuición errónea y cómo volver.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-037",
    title: "Explicación avanzada con ‘interrogatorio de supuestos’: qué asumes sin ver",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Hace explícitos supuestos ocultos y cómo cambian el resultado si se alteran.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Entrega:
1) Lista de supuestos (12–20).
2) Clasifica: esenciales vs convenientes.
3) Para 6 supuestos:
   - qué pasa si se viola
   - ejemplo de fallo
   - corrección o alternativa
4) 2 problemas resueltos, uno con supuestos “bonitos” y otro con supuestos “rotos”.
5) Guía de decisión: qué versión usar según situación.

Cierre:
- Checklist de supuestos antes de aplicar el tema en el mundo real.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-038",
    title: "Explicación avanzada tipo ‘libro’: capítulo completo con secciones",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Capítulo estilo libro: teoría, ejemplos, ejercicios, notas y resumen.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Longitud objetivo: [1200–2500 palabras]

Escribe un “capítulo” con:
1) Introducción motivadora (con caso real).
2) Conceptos y definiciones (glosario).
3) Desarrollo formal (rigor).
4) Ejemplos resueltos (3).
5) Notas y advertencias (casos borde y límites).
6) Ejercicios (10) con pistas.
7) Resumen del capítulo (15 bullets).
8) “Para ir más allá” (temas siguientes).

Regla:
- Mantén coherencia pedagógica y progresión.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-039",
    title: "Explicación avanzada ‘con visualización mental de procesos’: flujo dinámico",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Para procesos: explica como flujo con estados, transiciones y condiciones.",
    prompt: `Tema/proceso: [ESCRIBE AQUÍ]

Entrega:
- Estados (6–12).
- Transiciones: condición → acción → nuevo estado.
- Variables que afectan transiciones.
- 3 recorridos completos del flujo (casos distintos).
- 5 casos borde (qué se rompe y por qué).
- 2 ejercicios: “dado este estado y datos, ¿a dónde vas?”

Cierre:
- Checklist para depurar errores en el flujo (12).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-040",
    title: "Explicación avanzada con ‘micro-derivaciones’: mini pruebas a lo largo",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Explica con pequeños argumentos formales insertados, para sostener rigor sin abrumar.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Escribe una explicación donde:
- Cada sección incluye una mini-derivación/prueba (4–10 líneas) que justifique el punto.
- Mantén continuidad: intuición → mini-prueba → ejemplo.

Estructura:
1) Idea central
2) Herramienta 1 (mini-prueba + ejemplo)
3) Herramienta 2 (mini-prueba + ejemplo)
4) Herramienta 3 (mini-prueba + ejemplo)
5) Integración: caso real (resuelto)
6) Límites: cuándo no usarlo

Cierre:
- 8 ejercicios con pistas
- 10 preguntas flash con respuestas`,
    thumbnail: "",
  },

  {
    id: "edu-adv-041",
    title: "Explicación avanzada: crea un banco de preguntas tipo examen (con soluciones)",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Genera preguntas difíciles y sus soluciones, con criterios de calificación.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Nivel: [alto]
Formato: [opción múltiple / desarrollo / problemas]

Genera:
- 20 preguntas (mix: 8 conceptuales, 8 de cálculo/aplicación, 4 de crítica/ensayo).
- Solución completa para cada una.
- Para cada pregunta:
  - qué evalúa
  - error común
  - puntaje y criterios

Cierre:
- “Mapa de cobertura”: qué subtemas tocaste y cuáles faltan.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-042",
    title: "Explicación avanzada ‘de laboratorio’: hipótesis, experimento, análisis",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Convierte el tema en un laboratorio: qué medir, cómo probar y cómo interpretar.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Diseña un laboratorio:
1) Pregunta de investigación.
2) Hipótesis (3).
3) Variables: dependiente, independiente, control.
4) Procedimiento (pasos).
5) Datos simulados (pequeña tabla en texto: 12–20 filas).
6) Análisis e interpretación.
7) Amenazas a validez (8).

Cierre:
- 10 preguntas de reporte y rúbrica de evaluación.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-043",
    title: "Explicación avanzada con ‘diferenciación’: versión para 3 perfiles de alumno",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Mismo tema adaptado a 3 estilos: teórico, práctico, visual/verbal.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Crea 3 versiones:
A) Perfil teórico: definiciones, derivaciones, precisión.
B) Perfil práctico: reglas de uso, checklists, casos reales.
C) Perfil visual/verbal: diagramas descritos, analogías, metáforas con límites.

Para cada versión:
- Explicación (500–900 palabras)
- 2 ejemplos resueltos
- 6 ejercicios con pistas

Cierre:
- Recomienda cuál perfil es el mío con 7 preguntas diagnóstico.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-044",
    title: "Explicación avanzada ‘con síntesis’: resume el tema en 5 representaciones",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Transforma el tema en: definición, analogía, fórmula/procedimiento, ejemplo, contraejemplo.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Crea 5 representaciones:
1) Definición rigurosa (2–4 líneas)
2) Analogía (y su límite)
3) Procedimiento o fórmula (con interpretación)
4) Ejemplo trabajado (paso a paso)
5) Contraejemplo (donde falla la intuición)

Luego:
- Conecta las 5 con un “mapa” de 12 bullets.
- 10 preguntas flash con respuestas.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-045",
    title: "Explicación avanzada ‘para dominar’: 80/20 + profundización estratégica",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Identifica el 20% que da el 80% del dominio y luego cómo profundizar sin perderse.",
    prompt: `Tema: [ESCRIBE AQUÍ]

Entrega:
1) 80/20: 6–10 ideas que explican el 80% (por qué).
2) Los 10 errores que más te frenan.
3) Práctica deliberada:
   - 12 ejercicios clave (con soluciones)
   - orden recomendado
4) Profundización:
   - 6 subtemas avanzados
   - en qué orden estudiarlos
   - cómo saber que los dominas

Cierre:
- Plan de 2 semanas (día a día) con métricas de progreso.`,
    thumbnail: "",
  },

  {
    id: "edu-adv-046",
    title: "Explicación avanzada ‘con traducción de jerga’: diccionario experto → claro",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Convierte jerga técnica en explicaciones claras sin perder precisión.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Lista de términos técnicos (si tienes): [PEGAR]

Entrega:
- Diccionario de 25 términos:
  - definición técnica (1–2 líneas)
  - traducción a lenguaje claro (1–2 líneas)
  - ejemplo breve
  - error común al usar el término
- Luego una explicación completa (700–1200 palabras) usando:
  - 70% lenguaje claro
  - 30% técnica (solo cuando aporte)

Cierre:
- 10 preguntas para asegurar que entendí la jerga sin memorizarla.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-047",
    title: "Explicación avanzada ‘causal vs correlación’: razonamiento y pruebas",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Plantilla robusta para explicar y analizar causalidad en cualquier campo.",
    prompt: `Fenómeno/afirmación: [ESCRIBE AQUÍ]

Entrega:
1) Define causalidad vs correlación (rigurosamente).
2) Lista de 10 sesgos/errores (confusores, selección, reverse causality, etc.) con ejemplos.
3) Marco de prueba:
   - qué evidencia serviría
   - qué diseños de estudio existen (y trade-offs)
4) Caso de estudio con datos hipotéticos:
   - identifica confusores
   - propone estrategia de identificación
5) Ejercicios:
   - 8 afirmaciones para clasificar (causal/correlación/indeterminado)
   - y justificar

Cierre:
- Checklist de causalidad (12 ítems).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-048",
    title: "Explicación avanzada ‘probabilística’: incertidumbre, intervalos y decisión",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Enseña a pensar probabilísticamente: distribución, riesgo, utilidad y decisiones.",
    prompt: `Tema o decisión: [ESCRIBE AQUÍ]

Entrega:
1) Qué es incertidumbre aquí (fuentes).
2) Modelado:
   - distribuciones plausibles (2–3)
   - supuestos
3) Intervalos/escenarios:
   - mejor caso / base / peor caso
4) Decisión:
   - criterio (utilidad esperada, robustez, minimax, etc.)
   - sensibilidad (qué variable manda)
5) Ejemplo numérico completo (con cálculos claros).
6) Ejercicios (6) con pistas.

Cierre:
- 10 errores de pensamiento probabilístico y cómo corregirlos.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-049",
    title: "Explicación avanzada ‘con diseño curricular’: módulo completo de aprendizaje",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Diseña un módulo: objetivos, contenidos, actividades, evaluación y recursos.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Duración del módulo: [1–4 semanas]
Nivel: [avanzado]

Entrega:
- Objetivos (Bloom) (8–12)
- Contenidos por unidad
- Actividades prácticas (mínimo 10)
- Lecturas/recursos sugeridos (por tema, sin links)
- Evaluación:
  - diagnóstico
  - formativa (quizzes, tareas)
  - sumativa (proyecto/examen)
- Proyecto final con rúbrica detallada (criterios/puntajes)
- Plan de retroalimentación (cómo dar feedback)

Cierre:
- Riesgos pedagógicos (5) y mitigaciones.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-050",
    title: "Explicación avanzada ‘masterclass’: guion de 30 min + ejercicios + Q&A",
    area: "Educación & Formación",
    category: "Explicaciones Avanzadas",
    summary:
      "Masterclass completa: narrativa, rigor, demos, ejercicios y sección de preguntas.",
    prompt: `Tema: [ESCRIBE AQUÍ]
Audiencia: [profesionales/estudiantes]
Duración: 30 minutos

Crea una masterclass:
1) Apertura (2 min): historia/caso que enganche.
2) Núcleo (20 min): 3 ideas principales con rigor:
   - idea 1: definición + mini-derivación + ejemplo
   - idea 2: definición + mini-derivación + ejemplo
   - idea 3: definición + mini-derivación + ejemplo
3) Ejercicio en vivo (5 min): enunciado + solución guiada.
4) Cierre (3 min): síntesis + checklist aplicable.

Incluye:
- 12 preguntas de Q&A difíciles con respuestas modelo.
- 6 “errores comunes” y cómo responderlos en vivo.`,
    thumbnail: "",
  },
];
