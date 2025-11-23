// src/lib/prompts/text/index.js

import { textPromptsMarketingIdeasCampana } from "./marketing-ideas-campana";
import { textPromptsRedesReelsTikTok } from "./redes-reels-tiktok";
import { textPromptsMarketingEmbudos } from "./marketing-embudos";
import { textPromptsMarketingCopyAnuncios } from "./marketing-copy-anuncios";
import { textPromptsMarketingHooksAnuncios } from "./marketing-hooks-anuncios";
import { textPromptsNegocioIdeasNicho } from "./negocio-ideas-nicho";
import { textPromptsProductividadOrganizacionPersonal } from "./productividad-organizacion-personal";
import { textPromptsCopyAIDA } from "./copy-aida";
import { textPromptsSeoIdeasArticulos } from "./seo-ideas-articulos";
import { textPromptsCreativaPersonajes } from "./creativa-personajes";
import { textPromptsEduExplicacionesSimples } from "./edu-explicaciones-simples";
import { textPromptsSoporteQuejas } from "./soporte-quejas";
import { textPromptsAsistentesCopywriting } from "./asistentes-copywriting";
import { textPromptsMiscTono } from "./misc-tono";
import { textPromptsNegocioValidacion } from "./negocio-validacion";
import { textPromptsNegocioPropuestasValor } from "./negocio-propuestas-valor";
import { textPromptsNegocioBuyerPersona } from "./negocio-buyer-persona";
import { textPromptsNegocioPlanesRapidos } from "./negocio-planes-rapidos";
import { textPromptsRedesContenidoValor } from "./redes-contenido-valor"; 
import { textPromptsRedesContenidoAutoridad } from "./redes-contenido-autoridad";
import { textPromptsRedesCarruseles } from "./redes-carruseles";
import { textPromptsCopyHumoristico } from "./copy-humoristico";
import { textPromptsCopyScriptsVideo } from "./copy-scripts-video";

export const textPrompts = [
  ...textPromptsMarketingIdeasCampana,
  ...textPromptsRedesReelsTikTok,
  ...textPromptsMarketingEmbudos,
  ...textPromptsMarketingCopyAnuncios,
  ...textPromptsMarketingHooksAnuncios,
  ...textPromptsNegocioIdeasNicho,
  ...textPromptsProductividadOrganizacionPersonal,
  ...textPromptsCopyAIDA,
  ...textPromptsSeoIdeasArticulos,
  ...textPromptsCreativaPersonajes,
  ...textPromptsEduExplicacionesSimples,
  ...textPromptsSoporteQuejas,
  ...textPromptsAsistentesCopywriting,
  ...textPromptsMiscTono,
  ...textPromptsNegocioValidacion,
  ...textPromptsNegocioPropuestasValor,
  ...textPromptsNegocioBuyerPersona,
  ...textPromptsNegocioPlanesRapidos,
  ...textPromptsRedesContenidoValor,
  ...textPromptsRedesContenidoAutoridad,
  ...textPromptsRedesCarruseles,
  ...textPromptsCopyHumoristico,
  ...textPromptsCopyScriptsVideo,
  // más adelante iremos añadiendo:
  // ...textPromptsMarketingEmbudos,
  // ...textPromptsMarketingCopyAnuncios,
  // etc.
];
