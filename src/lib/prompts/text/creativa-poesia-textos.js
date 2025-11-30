// src/lib/prompts/text/creativa-poesia-textos.js

export const textPromptsCreativaPoesiaTextos = [
  {
    id: "crea-poe-001",
    title: "Poema libre cinematográfico: una escena en cámara lenta (5 sentidos)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema en verso libre con imágenes sensoriales, ritmo visual y cierre contundente.",
    prompt: `Dame:
1) Tema central (ej. duelo, deseo, nostalgia, rabia, paz).
2) Lugar exacto (con 3 objetos concretos).
3) Época/hora (amanecer, noche, domingo, invierno).
4) Emoción dominante y emoción escondida.
5) Una frase que NO quieres usar (para evitar clichés).

Escribe un poema en verso libre de 28 a 42 versos:
- Incluye los 5 sentidos (mínimo 1 imagen para cada sentido).
- Usa imágenes concretas (nada abstracto sin ancla).
- Ritmo: alterna versos cortos (3–6 palabras) con versos largos (10–16 palabras).
- Inserta 3 metáforas novedosas (no típicas).
- Incluye 1 giro a mitad: revelar la emoción escondida.
- Cierra con un último verso que sea una sentencia (máx. 12 palabras).

Luego:
A) Dame una versión “micro” de 6 versos (igual de potente).
B) Dame 5 títulos alternativos.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-002",
    title: "Soneto moderno: clásico en forma, actual en lenguaje",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Soneto de 14 versos con temática contemporánea y remate memorable.",
    prompt: `Dame:
- Tema (amor, ansiedad, ciudad, identidad, dinero, tiempo).
- Tono (elegante, crudo, tierno, irónico).
- 3 imágenes obligatorias (objetos o escenas).
- Una palabra que debe aparecer 2 veces (con sentido distinto).

Escribe un soneto (14 versos):
- Métrica flexible (no perfecta, pero con musicalidad).
- Rima sugerida (ABBA ABBA CDC DCD o similar), pero sin forzar.
- Volta (giro) en el verso 9.
- Último pareado o cierre que sea demoledor.

Luego crea:
- 1 versión sin rima (verso libre) manteniendo el contenido.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-003",
    title: "Haikus encadenados: 12 haikus sobre un mismo hilo emocional",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Serie de haikus conectados por una historia invisible y un símbolo recurrente.",
    prompt: `Dame:
- Estación del año.
- Símbolo recurrente (ej. taza, llave, sal, humo, ventana).
- Emoción principal.
- Lugar.
- 1 secreto que la voz poética no confiesa.

Escribe 12 haikus (5-7-5 aproximado):
- Cada uno debe contener un detalle sensorial.
- El símbolo recurrente aparece en al menos 6 haikus, con variación.
- Debe sentirse un arco narrativo: inicio → tensión → revelación → calma rota.
- Evita palabras cliché (alma, eternidad, destrozado, etc.).

Al final:
- Explica en 5 bullets el arco oculto (sin sobreexplicar).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-004",
    title: "Poema en segunda persona: tú como espejo (intimidad sin cursilería)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Un poema que habla a ‘tú’ con precisión emocional y escenas concretas.",
    prompt: `Dame:
- Quién es “tú” (amante, madre, amigo, yo del pasado).
- Qué pasó entre ustedes.
- 3 recuerdos concretos (lugares, objetos, sonidos).
- Lo que el narrador nunca dijo en voz alta.
- Tono (agrio, tierno, resignado, esperanzado).

Escribe un poema de 30–45 versos:
- 70% imágenes concretas, 30% emoción nombrada.
- 3 repeticiones deliberadas (anáfora) para ritmo.
- 1 pregunta que duela a mitad.
- Cierre: una promesa pequeña o una renuncia clara (máx. 2 versos).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-005",
    title: "Poema minimalista: decir mucho con poco (economía brutal)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema de líneas cortas, con silencios, cortes y un golpe final.",
    prompt: `Dame:
- Emoción.
- Escena (una sola).
- Un objeto protagonista.
- Una contradicción interna (“quiero X pero temo Y”).

Escribe un poema de 18–26 líneas:
- Cada línea máximo 5 palabras.
- Usa 2 líneas de una sola palabra.
- No uses adjetivos obvios; prioriza verbos y sustantivos.
- Final: 1 línea que cambie el significado de todo.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-006",
    title: "Poema con estructura de lista: inventario emocional",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema tipo inventario (cosas que guardo, cosas que pierdo), con giro revelador.",
    prompt: `Dame:
- Tema.
- Qué se guarda y por qué.
- 10 elementos concretos en la lista (objetos, sonidos, nombres, lugares).
- Giro final deseado (confesión, perdón, despedida).

Escribe un poema de 22–40 líneas:
- Formato lista, pero con ritmo poético (no prosa seca).
- Inserta 3 líneas fuera de la lista para romper el patrón.
- El giro ocurre en las últimas 5 líneas.

Luego:
- Dame 8 elementos alternativos para la lista (por si quiero variar).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-007",
    title: "Prosa poética: una carta que parece poema",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Texto en prosa poética con cadencia, imágenes y una verdad final.",
    prompt: `Dame:
- Destinatario (quién).
- Conflicto.
- Tono (nostálgico, feroz, dulce, frío).
- 3 símbolos (objetos) que representen la relación.
- Lo que se pide (o se suelta) al final.

Escribe una prosa poética de 600–900 palabras:
- Párrafos cortos (2–5 líneas).
- Repetición como música (1 frase que vuelve 4 veces con pequeñas variaciones).
- 2 escenas concretas dentro del texto.
- Final: una frase que sea imposible de olvidar (máx. 12 palabras).

Después:
- Extrae 12 frases (quotes) de 1 línea para usar en redes.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-008",
    title: "Poesía de rabia elegante: furia contenida (sin gritar)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema de rabia sofisticada con imágenes filosas, control y precisión.",
    prompt: `Dame:
- Qué te enfurece (situación concreta).
- Contra quién/qué (persona, sistema, yo mismo).
- Qué se perdió.
- Qué límite se cruza en el poema (sin insultos directos).
- Símbolo central (ej. vidrio, hierro, humo, tinta).

Escribe un poema de 26–40 versos:
- Voz controlada, como si hablieran con los dientes apretados.
- 3 metáforas filosas (no violentas explícitas).
- 2 momentos de vulnerabilidad (para que no sea solo rabia).
- Final: ultimátum moral o despedida.

Luego:
- 1 versión más corta (10–14 versos) tipo “golpe”.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-009",
    title: "Poesía de amor sin clichés: deseo + respeto + realidad",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema amoroso realista, con detalles cotidianos y emoción adulta.",
    prompt: `Dame:
- Relación (cómo se conocen, cuánto tiempo).
- 5 detalles cotidianos que los definan.
- Un conflicto o miedo real.
- Un gesto pequeño que sea el amor.
- Tono (tierno, sensual, melancólico, juguetón).

Escribe un poema de 28–44 versos:
- Evita palabras cliché (alma, destino, eterno, perfecto).
- Usa detalles cotidianos como símbolos (llaves, café, ropa, mensajes).
- Inserta 1 referencia al cuerpo (sutil, no explícita).
- Final: promesa pequeña (algo que sí pueden cumplir).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-010",
    title: "Poema de duelo: lo que queda en la casa",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Duelo narrado por objetos y silencios, con escenas domésticas precisas.",
    prompt: `Dame:
- A quién se perdió (y cómo).
- Lugar de la casa donde duele más.
- 6 objetos que quedaron.
- Recuerdo más luminoso y recuerdo más duro.
- Tono (sereno, desgarrado, resignado).

Escribe un poema de 30–50 versos:
- Cada estrofa se ancla a un objeto o rincón.
- 2 líneas deben ser preguntas sin respuesta.
- 1 escena breve de “antes” (flash).
- Final: una imagen de continuidad (no final feliz, pero vida).`,
    thumbnail: "",
  },

  {
    id: "crea-poe-011",
    title: "Poema con restricción: sin usar la letra ‘a’ (reto creativo)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Ejercicio de estilo: lírica bajo restricción para forzar imágenes nuevas.",
    prompt: `Escribe un poema de 18–26 versos sobre:
- Tema: (elige uno) deseo / pérdida / ciudad / infancia / fe / cansancio.
Regla estricta:
- No puede aparecer la letra “a” en ninguna palabra.

Además:
- Mantén imágenes concretas y musicalidad.
- Evita que suene artificial: que se sienta natural.

Al final:
- Dame una segunda versión sin restricción, pero con el mismo tono y escenas.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-012",
    title: "Poema con estribillo: repetición que aumenta el dolor",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Un estribillo que se repite y cambia de significado cada vez.",
    prompt: `Dame:
- Estribillo base (1 línea).
- Tema.
- Lugar.
- Evolución emocional (de X a Y).

Escribe un poema de 32–48 versos:
- Estribillo se repite 5 veces.
- Cada repetición cambia una palabra clave para cambiar el sentido.
- 3 imágenes sensoriales fuertes.
- Final: última repetición del estribillo con giro devastador.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-013",
    title: "Poesía narrativa: una historia completa en versos",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Cuenta una historia (inicio, giro, final) en forma de poema narrativo.",
    prompt: `Dame:
- Protagonista.
- Deseo.
- Obstáculo.
- Lugar.
- Final (feliz amargo, derrota digna, victoria rara).

Escribe un poema narrativo de 40–60 versos:
- Divide en 3 actos (marcados por subtítulos cortos).
- Incluye 2 diálogos breves (1–2 líneas cada uno).
- 1 símbolo que aparezca en cada acto.
- Final: imagen que cierre el arco.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-014",
    title: "Poema ‘cuerpo y ciudad’: el paisaje como emoción",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "La ciudad se vuelve espejo del cuerpo y la mente: metáforas contemporáneas.",
    prompt: `Dame:
- Ciudad/lugar urbano.
- Emoción.
- Hora del día.
- Íconos urbanos (metro, semáforos, pantallas, lluvia en vidrio).
- Conflicto interno.

Escribe un poema de 28–44 versos:
- 5 imágenes urbanas que reflejen el estado interno.
- 2 comparaciones inesperadas (no típicas).
- Final: una línea que una cuerpo y ciudad con verdad.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-015",
    title: "Prosa lírica corta: texto para voz en off (reel/short)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Texto poético en prosa para narración, con ritmo oral y golpes emocionales.",
    prompt: `Dame:
- Tema.
- Tono (esperanzador, oscuro, irónico, íntimo).
- Duración (30s o 60s).
- Escena (lugar + acción).
- Frase final que quieres (si no, inventa 3 y elige).

Escribe un texto de voz en off:
- Para 30s: 90–120 palabras.
- Para 60s: 170–220 palabras.
- Ritmo oral: frases que se digan bien en voz.
- 3 “golpes” emocionales (frases cortas).
- Final: cierre memorable.

Luego:
- Dame 5 hooks alternativos (primeras 2 líneas).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-016",
    title: "Poema final de capítulo: cierre con eco (literario)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema breve para cerrar un capítulo de novela: atmósfera, presagio y eco.",
    prompt: `Dame:
- Género (thriller, romance, fantasía, drama).
- Qué pasó en el capítulo (resumen).
- Qué debe presagiar el cierre.
- Símbolo que quede resonando.
- Tono.

Escribe un poema de 16–24 versos:
- Debe dejar un cliffhanger emocional.
- 1 imagen final que sea presagio.
- Evita exposición directa: sugiere.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-017",
    title: "Poesía íntima: ‘lo que nunca dije’ (confesión)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema confesional con honestidad quirúrgica, sin melodrama.",
    prompt: `Dame:
- A quién se dirige.
- Qué no se dijo.
- Por qué no se dijo.
- Consecuencia.
- Imagen central (objeto/lugar).

Escribe un poema de 26–40 versos:
- 2 estrofas deben comenzar con “Nunca…”.
- 1 estrofa debe ser solo 2 versos (muy cortos).
- Final: confesión final que cambie el significado del resto.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-018",
    title: "Poesía para ‘meme triste’: ironía + dolor (moderno)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Texto poético con humor triste moderno: risa incómoda y verdad.",
    prompt: `Dame:
- Tema doloroso.
- Mecanismo de defensa (ironía, cinismo, humor negro, nostalgia).
- Escena cotidiana.
- Palabra moderna obligatoria (ej. “notificación”, “scroll”, “algoritmo”).

Escribe un poema de 22–34 versos:
- Mezcla lenguaje cotidiano con imágenes poéticas.
- 3 líneas deben sonar como frase de chat.
- Final: una línea seria que rompa la ironía.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-019",
    title: "Poema ‘oración laica’: pedir sin religión (ritual personal)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Una ‘oración’ sin dios: un ritual íntimo para pedir fuerza y claridad.",
    prompt: `Dame:
- Qué necesitas pedir (paz, disciplina, perdón, fuerza).
- Qué te pesa.
- Qué quieres soltar.
- Símbolo (vela, agua, ventana, pan, sal).
- Tono (sereno, desesperado, esperanzado).

Escribe un poema de 24–40 versos:
- Forma de plegaria (repeticiones, invocaciones), pero laica.
- 3 imágenes de naturaleza o hogar.
- Final: una promesa a ti mismo.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-020",
    title: "Poesía de futuro: carta a tu yo de 10 años (esperanza concreta)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema/carta en verso con detalles de vida y esperanza aterrizada.",
    prompt: `Dame:
- Edad del yo futuro y del yo actual.
- Miedo actual.
- Sueño que se teme admitir.
- 5 detalles concretos del futuro (lugares, hábitos, objetos).
- Tono.

Escribe un poema de 30–50 versos:
- Mezcla promesa y realismo.
- 3 recomendaciones concretas.
- Final: “cuando llegues aquí, recuerda…” con una imagen potente.`,
    thumbnail: "",
  },

  {
    id: "crea-poe-021",
    title: "Poema erótico sutil: tensión y sugerencia (sin explicitar)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Erotismo elegante: insinuación, detalle, electricidad, sin crudeza explícita.",
    prompt: `Dame:
- Contexto (encuentro, recuerdo, ausencia).
- Lugar.
- Detalle físico no sexual (manos, cuello, espalda, voz).
- Tono (lento, urgente, prohibido, tierno).
- Límite: cosas que NO quieres mencionar.

Escribe un poema de 24–38 versos:
- Sensualidad por metáfora y detalle.
- 3 imágenes táctiles.
- Final: corte abrupto (como si alguien tocara la puerta).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-022",
    title: "Poema ‘objeto que habla’: voz personificada",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Un objeto narra la historia (carta, silla, espejo) y revela emociones humanas.",
    prompt: `Dame:
- Objeto narrador.
- Dueño/a del objeto.
- Relación del objeto con una pérdida o cambio.
- Lugar donde vive el objeto.
- Secreto que el objeto sabe.

Escribe un poema de 28–44 versos:
- Voz del objeto con personalidad coherente.
- 2 recuerdos del pasado (flash) y 1 del presente.
- Final: el objeto decide “soltar” o “guardar” algo.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-023",
    title: "Poesía en forma de diálogo: dos voces que se contradicen",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema dialogado entre dos voces internas (miedo vs deseo, razón vs corazón).",
    prompt: `Dame:
- Dos voces (quiénes son).
- Tema.
- Lugar simbólico.
- Final (quién gana o si quedan empatadas).

Escribe un poema de 34–52 versos:
- Marca las voces como “Voz A:” y “Voz B:”.
- 3 momentos donde las voces se acercan.
- 1 momento donde se hieren.
- Final: una línea compartida por ambas (misma frase, distinto sentido).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-024",
    title: "Poema de autoestima real: reconstrucción sin frases vacías",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema de reconstrucción personal con pasos concretos y emoción honesta.",
    prompt: `Dame:
- Qué te rompió.
- Qué aprendiste.
- Qué hábito pequeño te sostuvo.
- 3 señales de tu cambio.
- Tono.

Escribe un poema de 28–44 versos:
- Evita frases motivacionales cliché.
- Incluye 5 acciones concretas (levantarse, escribir, caminar, decir no, etc.).
- Final: definición nueva de ti en 1 línea.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-025",
    title: "Poema para canción (letra): verso + pre + coro + puente",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Letra completa con estructura musical clara y frases pegajosas (sin sonar genérica).",
    prompt: `Dame:
- Género musical (pop, indie, urbano, balada, rock).
- Tema.
- Tono.
- 3 imágenes obligatorias.
- Frase gancho para el coro (si no tienes, inventa 5).

Escribe letra:
- Verso 1 (6–8 líneas)
- Pre-coro (4 líneas)
- Coro (6 líneas, con 1 frase repetida)
- Verso 2 (6–8 líneas)
- Puente (4–6 líneas) con giro emocional
- Último coro (variación)

Incluye:
- 3 opciones de frase gancho para coro.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-026",
    title: "Poesía ‘postal’: un lugar habla de ti",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema como postal: el lugar refleja tu estado interno y deja una firma emocional.",
    prompt: `Dame:
- Lugar específico (ciudad/barrio/playa/montaña).
- Hora del día.
- Emoción.
- 5 detalles del lugar.
- A quién va dirigida la postal.

Escribe un poema de 26–40 versos:
- Sensaciones + observación.
- 1 línea que funcione como “firma” al final (tu nombre o algo simbólico).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-027",
    title: "Poema de ansiedad: mente acelerada, cuerpo quieto",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Ansiedad descrita con precisión física y mental, con un mini respiro al final.",
    prompt: `Dame:
- Disparador de ansiedad.
- Lugar donde ocurre.
- 6 síntomas (respiración, manos, pecho, etc.).
- Pensamiento obsesivo.
- Qué ayuda (acción mínima).

Escribe un poema de 30–48 versos:
- Ritmo con frases cortas y largas para simular aceleración.
- 3 metáforas corporales originales.
- En los últimos 6 versos: introduce una acción mínima que calme (sin “todo estará bien”).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-028",
    title: "Poesía “retrato”: describir a alguien sin decir su nombre",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Un retrato íntimo hecho de acciones, gestos y objetos, sin nombrar a la persona.",
    prompt: `Dame:
- Quién es (relación contigo).
- 8 detalles de conducta/gestos.
- 5 objetos que lo rodean.
- Frase típica que dice.
- Emoción que te provoca.

Escribe un poema de 26–44 versos:
- No uses el nombre ni “tú eres”.
- Que el lector lo vea por movimientos y detalles.
- Final: una línea que lo defina sin definirlo.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-029",
    title: "Poesía meta: escribir sobre escribir (autorreflexiva)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema sobre el acto de escribir: dudas, oficio, obsesión y verdad.",
    prompt: `Dame:
- Qué te cuesta escribir (tema).
- Qué temes que pase si lo dices.
- Tu ritual de escritura.
- Lugar donde escribes.
- Símbolo central (teclado, tinta, papel, luz).

Escribe un poema de 28–46 versos:
- 2 estrofas deben incluir imágenes del oficio (borrar, corregir, tachar).
- 1 giro: lo que realmente querías decir aparece al final.
- Final: una frase sobre por qué escribes, sin cliché.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-030",
    title: "Poema ‘dos finales’: esperanza vs cinismo (elige tu salida)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Mismo poema con dos cierres distintos: uno luminoso y otro oscuro.",
    prompt: `Dame:
- Tema.
- Escena.
- Símbolo.
- Voz (1ª o 2ª persona).
- Qué emoción quieres que domine.

Escribe un poema de 30–44 versos con dos finales:
- Final A (esperanzador): últimos 4–6 versos.
- Final B (cínico/oscuro): últimos 4–6 versos.
- Todo antes del final es idéntico.

Incluye:
- 5 títulos alternativos.`,
    thumbnail: "",
  },

  {
    id: "crea-poe-031",
    title: "Texto tipo aforismos: 20 verdades pequeñas (poéticas)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "20 aforismos poéticos, originales, con imágenes y filo.",
    prompt: `Dame:
- Tema (amor, dinero, tiempo, duelo, identidad).
- Tono (suave, duro, irónico, tierno).
- 5 símbolos (objetos/lugares).

Escribe 20 aforismos:
- Cada uno máximo 16 palabras.
- Al menos 10 deben tener una imagen concreta.
- 4 deben contradecirse entre sí (humanidad real).
- Evita frases tipo “todo pasa por algo”.

Luego:
- Elige los 5 mejores y reescríbelos en versión “más literaria”.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-032",
    title: "Poema ‘relación con el tiempo’: cronómetro, calendario, arrugas",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Explora el tiempo como personaje: presión, nostalgia y futuro.",
    prompt: `Dame:
- Edad del narrador.
- Qué siente que se le fue.
- Qué quiere rescatar.
- Símbolos del tiempo (reloj, calendario, fotos, recibos).
- Lugar.

Escribe un poema de 30–50 versos:
- El tiempo debe “hablar” en 3 versos (como si fuera personaje).
- Inserta 2 mini escenas (pasado y presente).
- Final: una decisión respecto al tiempo (qué harás ahora).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-033",
    title: "Poema de naturaleza urbana: plantas en concreto",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Contraste entre vida y ciudad: plantas, grietas, resistencia silenciosa.",
    prompt: `Dame:
- Ciudad/lugar.
- Planta o elemento de vida (árbol, flor, musgo).
- Emoción.
- Escena (dónde aparece lo vivo).
- Final deseado.

Escribe un poema de 26–42 versos:
- 6 imágenes de contraste (metal vs hoja, ruido vs quietud).
- Final: la vida como decisión, no como accidente.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-034",
    title: "Poema para foto: caption poético largo (Instagram)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Caption largo, literario, con ritmo y final que invita a guardar/compartir.",
    prompt: `Dame:
- Qué hay en la foto (escena).
- Emoción.
- 3 detalles (colores, luz, objetos).
- Tono (suave, oscuro, íntimo, esperanzador).
- Mensaje final.

Escribe un caption de 180–260 palabras:
- 2 frases muy cortas (1–3 palabras) para ritmo.
- 1 pregunta.
- Final: una línea que funcione como “cierre” y quede resonando.

Incluye:
- 8 variantes de última línea (para A/B).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-035",
    title: "Poema ‘promesa’: juramento íntimo (sin grandilocuencia)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Promesa pequeña, creíble y hermosa: amor, amistad o yo mismo.",
    prompt: `Dame:
- A quién va la promesa.
- Qué no pudiste cumplir antes.
- Qué sí puedes prometer ahora (concreto).
- Contexto (escena).
- Tono.

Escribe un poema de 24–38 versos:
- Debe incluir 6 acciones concretas (haré, cuidaré, diré, etc.) sin sonar lista.
- Final: una sola frase promesa, simple y fuerte.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-036",
    title: "Poema de ruptura: amor que se vuelve costumbre y se quiebra",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Ruptura narrada desde rutina: objetos, horarios, silencios y distancia.",
    prompt: `Dame:
- Qué rutina compartían.
- Qué empezó a fracturarse primero.
- 5 objetos comunes.
- Última conversación o último gesto.
- Final deseado (rencor, calma, ambigüedad).

Escribe un poema de 30–50 versos:
- Ancla cada estrofa a un objeto/hábito.
- Final: una imagen de la casa vacía o del teléfono quieto.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-037",
    title: "Poema ‘extrañar’: presencia en ausencia",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Extrañar escrito con detalles reales que hacen doler: ausencia como textura.",
    prompt: `Dame:
- A quién extrañas.
- Qué detalle mínimo te lo recuerda.
- Lugar donde duele.
- Sonido que activa recuerdo.
- Tono.

Escribe un poema de 26–42 versos:
- 2 estrofas deben terminar con la misma palabra (repetición).
- Inserta 1 escena de recuerdo y 1 del presente.
- Final: aceptación rara, no final feliz.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-038",
    title: "Poesía ‘disociación’: sentirte afuera de ti (sutil)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema que describe disociación con imágenes extrañas pero concretas.",
    prompt: `Dame:
- Situación que dispara disociación.
- Lugar.
- Sensación corporal.
- Objeto que se vuelve símbolo.
- Final (regresar/no regresar).

Escribe un poema de 28–46 versos:
- 3 imágenes de distancia (vidrio, pantalla, eco, pasillo).
- 2 momentos de “regreso al cuerpo”.
- Final: acción mínima (respirar, tocar, nombrar).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-039",
    title: "Poema de gratitud rara: lo que agradezco aunque dolió",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Gratitud no edulcorada: agradecer incluso lo difícil, con honestidad.",
    prompt: `Dame:
- Qué dolió.
- Qué te enseñó.
- Qué cambió en ti.
- Símbolo.
- Tono (sereno, intenso, humilde).

Escribe un poema de 26–44 versos:
- Agradecimiento con contradicción.
- 5 imágenes concretas de cambio.
- Final: “gracias” dicho de una forma no literal (sin usar la palabra).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-040",
    title: "Poema ‘yo del pasado vs yo actual’: conversación en versos",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Dos versiones de ti hablan; choque, compasión y síntesis final.",
    prompt: `Dame:
- Edad del yo del pasado.
- Qué le dolía.
- Qué creyó mal.
- Qué aprendiste.
- Lugar simbólico del encuentro.

Escribe un poema de 34–52 versos:
- Marca voces como “Antes:” y “Ahora:”.
- 1 abrazo emocional (líneas donde se encuentran).
- Final: una línea conjunta.`,
    thumbnail: "",
  },

  {
    id: "crea-poe-041",
    title: "Poema de lluvia: cliché prohibido, imágenes nuevas",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Reto: escribir lluvia sin recurrir a metáforas típicas, con originalidad visual.",
    prompt: `Escribe un poema de 28–44 versos sobre la lluvia con reglas:
- Prohibido: “lágrimas”, “melancolía”, “nostalgia”, “gris”, “triste”.
- Debes incluir 8 detalles concretos de lluvia (techos, charcos, paraguas, olor).
- 2 imágenes deben ser inesperadas (no románticas).
- Final: una revelación íntima que no mencione lluvia.

Luego:
- Lista 10 metáforas nuevas para lluvia (no usadas en el poema).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-042",
    title: "Texto ‘mantra’ moderno: repetición que calma",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Mantra laico con repetición y cadencia para calmar o sostener.",
    prompt: `Dame:
- Para qué emoción (ansiedad, culpa, duelo, incertidumbre).
- Tono (suave, firme, protector).
- 3 símbolos (agua, luz, piedra, ventana).
- Longitud (200–300 palabras).

Escribe un texto-mantra:
- Repite 1 frase central 7 veces, cambiando una palabra cada vez.
- Frases cortas, respirables.
- Final: una instrucción concreta (acción mínima).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-043",
    title: "Poema ‘sin pronombres’: sin yo/tú/él (puro mundo)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema atmosférico sin pronombres personales: emoción por paisaje y objetos.",
    prompt: `Escribe un poema de 24–40 versos con reglas:
- No usar “yo”, “tú”, “él”, “ella”, “nosotros”, “ustedes”.
- Tema: pérdida o deseo (elige uno).
- Lugar específico y 10 objetos concretos.
- Final: una imagen que sugiera decisión.

Luego:
- 1 versión alternativa con pronombres, para comparar.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-044",
    title: "Poema con acrostico: mensaje oculto en vertical",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Acrostico con frase oculta, pero poema fluido y hermoso.",
    prompt: `Dame:
- Frase oculta (8–14 letras, sin espacios) para el acrostico.
- Tema y tono.
- 3 imágenes obligatorias.

Escribe un poema donde:
- La primera letra de cada verso forme la frase oculta (acrostico).
- Total de versos = longitud de la frase oculta.
- Que no parezca forzado: debe leerse natural.
- Final: golpe emocional (aunque sea acrostico).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-045",
    title: "Texto poético para marca personal: bio lírica (sin vender)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Bio poética de 120–180 palabras con identidad, ritmo y originalidad.",
    prompt: `Dame:
- Quién eres (rol).
- Qué te obsesiona.
- Qué prometes (sin vender).
- 5 objetos o escenas que te representan.
- Tono (suave, crudo, elegante).

Escribe una bio poética (120–180 palabras):
- 1 frase corta al inicio (2–6 palabras).
- 1 metáfora central sostenida.
- Final: una invitación mínima (ej. “quédate”, “lee”, “caminemos”).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-046",
    title: "Poema ‘culpa’: pedir perdón sin pedirlo",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema de culpa donde el perdón se sugiere por acciones y verdad, no por ‘lo siento’.",
    prompt: `Dame:
- Qué hiciste (o qué no hiciste).
- A quién afectó.
- Detalle concreto del daño.
- Qué harás distinto.
- Lugar simbólico.

Escribe un poema de 28–44 versos:
- Prohibido usar “perdón”, “lo siento”, “disculpa”.
- Debe quedar clarísimo que hay arrepentimiento.
- Final: acción concreta, no promesa abstracta.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-047",
    title: "Poema ‘madurez’: aprender a quedarse (o irse)",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema sobre madurez afectiva: decidir con calma, poner límites, sostener.",
    prompt: `Dame:
- Relación o situación.
- Decisión (quedarse/irse).
- Miedo.
- 3 recuerdos.
- Tono.

Escribe un poema de 26–44 versos:
- 3 líneas deben comenzar con “Aprendí…”.
- 2 líneas deben ser preguntas.
- Final: una definición de amor o paz (no cliché).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-048",
    title: "Texto ‘noche en vela’: insomnio como historia poética",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Insomnio narrado con objetos, pensamientos repetitivos y luz de pantalla.",
    prompt: `Dame:
- Motivo del insomnio.
- Hora y lugar.
- 5 objetos de la habitación.
- Un pensamiento que vuelve.
- Final (dormir/no dormir).

Escribe una prosa poética de 450–700 palabras:
- Párrafos cortos.
- Repite una frase 4 veces con variación.
- Final: un pequeño acto (apagar, respirar, escribir, abrir ventana).`,
    thumbnail: "",
  },
  {
    id: "crea-poe-049",
    title: "Poema ‘vida simple’: belleza en lo ordinario",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Celebración del día común: detalle, gratitud y calma sin azúcar.",
    prompt: `Dame:
- Rutina (mañana/tarde/noche).
- Lugar.
- 10 detalles cotidianos.
- Tono.
- Final deseado.

Escribe un poema de 28–44 versos:
- 10 detalles deben aparecer (uno por verso o estrofa).
- 2 metáforas discretas, no grandilocuentes.
- Final: una línea que sea ‘hogar’ en palabras.`,
    thumbnail: "",
  },
  {
    id: "crea-poe-050",
    title: "Poema ‘última línea viral’: construye hasta un cierre inolvidable",
    area: "Escritura Creativa",
    category: "Poesía & Textos",
    summary:
      "Poema diseñado para culminar en una última línea que golpea y queda.",
    prompt: `Dame:
- Tema.
- Tono.
- Escena.
- Palabra final obligatoria (si no, inventa 5 opciones).

Escribe un poema de 24–38 versos:
- Debe preparar progresivamente la última línea (sin que se vea venir).
- 3 imágenes recurrentes que se repitan con variación.
- Final: una sola línea (máx. 10 palabras) que termine con la palabra obligatoria.

Luego:
- Dame 10 opciones de última línea alternativa (igual de fuertes).`,
    thumbnail: "",
  },
];
