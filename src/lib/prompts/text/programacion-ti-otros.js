// src/lib/prompts/text/programacion-ti-otros.js

export const textPromptsProgramacionTiOtros = [
  {
    id: "proti-otr-001",
    title: "Szybka diagnoza buga (kroki, hipotezy i fix)",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Strukturyzuje profesjonalny plan znalezienia i naprawy buga bez marnowania czasu.",
    prompt: `Działaj jako starszy inżynier od debugowania.

Inputs:
- Dokładny symptom (co widać).
- Kiedy występuje (ścieżki, użytkownicy, urządzenia).
- Logi/błędy (jeśli są).
- Co zmieniło się ostatnio.

Generuj:
1) 10 priorytetyzowanych hipotez (najbardziej prawdopodobna → najmniej).
2) Jakie dowody potwierdziłyby/obaliłyby każdą hipotezę.
3) Plan minimalnej reprodukcji (minimal repro).
4) Przydatną instrumentację (logi, trace’y, flagi) i gdzie ją dodać.
5) Proponowany fix z ryzykami i planem rollbacku.
6) Testy zapobiegające regresji.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-002",
    title: "Optymalizacja wydajności (p95/p99) z mierzalnym planem",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Zmniejsza latencję, identyfikując wąskie gardła i wdrażając ulepszenia oparte na metrykach.",
    prompt: `Działaj jako inżynier wydajności.

Inputs:
- Dotknięty system (API, web, job).
- Obecne metryki (p50/p95/p99, RPS).
- Koszty (CPU/RAM/DB/IO).
- Ograniczenia (serverless, współdzielona DB itd.).

Generuj:
1) Mapę ścieżki krytycznej (etapy i czasy).
2) Top 8 prawdopodobnych przyczyn i jak mierzyć każdą.
3) Plan optymalizacji wg wpływu/ryzyka.
4) Konkretne zmiany (cache, indeksy, batching, streaming itd.).
5) Cele docelowe (przed/po) i jak je zweryfikować.
6) Plan rollbacku + checklista regresji.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-003",
    title: "Przegląd PR jako tech lead (jakość + bezpieczeństwo)",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Checklista do przeglądu pull requestów bez pozostawiania luk.",
    prompt: `Działaj jako tech lead przeglądający PR.

Inputs:
- Opis PR.
- Zmienione pliki.
- Ryzyko (wysokie/średnie/niskie).
- Kontekst funkcji.

Generuj:
1) Kluczowe pytania do odpowiedzenia (cel, wpływ, trade-offy).
2) Checklistę: poprawność, edge cases, bezpieczeństwo, wydajność.
3) Listę konkretnych komentarzy (np. „nit”, „blocking”, „suggestion”).
4) Minimalne wymagane testy (unit/integration/e2e).
5) Sygnały długu technicznego i jak go ograniczyć.
6) Jasne warunki „Approved if”.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-004",
    title: "Projekt bazy danych (schemat + indeksy + migracje)",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Modeluje dane z myślą o integralności, wydajności i ewolucji.",
    prompt: `Działaj jako architekt danych.

Inputs:
- Encje i relacje.
- Krytyczne zapytania (top 10 queries).
- Oczekiwany wolumen (miesiąc 1, miesiąc 12).
- Baza (Postgres/MySQL/Mongo).

