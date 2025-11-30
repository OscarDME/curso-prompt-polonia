// src/lib/prompts/text/creativa-transformacion-estilo.js

export const textPromptsCreativaTransformacionEstilo = [
  {
    id: "crea-est-001",
    title: "Reescritura total: 1 texto, 12 estilos (con guía de coherencia)",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Transforma un texto base a 12 estilos distintos manteniendo significado y mejorando voz.",
    prompt: `Pega aquí tu texto base (100–400 palabras) y dime:
1) Audiencia (quién lo leerá).
2) Objetivo (emocionar, vender, explicar, provocar).
3) Emoción dominante (y una emoción oculta).
4) 5 palabras prohibidas (clichés que no quieres).
5) Nivel de crudeza (0–10).

Tarea:
A) Extrae el “núcleo” del texto en 5 bullets (qué NO puede cambiar).
B) Identifica la voz actual: ritmo, registro, metáforas, distancia emocional (breve diagnóstico).
C) Reescribe el texto en estos 12 estilos (cada versión 150–250 palabras):
  1) Minimalista (líneas cortas, cortes duros)
  2) Lírico-cinematográfico (imágenes sensoriales)
  3) Noir (voz en off, ironía)
  4) Humor seco (deadpan)
  5) Realismo sucio (concreto, áspero)
  6) Romántico adulto (cálido, sin cursilería)
  7) Terror sutil (tensión, insinuación)
  8) Sci-fi íntimo (metáfora tecnológica)
  9) Fantasía elegante (reglas poéticas)
 10) Ensayo personal (honestidad directa)
 11) Cuento infantil (simple, simbólico)
 12) Carta confesional (subtexto)

D) Para cada versión, añade:
- 1 frase “firma” (la mejor línea).
- 3 decisiones de estilo (por qué suena así).
- 1 riesgo (dónde podría pasarse).

Al final:
- Recomiéndame el mejor estilo para el objetivo y dime cómo mezclar 2 estilos sin romper coherencia.`,
    thumbnail: "",
  },
  {
    id: "crea-est-002",
    title: "Clon de estilo: imita una ‘voz’ sin copiar (huella lingüística)",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Imita rasgos de estilo (ritmo, sintaxis, imágenes) de un autor/voz sin replicar contenido literal.",
    prompt: `Dame:
- Un autor/voz de referencia (o describe la voz: “frases cortas, cinismo, metáforas urbanas…”).
- Tema del texto a escribir.
- Formato (cuento, poema, monólogo, escena).
- Longitud (300–900 palabras).
- 6 palabras que DEBEN aparecer.

Tarea:
1) Define una “huella de estilo” con 10 reglas observables, por ejemplo:
   - Longitud promedio de frase
   - Tipo de metáfora (concreta/abstracta)
   - Nivel de ironía
   - Uso de preguntas
   - Ritmo (cortes, repeticiones)
2) Escribe el texto cumpliendo las 10 reglas.
3) Luego crea una versión “aún más tuya”:
   - Mantén 6 reglas
   - Rompe 4 reglas con intención

Al final:
- Lista 8 rasgos que lograste imitar sin copiar contenido.`,
    thumbnail: "",
  },
  {
    id: "crea-est-003",
    title: "Cambio de tono quirúrgico: mismo texto, 6 tonos con el mismo mensaje",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe variando el tono sin cambiar la idea: útil para adaptar a audiencias.",
    prompt: `Pega el texto base y dime:
- Público (A) y público (B).
- Emoción que NO debe perderse.
- Nivel de formalidad deseado (0–10).

Reescribe el texto en 6 tonos (150–300 palabras cada uno):
1) Sereno y maduro
2) Urgente y tenso (sin exagerar)
3) Irónico elegante
4) Tierno-intimista
5) Humor negro moderado
6) Minimalista contundente

Para cada versión, agrega:
- “Semillas” de tono: 5 palabras/recursos que usaste.
- 1 línea de cierre alterna.

Al final:
- Recomienda cuál usar para (A) y cuál para (B) y por qué.`,
    thumbnail: "",
  },
  {
    id: "crea-est-004",
    title: "Traducción creativa: de prosa a poema y de poema a prosa",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Convierte un texto en poema (verso libre) y luego vuelve a prosa sin perder alma.",
    prompt: `Pega tu texto (120–400 palabras) y dime:
- Tema
- Tono
- 3 imágenes obligatorias
- Palabras prohibidas (3–8)

Haz:
A) Extrae 12 “imágenes núcleo” (frases o detalles visuales).
B) Convierte el texto a un poema en verso libre (28–42 versos):
   - 5 sentidos
   - 3 repeticiones deliberadas
   - giro a mitad (revelación)
C) Convierte el poema a prosa poética (350–600 palabras):
   - párrafos cortos
   - musicalidad
   - final memorable (máx. 12 palabras)

Al final:
- Explica qué se ganó y qué se perdió en cada transformación (5 bullets).`,
    thumbnail: "",
  },
  {
    id: "crea-est-005",
    title: "Del cliché a la imagen: reescritura anti-frases hechas (nivel pro)",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Detecta clichés y los reemplaza por imágenes originales ancladas a objetos/acciones.",
    prompt: `Pega tu texto y dime:
- Qué tipo de cliché te molesta más (motivacional, romántico, dramático, empresarial).
- Tono objetivo.

Tarea:
1) Marca (en una lista) todas las frases genéricas o abstractas (mínimo 10 si existen).
2) Por cada una:
   - explica por qué es cliché (1 línea)
   - propone 3 reemplazos con imagen concreta (objeto/acción/escena)
3) Reescribe el texto completo:
   - 70% concreto, 30% abstracto máximo
   - verbos fuertes
   - metáforas nuevas (mínimo 3)

Al final:
- Checklist de anti-cliché para usar en futuros textos (12 puntos).`,
    thumbnail: "",
  },
  {
    id: "crea-est-006",
    title: "Cambio de POV: primera, segunda, tercera, y narrador poco fiable",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescritura por puntos de vista para cambiar intimidad, tensión y misterio.",
    prompt: `Pega una escena o texto (200–600 palabras) y dime:
- Qué debe quedar igual (3 cosas).
- Qué quieres potenciar (intimidad, misterio, tensión, humor).
- Secreto que no debe revelarse del todo.

Reescribe en 4 POV:
1) 1ª persona (íntima, confesional)
2) 2ª persona (acusatoria o tierna)
3) 3ª persona limitada (cerca del protagonista)
4) Narrador poco fiable (distorsiona y se contradice)

Para cada versión:
- 1 línea “firma”
- 3 cambios clave (qué hiciste distinto)
- 1 riesgo

Al final:
- Recomienda el POV ideal según lo que quiero potenciar.`,
    thumbnail: "",
  },
  {
    id: "crea-est-007",
    title: "Condensación brutal: 900 → 300 → 100 → 30 palabras (sin perder esencia)",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reduce un texto por capas con preservación de núcleo, ideal para ritmo y precisión.",
    prompt: `Pega tu texto (600–1200 palabras) y dime:
- Mensaje central (1 frase)
- Emoción principal
- 5 frases/ideas que no pueden desaparecer

Haz 4 versiones:
A) 300–350 palabras (limpia, directa)
B) 100–120 palabras (compacta y potente)
C) 30–40 palabras (golpe emocional)
D) 1 frase (máx 12 palabras) como cierre/aforismo

Para cada reducción, explica:
- Qué quitaste y por qué
- Qué preservaste (núcleo)
- Qué recurso usaste para mantener emocionalidad

Al final:
- Dame 10 titulares/cierres posibles basados en la versión de 30–40 palabras.`,
    thumbnail: "",
  },
  {
    id: "crea-est-008",
    title: "Amplificación: 150 palabras → 900 (profundidad, capas, subtexto)",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Expande un texto corto en uno largo sin relleno, agregando escenas, símbolos y ritmo.",
    prompt: `Pega tu texto breve (80–200 palabras) y dime:
- Lugar
- Personaje(s)
- 1 símbolo central
- Emoción oculta
- Qué NO quieres (nada de melodrama / nada de vulgaridad / etc.)

Tarea:
1) Diagnóstico: qué falta para sentirlo (detalles sensoriales, conflicto, ritmo, subtexto).
2) Expansión a 700–1000 palabras:
   - añade 2 escenas concretas
   - añade 5 detalles sensoriales por escena
   - introduce 1 giro a mitad
   - integra el símbolo 4 veces (variando significado)
3) Final: una frase memorable (máx 12 palabras)

Luego:
- Lista de 12 “detalles específicos” que elevan el texto (para copiar y pegar).`,
    thumbnail: "",
  },
  {
    id: "crea-est-009",
    title: "Transmutación de género: drama → thriller / romance → terror / etc.",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Cambia el género manteniendo personaje y tema; reestructura tensión y escenas.",
    prompt: `Dame:
- Texto o sinopsis base (150–400 palabras).
- Género actual.
- Género destino.
- Tema que debe mantenerse.
- 2 escenas que deben sobrevivir (aunque cambien).

Tarea:
A) Identifica el “motor” del género actual (qué lo hace funcionar).
B) Define el “motor” del género destino (tensión, misterio, deseo, etc.).
C) Reescribe la sinopsis y luego escribe 2 escenas clave (2–4 páginas cada una):
   - Escena 1: nueva apertura en el género destino
   - Escena 2: clímax adaptado al género destino

Al final:
- Tabla: elemento original → equivalente en nuevo género (8–12 filas).`,
    thumbnail: "",
  },
  {
    id: "crea-est-010",
    title: "Cirugía de ritmo: musicalidad, cadencia y respiración del texto",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Mejora ritmo: alternancia de frases, cortes, repetición, variación y pausas.",
    prompt: `Pega tu texto (200–700 palabras) y dime:
- Qué emoción quieres que marque el ritmo (tensión/ternura/urgencia).
- Si lo leerás en voz alta (sí/no).
- Nivel de sofisticación (simple / medio / literario).

Tarea:
1) Análisis del ritmo: longitud promedio de frase, variedad, lugares donde se cae.
2) Reescritura con ritmo mejorado:
   - alterna frases cortas y largas
   - usa 3 repeticiones deliberadas (anáfora o estribillo)
   - añade 2 pausas dramáticas (línea sola)
   - elimina muletillas y redundancias
3) Versión “voz en off” (si aplica): 160–220 palabras con ritmo oral.

Al final:
- 10 reglas de ritmo que puedo aplicar siempre.`,
    thumbnail: "",
  },

  {
    id: "crea-est-011",
    title: "Transformación ‘estética de época’: el mismo texto en 4 periodos",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe un texto en estilos de época: detalle, registro y léxico.",
    prompt: `Pega el texto base y dime:
- Lugar.
- Tema.
- Qué palabras modernas debo evitar (5–10).

Reescribe en 4 estéticas (200–350 palabras cada una):
1) Siglo XIX (elegante, frases largas, observación)
2) Años 20 (ritmo, glamour/ruido)
3) Años 80 (cultura pop, neón, velocidad)
4) Futuro cercano (tecnología cotidiana, intimidad)

Para cada estética:
- 10 detalles de época integrados en acción (no exposición)
- 1 línea final memorable

Al final:
- Recomendación: cuál estética potencia más el tema y por qué.`,
    thumbnail: "",
  },
  {
    id: "crea-est-012",
    title: "Reescritura por ‘metáfora central’: todo el texto bajo un símbolo",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Transforma el texto para que gire alrededor de una metáfora sostenida (sin repetirse).",
    prompt: `Pega tu texto y elige una metáfora central:
- Opciones: “mar”, “casa”, “rueda”, “incendio”, “hielo”, “puente”, “jardín”, “máquina”.
( o dime la tuya )

Tarea:
1) Haz un mapa de metáfora: 12 asociaciones (objetos/acciones) del símbolo.
2) Reescribe el texto (300–600 palabras):
   - la metáfora aparece en detalles, no como “esto es como…”
   - 4 apariciones sutiles + 1 aparición explícita al final
   - evita repetir las mismas palabras del símbolo (sin spam)

Al final:
- 10 frases alternativas que usen la metáfora de forma distinta.`,
    thumbnail: "",
  },
  {
    id: "crea-est-013",
    title: "Eliminación de adjetivos: fuerza por verbos y sustantivos",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Un ejercicio para ‘endurecer’ la prosa: quitar adjetivos y ganar precisión.",
    prompt: `Pega un texto (150–500 palabras).

Tarea:
A) Lista los 20 adjetivos más débiles o genéricos del texto (si hay menos, todos).
B) Por cada uno, propón:
   - 2 verbos más fuertes
   - 2 sustantivos más concretos
   - 1 imagen alternativa
C) Reescribe el texto:
   - máximo 6 adjetivos en total
   - todo lo demás se logra con verbos, sustantivos y acciones

Al final:
- Compara: qué se siente diferente (5 bullets).`,
    thumbnail: "",
  },
  {
    id: "crea-est-014",
    title: "Transformación a ‘realismo sensorial’: 5 sentidos por escena",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Convierte un texto plano en uno sensorial con anclaje físico y atmósfera.",
    prompt: `Pega tu texto o escena (200–600 palabras) y dime:
- Lugar exacto
- Hora/estación
- Emoción dominante

Reescribe:
- Añade mínimo 2 detalles por sentido (vista, oído, olfato, tacto, gusto).
- No agregues relleno: cada detalle debe revelar personaje o conflicto.
- 1 gesto pequeño debe decir lo que no se dice.

Al final:
- Lista de 15 detalles sensoriales alternativos para el mismo lugar.`,
    thumbnail: "",
  },
  {
    id: "crea-est-015",
    title: "Transformación a ‘subtexto’: decir menos, significar más",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe una escena para que el conflicto real no se diga, se actúe.",
    prompt: `Pega una escena (diálogo o prosa) y dime:
- Conflicto visible
- Conflicto real oculto
- Qué NO puede decirse explícitamente
- Objeto que servirá de subtexto

Reescribe la escena:
- Reduce explicaciones emocionales en 70%.
- Usa acciones (miradas, pausas, objetos, interrupciones).
- Cada personaje debe tener un objetivo y una táctica (cambia táctica 2 veces).
- Final: una frase inocente que, por subtexto, sea devastadora.

Al final:
- Tabla: línea original → subtexto nuevo (8–12 filas).`,
    thumbnail: "",
  },

  {
    id: "crea-est-016",
    title: "Transformación a ‘humor’: convertir drama en comedia sin traicionar tema",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe en humor (seco/absurdo/irónico) manteniendo la verdad central.",
    prompt: `Pega tu texto (200–600 palabras) y dime:
- Tipo de humor (deadpan, absurdo, sarcasmo suave, comedia negra).
- Qué tema NO se puede perder.
- Qué tanto humor (0–10).

Tarea:
1) Identifica 5 puntos de tensión (lugares donde el drama pesa).
2) Por cada punto, crea 2 mecanismos cómicos:
   - contradicción
   - mala interpretación
   - exageración específica
   - detalle ridículo realista
3) Reescribe el texto en tono cómico:
   - sin burlarte del dolor
   - con remates basados en observación
   - final: una línea seria que recuerde el tema

Incluye:
- 12 remates alternativos (1 línea cada uno).`,
    thumbnail: "",
  },
  {
    id: "crea-est-017",
    title: "Transformación a ‘noir’: convertir cualquier historia en noir moderno",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Voz en off, ironía, ciudad y culpa: reescritura noir con atmósfera.",
    prompt: `Pega tu texto o sinopsis y dime:
- Ciudad/lugar nocturno
- Culpa del protagonista
- Antagonista (persona o sistema)
- Objeto clave
- Final (ironía/castigo)

Reescribe en noir (350–700 palabras):
- Voz en off en 6 momentos (corta).
- La voz en off debe contradecir lo que se ve (subtexto).
- 10 detalles urbanos.
- Final: ironía moral.

Luego:
- 10 líneas de voz en off tipo “one-liner” para elegir.`,
    thumbnail: "",
  },
  {
    id: "crea-est-018",
    title: "Transformación a ‘cuento infantil’: el mismo tema, apto y profundo",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Convertir un tema adulto en cuento infantil simbólico sin perder profundidad.",
    prompt: `Pega tu texto o tema y dime:
- Edad objetivo (4–6, 7–9, 10–12).
- Valor central (amistad, honradez, valentía, paciencia).
- Personajes (animal/objeto/persona).
- Escenario (bosque, ciudad, mar, escuela).
- Final (lección sutil).

Escribe un cuento infantil (600–900 palabras):
- Lenguaje simple pero no tonto.
- Repetición rítmica (1 frase que vuelve 4 veces).
- 1 conflicto claro, 1 solución creativa.
- Moraleja implícita (no sermón).

Incluye:
- 6 títulos + 10 frases para ilustraciones (ideas visuales).`,
    thumbnail: "",
  },
  {
    id: "crea-est-019",
    title: "Transformación a ‘ensayo personal’: honestidad y claridad (sin poesía excesiva)",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Pasa de lírico a ensayo personal: ideas claras, escenas concretas, conclusión humana.",
    prompt: `Pega el texto base y dime:
- Tesis (qué quieres afirmar).
- 2 escenas reales o inventadas que lo prueben.
- Punto vulnerable que no quieres decir (pero deberías).
- Tono (cálido, directo, firme).

Reescribe como ensayo personal (800–1200 palabras):
- Hook con escena (no frase genérica).
- Tesis clara en el primer 20%.
- 2 escenas completas con detalle.
- 3 ideas explicadas con ejemplos.
- Conclusión: una decisión o práctica concreta.

Al final:
- 10 posibles títulos de ensayo.`,
    thumbnail: "",
  },
  {
    id: "crea-est-020",
    title: "Banco de recursos de estilo: metáforas, ritmos, cierres y ‘firmas’",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Genera recursos reutilizables: metáforas originales, cierres, ritmos y líneas firma.",
    prompt: `Dame:
- Tema (amor, ciudad, pérdida, identidad, ambición, miedo).
- Estética (urbana, natural, futurista, vintage).
- Tono (tierno, oscuro, irónico, épico).

Genera un banco con:
A) 25 metáforas originales (no cliché) ancladas a objetos/acciones.
B) 20 líneas de cierre (máx 12 palabras) en distintos tonos.
C) 15 aperturas (hooks) con imagen concreta.
D) 12 frases “firma” (una-liners) memorables.
E) 10 recursos rítmicos (anáforas, cortes, repeticiones) con ejemplos.

Luego:
- Dime cómo combinar 2 recursos sin saturar el texto.`,
    thumbnail: "",
  },

  {
    id: "crea-est-021",
    title: "Transformación por ‘limitación’: reescribe con reglas extremas",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescritura con restricciones (vocabulario, longitud, estructura) para creatividad real.",
    prompt: `Pega una escena o texto (200–600 palabras) y dime qué restricción quieres:
Elige 2–3:
1) Máximo 8 palabras por frase.
2) Sin adverbios.
3) Solo presente.
4) Sin verbo “ser/estar”.
5) 5 palabras obligatorias.
6) Final en una sola frase.

Reescribe cumpliendo las restricciones.
Luego:
- Escribe una segunda versión “libre” que conserve la fuerza lograda.
- Explica qué te forzó a descubrir la limitación (5 bullets).`,
    thumbnail: "",
  },
  {
    id: "crea-est-022",
    title: "Transformación a ‘escena teatral’: prosa a diálogo con acotaciones",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Convierte narración en teatro: subtexto, acotaciones, ritmo de escena.",
    prompt: `Pega tu texto (200–600 palabras) y dime:
- Personajes (2–4 máximo)
- Lugar
- Conflicto visible y conflicto real
- Objeto de subtexto
- Final

Convierte a escena teatral (6–10 páginas):
- Diálogo con subtexto.
- Acotaciones breves, precisas.
- 2 cambios de poder entre personajes.
- Final: gesto o frase que cierre con eco.

Incluye:
- Notas de dirección (ritmo, pausas, tono por personaje).`,
    thumbnail: "",
  },
  {
    id: "crea-est-023",
    title: "Transformación a ‘guion’: prosa a escenas con visualidad",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Pasa un texto narrativo a guion (formato cine) sin perder emoción.",
    prompt: `Pega tu texto (300–900 palabras) y dime:
- Duración objetivo (5–10 min)
- Locaciones disponibles (máx 3)
- Personajes disponibles (máx 4)
- Qué emoción debe dominar

Convierte a guion:
- 10–18 escenas máximo.
- Acciones visuales (no explicar).
- Diálogo mínimo, con subtexto.
- Final: imagen memorable.

Al final:
- Lista de 8 planos icónicos para dirigir la pieza.`,
    thumbnail: "",
  },
  {
    id: "crea-est-024",
    title: "Transformación a ‘mensajes de chat’: una historia en WhatsApp/DMs",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Cuenta una historia completa solo con mensajes: ritmo, silencios y subtexto digital.",
    prompt: `Dame:
- Quiénes chatean y relación.
- Conflicto.
- Secreto.
- Final (reconciliación, ruptura, giro).
- Estilo: realista (sí/no).

Escribe la historia solo en formato chat:
- 80–140 mensajes.
- Incluye silencios (… / “visto” / “escribiendo…”).
- 2 malentendidos creíbles.
- Final: un último mensaje que quede resonando.

Luego:
- 5 versiones alternativas del último mensaje.`,
    thumbnail: "",
  },
  {
    id: "crea-est-025",
    title: "Transformación a ‘diario’: misma historia en 3 entradas",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe como diario íntimo en tres días distintos mostrando evolución.",
    prompt: `Pega tu historia o escena y dime:
- 3 fechas (o rangos) para las entradas.
- Qué cambia en cada fecha.
- Qué verdad aparece al final.

Escribe 3 entradas de diario:
- Entrada 1: negación / confusión (250–400 palabras)
- Entrada 2: confrontación / ruptura (250–450 palabras)
- Entrada 3: síntesis / decisión (250–450 palabras)

Incluye:
- 1 frase repetida en las 3 entradas que cambie de sentido.`,
    thumbnail: "",
  },

  {
    id: "crea-est-026",
    title: "Transformación ‘publicidad literaria’: convierte texto en micro-anuncio poético",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Crea piezas cortas tipo anuncio, pero con calidad literaria y subtexto.",
    prompt: `Pega tu texto o dime tu tema/producto ficticio y:
- Beneficio real (no promesa inflada)
- Público
- Tono (poético/noir/humor)

Genera:
A) 10 microcopys poéticos (1–2 líneas)
B) 5 textos de 60–90 palabras (voz en off)
C) 3 textos de 180–240 palabras (mini historia con cierre)

Reglas:
- Cero clichés.
- Imágenes concretas.
- Final con frase memorable.`,
    thumbnail: "",
  },
  {
    id: "crea-est-027",
    title: "Transformación ‘dureza’: vuelve el texto más crudo y realista",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe para subir realismo (sin caer en vulgaridad), con detalles precisos.",
    prompt: `Pega tu texto (200–700 palabras) y dime:
- Nivel de dureza objetivo (1–10)
- Qué límites no cruzar
- Qué emoción debe permanecer

Reescribe:
- Sustituye abstractos por escenas.
- Añade 8 detalles físicos (manos, luz, ruido, olor).
- Elimina sentimentalismo y explicaciones.
- Mantén humanidad: incluye 2 momentos de ternura.

Al final:
- Lista de 15 ‘detalles crudos’ alternativos para futuras escenas.`,
    thumbnail: "",
  },
  {
    id: "crea-est-028",
    title: "Transformación ‘ternura’: suaviza sin infantilizar",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Pasa un texto duro a uno tierno manteniendo verdad y dignidad.",
    prompt: `Pega tu texto y dime:
- Qué parte duele
- Qué quieres proteger
- Tono objetivo (tierno, sereno, cálido, esperanzador)
- Palabras prohibidas (clichés)

Reescribe:
- Cambia la agresividad por cuidado.
- Mantén el conflicto, pero con compasión.
- Añade 6 detalles de cuidado (gestos pequeños).
- Final: promesa pequeña (realista).

Luego:
- 10 frases alternativas para el cierre.`,
    thumbnail: "",
  },
  {
    id: "crea-est-029",
    title: "Transformación ‘alta literatura’: eleva prosa a nivel estilístico premium",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Eleva sintaxis, imágenes y precisión sin volverlo pretencioso.",
    prompt: `Pega tu texto (200–700 palabras) y dime:
- Tono objetivo (elegante, íntimo, oscuro, luminoso)
- Nivel de complejidad (medio/alto)
- 5 palabras que te gustan y quieres incluir

Reescribe en “alta literatura”:
- Léxico preciso, no raro por raro.
- Metáforas originales (mínimo 4).
- Ritmo: alterna frases cortas y largas.
- Evita moralina.
- Final: una frase impecable (máx 14 palabras).

Al final:
- 8 decisiones de estilo que hiciste y por qué.`,
    thumbnail: "",
  },
  {
    id: "crea-est-030",
    title: "Transformación ‘voz contemporánea’: moderniza sin perder profundidad",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Actualiza registro a contemporáneo (sin slang barato), con claridad y punch.",
    prompt: `Pega tu texto y dime:
- Audiencia y plataforma (blog, IG, newsletter, guion).
- Qué quieres que sienta el lector.
- 5 palabras prohibidas.

Reescribe en voz contemporánea:
- Claridad y punch.
- Imágenes concretas.
- 2 líneas tipo “golpe” (muy cortas).
- Final: una línea que invite a releer.

Incluye:
- 6 titulares alternativos.`,
    thumbnail: "",
  },

  {
    id: "crea-est-031",
    title: "Transformación ‘bilingüe creativa’: español con “code-switch” elegante",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescritura con frases en inglés muy medidas para estilo, no por relleno.",
    prompt: `Pega tu texto (200–600 palabras) y dime:
- Nivel de “code-switch” (bajo/medio)
- Qué palabras/frases en inglés NO quieres (cringe)
- Tono (cool, íntimo, profesional, lírico)

Reescribe:
- Mantén 85–90% español.
- Inserta 6–10 frases cortas en inglés (máx 6 palabras cada una), con intención.
- Que el inglés aporte matiz (no traducción literal).
- Final: cierre en español, contundente.

Luego:
- Lista de 20 frases cortas en inglés útiles (sin cliché).`,
    thumbnail: "",
  },
  {
    id: "crea-est-032",
    title: "Transformación por ‘dicción’: cambia el registro (culto, coloquial, calle, formal)",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Cambia el registro lingüístico para ajustar personaje/época/entorno.",
    prompt: `Pega tu texto y dime:
- Quién habla (personaje)
- Contexto (dónde y con quién)
- Qué quiere lograr
- Nivel de vulgaridad permitido

Reescribe en 4 registros:
1) Formal/profesional
2) Coloquial cercano
3) Calle/argot moderado (sin caricatura)
4) Culto/literario (sin pedantería)

Para cada registro:
- 8 cambios de dicción (palabras/frases) y por qué.
- 1 línea final alternativa.`,
    thumbnail: "",
  },
  {
    id: "crea-est-033",
    title: "Transformación por ‘escala’: micro (tweet) vs macro (capítulo)",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Convierte la misma idea en tweet poderoso y luego en capítulo largo.",
    prompt: `Dame:
- Idea central (1 frase)
- Tema
- Tono

Crea 3 versiones:
A) Tweet/X: 240–280 caracteres (con imagen concreta, no moralina).
B) Microcuento: 120–180 palabras con giro.
C) Capítulo: 1200–1800 palabras con 2 escenas y subtexto.

Mantén el mismo núcleo en las 3.
Al final:
- Explica qué cambia en tensión/ritmo por escala (6 bullets).`,
    thumbnail: "",
  },
  {
    id: "crea-est-034",
    title: "Transformación a ‘lista literaria’: inventario con alma",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Pasa tu texto a inventario poético (cosas que guardo, cosas que pierdo) con giro.",
    prompt: `Pega tu texto y dime:
- Tema
- Símbolo central
- Giro final (qué se revela)

Convierte a “lista literaria”:
- 18–30 ítems.
- 4 rupturas del patrón (líneas fuera de lista).
- Cada ítem debe ser concreto y emocional a la vez.
- Final: ítem final que reinterprete todo.

Luego:
- 10 ítems alternativos para variar.`,
    thumbnail: "",
  },
  {
    id: "crea-est-035",
    title: "Transformación ‘una palabra’: reescribe para que una palabra sea protagonista",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Una palabra guía el texto: repetición rítmica y variación semántica.",
    prompt: `Pega tu texto y elige una palabra-protagonista (ej. “luz”, “llave”, “ruido”, “hielo”).
Dime:
- Cuántas veces quieres que aparezca (6–10).
- Tono.

Reescribe:
- La palabra debe aparecer 6–10 veces.
- Cada vez, cambia su significado por el contexto (no repetición vacía).
- 2 apariciones deben ser metafóricas, 2 literales, 2 híbridas.
- Final: última aparición con giro.

Al final:
- 6 palabras alternativas que funcionarían igual de bien.`,
    thumbnail: "",
  },

  {
    id: "crea-est-036",
    title: "Transformación ‘diálogo’: convertir narración en escena conversada",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe un fragmento de narración como diálogo con subtexto y acciones.",
    prompt: `Pega un fragmento narrativo (200–600 palabras) y dime:
- 2–3 personajes máximos
- Lugar
- Conflicto real (oculto)
- Objeto de subtexto
- Final (qué cambia)

Reescribe como escena:
- Formato guion o teatro (elige).
- Diálogo con interrupciones, silencios y acciones.
- 2 cambios de táctica por personaje.
- Final: frase inocente con carga emocional.

Luego:
- Lista de 10 “acciones de subtexto” para ese conflicto.`,
    thumbnail: "",
  },
  {
    id: "crea-est-037",
    title: "Transformación ‘cámara’: reescribe como si la cámara lo contara",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Pasa tu texto a lenguaje audiovisual: planos, acciones, atmósfera.",
    prompt: `Pega tu texto (200–700 palabras) y dime:
- Género (drama/thriller/romance/terror)
- Locación principal
- Emoción dominante

Reescribe como “cámara”:
- Describe en presente lo que se ve y se oye.
- Inserta 12–20 planos (marcados como PLANO 1, PLANO 2…).
- Reduce explicaciones internas; muestra por acciones.
- Final: plano final memorable.

Incluye:
- 8 ideas de sonido/ambiente para reforzar emoción.`,
    thumbnail: "",
  },
  {
    id: "crea-est-038",
    title: "Transformación ‘suspenso’: convertir cualquier escena en tensión",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe para subir tensión con información parcial, ritmo y amenaza latente.",
    prompt: `Pega tu escena (200–700 palabras) y dime:
- Qué amenaza potencial existe (aunque sea emocional).
- Qué información el lector no debe saber aún.
- Qué detalle del entorno se volverá pista.

Reescribe en clave de suspenso:
- Corta la información directa en 50%.
- Añade 3 pistas pequeñas (sembradas).
- Ritmo: frases cortas en momentos de tensión.
- Final: micro-cliffhanger.

Luego:
- Lista de 10 recursos de tensión (aplicables) con ejemplo.`,
    thumbnail: "",
  },
  {
    id: "crea-est-039",
    title: "Transformación ‘luz y sombra’: mismo texto en versión luminosa vs oscura",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Dos reescrituras opuestas en atmósfera manteniendo la historia.",
    prompt: `Pega tu texto (200–600 palabras) y dime:
- Qué debe permanecer igual (núcleo)
- Qué quieres que cambie (atmósfera)

Haz 2 versiones:
A) Versión luminosa: esperanza, claridad, aire (sin azúcar)
B) Versión oscura: peso, noche, tensión (sin melodrama)

Para cada una:
- 10 decisiones de atmósfera (léxico, detalles, ritmo)
- Un cierre alternativo (1 línea)

Al final:
- Dime cuál funciona mejor y por qué.`,
    thumbnail: "",
  },
  {
    id: "crea-est-040",
    title: "Auditoría de estilo: detectar muletillas, patrones y mejorar tu voz",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Análisis y reescritura para consolidar voz propia (sin sonar genérico).",
    prompt: `Pega 2–4 textos tuyos (total 400–1200 palabras).

Tarea:
1) Detecta patrones:
- muletillas
- formas repetidas de iniciar frases
- adjetivos frecuentes
- estructuras de metáfora
- ritmo (longitud de frase)
2) Define tu voz actual en 8 rasgos.
3) Propón una “guía de estilo personal” (12 reglas) para sonar más tú.
4) Reescribe 1 texto aplicando la guía (300–600 palabras).
5) Crea un glosario personal:
- 20 palabras que te representan
- 20 palabras que deberías evitar

Al final:
- Un plan de 7 días para entrenar esa voz (acciones concretas).`,
    thumbnail: "",
  },

  {
    id: "crea-est-041",
    title: "Transformación ‘mismo hecho, distinta emoción’: alegría, nostalgia, rabia, calma",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Mantén el evento igual, cambia solo la emoción a través de detalles y ritmo.",
    prompt: `Dame un hecho simple (1–2 frases) y:
- Lugar
- Personaje
- 5 objetos de la escena

Escribe 4 versiones (200–350 palabras cada una) donde el hecho sea idéntico:
1) Alegría contenida
2) Nostalgia suave
3) Rabia elegante
4) Calma melancólica

Reglas:
- No cambies el hecho.
- Cambia el mundo: detalles, ritmo, metáforas, foco.

Al final:
- Explica qué cambió para provocar emoción (8 bullets).`,
    thumbnail: "",
  },
  {
    id: "crea-est-042",
    title: "Transformación ‘voz de objeto’: narrativa desde un objeto (estilo literario)",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe como si un objeto narrara la historia, con personalidad y coherencia.",
    prompt: `Pega tu texto o escena y dime:
- Objeto narrador
- Dueño/a
- Secreto que el objeto sabe
- Final (guardar/soltar)

Reescribe (500–900 palabras):
- Voz del objeto consistente.
- 2 flashbacks y 1 escena presente.
- Detalles sensoriales reales (textura, polvo, peso).
- Final: decisión del objeto.

Luego:
- 12 frases “firma” del objeto (una-liners).`,
    thumbnail: "",
  },
  {
    id: "crea-est-043",
    title: "Transformación ‘revelación tardía’: esconder lo importante hasta el final",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe para que la verdad clave se revele al cierre (sembrada y merecida).",
    prompt: `Pega tu historia/escena y dime:
- Qué verdad final quieres revelar.
- 3 pistas que sí pueden aparecer antes.
- 3 cosas que NO deben revelarse.
- Final deseado (shock, ternura, ironía).

Reescribe (500–900 palabras):
- Siembra las 3 pistas de forma natural.
- Da explicaciones alternativas (sin mentir descaradamente).
- Mantén ritmo que no “cante” twist.
- Final: revela la verdad con una imagen (no discurso).

Al final:
- Lista: pista → línea donde aparece → payoff.`,
    thumbnail: "",
  },
  {
    id: "crea-est-044",
    title: "Transformación ‘estilo epistolar’: convertir escena en cartas",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe como intercambio de cartas: subtexto, omisiones y tiempo.",
    prompt: `Pega tu escena/historia y dime:
- Quién escribe
- A quién
- En qué periodo (días, años)
- Qué se oculta

Escribe 4 cartas:
- Carta 1: expectativa/mentira bonita (200–350 palabras)
- Carta 2: fricción (200–350)
- Carta 3: distancia/ausencia (200–350)
- Carta 4: verdad (200–350)

Reglas:
- Cada carta debe tener un objeto mencionado que cambia de sentido.
- Final: una frase que cierre toda la correspondencia.

Incluye:
- 8 frases de cierre alternas.`,
    thumbnail: "",
  },
  {
    id: "crea-est-045",
    title: "Transformación ‘estilo periodístico’: convertir ficción en crónica",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe una historia como crónica/nota: datos, escenas, testimonio, sin perder emoción.",
    prompt: `Pega tu historia y dime:
- Lugar y fecha (ficticia o real)
- Qué “hecho” se reporta
- 2 testigos
- 1 dato duro (número) inventado pero plausible

Escribe una crónica (800–1200 palabras):
- Lead fuerte (primer párrafo)
- Escenas concretas intercaladas con contexto
- 2 testimonios con voz distinta
- Cierre: reflexión corta, no moralina

Luego:
- 10 titulares posibles.`,
    thumbnail: "",
  },

  {
    id: "crea-est-046",
    title: "Transformación ‘delicado vs directo’: dos versiones de honestidad",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe una confesión en dos registros: delicado (metáforas) y directo (sin metáfora).",
    prompt: `Pega tu texto/confesión (150–400 palabras) y dime:
- A quién va dirigido
- Qué se teme perder
- Qué verdad debe decirse

Crea 2 versiones (250–450 palabras cada una):
A) Delicada: metáforas, sugerencia, subtexto
B) Directa: frases claras, sin adornos, verdad al frente

Luego:
- Señala 8 frases donde cambiaste forma pero no fondo (comparativa).`,
    thumbnail: "",
  },
  {
    id: "crea-est-047",
    title: "Transformación ‘ritual’: volver una experiencia en ceremonia literaria",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Convertir un evento cotidiano en ritual simbólico con repetición y gesto final.",
    prompt: `Dame:
- Evento cotidiano (hacer café, lavar ropa, caminar).
- Emoción.
- 5 objetos del ritual.
- Final (qué se suelta o se abraza).

Escribe un texto (600–900 palabras):
- Secciones cortas con repetición (un estribillo que vuelve 5 veces).
- El evento se vuelve ceremonia.
- Final: gesto mínimo con significado enorme.

Incluye:
- 12 líneas “mantra” que podrían funcionar como estribillo.`,
    thumbnail: "",
  },
  {
    id: "crea-est-048",
    title: "Transformación ‘anti-yo’: quitar el ‘yo’ sin perder intimidad",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe un texto íntimo sin usar ‘yo’, creando cercanía por detalles.",
    prompt: `Pega tu texto (200–600 palabras).

Reescribe con reglas:
- Prohibido usar “yo”, “me”, “mi”, “mío”.
- Mantén la intimidad con acciones, sensaciones y entorno.
- 10 detalles concretos mínimos.
- Final: una frase que suene como confesión sin “yo”.

Luego:
- Vuelve a reescribir permitiendo “yo”, pero conservando el estilo depurado.`,
    thumbnail: "",
  },
  {
    id: "crea-est-049",
    title: "Transformación ‘capas’: primera lectura simple, segunda lectura profunda",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Reescribe para tener doble capa: superficie cotidiana + subtexto oscuro o tierno.",
    prompt: `Pega tu texto y dime:
- Capa 1 (lo que parece)
- Capa 2 (lo que realmente es)
- Símbolo que conecte ambas

Reescribe (500–900 palabras):
- La capa 1 debe funcionar sola.
- La capa 2 debe entenderse con pistas (4–7 pistas).
- Final: una línea que revele capa 2 sin explicarla.

Incluye:
- Lista de pistas y dónde las pusiste.`,
    thumbnail: "",
  },
  {
    id: "crea-est-050",
    title: "Kit de transformación final: 1 historia en 5 formatos listos para publicar",
    area: "Escritura Creativa",
    category: "Transformación & Estilo",
    summary:
      "Convierte una historia en: cuento, poema, guion, caption, hilo (multiuso).",
    prompt: `Pega tu historia base (300–800 palabras) y dime:
- Plataforma objetivo (IG, TikTok, blog, newsletter, libro).
- Tono.
- Mensaje central.

Genera 5 formatos:
1) Cuento breve (900–1300 palabras) con 2 escenas y final memorable.
2) Poema (28–42 versos) con 5 sentidos y giro.
3) Escena de guion (4–6 páginas) con subtexto.
4) Caption IG (180–240 palabras) + 5 hooks de apertura.
5) Hilo X/Twitter (8–12 tweets) con ritmo y cierre.

Al final:
- Checklist de coherencia (qué se mantiene en todos).`,
    thumbnail: "",
  },
];
