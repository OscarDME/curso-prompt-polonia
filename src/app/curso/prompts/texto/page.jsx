// src/app/curso/prompts/texto/page.jsx
import { PromptLibrary } from "@/components/course/prompt-library";
import { textPrompts } from "@/lib/prompts/text";

export default function PromptsTextoPage() {
  return (
    <PromptLibrary
      title="Prompty tekstowe"
      subtitle="Kompletna biblioteka profesjonalnych promptów tekstowych do edukacji, marketingu, sprzedaży i nie tylko."
      items={textPrompts}
      type="text"
    />
  );
}
