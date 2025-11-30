import { PromptLibrary } from "@/components/course/prompt-library";
import { viralTextPrompts } from "@/lib/prompts/viral-text";

export default function PromptsViralesPage() {
  return (
    <PromptLibrary
      title="Prompts virales"
      subtitle="Hooks, guiones, captions, CTAs y estructuras listas para maximizar retención, shares y conversiones."
      items={viralTextPrompts}
      type="text"
    />
  );
}
