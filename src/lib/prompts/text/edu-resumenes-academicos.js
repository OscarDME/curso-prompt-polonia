// src/lib/prompts/text/edu-resumenes-academicos.js

export const textPromptsEduResumenesAcademicos = [
  {
    id: "edu-res-001",
    title: "Streszczenie akademickie IMRaD (pełny artykuł) + wkład, ograniczenia i replikacja",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Streszcza artykuł w formacie IMRaD wraz z wkładem, ograniczeniami oraz możliwymi replikacjami.",
    prompt: `Wklej tutaj artykuł (lub długi fragment) i uzupełnij:
- Dyscyplina: [ ]
- Typ badania: [eksperymentalne / obserwacyjne / teoretyczne / przegląd]
- Odbiorcy: [studenci / badacze / kadra zarządzająca]
- Docelowa długość: [300 / 600 / 900 słów]
- Akcent: [bardziej technicznie / bardziej koncepcyjnie]

Zadanie:
1) Streść pracę w formacie IMRaD:
- Wprowadzenie: problem, luka, cel, hipoteza.
- Metody: projekt, próba/dane, zmienne, procedura, analiza.
- Wyniki: kluczowe rezultaty (z liczbami, jeśli są), najważniejsze wykresy/tabele.
- Dyskusja: interpretacja, implikacje, porównanie z literaturą, ograniczenia.

2) Wyodrębnij:
- 5 głównych wkładów (precyzyjnie).
- 5 ograniczeń/zagrożeń dla trafności (wewnętrznej/zewnętrznej/konstruktu).
- 5 kluczowych pojęć z definicjami operacyjnymi.
- 5 “cytatów do parafrazy” (bez kopiowania dosłownie; idea + sekcja, gdzie się pojawia).

3) Zakończenie:
- 3 otwarte pytania badawcze.
- 2 pomysły replikacji (co byś zmienił/a i dlaczego).
- 1 ultra-krótka wersja (akademicki tweet do 280 znaków).`,
    thumbnail: "",
  },
  {
    id: "edu-res-002",
    title: "Streszczenie krytyczne z macierzą: co twierdzi, co dowodzi, co zakłada, czego brakuje",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Ustrukturyzowane streszczenie krytyczne do wymagającej lektury akademickiej.",
    prompt: `Tekst do streszczenia: [WKLEJ TUTAJ]
Dyscyplina: [ ]
Poziom rygoru: [wysoki]

Zwróć streszczenie w 4 blokach (w punktach i krótkich zdaniach):
A) Co stwierdza (teza) — 5 punktów
B) Jakie daje dowody — 5 punktów (dane, metoda, przykłady)
C) Co zakłada — 6 punktów (założenia jawne i ukryte)
D) Czego brakuje / ryzyka — 6 punktów (biasy, ograniczenia, brakujące dane)

Następnie:
- 3 mocne kontrargumenty (steelman) przeciw tezie
- 3 konkretne usprawnienia metodologiczne
- 1 wyważona synteza (150–220 słów) “mocne strony + słabe strony”.`,
    thumbnail: "",
  },
  {
    id: "edu-res-003",
    title: "Streszczenie do przeglądu literatury (stan badań) + mapa tematów",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia artykuł lub rozdział w wpis gotowy do Twojej bibliografii/przeglądu literatury.",
    prompt: `Wklej tekst: [WKLEJ TUTAJ]
Temat Twojego przeglądu: [ ]
Styl cytowania (tylko odwołanie tekstowe): [APA/IEEE/Chicago]

Chcę:
1) Streszczenie ukierunkowane na literaturę (250–450 słów):
- problem, podejście, wyniki, wkład w dziedzinę.
2) Jak wpisuje się w stan badań:
- jaką linię/szkołę reprezentuje?
- jaką debatę porusza?
- co podważa albo potwierdza?
3) Mapa tematyczna:
- 6 etykiet (słów kluczowych) + dlaczego
- 3 hipotetyczne “sąsiednie” artykuły, które warto znaleźć (proponowane tytuły + co by wniosły)
4) Nota użytkowa:
- w którym akapicie mojego przeglądu najlepiej go zacytować (wstęp / rama teoretyczna / dyskusja) i w jakim celu.`,
    thumbnail: "",
  },
  {
    id: "edu-res-004",
    title: "Streszczenie z ekstrakcją zmiennych i definicji (operacjonalizacja)",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Wyodrębnia zmienne, pomiary i definicje: idealne do replikacji lub projektowania badania.",
    prompt: `Tekst / artykuł: [WKLEJ TUTAJ]
Cel: [zreplikować / zaprojektować podobne badanie / zrozumieć zmienne]

Zwróć:
1) Ogólne streszczenie (200–350 słów).
2) Tabela w tekście (kolumny):
- Zmienna / konstrukt
- Definicja (jak to rozumieją)
- Operacjonalizacja (jak to mierzą)
- Typ (IV/DV/Kontrolna/Moderator/Mediator)
- Źródło/Sekcja (gdzie się pojawia)
3) Zagrożenia dla trafności:
- 2 wewnętrzne
- 2 zewnętrzne
- 2 konstruktowe
4) Rekomendacje:
- 3 usprawnienia, by lepiej mierzyć te zmienne.`,
    thumbnail: "",
  },
  {
    id: "edu-res-005",
    title: "Streszczenie z ‘nicią logiczną’: przesłanki → metoda → wnioskowanie → konkluzja",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Odtwarza argumentację artykułu jako weryfikowalny łańcuch logiczny.",
    prompt: `Wklej tekst: [WKLEJ TUTAJ]
Poziom: [zaawansowany]

Chcę, abyś odtworzył/a nić logiczną:
1) Przesłanki (5–10) — co musi być prawdą, żeby argument działał.
2) Metoda/operacja (jak przechodzą od przesłanek do dowodów).
3) Kluczowe inferencje (3–6): gdzie “przeskakują” od danych do wniosku.
4) Wnioski (3): główny, poboczny i jeden implicytny.

Następnie:
- Wskaż 3 miejsca, gdzie argument zależy od kruchego założenia.
- Zaproponuj 2 dodatkowe testy, które wzmocniłyby łańcuch.
- Zrób streszczenie końcowe 180–250 słów, zachowujące tę nić.`,
    thumbnail: "",
  },
  {
    id: "edu-res-006",
    title: "Streszczenie porównawcze: Artykuł A vs Artykuł B (podobieństwa, różnice, kto przekonuje)",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Krytyczne porównanie dwóch artykułów z uzasadnionym werdyktem.",
    prompt: `Wklej Artykuł A: [ ]
Wklej Artykuł B: [ ]
Temat ogólny: [ ]

Zwróć:
1) Streszczenie A (150–250 słów) i B (150–250 słów).
2) Macierz porównawcza:
- Pytanie badawcze
- Metoda/dane
- Najważniejsze wyniki
- Mocne strony
- Słabe strony
- Uogólnianie (generalizacja)
3) Konflikty:
- Gdzie się sobie przeczą i dlaczego? (3 punkty)
4) Werdykt:
- Który jest bardziej przekonujący i pod jakimi warunkami?
- Jakie badanie zrobił(a)byś, aby rozstrzygnąć spór?

Zakończ:
- 8 punktami do cytowania w przeglądzie literatury.`,
    thumbnail: "",
  },
  {
    id: "edu-res-007",
    title: "Streszczenie ‘na prezentację’: scenariusz 5 minut + sugerowane slajdy",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia artykuł w gotowy do wygłoszenia scenariusz na zajęcia/seminarium.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]
Czas prezentacji: 5 minut
Odbiorcy: [zajęcia / seminarium / komisja]

Dostarcz:
1) Scenariusz narracyjny (450–650 słów):
- hook, problem, metoda, wyniki, implikacje, zakończenie.
2) Struktura slajdów (8–10):
- tytuł slajdu + 3 punkty
- jaki wykres/tabelę byś dodał/a i dlaczego
3) 3 pytania do publiczności otwierające dyskusję.
4) 5 “trudnych pytań”, które mogą paść + krótkie odpowiedzi.`,
    thumbnail: "",
  },
  {
    id: "edu-res-008",
    title: "Streszczenie ‘do nauki’: notatki Cornell + glosariusz + autotest",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia tekst w notatki do nauki i dodaje autoocenę.",
    prompt: `Tekst: [WKLEJ TUTAJ]