Generuj:
1) Proponowany schemat (tabele/kolekcje + pola).
2) Klucze główne/obce i constraints.
3) Rekomendowane indeksy dla krytycznych zapytań.
4) Strategię migracji (kroki, online migrations jeśli dotyczy).
5) Politykę usuwania (soft delete vs hard) i audyt.
6) Testy integralności i wydajności.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-005",
    title: "Plan monitoringu i alertów (SRE podstawy, praktycznie)",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Określa, co mierzyć i kiedy alarmować bez spamu.",
    prompt: `Działaj jako SRE.

Inputs:
- Aplikacja (web/api/worker).
- SLA/SLO (jeśli są).
- Punkty krytyczne (płatności, logowanie, checkout).
- Stack (Vercel, AWS itd.).

Generuj:
1) Golden signals: latencja, ruch, błędy, nasycenie.
2) Metryki specyficzne dla komponentów (DB, cache, kolejki).
3) Alerty (próg + okno + ważność) z przykładami.
4) Minimalne dashboardy (jakie wykresy).
5) Logi i trace’y: jakie pola uwzględnić (traceId, userId, requestId).
6) Krótki runbook dla alertu (co zrobić najpierw).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-006",
    title: "Praktyczne bezpieczeństwo: hardening aplikacji webowej/API",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Checklista działań, aby uniknąć najczęstszych błędów.",
    prompt: `Działaj jako inżynier AppSec.

Inputs:
- Typ aplikacji (Next.js, API, mobile).
- Używane uwierzytelnianie (cookies/JWT/OAuth).
- Dane wrażliwe (co przechowujesz).
- Powierzchnia publiczna (endpointy, uploady).

Generuj:
1) Najważniejsze ryzyka w moim przypadku (IDOR, XSS, CSRF, SSRF itd.).
2) Konkretne zabezpieczenia dla każdego ryzyka (walidacje, nagłówki, polityki).
3) Zasady dot. sekretów (rotacja, env vars, nie logować).
4) Zabezpieczenia uploadów i drogich endpointów.
5) Checklista wdrożenia (CSP, HSTS, rate limits).
6) Rekomendowane testy lub narzędzia (linting/DAST/SAST).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-007",
    title: "Strategia cache’owania (CDN, serwer, klient) bez psucia danych",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Przyspiesza bez serwowania starych lub prywatnych danych przez pomyłkę.",
    prompt: `Działaj jako architekt wydajności.

Inputs:
- Co chcesz cache’ować (HTML, API, obrazy).
- Częstotliwość zmian.
- Wrażliwość (publiczne/prywatne).
- Infra (CDN, Redis, serverless).

Generuj:
1) Co cache’ować i gdzie (CDN/serwer/klient).
2) Rekomendowane TTL wg typu treści.
3) Inwalidację (cache busting, tagi, purge).
4) Nagłówki (Cache-Control, Vary) z przykładami.
5) Ryzyka (wycieki, stare dane) i mitigacje.
6) Plan pomiaru (hit ratio, p95).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-008",
    title: "Plan migracji technicznej (duży refaktor bez wyłączania produkcji)",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Dzieli duży refaktor na bezpieczne kroki, które można wdrażać.",
    prompt: `Działaj jako tech lead.

Inputs:
- Co ma być migrowane (framework, DB, auth, architektura).
- Ryzyko (wysokie/średnie/niskie).
- Okno zmian.
- Dostępny zespół.

Generuj:
1) Podejście (strangler fig, dual-write, feature flags).
2) Fazy migracji (milestones) z deliverables.
3) Sygnały sukcesu na fazę (metryki/QA).
4) Plan rollbacku.
5) Komunikację i koordynację (kto waliduje co).
6) Końcową checklistę przed wyłączeniem starego.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-009",
    title: "Projekt architektury feature’a (szybki ADR)",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Krótki dokument uzasadniający decyzje techniczne.",
    prompt: `Działaj jako autor ADR (Architecture Decision Record).

Inputs:
- Problem.
- Rozważane opcje (A/B/C).
- Ograniczenia (czas, koszt, kompatybilność).
- Wymagania niefunkcjonalne (wydajność, bezpieczeństwo).

Generuj:
1) Kontekst i cel.
2) Opcje + plusy/minusy.
3) Rekomendowaną decyzję i dlaczego.
4) Konsekwencje i ryzyka.
5) Plan wdrożenia.
6) Jak zmierzyć, że zadziałało.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-010",
    title: "Przewodnik logowania: co logować i czego NIE, żeby debug miał sens",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Logi użyteczne, spójne i bezpieczne (bez wycieku sekretów).",
    prompt: `Działaj jako starszy inżynier.

