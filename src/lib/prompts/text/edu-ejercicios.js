// src/lib/prompts/text/edu-ejercicios.js

export const textPromptsEduEjercicios = [
  {
    id: "edu-ex-001",
    title: "Generator ćwiczeń wg poziomów (z podpowiedziami, rozwiązaniami i rubryką)",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Tworzy stopniowane ćwiczenia (łatwe→trudne) z podpowiedziami, rozwiązaniami krok po kroku i kryteriami oceny.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom ucznia: [szkoła średnia / studia / profesjonalista]
Format: [zadania liczbowe / teoria / programowanie / case’y]
Cel: [egzamin / praktyka / projekt]
Ograniczenia: [bez rachunku różniczkowego / z wyprowadzeniem / itd.]

Wygeneruj zestaw 15 ćwiczeń:
- 5 podstawowych (minimalne opanowanie)
- 5 średnich (transfer)
- 5 zaawansowanych (integracja i przypadki brzegowe)

Dla KAŻDEGO ćwiczenia dodaj:
1) Jasne sformułowanie (bez dwuznaczności)
2) Co sprawdza (umiejętność/koncept)
3) 2–3 stopniowane podpowiedzi (od delikatnej do bezpośredniej)
4) Pełne rozwiązanie krok po kroku
5) Weryfikacja / sprawdzenie (jak upewnić się, że jest poprawnie)
6) Typowy błąd i jak go uniknąć
7) Kryteria oceniania (krótka rubryka, 0–10)

Zakończenie:
- Mapa pokrycia (jakie podtematy objąłeś/-aś, a jakich brakuje).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-002",
    title: "Bank ‘drilli’ (praktyka celowa): 30 krótkich ćwiczeń do automatyzacji",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Krótkie, powtarzalne ćwiczenia do opanowania konkretnych sub-umiejętności.",
    prompt: `Temat: [WPISZ TUTAJ]
Sub-umiejętność do zautomatyzowania: [np. różniczkowanie, wykrywanie sofizmatów, faktoryzacja, bilansowanie równań itd.]
Poziom: [średniozaawansowany/zaawansowany]
Czas na ćwiczenie: [1–5 min]

Wygeneruj 30 drilli:
- 10 na rozgrzewkę (powtarzalne wzorce)
- 10 wariacji (zmieniaj 1 warunek naraz)
- 10 mieszanych (interleaving: mieszaj typy, żeby uniknąć “autopilota”)

Dla każdego drilla:
- Treść
- Odpowiedź końcowa (tylko wynik)
- 1 mikro-podpowiedź (maks. 1 linia)
- “Jaki wzorzec trenuje”

Zakończenie:
- 7-dniowy plan praktyki (sesje, kolejność, powtórki, kryteria przejścia dalej).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-003",
    title: "Ćwiczenia egzaminacyjne (z pułapkami) + jak rozpoznać każdą pułapkę",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trening pod trudny egzamin: zadania-pułapki, strategia i weryfikacja.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]
Format oceny: [test / opisowe / ustny]

Stwórz 12 ćwiczeń w stylu egzaminu:
- 4 konceptualne (definicja, ograniczenia, założenia)
- 4 zastosowania (rachunek/procedura)
- 4 pułapki (intuicja zawodzi)

Dla każdego ćwiczenia dodaj:
- Treść
- Dlaczego to pułapka (jeśli dotyczy)
- Poprawna strategia (kroki)
- Szczegółowe rozwiązanie
- Weryfikacja (jak sprawdzić)
- Typowy błąd ucznia
- “Sygnał” do wykrycia pułapki w 10 sekund

Zakończenie:
- 10 heurystyk unikania pułapek + 6 pytań do auto-checku.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-004",
    title: "Ćwiczenia ‘przypadki brzegowe’: opanuj limity i rzadkie warunki",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Ćwiczenia skupione na miejscach, gdzie metoda zwykle się wywraca: przypadki graniczne, wyjątki i złamane założenia.",
    prompt: `Temat: [WPISZ TUTAJ]
Typowa metoda/reguła w tym temacie: [WPISZ TUTAJ]

Wygeneruj 15 ćwiczeń typu case brzegowy:
- 5 gdzie wszystko działa “ładnie”
- 5 gdzie jedno założenie jest naruszone
- 5 gdzie kilka założeń jest naruszonych (lub istnieje niejednoznaczność)

Dla każdego ćwiczenia:
- Treść
- Jakie założenie jest spełnione/naruszone
- Jaka jest konsekwencja naruszenia
- Rozwiązanie krok po kroku (i alternatywa, jeśli standardowa metoda zawodzi)
- “Lekcja z przypadku” (1–2 linie)

Zakończenie:
- Checklista założeń przed użyciem metody (12 punktów).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-005",
    title: "Ćwiczenia ‘wyjaśniające’: odpowiadaj jak ekspert (nie tylko licz)",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Ćwiczenia, gdzie zadaniem jest wyjaśnić i uzasadnić; idealne pod egzaminy ustne i realne opanowanie.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Wygeneruj 10 ćwiczeń wyjaśniających:
- 4: “Zdefiniuj i uzasadnij”
- 3: “Porównaj A vs B”
- 3: “Skrytykuj argument/rozwiązanie”

