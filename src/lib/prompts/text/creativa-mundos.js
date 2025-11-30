// src/lib/prompts/text/creativa-mundos.js

export const textPromptsCreativaMundos = [
  {
    id: "crea-mundos-001",
    title: "Biblia del mundo (versión completa, coherente y jugable)",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Construye una biblia de mundo completa: historia, geografía, política, economía, cultura, conflictos y secretos.",
    prompt: `Actúa como showrunner + diseñador de mundos + editor de continuidad. Voy a crear un mundo original y necesito una BIBLIA COMPLETA.

Primero pregúntame SOLO esto (en bullets):
1) Género (fantasía / sci-fi / realista / weird).
2) Tono (luminoso / oscuro / satírico / épico).
3) Época/tecnología (medieval, industrial, futurista, etc.).
4) Tema central (ej: libertad vs control, fe vs ciencia).
5) Una imagen mental (una frase).

Luego entrega una biblia de mundo con este esquema, con detalles concretos y sin contradicciones:

A) LOG-LINE DEL MUNDO (2–3 frases) + promesa narrativa.
B) MAPA MENTAL (sin dibujo): 6 regiones, cada una con: clima, bioma, recurso clave, amenaza, estética.
C) HISTORIA PROFUNDA: línea de tiempo con 12 hitos (cada uno: causa → evento → consecuencia).
D) SISTEMA DE PODER: 3 fuerzas (estado/iglesia/corporación/clanes) + cómo se sostienen + qué temen perder.
E) ECONOMÍA Y VIDA DIARIA: moneda, comercio, trabajo típico, hambre/abundancia, qué se considera “lujo”.
F) CULTURA: 5 costumbres, 5 tabúes, 5 proverbios, 5 fiestas/rituales (con origen).
G) TECNOLOGÍA/MAGIA: reglas claras, costos, limitaciones, trampas narrativas a evitar, “mala praxis”.
H) CONFLICTO ACTUAL: 3 guerras frías, 2 guerras abiertas, 1 crisis ecológica/social.
I) 10 LOCACIONES ICÓNICAS (cada una: descripción sensorial + por qué importa + giro oculto).
J) 10 PERSONAJES POTENCIALES (rol, deseo, contradicción, secreto del mundo que revela).
K) 12 GANCHOS DE HISTORIA (tramas cortas escalables) + 3 “misterios largos”.
L) CONTINUIDAD: lista de 10 reglas para no romper la coherencia.

Estilo: cinematográfico pero claro, con nombres memorables (no genéricos).`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-002",
    title: "Mapa narrativo: 7 regiones con conflicto propio",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña regiones que generen historias: recursos, tensiones, fronteras, migraciones y peligros.",
    prompt: `Actúa como cartógrafo narrativo. Crea un “mapa” descrito en texto con 7 regiones conectadas.

Dame salida en este formato:

1) NOMBRE DE REGIÓN
- Bioma/clima:
- Estética (colores, arquitectura, vibra):
- Recurso/riqueza:
- Peligro natural:
- Peligro humano:
- Leyes raras o costumbres:
- Qué quiere exportar/importar:
- Conflicto interno (1):
- Conflicto con vecino (1):
- Lugar icónico (1):
- Rumor/leyenda (1) que sea falso a medias:
- “Regla de supervivencia” local (1 frase):

Conexiones globales:
- 3 rutas comerciales (con peajes/mafias/monstruos/huelgas).
- 2 rutas clandestinas (quién las controla y por qué).
- 1 frontera imposible (por qué casi nadie la cruza).
- 1 zona de disputa (qué pasa si alguien la controla).

Extra:
- 10 nombres de asentamientos (variados).
- 10 apellidos típicos por región (2 por región, +1 extra).

No uses clichés de fantasía genérica; inventa detalles concretos que disparen escenas.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-003",
    title: "Sistema de magia/tecnología con reglas duras y costos",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea un sistema con reglas, límites, costos, profesiones y consecuencias sociales.",
    prompt: `Actúa como diseñador de sistemas (tipo hard magic / hard sci-fi). Construye un sistema de poder (magia o tecnología) con reglas estrictas.

Incluye:
1) Premisa (1 párrafo): qué es, de dónde viene, por qué existe.
2) 7 reglas inviolables (enunciadas como leyes).
3) 7 costos/peajes (físicos, mentales, sociales, legales).
4) 5 límites “duros” (cosas que NO se pueden hacer).
5) 6 fallos comunes (errores de novatos) y qué provocan.
6) 8 aplicaciones prácticas (medicina, guerra, agricultura, transporte, arte, vigilancia, etc.).
7) 5 profesiones derivadas (oficios) + gremios/sindicatos.
8) 4 delitos típicos relacionados con el sistema + castigos.
9) 3 debates éticos reales en la sociedad (posturas A y B).
10) 5 frases populares/insultos/jergas nacidas del sistema.
11) “Cómo se ve” en escena: 10 detalles sensoriales (sonido, olor, textura, luz).

Finalmente:
- 3 formas en que el protagonista podría romper una regla… y el precio exacto.
- 3 maneras de hacer ‘power creep’ sin romper coherencia (evolución controlada).`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-004",
    title: "Religión dominante + herejías + milagros dudosos",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña una religión viva: teología, rituales, poder político, herejías y milagros ambiguos.",
    prompt: `Actúa como antropólogo + guionista. Diseña una religión dominante del mundo (y sus fracturas) con ambigüedad interesante.

Estructura:
A) Mito fundacional (3 versiones contradictorias: oficial, popular, prohibida).
B) Deidad/principio: qué exige, qué promete, qué prohíbe.
C) Ritual semanal: pasos exactos, símbolos, objetos, música, vestimenta.
D) 5 santos/héroes/figuras: por qué son ejemplo y qué ocultaron.
E) Clero y jerarquía: rangos, privilegios, corrupción típica.
F) Economía de la fe: diezmo, reliquias, peregrinación, negocio colateral.
G) 6 tabúes + la razón “espiritual” y la razón “política”.
H) 4 herejías: qué creen, por qué atraen, cómo las persiguen.
I) Milagros: 6 “milagros” famosos con evidencia parcial (¿real o propaganda?).
J) Un cisma actual: qué lo disparó, quién gana si vence.