Poziom: [studia/magisterskie]

Stwórz:
1) Notatki Cornell:
- Kolumna haseł/pytań (10–15)
- Kolumna notatek (rozwinięte odpowiedzi)
- Podsumowanie na końcu (120–180 słów)
2) Glosariusz:
- 12–20 kluczowych terminów z definicją + przykładem
3) Autotest:
- 10 pytań (6 MCQ + 4 otwarte)
- poprawne odpowiedzi + krótkie wyjaśnienie`,
    thumbnail: "",
  },
  {
    id: "edu-res-009",
    title: "Streszczenie rozdziału książki: teza, struktura, pojęcia, użyteczne cytaty",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Streszcza długi rozdział, zachowując strukturę i kluczowe pojęcia.",
    prompt: `Rozdział: [WKLEJ TUTAJ]
Cel: [uczyć się / zrecenzować / przygotować zajęcia]
Docelowa długość: [400–800 słów]

Chcę:
1) Główna teza rozdziału (1–2 zdania).
2) Struktura wg sekcji:
- Sekcja → główna idea → 2 podidee + przykład.
3) 10 kluczowych pojęć (definicja + jak są tu użyte).
4) 6 idei “do cytowania” (parafraza) z informacją, która sekcja je wspiera.
5) 3 krytyki (co słabe / dyskusyjne) z argumentami.
6) 1 zastosowanie praktyczne (jak wykorzystać w realnym projekcie).`,
    thumbnail: "",
  },
  {
    id: "edu-res-010",
    title: "Systematyczne streszczenie przeglądu (review): pytania, kryteria, wyniki, luki",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Wydobywa sedno przeglądu wraz z lukami i rekomendacjami na przyszłość.",
    prompt: `Tekst przeglądu: [WKLEJ TUTAJ]
Dziedzina: [ ]
Cel: [uchwycić aktualny stan]

Zwróć:
1) Pytanie(a) przeglądu i motywację (100–150 słów).
2) Kryteria:
- włączenia/wyłączenia (jeśli są; jeśli nie, ostrożnie wywnioskuj)
- typ dowodów
3) Najważniejsze ustalenia:
- 6–10 punktów, pogrupowanych tematycznie
4) Konsensus vs kontrowersje:
- 3 konsensusy
- 3 kontrowersje
5) Luki:
- 6 realnych i konkretnych luk
6) Agenda przyszła:
- 5 rekomendowanych linii badań z uzasadnieniem “dlaczego teraz”.`,
    thumbnail: "",
  },

  {
    id: "edu-res-011",
    title: "Streszczenie do ‘related work’: idealny akapit + 6 cytowalnych punktów",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Output gotowy do wklejenia do sekcji prac powiązanych.",
    prompt: `Artykuł/tekst: [WKLEJ TUTAJ]
Mój temat: [WPISZ TUTAJ]

Wygeneruj:
1) Akapit “prace powiązane” (160–220 słów) zawierający:
- kontekst dziedziny
- co robi ta praca
- czym się różni
- istotne ograniczenie
2) 6 punktów “do cytowania” (parafraza), każdy z:
- ideą
- dlaczego to ważne
- która część tekstu to wspiera (sekcja lub przybliżona fraza)

