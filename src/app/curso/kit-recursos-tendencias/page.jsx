// src/app/curso/kit-recursos-tendencias/page.jsx
"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Music2, Image as ImageIcon, Folder, Info } from "lucide-react";

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
      {/* Back */}
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="rounded-full border border-white/10 bg-white/5 text-xs text-slate-100 hover:bg-white/10"
        >
          <Link href="/curso">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio del curso
          </Link>
        </Button>

        <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-teal-200">
          Kit de recursos
        </Badge>
      </div>

      {/* Hero */}
      <section className="space-y-3 rounded-3xl border border-teal-500/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-6 md:px-8 md:py-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
              Kit de Recursos en Tendencias
            </h1>
            <p className="max-w-3xl text-sm md:text-base text-slate-200">
              Aquí tienes <span className="text-teal-200 font-semibold">todos los recursos listos</span> para usar:
              sonidos, filtros, tipografías y material visual. Están organizados en 2 carpetas de Google Drive para que
              puedas entrar, descargar y guardar tus favoritos.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 md:w-[360px]">
            <QuickOpen
              icon={<Music2 className="h-4 w-4" />}
              label="Abrir sonidos"
              url={SOUND_FOLDER_URL}
            />
            <QuickOpen
              icon={<ImageIcon className="h-4 w-4" />}
              label="Abrir imágenes"
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
                Tip rápido (por si Drive se pone difícil)
              </p>
              <p className="text-xs text-slate-300">
                Si no te deja ver la carpeta desde el navegador, prueba abrir el link en una pestaña nueva, iniciar
                sesión con tu Google, o usar la app de Google Drive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two main cards */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Sounds */}
        <Card className="overflow-hidden border-white/10 bg-slate-950/70">
          <CardHeader className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-300">
                  Carpeta 1
                </p>
                <h2 className="text-lg font-semibold text-slate-50">
                  Recursos de sonido (tendencias)
                </h2>
                <p className="text-sm text-slate-300">
                  Audios, sonidos y recursos listos para guardar y reutilizar en tu contenido.
                </p>
              </div>

              <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-slate-200">
                <Music2 className="mr-1 h-3 w-3" />
                Sonidos
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
                    Todos los recursos de sonido están aquí
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
                <a href={SOUND_FOLDER_URL} target="_blank" rel="noopener noreferrer">
                  Abrir carpeta de sonidos <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
              >
                <a href={SOUND_FOLDER_URL} target="_blank" rel="noopener noreferrer">
                  Copiar/usar link
                </a>
              </Button>
            </div>

            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Guarda tus favoritos y crea tu “biblioteca” personal.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Si estás en móvil: abre en Drive app para descargar más fácil.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Images */}
        <Card className="overflow-hidden border-white/10 bg-slate-950/70">
          <CardHeader className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-300">
                  Carpeta 2
                </p>
                <h2 className="text-lg font-semibold text-slate-50">
                  Recursos de imagen (tendencias)
                </h2>
                <p className="text-sm text-slate-300">
                  Imágenes, referencias visuales y recursos para elevar tu contenido.
                </p>
              </div>

              <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-slate-200">
                <ImageIcon className="mr-1 h-3 w-3" />
                Imágenes
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
                    Todos los recursos de imagen están aquí
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
                <a href={IMAGE_FOLDER_URL} target="_blank" rel="noopener noreferrer">
                  Abrir carpeta de imágenes <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
              >
                <a href={IMAGE_FOLDER_URL} target="_blank" rel="noopener noreferrer">
                  Copiar/usar link
                </a>
              </Button>
            </div>

            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Úsalas como referencia para prompts, thumbnails y piezas visuales.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Si ves “No tienes acceso”, revisa que estés logueado con el mismo Google.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Bottom CTA / Help */}
      <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-slate-50">
              ¿No puedes entrar?
            </h3>
            <p className="text-sm text-slate-300">
              Usa los links directos de arriba. Si sigue fallando, intenta abrirlos en una pestaña nueva o en la app de
              Drive.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
            >
              <a href={SOUND_FOLDER_URL} target="_blank" rel="noopener noreferrer">
                Link sonidos <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
            >
              <a href={IMAGE_FOLDER_URL} target="_blank" rel="noopener noreferrer">
                Link imágenes <ExternalLink className="ml-2 h-4 w-4" />
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
