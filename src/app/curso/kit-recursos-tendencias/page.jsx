// src/app/curso/kit-recursos-tendencias/page.jsx
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Music2,
  Image as ImageIcon,
  Folder,
  Info,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SOUND_FOLDER_URL =
  "https://drive.google.com/drive/folders/1QimLctX6tcOVXz-ENjJswaXD33zwWoo0";
const IMAGE_FOLDER_URL =
  "https://drive.google.com/drive/folders/1GaOl2Ha0AII8QSIhiuOCyA7380DVfQVl";

export default function KitRecursosTendenciasPage() {
  return (
    <div className="space-y-6 py-6">
      {/* Powrót */}
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="rounded-full border border-white/10 bg-white/5 text-xs text-slate-100 hover:bg-white/10"
        >
          <Link href="/curso">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Wróć do startu kursu
          </Link>
        </Button>

        <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-teal-200">
          Zestaw zasobów
        </Badge>
      </div>

      {/* Hero */}
      <section className="space-y-3 rounded-3xl border border-teal-500/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-6 md:px-8 md:py-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
              Zestaw zasobów trendów
            </h1>
            <p className="max-w-3xl text-sm md:text-base text-slate-200">
              Tutaj masz{" "}
              <span className="text-teal-200 font-semibold">
                wszystkie gotowe zasoby
              </span>{" "}
              do użycia: dźwięki, filtry, fonty i materiały wizualne. Są
              uporządkowane w 2 folderach Google Drive, żebyś mógł/mogła wejść,
              pobrać i zapisać swoje ulubione.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 md:w-[360px]">
            <QuickOpen
              icon={<Music2 className="h-4 w-4" />}
              label="Otwórz dźwięki"
              url={SOUND_FOLDER_URL}
            />
            <QuickOpen
              icon={<ImageIcon className="h-4 w-4" />}
              label="Otwórz obrazy"
              url={IMAGE_FOLDER_URL}
            />
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              <Info className="h-4 w-4 text-teal-300" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-100">
                Szybka wskazówka (gdy Drive robi problemy)
              </p>
              <p className="text-xs text-slate-300">
                Jeśli nie możesz podejrzeć folderu w przeglądarce, spróbuj
                otworzyć link w nowej karcie, zalogować się na Google albo użyć
                aplikacji Google Drive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dwie główne karty */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Dźwięki */}
        <Card className="overflow-hidden border-white/10 bg-slate-950/70">
          <CardHeader className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-300">
                  Folder 1
                </p>
                <h2 className="text-lg font-semibold text-slate-50">
                  Zasoby dźwiękowe (trendy)
                </h2>
                <p className="text-sm text-slate-300">
                  Audio, dźwięki i materiały gotowe do zapisania i ponownego
                  użycia w Twoich treściach.
                </p>
              </div>

              <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-slate-200">
                <Music2 className="mr-1 h-3 w-3" />
                Dźwięki
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Folder className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-100">
                    Wszystkie zasoby dźwiękowe są tutaj
                  </p>
                  <p className="mt-1 break-all text-xs text-slate-400">
                    {SOUND_FOLDER_URL}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                asChild
                className="w-full rounded-full bg-teal-400 text-sm font-semibold text-slate-900 hover:bg-teal-300"
              >
                <a
                  href={SOUND_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Otwórz folder z dźwiękami{" "}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
              >
                <a
                  href={SOUND_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Skopiuj/użyj linku
                </a>
              </Button>
            </div>

            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Zapisuj ulubione i buduj własną „bibliotekę”.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Na telefonie: otwórz w aplikacji Drive, łatwiej pobierzesz.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Obrazy */}
        <Card className="overflow-hidden border-white/10 bg-slate-950/70">
          <CardHeader className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-300">
                  Folder 2
                </p>
                <h2 className="text-lg font-semibold text-slate-50">
                  Zasoby graficzne (trendy)
                </h2>
                <p className="text-sm text-slate-300">
                  Obrazy, referencje wizualne i zasoby, które podniosą poziom
                  Twoich treści.
                </p>
              </div>

              <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-slate-200">
                <ImageIcon className="mr-1 h-3 w-3" />
                Obrazy
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Folder className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-100">
                    Wszystkie zasoby graficzne są tutaj
                  </p>
                  <p className="mt-1 break-all text-xs text-slate-400">
                    {IMAGE_FOLDER_URL}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                asChild
                className="w-full rounded-full bg-teal-400 text-sm font-semibold text-slate-900 hover:bg-teal-300"
              >
                <a
                  href={IMAGE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Otwórz folder z obrazami{" "}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
              >
                <a
                  href={IMAGE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Skopiuj/użyj linku
                </a>
              </Button>
            </div>

            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Używaj jako inspiracji do promptów, miniaturek i wizuali.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Jeśli widzisz „Brak dostępu”, sprawdź logowanie na to samo
                  konto Google.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Dolne CTA / Pomoc */}
      <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-slate-50">
              Nie możesz wejść?
            </h3>
            <p className="text-sm text-slate-300">
              Użyj bezpośrednich linków powyżej. Jeśli dalej nie działa, spróbuj
              otworzyć je w nowej karcie albo w aplikacji Drive.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
            >
              <a
                href={SOUND_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link do dźwięków <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
            >
              <a
                href={IMAGE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link do obrazów <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuickOpen({ icon, label, url }) {
  return (
    <Button
      asChild
      variant="outline"
      className="w-full rounded-full border-white/15 bg-white/5 text-xs text-slate-100 hover:bg-white/10"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="mr-2 inline-flex items-center">{icon}</span>
        {label}
        <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-80" />
      </a>
    </Button>
  );
}
