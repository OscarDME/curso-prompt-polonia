// src/lib/prompts/text/edu-explicaciones-avanzadas.js

export const textPromptsEduExplicacionesAvanzadas = [
  {
    id: "edu-adv-001",
    title: "Zaawansowane wyjaśnienie warstwami: intuicja → formalizm → praktyka",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Rozkłada złożony temat na 3 warstwy: intuicja, rygor i zastosowanie z ćwiczeniami.",
    prompt: `Temat do wyjaśnienia: [WPISZ TUTAJ]

Kontekst:
- Poziom ucznia (studia, magister, profesjonalista).
- Dziedzina (matematyka, programowanie, ekonomia, medycyna itd.).
- Cel (zrozumieć, rozwiązywać problemy, zdać egzamin, zastosować w pracy).
- Wiedza wstępna (krótka lista).
- Ograniczenia (bez zaawansowanej notacji / z notacją / z realnymi przykładami).

Dostarcz wyjaśnienie w 3 warstwach:

WARSTWA 1 — Intuicja (żeby “naprawdę zrozumieć”):
- Wyjaśnij ideę 2 mocnymi analogiami (różnymi od siebie).
- Opisz “typowy błąd myślowy”, przez który ludzie tego nie łapią.
- Dodaj mini-historię albo realny przypadek, który to utrwali.

WARSTWA 2 — Formalizm (rygor bez ściemy):
- Zdefiniuj kluczowe pojęcia (słowniczek 8–12 terminów).
- Opisz założenia i ograniczenia (czego NIE obejmuje).
- Dodaj 1 dowód/wyprowadzenie prowadzone krok po kroku albo równoważny rygorystyczny argument — zależnie od dziedziny.

WARSTWA 3 — Praktyka (transfer):
- 3 rozwiązane przykłady (łatwy → średni → trudny).
- 5 zadań do samodzielnego rozwiązania (z podpowiedziami, bez rozwiązania).
- Checklista “czy zrozumiałem/-am” (10 punktów).

Zakończenie:
- 5 pytań egzaminacyjnych (z kryteriami oceny).
- “Mapa myśli” w bulletach (hierarchia, maks. 20 linii).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-002",
    title: "Zaawansowany tutor sokratejski: nauka przez pytania (bez podawania na tacy)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Uczy pojęcia przez stopniowane pytania, które zmuszają do rozumowania.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany / zaawansowany]
Format: [tekst / programowanie / rachunki / case study]

Działaj jak tutor sokratejski.
Zasady:
- Nie podawaj rozwiązania na starcie.
- Zadawaj pytania “po schodkach”: zrozumienie → wnioskowanie → zastosowanie → krytyka.
- Gdy uczeń “pomyli się”, daj minimalną podpowiedź i zapytaj ponownie.

Struktura:
1) Szybka diagnoza (5 pytań) wykrywająca luki.
2) Ścieżka nauki (8–12 kroków), każdy krok zawiera:
   - 1 pytanie
   - oczekiwaną odpowiedź (ukrytą w nawiasach kwadratowych na końcu)
   - częsty błąd
   - podpowiedź
3) Mini-wyzwanie finałowe (problem integrujący) z rubryką oceny (kryteria).

Na końcu:
- Podsumowanie w 12 bulletach tego, czego się nauczyliśmy (bez zbędnych technikaliów).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-003",
    title: "Wyjaśnienie ‘najpierw zasady’: wyprowadź wszystko z aksjomatów",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Buduje temat od fundamentów: aksjomaty, zasady, konsekwencje i ograniczenia.",
    prompt: `Temat: [WPISZ TUTAJ]
Dziedzina: [fizyka / finanse / ML / prawo / itd.]
Poziom: [zaawansowany]

Dostarcz:
A) Zasady bazowe (3–7) jako “prawa” tematu.
B) Dla każdej zasady:
   - Co stwierdza
   - Dlaczego jest rozsądna
   - Natychmiastowa implikacja
   - Kontrprzykład albo przypadek graniczny
C) Wyprowadzenie: użyj zasad do zbudowania:
   - 2 najważniejszych twierdzeń/insightów
   - 2 narzędzi praktycznych (metody/procedury)
D) Zastosowanie zaawansowane:
   - 2 zadania w stylu egzaminu (rozwiązane krok po kroku)
   - 1 realny przypadek (z hipotetycznymi danymi) i Twoją analizę

Zakończenie:
- “Gdzie to się psuje” (5 ograniczeń).
- Bibliografia konceptualna (3–6 idei/tematów do dalszej nauki).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-004",
    title: "Wyjaśnij jak artykuł naukowy: abstrakt, metoda, wyniki, dyskusja",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Struktura mini-paperu akademickiego, żeby zrozumieć koncepcję z rygorem.",
    prompt: `Temat: [WPISZ TUTAJ]
Odbiorcy: [inżynierowie / ekonomiści / lekarze / itd.]

Napisz wyjaśnienie jako mini-artykuł:
- Tytuł
- Abstrakt (100–150 słów)
- Wstęp (problem i motywacja)
- Ramy teoretyczne (definicje + założenia)
- Metoda (procedura lub wyprowadzenie)
- Wyniki (przykłady lub kluczowe implikacje)
- Dyskusja (ograniczenia, interpretacje)
- Wnioski (3 jasne wkłady)
- “Polecana lektura” (bez linków, tylko tematy/dzieła)

Uwzględnij:
- 1 figurę opisaną w tekście (jaki byłby wykres/diagram i jak go czytać).
- 2 pytania przeglądowe (w stylu peer-review).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-005",
    title: "Zaawansowane wyjaśnienie z porównaniem modeli (A vs B vs C)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Porównuje 2–3 podejścia do tego samego tematu: założenia, trade-offy i kiedy używać.",
    prompt: `Temat: [WPISZ TUTAJ]
