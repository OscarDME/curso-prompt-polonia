// src/lib/prompts/text/edu-quizzes.js

export const textPromptsEduQuizzes = [
  {
    id: "edu-quiz-001",
    title:
      "Kompletny quiz wg poziomów (podstawowy→średni→zaawansowany) z odpowiedziami i wyjaśnieniem",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Generuje stopniowany quiz z poprawnymi odpowiedziami i dydaktycznym wyjaśnieniem każdej opcji.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom odbiorców: [szkoła średnia/studia/profesjonalista]
Cel: [diagnoza/powtórka/egzamin]
Format: [wielokrotnego wyboru / prawda-fałsz / mieszany]
Liczba pytań: 30

Stwórz quiz z 30 pytaniami:
- 10 podstawowych (zrozumienie)
- 10 średnich (zastosowanie)
- 10 zaawansowanych (przypadki brzegowe i rozumowanie)

Dla każdego pytania dodaj:
1) Jasne sformułowanie
2) 4 opcje (A, B, C, D)
3) Poprawna odpowiedź
4) Wyjaśnienie, dlaczego jest poprawna
5) Wyjaśnienie, dlaczego każdy dystraktor jest błędny (jedna linia na dystraktor)
6) Sprawdzana umiejętność (konkretny koncept)
7) Poziom trudności (P/Ś/Z)

Zakończenie:
- Tabela wyników (w tekście) do interpretacji punktów:
  - 0–10: ...
  - 11–20: ...
  - 21–30: ...
- Lista podtematów do wzmocnienia wg typowych błędów.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-002",
    title: "Quiz diagnostyczny z prerekwizytów (wykrywa luki przed dalszą nauką)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Sprawdza prerekwizyty tematu: identyfikuje braki i sugeruje ścieżkę uzupełnienia.",
    prompt: `Temat docelowy: [WPISZ TUTAJ]
Oczekiwane prerekwizyty (jeśli wiesz): [LISTA] (jeśli nie, zaproponuj 10–15)
Poziom: [średniozaawansowany/zaawansowany]

Stwórz quiz diagnostyczny z 20 pytaniami:
- 12 pytań o koncepty prerekwizytowe
- 8 mini-zastosowań (mikro-zadania)

Dla każdego pytania:
- Treść
- 4 opcje
- Poprawna odpowiedź
- Krótkie wyjaśnienie
- “Co ujawnia błąd tutaj” (jaką lukę wskazuje)

Na końcu:
- Diagnoza wg przedziałów (0–7, 8–14, 15–20) z rekomendacjami.
- 7-dniowy plan uzupełnienia zależnie od wykrytej luki.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-003",
    title: "Quiz egzaminacyjny z pułapkami (i przewodnik, jak je rozpoznawać)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Trening pod trudny egzamin: pytania-pułapki oraz sygnały, jak wykryć je szybko.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]
Liczba pytań: 20

Stwórz 20 pytań w stylu egzaminu (wielokrotnego wyboru):
- 8 normalnych (zrozumienie/zastosowanie)
- 8 trudnych (rozumowanie)
- 4 pułapki (intuicja zawodzi)

Dla każdego pytania:
- Treść
- Opcje A–D (realistyczne dystraktory)
- Poprawna odpowiedź
- Pełne wyjaśnienie (150–250 słów, jeśli potrzeba)
- “Dlaczego to zwodzi” (jeśli to pułapka)
- Sygnał wykrycia w 10 sekund (heurystyka)

Zakończenie:
- 10 złotych zasad, jak unikać pułapek w tym temacie.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-004",
    title: "Quiz mieszany: wielokrotny wybór + prawda/fałsz + krótka odpowiedź",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Sprawdza realną głębię rozumienia różnymi formatami i jasnymi kryteriami.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Stwórz quiz mieszany z 25 itemami:
- 12 wielokrotnego wyboru (A–D)
- 8 prawda/fałsz (z wyjaśnieniem)
- 5 krótkich odpowiedzi (2–5 linii oczekiwanej odpowiedzi)

Dla każdego itemu dodaj:
- Treść
- Poprawna odpowiedź
- Wyjaśnienie
- Typowy błąd
- Sugerowana punktacja (łącznie 100 pkt)

Zakończenie:
- Rubryka dla krótkich odpowiedzi (kryteria + przykłady).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-005",
    title: "Quiz wg podtematów (profil opanowania): mapa mocnych i słabych stron",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Tworzy quiz pogrupowany wg podtematu wraz z interpretacją wyników dla obszarów.",
    prompt: `Temat: [WPISZ TUTAJ]
Lista podtematów (jeśli masz): [LISTA] (jeśli nie, zaproponuj 6–10)
Poziom: [średniozaawansowany/zaawansowany]

Stwórz quiz z 30 pytaniami:
- 3–5 pytań na podtemat
- Mieszaj pytania konceptualne i zastosowania

Dla każdego pytania:
- Treść
- Opcje A–D
- Poprawna odpowiedź
- Wyjaśnienie
- Etykieta podtematu

