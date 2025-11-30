import { PromptLibrary } from "@/components/course/prompt-library";
import { hyperrealismTextPrompts } from "@/lib/prompts/hyperrealism-text";

export default function PromptsHiperrealismoPage() {
  return (
    <PromptLibrary
      title="Pack de Hiperrealismo PRO"
      subtitle="Plantillas y prompts de texto para lograr consistencia, microdetalles y look ultra realista."
      items={hyperrealismTextPrompts}
      type="text"
    />
  );
}