Dla każdego ćwiczenia:
- Treść
- Oczekiwana struktura odpowiedzi (skrypt 6–10 bulletów)
- Odpowiedź modelowa (200–450 słów)
- 5 trudnych pytań dopytujących, jakie zadałby profesor
- Rubryka (jasność, rygor, przykłady, ograniczenia)

Zakończenie:
- 10 użytecznych fraz, by brzmieć klarownie i rygorystycznie na ustnym.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-006",
    title: "Ćwiczenia ‘transferowe’: zastosuj koncept poza typowym kontekstem",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trenuje prawdziwy transfer: zmiana domeny, danych i celów bez zmiany rdzenia konceptu.",
    prompt: `Koncepcja: [WPISZ TUTAJ]
Typowa domena: [A]
Nowe domeny (wybierz 2): [B], [C]

Wygeneruj 12 ćwiczeń:
- 4 w domenie A (utrwalenie)
- 4 w domenie B (transfer)
- 4 w domenie C (trudniejszy transfer)

Dla każdego ćwiczenia:
- Treść z realistycznym kontekstem
- Jaka część konceptu jest użyta (zasada)
- Główna podpowiedź (1–3 linie)
- Szczegółowe rozwiązanie
- “Skąd wiedzieć, że wynik ma sens” (reguła sanity check)

Zakończenie:
- Lista 8 pułapek transferu i jak ich unikać.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-007",
    title: "Ćwiczenia typu ‘mini-projekt’: 5 zadań integrujących z deliverables",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Zadania integrujące z wymaganymi rezultatami i rubryką: idealne do nauki projektowej.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [zaawansowany]
Czas na wyzwanie: [2–6 godzin]
Dozwolone narzędzia: [WPISZ TUTAJ]

Stwórz 5 mini-projektów:
Dla każdego:
- Kontekst i cel
- Deliverables (3–6)
- Wymagania techniczne/konceptualne
- Dane (jeśli dotyczy; wymyśl mały zbiór danych w tekście)
- Rekomendowane kroki (bez robienia całości)
- Kryteria oceny (rubryka z punktami)
- “Rozszerzenie” (żeby podnieść trudność)
- “Checklista końcowa” przed oddaniem

Zakończenie:
- Jak prezentować wyniki (szablon raportu).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-008",
    title: "Ćwiczenia ‘diagnostyczne’: znajdź błąd w fałszywych rozwiązaniach",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Uczysz się, znajdując usterki: dostajesz błędne rozwiązania i diagnozujesz gdzie i dlaczego.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

Wygeneruj 10 ćwiczeń diagnostycznych:
Dla każdego dodaj:
- Treść zadania
- Fałszywe (realistyczne) rozwiązanie w 2–4 krokach
- Pytania:
  1) W którym kroku jest błąd?
  2) Który koncept/założenie zawiodło?
  3) Jak to poprawić?
- Pełne poprawne rozwiązanie
- “Jak unikać tego błędu w przyszłości” (heurystyka)

Zakończenie:
- Lista 12 powtarzających się błędów w tym temacie.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-009",
    title: "Ćwiczenia ‘krótkie pytanie, głęboka odpowiedź’ (styl ustny)",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Krótkie pytania wymagające głębokich, uporządkowanych odpowiedzi.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]

Wygeneruj 20 krótkich pytań (1 linia), które sprawdzają:
- definicje
- ograniczenia
- założenia
- intuicję
- porównanie podejść
- interpretacje

Dla każdego pytania:
- Odpowiedź modelowa (80–180 słów)
- 1 krótki przykład
- 1 kontrprzykład lub przypadek brzegowy
- 1 trudniejsze dopytanie

Zakończenie:
- Szablon odpowiedzi w 4 krokach (template).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-010",
    title: "Ćwiczenia z ‘weryfikowalnym rozwiązaniem’: metody sprawdzania",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Ćwiczenia, gdzie weryfikacja jest częścią nauki: sanity checki, alternatywy, estymacje.",
    prompt: `Temat: [WPISZ TUTAJ]
Format: [liczbowe / konceptualne / programowanie]

Wygeneruj 12 ćwiczeń.
Dla każdego dodaj:
- Treść
- Pełne rozwiązanie
- 3 metody weryfikacji:
  1) sanity check (szacunek/rząd wielkości)
  2) metoda alternatywna (jeśli istnieje)
  3) przypadek prosty (test na trywialnym przykładzie)
- Typowy błąd i profilaktyka

Zakończenie:
- Ogólna checklista weryfikacji (10 kroków).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-011",
    title: "Ćwiczenia ‘konstrukcyjne’: twórz przykłady i kontrprzykłady",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Uczeń nie tylko rozwiązuje: konstruuje przypadki spełniające lub łamiące własności.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 15 ćwiczeń konstrukcyjnych:
- 8: skonstruuj przykład spełniający warunki (A, B, C)
- 7: skonstruuj kontrprzykład, który łamie dokładnie jeden warunek

Dla każdego ćwiczenia:
- Treść (jasne warunki)
- Rozwiązanie z konstrukcją krok po kroku
- Wyjaśnienie, dlaczego spełnia/łamie
- Wariacja: zmień jeden warunek i zapytaj, co się stanie