Zakończenie:
- 3 alternatywne zdania, by zmieniać styl i nie powtarzać “ta praca…”.`,
    thumbnail: "",
  },
  {
    id: "edu-res-012",
    title: "Streszczenie z ‘claim chart’: twierdzenie → dowód → siła → ryzyko",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Mapa twierdzeń i dowodów do szybkiej oceny solidności.",
    prompt: `Tekst: [WKLEJ TUTAJ]

Zbuduj Claim Chart w formie tabeli tekstowej z kolumnami:
- Claim (twierdzenie)
- Dowód (co przedstawiają)
- Typ dowodu (dane/argument/teoria/eksperyment/model)
- Siła (wysoka/średnia/niska) + dlaczego
- Ryzyko/zagrożenie (bias, konfuzor, generalizacja)
- Co brakuje, by zwiększyć siłę

Uwzględnij minimum 8 claimów.

Następnie:
- Streść w 200–300 słowach: “co jest dobrze ugruntowane” vs “co jest tentative/niepewne”.`,
    thumbnail: "",
  },
  {
    id: "edu-res-013",
    title: "Streszczenie do pracy dyplomowej: wkład, rama teoretyczna, replikowalna metoda",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Nastawione na pisanie pracy: co z artykułu Ci się przyda i jak to włączyć.",
    prompt: `Tekst: [WKLEJ TUTAJ]
Temat mojej pracy: [ ]
Rozdział, w którym użyję: [rama teoretyczna / metodologia / dyskusja]

Zwróć:
1) Streszczenie artykułu (200–300 słów).
2) Co mogę użyć i jak:
- 3 idee do ramy teoretycznej (w relacji do mojego tematu)
- 2 idee metody/pomiaru
- 2 wyniki do dyskusji
3) Ryzyka cytowania (2–4): typowe błędne interpretacje lub ograniczenia.
4) 5 zdań “gotowych do wklejenia” (akademicka parafraza), formalnym tonem.`,
    thumbnail: "",
  },
  {
    id: "edu-res-014",
    title: "Streszczenie z ‘mapą pojęć’: pojęcia → relacje → przykład zastosowania",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Przedstawia tekst jako sieć pojęć i relacji dla głębokiego zrozumienia.",
    prompt: `Tekst: [WKLEJ TUTAJ]

Dostarcz:
1) Listę 12–18 kluczowych pojęć
2) Relacje między pojęciami (min. 20) w formacie:
- Pojęcie A —(relacja)→ Pojęcie B [wyjaśnienie w 1 linii]
3) 3 ważne “trasy” (łańcuchy 4–6 pojęć) wyjaśniające rdzeń tekstu
4) Przykład zastosowania (realistyczny case) używający co najmniej 6 pojęć
5) Końcowe streszczenie (180–240 słów) oparte na mapie (nie tylko narracyjne).`,
    thumbnail: "",
  },
  {
    id: "edu-res-015",
    title: "Streszczenie ‘dla recenzenta’: szybka ocena + decyzja (zaakceptować/poprawić/odrzucić)",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Symuluje raport recenzencki: mocne strony, słabości i konkretne poprawki.",
    prompt: `Artykuł/tekst: [WKLEJ TUTAJ]
Rola: recenzent konferencji/czasopisma
Kryteria: [nowość, klarowność, rygor, odtwarzalność, wpływ]

Zwróć:
1) Neutralne streszczenie (150–220 słów).
2) Mocne strony (5 punktów).
3) Słabe strony (6 punktów) — techniczne i związane z jasnością.
4) Pytania do autorów (6) — konkretne, nie ogólnikowe.
5) Rekomendacje (5) — zmiany możliwe do wdrożenia.
6) Werdykt:
- Zaakceptować / Do poprawy / Odrzucić
- 1 akapit uzasadnienia, oparty na dowodach i standardach.`,
    thumbnail: "",
  },

  {
    id: "edu-res-016",
    title: "Streszczenie artykułu teoretycznego: pojęcia, argumenty, kontrprzykłady, spójność",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Dla tekstów bez danych: odtwarza argument i ocenia spójność.",
    prompt: `Tekst teoretyczny: [WKLEJ TUTAJ]

Chcę:
1) Tezę i cel (1–2 zdania).
2) Argument główny:
- 6–10 kroków (przesłanka → wniosek)
3) Kluczowe pojęcia:
- 10 pojęć z definicją wg autora + Twoją parafrazą.
4) Możliwe kontrprzykłady (3):
- gdzie teza mogłaby się wyłożyć
5) Spójność wewnętrzna:
- 3 mocne punkty
- 3 słabe punkty (przeskoki logiczne, definicje kołowe, niejednoznaczność)
6) Streszczenie końcowe (220–320 słów).`,
    thumbnail: "",
  },
  {
    id: "edu-res-017",
    title: "Streszczenie metodologii: zbiór danych, procedura, pipeline, odtwarzalność",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Wydobywa pipeline metodologiczny i ocenia odtwarzalność; idealne pod replikację.",
    prompt: `Sekcja metodologii: [WKLEJ TUTAJ]
Dziedzina: [ ]
Cel: [zreplikować / zrozumieć pipeline]

Zwróć:
1) Pipeline krok po kroku (8–14 kroków).
2) Szczegóły odtwarzalne:
- wymagane dane
- preprocessing
- istotne parametry
- metryki i ewaluacja
- narzędzia/środowisko (jeśli wspomniane)
3) Niejasności (lista): co jest nieprecyzyjne.
4) O co poprosić autorów, by zreplikować (10 pytań).
5) Streszczenie metodologii (150–220 słów).`,
    thumbnail: "",
  },
  {
    id: "edu-res-018",
    title: "Streszczenie wyników: ustalenia, skala efektu, niepewność, granice interpretacji",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia wyniki w poprawne wnioski bez nadinterpretacji.",
    prompt: `Sekcja wyników (lub tabele/wykresy): [WKLEJ TUTAJ]

