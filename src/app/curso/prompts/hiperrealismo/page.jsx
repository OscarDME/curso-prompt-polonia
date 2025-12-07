// src/app/curso/prompts/hiperrealismo/page.jsx
import { PromptLibrary } from "@/components/course/prompt-library";
import { hyperrealismTextPrompts } from "@/lib/prompts/hyperrealism-text";

export default function PromptsHiperrealismoPage() {
  return (
    <PromptLibrary
      title="Pakiet Hiperrealizm PRO"
      subtitle="Szablony i prompty tekstowe, aby uzyskać spójność, mikrodetale i ultra-realistyczny efekt."
      items={hyperrealismTextPrompts}
      type="text"
    />
  );
}
