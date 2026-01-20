// src/app/curso/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { courseHero, courseModuleRows } from "@/lib/course-data";

export default function CursoPage() {
  // ✅ Orden: primero todo EXCEPTO PRO, y al final PRO (debajo de bonuses)
  const proRows = courseModuleRows.filter((r) => r.variant === "pro");
  const normalRows = courseModuleRows.filter((r) => r.variant !== "pro");
  const orderedRows = [...normalRows, ...proRows];

  return (
    <div className="space-y-10 pt-6 md:pt-8">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl bg-black/70">
        <div className="absolute inset-0">
          <Image
            src={courseHero.backgroundImage}
            alt={courseHero.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050B2C] to-transparent" />
        </div>

        <div className="relative z-10 px-5 py-10 md:px-10 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">
              {courseHero.subtitle}
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              {courseHero.title}
            </h1>
            <p className="mb-8 max-w-xl text-sm text-slate-100/90 sm:text-base leading-relaxed">
              {courseHero.description}
            </p>

            <Button
              asChild
              className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-6 py-5 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg hover:bg-teal-300"
            >
              <Link href="/curso/inicio">
                {courseHero.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FILAS DE MÓDULOS TIPO NETFLIX */}
      <section className="space-y-10">
        {orderedRows.map((row) => {
          const isProRow = row.variant === "pro";

          return (
            <div key={row.id} className="space-y-4">
              {/* Título fila */}
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
                  {row.title}
                </h2>

                {/* Badge extra para fila PRO */}
                {isProRow && (
                  <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-fuchsia-200">
                    Kurs premium
                  </div>
                )}
              </div>

              {/* Contenedor fila */}
              <div
                className={
                  isProRow
                    ? "rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-4 md:p-5 shadow-[0_0_40px_rgba(168,85,247,0.18)]"
                    : ""
                }
              >
                <div
                  className={
                    isProRow
                      ? "flex gap-4 overflow-x-auto pb-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
                      : "-mx-4 flex gap-4 overflow-x-auto pb-2 pl-4 pr-4 md:mx-0 md:pl-0 md:pr-0 no-scrollbar scroll-smooth snap-x snap-mandatory"
                  }
                >
                  {row.modules.map((module) =>
                    isProRow ? (
                      <ProCourseCard key={module.id} module={module} />
                    ) : (
                      <NetflixCard key={module.id} module={module} />
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ✅ INNE MATERIAŁY */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
          Inne materiały
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* ✅ NOWE: Zestaw zasobów w trendach */}
          <Link href="/curso/kit-recursos-tendencias" className="group block">
            <Card className="relative overflow-hidden border-2 border-transparent bg-black/60 shadow-[0_0_25px_rgba(0,0,0,0.7)] transition hover:-translate-y-1 hover:border-teal-400/80 hover:shadow-[0_0_35px_rgba(45,212,191,0.5)]">
              <div className="relative h-[160px] w-full bg-gradient-to-br from-slate-950 via-slate-900 to-black">
                <div className="absolute inset-0 opacity-60 [background:radial-gradient(600px_circle_at_20%_20%,rgba(45,212,191,0.18),transparent_40%),radial-gradient(600px_circle_at_80%_30%,rgba(168,85,247,0.16),transparent_45%)]" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal-200">
                  <Sparkles className="h-3 w-3" />
                  Zestaw
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-base font-extrabold text-teal-100">
                    Zestaw zasobów w trendach
                  </h3>
                  <p className="mt-1 text-xs text-slate-200/90 line-clamp-2">
                    Dźwięki, filtry, fonty i wiele więcej (regularnie
                    aktualizowane, aby tworzyć treści, które wciągają).
                  </p>

                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-teal-200">
                    Wejdź <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}

/** Tarjeta tipo Netflix (klik w 100% karty) */
function NetflixCard({ module }) {
  const isLocked = module.locked;
  const href = module.href || "#";
  const isExternal = href.startsWith("http");

  return (
    <Card
      className={
        "snap-start group relative h-[260px] w-[180px] flex-shrink-0 overflow-hidden border-2 bg-black/60 shadow-[0_0_25px_rgba(0,0,0,0.7)] transition select-none touch-manipulation " +
        (isLocked
          ? " cursor-not-allowed opacity-60 border-slate-700 hover:-translate-y-0"
          : " cursor-pointer hover:-translate-y-1 hover:border-teal-400/80 hover:shadow-[0_0_35px_rgba(45,212,191,0.5)] border-transparent")
      }
    >
      {/* ✅ Visual: nie przechwytuje klików */}
      <div className="relative h-full w-full pointer-events-none">
        <Image
          src={module.image}
          alt={module.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-[10px] ring-1 ring-teal-300/30 group-hover:ring-teal-200/80" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-3">
          {module.tag && (
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-300">
              {module.tag}
            </p>
          )}
          <h3 className="text-sm font-extrabold leading-tight text-teal-100">
            {module.title}
          </h3>
          {module.subtitle && (
            <p className="mt-1 text-[11px] text-slate-200/90 line-clamp-2">
              {module.subtitle}
            </p>
          )}

          {isLocked && (
            <p className="mt-2 flex items-center gap-1 text-[10px] font-medium text-slate-300">
              <Lock className="h-3 w-3 text-teal-300" />
              Treść dostępna wkrótce
            </p>
          )}
        </div>
      </div>

      {/* ✅ Overlay: klikalne 100% powierzchni (na samej górze) */}
      {!isLocked &&
        (isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20"
            aria-label={`Otwórz: ${module.title}`}
          />
        ) : (
          <Link
            href={href}
            className="absolute inset-0 z-20"
            aria-label={`Otwórz: ${module.title}`}
          />
        ))}
    </Card>
  );
}

/** ✅ Karta premium dla Kursów PRO (klik w 100% karty) */
function ProCourseCard({ module }) {
  const isLocked = module.locked;
  const href = module.href || "#";
  const isExternal = href.startsWith("http");

  return (
    <Card
      className={
        "snap-start group relative h-[320px] w-[320px] flex-shrink-0 overflow-hidden border-2 bg-black/60 shadow-[0_0_40px_rgba(0,0,0,0.75)] transition select-none touch-manipulation " +
        (isLocked
          ? " cursor-not-allowed opacity-60 border-slate-700"
          : " cursor-pointer border-fuchsia-400/20 hover:-translate-y-1 hover:border-fuchsia-400/70 hover:shadow-[0_0_55px_rgba(168,85,247,0.35)]")
      }
    >
      {/* ✅ Background + efekty: nie przechwytują klików */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={module.image}
          alt={module.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(700px_circle_at_30%_25%,rgba(168,85,247,0.28),transparent_40%),radial-gradient(700px_circle_at_80%_30%,rgba(45,212,191,0.20),transparent_45%)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* ✅ Content: też nie przechwytuje klików (klik ma złapać overlay) */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5 pointer-events-none">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-fuchsia-200">
            {module.tag || "PRO • Kurs"}
          </div>

          {isLocked && (
            <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-slate-200">
              <Lock className="h-3 w-3" />
              Wkrótce
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-extrabold leading-tight text-white">
            {module.title}
          </h3>

          {module.subtitle && (
            <p className="text-sm text-slate-200/90 line-clamp-3">
              {module.subtitle}
            </p>
          )}

          {!isLocked && (
            <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-200">
              Wejdź do kursu <ArrowRight className="h-4 w-4" />
            </div>
          )}

          {isLocked && (
            <p className="text-xs font-medium text-slate-300">
              Ten kurs zostanie odblokowany wkrótce.
            </p>
          )}
        </div>
      </div>

      {/* ✅ Overlay: klikalne 100% powierzchni + zawsze na wierzchu */}
      {!isLocked &&
        (isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20"
            aria-label={`Wejdź do kursu: ${module.title}`}
          />
        ) : (
          <Link
            href={href}
            className="absolute inset-0 z-20"
            aria-label={`Wejdź do kursu: ${module.title}`}
          />
        ))}

      {isLocked && <div className="pointer-events-none absolute inset-0" />}
    </Card>
  );
}
