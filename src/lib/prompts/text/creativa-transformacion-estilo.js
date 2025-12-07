// src/lib/prompts/text/creativa-transformacion-estilo.js

export const textPromptsCreativaTransformacionEstilo = [
  {
    id: "crea-est-001",
    title: "Całkowite przepisanie: 1 tekst, 12 stylów (z przewodnikiem spójności)",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przekształć tekst bazowy na 12 różnych stylów, zachowując znaczenie i wzmacniając głos.",
    prompt: `Wklej tutaj swój tekst bazowy (100–400 słów) i powiedz:
1) Odbiorca (kto to przeczyta).
2) Cel (poruszyć, sprzedać, wyjaśnić, sprowokować).
3) Dominująca emocja (i jedna ukryta emocja).
4) 5 słów zakazanych (klisze, których nie chcesz).
5) Poziom dosadności (0–10).

Zadanie:
A) Wyciągnij „rdzeń” tekstu w 5 punktach (czego NIE wolno zmienić).
B) Zidentyfikuj obecny głos: rytm, rejestr, metafory, dystans emocjonalny (krótka diagnoza).
C) Przepisz tekst w tych 12 stylach (każda wersja 150–250 słów):
  1) Minimalistyczny (krótkie linijki, twarde cięcia)
  2) Liryczno-kinematograficzny (obrazy zmysłowe)
  3) Noir (głos z offu, ironia)
  4) Suchy humor (deadpan)
  5) Brudny realizm (konkret, szorstko)
  6) Dojrzały romantyzm (ciepło, bez słodzenia)
  7) Subtelny horror (napięcie, sugestia)
  8) Intymne sci-fi (technologiczna metafora)
  9) Elegancka fantasy (poetyckie reguły)
 10) Esej osobisty (bezpośrednia szczerość)
 11) Bajka dla dzieci (prosto, symbolicznie)
 12) List wyznaniowy (podtekst)

D) Do każdej wersji dodaj:
- 1 zdanie „podpis” (najlepsza linijka).
- 3 decyzje stylu (dlaczego brzmi tak, a nie inaczej).
- 1 ryzyko (gdzie może „przegiąć”).

Na koniec:
- Poleć najlepszy styl pod cel i powiedz, jak połączyć 2 style bez psucia spójności.`,
    thumbnail: "",
  },
  {
    id: "crea-est-002",
    title: "Klon stylu: naśladuj „głos” bez kopiowania (odcisk językowy)",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Naśladuj cechy stylu (rytm, składnię, obrazy) autora/głosu bez powielania dosłownej treści.",
    prompt: `Podaj:
- Autora/głos referencyjny (albo opisz głos: „krótkie zdania, cynizm, miejskie metafory…”).
- Temat tekstu do napisania.
- Format (opowiadanie, wiersz, monolog, scena).
- Długość (300–900 słów).
- 6 słów, które MUSZĄ się pojawić.

Zadanie:
1) Zdefiniuj „odcisk stylu” w 10 obserwowalnych regułach, np.:
   - Średnia długość zdania
   - Typ metafory (konkretna/abstrakcyjna)
   - Poziom ironii
   - Użycie pytań
   - Rytm (cięcia, powtórzenia)
2) Napisz tekst, spełniając 10 reguł.
3) Potem stwórz wersję „jeszcze bardziej twoją”:
   - Zachowaj 6 reguł
   - Złam 4 reguły celowo

Na koniec:
- Lista 8 cech, które udało ci się naśladować bez kopiowania treści.`,
    thumbnail: "",
  },
  {
    id: "crea-est-003",
    title: "Chirurgiczna zmiana tonu: ten sam tekst, 6 tonów z tym samym przekazem",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz, zmieniając ton bez zmiany idei: przydatne do dopasowania do odbiorców.",
    prompt: `Wklej tekst bazowy i powiedz:
- Odbiorca (A) i odbiorca (B).
- Emocja, której NIE wolno stracić.
- Pożądany poziom formalności (0–10).

Przepisz tekst w 6 tonach (po 150–300 słów każdy):
1) Spokojny i dojrzały
2) Pilny i napięty (bez przesady)
3) Elegancko ironiczny
4) Czuły i intymny
5) Umiarkowany czarny humor
6) Minimalistyczny i miażdżący

Do każdej wersji dodaj:
- „Nasiona” tonu: 5 słów/środków, których użyłeś/-aś.
- 1 alternatywna linijka zamknięcia.

Na koniec:
- Poleć, której użyć dla (A), a której dla (B) i dlaczego.`,
    thumbnail: "",
  },
  {
    id: "crea-est-004",
    title: "Kreatywne tłumaczenie: z prozy w wiersz i z wiersza w prozę",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zamień tekst w wiersz (wolny) i wróć do prozy, nie tracąc duszy.",
    prompt: `Wklej swój tekst (120–400 słów) i podaj:
- Temat
- Ton
- 3 obowiązkowe obrazy
- Słowa zakazane (3–8)

Zrób:
A) Wyodrębnij 12 „obrazów-rdzeni” (frazy lub detale wizualne).
B) Zamień tekst w wiersz wolny (28–42 wersy):
   - 5 zmysłów
   - 3 celowe powtórzenia
   - zwrot w połowie (ujawnienie)
C) Zamień wiersz w prozę poetycką (350–600 słów):
   - krótkie akapity
   - muzykalność
   - pamiętne zakończenie (maks. 12 słów)

Na koniec:
- Wyjaśnij, co zyskało i co straciło każde przekształcenie (5 punktów).`,
    thumbnail: "",
  },
  {
    id: "crea-est-005",
    title: "Od kliszy do obrazu: przepisanie anty-frazowe (poziom pro)",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Wykrywa klisze i zastępuje je oryginalnymi obrazami zakotwiczonymi w przedmiotach/działaniach.",
    prompt: `Wklej swój tekst i powiedz:
- Jaki typ klisz najbardziej cię drażni (motywacyjne, romantyczne, dramatyczne, korporacyjne).
- Docelowy ton.

Zadanie:
1) Zaznacz (na liście) wszystkie zdania ogólne lub abstrakcyjne (minimum 10, jeśli są).
2) Dla każdego:
   - wyjaśnij, czemu to klisza (1 linijka)
   - zaproponuj 3 zamienniki z konkretnym obrazem (przedmiot/działanie/scena)
3) Przepisz cały tekst:
   - 70% konkretu, maks. 30% abstraktu
   - mocne czasowniki
   - nowe metafory (minimum 3)

Na koniec:
- Checklista anty-klisz do użycia w przyszłych tekstach (12 punktów).`,
    thumbnail: "",
  },
  {
    id: "crea-est-006",
    title: "Zmiana POV: pierwsza, druga, trzecia osoba i niewiarygodny narrator",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisanie z różnych perspektyw, by zmienić intymność, napięcie i tajemnicę.",
    prompt: `Wklej scenę lub tekst (200–600 słów) i powiedz:
- Co musi zostać takie samo (3 rzeczy).
- Co chcesz wzmocnić (intymność, tajemnica, napięcie, humor).
- Sekret, którego nie wolno ujawnić do końca.

Przepisz w 4 perspektywach:
1) 1. osoba (intymnie, wyznaniowo)
2) 2. osoba (oskarżycielsko albo czule)
3) 3. osoba ograniczona (blisko protagonisty)
4) Niewiarygodny narrator (zniekształca i sobie przeczy)

Dla każdej wersji:
- 1 linijka „podpis”
- 3 kluczowe zmiany (co zrobiłeś/-aś inaczej)
- 1 ryzyko

Na koniec:
- Poleć idealny POV zgodnie z tym, co chcesz wzmocnić.`,
    thumbnail: "",
  },
  {
    id: "crea-est-007",
    title: "Brutalne skracanie: 900 → 300 → 100 → 30 słów (bez utraty esencji)",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Redukuj tekst warstwami, zachowując rdzeń — idealne dla rytmu i precyzji.",
    prompt: `Wklej swój tekst (600–1200 słów) i powiedz:
- Główny przekaz (1 zdanie)
- Główna emocja
- 5 zdań/idei, które nie mogą zniknąć

Zrób 4 wersje:
A) 300–350 słów (czysta, bezpośrednia)
B) 100–120 słów (zwarta i mocna)
C) 30–40 słów (emocjonalny cios)
D) 1 zdanie (maks. 12 słów) jako zamknięcie/aforyzm

Przy każdej redukcji wyjaśnij:
- Co usunąłeś/-aś i dlaczego
- Co zachowałeś/-aś (rdzeń)
- Jakiego środka użyłeś/-aś, by utrzymać emocje

Na koniec:
- Daj 10 tytułów/zamknięć opartych na wersji 30–40 słów.`,
    thumbnail: "",
  },
  {
    id: "crea-est-008",
    title: "Wzmacnianie: 150 słów → 900 (głębia, warstwy, podtekst)",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Rozwiń krótki tekst w długi bez lania wody, dodając sceny, symbole i rytm.",
    prompt: `Wklej swój krótki tekst (80–200 słów) i powiedz:
- Miejsce
- Postać/-cie
- 1 centralny symbol
- Ukryta emocja
- Czego NIE chcesz (bez melodramatu / bez wulgarności / itp.)

Zadanie:
1) Diagnoza: czego brakuje, by to poczuć (detale zmysłowe, konflikt, rytm, podtekst).
2) Rozwinięcie do 700–1000 słów:
   - dodaj 2 konkretne sceny
   - dodaj 5 detali zmysłowych na scenę
   - wprowadź 1 zwrot w połowie
   - wpleć symbol 4 razy (zmieniając znaczenie)
3) Finał: pamiętne zdanie (maks. 12 słów)

Potem:
- Lista 12 „konkretnych detali”, które podnoszą tekst (do kopiuj-wklej).`,
    thumbnail: "",
  },
  {
    id: "crea-est-009",
    title: "Transmutacja gatunku: dramat → thriller / romans → horror / itd.",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zmień gatunek, zachowując postać i temat; przestaw napięcie i sceny.",
    prompt: `Podaj:
- Tekst lub synopsę bazową (150–400 słów).
- Obecny gatunek.
- Docelowy gatunek.
- Temat, który musi pozostać.
- 2 sceny, które muszą przetrwać (choć mogą się zmienić).

Zadanie:
A) Zidentyfikuj „silnik” obecnego gatunku (co sprawia, że działa).
B) Zdefiniuj „silnik” gatunku docelowego (napięcie, tajemnica, pragnienie itd.).
C) Przepisz synopsę, a potem napisz 2 kluczowe sceny (po 2–4 strony każda):
   - Scena 1: nowe otwarcie w gatunku docelowym
   - Scena 2: kulminacja dopasowana do gatunku docelowego

Na koniec:
- Tabela: element oryginalny → odpowiednik w nowym gatunku (8–12 wierszy).`,
    thumbnail: "",
  },
  {
    id: "crea-est-010",
    title: "Chirurgia rytmu: muzykalność, kadencja i oddech tekstu",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Popraw rytm: zmienność zdań, cięcia, powtórzenia, wariacje i pauzy.",
    prompt: `Wklej swój tekst (200–700 słów) i powiedz:
- Jaka emocja ma prowadzić rytm (napięcie/czułość/pilność).
- Czy będziesz czytać na głos (tak/nie).
- Poziom wysmakowania (prosty / średni / literacki).

Zadanie:
1) Analiza rytmu: średnia długość zdań, różnorodność, miejsca, gdzie „siada”.
2) Przepisanie z lepszym rytmem:
   - przeplataj krótkie i długie zdania
   - użyj 3 celowych powtórzeń (anafora albo refren)
   - dodaj 2 pauzy dramatyczne (samodzielna linijka)
   - usuń wypełniacze i powtórzenia znaczeń
3) Wersja „voice-over” (jeśli dotyczy): 160–220 słów z mówionym rytmem.

Na koniec:
- 10 zasad rytmu, które mogę stosować zawsze.`,
    thumbnail: "",
  },

  {
    id: "crea-est-011",
    title: "Transformacja „estetyka epoki”: ten sam tekst w 4 okresach",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz tekst w stylach epok: detale, rejestr i słownictwo.",
    prompt: `Wklej tekst bazowy i powiedz:
- Miejsce.
- Temat.
- Jakich nowoczesnych słów mam unikać (5–10).

Przepisz w 4 estetykach (po 200–350 słów każda):
1) XIX wiek (elegancko, długie zdania, obserwacja)
2) Lata 20. (rytm, glamour/hałas)
3) Lata 80. (popkultura, neon, prędkość)
4) Bliska przyszłość (codzienna technologia, intymność)

Dla każdej estetyki:
- 10 detali epoki wplecionych w działania (bez ekspozycji)
- 1 pamiętna linijka na koniec

Na koniec:
- Rekomendacja: która estetyka najbardziej wzmacnia temat i dlaczego.`,
    thumbnail: "",
  },
  {
    id: "crea-est-012",
    title: "Przepisanie przez „centralną metaforę”: cały tekst pod jednym symbolem",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przekształć tekst tak, by krążył wokół podtrzymanej metafory (bez powtarzania się).",
    prompt: `Wklej swój tekst i wybierz centralną metaforę:
- Opcje: „morze”, „dom”, „koło”, „ogień”, „lód”, „most”, „ogród”, „maszyna”.
(albo podaj własną)

Zadanie:
1) Zrób mapę metafory: 12 skojarzeń (przedmioty/działania) z symbolem.
2) Przepisz tekst (300–600 słów):
   - metafora ma się pojawiać w detalach, nie jako „to jest jak…”
   - 4 subtelne wystąpienia + 1 jawne na końcu
   - unikaj powtarzania tych samych słów symbolu (bez spamu)

Na koniec:
- 10 alternatywnych zdań, które używają tej metafory inaczej.`,
    thumbnail: "",
  },
  {
    id: "crea-est-013",
    title: "Usuwanie przymiotników: siła przez czasowniki i rzeczowniki",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Ćwiczenie na „utwardzenie” prozy: usuń przymiotniki i zyskaj precyzję.",
    prompt: `Wklej tekst (150–500 słów).

Zadanie:
A) Wypisz 20 najsłabszych lub najbardziej ogólnych przymiotników w tekście (jeśli jest mniej — wszystkie).
B) Dla każdego zaproponuj:
   - 2 mocniejsze czasowniki
   - 2 bardziej konkretne rzeczowniki
   - 1 alternatywny obraz
C) Przepisz tekst:
   - maksymalnie 6 przymiotników w całym tekście
   - reszta ma wynikać z czasowników, rzeczowników i działań

Na koniec:
- Porównaj: co czuć inaczej (5 punktów).`,
    thumbnail: "",
  },
  {
    id: "crea-est-014",
    title: "Transformacja na „realizm sensoryczny”: 5 zmysłów na scenę",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zamień płaski tekst w zmysłowy: z fizycznym zakotwiczeniem i atmosferą.",
    prompt: `Wklej tekst lub scenę (200–600 słów) i powiedz:
- Dokładne miejsce
- Godzina/pora roku
- Dominująca emocja

Przepisz:
- Dodaj minimum 2 detale na każdy zmysł (wzrok, słuch, węch, dotyk, smak).
- Bez lania wody: każdy detal ma ujawniać postać albo konflikt.
- 1 mały gest ma powiedzieć to, czego się nie mówi.

Na koniec:
- Lista 15 alternatywnych detali zmysłowych dla tego samego miejsca.`,
    thumbnail: "",
  },
  {
    id: "crea-est-015",
    title: "Transformacja na „podtekst”: mówić mniej, znaczyć więcej",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz scenę tak, by prawdziwy konflikt nie był wypowiedziany — tylko odegrany.",
    prompt: `Wklej scenę (dialog albo proza) i powiedz:
- Konflikt widoczny
- Ukryty, prawdziwy konflikt
- Czego NIE wolno powiedzieć wprost
- Przedmiot, który posłuży jako podtekst

Przepisz scenę:
- Ogranicz wyjaśnianie emocji o 70%.
- Użyj działań (spojrzenia, pauzy, przedmioty, przerywanie).
- Każda postać ma mieć cel i taktykę (zmień taktykę 2 razy).
- Finał: niewinne zdanie, które przez podtekst jest miażdżące.

Na koniec:
- Tabela: oryginalna linijka → nowy podtekst (8–12 wierszy).`,
    thumbnail: "",
  },

  {
    id: "crea-est-016",
    title: "Transformacja na „humor”: zamień dramat w komedię bez zdrady tematu",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz w humorze (suchym/absurdalnym/ironicznym), zachowując centralną prawdę.",
    prompt: `Wklej swój tekst (200–600 słów) i powiedz:
- Rodzaj humoru (deadpan, absurd, łagodny sarkazm, czarna komedia).
- Jakiego tematu NIE wolno stracić.
- Jak dużo humoru (0–10).

Zadanie:
1) Wskaż 5 punktów napięcia (miejsca, gdzie dramat ciąży).
2) Dla każdego punktu stwórz 2 mechanizmy komiczne:
   - sprzeczność
   - błędna interpretacja
   - konkretna przesada
   - realistyczny, śmieszny detal
3) Przepisz tekst w tonie komediowym:
   - bez kpin z bólu
   - z puentami opartymi na obserwacji
   - finał: jedno poważne zdanie, które przypomina temat

Dodaj:
- 12 alternatywnych puent (po 1 linijce).`,
    thumbnail: "",
  },
  {
    id: "crea-est-017",
    title: "Transformacja na „noir”: zamień dowolną historię w nowoczesne noir",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Głos z offu, ironia, miasto i wina: noir z atmosferą.",
    prompt: `Wklej swój tekst lub synopsę i powiedz:
- Nocne miasto/miejsce
- Wina protagonisty
- Antagonista (osoba albo system)
- Kluczowy przedmiot
- Finał (ironia/kara)

Przepisz w noir (350–700 słów):
- Głos z offu w 6 momentach (krótko).
- Głos z offu ma przeczyć temu, co widać (podtekst).
- 10 miejskich detali.
- Finał: moralna ironia.

Potem:
- 10 linijek z offu typu „one-liner” do wyboru.`,
    thumbnail: "",
  },
  {
    id: "crea-est-018",
    title: "Transformacja na „bajkę”: ten sam temat, odpowiednio i głęboko",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zamień dorosły temat w symboliczną bajkę bez utraty głębi.",
    prompt: `Wklej swój tekst lub temat i powiedz:
- Wiek docelowy (4–6, 7–9, 10–12).
- Wartość centralna (przyjaźń, uczciwość, odwaga, cierpliwość).
- Bohaterowie (zwierzę/przedmiot/człowiek).
- Sceneria (las, miasto, morze, szkoła).
- Finał (subtelna lekcja).

Napisz bajkę (600–900 słów):
- Język prosty, ale nie głupi.
- Rytmiczne powtórzenie (1 zdanie wraca 4 razy).
- 1 jasny konflikt, 1 kreatywne rozwiązanie.
- Morał domyślny (bez kazania).

Dodaj:
- 6 tytułów + 10 zdań do ilustracji (pomysły wizualne).`,
    thumbnail: "",
  },
  {
    id: "crea-est-019",
    title: "Transformacja na „esej osobisty”: szczerość i klarowność (bez nadmiaru poezji)",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przejście z liryki do eseju osobistego: jasne tezy, konkretne sceny, ludzki wniosek.",
    prompt: `Wklej tekst bazowy i powiedz:
- Teza (co chcesz stwierdzić).
- 2 sceny (prawdziwe lub wymyślone), które to udowadniają.
- Wrażliwy punkt, którego nie chcesz powiedzieć (ale powinieneś/-aś).
- Ton (ciepły, bezpośredni, stanowczy).

Przepisz jako esej osobisty (800–1200 słów):
- Hook ze sceną (nie ogólne zdanie).
- Jasna teza w pierwszych 20%.
- 2 pełne sceny z detalem.
- 3 idee wyjaśnione na przykładach.
- Wniosek: decyzja lub konkretna praktyka.

Na koniec:
- 10 możliwych tytułów eseju.`,
    thumbnail: "",
  },
  {
    id: "crea-est-020",
    title: "Bank narzędzi stylu: metafory, rytmy, zakończenia i „podpisy”",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Wygeneruj zasoby do ponownego użycia: oryginalne metafory, zakończenia, rytmy i linijki-podpisy.",
    prompt: `Podaj:
- Temat (miłość, miasto, strata, tożsamość, ambicja, strach).
- Estetyka (miejska, naturalna, futurystyczna, vintage).
- Ton (czuły, mroczny, ironiczny, epicki).

Wygeneruj bank:
A) 25 oryginalnych metafor (bez klisz) zakotwiczonych w przedmiotach/działaniach.
B) 20 linijek zamknięcia (maks. 12 słów) w różnych tonach.
C) 15 otwarć (hooków) z konkretnym obrazem.
D) 12 zdań „podpis” (one-linery) do zapamiętania.
E) 10 środków rytmicznych (anafory, cięcia, powtórzenia) z przykładami.

Potem:
- Powiedz, jak połączyć 2 środki bez przesycenia tekstu.`,
    thumbnail: "",
  },

  {
    id: "crea-est-021",
    title: "Transformacja przez „ograniczenie”: przepisz z ekstremalnymi zasadami",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisanie z ograniczeniami (słownictwo, długość, struktura) dla realnej kreatywności.",
    prompt: `Wklej scenę lub tekst (200–600 słów) i powiedz, jakie ograniczenie chcesz:
Wybierz 2–3:
1) Maks. 8 słów na zdanie.
2) Bez przysłówków.
3) Tylko czas teraźniejszy.
4) Bez czasowników „być” (w znaczeniu: być/znajdować się).
5) 5 obowiązkowych słów.
6) Finał w jednym zdaniu.

Przepisz tak, by spełnić ograniczenia.
Potem:
- Napisz drugą, „wolną” wersję, która zachowa uzyskaną siłę.
- Wyjaśnij, co zmusiło cię do odkrycia ograniczenie (5 punktów).`,
    thumbnail: "",
  },
  {
    id: "crea-est-022",
    title: "Transformacja na „scenę teatralną”: proza w dialog z didaskaliami",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zamień narrację w teatr: podtekst, didaskalia, rytm sceny.",
    prompt: `Wklej swój tekst (200–600 słów) i powiedz:
- Postacie (maks. 2–4)
- Miejsce
- Konflikt widoczny i konflikt prawdziwy
- Przedmiot podtekstu
- Finał

Zamień w scenę teatralną (6–10 stron):
- Dialog z podtekstem.
- Didaskalia krótkie, precyzyjne.
- 2 zmiany władzy między postaciami.
- Finał: gest albo zdanie, które zamyka echem.

Dodaj:
- Notatki reżyserskie (rytm, pauzy, ton per postać).`,
    thumbnail: "",
  },
  {
    id: "crea-est-023",
    title: "Transformacja na „scenariusz”: proza w sceny z obrazowością",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zamień tekst narracyjny w scenariusz (format filmowy) bez utraty emocji.",
    prompt: `Wklej swój tekst (300–900 słów) i powiedz:
- Docelowy czas trwania (5–10 min)
- Dostępne lokacje (maks. 3)
- Dostępne postacie (maks. 4)
- Jaka emocja ma dominować

Zamień na scenariusz:
- Maks. 10–18 scen.
- Działania wizualne (bez tłumaczenia).
- Minimalny dialog, z podtekstem.
- Finał: pamiętny obraz.

Na koniec:
- Lista 8 ikonicznych ujęć do reżyserii.`,
    thumbnail: "",
  },
  {
    id: "crea-est-024",
    title: "Transformacja na „wiadomości czatu”: historia w WhatsApp/DM-ach",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Opowiedz pełną historię tylko przez wiadomości: rytm, cisze i cyfrowy podtekst.",
    prompt: `Podaj:
- Kto pisze i jaka relacja.
- Konflikt.
- Sekret.
- Finał (pojednanie, zerwanie, zwrot).
- Styl: realistyczny (tak/nie).

Napisz historię wyłącznie w formacie czatu:
- 80–140 wiadomości.
- Uwzględnij cisze (… / „wyświetlono” / „pisze…”).
- 2 wiarygodne nieporozumienia.
- Finał: ostatnia wiadomość, która zostaje w głowie.

Potem:
- 5 alternatywnych wersji ostatniej wiadomości.`,
    thumbnail: "",
  },
  {
    id: "crea-est-025",
    title: "Transformacja na „dziennik”: ta sama historia w 3 wpisach",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz jako intymny dziennik z trzech różnych dni, pokazując zmianę.",
    prompt: `Wklej swoją historię albo scenę i powiedz:
- 3 daty (albo zakresy) wpisów.
- Co zmienia się w każdej dacie.
- Jaka prawda pojawia się na końcu.

Napisz 3 wpisy dziennika:
- Wpis 1: zaprzeczenie / chaos (250–400 słów)
- Wpis 2: konfrontacja / pęknięcie (250–450)
- Wpis 3: synteza / decyzja (250–450)

Dodaj:
- 1 zdanie powtarzające się we wszystkich 3 wpisach, zmieniające znaczenie.`,
    thumbnail: "",
  },

  {
    id: "crea-est-026",
    title: "Transformacja „literacka reklama”: z tekstu w poetycką mikro-reklamę",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Twórz krótkie formy reklamowe, ale z literacką jakością i podtekstem.",
    prompt: `Wklej swój tekst albo opisz temat/fikcyjny produkt i:
- Realną korzyść (bez napompowanych obietnic)
- Odbiorcę
- Ton (poetycki/noir/humor)

Wygeneruj:
A) 10 poetyckich mikrocopy (1–2 linijki)
B) 5 tekstów 60–90 słów (voice-over)
C) 3 teksty 180–240 słów (mini historia z finałem)

Zasady:
- Zero klisz.
- Konkretne obrazy.
- Finał z pamiętnym zdaniem.`,
    thumbnail: "",
  },
  {
    id: "crea-est-027",
    title: "Transformacja „twardość”: uczyń tekst bardziej surowym i realistycznym",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz, by podnieść realizm (bez wulgarności), z precyzyjnymi detalami.",
    prompt: `Wklej tekst (200–700 słów) i powiedz:
- Docelowy poziom surowości (1–10)
- Jakich granic nie przekraczać
- Jaka emocja ma zostać

Przepisz:
- Zastąp abstrakty scenami.
- Dodaj 8 fizycznych detali (dłonie, światło, hałas, zapach).
- Usuń sentymentalizm i tłumaczenia.
- Zachowaj człowieczeństwo: dodaj 2 momenty czułości.

Na koniec:
- Lista 15 alternatywnych „surowych detali” do przyszłych scen.`,
    thumbnail: "",
  },
  {
    id: "crea-est-028",
    title: "Transformacja „czułość”: zmiękcz bez infantylizacji",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zamień twardy tekst w czuły, zachowując prawdę i godność.",
    prompt: `Wklej swój tekst i powiedz:
- Co boli najbardziej
- Co chcesz ochronić
- Docelowy ton (czuły, spokojny, ciepły, pełen nadziei)
- Słowa zakazane (klisze)

Przepisz:
- Zamień agresję na troskę.
- Zachowaj konflikt, ale z współczuciem.
- Dodaj 6 detali opieki (małe gesty).
- Finał: mała obietnica (realistyczna).

Potem:
- 10 alternatywnych zdań na zakończenie.`,
    thumbnail: "",
  },
  {
    id: "crea-est-029",
    title: "Transformacja „wysoka literatura”: podnieś prozę do premium",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Wzmocnij składnię, obrazy i precyzję bez popadania w pretensjonalność.",
    prompt: `Wklej tekst (200–700 słów) i powiedz:
- Docelowy ton (elegancki, intymny, mroczny, jasny)
- Poziom złożoności (średni/wysoki)
- 5 słów, które lubisz i chcesz wpleść

Przepisz w „wysoką literaturę”:
- Słownictwo precyzyjne, nie „dziwne dla dziwnego”.
- Oryginalne metafory (minimum 4).
- Rytm: przeplataj krótkie i długie zdania.
- Unikaj moralizowania.
- Finał: zdanie bezbłędne (maks. 14 słów).

Na koniec:
- 8 decyzji stylistycznych, które podjąłeś/-aś, i dlaczego.`,
    thumbnail: "",
  },
  {
    id: "crea-est-030",
    title: "Transformacja „współczesny głos”: unowocześnij bez utraty głębi",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zaktualizuj rejestr na współczesny (bez taniego slangu), z jasnością i „punch’em”.",
    prompt: `Wklej swój tekst i powiedz:
- Odbiorca i platforma (blog, IG, newsletter, scenariusz).
- Co ma poczuć czytelnik.
- 5 słów zakazanych.

Przepisz współczesnym głosem:
- Jasność i punch.
- Konkretne obrazy.
- 2 linijki „ciosy” (bardzo krótkie).
- Finał: linijka, która zachęci do ponownego czytania.

Dodaj:
- 6 alternatywnych tytułów.`,
    thumbnail: "",
  },

  {
    id: "crea-est-031",
    title: "Transformacja „kreatywnie dwujęzyczna”: hiszpański z eleganckim code-switch",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisanie z bardzo oszczędnymi wstawkami po angielsku dla stylu — nie jako wypełniacz.",
    prompt: `Wklej tekst (200–600 słów) i powiedz:
- Poziom code-switch (niski/średni)
- Jakich angielskich słów/fraz nie chcesz (cringe)
- Ton (cool, intymny, profesjonalny, liryczny)

Przepisz:
- Utrzymaj 85–90% hiszpańskiego.
- Wstaw 6–10 krótkich fraz po angielsku (maks. 6 słów każda), celowo.
- Angielski ma dodawać niuans (nie dosłowne tłumaczenie).
- Finał: mocne zamknięcie po hiszpańsku.

Potem:
- Lista 20 przydatnych krótkich fraz po angielsku (bez klisz).`,
    thumbnail: "",
  },
  {
    id: "crea-est-032",
    title: "Transformacja przez „dykcję”: zmień rejestr (wysoki, potoczny, uliczny, formalny)",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zmień rejestr językowy, by dopasować postać/epokę/środowisko.",
    prompt: `Wklej tekst i powiedz:
- Kto mówi (postać)
- Kontekst (gdzie i z kim)
- Co chce osiągnąć
- Dopuszczalny poziom wulgarności

Przepisz w 4 rejestrach:
1) Formalny/profesjonalny
2) Potoczny, bliski
3) Uliczny/żargon umiarkowany (bez karykatury)
4) Wysoki/literacki (bez zadęcia)

Dla każdego rejestru:
- 8 zmian dykcji (słowa/frazy) i dlaczego.
- 1 alternatywna linijka finału.`,
    thumbnail: "",
  },
  {
    id: "crea-est-033",
    title: "Transformacja przez „skalę”: mikro (tweet) vs makro (rozdział)",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zamień tę samą ideę w mocny tweet, a potem w długi rozdział.",
    prompt: `Podaj:
- Idee centralną (1 zdanie)
- Temat
- Ton

Stwórz 3 wersje:
A) Tweet/X: 240–280 znaków (z konkretnym obrazem, bez moralizowania).
B) Mikropowieść: 120–180 słów ze zwrotem.
C) Rozdział: 1200–1800 słów z 2 scenami i podtekstem.

Zachowaj ten sam rdzeń we wszystkich 3.
Na koniec:
- Wyjaśnij, co zmienia się w napięciu/rytmie wraz ze skalą (6 punktów).`,
    thumbnail: "",
  },
  {
    id: "crea-est-034",
    title: "Transformacja na „literacką listę”: inwentarz z duszą",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zamień tekst w poetycki inwentarz (co zachowuję, co tracę) ze zwrotem.",
    prompt: `Wklej swój tekst i powiedz:
- Temat
- Centralny symbol
- Zwrot na końcu (co się ujawnia)

Zamień w „literacką listę”:
- 18–30 pozycji.
- 4 złamania schematu (linijki poza listą).
- Każda pozycja ma być konkretna i emocjonalna jednocześnie.
- Finał: ostatnia pozycja, która przestawia znaczenie całości.

Potem:
- 10 alternatywnych pozycji do wariantów.`,
    thumbnail: "",
  },
  {
    id: "crea-est-035",
    title: "Transformacja „jedno słowo”: przepisz tak, by jedno słowo było bohaterem",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Jedno słowo prowadzi tekst: rytmiczne powtórzenia i semantyczna zmienność.",
    prompt: `Wklej swój tekst i wybierz słowo-bohatera (np. „światło”, „klucz”, „hałas”, „lód”).
Powiedz:
- Ile razy ma się pojawić (6–10).
- Ton.

Przepisz:
- Słowo ma się pojawić 6–10 razy.
- Za każdym razem zmienia znaczenie przez kontekst (bez pustego powtarzania).
- 2 wystąpienia mają być metaforyczne, 2 dosłowne, 2 hybrydowe.
- Finał: ostatnie wystąpienie ze zwrotem.

Na koniec:
- 6 alternatywnych słów, które zadziałałyby równie dobrze.`,
    thumbnail: "",
  },

  {
    id: "crea-est-036",
    title: "Transformacja „dialog”: zamień narrację w scenę rozmowy",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz fragment narracji jako dialog z podtekstem i działaniami.",
    prompt: `Wklej fragment narracyjny (200–600 słów) i powiedz:
- Maks. 2–3 postacie
- Miejsce
- Prawdziwy (ukryty) konflikt
- Przedmiot podtekstu
- Finał (co się zmienia)

Przepisz jako scenę:
- Format scenariusza lub teatru (wybierz).
- Dialog z przerywaniem, ciszą i działaniami.
- 2 zmiany taktyki na postać.
- Finał: niewinne zdanie z ładunkiem emocjonalnym.

Potem:
- Lista 10 „działań podtekstu” dla tego konfliktu.`,
    thumbnail: "",
  },
  {
    id: "crea-est-037",
    title: "Transformacja „kamera”: przepisz, jakby opowiadała kamera",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zamień tekst na język audiowizualny: ujęcia, działania, atmosfera.",
    prompt: `Wklej swój tekst (200–700 słów) i powiedz:
- Gatunek (dramat/thriller/romans/horror)
- Główna lokacja
- Dominująca emocja

Przepisz jako „kamera”:
- Opisuj w czasie teraźniejszym to, co widać i słychać.
- Wstaw 12–20 ujęć (oznacz jako UJĘCIE 1, UJĘCIE 2…).
- Ogranicz wyjaśnienia wewnętrzne; pokaż działaniem.
- Finał: pamiętne ujęcie końcowe.

Dodaj:
- 8 pomysłów na dźwięk/ambient wzmacniający emocję.`,
    thumbnail: "",
  },
  {
    id: "crea-est-038",
    title: "Transformacja „suspens”: zamień dowolną scenę w napięcie",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz, by podbić napięcie przez częściową wiedzę, rytm i czającą się groźbę.",
    prompt: `Wklej scenę (200–700 słów) i powiedz:
- Jaka potencjalna groźba istnieje (nawet emocjonalna).
- Jakiej informacji czytelnik nie może jeszcze znać.
- Jaki detal otoczenia stanie się wskazówką.

Przepisz w kluczu suspensu:
- Utnij bezpośrednie informacje o 50%.
- Dodaj 3 drobne tropy (zasiane).
- Rytm: krótkie zdania w momentach napięcia.
- Finał: mikro-cliffhanger.

Potem:
- Lista 10 środków budowania napięcia (do zastosowania) z przykładem.`,
    thumbnail: "",
  },
  {
    id: "crea-est-039",
    title: "Transformacja „światło i cień”: jasna vs mroczna wersja tego samego tekstu",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Dwa przeciwstawne przepisania atmosfery przy zachowaniu tej samej historii.",
    prompt: `Wklej tekst (200–600 słów) i powiedz:
- Co musi zostać takie samo (rdzeń)
- Co ma się zmienić (atmosfera)

Zrób 2 wersje:
A) Wersja jasna: nadzieja, klarowność, oddech (bez cukru)
B) Wersja mroczna: ciężar, noc, napięcie (bez melodramatu)

Dla każdej:
- 10 decyzji atmosfery (leksyka, detale, rytm)
- Alternatywne zamknięcie (1 linijka)

Na koniec:
- Powiedz, która działa lepiej i dlaczego.`,
    thumbnail: "",
  },
  {
    id: "crea-est-040",
    title: "Audyt stylu: wykryj wypełniacze, schematy i wzmocnij swój głos",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Analiza i przepisanie, by scalić własny głos (bez brzmienia „generycznie”).",
    prompt: `Wklej 2–4 swoje teksty (łącznie 400–1200 słów).

Zadanie:
1) Wykryj schematy:
- wypełniacze
- powtarzalne początki zdań
- częste przymiotniki
- struktury metafor
- rytm (długość zdań)
2) Zdefiniuj twój obecny głos w 8 cechach.
3) Zaproponuj „osobisty przewodnik stylu” (12 zasad), by brzmieć bardziej jak ty.
4) Przepisz 1 tekst, stosując przewodnik (300–600 słów).
5) Stwórz osobisty glosariusz:
- 20 słów, które cię reprezentują
- 20 słów, których powinieneś/-aś unikać

Na koniec:
- Plan 7 dni trenowania tego głosu (konkretne działania).`,
    thumbnail: "",
  },

  {
    id: "crea-est-041",
    title: "Transformacja „to samo zdarzenie, inna emocja”: radość, nostalgia, złość, spokój",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zostaw fakt bez zmian, zmień emocję samymi detalami i rytmem.",
    prompt: `Podaj proste zdarzenie (1–2 zdania) oraz:
- Miejsce
- Postać
- 5 przedmiotów w scenie

Napisz 4 wersje (po 200–350 słów), gdzie zdarzenie jest identyczne:
1) Powściągliwa radość
2) Miękka nostalgia
3) Elegancka złość
4) Melancholijny spokój

Zasady:
- Nie zmieniaj zdarzenia.
- Zmień świat: detale, rytm, metafory, fokus.

Na koniec:
- Wyjaśnij, co się zmieniło, by wywołać emocję (8 punktów).`,
    thumbnail: "",
  },
  {
    id: "crea-est-042",
    title: "Transformacja „głos przedmiotu”: narracja z perspektywy rzeczy (literacko)",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz tak, jakby przedmiot opowiadał historię — z osobowością i spójnością.",
    prompt: `Wklej swój tekst lub scenę i powiedz:
- Przedmiot-narrator
- Właściciel/-ka
- Sekret, który zna przedmiot
- Finał (zachować/puścić)

Przepisz (500–900 słów):
- Konsekwentny głos przedmiotu.
- 2 flashbacki i 1 scena w teraźniejszości.
- Realne detale zmysłowe (faktura, kurz, ciężar).
- Finał: decyzja przedmiotu.

Potem:
- 12 zdań „podpis” przedmiotu (one-linery).`,
    thumbnail: "",
  },
  {
    id: "crea-est-043",
    title: "Transformacja „późne ujawnienie”: ukryj to, co ważne, do końca",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz tak, by kluczowa prawda ujawniła się w finale (zasiana i zasłużona).",
    prompt: `Wklej swoją historię/scenę i powiedz:
- Jaką prawdę chcesz ujawnić na końcu.
- 3 tropy, które mogą pojawić się wcześniej.
- 3 rzeczy, których NIE wolno ujawnić.
- Pożądany finał (szok, czułość, ironia).

Przepisz (500–900 słów):
- Zasiejesz 3 tropy naturalnie.
- Daj alternatywne wyjaśnienia (bez bezczelnego kłamania).
- Utrzymaj rytm, by twist „nie śpiewał”.
- Finał: pokaż prawdę obrazem (bez przemowy).

Na koniec:
- Lista: trop → linijka, gdzie się pojawia → payoff.`,
    thumbnail: "",
  },
  {
    id: "crea-est-044",
    title: "Transformacja „epistolarna”: zamień scenę w listy",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz jako wymianę listów: podtekst, przemilczenia i czas.",
    prompt: `Wklej scenę/historię i powiedz:
- Kto pisze
- Do kogo
- W jakim okresie (dni, lata)
- Co jest ukrywane

Napisz 4 listy:
- List 1: oczekiwanie/ładne kłamstwo (200–350 słów)
- List 2: tarcie (200–350)
- List 3: dystans/nieobecność (200–350)
- List 4: prawda (200–350)

Zasady:
- W każdym liście ma pojawić się przedmiot, którego znaczenie się zmienia.
- Finał: jedno zdanie, które domyka całą korespondencję.

Dodaj:
- 8 alternatywnych zdań końcowych.`,
    thumbnail: "",
  },
  {
    id: "crea-est-045",
    title: "Transformacja „styl dziennikarski”: zamień fikcję w kronikę",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz historię jako kronikę/notkę: fakty, sceny, świadectwo — bez utraty emocji.",
    prompt: `Wklej swoją historię i powiedz:
- Miejsce i datę (fikcyjną lub realną)
- Jaki „fakt” jest raportowany
- 2 świadków
- 1 twardą daną (liczba) wymyśloną, ale wiarygodną

Napisz kronikę (800–1200 słów):
- Mocny lead (pierwszy akapit)
- Konkretne sceny przeplatane kontekstem
- 2 wypowiedzi świadków o różnym głosie
- Zakończenie: krótka refleksja, bez moralizowania

Potem:
- 10 możliwych nagłówków.`,
    thumbnail: "",
  },

  {
    id: "crea-est-046",
    title: "Transformacja „delikatnie vs wprost”: dwie wersje szczerości",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz wyznanie w dwóch rejestrach: delikatnym (metafory) i bezpośrednim (bez metafor).",
    prompt: `Wklej tekst/wyznanie (150–400 słów) i powiedz:
- Do kogo jest skierowane
- Czego boisz się stracić
- Jaką prawdę trzeba powiedzieć

Stwórz 2 wersje (po 250–450 słów):
A) Delikatna: metafory, sugestia, podtekst
B) Bezpośrednia: jasne zdania, bez ozdobników, prawda na przód

Potem:
- Wskaż 8 zdań, gdzie zmieniłeś/-aś formę, ale nie treść (porównanie).`,
    thumbnail: "",
  },
  {
    id: "crea-est-047",
    title: "Transformacja „rytuał”: zamień doświadczenie w literacką ceremonię",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zamień codzienne zdarzenie w symboliczny rytuał z powtórzeniami i gestem finałowym.",
    prompt: `Podaj:
- Codzienne zdarzenie (robienie kawy, pranie, spacer).
- Emocję.
- 5 przedmiotów rytuału.
- Finał (co puszczasz albo obejmujesz).

Napisz tekst (600–900 słów):
- Krótkie sekcje z powtórzeniami (refren wraca 5 razy).
- Zdarzenie staje się ceremonią.
- Finał: minimalny gest o ogromnym znaczeniu.

Dodaj:
- 12 linijek „mantry”, które mogłyby być refrenem.`,
    thumbnail: "",
  },
  {
    id: "crea-est-048",
    title: "Transformacja „anty-ja”: usuń „ja” bez utraty intymności",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz intymny tekst bez użycia „ja”, budując bliskość detalami.",
    prompt: `Wklej tekst (200–600 słów).

Przepisz z zasadami:
- Zakaz używania: „ja”, „mnie”, „mi”, „mój”, „moja”, „moje”.
- Zachowaj intymność działaniami, odczuciami i otoczeniem.
- Minimum 10 konkretnych detali.
- Finał: zdanie, które brzmi jak wyznanie bez „ja”.

Potem:
- Przepisz ponownie, pozwalając na „ja”, ale zachowując oczyszczony styl.`,
    thumbnail: "",
  },
  {
    id: "crea-est-049",
    title: "Transformacja „warstwy”: pierwsze czytanie proste, drugie głębokie",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Przepisz tak, by mieć podwójną warstwę: codzienną powierzchnię + mroczny lub czuły podtekst.",
    prompt: `Wklej tekst i powiedz:
- Warstwa 1 (jak to wygląda)
- Warstwa 2 (czym naprawdę jest)
- Symbol, który łączy obie

Przepisz (500–900 słów):
- Warstwa 1 ma działać samodzielnie.
- Warstwa 2 ma być czytelna przez wskazówki (4–7 tropów).
- Finał: linijka, która ujawnia warstwę 2 bez tłumaczenia.

Dodaj:
- Lista tropów i gdzie je umieściłeś/-aś.`,
    thumbnail: "",
  },
  {
    id: "crea-est-050",
    title: "Zestaw transformacji finalnej: 1 historia w 5 formatach gotowych do publikacji",
    area: "Pisanie Kreatywne",
    category: "Transformacja i Styl",
    summary:
      "Zamień historię na: opowiadanie, wiersz, scenariusz, caption i wątek (multiużycie).",
    prompt: `Wklej swoją historię bazową (300–800 słów) i powiedz:
- Docelowa platforma (IG, TikTok, blog, newsletter, książka).
- Ton.
- Główny przekaz.

Wygeneruj 5 formatów:
1) Krótkie opowiadanie (900–1300 słów) z 2 scenami i pamiętnym finałem.
2) Wiersz (28–42 wersy) z 5 zmysłami i zwrotem.
3) Scena scenariuszowa (4–6 stron) z podtekstem.
4) Caption IG (180–240 słów) + 5 hooków na otwarcie.
5) Wątek X/Twitter (8–12 tweetów) z rytmem i zamknięciem.

Na koniec:
- Checklista spójności (co zostaje we wszystkich).`,
    thumbnail: "",
  },
];
