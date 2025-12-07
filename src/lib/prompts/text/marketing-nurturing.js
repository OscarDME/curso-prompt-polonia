// src/lib/prompts/text/marketing-nurturing.js

export const textPromptsMarketingNurturing = [
  {
    id: "mnut-001",
    title:
      "Zaprojektuj strategię nurturingu (30 dni) — od zimnego leada do ‘gotowego do zakupu’",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Tworzy kompletny plan nurturingu na 30 dni: cele, treści, metryki i reguły segmentacji.",
    prompt: `Kontekst (uzupełnij):
- Produkt/usługa:
- Cena / ticket:
- Nisza / branża:
- ICP (kto kupuje i dlaczego):
- Główna obiekcja #1:
- Główna obiekcja #2:
- Typowy czas decyzji (dni):
- Główny kanał nurturingu (email, WhatsApp, DM, społeczność):
- Lead magnet / powód wejścia:
- Oferta końcowa (call, checkout, demo, konsulting):
- Dostępne aktywa (case’y, opinie, zasoby):
- Ryzyko spamu / limity częstotliwości:

Zadanie:
1) Zdefiniuj “stan końcowy” nurturingowanego leada (w co wierzy, co wie, co jest gotów zrobić).
2) Podziel listę na 3 poziomy:
   - Zimny (czysta ciekawość)
   - Ciepły (rozważanie)
   - Gorący (intencja)
   Zdefiniuj konkretne kryteria przejścia między poziomami.
3) Zaprojektuj kalendarz 30 dni z 12–16 kontaktami (materiałami):
   - cel każdej wiadomości
   - główna idea (1 zdanie)
   - CTA (micro-CTA) i CTA (macro)
4) Zdefiniuj 5 powtarzalnych “wątków narracyjnych” (filary): autorytet, dowód, edukacja, obiekcje, oferta.
5) Zdefiniuj metryki i progi (zielony/żółty/czerwony), by ocenić, czy nurturing działa.
6) Zakończ regułami: kiedy przyspieszać (oferta), a kiedy zwalniać (wartość / higiena).
Format: tabela tekstowa + checklist na koniec.`,
    thumbnail: "",
  },
  {
    id: "mnut-002",
    title:
      "Sekwencja ‘Onboarding lead magnetu’ (7 dni) — dostarcz wartość + przygotuj sprzedaż",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Kompletna sekwencja dla nowych leadów, którzy pobrali zasób.",
    prompt: `Uzupełnij:
- Lead magnet:
- Obietnica lead magnetu:
- Główna oferta:
- Ton marki (bliski/premium/bezpośredni):
- Najczęstsza obiekcja:
- Historia założyciela (jeśli jest):
- Social proof (jeśli jest):
- Kanał (email/whatsapp):

Zadanie:
Stwórz 7 wiadomości (jedna dziennie) z:
1) Tematem (jeśli email) + preheaderem (jeśli dotyczy) albo hookiem (jeśli WhatsApp).
2) Pełnym tekstem:
   - Dzień 1: dostarczenie + “jak używać” + mikro-zobowiązanie
   - Dzień 2: quick win krok po kroku
   - Dzień 3: typowy błąd + korekta
   - Dzień 4: framework (3 kroki) + przykład
   - Dzień 5: case/mini-historia (bez wymyślania wyników: użyj języka “z naszego doświadczenia”)
   - Dzień 6: mocna obiekcja + odpowiedź
   - Dzień 7: przejście do głównego CTA (call/checkout/demo) z etyczną pilnością
3) Jedno micro-CTA na wiadomość (odpowiedz, kliknij, zapisz, zrób).
4) Segmentację: jaką etykietę dodać, jeśli klikną / odpowiedzą / zignorują.
5) Warianty: 2 wersje Dnia 6 i Dnia 7 (ton miękki vs bezpośredni).`,
    thumbnail: "",
  },
  {
    id: "mnut-003",
    title:
      "Nurturing pod obiekcje (macierz) — 8 obiekcji × 3 wiadomości każda",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Bank wiadomości, który odpowiada na obiekcje i podgrzewa intencję.",
    prompt: `Uzupełnij:
- Oferta:
- ICP:
- Lista obiekcji (min. 8): cena, czas, zaufanie, “już próbowałem/am”, “to nie dla mnie” itd.
- Dostępny dowód (opinie, gwarancje, proces):
- Kanał:

Zadanie:
1) Dla każdej obiekcji stwórz 3 wiadomości:
   - Wiadomość A: empatia + reframe
   - Wiadomość B: edukacja + framework
   - Wiadomość C: dowód + miękkie CTA
2) Każda wiadomość musi zawierać:
   - Hook na start
   - Główną ideę
   - Micro-CTA
3) Zakończ macierzą “co uruchamiać” wg zachowania:
   - otworzył/przeczytał
   - kliknął
   - odpowiedział
   - cisza 14 dni`,
    thumbnail: "",
  },
  {
    id: "mnut-004",
    title:
      "Sekwencja ‘Most’ (5 wiadomości) — przejście z darmowego contentu do oferty bez tarcia",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Płynne przejście z edukacji do sprzedaży: idealne po mini-kursie lub wyzwaniu.",
    prompt: `Uzupełnij:
- Darmowy content, który skonsumowali (webinar, wyzwanie, wideo, lead magnet):
- Obiecana transformacja:
- Oferta:
- Cena:
- Główna wątpliwość kupującego:
- Kanał:

Zadanie:
Stwórz 5 wiadomości:
1) Podsumowanie nauki + “czego brakuje” (gap).
2) Diagnoza: pytania do autokwalifikacji (styl checkbox).
3) Case/przykład z detalami procesu.
4) Główna obiekcja + odpowiedź.
5) Jasne zaproszenie do oferty (CTA) + “dla kogo tak / dla kogo nie”.
Dodaj:
- 3 wersje finalnego CTA (miękkie, bezpośrednie, premium)
- Krótki skrypt odpowiedzi, gdy ktoś napisze: “jestem zainteresowany/a, powiedz więcej”.`,
    thumbnail: "",
  },
  {
    id: "mnut-005",
    title:
      "Evergreen nurturing (12 tygodni) — kalendarz tematów i inteligentne powtórki",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Projektuje evergreen system nurturingu, który nie zależy od launchy.",
    prompt: `Uzupełnij:
- Oferta:
- ICP:
- Częstotliwość (maile/tydzień lub wiadomości/tydzień):
- 5 filarów treści (edukacja, dowód, autorytet, obiekcje, oferta):
- Sezonowość (jeśli dotyczy):

Zadanie:
1) Stwórz kalendarz na 12 tygodni z:
   - tematem tygodnia
   - celem tygodnia
   - 2–3 materiałami w tygodniu (tytuł + streszczenie + CTA)
2) Zdefiniuj “reguły powtórzeń”: co reuse’ować i jak często, żeby nie męczyć.
3) Zdefiniuj segmentację intencji (3 poziomy) i jakie treści widzi każdy poziom.
4) Zdefiniuj 6 automatycznych triggerów (wizyta pricing, klik CTA, reply itd.) i jaka sekwencja uruchamia się po każdym triggerze.`,
    thumbnail: "",
  },

  {
    id: "mnut-006",
    title:
      "Nurturing dla B2B (MQL → SQL) — sekwencja 9 maili nastawiona na rozmowę",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja konsultacyjna, która przesuwa leady do call: podejście, dowód i autokwalifikacja.",
    prompt: `Uzupełnij:
- Usługa B2B:
- ICP (branża, wielkość):
- Rola docelowa:
- Problem główny:
- KPI, na który wpływacie:
- Oferta wejściowa (audit/diagnoza):
- Kanał: email

Zadanie:
Stwórz 9 emaili:
- Temat: 4 opcje na email (bez spamwords)
- Struktura:
  1) Insight o problemie + koszt
  2) Typowy błąd na rynku
  3) Framework (3 kroki)
  4) Case/mini-case (z disclaimerami)
  5) Obiekcja: “mamy już dostawcę”
  6) Obiekcja: “nie ma budżetu”
  7) Checklista oceny (jak wybrać dostawcę)
  8) Zaproszenie do diagnozy (miękkie CTA)
  9) Ostatni email: elegancki “breakup”
Dodaj:
- 10 pytań kwalifikacyjnych do rozmowy
- 6 odpowiedzi na obiekcje w reply`,
    thumbnail: "",
  },
  {
    id: "mnut-007",
    title:
      "Nurturing dla eCommerce — post-purchase, który buduje ponowny zakup (10 wiadomości)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja po zakupie: onboarding, użycie, wartość, opinie, cross-sell i repurchase.",
    prompt: `Uzupełnij:
- Produkt:
- Oczekiwane użycie (jak się używa):
- Obiekcje po zakupie:
- Dodatki (cross-sell):
- Okno ponownego zakupu:
- Kanały (email/whatsapp):

Zadanie:
Stwórz 10 wiadomości:
1) Potwierdzenie + jasne oczekiwania
2) Jak używać w 5 krokach
3) Typowe błędy i jak ich unikać
4) Pro tipy + “moment aha”
5) Historia klienta (realne użycie)
6) FAQ
7) Prośba o opinię (bez presji)
8) Cross-sell (edukacyjnie, nie agresywnie)
9) Ponowny zakup (opcjonalny bodziec)
10) Re-engagement, jeśli nie otwierają/nie czytają
Dodaj segmentację wg zachowania (otworzył/kliknął/nie).`,
    thumbnail: "",
  },
  {
    id: "mnut-008",
    title:
      "Nurturing przez ‘mikro-zobowiązania’ — 14 dni do działania bez sprzedawania",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja mikro-zobowiązań zwiększająca zaufanie, odpowiedzi i aktywację.",
    prompt: `Uzupełnij:
- Oferta końcowa:
- Typ prospekta:
- Główne tarcie psychologiczne (strach, wątpliwość, lenistwo):
- Kanał:

Zadanie:
Stwórz plan na 14 dni, gdzie każdy dzień ma:
- Mikro-cel (prosta czynność)
- Treść wiadomości (krótka, ale celowa)
- Pytanie końcowe do odpowiedzi
- Etykieta/segment, jeśli odpowiedzą “tak/nie”
Cel: na końcu mają być gotowi na ofertę, bez wrażenia sprzedaży.`,
    thumbnail: "",
  },
  {
    id: "mnut-009",
    title:
      "Nurturing narracyjny (story arc) — 6 maili, które opowiadają historię i sprzedają",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Storytelling w odcinkach: konflikt, lekcje, dowód i CTA.",
    prompt: `Uzupełnij:
- Bohater (Ty/klient/avatar):
- Konflikt:
- Punkt zwrotny:
- Metoda:
- Rezultat (bez obietnic):
- Oferta:
- Kanał:

Zadanie:
Napisz serię 6 emaili:
1) “Przed” (realna sytuacja i ból)
2) “Błąd” (co nie działało)
3) “Insight” (odkrycie)
4) “Metoda” (framework)
5) “Dowód” (mini-case, lekcje)
6) “Zaproszenie” (CTA + dla kogo tak/nie)
Dodaj 3 tematy na email i 2 alternatywne CTA.`,
    thumbnail: "",
  },
  {
    id: "mnut-010",
    title:
      "Nurturing edukacyjny (mini-kurs email) — 5 lekcji + finalna ewaluacja",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Mini-kurs, który uczy systemu i naturalnie kończy się dopasowaną ofertą.",
    prompt: `Uzupełnij:
- Temat mini-kursu:
- ICP:
- Wynik (czego się nauczą):
- Powiązana oferta:
- Kanał:

Zadanie:
Stwórz:
- Email 0 (powitanie + oczekiwania)
- 5 lekcji (każda z ćwiczeniem i przykładem)
- Email finałowy (ocena: check gotowości + CTA)
Dodaj:
- checklistę do wydruku (w tekście)
- pytania do autoewaluacji (10)
- segmentację wg score (0–3, 4–7, 8–10) i jakie CTA dać każdej grupie.`,
    thumbnail: "",
  },

  {
    id: "mnut-011",
    title:
      "Nurturing ‘problem → przyczyna źródłowa → rozwiązanie’ — 12 materiałów na 4 tygodnie",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Plan tygodniowy z inteligentną powtarzalnością: problem, root cause, rozwiązanie i dowód.",
    prompt: `Uzupełnij:
- Główny problem ICP:
- Przyczyny źródłowe (3):
- Rozwiązanie (Twoja metoda):
- Oferta:
- Kanał:

Zadanie:
Stwórz 12 materiałów (4 tygodnie × 3):
- Tydzień 1: problem (3 materiały, różne kąty)
- Tydzień 2: przyczyny źródłowe
- Tydzień 3: rozwiązanie (framework)
- Tydzień 4: dowód + obiekcje + CTA
Każdy materiał ma zawierać:
- Hook
- Główną ideę
- Micro-CTA
- Idealny segment (zimny/ciepły/gorący).`,
    thumbnail: "",
  },
  {
    id: "mnut-012",
    title:
      "Nurturing dla ‘ciekawskich’ leadów (niegotowych) — zamień ciekawość w intencję",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja dla leadów z ciekawości: zwiększa ból/jasność i przesuwa do działania.",
    prompt: `Uzupełnij:
- Oferta:
- Lead magnet:
- Sygnały ciekawości (mała pilność):
- Kanał:

Zadanie:
Stwórz 8 wiadomości:
- 2 edukacyjne (typowe błędy)
- 2 diagnostyczne (pytania identyfikujące)
- 2 dowodowe (case / evidence)
- 1 na obiekcję “to nie moment”
- 1 z CTA na mały krok (audit/poradnik/krótki call)
Dodaj wersje: ton miękki vs bezpośredni.`,
    thumbnail: "",
  },
  {
    id: "mnut-013",
    title:
      "Nurturing dla leadów, które szybko pytają o cenę — nie pozwól, by cena była jedynym filtrem",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja, gdy pytają o cenę zanim zrozumieją wartość: reframe, opcje i kwalifikacja.",
    prompt: `Uzupełnij:
- Oferta:
- Cena/przedział:
- Typowe rezultaty (bez obietnic):
- Wyróżnik:
- Kanał (WhatsApp/DM/email):

Zadanie:
1) Napisz 6 wiadomości nurturingowych (krótkich, ale mocnych), które:
   - ustawiają kontekst wartości
   - zadają 2–3 pytania kwalifikujące
   - pokazują opcje (starter/mid/premium)
   - oferują mały krok (diagnoza)
2) Dodaj 10 szybkich odpowiedzi na:
   - “drogo”
   - “pomyślę”
   - “wyślij info”
   - “masz rabat?”.`,
    thumbnail: "",
  },
  {
    id: "mnut-014",
    title:
      "Nurturing dla no-show (spotkanie umówione, ale nie przyszli) — odzyskaj bez gonienia",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja ratunkowa dla no-show: empatia, wartość, re-book i elegancka dyskwalifikacja.",
    prompt: `Uzupełnij:
- Usługa:
- Typ rozmowy:
- Kalendarz:
- Typowe obiekcje:
- Kanał:

Zadanie:
Stwórz 6 wiadomości:
1) “Wszystko OK” + propozycja przełożenia (miękko)
2) Resource drop (checklista/poradnik)
3) Pytanie o priorytet (tak/nie)
4) Reframe kosztu nierozwiązania
5) Alternatywa (15 min / audit)
6) Elegancki breakup
Dodaj 2 wersje per wiadomość: formalna i bliska.`,
    thumbnail: "",
  },
  {
    id: "mnut-015",
    title:
      "Nurturing porzuconych koszyków — 5 wiadomości z psychologią (bez desperacji)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja porzuceń: tarcie, zaufanie, FAQ, social proof i CTA.",
    prompt: `Uzupełnij:
- Produkt:
- Cena:
- Powody porzucenia (dostawa, zaufanie, czas):
- Bodziec (opcjonalnie):
- Kanał:

Zadanie:
Stwórz 5 wiadomości:
1) Przypomnienie + główna korzyść
2) Proste pytanie (co Cię zatrzymało?)
3) Główna obiekcja + odpowiedź
4) Social proof + case (bez przesady)
5) Ostatnie wezwanie + etyczna pilność (realny deadline)
Dodaj:
- 10 szybkich odpowiedzi, jeśli odpiszą
- segmentację: otworzył, ale nie kupił vs nie otworzył.`,
    thumbnail: "",
  },

  {
    id: "mnut-016",
    title:
      "Nurturing przez ‘dowód społeczny’ — 8 historii klientów (szablony) do rotacji",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Szablony case’ów bez zmyślania: kontekst, tarcie, proces, lekcja i CTA.",
    prompt: `Uzupełnij:
- Oferta:
- Typy klientów:
- Typowe rezultaty (jakościowe lub ilościowe):
- Kanał:

Zadanie:
Stwórz 8 szablonów historii w strukturze:
- Kontekst klienta (bez danych wrażliwych)
- Problem i koszt
- Co próbowali wcześniej
- Co zrobiliśmy (proces)
- Rezultat (z disclaimerami)
- Lekcja do zastosowania dla każdego
- Miękkie CTA
Dodaj warianty: per branża/rola (B2B) lub per sytuacja (B2C).`,
    thumbnail: "",
  },
  {
    id: "mnut-017",
    title:
      "Nurturing z ‘bridge contentem’ — jaki zasób wysłać w zależności od etapu leada",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "System zasobów pomostowych: co wysłać, kiedy i w jakim celu.",
    prompt: `Uzupełnij:
- Oferta:
- 6 dostępnych zasobów (wideo, poradniki, case’y):
- Etapy leada:
- Kanał:

Zadanie:
1) Stwórz mapę:
   - Zimny lead → zasób A (cel)
   - Ciepły lead → zasób B
   - Gorący lead → zasób C
2) Dla każdego zasobu:
   - wiadomość wysyłki
   - micro-CTA
   - jaka etykieta, jeśli skonsumują
3) Zaprojektuj 6 triggerów (akcje użytkownika) i jaki zasób/flow uruchamia każdy trigger.`,
    thumbnail: "",
  },
  {
    id: "mnut-018",
    title:
      "Nurturing dla ‘cichych’ leadów — reaktywacja bez sprzedawania (7 dni re-engagement)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja reaktywacji: ciekawość, wartość, ankieta, porządki i finalne CTA.",
    prompt: `Uzupełnij:
- Nieaktywny segment (czas):
- Oferta:
- Najmocniejszy zasób:
- Kanał:

Zadanie:
Stwórz 7 wiadomości:
1) “Wciąż w tym jesteś?” (ludzko)
2) Quick win w 3 krokach
3) Pytanie diagnostyczne (wybierz A/B)
4) Krótki case / dowód
5) Ankieta (co Cię interesuje)
6) Miękka oferta (mały krok)
7) “Jeśli to nie dla Ciebie, daj znać — usunę” (higiena)
Dodaj:
- 3 wersje tematów/hooków na wiadomość.`,
    thumbnail: "",
  },
  {
    id: "mnut-019",
    title:
      "Nurturing dla leadów, które powiedziały ‘później’ — follow-up 30/60/90 dni",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Długi follow-up: wartość, check-in, dowody i okresowa reaktywacja.",
    prompt: `Uzupełnij:
- Oferta:
- Typowy powód “później” (pieniądze/czas/prioritet):
- Kanał:

Zadanie:
Zaprojektuj system 30/60/90 dni:
- co wysyłać (wartość) i o co pytać (kwalifikacja)
- 2 materiały per checkpoint (edukacyjny i dowodowy)
- miękkie CTA w każdym checkpoint
- reguła: kiedy zamknąć pętlę (breakup)
Dodaj gotowe szablony copy-paste.`,
    thumbnail: "",
  },
  {
    id: "mnut-020",
    title:
      "Nurturing autorytetu — 10 materiałów budujących zaufanie bez przechwałek",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Treści budujące autorytet: insighty, procesy, standardy, kryteria i transparentność.",
    prompt: `Uzupełnij:
- Usługa:
- ICP:
- Prawdziwy wyróżnik:
- Błędy rynku:
- Kanał:

Zadanie:
Stwórz 10 materiałów (wiadomości) z:
- Insightem (czego prawie nikt nie rozumie)
- Mini przykładem
- 1 zasadą/standardem (Twój standard)
- Micro-CTA
Dodaj 2 konkretne materiały:
- “czego nigdy nie robimy i dlaczego”
- “jak myślimy o wynikach i ryzykach”`,
    thumbnail: "",
  },

  {
    id: "mnut-021",
    title:
      "Nurturing ‘pytanie-odpowiedź’ — sekwencja na prawdziwych FAQ (12 wiadomości)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Zamienia FAQ w sekwencję, która edukuje i przybliża do zakupu.",
    prompt: `Uzupełnij:
- Oferta:
- 12 FAQ od ICP:
- Kanał:

Zadanie:
Dla każdego pytania napisz wiadomość, która zawiera:
- Hook: pytanie jako otwarcie
- Jasna odpowiedź (bez natychmiastowej sprzedaży)
- Mini przykład lub analogię
- Micro-CTA (odpowiedz, zobacz zasób itd.)
Zakończ:
- 5 pytaniami kwalifikacyjnymi do wykrycia intencji.`,
    thumbnail: "",
  },
  {
    id: "mnut-022",
    title:
      "Nurturing dla leadów porównujących (konkurencja) — ‘jak wybrać’ bez atakowania",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Konsultacyjny przewodnik dla leadów w ocenie: kryteria, ryzyka, pytania i CTA.",
    prompt: `Uzupełnij:
- Oferta:
- Typowe alternatywy (DIY, agencja, software, konkurencja):
- Kluczowe kryteria:
- Kanał:

Zadanie:
Stwórz 6 wiadomości:
1) “Jak wybrać” (framework 5 kryteriów)
2) Ukryty koszt złego wyboru
3) Pytania do zadania każdemu dostawcy (10)
4) Czerwone flagi (5)
5) Jak pracujemy (skrót procesu)
6) CTA do audytu/diagnozy dopasowania (fit)`,
    thumbnail: "",
  },
  {
    id: "mnut-023",
    title:
      "Nurturing wg ‘poziomów świadomości’ — dopasuj język do świadomości leada",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Wiadomości wg świadomości: problem, rozwiązanie, produkt, najbardziej świadomy.",
    prompt: `Uzupełnij:
- Oferta:
- Problem:
- Mechanizm:
- Kanał:

Zadanie:
1) Zdefiniuj 4 poziomy świadomości leada:
   - nieświadomy
   - świadomy problemu
   - świadomy rozwiązania
   - świadomy produktu
2) Stwórz 3 wiadomości na poziom (12 łącznie), każda z:
   - hookiem
   - główną ideą
   - przykładem
   - micro-CTA
3) Zdefiniuj reguły przejścia na kolejny poziom (akcje/etykiety).`,
    thumbnail: "",
  },
  {
    id: "mnut-024",
    title:
      "Nurturing dla leadów z webinaru — przed, w trakcie, po (łącznie 14 wiadomości)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Kompletny system webinarowy: show-up, engagement, oferta, follow-up.",
    prompt: `Uzupełnij:
- Webinar:
- Oferta:
- Data/godzina:
- Bonusy:
- Obiekcje:
- Kanały:

Zadanie:
Stwórz:
- Pre-webinar: 5 wiadomości (rejestracja → obecność)
- Dzień webinaru: 3 wiadomości (przypomnienia + link)
- Post-webinar: 6 wiadomości (podsumowanie + obiekcje + CTA)
Dodaj segmentację:
- obejrzał do końca
- obejrzał częściowo
- nie był
I osobne copy dla każdej grupy.`,
    thumbnail: "",
  },
  {
    id: "mnut-025",
    title:
      "Nurturing dla leadów z contentu organicznego — od ‘lajka’ do rozmowy",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Wiadomości i pipeline’y, które zamieniają engagement w DM/WhatsApp, a potem w ofertę.",
    prompt: `Uzupełnij:
- Platforma (IG/TikTok/LinkedIn):
- Oferta:
- Słowo-klucz do DM:
- Kanał docelowy (WhatsApp/Calendly):
- Ton:

Zadanie:
1) Zaprojektuj flow 8 wiadomości DM:
   - start (keyword)
   - dostarczenie zasobu
   - pytanie diagnostyczne
   - pogłębienie
   - mikro-wygrana (micro win)
   - obiekcja
   - CTA na mały krok
   - eleganckie zamknięcie
2) Dodaj 12 szybkich odpowiedzi na:
   - “jestem zainteresowany/a”
   - “ile to kosztuje”
   - “nie mam czasu”
   - “pomyślę”`,
    thumbnail: "",
  },

  {
    id: "mnut-026",
    title:
      "Nurturing dla leadów z polecenia — VIP bez nadęcia",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Specjalna sekwencja dla poleconych leadów: szybkie zaufanie, kontekst i CTA.",
    prompt: `Uzupełnij:
- Kto polecił:
- Oferta:
- ICP:
- Kanał:

Zadanie:
Stwórz 6 wiadomości:
1) Podziękowanie + wspomnienie osoby polecającej
2) Kontekst: co robimy i dla kogo
3) Pytania diagnostyczne (3)
4) Krótki case (relewantny do polecenia)
5) Propozycja next step (15 min)
6) Elegancki breakup
Dodaj 2 wersje: formalną i bliską.`,
    thumbnail: "",
  },
  {
    id: "mnut-027",
    title:
      "Nurturing ‘anti-spam’ — plan częstotliwości, higieny i reputacji (dla wrażliwych list)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Jak nurture’ować bez przepalania listy: segmenty, caps, czyszczenie i content.",
    prompt: `Uzupełnij:
- Kanał:
- Wielkość listy:
- Aktualna częstotliwość:
- Skargi/unsubs:
- Oferta:

Zadanie:
1) Zdefiniuj politykę częstotliwości:
   - nowe leady
   - aktywni
   - nieaktywni
2) Zdefiniuj caps: maks. wiadomości/tydzień per segment.
3) Zdefiniuj checklistę deliverability/higieny.
4) Stwórz 8 pomysłów na “value” maile, które zmniejszają skargi.
5) Zdefiniuj plan re-permission (jeśli dotyczy) z gotowym copy.`,
    thumbnail: "",
  },
  {
    id: "mnut-028",
    title:
      "Nurturing ‘score’ — punktacja zachowań i uruchamianie sekwencji",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Prosty lead scoring, który aktywuje oferty zgodnie z intencją.",
    prompt: `Uzupełnij:
- Oferta:
- Trackowalne zdarzenia (open, click, wizyta pricing, reply itd.):
- Kanał:
- CRM/ESP (jeśli dotyczy):

Zadanie:
1) Zdefiniuj model scoringu (0–100):
   - co dodaje punkty i ile
   - co odejmuje
2) Zdefiniuj 3 progi:
   - zimny
   - ciepły
   - gorący
3) Zaprojektuj, jaka sekwencja uruchamia się na każdym progu (skrót).
4) Napisz 6 wiadomości dla “gorących” (konsultacyjna sprzedaż) i 6 dla “zimnych” (edukacja).`,
    thumbnail: "",
  },
  {
    id: "mnut-029",
    title:
      "Nurturing dla ofert high-ticket — buduj wartość, bezpieczeństwo i dopasowanie (10 maili)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja dla wysokiego ticketu: obniża postrzegane ryzyko i poprawia kwalifikację.",
    prompt: `Uzupełnij:
- Oferta high-ticket:
- Cena:
- ICP:
- Postrzegane ryzyka:
- Dowód (referencje/case’y):
- CTA (aplikacja/rozmowa):
- Kanał: email

Zadanie:
Stwórz 10 emaili:
1) Reframe problemu (koszt braku działania)
2) Standardy: co jest wymagane, żeby dowieźć wynik
3) Pełny framework (3–5 kroków)
4) Szczegółowy case (proces > wynik)
5) Obiekcja cena + ROI + alternatywy
6) Obiekcja czas + jak to robimy realnym
7) “Dla kogo NIE jest” (kwalifikacja)
8) FAQ (bezpieczeństwo, wsparcie, timing)
9) Zaproszenie do aplikacji
10) Premium breakup
Dodaj 3 tematy na email i CTA: miękkie vs bezpośrednie.`,
    thumbnail: "",
  },
  {
    id: "mnut-030",
    title:
      "Nurturing dla produktów o niskim ticketcie — podnieś AOV przez ‘value ladder’",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja dla entry offer, która przygotowuje upsell: wartość, nawyk, upgrade.",
    prompt: `Uzupełnij:
- Produkt entry:
- Upsell:
- Cross-sell:
- Okno:
- Kanał:

Zadanie:
Stwórz 8 wiadomości:
- 3 aktywacyjne (użyj i osiągnij quick win)
- 2 edukacyjne (popraw wyniki)
- 2 dowodowe (historie, przykłady)
- 1 upgrade/upsell
Dodaj: segmentację wg wykorzystania produktu.`,
    thumbnail: "",
  },

  {
    id: "mnut-031",
    title:
      "Nurturing przez ‘porównanie przed/po’ — 8 wiadomości z namacalnym kontrastem",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Seria ‘przed vs po’ bez przesady, skupiona na procesie.",
    prompt: `Uzupełnij:
- Oferta:
- Typowe “przed” (ból):
- Oczekiwane “po”:
- Proces:
- Kanał:

Zadanie:
Stwórz 8 wiadomości, każda zawiera:
- “Przed” (1–2 zdania)
- “Po” (1–2 zdania)
- “Co się zmieniło” (konkretna akcja)
- Micro-CTA
Dodaj 2 wiadomości o obiekcjach i 1 finalne zaproszenie.`,
    thumbnail: "",
  },
  {
    id: "mnut-032",
    title:
      "Nurturing typu newsletter (tygodniowy) — 12 wydań ze stałą strukturą",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Newsletter, który edukuje i sprzedaje bez saturacji: 12 edycji z sekcjami.",
    prompt: `Uzupełnij:
- Motyw przewodni:
- Oferta:
- Odbiorcy:
- Ton:

Zadanie:
Zaprojektuj 12 wydań:
- Tytuł
- 1 główny insight (streszczenie)
- 1 mini case/historia
- 1 szybka checklista
- Miękkie CTA do zasobu/oferty
Dodaj bazowy szablon do powtarzania i warianty, żeby nie brzmieć identycznie.`,
    thumbnail: "",
  },
  {
    id: "mnut-033",
    title:
      "Nurturing dla ‘darmowej audytu’ — zamień audit w ofertę (pełna sekwencja)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Od prośby o audit do propozycji: follow-up, wartość i domknięcie.",
    prompt: `Uzupełnij:
- Co audytujesz:
- Czas dostarczenia:
- Co zawiera:
- Oferta po audycie:
- Kanał:

Zadanie:
Stwórz:
1) Wiadomość potwierdzająca i ustawiająca oczekiwania (od razu)
2) Wiadomość z prośbą o inputy (checklista)
3) Wiadomość dostarczenia audytu (struktura)
4) Wiadomość “roadmapy” (priorytety)
5) Wiadomość propozycji (CTA do rozmowy)
6) Follow-up 1–3
Dodaj skrypty odpowiedzi na: “przejrzę” oraz “za drogo”.`,
    thumbnail: "",
  },
  {
    id: "mnut-034",
    title:
      "Nurturing przez ‘pytania diagnostyczne’ — sekwencja sokratyczna (8 wiadomości)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Wiadomości oparte na pytaniach, dzięki którym lead sam się przekonuje.",
    prompt: `Uzupełnij:
- Oferta:
- ICP:
- Ból:
- Kanał:

Zadanie:
Stwórz 8 wiadomości, w których rdzeniem jest jedno mocne pytanie.
Zasady:
- 1 główne pytanie na wiadomość
- dodaj krótki kontekst (2–3 linie)
- zakończ micro-CTA (odpowiedz A/B lub liczbą)
Dodaj “drzewko odpowiedzi”: jeśli odpowiedzą A, jaki follow-up; jeśli B — jaki.`,
    thumbnail: "",
  },
  {
    id: "mnut-035",
    title:
      "Nurturing ‘dowód techniczny’ — pokaż kompetencje bez przytłaczania (B2B)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja pokazująca rigor: procesy, standardy, przykłady i limity.",
    prompt: `Uzupełnij:
- Usługa:
- ICP:
- 5 decyzji technicznych w usłudze:
- Typowe błędy rynku:
- Kanał:

Zadanie:
Stwórz 7 wiadomości:
- Każda wyjaśnia 1 decyzję techniczną: co to jest, czemu ma znaczenie, jak to robimy, gdzie typowo się to psuje.
- Dodaj mini przykład i “jeśli chcesz, podeślę szablon”.
- Finalne CTA do diagnozy lub workshopu.`,
    thumbnail: "",
  },

  {
    id: "mnut-036",
    title:
      "Nurturing dla leadów z kampanii ‘cena’ — odbuduj wartość (10 wiadomości)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja dla leadów przyciągniętych ceną: podnosi standardy, outcomes i dopasowanie.",
    prompt: `Uzupełnij:
- Oferta:
- Cena:
- Segment (wrażliwi na cenę):
- Wyróżnik:
- Kanał:

Zadanie:
Stwórz 10 wiadomości:
1) Standardy: tanio często wychodzi drogo (z wyczuciem)
2) Co zawiera / czego NIE
3) Jak policzyć proste ROI
4) Case/przykład skupiony na procesie
5) Obiekcja “zrobię sam/a”
6) Tańsza alternatywa (entry), jeśli istnieje
7) “dla kogo tak/nie”
8) Q&A
9) Oferta/CTA
10) Breakup
Dodaj 2 tony: bliski i premium.`,
    thumbnail: "",
  },
  {
    id: "mnut-037",
    title:
      "Nurturing z ‘mini-narzędziami’ — 8 dostaw (szablony/checklisty) budujących wzajemność",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Seria szybkich narzędzi (w tekście), które lead może wdrożyć dziś.",
    prompt: `Uzupełnij:
- Oferta:
- Temat:
- ICP:
- Kanał:

Zadanie:
Stwórz 8 dostaw, każda zawiera:
- narzędzie (szablon/checklista/skrypt)
- wypełniony przykład
- instrukcję “jak użyć”
- micro-CTA
- miękkie CTA do oferty
Bez załączników: wszystko w tekście.`,
    thumbnail: "",
  },
  {
    id: "mnut-038",
    title:
      "Nurturing dla leadów z ‘lękiem przed zobowiązaniem’ — obniż postrzegane ryzyko (7 wiadomości)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja dla ostrożnych buyerów: jasność, kontrola, doświadczenie, małe kroki.",
    prompt: `Uzupełnij:
- Oferta:
- Postrzegane ryzyko:
- Niskoryzykowna alternatywa (audit/pilot):
- Kanał:

Zadanie:
Stwórz 7 wiadomości:
- uznaj obawy
- pokaż małe kroki
- wyjaśnij kontrolę i checkpointy
- opisz “jak minimalizujemy ryzyko”
- CTA na mały krok
Dodaj 10 szybkich odpowiedzi na obiekcje związane z ryzykiem.`,
    thumbnail: "",
  },
  {
    id: "mnut-039",
    title:
      "Nurturing dla leadów, którzy konsumują content, ale nie działają — ‘niewidzialna bariera’",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja dla lurkerów: z pasywnego konsumowania do małych działań, potem CTA.",
    prompt: `Uzupełnij:
- Oferta:
- Sygnał: konsumują, ale nie odpowiadają
- Kanał:

Zadanie:
Stwórz 8 wiadomości:
1) “jeśli obserwujesz w ciszy…”
2) proste pytanie diagnostyczne
3) quick win krok po kroku
4) obiekcja “nie jestem konsekwentny/a”
5) dowód (historia)
6) 3 błędy, przez które nie idą do przodu
7) mały krok (audit/check)
8) finalne CTA
Dodaj etykiety wg zachowania.`,
    thumbnail: "",
  },
  {
    id: "mnut-040",
    title:
      "Zestaw nurturingowy: 20 ‘micro-CTA’ i kiedy ich używać",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Komplet micro-CTA, które zwiększają reply, kliknięcia i sygnały intencji.",
    prompt: `Kontekst:
- Kanał (email/whatsapp/dm):
- Oferta:
- Etapy lejka:

Zadanie:
1) Stwórz 20 micro-CTA pogrupowanych per etap:
   - zimny (ciekawość)
   - ciepły (rozważanie)
   - gorący (intencja)
2) Dla każdego micro-CTA:
   - gotowy przykład tekstu do skopiowania
   - jaka etykieta/segment, jeśli zareagują
3) Zdefiniuj 6 reguł: jakie micro-CTA stosować wg zachowania leada.`,
    thumbnail: "",
  },

  {
    id: "mnut-041",
    title:
      "Nurturing dla upsellu B2B — od ‘projektu’ do ‘retaineru’ (8 wiadomości)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja po projekcie, która prowadzi do retaineru: osiągnięcia, roadmap i ryzyko przerwania.",
    prompt: `Uzupełnij:
- Zrealizowana usługa:
- Rezultat/postęp:
- Co zostało do zrobienia:
- Propozycja retaineru:
- Kanał:

Zadanie:
Stwórz 8 wiadomości:
1) Podsumowanie tego, co dowieźliśmy
2) “Co dalej” (roadmap)
3) Ryzyko zatrzymania (bez straszenia, logicznie)
4) Nowe możliwości, które wykryliśmy
5) ROI ciągłości
6) Zasady współpracy (kadencja)
7) Jasna propozycja (CTA)
8) Elegancki breakup`,
    thumbnail: "",
  },
  {
    id: "mnut-042",
    title:
      "Nurturing segmentami (3 sekwencje) — ten sam produkt, 3 różne profile",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "3 mini-sekwencje (po 5 wiadomości) dla różnych segmentów ICP.",
    prompt: `Uzupełnij:
- Produkt:
- Segment A:
- Segment B:
- Segment C:
- Różnice (ból, język, priorytet):
- Kanał:

Zadanie:
1) Dla każdego segmentu stwórz sekwencję 5 wiadomości:
   - edukacja
   - diagnoza
   - case
   - obiekcja
   - CTA
2) Upewnij się, że:
   - zmienia się słownictwo
   - zmienia się dowód
   - dopasowuje się CTA (demo/call/checkout)
3) Dodaj reguły wykrywania, do którego segmentu należy lead.`,
    thumbnail: "",
  },
  {
    id: "mnut-043",
    title:
      "Nurturing dla ofert z listą oczekujących — utrzymaj zainteresowanie do otwarcia sprzedaży",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Plan dla waitlisty: oczekiwanie, wartość, dowód, sneak peeks i przejście do otwarcia.",
    prompt: `Uzupełnij:
- Oferta:
- Data otwarcia:
- Bonus/korzyść za czekanie:
- Kanał:

Zadanie:
Stwórz 12 wiadomości na listę oczekujących:
- 4 edukacyjne (realna wartość)
- 3 sneak peeks (co jest w środku)
- 2 social proof
- 2 obiekcje
- 1 powiadomienie o otwarciu (CTA)
Dodaj “kalendarz” tygodniowy i reguły częstotliwości.`,
    thumbnail: "",
  },
  {
    id: "mnut-044",
    title:
      "Nurturing ‘czego nikt Ci nie powie’ — 10 anty-kliszowych materiałów (autorytet i prawda)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Wiadomości autorytetu oparte na niewygodnych prawdach (bez arogancji).",
    prompt: `Uzupełnij:
- Nisza:
- Oferta:
- Kłamstwa/klisze rynku:
- Ton:

Zadanie:
Stwórz 10 wiadomości:
- Hook: “czego nikt Ci nie powie…”
- Wyjaśnienie z logiką + przykład
- Co zrobić inaczej (krok 1–2)
- Micro-CTA
Dodaj 5 komentarzy/odpowiedzi gotowych na hejterów/sceptyków.`,
    thumbnail: "",
  },
  {
    id: "mnut-045",
    title:
      "Nurturing z ‘mini-audytem w wiadomości’ — 6 promptów do analizy sytuacji leada",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Wiadomości, które proszą o minimum danych i odsyłają mini-diagnozę (wzajemność).",
    prompt: `Uzupełnij:
- Usługa:
- Minimalne dane, których potrzebujesz (3–5):
- Kanał:

Zadanie:
Stwórz 6 wiadomości typu:
1) Prośba o 3 dane (bardzo prosto)
2) Mini-diagnoza (stała struktura)
3) Rekomendacja 1 akcji (quick win)
4) Pytanie kwalifikacyjne
5) Propozycja pełnego audytu (CTA)
6) Miękki follow-up
Dodaj wersję WhatsApp i wersję Email.`,
    thumbnail: "",
  },

  {
    id: "mnut-046",
    title:
      "Nurturing dla klientów, którzy kupili coś innego — cross-sell przez rezultaty, nie katalog",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Sekwencja oferująca komplementarny produkt na bazie postępu klienta.",
    prompt: `Uzupełnij:
- Kupiony produkt:
- Oczekiwany postęp:
- Idealny dodatek:
- Sygnały gotowości (readiness):
- Kanał:

Zadanie:
Stwórz 7 wiadomości:
- 3 o postępie (świętowanie + prowadzenie)
- 2 o typowych blokadach + rozwiązanie
- 1 rekomendacja dodatku (miękkie CTA)
- 1 domknięcie: “jeśli pomoże, wspieram Cię w X”
Dodaj segmentację wg zachowania.`,
    thumbnail: "",
  },
  {
    id: "mnut-047",
    title:
      "Nurturing ‘dowód kompetencji’ — 5 analiz case’ów (w stylu ‘pokażę Ci jak myślę’)",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Wiadomości, w których analizujesz case (anonimowy/hipotetyczny), by pokazać kryterium.",
    prompt: `Uzupełnij:
- Oferta:
- Typowe rodzaje case’ów:
- KPI:
- Kanał:

Zadanie:
Stwórz 5 analiz (dłuższe wiadomości) z:
- Kontekstem case’u
- Diagnozą (3 wnioski)
- Priorytetami (top 3)
- Co zrobił(a)bym w 7 dni
- Co bym mierzył(a)
- CTA: “jeśli chcesz, spojrzę na Twój”
Dodaj 2 CTA: DM i call.`,
    thumbnail: "",
  },
  {
    id: "mnut-048",
    title:
      "Nurturing z ‘mini-wyzwaniami’ — 4 tygodniowe wyzwania aktywizujące leady",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Wyzwanie 4-tygodniowe (1 wyzwanie/tydzień) z instrukcjami i follow-upami w wiadomościach.",
    prompt: `Uzupełnij:
- Temat wyzwania:
- Oferta:
- Kanał:

Zadanie:
Stwórz plan na 4 tygodnie:
- Tydzień 1–4: wyzwanie (konkretne zadanie), przykład, checklista
- Wiadomość startowa + 2 follow-upy w tygodniu
- Tygodniowa wiadomość zamykająca z refleksją i miękkim CTA
Dodaj: jak nagradzać (bez obowiązkowych prezentów) i jak segmentować wg udziału.`,
    thumbnail: "",
  },
  {
    id: "mnut-049",
    title:
      "Nurturing ‘etyczne domknięcie’ — 6 finalnych wiadomości, by konwertować bez nacisku",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Finalna sekwencja przed sprzedażą: jasność, dla kogo jest/nie jest, i prawdziwa pilność.",
    prompt: `Uzupełnij:
- Oferta:
- Prawdziwy deadline (jeśli jest):
- Bonus:
- Gwarancja (jeśli jest):
- Kanał:

Zadanie:
Stwórz 6 wiadomości:
1) Przypomnienie wartości (recap)
2) “dla kogo tak / dla kogo nie”
3) Case/przykład (proces i lekcja)
4) Główna obiekcja (odpowiedź)
5) Checklista decyzji (autokwalifikacja)
6) Ostatnie wezwanie (etyczna pilność) + opcjonalny breakup
Dodaj 2 wersje: ciepłą i bezpośrednią.`,
    thumbnail: "",
  },
  {
    id: "mnut-050",
    title:
      "Kompletny system nurturingu (Playbook) — reguły, segmenty, treści, triggery, metryki",
    area: "Marketing i sprzedaż",
    category: "Nurturing",
    summary:
      "Kompletny playbook wdrożenia nurturingu: architektura, automatyzacje, kalendarz i KPI.",
    prompt: `Uzupełnij:
- Oferta:
- ICP:
- Kanały (email/whatsapp/dm):
- Aktywa (lead magnets, case’y, webinary):
- Ograniczenia (częstotliwość, compliance):
- Metryka północna (NSM): leady, sprzedaż, rozmowy itd.

Zadanie:
Zbuduj playbook gotowy do wdrożenia, który zawiera:
1) Architekturę segmentów (3–5 segmentów) z konkretnymi kryteriami.
2) Mapę sekwencji (jaką sekwencję widzi każdy segment).
3) Triggery (min. 10) i jaką automatyzację uruchamia każdy trigger.
4) Bibliotekę treści (min. 25 pomysłów) skategoryzowanych na:
   - edukacja
   - dowód
   - obiekcje
   - oferta
5) Reguły częstotliwości i caps anti-fatigue.
6) Scoreboard (max 12 metryk) z progami.
7) Rytuały operacyjne: co sprawdzać codziennie/tygodniowo/miesięcznie.
8) Checklistę wdrożenia (narzędzia, tagi, UTM-y, tracking).
Format: sekcje z nagłówkami + listy akcyjne.`,
    thumbnail: "",
  },
];