Cierre:
- 10 oraciones/rezos cortos (uno para: guerra, parto, duelo, viaje, mentira).
- 10 detalles de ambientación para escenas en templos/rituales.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-005",
    title: "Imperio, rebelión y provincia: dinámica política realista",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea un conflicto centro-periferia con economía, propaganda, miedo, sobornos y cultura.",
    prompt: `Actúa como estratega político + historiador. Diseña un imperio (centro) y 3 provincias (periferia) al borde de la rebelión.

Incluye:
1) El Imperio: ideología oficial, propaganda (3 slogans), instituciones (5), debilidad estructural (1), paranoia (1).
2) Provincias (3): para cada una:
- Qué produce / qué le extraen
- Qué odia del centro
- Qué envidia del centro
- Qué vende en el mercado negro
- Figura local carismática (1) y su contradicción
- Motivo “noble” de rebelión + motivo “feo” real
3) Disparador de crisis: evento concreto (fecha, lugar, víctimas, culpables oficiales).
4) Respuesta del centro: 3 medidas (una inteligente, una cruel, una estúpida).
5) Respuesta rebelde: 3 tácticas (una popular, una terrorífica, una simbólica).

Final:
- 10 escenas posibles (en plazas, fronteras, tribunales, tabernas, estaciones, etc.)
- 5 secretos que cambian el sentido moral del conflicto.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-006",
    title: "Ecología del mundo: biomas, cadenas alimenticias y monstruos creíbles",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Haz que el mundo se sienta real: clima, recursos, fauna, depredadores y consecuencias ecológicas.",
    prompt: `Actúa como biólogo/ecólogo de ficción. Diseña la ecología de un mundo: no solo criaturas, sino sistemas.

Entrega:
A) Clima global: 3 corrientes, 2 zonas de tormentas, 1 anomalía.
B) 4 biomas principales: en cada uno:
- Plantas dominantes (3) y una rara (1)
- Fauna típica (3) y un depredador ápice (1)
- Adaptaciones (camuflaje, veneno, simbiosis, etc.)
- Riesgo humano (enfermedad, hambre, pérdida de cosecha)
C) 2 cadenas alimenticias completas (desde productor hasta ápice) y qué pasa si se rompe un eslabón.
D) 3 “monstruos” plausibles: origen evolutivo, dieta, territorio, señales de presencia, cómo evitarlo.
E) Interacción con humanos: caza, domesticación, granjas, plagas, comercio.

Bonus:
- 10 microdetalles sensoriales que hagan sentir el bioma en escenas.
- 5 mitos locales basados en malinterpretaciones ecológicas.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-007",
    title: "Ciudad icónica: urbanismo, barrios, crimen y costumbres",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña una ciudad viva con barrios, tensiones, servicios, olores, sonidos y secretos.",
    prompt: `Actúa como urbanista + novelista. Diseña una ciudad principal del mundo que se sienta HABITADA.

Incluye:
1) Nombre + apodo + por qué se ganó el apodo.
2) Geografía: río/colina/costa/subsuelo + cómo condiciona todo.
3) 8 barrios: para cada uno (1 párrafo) con:
- Qué se ve/oye/oluele
- Quién vive ahí
- Qué se compra/vende
- Peligro típico
- Un lugar icónico del barrio
4) Infraestructura: agua, basura, iluminación, transporte, vigilancia.
5) Poder: quién manda de verdad (no el alcalde), y cómo compra lealtades.
6) Crimen: 3 mercados negros + 3 estafas comunes + 1 banda con código moral raro.
7) Cultura: comida callejera (5), insulto local (3), gesto de respeto (1), tabú urbano (2).
8) “Reloj de crisis”: 6 eventos escalonados que podrían estallar en 30 días.

Cierre:
- 10 ideas de escenarios listos para capítulos/episodios.
- 5 secretos enterrados en la ciudad (literal o metafórico).`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-008",
    title: "Reglas de viaje y logística: distancias, riesgos y recursos",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea reglas de viaje realistas que definan aventuras: tiempos, clima, peajes, permisos y rutas.",
    prompt: `Actúa como diseñador de aventuras realistas. Define reglas de viaje y logística del mundo para que el viaje tenga peso.

Incluye:
A) Unidades: cómo miden distancia/tiempo localmente (y equivalencias).
B) Transporte (6 tipos): costo, velocidad, capacidad, riesgos, quién lo controla.
C) Documentos: 5 permisos/pases/visas y cómo se falsifican.
D) Peajes y sobornos: 5 puntos de cobro, cuánto cuesta, qué pasa si no pagas.
E) Clima estacional: 4 estaciones y cómo afecta rutas/mercados/enfermedades.
F) Peligros: 10 peligros de ruta (humanos/naturales/sistémicos) y cómo se ven antes de caer en ellos.
G) Reglas de provisiones: raciones, agua, medicina, herramienta esencial (lista exacta).

Final:
- 3 rutas “seguras” que en realidad no lo son (trampa).
- 3 rutas “imposibles” que sí se pueden con el conocimiento correcto.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-009",
    title: "Lengua, nombres y etimologías para coherencia cultural",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea patrones lingüísticos: fonética, sufijos, nombres y términos clave sin sonar aleatorio.",
    prompt: `Actúa como lingüista de ficción. Crea un sistema sencillo para nombres y términos del mundo que mantenga coherencia cultural.

Dame:
1) 2 culturas/idiomas principales (A y B) y su “sonido” (fonemas preferidos, ritmo, letras comunes).
2) 12 reglas de nombres:
- Cómo se forman nombres propios
- Apellidos (patronímicos, oficio, lugar, etc.)
- Títulos y honoríficos
- Tabúes al nombrar
3) Listas:
- 30 nombres de persona cultura A (15 F / 15 M o neutros)
- 30 nombres de persona cultura B
- 20 apellidos A, 20 apellidos B
- 20 topónimos (lugares) A, 20 topónimos B
4) 30 palabras clave del mundo (moneda, cargos, insultos, comida, ferias, religión), con significado y nota de uso.

