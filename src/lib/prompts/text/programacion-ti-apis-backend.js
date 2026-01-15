// src/lib/prompts/text/programacion-ti-apis-backend.js

export const textPromptsProgramacionTiApisBackend = [
  {
    id: "proti-api-001",
    title: "Profesjonalny projekt API REST (zasoby, trasy i kontrakty)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Zdefiniuj endpointy, zasoby, nazewnictwo, paginację, błędy i wersjonowanie jak senior backend.",
    prompt: `Działaj jako architekt backendu.

Dane wejściowe:
- Produkt/feature.
- Główne encje (np. użytkownicy, zamówienia).
- Wymagane operacje (CRUD + akcje).
- Wymagania (auth, role, rate limits, webhooks).
- SLA (latencja/wolumen).

Wygeneruj:
1) Model zasobów (lista encji + relacje).
2) Endpointy REST (GET/POST/PATCH/DELETE) z trasami i przykładami.
3) Konwencję odpowiedzi (status codes, envelope, błędy).
4) Paginację (cursor vs offset) oraz filtry/sortowanie.
5) Wersjonowanie (URI/headers) + strategię wycofywania (deprecacji).
6) Checklistę bezpieczeństwa i obserwowalności (logi, trace id).`,
    thumbnail: "",
  },

  {
    id: "proti-api-002",
    title: "Kontrakt OpenAPI/Swagger gotowy do dokumentowania",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Stwórz jasną specyfikację ze schematami, przykładami i kodami błędów.",
    prompt: `Działaj jako ekspert od API.

Dane wejściowe:
- Lista istniejących lub planowanych endpointów.
- Auth (Bearer/cookies/API Key).
- Modele danych (pola, typy).
- Typowe błędy.

Wygeneruj:
1) Szkielet OpenAPI (rekomendowana struktura).
2) Schematy komponentów (DTO) z walidacjami.
3) Przykłady requestów/responseów dla każdego endpointu.
4) Ustandaryzowane kody błędów (problem+json lub podobne).
5) Zasady kompatybilności i zmian breaking.
6) Checklistę QA dla dokumentacji.`,
    thumbnail: "",
  },

  {
    id: "proti-api-003",
    title: "Projekt endpointów idempotentnych (płatności, zamówienia, webhooks)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Unikaj duplikatów dzięki kluczom idempotencji, lockom i deduplikacji.",
    prompt: `Działaj jako senior backend.

Dane wejściowe:
- Krytyczna akcja (np. utworzenie płatności, utworzenie zamówienia).
- Źródło (klient, webhook, job).
- Ryzyko (duplikaty, ponowienia).
- Dostępna baza danych.

Wygeneruj:
1) Strategię idempotencji (klucz, TTL, zakres).
2) Schemat/tabelę do deduplikacji z indeksami.
3) Przepływ: request → weryfikacja → wykonanie → odpowiedź.
4) Obsługę retry (client/server) i timeoutów.
5) Aspekty współbieżności (locki vs upsert).
6) Testy sprawdzające idempotencję (przypadki brzegowe).`,
    thumbnail: "",
  },

  {
    id: "proti-api-004",
    title: "Uwierzytelnianie i autoryzacja dla API (role i scope’y)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Zdefiniuj model uprawnień, claims, scope’y i polityki dostępu.",
    prompt: `Działaj jako security-minded backend engineer.

Dane wejściowe:
- Typy użytkowników (admin, użytkownik, staff).
- Chronione zasoby.
- Strategia auth (JWT/cookie/session).
- Potrzeba multi-tenant (tak/nie).

Wygeneruj:
1) Model ról/scope’ów (macierz uprawnień).
2) Claims i strukturę tokenu/sesji.
3) Middleware/guards (pseudokod).
4) Strategię odświeżania/wygasania.
5) Bezpieczne praktyki (rotacja, unieważnianie, CSRF jeśli dotyczy).
6) Testy autoryzacji (permit/deny).`,
    thumbnail: "",
  },

  {
    id: "proti-api-005",
    title: "Projekt paginacji, wyszukiwania i filtrów (API)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Zdefiniuj query params i wydajność dla dużych list.",
    prompt: `Działaj jako backend engineer skupiony na skalowalności.

Dane wejściowe:
- Zasób do listowania.
- Szacowany rozmiar (n).
- Pola filtrowalne/sortowalne.
- Wymagania wyszukiwania (tekst, exact match).

Wygeneruj:
1) Projekt query params (filters, sort, include).
2) Paginację kursorową (preferowana) z pełnym przykładem.
3) Strategię wyszukiwania (full-text w DB vs zewnętrzny serwis).
4) Zasady anty-nadużyciowe (limity, max page size, rate limiting).
5) Rekomendowane indeksy w DB.
6) Testy i przypadki brzegowe (zmiany w trakcie paginacji).`,
    thumbnail: "",
  },

  {
    id: "proti-api-006",
    title: "Spójna strategia błędów (kody, komunikaty, śledzenie)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Ustandaryzuj błędy dla klientów + łatwe debugowanie.",
    prompt: `Działaj jako backend lead.

Dane wejściowe:
- Framework/język.
- Konsument (własny frontend, integracje zewnętrzne).
- Typowe kategorie błędów.

Wygeneruj:
1) Format błędu (standardowa struktura JSON).
2) Mapowanie błąd → status code (tabela).
3) Zasady komunikatów (bezpieczne dla użytkownika vs wewnętrzne).
4) Trace IDs i korelację logów.
5) Przykłady błędów dla 400/401/403/404/409/422/429/500.
6) Poradnik dla klientów (retry, handling).`,
    thumbnail: "",
  },

  {
    id: "proti-api-007",
    title: "Rate limiting i ochrona przed nadużyciami (per IP, użytkownik, token)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Chroń API bez psucia doświadczenia prawdziwym użytkownikom.",
    prompt: `Działaj jako SRE/back-end security.

Dane wejściowe:
- Typ API (publiczne/prywatne).
- Oczekiwany ruch (RPS).
- Kosztowne operacje (jakie).
- Infra (serverless/serwery, Redis tak/nie).

Wygeneruj:
1) Politykę rate limitów per trasa (tabela).
2) Rekomendowany algorytm (token bucket/leaky bucket/fixed window).
3) Odpowiedzi 429 (headers, retry-after).
4) Wyjątki (użytkownicy premium, allowlist).
5) Dodatkową ochronę (WAF, captcha na krytycznych endpointach).
6) Metryki i alerty do strojenia.`,
    thumbnail: "",
  },

  {
    id: "proti-api-008",
    title: "Webhooks: projekt, bezpieczeństwo i ponowienia",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Wdrażaj solidne webhooks z podpisami i ponownym dostarczaniem.",
    prompt: `Działaj jako architekt integracji.

Dane wejściowe:
- Zdarzenia do emitowania (lista).
- Oczekiwany payload.
- Odbiorcy (third-party, Twój frontend, partnerzy).
- Wymagania bezpieczeństwa.

Wygeneruj:
1) Listę zdarzeń i konwencje nazewnictwa.
2) Schemat payloadu + przykłady.
3) Podpis/weryfikację (HMAC) oraz rotację sekretów.
4) Ponowienia i backoff + DLQ.
5) Idempotencję po stronie odbioru.
6) Minimalny panel monitoringu (logi, dostarczenia, błędy).`,
    thumbnail: "",
  },

  {
    id: "proti-api-009",
    title: "Projekt API dla plików (upload, streaming, download)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Szybkie i bezpieczne uploady z podpisanymi URL-ami i walidacją.",
    prompt: `Działaj jako backend engineer.

Dane wejściowe:
- Typ pliku (obrazy, wideo, pdf).
- Średni i maksymalny rozmiar.
- Storage (S3-like, lokalny itd.).
- Potrzeba CDN.

Wygeneruj:
1) Rekomendowany przepływ (direct-to-storage vs przez backend).
2) Wymagane endpointy (init upload, finalize, list, delete).
3) Walidacje (mime, size, antywirus jeśli dotyczy).
4) Uprawnienia (kto może oglądać/pobierać).
5) Strategię CDN/cache.
6) Ryzyka i mitygacje (hotlinking, nadużycia).`,
    thumbnail: "",
  },

  {
    id: "proti-api-010",
    title: "N+1 i projekt wydajnych endpointów (include/expand)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Unikaj nadmiarowych wywołań dzięki includes i endpointom agregującym.",
    prompt: `Działaj jako staff backend engineer.

Dane wejściowe:
- UI lub przypadek użycia (jaki ekran).
- Wymagane dane (lista).
- Cel latencji.
- Dostępność joinów/ORM.

Wygeneruj:
1) Diagnozę, czy to N+1 (jak to wykryć).
2) Opcje projektowe (include, expand, batch, GraphQL).
3) Rekomendowany endpoint z przykładową odpowiedzią.
4) Strategię cache’owania (server i client).
5) Zoptymalizowane zapytanie (pseudokod + sugerowane indeksy).
6) Metryki potwierdzające poprawę.`,
    thumbnail: "",
  },

  {
    id: "proti-api-011",
    title: "Strategia współbieżności i spójności (optimistic locking)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Unikaj nadpisywania zmian dzięki ETagom, polom wersji lub lockom.",
    prompt: `Działaj jako ekspert ds. spójności.

Dane wejściowe:
- Zasób edytowany.
- Ryzyko jednoczesnych edycji.
- DB (Postgres/MySQL/itp.).
- Wymagania UX (pokazywać konflikt tak/nie).

Wygeneruj:
1) Rekomendowaną strategię (ETag/If-Match vs pole wersji).
2) Zmiany w schemacie (jeśli dotyczy).
3) Przepływ PATCH z obsługą 409/412.
4) UI/klienci: jak rozwiązywać konflikty.
5) Testy współbieżności.
6) Trade-offy i kiedy używać locków pesymistycznych.`,
    thumbnail: "",
  },

  {
    id: "proti-api-012",
    title: "Projekt background jobs z API (wzorce async)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Zamień długie operacje w joby z jasnymi statusami.",
    prompt: `Działaj jako backend lead.

Dane wejściowe:
- Długa operacja (np. eksport, przetwarzanie wideo).
- Szacowany czas.
- Potrzeba progressu (tak/nie).
- Infra kolejek (tak/nie).

Wygeneruj:
1) Endpoint uruchamiający job i natychmiastową odpowiedź (202).
2) Model statusu (queued/running/succeeded/failed).
3) Endpoint do sprawdzania statusu i pobierania wyniku.
4) Retry, idempotencję i deduplikację.
5) Rekomendowany UX we frontendzie.
6) Obserwowalność (correlation ids, metryki).`,
    thumbnail: "",
  },

  {
    id: "proti-api-013",
    title: "Migracja API bez psucia klientów (backward compatible)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Plan zmian breaking z deprecacją i monitoringiem.",
    prompt: `Działaj jako API product owner.

Dane wejściowe:
- Pożądana zmiana (breaking lub nie).
- Istniejący klienci (ilu, jacy).
- Okno migracji.

Wygeneruj:
1) Klasyfikację zmiany (breaking/non-breaking).
2) Strategię wersjonowania (v1/v2 lub headers).
3) Plan stopniowego rollout’u.
4) Komunikację do klientów (wiadomość + timeline).
5) Telemetrię do wykrywania opóźnionych klientów.
6) Finalną checklistę wyłączenia v1.`,
    thumbnail: "",
  },

  {
    id: "proti-api-014",
    title: "Projekt API w GraphQL: schema i resolvery",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Stwórz dobrze zamodelowany schemat GraphQL z wydajnymi resolverami.",
    prompt: `Działaj jako architekt GraphQL.

Dane wejściowe:
- Encje i relacje.
- Kluczowe use-case’y (ekrany).
- Zasady uprawnień.
- Ryzyko N+1.

Wygeneruj:
1) Schema: types, queries, mutations.
2) Paginację (connections) z przykładami.
3) Autoryzację (directives lub middleware) per pole.
4) Strategię anty N+1 (DataLoader).
5) Błędy i walidację.
6) Checklistę wydajności i bezpieczeństwa.`,
    thumbnail: "",
  },

  {
    id: "proti-api-015",
    title: "Hardening API przeciw typowym atakom (OWASP)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Praktyczna checklista ochrony endpointów i danych.",
    prompt: `Działaj jako AppSec engineer.

Dane wejściowe:
- Metoda auth.
- Typy danych wrażliwych.
- Ekspozycja (publiczna/prywatna).
- Stack.

Wygeneruj:
1) Najważniejsze ryzyka (OWASP API Top 10) zastosowane do mojego przypadku.
2) Konkretne kontrole (walidacja, authZ, throttling).
3) Bezpieczne logowanie (bez sekretów).
4) Ochronę przed SSRF, injection, IDOR.
5) Rekomendowane nagłówki i konfigurację.
6) Minimalne testy/skany (SAST/DAST).`,
    thumbnail: "",
  },

  {
    id: "proti-api-016",
    title: "Refaktor wolnego endpointu: plan i propozycja optymalizacji",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Zamień wolny endpoint w stabilny, mierzalny proces usprawnień.",
    prompt: `Działaj jako backend performance engineer.

Dane wejściowe:
- Endpoint.
- p95/p99 i RPS.
- Query/SQL lub pseudokod.
- Rozmiar danych.
- Obecna infra.

Wygeneruj:
1) Prawdopodobną diagnozę (DB, serializacja, N+1, cache).
2) Instrumentację do dodania (timery per etap).
3) Propozycję zmian (indeksy, przepisanie query, cache).
4) Plan rollout’u (feature flag, canary).
5) Oczekiwane cele (przed/po).
6) Plan regresji (testy i monitoring).`,
    thumbnail: "",
  },

  {
    id: "proti-api-017",
    title: "Projekt zaawansowanego wyszukiwania (facety, trafność, ranking)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Wdróż użyteczne wyszukiwanie z filtrami, facetami i sensownymi wynikami.",
    prompt: `Działaj jako inżynier wyszukiwania.

Dane wejściowe:
- Co jest wyszukiwane (encja).
- Pola wyszukiwalne.
- Wymagane filtry.
- Rozmiar korpusu.
- Potrzeba rankingu.

Wygeneruj:
1) Model indeksowania (jakie pola i dlaczego).
2) API wyszukiwania (parametry: q, filters, facets, sort).
3) Strategię trafności (boosty, świeżość, exact matches).
4) Paginację i wydajność.
5) Obserwowalność wyszukiwania (queries, CTR, no-results).
6) Plan iteracyjnych ulepszeń.`,
    thumbnail: "",
  },

  {
    id: "proti-api-018",
    title: "Projekt multi-tenant (izolacja per organizacja)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Zapobiegaj wyciekom danych między tenantami dzięki jasnym zasadom.",
    prompt: `Działaj jako architekt SaaS multi-tenant.

Dane wejściowe:
- Czym jest tenant (org, workspace).
- Użytkownicy i role.
- Obecna DB.
- Wymagania izolacji (wysokie/niskie).

Wygeneruj:
1) Strategię izolacji (row-level, schema per tenant, db per tenant).
2) Schemat danych i klucze.
3) Middleware do tenant resolution (subdomena, header, token).
4) Kontrole anty-IDOR.
5) Migrację z single-tenant.
6) Testy i audyt zapewniające izolację.`,
    thumbnail: "",
  },

  {
    id: "proti-api-019",
    title: "API do audytu i śledzenia (audit logs)",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Rejestruj działania krytyczne: kto/kiedy/co zmienił.",
    prompt: `Działaj jako backend lead.

Dane wejściowe:
- Działania krytyczne (tworzenie, usuwanie, aktualizacja, eksport).
- Dane wrażliwe.
- Wymogi prawne/compliance (jeśli dotyczy).
- Retencja logów.

Wygeneruj:
1) Model audit log (rekomendowane pola).
2) Jakie zdarzenia logować, a jakich NIE (prywatność).
3) Strategię przechowywania (db vs log store).
4) Endpoint do przeglądania audit logs z filtrami.
5) Zabezpieczenia (odporność na manipulacje, uprawnienia).
6) Checklistę weryfikacji przydatności w incydentach.`,
    thumbnail: "",
  },

  {
    id: "proti-api-020",
    title: "Checklista jakości backendu przed produkcją",
    area: "Programowanie i IT",
    category: "API i Backend",
    summary:
      "Ostatnia lista: bezpieczeństwo, wydajność, testy, obserwowalność i DX.",
    prompt: `Działaj jako tech lead.

Dane wejściowe:
- Stack i środowisko.
- Krytyczne endpointy.
- Wymagania biznesowe (SLA, compliance).

Wygeneruj checklistę działań:
1) Bezpieczeństwo (auth/authZ, walidacja, sekrety).
2) Wydajność (cele p95, cache, indeksy DB).
3) Obserwowalność (logi, metryki, tracing, alerty).
4) Odporność (timeouts, retries, circuit breakers).
5) Testy (unit, integration, contract).
6) Operacje (runbooki, rollback, feature flags).`,
    thumbnail: "",
  },
];