Dostarcz:
1) 6–10 ustaleń w punktach (uwzględnij liczby i skalę, jeśli są).
2) Niepewność:
- przedziały/p-values/błędy (jeśli są)
- jeśli nie ma: czego brakuje, by bardziej ufać
3) Odpowiedzialna interpretacja:
- jakie wnioski TAK się bronią (3–5)
- jakie wnioski NIE się bronią (3–5) i dlaczego
4) Implikacje praktyczne (3) z ostrożnością.
5) Streszczenie końcowe (180–260 słów).`,
    thumbnail: "",
  },
  {
    id: "edu-res-019",
    title: "Streszczenie ‘do abstractu’: stwórz 3 abstrakty (techniczny, ogólny, ultra krótki)",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Generuje abstrakty dopasowane do różnych odbiorców bez wymyślania wyników.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]
Dyscyplina: [ ]
Odbiorcy: [techniczni / ogólni / komisja]

Stwórz 3 abstrakty:
A) Techniczny (150–250 słów) — metoda i wyniki z precyzją
B) Ogólny (120–180 słów) — mniej żargonu, więcej intuicji
C) Ultra krótki (50–80 słów) — esencja

Zasady:
- Nie wymyślaj danych; jeśli brakuje, oznacz [BRAK DANYCH].
- Zachowaj spójność: problem → metoda → wyniki → implikacja.
- Dodaj 5 słów kluczowych na końcu każdego abstraktu.`,
    thumbnail: "",
  },
  {
    id: "edu-res-020",
    title: "Streszczenie z ‘pytaniami do lektury’ (seminarium): przewodnik do dyskusji",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Streszczenie + zestaw pytań prowadzących seminarium akademickie.",
    prompt: `Tekst: [WKLEJ TUTAJ]

Dostarcz:
1) Streszczenie (250–400 słów).
2) 12 pytań do dyskusji (od łatwych do trudnych):
- 4 na zrozumienie
- 4 krytyka metodologii
- 4 implikacje i rozszerzenia
3) 6 “gorących punktów” (miejsca sporów lub typowych konfuzji).
4) Zakończenie: wyważona ocena wartości tekstu (120–180 słów).`,
    thumbnail: "",
  },

  {
    id: "edu-res-021",
    title: "Streszczenie do ‘notatki badawczej’: idea + metoda + wkład na 1 stronie",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia artykuł w jednostronicową notatkę badawczą do archiwum.",
    prompt: `Artykuł/tekst: [WKLEJ TUTAJ]
Format końcowy: 1 strona (ale w tekście)

Chcę “research note” z sekcjami:
- Referencja (autor/rok/tytuł, jeśli dostępne)
- Problem i motywacja
- Pytanie/hipoteza
- Metoda/dane (bardzo konkretnie)
- Kluczowe wyniki
- Wkład (dlaczego to ważne)
- Ograniczenia
- Moje pomysły (jak bym tego użył/a) + 3 cytaty do mojej pracy (parafraza)

Zakończ:
- 5 słów kluczowych
- 3 powiązane prace do wyszukania (proponowane tytuły).`,
    thumbnail: "",
  },
  {
    id: "edu-res-022",
    title: "Streszczenie ‘anty-plagiat’: czysta parafraza akademicka z zachowaniem znaczenia",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Parafrazuje akademicko bez kopiowania, zachowując precyzję i niuanse.",
    prompt: `Tekst: [WKLEJ TUTAJ]
Język wyjścia: [polski/angielski]
Ton: formalny akademicki

Zadanie:
1) Streść w 250–350 słowach BEZ kopiowania zdań.
2) Zachowaj:
- te same pojęcia
- te same niuanse (warunki, ograniczenia, niepewność)
3) Wskaż:
- 8 terminów technicznych, które warto zostawić bez zmian (jeśli dotyczy)
- 6 miejsc, gdzie oryginał jest niejednoznaczny (i jak to rozwiązałeś/-aś lub zachowałeś/-aś)

Zakończenie:
- 3 alternatywne wersje pierwszego akapitu (różny styl).`,
    thumbnail: "",
  },
  {
    id: "edu-res-023",
    title: "Streszczenie do ‘macierzy dowodów’: wynik → dowód → kontekst → uogólnienie",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Struktura typu evidence matrix do decyzji opartych o dowody.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]
Decyzja lub praktyczne pytanie, które mnie interesuje: [ ]

Zbuduj macierz dowodów (tabela w tekście) z kolumnami:
- Ustalenie
- Dowód (jaki wynik/dane to wspierają)
- Kontekst (populacja/środowisko)
- Ograniczenia
- Jak bardzo uogólnialne (wys./śr./nis. + dlaczego)
- Implikacja praktyczna (z ostrożnością)

Minimum 8 ustaleń.
Następnie:
- 1 streszczenie menedżerskie (180–260 słów) pod decyzję.
- 5 rekomendacji “jeśli–to” opartych na dowodach.`,
    thumbnail: "",
  },
  {
    id: "edu-res-024",
    title: "Streszczenie wielu dokumentów: połącz 3–5 tekstów w spójną syntezę",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Syntetyzuje wiele źródeł: zgodności, konflikty i agenda na przyszłość.",
    prompt: `Wklej 3–5 tekstów (oddzielone przez ###):
###
[TEKST 1]
###
[TEKST 2]
###
[TEKST 3]
(…)

Temat przewodni: [ ]

Dostarcz:
1) Zintegrowaną syntezę (500–900 słów):
- jaki problem mają wspólny
- co wnosi każdy tekst
- gdzie się uzupełniają
- gdzie się sobie przeczą
2) Macierz porównawcza wg tekstu:
- teza, metoda/dowody, wyniki, ograniczenia
3) Konsensusy (3–6) i kontrowersje (3–6)
4) Agenda badawcza:
- 6 pytań na przyszłość
5) “Co bym cytował/a”:
- 10 punktów do cytowania (parafrazy) z informacją, z którego tekstu.`,
    thumbnail: "",
  },
  {
    id: "edu-res-025",
    title: "Streszczenie do pisania ramy teoretycznej: pojęcia → definicje → relacje",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Buduje mini-ramę teoretyczną z tekstu: definicje i relacje.",
    prompt: `Tekst: [WKLEJ TUTAJ]