Regla: evita nombres “random fantasy”. Todo debe parecer que viene de la misma raíz cultural.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-010",
    title: "Historia en capas: mito, relato oficial y verdad enterrada",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Estructura la historia del mundo con capas contradictorias para misterio y revelaciones.",
    prompt: `Eres un historiador narrativo. Construye la historia del mundo en 3 capas: mito, versión oficial y verdad enterrada.

Entrega:
A) EL MITO (cuento de fogata, 500–800 palabras): simbólico y exagerado.
B) LA VERSIÓN OFICIAL (cronología escolar): 10 puntos con lenguaje institucional.
C) LA VERDAD ENTERRADA: 10 puntos que contradicen o retuercen lo oficial, con evidencia (cartas, ruinas, fósiles, grabaciones).

Luego:
- 7 “piezas de evidencia” (objetos/documentos) que podrían aparecer en la trama.
- 5 personas/instituciones que se benefician de ocultarlo.
- 3 maneras graduales de revelar la verdad sin info-dumps (escenas sugeridas).`,
    thumbnail: "",
  },

  // ---- 40 más, variados pero misma category "Mundos" ----

  {
    id: "crea-mundos-011",
    title: "Mundo post-catástrofe: qué se rompió y qué nació después",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña un mundo tras un colapso: recursos, jerarquías, mitos nuevos y tecnologías sobrevivientes.",
    prompt: `Actúa como diseñador de mundo post-catástrofe (no genérico). Crea una catástrofe y sus consecuencias realistas.

Incluye:
1) La catástrofe: qué fue EXACTAMENTE, duración, señales tempranas ignoradas.
2) Tres etapas (0–6 meses / 1–5 años / 20+ años): cómo cambia vida diaria y poder.
3) Recursos críticos (5): quién los controla, cómo se roban, cómo se protegen.
4) Tecnología: qué se perdió, qué se conserva, qué se “imita mal”.
5) Nueva cultura: 5 supersticiones nacidas del trauma + 3 fiestas nuevas.
6) Nuevas clases sociales: 4 grupos, su estatus, su resentimiento.
7) El “nuevo mapa”: 6 zonas (segura, tóxica, sagrada, saqueada, etc.).
8) Conflicto actual: el gran dilema moral del presente.

Cierre: 12 semillas de historia y 1 gran secreto sobre la catástrofe.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-012",
    title: "Mundo utópico que esconde una falla estructural",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea una utopía convincente y el defecto inevitable que la rompe desde dentro.",
    prompt: `Diseña una utopía CREÍBLE (no caricatura) y luego revela su falla estructural.

Estructura:
A) “Por qué funciona”: 7 mecanismos (economía, educación, salud, justicia, energía, vivienda, cultura).
B) Vida cotidiana: un día en la vida de 3 personas de clases distintas.
C) Cómo se resuelven conflictos sin violencia (procedimientos reales).
D) Qué sacrificios hacen (lo que no te dicen): 6 costos invisibles.
E) La falla estructural: 1 contradicción inevitable (con ejemplos).
F) El primer síntoma: escena concreta donde se rompe algo.
G) Grupos: 3 defensores del sistema y 3 opositores (cada uno con argumentos fuertes).

Final: 10 conflictos listos para tramas sin convertirlo en “malvado obvio”.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-013",
    title: "Mundo de islas y piratería: economía, rutas y códigos",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea un archipiélago: rutas, monzones, puertos, contrabando y política del mar.",
    prompt: `Crea un mundo de archipiélago con piratería y comercio. Quiero logística y cultura marinera realista.

Incluye:
1) 9 islas principales: nombre, bioma, recurso, puerto, peligro.
2) Estaciones de navegación: vientos/monzones y ventanas de viaje.
3) 4 potencias navales: objetivos, flotas, propaganda, debilidad.
4) Piratería: 3 tipos (idealistas, mafias, corsarios legales) + códigos distintos.
5) Economía: qué mueve el mundo (sal, té, pólvora, coral, datos, etc.), cómo se paga, qué se prohíbe.
6) Ley del mar: 8 reglas (rescate, botín, traición, refugio).
7) Religión/superstición de marineros: 10 rituales antes de zarpar.

Cierre:
- 10 conflictos de puerto
- 5 mapas del tesoro falsos (y por qué engañan).`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-014",
    title: "Mundo cyberpunk: corporaciones, barrios y tecnología social",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Construye un cyberpunk con economía, vigilancia, propaganda y subculturas reales.",
    prompt: `Diseña un mundo cyberpunk con enfoque SOCIAL (no solo neón). Debe sentirse como sistema.

Incluye:
1) 5 corporaciones: producto real, monopolio, táctica de control, escándalo enterrado.
2) 6 capas de la ciudad: desde penthouse a subsuelo/zonas sin ley (cómo se sube/baja).
3) Tecnología cotidiana: 10 cosas que la gente usa a diario + 5 fallas comunes.
4) Vigilancia: quién mira a quién, qué se puede comprar para “desaparecer”.
5) Subculturas: 6 tribus urbanas con estética + reglas + conflicto interno.
6) Economía de supervivencia: 8 trabajos grises (semi-legales) y cómo te explotan.
7) Lenguaje: 20 términos de jerga (con definición y contexto).

Cierre: 12 ganchos de historia y 1 revolución que podría ser marketing.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-015",
    title: "Mundo de desierto: agua, honor, caravanas y ciudades-oasis",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea un mundo donde el agua es el centro del poder: leyes, mercados, viajes y rituales.",
    prompt: `Diseña un mundo dominado por desiertos donde el agua define política, religión y supervivencia.

Incluye:
A) Geografía: 5 tipos de desierto (sal, roca, dunas, ceniza, vidrio) y sus peligros.
B) Agua: 6 fuentes (oasis, acuíferos, hielo, condensadores, etc.) + quién controla cada una.
C) Leyes del agua: 10 reglas (derecho, castigo, herencia, hospitalidad, guerra).
D) Caravanas: rutas, escoltas, animales/vehículos, señales, bandidos.
E) Ciudades-oasis (3): barrios, economía, corrupción, festival principal.
F) Cultura: 8 rituales relacionados con el agua + 5 proverbios.

Cierre:
- 10 escenas poderosas de tensión por agua
- 5 “mapas” falsos de oasis (y por qué existen).`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-016",
    title: "Continente congelado: recursos, aislamiento y mitos del hielo",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Desarrolla un mundo polar: supervivencia, comercio, fauna, enfermedades y culto al frío.",
    prompt: `Diseña un continente helado donde vivir es una elección política.

Incluye:
1) Temperaturas y estaciones: 4 periodos del año + qué cambia (luz, viaje, caza).
2) Recursos: 6 recursos (minerales, algas, calor geotérmico, pieles, datos, etc.) y su conflicto.
3) Asentamientos: 6 tipos (cúpulas, cuevas, barcos congelados, etc.) con ventajas y fallas.
4) Enfermedades y riesgos: 8 (físicos y psicológicos).
5) Cultura: 8 rituales del frío + 5 tabúes + 3 canciones populares (tema).
6) “Mito del hielo”: 3 versiones del mismo mito que dividió a la gente.

