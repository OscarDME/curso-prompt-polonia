// src/lib/prompts/text/programacion-ti-debugging-troubleshooting.js

export const textPromptsProgramacionTiDebuggingTroubleshooting = [
  {
    id: "proti-debug-001",
    title: "Szybka diagnoza: problem → hipotezy → testy",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Porządkuje plan dochodzenia, aby wyizolować przyczynę źródłową bez marnowania czasu.",
    prompt: `Działaj jak starszy inżynier wsparcia/produkcji.

Dane wejściowe:
- Dokładny objaw (błąd, komunikat, zachowanie).
- Kiedy się zaczęło (ostatnia zmiana).
- Środowisko (local/staging/prod).
- Wpływ (dotknięci użytkownicy, %).
- Dostępne logi (tak/nie) + fragmenty.

Wygeneruj:
1) Priorytetyzowaną listę hipotez (top 10) z prawdopodobieństwem.
2) Minimalne testy, by potwierdzić/wykluczyć każdą hipotezę.
3) Jakie sygnały/telemetrię potrzebuję (logi, metryki, trace’y).
4) Plan izolacji warstwami (klient → sieć → backend → DB).
5) Bezpieczne „fast mitigation” (feature flag, rollback, rate limit).
6) Oczekiwaną przyczynę źródłową + rekomendowaną poprawkę.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-002",
    title: "Triaging błędów 500/502/503/504 (web)",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Przewodnik, jak odróżnić błąd aplikacji vs gateway vs upstream vs timeouty.",
    prompt: `Działaj jak SRE.

Dane wejściowe:
- Kod(y) błędu.
- Platforma (Vercel, Nginx, Cloudflare itp.).
- Dotknięte ścieżki.
- Średnia latencja oraz p95/p99.
- Ostatnie wdrożenia/zmiany.

Wygeneruj:
1) Prawdopodobne znaczenie każdego kodu w tym kontekście.
2) Checklist weryfikacji (gateway, DNS, TLS, upstream, app).
3) Jak odtworzyć i zebrać dowody (curl, nagłówki, timing).
4) Sygnały w logach dla każdej typowej przyczyny.
5) Szybkie mitigacje (caching, rate limit, rollback).
6) Docelową naprawę (co zmienić w kodzie/infrastrukturze).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-003",
    title: "Debugowanie problemów z cookies/sesją/autoryzacją",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Izoluje problemy związane z SameSite, path, domain, wygaśnięciem, SSR/CSR.",
    prompt: `Działaj jak ekspert od web auth.

Dane wejściowe:
- Nazwa(y) ciasteczka.
- Domeny i subdomeny.
- Przepływ logowania (kroki).
- Dotknięte przeglądarki.
- Środowisko (prod/staging/local).
- Czy jest middleware? Czy SSR?

Wygeneruj:
1) Checklist atrybutów cookie (Domain/Path/SameSite/Secure/HttpOnly).
2) Testy, by potwierdzić co się psuje (DevTools: Application/Network).
3) Typowe problemy zależne od środowiska (http vs https, localhost, subdomeny).
4) Rekomendowane rozwiązanie z przykładami (bez TypeScript).
5) Plan walidacji cross-browser.
6) Ryzyka bezpieczeństwa i jak je ograniczyć.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-004",
    title: "Problemy z wydajnością: profilowanie i optymalizacja krok po kroku",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Znajduje prawdziwe wąskie gardło zanim zaczniesz „optymalizować na ślepo”.",
    prompt: `Działaj jak performance engineer.

Dane wejściowe:
- Wolny endpoint/strona.
- Metryki (TTFB, LCP, INP, p95).
- Równoległe obciążenie.
- Stack (Next.js/Node/DB).
- Dostępna obserwowalność (APM tak/nie).

Wygeneruj:
1) Drzewo decyzyjne, czy problem to CPU, IO, DB czy sieć.
2) Plan pomiarów (profilowanie, logi czasów, trace’y).
3) Top 10 typowych przyczyn w tym stacku.
4) Eksperymenty (A/B) do potwierdzenia hipotez.
5) Quick wins (caching, memoization, indeksy) z priorytetami.
6) Plan monitorowania (cele i alerty).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-005",
    title: "Debugowanie buildów/deployów, które padają (CI/CD)",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Izoluje błędy buildu, zależności, env varsy i różnice środowisk.",
    prompt: `Działaj jak CI/CD engineer.

Dane wejściowe:
- Platforma CI (GitHub Actions, Vercel itp.).
- Log błędu (fragment).
- Ostatni commit/deploy, który zadziałał.
- Ostatnie zmiany w zależnościach.
- Istotne zmienne środowiskowe.

Wygeneruj:
1) Klasyfikację awarii (zależności, lint, typy, env, uprawnienia, zasoby).
2) Kroki odtworzenia lokalnie (ta sama wersja node, lockfile, clean install).
3) Checklist lockfile’ów i rootów monorepo.
4) Prawdopodobne rozwiązanie + poprawkę w konfiguracji.
5) Plan, aby nie wróciło (pin versions, caching, checks).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-006",
    title: "Błędy sporadyczne: flakiness i race conditions",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Ogarnia to, co dziwne: bugi, które zdarzają się tylko czasami.",
    prompt: `Działaj jak starszy inżynier.

