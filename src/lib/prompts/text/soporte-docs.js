// src/lib/prompts/text/soporte-docs.js

export const textPromptsSoporteDocs = [
  {
    id: "sop-doc-001",
    title:
      "Szablon artykułu pomocy (Help Center): idealna struktura + checklista jakości",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Generuje kompletny artykuł pomocy z krokami, sugerowanymi zrzutami ekranu, typowymi błędami i FAQ.",
    prompt: `Temat artykułu: [ ]
Produkt/funkcja: [ ]
Odbiorcy: [początkujący/mieszani/zaawansowani]
Kanał: [web/aplikacja]
Ton: [bliski/neutralny/premium]
Cel artykułu: [rozwiązać X bez kontaktu z supportem]

Napisz artykuł Help Center gotowy do publikacji z:
1) Tytułem SEO (3 propozycje) + sugerowany slug.
2) Streszczeniem (2–3 linie) + “kiedy użyć” i “kiedy NIE dotyczy”.
3) Wymaganiami wstępnymi (konta, uprawnienia, plan).
4) Głównymi krokami (8–14) z:
   - dokładną akcją
   - co użytkownik powinien zobaczyć
   - gdzie krok może się wywalić / nie zadziałać
5) Sekcją “Typowe błędy” (min. 8) i rozwiązaniami.
6) Rozwiązaniem alternatywnym / obejściem (jeśli dotyczy).
7) FAQ (10 pytań) pod realne wątpliwości.
8) Sekcją “Jeśli nadal nie działa”:
   - jakie dane zebrać
   - jak skontaktować się z supportem (szablon)
9) Sugestiami zrzutów/diagramów:
   - w którym kroku
   - co powinien pokazywać każdy obraz
10) Checklistą redakcyjną (12 punktów): jasność, dostępność, spójność, linki.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-002",
    title:
      "Szybki start (Quickstart) dla nowych użytkowników: 15 minut do pierwszego sukcesu",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Quickstart, żeby użytkownik osiągnął namacalny efekt w mniej niż 15 minut.",
    prompt: `Produkt: [ ]
Rezultat “pierwszy sukces”: [ ]
Idealny użytkownik: [ ]
Platforma: [web/aplikacja]
Ton: [ ]

Stwórz przewodnik Quickstart z:
1) Celem (jedno zdanie) + czego się nauczysz.
2) Listą wymagań (2–6).
3) Ścieżką w 3 fazach:
   - Faza 1 (2–4 min): minimalna konfiguracja
   - Faza 2 (5–8 min): główna akcja
   - Faza 3 (2–3 min): weryfikacja + następny krok
4) Numerowanymi krokami z mikro-checkami “Czy widzisz to?”.
5) Typowymi błędami (6) i jak ich uniknąć.
6) “Następny poziom”: 5 rzeczy do sprawdzenia później.
7) Końcowym CTA: powiązany zasób + gdzie poprosić o pomoc.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-003",
    title:
      "Dokument “Jak to działa” (koncepcyjny): wyjaśnij system bez technicznego żargonu + glosariusz",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Dokument koncepcyjny redukujący tickety: jak działa, dlaczego dzieje się X i jak myśleć o produkcie.",
    prompt: `Element do wyjaśnienia: [subskrypcja/billing/funkcja/algorytm]
Poziom użytkownika: [ ]
Ton: [ ]

Napisz dokument koncepcyjny, który zawiera:
1) Wyjaśnienie na 3 poziomach:
   - 1 ultraproste akapity
   - wyjaśnienie średnie z przykładem
   - wyjaśnienie bardziej techniczne (opcjonalnie)
2) “Czym TO jest” vs “Czym TO NIE jest” (tabela koncepcyjna w tekście).
3) 5 użytecznych analogii (bez cringu) dla nietechnicznych.
4) Typowe przypadki (10): “jeśli X, to znaczy Y”.
5) Glosariusz (12–20 terminów) z prostymi definicjami.
6) Sekcję “mity” (8) i sprostowania.
7) Jak unikać błędów: checklista (10).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-004",
    title:
      "FAQ master: 30 realnych pytań (pogrupowanych) + odpowiedzi krótkie i długie",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Tworzy FAQ, które realnie zmniejsza obciążenie supportu: spójne i wykonalne odpowiedzi.",
    prompt: `Produkt: [ ]
Temat: [dostęp/billing/użytkowanie/bezpieczeństwo]
Ton: [ ]

Wygeneruj FAQ z:
1) 30 pytań w 5 sekcjach (po 6 pytań).
2) Dla każdego pytania:
   - krótka odpowiedź (1–2 linie)
   - długa odpowiedź (5–8 linii) z krokami, jeśli trzeba
   - sugerowany link do powiązanego artykułu (wymyśl tytuł, jeśli nie istnieje)