Cierre:
- 10 ganchos de historia
- 1 secreto escondido bajo el hielo que reescribe la historia.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-017",
    title: "Economía mundial: precios, monopolios y crisis (sin aburrir)",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Define cómo se mueve el dinero y por qué hay crisis: comercio, moneda, bancos y contrabando.",
    prompt: `Actúa como economista narrativo. Crea una economía mundial fácil de entender pero profunda.

Incluye:
A) Moneda(s): 2 monedas oficiales + 1 alternativa (trueque/cripto/vales) y por qué existe.
B) 8 bienes esenciales y su cadena de suministro (quién produce, quién transporta, quién cobra).
C) 3 monopolios: cómo nacieron, cómo aplastan competencia, cuál es su talón de Aquiles.
D) Impuestos/peajes: 5 formas de recaudar y cómo la gente evade cada una.
E) Mercado negro: 6 productos y 4 rutas.
F) Crisis actual: causa real, causa oficial, chivo expiatorio, ganadores ocultos.
G) “Precios aproximados”: lista de 20 cosas cotidianas (comida, alojamiento, transporte, sobornos) para dar escala.

Cierra con 12 escenas donde la economía genere conflicto dramático (no exposiciones).`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-018",
    title: "Mundo vertical: ciudades torre y clases por altura",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña un mundo donde la altura es estatus: infraestructura, clima, trabajo y rebelión.",
    prompt: `Diseña un mundo/civilización vertical (torres, riscos, megastructuras) donde la altura define clase social.

Incluye:
1) La estructura: cómo se construyó, quién la mantiene, qué pasa si falla.
2) Capas (7 niveles): nombre, aire/clima, seguridad, comida, trabajo, ocio, peligro.
3) Transporte vertical: 5 métodos + costos + sabotajes frecuentes.
4) Leyes por altura: 8 reglas absurdas pero funcionales.
5) Cultura: 5 símbolos de estatus y 5 insultos según altura.
6) Conflicto: 3 formas de resistencia (artística, técnica, violenta) + 1 infiltración.

Cierre: 10 locaciones y 10 escenas que sólo pueden ocurrir en verticalidad.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-019",
    title: "Mundo subterráneo: geología, luz, comida y psicología",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea un mundo bajo tierra: recursos, hongos, religiones de la oscuridad y amenazas.",
    prompt: `Diseña una civilización subterránea completa y coherente.

Incluye:
A) Geología: 4 capas (profundidad) con materiales y riesgos.
B) Luz: 5 fuentes (bioluminiscencia, cristales, reactores, etc.) + su función social (quién controla la luz).
C) Alimentación: 6 fuentes (hongos, insectos, peces ciegos, cultivo, etc.) y su economía.
D) Cultura de la oscuridad: 6 rituales + 5 metáforas comunes + 3 miedos colectivamente aprendidos.
E) Amenazas: 8 (derrumbes, gases, criaturas, guerras por túneles).
F) Cartografía: cómo se orientan sin cielo (técnicas, instrumentos, errores comunes).

Cierre:
- 10 lugares icónicos subterráneos
- 1 verdad sobre “la superficie” que nadie acepta.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-020",
    title: "Mundo flotante: islas en el cielo y física interna",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña un mundo de islas flotantes: energía, recursos, viaje aéreo y conflictos por altitud.",
    prompt: `Crea un mundo de islas flotantes con reglas internas claras (física/magia/tecnología).

Incluye:
1) Por qué flotan: explicación y 5 consecuencias para sociedad/arquitectura.
2) Altitudes: 4 zonas del cielo con clima/peligros diferentes.
3) Viaje: 6 métodos (dirigibles, planeadores, “corrientes”, portales, etc.) con limitaciones reales.
4) Recursos: qué falta arriba (madera, metal, comida, agua, combustible) y cómo lo resuelven.
5) Política: 4 ciudades-isla (rivalidades, alianzas, chantajes).
6) Piratería aérea: 3 estilos, 3 armas, 3 tácticas.
7) Cultura: 10 supersticiones sobre el “abajo”.

Cierre: 12 ganchos de historia y 1 catástrofe aérea inminente.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-021",
    title: "Mundo de fronteras vivas: murallas, zonas de cuarentena y rumor",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea fronteras con vida: cuarentenas, controles, refugiados, contrabando y propaganda.",
    prompt: `Diseña un mundo donde las fronteras importan muchísimo (muro, cuarentena, zona maldita, frontera legal).

Incluye:
A) Por qué existe la frontera: amenaza real vs amenaza narrada.
B) Infraestructura fronteriza: torres, aduanas, sensores, patrullas, sobornos.
C) Poblaciones de frontera: 5 perfiles (migrantes, mercaderes, soldados, bandidos, curanderos).
D) Contrabando: 6 mercancías, 4 rutas, 3 técnicas de ocultamiento.
E) Propaganda: 6 mensajes del lado A y 6 del lado B, ambos “tienen razón” parcialmente.
F) Incidente gatillo: una muerte/infección/ataque que cambia la política.

Final: 10 escenas fronterizas con tensión + 5 secretos que invierten culpables.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-022",
    title: "Mundo con calendario y astronomía (fiestas, mareas, profecías)",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña un calendario propio y cómo afecta religión, agricultura, política y profecías.",
    prompt: `Diseña la astronomía y el calendario del mundo para que impacte la vida real.

Incluye:
1) Cielo: número de lunas/soles, constelaciones clave, anomalía astronómica.
2) Calendario: meses/estaciones/días festivos, cómo cuentan años, quién lo estandariza.
3) Impacto:
- Agricultura y cosechas
- Navegación
- Religión y rituales
- Economía (fechas de impuestos, ferias)
- Política (juramentos, elecciones)
4) 8 fiestas: nombre, origen, ritual, comida, peligro (siempre hay uno).
5) 3 profecías astronómicas: 1 verdadera, 1 falsa útil, 1 mal interpretada.

Cierre: 10 detalles para describir el cielo en escenas sin repetirte.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-023",
    title: "Arquitectura del mundo: materiales, clima y estética coherente",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea estilos arquitectónicos por región y por clase social, con función y simbolismo.",
    prompt: `Actúa como arquitecto/arte conceptual. Diseña la arquitectura del mundo basada en clima, recursos y poder.

