// src/app/curso/prompts/virales/page.jsx
import { PromptLibrary } from "@/components/course/prompt-library";
import { viralTextPrompts } from "@/lib/prompts/viral-text";

export default function PromptsViralesPage() {
  return (
    <PromptLibrary
      title="Prompty viralowe"
      subtitle="Hooki, scenariusze, opisy (captions), CTA i gotowe struktury, by maksymalizować retencję, udostępnienia i konwersje."
      items={viralTextPrompts}
      type="text"
    />
  );
}