Zakończenie:
- “Zestaw narzędzi konstruktora” (heurystyki do wymyślania przykładów).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-012",
    title: "Ćwiczenia ‘drabinką’: to samo zadanie, 6 poziomów głębokości",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Jedno zadanie zamienia się w 6, stopniowo podnosząc złożoność dla realnego opanowania.",
    prompt: `Temat: [WPISZ TUTAJ]
Zaprojektuj 1 zadanie bazowe (realistyczny kontekst), a potem stwórz drabinkę 6 poziomów:

Poziom 1: zrozumienie (zdefiniuj zmienne)
Poziom 2: bezpośrednie zastosowanie
Poziom 3: wariacja (zmień parametr)
Poziom 4: przypadek brzegowy
Poziom 5: optymalizacja / wybór metody
Poziom 6: uogólnienie i dowód/uzasadnienie

Uwzględnij:
- Treści każdego poziomu
- Szczegółowe rozwiązanie dla każdego poziomu
- “Jaką umiejętność trenuje” na poziom

Zakończenie:
- Jak ocenić opanowanie tematu przy użyciu tej drabinki.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-013",
    title: "Ćwiczenia ‘przeplatane’: mieszaj 5 typów, by uniknąć iluzji nauki",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Interleaving: miesza typy zadań; poprawia rozróżnianie i dobór metody.",
    prompt: `Temat: [WPISZ TUTAJ]
Typy ćwiczeń do wymieszania (wybierz 5): [definicja, rachunek, dowód, diagnoza, transfer, przypadek realny, porównanie]

Wygeneruj 25 ćwiczeń przeplatanych (kolejność wymieszana):
Dla każdego:
- Treść
- Typ (jeden z 5)
- Minimalna podpowiedź
- Pełne rozwiązanie
- “Dlaczego ten typ myli się z innym” (1 linia)

Zakończenie:
- Przewodnik: jak wybrać właściwą metodę (drzewo decyzyjne w bulletach).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-014",
    title: "Ćwiczenia ‘z danymi’: mały dataset + pytania + rozwiązania",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Nauka na danych: tworzy dataset (tekst) i problemy, które go używają.",
    prompt: `Temat: [WPISZ TUTAJ]
Kontekst: [szkoła/firma/zdrowie/itd.]
Zmienne: [lista 6–12]

Stwórz mały dataset (20–40 wierszy) w formacie tekstowym (CSV-like).
Następnie stwórz 12 ćwiczeń opartych o te dane:
- 4 opisowe
- 4 wnioskowanie/decyzja (jeśli dotyczy)
- 4 zaawansowane (przypadki brzegowe, trade-offy)

Dla każdego ćwiczenia:
- Treść
- Podpowiedź
- Pełne rozwiązanie
- Weryfikacja (jak sprawdzić)

Zakończenie:
- 8 dodatkowych pytań bez rozwiązań do praktyki.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-015",
    title: "Ćwiczenia ‘z ograniczeniami’: ucz się w warunkach (bez X, z Y)",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Wymusza kreatywność i opanowanie, ograniczając narzędzia albo narzucając reguły.",
    prompt: `Temat: [WPISZ TUTAJ]
Ograniczenia (wybierz 2–4):
- bez kalkulatora
- bez pochodnych
- bez internetu
- tylko metoda graficzna
- tylko argument werbalny
- limit czasu (2 min)
- tylko przykłady (bez teorii)

Wygeneruj 12 ćwiczeń dopasowanych do tych ograniczeń:
Dla każdego:
- Treść
- Jaką umiejętność trenuje
- Rozwiązanie respektujące ograniczenia
- Typowy błąd
- Jak szybko zweryfikować

Zakończenie:
- Plan praktyki poprawy pod ograniczeniami.`,
    thumbnail: "",
  },

  {
    id: "edu-ex-016",
    title: "Ćwiczenia ‘z rubryką’: automatyczne ocenianie kryteriami",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Tworzy ćwiczenia z predefiniowaną oceną: świetne dla nauczycieli.",
    prompt: `Temat: [WPISZ TUTAJ]
Typ: [zadanie / esej / projekt / prezentacja]
Poziom: [zaawansowany]

Wygeneruj 10 ćwiczeń.
Dla każdego dodaj:
- Treść
- Oczekiwana odpowiedź lub rozwiązanie modelowe
- Szczegółowa rubryka (kryteria + poziomy + punktacja)
- Przykłady odpowiedzi:
  - świetna
  - średnia
  - słaba
- Komentarze feedbackowe (3) na poziom

Zakończenie:
- Szablon oceny do wielokrotnego użycia.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-017",
    title: "Ćwiczenia ‘syntezy’: streszczaj, łącz i uogólniaj",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Zadania syntezy na poziomie zaawansowanym: łączenie podtematów, tworzenie ram i uogólnianie.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 12 ćwiczeń syntezy:
- 4: mapy pojęć (instrukcje + przykładowe rozwiązanie)
- 4: połącz A z B (argument + przykład)
- 4: uogólnij (od przypadków do reguły)

Dla każdego ćwiczenia:
- Treść
- Podpowiedź struktury (jak odpowiedzieć)
- Odpowiedź modelowa (150–350 słów) lub rozwiązanie
- Kryteria oceny