Na końcu:
- Szablon raportu:
  - Podtemat: trafienia/razem + interpretacja
- Rekomendacja nauki dla każdego podtematu (co ćwiczyć i jak).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-006",
    title:
      "Quiz precyzji pojęciowej: definicje, założenia, granice zastosowania (wysoki poziom)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Idealny dla zaawansowanych: rozróżnia podobne definicje i ujawnia ukryte założenia.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]
Liczba pytań: 20

Stwórz 20 pytań skupionych na:
- dokładnych definicjach
- niezbędnych założeniach
- przypadkach, gdzie koncept NIE ma zastosowania
- porównaniach A vs B

Format:
- 15 wielokrotnego wyboru
- 5 prawda/fałsz “z uzasadnieniem”

Uwzględnij:
- Poprawną odpowiedź
- Krótkie, lecz rygorystyczne uzasadnienie
- “Jak wykryć to szybko” (podpowiedź egzaminacyjna)
- Typowy błąd ucznia

Zakończenie:
- Mini-ściąga kluczowych definicji.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-007",
    title: "Quiz zastosowań (krótkie problemy) z obliczeniami/rozumowaniem",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Quiz praktyczny: mikro-problemy; dobry do trenowania szybkości z weryfikacją.",
    prompt: `Temat: [WPISZ TUTAJ]
Format: [liczbowy / logiczny / programowanie / case’y]
Poziom: [średniozaawansowany/zaawansowany]
Pytania: 20

Stwórz 20 mikro-problemów:
Dla każdego:
- Treść
- 4 opcje A–D (z wiarygodnymi wynikami)
- Poprawna odpowiedź
- Krótkie rozwiązanie (minimalne kroki) + weryfikacja/sanity check
- Poziom (1–5)

Zakończenie:
- Strategia czasu: jak rozdzielić minuty i kiedy pominąć pytanie.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-008",
    title: "Quiz kontrprzykładów: wykryj, kiedy reguła zawodzi",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Trenuje myślenie eksperckie: identyfikacja przypadków granicznych i kontrprzykładów.",
    prompt: `Temat: [WPISZ TUTAJ]
Typowe reguły w temacie: [LISTA] (jeśli nie, zaproponuj 6–10)

Stwórz 22 pytania:
- 12: “Czy reguła ma tu zastosowanie?” (tak/nie) z opcjami
- 10: “Wybierz kontrprzykład” (A–D)

Dla każdego pytania:
- Treść
- Opcje
- Poprawna odpowiedź
- Wyjaśnienie: które założenie jest naruszone i jaka jest konsekwencja
- ‘Poprawiona reguła’ (jak powiedziałby to ekspert)

Zakończenie:
- Lista 10 założeń do sprawdzenia przed użyciem reguł.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-009",
    title: "Quiz wyboru metody (wybierz poprawne podejście i uzasadnij)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Sprawdza, czy uczeń umie dobrać metodę, a nie tylko ją wykonać.",
    prompt: `Temat: [WPISZ TUTAJ]
Dostępne metody/podejścia: [A, B, C, D] (jeśli nie, zaproponuj)

Stwórz 18 pytań:
Dla każdego:
- Przypadek (kontekst + dane)
- Pytanie: “Jakiej metody użyjesz?”
- Opcje A–D (metody)
- Poprawna odpowiedź
- Uzasadnienie: czemu ta metoda pasuje (założenia, trade-off)
- “Druga najlepsza” (która i dlaczego)
- Typowy błąd: wybór z przyzwyczajenia

Zakończenie:
- Tekstowe drzewo decyzyjne (IF/THEN) do wyboru metody.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-010",
    title: "Quiz krytycznego czytania: wykryj sofizmaty, luki i biasy",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Idealny do teorii: analiza argumentów i wykrywanie błędów logicznych lub metodologicznych.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Stwórz 15 pytań opartych o mini-teksty:
- Każde pytanie zawiera tekst 80–150 słów (argument/rozwiązanie)
- Pytanie: Co jest nie tak / czego brakuje / jakie jest ukryte założenie?

Format:
- 10 wielokrotnego wyboru (typ “diagnoza”)
- 5 krótkich odpowiedzi (2–4 linie)

Uwzględnij:
- Poprawną odpowiedź
- Szczegółowe wyjaśnienie
- Poprawioną wersję argumentu (jeśli dotyczy)
- Kryteria oceniania krótkich odpowiedzi

Zakończenie:
- Lista 12 typowych usterek w tym temacie (checklista).`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-011",
    title: "Quiz ‘flash’: 40 szybkich pytań (z minimalnym wyjaśnieniem) do powtórki",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Ultraszybka powtórka: dużo krótkich pytań do wzmocnienia pamięci aktywnej.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [dowolny]

Stwórz quiz flash z 40 pytaniami:
- 30 wielokrotnego wyboru (A–D), po 1–2 linie
- 10 prawda/fałsz

Dla każdego pytania:
- Poprawna odpowiedź
- Minimalne wyjaśnienie (1–2 linie)
- “Typowy konfuzor” (która opcja kusi i dlaczego)

