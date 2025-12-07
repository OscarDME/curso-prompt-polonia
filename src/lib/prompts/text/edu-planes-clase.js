// src/lib/prompts/text/edu-planes-clase.js

export const textPromptsEduPlanesClase = [
  {
    id: "edu-plan-001",
    title: "Kompletny plan lekcji (60 min) z celami, aktywnościami, ocenianiem i podsumowaniem",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Tworzy 60-minutowy plan z etapami, materiałami, przewodnikiem dla prowadzącego i oceną.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom edukacyjny: [szkoła podstawowa/szkoła średnia/liceum/studia/szkolenie firmowe]
Łączny czas: 60 minut
Wielkość grupy: [ ]
Kontekst (stacjonarnie/online/hybrydowo): [ ]
Wiedza wstępna: [ ]
Ograniczenia (brak internetu, mało zasobów itp.): [ ]

Stwórz hiper-szczegółowy plan lekcji zawierający:
1) Cele uczenia się (5) z czasownikami mierzalnymi (Bloom).
2) Kryteria sukcesu (jaki dowód zobaczę, że cel został osiągnięty).
3) Harmonogram minuta po minucie (0–60) z:
   - co robi nauczyciel/prowadzący (krótki scenariusz)
   - co robi uczeń/uczestnik
   - zasoby/materiały
   - dokładne instrukcje (dosłowny tekst do powiedzenia na zajęciach)
   - możliwe błędy/pytania i jak na nie odpowiedzieć
4) Aktywność główna (uczenie aktywne):
   - przebieg krok po kroku
   - role (jeśli dotyczy)
   - przykłady i kontrprzykłady
5) Ocenianie kształtujące:
   - 6 szybkich pytań + oczekiwane odpowiedzi
   - lista obserwacyjna (checklist)
6) Zakończenie:
   - synteza w 3 punktach
   - “exit ticket” (3 pytania) z kryteriami oceny
7) Zadanie domowe / rozszerzenie (2 opcje: łatwa i wymagająca).
8) Dostosowania:
   - dla osób z zaległościami
   - dla zaawansowanych
   - dla różnych potrzeb (uwaga, język, itp.).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-002",
    title: "90-minutowy plan zajęć w stylu seminarium (głęboka dyskusja) + przewodnik pytań",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Seminarium z lekturami, pytaniami, ustrukturyzowaną debatą i rubryką udziału.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [studia/podyplomowe/zaawansowane szkolenie firmowe]
Czas trwania: 90 min
Lektura bazowa (jeśli jest): [wklej/opisz]

Zaprojektuj kompletne seminarium:
1) Cele (4–6) i kluczowe pojęcia (10).
2) Przed zajęciami:
   - 3 zadania przygotowawcze (lektura kierowana)
   - 8 pytań do lektury (2 łatwe, 4 średnie, 2 trudne)
3) Agenda minuta po minucie (0–90):
   - otwarcie (5–10): ramy, oczekiwania
   - dyskusja moderowana (40–50): sekwencja pytań z “dopytaniami”
   - aktywność (20): debata zespołowa / fishbowl / think-pair-share
   - zamknięcie (10): wnioski + synteza
4) Bank pytań:
   - 12 pytań sokratejskich
   - 6 pytań “pułapek” weryfikujących prawdziwe zrozumienie
   - 6 pytań aplikacyjnych do realnych przypadków
5) Ocenianie:
   - rubryka udziału (4 kryteria × 4 poziomy)
   - exit ticket (3) i jak go ocenić
6) Plan B:
   - co robisz, gdy grupa nie uczestniczy (konkretne strategie).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-003",
    title: "Plan zajęć typu flipped classroom (klasa odwrócona) z mikro-lekcją i praktyką",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Projekt odwrócony: przed zajęciami, praktyka na zajęciach oraz działania po zajęciach z monitoringiem.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas na zajęciach: 50–70 min
Platforma: [Google Classroom/Notion/Moodle/Brak]

Stwórz plan odwrócony:
1) Przed zajęciami (20–40 min):
   - mikro-lekcja (scenariusz + punkty)
   - krótka lektura (streszczenie 250 słów)
   - mini-quiz 8 pytań (z odpowiedziami)
2) Na zajęciach (agenda minuta po minucie):
   - rozgrzewka 5 min
   - praktyka prowadzona 15 min (z rozwiązanym przykładem)
   - praca w zespołach 25 min (case’y)
   - zamknięcie 10 min (feedback + pytania)
3) Po zajęciach:
   - zadanie utrwalające (2 poziomy)
   - refleksja (pytanie metapoznawcze)
   - kryteria oceny (prosta rubryka)
4) Wskaż:
   - typowe błędy
   - jak wykryć, kto nie zrozumiał, i jak szybko douczyć.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-004",
    title: "Plan zajęć projektowych (PBL) na 2 tygodnie: produkty, etapy i rubryki",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Kompletny projekt: pytanie przewodnie, fazy, produkty, rubryki i ocenianie.",
    prompt: `Temat/problem: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 2 tygodnie
Zajęcia: [ile spotkań i po ile minut]
Dostępne zasoby: [ ]

Zaprojektuj pełny PBL:
1) Driving Question (pytanie przewodnie) + kryteria dobrego rezultatu.
2) Produkt końcowy: co oddają (format, wymagania, przykład).
3) Fazy (z kalendarzem):
   - badanie/rozpoznanie
   - projektowanie
   - prototyp/szkic
   - feedback
   - finalne oddanie
4) Produkty cząstkowe per faza (z checklistą).
5) Rubryki:
   - rubryka produktu końcowego (4 kryteria × 4 poziomy)
   - rubryka procesu (udział, iteracja, dowody pracy)
6) Mini-lekcje “just-in-time” (5 mikro-lekcji) wspierające projekt.
7) Zróżnicowanie:
   - role w zespole
   - wsparcie dla zalegających
   - rozszerzenie dla zaawansowanych
8) Ocenianie:
   - samoocena + ocena koleżeńska (formularze + kryteria)
   - jak uniknąć free-riding (mechanizmy).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-005",
    title: "Plan zajęć kompetencyjnych: myślenie krytyczne (case’y i błędy logiczne)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Zajęcia rozwijające myślenie krytyczne: case’y, sofizmaty, debata i ocena.",
    prompt: `Kompetencja docelowa: myślenie krytyczne