3) 10 pytań “konfliktowych” i jak spokojnie odpowiadać.
4) Wewnętrzny przewodnik: jak utrzymywać FAQ aktualne (proces i częstotliwość).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-005",
    title:
      "Baza wiedzy dla supportu: taksonomia, tagi, standardy i utrzymanie",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Projekt struktury Help Center: kategorie, tagi i zasady pisania.",
    prompt: `Typ biznesu: [SaaS/ecommerce/kurs]
Oczekiwana liczba artykułów: [ ]
Zespół: [ ]

Stwórz plan Bazy Wiedzy z:
1) Taksonomią:
   - 8–12 głównych kategorii
   - 3–6 podkategorii dla każdej
2) Systemem tagów (20–40 tagów) z zasadami użycia.
3) Standardami dokumentacji:
   - głos/ton
   - docelowa długość
   - format kroków
   - jak nazywać artykuły
4) Procesem aktualizacji:
   - wyzwalacze (tickety, releasy, zmiany)
   - rytm (tygodniowo/miesięcznie)
   - role (owner/reviewer)
5) Metrykami: co mierzyć (deflection rate, nieudane wyszukiwania itd.).
6) Checklistą redakcyjną do akceptacji artykułu.`,
    thumbnail: "",
  },

  {
    id: "sop-doc-006",
    title:
      "Runbook dla agentów: jak rozwiązać sprawę od A do Z (z szablonami)",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Wewnętrzny manual agenta: diagnoza, eskalacja, dokumentacja i spójne domknięcia.",
    prompt: `Produkt: [ ]
Typy spraw: [krótka lista]
Kanały: [ ]

Stwórz wewnętrzny runbook z:
1) Standardowym flow (diagram w tekście) od ticketa → zamknięcia.
2) Przewodnikiem diagnozy: 12 pytań bazowych + kiedy ich używać.
3) “Do/Don’t” (15 par).
4) Szablonami:
   - prośba o dane
   - wyjaśnienie polityki
   - eskalacja do L2
   - domknięcie z prewencją
5) Checklistą dokumentacji (10 obowiązkowych pól).
6) Eskalacją:
   - kryteria
   - priorytet
   - minimalne dane do załączenia
7) QA: kryteria jakości (rubryka 1–5).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-007",
    title:
      "Artykuł troubleshooting (drzewko): ‘Jeśli widzisz ten błąd → zrób to’ (20 gałęzi)",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Dokument w stylu drzewa decyzji dla typowych błędów i szybkich rozwiązań.",
    prompt: `Ogólny problem: [nie ładuje/nie mogę się zalogować/nie mogę zapłacić/etc.]
Platforma: [web/aplikacja]
Typowe błędy: [jeśli masz, wklej]

Stwórz troubleshooting z:
1) Diagnozą startową (5 szybkich checków).
2) Drzewem decyzji w tekście z 20 gałęziami:
   - warunek → akcja → oczekiwany rezultat
3) Bezpiecznymi obejściami (5).
4) Kiedy eskalować i jakie dane dodać (checklista).
5) Sekcją “czego NIE robić” (10).
6) FAQ (10).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-008",
    title:
      "Przyjazne release notes (dla użytkowników): podsumowanie zmian + wpływ + działania",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Szablon notatek z wersji, który zmniejsza tickety przez niespodziewane zmiany.",
    prompt: `Wersja/data: [ ]
Zmiany (wklej bulletsy): [ ]
Nowe funkcje: [ ]
Poprawki błędów: [ ]
Breaking changes: [ ]

Napisz release notes z:
1) Podsumowaniem (5 bulletów).
2) Co zmienia się dla użytkownika (wg ról/planów, jeśli dotyczy).
3) Ważnymi zmianami (szczegóły) + przed vs po.
4) Jeśli są breaking changes:
   - kogo dotyczy
   - co trzeba zrobić
   - termin
5) FAQ (8) przewidujące wątpliwości.
6) “Przewodnik dla supportu”:
   - makra (6)
   - tagi
   - kiedy eskalować.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-009",
    title:
      "Przewodnik migracji: przed → po (kroki, ryzyka, rollback i weryfikacja)",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Dokument migracyjny, który zapobiega ticketom: kroki, weryfikacje, fallback i checklisty.",
    prompt: `Co migrujemy: [plan/system/funkcja]
Odbiorcy: [użytkownicy/admini]
Ryzyka: [ ]
Okno czasowe: [ ]