Dane wejściowe:
- Co dokładnie się psuje.
- Częstotliwość (1/10, 1/100).
- Sprzęt/OS.
- Równoległość/wątki.
- Zależności zewnętrzne (API, DB).

Wygeneruj:
1) Listę typowych przyczyn (race conditions, timeouty, niedeterminizm).
2) Instrumentację do zebrania dowodów (ID, spany, timestampy).
3) Strategię odtwarzania (stress test, wprowadzanie opóźnień, toggles).
4) Wzorce napraw (locki, idempotencja, retry, timeouty > p99).
5) Walidację (jak upewnić się, że już nie występuje).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-007",
    title: "Debugowanie Next.js: middleware, routing i statyczne assety",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Izoluje problemy z matcherem, cachingiem, /public, _next i przekierowaniami.",
    prompt: `Działaj jak ekspert Next.js.

Dane wejściowe:
- Wersja Next.js.
- Struktura routingu (app/pages).
- Aktualny middleware.js.
- Dotknięte ścieżki.
- Logi (jeśli są) / obserwowane zachowanie.

Wygeneruj:
1) Checklist poprawnych wykluczeń (_next, api, pliki statyczne).
2) Diagnozę matchera (typowe błędy i jak go uprościć).
3) Jak zweryfikować, które ścieżki przechodzą przez middleware.
4) Rekomendację prostego i bezpiecznego matchera (JS).
5) Plan rozdzielenia auth vs assety (best practice).
6) Typowe błędy na Vercel (i jak je zobaczyć).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-008",
    title: "Problemy z CORS: blokady między frontendem a backendem",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Rozwiązuje preflight, nagłówki, credentials i dozwolone originy.",
    prompt: `Działaj jak ekspert HTTP/CORS.

Dane wejściowe:
- Origin frontendu.
- URL backendu.
- Metody (GET/POST itd.).
- Czy używa cookies/credentials.
- Niestandardowe nagłówki.

Wygeneruj:
1) Dokładne wyjaśnienie, dlaczego to się psuje (preflight vs simple request).
2) Poprawne nagłówki (Access-Control-Allow-*) zależnie od przypadku.
3) Konfigurację dla credentials i SameSite.
4) Listę testów z curl (w tym OPTIONS).
5) Bezpieczne rozwiązania (nie „*” przy credentials).
6) Checklist na produkcję (proxy/CDN).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-009",
    title: "Błędy bazy danych: locki, deadlocki, timeouty",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Izoluje kontencję i wolne zapytania bez zgadywania.",
    prompt: `Działaj jak DBA/inżynier.

Dane wejściowe:
- DB (Postgres/MySQL itd.).
- Zapytanie lub endpoint.
- Objaw (timeout, deadlock, slow).
- Równoległe obciążenie.
- Istniejące indeksy (jeśli wiadomo).

Wygeneruj:
1) Prawdopodobną diagnozę (locki, brak indeksu, N+1, długie transakcje).
2) Co mierzyć (EXPLAIN, slow query log, tabele locków).
3) Kroki odtworzenia pod obciążeniem.
4) Rekomendacje (indeksy, przepisanie zapytania, izolacja).
5) Szybką mitigację (limit, cache, timeouty).
6) Docelową naprawę + walidację.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-010",
    title: "Debugowanie pamięci: wycieki i OOM (Node)",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Wykrywa wycieki pamięci i piki, które wywalają proces.",
    prompt: `Działaj jak performance engineer Node.js.

Dane wejściowe:
- Objaw (OOM, GC thrash, wolno).
- Ruch/volumen.
- Podejrzane endpointy.
- Ostatnie zmiany.
- Środowisko (serverless czy serwer).

