export const textPromptsSoporteQuejas = [
  {
    id: "soporte-quejas-001",
    title: "Responder una queja con empatía profesional",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Genera respuestas profesionales que desactivan tensión y muestran empatía.",
    prompt: `Dame:
- Tipo de queja.
- Tono del cliente (molesto, confundido, agresivo).
- Contexto real.

Genera una respuesta:
1) Apertura empática.
2) Validación del sentimiento sin admitir culpa innecesaria.
3) Explicación clara y neutral.
4) Solución o alternativa.
5) Cierre tranquilo y positivo.

Incluye 3 versiones con distintos niveles de formalidad.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-002",
    title: "Responder una queja por retraso en entrega",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Respuesta calmada, clara y orientada a solución ante retrasos.",
    prompt: `Dame:
- Producto/servicio.
- Tiempo de retraso.
- Nivel de molestia del cliente.

Genera:
1) Empatía real.
2) Explicación simple del retraso.
3) Qué estamos haciendo ya.
4) Compensación o alternativa opcional.
5) Cierre profesional.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-003",
    title: "Responder una queja por mal servicio",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Ofrece disculpas sin culpar al equipo y propone acciones.",
    prompt: `Dame:
- Qué salió mal.
- Nivel de gravedad.
- Política interna.

Genera:
1) Validación emocional.
2) Reconocimiento del problema.
3) Explicación breve.
4) Medidas correctivas.
5) Siguiente paso.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-004",
    title: "Manejo de quejas agresivas sin perder la calma",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Comunicación profesional sin engancharse emocionalmente.",
    prompt: `Dame:
- Mensaje agresivo del cliente.
- Tema de la queja.
- Qué opciones tenemos.

Genera:
1) Respuesta que desescala tensión.
2) Reencuadre profesional.
3) Límites claros sin sonar defensivo.
4) Solución concreta.
5) Cierre neutral.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-005",
    title: "Responder quejas por error técnico o bug",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Para SaaS, apps y sistemas digitales.",
    prompt: `Dame:
- Tipo de error.
- Impacto en el usuario.
- Tiempo estimado de solución.

Genera:
1) Empatía sin tecnicismos.
2) Reconocimiento del bug.
3) Lo que el equipo está haciendo.
4) Alternativas temporales.
5) Cierre claro y amable.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-006",
    title: "Responder quejas por cobro incorrecto",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Transparencia financiera + calma + solución rápida.",
    prompt: `Dame:
- Monto cobrado.
- Diferencia real.
- Política de reembolsos.

Genera:
1) Apertura empática.
2) Explicación exacta de lo que sucedió.
3) Pasos para corregirlo.
4) Tiempos estimados.
5) Cierre profesional.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-007",
    title: "Responder quejas cuando el cliente tiene razón",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Reconocer sin perder autoridad ni profesionalismo.",
    prompt: `Dame:
- Qué se hizo mal.
- Consecuencia para el cliente.
- Solución posible.

Genera:
1) Reconocimiento claro.
2) Disculpa profesional.
3) Proceso para corregir.
4) Medida de prevención futura.
5) Cierre agradeciendo feedback.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-008",
    title: "Responder quejas cuando el cliente NO tiene razón",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Responder con tacto y sin culpar al cliente.",
    prompt: `Dame:
- Situación real.
- Error del cliente.
- Política interna.

Genera:
1) Validación emocional.
2) Explicación diplomática del error.
3) Alternativa o guía.
4) Cierre amable.
Incluye versión corta y larga.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-009",
    title: "Responder queja por atención lenta",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Explicación + compromiso de mejora.",
    prompt: `Dame:
- Tiempo que tardamos.
- Motivo del retraso.
- Nivel de urgencia del cliente.

Genera:
1) Empatía.
2) Explicación concreta.
3) Compromiso realista.
4) Solución.
5) Cierre positivo.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-010",
    title: "Responder a clientes que exigen reembolso inmediato",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Manejo profesional de presión emocional o exigencias duras.",
    prompt: `Dame:
- Motivo del reembolso.
- Política interna.
- Estado del caso.