Zakończenie:
- Plan powtórek rozłożonych w czasie (7 dni) z użyciem tego quizu.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-012",
    title: "Quiz z adaptacyjną informacją zwrotną (jeśli się mylisz, dostajesz wzmocnienie)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Tworzy pytania oraz moduły wzmocnienia zależnie od typu błędu.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Zaprojektuj quiz z 20 pytaniami A–D.
Dodatkowo, stwórz “gałęzie” informacji zwrotnej:
- Dla każdego pytania zdefiniuj 3 typy błędu (wg wybranego dystraktora).
- Dla każdego typu błędu:
  - jaki koncept zabrakł
  - mini-wyjaśnienie wzmacniające (80–150 słów)
  - 1 mini-ćwiczenie natychmiastowe
  - odpowiedź do mini-ćwiczenia

Zakończenie:
- Instrukcja użycia jako tutor 1:1 (jak iść dalej zależnie od błędów).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-013",
    title: "Quiz certyfikacyjny (100 punktów) z sekcjami i kalibracją",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Ocena opanowania: sekcje, punktacja i kryteria zaliczenia.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]
Docelowy czas: [60–90 min]

Stwórz egzamin certyfikacyjny (łącznie 100 punktów):
- Sekcja A (konceptualna): 12 pytań (48 pkt)
- Sekcja B (zastosowania): 8 pytań (32 pkt)
- Sekcja C (przypadki brzegowe/dobór metody): 5 pytań (20 pkt)

Format każdego pytania:
- A–D
- Poprawna odpowiedź
- Wyjaśnienie
- Przydzielone punkty
- Typowy błąd

Zakończenie:
- Próg zaliczenia (np. 70/100)
- Diagnoza wg sekcji (co wzmacniać zależnie od punktów).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-014",
    title: "Quiz zaawansowanej terminologii (żargon → znaczenie → poprawne użycie)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Sprawdza rozumienie terminów i ich poprawne użycie w kontekście.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [zaawansowany]

Stwórz 25 pytań:
- 15: wybierz poprawną definicję
- 10: wybierz poprawne użycie w zdaniu/przypadku

Dla każdego pytania:
- Treść (z kontekstem)
- Opcje A–D
- Poprawna odpowiedź
- Wyjaśnienie + poprawny przykład + błędny przykład
- Typowy błąd

Zakończenie:
- Skondensowany glosariusz z 25 terminami.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-015",
    title:
      "Quiz transformacji idei: tłumacz między reprezentacjami (tekst↔wzór↔diagram)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Sprawdza, czy uczeń potrafi przechodzić między reprezentacjami bez utraty znaczenia.",
    prompt: `Temat: [WPISZ TUTAJ]
Możliwe reprezentacje: [tekst, wzór, pseudokod, opis diagramu]

Stwórz 20 pytań:
- 8: tekst → wzór/procedura
- 6: wzór/procedura → interpretacja tekstowa
- 6: opis diagramu → predykcja/wynik

Uwzględnij:
- Poprawną odpowiedź
- Wyjaśnienie
- Typowy błąd (jaką konfuzję reprezentuje)

Zakończenie:
- Checklista tłumaczenia reprezentacji (10 kroków).`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-016",
    title: "Quiz myślenia probabilistycznego (niepewność, biasy, decyzje)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Trenuje probabilistykę w praktyce: scenariusze i błędy poznawcze.",
    prompt: `Temat/decyzja: [WPISZ TUTAJ]

Stwórz 20 pytań:
- 10 konceptualnych (biasy, interpretacje)
- 10 zastosowań (scenariusze z przedziałami)

Format:
- A–D
- poprawna odpowiedź
- wyjaśnienie z sanity checkiem

Uwzględnij:
- 8 “pytań-pułapek” (błąd stopy bazowej, regresja do średniej itd.) i jak je wykryć.
Zakończenie:
- Lista 10 częstych błędów probabilistycznych + antidota.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-017",
    title: "Quiz z mini-case’ami: 12 realistycznych scenariuszy i pytania integrujące",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Nauka na przypadkach: realistyczne scenariusze z pytaniami integrującymi koncepty.",
    prompt: `Temat: [WPISZ TUTAJ]
Branża/kontekst: [edukacja/zdrowie/biznes/inżynieria/itd.]

Stwórz 12 mini-case’ów (po 80–150 słów każdy).
Dla każdego case’u stwórz 2 pytania (łącznie 24):
- 1 konceptualne (założenia, definicja, granice)
- 1 zastosowanie (decyzja, obliczenie, dobór metody)

Uwzględnij:
- Opcje A–D
- Poprawną odpowiedź
- Szczegółowe wyjaśnienie
- “Jaki dodatkowy danych byś poprosił/-a”, by poprawić decyzję

Zakończenie:
- Rekomendacje nauki na podstawie najczęstszych błędów.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-018",
    title: "Quiz w stylu ‘ustnym’: pytanie + oczekiwana odpowiedź + dopytanie",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Symuluje egzamin ustny: odpowiedzi modelowe i dopytania pogłębiające.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [zaawansowany]

