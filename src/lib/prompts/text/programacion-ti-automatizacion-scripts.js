// src/lib/prompts/text/programacion-ti-automatizacion-scripts.js

export const textPromptsProgramacionTiAutomatizacionScripts = [
  {
    id: "proti-auto-001",
    title: "Automatyzacja 360° (z procesu ręcznego do niezawodnego skryptu)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Zamienia powtarzalny proces w solidną automatyzację z walidacjami, logami i rollbackiem.",
    prompt: `Działaj jako starszy inżynier automatyzacji.

Inputs:
- Aktualny proces ręczny (kroki).
- Częstotliwość (codziennie/tygodniowo/na zdarzenie).
- Źródła danych (CSV, API, baza danych, folder, e-mail).
- Oczekiwane wyjścia (plik, baza danych, powiadomienie, raport).
- Ryzyka (dane wrażliwe, kosztowne błędy).

Generuj:
1) Przeprojektowanie procesu (kroki zoptymalizowane).
2) Specyfikację skryptu (wejścia/wyjścia/walidacje).
3) Strategię idempotencji (jak unikać duplikatów).
4) Obsługę błędów i ponawiania (co ponawiać / czego nie ponawiać).
5) Minimalne logi i metryki.
6) Plan testów (przypadki normalne + edge cases).
7) Plan rollbacku i „tryb dry-run”.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-002",
    title: "Projekt CLI (narzędzie wiersza poleceń) dla zespołu",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Tworzy komendę typu `moje-narzedzie sync --dry-run` z jasnym i bezpiecznym UX.",
    prompt: `Działaj jako starszy programista tworzący narzędzia wewnętrzne.

Inputs:
- Nazwa narzędzia.
- Potrzebne akcje (komendy).
- Użytkownicy (techniczni/nietechniczni).
- Platforma (Windows/macOS/Linux).
- Wymagania (konfiguracja, sekrety, uprawnienia).

Generuj:
1) Projekt komend i subkomend (przykłady).
2) Rekomendowane flagi (dry-run, force, verbose, config).
3) Komunikaty wyjściowe UX (jasne błędy + postęp).
4) Strukturę projektu (foldery/moduły).
5) Strategię konfiguracji (plik + zmienne środowiskowe).
6) Plan pakowania/dystrybucji (npm/pip/binary).
7) Checklistę bezpieczeństwa (sekrety, uprawnienia, logi).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-003",
    title: "Skrypt do zmiany nazw/migracji plików według reguł (batch)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Automatyzuje masowe zmiany nazw, konwersję formatów i organizację w folderach.",
    prompt: `Działaj jako specjalista od skryptów do operacji na plikach.

Inputs:
- Folder źródłowy.
- Reguły zmiany nazw (przykładowy wzorzec).
- Filtry (rozszerzenia, rozmiary, daty).
- Akcja (kopiuj/przenieś/konwertuj/usuń).
- Wymagania bezpieczeństwa (backup tak/nie).

Generuj:
1) Algorytm krok po kroku (z trybem podglądu).
2) Strategię unikania kolizji nazw.
3) Politykę backupu (folder backup + restore).
4) Logi (co zapisywać).
5) 15 przypadków testowych (w tym edge cases).
6) Checklistę uruchomienia na produkcji bez utraty danych.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-004",
    title: "Szybki ETL: z CSV/Sheets → do bazy danych z walidacją",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Ładuje dane do bazy z czyszczeniem, normalizacją i raportem błędów.",
    prompt: `Działaj jako praktyczny data engineer.

Inputs:
- Źródło (CSV/Google Sheets/Excel).
- Schemat docelowy (tabele/pola).
- Reguły walidacji (wymagane, format, zakresy).
- Wolumen danych.
- Częstotliwość ładowania.