Modele/podejścia do porównania: [A], [B], [C] (jeśli nie wiesz, zaproponuj je)

Dostarcz:
1) Tabelę konceptualną (bez formatu tabeli, w bulletach) z:
   - Cel każdego podejścia
   - Założenia
   - Zalety
   - Wady
   - Kiedy zawodzi
2) Jeden wspólny przykład (to samo zadanie) rozwiązany każdym podejściem.
3) “Przewodnik decyzyjny” w formie drzewa:
   - Jeśli masz X → użyj A
   - Jeśli masz Y → użyj B
   - itd.
4) 10 pytań egzaminacyjnych, które mylą A i B (i jak je odróżnić).

Zakończenie:
- Błędy początkującego (8) i błędy eksperta (5).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-006",
    title: "Wyjaśnienie + dowód prowadzony: krok po kroku (poziom wysoki)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Prowadzony dowód lub formalny argument z checkpointami zrozumienia.",
    prompt: `Sformułuj wynik do udowodnienia/uzasadnienia: [WPISZ TUTAJ]
Dziedzina: [matematyka / CS / ekonomia / fizyka / filozofia]

Stwórz dowód prowadzony:
A) Intuicja wstępna (dlaczego powinno być prawdziwe).
B) Przygotowanie:
   - Potrzebne definicje
   - Wcześniejsze lematy (1–3)
   - Notacja (jasna)
C) Dowód w krokach numerowanych z checkpointami:
   - Krok i: co robimy
   - Dlaczego to robimy
   - Co może pójść nie tak
   - Mini-check: “jeśli to rozumiesz, odpowiedz X”
D) Interpretacja:
   - Co wynik znaczy w świecie realnym
   - 2 użyteczne korolaria
E) Ćwiczenie-lustro:
   - Podaj podobny wynik i poprowadź, jak go udowodnić (bez rozwiązania).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-007",
    title: "Wyjaśnienie jak w inżynierii: specyfikacja → przypadki brzegowe → weryfikacja",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Idealne dla tematów technicznych: definiuje, testuje przypadki graniczne i waliduje.",
    prompt: `Temat/narzędzie: [WPISZ TUTAJ]
Kontekst użycia: [produkcja / akademia / badania]

Ułóż wyjaśnienie tak:
1) Specyfikacja (co robi DOKŁADNIE i czego nie robi).
2) Inwarianty / gwarancje (3–7).
3) Przypadki brzegowe (minimum 10) z:
   - Wejście/warunek
   - Oczekiwane zachowanie
   - Dlaczego to ważne
4) Testy weryfikacyjne:
   - 6 testów “mentalnych”
   - 6 testów praktycznych
5) Troubleshooting:
   - 8 typowych awarii
   - diagnoza
   - rozwiązanie

Zakończenie:
- Checklista bezpiecznej implementacji/zastosowania (12 punktów).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-008",
    title: "Wyjaśnienie z ‘mapą zależności’: czego uczyć się najpierw i dlaczego",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Buduje mapę prerekwizytów i optymalną ścieżkę nauki dla trudnego tematu.",
    prompt: `Temat: [WPISZ TUTAJ]
Dostępny czas: [X godzin/tydzień]
Cel: [egzamin / projekt / praca]

Dostarcz:
A) Wymagania wstępne:
- Lista minimalnych pojęć (10–20)
- Jak krytyczne są (wysokie/średnie/niskie)
B) Mapa zależności (bullets z wcięciami):
- Pojęcie główne
  - podtemat
    - pod-podtemat
C) Plan nauki (14 dni lub 4 tygodnie):
- Dzień/tydzień: cel, teoria/praktyka, mini-ocena
D) Oceny:
- 2 mini-egzaminy po 10 pytań (z odpowiedziami)
- 1 projekt integrujący (opis + rubryka)

Zakończenie:
- Sygnały, że jesteś gotowy/-a (10).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-009",
    title: "Zaawansowane wyjaśnienie z wieloma analogiami (i granicami każdej analogii)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Wyjaśnia przez analogie, ale też pokazuje, kiedy analogie zawodzą, żeby nie mylić.",
    prompt: `Temat: [WPISZ TUTAJ]
Odbiorcy: [techniczni / nietechniczni / mieszani]

Stwórz:
1) Wyjaśnienie bazowe (jasne i rygorystyczne).
2) 4 analogie z różnych dziedzin (np. gotowanie, muzyka, ruch drogowy, biologia).
3) Dla każdej analogii:
   - Co mapuje się na co (odpowiedniki)
   - Co pomaga zrozumieć
   - Gdzie się psuje (przypadek graniczny)
4) Mini-test:
   - 6 pytań, na które odpowiesz tylko, jeśli rozumiesz temat, a nie tylko analogię.

Zakończenie:
- Jedna analogia “anty-analogia”: przykład pokazujący limit analogii.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-010",
    title: "Wyjaśnienie przez błędy: ucz się na kontrprzykładach i typowych wpadkach",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Uczy na wysokim poziomie, pokazując typowe błędy i jak je diagnozować.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [zaawansowany]

Wygeneruj:
A) 12 typowych błędów (początkujący→średni→zaawansowany).
B) Dla każdego błędu:
   - Objaw (jak to wygląda)
   - Przyczyna konceptualna
   - Minimalny przykład, który to wywołuje
   - Jak to poprawić (procedura)
C) 3 klasyczne kontrprzykłady (gdzie “intuicja” zawodzi).
D) 2 zadania-pułapki z rozwiązaniem i “dlaczego to zwodzi”.