Stwórz 15 pytań ustnych:
Dla każdego:
- Pytanie główne (1 linia)
- Oczekiwana struktura odpowiedzi (6–10 bulletów)
- Odpowiedź modelowa (120–250 słów)
- 2 trudne dopytania
- 1 przykład + 1 przypadek brzegowy
- Krótka rubryka (jasność, rygor, przykłady, ograniczenia)

Zakończenie:
- Szablon odpowiedzi ustnej w 4 krokach.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-019",
    title: "Quiz ‘typowe błędy’: wskaż, co jest nie tak w fałszywych rozwiązaniach",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Diagnoza po błędach: wykryj zły krok i koncept, który się załamał.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Stwórz 12 pytań diagnostycznych:
Dla każdego:
- Krótka treść problemu
- Fałszywe rozwiązanie (3–6 linii)
- Pytanie: “Gdzie jest błąd?”
- Opcje A–D (typ błędu/koncept)
- Poprawna odpowiedź
- Wyjaśnienie: co zawiodło i jak to poprawić
- Mini-reguła, jak tego unikać

Zakończenie:
- Lista 12 powtarzających się błędów w temacie (checklista).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-020",
    title:
      "Quiz końcowy + plan adaptacyjny: wg wyniku — co dalej studiować (spersonalizowana ścieżka)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Quiz integrujący z interpretacją i planem nauki wg wyników w podtematach.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]
Podtematy (jeśli masz): [LISTA] (jeśli nie, zaproponuj 8)

Stwórz quiz z 32 pytaniami:
- 4 pytania na podtemat (mix: konceptualne i zastosowania)

Dla każdego pytania:
- A–D
- poprawna odpowiedź
- wyjaśnienie
- etykieta podtematu

Na końcu:
- Szablon do zsumowania punktów wg podtematów
- Diagnoza podtematów (wysoki/średni/niski)
- Spersonalizowany plan nauki na 10 dni:
  - które podtematy priorytetyzować
  - jaki typ praktyki robić (drille/ćwiczenia/case’y)
  - mini-metryki postępu na każdy dzień`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-021",
    title: "Quiz ‘kontrintuicyjny’: 15 pytań, gdzie intuicja zawodzi",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Trenuje poprawną intuicję pytaniami, które łamią typowe przekonania.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]

Wygeneruj 15 pytań (A–D) kontrintuicyjnych.
Dla każdego:
- Treść
- Opcje A–D (bardzo wiarygodne)
- Poprawna odpowiedź
- Wyjaśnienie: dlaczego intuicja się myli
- “Mentalne antidotum”: reguła/heurystyka, by nie wpaść
- Dodatkowy mini-przykład

Zakończenie:
- Lista 10 typowych fałszywych intuicji w tym temacie i ich poprawne wersje.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-022",
    title: "Quiz ‘uzupełnij krok’: wybierz poprawny następny krok",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Trenuje procedurę: wiedzieć co zrobić dalej i dlaczego.",
    prompt: `Temat/procedura: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Stwórz 20 pytań:
W każdym pytaniu:
- Pokaż stan bieżący albo kroki 1–2 (tekstowo)
- Pytanie: “Jaki jest poprawny następny krok?”
- Opcje A–D
- Poprawna odpowiedź
- Wyjaśnienie, czemu ten krok (i czemu inne nie)
- Typowy błąd