Inputs:
- Typ usługi.
- Typowe błędy.
- Dane wrażliwe (czego nie wolno logować).
- Narzędzia (console, sentry, datadog itd.).

Generuj:
1) Standardowe pola logu (level, requestId, userId, route, latency).
2) Rekomendowany format (ustrukturyzowany JSON).
3) Kluczowe zdarzenia do logowania (auth, płatności, błędy, joby).
4) Redakcję danych wrażliwych (maskowanie).
5) Przykłady dobrych i złych logów.
6) Checklistę logów na produkcji.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-011",
    title: "Strategia testów (unit/integration/e2e) realistyczna wg priorytetów",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Buduje strategię testów o wysokim ROI.",
    prompt: `Działaj jako QA/tech lead.

Inputs:
- Typ aplikacji.
- Krytyczne przepływy (lista).
- Stack testów (jeśli jest).
- Dostępny czas tygodniowo.

Generuj:
1) Piramidę testów dopasowaną do mojego przypadku.
2) Listę 15 krytycznych testów (wg przepływu) z kryteriami.
3) Co mockować, a czego NIE mockować.
4) Testy kontraktowe (API) i snapshoty, jeśli dotyczy.
5) Pipeline CI (co uruchamiać w PR vs nocne).
6) Metryki jakości (sensowny coverage, flaky rate).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-012",
    title: "Plan CI/CD: pipeline prosty, ale solidny",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Automatyzuje buildy, testy i deploye z jasnymi bramkami.",
    prompt: `Działaj jako DevOps.

Inputs:
- Repo (monorepo tak/nie).
- Środowiska (dev/staging/prod).
- Narzędzie (GitHub Actions, GitLab itd.).
- Wymagania (lint, testy, preview deploys).

Generuj:
1) Rekomendowany pipeline krok po kroku.
2) Joby i cache (node_modules, build cache).
3) Bramki dla merge i release.
4) Strategię wersjonowania i wydań.
5) Plan rollbacku i feature flags.
6) Checklistę bezpieczeństwa (sekrety, uprawnienia).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-013",
    title: "Zarządzanie incydentami (postmortem bez obwiniania)",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Strukturyzuje postmortem z realnymi działaniami.",
    prompt: `Działaj jako incident commander.

Inputs:
- Co się stało (symptomy).
- Czas trwania incydentu.
- Wpływ (użytkownicy, $).
- Oś czasu (zdarzenia).

Generuj:
1) Streszczenie wykonawcze (1 akapit).
2) Timeline z godzinami/minutami.
3) Przyczyna źródłowa vs czynniki współistniejące.
4) Co nie zadziałało w detekcji (alerty, dashboardy).
5) Działania naprawcze (owner, priorytet, data).
6) Usprawnienia prewencji i wnioski.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-014",
    title: "Estymacja i plan wdrożenia (feature) z jasnymi zadaniami",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Rozbija na zadania, ryzyka, zależności i deliverables.",
    prompt: `Działaj jako tech lead planujący.

Inputs:
- Opis feature’a.
- Ograniczenia (deadline, zespół).
- Zależności (API, DB, design).
- Wymagania jakości (testy, wydajność).

Generuj:
1) Breakdown na zadania (frontend/backend/infra).
2) Zależności i blokery.
3) Ryzyka i mitigacje.
4) Estymację na zadanie (t-shirt size + godziny).
5) Plan release’u (staging, canary, flaga).
6) Definition of Done.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-015",
    title: "Przewodnik dokumentacji technicznej (README + runbook)",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Dokumentuje w sposób użyteczny dla Ciebie i Twojego przyszłego zespołu.",
    prompt: `Działaj jako technical writer.

Inputs:
- Projekt.
- Jak uruchomić lokalnie.
- Zmienne środowiskowe.
- Deploy i operacje.

Generuj:
1) Idealną strukturę README (sekcje).
2) Setup lokalny krok po kroku.
3) Typowy troubleshooting (częste błędy).
4) Runbook produkcyjny (alerty i działania).
5) Playbook release’ów.
6) Checklistę utrzymania dokumentacji aktualnej.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-016",
    title: "Projekt feature flagów i eksperymentów (A/B) bez chaosu",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Wdraża zmiany stopniowo i mierzy wpływ.",
    prompt: `Działaj jako inżynier platformy.