Kontekst/temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60–90 min

Stwórz szczegółowy plan:
1) Cele (Bloom) i kryteria sukcesu.
2) Mikro-lekcja (10 min): pojęcia kluczowe (błędy logiczne, dowody, wnioskowanie).
3) Aktywność główna (30–40 min):
   - 3 mini-case’y z argumentami
   - uczniowie mają wskazać: twierdzenie, dowód, założenie, błąd logiczny, wniosek
   - instrukcja pracy krok po kroku
4) Debata ustrukturyzowana:
   - format (pro/contra)
   - zasady i kolejność wypowiedzi
   - pytania moderatora
5) Ocenianie:
   - rubryka (klarowność, dowody, logika, szacunek)
   - exit ticket (3)
6) Materiał dla prowadzącego:
   - gotowe sformułowania do przekierowania dyskusji i korygowania błędów bez zawstydzania.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-006",
    title: "Plan zajęć ‘uczenie aktywne’ (peer instruction) z pytaniami i ponownym głosowaniem",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Wdraża peer instruction: pytania koncepcyjne, dyskusja i re-głosowanie.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 50–75 min

Zaprojektuj zajęcia w stylu Peer Instruction:
1) Cele (4–6).
2) Rozgrzewka: 5 min (pytanie zapalne).
3) Cykl PI (powtórz 5 razy):
   - pytanie koncepcyjne (A–D) z realistycznymi dystraktorami
   - 1. głosowanie
   - dyskusja w parach (2–3 min) z promptem do rozmowy
   - 2. głosowanie
   - wyjaśnienie prowadzącego (co powiedzieć i czego NIE mówić)
4) Dodaj 10 gotowych pytań PI (z odpowiedziami i wyjaśnieniem).
5) Strategia, gdy re-głosowanie pogarsza odpowiedzi (co robisz).
6) Szybka ocena na koniec (exit ticket + minimalna rubryka).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-007",
    title: "Plan zajęć online (Zoom/Meet) z realną interakcją i anty-zmęczeniem",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Praktyczny plan online z dynamikami, przerwami, breakout rooms i oceną.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60 min
Narzędzia: [Zoom/Meet/Miro/Jamboard/Brak]

Stwórz plan online:
1) Zasady i dynamika (kamera, czat, udział) + scenariusz 60 sekund.
2) Agenda minuta po minucie (0–60) zawierająca:
   - mikrosegmenty 6–10 min
   - przerwy aktywizujące (2)
   - aktywność w breakout (1–2 rundy)
   - ankieta/quiz na żywo (10 pytań)
3) Materiały:
   - slajdy: sugerowana struktura (8–10)
   - karta pracy uczestnika (tekst)
4) Zarządzanie udziałem:
   - jak wywoływać bez krępowania
   - strategie na ciszę
5) Ocenianie:
   - minimalny dowód (zrzut, odpowiedź, mini-zadanie)
   - ekspresowa rubryka do oceny w 5 min.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-008",
    title: "Plan zajęć z oceną autentyczną: realny produkt + realna publiczność",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Projektuje ocenianie autentyczne: praca zastosowalna i rubryki o realnych kryteriach.",
    prompt: `Temat: [WPISZ TUTAJ]
Docelowy produkt autentyczny: [raport, tutorial, propozycja, demo itp.]
Realna publiczność: [zespół, klasa, społeczność, symulowany klient]
Czas trwania: [1 lekcja / 1 tydzień]

Stwórz:
1) Cele i kryteria produktu (wymagania obowiązkowe).
2) Proces:
   - fazy z czasem
   - punkty kontrolne (checkpoints)
3) Rubryki:
   - jakość techniczna
   - klarowność/komunikacja
   - dowody/uzasadnienie
   - iteracja/udoskonalanie
4) Informacja zwrotna:
   - przewodnik feedbacku (bez kanapki; użyj “wpływ + dowód + następny krok”)
   - 2 rundy feedbacku
5) Antyplagiat:
   - jak zaprojektować tak, by trudno było kopiować
   - wymagana “evidence of process”.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-009",
    title: "Plan sekwencji dydaktycznej (3 lekcje) z progresją i ocenianiem",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Trzy połączone sesje: wprowadzenie, praktyka, integracja z oceną końcową.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas na sesję: [50/60/90]
Cel końcowy: [ ]

Zaprojektuj sekwencję 3 lekcji:
LEKCJA 1 (wprowadzenie):
- cele, agenda minuta po minucie, aktywacja wiedzy wstępnej
- mini-aktywność + ocena kształtująca

LEKCJA 2 (praktyka):
- praktyka prowadzona + praca zespołowa
- bank zadań stopniowanych + rozwiązania

LEKCJA 3 (integracja):
- case integracyjny / krótki projekt
- ocena sumująca + rubryka

Dodatkowo:
- plan materiałów
- kluczowy glosariusz
- typowe błędy per lekcja + jak je korygować.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-010",
    title: "Plan zajęć laboratoryjnych: hipoteza, eksperyment, analiza i raport",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Lekcja-lab: projekt eksperymentu, zbiór danych i raport z rubryką.",
    prompt: `Temat/laboratorium: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: [90–120 min]
Dostępne materiały: [ ]