Zakończenie:
- Skondensowana checklista procedury (ogólne kroki).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-023",
    title: "Quiz ‘zakres i estymacja’: najpierw oszacuj, potem wybierz odpowiedź",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Trenuje sanity checki: estymacja i wybór wiarygodnej odpowiedzi.",
    prompt: `Temat: [WPISZ TUTAJ]

Stwórz 18 pytań:
- Każda treść wymaga oszacowania rozsądnego zakresu
- Opcje A–D to zakresy/wyniki

Uwzględnij:
- Poprawną odpowiedź
- Rozsądną estymację (kroki)
- Krótkie obliczenie (jeśli dotyczy)
- Weryfikację
- Typowy błąd (czemu wybiera się absurdalny zakres)

Zakończenie:
- 10 heurystyk szybkiej estymacji.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-024",
    title: "Quiz dla nauczycieli: twórz idealne pytania i dystraktory",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Generuje pytania z dystraktorami opartymi o realne błędy i wyjaśnia ich projekt.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom uczniów: [WPISZ TUTAJ]

Wygeneruj 20 pytań A–D.
Dla każdego pytania:
- Poprawna odpowiedź (klucz)
- 3 dystraktory zaprojektowane jako:
  - dystraktor 1 = typowy błąd pojęciowy
  - dystraktor 2 = pomylenie terminów
  - dystraktor 3 = błąd proceduralny/rachunkowy/intuicyjny
- Wyjaśnij logikę projektu każdego dystraktora (“jaki błąd łapie”)
- Dydaktyczne wyjaśnienie poprawnej odpowiedzi
- Trudność (1–5)

Zakończenie:
- Jak kalibrować trudność itemu (8 reguł).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-025",
    title: "Quiz ‘rozpoznanie vs przypomnienie’: miks MCQ z odpowiedzią otwartą",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Unika iluzji rozpoznania: łączy wielokrotny wybór z odpowiedzią otwartą.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Stwórz 24 itemy:
- 12 wielokrotnego wyboru (A–D)
- 12 odpowiedzi otwarte (2–6 linii)

Uwzględnij:
- Poprawne odpowiedzi
- Instrukcję oceniania dla otwartych (rubryka)
- Typowe sygnały porażki (co ujawnia błąd)
- Rekomendację: jak powtarzać quiz dla maksymalnej retencji

Zakończenie:
- 14-dniowy plan powtórek rozłożonych w czasie z tym quizem.`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-026",
    title: "Quiz ‘mapy pojęć’: uzupełnij powiązania i hierarchie",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Sprawdza strukturę mentalną tematu: relacje, zależności, hierarchię.",
    prompt: `Temat: [WPISZ TUTAJ]
Podtematy (jeśli nie podasz, zaproponuj 10–15)

Stwórz “quiz mapy pojęć” z 20 itemami:
- 10 itemów: “wybierz poprawną relację” (A–D)
- 10 itemów: “ułóż hierarchię” (podaj 4 opcje kolejności)

Uwzględnij:
- Poprawną odpowiedź
- Krótkie wyjaśnienie (dlaczego)
- Typowy błąd (częsta konfuzja)

Zakończenie:
- Modelowa mapa pojęć (bullets z wcięciami).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-027",
    title: "Quiz przypadków brzegowych: kiedy NIE działa? (założenia i limity)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Trenuje granice: identyfikacja scenariuszy, gdzie metoda lub koncept zawodzi.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]

Wygeneruj 20 pytań A–D:
- Każde pytanie opisuje scenariusz
- Pytanie: “Czy ma zastosowanie? / Jakie założenie jest naruszone? / Na czym polega błąd?”

Uwzględnij:
- Poprawną odpowiedź
- Szczegółowe wyjaśnienie
- Naruszone założenie (etykieta)
- “Jak to uratować” (alternatywa/poprawna metoda)

Zakończenie:
- Checklista założeń przed zastosowaniem tematu (12).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-028",
    title: "Quiz ‘interpretacji’: zamień wyniki na poprawne wnioski",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Sprawdza interpretację: unikanie nadmiernych wniosków i czytanie wyników z ograniczeniami.",
    prompt: `Temat: [WPISZ TUTAJ]

Stwórz 18 pytań:
- Treść zawiera “wynik” (dana, output, twierdzenie, metryka)
- Pytanie: “Który wniosek jest uzasadniony?”

Format:
- A–D (3 błędne wnioski: przesada, nieuprawniona przyczynowość, uogólnienie)
- poprawna odpowiedź + wyjaśnienie
- typowy błąd + antidotum (reguła)

Zakończenie:
- 10 reguł interpretacji wyników bez nadmiernych stwierdzeń.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-029",
    title: "Quiz ‘mini-historii’: zastosuj koncepty w narracji",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Nauka przez historie: każde pytanie ma mikro-case narracyjny.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Wygeneruj 15 pytań.
Każde zawiera:
- mikro-historię (60–120 słów)
- pytanie konceptualne lub zastosowania
- odpowiedzi A–D
- poprawną odpowiedź
- szczegółowe wyjaśnienie
- “brakującą daną”, która byłaby przydatna (1 linia)

Zakończenie:
- Lista 8 wzorców narracyjnych do wymyślania kolejnych case’ów.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-030",
    title: "Quiz ultra-zaawansowany (styl magisterski): 25 trudnych pytań z rozumowaniem",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Dla wysokiego poziomu: trudne pytania, eksperckie dystraktory i głębokie wyjaśnienia.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [magister/ekspert]
Pytania: 25

Wygeneruj 25 pytań A–D z regułami:
- Każdy dystraktor musi być wiarygodny dla dobrego ucznia
- Ma być sprawdzane rozumowanie, nie płytka pamięć
- Dodaj 5 pytań z przypadkami brzegowymi
- Dodaj 5 pytań porównawczych A vs B

Dla każdego pytania:
- Poprawna odpowiedź
- Głębokie wyjaśnienie (120–250 słów)
- Dlaczego każdy dystraktor jest błędny
- Trudność (1–5)
- “Kluczowa idea” (1 linia) do zapamiętania

Zakończenie:
- Diagnoza: jak interpretować błędy (wg typu) i co studiować dalej.`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-031",
    title:
      "Quiz twórczy (meta-pytania): uczeń projektuje pytania i odpowiedzi",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Wyższy poziom nauki: tworzenie pytań, dystraktorów i wyjaśnień.",
    prompt: `Temat: [WPISZ TUTAJ]