Temat moich badań: [ ]

Stwórz:
1) Streszczenie (200–300 słów).
2) Rdzeń pojęciowy:
- 10 kluczowych pojęć z definicjami
- 15 relacji między pojęciami (A → B) z wyjaśnieniem w 1 linii
3) Propozycja “ramy” (250–400 słów):
- jak uporządkował(a)byś ramę teoretyczną z tych pojęć
- rekomendowana kolejność prezentacji
4) Luki:
- 5 rzeczy, których brakuje, by rama była kompletna (jakich tekstów szukać).`,
    thumbnail: "",
  },

  {
    id: "edu-res-026",
    title: "Streszczenie ‘na poster naukowy’: punkty, przekaz główny, sugerowane wizualizacje",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia artykuł w treść na poster: jasno, wizualnie i przekonująco.",
    prompt: `Artykuł/tekst: [WKLEJ TUTAJ]
Odbiorcy: [konferencja ogólna / nisza techniczna]

Chcę:
1) Przekaz główny (1 zdanie).
2) 6 sekcji postera (tytuły + 3–5 punktów każda):
- Tło, Cel, Metody, Wyniki, Dyskusja, Wnioski (Takeaways)
3) Sugerowane wizualizacje:
- 3 wykresy/figury, które byś dodał/a, i dlaczego
4) “Pitch korytarzowy” (90–140 słów)
5) 5 pytań, które padną przy posterze + krótkie odpowiedzi.`,
    thumbnail: "",
  },
  {
    id: "edu-res-027",
    title: "Streszczenie ‘na notatki do zajęć’: wersja nauczycielska + przykłady + ćwiczenia",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia tekst akademicki w notatki do zajęć z przykładami i praktyką.",
    prompt: `Tekst: [WKLEJ TUTAJ]
Poziom kursu: [ ]
Czas zajęć: [45/60/90 min]

Dostarcz:
1) Ustrukturyzowane notatki:
- cele uczenia się (5)
- kluczowe pojęcia (10) z definicjami
- wyjaśnienie sekcja po sekcji (z przykładami)
- analogie i ostrzeżenia (gdzie łatwo o pomyłkę)
2) 5 rozwiniętych przykładów (od najprostszego do najbardziej złożonego)
3) 8 ćwiczeń (z krótkim rozwiązaniem)
4) 10 pytań quizowych (z odpowiedziami)`,
    thumbnail: "",
  },
  {
    id: "edu-res-028",
    title: "Streszczenie z ‘timeline idei’: jak argument ewoluuje sekcja po sekcji",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Śledzi przepływ tekstu jak linię czasu, by zrozumieć strukturę.",
    prompt: `Tekst: [WKLEJ TUTAJ]

Stwórz timeline idei:
- Lista 10–18 “beatów” (punktów zwrotnych) w kolejności:
  - Beat #, przybliżona sekcja, główna idea, dlaczego ważna

Następnie:
- 5 “mostów” (zdań) łączących beat z następnym (parafraza)
- 3 miejsca, gdzie tekst można by przestawić, by był jaśniejszy
- Streszczenie końcowe 200–280 słów podążające za timeline.`,
    thumbnail: "",
  },
  {
    id: "edu-res-029",
    title: "Streszczenie ‘kontroli jakości’: wykryj niespójności i niejednoznaczności",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Audyt tekstu akademickiego: niespójności, luźne definicje i luki.",
    prompt: `Tekst: [WKLEJ TUTAJ]