Zaprojektuj laboratorium:
1) Cele i bezpieczeństwo (jeśli dotyczy).
2) Hipoteza i zmienne:
- IV, DV, kontrolne
- przewidywania
3) Procedura krok po kroku z czasami.
4) Szablon zbierania danych (tabela w tekście).
5) Analiza:
- jakie obliczenia/narzędzia
- jak interpretować wyniki
6) Raport końcowy:
- struktura (uproszczony IMRaD)
- rubryka oceny
7) Typowe błędy i troubleshooting.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-011",
    title: "Plan ‘mikronauczania’: jak nauczyć trudnego pojęcia w 15 minut",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Projektuje super-skuteczną mikro-lekcję: wyjaśnienie + przykład + mini-check.",
    prompt: `Trudne pojęcie: [WPISZ TUTAJ]
Poziom: [ ]
Czas: 15 minut

Zaprojektuj mikro-lekcję:
1) Cel (1) i dowód sukcesu (1).
2) Hook (30 s) + analogia (1).
3) Wyjaśnienie w 3 krokach (dosłowny scenariusz).
4) Przykład przepracowany (krok po kroku).
5) Mini-check (3 pytania) z odpowiedziami i uzasadnieniem.
6) Typowy błąd + jak mu zapobiec w 1 zdaniu.
7) “One-sentence summary”, żeby uczeń to zapamiętał.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-012",
    title: "Plan zajęć UDL (Projektowanie Uniwersalne): wiele sposobów dostępu i dowodów",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Plan inkluzywny UDL z opcjami dostępu, zaangażowania i demonstrowania uczenia się.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60 min

Stwórz plan UDL:
1) Jasne cele (3–5) + kryteria sukcesu.
2) Wiele sposobów reprezentacji:
- 3 formy wyjaśnienia treści (tekst, opis wizualny, przykład)
3) Wiele sposobów działania/ekspresji:
- 3 formy pokazania uczenia się (quiz, mini-projekt, wyjaśnienie ustne)
4) Wiele sposobów zaangażowania:
- 3 warianty aktywności wg zainteresowań
5) Agenda minuta po minucie (0–60) z alternatywami.
6) Udogodnienia:
- uwaga
- czytanie/pisanie
- język
- lęk przed udziałem
7) Ocenianie:
- elastyczna rubryka + jak oceniać sprawiedliwie.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-013",
    title: "Plan szkolenia firmowego (kompetencja zawodowa) z praktyką i pomiarem",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Szkolenie korporacyjne: cele, symulacje, KPI i transfer do pracy.",
    prompt: `Kompetencja zawodowa: [WPISZ TUTAJ]
Role uczestników: [ ]
Czas trwania: [60/90/120]
Kontekst: [sprzedaż/wsparcie/operacje/itp.]

Zaprojektuj sesję:
1) Cele (4) mierzalne i powiązane z KPI.
2) Agenda minuta po minucie w mikrosegmentach.
3) Symulacje:
- 2 role-play’e z scenariuszem, rolami i kryteriami
- checklist obserwacji
4) Realne case’y:
- 3 typowe przypadki firmy (jeśli ich nie ma, wymyśl realistyczne)
5) Ocenianie:
- pretest i posttest (po 8 pytań) z odpowiedziami
- 7-dniowy plan follow-up
6) Transfer:
- “poniedziałkowe działania”: 5 konkretnych akcji
- szablon tygodniowego feedbacku.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-014",
    title: "Plan zajęć z przykładami i kontrprzykładami (pojęcia z granicami zastosowania)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Projekt skoncentrowany na granicach: przykłady, kontrprzykłady i przypadki brzegowe.",
    prompt: `Temat/pojęcie: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60 min

Stwórz:
1) Cele (4) i kryteria sukcesu.
2) 6 przykładów (od łatwego do złożonego) z wyjaśnieniem.
3) 6 kontrprzykładów (gdzie NIE działa) z wyjaśnieniem naruszonego założenia.
4) Aktywność:
- grupy klasyfikują przypadki jako “działa / nie działa / zależy”
- przewodnik dyskusji i uzasadniania
5) Ocenianie kształtujące:
- 10 szybkich pytań (A–D) z odpowiedziami
6) Zakończenie:
- checklista założeń przed zastosowaniem pojęcia.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-015",
    title: "Plan zajęć PBL (krótki): realistyczny problem w 1 sesji",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "PBL w jednej lekcji: problem, szybkie badanie, rozwiązanie i refleksja.",
    prompt: `Temat: [WPISZ TUTAJ]
Czas trwania: 70–90 min
Poziom: [ ]

Zaprojektuj krótkie zajęcia PBL:
1) Realistyczny problem (opis 120–200 słów) z danymi startowymi.
2) Cele uczenia się (5).
3) Agenda minuta po minucie:
- zrozumienie problemu
- generowanie hipotez
- szybkie badanie (zasoby)
- propozycja rozwiązania
- prezentacja
- refleksja
4) Materiały:
- karta pracy (pytania prowadzące)
- szablon rozwiązania (kryteria)
5) Ocenianie:
- rubryka rozwiązania (4 kryteria × 4 poziomy)
- szybka samoocena
6) Debrief:
- czego się nauczyli
- co zrobiliby inaczej przy większej ilości informacji.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-016",
    title: "Plan zajęć z gamifikacją (misje, punkty, narracja) bez utraty rygoru",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Gamifikuje aktywności: misje i progres z realną oceną.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60 min
Narracja: [sci-fi/fantasy/firma/tajemnica]

Stwórz plan gamifikowany:
1) Historia ramowa (1 akapit) + misja główna.
2) 3 misje wg trudności (łatwa/średnia/trudna) dopasowane do celów.
3) Jasny system punktów (za co są punkty i za co nie).
4) Agenda minuta po minucie i zasady.
5) Materiały do druku (w tekście):
- karty misji
- karta wyników/ewidencji
6) Ocenianie (rubryka), by gra nie była “tylko grą”.
7) Inkluzywność:
- jak uniknąć sytuacji, że wygrywa tylko najszybszy/ekstrawertyk.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-017",
    title: "Plan zajęć z pisania (struktura, przykłady, praktyka i rubryka)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Zajęcia z pisania akademickiego/technicznego: struktura, szkic i feedback z rubryką.",
    prompt: `Rodzaj tekstu: [esej/abstrakt/raport/mail formalny]
Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 90 min

Zaprojektuj:
1) Cele (5).
2) Mikro-lekcję:
- struktura tekstu
- typowe błędy
- dobre/złe przykłady (2 i 2)
3) Warsztat pisarski:
- szablon szkicu (sekcje + prompty)
- czas na fazy (plan, szkic, rewizja)
4) Feedback:
- przewodnik recenzji koleżeńskiej (checklista)
- 2 rundy (makro i mikro)
5) Rubrykę:
- struktura, klarowność, dowody, styl, poprawność
6) Zakończenie:
- indywidualny plan poprawy (3 działania na osobę).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-018",
    title: "Plan zajęć z czytania akademickiego (jak czytać artykuły naukowe) z praktyką",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Uczy czytania artykułów: scanning, pytania prowadzące, claim chart i dyskusja.",
    prompt: `Dyscyplina: [WPISZ TUTAJ]