Generuj:
1) Mapowanie kolumn → pól (z transformacjami).
2) Walidacje i normalizacje (lista).
3) Obsługę niepoprawnych rekordów (quarantine + raport).
4) Strategię upsert/dedupikacji.
5) Plan wydajności (batching, transakcje).
6) Raport końcowy (metryki: wstawione/zaktualizowane/odrzucone).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-005",
    title: "Integracja z API: synchronizacja dwukierunkowa z konfliktami",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Synchronizuje dwa systemy (CRM ↔ DB, Notion ↔ app) z limitami i konfliktami.",
    prompt: `Działaj jako starszy inżynier integracji.

Inputs:
- System A i system B.
- Jakie encje są synchronizowane.
- Kierunek (A->B, B->A lub dwukierunkowo).
- Znane limity (rate limits).
- Reguły konfliktu (kto ma rację).

Generuj:
1) Projekt synchronizacji (polling vs webhooks vs hybryda).
2) Identyfikatory i mapowanie (ID zewnętrzne i lokalne).
3) Obsługę limitów (backoff, batching, kolejki).
4) Rozwiązywanie konfliktów (strategie + przykłady).
5) Idempotencję i historię synchronizacji (tabela/rejestr).
6) Obserwowalność (logi + alerty, gdy coś się psuje).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-006",
    title: "Scraping/ekstrakcja danych (legalna i odporna)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Pozyskuje dane publiczne z poszanowaniem zasad, limitów, parsowania i zmian HTML.",
    prompt: `Działaj jako odpowiedzialny inżynier ekstrakcji danych.

Inputs:
- Źródło (strona/API publiczne).
- Dane do wyciągnięcia (pola).
- Częstotliwość.
- Limit żądań na minutę (jeśli znany).
- Format wyjścia (CSV/JSON/DB).

Generuj:
1) Zalecane podejście (najpierw API, fallback scraping).
2) Strategię „szacunku” (throttling, user-agent, caching).
3) Projekt odpornego parsera (selektory + fallback).
4) Obsługę zmian (testy, wykrywanie awarii).
5) Walidację i deduplikację.
6) Checklistę prawną/etyczną (bez omijania paywalla/captcha).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-007",
    title: "Automatyzacja raportów (dziennie/tygodniowo) z wysyłką",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Generuje raport z KPI, wykresami/tabelami i wysyła go e-mailem/na Slacku.",
    prompt: `Działaj jako inżynier automatyzacji analityki.

Inputs:
- Źródła danych (DB/API/CSV).
- Wymagane KPI.
- Odbiorcy (e-mail/Slack).
- Harmonogram.
- Format (HTML, PDF, CSV).

Generuj:
1) Definicję raportu (sekcje + metryki).
2) Zapytania lub bazową ekstrakcję (pseudo).
3) Szablon wyjścia (struktura HTML lub markdown).
4) Wysyłkę (SMTP/Slack webhook) i obsługę błędów.
5) Harmonogramowanie (cron/GitHub Actions/serverless).
6) Obserwowalność: alerty, jeśli się nie uda lub brakuje danych.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-008",
    title: "Automatyzacja backupów i zweryfikowanych odtworzeń",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Backupy, które naprawdę działają: rotacja, szyfrowanie, weryfikacja i test odtworzenia.",
    prompt: `Działaj jako SRE.

Inputs:
- Co jest backupowane (baza danych, folder, bucket).
- Środowisko (lokalne/chmura).
- Pożądane RPO/RTO (w przybliżeniu).
- Retencja (dni/tygodnie).
- Wymagania szyfrowania.

Generuj:
1) Strategię backupu (pełny/przyrostowy, częstotliwość).
2) Rotację i retencję (polityka).
3) Szyfrowanie i zarządzanie kluczami.
4) Automatyczną weryfikację (checksumy + test odtworzenia).
5) Plan odtworzenia krok po kroku.
6) Alerty i raport zdrowia backupu.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-009",
    title: "Automatyczne czyszczenie danych (dedupe, normalizacja, reguły)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Standaryzuje brudne dane: nazwy, e-maile, telefony, formaty, duplikaty.",
    prompt: `Działaj jako inżynier jakości danych.

Inputs:
- Typ danych (kontakty, produkty itd.).
- Problematyczne pola.
- Preferowane reguły normalizacji.
- Definicja duplikatu (kryteria).
- Tolerancja błędu.

Generuj:
1) Reguły czyszczenia dla każdego pola.
2) Algorytm deduplikacji (dokładna + fuzzy).
3) Raport zmian (przed/po).
4) Politykę „nie ruszać” (których pól nie modyfikować).
5) Walidację (testy z przykładami).
6) Plan uruchomienia przyrostowego i rollback.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-010",
    title: "Automatyzacja z kolejkami (jobs) dla ciężkich zadań",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Projektuje przetwarzanie zadań: workerzy, retry, dead-letter queue i monitoring.",
    prompt: `Działaj jako starszy backend engineer.

