"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Info, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PromptGuide({ guide, storageKey }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) setOpen(saved === "1");
  }, [storageKey]);

  useEffect(() => {
    if (!storageKey) return;
    localStorage.setItem(storageKey, open ? "1" : "0");
  }, [open, storageKey]);

  if (!guide) return null;

  return (
    <Card className="border-white/10 bg-slate-950/60">
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-teal-300/80" />
          <h2 className="text-sm font-semibold text-slate-50">{guide.title}</h2>
        </div>

        <Button
          variant="ghost"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/10 bg-white/5 px-3 text-xs"
        >
          {open ? guide.hideLabel : guide.showLabel}
          <ChevronDown
            className={cn(
              "ml-2 h-4 w-4 transition-transform",
              open && "rotate-180"
            )}
          />
        </Button>
      </CardHeader>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <CardContent className="space-y-6 pb-6 text-sm text-slate-300">
              {guide.intro && <p>{guide.intro}</p>}

              {guide.blocks.map((block, idx) => {
                /* LIST */
                if (block.type === "list") {
                  return (
                    <ul key={idx} className="list-disc space-y-1 pl-5">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                /* PARAGRAPH */
                if (block.type === "paragraph") {
                  return <p key={idx}>{block.text}</p>;
                }

                /* SECTION */
                if (block.type === "section") {
                  return (
                    <div key={idx} className="space-y-2">
                      <h3 className="font-semibold text-teal-200">
                        {block.heading}
                      </h3>
                      <ul className="list-disc space-y-1 pl-5">
                        {block.content.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                /* SUBSECTION */
                if (block.type === "subsection") {
                  return (
                    <div key={idx} className="space-y-2 pl-3">
                      <h4 className="font-semibold text-slate-200">
                        {block.heading}
                      </h4>
                      <ul className="list-disc space-y-1 pl-5">
                        {block.content.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                /* IMAGE */
                if (block.type === "image") {
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
                        <Image
                          src={block.src}
                          alt={block.alt}
                          width={1200}
                          height={400}
                          className="h-auto w-full object-contain"
                        />
                      </div>

                      {block.caption && (
                        <p className="text-xs text-slate-400">
                          {block.caption}
                        </p>
                      )}
                    </div>
                  );
                }

                /* LINK (CLICKABLE) */
                if (block.type === "link") {
                  return (
                    <div key={idx}>
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

                return null;
              })}
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