Artykuł do użycia (jeśli jest): [wklej link lub fragment]
Poziom: [studia/podyplomowe]
Czas trwania: 75–90 min

Zaprojektuj zajęcia:
1) Cele: (szybkie czytanie, identyfikacja tezy, metody, wyników, ograniczeń).
2) Strategia czytania:
- 3 podejścia/przejścia (5–7 min, 10–15 min, 20–30 min) z instrukcjami
3) Aktywność:
- budowa Claim Chart (tabela) w zespołach
- wykrycie 3 słabości metodologicznych
4) Dyskusja:
- 8 pytań prowadzących
5) Ocenianie:
- mini-quiz (10 pytań) z odpowiedziami
- exit ticket (3) + minimalna rubryka
6) Materiały:
- szablon notatek z lektury (tekst).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-019",
    title: "Plan zajęć: przygotowanie do egzaminu (strategie + praktyka + metapoznanie)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Sesja poprawiająca wyniki: techniki uczenia się, praktyka i analiza błędów.",
    prompt: `Przedmiot/temat: [WPISZ TUTAJ]
Rodzaj egzaminu: [MCQ/esej/zadania]
Poziom: [ ]
Czas trwania: 60–90 min

Zaprojektuj:
1) Cele i kryteria.
2) Mikro-lekcję (10–15 min):
- nauka rozłożona w czasie (spaced practice)
- przeplatanie (interleaving)
- active recall
3) Praktykę:
- 15 pytań (albo 10 zadań) z rozwiązaniami
- stoper i strategia zarządzania czasem
4) Analizę błędów:
- szablon klasyfikacji błędów (pojęcie/założenie/procedura)
- szybkie douczenie (jak poprawić każdy typ)
5) Zakończenie:
- indywidualny 7-dniowy plan do egzaminu (dzień po dniu).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-020",
    title: "Plan zajęć stacjami/rotacją (4 stacje) do intensywnej praktyki",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Rotacja po stacjach: zróżnicowana praktyka i szybka ocena w każdej stacji.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60–80 min
Liczba stacji: 4

Zaprojektuj stacje:
1) Stacja 1: podstawy (krótkie ćwiczenia) — 8 pozycji
2) Stacja 2: zastosowanie (case’y) — 3 przypadki
3) Stacja 3: typowe błędy (diagnoza) — 6 pozycji
4) Stacja 4: wyzwanie (wysoki poziom) — 4 pozycje

Uwzględnij:
- dokładne instrukcje przy każdej stacji
- czas na stację + rotacja
- kartę odpowiedzi
- przewodnik dla prowadzącego (co obserwować)
- mini-ocenę per stacja (prosta rubryka)
Zakończenie:
- synteza i exit ticket (3).`,
    thumbnail: "",
  },

  {
    id: "edu-plan-021",
    title: "Plan zajęć z ocenianiem zróżnicowanym (3 poziomy) bez niesprawiedliwości",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Ta sama kompetencja, trzy poziomy zadań; wspólna rubryka sprawiedliwej oceny.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60–90 min

Stwórz:
1) Jedną kompetencję (co uczeń ma umieć zrobić).
2) Zadanie na 3 poziomach:
- Poziom 1 (wsparcie): prowadzone
- Poziom 2 (standard): samodzielne
- Poziom 3 (wyzwanie): rozszerzenie/transfer
3) Jedną rubrykę (wspólne kryteria) działającą dla wszystkich 3 poziomów.
4) Agenda minuta po minucie:
- mikro-lekcja
- praca
- przegląd
- zakończenie
5) Jak przydzielać poziomy bez stygmatyzacji.
6) Jak przesuwać osoby między poziomami w trakcie (strategia).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-022",
    title: "Plan zajęć z analogiami (i ich ograniczeniami) + ocena",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Dobrze zrobione analogie: kiedy pomagają, kiedy mylą i jak ocenić zrozumienie.",
    prompt: `Pojęcie abstrakcyjne: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 50–60 min

Zaprojektuj:
1) 5 różnych analogii (z życia codziennego), wyjaśniając:
- co odpowiada czemu
- gdzie analogia się “łamie” (ograniczenie)
2) Sekwencję dydaktyczną:
- analogia 1 → formalizacja → kontrprzykład → analogia 2
3) Aktywność:
- uczniowie tworzą własną analogię i krytykują ją wskazując ograniczenia
4) Ocenę:
- quiz 10 pytań
- rubryka do oceny analogii
5) Zakończenie:
- finalna “definicja formalna” (1–2 zdania), by nie zostać tylko przy analogii.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-023",
    title: "Plan zajęć rozwiązywania problemów (modelowanie → praktyka prowadzona → samodzielna)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Klasyczna skuteczna struktura: I do / We do / You do.",
    prompt: `Temat zadań: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 70–90 min

Stwórz:
1) Cele i kryteria.
2) I DO (modelowanie przez prowadzącego):
- 1 przykładowe zadanie rozwiązane z komentarzem (scenariusz)
3) WE DO (praktyka prowadzona):
- 2 zadania z krokami i pytaniami do grupy
4) YOU DO (praktyka samodzielna):
- 6 zadań stopniowanych (łatwe→trudne) z odpowiedziami
5) Zróżnicowanie:
- podpowiedzi dla zacinających się
- dodatkowe wyzwanie dla zaawansowanych
6) Ocenianie:
- checklista procesu
- exit ticket z 2 krótkimi zadaniami.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-024",
    title: "Plan zajęć ‘uczenie się na błędach’: wykorzystaj błędy do nauki (nie do karania)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Zajęcia zbudowane wokół typowych błędów: szacunek w korekcie i głębsze uczenie się.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60 min