Stwórz przewodnik z:
1) Kontekstem: dlaczego migrujemy i co zyskuje użytkownik.
2) Wymaganiami wstępnymi.
3) Planem krok po kroku (10–18 kroków) z punktami weryfikacji.
4) Ryzykami i mitigacjami (10).
5) Planem rollback (jeśli dotyczy) w prostych słowach.
6) FAQ (10).
7) Przewodnikiem dla supportu: sygnały awarii + makra (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-010",
    title:
      "Dokument polityk dla supportu (operacyjny): zamień zasady w decyzje",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Zamienia długie polityki w praktyczny manual dla agentów i QA.",
    prompt: `Obecne polityki (wklej lub streść): [ ]
Typowe sprawy: [ ]
Narzędzie supportu: [Zendesk/Intercom/etc.]

Wygeneruj:
1) “Cheat sheet” na 1 stronę: reguły jeśli→to.
2) Drzewo decyzji dla 3 tematów:
   - zwroty
   - anulowania
   - nadużycia/fraud
3) Makra gotowe do wklejenia (20) wg scenariusza:
   - zaakceptowano
   - odrzucono
   - przypadek graniczny (prośba o info)
4) Checklistę QA do audytu zgodności (12 kryteriów).
5) Przewodnik rejestracji: obowiązkowe tagi i pola.`,
    thumbnail: "",
  },

  {
    id: "sop-doc-011",
    title:
      "SOP ‘jak pisać dokumentację’: styl, dobre/złe przykłady i zasady",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Manual redakcyjny, żeby cała dokumentacja była spójna.",
    prompt: `Marka/ton: [ ]
Odbiorcy: [ ]
Platforma docs: [Notion/Help Center]
Poziom szczegółowości: [ ]

Stwórz SOP redakcyjny z:
1) Zasadami stylu (15) z dobrymi/złymi przykładami.
2) Standardowym formatem artykułu (szablon).
3) Jak pisać kroki:
   - czasownik akcji
   - oczekiwany rezultat
   - co zrobić, jeśli się nie uda
4) Konwencjami: nazwy menu, przyciski, placeholdery.
5) Dostępnością: język, kontrast, alt text, unikanie żargonu.
6) Procesem: draft → review → publish → update.
7) Checklistą końcową (20).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-012",
    title:
      "Mapa treści: jakie artykuły pisać najpierw wg ticketów (priorytetyzacja 80/20)",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Plan treści do dokumentacji oparty o wpływ: tickety, wyszukiwania i top frikcje.",
    prompt: `Top tickety (jeśli masz, wklej 10): [ ]
Top nieudane wyszukiwania (jeśli masz): [ ]
Produkt: [ ]

Stwórz:
1) Metodę priorytetyzacji (wpływ × częstotliwość × trudność).
2) Listę 25 artykułów “must-have” z:
   - tytułem
   - celem
   - sekcją w bazie
   - dlaczego obniża liczbę ticketów
3) Roadmap na 4 tygodnie tworzenia/aktualizacji.
4) KPI na tydzień (deflection, % ticketów powtarzalnych itd.).
5) Szablon “ticket → artykuł” (kroki).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-013",
    title:
      "Szablon ‘Status Page’ i komunikaty incydentu (docs + makra)",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Teksty na status page i artykuły incydentowe z rytmem update’ów.",
    prompt: `Incydent: [ ]
Wpływ: [ ]
ETA: [ ]
Obejście (workaround): [ ]
Kanały: [status page/email/social]

Wygeneruj:
1) Szablony status page:
   - badamy (investigating)
   - zidentyfikowane (identified)
   - monitorujemy (monitoring)
   - rozwiązane (resolved)
2) Artykuł post-mortem (dla użytkownika):
   - co się stało (wysoki poziom)
   - co zrobiliśmy
   - prewencja
3) FAQ incydentu (10).
4) Makra supportowe (10) do odpowiedzi na tickety podczas incydentu.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-014",
    title:
      "Przewodnik wizualny: sugerowane zrzuty ekranu + standard adnotacji (strzałki, blur itd.)",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Standaryzacja screenshotów: co łapać, jak anotować i jak ukrywać dane.",
    prompt: `Produkt: [web/aplikacja]
Wrażliwe obszary: [emaile/płatności]
Styl: [minimal/wyjaśniający]

Zdefiniuj standard screenshotów z:
1) Kiedy używać zrzutu vs GIF vs wideo.
2) Zasadami adnotacji:
   - strzałki
   - podkreślenia/wyróżnienia
   - blur danych
3) Konwencjami: rozmiary, rozdzielczość, format, nazwy plików.
4) “Co zrzucać” w 10 typowych rodzajach artykułów.
5) Checklistą prywatności dla obrazów (12).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-015",
    title:
      "Dokument szkoleniowy dla nowych agentów: 7 dni, zadania, ocena i zasoby",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Plan onboardingu agentów z zadaniami dziennymi i rubrykami oceny.",
    prompt: `Zespół: [liczba]
Narzędzia: [helpdesk, CRM]
Produkt: [ ]
Grafik: [ ]

Stwórz plan na 7 dni z:
1) Celami na każdy dzień.
2) Modułami: produkt, ton, polityki, narzędzia, eskalacja.
3) Zadaniami praktycznymi (2–3 dziennie).
4) Shadowingiem i przeglądem ticketów.
5) Rubryką oceny (1–5) z 8 kryteriami.
6) Quizem końcowym (15 pytań) na weryfikację.
7) Checklistą do dopuszczenia agenta do produkcji.`,
    thumbnail: "",
  },

  {
    id: "sop-doc-016",
    title:
      "Szablon artykułu dwujęzycznego (ES/EN): spójność i brak dziwnych tłumaczeń",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Struktura docs w dwóch językach z glosariuszem i spójnością terminów.",
    prompt: `Temat: [ ]
Kluczowa terminologia: [ ]
Głos/ton: [ ]

Stwórz:
1) Równoległy szablon ES/EN z ustalonymi sekcjami.
2) Glosariusz 20 terminów z preferowanym tłumaczeniem.
3) Zasady “czego nie tłumaczyć”: nazwy przycisków, funkcji itd.
4) Checklistę QA językowego (12).
5) Przykład 1 sekcji już napisanej w obu językach.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-017",
    title:
      "Dokument ‘kompatybilność’ (przeglądarki/urządzenia): czytelna tabela + troubleshooting per platforma",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Określa kompatybilność i rozwiązania, gdy użytkownik jest w nieobsługiwanym środowisku.",
    prompt: `Produkt: [ ]
Oficjalne wsparcie: [Chrome/Firefox/iOS/etc.]
Ograniczenia: [ ]

Napisz dokument z:
1) Tabelą kompatybilności (w tekście):
   - przeglądarka/urządzenie
   - wspierane tak/nie
   - uwagi
