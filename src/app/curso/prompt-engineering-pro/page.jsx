// src/app/curso/prompt-engineering-pro/page.jsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, Lock, Play, ListChecks, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { promptEngineeringPro } from "@/lib/prompt-engineering-pro-content";

function VideoFrame({ src }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
      <div className="relative aspect-video w-full">
        <iframe
          src={src}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function LessonsAccordion({ lessons, locked }) {
  return (
    <Card className="border-white/10 bg-slate-950/70">
      <div className="border-b border-white/10 px-4 py-3 md:px-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Lekcje w module
          </p>

          {locked ? (
            <Badge className="bg-black/70 text-[11px] text-slate-200">
              <Lock className="mr-1 h-3 w-3" />
              Wkrótce
            </Badge>
          ) : (
            <Badge className="bg-teal-500/15 text-[11px] text-teal-200">
              <Play className="mr-1 h-3 w-3" />
              Dostępne
            </Badge>
          )}
        </div>
      </div>

      <div className="p-2 md:p-3">
        <Accordion type="single" collapsible className="space-y-2">
          {lessons?.map((lesson) => (
            <AccordionItem
              key={lesson.id}
              value={lesson.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-black/30"
            >
              <AccordionTrigger
                className={cn(
                  "px-4 py-3 text-left hover:no-underline",
                  "data-[state=open]:bg-white/5"
                )}
              >
                <div className="flex w-full items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-300">
                      Lekcja {lesson.id}
                    </p>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {lesson.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    {locked ? (
                      <Badge className="bg-black/70 text-[11px] text-slate-200">
                        <Lock className="mr-1 h-3 w-3" />
                        Wkrótce
                      </Badge>
                    ) : (
                      <Badge className="bg-teal-500/15 text-[11px] text-teal-200">
                        <Play className="mr-1 h-3 w-3" />
                        Wideo
                      </Badge>
                    )}

                    {/* (opcional) iconito, shadcn ya rota el chevron normalmente,
                        pero esto refuerza estilo plataforma */}
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4 pt-1">
                {lesson.bullets?.length > 0 && (
                  <ul className="mb-3 space-y-1 text-xs text-slate-200">
                    {lesson.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {lesson.note && (
                  <p className="mb-3 rounded-xl border border-teal-500/25 bg-teal-500/5 px-3 py-2 text-xs text-teal-100">
                    <span className="font-semibold">Uwaga:</span> {lesson.note}
                  </p>
                )}

                {!locked && lesson.drivePreviewUrl ? (
                  <VideoFrame src={lesson.drivePreviewUrl} />
                ) : locked ? (
                  <p className="text-xs text-slate-400">
                    Materiał w przygotowaniu. Ten moduł zostanie odblokowany
                    wkrótce.
                  </p>
                ) : (
                  <p className="text-xs text-slate-400">
                    Brak wideo przypisanego do tej lekcji.
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Card>
  );
}

export default function PromptEngineeringProPage() {
  const { title, subtitle, badge, modules } = promptEngineeringPro;

  const defaultTab = useMemo(() => modules?.[0]?.id || "m1", [modules]);
  const [tab, setTab] = useState(defaultTab);

  const active = modules.find((m) => m.id === tab);

  return (
    <div className="space-y-6 py-6">
      {/* 🔙 Powrót */}
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="rounded-full border border-white/10 bg-white/5 text-xs text-slate-100 hover:bg-white/10"
        >
          <Link href="/curso">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Wróć do strony głównej kursu
          </Link>
        </Button>
      </div>

      {/* HERO */}
      <section className="space-y-3 rounded-3xl border border-teal-500/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-6 md:px-8 md:py-7">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-teal-500/15 text-teal-200">{badge}</Badge>
          <Badge className="bg-black/70 text-slate-200">
            <ListChecks className="mr-1 h-3 w-3" />
            6 modułów
          </Badge>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
          {title}
        </h1>
        <p className="max-w-3xl text-sm md:text-base text-slate-200">
          {subtitle}
        </p>
      </section>

      {/* TABS (moduły) */}
      <Tabs value={tab} onValueChange={setTab} className="space-y-5">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-3">
          <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent">
            {modules.map((m, idx) => (
              <TabsTrigger
                key={m.id}
                value={m.id}
                className={cn(
                  "rounded-full border px-3 py-2 text-xs font-semibold transition",
                  "data-[state=active]:border-teal-400 data-[state=active]:bg-teal-400/10 data-[state=active]:text-teal-200",
                  "border-white/10 bg-white/5 text-slate-200 hover:border-teal-400/60"
                )}
              >
                Moduł {idx + 1}
                {m.locked ? <Lock className="ml-2 h-3 w-3" /> : null}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {modules.map((m, idx) => (
          <TabsContent key={m.id} value={m.id} className="space-y-4">
            {/* Nagłówek modułu */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-black/70 text-slate-200">
                  Moduł {idx + 1}
                </Badge>

                {m.locked ? (
                  <Badge className="bg-black/70 text-slate-200">
                    <Lock className="mr-1 h-3 w-3" />
                    Wkrótce dostępne
                  </Badge>
                ) : (
                  <Badge className="bg-teal-500/15 text-teal-200">
                    Dostępne teraz
                  </Badge>
                )}
              </div>

              <h2 className="text-lg md:text-xl font-semibold text-slate-50">
                {m.title}
              </h2>

              {m.goal && (
                <p className="max-w-3xl text-sm text-slate-200">{m.goal}</p>
              )}

              {m.locked && m.comingSoonText && (
                <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {m.comingSoonText}
                </p>
              )}
            </div>

            {/* ✅ Lekcje jako desplegables */}
            <LessonsAccordion lessons={m.lessons || []} locked={!!m.locked} />
          </TabsContent>
        ))}
      </Tabs>

      {/* mini footer */}
      {active?.locked ? (
        <p className="text-xs text-slate-400">
          Moduły 5–6 są oznaczone jako{" "}
          <span className="text-slate-200 font-semibold">Wkrótce</span>. Reszta
          kursu jest dostępna od razu.
        </p>
      ) : (
        <p className="text-xs text-slate-400">
          Wskazówka: obejrzyj lekcję i od razu przetestuj koncepcję w ChatGPT —
          wtedy najszybciej „wchodzi”.
        </p>
      )}
    </div>
  );
}