Wykonaj audyt:
1) Neutralne streszczenie (150–220 słów).
2) Niespójności (min. 6):
- przytocz ideę (parafraza) + dlaczego jest niespójna
3) Niejednoznaczności (min. 6):
- termin lub fraza niejednoznaczna
- 2 możliwe interpretacje
- którą intencję autor ma najpewniej i dlaczego (jeśli da się wywnioskować)
4) Słabe definicje (min. 5):
- które pojęcie potrzebuje definicji operacyjnej
- propozycja lepszej definicji
5) Konkretne rekomendacje ulepszeń (8).`,
    thumbnail: "",
  },
  {
    id: "edu-res-030",
    title: "Streszczenie końcowe “all-in-one”: akademickie + wykonawcze + nauka + dyskusja",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Pełny pakiet: streszczenie akademickie, menedżerskie, notatki do nauki i przewodnik do dyskusji.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]

Dostarcz pakiet:
1) Streszczenie akademickie (300–450 słów) z metodą i wynikami.
2) Streszczenie menedżerskie (120–180 słów) dla nietechnicznych.
3) Notatki do nauki:
- 12 punktów z pojęciami
- 10 definicji
- 6 typowych konfuzji
4) Przewodnik do dyskusji:
- 8 pytań (od łatwych do trudnych)
- 3 krytyki metodologiczne
- 3 pomysły rozszerzeń/badań
5) Zakończenie:
- 1 “one-liner” (1 zdanie) oddający dokładnie wkład.`,
    thumbnail: "",
  },

  {
    id: "edu-res-031",
    title: "Streszczenie pracy magisterskiej/doktorskiej: rozdziały, wkład, metoda, wyniki, ograniczenia",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Streszcza długie prace (tezy), zachowując strukturę rozdziałów.",
    prompt: `Wklej fragment lub spis treści + kluczowe sekcje: [WKLEJ TUTAJ]
Docelowa długość: [500–1200 słów]

Zwróć:
1) Streszczenie ogólne (200–300 słów).
2) Mapa rozdziałów (jeśli jest):
- Rozdział → cel → wynik → jak łączy się z całością
3) Wkład:
- 5 wkładów (teoretycznych/metodologicznych/aplikacyjnych)
4) Metoda:
- tekstowy diagram pipeline’u
5) Wyniki i dowody:
- 6–10 punktów ze skalą/wskaźnikami, jeśli są
6) Ograniczenia i przyszłe prace:
- 6 ograniczeń + 6 kierunków na przyszłość

Zakończenie:
- 1 abstrakt “konferencyjny” (150–220 słów).`,
    thumbnail: "",
  },
  {
    id: "edu-res-032",
    title: "Streszczenie z naciskiem na ‘replikację’: kroki, materiały, zasoby i ryzyka",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Wydobywa wszystko, co potrzebne do replikacji badania/eksperymentu.",
    prompt: `Artykuł/tekst: [WKLEJ TUTAJ]
Cel: replikacja

Dostarcz:
1) Streszczenie (150–250 słów).
2) Checklista replikacji:
- dane (źródło, rozmiar, format)
- zmienne (definicja + pomiar)
- procedura krok po kroku
- narzędzia/oprogramowanie
- metryki ewaluacji
3) “Unknowns”:
- 10 rzeczy, których NIE da się jednoznacznie odtworzyć (co trzeba zapytać/zdecydować)
4) Ryzyka:
- 8 ryzyk replikacji (biasy, konfuzory, zależności)
5) Propozycja replikacji:
- co byś zmienił/a (2–4 zmiany), by sprawdzić odporność (robustness).`,
    thumbnail: "",
  },
  {
    id: "edu-res-033",
    title: "Streszczenie w formie ‘akademickiego op-edu’: centralna idea z ostrożnością i niuansami",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia artykuł w tekst dla szerokiej publiczności bez utraty rygoru.",
    prompt: `Tekst: [WKLEJ TUTAJ]
Odbiorcy: świadoma publiczność ogólna
Ton: jasny, bez żargonu, ale rygorystyczny

Stwórz:
1) Streszczenie w formie op-edu (700–1000 słów):
- hook
- problem
- co znalazł artykuł
- czego to NIE oznacza (ograniczenia)
- implikacje praktyczne (bez przesady)
- zakończenie mocnym pytaniem
2) 10 zdań “anty-dym” (by nie nadinterpretować)
3) 5 ostrożnych analogii (z ograniczeniami) do wyjaśnienia pojęcia`,
    thumbnail: "",
  },
  {
    id: "edu-res-034",
    title: "Streszczenie wielo-odbiorcze: student, nauczyciel, badacz, menedżer",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Cztery wersje tego samego materiału dopasowane do różnych potrzeb.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]

Stwórz 4 spójne streszczenia (bez wymyślania):
A) Student (200–300 słów, nacisk na uczenie się)
B) Nauczyciel (200–300 słów, nacisk na nauczanie i ocenę)
C) Badacz (200–300 słów, nacisk na metodę, luki, replikację)
D) Menedżer (120–180 słów, nacisk na implikacje i decyzję)

Następnie:
- 12 kluczowych terminów z definicjami (jeden glosariusz wspólny)
- 6 “punktów konfuzji” i jak je wyjaśnić`,
    thumbnail: "",
  },
  {
    id: "edu-res-035",
    title: "Streszczenie do ‘planu czytania’: co czytać najpierw, co pominąć, co notować",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Tworzy strategię lektury: gdzie skupić uwagę i jak robić notatki.",
    prompt: `Artykuł/tekst: [WKLEJ TUTAJ]
Dostępny czas: [15/30/60/120 min]
Cel: [ogólnie zrozumieć / zreplikować / skrytykować / cytować w pracy]

Dostarcz:
1) Szybkie streszczenie (120–180 słów).
2) Plan czytania wg czasu:
- 15 min: które sekcje + co notować
- 30 min: …
- 60 min: …
- 120 min: …
3) Lista 12 pytań prowadzących podczas czytania.
4) Szablon notatek: (problem, metoda, wyniki, ograniczenia, cytowalne idee).`,
    thumbnail: "",
  },

  {
    id: "edu-res-036",
    title: "Streszczenie do ‘systematyzacji’: zdefiniuj kategorie i sklasyfikuj ustalenia",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Tworzy kategorie analityczne i przypisuje do nich ustalenia z tekstu.",
    prompt: `Tekst: [WKLEJ TUTAJ]
Cel: systematyzacja do przeglądu lub raportu

1) Zaproponuj 6–10 kategorii analitycznych istotnych dla tekstu.
2) Streść tekst w punktach i przypisz każdy punkt do kategorii.
3) Dla każdej kategorii:
- co tekst twierdzi
- jakich dowodów używa
- jakie ograniczenie się pojawia

Zakończenie:
- 5 przekrojowych “insightów” (widocznych po skrzyżowaniu kategorii)
- 5 pytań przyszłych wynikających z systematyzacji.`,
    thumbnail: "",
  },
  {
    id: "edu-res-037",
    title: "Streszczenie ‘artykułu z matematyką’: intuicja + formalizm + interpretacja",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Wyjaśnia techniczne artykuły z równaniami: co znaczą i co naprawdę implikują.",
    prompt: `Artykuł/fragment (z równaniami): [WKLEJ TUTAJ]
Poziom czytelnika: [średniozaawansowany/zaawansowany]