Zakończenie:
- 10 pytań “dlaczego”, by pogłębić każdą odpowiedź.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-018",
    title: "Ćwiczenia ‘porównawcze’: A vs B vs C z przypadkami i decyzją",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Głębokie porównanie podejść: założenia, trade-offy, dobór i awarie.",
    prompt: `Temat: [WPISZ TUTAJ]
Podejścia do porównania: [A], [B], [C] (jeśli nie wiesz, zaproponuj)

Wygeneruj 10 ćwiczeń:
- 4: wskaż właściwe podejście dla przypadku
- 3: wyjaśnij trade-off na przykładzie
- 3: przypadek, gdzie dwa podejścia zawodzą, a jedno działa

Dla każdego ćwiczenia:
- Przypadek (kontekst + minimalne dane)
- Pytanie
- Odpowiedź modelowa z uzasadnieniem
- Typowy błąd
- “Reguła decyzyjna” (1 linia)

Zakończenie:
- Tekstowe drzewo decyzyjne wyboru podejścia.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-019",
    title: "Ćwiczenia ‘w stylu zawodów’: szybkość + precyzja + weryfikacja",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Rutyna konkursowa: szybkie myślenie/rachunki z weryfikacją, żeby nie popełniać błędów.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]
Czas łączny: [20–40 min]

Stwórz sesję w stylu zawodów:
A) Sprint (10 min): 10 krótkich zadań (odpowiedź końcowa) + klucze.
B) Średni dystans (15 min): 4 zadania średnie (krótkie rozwiązanie).
C) Długi dystans (15 min): 1 zadanie długie (pełne rozwiązanie + weryfikacja).
D) Post-mortem:
- lista prawdopodobnych błędów w każdym bloku
- rekomendacje tempa

Uwzględnij:
- Rozwiązania i weryfikacje do wszystkiego.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-020",
    title: "Ćwiczenia ‘badawcze’: formułuj pytania i projektuj ocenę",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Ćwiczenia, by myśleć jak badacz: hipotezy, projekt, dowody i krytyka.",
    prompt: `Temat: [WPISZ TUTAJ]
Kontekst: [akademicki / przemysłowy]

Wygeneruj 8 ćwiczeń badawczych:
Dla każdego:
- Pytanie badawcze
- Hipotezy (2)
- Jakich dowodów potrzebujesz
- Projekt oceny (eksperyment/badanie/symulacja)
- Ryzyka trafności (3–5)
- Odpowiedź modelowa (czego oczekujesz w wynikach)

Zakończenie:
- Checklista jakości dowodów (12 punktów).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-021",
    title: "Ćwiczenia ‘pod programowanie’: zaimplementuj, przetestuj, zoptymalizuj",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Dla tematów technicznych: zmusza do implementacji i testowania na przypadkach brzegowych.",
    prompt: `Temat: [WPISZ TUTAJ]
Język: [Python/JS/itd.]
Poziom: [średniozaawansowany/zaawansowany]

Wygeneruj 10 zadań programistycznych:
Dla każdego:
- Treść (wejścia/wyjścia)
- Wymagania (złożoność, pamięć, styl)
- Przypadki brzegowe (min. 5)
- Testy (min. 6)
- Rozwiązanie referencyjne (kod)
- Wyjaśnienie podejścia
- Możliwa optymalizacja (co poprawić)

Zakończenie:
- Checklista debugowania do tego typu zadań.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-022",
    title: "Ćwiczenia ‘odwrotne wyjaśnianie’: z rozwiązania wywnioskuj problem",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Nauka odwrotna: dostajesz wynik/rozwiązanie i odtwarzasz problem oraz rozumowanie.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 12 ćwiczeń odwróconych:
Dla każdego:
- Wynik końcowy (liczba, stwierdzenie, decyzja, output)
- Fragment rozumowania (2–4 linie)
- Zadanie ucznia:
  1) odtworzyć możliwą treść zadania
  2) uzupełnić brakujące kroki
- Rozwiązanie: jedna poprawna treść + pełne rozwiązanie
- “Jaką umiejętność trenuje”

Zakończenie:
- 8 wskazówek, jak rozwiązywać ćwiczenia odwrócone.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-023",
    title: "Ćwiczenia ‘krytycznego czytania’: wykryj sofizmaty, luki i założenia",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Idealne dla teorii i esejów: analizuj argumenty z precyzją.",
    prompt: `Temat: [WPISZ TUTAJ]

Stwórz 10 ćwiczeń krytycznego czytania:
Dla każdego:
- Argument/rozwiązanie w tekście (150–250 słów) z 2–4 możliwymi wadami
- Pytania:
  - wskaż założenia
  - wykryj błąd logiczny lub skok rozumowania
  - przepisz argument poprawnie
- Odpowiedź modelowa (analiza + wersja poprawiona)
- Rubryka (jasność, rygor, dowody, kontrprzykłady)

Zakończenie:
- Lista 15 typowych sofizmatów/skoków logicznych w tym temacie.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-024",
    title: "Ćwiczenia ‘wg celów’: zrozumieć, zastosować, przeanalizować, stworzyć (Bloom)",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Tworzy ćwiczenia zgodne z Bloomem: od rozumienia po tworzenie nowych rozwiązań.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 18 ćwiczeń:
- 4 Zrozumieć (wyjaśnij własnymi słowami)
- 4 Zastosować (rozwiąż)
- 4 Przeanalizować (porównaj, rozłóż na części)
- 3 Ocenić (skrytykuj, uzasadnij)
- 3 Stworzyć (nowy przypadek, nowa metoda)

Dla każdego ćwiczenia:
- Treść
- Odpowiedź/rozwiązanie modelowe
- Podpowiedź
- Kryterium oceny

Zakończenie:
- Jak użyć tego zestawu do nauki w 7 dni.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-025",
    title: "Ćwiczenia ‘ustne’: wyjaśnij w 60 s, 3 min i 8 min",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trenuje odpowiedzi ustne z precyzją i przykładami, w różnych limitach czasu.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 10 promptów do odpowiedzi ustnej:
Dla każdego:
- Pytanie (1 linia)
- Struktura odpowiedzi
- Odpowiedź modelowa w:
  A) 60 sekund
  B) 3 minuty
  C) 8 minut
- 3 trudne dopytania
- 1 przykład i 1 przypadek brzegowy

Zakończenie:
- Checklista, jak brzmieć jasno pod presją (12 punktów).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-026",
    title: "Ćwiczenia ‘aktywnej pamięci’: zaawansowane fiszki + konfuzory",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Mocne fiszki z konfuzorami i ‘dlaczego nie’, by uczyć się bez iluzji.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]

Stwórz 40 fiszek:
- 25 konceptualnych (definicje, założenia, ograniczenia)
- 15 zastosowania (mikro-zadania)

Dla każdej fiszki:
- Pytanie
- Odpowiedź
- Konfuzor (kusi, ale jest błędny) + dlaczego jest błędny
- Sygnał rozróżnienia
- Mini-przykład lub metafora

Zakończenie:
- 14-dniowy plan powtórek rozłożonych w czasie (kalendarz).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-027",
    title: "Ćwiczenia ‘wg umiejętności’: rozbij temat na subskills i trenuj je",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Dzieli złożony temat na sub-umiejętności i tworzy celowane ćwiczenia dla każdej.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [średniozaawansowany/zaawansowany]

1) Zidentyfikuj 8–12 sub-umiejętności potrzebnych do opanowania tematu.
2) Dla każdej sub-umiejętności:
- 3 ćwiczenia (od łatwego do trudnego)
- Podpowiedzi
- Rozwiązania
- Typowy błąd
- Metryka opanowania (skąd wiem, że już umiem)

Zakończenie:
- Rekomendowana kolejność (ścieżka subskills) + plan na 10 dni.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-028",
    title: "Ćwiczenia ‘uogólniania’: od przypadku szczególnego do reguły",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Uczy uogólniania: dostrzegaj wzorce w przypadkach i formułuj reguły z weryfikacją.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 12 ćwiczeń:
- 6: daję 3 przypadki, a Ty wyciągasz regułę
- 6: daję regułę, a Ty tworzysz 3 przypadki, które ją spełniają, i 1, który ją łamie

Dla każdego ćwiczenia:
- Treść
- Rozwiązanie (reguła/przypadki)
- Uzasadnienie
- Weryfikacja (jak sprawdzić)

Zakończenie:
- Heurystyki uogólniania bez overfittingu (8).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-029",
    title: "Ćwiczenia ‘kliniczne’: podejmuj decyzje przy niepełnej informacji",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trenuje decyzje w niepewności: hipotezy, pytania, dowody i działanie.",
    prompt: `Temat: [WPISZ TUTAJ]
Kontekst: [kliniczny / biznes / inżynieria / edukacja]

Stwórz 8 przypadków decyzyjnych:
Dla każdego:
- Sytuacja (dane początkowe)
- Jakich informacji brakuje (ale byłyby przydatne)
- 5 pytań, które byś zadał/-a
- 3 alternatywne hipotezy
- Jakie dowody wspierają/obalają każdą hipotezę
- Rekomendowana decyzja + plan działania
- Ryzyka i mitygacje

Zakończenie:
- Checklista decyzji w niepewności (12 punktów).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-030",
    title: "Ćwiczenia ‘syntezy końcowej’: pełny egzamin + rozwiązania + analiza błędów",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Pełny egzamin integrujący z rozwiązaniami i przewodnikiem diagnozy błędów.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]
Docelowy czas: [60–120 min]

Stwórz pełny egzamin:
Sekcja A (konceptualna): 10 pytań (z odpowiedziami modelowymi)
Sekcja B (zastosowanie): 6 problemów (z rozwiązaniami krok po kroku)
Sekcja C (zaawansowana): 2 przypadki integrujące (z rozwiązaniem + weryfikacją)

Dodatkowo:
- Całkowita rubryka (100 punktów) i podział na sekcje
- “Mapa błędów”: 15 typowych błędów i co oznaczają (czego nie rozumiesz)
- Plan naprawczy: co ćwiczyć w zależności od błędu

Zakończenie:
- Finalna lista nauki (checklista 20 punktów).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-031",
    title: "Ćwiczenia ‘z kreatywnością’: wymyśl własne zadanie i je rozwiąż",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Tworzy oryginalne zadania: treść, rozwiązanie, weryfikacja i przypadek brzegowy.",
    prompt: `Temat: [WPISZ TUTAJ]