Inputs:
- Typ zadań (konwersja plików, wysyłka e-maili itd.).
- Wolumen (zadania/godz.).
- Oczekiwany czas na zadanie.
- Wymagania priorytetów (wysoki/niski).
- Infrastruktura (Redis/SQS/RabbitMQ).

Generuj:
1) Architekturę kolejki (producent/worker).
2) Strukturę payloadu zadania.
3) Politykę ponawiania (backoff) i dead-letter.
4) Idempotencję (jak uniknąć podwójnego wykonania).
5) Równoległość i throughput (szacunkowe obliczenie).
6) Obserwowalność (metryki + alerty).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-011",
    title: "Automatyzacja powtarzalnych wdrożeń (skrypty release)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Standaryzuje wydania: wersjonowanie, changelog, tagi, build i deploy z kontrolami.",
    prompt: `Działaj jako Release Engineer.

Inputs:
- Typ aplikacji (monorepo czy nie).
- Hosting (Vercel, AWS itd.).
- Wersjonowanie (semver tak/nie).
- Wymagania migracji.
- Kontrole jakości.

Generuj:
1) Przepływ release’u (dokładne kroki).
2) Skrypt/CLI do release’u (komendy i sugerowane flagi).
3) Generowanie changelogu (konwencje).
4) Kontrole pre-release i post-release.
5) Strategię rollbacku.
6) Plan automatyzacji w CI.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-012",
    title: "Inteligentne powiadomienia (alerty bez spamu)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Projektuje powiadomienia zdarzeniowe z deduplikacją, progami i oknami ciszy.",
    prompt: `Działaj jako inżynier platform.

Inputs:
- Ważne zdarzenia (lista).
- Kanały (Slack, e-mail, SMS).
- Warunki alertowania (próg).
- Okna czasowe.
- Aktualny szum (jeśli jest).

Generuj:
1) Taksonomię alertów (info/warn/critical).
2) Reguły deduplikacji i cool-down.
3) Szablony wiadomości (jasne, możliwe do wykonania).
4) Routing wg ważności (kto dostaje co).
5) Metryki do mierzenia szumu i jakości.
6) Checklistę iterowania reguł bez utraty krytycznych zdarzeń.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-013",
    title: "Automatyzacja generowania treści technicznych (docs, changelogi)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Generuje dokumentację i rejestry na podstawie commitów/PR/metadata.",
    prompt: `Działaj jako inżynier produktywności programistów.

Inputs:
- Źródło (commity git, PR, issues).
- Pożądany format (markdown, html).
- Konwencje zespołu.
- Wymagane sekcje.
- Częstotliwość (na release, tygodniowo).

Generuj:
1) Mapowanie źródło -> sekcje (reguły).
2) Szablon wyjścia (markdown).
3) Reguły grupowania i streszczania zmian.
4) Obsługę breaking changes.
5) Integrację w CI (kroki).
6) Walidację, aby uniknąć pustych lub błędnych docs.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-014",
    title: "Automatyzacja czyszczenia storage (koszty i retencja)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Obniża koszty, usuwając/archiwizując stare pliki według polityk i raportów.",
    prompt: `Działaj jako inżynier kosztów chmury.

Inputs:
- Storage (S3, GCS, lokalny itd.).
- Typy plików.
- Polityka retencji (dni).
- Wyjątki (foldery/etykiety).
- Potrzeba archiwizacji (tak/nie).

Generuj:
1) Dokładną politykę retencji (reguły).
2) Projekt joba (skanowanie, selekcja, akcja).
3) Bezpieczeństwo: dry-run, akceptacje, backupy.
4) Raport wpływu (szac. $ i GB zwolnionych).
5) Alerty i audyt.
6) Plan testów na podzbiorze.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-015",
    title: "Automatyzacja importu/eksportu między środowiskami (staging/prod)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Synchronizuje kontrolowane konfiguracje/dane między środowiskami bez wycieku sekretów.",
    prompt: `Działaj jako DevOps.

Inputs:
- Co importujesz/eksportujesz (dane, config, zasoby).
- Źródło/cel (staging/prod/local).
- Dane wrażliwe (tak/nie).
- Częstotliwość.
- Format.

Generuj:
1) Listę whitelist (co wolno przenosić) i blacklist (czego nie).
2) Bezpieczny proces krok po kroku.
3) Sanitizację/anonimizację, jeśli dotyczy.
4) Plan skryptu z logami i walidacją.
5) Rollback.
6) Checklistę bezpieczeństwa sekretów.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-016",
    title: "Monitoring automatycznych jobów (healthchecki i SLA)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Zapewnia, że automatyzacje nie umrą po cichu: heartbeaty, SLA i alerty.",
    prompt: `Działaj jako SRE.