Entrega:
A) 5 materiales dominantes (piedra, barro, bambú, biocemento, etc.) y por qué.
B) 4 estilos regionales: cada uno con:
- Silueta/forma general
- Solución a clima (viento/lluvia/calor/frío)
- Decoración simbólica (qué comunica)
- Interior: distribución típica y privacidad
C) Diferencias por clase social: techo, ventanas, puertas, iluminación, seguridad.
D) Edificios clave: templo, mercado, tribunal, escuela, morgue, cárcel, hospital (cómo son y qué huelen).
E) 10 detalles “cinematográficos” para describir sin planos técnicos.

Cierre: 10 locaciones listas para escenas + 5 secretos escondidos en diseño.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-024",
    title: "Mundo basado en un material raro (sal, ámbar, obsidiana, coral...)",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea un mundo donde un material cambia todo: economía, religión, guerra y arte.",
    prompt: `Elige UN material raro como eje del mundo (o pregúntame cuál) y construye el mundo alrededor.

Incluye:
1) Material: propiedades reales/ficcionales y por qué es valioso.
2) Extracción: dónde se encuentra, quién trabaja, riesgos y accidentes típicos.
3) Economía: precios, monopolios, contrabando, falsificaciones.
4) Religión: qué significa simbólicamente, rituales y reliquias.
5) Guerra: 3 armas/defensas/tecnologías basadas en el material.
6) Arte: 6 usos culturales (moda, arquitectura, música, tatuajes, etc.).
7) Consecuencia ecológica: qué se destruye para extraerlo.

Cierra con:
- 10 ganchos de historia
- 5 “mentiras comunes” sobre el material y por qué convienen.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-025",
    title: "Mundo con leyes extrañas (pero funcionales) y su origen",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Genera leyes memorables que nacen de un trauma histórico, una tecnología o un monstruo.",
    prompt: `Crea 20 leyes extrañas del mundo que sean funcionales (no random). Para cada ley:

- La ley (texto simple)
- Origen (evento histórico/amenaza/tecnología)
- Quién la impuso y por qué
- Cómo se usa para abusar del poder
- Cómo la gente común la evade o “la cumple de mentira”
- Una escena donde se aplica (micro-escena de 3–4 líneas)

Además:
- 5 “leyes no escritas” (normas sociales más fuertes que la ley).
- 3 reformas en discusión que podrían detonar una revolución.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-026",
    title: "Mundo con genocidio/trauma histórico (tratado con respeto)",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Desarrolla un trauma colectivo con memoria, reparación, negacionismo y efectos generacionales.",
    prompt: `Diseña un evento traumático histórico del mundo (guerra, desplazamiento, catástrofe) con enfoque humano y respeto. Evita morbo.

Incluye:
1) Antes: cómo era la vida (3 viñetas cotidianas).
2) El evento: qué ocurrió, quiénes fueron afectados, qué se perdió.
3) Después:
- Desplazamiento y diáspora
- Cambios de idioma/nombres/rituales
- Economía y tierras
4) Memoria: 3 formas de recordar (monumentos, canciones, relatos) y 2 formas de borrar (censura, propaganda).
5) Conflicto actual: reparación vs venganza vs olvido (posturas con argumentos fuertes).
6) 6 escenas posibles que muestren trauma sin explicarlo.

Cierre: 5 objetos simbólicos (reliquia, carta, prenda, receta, mapa) que guardan historia.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-027",
    title: "Mundo con IA/Oráculo: verdad, predicción y libre albedrío",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Explora un sistema oracular (IA o magia) que predice y reordena la sociedad, con consecuencias éticas.",
    prompt: `Crea un mundo donde existe un ORÁCULO (IA, algoritmo, magia, red de profetas) que predice comportamientos/eventos.

Incluye:
A) Qué predice, con qué precisión y qué NO puede predecir.
B) Quién controla acceso (precio, permisos, castas).
C) Instituciones creadas alrededor: 5 (tribunales preventivos, seguros, matrimonios, empleo, policía).
D) Efectos sociales: 8 cambios en citas, negocios, crimen, fe, arte, educación.
E) Mercado negro de predicciones: 5 productos (predicciones robadas, falsificadas, etc.).
F) Paradojas: 6 (autocumplidas, sabotajes, “ruido”).
G) Conflicto: 3 movimientos anti-oráculo, 3 pro-oráculo.

Cierre: 10 ganchos de historia y 1 secreto del oráculo (por qué miente a veces).`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-028",
    title: "Mundo con memoria como moneda: mercado, crimen y amor",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña un mundo donde se comercia memoria: quién paga, quién pierde identidad y quién manipula.",
    prompt: `Diseña un mundo en el que los recuerdos pueden extraerse, almacenarse y comerciarse.

Incluye:
1) Tecnología/magia: cómo se extraen, formatos, degradación, riesgos.
2) Economía: quién compra recuerdos (5 perfiles) y por qué; precios aproximados.
3) Ley: 8 crímenes de memoria (fraude, extorsión, “implantación”, etc.) y castigos.
4) Cultura: 6 rituales y 6 tabúes (¿se considera infidelidad vender ciertos recuerdos?).
5) Política: 3 usos estatales (vigilancia, propaganda, justicia) y 2 resistencias.
6) Vida cotidiana: 3 escenas de gente común usando recuerdos (ternura, horror, comedia).
7) El gran dilema: ¿qué es “yo” sin mis recuerdos?

Cierre: 12 tramas posibles y 5 objetos/archivos que esconden verdades.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-029",
    title: "Mundo con estaciones extremas: sociedad adaptada al ciclo",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea estaciones que lo cambian todo: migraciones, gobierno, guerras y ritos por temporada.",
    prompt: `Diseña un mundo con estaciones EXTREMAS (ej: noche de 6 meses, lluvias de 3 meses, vientos asesinos, etc.).

Incluye:
A) El ciclo anual: 4 fases con duración y efectos físicos exactos.
B) Adaptaciones humanas: arquitectura, ropa, dieta, energía, transporte.
C) Gobierno estacional: cómo cambian leyes/impuestos/ejército según fase.
D) Migraciones: quién se mueve, rutas, conflictos por paso.
E) Religión: 6 rituales para “convencer” a la estación.
F) Crimen: 6 delitos típicos por fase (por escasez/oportunidad).
G) Guerra: por qué se pelea en una fase y se negocia en otra.

Cierre: 10 escenas por fase y 3 secretos sobre el origen del ciclo.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-030",
    title: "Mundo con administración brutal: burocracia como villano",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña un sistema burocrático opresivo: formularios, permisos, colas, castigos y resistencia.",
    prompt: `Diseña un mundo donde la burocracia es el verdadero monstruo (sin caricatura). Quiero procedimientos, documentos y consecuencias.