2) Minimalnymi wymaganiami (hardware/sieć).
3) Troubleshootingiem per środowisko (web, iOS, Android) z krokami.
4) FAQ (10).
5) Makrami supportowymi (8) do “środowisko niewspierane” bez twardego tonu.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-018",
    title:
      "KBA (Knowledge Base Article) o rozliczeniach: ‘Jak czytać fakturę’ + przypadki podatkowe",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Pomaga zrozumieć opłaty, rachunki, podatki i typowe pojęcia.",
    prompt: `Bramka płatnicza: [Stripe/etc.]
Podatki: [VAT/IVA]
Kraje: [ ]

Napisz artykuł:
1) Budowę faktury (pola i znaczenie).
2) Różnicę między paragonem/rachunkiem/fakturą (w Twoim kontekście).
3) Podatki: czemu się pojawiają i jak są liczone (wysoki poziom).
4) 10 typowych przypadków nieporozumień (podwójna opłata, blokada, itd.).
5) Kroki pobrania faktury/aktualizacji danych.
6) FAQ (12).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-019",
    title:
      "Przewodnik rozwiązywania problemów ‘bez supportu’: autodiagnoza w 5 minut",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Szybka checklista autodiagnozy, żeby zmniejszyć podstawowe tickety.",
    prompt: `Produkt: [ ]
Typowe problemy: [lista]

Stwórz przewodnik “5 minut” z:
1) 8 szybkimi checkami (od najbardziej skutecznych).
2) 5 konkretnymi krokami per platforma (web/app).
3) Sygnałami, że to realny bug (6).
4) Jeśli potrzebujesz supportu: szablon minimalnych danych.
5) Ludzką końcówką: “jeśli się nie naprawi, pomożemy”.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-020",
    title:
      "Dokument ‘jak prosić support o pomoc’: co dołączyć, żeby rozwiązać 2x szybciej",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Uczy użytkowników pisać dobre zgłoszenia z przykładami.",
    prompt: `Kanały wsparcia: [ ]
Przydatne dane techniczne: [ ]

Napisz artykuł z:
1) Dlaczego to pomaga (krótko).
2) Szablonem idealnego zgłoszenia:
   - cel
   - kroki
   - oczekiwane vs otrzymane
   - środowisko
   - dowody
3) Przykładami:
   - złe zgłoszenie (i czemu)
   - dobre zgłoszenie (i czemu)
4) Jak zrobić zrzuty / nagrać krótkie wideo.
5) FAQ (8).`,
    thumbnail: "",
  },

  {
    id: "sop-doc-021",
    title:
      "Dokument wewnętrzny: słownik makr i kiedy ich używać (dla spójności)",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Katalog makr (tytuły, cel, warunki) redukujący różnice w odpowiedziach.",
    prompt: `Kategorie: [billing, dostęp, bugi, wysyłka]
Ton: [ ]

Stwórz słownik makr z:
1) 40 makrami (tytuł + tekst + kiedy użyć + kiedy NIE używać).
2) Powiązanymi tagami dla każdego makra.
3) “Macro combos”: sekwencje 3 makr dla typowych flow.
4) Przewodnik anty-robot: jak spersonalizować 1 linię bez psucia spójności.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-022",
    title:
      "Szablon dokumentacji procesów (SOP) dla operacji: kroki, role, SLA i ryzyka",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Uniwersalny szablon SOP dla dowolnego procesu: role, ryzyka, QA i metryki.",
    prompt: `Proces do udokumentowania: [ ]
Narzędzia: [ ]
Role: [ ]

Stwórz SOP z:
1) Celem i zakresem.
2) Rolami i odpowiedzialnościami (uprościone RACI).
3) Inputami/outputami.
4) Szczegółowymi krokami (12–20).
5) Kontrolami jakości (checkpointy).
6) Ryzykami i mitigacjami (10).
7) Metrykami (5–8) do oceny działania.
8) Checklistą wykonania (do druku).
9) Planem ciągłego doskonalenia.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-023",
    title:
      "Dokument ‘przewodnik dla adminów’: uprawnienia, role, bezpieczeństwo i najlepsze praktyki",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Dokument dla administratorów zmniejszający tickety o uprawnienia i dostęp.",
    prompt: `Produkt: [ ]
Dostępne role: [ ]
Wrażliwe akcje: [zaproszenia, rozliczenia, usuwanie]

Napisz przewodnik dla adminów z:
1) Co może zrobić każda rola (tabela w tekście).
2) Jak przypisać role (kroki).
3) Najlepsze praktyki bezpieczeństwa (10).
4) Typowe przypadki (10) i rozwiązania.
5) Checklistę “bezpieczny setup” (12 punktów).
6) FAQ (12).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-024",
    title:
      "Przewodnik ‘obsługa incydentów’ dla supportu: playbook i pre-approved komunikaty",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Wewnętrzny playbook: poziomy severities, komunikacja, makra i współpraca z inżynierią.",
    prompt: `Produkt: [ ]