Zaprojektuj:
1) Cele (4–6).
2) Lista 8 typowych błędów w temacie (z przykładem).
3) Aktywność główna:
- pokazujesz błędne rozwiązania
- uczniowie diagnozują błąd (pojęcie/założenie/procedura)
- przepisują poprawne rozwiązanie
4) Scenariusz prowadzącego:
- zdania normalizujące błąd
- jak korygować bez zawstydzania
5) Ocenianie:
- 10 pytań diagnostycznych (A–D) z odpowiedziami
- exit ticket: “wyjaśnij 1 błąd i jak go unikać”
6) Zakończenie:
- checklista anty-błąd (10 punktów).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-025",
    title: "Plan zajęć interdyscyplinarnych: połącz 2 przedmioty jednym case’em",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Integruje dwie dziedziny: cele krzyżowe, aktywność główna i ocenianie zintegrowane.",
    prompt: `Przedmiot A: [ ]
Przedmiot B: [ ]
Temat integrujący: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 90 min

Stwórz:
1) Cele A (3) i B (3) + cele zintegrowane (3).
2) Case integracyjny (150–250 słów).
3) Aktywność:
- zespoły rozwiązują case, stosując oba podejścia
- instrukcja krok po kroku
4) Produkt końcowy:
- format + kryteria
5) Zintegrowana rubryka (4 kryteria × 4 poziomy).
6) Zakończenie:
- refleksja: co dało A, co dało B i czego nauczyłem/am się łącząc.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-026",
    title: "Plan korepetycji 1:1 (diagnoza → nauczanie → praktyka → plan osobisty)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Format tutoringu: wykrywa luki, uczy, ćwiczy i zostawia plan nauki.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom ucznia: [ ]
Czas: 45–60 min
Cel (egzamin/projekt): [ ]

Stwórz plan korepetycji:
1) Diagnoza (10 min):
- 8 szybkich pytań z oczekiwanymi odpowiedziami
- jak interpretować błędy
2) Nauczanie ukierunkowane (15 min):
- wyjaśnienie w 3 krokach + mocny przykład
3) Praktyka (15–20 min):
- 5 ćwiczeń stopniowanych + rozwiązania
- stopniowane podpowiedzi (hint 1/2/3) do każdego ćwiczenia
4) Zakończenie (5 min):
- podsumowanie ucznia (co ma umieć powiedzieć)
- plan 7 dni (dzień po dniu)
- prosta metryka postępu.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-027",
    title: "Plan modułu (4 tygodnie): cele, sekwencja, oceny i materiały",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Pełna jednostka: tydzień po tygodniu, z oceną kształtującą i sumującą.",
    prompt: `Temat/jednostka: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 4 tygodnie
Sesje na tydzień: [ ]
Czas na sesję: [ ]

Zaprojektuj jednostkę:
1) Cele ogólne (6) + mapa pojęć.
2) Tydzień 1–4:
- cele szczegółowe
- kluczowe aktywności
- ocena kształtująca
- zadanie domowe
3) Ocena sumująca:
- typ (egzamin/projekt/portfolio)
- rubryka i kryteria
4) Materiały:
- lektury, wideo, aktywności
- wersje low-tech (mało zasobów)
5) Zróżnicowanie:
- wsparcie i rozszerzenia
6) Ryzyka:
- gdzie zwykle utkną i jak temu zapobiec.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-028",
    title: "Plan zajęć z uczeniem kooperacyjnym (role, współzależność i ocena koleżeńska)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Prawdziwa kooperacja: role, odpowiedzialność i współocena, by uniknąć free-riding.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60–90 min
Wielkość zespołów: 3–5

Stwórz:
1) Cele i kryteria.
2) Role w zespole (4–5) z jasnymi odpowiedzialnościami.
3) Aktywność kooperacyjna:
- produkt końcowy
- kroki
- pozytywna współzależność (co wymusza współpracę)
4) Odpowiedzialność (accountability):
- dowód indywidualny + dowód grupowy
- współocena (format + kryteria)
5) Rubryka:
- jakość produktu
- współpraca (kryteria obserwowalne)
6) Plan B:
- co robisz przy konflikcie lub braku udziału jednego ucznia.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-029",
    title: "Plan zajęć do egzaminu ustnego: trening + rubryka + pytania",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Przygotowanie do egzaminu ustnego: praktyka prowadzona, trudne pytania i rubryka.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60 min

Zaprojektuj:
1) Cele (4–5).
2) Mikro-lekcję:
- jak zbudować odpowiedź ustną (szablon w 4 krokach)
3) Bank pytań:
- 12 pytań (od łatwych do trudnych)
- 6 dopytań “na pogłębienie”
- odpowiedzi modelowe (streszczenie)
4) Praktykę:
- praca w parach
- stoper
- checklista natychmiastowego feedbacku
5) Rubrykę:
- klarowność, rygor, przykłady, ograniczenia, komunikacja
6) Zakończenie:
- indywidualny plan poprawy (3 działania).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-030",
    title: "Plan zajęć na domknięcie modułu (inteligentna powtórka + próbny test + plan)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Zakończenie: powtórka z przeplataniem, próbny egzamin i plan utrwalenia.",
    prompt: `Moduł/temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 90 min

Stwórz:
1) Szybka diagnoza (10 min): 12 pytań (A–D) z odpowiedziami.
2) Inteligentna powtórka (30 min):
- przeplatanie podtematów (jak naprzemiennie)
- mini-wyjaśnienia 6 typowych konfuzji
3) Próbny test (30 min):
- 20 pytań (albo 10 zadań) z kluczem
4) Przegląd błędów (15 min):
- szablon klasyfikacji błędów (pojęcie/założenie/procedura)
- szybkie douczenie wg typu
5) Zakończenie (5 min):
- 7-dniowy plan po module + metryki.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-031",
    title: "Plan zajęć z oceną portfolio (dowody, kryteria, kalendarz)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Projektuje portfolio: dowody, harmonogram oddawania i jasne rubryki.",
    prompt: `Temat/kurs: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania portfolio: [2–6 tygodni]