Stwórz “quiz generatywny” z 12 zadań:
Dla każdego zadania:
- Zaproponuj podtemat
- Poproś ucznia o stworzenie:
  - 1 pytania A–D
  - 1 poprawnej odpowiedzi
  - 3 dystraktorów opartych o typowe błędy
  - wyjaśnienia, czemu każdy dystraktor jest błędny
- Dodaj kompletny przykład modelowy (tylko dla 4 z 12 zadań)

Zakończenie:
- Rubryka oceny jakości pytań (10 kryteriów).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-032",
    title: "Quiz ‘podwójnej warstwy’: pytanie + dopytanie (pogłębienie)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Każdy item ma follow-up wymagający uzasadnienia, ograniczając “trafienie na szczęście”.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Stwórz 15 itemów o dwóch warstwach:
- Część 1: MCQ A–D
- Część 2: follow-up (krótka odpowiedź 2–4 linie) uzasadniająca wybór

Uwzględnij:
- Poprawną odpowiedź (część 1)
- Odpowiedź modelową (część 2)
- Rubrykę oceny dla części 2 (kryteria)
- Typowy błąd i jak go wykryć

Zakończenie:
- Jak szybko oceniać ten format (instrukcja).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-033",
    title:
      "Quiz z ‘dystraktorami wg błędu’: każda opcja reprezentuje inny typ pomyłki",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Projekt dydaktyczny: każdy dystraktor odpowiada diagnozowalnemu błędowi.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Stwórz 20 pytań A–D, gdzie:
- Opcja poprawna jest konceptualnie precyzyjna
- Każdy dystraktor odpowiada typowi błędu:
  B = pomylenie terminu
  C = fałszywe ukryte założenie
  D = błąd procedury/intuicji

Dla każdego pytania:
- Wyjaśnij, jaki błąd reprezentuje każdy dystraktor
- Dodaj mikro-wzmocnienie dla każdego błędu (2–4 linie)

Zakończenie:
- Przewodnik użycia jako tutor (jeśli wybierasz B/C/D, co studiować).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-034",
    title: "Quiz szybkości (20 min): strategia czasu + szybka weryfikacja",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Do treningu czasu: krótsze pytania z szybkim sanity checkiem.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany]
Czas: 20 minut
Pytania: 20

Stwórz 20 pytań A–D:
- krótkie treści
- wiarygodne dystraktory

Uwzględnij:
- Poprawną odpowiedź
- Krótkie wyjaśnienie (1–3 linie)
- Weryfikację/sanity check (1 linia)
- Rekomendowany czas na pytanie (w sekundach)

Zakończenie:
- Strategia tempa (kiedy pominąć, kiedy wrócić).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-035",
    title: "Quiz do powtórek rozłożonych w czasie: 5 mini-quizów (dzień 1,3,7,14,30)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Pakiet retencyjny: mini-quizy powtarzane ze wzrostem trudności.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [dowolny]

Stwórz 5 mini-quizów (po 10 pytań każdy):
- Dzień 1: fundamenty
- Dzień 3: zastosowanie
- Dzień 7: miks i przeplatanie
- Dzień 14: przypadki brzegowe
- Dzień 30: egzamin integrujący

Dla każdego mini-quizu:
- Pytania A–D
- Poprawne odpowiedzi
- Wyjaśnienia
- Pokryte podtematy