Severities: [P1–P4]
Kanały: [status/czat/email]

Stwórz playbook z:
1) Definicją poziomów z przykładami.
2) Działaniami per poziom (co robi support).
3) Pre-approved komunikatami (15) dla klientów i wewnętrznie.
4) Checklistą otwarcia incydentu (10).
5) Checklistą zamknięcia incydentu (10).
6) Szablonem wewnętrznego postmortem (RCA).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-025",
    title:
      "Dokument ‘oficjalna terminologia’: dokładne nazwy funkcji, przycisków i ekranów",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Zapobiega nieporozumieniom: oficjalny słownik UI dla supportu i docs.",
    prompt: `Produkt: [ ]
Język: [PL]
Ekrany/menu: [jeśli masz, wklej]

Stwórz:
1) Glosariusz UI:
   - nazwa oficjalna
   - synonimy, których używają ludzie
   - gdzie to się znajduje
2) Zasady odwoływania się do przycisków/menu w tekście.
3) Listę 25 standardowych fraz do nawigowania użytkownika.
4) Checklistę redakcyjną do utrzymania spójności.`,
    thumbnail: "",
  },

  {
    id: "sop-doc-026",
    title:
      "Dokument ‘uprawnienia i błędy’: tabela błąd → przyczyna → rozwiązanie → kto może naprawić",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Mapa uprawnień: mniej ticketów “nie mogę” i szybsza eskalacja do właściwej osoby.",
    prompt: `System ról: [ ]
Typowe błędy: [ ]

Stwórz dokument z:
1) Tabelą (w tekście) 25 błędów:
   - komunikat widoczny
   - prawdopodobna przyczyna
   - rozwiązanie
   - wymagany poziom roli
2) Przewodnikiem: jak wykryć brak uprawnień (sygnały).
3) Makrami (8) z prośbą do admina o nadanie dostępu.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-027",
    title:
      "Dokument ‘integracje’: przewodnik per integracja + troubleshooting + limity wsparcia",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Spójne artykuły integracyjne: kroki, weryfikacja i troubleshooting.",
    prompt: `Integracja: [Zapier/Meta/Google/etc.]
Typowy cel: [ ]
Wymagania: [klucze API/role]

Napisz artykuł z:
1) Co robi integracja i use case’y (5).
2) Wymagania wstępne i uprawnienia.
3) Połączenie krok po kroku (10–14).
4) Weryfikację: jak potwierdzić, że działa.
5) Troubleshooting (12) dla typowych błędów.
6) Ograniczenia i czego support NIE wspiera.
7) FAQ (10) + szablon zgłoszenia do dostawcy integracji.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-028",
    title:
      "Szablon krótkiego ‘manuala użytkownika’: moduły, nawigacja, tipy i skróty",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Kompaktowy manual dla tych, co nie chcą czytać: skupiony na zadaniach.",
    prompt: `Produkt: [ ]
Moduły: [lista]
Główne zadania: [lista]

Stwórz krótki manual z:
1) Mapą nawigacji (w tekście).
2) 10 głównymi zadaniami z mini-krokami.
3) 10 tipami/skrótem (best practices).
4) “Typowymi błędami” (8) i jak ich unikać.
5) FAQ (10) + sugerowanymi zasobami.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-029",
    title:
      "Dokument dla supportu: ‘zmiany w UX’ — przed vs po + gdzie to jest teraz + dlaczego",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Pomaga użytkownikom po zmianach: mapa przed/po i szybki przewodnik.",
    prompt: `Zmiana UX: [ ]
Dotknięte ekrany: [ ]
Powód zmiany: [ ]

