// src/lib/ingenieria-prompts-course.js

export const ingenieriaPromptsCourse = {
  slug: "ingenieria-de-prompts",
  title: "Curso de Ingeniería de Prompts",
  subtitle: "De usuario a operador PRO",
  description:
    "Aprende a ajustar, optimizar y crear prompts para obtener resultados profesionales de forma consistente (sin copiar y pegar a ciegas).",

  // ✅ (Opcional) Mini info para mostrar arriba
  meta: {
    totalLessons: 8,
    estimatedTime: "≈ 60–90 min",
    level: "Principiante → Avanzado",
  },

  // ✅ Temario (editable): lo saqué de lo que me mostraste en imágenes
  syllabus: [
    {
      id: "m1",
      title: "1. Fundamentos que sí importan",
      bullets: [
        "Qué es un prompt “profesional” vs “bonito”",
        "Cómo piensa la IA (literalidad) y cómo evitar malinterpretaciones",
        "Regla de oro: objetivo + contexto + formato + restricciones",
      ],
    },
    {
      id: "m2",
      title: "2. Estructura PRO: la plantilla universal",
      bullets: [
        "Rol + tarea + contexto + datos + criterios + formato + tono",
        "“Definition of Done” (cómo decirle qué es un buen resultado)",
        "Prompt base reutilizable para cualquier caso",
      ],
    },
    {
      id: "m3",
      title: "3. Claridad brutal: eliminar ambigüedad",
      bullets: [
        "Cómo convertir ideas vagas en instrucciones accionables",
        "Listas de requisitos, límites, supuestos y exclusiones",
        "Preguntas de calibración: hacer que la IA te pregunte lo necesario",
      ],
    },
    {
      id: "m4",
      title: "4. Contexto que multiplica calidad (sin hacer prompts eternos)",
      bullets: [
        "Qué contexto sí sirve y cuál solo estorba",
        "Mini-briefs y “context packs”",
        "Cómo pasar ejemplos, referencias y “no-go zones”",
      ],
    },
    {
      id: "m5",
      title: "5. Control del output: formatos, estilos y consistencia",
      bullets: [
        "Forzar estructuras (tablas, bullets, pasos, JSON, guiones)",
        "Checklist de consistencia (tono, nivel, extensión, enfoque)",
        "Plantillas para: copy, guiones, emails, posts, propuestas",
      ],
    },
    {
      id: "m6",
      title: "6. Iteración inteligente: el método de 3 rondas",
      bullets: [
        "Ronda 1: exploración (variantes)",
        "Ronda 2: selección y mejora (criterios)",
        "Ronda 3: pulido final (calidad + verificación)",
        "Prompts de “refina con estas reglas” (reutilizables)",
      ],
    },
    {
      id: "m7",
      title: "7. Prompts avanzados: razonamiento, crítica y verificación",
      bullets: [
        "Pedir análisis vs pedir resultado (cuándo conviene cada uno)",
        "Rol de “editor/QA”: detectar huecos, contradicciones y mejoras",
        "Anti-alucinaciones: pedir supuestos, límites y verificación interna",
      ],
    },
    {
      id: "m8",
      title: "8. Sistema y librería: de usuario a operador PRO",
      bullets: [
        "Cómo convertir un prompt ganador en template",
        "Versionado (V1, V2, V3) y banco personal",
        "Matriz: objetivo × audiencia × canal × tono × longitud",
        "Flujo completo: idea → brief → prompt → output → revisión",
      ],
    },
  ],

  // ✅ Videoaulas (Drive). Edita títulos/descripcion cuando quieras.
  lessons: [
    {
      id: "l1",
      title: "Lección 1 — Fundamentos que sí importan",
      summary: "Base mental para que los prompts te devuelvan resultados pro.",
      drivePreviewUrl:
        "https://drive.google.com/file/d/1y_zRAbcoP5dZ2FLML7HQLcviHB1kr4C_/preview",
    },
    {
      id: "l2",
      title: "Lección 2 — Estructura PRO (plantilla universal)",
      summary: "La fórmula que te sirve en cualquier caso y cualquier nicho.",
      drivePreviewUrl:
        "https://drive.google.com/file/d/1TzzsErxtt_DErHCzN5EU4BkLDhLcehBA/preview",
    },
    {
      id: "l3",
      title: "Lección 3 — Claridad brutal (sin ambigüedad)",
      summary: "Cómo lograr instrucciones accionables y calibración.",
      drivePreviewUrl:
        "https://drive.google.com/file/d/11exHk7OuC7CgjbhPon6gf1mzPu-J5Nyb/preview",
    },
    {
      id: "l4",
      title: "Lección 4 — Contexto que multiplica calidad",
      summary: "Qué contexto sirve, mini-briefs, ejemplos y no-go zones.",
      drivePreviewUrl:
        "https://drive.google.com/file/d/1GX22bH0KTftWNSezJUfdfll8UIxNYs8q/preview",
    },
    {
      id: "l5",
      title: "Lección 5 — Control del output (formatos y consistencia)",
      summary: "Checklist + plantillas para que el resultado salga como quieres.",
      drivePreviewUrl:
        "https://drive.google.com/file/d/1tMJ9eVwwXBvlMg3gJaMQ2k-bS26iM7Hi/preview",
    },
    {
      id: "l6",
      title: "Lección 6 — Iteración inteligente (3 rondas)",
      summary: "Explora → mejora → pule. Reutilizable para siempre.",
      drivePreviewUrl:
        "https://drive.google.com/file/d/15Wwzc_X2fGuJpax9nAg_M3aYbO9FmDWk/preview",
    },
    {
      id: "l7",
      title: "Lección 7 — Avanzado (crítica y verificación)",
      summary: "Editor/QA + anti-alucinaciones para subir la precisión.",
      drivePreviewUrl:
        "https://drive.google.com/file/d/1Fu46LBGOVpIY_IloKIIJIoLxRIAf5z_3/preview",
    },
    {
      id: "l8",
      title: "Lección 8 — Sistema y librería PRO",
      summary: "Construye tu banco personal: templates + versionado + flujo.",
      drivePreviewUrl:
        "https://drive.google.com/file/d/1Vbc_0AmMXsmHsU_G8NejJE2PIDVeO8ci/preview",
    },
  ],
};
