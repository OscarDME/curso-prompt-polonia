// src/app/curso/prompts/video/page.jsx
import { PromptLibrary } from "@/components/course/prompt-library";
import { videoPrompts } from "@/lib/prompts/video";

export default function PromptsVideoPage() {
  return (
    <PromptLibrary
      title="Prompty do wideo"
      subtitle="Scenariusze i struktury do viralowych wideo, reklam i krótkich formatów z użyciem AI."
      items={videoPrompts}
      type="video"
    />
  );
}