Incluye:
1) La institución central: nombre, misión oficial, misión real.
2) 10 documentos/formatos obligatorios (con nombres y propósito).
3) 8 puntos de fricción: colas, sellos, inspecciones, cuotas, idiomas, etc.
4) Corrupción: 6 sobornos con “tarifa” y 4 estafas de funcionarios.
5) Castigos: 6 sanciones escalonadas (administrativas → penales).
6) Resistencia: 4 tácticas (hacking, sabotaje, arte, infiltración) y riesgos.
7) Vida cotidiana: escena de 500 palabras de alguien intentando resolver algo simple.

Cierre: 10 conflictos perfectos para historias.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-031",
    title: "Mundo con deporte/ritual central que sostiene la sociedad",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea un juego/deporte/ritual como columna vertebral política, económica y cultural.",
    prompt: `Crea un mundo donde un deporte o ritual competitivo estructura la sociedad.

Incluye:
A) El juego: reglas claras, objetivo, duración, roles, equipamiento, árbitros.
B) Origen histórico: por qué empezó y cómo se volvió sagrado/industrial.
C) Economía: entradas, apuestas, academias, sponsors, corrupción.
D) Política: cómo se usa para pacificar, reclutar, distraer o legitimar poder.
E) Cultura: 10 canciones/cantos, 10 insultos, 5 gestos de fans, 3 supersticiones.
F) Sombra: 6 escándalos típicos (dopaje, arreglos, chantaje).
G) Historia: 10 ganchos (jugador, entrenador, fanático, periodista, policía).

Cierre: 1 final de temporada épico y 1 verdad oscura que nadie quiere ver.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-032",
    title: "Mundo con “zonas prohibidas” y ciencia/mito alrededor",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña zonas prohibidas con reglas, señales, guardianes y secretos graduales.",
    prompt: `Diseña 3 zonas prohibidas del mundo (prohibidas por ley, miedo o física) y construye su mito.

Para cada zona:
- Nombre
- Por qué se prohíbe (versión oficial vs versión real)
- Señales de aproximación (3)
- Guardianes/defensas (humanas y no humanas)
- Qué recurso/tentación hay dentro
- 3 historias “de alguien que entró” (una verdadera, una exagerada, una mentira útil)
- Cómo podrían entrar protagonistas (2 métodos posibles)
- Qué cambia a quien sale (costo exacto)

Cierre: 10 escenas de exploración sin info-dump y 1 secreto compartido entre las 3 zonas.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-033",
    title: "Mundo con clases/razas/especies: integración sin clichés",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Define pueblos/especies con cultura, economía y conflicto evitando estereotipos vacíos.",
    prompt: `Crea 4 pueblos/especies/clases sociales del mundo evitando clichés. Quiero complejidad humana.

Para cada grupo:
1) Nombre + autodenominación + cómo los llaman otros (y por qué).
2) Organización social (familia, trabajo, propiedad).
3) Economía: qué producen, qué importan, qué monopolizan.
4) Cultura: 5 valores, 5 costumbres diarias, 5 tabúes.
5) Lenguaje: 5 expresiones idiomáticas.
6) Conflicto interno: 2 facciones y su debate.
7) Conflicto externo: 2 tensiones con otros grupos + un evento reciente.
8) “Cosa admirable” y “cosa terrible” del grupo (ambas reales).

Cierre:
- 8 escenas de convivencia (amor, mercado, escuela, hospital, tribunal)
- 5 errores típicos al representarlos (y cómo evitarlos).`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-034",
    title: "Mundo noir: moral gris, instituciones y secretos urbanos",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Construye un mundo noir: corrupción, chantaje, prensa, policía y crimen con capas.",
    prompt: `Diseña un mundo noir (urbano o futurista) donde el poder siempre tiene precio.

Incluye:
1) Instituciones (6): policía, prensa, justicia, sindicato, iglesia/club, corporación.
2) Para cada institución: qué vende, qué oculta, y qué teme.
3) Crimen organizado: 3 familias/bandas con estilos diferentes.
4) Corrupción: 8 “formas elegantes” de comprar gente.
5) Un caso famoso sin resolver: cronología, sospechosos, evidencia contradictoria.
6) Ambientación: 20 detalles sensoriales recurrentes (lluvia, humo, neón, olor, música).
7) Regla moral del mundo: 5 dilemas donde todos pierden algo.

Cierre: 12 ganchos noir y 1 final agridulce posible.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-035",
    title: "Mundo rural profundo: tradición, modernidad y conflicto silencioso",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea un mundo rural con tensiones reales: tierras, herencias, rumor, religión y migración.",
    prompt: `Diseña una región rural profunda (no idealizada) con tensión entre tradición y cambio.

Incluye:
A) Territorio: geografía, clima, cultivos/ganado, riesgos.
B) Comunidad: 8 roles clave (partera, maestro, cura, cacique, etc.) y sus secretos.
C) Economía: ingresos reales, deudas, dependencia, mercado negro.
D) Rumor y reputación: 10 chismes y qué parte es verdad.
E) Conflicto: un proyecto externo que amenaza todo (presa, mina, base, carretera).
F) Cultura: 6 rituales, 6 frases típicas, 3 canciones/leyendas.

Cierre:
- 10 escenas de pueblo
- 5 giros donde “lo simple” era complejo.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-036",
    title: "Mundo oceánico: ciudades submarinas y presión política",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña civilización bajo el mar: presión, energía, alimento, psicología y fronteras acuáticas.",
    prompt: `Diseña un mundo oceánico con asentamientos submarinos y conflictos por presión/oxígeno.

Incluye:
1) Tecnología/biología para vivir abajo: 6 herramientas clave y 6 fallos mortales.
2) Energía: 4 fuentes (geotermia, mareas, bio, etc.) + quién las controla.
3) Alimento: 6 fuentes y su economía.
4) Política: 4 ciudades submarinas con rivalidades.
5) Seguridad: piratería submarina, sabotaje, terrorismo de compuertas.
6) Cultura: 10 supersticiones del mar profundo, 5 tabúes, 5 gestos.
7) Fauna: 6 criaturas creíbles y cómo afectan rutas.

Cierre: 10 ganchos y 1 catástrofe de presión en cadena.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-037",
    title: "Mundo con arte como poder: censura, escuelas y mercado",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea un mundo donde el arte (música, pintura, escritura) tiene poder literal o político.",
    prompt: `Diseña un mundo donde el arte tiene poder (literal o social) y por eso se controla.