Najpierw naucz mnie wymyślać zadania:
- 10 szablonów treści (formatek) dla tego tematu
- 10 zmiennych, które mogę modyfikować, by tworzyć warianty
- 6 kryteriów “dobrego zadania” (ani trywialne, ani niemożliwe)

Następnie wygeneruj 8 oryginalnych zadań i dla każdego:
- Treść
- Pełne rozwiązanie
- Weryfikacja
- Trudniejsza wariacja
- Wariacja z przypadkiem brzegowym

Zakończenie:
- Jak używać tego do nauki z buddy (format pracy).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-032",
    title: "Ćwiczenia ‘korekty’: popraw słabą odpowiedź aż będzie świetna",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Iteruje po odpowiedziach: słaba → średnia → dobra → świetna, z komentarzami.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 10 ćwiczeń:
Dla każdego dodaj:
- Pytanie
- Słabą odpowiedź (z typowymi błędami)
- Zadanie: popraw do “średniej”, potem do “dobrej”, potem do “świetnej”
- Modelową świetną odpowiedź (finał)
- Komentarze korekcyjne na każdym etapie (czego brakowało)

Zakończenie:
- Checklista auto-korekty (12 punktów).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-033",
    title: "Ćwiczenia ‘na czas’: zestawy z zegarem + strategia tempa",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trening pod egzamin: zestawy 30/45/60 min z zarządzaniem tempem.",
    prompt: `Temat: [WPISZ TUTAJ]
Cel: [egzamin]
Długość zestawu: [30/45/60 min]

Stwórz 3 zestawy na czas:
- Zestaw 1: szybkość (krótkie pytania)
- Zestaw 2: precyzja (pytania średnie)
- Zestaw 3: integracja (długie zadanie)

Dla każdego zestawu:
- Lista ćwiczeń (z rozwiązaniami)
- Rekomendowany czas na ćwiczenie
- Strategia tempa (kiedy pominąć, kiedy wrócić)
- Checklista szybkiej weryfikacji

Zakończenie:
- Plan 1 tygodnia z tymi zestawami (progresja).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-034",
    title: "Ćwiczenia ‘z pisemnym wyjaśnieniem’: struktura jak esej techniczny",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Dla przedmiotów teoretycznych: długie odpowiedzi z strukturą i rubryką.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 8 pytań na długą odpowiedź (esej techniczny):
Dla każdego pytania:
- Treść
- Sugerowana struktura (wstęp → teza → rozwinięcie → kontrargument → zakończenie)
- Odpowiedź modelowa (500–900 słów)
- “Typ” źródeł/dowodów (jaką klasę dowodów byś użył/-a)
- Rubryka (argument, dowody, precyzja, ograniczenia, jasność)

Zakończenie:
- 10 spójników i przydatnych fraz do pisania akademickiego.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-035",
    title: "Ćwiczenia ‘debaty’: broń stanowiska dowodami i ograniczeniami",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trenuje argumentację: teza, dowody, kontrargument, synteza.",
    prompt: `Temat: [WPISZ TUTAJ]
Pytanie do debaty: [WPISZ TUTAJ]

Wygeneruj 8 ćwiczeń debatowych:
Dla każdego:
- Stanowisko A i stanowisko B
- Oczekiwane dowody/rozumowanie dla każdego stanowiska
- 5 pytań do cross-examination (kontrataku)
- Odpowiedź modelowa A i B (po 150–300 słów)
- Synteza: kiedy każde stanowisko jest zasadne (kryteria)

Zakończenie:
- Rubryka debaty (jasność, dowody, uczciwość intelektualna).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-036",
    title: "Ćwiczenia ‘modelowania’: sformalizuj zjawisko w zmienne i relacje",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Zamienia zjawiska w modele: zmienne, założenia, równania/reguły i walidacja.",
    prompt: `Temat/zjawisko: [WPISZ TUTAJ]
Poziom: [wysoki]

Stwórz 10 ćwiczeń modelowania:
Dla każdego:
- Kontekst
- Co trzeba zamodelować
- Zmienne (lista)
- Założenia
- Proponowany model (reguła/równanie/algorytm)
- Jak go zwalidować (jakie dane, jakie testy)
- Rozwiązanie modelowe

Zakończenie:
- Checklista dobrego modelowania (12 punktów).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-037",
    title: "Ćwiczenia ‘z analogiami’: twórz poprawne analogie (i wyjaśniaj granice)",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trenuje wyjaśnianie: buduj użyteczne analogie bez mylenia przez uproszczenia.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 12 ćwiczeń:
- 6: stwórz analogię z podanej dziedziny (kuchnia, muzyka, sport itd.)
- 6: wykryj limit podanej analogii (i popraw ją)

Dla każdego ćwiczenia:
- Treść
- Rozwiązanie modelowe (analogia + mapowanie)
- “Gdzie się psuje” (przypadek graniczny)
- Jak to naprawić albo jak ostrzec ucznia

Zakończenie:
- 10 reguł budowania dobrych analogii technicznych.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-038",
    title: "Ćwiczenia ‘priorytetyzacji’: wybierz metodę i uzasadnij",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Celem nie jest liczenie, tylko wybór właściwego podejścia z uzasadnieniem.",
    prompt: `Temat: [WPISZ TUTAJ]