Dostarcz:
1) Streszczenie koncepcyjne (200–300 słów): jaki problem i jaka idea.
2) Kluczowe równania (do 5):
- przepisz równanie (jeśli jest)
- wyjaśnij każdy składnik językiem naturalnym
- jakie założenie implikuje
- jak jest używane w argumencie (wynik)
3) Interpretacja:
- co wynik znaczy w praktyce
- czego NIE znaczy (ograniczenia)
4) 5 pytań do autoegzaminu z odpowiedziami.`,
    thumbnail: "",
  },
  {
    id: "edu-res-038",
    title: "Streszczenie ‘triadą’: co wnosi, komu się przydaje, kiedy zawodzi",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Ultra-użyteczne streszczenie: wkład, odbiorcy i operacyjne ograniczenia.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]

Zwróć:
1) Streszczenie (200–280 słów).
2) Co wnosi (5 punktów):
- teoretycznie/metodologicznie/aplikacyjnie
3) Komu się przydaje (4 profile) i jak każdy by tego użył.
4) Kiedy zawodzi:
- 6 warunków, w których wynik nie działa lub słabnie
5) Co zrobił(a)bym ja:
- 3 pomysły rozszerzeń/użycia w projekcie.

Zakończenie:
- 1 zdanie “jeśli zapamiętasz tylko jedno”.`,
    thumbnail: "",
  },
  {
    id: "edu-res-039",
    title: "Streszczenie pod ‘pytania egzaminacyjne’: wygeneruj 10 pytań i klucze",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia tekst w materiał ocenialny: pytania, odpowiedzi i rubrykę.",
    prompt: `Tekst: [WKLEJ TUTAJ]
Poziom: [studia/magisterskie]

Stwórz:
1) Streszczenie tekstu (200–300 słów).
2) 10 pytań egzaminacyjnych:
- 4 na zrozumienie
- 3 zastosowanie/transfer
- 3 krytyka/ograniczenia
3) Odpowiedzi modelowe do każdego pytania (80–180 słów)
4) Krótka rubryka oceny (kryteria per pytanie)

Zakończenie:
- 6 typowych błędów studentów przy nauce tego tekstu.`,
    thumbnail: "",
  },
  {
    id: "edu-res-040",
    title: "Streszczenie ‘dowód vs opinia’: oddziel fakty, inferencje i interpretacje",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Rozdziela poziomy twierdzeń, by nie mylić danych z interpretacją.",
    prompt: `Tekst: [WKLEJ TUTAJ]

Skategoryzuj i streść w 3 warstwach:
1) FAKTY (co obserwują/mówią z dowodami) — min. 8 punktów
2) INFERENCJE (co wnioskują na podstawie faktów) — min. 8 punktów
3) OPINIE/INTERPRETACJE — min. 6 punktów

Dla każdego punktu podaj:
- która część tekstu to wspiera (przybliżona sekcja)
- jak silne to jest (wys./śr./nis.) i dlaczego

Zakończenie:
- 1 podsumowanie (180–240 słów) z wyraźnym rozdziałem warstw.`,
    thumbnail: "",
  },

  {
    id: "edu-res-041",
    title: "Streszczenie ‘pod propozycję’: użyj artykułu, by uzasadnić swój projekt",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia dowody z tekstu w argumenty do propozycji/grantu.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]
Mój projekt/propozycja: [OPISZ W 3–6 LINII]

Dostarcz:
1) Streszczenie artykułu (150–220 słów).
2) Jak użyć go do uzasadnienia mojej propozycji:
- 5 argumentów (dowód → implikacja → dlaczego mój projekt jest potrzebny)
3) Ograniczenia użycia (3–5), by być uczciwym.
4) Akapit gotowy do wklejenia do “uzasadnienia” (180–260 słów).
5) 5 alternatywnych wersji zdań (żeby nie powtarzać stylu).`,
    thumbnail: "",
  },
  {
    id: "edu-res-042",
    title: "Streszczenie ‘do dyskusji wyników’: połącz z teorią i literaturą",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Przydatne do pisania dyskusji: implikacje, mechanizmy, porównania z literaturą.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]
Mój wynik lub hipoteza: [ ]

Dostarcz:
1) Streszczenie artykułu (180–240 słów).
2) Proponowane mechanizmy (3–6) i na jakich dowodach się opierają.
3) Jak łączy się z teorią:
- 3 możliwe ramy teoretyczne lub szkoły (jeśli brak, zaproponuj)
4) Jak użył(a)bym tego w dyskusji:
- 6 zdań “w stylu dyskusji” (parafraza) łączących wynik→teoria→ograniczenie.
5) 4 ostrzeżenia przed nadinterpretacją.`,
    thumbnail: "",
  },
  {
    id: "edu-res-043",
    title: "Streszczenie z checklistą ‘PRISMA-like’: co raportuje, a czego nie",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Kontrola raportowania (zwłaszcza dla przeglądów/badań) oceniająca transparentność.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]
Typ: [przegląd/badanie]

Stwórz checklistę “PRISMA-like” dopasowaną do tekstu:
- 20 itemów (pytania o raportowanie: dane, metoda, selekcja, analiza, biasy)

Następnie oceń tekst:
- Dla każdego itemu zaznacz: Tak / Nie / Częściowo
- Uzasadnij w 1 linii (parafraza)
- Wskaż 8 krytycznych braków (jeśli są)

Zakończenie:
- Streszczenie wpływu tych braków na wiarygodność wyniku.`,
    thumbnail: "",
  },
  {
    id: "edu-res-044",
    title: "Streszczenie do notatek Zettelkasten: 8 atomowych fiszek + linki",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia tekst w łączalne notatki atomowe (Zettelkasten).",
    prompt: `Tekst: [WKLEJ TUTAJ]