Incluye:
A) Qué artes importan (3) y cómo “funcionan” (poder, influencia, control).
B) Instituciones: 3 academias/escuelas y 2 organismos de censura.
C) Mercado del arte: 6 productos, 4 estafas, 3 coleccionistas peligrosos.
D) Subterráneo: 4 movimientos artísticos clandestinos y su manifiesto.
E) Conflicto: un artista desaparecido con obra que cambia el mundo.
F) Cultura: 10 frases, 10 hábitos, 5 rituales alrededor del arte.

Cierre: 12 ganchos de trama y 1 obra maestra que es un arma.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-038",
    title: "Mundo con medicina diferente: curación, permisos y ética",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Define cómo se cura la gente: hospitales, curanderos, costos, limitaciones y conflictos éticos.",
    prompt: `Diseña el sistema de salud/curación del mundo (realista y dramático).

Incluye:
1) Cómo se cura: 3 métodos (científico, tradicional, mágico/tecnológico) y sus límites.
2) Profesiones: 6 roles médicos y sus rivalidades.
3) Acceso: quién puede pagar, quién no, y qué existe para pobres (y su trampa).
4) Enfermedades del mundo: 8 (cada una con síntoma distintivo y estigma social).
5) Ética: 5 dilemas (triage, experimentos, eugenesia, permisos, aborto, etc.) según tu mundo.
6) Mercado negro: 6 productos/servicios y 3 redes de tráfico.

Cierre: 10 escenas clínicas intensas y 1 secreto de una cura que no quieren liberar.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-039",
    title: "Mundo con justicia particular: tribunales, pruebas y castigos",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea un sistema legal que genere historias: juicios, corrupción, evidencias y castigos simbólicos.",
    prompt: `Diseña el sistema de justicia del mundo (procedimientos concretos).

Incluye:
A) Filosofía legal: castigo vs reparación vs utilidad.
B) Procedimiento: desde denuncia hasta sentencia (pasos).
C) Pruebas: 8 tipos aceptados (testigos, reliquias, datos, juramentos, magia, etc.) y cómo se falsifican.
D) Castigos: 10 (de leves a extremos) con impacto social.
E) Corrupción: 6 fallas del sistema y quién se beneficia.
F) Casos famosos: 3 casos que dividieron al país y cambiaron leyes.

Cierre: 10 semillas de historias legales y 5 “lagunas” explotables por protagonistas.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-040",
    title: "Mundo de frontera tecnológica: colonia espacial realista",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea una colonia con límites físicos: oxígeno, radiación, política de recursos y psicología.",
    prompt: `Diseña una colonia espacial realista (en planeta/luna/estación). Quiero límites físicos que generen drama.

Incluye:
1) Locación: gravedad, radiación, clima/polvo, riesgos.
2) Infraestructura vital: aire, agua, comida, energía, reciclaje (cómo funciona y dónde falla).
3) Política: quién manda (empresa, estado, cooperativa) y por qué.
4) Economía: salarios, deudas, créditos, contrabando.
5) Psicología: 8 problemas comunes (aislamiento, claustrofobia, paranoia, duelo).
6) Cultura: 6 rituales para “sentirse humanos” + 6 tabúes.
7) Conflicto: 1 fallo en cadena + 3 bandos con planes opuestos.

Cierre: 12 ganchos y 1 secreto de por qué se fundó la colonia realmente.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-041",
    title: "Mundo con monstruo institucional: una agencia secreta",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea una agencia (o culto/orden) que controla información y opera con reglas internas.",
    prompt: `Diseña una agencia secreta del mundo (gobierno/corporación/orden religiosa) con coherencia.

Incluye:
A) Misión oficial vs misión real.
B) Estructura: 7 rangos y 3 departamentos (operaciones, análisis, limpieza, etc.).
C) Reglas internas: 12 reglas (y 4 castigos internos).
D) Reclutamiento: perfiles, pruebas, chantajes, juramentos.
E) Herramientas: 8 recursos (tecnológicos/mágicos) y sus límites.
F) Enemigos: 3 tipos (externo, interno, ideológico).
G) Escándalo: un fracaso histórico que intentan borrar.

Cierre: 10 tramas y 5 “documentos filtrados” que cambian todo.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-042",
    title: "Mundo con infancia/adolescencia distinta (educación y rito de paso)",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña crianza, escuela y ritos de paso que reflejen los valores y peligros del mundo.",
    prompt: `Diseña cómo crecen niños y adolescentes en este mundo (educación, trabajo, ritos, miedo).

Incluye:
1) Etapas: 4 etapas de edad y qué se espera en cada una.
2) Educación: quién enseña, qué se enseña de verdad, qué se censura.
3) Rito de paso central: qué se hace, riesgos, premio, trauma posible.
4) Trabajo temprano: 6 oficios juveniles y explotación típica.
5) Castigos y disciplina: 6 métodos y su justificación cultural.
6) Rebeldía: 4 subculturas juveniles y por qué nacen.

Cierre: 10 escenas formativas y 1 tradición que empieza a romperse.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-043",
    title: "Mundo con comida como identidad: platos, escasez y etiquetas",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea gastronomía con historia: ingredientes, rituales, estatus, hambre y comercio.",
    prompt: `Diseña la gastronomía del mundo para que sea un motor cultural real.

Incluye:
A) 12 ingredientes base (de distintas regiones) y cómo se obtienen.
B) 12 platos icónicos (4 callejeros, 4 caseros, 4 de élite):
- Ingredientes
- Preparación (resumen)
- Cuándo se come
- Qué simboliza
C) Escasez y hambre: 3 periodos históricos de crisis alimentaria y qué cambió.
D) Etiqueta: 10 reglas de mesa que delatan clase social.
E) Comercio: 6 rutas de especias/comida y conflictos.

Cierre: 10 escenas donde la comida sea tensión (no filler).`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-044",
    title: "Mundo con moda y símbolos: ropa por clima, clase y religión",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña vestimenta coherente con recursos y códigos: uniforme, accesorios, tabúes y señales.",
    prompt: `Diseña la moda/vestimenta del mundo con coherencia material y simbólica.