Zakończenie:
- Mentalna checklista 10 pytań, by unikać tych błędów.`,
    thumbnail: "",
  },

  {
    id: "edu-adv-011",
    title: "Zaawansowane wyjaśnienie do poprowadzenia zajęć: scenariusz + slajdy",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Przygotowuje zaawansowaną lekcję: narracja, tablica, ćwiczenia i tempo.",
    prompt: `Temat: [WPISZ TUTAJ]
Czas trwania: [45/60/90 minut]
Poziom: [zaawansowany]

Dostarcz:
1) Cele nauczania (5–8).
2) Harmonogram minuta po minucie (timeline).
3) Scenariusz prowadzącego (co mówisz) z:
   - 3 momentami “pytanie do grupy”
   - 2 mini-demonstracjami
   - 1 pauzą na syntezę
4) Treść slajdów:
   - tytuł slajdu
   - 3–5 bulletów na slajd
   - 1 sugerowana figura/diagram
5) Praktyka:
   - 8 zadań (od łatwych do trudnych) + krótkie odpowiedzi
6) Ocena końcowa (10 pytań) + rubryka.

Zakończenie:
- Jak dostosować zajęcia, jeśli grupa się gubi (plan B).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-012",
    title: "Wyjaśnienie dla samouka: od zera do eksperta z checkpointami",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Projektuje naukę autonomiczną: minimum teorii, intensywna praktyka, metryki i feedback.",
    prompt: `Temat: [WPISZ TUTAJ]
Twój cel końcowy: [konkretne rezultaty]
Czas: [godzin/tydzień]
Aktualny poziom: [nowicjusz/średni]

Stwórz plan 30 dni:
- Tydzień 1: fundamenty (co mierzyć i dlaczego)
- Tydzień 2: typowe problemy
- Tydzień 3: realne przypadki
- Tydzień 4: projekt końcowy

Dla każdego dnia:
- Cel
- Pojęcia
- Ćwiczenie praktyczne
- Mini-test (3 pytania) z odpowiedziami
- Sygnał postępu (konkretna metryka)

Uwzględnij:
- Listę 20 zadań typu “drill”
- Projekt końcowy z bardzo szczegółową rubryką (kryteria i punkty).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-013",
    title: "Zaawansowane wyjaśnienie z ‘modelem mentalnym’: narysuj ideę w głowie",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Buduje jawny model mentalny: elementy, strzałki, dynamika i przewidywania.",
    prompt: `Temat: [WPISZ TUTAJ]

Zbuduj model mentalny:
1) Komponenty (8–12 elementów).
2) Relacje (strzałki): co powoduje co.
3) Kluczowe zmienne (co się zmienia, a co pozostaje stałe).
4) Przewidywania modelu:
   - Jeśli rośnie X, spada Y (minimum 10 przewidywań).
5) Przypadki, gdzie model zawodzi (5).
6) Jak “symulować” w głowie przypadek (krok po kroku).
7) 3 ćwiczenia do trenowania modelu (z rozwiązaniem).

Zakończenie:
- “Zasady kieszonkowe” (10 heurystyk).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-014",
    title: "Wyjaśnienie w formie debaty: teza, antyteza i synteza",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Bada złożony temat przez przeciwstawne argumenty i praktyczną syntezę.",
    prompt: `Temat: [WPISZ TUTAJ]
Kontrowersyjne pytanie: [WPISZ TUTAJ]

Stwórz debatę:
A) Teza (stanowisko A): 5 mocnych argumentów + dowody/rozumowanie.
B) Antyteza (stanowisko B): 5 mocnych argumentów + dowody/rozumowanie.
C) Wzajemne riposty (A odpiera B i B odpiera A) — po 6 punktów na stronę.
D) Synteza: kiedy A ma rację, kiedy B ma rację i jak decydować w praktyce.

Uwzględnij:
- 8 pytań dla moderatora.
- Praktyczne wnioski w 7 bulletach.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-015",
    title: "Wyjaśnienie z ‘case study’: dane → hipotezy → decyzja",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Uczy konceptu przez zastosowanie do realistycznego przypadku z hipotetycznymi danymi.",
    prompt: `Temat: [WPISZ TUTAJ]
Branża/kontekst: [WPISZ TUTAJ]

Zbuduj case study:
1) Kontekst i cel.
2) Dane (wymyślone, ale wiarygodne): 10–20 zmiennych.
3) Pytania prowadzące (10).
4) Analiza krok po kroku z użyciem tematu.
5) 3 możliwe decyzje i trade-offy.
6) Rekomendacja końcowa z uzasadnieniem.

Uwzględnij:
- “Jakich informacji brakuje” (8 punktów).
- 5 błędów, które analityk popełni w tym miejscu.`,
    thumbnail: "",
  },

  {
    id: "edu-adv-016",
    title: "Wyjaśnienie do rozmów technicznych / egzaminów ustnych (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Trenuje odpowiedzi wysokiego poziomu: klarowność, struktura, rygor i przykłady.",
    prompt: `Temat: [WPISZ TUTAJ]
Typ oceny: [rozmowa techniczna / egzamin ustny / obrona pracy]

Dostarcz:
1) Idealną odpowiedź na 2 minuty (struktura: definicja → intuicja → przykład → limit).
2) Idealną odpowiedź na 8 minut (głębiej, z wyprowadzeniem).
3) 12 trudnych pytań, które mogą paść.
4) Dla każdego pytania:
   - odpowiedź modelowa
   - typowy błąd
   - “sygnał dojrzałości” (co wspomni ekspert)

Uwzględnij:
- 5 szybkich analogii na wypadek, gdy rozmówca nie łapie tematu.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-017",
    title: "Zaawansowane wyjaśnienie z przykładami ‘łańcuch rozumowania’ (z rozwiązaniami)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Rozwiązuje problemy, pokazując decyzje, alternatywy i weryfikację.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 3 zadania (łatwe/średnie/trudne) i rozwiąż je tak:
