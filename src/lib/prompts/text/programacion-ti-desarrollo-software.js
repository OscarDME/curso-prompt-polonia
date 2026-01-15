// src/lib/prompts/text/programacion-ti-desarrollo-software.js

export const textPromptsProgramacionTiDesarrolloSoftware = [
  {
    id: "proti-001",
    title: "Architektura oprogramowania 360° (od pomysłu do produkcji)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Zaprojektuj architekturę, stack, moduły, przepływy i decyzje techniczne wraz z trade-offami.",
    prompt: `Działaj jako starszy architekt oprogramowania.

Dane wejściowe:
- Jaki problem rozwiązuje produkt.
- Typ aplikacji (web, mobile, API, desktop).
- Oczekiwana liczba użytkowników (dziś i za 12 miesięcy).
- Kluczowe wymagania (latencja, bezpieczeństwo, offline, integracje).
- Ograniczenia (budżet, zespół, czas).

Wygeneruj:
1) Propozycję architektury (diagram opisany tekstowo).
2) Rekomendowany stack (frontend, backend, DB, cache, queue) i dlaczego.
3) Główne moduły/usługi i ich odpowiedzialności.
4) Projekt danych (bazowe encje + relacje).
5) Krytyczne przepływy (login, płatności, wyszukiwanie itd.) krok po kroku.
6) Ryzyka techniczne + mitygacje.
7) Checklistę wejścia na produkcję (obserwowalność, backupy, CI/CD).`,
    thumbnail: "",
  },

  {
    id: "proti-002",
    title: "Plan wdrożenia w sprintach (MVP w 14–28 dni)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Zamień wymagania w backlog, user stories, priorytety i deliverables per sprint.",
    prompt: `Działaj jako Tech Lead z myśleniem produktowym.

Dane wejściowe:
- Pożądane funkcje (lista).
- Docelowa data.
- Zespół (liczba devów i profile).
- Preferowany stack (jeśli dotyczy).
- Znane ryzyka.

Wygeneruj:
1) Definicję MVP (co wchodzi, a co odkładamy).
2) Backlog w formie user stories (min. 15) z kryteriami akceptacji.
3) Roadmapę per sprint (po 2 tygodnie) z deliverables.
4) Zależności techniczne i sugerowaną kolejność.
5) Plan QA i środowiska (dev/staging/prod).
6) Metryki weryfikacji MVP (produktowe + techniczne).`,
    thumbnail: "",
  },

  {
    id: "proti-003",
    title: "Projekt API REST (standardy + endpointy + błędy)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Ustrukturyzuj endpointy, kontrakty, walidację, auth, paginację i kody błędów.",
    prompt: `Działaj jako senior backend engineer.

Dane wejściowe:
- Domena (e-commerce, kursy, CRM itd.).
- Główne zasoby (użytkownicy, zamówienia itd.).
- Typ auth (JWT, cookies, OAuth).
- Ważne reguły biznesowe.
- Potrzeba paginacji/filtrów/wyszukiwania.

Wygeneruj:
1) Konwencje (nazwy, wersjonowanie, nagłówki).
2) Listę endpointów (CRUD + akcje) z przykładami request/response JSON.
3) Schemat błędów (kody, komunikaty, pola).
4) Paginację, sortowanie i filtry (standardowy sposób).
5) Zasady bezpieczeństwa (rate limit, uprawnienia, scope’y/role).
6) Checklistę dokumentacji (OpenAPI/Swagger).`,
    thumbnail: "",
  },

  {
    id: "proti-004",
    title: "Projekt bazy danych (SQL) gotowy do budowy",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Model relacyjny, normalizacja, indeksy, ograniczenia i migracje.",
    prompt: `Działaj jako inżynier danych/DBA.

Dane wejściowe:
- Encje biznesowe (lista).
- Częste akcje (typowe zapytania).
- Szacowany wolumen (rekordy/miesiąc).
- Wymagania (spójność, audyt, soft delete).
- Preferowana DB (Postgres/MySQL/SQLite).

Wygeneruj:
1) Opis diagramu ER (tabele i relacje).
2) Bazowy DDL SQL (CREATE TABLE) z kluczami, constraints i typami.
3) Rekomendowane indeksy wg zapytań.
4) Strategię migracji (nazewnictwo, rollback).
5) Uwagi dot. wydajności i skalowalności.
6) Audyt (created_at/updated_at, śledzenie zmian).`,
    thumbnail: "",
  },

  {
    id: "proti-005",
    title: "System uwierzytelniania i ról (RBAC) bez wpadek",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Zaprojektuj bezpieczny login, sesje, role/uprawnienia, refresh i kontrolę backend/frontend.",
    prompt: `Działaj jako security-minded senior fullstack.

Dane wejściowe:
- Typ aplikacji.
- Wymagane role (np. admin, user, editor).
- Wymagania sesji (cookie/JWT).
- Czy będzie 2FA (tak/nie).
- Ograniczenia prawne (jeśli dotyczy).

Wygeneruj:
1) Propozycję auth (opcja A i B) z plusami/minusami.
2) Model ról/uprawnień (macierz).
3) Przepływ login/logout/refresh (krok po kroku).
4) Zasady bezpieczeństwa: hashing, CSRF, XSS, rotacja, rate-limit.
5) Strukturę middleware/guards w backendzie i chronione trasy w frontendzie.
6) Checklistę testów bezpieczeństwa dla auth.`,
    thumbnail: "",
  },

  {
    id: "proti-006",
    title: "Brutalny code review (checklista + komentarze jak senior)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Checklista przeglądu i przykłady komentarzy, które podnoszą jakość bez bycia bucem.",
    prompt: `Działaj jako senior reviewer w wysokowydajnym zespole.

Dane wejściowe:
- Język i framework.
- Typ zmiany (feature, bugfix, refactor).
- Ograniczenia wydajności/bezpieczeństwa.
- Standardy repo (lint, testy).
- Fragment kodu lub opis PR.

Wygeneruj:
1) Checklistę: poprawność, projekt, czytelność, testy, bezpieczeństwo, wydajność.
2) 10 przykładowych komentarzy (jasne, wykonalne, bez upokarzania).
3) Czerwone flagi (antywzorce), które powinny zablokować merge.
4) Rekomendacje refaktoru małymi krokami.
5) Jak zmierzyć, że PR poprawił system (metryki).`,
    thumbnail: "",
  },

  {
    id: "proti-007",
    title: "Planowany refactor (od spaghetti do modułów) bezpiecznymi krokami",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Plan refaktoru bez psucia produkcji: inkrementalnie, z testami i strategią rollout’u.",
    prompt: `Działaj jako Tech Lead specjalizujący się w dużych refactorach.

Dane wejściowe:
- Co jest „brzydkie” (folder/plik/moduł).
- Objawy (bugi, trudno zmieniać, powiązane ze wszystkim).
- Ryzyko (wysokie/średnie/niskie).
- Aktualne pokrycie testami.
- Deadline.

Wygeneruj:
1) Diagnozę: co boli i dlaczego.
2) Idealną strategię: strangler pattern / feature flags / moduły.
3) Plan w 5–10 małych krokach (każdy merge’owalny).
4) Jakie testy stworzyć najpierw (unit/integration/e2e) i w jakiej kolejności.
5) Strategię rollout’u i rollbacku.
6) Definition of Done, by zamknąć refactor.`,
    thumbnail: "",
  },

  {
    id: "proti-008",
    title: "Prowadzone debugowanie (znajdź buga bez tracenia głowy)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Protokół debugowania: hipotezy, reprodukcja, logi, bisect i weryfikacja.",
    prompt: `Działaj jako senior inżynier rozwiązujący incydenty.

Dane wejściowe:
- Dokładny symptom.
- Gdzie występuje (środowisko, ścieżka, feature).
- Logi/stacktrace (jeśli są).
- Ostatnie zmiany.
- Częstotliwość (zawsze/okazjonalnie).

Wygeneruj:
1) 10 hipotez uporządkowanych wg prawdopodobieństwa.
2) Jak wiarygodnie odtworzyć (kroki).
3) Jakie logi/metryki dodać i gdzie.
4) Plan izolacji: redukcja zmiennych, bisect, toggles.
5) Jak zwalidować fix i uniknąć regresji.
6) Mini postmortem: przyczyna źródłowa + działanie zapobiegawcze.`,
    thumbnail: "",
  },

  {
    id: "proti-009",
    title: "Kompletna strategia testów (unit + integration + e2e) dla Twojej aplikacji",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Zdefiniuj piramidę testów: co testować, jak organizować i co automatyzować.",
    prompt: `Działaj jako QA lead + software engineer.

Dane wejściowe:
- Typ aplikacji i stack.
- Główne ryzyka (płatności, auth, dane).
- Zespół i czas.
- Infra (CI, staging).
- Preferowane narzędzia.

Wygeneruj:
1) Piramidę testów i rekomendowany rozkład (%).
2) Listę testów krytycznych (min. 20) wg typu.
3) Konwencje: nazewnictwo, struktura folderów, fixtures.
4) Strategię mocków i danych testowych.
5) Rekomendowany pipeline CI (lint, testy, e2e, pokrycie).
6) Metryki: sensowne pokrycie, flakiness, czas całkowity.`,
    thumbnail: "",
  },

  {
    id: "proti-010",
    title: "CI/CD dla deployów bez strachu (pipeline + bramki + rollback)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Zaprojektuj nowoczesny pipeline z checkami, preview, release’ami i rollbackiem.",
    prompt: `Działaj jako DevOps/Platform engineer.

Dane wejściowe:
- Repo (monorepo/multirepo).
- Hosting (Vercel, AWS itd.).
- Środowiska (dev/staging/prod).
- Potrzeba migracji.
- Tolerancja ryzyka (wysoka/niska).

Wygeneruj:
1) Idealny pipeline (etapy i kolejność).
2) Bramki jakości (lint, testy, coverage, security scan).
3) Strategię deployu (blue/green, canary, feature flags).
4) Bezpieczne podejście do migracji DB.
5) Rollback i szybki runbook.
6) Alerty i minimalną obserwowalność dla wydań.`,
    thumbnail: "",
  },

  {
    id: "proti-011",
    title: "Dokumentacja techniczna, której faktycznie się używa (README + ADR + runbooki)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Struktura użytecznych docs: onboarding, decyzje, operacje i troubleshooting.",
    prompt: `Działaj jako Tech Writer + Staff Engineer.

Dane wejściowe:
- Typ projektu.
- Zespół (nowi devsi tak/nie).
- Częste problematyczne obszary.
- Jak dziś wygląda deploy.
- Typowe incydenty.

Wygeneruj:
1) Spis minimalnej, wykonalnej dokumentacji.
2) Szablon README (dokładne sekcje).
3) Szablon ADR (Architecture Decision Record).
4) Runbook dla 3 typowych incydentów (kroki + komendy).
5) Checklistę utrzymania docs na bieżąco.`,
    thumbnail: "",
  },

  {
    id: "proti-012",
    title: "Realistyczne estymacje techniczne (bez obiecywania bzdur)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Jak estymować feature’y z ryzykami, założeniami, buforami i jasnym zakresem.",
    prompt: `Działaj jako Tech Lead odpowiedzialny za planowanie.

Dane wejściowe:
- Feature do zbudowania.
- Zależności zewnętrzne.
- Postrzegana złożoność (niska/średnia/wysoka).
- Zespół i tygodniowa przepustowość.
- Docelowa data (jeśli jest).

Wygeneruj:
1) Podział na komponenty (frontend, backend, data, QA, DevOps).
2) Jawne założenia (min. 10).
3) Ryzyka i „unknowns” z planem odkrywania (spikes).
4) Estymację w zakresach (optymistyczna/realistyczna/pesymistyczna).
5) Plan cięcia scope’u, jeśli się skomplikuje.
6) Jak zakomunikować estymację biznesowi bez konfliktu.`,
    thumbnail: "",
  },

  {
    id: "proti-013",
    title: "Migracja z legacy do nowoczesnego (bez wywracania systemu)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Plan stopniowy: wydzielić, owinąć, zastąpić, mierzyć i wyłączyć.",
    prompt: `Działaj jako Staff Engineer specjalizujący się w migracjach.

Dane wejściowe:
- Obecny system (stack).
- Problemy (wydajność, dług, koszty).
- Co migrować najpierw.
- Ograniczenia (zero downtime, compliance).
- Zespół i termin.

Wygeneruj:
1) Rekomendowaną strategię (strangler, częściowy rewrite itd.).
2) Plan fazami z jasnymi kamieniami milowymi.
3) Co mierzyć w każdej fazie (metryki techniczne + biznesowe).
4) Typowe ryzyka i mitygacje.
5) Plan kompatybilności (API, dane, auth).
6) Kryteria wyłączenia legacy.`,
    thumbnail: "",
  },

  {
    id: "proti-014",
    title: "Wyszukiwanie i wydajność: jak optymalizować wolne zapytania",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Diagnoza wolnych endpointów: profiling, indeksy, cache, batching i N+1.",
    prompt: `Działaj jako inżynier wydajności.

Dane wejściowe:
- Wolny endpoint lub query.
- DB i ORM (jeśli dotyczy).
- Wolumen (rekordy).
- Docelowe SLA (ms/s).
- Obserwacje (piki, intermitencja).

Wygeneruj:
1) Checklistę diagnozy (profiling, logi, explain analyze).
2) Typowe hipotezy (N+1, brak indeksu, overfetching).
3) Plan optymalizacji w krokach (szybkie → głębokie).
4) Strategię cache (co, gdzie, invalidacja).
5) Jak zweryfikować poprawę (benchmarki przed/po).
6) Ryzyka złej optymalizacji i jak ich unikać.`,
    thumbnail: "",
  },

  {
    id: "proti-015",
    title: "Projekt systemu logów i trace’ów (minimalna obserwowalność)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Zdefiniuj użyteczne logi, correlation IDs, metryki, tracing, alerty i dashboardy.",
    prompt: `Działaj jako SRE.

Dane wejściowe:
- Typ aplikacji.
- Infra (serverless, kontenery itd.).
- Częste incydenty.
- Narzędzia (Sentry, Datadog, OpenTelemetry itd.).
- Krytyczność (niska/wysoka).

Wygeneruj:
1) Co logować (pola obowiązkowe) i czego NIE (PII).
2) Correlation IDs i propagację (request → usługi).
3) Minimalne metryki: latencja, błędy, throughput, saturation.
4) Trace’y: jakie spany i jak je nazywać.
5) Alerty z sensownymi progami (unikać szumu).
6) Minimalny dashboard (5 kluczowych wykresów).`,
    thumbnail: "",
  },

  {
    id: "proti-016",
    title: "Podstawowe bezpieczeństwo w aplikacjach web (pragmatyczna checklista)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Wykonalna checklista bezpieczeństwa: nagłówki, auth, walidacja inputów, sekrety i uprawnienia.",
    prompt: `Działaj jako pragmatyczny AppSec.

Dane wejściowe:
- Stack (frontend/backend).
- Typ auth.
- Czy przechowuję dane wrażliwe (tak/nie).
- Hosting.
- Integracje zewnętrzne.

Wygeneruj:
1) Checklistę 25 punktów (priorytet wysoki/średni/niski).
2) Kontrole w backendzie (walidacja, sanitizacja, rate limit).
3) Kontrole we frontendzie (XSS, CSP, bezpieczne renderowanie).
4) Zarządzanie sekretami (env vars, rotacja, dostęp).
5) CORS/CSRF/cookies: rekomendowana konfiguracja.
6) Jak zrobić szybki przegląd przed produkcją.`,
    thumbnail: "",
  },

  {
    id: "proti-017",
    title: "Optymalizacja frontendu: Core Web Vitals (plan poprawy)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Plan poprawy LCP/CLS/INP z konkretnymi działaniami i pomiarem.",
    prompt: `Działaj jako frontend performance engineer.

Dane wejściowe:
- Framework (Next/React/Vue).
- Wolne strony (lista).
- Obrazy/wideo (tak/nie).
- Rozmiar bundla (jeśli wiem).
- Hosting/CDN.

Wygeneruj:
1) Prawdopodobną diagnozę per metryka (LCP/CLS/INP).
2) Konkretne działania dla każdej metryki (priorytet 1-2-3).
3) Strategię obrazów (formaty, responsywność, lazy, placeholders).
4) Strategię JS (code splitting, dynamic import, tree-shaking).
5) Jak mierzyć: narzędzia i rytuał (before/after).
6) Finalną checklistę przed releasem.`,
    thumbnail: "",
  },

  {
    id: "proti-018",
    title: "Integracja płatności (Stripe/PayPal) z bezpieczeństwem i księgowością",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Zaprojektuj checkout, webhooks, statusy, retry i uzgadnianie płatności.",
    prompt: `Działaj jako senior fullstack engineer.

Dane wejściowe:
- Dostawca (Stripe/PayPal).
- Typ rozliczenia (one-time/subscription).
- Waluty i kraje.
- Czy są zwroty/kupony.
- Model produktu (kurs, SaaS itd.).

Wygeneruj:
1) Przepływ płatności end-to-end (front → backend → dostawca → webhook).
2) Model statusów (pending/paid/failed/refunded) i reguły.
3) Strukturę webhooków (weryfikacja, idempotencja, ponowienia).
4) Rekomendowaną tabelę/kolekcję do rejestrowania transakcji.
5) Obsługę edge case’ów (podwójny webhook, timeout, chargeback).
6) Checklistę testów (sandbox) przed produkcją.`,
    thumbnail: "",
  },

  {
    id: "proti-019",
    title: "Generowanie backlogu technicznego (dług) z priorytetem wg wpływu",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Zamień dług techniczny w wykonalne tickety z wpływem, wysiłkiem i ryzykiem.",
    prompt: `Działaj jako Tech Lead, który chce spłacać dług bez hamowania biznesu.

Dane wejściowe:
- Lista problemów technicznych.
- Ostatnie incydenty.
- Obszary kodu z największą liczbą zmian.
- Dostępne metryki (jeśli są).
- Miesięczna przepustowość na dług (%).

Wygeneruj:
1) 20 ticketów długu technicznego (format: tytuł, opis, DoD).
2) Priorytetyzację (wpływ vs wysiłek) i rekomendowane top 5.
3) Jakiego długu jeszcze NIE spłacać (i dlaczego).
4) Miesięczny plan (2–4 tygodnie) z deliverables.
5) Jak zmierzyć, że spłacony dług poprawił system.`,
    thumbnail: "",
  },

  {
    id: "proti-020",
    title: "Projekt feature flags (stopniowe włączanie i eksperymenty)",
    area: "Programowanie i IT",
    category: "Tworzenie oprogramowania",
    summary:
      "Wdróż flagi, by zmniejszać ryzyko wydań i robić podstawowe A/B testy.",
    prompt: `Działaj jako Staff Engineer.

Dane wejściowe:
- Feature do wypuszczenia.
- Ryzyko (wysokie/średnie/niskie).
- Użytkownicy (segmenty).
- Infra (serverless czy własny backend).
- Potrzeba A/B testu (tak/nie).

Wygeneruj:
1) Typy potrzebnych flag (release, ops, experiment).
2) Architekturę flag (gdzie są, jak się je ocenia).
3) Strategię rollout’u (0%→1%→10%→50%→100%).
4) Monitoring podczas rollout’u (metryki i alerty).
5) Plan natychmiastowego rollbacku.
6) Sprzątanie flag (dług) i zasady ich usuwania.`,
    thumbnail: "",
  },
];