Genera:
1) Apertura calmada.
2) Proceso de reembolso explicado.
3) Tiempos reales.
4) Alternativa para evitar reembolso (si aplica).
5) Cierre profesional.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-011",
    title: "Responder quejas sobre mala calidad del producto",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Guía clara para desacoplar emoción → solución.",
    prompt: `Dame:
- Producto.
- Qué parte falló.
- Política de reemplazo.

Genera:
1) Empatía.
2) Validación.
3) Explicación breve.
4) Solución (cambio/reembolso).
5) Cierre agradeciendo feedback.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-012",
    title: "Responder a clientes que amenazan con dejar mala reseña",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Manejo emocional de clientes frustrados + solución.",
    prompt: `Dame:
- Motivo de molestia.
- Qué amenaza dijo.
- Solución disponible.

Genera una respuesta calmada:
1) Desescalar tensión.
2) Mostrar intención genuina de resolver.
3) Solicitar detalles específicos.
4) Proponer solución.
5) Cierre profesional.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-013",
    title: "Responder a quejas sobre experiencia negativa con soporte previo",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Cuando el cliente se queja del equipo.",
    prompt: `Dame:
- Qué ocurrió.
- Cómo fue tratado.
- Qué debería haber pasado.

Genera:
1) Disculpa profesional.
2) Validación emocional.
3) Explicación breve.
4) Compromiso de mejora.
5) Solución práctica.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-014",
    title: "Responder quejas por incompatibilidad de producto",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Guía para manejar frustración técnica.",
    prompt: `Dame:
- Producto.
- Incompatibilidad encontrada.
- Solución posible.

Genera:
1) Validación del problema.
2) Mini explicación técnica fácil.
3) Alternativas compatibles.
4) Paso a paso simple.
5) Cierre amable.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-015",
    title: "Responder quejas de clientes que se sienten ignorados",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Reparar percepción emocional + activar solución inmediata.",
    prompt: `Dame:
- Tiempo que ha esperado.
- Tema del caso.
- Qué podemos hacer ahora.

Genera:
1) Reconexión humana.
2) Validación emocional.
3) Acción inmediata.
4) Compromiso de seguimiento.
5) Cierre empático.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-016",
    title: "Responder cuando el cliente acusa fraude o estafa (sin razón)",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Calmar, aclarar, explicar, resolver sin escalar conflicto.",
    prompt: `Dame:
- Qué dijo el cliente.
- Qué ocurrió realmente.
- Evidencia disponible.

Genera:
1) Respuesta calmada.
2) Explicación clara.
3) Evidencia neutral.
4) Alternativa de solución.
5) Cierre profesional.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-017",
    title: "Responder quejas sobre procesos demasiado largos",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Optimizar percepción de lentitud con claridad + tiempos reales.",
    prompt: `Dame:
- Proceso.
- Tiempo esperado vs real.
- Qué se puede acelerar.

Genera:
1) Empatía real.
2) Explicación corta.
3) Nuevo tiempo estimado.
4) Alternativa rápida.
5) Cierre claro.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-018",
    title: "Responder a clientes que malinterpretan una política interna",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Aclaración diplomática sin sonar defensivo.",
    prompt: `Dame:
- Política malinterpretada.
- Qué entendió el cliente.
- Cómo funciona realmente.

Genera:
1) Validación.
2) Aclaración diplomática.
3) Ejemplo simple.
4) Solución.
5) Cierre amable.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-019",
    title: "Responder quejas extensas o muy largas",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Aprender a resumir, validar y resolver sin ignorar detalles.",
    prompt: `Dame:
- Queja larga completa.
- Punto central.
- Solución posible.

Genera:
1) Resumen respetuoso.
2) Validación emocional.
3) Explicación corta.
4) Acción inmediata.
5) Cierre de apoyo.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-020",
    title: "Responder quejas por mala experiencia previa en otra empresa",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Cuando el cliente teme repetir una mala experiencia.",
    prompt: `Dame:
- Experiencia previa del cliente.
- Qué teme repetir.
- Qué hacemos diferente.