Stwórz:
1) Czym jest portfolio i jakie dowody ma zawierać (6–10 dowodów).
2) Harmonogram oddawania i checkpointy (co tydzień).
3) Rubrykę:
- jakość dowodów
- refleksja
- iteracja/udoskonalenie
- prezentacja/klarowność
4) Szablony:
- karta dowodu (co zrobiłem/am, dlaczego, czego się nauczyłem/am, co poprawię dalej)
- checklista przeglądu
5) Jak oceniać sprawiedliwie:
- minimalne kryteria
- jak unikać “zapychaczy”
- jak radzić sobie z opóźnieniami i poprawkami.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-032",
    title: "Plan zajęć o metapoznaniu: jak się uczyć i monitorować zrozumienie",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Sesja ‘uczenia się uczenia’: monitorowanie, dzienniki nauki i strategie.",
    prompt: `Przedmiot/temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60 min

Zaprojektuj:
1) Cele i kryteria.
2) Mikro-lekcję (10–12 min):
- iluzja kompetencji
- active recall
- spaced repetition
- przeplatanie (interleaving)
3) Aktywność:
- uczniowie robią mini-test
- przewidują wynik (kalibracja)
- porównują i korygują strategię
4) Narzędzia:
- szablon dziennika nauki (tekst)
- checklista “czy naprawdę to rozumiem?”
5) Zakończenie:
- 10-dniowy plan nauki (z czasami i metrykami).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-033",
    title: "Plan zajęć ‘debata z dowodami’: szybkie badanie + argumentacja + rubryka",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Debata oparta o dowody: role, szybkie research i rygorystyczna ocena.",
    prompt: `Temat do debaty: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 80–90 min

Stwórz:
1) Cele (argumentowanie dowodami, obalanie, uznawanie ograniczeń).
2) Role: pro/contra/sędziowie/weryfikatorzy faktów.
3) Szybki research:
- pytania prowadzące
- jak oceniać źródła (prosta rubryka)
4) Debata:
- struktura z czasami (otwarcie, argumenty, riposty, zamknięcie)
- scenariusz moderacji
5) Dowody:
- szablon do zapisu claim→evidence→warrant
6) Ocenianie:
- rubryka (dowody, logika, klarowność, szacunek)
- auto- i współocena
7) Zakończenie:
- refleksja: co zmieniło się w ich stanowisku i dlaczego.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-034",
    title: "Plan zajęć ‘uczenie przez projektowanie’: zbuduj artefakt, by zrozumieć pojęcie",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Uczenie przez tworzenie: budowa artefaktu do internalizacji pojęcia.",
    prompt: `Pojęcie/temat: [WPISZ TUTAJ]
Artefakt do zbudowania: [model, infografika, symulacja, mapa itp.]
Poziom: [ ]
Czas trwania: 60–90 min

Stwórz:
1) Cele i kryteria artefaktu.
2) Materiały i ograniczenia.
3) Agenda minuta po minucie:
- mikro-lekcja
- projekt/szkic
- budowa
- przegląd
- poprawa
- prezentacja
4) Szablon projektowy (pytania prowadzące).
5) Rubryka artefaktu (4 kryteria × 4 poziomy).
6) Zakończenie:
- jawne połączenie: co w artefakcie reprezentuje jaki koncept
- 3 pytania transferujące uczenie się.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-035",
    title: "Plan zajęć z ciągłą oceną kształtującą: 6 checkpointów podczas sesji",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Wstawia checkpointy co kilka minut: pytania, mini-zadania i szybka korekta.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60 min

Zaprojektuj zajęcia z 6 punktami oceny kształtującej:
- Check #1 (min 5)
- Check #2 (min 12)
- Check #3 (min 20)
- Check #4 (min 32)
- Check #5 (min 45)
- Check #6 (min 55)

Dla każdego checka:
- format (pytanie, mini-ćwiczenie, głosowanie, wyjaśnienie w 1 zdaniu)
- oczekiwana odpowiedź
- co robi prowadzący, gdy myli się 30% vs gdy myli się 70% (gałęzie decyzji)
Dodatkowo:
- cele, agenda minuta po minucie i zakończenie z exit ticket.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-036",
    title: "Plan zajęć dla grupy z niską motywacją: sens, autonomia i szybkie zwycięstwa",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Projekt motywacyjny: sens, wybór, szybkie sukcesy i klimat zajęć.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60 min
Problem: niska motywacja / apatia / opór

Stwórz plan:
1) Hook oparty na sensie (realny case) + scenariusz.
2) Autonomia:
- 3 opcje aktywności (ta sama kompetencja)
3) Szybki sukces:
- mini-zadanie 5 min z “wygraną”
4) Aktywność główna:
- dynamika współpracy z rolami
5) Feedback:
- zdania i techniki wzmacniające realny postęp
6) Ocenianie:
- minimalny dowód i prosty exit ticket
7) Zakończenie:
- “dlaczego to ważne” w 1 minutę (scenariusz).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-037",
    title: "Plan zajęć dla pojęć abstrakcyjnych: konkret → reprezentacja → abstrakcja",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Sekwencja CRA: konkret, reprezentacje i abstrakcja z oceną.",
    prompt: `Pojęcie abstrakcyjne: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60 min