Zakończenie:
- Instrukcja użycia (jak oceniać postęp i co wzmacniać).`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-036",
    title: "Quiz ‘popraw twierdzenie’: wybierz wersję precyzyjną",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Trenuje precyzję: przepisuj fałszywe zdania i wyłapuj niuanse.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Wygeneruj 20 itemów:
- Każdy item zawiera problematyczne twierdzenie (przesadzone, niejasne lub fałszywe)
- Pytanie: “Która wersja jest poprawna?”
- Opcje A–D to przeredagowania (tylko jedno jest precyzyjne)

Uwzględnij:
- Poprawną odpowiedź
- Wyjaśnienie niuansu (co się zmieniło i dlaczego)
- Typowy błąd, który produkuje pierwotne twierdzenie

Zakończenie:
- Lista 10 niebezpiecznych słów (zawsze/nigdy/gwarantuje...) i jak używać ich poprawnie.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-037",
    title: "Quiz ‘wybierz założenie’: wskaż, co musi być prawdą, by reguła działała",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Trenuje czytanie założeń: jaka kondycja jest konieczna, by użyć reguły.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]

Stwórz 18 pytań:
- Treść opisuje metodę/twierdzenie/regułę
- Pytanie: “Jakie założenie jest konieczne?”

Opcje A–D:
- 1 poprawne założenie
- 3 założenia wiarygodne, ale błędne/niewystarczające

Uwzględnij:
- Poprawną odpowiedź
- Wyjaśnienie
- Co się dzieje, jeśli założenie upada (mini-case)
- Alternatywę, jeśli upada

Zakończenie:
- Checklista założeń dla tematu.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-038",
    title: "Quiz z mini-zadaniami liczbowymi: oblicz + zinterpretuj",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Sprawdza rachunek i interpretację wyniku w kontekście.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany]
Pytania: 16

Dla każdego pytania:
- treść z liczbami/danymi
- prośba o obliczenie
- oraz interpretacja znaczenia wyniku

Format:
- A–D (wyniki + interpretacje jako dystraktory)
- poprawna odpowiedź
- krótkie rozwiązanie + poprawna interpretacja
- sanity check

Zakończenie:
- 8 typowych błędów liczbowych (jednostki, znaki, skale).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-039",
    title: "Quiz ‘łączenia pojęć’: integruj 2–3 idee w każdym pytaniu",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Pytania integrujące do pomiaru realnego zrozumienia (nie pamięciówki).",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]

Stwórz 20 pytań A–D, gdzie każde pytanie wymaga połączenia 2–3 konceptów.
Dla każdego pytania:
- Poprawna odpowiedź
- Szczegółowe wyjaśnienie (jak łączy, jakie kroki)
- Dlaczego każdy dystraktor zawodzi (po 1 linii)
- Trudność (1–5)
- Sprawdzane umiejętności

Zakończenie:
- Lista najważniejszych kombinacji pojęć (10).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-040",
    title: "Quiz końcowy ‘all-in-one’: z raportem i spersonalizowanymi rekomendacjami",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Quiz integrujący z raportem wg podtematów i konkretną trasą dalszej nauki.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]
Podtematy: [LISTA] (jeśli nie, zaproponuj 10)

Stwórz quiz z 40 pytaniami:
- 4 na podtemat (mix: konceptualne/zastosowania/przypadki brzegowe)

Dla każdego pytania:
- A–D
- poprawna odpowiedź
- wyjaśnienie
- etykieta podtematu
- “typowy błąd” (1 linia)

Na końcu:
- Szablon raportu wg podtematu:
  - wynik, diagnoza, rekomendacja
- 14-dniowa ścieżka nauki:
  - które podtematy priorytetyzować
  - jaki typ praktyki (quizy/ćwiczenia/case’y)
  - dzienne metryki postępu`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-041",
    title: "Quiz do klasy: formaty dyskusji + pytania sondujące",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Dla nauczycieli: pytania wywołujące dyskusję z oczekiwanymi odpowiedziami.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [WPISZ TUTAJ]

Stwórz 20 pytań do dyskusji na zajęciach:
- 12 typu MCQ A–D (szybkie głosowanie)
- 8 otwartych (pytania sondujące)

Uwzględnij:
- Poprawną/oczekiwaną odpowiedź
- Wyjaśnienie dydaktyczne
- Pytanie pogłębiające (follow-up)
- Typowy błąd, który pojawi się na zajęciach, i jak go skorygować

Zakończenie:
- 15-minutowy mini-scenariusz użycia tych pytań na zajęciach.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-042",
    title: "Quiz w stylu ‘peer instruction’: pytanie konceptualne + dyskusja + re-głos",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Format Mazura: pytania konceptualne z dystraktorami prowokującymi debatę.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Stwórz 15 pytań typu peer instruction:
Dla każdego:
- Treść konceptualna (bez ciężkich rachunków)
- Opcje A–D (dystraktory oparte o błędne koncepcje)
- Poprawna odpowiedź
- Wyjaśnienie dla prowadzącego
- “Co powiedziałaby każda strona” (czemu uczeń wybiera B/C/D)
- Mini-scenariusz debaty (2–3 pytania prowadzące)

Zakończenie:
- Jak wdrożyć re-głos i wyjaśnić odpowiedź (instrukcja).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-043",
    title: "Quiz z ‘autooceną’: reguły, by uczeń sam się ocenił",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Zawiera kryteria, by uczeń interpretował błędy i sam przypisywał sobie zadania.",
    prompt: `Temat: [WPISZ TUTAJ]

Stwórz 25 pytań A–D.
Dodatkowo:
- Podziel na 5 kategorii umiejętności (zdefiniuj je).
- Każde pytanie oznacz kategorią.
- Na końcu stwórz reguły:
  - jeśli mylisz ≥3 w kategorii X → przypisz praktykę Y (z instrukcją)
- Podaj konkretne rekomendacje wg kategorii (drille + ćwiczenia + “typowe” lektury).

Uwzględnij:
- Poprawne odpowiedzi i wyjaśnienia.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-044",
    title: "Quiz 2-etapowy: 1) test 2) pisemne uzasadnienie 5 odpowiedzi",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Ocena i wymuszenie uzasadnienia: po odpowiedziach uczeń wyjaśnia 5 wyborów.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Etap 1: stwórz 20 pytań A–D (z odpowiedziami i wyjaśnieniami).
Etap 2: wybierz 5 pytań (najważniejszych) i poproś o:
- pisemne uzasadnienie (120–200 słów) wyboru
- dodaj odpowiedź modelową dla tych 5
- rubrykę oceniania (jasność, rygor, przykłady, ograniczenia)

Zakończenie:
- Jak wykrywać “trafienie na szczęście” dzięki etapowi 2.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-045",
    title: "Quiz ‘etykiet’: wskaż koncept, podtemat i typ błędu",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Metapoznanie: nie tylko odpowiedź, ale też identyfikacja użytego konceptu.",
    prompt: `Temat: [WPISZ TUTAJ]