- Przeformułowanie problemu (o co naprawdę pyta)
- Dane i zmienne
- Możliwe strategie (2–3) i dlaczego wybierasz jedną
- Rozwiązanie krok po kroku
- Weryfikacja (jak sprawdzasz, że jest dobrze)
- “Jeśli zmienisz X, co się stanie” (wrażliwość)

Zakończ:
- 8 dodatkowych zadań z podpowiedziami
- 10 błędów przy rozwiązywaniu i jak ich unikać`,
    thumbnail: "",
  },
  {
    id: "edu-adv-018",
    title: "Wyjaśnienie ‘od przykładu do teorii’: buduj uogólnienie",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Zaczyna od konkretnych przykładów i wyprowadza ogólną teorię oraz jej granice.",
    prompt: `Temat: [WPISZ TUTAJ]

Struktura:
1) 3 konkretne przykłady (bardzo różne).
2) Dla każdego przykładu:
   - jaki wzorzec się pojawia
   - która zmienna “rządzi”
3) Uogólnienie:
   - sformułuj “regułę” / teorię
   - zdefiniuj warunki
4) Kontrprzykład:
   - przypadek, gdzie to nie działa
5) Zastosowanie:
   - 2 nowe zadania rozwiązane

Zakończenie:
- “Reguły decyzyjne” (8 bulletów) i “alerty” (5).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-019",
    title: "Od czarnej skrzynki do białej: jak to działa w środku (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Od praktycznego użycia do zrozumienia wnętrza: komponenty, przepływ i awarie.",
    prompt: `Temat/narzędzie: [WPISZ TUTAJ]

Dostarcz:
A) Czarna skrzynka:
- Co wchodzi, co wychodzi, co optymalizuje (jeśli dotyczy)
- 5 przykładów poprawnego użycia
B) Biała skrzynka:
- Komponenty wewnętrzne (8–12)
- Przepływ krok po kroku (jako opis diagramu)
- Parametry i ich wpływ
C) Awarie i diagnostyka:
- 10 typowych awarii
- sygnały
- przyczyny wewnętrzne
- rozwiązanie
D) Pogłębienie:
- 6 pytań zaawansowanych z odpowiedziami modelowymi

Zakończenie:
- Checklista dobrych praktyk (12).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-020",
    title: "Wyjaśnienie ‘pod transfer’: zastosuj wiedzę w nowej dziedzinie",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Uczy koncepcji i zmusza do zastosowania poza typowym kontekstem.",
    prompt: `Temat: [WPISZ TUTAJ]
Typowa dziedzina: [A]
Nowa dziedzina: [B] (wybierz inną: medycyna, ekonomia, sport, sztuka itd.)

Dostarcz:
1) Wyjaśnij temat w dziedzinie A (z rygorem).
2) Wyodrębnij “transferowalne jądro” (5–8 zasad).
3) Przeformułuj temat w dziedzinie B:
   - mapowanie zmiennych
   - korekta założeń
4) Rozwiąż 2 przypadki w dziedzinie B (krok po kroku).
5) 6 zadań transferu (treść + podpowiedź).

Zakończenie:
- Lista “pułapek transferu” (8) i jak ich unikać.`,
    thumbnail: "",
  },

  {
    id: "edu-adv-021",
    title: "Wyjaśnienie ‘z historią’: narracja do zapamiętania (bez utraty rygoru)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Opowiada koncept jako historię (problem, napięcie, odkrycie) z wplecionym formalizmem.",
    prompt: `Temat: [WPISZ TUTAJ]
Kontekst historyczny lub fikcyjny: [wybierz: laboratorium, firma, wojna, ekspedycja, startup, szpital]
Ton: [poważny / epicki / bliski]

Stwórz narracyjne wyjaśnienie:
- Akt 1: realny problem (dlaczego to ważne)
- Akt 2: nieudana próba (typowy błąd)
- Akt 3: insight (formalizm i definicja)
- Akt 4: zastosowanie (rozwiązany przykład)
- Akt 5: limit i lekcja

Uwzględnij:
- Słowniczek (10 terminów)
- 5 pytań sprawdzających zrozumienie
- 5 ćwiczeń zastosowania z podpowiedziami`,
    thumbnail: "",
  },
  {
    id: "edu-adv-022",
    title: "Wyjaśnienie z ‘symulacją mentalną’: przewiduj wyniki (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Uczy przez przewidywanie: zmieniaj zmienne i prognozuj, potem weryfikuj regułami.",
    prompt: `Temat: [WPISZ TUTAJ]

Dostarcz:
1) Uproszczony model (zmienne, relacje).
2) 12 scenariuszy “co się stanie, jeśli...?”
   - zmień 1 zmienną na raz
   - potem zmień 2 zmienne naraz (interakcje)
3) Dla każdego scenariusza:
   - uzasadniona predykcja
   - wyjaśnienie (jaka reguła działa)
4) 3 scenariusze-niespodzianki (“intuicja zawodzi”) i dlaczego.

Zakończenie:
- 10 pytań typu “jeśli to, to co” do samooceny.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-023",
    title: "Wyjaśnienie z ‘minimalną notacją’: rygor tylko z potrzebnymi symbolami",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Używa tylko niezbędnej notacji; wszystko definiuje i unika zbędnych symboli.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [zaawansowany]
Ograniczenie: “minimalna notacja”

Dostarcz:
- Zdefiniuj notację (maks. 5–10 symboli).
- Wyjaśnij koncepcję, używając tej notacji jasno.
- 2 krótkie wyprowadzenia (lub argumenty) — w pełni wyjaśnione.
- 3 rozwiązane przykłady.
- 6 ćwiczeń z podpowiedziami.