Zaprojektuj zgodnie z CRA:
1) Konkret (15 min):
- aktywność manipulacyjna lub symulowana (bez drogich materiałów)
2) Reprezentacja (20 min):
- opisy diagramów + przykłady
3) Abstrakcja (15 min):
- definicja formalna + ćwiczenia
4) Ocena kształtująca:
- 10 pytań (mix)
5) Zróżnicowanie:
- wsparcie i rozszerzenia
6) Zakończenie:
- synteza 3 kroków do zapamiętania pojęcia.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-038",
    title: "Plan zajęć wyrównawczych (remediacja) z diagnozą i mikrogrupami",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Remediacja: diagnoza, mikrogrupy wg luk i dowód poprawy.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60–90 min

Stwórz:
1) Diagnoza wstępna (10 min):
- 12 zadań z odpowiedziami
- jak grupować uczniów wg wyników
2) Mikrogrupy:
- Grupa A (luka 1): mikro-lekcja + 4 ćwiczenia
- Grupa B (luka 2): mikro-lekcja + 4 ćwiczenia
- Grupa C (luka 3): mikro-lekcja + 4 ćwiczenia
3) Rotacja lub praca równoległa:
- dokładne instrukcje
- co robi prowadzący w każdej minucie
4) Re-ewaluacja końcowa (10 min):
- 8 podobnych zadań
- interpretacja: czy jest poprawa?
5) Plan dalszy:
- 7-dniowe mikro-zadania.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-039",
    title: "Plan zajęć ‘story-based learning’: naucz temat poprzez historię",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Uczenie narracyjne: historia, punkty decyzji i refleksja.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60–75 min
Gatunek historii: [tajemnica/przygoda/firma/sci-fi]

Zaprojektuj:
1) Historię ramową (200–350 słów) z 3 momentami decyzji.
2) Dla każdej decyzji:
- opcje działania
- pytanie akademickie powiązane (jaki koncept tu działa)
- oczekiwana odpowiedź i wyjaśnienie
3) Aktywność:
- zespoły wybierają decyzje i je uzasadniają
4) Ocenianie:
- 10 pytań quizowych opartych o historię (z odpowiedziami)
5) Zakończenie:
- jakie pojęcia poznali i jak widać je w “prawdziwym świecie”.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-040",
    title: "Plan zajęć capstone (projekt końcowy) z produktami, rubryką i obroną",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Pełny projekt finałowy: produkty, przeglądy, prezentacja i obrona z rubryką.",
    prompt: `Kurs/jednostka: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: [1–4 tygodnie]
Produkt końcowy: [ ]

Zaprojektuj capstone:
1) Brief projektu (cel, wymagania, ograniczenia).
2) Produkty:
- propozycja
- szkic/prototyp
- produkt finalny
- obrona/prezentacja
3) Harmonogram z kamieniami milowymi i checkpointami.
4) Rubryki:
- produkt końcowy
- proces i iteracja
- obrona ustna (pytania i kryteria)
5) Antyplagiat / autentyczność:
- wymagana “evidence of process”
6) Szablony:
- propozycja
- dziennik pracy
- checklista końcowa.`,
    thumbnail: "",
  },

  {
    id: "edu-plan-041",
    title: "Plan zajęć metodą case study: lektura, analiza i dyskusja",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Metoda przypadku: przygotowuje, analizuje, dyskutuje i decyduje wg jasnych kryteriów.",
    prompt: `Case (jeśli masz, wklej; jeśli nie, opisz temat): [ ]
Poziom: [ ]
Czas trwania: 90 min

Stwórz:
1) Cele (5).
2) Przed zajęciami:
- pytania prowadzące do lektury (10)
- mini-quiz (8) z odpowiedziami
3) Na zajęciach:
- agenda minuta po minucie
- mapowanie case’u (aktorzy, cele, ograniczenia)
- analiza (alternatywy + trade-offs)
- decyzja końcowa + uzasadnienie
4) Bank pytań prowadzącego (12) z dopytaniami.
5) Ocenianie:
- rubryka udziału i analizy
- exit ticket: rekomendacja w 5 liniach + 2 ryzyka + 1 mitygacja.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-042",
    title: "Plan zajęć o transferze: od przykładu do nowego przypadku",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Projektuje pod transfer: przykład bazowy, warianty i nowy, nieznany case.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60–75 min

Stwórz:
1) Przykład bazowy (rozwiązany) + wyjaśnienie.
2) 4 warianty przykładu:
- zmień jedno założenie
- zmień parametr
- zmień cel
- dodaj ograniczenie
3) Nowy case (nie widziany) do rozwiązania w zespołach:
- szablon rozwiązania (kroki)
4) Ocenianie:
- rubryka premiująca transfer (nie pamięciówkę)
- 8 pytań na koniec (z odpowiedziami)
5) Zakończenie:
- 5 heurystyk rozpoznawania “to ten sam wzorzec”.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-043",
    title: "Plan zajęć z AI jako tutorem (bezpiecznie i etycznie): prompty, granice i weryfikacja",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Integracja AI: prompty do nauki, weryfikacja i zapobieganie zależności.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60–90 min
Narzędzie AI: [ChatGPT/inne]
Polityka kursu: [dozwolona/ograniczona/zakazana w ocenach]

Stwórz plan:
1) Cele: uczenie się + alfabetyzacja AI.
2) Zasady etyczne:
- co wolno, a czego nie
- jak cytować użycie AI
- jak weryfikować
3) Aktywność:
- uczniowie używają AI do wyjaśnienia pojęcia i generowania przykładów
- potem weryfikują w notatkach/źródłach i poprawiają błędy
4) Bezpieczne prompty (10) do tutoringu:
- wyjaśnianie, dopytywanie, wykrywanie błędów, generowanie praktyki
5) Ocenianie:
- dowód nauki bez AI (exit ticket lub mini-test)
6) Zakończenie:
- checklista weryfikacji (10 kroków).`,
    thumbnail: "",
  },
  {
    id: "edu-plan-044",
    title: "Plan zajęć z uczeniem opartym na danych: mini-dataset i wnioski",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Zajęcia analizy danych: pytania, hipotezy, analiza i odpowiedzialne wnioski.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 75–90 min

Uwzględnij:
1) Mini-dataset (wymyślony, jeśli brak) z 12–20 wierszami i 4–6 zmiennymi (tabela w tekście).
2) Pytania badawcze (5) dotyczące datasetu.
3) Aktywność:
- podstawowe czyszczenie
- analiza (opisowa, porównanie, prosta korelacja jeśli dotyczy)
- sugerowana wizualizacja (opisana)
4) Przewodnik interpretacji (co można, a czego nie można wnioskować).
5) Ocenianie:
- krótki raport (struktura i rubryka)
- mini-quiz (10 pytań) z odpowiedziami.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-045",
    title: "Plan zajęć ‘prawdziwy świat’: połącz temat z 3 zawodami i 3 case’ami",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Relewancja zawodowa: case’y wg profesji, aktywności i ocenianie zastosowane.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60 min

