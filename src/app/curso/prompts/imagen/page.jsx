// src/app/curso/prompts/imagen/page.jsx
import { PromptLibrary } from "@/components/course/prompt-library";
import { imagePrompts } from "@/lib/prompts/image";

export default function PromptsImagenPage() {
  return (
    <PromptLibrary
      title="Prompty do obrazów"
      subtitle="Gotowe prompty do generowania zdjęć, okładek i kreacji wizualnych o dużym wpływie."
      items={imagePrompts}
      type="image"
    />
  );
}
