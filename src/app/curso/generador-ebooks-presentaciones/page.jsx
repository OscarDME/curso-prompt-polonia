// src/app/curso/bonos/generador-ebooks-presentaciones/page.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { bonus04EbooksPresentaciones } from "@/lib/bonus-04-ebooks-presentaciones-content";

function renderInlineBold(text = "") {
  // Convierte **texto** -> <strong>texto</strong>
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    const match = part.match(/^\*\*(.*?)\*\*$/);
    if (match) return <strong key={idx}>{match[1]}</strong>;
    return <span key={idx}>{part}</span>;
  });
}

function RenderBlock({ block }) {
  if (!block) return null;

  // Texto simple
  if (block.type === "paragraph") {
    return (
      <p className="text-xs md:text-sm text-slate-300">
        {renderInlineBold(block.text)}
      </p>
    );
  }

  // Lista
  if (block.type === "list") {
    return (
      <ul className="space-y-2 text-xs md:text-sm text-slate-300">
        {block.items?.map((item, idx) => (
          <li key={idx}>• {renderInlineBold(item)}</li>
        ))}
      </ul>
    );
  }

  // Link clicable (botón)
  if (block.type === "link") {
    return (
      <div>
        <a
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-2 text-xs font-medium text-teal-200 transition hover:bg-teal-400/20 hover:text-teal-100"
        >
          <ExternalLink className="h-3 w-3" />
          {block.label}
        </a>
      </div>
    );
  }

  // Imagen (referencia visual)
  if (block.type === "image") {
    return (
      <div className="space-y-2">
        <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
          <Image
            src={block.src}
            alt={block.alt || "Imagen"}
            width={1400}
            height={700}
            className="h-auto w-full object-contain"
          />
        </div>
        {block.caption && (
          <p className="text-xs text-slate-400">{renderInlineBold(block.caption)}</p>
        )}
      </div>
    );
  }

  // Sección (título + bullets)
  if (block.type === "section") {
    return (
      <div className="space-y-2">
        <h3 className="text-sm md:text-base font-semibold text-slate-50">
          {block.heading}
        </h3>
        <ul className="space-y-2 text-xs md:text-sm text-slate-300">
          {block.content?.map((line, idx) => (
            <li key={idx}>• {renderInlineBold(line)}</li>
          ))}
        </ul>
      </div>
    );
  }

  // Código / prompt
  if (block.type === "code") {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/60 p-3 md:p-4">
        {block.label && (
          <p className="mb-2 text-[11px] md:text-xs font-semibold text-teal-200">
            {block.label}
          </p>
        )}
        <pre className="whitespace-pre-wrap text-[11px] md:text-xs text-slate-100">
          {block.text}
        </pre>
      </div>
    );
  }

  return null;
}

export default function BonusEbooksPresentacionesPage() {
  const {
    backToCourseLabel,
    gammaUrl,
    gammaButtonLabel,
    gammaButtonSecondaryLabel,
  } = bonus04EbooksPresentaciones;

  const hero = bonus04EbooksPresentaciones.hero;
  const outcomes = bonus04EbooksPresentaciones.outcomes;
  const stepByStep = bonus04EbooksPresentaciones.stepByStep;

  return (
    <div className="space-y-6 py-6">
      {/* 🔙 Powrót do kursu */}
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="rounded-full border border-white/10 bg-white/5 text-xs text-slate-100 hover:bg-white/10"
        >
          <Link href="/curso">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {backToCourseLabel}
          </Link>
        </Button>
      </div>

      {/* HERO: título + subtítulo */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
          {hero?.title}
        </h1>
        {hero?.subtitle && (
          <p className="text-sm md:text-base text-slate-300">
            {hero.subtitle}
          </p>
        )}
      </div>

      {/* Botón principal Gamma */}
      <div className="space-y-3">
        <Button
          asChild
          className="rounded-full bg-teal-400 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-md hover:bg-teal-300"
        >
          <a href={gammaUrl} target="_blank" rel="noreferrer">
            {gammaButtonLabel}{" "}
            {gammaButtonSecondaryLabel && (
              <span className="ml-1 text-[10px] uppercase tracking-[0.18em]">
                ({gammaButtonSecondaryLabel})
              </span>
            )}
          </a>
        </Button>

        {/* HERO blocks */}
        {Array.isArray(hero?.blocks) && hero.blocks.length > 0 && (
          <Card className="border-white/10 bg-slate-950/80 px-4 py-4 md:px-6 md:py-5">
            <div className="space-y-4">
              {hero.blocks.map((block, idx) => (
                <RenderBlock key={idx} block={block} />
              ))}
            </div>
          </Card>
        )}
      </div>

      {/* Outcomes */}
      {outcomes && (
        <Card className="border-white/10 bg-slate-950/80 px-4 py-4 md:px-6 md:py-5">
          {outcomes.title && (
            <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-3">
              {outcomes.title}
            </h2>
          )}

          {Array.isArray(outcomes.blocks) && outcomes.blocks.length > 0 && (
            <div className="space-y-4">
              {outcomes.blocks.map((block, idx) => (
                <RenderBlock key={idx} block={block} />
              ))}
            </div>
          )}
        </Card>
      )}

      {/* Step by step */}
      {stepByStep && (
        <Card className="border-white/10 bg-slate-950/80 px-4 py-4 md:px-6 md:py-5">
          {stepByStep.title && (
            <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-3">
              {stepByStep.title}
            </h2>
          )}

          {stepByStep.intro && (
            <p className="mb-4 text-xs md:text-sm text-slate-300 whitespace-pre-line">
              {renderInlineBold(stepByStep.intro)}
            </p>
          )}

          {Array.isArray(stepByStep.blocks) && stepByStep.blocks.length > 0 && (
            <div className={cn("space-y-5")}>
              {stepByStep.blocks.map((block, idx) => (
                <RenderBlock key={idx} block={block} />
              ))}
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