Wygeneruj:
1) Streszczenie zmiany (2–3 linie).
2) Przed vs po (8–12 różnic).
3) “Gdzie to jest teraz” — kroki per zadanie (8 zadań).
4) FAQ (10) i makra supportowe (8).
5) Notkę anty-ticket: sugerowany copy in-app.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-030",
    title:
      "Checklista audytu dokumentacji: wykrywanie artykułów zepsutych, nieaktualnych i niejasnych",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Praktyczny system miesięcznego przeglądu docs z konkretnymi kryteriami.",
    prompt: `Platforma docs: [ ]
Częstotliwość: [miesięcznie]
Źródła sygnału: [tickety/wyszukiwarka]

Stwórz:
1) Checklistę audytu (25 punktów) obejmującą:
   - jasność
   - poprawność
   - linki
   - screenshoty
   - podstawy SEO
2) Metodę wykrywania artykułów do aktualizacji (10 sygnałów).
3) Szablon raportu z audytu (pola).
4) Plan miesięcznego utrzymania (3 godz./tydzień).`,
    thumbnail: "",
  },

  {
    id: "sop-doc-031",
    title:
      "Szablon ‘dokumentacji dla supportu’: jak napisać użyteczne “Known Issues”",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Standaryzuje Known Issues: symptomy, obejście, status i kogo dotyczy.",
    prompt: `Produkt/wersja: [ ]
Lista issue’ów (jeśli masz): [ ]

Stwórz format Known Issues z:
1) Obowiązkowymi polami per issue:
   - symptom
   - kogo dotyczy
   - poziom ważności
   - workaround
   - status
   - ETA (jeśli istnieje)
2) Przykładem 5 issue’ów uzupełnionych (wymyślonych, jeśli trzeba).
3) Makrami supportowymi per status (6).
4) Zasadami aktualizacji i rytmem.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-032",
    title:
      "Przewodnik ‘eksport/import danych’: kroki, formaty, limity i typowe błędy",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Kompletny artykuł eksport/import z przykładami CSV i troubleshootingiem.",
    prompt: `Typ danych: [użytkownicy/kontakty/zamówienia]
Format: [CSV/JSON]
Limity: [wiersze/rozmiar]

Napisz przewodnik z:
1) Eksportem: kroki + jakie pola się eksportują.
2) Importem: szablon pliku (pola, przykłady wierszy).
3) Walidacjami i typowymi błędami (12) + rozwiązanie.
4) Dobrymi praktykami: czyszczenie danych, encoding, separatory.
5) Weryfikacją po imporcie.
6) FAQ (10) + jak poprosić support, jeśli nie działa.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-033",
    title:
      "Dokument ‘konta i bezpieczeństwo’: 2FA, sesje, urządzenia, aktywność i odzyskiwanie",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Artykuł bezpieczeństwa zmniejszający tickety i budujący zaufanie.",
    prompt: `Systemy: [2FA/email/hasło/SSO]
Platforma: [ ]

Napisz artykuł z:
1) Jak włączyć 2FA (kroki).
2) Jak zobaczyć i zamknąć sesje.
3) Co zrobić przy podejrzeniu przejęcia (natychmiastowe kroki).
4) Odzyskiwanie konta (bez proszenia o hasła).
5) Sygnały phishingu (10).
6) FAQ (12) + makra supportowe (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-034",
    title:
      "Dokument ‘nieudana płatność’: ponowienia, przyczyny, rozwiązania i zawieszenie",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Kompletny artykuł o błędach płatności: rozwiązania per przyczyna i harmonogram.",
    prompt: `Bramka płatnicza: [ ]
Typowe przyczyny: [brak środków/bank/3DS]
Polityka zawieszenia: [ ]

Napisz artykuł z:
1) Co oznacza “płatność nieudana”.
2) Harmonogram ponowień i powiadomień.
3) 10 przyczyn z konkretnymi rozwiązaniami.
4) Jak zaktualizować metodę płatności (kroki).
5) Co dzieje się z dostępem/danymi.
6) FAQ (12) + makra supportowe (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-035",
    title:
      "Wewnętrzny przewodnik: jak pisać odpowiedzi z jednym CTA (mniej ping-ponga)",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Manual do lepszych odpowiedzi: 1 CTA, empatia i weryfikacja efektu.",
    prompt: `Kanał: [czat/email]
Ton: [ ]

Stwórz przewodnik z:
1) Strukturą odpowiedzi w 7 liniach.
2) Jak streścić problem (parafraza).
3) Jak podawać kroki: max 2 na wiadomość (czat) lub 6 na email.
4) Jednym CTA: jak je formułować (10 przykładów).
5) Weryfikacją sukcesu: 10 fraz.
6) Anty-wzorcami: 12 typowych błędów i jak ich unikać.`,
    thumbnail: "",
  },

  {
    id: "sop-doc-036",
    title:
      "Dokument ‘standardy supportu’: czasy, ton, użycie makr i domknięcie",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Definiuje, jak wygląda ‘świetny support’ w zespole.",
    prompt: `Zespół: [ ]
Kanały: [ ]
Docelowe SLA: [ ]

Stwórz standard wewnętrzny z:
1) Zasadami (5–7).
2) Tonem/głosem (do/don’t + przykłady).
3) Czasami: pierwsza odpowiedź, update’y, zamknięcie.
4) Użyciem makr: kiedy tak/kiedy nie.
5) Jakością: checklista (15) i rubryka.
6) Obsługą trudnych przypadków (zły klient, legal, itd.).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-037",
    title:
      "Przewodnik ‘zmiany planu’: upgrade/downgrade, pro-rata i wpływ na funkcje",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Artykuł zmniejszający tickety billingowe: co się dzieje przy zmianie planu.",
    prompt: `Plany: [lista]
Proporcjonalne rozliczenie (pro-rata): [tak/nie]
Wpływ: [limity, funkcje]

Napisz artykuł z:
1) Co dzieje się przy upgrade (kiedy obowiązuje, opłata).
2) Co dzieje się przy downgrade (kiedy obowiązuje, limity).
3) Pro-rata wyjaśnione prostym przykładem liczbowym.
4) 12 typowych przypadków i odpowiedzi.
5) FAQ (12) + makra supportowe (10).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-038",
    title:
      "Dokument ‘rozwiązywanie sporów’: gdy support i klient się nie zgadzają",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Wewnętrzny przewodnik do sporów: dowody, polityki i deeskalacja.",
    prompt: `Typ sporu: [zwrot/polityka/bug]
Polityki: [ ]

Stwórz wewnętrzny dokument z:
1) Zasadą: empatia bez ulegania nadużyciom.
2) Jak zbierać dowody (checklista).
3) Jak wyjaśniać polityki “po ludzku”.
4) Jak proponować alternatywy.
5) Protokół eskalacji do lidera/legal.
6) Trudne makra (12) z bezpiecznymi frazami.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-039",
    title:
      "Dokument ‘warstwy wsparcia’: L1/L2/L3 i kryteria eskalacji",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Jasno definiuje odpowiedzialności per poziom, żeby uniknąć ping-ponga.",
    prompt: `Zespół: [support/inżynieria/ops]