Zakończenie:
- Lista 8 błędów notacyjnych, które robią chaos.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-024",
    title: "Wyjaśnienie ‘pod programowanie’: od koncepcji do algorytmu (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Zamienia teorię w kroki algorytmiczne: pseudokod, złożoność i testy.",
    prompt: `Koncepcja: [WPISZ TUTAJ]
Docelowy język: [Python/JS/Java/itd.]

Dostarcz:
1) Wyjaśnienie konceptualne (co i dlaczego).
2) Specyfikacja: wejścia/wyjścia, założenia.
3) Algorytm:
   - pseudokod
   - analiza złożoności
   - przypadki brzegowe
4) Orientacyjna implementacja (przykładowy kod, jeśli dotyczy).
5) Testy:
   - 8 sugerowanych testów jednostkowych
   - 5 testów obciążeniowych

Zakończenie:
- 6 błędów implementacyjnych i jak je wykryć.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-025",
    title: "Wyjaśnienie ‘pod badania’: otwarte pytania i granice",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Uczy i łączy z granicą wiedzy: limity, kontrowersje, kierunki badań.",
    prompt: `Temat: [WPISZ TUTAJ]

Dostarcz:
A) Rygorystyczne wyjaśnienie “standardowego” ujęcia tematu.
B) Ograniczenia (techniczne, konceptualne, empiryczne).
C) Kontrowersje/debaty (3–6) z:
   - stanowiskiem A
   - stanowiskiem B
   - dowodami
D) Otwarte pytania (8–12), które wciąż są badane.
E) Propozycję mini-projektu (1–2 tygodnie), by zbadać jedno pytanie.

Zakończenie:
- Jak oceniać artykuły naukowe w tym temacie (checklista 12 punktów).`,
    thumbnail: "",
  },

  {
    id: "edu-adv-026",
    title: "Wyjaśnienie z ‘rubryką’: jak oceniać rozwiązania studentów (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Tworzy kryteria oceny i przykłady odpowiedzi dobrych/słabych.",
    prompt: `Temat: [WPISZ TUTAJ]
Typ zadania: [problem / esej / projekt / prezentacja]

Dostarcz:
1) Treść zadania (jasna, bez dwuznaczności).
2) Rubrykę:
   - kryteria (6–10)
   - poziomy (świetnie/dobrze/średnio/słabo)
   - konkretne deskryptory
3) Przykłady:
   - 1 odpowiedź świetna (modelowa)
   - 1 odpowiedź średnia (z błędami)
   - 1 odpowiedź słaba (z błędami)
4) Typowy feedback:
   - 10 komentarzy wielokrotnego użytku (konstruktywnych)

Zakończenie:
- 8 błędów, które karzesz zawsze, i dlaczego.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-027",
    title: "Wyjaśnienie ‘pod pamięć’: mnemotechniki + struktura (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Tworzy techniki zapamiętywania trudnych tematów: chunking, historie, pałac pamięci.",
    prompt: `Temat: [WPISZ TUTAJ]

Dostarcz:
1) Chunking: podziel temat na 6–10 “bloków”.
2) Mnemotechnika:
   - akronim lub fraza pamięciowa (bez cringe’u)
   - krótka historia kodująca pojęcia
3) Pałac pamięci:
   - 8–12 “stacji” z symbolicznymi obiektami
4) Fiszki (flashcards):
   - 20 zaawansowanych Q/A
5) Test:
   - mini-egzamin 15 pytań

Zakończenie:
- Plan powtórek rozłożonych na 14 dni.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-028",
    title: "Wyjaśnienie ‘z wizualizacją’: opisz 3 niezbędne diagramy",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Nawet bez rysowania: definiuje kluczowe diagramy (osie, zmienne, czytanie i interpretacja).",
    prompt: `Temat: [WPISZ TUTAJ]

Dostarcz:
- 3 kluczowe diagramy/figury (opisz je precyzyjnie):
  1) Co pokazuje (osie/elementy)
  2) Jak to czytać
  3) Jaki insight daje
  4) Błędy interpretacji
- Następnie wyjaśnij temat, odwołując się do tych diagramów jako “kotwic”.
- 2 rozwiązane przykłady używające każdego diagramu.
- 6 ćwiczeń, gdzie student wybiera właściwy diagram.

Zakończenie:
- “Poradnik czytania figur” (10 reguł).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-029",
    title: "Wyjaśnienie w stylu konsultingu: problem → diagnoza → rekomendacja",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Zastosowuje koncept do problemu praktycznego w stylu consultingu (MECE, hipotezy).",
    prompt: `Temat: [WPISZ TUTAJ]
Problem praktyczny: [WPISZ TUTAJ]
Kontekst: [firma/szkoła/lab/itd.]

Dostarcz:
1) Doprecyzowanie problemu (pytania MECE).
2) Hipotezy (3–5) i jakie dane potwierdziłyby każdą.
3) Zastosowanie ram tematu do problemu (krok po kroku).
4) Diagnozę na hipotetycznych danych.
5) Rekomendacje (w priorytecie) + ryzyka + plan wdrożenia.
6) Metryki sukcesu (6–10 KPI).

Zakończenie:
- “Co zrobię, jeśli się mylę” (plan awaryjny).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-030",
    title: "Wyjaśnienie ‘podwójne’: dla matematyków i dla praktyków",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Dwie równoległe wersje: formalna i stosowana, połączone mapowaniem.",
    prompt: `Temat: [WPISZ TUTAJ]

Dostarcz dwie wersje:
A) Wersja formalna:
- definicje
- twierdzenie/wynik
- krótkie wyprowadzenie lub dowód
- 2 formalne ćwiczenia
B) Wersja praktyczna:
- intuicja
- reguły użycia
- 3 realne przypadki
- checklista wdrożeniowa

