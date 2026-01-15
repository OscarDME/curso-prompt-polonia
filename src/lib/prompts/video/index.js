// src/lib/prompts/video/index.js

import { videoPromptsReelsViralesNegocio } from "./virales-mixtos-veo3";
import { videoPromptsDemosProductoBeforeAfter } from "./demos-producto-before-after";
import { videoPromptsUGCTestimonios } from "./ugc-testimonios";
import { videoPromptsAvatarHablante } from "./avatar-hablante";
import { videoPromptsViralesAbsurdosSora2 } from "./virales-absurdos";
import { videoPromptsTipsEducativos } from "./tips-educativos";
import { videoPromptsVidaDiariaMix } from "./vida-diaria-mix-veo3";
import { videoPromptsMicrohistoriasCinematograficasVeo3 } from "./microhistorias-cinematograficas-veo3";
import { videoPromptsMicroThrilleryPsychologiczneVeo3 } from "./micro-thrillery-psychologiczne-veo3";

export const videoPrompts = [
  ...videoPromptsReelsViralesNegocio,       // 20
  ...videoPromptsDemosProductoBeforeAfter,  // 18
  ...videoPromptsUGCTestimonios,            // 16
  ...videoPromptsVidaDiariaMix,
  ...videoPromptsAvatarHablante,
  ...videoPromptsViralesAbsurdosSora2,
  ...videoPromptsTipsEducativos,//   ...videoPromptsAutoridadMiniMasterclass,  // 16
  ...videoPromptsMicrohistoriasCinematograficasVeo3, // 20
  ...videoPromptsMicroThrilleryPsychologiczneVeo3,   // 12
];