Narzędzie ticketowe: [ ]
Severities: [ ]

Napisz dokument z:
1) Co rozwiązuje L1, L2, L3 (szczegółowa lista).
2) Kryteria eskalacji (wg typu sprawy).
3) Minimalne dane do eskalacji (checklista).
4) Wewnętrzne SLA między zespołami.
5) Szablony:
   - handoff
   - update do klienta
   - finalne rozwiązanie`,
    thumbnail: "",
  },
  {
    id: "sop-doc-040",
    title:
      "Dokument ‘szablony komunikacji’: kompletny pakiet dla supportu (40 elementów)",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Zestaw komunikacji: powitania, prośba o dane, update’y, domknięcia, polityki, eskalacje.",
    prompt: `Produkt: [ ]
Ton: [ ]
Kanały: [czat/email/WhatsApp]

Wygeneruj pakiet 40 elementów:
- 8 powitań (per kanał)
- 8 próśb o dane (kompaktowo)
- 6 update’ów (z nowościami i bez)
- 8 domknięć (z prewencją)
- 6 polityk (zwrot/anulowanie/itd.)
- 4 eskalacje (L2/legal)

Każdy element ma zawierać:
1) Tekst
2) Kiedy użyć
3) 1 wariant alternatywny (bardziej bezpośredni).`,
    thumbnail: "",
  },

  {
    id: "sop-doc-041",
    title:
      "Dokument ‘problemy z e-mailami’: nie dochodzi wiadomość, spam, domeny, whitelisting",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Kompletny przewodnik dla problemów z pocztą: kroki per dostawca i checklista.",
    prompt: `Typ emaila: [logowanie/paragony/powiadomienia]
Typowi dostawcy: [Gmail/Outlook]
Domena: [ ]

Napisz artykuł z:
1) Szybką checklistą (8).
2) Krokami per dostawca (Gmail/Outlook): spam i filtry.
3) Whitelistingiem (jak to zrobić) + jakie adresy dodać.
4) Problemami domen firmowych (IT).
5) Jeśli nadal: jakie dane zebrać (nagłówki, jeśli dotyczy).
6) FAQ (10) + makra supportowe (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-042",
    title:
      "Przewodnik ‘pobrania i dostęp’: wygasłe linki, limity i odzyskiwanie",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Dokument dla produktów cyfrowych: odzyskiwanie dostępu i rozwiązywanie wygasłych linków.",
    prompt: `Produkt cyfrowy: [ ]
Linki: [wygasają/nie wygasają]
Platforma: [ ]

Napisz artykuł z:
1) Jak uzyskać dostęp do zakupów (kroki).
2) Wygasłe linki: dlaczego i jak wygenerować ponownie.
3) Limity pobrań (jeśli dotyczy).
4) 10 typowych problemów i rozwiązania.
5) Jeśli podejrzewasz phishing: co zrobić.
6) FAQ (10) + makra supportowe (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-043",
    title:
      "Dokument ‘jak zgłaszać bugi’ dla power users: repro, logi, HAR i krótkie wideo",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Zaawansowany przewodnik dla raportów bugów wysokiej jakości.",
    prompt: `Produkt: [web]
Użytkownicy zaawansowani: [tak]
Narzędzia: [Chrome]

Napisz przewodnik z:
1) Szablonem bug reportu.
2) Jak nagrać przydatne krótkie wideo (co pokazać).
3) Jak zebrać logi z konsoli (kroki).
4) Jak wyeksportować plik HAR (kroki), jeśli dotyczy.
5) Jak anonimizować dane przed wysłaniem.
6) Czego NIE wysyłać (dane wrażliwe).
7) FAQ (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-044",
    title:
      "Dokument ‘compliance i prywatność’ dla supportu: co zapisywać w ticketach, a czego nie",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Zasady prywatności dla agentów: PII, płatności, hasła, zrzuty i retencja.",
    prompt: `Region: [ ]
Narzędzie ticketowe: [ ]

Napisz wewnętrzny dokument z:
1) Czego NIGDY nie prosić (lista).
2) O co można prosić i jak (bezpieczniej).
3) Jak obsługiwać zrzuty z PII (blur/redakcja).
4) Retencja ticketów: co zostaje i na jak długo (wysoki poziom).
5) Bezpieczne szablony do weryfikacji.
6) Checklistę zgodności (15).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-045",
    title:
      "Dokument dla klientów enterprise: onboarding, bezpieczeństwo, SSO i dobre praktyki",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Przewodnik enterprise zmniejszający tickety: SSO, role, bezpieczeństwo i support.",
    prompt: `Produkt: [ ]
SSO: [tak/nie]
Role: [ ]

Napisz dokument enterprise z:
1) Checklistą onboardingu (15).
2) Rekomendowaną konfiguracją (bezpieczeństwo, role).
3) SSO (jeśli dotyczy): kroki + troubleshooting.
4) Zarządzaniem użytkownikami i dostępami.
5) FAQ (12) + makra supportowe (10).`,
    thumbnail: "",
  },

  {
    id: "sop-doc-046",
    title:
      "Dokument ‘jak czytać błąd’: standard wiadomości błędu i sugerowanych działań",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Zamienia błędy techniczne w użyteczne komunikaty z działaniami i linkami.",
    prompt: `System: [ ]