Dostępne metody: [lista A/B/C...]

Wygeneruj 15 ćwiczeń:
Dla każdego:
- Problem/przypadek
- Pytanie: “jakiej metody użyłbyś/-abyś i dlaczego?”
- Rozwiązanie modelowe:
  - wybrana metoda
  - założenia
  - kroki
  - alternatywa (drugi najlepszy wybór)
- Typowy błąd: wybór metody z przyzwyczajenia
- Szybki sygnał decyzyjny

Zakończenie:
- Tekstowe drzewo decyzyjne (IF/THEN).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-039",
    title: "Ćwiczenia ‘z niepewnością’: przedziały, scenariusze i wrażliwość",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Problemy zmuszające do pracy z niepewnością: scenariusze i analiza wrażliwości.",
    prompt: `Temat/decyzja: [WPISZ TUTAJ]

Wygeneruj 10 ćwiczeń:
Dla każdego:
- Dane w przedziałach (nie pojedyncze liczby)
- Wymagaj:
  1) policzyć/podjąć decyzję w 3 scenariuszach (optymistyczny/bazowy/pesymistyczny)
  2) wskazać najbardziej wrażliwą zmienną
  3) zaproponować decyzję odporną (robust)
- Pełne rozwiązanie z wyjaśnieniem
- Weryfikacja/sanity check

Zakończenie:
- 8 błędów w traktowaniu niepewności.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-040",
    title: "Ćwiczenia ‘meta-konfuzji’: odróżniaj podobne pojęcia (A vs B)",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Zestaw, by przestać mylić podobne pojęcia: definicje, testy i przypadki.",
    prompt: `Temat: [WPISZ TUTAJ]
Pary, które mylę: [A vs B], [C vs D] itd. (jeśli nie podasz, zaproponuj 5 typowych)

Wygeneruj 20 ćwiczeń:
- 10: klasyfikuj przypadki (to A czy B?)
- 5: wyjaśnij różnicę przykładem i kontrprzykładem
- 5: “popraw to zdanie” (jest w nim pomylenie)

Uwzględnij:
- Rozwiązania z uzasadnieniem
- “Szybki test” rozróżnienia każdej pary (1–2 pytania)
- Typowe błędy i jak ich unikać

Zakończenie:
- Mini-ściąga rozróżnień (bullets).`,
    thumbnail: "",
  },

  {
    id: "edu-ex-041",
    title: "Ćwiczenia ‘iteracyjne’: daję Ci feedback jak nauczyciel (symulacja)",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Symuluje nauczyciela, który ocenia i wymaga poprawek: iterujesz do wysokiej jakości.",
    prompt: `Temat: [WPISZ TUTAJ]
Typ odpowiedzi: [opisowe / rozwiązanie / esej / kod]

Wygeneruj 6 zadań, gdzie:
- Podajesz treść
- Podajesz początkową odpowiedź “ucznia” (średnią)
- Dajesz feedback nauczyciela (surowy, ale fair)
- Pokazujesz wersję poprawioną
- Wyjaśniasz, co się zmieniło i dlaczego

Zakończenie:
- Szablon auto-feedbacku, żebym mógł/mogła sam(a) iterować.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-042",
    title: "Ćwiczenia ‘automatyzacji’: nawyki praktyki i śledzenie postępu",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Projektuje system praktyki: zestawy, metryki, przegląd błędów i progresję.",
    prompt: `Temat: [WPISZ TUTAJ]
Dostępny czas: [min/dzień]
Cel: [egzamin/projekt]

Stwórz system:
1) 3 zestawy ćwiczeń (krótki/średni/długi) z konkretnymi przykładami.
2) Metryki postępu (8–12).
3) Rejestr błędów:
   - kategorie (10)
   - jak korygować każdą
4) Progresja 14 dni:
   - co robić każdego dnia
   - jak dostosować, jeśli polegnę
5) “Test końcowy” z rozwiązaniem i rubryką.

Uwzględnij:
- 20 przykładowych ćwiczeń do zasilania systemu.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-043",
    title: "Ćwiczenia ‘kalibracji’: najpierw oszacuj, potem policz",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trenuje intuicję ilościową: estymacje i sanity checki przed formalnym rachunkiem.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 12 ćwiczeń:
Dla każdego:
- Najpierw poproś o oszacowanie (rząd wielkości / zakres / przybliżenie)
- Potem poproś o obliczenie dokładne (jeśli dotyczy)
- Rozwiązanie: sensowne oszacowanie + wynik dokładny
- Porównanie: jak daleko było oszacowanie i dlaczego
- Weryfikacja i sanity checki

Zakończenie:
- Poradnik szybkiej estymacji (10 heurystyk).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-044",
    title: "Ćwiczenia ‘czytania wykresów’: interpretuj, wnioskuj, krytykuj",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trenuje interpretację wykresów/figur: pytania zaawansowane i rozwiązania.",
    prompt: `Temat: [WPISZ TUTAJ]
Typ wykresów: [liniowy, słupkowy, rozrzutu, ROC itd.]

Stwórz 10 ćwiczeń:
Dla każdego:
- Opisz wykres (tekstowo): osie, trend, obserwacje odstające
- Pytania:
  1) zinterpretuj trend
  2) ostrożnie zaproponuj możliwą przyczynę
  3) wskaż biasy/ograniczenia
  4) jakie dodatkowe dane byś poprosił/-a
