// src/app/curso/bonos/generador-ebooks-presentaciones/page.jsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { bonus04EbooksPresentaciones } from "@/lib/bonus-04-ebooks-presentaciones-content";

// Helper para formato simple (negritas + saltos de línea)
function formatRichText(text) {
  if (!text) return "";
  return text
    .replace(/\n/g, "<br />")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export default function BonusEbooksPresentacionesPage() {
  const {
    title,
    subtitle,
    heroText,
    gammaUrl,
    gammaButtonLabel,
    gammaButtonSecondaryLabel,
    backToCourseLabel,
    videoBlock,
    stepByStep,
  } = bonus04EbooksPresentaciones;

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

      {/* Tytuł + podtytuł */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-50">{title}</h1>
        {subtitle && (
          <p className="text-sm md:text-base text-slate-300">{subtitle}</p>
        )}
      </div>

      {/* Link do Gamma + krótki opis */}
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

        {heroText && (
          <p
            className="text-xs md:text-sm text-slate-300 max-w-2xl"
            dangerouslySetInnerHTML={{ __html: formatRichText(heroText) }}
          />
        )}
      </div>

      {/* Blok: co umiesz po wdrożeniu */}
      {videoBlock && (
        <Card className="border-white/10 bg-slate-950/80 px-4 py-4 md:px-6 md:py-5">
          {videoBlock.title && (
            <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-2">
              {videoBlock.title}
            </h2>
          )}

          {Array.isArray(videoBlock.bullets) && videoBlock.bullets.length > 0 && (
            <ul className="space-y-2 text-xs md:text-sm text-slate-300">
              {videoBlock.bullets.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          )}
        </Card>
      )}

      {/* Instrukcja krok po kroku */}
      {stepByStep && (
        <Card className="border-white/10 bg-slate-950/80 px-4 py-4 md:px-6 md:py-5">
          {stepByStep.title && (
            <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-3">
              {stepByStep.title}
            </h2>
          )}

          {/* Intro (whitespace-pre-line, bo to jest zwykły tekst) */}
          {stepByStep.intro && (
            <p className="mb-4 text-xs md:text-sm text-slate-300 whitespace-pre-line">
              {stepByStep.intro}
            </p>
          )}

          {Array.isArray(stepByStep.steps) && stepByStep.steps.length > 0 && (
            <ol className="space-y-3 text-xs md:text-sm text-slate-300 list-decimal pl-5">
              {stepByStep.steps.map((s, idx) => (
                <li key={idx}>
                  <p className="font-semibold text-slate-100">{s.title}</p>
                  {s.body && (
                    <p className="mt-1 text-slate-300 whitespace-pre-line">
                      {s.body}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          )}

          {/* Prompt box */}
          {stepByStep.prompt && (
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/60 p-3 md:p-4">
              <p className="mb-2 text-[11px] md:text-xs font-semibold text-teal-200">
                {stepByStep.promptTitle || "Prompt"}
              </p>
              <pre className="whitespace-pre-wrap text-[11px] md:text-xs text-slate-100">
                {stepByStep.prompt}
              </pre>
            </div>
          )}

          {Array.isArray(stepByStep.tips) && stepByStep.tips.length > 0 && (
            <div className="mt-5 rounded-xl border border-teal-500/30 bg-teal-500/5 px-3 py-3">
              <p className="text-[11px] md:text-xs font-semibold text-teal-100 mb-2">
                {stepByStep.tipsTitle || "Wskazówki"}
              </p>
              <ul className="space-y-1 text-[11px] md:text-xs text-slate-200">
                {stepByStep.tips.map((tip, idx) => (
                  <li key={idx}>• {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