Inputs:
- Lista automatyzacji.
- Częstotliwość na job.
- Co oznacza „sukces”.
- Kanały alertów.
- Tolerancja opóźnień.

Generuj:
1) System heartbeatów (jak raportuje każdy job).
2) SLA dla jobów (maks. czas bez uruchomienia).
3) Alerty: błędy, opóźnienia, anomalne wyniki.
4) Minimalny dashboard (jakie wykresy).
5) Runbook: co robić, gdy padnie (kroki).
6) Strategię zmniejszania flakiness (retry, locki, idempotencja).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-017",
    title: "Automatyzacja zadań w Windows (PowerShell), żeby nie cierpieć",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Zamienia typowe przepływy w skrypty PowerShell z logowaniem i Harmonogramem zadań.",
    prompt: `Działaj jako specjalista PowerShell.

Inputs:
- Zadanie do automatyzacji.
- Ścieżki plików.
- Czy potrzebne są poświadczenia (tak/nie).
- Częstotliwość/trigger.
- Oczekiwane wyjście.

Generuj:
1) Plan skryptu w PowerShell (szczegółowy pseudokod).
2) Obsługę błędów i kody wyjścia.
3) Logowanie do pliku ze znacznikami czasu.
4) Jak zaplanować w Task Scheduler (kroki).
5) Rekomendacje minimalnych uprawnień.
6) Checklistę walidacji po instalacji.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-018",
    title: "Automatyzacja z GitHub Actions (joby harmonogramowane i po pushu)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Projektuje workflowy z sekretami, cache, macierzami i powiadomieniami.",
    prompt: `Działaj jako inżynier CI.

Inputs:
- Repo i stack.
- Co zautomatyzować (testy, raporty, sync).
- Triggery (push, PR, cron).
- Potrzebne sekrety.
- Pożądany maksymalny czas.

Generuj:
1) Strukturę workflow (joby i kroki).
2) Bezpieczną obsługę sekretów.
3) Rekomendowany cache (node/pip).
4) Strategię retry i timeoutów.
5) Powiadomienia o awarii (Slack/e-mail).
6) Checklistę ograniczania niepotrzebnych kosztów.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-019",
    title: "Automatyzacja kontroli jakości plików (lint assetów)",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Weryfikuje, czy zasoby spełniają reguły (rozmiar, format, nazwa, metadane).",
    prompt: `Działaj jako inżynier produktywności.

Inputs:
- Folder(y) z assetami.
- Reguły (dozwolone formaty, max KB, nazewnictwo).
- Akcje przy błędzie (blokować CI czy ostrzeżenie).
- Etap uruchomienia (pre-commit/CI).
- Wyjątki.

Generuj:
1) Reguły walidacji (dokładna lista).
2) Projekt skryptu weryfikacji.
3) Raport wyników (podsumowanie + szczegóły).
4) Integrację w pre-commit i CI.
5) Politykę wyjątków.
6) Plan naprawy backlogu plików niezgodnych ze standardem.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-020",
    title: "Automatyzacja rotacji sekretów i poświadczeń",
    area: "Programowanie i IT",
    category: "Automatyzacja i skrypty",
    summary:
      "Plan rotacji kluczy bez wywracania usług: okna, podwójny zapis i weryfikacja.",
    prompt: `Działaj jako inżynier Security/DevOps.

Inputs:
- Jakie sekrety (klucze API, hasła DB, tokeny).
- Gdzie są przechowywane (zmienne środowiskowe, vault, CI).
- Usługi, których to dotyczy.
- Częstotliwość rotacji.
- Czy wymagana jest audytowalność.

Generuj:
1) Plan rotacji krok po kroku bez downtime.
2) Strategię „podwójnego sekretu” (stary/nowy) i cutover.
3) Walidację po rotacji (health checki).
4) Rollback.
5) Audyt i rejestr zmian.
6) Checklistę automatyzacji (miesięcznie/kwartalnie).`,
    thumbnail: "",
  },
];