Wygeneruj:
1) Typowe sygnały wycieku vs „prawidłowych” pików.
2) Strategię profilowania (heap snapshots, timeline’y).
3) Częste hipotezy (nieskończone cache, listenery, closures).
4) Wzorce napraw (LRU, limity, streaming).
5) Checklist prewencji (budżety, alerty).
6) Plan walidacji na staging pod obciążeniem.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-011",
    title: "Incydent na produkcji: runbook na 30 minut",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Co robić, gdy WSZYSTKO płonie: najpierw stabilizuj, potem wyciągaj wnioski.",
    prompt: `Działaj jak Incident Commander.

Dane wejściowe:
- Co się zepsuło (objaw).
- Wpływ (sprzedaż, użytkownicy, %).
- Ostatnia zmiana (deploy/config).
- Dostęp (logi/metryki tak/nie).
- SLA (pilność).

Wygeneruj:
1) Plan 0–5 min: opanowanie sytuacji i komunikacja.
2) Plan 5–15 min: szybka izolacja.
3) Plan 15–30 min: mitigacja (rollback/flagi/cache).
4) Checklist dowodów do zebrania pod RCA.
5) Komunikat do stakeholderów (krótki).
6) Szablon postmortem (akcje i ownerzy).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-012",
    title: "Debugowanie DNS/HTTPS/TLS: „nie ładuje”, „błąd certyfikatu”, „NXDOMAIN”",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Diagnozuje problemy domeny/certyfikatu bez wariowania.",
    prompt: `Działaj jak network/devops engineer.

Dane wejściowe:
- Domena.
- Dostawca DNS.
- Zarządzanie certyfikatem (Vercel/Cloudflare itd.).
- Dokładny błąd w przeglądarce.
- Ostatnie zmiany (DNS, proxy, redirect).

Wygeneruj:
1) Listę prawdopodobnych przyczyn zależnie od błędu.
2) Kroki weryfikacji (dig/nslookup, curl -I, SSL check).
3) Zasady propagacji i TTL (czego się spodziewać).
4) Rekomendowaną naprawę dla scenariusza.
5) Checklist bezpiecznej konfiguracji (HSTS, redirecty).
6) Końcową walidację (przeglądarki/lokalizacje).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-013",
    title: "Debugowanie uprawnień: 401/403, role i ACL-e",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Izoluje, czy blokada to auth, autoryzacja czy konfiguracja routingu.",
    prompt: `Działaj jak backend engineer.

Dane wejściowe:
- Zablokowany endpoint.
- Metoda auth (cookie/JWT/session).
- Oczekiwane role.
- Logi autoryzacji.
- Istniejące middleware/guardy.

Wygeneruj:
1) Dokładną różnicę między 401 a 403 w Twoim przypadku.
2) Checklist weryfikacji (token, claims, wygaśnięcie, role).
3) Testy potwierdzające uprawnienia (requesty różnymi użytkownikami).
4) Rekomendowaną naprawę (policy/guard) z przykładami logiki.
5) Plan regresji (testy uprawnień).
6) Ryzyka bezpieczeństwa przy „za szerokim otwarciu”.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-014",
    title: "Debugowanie front-endu: stan, hydration i błędy w konsoli",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Znajduje, dlaczego UI się sypie: hydration mismatch, bugi stanu, race.",
    prompt: `Działaj jak starszy frontendowiec.

Dane wejściowe:
- Framework (React/Next).
- Dokładny błąd w konsoli.
- Komponent/ścieżka.
- Reprodukcja (kroki).
- Dane wejściowe (API).

Wygeneruj:
1) Top hipotez zależnie od błędu.
2) Co sprawdzić (React DevTools, Network, Profiler).
3) Strategię izolacji (komentowanie fragmentów, feature flagi).
4) Rekomendowaną naprawę (poprawne wzorce).
5) Minimalne testy (unit/e2e), żeby nie wróciło.
6) Checklist performance i UX po naprawie.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-015",
    title: "Debugowanie cache’y: dlaczego widzę stare dane",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Wykrywa, czy winny jest cache przeglądarki, CDN, aplikacji czy DB.",
    prompt: `Działaj jak platform engineer.

Dane wejściowe:
- URL/endpoint.
- Gdzie jest wdrożone (CDN, Vercel, proxy).
- Aktualne nagłówki (Cache-Control/ETag).
- Jak często zmieniają się dane.
- Obserwowane zachowanie (jak „stare” są dane).

Wygeneruj:
1) Drzewo decyzyjne, by znaleźć winny cache.
2) Jakie nagłówki sprawdzać i jak je interpretować.
3) Eksperymenty (bypass cache, query param, purge).
4) Rekomendowaną naprawę (cache-control, revalidation).
5) Ryzyko wyłączenia cache (koszty/latencja).
6) Plan „poprawnego cache’u” (publiczny/prywatny).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-016",
    title: "Debugowanie kolejek/jobów: duplikaty, utrata, opóźnienia",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Gdy joby wykonują się 2 razy… albo nigdy.",
    prompt: `Działaj jak backend/SRE.