Incluye:
1) Materiales textiles (6) y quién puede usar cada uno.
2) 4 estilos regionales: paleta, silueta, piezas clave, accesorios.
3) Diferencias por clase social: qué se puede llevar y qué está prohibido.
4) Uniformes: 5 instituciones con uniformes (policía, clero, escuela, ejército, gremio) y su mensaje.
5) Símbolos: 10 signos en la ropa (colores, nudos, bordados) y qué comunican.
6) Tabúes: 6 errores de vestimenta que pueden provocar violencia.

Cierre: 10 descripciones cortas lista para introducir personajes en escena.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-045",
    title: "Mundo con rumores: red de información, prensa y chismes",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea el ecosistema de información: prensa, propaganda, mensajeros, filtraciones y paranoia.",
    prompt: `Diseña cómo circula la información en el mundo (rumor, prensa, mensajeros, redes, magia, etc.).

Incluye:
A) 6 canales de información: velocidad, costo, confiabilidad, quién controla.
B) 5 formas de censura y 5 formas de eludirla.
C) Propaganda: 8 técnicas y ejemplos concretos de mensajes.
D) Chisme: 12 tipos de rumor local (y quién lo fabrica).
E) Filtraciones: 4 tipos (documentos, testigos, arte, datos) y su impacto.
F) Crisis de “verdad”: 1 evento donde nadie sabe qué creer.

Cierre: 10 escenas con tensión informativa y 5 secretos que solo se sostienen por desinformación.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-046",
    title: "Mundo con esclavitud/servidumbre: economía, resistencia y dilemas",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Explora servidumbre con complejidad (sin morbo): estructuras, complicidad y resistencia.",
    prompt: `Diseña un sistema de servidumbre/esclavitud/colonato en el mundo con enfoque crítico y humano (sin romanticizar).

Incluye:
1) Forma del sistema: legal, deudas, castas, guerra, contratos.
2) Economía: quién se beneficia, qué industrias dependen, qué pasaría si cae.
3) Vida cotidiana: 3 escenas (trabajo, descanso, castigo) tratadas con respeto.
4) Complicidad: 5 grupos que lo sostienen y sus racionalizaciones.
5) Resistencia: 6 formas (fuga, sabotaje, sindicatos, arte, religión, espionaje).
6) Momento histórico: intento de abolición fallido y sus consecuencias.
7) Conflicto actual: reforma vs revolución vs “mejoras” cosméticas.

Cierre: 10 ganchos narrativos centrados en agencia y dignidad.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-047",
    title: "Mundo con monstruos como recurso (domesticación y ética)",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Diseña una sociedad que usa criaturas como recurso: transporte, energía, medicina, guerra y moral.",
    prompt: `Diseña un mundo donde criaturas/monstruos son un recurso económico (domesticados o cazados).

Incluye:
A) 6 criaturas: apariencia, dieta, comportamiento, peligro, uso humano.
B) Industria: granjas, cazadores, veterinarios, tráfico ilegal.
C) Ética: 3 debates (derechos, sufrimiento, riesgos ecológicos).
D) Seguridad: 6 accidentes típicos y protocolos.
E) Cultura: 6 proverbios, 4 festivales, 3 deportes basados en criaturas.
F) Conflicto: una criatura “clave” está desapareciendo y nadie admite por qué.

Cierre: 10 escenas y 1 secreto ecológico devastador.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-048",
    title: "Mundo con portales: geopolítica, economía y migración",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Define portales con reglas: quién los controla, cómo cambian comercio, guerra y cultura.",
    prompt: `Diseña un mundo con portales/teletransporte, pero con reglas y consecuencias realistas.

Incluye:
1) Portales: cómo funcionan, costos, restricciones, mantenimiento.
2) Red: cuántos hay, dónde están, quién los administra.
3) Economía: qué bienes se vuelven baratos/caros, qué industrias colapsan, qué nace nuevo.
4) Guerra: 4 estrategias militares con portales y 3 contramedidas.
5) Migración: quién se mueve, quién se queda atrapado, xenofobia.
6) Crimen: 6 delitos específicos (contrabando instantáneo, secuestro, etc.).
7) Cultura: 5 costumbres nacidas de vivir “cerca de un portal”.

Cierre: 10 ganchos y 1 “portal falso” usado como arma psicológica.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-049",
    title: "Mundo con monstruo metafísico: una regla del universo rota",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Crea un mundo donde una ley natural falla: tiempo, muerte, lenguaje, sombras o recuerdos.",
    prompt: `Elige una LEY DEL UNIVERSO que está rota en este mundo (tiempo, muerte, gravedad, lenguaje, sombra, identidad, etc.) y diseña consecuencias coherentes.

Incluye:
A) La ruptura: cómo se manifiesta y desde cuándo.
B) 10 efectos en vida cotidiana.
C) 6 profesiones nuevas que existen por la ruptura.
D) 6 crímenes nuevos.
E) Religión y filosofía: 3 interpretaciones y sus cultos.
F) Gobierno: 3 medidas de control (una efectiva, una brutal, una absurda).
G) Ciencia/magia: intentos de arreglarlo y por qué fallan.

Cierre: 12 ganchos y 1 verdad: la ley rota fue causada por alguien/algo.`,
    thumbnail: "",
  },
  {
    id: "crea-mundos-050",
    title: "Checklist final: coherencia del mundo + 20 preguntas letales",
    area: "Escritura Creativa",
    category: "Mundos",
    summary:
      "Audita tu mundo: preguntas que detectan huecos, clichés, incoherencias y oportunidades dramáticas.",
    prompt: `Actúa como editor de worldbuilding y hazme una AUDITORÍA. Te daré una descripción breve de mi mundo (o inventa una si no te doy).

Tu tarea:
1) Haz 20 preguntas letales de coherencia (economía, viaje, energía, clase, género, guerra, salud, información, clima, religión, etc.).
2) Señala 10 puntos donde suele haber clichés o incoherencias y cómo evitarlos.
3) Propón 8 “restricciones” que hagan el mundo más interesante (reglas que limitan y crean historias).
4) Propón 12 conflictos inevitables que surgen SOLO por cómo funciona el mundo.
5) Propón 10 detalles sensoriales “repetibles” (leitmotifs) para que el mundo se sienta vivo.
6) Cierra con un miniresumen: “lo más único” del mundo en 3 frases.

Tono: directo, útil, sin adornos vacíos. Que me duela (constructivamente).`,
    thumbnail: "",
  },
];