Stwórz:
1) Wprowadzenie z sensem:
- 3 zawody, gdzie się to stosuje
- 3 mini-case’y dla każdego zawodu
2) Aktywność główna:
- zespoły wybierają 1 zawód i rozwiązują 1 case
- szablon rozwiązania + kryteria
3) Prezentacja błyskawiczna:
- 2 min na zespół
4) Ocenianie:
- rubryka aplikacyjna (precyzja, rozumowanie, komunikacja, ograniczenia)
- exit ticket: “jak użył(a)byś tego w swoim życiu/pracy”
5) Zakończenie:
- most do kolejnego tematu (co dalej i dlaczego).`,
    thumbnail: "",
  },

  {
    id: "edu-plan-046",
    title: "Plan krótkiej interwencji (30 min): mini-cel, praktyka i ocena",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Bardzo efektywne krótkie zajęcia: jeden cel, konkretna praktyka i dowód na końcu.",
    prompt: `Punktowy temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 30 min

Zaprojektuj:
1) Jeden cel (mierzalny).
2) Agenda minuta po minucie (0–30) z:
- hook 2 min
- wyjaśnienie 8 min
- praktyka prowadzona 10 min
- szybka praktyka 7 min
- ocena 3 min
3) 6 krótkich ćwiczeń z odpowiedziami.
4) Exit ticket (2 pozycje) + klucz.
5) Notatka dla prowadzącego: typowe błędy i jak je poprawić w 1 zdaniu.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-047",
    title: "Plan zajęć ‘uczenie przez porównanie’: A vs B (modele, teorie, metody)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Uczy poprzez porównanie dwóch podejść: podobieństwa, różnice i kiedy użyć którego.",
    prompt: `Podejście A: [ ]
Podejście B: [ ]
Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 60–75 min

Stwórz:
1) Wstępną tabelę porównawczą A vs B.
2) Agenda minuta po minucie:
- wyjaśnienie A
- wyjaśnienie B
- porównanie
- aktywność wyboru metody na podstawie case’ów
3) 6 case’ów:
- dla każdego: które podejście lepsze i dlaczego (oczekiwana odpowiedź)
4) Ocenianie:
- 12 pytań (MCQ) z odpowiedziami i wyjaśnieniem
5) Zakończenie:
- tekstowe drzewo decyzyjne wyboru A vs B.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-048",
    title: "Plan zajęć z terminologii technicznej (żywy glosariusz)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Buduje terminologię: definicje, przykłady, poprawne użycia i quiz.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 50–60 min

Zaprojektuj:
1) Lista 15–25 kluczowych terminów (jeśli brak, zaproponuj).
2) Aktywność “żywy glosariusz”:
- zespoły tworzą definicje + przykłady + anty-przykłady
- weryfikacja krzyżowa
3) Przewodnik prowadzącego: jak korygować definicje bez narzucania.
4) Ocenianie:
- quiz 20 pytań (15 MCQ + 5 uzupełnianek) z odpowiedziami
5) Zakończenie:
- szablon dalszego rozbudowywania glosariusza przez kurs.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-049",
    title: "Plan zajęć przygotowujących do prezentacji ustnych z praktyką i rubryką",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Warsztat prezentacji: struktura, story, slajdy, praktyka, feedback i rubryka.",
    prompt: `Temat prezentacji: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: 90 min

Stwórz:
1) Cele (5).
2) Mikro-lekcję:
- struktura (hook→problem→idea→dowody→zamknięcie)
- slajdy (proste zasady)
3) Warsztat:
- szablon scenariusza (tekst)
- praktyka w parach (rundy)
- checklista feedbacku
4) Rubrykę:
- klarowność, struktura, dowody, głos, zarządzanie czasem
5) Bank “trudnych pytań” (10) i jak odpowiadać bez dygresji.
6) Zakończenie:
- 7-dniowy indywidualny plan poprawy.`,
    thumbnail: "",
  },
  {
    id: "edu-plan-050",
    title: "Plan zajęć ‘uniwersalny’: generuj plan wg tematu i kontekstu (szablon wielokrotnego użytku)",
    area: "Edukacja & Szkolenia",
    category: "Plany Lekcji",
    summary:
      "Uniwersalny szablon do tworzenia spójnych, mierzalnych planów zajęć w dowolnym temacie.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [ ]
Czas trwania: [ ]
Kontekst: [stacjonarnie/online/hybrydowo]
Zasoby: [ ]
Cel kursu: [ ]

Chcę szablon wielokrotnego użytku GOTOWY do kopiuj-wklej, który zawiera:
1) Cele (Bloom) + kryteria sukcesu.
2) Aktywację wiedzy wstępnej (3 dynamiki).
3) Instrukcję bezpośrednią (krótki scenariusz) + przykłady.
4) Praktykę prowadzoną + praktykę samodzielną.
5) Zróżnicowanie (wsparcia i rozszerzenia).
6) Ocenę kształtującą (minimum 5 checkpointów) + exit ticket.
7) Zadanie domowe i follow-up.
8) Gotowe materiały:
- karta pracy
- quiz (10 pytań) z kluczem
- krótka rubryka produktu/aktywności
9) Sekcja “ryzyka”:
- 8 typowych błędów i jak reagować na nie na żywo.`,
    thumbnail: "",
  },
];