Dane wejściowe:
- System kolejki.
- Objaw (duplikaty, opóźnienie, utrata).
- Tempo jobów.
- Skonfigurowane retry.
- Klucze idempotencji (tak/nie).

Wygeneruj:
1) Prawdopodobne przyczyny zależnie od objawu.
2) Jakie metryki sprawdzić (lag, retries, DLQ, throughput).
3) Testy potwierdzające (symulacja crasha, retry storm).
4) Wzorce napraw (locki, idempotencja, visibility timeout).
5) Szybką mitigację.
6) Checklist, by nie wróciło w przyszłości.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-017",
    title: "Debugowanie zależności: konflikty, wersje, lockfile’e",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Rozwiązuje „works on my machine” przez wersje i lockfile’e.",
    prompt: `Działaj jak starszy maintainer.

Dane wejściowe:
- Stack (npm/yarn/pnpm).
- Dokładny błąd.
- Wersja Node lokalnie i w CI.
- Obecne lockfile’e.
- Monorepo (tak/nie).

Wygeneruj:
1) Prawdopodobną diagnozę (resolution, peer deps, mismatch lockfile).
2) Kroki czyszczenia i odtworzenia (rm -rf node_modules, cache).
3) Strategię pinowania (engines, packageManager).
4) Rekomendację jednego lockfile’a i poprawnego roota.
5) Rekomendowaną naprawę z komendami.
6) Checklist, żeby nie wróciło (CI checks).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-018",
    title: "Debugowanie plików statycznych: 404, ścieżki i rozszerzenia",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Naprawia assety, które się nie ładują przez ścieżki, case-sensitivity i build.",
    prompt: `Działaj jak ekspert web.

Dane wejściowe:
- Ścieżka assetu (np. /images/x.png).
- Gdzie jest (public/ czy importowany).
- Lokalny OS (Windows/macOS/Linux).
- Hosting (Vercel itd.).
- Błąd (404/403/mime).

Wygeneruj:
1) Checklist typowych przyczyn (case mismatch, path, basePath, trailing slash).
2) Jak zweryfikować w build output.
3) Różnicę między serwowaniem z /public a bundlowaniem.
4) Rekomendowaną naprawę (struktura i odwołania).
5) Plan migracji do lepszych formatów (webp/avif) bez psucia ścieżek.
6) Testy końcowe (incognito, nagłówki, cache).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-019",
    title: "Debugowanie env vars: „undefined” w prod, ale nie lokalnie",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Wykrywa źle nazwane zmienne, scope’y, build-time vs runtime.",
    prompt: `Działaj jak DevOps/ekspert Next.

Dane wejściowe:
- Nazwa(y) zmiennych env.
- Gdzie są używane (server/client).
- Platforma deploy.
- .env lokalnie vs prod.
- Obserwowany błąd.

Wygeneruj:
1) Checklist (publiczne prefiksy, build-time, runtime).
2) Jak wypisać/zweryfikować bez wycieku sekretów.
3) Rekomendowaną naprawę wg scenariusza (server-only vs client).
4) Plan walidacji po deployu.
5) Best practices (walidacja schematu, wartości domyślne).
6) Ryzyka bezpieczeństwa (nie ujawniać sekretów).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-020",
    title: "Profesjonalny Root Cause Analysis (RCA) dla buga/incydentu",
    area: "Programowanie i IT",
    category: "Debugowanie i Troubleshooting",
    summary:
      "Dokumentuje przyczynę źródłową i działania, aby problem nie wrócił.",
    prompt: `Działaj jak lider techniczny piszący RCA.

Dane wejściowe:
- Co się stało (objaw).
- Oś czasu (wydarzenia z godzinami).
- Wpływ (użytkownicy/pieniądze).
- Znaleziona przyczyna bezpośrednia.
- Co to umożliwiło (błędy systemowe).

Wygeneruj:
1) Streszczenie wykonawcze (3–5 punktów).
2) Czytelną oś czasu.
3) Przyczynę źródłową (5 why’s) i czynniki współtworzące.
4) Co wykryło, a czego nie wykryło (luki w monitoringu).
5) Działania korygujące (priorytet, owner, data).
6) Wnioski i zmiany w procesie.`,
    thumbnail: "",
  },
];
