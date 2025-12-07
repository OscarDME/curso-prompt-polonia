// src/lib/prompts/text/marketing-ofertas-irresistibles.js

export const textPromptsMarketingOfertasIrresistibles = [
  {
    id: "moi-001",
    title:
      "Projekt Oferty Nieodpartej (v1): główna propozycja + postrzegana wartość + mechanizm + dowód",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Kompletny framework do zbudowania oferty, która wydaje się oczywista: obietnica, mechanizm, deliverables, dowód i CTA.",
    prompt: `Kontekst (uzupełnij):
- Nisza/branża:
- Avatar (kto kupuje i dlaczego):
- Problem #1 (ból):
- Problem #2 (wtórna frustracja):
- Pragnienie #1 (rezultat):
- Pragnienie #2 (tożsamość/status):
- Obecna oferta (jeśli istnieje):
- Docelowa cena:
- Realistyczny czas na zobaczenie wyników:
- Ograniczenia klienta (czas, narzędzia, umiejętności):
- Dostępny dowód (case'y, metryki, opinie, portfolio):
- Ton marki: (premium/bliski/bezpośredni)

Zadanie:
1) Zdefiniuj *Big Promise* w jednym zdaniu:
   - konkretne, mierzalne i realistyczne (bez ściemy).
2) Napisz 3 możliwe „mechanizmy” (dlaczego Twoje rozwiązanie działa) i wybierz najlepszy.
3) Zbuduj ofertę wg tej struktury:
   A) Co to jest (1 akapit)
   B) Co rozwiązuje (bullets)
   C) Co zawiera (dokładne deliverables, w bulletach, z ilościami)
   D) Jak się tego używa (kroki)
   E) Jakich wyników oczekiwać i w jakich warunkach (uczciwie)
4) Stwórz “Value Stack”:
   - 6 komponentów z nazwą, rezultatem i „dlaczego to jest wartościowe”.
   - przypisz „postrzeganą wartość” do każdego (w $) i zsumuj.
5) Dodaj dowód i wiarygodność:
   - 3 zdania dowodu (jeśli nie masz realnych danych, napisz jako „to, co zwykle widzimy” bez twierdzeń).
6) Stwórz 3 CTA:
   - miękkie, średnie, mocne.
7) Napisz finalny copy oferty:
   - wersja krótka (120–180 słów)
   - wersja długa (450–700 słów)

Ograniczenia:
- zero klisz („odmieni Twoje życie”, „sekret”, „gwarantowane”)
- unikaj obietnic medycznych/finansowych.`,
    thumbnail: "",
  },
  {
    id: "moi-002",
    title:
      "Oferta typu ‘Grand Slam’ (w stylu Hormoziego) — adaptacja: Dream Outcome / Likelihood / Time / Effort",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Optymalizuj ofertę, zwiększając pragnienie, pewność, szybkość i łatwość (konkretnymi działaniami).",
    prompt: `Dane:
- Produkt/usługa:
- Idealny klient:
- Wymarzony rezultat (Dream Outcome):
- Główna przeszkoda (dlaczego nie osiąga tego dziś):
- Pożądany czas (quick win):
- Wysiłek, którego chce uniknąć:
- Dowody/aktywa (case'y, doświadczenie, zasoby):
- Docelowa cena:

Wygeneruj:
1) Macierz 2x2:
   - Dream Outcome (wysoki/niski)
   - Likelihood of achievement (wysokie/niskie)
   - Time delay (wysokie/niskie)
   - Effort & sacrifice (wysokie/niskie)
   Opisz, gdzie jest dziś Twoja oferta i w którą stronę powinna się przesunąć.
2) 25 pomysłów na zwiększenie Likelihood:
   - gwarancje warunkowe
   - check-iny „done-with-you”
   - szablony, audyty, poprawki, rewizje, testy
3) 15 pomysłów na skrócenie Time delay (bez kłamstwa):
   - quick wins, kolejność wdrożenia, minimalna sekwencja wykonalna
4) 15 pomysłów na zmniejszenie Effort:
   - automatyzacje, zestawy, checklisty, prowadzenie, SOP-y
5) Napisz nową ofertę:
   - deliverables, proces, warunki sukcesu, limity
6) Stwórz 10 bulletów „oferta nieodparta” (styl landing page).
7) Stwórz 5 name’ów oferty (premium i zapamiętywalne).`,
    thumbnail: "",
  },
  {
    id: "moi-003",
    title:
      "Budowa ‘Value Ladder’: oferta low / mid / high ticket jako drabina wartości",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj 3 poziomy (wejście, core, premium) z logiką progresu i upsellami.",
    prompt: `Kontekst:
- Nisza:
- Idealny klient:
- Główny problem:
- Docelowy rezultat:
- Aktualne zasoby (czas, zespół, platforma):
- Maksymalna rozsądna cena (sufit):
- Główne ograniczenie klienta: (czas/pieniądze/zaufanie)

Stwórz drabinę wartości:
1) Oferta wejściowa (low ticket):
   - obietnica, dokładne deliverables, format, sugerowana cena
   - quick win dostarczany w 24–72h
2) Oferta główna (mid ticket):
   - transformacja, proces etapami, wsparcie i społeczność
3) Oferta premium (high ticket):
   - dostęp, personalizacja, szybkość, accountability
4) Dla każdego poziomu:
   - dokładna obietnica
   - „czego NIE zawiera”
   - warunki uzyskania wyników
   - 3 obiekcje + odpowiedzi
   - 3 CTA
5) Zaprojektuj 2 upselle i 1 spójny cross-sell.
6) Napisz copy:
   - 3 porównania „jeśli jesteś X, kup Y” (profile)
   - 1 blok „wybierz swoją drogę” w stylu landing.`,
    thumbnail: "",
  },
  {
    id: "moi-004",
    title:
      "Oferta w formie ‘Bundle’: pakowanie zasobów/usług, by podbić wartość postrzeganą bez oddawania marży",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Stwórz bundle z logiką: rdzeń + akceleratory + zmniejszenie ryzyka + wsparcie.",
    prompt: `Dane:
- Produkt bazowy:
- Aktualne deliverables:
- Aktualna cena:
- Klienci: (B2B/B2C)
- Typowe obiekcje:
- Najbardziej wartościowy rezultat:

Zadanie:
1) Zaprojektuj bundle z 4 części:
   A) Rdzeń (to, co naprawdę kupują)
   B) Akceleratory (2–3 elementy)
   C) Reduktory ryzyka (gwarancja, dowód, onboarding)
   D) Wsparcie (minimum wykonalne)
2) Przypisz wartość postrzeganą do każdej części (w $) i zsumuj.
3) Zdefiniuj:
   - dlaczego bundle istnieje (krótka historia)
   - kto NIE powinien go kupować
4) Stwórz 12 bulletów wartości (korzyść + mechanizm).
5) Napisz 2 wersje copy:
   - „Bezpośrednio i jasno”
   - „Story-selling”
6) Stwórz 3 nazwy bundle + tagline.`,
    thumbnail: "",
  },
  {
    id: "moi-005",
    title:
      "Oferta ‘Done-For-You’ vs ‘Done-With-You’: co lepsze i jak sprzedać każdą wersję",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zdefiniuj dwa formaty i napisz pozycjonowanie, deliverables oraz ceny.",
    prompt: `Kontekst:
- Usługa:
- Idealny klient:
- Zasoby klienta (zespół/czas):
- Problem:
- Docelowy KPI:
- Typowi konkurenci:
- Docelowa cena:

1) Wygeneruj dwie wersje oferty:
   A) Done-For-You (DFY)
   B) Done-With-You (DWY)
2) Dla każdej:
   - obietnica
   - deliverables z ilościami
   - timeline
   - obowiązki (my vs klient)
   - ryzyka i warunki
3) Stwórz 10 bulletów sprzedażowych dla DFY i 10 dla DWY.
4) Stwórz 8 pytań kwalifikujących, by zdecydować, co rekomendować.
5) Napisz krótki skrypt (WhatsApp/email), aby polecić idealny plan na podstawie odpowiedzi.`,
    thumbnail: "",
  },

  {
    id: "moi-006",
    title:
      "Oferta „Diagnoza + Plan + Wdrożenie”: trójpak, który sprzedaje bez wrażenia ‘drogo’",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj ofertę etapami, która zmniejsza ryzyko i zwiększa klarowność.",
    prompt: `Dane:
- Nisza:
- Problem:
- Rezultat:
- Docelowa cena:
- Czas trwania całości:

Stwórz ofertę w 3 fazach:
1) Faza 1: Diagnoza (co oceniasz, co dostarczasz, czas)
2) Faza 2: Plan (strategia, roadmap, priorytety)
3) Faza 3: Wdrożenie (egzekucja, rewizje, QA)

Uwzględnij:
- precyzyjne deliverables dla każdej fazy
- kryteria sukcesu
- jak mierzyć postęp (3–5 metryk)
- 8 obiekcji + odpowiedzi
- 3 opcje cenowe (good/better/best)
- finalny copy na landing (500–900 słów).`,
    thumbnail: "",
  },
  {
    id: "moi-007",
    title:
      "Oferta z ‘Gwarancją Warunkową’ (bez zabicia biznesu): projekt legalny i copy",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Stwórz gwarancje warunkowe, etyczne i trwałe, z jasnymi zasadami i używalnym copy.",
    prompt: `Kontekst:
- Typ oferty:
- Średnie rezultaty:
- Ryzyka:
- Co kontrolujesz Ty:
- Co kontroluje klient:
- Kraj/rynek (dla tonu prawnego):

Stwórz:
1) 7 modeli gwarancji warunkowej (np. „jeśli zrobisz X i Y i nie uzyskasz Z, wtedy…”).
2) Dla 2 najlepszych modeli:
   - wymagania klienta (checklista)
   - weryfikacja (jak to udowodnić)
   - limit czasowy
   - rozsądne wyłączenia
3) Napisz copy:
   - wersja ultra jasna (bez prawniczego żargonu)
   - wersja formalna (doprecyzowania)
4) Stwórz blok FAQ o gwarancji (8 pytań).`,
    thumbnail: "",
  },
  {
    id: "moi-008",
    title:
      "Oferta ‘Outcome’: sprzedawaj rezultat, nie godziny (productized service)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zamień usługę w pakiet zorientowany na wynik, z zakresem i limitami.",
    prompt: `Obecna usługa (godziny):
- Co robisz:
- Dla kogo:
- Najważniejszy rezultat:
- Wejścia, których potrzebujesz od klienta:
- Średni czas:
- Pożądana cena:

Zadanie:
1) Nazwij pakiet wg outcome.
2) Zdefiniuj:
   - problem
   - rezultat
   - deliverables (z liczbami)
   - limity (czego nie zawiera)
   - timeline
3) Zaprojektuj 3 pakiety:
   - Starter
   - Growth
   - Scale
4) Dla każdego pakietu:
   - dla kogo jest/nie jest
   - 6 bulletów sprzedażowych
   - 5 obiekcji + odpowiedzi
5) Stwórz 1 stronę oferty (długi copy) gotową do wklejenia na landing.`,
    thumbnail: "",
  },
  {
    id: "moi-009",
    title:
      "Oferta dla ‘rynku sceptycznego’: jak budować pewność bez obiecywania cudów",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Oferta oparta o transparentność i dowody: limity, proces, evidence i warunki.",
    prompt: `Kontekst:
- Nisza ze sceptycyzmem (np. marketing, trading, fitness):
- Oferta:
- Dostępny dowód:
- Realistyczne wyniki:
- Ton:

Stwórz:
1) „Manifest anti-ściema” (150–250 słów).
2) Stack zaufania:
   - proces (kroki)
   - dowody (co realnie możesz pokazać)
   - limity (czego nie obiecujesz)
3) 12 bulletów „co tak / co nie”.
4) 10 FAQ pod sceptycyzm.
5) Finalny copy oferty (500–900 słów) bez klisz.`,
    thumbnail: "",
  },
  {
    id: "moi-010",
    title:
      "Oferta z ‘bonusami strategicznymi’: jak wybierać bonusy, które zwiększają konwersję (bez zapychaczy)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Twórz bonusy, które uderzają w obiekcje i przyspieszają wyniki: selekcja, nazwy i copy.",
    prompt: `Dane:
- Główna oferta:
- Top 5 obiekcji:
- Docelowy czas do wyniku:
- Poziom klienta:

Zadanie:
1) Zaproponuj 12 pomysłów na bonusy, każdy powiązany z:
   - konkretną obiekcją
   - lub redukcją czasu/wysiłku
2) Wybierz 5 bonusów:
   - nazwij je (nazwa + podtytuł)
   - zdefiniuj, co dokładnie zawierają
   - dlaczego przyspieszają wyniki
3) Przypisz wartość postrzeganą (w $) i zsumuj.
4) Napisz copy bonusów:
   - bullets (12)
   - akapit wprowadzający (120–180 słów)
   - blok na landing (łatwy do skanowania).`,
    thumbnail: "",
  },

  {
    id: "moi-011",
    title:
      "Oferta ‘limitowane miejsca’ (realna pilność): projekt legalnej rzadkości + copy",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zbuduj realną rzadkość (moce przerobowe/wsparcie) i komunikuj ją bez manipulacji.",
    prompt: `Kontekst:
- Oferta:
- Realna przepustowość (godz./tydz., poprawki, wsparcie):
- Ilu klientów możesz obsłużyć:
- Okno zapisów:
- Ton:

Stwórz:
1) 5 prawdziwych powodów rzadkości (wg Twojego modelu).
2) Jak je wyjaśniać jasno (bez dramy).
3) Copy do:
   - landing (blok 120–200 słów)
   - email “last call” (350–550 słów)
   - WhatsApp (3 wiadomości)
4) Dodaj „etyczne wyjście” dla tych, co się nie załapią:
   - lista oczekujących albo alternatywa.`,
    thumbnail: "",
  },
  {
    id: "moi-012",
    title:
      "Oferta dla ‘nowej publiczności’: pakiet wejściowy + dowód + upgrade (bez tarcia)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Oferta dla nieznajomych: szybka, jasna, niskie ryzyko i kolejny stopień.",
    prompt: `Dane:
- Nisza:
- Problem:
- Główna oferta (droższa):
- Dostępny dowód:
- Maksymalna cena „na próbę”:

Stwórz:
1) Oferta wejściowa (tripwire):
   - obietnica
   - deliverables
   - quick win
2) Mechanizm budowania zaufania:
   - gwarancja
   - onboarding
   - pierwszy rezultat w 48–72h
3) Most do upgrade’u:
   - kiedy rekomendować
   - trigger zakupu (sygnały)
4) Copy:
   - 10 bulletów sprzedaży
   - 3 CTA
   - 1 krótki landing (250–400 słów).`,
    thumbnail: "",
  },
  {
    id: "moi-013",
    title:
      "Oferta ‘cena kotwica’ (Good/Better/Best): architektura i copy, by plan środkowy wygrywał",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj 3 plany z kotwicą psychologiczną i wartością postrzeganą bez chaosu.",
    prompt: `Oferta:
- Co sprzedajesz:
- Co zawiera:
- Docelowa cena (plan środkowy):
- Idealny klient:
- Ryzyka/ograniczenia:

Stwórz 3 plany:
1) Good (wejście)
2) Better (główny)
3) Best (premium)

Dla każdego:
- nazwa
- idealne dla (1–2 linie)
- dokładne deliverables
- jasne limity
- 8 bulletów wartości (bez powtórek)
- 3 obiekcje + odpowiedzi

Uwzględnij:
- tabelę porównawczą w tekście (bez HTML) + rekomendację „jeśli jesteś X…”.`,
    thumbnail: "",
  },
  {
    id: "moi-014",
    title:
      "Oferta ‘retainer’ miesięczny: co sprzedawać miesiąc w miesiąc, żeby NIE rezygnowali",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj retainer oparty o cykliczne outcomes, metryki i rytuały.",
    prompt: `Kontekst:
- Usługa miesięczna:
- KPI, na który wpływasz:
- Kadencja (tygodniowa/co 2 tygodnie):
- Docelowa cena:
- Zasoby klienta:

Stwórz:
1) 3 modele retainer:
   - wykonanie
   - strategia + review
   - hybryda
2) Dla najlepszego modelu:
   - miesięczne deliverables (z liczbami)
   - rytuały (spotkania, raporty)
   - metryki i scoreboard
   - “ścieżka eskalacji”, jeśli są problemy
3) Copy (landing 500–800 słów) + 12 bulletów.
4) Plan onboardingu (D0–D30), aby zapewnić retencję.`,
    thumbnail: "",
  },
  {
    id: "moi-015",
    title:
      "Oferta ‘high-ticket’ z aplikacją: kryteria, pozycjonowanie i premium obietnica",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Oferta premium z filtrami: dla kogo jest/nie jest, aplikacja i autorytetowy copy.",
    prompt: `Dane:
- Usługa/program:
- Cena:
- Idealny klient:
- Realistyczne wyniki:
- Wymagania (czas, budżet, zaangażowanie):
- Dowody/kompetencje:

Stwórz:
1) Premium pozycjonowanie (dlaczego jesteś opcją premium) w 5 filarach.
2) Kryteria akceptacji (lista).
3) Struktura oferty:
   - fazy
   - deliverables
   - wsparcie
   - limity
4) Pytania aplikacyjne (10–15), które odfiltrują ciekawskich.
5) Finalny copy:
   - długa landing (700–1 200 słów)
   - krótka wersja (180–250)
   - 10 premium bulletów.`,
    thumbnail: "",
  },

  {
    id: "moi-016",
    title:
      "Oferta z ‘Fast Action Bonus’ (FAB): bonus za szybką decyzję z sensem strategicznym",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj FAB, który przyspiesza zakup i zbija obiekcje (bez rozdawania).",
    prompt: `Kontekst:
- Oferta:
- Okno szybkiej akcji (godziny/dni):
- Najczęstsza obiekcja:
- Idealny akcelerator:
- Realna przepustowość:

Stwórz:
1) 10 pomysłów na Fast Action Bonus (FAB) z:
   - nazwą
   - co zawiera (dokładnie)
   - jak przyspiesza wyniki
2) Wybierz 3 i napisz copy:
   - blok na landing
   - copy do emaila
   - copy do WhatsApp (2 wiadomości)
3) Zdefiniuj etyczne ograniczenia:
   - realny limit
   - jasne warunki.`,
    thumbnail: "",
  },
  {
    id: "moi-017",
    title:
      "Oferta ‘Szablon + Wdrożenie’ (żeby nie zostało teorią): zestaw do działania",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zamień wiedzę w kit: szablony, checklisty, przykłady i review.",
    prompt: `Dane:
- Temat/rezultat:
- Klient:
- Typowe przeszkody:
- Narzędzia, których używają:

Zaprojektuj zestaw do działania:
1) Szablony (5–10) z nazwą i zastosowaniem.
2) Checklista etapami (przed/w trakcie/po).
3) Uzupełnione przykłady (3).
4) Instrukcja wdrożenia (kroki).
5) Minimalne review/feedback (jak, ile razy).

Napisz copy sprzedażowe:
- 12 bulletów (korzyść + scenariusz)
- 3 CTA
- 1 długi opis (500–800 słów).`,
    thumbnail: "",
  },
  {
    id: "moi-018",
    title:
      "Oferta na ‘szybki rezultat’ bez kłamstwa: realistyczny quick win + pełna ścieżka",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj uczciwy quick win, który wciąga i łączy się z większą transformacją.",
    prompt: `Kontekst:
- Oferta:
- Rezultat końcowy (transformacja):
- Quick win możliwy w 48–72h:
- Minimalne wymagania:
- Ryzyka:

Stwórz:
1) Quick win (co osiągasz, jak, warunek).
2) Pełna ścieżka (etapy z czasem).
3) Odpowiedzialny copy obietnicy:
   - „co tak”
   - „co nie”
4) 10 bulletów skupionych na quick win (bez obiecywania więcej).
5) Projekt onboardingu, by dowieźć quick win (krok po kroku).`,
    thumbnail: "",
  },
  {
    id: "moi-019",
    title:
      "Oferta na ‘obiekcję czasu’: produkt/usługa dla zapracowanych (struktura i copy)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Przebuduj ofertę, by minimalizować czas klienta: kadencja, mikro-zadania i wsparcie.",
    prompt: `Kontekst:
- Oferta:
- Klient (czemu zapracowany):
- Dostępny czas tygodniowo:
- Rezultat:
- Ton:

Zaprojektuj:
1) Minimalny plan wykonalny (20–30 min/dzień lub 2–3 bloki/tydz.).
2) Mikro-zadania (10) z szacowanym czasem.
3) “Wsparcie anti-zacięcie” (jak szybko odblokowujesz).
4) Copy:
   - 12 bulletów „dla zapracowanych”
   - blok landing (450–700 słów)
   - 8 FAQ pod brak czasu.`,
    thumbnail: "",
  },
  {
    id: "moi-020",
    title:
      "Oferta na ‘obiekcję pieniędzy’: struktura ceny pod wyniki (bez obiecywania niemożliwego)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Modele pricingu: pakiet, KPI, fazy — z limitami i jasnymi warunkami.",
    prompt: `Dane:
- Usługa:
- KPI:
- Obecny baseline:
- Realistyczny rezultat:
- Ryzyko:

Stwórz:
1) 4 modele pricingu (pakiet/faza/hybryda/bonus performance warunkowy).
2) Dla najlepszego modelu:
   - jak mierzyć KPI
   - co jeśli baseline się zmienia
   - limity i wyłączenia
3) Copy wyjaśniające cenę (bez defensywy).
4) 10 odpowiedzi na obiekcję „drogo” skupionych na ROI.`,
    thumbnail: "",
  },

  {
    id: "moi-021",
    title:
      "Oferta ‘dla początkujących’: usuń tarcie (glosariusz, onboarding, krok 0) + copy",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj ofertę przyjazną nowicjuszom: onboarding, przewodniki, checkpointy i wsparcie.",
    prompt: `Kontekst:
- Oferta:
- Co czyni klienta początkującym:
- Narzędzia, których NIE opanował:
- Rezultat:

Stwórz:
1) “Krok 0” (setup) z checklistą.
2) Glosariusz 15 kluczowych terminów.
3) Ścieżkę nauki:
   - 1 tydzień
   - 4 tygodnie
4) Mechanizmy anti-porzucenie (przypomnienia, wins, wsparcie).
5) Finalny copy dla początkujących:
   - 10 bulletów
   - 8 FAQ
   - wersja krótka i długa.`,
    thumbnail: "",
  },
  {
    id: "moi-022",
    title:
      "Oferta ‘dla zaawansowanych’: specjalizacja + ekskluzywność + benchmarki + copy",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Oferta dla zaawansowanych: mniej teorii, więcej optymalizacji, benchmarki i kontrola.",
    prompt: `Kontekst:
- Oferta:
- Co znaczy poziom zaawansowany:
- KPI:
- Benchmarki rynkowe:
- Cena:

Stwórz:
1) Propozycję dla zaawansowanych:
   - podejście optymalizacyjne
   - audyt + eksperymenty + review
2) 10 zaawansowanych deliverables (z liczbami).
3) Jak mierzyć sukces (dashboard).
4) Copy:
   - 12 bulletów pod performance
   - 8 FAQ
   - 5 odpowiedzialnych claimów (bez ściemy).`,
    thumbnail: "",
  },
  {
    id: "moi-023",
    title:
      "Oferta typu ‘Sprint’ (7–14 dni): intensywna, jasna, z deliverables i namacalnym efektem",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Stwórz ofertę sprint: wąski zakres, namacalny rezultat i dzienny/tygodniowy timeline.",
    prompt: `Kontekst:
- Usługa:
- Namacalny rezultat w 7–14 dni:
- Potrzebne wejścia:
- Ograniczenia:
- Cena:

Stwórz:
1) Agendę sprintu (dzień po dniu albo tygodniami).
2) Konkretne deliverables.
3) Ryzyka i mitigację.
4) Wymagania po stronie klienta.
5) Copy:
   - 1 landing (600–900 słów)
   - 12 bulletów
   - 3 CTA
   - 6 obiekcji + odpowiedzi.`,
    thumbnail: "",
  },
  {
    id: "moi-024",
    title:
      "Oferta ‘audit + roadmap’: sprzedawaj klarowność (idealne dla B2B) z naturalnym upsellem",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Oferta audytu z roadmapą: mniejsze ryzyko, większe zaufanie i drzwi do wdrożenia.",
    prompt: `Kontekst:
- Obszar audytu (ads, SEO, CRM, funnel, content):
- KPI:
- Typ firmy:
- Cena audytu:
- Upsell wdrożeniowy:

Stwórz:
1) Dokładny zakres audytu (co tak/co nie).
2) Deliverables (raport, call, roadmap, checklista).
3) Timeline (7/10/14 dni).
4) Copy:
   - 10 bulletów
   - 8 FAQ
   - CTA do audytu + CTA alternatywne do rozmowy.
5) Most do upsellu:
   - 3 sposoby zaproponowania wdrożenia bez presji.`,
    thumbnail: "",
  },
  {
    id: "moi-025",
    title:
      "Oferta z wbudowanym ‘social proof’: jak pokazywać case’y, analogie i dowody bez kłamania",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Ułóż ofertę tak, żeby dowód był częścią mechanizmu (nie tylko testimonials).",
    prompt: `Dane:
- Oferta:
- Aktualny typ dowodu:
- Czego NIE możesz twierdzić:
- Metryki, które możesz pokazać:

Stwórz:
1) 6 typów alternatywnego dowodu:
   - demonstracja
   - przed/po
   - mini badanie
   - proces
   - benchmarki
   - „dowód wysiłku”
2) Dla każdego typu:
   - przykład, jak wyglądałby u Ciebie
3) Napisz bloki na landing:
   - „Dowody”
   - „Jak to robimy”
   - „Czego możesz się spodziewać”
4) 10 FAQ o social proof (transparentnie).`,
    thumbnail: "",
  },

  {
    id: "moi-026",
    title:
      "Oferta ‘bez rozmów’: szybki checkout + automatyczny onboarding + asynchroniczne wsparcie",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zbuduj ofertę sprzedającą się bez calli: jasność, niskie ryzyko i solidny onboarding.",
    prompt: `Kontekst:
- Produkt/usługa:
- Cena:
- Poziom klienta:
- Dostępne wsparcie:
- Cel:

Zaprojektuj:
1) Elementy sprzedaży bez rozmowy:
   - jasna strona
   - FAQ
   - gwarancja/warunki
   - onboarding
2) Onboarding D0–D7 (kroki).
3) Copy:
   - blok landing “jak to działa”
   - 12 bulletów
   - 8 obiekcji + odpowiedzi
4) Checklista tarć (płatności, wątpliwości, techniczne) i jak je rozwiązać.`,
    thumbnail: "",
  },
  {
    id: "moi-027",
    title:
      "Oferta ‘z rozmową’: pre-frame, który zwiększa domknięcia (co będzie na rozmowie i jak decydujemy)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zbuduj pre-frame do rozmów: agenda, oczekiwania, kryteria decyzji i next steps.",
    prompt: `Kontekst:
- Oferta:
- Długość rozmowy:
- Cel rozmowy:
- Cena:
- Ton:

Stwórz:
1) Skrypt zaproszenia na rozmowę (WhatsApp + email).
2) Pre-frame:
   - co omówimy
   - czego NIE zrobimy
   - jak podejmiemy decyzję na końcu
3) 8 pytań diagnostycznych do rozmowy.
4) Copy na „następny krok”:
   - jeśli kwalifikuje: CTA płatność/aplikacja
   - jeśli nie: alternatywa.
5) Wiadomości follow-up po rozmowie (3).`,
    thumbnail: "",
  },
  {
    id: "moi-028",
    title:
      "Oferta ‘powtarzalny mikro-rezultat’: zdefiniuj deliverable, który zawsze pozytywnie zaskakuje",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj mały, ale cenny deliverable, który zwiększa polecenia i retencję.",
    prompt: `Kontekst:
- Usługa:
- Klient:
- Rezultat:
- Ból:
- Co byłoby miłą niespodzianką:

Stwórz:
1) 10 pomysłów na „mikro-deliverable niespodziankę”, który:
   - podbija wartość postrzeganą
   - jest łatwy do wytworzenia
2) Wybierz 1:
   - zdefiniuj szablon
   - kiedy jest dostarczany
   - jak to prezentujesz
3) Copy do pokazania klientowi:
   - wiadomość dostarczenia (WhatsApp)
   - blok na landing „zawiera”
4) Jak użyć tego jako dźwigni do poleceń.`,
    thumbnail: "",
  },
  {
    id: "moi-029",
    title:
      "Oferta ‘wg branży’: ta sama usługa dla 3 verticali z różnym copy",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Stwórz 3 wersje oferty dla różnych branż: bóle, język i KPI.",
    prompt: `Bazowe rozwiązanie:
- Co robisz:
- Rezultat:
- 3 docelowe branże:
- Dowód wg branży (jeśli jest):

Dla każdej branży:
1) Specyficzny ból (3)
2) Główny KPI (1–2)
3) Dopasowane deliverables (bullets)
4) Typowe obiekcje (3) + odpowiedzi
5) Copy oferty (250–400 słów)
6) Nagłówki (10) i bullets (12).`,
    thumbnail: "",
  },
  {
    id: "moi-030",
    title:
      "Oferta z ‘bonusem wdrożeniowym’: review + feedback + „poprawki”, by zwiększyć pewność",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Dodaj komponent review i poprawek bez zalania się: limity, kadencja i copy.",
    prompt: `Kontekst:
- Oferta:
- Pojemność review (liczba):
- Typ review (copy, ads, kreacje, funnel):
- Cena:

Stwórz:
1) Projekt bonusu wdrożeniowego:
   - ile rewizji
   - jak dostarczasz (format)
   - realistyczne SLA
   - limity (czego nie sprawdzasz)
2) Copy bonusu na landing:
   - 1 blok długi
   - 12 bulletów
3) FAQ bonusu (6).
4) Wewnętrzne zasady, by uniknąć scope creep.`,
    thumbnail: "",
  },

  {
    id: "moi-031",
    title:
      "Oferta z ‘unikalnym mechanizmem’ (Unique Mechanism): inwentarz i narracja, by pozycjonować się inaczej",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Stwórz unikalny mechanizm: nazwa, analogia, kroki i dlaczego działa.",
    prompt: `Dane:
- Co robisz:
- Konkurenci (jak oni to tłumaczą):
- Rezultat:
- Realny proces (kroki):
- Realny wyróżnik:

Stwórz:
1) 5 nazw unikalnego mechanizmu (zapamiętywalne).
2) Dla najlepszego:
   - definicja w 1 zdaniu
   - 2 jasne analogie
   - kroki (4–7)
   - „dlaczego działa” (bez ściemy)
3) Wpleć mechanizm w:
   - nagłówki (10)
   - bullets (12)
   - akapit oferty (150–220 słów).`,
    thumbnail: "",
  },
  {
    id: "moi-032",
    title:
      "Oferta ‘stack gwarancji’: gwarancja procesu + gwarancja wsparcia + gwarancja satysfakcji",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj 3 uzupełniające się gwarancje, by podbić zaufanie bez obiecywania niemożliwego.",
    prompt: `Kontekst:
- Oferta:
- Ryzyka:
- Co kontrolujesz:
- Co kontroluje klient:

Zaprojektuj:
1) Gwarancję procesu (jeśli robisz X, dostajesz Y)
2) Gwarancję wsparcia (odpowiadamy/towarzyszymy z limitami)
3) Gwarancję satysfakcji (warunkową, etyczną)

Dla każdej:
- dokładne warunki
- jak to weryfikujesz
- limity i wyłączenia
- copy (wersja prosta + formalna)
- łącznie 6 FAQ.`,
    thumbnail: "",
  },
  {
    id: "moi-033",
    title:
      "Oferta ‘bez zespołu’: dla solopreneurów (mały wysiłek, duży impact, prowadzenie krok po kroku)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Dopasuj ofertę do solopreneurów: mikro-zadania, zasoby, szablony i wsparcie.",
    prompt: `Kontekst:
- Oferta:
- Klient: solopreneur
- Czas tygodniowo:
- Narzędzia:
- Rezultat:

Stwórz:
1) Wersję “solo” (bez zespołu):
   - deliverables
   - mikro-zadania
   - quick wins
2) Checklistę wdrożenia (10–20 kroków).
3) System monitoringu (prosty scoreboard).
4) Copy:
   - 12 bulletów
   - 8 FAQ
   - 3 CTA wg tonu (bliski/premium/bezpośredni).`,
    thumbnail: "",
  },
  {
    id: "moi-034",
    title:
      "Oferta dla ‘zespołu/firmy’: pakiet ze stakeholderami, governance, raportami i kontrolą",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Pakiet B2B: role, raporty, akceptacje i metryki; copy gotowe do decków/landingów.",
    prompt: `Kontekst:
- Typ firmy:
- Obszar:
- KPI:
- Timeline:
- Cena:

Stwórz:
1) Strukturę B2B:
   - kickoff
   - kadencja spotkań
   - raporty
   - akceptacje
2) Role i odpowiedzialności (My vs Klient).
3) Deliverables (z liczbami).
4) Copy:
   - 10 korporacyjnych bulletów
   - 8 FAQ
   - 1 blok „jak pracujemy” (200–300 słów).`,
    thumbnail: "",
  },
  {
    id: "moi-035",
    title:
      "Oferta dla ‘rynku zbyt dużego wyboru’: jak uprościć decyzję (1 CTA, 1 ścieżka)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zmniejsz chaos: jedna droga, porównania wg profilu i ultra jasne copy.",
    prompt: `Kontekst:
- Oferta:
- Alternatywy na rynku:
- Dlaczego ludzie się gubią:
- Rezultat:

Stwórz:
1) Centralny komunikat (1 zdanie), który upraszcza.
2) 4 profile kupującego + rekomendacja:
   - „jeśli jesteś X, kup Y”
3) 1 jedyne CTA.
4) Minimalistyczny landing (300–450 słów).
5) 10 bulletów „klarowność” i 10 FAQ na redukcję tarcia.`,
    thumbnail: "",
  },

  {
    id: "moi-036",
    title:
      "Oferta ‘drogi konkurent’ vs ‘tani konkurent’: strategia ceny i narracja",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Pozycjonuj się vs tanio/drogo bez ataku: trade-offy, wartość i zaufanie.",
    prompt: `Kontekst:
- Twoja oferta:
- Tani konkurent (co oferuje):
- Drogi konkurent (co oferuje):
- Wyróżnik:

Stwórz:
1) Tabelę trade-offów (tekst) w 6 kryteriach.
2) Statement pozycjonujący (1–2 zdania) vs obaj.
3) Copy odpowiedzi na:
   - „jest ktoś tańszy”
   - „jest ktoś lepszy”
4) 12 bulletów i 6 FAQ na landing.`,
    thumbnail: "",
  },
  {
    id: "moi-037",
    title:
      "Oferta ‘z prowadzonym onboardingiem’: blueprint pierwszych 7 dni, by zapewnić aktywację",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Onboarding jako część wartości: mniej zwrotów i lepsze wyniki.",
    prompt: `Kontekst:
- Oferta:
- Quick win:
- Powody porzucenia:
- Wsparcie:

Stwórz onboarding D0–D7:
- cel na dzień
- konkretne zadanie (szacowany czas)
- zasób (szablon/checklista)
- walidacja (skąd wiesz, że to zrobił)

Następnie:
1) Wyjaśnij, dlaczego onboarding to część wartości (copy).
2) 10 bulletów specyficznych dla onboardingu.
3) 8 FAQ o „jak zacząć”.`,
    thumbnail: "",
  },
  {
    id: "moi-038",
    title:
      "Oferta z ‘personalizowanym roadmapem’: skalowalna personalizacja (szablony + wybór)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Personalizuj bez szaleństwa: system szablonów i selekcji po diagnozie.",
    prompt: `Kontekst:
- Oferta:
- Zmienne, które różnią się między klientami:
- Pojemność personalizacji:
- Cena:

Stwórz:
1) Diagnozę (10 pytań) do segmentacji.
2) 4 gotowe roadmaps (dla profili).
3) Jak dostarczyć roadmap w 24–48h bez zajechania się.
4) Copy:
   - 12 bulletów
   - 6 FAQ
   - blok landing (350–550 słów).`,
    thumbnail: "",
  },
  {
    id: "moi-039",
    title:
      "Oferta ‘retencja’ (SaaS/membership): zmniejsz churn strukturą miesięcznej wartości",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj miesięczną dostawę, żeby klient czuł stały postęp.",
    prompt: `Kontekst:
- Membership/SaaS:
- Powód churnu:
- Miesięczny rezultat:
- Ton:

Stwórz:
1) Kalendarz wartości na 12 tygodni:
   - temat tygodnia
   - główny element
   - element wdrożeniowy
2) 3 mechanizmy „widocznego progresu”
3) Copy:
   - miesięczna obietnica
   - 12 bulletów
   - 10 FAQ
4) Oferta roczna vs miesięczna (realne benefity).`,
    thumbnail: "",
  },
  {
    id: "moi-040",
    title:
      "Oferta ‘na Black Friday’ etycznie: rabat, bonus, limity i copy bez manipulacji",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Struktura BF: warunki, realne limity i przekonujące copy bez przesady.",
    prompt: `Kontekst:
- Produkt:
- Normalna cena:
- Oferta BF (rabat lub bonus):
- Realne okno:
- Realny stock/miejsca:
- Ton:

Stwórz:
1) 3 opcje oferty BF (rabat / bonus / bundle).
2) Wybierz najlepszą pod marżę i percepcję.
3) Copy:
   - blok landing (250–400 słów)
   - email open (450–650)
   - email last (350–550)
   - WhatsApp: 3 wiadomości
4) Zasady transparentności (co trzeba doprecyzować).`,
    thumbnail: "",
  },

  {
    id: "moi-041",
    title:
      "Oferta oparta o ‘use case’y’: 7 konkretnych przypadków, które czynią użyteczność oczywistą",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Sprzedawaj przez scenariusze: use case’y z przed/po, procesem i rezultatem.",
    prompt: `Kontekst:
- Oferta:
- Idealny klient:
- Główny rezultat:
- Branże lub segmenty:

Stwórz 7 use case’ów, każdy z:
- scenariuszem (kto, sytuacja)
- problemem
- rozwiązaniem (jak używa się oferty)
- oczekiwanym rezultatem (realistycznym)
- typową obiekcją i odpowiedzią

Następnie:
- 14 bulletów (2 na case)
- 10 nagłówków opartych o case’y
- copy landing (500–800 słów) używając tych case’ów.`,
    thumbnail: "",
  },
  {
    id: "moi-042",
    title:
      "Oferta ze ‘stackiem deliverables’ + ‘stackiem rezultatów’: oddziel deliverables od outcomes",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Ułóż ofertę w dwóch warstwach: co dostajesz i co to daje.",
    prompt: `Kontekst:
- Oferta:
- Obecne deliverables:
- Typowe rezultaty:

Stwórz:
1) Stack deliverables (10–15 bulletów) z ilościami.
2) Stack rezultatów (10–15 bulletów) powiązanych z deliverables.
3) Mapa: deliverable → rezultat (min. 8 relacji).
4) Copy:
   - 12 bulletów łączonych
   - blok landing (350–550 słów)
   - 8 FAQ o oczekiwaniach.`,
    thumbnail: "",
  },
  {
    id: "moi-043",
    title:
      "Oferta ‘anti-scope creep’: jak stawiać granice bez spadku konwersji (copy + mentalny kontrakt)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zdefiniuj granice i zakres eleganckim copy: ochrona marży i wzrost zaufania.",
    prompt: `Kontekst:
- Usługa:
- O co proszą „ponad”:
- Problemy zakresu:
- Idealny klient:

Stwórz:
1) Zakres (tak) / poza zakresem (nie) w bulletach.
2) „Zasady gry” (5–7) w ludzkim tonie.
3) Jak prosić klienta o inputy (checklista).
4) Copy budujące zaufanie:
   - „dlaczego ograniczamy”
   - „jak zapewniamy wyniki”
5) 6 FAQ o zakresie.`,
    thumbnail: "",
  },
  {
    id: "moi-044",
    title:
      "Oferta z ‘metrykami sukcesu’ (scoreboard): odpowiedzialna obietnica z KPI i checkpointami",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj scoreboard: metryki, checkpointy, progi i raportowanie.",
    prompt: `Kontekst:
- Oferta:
- KPI główny:
- KPI poboczne:
- Okres:
- Narzędzia:

Stwórz:
1) Scoreboard:
   - 5 metryk
   - jak je mierzyć
   - progi (zielony/żółty/czerwony)
2) Checkpointy (tygodniowe/co 2 tygodnie): co sprawdzacie.
3) Copy wyjaśniające „jak mierzymy sukces” na landing.
4) 8 FAQ o metrykach i atrybucji.`,
    thumbnail: "",
  },
  {
    id: "moi-045",
    title:
      "Oferta ‘ze społecznością’: jak sprawić, by community zwiększało wyniki (bez zapychaczy)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj społeczność z rytuałami i rolami, by zmniejszyć porzucenia i zwiększyć wdrożenie.",
    prompt: `Kontekst:
- Oferta:
- Typ społeczności:
- Poziom wsparcia:
- Cel:

Stwórz:
1) Strukturę społeczności:
   - kanały
   - tygodniowe rytuały
   - zasady
2) 10 momentów, w których społeczność pomaga (typowe blokady).
3) Copy:
   - 12 bulletów o społeczności
   - blok landing (200–300 słów)
   - 6 FAQ o społeczności.`,
    thumbnail: "",
  },

  {
    id: "moi-046",
    title:
      "Oferta ‘edukacja + egzekucja’: hybryda, która podbija konwersje (nauka + wdrożenie z rewizjami)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zaprojektuj hybrydę: content + prowadzone wdrożenie + rewizje z limitami.",
    prompt: `Kontekst:
- Oferta:
- Co jest edukacją:
- Co jest wykonaniem:
- Pojemność rewizji:
- Cena:

Stwórz:
1) Architekturę programu:
   - moduły
   - sesje
   - deliverables
2) Ścieżkę wdrożenia tydzień po tygodniu.
3) 8 rewizji z limitami (co sprawdzasz/czego nie).
4) Finalny copy:
   - 12 bulletów
   - 10 FAQ
   - 3 CTA.`,
    thumbnail: "",
  },
  {
    id: "moi-047",
    title:
      "Oferta dla twórców: ‘content + monetyzacja’ z pakietami i odpowiedzialnymi rezultatami",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Oferta dla creatorów: kalendarz, skrypty, system sprzedaży i wsparcie.",
    prompt: `Kontekst:
- Typ twórcy:
- Platforma:
- Oferta do sprzedaży:
- Tygodniowa produkcja:
- KPI:

Stwórz:
1) 3 pakiety (starter/growth/scale).
2) Deliverables w pakietach (kalendarz, skrypty, hooki, CTA, funnel).
3) Proces tygodniowy.
4) Copy:
   - 10 nagłówków
   - 12 bulletów
   - 8 FAQ
5) Obiekcje i odpowiedzi (cena/czas/konsekwencja).`,
    thumbnail: "",
  },
  {
    id: "moi-048",
    title:
      "Oferta ‘dla agencji’: pakiet white-label / partnership z metrykami i limitami",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Oferta B2B dla agencji: white-label, SLA, deliverables, raporty i pricing.",
    prompt: `Kontekst:
- Usługa white-label:
- Typ agencji:
- KPI:
- SLA:
- Pricing:

Stwórz:
1) 3 pakiety z deliverables na miesiąc.
2) Proces i SLA.
3) Odpowiedzialności (agencja vs Ty).
4) Copy:
   - 12 bulletów
   - 8 FAQ
   - blok „jak pracujemy” (200–350 słów).`,
    thumbnail: "",
  },
  {
    id: "moi-049",
    title:
      "Oferta z postrzeganym ‘zerowym ryzykiem’: jak obniżyć ryzyko bez rozdawania (metody i copy)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Zredukuj ryzyko: gwarancje warunkowe, dowód, onboarding, minimalny plan i transparentność.",
    prompt: `Kontekst:
- Oferta:
- Ryzyka klienta:
- Twoje ryzyka:
- Pojemność wsparcia:

Stwórz:
1) 12 pomysłów na obniżenie postrzeganego ryzyka:
   - gwarancja
   - dowód
   - onboarding
   - milestones
2) Wybierz 5 i opisz realne wdrożenie.
3) Copy:
   - bloki „bez ryzyka” (2 style)
   - 10 FAQ o ryzyku
   - 8 odpowiedzi na „a jeśli nie zadziała?”`,
    thumbnail: "",
  },
  {
    id: "moi-050",
    title:
      "Oferta ‘pełny copy’: nagłówki + bullets + „jak to działa” + CTA + FAQ (pakiet konwersji)",
    area: "Marketing i sprzedaż",
    category: "Oferty Nieodparte",
    summary:
      "Wygeneruj cały pakiet copy do oferty: nagłówek, sub, bullets, jak działa, dowód, CTA i FAQ.",
    prompt: `Kontekst:
- Oferta:
- Idealny klient:
- Główny ból:
- Główne pragnienie:
- Mechanizm:
- Cena:
- Realna pilność:
- Dowód:
- Ton:

Wygeneruj:
1) 15 nagłówków (5 bezpośrednich, 5 ciekawość, 5 premium).
2) 5 sub-headline’ów.
3) 18 bulletów korzyści (ze scenariuszami).
4) Sekcję “jak to działa” (5 kroków) ze szczegółami.
5) Sekcję “co zawiera” z deliverables i ilościami.
6) Blok “dla kogo jest/nie jest”.
7) Dowód (2 bloki):
   - testimoniale/przykłady (jeśli brak: „to, co zwykle widzimy”)
   - kompetencje/proces
8) 12 FAQ (cena, czas, wsparcie, oczekiwania, ryzyka).
9) 4 CTA (miękkie/średnie/mocne/premium).
10) Wariant krótki (200–280 słów) gotowy na social media.`,
    thumbnail: "",
  },
];