Częste błędy: [wklej listę]

Stwórz standard:
1) Format błędu:
   - tytuł
   - co się stało (po ludzku)
   - co zrobić teraz (akcja)
   - szczegóły techniczne (zwijane)
   - link do artykułu
2) 15 przykładów błędów przepisanych wg standardu.
3) Przewodnik dla supportu: jak mapować błąd → artykuł → makro.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-047",
    title:
      "Dokument ‘upload plików’: formaty, rozmiary, błędy i rozwiązania",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Kompletny artykuł o wgrywaniu plików: limity, kompresja i troubleshooting.",
    prompt: `Typ plików: [obrazy/wideo/dokumenty]
Limity: [rozmiar/format]
Platforma: [web/aplikacja]

Napisz artykuł z:
1) Wymaganiami (formaty/rozmiary).
2) Jak wgrać (kroki).
3) 12 typowych błędów z rozwiązaniami.
4) Poradami: kompresja i jakość.
5) FAQ (10) + makra supportowe (8).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-048",
    title:
      "Dokument ‘inwentarz artykułów’: lista krytycznych docs + owner + data + kolejna rewizja",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Szablon do utrzymania bazy wiedzy żywej i aktualnej.",
    prompt: `Kategorie: [ ]
Ownerzy: [zespół/osoby]
Częstotliwość przeglądu: [ ]

Stwórz inwentarz w formacie tabeli-w-tekście z kolumnami:
- Tytuł
- Kategoria
- Owner
- Ostatnia aktualizacja
- Następny przegląd
- Wskaźniki (powiązane tickety, wyszukiwania)
Dodatkowo:
1) Zasugeruj 25 “krytycznych” artykułów dla Twojego biznesu.
2) Podaj miesięczną procedurę (kroki) przeglądu i aktualizacji.
3) Jak decydować: “archiwizować” vs “aktualizować”.`,
    thumbnail: "",
  },
  {
    id: "sop-doc-049",
    title:
      "Dokument wewnętrzny ‘procedura zwrotów’: kroki per bramka płatnicza + kontrole",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "Wewnętrzny SOP do procesowania zwrotów z kontrolami, rejestrem i komunikacją.",
    prompt: `Bramka płatnicza: [Stripe/PayPal/etc.]
Polityka: [ ]
Role: [ ]

Stwórz wewnętrzny SOP z:
1) Wymaganiami wstępnymi (weryfikacje).
2) Dokładnymi krokami w bramce (ogólne, jeśli brak szczegółów).
3) Kontrolami antyfraudowymi.
4) Komunikacją do klienta:
   - zaakceptowano
   - terminy
   - potwierdzenie
5) Rejestrem wewnętrznym:
   - obowiązkowe pola
   - tagi
6) Audytem: checklistą (10).`,
    thumbnail: "",
  },
  {
    id: "sop-doc-050",
    title:
      "Dokument ‘kontrola jakości supportu’: rubryka, przykłady i proces coachingu",
    area: "Obsługa Klienta & SOPy",
    category: "Dokumentacja",
    summary:
      "System QA dla supportu: kryteria, punktacja, przykłady i plan poprawy.",
    prompt: `Zespół: [ ]
Kanały: [ ]
Cel: [CSAT/deflection]

Stwórz dokument z:
1) Rubryką QA (1–5) z 10 kryteriami:
   - jasność, empatia, jedno CTA, poprawność, polityki itd.
2) Przykładami:
   - odpowiedź 5/5
   - odpowiedź 3/5
   - odpowiedź 1/5
3) Procesem przeglądu:
   - próbki
   - feedback
   - coaching
4) Szablonem planu poprawy dla agenta.
5) Metrykami i jak je interpretować.`,
    thumbnail: "",
  },
];