Podtematy: [LISTA] (jeśli nie, zaproponuj 8)

Stwórz 24 pytania A–D.
Dla każdego, oprócz poprawnej odpowiedzi, dodaj:
- etykieta podtematu
- etykieta konkretnego konceptu
- etykieta ‘typu błędu’ dla każdego dystraktora (konfuzja, założenie, procedura)

Zakończenie:
- Szablon rejestru błędów wg typu i ich korekty.`,
    thumbnail: "",
  },

  {
    id: "edu-quiz-046",
    title: "Quiz ‘bez dystraktorów’: prawda/fałsz z rygorystycznym uzasadnieniem",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Zaawansowane P/F z wyjaśnieniem: idealne pod założenia, granice, niuanse.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]
Itemy: 25

Stwórz 25 stwierdzeń prawda/fałsz:
- 10 łatwych (fundamenty)
- 10 średnich (zastosowanie)
- 5 trudnych (niuanse, przypadki brzegowe)

Dla każdego itemu:
- P/F
- Uzasadnienie (80–200 słów)
- Jeśli fałsz, przepisz zdanie tak, by było prawdziwe
- Typowy błąd, który prowadzi do złej odpowiedzi

Zakończenie:
- 10 sygnałów “podchwytliwego stwierdzenia” (słowa i struktury).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-047",
    title: "Quiz ‘sekwencji’: uporządkuj kroki (procedura)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Dla tematów proceduralnych: wybór poprawnej kolejności i uzasadnienie.",
    prompt: `Temat/procedura: [WPISZ TUTAJ]
Poziom: [średniozaawansowany]

Stwórz 18 pytań:
- Każde pytanie daje 5 kroków w losowej kolejności
- Podaj 4 opcje kolejności (A–D)
- Poprawna odpowiedź + wyjaśnienie

Uwzględnij:
- “Krok najczęściej pomijany” (dlaczego)
- Przypadek brzegowy, w którym kolejność się zmienia (jeśli dotyczy)

Zakończenie:
- Checklista idealnej procedury (podsumowanie).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-048",
    title: "Quiz ‘jakiej danej brakuje’: wskaż informację niezbędną do decyzji",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Trenuje osąd: jakie dane poprosić, zanim zastosujesz koncept.",
    prompt: `Temat: [WPISZ TUTAJ]

Stwórz 16 pytań:
- Każde pytanie opisuje niekompletny przypadek
- Pytanie: “O jaką informację najważniej zapytać?”

Opcje A–D:
- dane wiarygodne; tylko jedna odblokowuje dobrą decyzję

Uwzględnij:
- Poprawną odpowiedź
- Wyjaśnienie (czemu ta dana jest kluczowa)
- Co zrobisz z tą daną (następny krok)
- Typowy błąd: proszenie o dane nieistotne

Zakończenie:
- Lista 12 uniwersalnych pytań do doprecyzowania przypadków.`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-049",
    title: "Quiz ‘podwójnej prawdy’: wybierz odpowiedź ‘bardziej poprawną’ (niuanse)",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Zaawansowane niuanse: więcej niż jedna opcja bywa częściowo prawdziwa — wybierz najlepszą.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]

Stwórz 18 pytań A–D, gdzie:
- 2 opcje są “w połowie prawdziwe”
- 1 jest wyraźnie fałszywa
- 1 jest najbardziej poprawna (precyzyjna, z założeniami)

Uwzględnij:
- Poprawną odpowiedź
- Wyjaśnienie porównawcze: czemu jest “bardziej poprawna”
- Założenia implicytne
- Typowy błąd

Zakończenie:
- Przewodnik wybierania “najbardziej poprawnej” opcji na egzaminach (8 zasad).`,
    thumbnail: "",
  },
  {
    id: "edu-quiz-050",
    title: "Pakiet dla nauczyciela: 5 quizów po 10 pytań (gotowe do użycia) + klucze",
    area: "Edukacja & Szkolenia",
    category: "Quizy",
    summary:
      "Gotowe do klasy: 5 mini-ocen z kluczami i krótkimi wyjaśnieniami.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [WPISZ TUTAJ]
Podtematy (jeśli nie, zaproponuj 5)

Stwórz 5 osobnych quizów (po 10 pytań każdy):
- Quiz 1: fundamenty
- Quiz 2: zastosowanie
- Quiz 3: typowe błędy
- Quiz 4: przypadki brzegowe
- Quiz 5: integrujący

Dla każdego quizu:
- Pytania A–D
- Poprawne odpowiedzi
- Krótkie wyjaśnienie do każdego pytania
- Trudność (1–5)

Zakończenie:
- Instrukcja szybkiego oceniania
- Rekomendacja co zrobić, jeśli klasa “polegnie” na podtemacie.`,
    thumbnail: "",
  },
];