Temat/zbiór Zettelkasten: [ ]

Stwórz 8 notatek atomowych:
Dla każdej:
- Krótki tytuł
- Jedna idea (80–140 słów)
- Krótki przykład
- “Linki” do innych notatek (2–3 sugerowane tytuły)
- Tagi (3–6)
- Pytanie otwierające (do dalszego myślenia)

Zakończenie:
- “Notatka indeks” (map of content) 6–10 punktów łączących 8 notatek.`,
    thumbnail: "",
  },
  {
    id: "edu-res-045",
    title: "Streszczenie ‘spójności’: sprawdź, czy wnioski wynikają z rezultatów",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Ocena zgodności: pytanie→metoda→wyniki→wniosek; wykrywa nadinterpretację.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]

Wykonaj:
1) Streszczenie 180–240 słów.
2) Zgodność (alignment):
- Pytanie/hipoteza (co dokładnie?)
- Metoda (czy może na to odpowiedzieć?)
- Wyniki (co pokazują?)
- Wnioski (co twierdzą?)

3) Wskaż 6 możliwych nadinterpretacji:
- twierdzenie
- dlaczego nie jest w pełni uzasadnione
- jak to przepisać ostrożniej

Zakończenie:
- 5 rekomendacji poprawy spójności w wersji po revisie.`,
    thumbnail: "",
  },

  {
    id: "edu-res-046",
    title: "Streszczenie w formacie ‘fiszki lektury’: cytat, kluczowa idea, użycie, krytyka, pytania",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Kompletny format fiszki lektury do Twojego archiwum akademickiego.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]
Referencja (jeśli masz): [autor, rok, tytuł]

Zwróć fiszkę:
- Referencja
- Kluczowa idea (1–2 zdania)
- Streszczenie (200–300 słów)
- 5 kluczowych pojęć (definicja + przykład)
- 3 cytaty do użycia (parafraza, z sekcją)
- 3 krytyki (metodologiczne lub koncepcyjne)
- 5 pytań, które zostają
- Jak to łączę z moim tematem (120–180 słów)`,
    thumbnail: "",
  },
  {
    id: "edu-res-047",
    title: "Streszczenie ‘dla uczniów’: jasne wyjaśnienie + analogie + ćwiczenia",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Wersja dydaktyczna: do nauczania treści akademickich bez utraty rygoru.",
    prompt: `Tekst: [WKLEJ TUTAJ]
Poziom ucznia: [szkoła średnia/studia]
Czas: [30/60/90 min]

Stwórz:
1) Streszczenie dydaktyczne (250–400 słów) z przykładami.
2) 5 ostrożnych analogii (i ich ograniczenia).
3) 6 typowych konfuzji (i jak je korygować).
4) 8 ćwiczeń (z krótkim rozwiązaniem) na podstawie lektury.
5) 10 pytań quizowych (z odpowiedziami).`,
    thumbnail: "",
  },
  {
    id: "edu-res-048",
    title: "Streszczenie artykułu z danymi: metryki, wielkości efektu i znaczenie praktyczne",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Zamienia liczby w zrozumienie: skala, niepewność i realna istotność.",
    prompt: `Artykuł/fragment z danymi: [WKLEJ TUTAJ]

Dostarcz:
1) Streszczenie (180–260 słów).
2) Ekstrakcję ilościową:
- raportowane metryki (lista)
- wielkości efektu (jeśli są)
- istotność / niepewność (jeśli są)
- kluczowe porównania (baseline vs metoda)
3) Interpretację praktyczną:
- co zmienia się “w rzeczywistości” dzięki tym liczbom
- kiedy byłoby to nieistotne, nawet jeśli statystycznie istotne
4) 5 pytań do “audytu” liczb (jak mierzono? biasy? itd.).`,
    thumbnail: "",
  },
  {
    id: "edu-res-049",
    title: "Streszczenie ‘dwoma głosami’: co powie obrońca vs krytyk",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Dwie perspektywy bez biasu: mocne i słabe strony.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]

Stwórz:
1) Neutralne streszczenie (180–240 słów).
2) Głos obrońcy:
- 6 punktów tego, co najlepsze (nowość, metoda, jasność, użyteczność)
- 1 akapit obrony (120–180 słów)
3) Głos krytyka:
- 6 punktów tego, co najsłabsze (biasy, ograniczenia, nadinterpretacja)
- 1 akapit krytyczny (120–180 słów)
4) Synteza:
- kiedy warto użyć tej pracy i z jaką ostrożnością

Zakończenie:
- 5 konkretnych rekomendacji ulepszenia artykułu.`,
    thumbnail: "",
  },
  {
    id: "edu-res-050",
    title: "Kompletny pakiet streszczeń: abstrakt + IMRaD + fiszka + pytania + plan nauki",
    area: "Edukacja & Szkolenia",
    category: "Streszczenia Akademickie",
    summary:
      "Mega-output: wiele form streszczenia + narzędzia do nauki i dyskusji.",
    prompt: `Tekst/artykuł: [WKLEJ TUTAJ]
Poziom: [studia/magisterskie]
Cel: [nauka / przegląd / praca dyplomowa]

Dostarcz:
1) Abstrakt techniczny (150–250 słów).
2) Streszczenie IMRaD (400–700 słów).
3) Fiszka lektury (referencja, kluczowa idea, użycie, krytyka, pytania).
4) Glosariusz 15 terminów (definicja + przykład).
5) 12 pytań do dyskusji (z czego 6 “trudnych”).
6) Autoegzamin:
- 10 MCQ + 5 otwartych
- poprawne odpowiedzi
7) 7-dniowy plan nauki:
- co powtarzać każdego dnia
- jak oceniać postęp
- co zrobić, jeśli polegnę na X.`,
    thumbnail: "",
  },
];