Genera:
1) Empatía.
2) Aseguramiento profesional.
3) Explicación de diferencias.
4) Solución inmediata.
5) Cierre seguro.`,
    thumbnail: "",
  },
    {
    id: "soporte-quejas-021",
    title: "Responder quejas por falta de información clara",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Cuando el cliente reclama que la explicación o manual no fue suficiente.",
    prompt: `Dame:
- Qué información faltó.
- Qué entendió el cliente.
- Qué quiere lograr.

Genera:
1) Empatía inicial.
2) Aclaración simple sin tecnicismos.
3) Recursos adicionales (video/guía).
4) Pasos a seguir.
5) Cierre amable.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-022",
    title: "Responder quejas por atención robotizada o fría",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Hacer que el cliente sienta humanidad y atención real.",
    prompt: `Dame:
- Mensaje del cliente.
- Por qué sintió atención robótica.
- Información personalizable.

Genera:
1) Conexión humana.
2) Tono cálido.
3) Solución personalizada.
4) Cierre cercano.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-023",
    title: "Responder cuando el cliente exige hablar con un supervisor",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Manejo adecuado de escalamiento.",
    prompt: `Dame:
- Motivo por el que lo pide.
- Qué se puede hacer sin supervisor.
- Política de escalamiento.

Genera:
1) Validación del deseo del cliente.
2) Intento de resolver sin escalar.
3) Alternativa real.
4) Si aplica, activar escalamiento.
5) Cierre profesional.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-024",
    title: "Responder queja por confusión en términos y condiciones",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Explicar con claridad legal sin sonar legalista.",
    prompt: `Dame:
- El término malinterpretado.
- Qué entendió el cliente.
- La explicación correcta.

Genera:
1) Empatía + aclaración.
2) Ejemplo práctico.
3) Qué significa en la práctica.
4) Solución o alternativa.
5) Cierre seguro.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-025",
    title: "Responder queja por envío duplicado o información duplicada",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Explicar duplicados sin sonar desorganizado.",
    prompt: `Dame:
- Qué se duplicó.
- Consecuencia para el cliente.
- Solución posible.

Genera:
1) Validación.
2) Explicación breve.
3) Corrección inmediata.
4) Prevención futura.
5) Cierre amable.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-026",
    title: "Responder queja por mala experiencia en tienda física o local",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Cuando el problema ocurre fuera del mundo digital.",
    prompt: `Dame:
- Qué ocurrió.
- Quién atendió.
- Política interna.

Genera:
1) Disculpa.
2) Reconocimiento del problema.
3) Acción inmediata.
4) Compensación opcional.
5) Cierre profesional.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-027",
    title: "Responder quejas por comportamiento inapropiado de un empleado",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Caso delicado que requiere tacto extremo.",
    prompt: `Dame:
- Qué ocurrió.
- Nivel de gravedad.
- Políticas de conducta.

Genera:
1) Empatía profunda.
2) Disculpa profesional.
3) Acción interna (sin detalles sensibles).
4) Solución al cliente.
5) Cierre seguro.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-028",
    title: "Responder quejas cuando el cliente amenaza con acciones legales",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Desescalar sin comprometer legalmente.",
    prompt: `Dame:
- Texto de la amenaza.
- Tema de la queja.
- Política interna.

Genera:
1) Respuesta calmada.
2) Aclaración neutral.
3) Opcción para resolver sin escalar.
4) Procedimiento correcto.
5) Cierre profesional.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-029",
    title: "Responder quejas por no recibir confirmación de compra o reserva",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Resolver confusión sin culpar al cliente.",
    prompt: `Dame:
- Tipo de compra/reserva.
- Tiempo transcurrido.
- Sistema que usamos.

Genera:
1) Empatía.
2) Revisión de estado.
3) Reenvío o solución.
4) Verificación final.
5) Cierre amable.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-030",
    title: "Responder quejas por producto incompleto o faltante",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Ideal para e-commerce.",
    prompt: `Dame:
- Producto.
- Qué faltó.
- Política de reemplazo.

Genera:
1) Empatía.
2) Verificación breve.
3) Reposición inmediata.
4) Tiempo estimado.
5) Cierre agradeciendo paciencia.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-031",
    title: "Responder cuando el cliente quiere cancelar por mala primera impresión",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Estrategia para recuperar la relación.",
    prompt: `Dame:
- Qué generó mala impresión.
- Tipo de servicio.
- Qué podemos ofrecer.

Genera:
1) Validación.
2) Reencuadre positivo.
3) Solución o compensación.
4) Cierre para retener al cliente.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-032",
    title: "Responder quejas por instrucciones confusas de instalación/uso",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Mejorar percepción de claridad.",
    prompt: `Dame:
- Producto.
- Qué parte no entendió.
- Nivel técnico del cliente.

Genera:
1) Aclaración clara.
2) Instrucción paso a paso.
3) Recursos visuales.
4) Solución inmediata.
5) Cierre amable.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-033",
    title: "Responder quejas por servicio ‘muy caro’",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Defender valor sin sonar defensivo.",
    prompt: `Dame:
- Producto/servicio.
- Precio.
- Diferentes beneficios o valor.

Genera:
1) Validación sin ceder.
2) Explicación del valor.
3) Comparación neutral.
4) Alternativas.
5) Cierre profesional.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-034",
    title: "Responder quejas por políticas estrictas no entendidas",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Aclarar una política rígida sin perder al cliente.",
    prompt: `Dame:
- Política.
- Qué entendió mal el cliente.
- Motivo de la política.

Genera:
1) Empatía.
2) Explicación simple.
3) Motivo real.
4) Alternativa.
5) Cierre amable.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-035",
    title: "Responder quejas por no recibir soporte fuera de horario",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Explicar límites sin sonar indiferente.",
    prompt: `Dame:
- Horario de soporte.
- Qué hizo el cliente.
- Qué podemos hacer ahora.

Genera:
1) Validación.
2) Aclaración del horario.
3) Solución inmediata.
4) Alternativa nocturna (si aplica).
5) Cierre positivo.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-036",
    title: "Responder quejas por respuestas contradictorias del equipo",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Unificar información y reparar confianza.",
    prompt: `Dame:
- Qué se contradijo.
- Qué entendió el cliente.
- Cómo es realmente.

Genera:
1) Disculpa profesional.
2) Explicación clara.
3) Resolución definitiva.
4) Aseguramiento de consistencia.
5) Cierre amable.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-037",
    title: "Responder quejas por falta de seguimiento o abandono del caso",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Reparar relación y activar seguimiento inmediato.",
    prompt: `Dame:
- Caso.
- Tiempo sin respuesta.
- Próximo paso.

Genera:
1) Disculpa genuina.
2) Explicación corta.
3) Acción inmediata.
4) Calendario de seguimiento.
5) Cierre agradecido.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-038",
    title: "Responder quejas cuando hay un malentendido cultural o de lenguaje",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Bajar tensión y aclarar diferencias de comunicación.",
    prompt: `Dame:
- Qué se malinterpretó.
- Cultura o idioma del cliente.
- Intención real del mensaje.

Genera:
1) Validación cultural.
2) Aclaración suave.
3) Ejemplo real.
4) Solución.
5) Cierre respetuoso.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-039",
    title: "Responder quejas por promesas que el cliente cree que vio",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Cuando el cliente entiende una oferta de forma incorrecta.",
    prompt: `Dame:
- Qué creyó el cliente.
- Qué dice realmente la oferta.
- Qué podemos ofrecer.

Genera:
1) Empatía.
2) Aclaración diplomática.
3) Versión correcta.
4) Alternativa atractiva.
5) Cierre profesional.`,
    thumbnail: "",
  },
  {
    id: "soporte-quejas-040",
    title: "Responder queja por falta de personalización en el servicio",
    area: "Atención al Cliente & SOPs",
    category: "Quejas",
    summary: "Transformar una mala experiencia en algo positivo.",
    prompt: `Dame:
- Servicio.
- Qué esperaba el cliente.
- Qué sí podemos personalizar.

Genera:
1) Validación emocional.
2) Explicación del alcance real.
3) Personalización disponible.
4) Siguiente paso.
5) Cierre amable.`,
    thumbnail: "",
  },
];