- Pełna odpowiedź modelowa

Zakończenie:
- Checklista krytycznego czytania wykresów (12).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-045",
    title: "Ćwiczenia ‘komunikacji’: wyjaśnij to samo 3 odbiorcom",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trenuje komunikację: ta sama idea wyjaśniona dziecku, studentowi i ekspertowi.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 10 ćwiczeń:
Dla każdego:
- Pytanie lub podtemat
- Odpowiedź modelowa dla:
  A) 12-latka (jasno, analogia)
  B) studenta (więcej rygoru)
  C) eksperta (precyzyjnie, z ograniczeniami)
- 2 przykłady na odbiorcę
- 1 typowy błąd na odbiorcę

Zakończenie:
- Szablon adaptacji wyjaśnienia bez utraty ścisłości.`,
    thumbnail: "",
  },

  {
    id: "edu-ex-046",
    title: "Ćwiczenia ‘ekstremalnej syntezy’: 1 zdanie, 5 bulletów, 1 strona",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trenuje rozumienie: streszczanie na różnych poziomach bez utraty sedna.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 12 ćwiczeń:
Każde prosi o streszczenie podtematu w:
1) 1 zdaniu (maks. 12 słów)
2) 5 bulletach (maks. 1 linia każdy)
3) 1 stronie (400–700 słów) z przykładem i ograniczeniem

Uwzględnij:
- Rozwiązanie modelowe dla 4 ćwiczeń (najtrudniejszych).
- Rubryka oceny streszczeń (jasność, poprawność, pokrycie, przykład, ograniczenia).

Zakończenie:
- 10 typowych błędów przy streszczaniu.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-047",
    title: "Ćwiczenia ‘doboru zmiennych’: zdefiniuj, zmierz, operacjonalizuj",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trenuje zamianę pojęć na mierzalne zmienne i projekt pomiaru.",
    prompt: `Temat/konstrukt: [WPISZ TUTAJ] (np. “motywacja”, “jakość”, “ryzyko”, “uczenie się”)

Wygeneruj 10 ćwiczeń:
Dla każdego:
- Zdefiniuj konstrukt precyzyjnie
- Zaproponuj 3 mierzalne zmienne (operacjonalizacja)
- Jak je mierzyć (narzędzie, skala, częstotliwość)
- Możliwe biasy pomiaru (3)
- Pełne rozwiązanie modelowe

Zakończenie:
- Checklista operacjonalizacji (12).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-048",
    title: "Ćwiczenia ‘przyczynowości’: zaprojektuj badanie lub eksperyment",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Zaawansowana praktyka: projekty badań przyczynowych z kontrolą biasów.",
    prompt: `Relacja do zbadania: [X wpływa na Y]
Kontekst: [WPISZ TUTAJ]

Wygeneruj 8 ćwiczeń:
Dla każdego:
- Zaproponuj 2 możliwe projekty (eksperymentalny i obserwacyjny)
- Zmienne kontrolne / potencjalne konfuzory
- Jakie dane zbierać
- Jak analizować
- Ograniczenia
- Rozwiązanie modelowe (rekomendowany projekt + dlaczego)

Zakończenie:
- Checklista przyczynowości (12).`,
    thumbnail: "",
  },
  {
    id: "edu-ex-049",
    title: "Ćwiczenia ‘odporności’: sprawdź rozwiązanie na scenariuszach",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Trenuje robustność: zmieniaj założenia i oceniaj, czy rozwiązanie się trzyma.",
    prompt: `Temat: [WPISZ TUTAJ]

Wygeneruj 10 ćwiczeń:
Dla każdego:
- Problem bazowy
- Rozwiązanie bazowe (rozwiązane)
- 3 perturbacje (zmień założenia/parametry)
- Przelicz/przemyśl od nowa dla każdej perturbacji
- Wniosek: jak odporne jest rozwiązanie i dlaczego

Zakończenie:
- 10 heurystyk odporności do każdego problemu.`,
    thumbnail: "",
  },
  {
    id: "edu-ex-050",
    title: "Mega paczka ćwiczeń: 50 pytań mieszanych + rozwiązania (tryb intensywny)",
    area: "Edukacja & Szkolenia",
    category: "Ćwiczenia",
    summary:
      "Pakiet intensywny: konceptualne, zastosowanie, diagnoza, transfer, synteza.",
    prompt: `Temat: [WPISZ TUTAJ]
Poziom: [wysoki]
Cel: [egzamin/projekt]
Czas łączny: [2–4 godziny]

Wygeneruj 50 ćwiczeń mieszanych:
- 15 konceptualnych
- 15 zastosowania
- 10 diagnostycznych (fałszywe rozwiązania)
- 5 transferowych
- 5 syntezy/esejowych

Uwzględnij:
- Pełne rozwiązania dla 30 najważniejszych
- Podpowiedzi dla pozostałych 20
- Globalna rubryka (100 punktów)
- Plan korekty na podstawie wyników:
  - jeśli mylisz X → co ćwiczyć
  - zasoby/strategie

Zakończenie:
- Finalna checklista opanowania (20 punktów).`,
    thumbnail: "",
  },
];