Następnie:
- Mapowanie: dla każdego elementu formalnego — jego interpretacja praktyczna (10 par).

Zakończenie:
- 10 pytań egzaminacyjnych mieszanych (formalnych + praktycznych).`,
    thumbnail: "",
  },

  {
    id: "edu-adv-031",
    title: "Wyjaśnienie ‘z pułapkami’ (styl olimpiady / trudnego egzaminu)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Trenuje wysoki poziom: zadania-pułapki, strategie i weryfikacja.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]

Dostarcz:
- 6 zadań-pułapek (progresywnie trudniejsze).
- Dla każdego zadania:
  - dlaczego to pułapka
  - poprawna strategia
  - rozwiązanie krok po kroku
  - weryfikacja
- 10 heurystyk do wykrywania pułapek.
- 8 dodatkowych zadań (bez rozwiązań) z podpowiedziami.

Zakończenie:
- Plan praktyki (7 sesji), by opanować te pułapki.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-032",
    title: "Wyjaśnienie ‘z dopytywaniem’: styl surowego profesora (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Wyjaśnia, a potem dociska repytaniami — idealne do utrwalania.",
    prompt: `Temat: [WPISZ TUTAJ]

1) Wyjaśnij temat (rygorystycznie, bez przesadnego żargonu).
2) Następnie zadaj 15 trudnych doprecyzowujących pytań:
   - “a co jeśli…?”
   - “w jakich warunkach…?”
   - “co się stanie, gdy złamiemy założenie…?”
   - “porównaj z…”

Dla każdego pytania:
- odpowiedź modelowa (zwięzła, precyzyjna)
- typowy błąd
- jak rozpoznać, czy naprawdę to rozumiem

Zakończenie:
- 12 bulletów “sygnałów opanowania” tematu.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-033",
    title: "Wyjaśnienie: stwórz ‘ściągę’ na jedną stronę (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Ultra gęste, ale zrozumiałe: wzory/idee, przypadki, limity i kroki.",
    prompt: `Temat: [WPISZ TUTAJ]

Stwórz 1-stronicową ściągę (tekst):
- Kluczowe definicje (10)
- Wzory/prawa/reguły (jeśli dotyczy) z interpretacją
- Procedura krok po kroku (checklista)
- Typowe przypadki (6)
- Przypadki brzegowe (6)
- Typowe błędy (10)
- 8 pytań flash z odpowiedziami
- 3 mini-przykłady rozwiązane

Zasada:
- Wszystko ma się zmieścić w kompaktowym formacie, jak notatki.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-034",
    title: "Wyjaśnienie ‘żeby uczyć innych’: uczeń staje się nauczycielem (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Tworzy materiał, by student mógł uczyć: skrypt, przykłady i pytania.",
    prompt: `Temat: [WPISZ TUTAJ]

Dostarcz zestaw do nauczania:
1) Wyjaśnienie na 5 minut (skrypt).
2) Wyjaśnienie na 20 minut (struktura + punkty).
3) 3 analogie z ograniczeniami.
4) 3 demonstracje/przykłady na tablicy (krok po kroku).
5) 12 pytań sprawdzających (z odpowiedziami).
6) 6 ćwiczeń praktycznych (z podpowiedziami).

Zakończenie:
- Błędy przy nauczaniu tego tematu (8) i jak ich unikać.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-035",
    title: "Wyjaśnienie z metapoznaniem: jak MYŚLEĆ o tym temacie (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Nie tylko wyjaśnia temat: uczy typu myślenia, którego wymaga.",
    prompt: `Temat: [WPISZ TUTAJ]

Dostarcz:
A) Jaki typ myślenia jest potrzebny:
- matematyczne, przyczynowe, probabilistyczne, systemowe, kliniczne itd.
B) 10 metapoznawczych pytań do rozwiązywania problemów z tego tematu.
C) Strategie:
- jak zacząć
- jak weryfikować
- jak wykrywać nadmierne uproszczenie
D) 3 rozwiązane problemy z podkreśleniem myślenia (nie tylko kroków).
E) 6 ćwiczeń z informacją “jaki typ myślenia trenować”.

Zakończenie:
- Mentalna checklista na moment, gdy utkniesz (12).`,
    thumbnail: "",
  },

  {
    id: "edu-adv-036",
    title: "Wyjaśnienie ‘od błędnej intuicji do poprawnej intuicji’ (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Koryguje błędne intuicje przez przykłady, kontrprzykłady i przebudowę mentalną.",
    prompt: `Temat: [WPISZ TUTAJ]

Struktura:
1) Typowa błędna intuicja (jak myśli większość).
2) Dlaczego wydaje się rozsądna (empatia).
3) Minimalny kontrprzykład (łamie intuicję).
4) Rekonstrukcja poprawnej intuicji:
   - nowa metafora
   - nowa reguła
   - nowy nawyk myślowy
5) 3 rozwiązane przykłady pokazujące nowy nawyk.
6) 8 ćwiczeń do przećwiczenia.

Zakończenie:
- 10 sygnałów, że wróciłeś/-aś do błędnej intuicji, i jak wrócić na właściwe tory.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-037",
    title: "Wyjaśnienie z ‘przesłuchaniem założeń’: co zakładasz, nie widząc (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Ujawnia ukryte założenia i pokazuje, jak zmieniają wynik po naruszeniu.",
    prompt: `Temat: [WPISZ TUTAJ]

Dostarcz:
1) Lista założeń (12–20).
2) Klasyfikacja: kluczowe vs wygodne.
3) Dla 6 założeń:
   - co się dzieje, gdy je złamiesz
   - przykład porażki
   - korekta lub alternatywa
4) 2 rozwiązane problemy: jeden z “ładnymi” założeniami, drugi z “zepsutymi”.
5) Przewodnik decyzyjny: którą wersję stosować w jakiej sytuacji.