Inputs:
- Feature do kontrolowania.
- Segmentacja (użytkownicy, % ruchu).
- Metryki celu (konwersja, błędy).
- Narzędzie (jeśli istnieje).

Generuj:
1) Typy flag (release/ops/experiment).
2) Konwencję nazewnictwa i lifecycle.
3) Reguły targetowania i rollout.
4) Metryki i analiza A/B (co mierzyć).
5) Plan wyłączenia/cleanup.
6) Typowe ryzyka (flag debt) i mitigacje.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-017",
    title: "Check dostępności i technicznego UX (web)",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Poprawia dostępność bez psucia designu ani wydajności.",
    prompt: `Działaj jako specjalista dostępności web.

Inputs:
- Strona/przepływ.
- Kluczowe komponenty.
- Framework (React/Next).
- Znane problemy.

Generuj:
1) Praktyczną checklistę WCAG (klawiatura, focus, etykiety, kontrast).
2) Konkretne zmiany w komponentach.
3) Zasady ARIA (co stosować, a czego unikać).
4) Testy (manualne + narzędzia) i jak je uruchomić.
5) Ryzyka regresji.
6) Priorytet wg wpływu (wysoki/średni/niski).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-018",
    title: "Refaktor legacy kodu (bezpieczne kroki + testy)",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Refaktor bez strachu: najpierw testy, potem małe zmiany.",
    prompt: `Działaj jako starszy inżynier.

Inputs:
- Plik/obszar legacy.
- Symptomy (trudne zmiany, bugi, wydajność).
- Istniejące testy (tak/nie).
- Deadline.

Generuj:
1) Strategię refaktoru (charakteryzacja, golden master).
2) Minimalne testy jako siatka bezpieczeństwa.
3) Sekwencję małych zmian (plan commitów).
4) Metryki poprawy (złożoność, pokrycie, bugi).
5) Sygnały, by się zatrzymać lub cofnąć.
6) Oczekiwany efekt końcowy (struktura/modułowość).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-019",
    title: "Podstawowa architektura uwierzytelniania (cookies/JWT) dla aplikacji web",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Implementuje proste, ale bezpieczne i utrzymywalne logowanie.",
    prompt: `Działaj jako inżynier bezpieczeństwa backend/frontend.

Inputs:
- Typ aplikacji (SPA + API, Next itd.)
- Typ logowania (e-mail/hasło, magic link).
- Wymagania (role, trwała sesja).
- Infra (serverless, baza).

Generuj:
1) Przepływ login/logout/refresh.
2) Bezpieczne cookies (httpOnly, secure, sameSite) albo JWT (trade-offy).
3) Middleware/guardy (jak chronić trasy).
4) Obsługę sesji (wygaśnięcie, unieważnienie).
5) Ochronę przed typowymi atakami (CSRF, brute force).
6) Minimalne testy i checklistę produkcyjną.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-020",
    title: "Checklista deployu na produkcję (unikać awarii)",
    area: "Programowanie i IT",
    category: "Inne",
    summary:
      "Lista kontrolna, by wdrożyć bez rozwalenia sprzedaży.",
    prompt: `Działaj jako release manager.

Inputs:
- Co się zmieniło (streszczenie).
- Platforma (Vercel, AWS itd.).
- Ryzyko zmiany.
- Okno wdrożenia.

Generuj:
1) Checklistę pre-deploy (env vars, migracje, flagi).
2) Walidację na staging (smoke testy).
3) Plan deployu (canary/stopniowo, jeśli dotyczy).
4) Walidację post-deploy (metryki, logi, błędy).
5) Plan natychmiastowego rollbacku.
6) Minimalną komunikację i rejestr release’u.`,
    thumbnail: "",
  },
];