Zakończenie:
- Checklista założeń przed użyciem tematu w realnym świecie.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-038",
    title: "Wyjaśnienie w stylu książki: pełny rozdział z sekcjami (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Rozdział jak w książce: teoria, przykłady, ćwiczenia, uwagi i podsumowanie.",
    prompt: `Temat: [WPISZ TUTAJ]
Docelowa długość: [1200–2500 słów]

Napisz “rozdział” z:
1) Motywującym wstępem (z realnym przypadkiem).
2) Pojęciami i definicjami (słowniczek).
3) Rozwojem formalnym (rygor).
4) Rozwiązanymi przykładami (3).
5) Notatkami i ostrzeżeniami (przypadki brzegowe i ograniczenia).
6) Ćwiczeniami (10) z podpowiedziami.
7) Podsumowaniem rozdziału (15 bulletów).
8) “Dalej” (kolejne tematy).

Zasada:
- Zachowaj spójność dydaktyczną i progresję.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-039",
    title: "Wyjaśnienie ‘wizualizacja procesów w głowie’: dynamiczny przepływ",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Dla procesów: wyjaśnia jako przepływ ze stanami, przejściami i warunkami.",
    prompt: `Temat/proces: [WPISZ TUTAJ]

Dostarcz:
- Stany (6–12).
- Przejścia: warunek → akcja → nowy stan.
- Zmienne wpływające na przejścia.
- 3 pełne przejścia przepływu (różne przypadki).
- 5 przypadków brzegowych (co się psuje i dlaczego).
- 2 ćwiczenia: “mając ten stan i dane, dokąd przechodzisz?”

Zakończenie:
- Checklista do debugowania błędów w przepływie (12).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-040",
    title: "Wyjaśnienie z ‘mikro-wyprowadzeniami’: mini-dowody po drodze (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Wyjaśnia i wplata krótkie argumenty formalne, by trzymać rygor bez przytłaczania.",
    prompt: `Temat: [WPISZ TUTAJ]

Napisz wyjaśnienie, gdzie:
- Każda sekcja ma mini-wyprowadzenie/mini-dowód (4–10 linii), które uzasadnia punkt.
- Utrzymujesz ciągłość: intuicja → mini-dowód → przykład.

Struktura:
1) Idea centralna
2) Narzędzie 1 (mini-dowód + przykład)
3) Narzędzie 2 (mini-dowód + przykład)
4) Narzędzie 3 (mini-dowód + przykład)
5) Integracja: realny przypadek (rozwiązany)
6) Ograniczenia: kiedy tego nie używać

Zakończenie:
- 8 ćwiczeń z podpowiedziami
- 10 pytań flash z odpowiedziami`,
    thumbnail: "",
  },

  {
    id: "edu-adv-041",
    title: "Wyjaśnienie: bank pytań egzaminacyjnych (z rozwiązaniami) — poziom wysoki",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Generuje trudne pytania i pełne rozwiązania z kryteriami oceniania.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]
Format: [test / opisowe / zadania]

Wygeneruj:
- 20 pytań (mix: 8 konceptualnych, 8 obliczeniowych/zastosowania, 4 krytycznych/esejowych).
- Pełne rozwiązanie dla każdego.
- Dla każdego pytania:
  - co sprawdza
  - typowy błąd
  - punktacja i kryteria

Zakończenie:
- “Mapa pokrycia”: jakie podtematy poruszyłeś/-aś, a jakich zabrakło.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-042",
    title: "Wyjaśnienie ‘laboratoryjne’: hipoteza, eksperyment, analiza (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Zamienia temat w laboratorium: co mierzyć, jak testować i jak interpretować.",
    prompt: `Temat: [WPISZ TUTAJ]

Zaprojektuj laboratorium:
1) Pytanie badawcze.
2) Hipotezy (3).
3) Zmienne: zależna, niezależna, kontrolne.
4) Procedura (kroki).
5) Dane symulowane (mała tabela tekstowa: 12–20 wierszy).
6) Analiza i interpretacja.
7) Zagrożenia dla trafności (8).

Zakończenie:
- 10 pytań do raportu i rubryka oceny.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-043",
    title: "Wyjaśnienie z ‘różnicowaniem’: 3 wersje dla 3 profili ucznia (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Ten sam temat dopasowany do 3 stylów: teoretyczny, praktyczny, wizualno-werbalny.",
    prompt: `Temat: [WPISZ TUTAJ]

Stwórz 3 wersje:
A) Profil teoretyczny: definicje, wyprowadzenia, precyzja.
B) Profil praktyczny: reguły użycia, checklisty, realne przypadki.
C) Profil wizualno-werbalny: opisy diagramów, analogie, metafory z limitami.

Dla każdej wersji:
- Wyjaśnienie (500–900 słów)
- 2 rozwiązane przykłady
- 6 ćwiczeń z podpowiedziami

Zakończenie:
- Zarekomenduj, który profil jest mój, na podstawie 7 pytań diagnostycznych.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-044",
    title: "Wyjaśnienie z ‘syntezą’: streszczenie w 5 reprezentacjach (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Transformuje temat w: definicję, analogię, wzór/procedurę, przykład, kontrprzykład.",
    prompt: `Temat: [WPISZ TUTAJ]

Stwórz 5 reprezentacji:
1) Definicja rygorystyczna (2–4 linie)
2) Analogia (i jej limit)
3) Procedura lub wzór (z interpretacją)
4) Przykład przepracowany (krok po kroku)
5) Kontrprzykład (gdzie intuicja zawodzi)

Następnie:
- Połącz te 5 w “mapę” 12 bulletów.
- 10 pytań flash z odpowiedziami.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-045",
    title: "Wyjaśnienie ‘na mistrzostwo’: 80/20 + strategiczne pogłębianie (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Wskazuje 20%, które daje 80% biegłości, i jak pogłębiać bez błądzenia.",
    prompt: `Temat: [WPISZ TUTAJ]

Dostarcz:
1) 80/20: 6–10 idei, które dają 80% zrozumienia (i dlaczego).
2) 10 błędów, które najbardziej hamują.
3) Trening celowy:
   - 12 kluczowych zadań (z rozwiązaniami)
   - zalecana kolejność
4) Pogłębianie:
   - 6 zaawansowanych podtematów
   - w jakiej kolejności
   - skąd wiedzieć, że je umiesz

Zakończenie:
- Plan na 2 tygodnie (dzień po dniu) z metrykami postępu.`,
    thumbnail: "",
  },

  {
    id: "edu-adv-046",
    title: "Wyjaśnienie ‘tłumaczące żargon’: słownik eksperta → wersja jasna",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Zamienia techniczny żargon na jasny język bez utraty precyzji.",
    prompt: `Temat: [WPISZ TUTAJ]
Lista terminów technicznych (jeśli masz): [WKLEJ]

Dostarcz:
- Słownik 25 terminów:
  - definicja techniczna (1–2 linie)
  - tłumaczenie na prosty język (1–2 linie)
  - krótki przykład
  - typowy błąd przy użyciu terminu
- Następnie pełne wyjaśnienie (700–1200 słów) z:
  - 70% języka jasnego
  - 30% technicznego (tylko gdy pomaga)

Zakończenie:
- 10 pytań, żeby sprawdzić, czy rozumiem żargon bez wkuwania.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-047",
    title: "Wyjaśnienie: przyczynowość vs korelacja — rozumowanie i dowody (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Solidny szablon do tłumaczenia i analizy przyczynowości w każdej dziedzinie.",
    prompt: `Zjawisko/teza: [WPISZ TUTAJ]

Dostarcz:
1) Zdefiniuj przyczynowość vs korelację (rygorystycznie).
2) Lista 10 błędów/skrzywień (confounders, selekcja, odwrotna przyczynowość itd.) z przykładami.
3) Rama dowodowa:
   - jaka evidencja by pomogła
   - jakie są projekty badań (i trade-offy)
4) Case study z hipotetycznymi danymi:
   - zidentyfikuj confoundery
   - zaproponuj strategię identyfikacji
5) Ćwiczenia:
   - 8 stwierdzeń do klasyfikacji (przyczynowe/korelacyjne/nieokreślone)
   - i uzasadnienia

Zakończenie:
- Checklista przyczynowości (12 punktów).`,
    thumbnail: "",
  },
  {
    id: "edu-adv-048",
    title: "Wyjaśnienie probabilistyczne: niepewność, przedziały i decyzja (zaawansowane)",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Uczy myślenia probabilistycznego: rozkład, ryzyko, użyteczność i decyzje.",
    prompt: `Temat lub decyzja: [WPISZ TUTAJ]

Dostarcz:
1) Czym jest tu niepewność (źródła).
2) Modelowanie:
   - sensowne rozkłady (2–3)
   - założenia
3) Przedziały/scenariusze:
   - najlepszy / bazowy / najgorszy
4) Decyzja:
   - kryterium (oczekiwana użyteczność, odporność, minimax itd.)
   - wrażliwość (która zmienna rządzi)
5) Pełny przykład liczbowy (z klarownymi obliczeniami).
6) Ćwiczenia (6) z podpowiedziami.

Zakończenie:
- 10 błędów w myśleniu probabilistycznym i jak je korygować.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-049",
    title: "Wyjaśnienie z ‘projektem programu nauczania’: kompletny moduł",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Projektuje moduł: cele, treści, aktywności, ocena i zasoby.",
    prompt: `Temat: [WPISZ TUTAJ]
Długość modułu: [1–4 tygodnie]
Poziom: [zaawansowany]

Dostarcz:
- Cele (Bloom) (8–12)
- Treści wg jednostek
- Aktywności praktyczne (min. 10)
- Sugerowane lektury/zasoby (wg tematu, bez linków)
- Ocena:
  - diagnostyczna
  - formatywna (quizy, zadania)
  - sumatywna (projekt/egzamin)
- Projekt końcowy z bardzo szczegółową rubryką (kryteria/punkty)
- Plan informacji zwrotnej (jak dawać feedback)

Zakończenie:
- Ryzyka dydaktyczne (5) i jak je ograniczyć.`,
    thumbnail: "",
  },
  {
    id: "edu-adv-050",
    title: "Masterclass (zaawansowana): scenariusz 30 min + ćwiczenia + Q&A",
    area: "Edukacja & Szkolenia",
    category: "Wyjaśnienia zaawansowane",
    summary:
      "Pełna masterclass: narracja, rygor, demonstracje, ćwiczenia i sekcja pytań.",
    prompt: `Temat: [WPISZ TUTAJ]
Odbiorcy: [profesjonaliści/studenci]
Czas trwania: 30 minut

Stwórz masterclass:
1) Otwarcie (2 min): historia/przypadek, który wciąga.
2) Rdzeń (20 min): 3 główne idee z rygorem:
   - idea 1: definicja + mini-wyprowadzenie + przykład
   - idea 2: definicja + mini-wyprowadzenie + przykład
   - idea 3: definicja + mini-wyprowadzenie + przykład
3) Ćwiczenie na żywo (5 min): treść + prowadzone rozwiązanie.
4) Zakończenie (3 min): synteza + checklista do zastosowania.

Uwzględnij:
- 12 trudnych pytań Q&A z odpowiedziami modelowymi.
- 6 “typowych błędów” i jak reagować na żywo.`,
    thumbnail: "",
  },
];
