// src/lib/prompts/text/salud-clinica-historia-clinica-triage.js

export const textPromptsSaludClinicaHistoriaClinicaTriage = [
  {
    id: "saludtriage-001",
    title: "Wstępny triage (SOR) z czerwonymi flagami",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Strukturyzuje szybką rozmowę w celu wykrycia ciężkości stanu, czerwonych flag i decyzji o poziomie opieki.",
    prompt: `Działaj jako lekarz medycyny ratunkowej z naciskiem na bezpieczeństwo pacjenta.

Dane wejściowe:
- Wiek/płeć (jeśli dotyczy).
- Powód zgłoszenia (1 zdanie).
- Początek i przebieg (godziny/dni).
- Parametry życiowe (jeśli dostępne).
- Istotne choroby współistniejące i leki.
- Alergie.
- Ciąża (jeśli dotyczy).

Zadanie:
1) Podsumuj przypadek w 2–3 linijkach.
2) Wykonaj triage w skali praktycznej (Niski/Średni/Wysoki) z uzasadnieniem.
3) Zidentyfikuj „czerwone flagi” specyficzne dla tego powodu konsultacji.
4) Zadaj 12 ukierunkowanych (nie ogólnych) pytań, aby uzupełnić wywiad ukierunkowany.
5) Zaproponuj ukierunkowane badanie fizykalne (10 punktów).
6) Zaproponuj natychmiastowy plan wg priorytetu:
   - Postępowanie domowe (jeśli zasadne).
   - Minimalne badania początkowe (jeśli zasadne).
   - Rekomendacja: SOR / konsultacja / kontrola.
7) Podaj wskazówki bezpieczeństwa: jakie objawy wymagają pilnej wizyty na SOR jeszcze dziś.
8) Dodaj na końcu empatyczną i jasną wiadomość dla pacjenta (prosty język).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-002",
    title: "Pełna anamneza (format kliniczny) na pierwszą wizytę",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Tworzy kompletny i elastyczny szablon wywiadu dostosowany do pierwszej konsultacji.",
    prompt: `Działaj jako lekarz podstawowej opieki zdrowotnej i stwórz pełną, uporządkowaną i efektywną anamnezę.

Dane wejściowe:
- Powód wizyty.
- Wiek/płeć (jeśli dotyczy).
- Kontekst (pierwsza wizyta / kontrola).

Wygeneruj:
1) Uporządkowaną listę sekcji historii choroby:
   - Aktualna dolegliwość (OPQRST + chronologia).
   - Wywiad rodzinny.
   - Wywiad chorobowy (przebyte i obecne) oraz niechorobowy.
   - Operacje/urazy.
   - Aktualne leki (dawki/godziny) + przestrzeganie zaleceń.
   - Alergie i reakcje.
   - Wywiad ginekologiczno-położniczy (jeśli dotyczy).
   - Nawyki (tytoń/alkohol/sen/aktywność/dieta).
   - Praca i czynniki ryzyka.
   - Zdrowie psychiczne (krótki screening).
2) Dla każdej sekcji zapisz konkretne pytania (nie ogólne).
3) Zakończ: listą problemów (problem list), wstępnymi hipotezami i krytycznie brakującymi danymi.
4) Dodaj jak dokumentować istotne negacje („zaprzecza…”).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-003",
    title: "Ból w klatce piersiowej: wywiad ukierunkowany + ryzyko sercowo-naczyniowe",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Zbiera ukierunkowany wywiad i stratyfikuje ryzyko w trybie pilnym.",
    prompt: `Działaj jako lekarz. Oceniasz BÓL W KLATCE PIERSIOWEJ.

Dane wejściowe:
- Wiek/płeć.
- Swobodny opis bólu (tekst pacjenta).
- Wywiad (NT, cukrzyca, dyslipidemia, palenie itd.).
- Parametry życiowe, jeśli są.

Wygeneruj:
1) 15 pytań ukierunkowanych (cechy bólu, promieniowanie, czynniki wyzwalające, ulga, czas trwania, objawy towarzyszące).
2) Specyficzne czerwone flagi (objawy i czynniki ryzyka).
3) Rozpoznania różnicowe według ciężkości:
   - Zagrażające życiu / czasozależne (top 5).
   - Umiarkowane (top 5).
   - Częste łagodne (top 5).
4) Rekomendację poziomu opieki (natychmiastowy SOR vs konsultacja) z uzasadnieniem.
5) Jasne instrukcje i ostrzeżenia bezpieczeństwa dla pacjenta.
Używaj języka jasnego i profesjonalnego. Nie wymyślaj badań ani ostatecznych diagnoz.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-004",
    title: "Duszność (brak tchu): wywiad ukierunkowany + ocena ciężkości",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Strukturyzuje pytania dotyczące duszności i określa pilność zależnie od ciężkości.",
    prompt: `Działaj jako lekarz SOR. Oceniasz DUSZNOŚĆ.

Dane wejściowe:
- Wiek/płeć.
- Początek (nagły/postępujący).
- Kontekst (spoczynek/wysiłek, niedawna infekcja, astma/POChP itd.).
- Saturacja O2, jeśli jest.

Wygeneruj:
1) Kluczowe pytania (min. 14) różnicujące przyczyny sercowe, płucne, metaboliczne i lękowe.
2) Czerwone flagi wymagające pilnej pomocy.
3) Ukierunkowane badanie fizykalne (10 cech i co oznaczają).
4) Priorytety postępowania początkowego (bezpieczeństwo) i sugerowane badania (jeśli zasadne).
5) Proste wyjaśnienie dla pacjenta, dlaczego może to być pilne.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-005",
    title: "Gorączka u dorosłego: podejście zespołowe + czynniki ryzyka",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Przewodnik do oceny gorączki, prawdopodobnego źródła i sygnałów alarmowych.",
    prompt: `Działaj jako lekarz pierwszego kontaktu. Oceniasz GORĄCZKĘ u dorosłego.

Dane wejściowe:
- Wiek.
- Czas trwania gorączki.
- Objawy towarzyszące.
- Choroby współistniejące / immunosupresja.
- Niedawne podróże/ekspozycje.

Wygeneruj:
1) Wywiad ukierunkowany (12–16 pytań).
2) Prawdopodobne ogniska wg układów (oddechowy, moczowy, przewód pokarmowy, skóra, OUN).
3) Objawy alarmowe wg wieku/chorób współistniejących.
4) Co można prowadzić w domu vs kiedy jechać na SOR.
5) Ogólne bezpieczne zalecenia (nawodnienie, kontrola temperatury, kiedy unikać NLPZ itd.).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-006",
    title: "Ból brzucha: mapa lokalizacji + sygnały alarmowe",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Ocena bólu brzucha wg kwadrantów, przebiegu i priorytetów diagnostycznych.",
    prompt: `Działaj jako lekarz. Oceniasz BÓL BRZUCHA.

Dane wejściowe:
- Wiek/płeć.
- Główna lokalizacja (kwadrant/nadbrzusze).
- Początek, przebieg, nasilenie.
- Wymioty/biegunka, gorączka, objawy moczowe, ginekologiczne (jeśli dotyczy).

Wygeneruj:
1) 18 pytań ukierunkowanych (OPQRST + objawy towarzyszące + wywiad GI/operacyjny).
2) Czerwone flagi (zapalenie otrzewnej, krwawienie, ciąża pozamaciczna itd.).
3) Różnicowanie wg lokalizacji (top 5 dla istotnego kwadrantu).
4) Plan oceny (badanie + badania dodatkowe) zależnie od ciężkości.
5) Rekomendację poziomu opieki (dom/poradnia/SOR).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-007",
    title: "Ból głowy: klasyfikacja (pierwotny vs wtórny) + czerwone flagi",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Odróżnia migrenę/ból napięciowy od groźnych przyczyn wtórnych.",
    prompt: `Działaj jako lekarz. Oceniasz BÓL GŁOWY.

Dane wejściowe:
- Wiek.
- Początek (nagły vs stopniowy).
- Czas trwania i wzorzec.
- Objawy neurologiczne.
- Wywiad (migrena, NT, antykoagulanty).

Wygeneruj:
1) 15 pytań ukierunkowanych z naciskiem na SNOOP10 (czerwone flagi).
2) Kryteria, które wymagają wizyty na SOR tego samego dnia.
3) Najważniejsze rozpoznania różnicowe (pierwotne i wtórne) z podpowiedziami klinicznymi.
4) Bezpieczne zalecenia początkowe i plan kontroli.
Unikaj ostatecznego rozpoznania; priorytetem jest bezpieczeństwo.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-008",
    title: "Ostra biegunka: ocena odwodnienia i ryzyka",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Wywiad ukierunkowany, ocena ciężkości, nawodnienie i kiedy kierować dalej.",
    prompt: `Działaj jako lekarz. Oceniasz OSTRĄ BIEGUNKĘ.

Dane wejściowe:
- Wiek.
- Czas trwania.
- Liczba stolców/dobę.
- Krew/śluz.
- Gorączka, ból.
- Ekspozycje (podróże, jedzenie, antybiotyki).
- Choroby współistniejące.

Wygeneruj:
1) 14 pytań ukierunkowanych.
2) Ocenę odwodnienia (objawy i cechy).
3) Czerwone flagi (krwawienie, wysoka gorączka, immunosupresja itd.).
4) Bezpieczne postępowanie początkowe (nawadnianie doustne, dieta, czego unikać).
5) Jasne kryteria: SOR lub pilna konsultacja.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-009",
    title: "Wymioty: prawdopodobne przyczyny + sygnały alarmowe",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Przewodnik pytań kluczowych przy ostrych wymiotach i ocenie ciężkości.",
    prompt: `Działaj jako lekarz. Oceniasz WYMIOTY.

Dane wejściowe:
- Wiek.
- Początek i częstość.
- Ból brzucha, gorączka.
- Krew w wymiotach, żółć, treść kałowa.
- Leki i alkohol.
- Ciąża (jeśli dotyczy).

Wygeneruj:
1) 12–16 pytań ukierunkowanych.
2) Czerwone flagi i wskazania do SOR.
3) Główne rozpoznania różnicowe (GI, neurologiczne, metaboliczne, toksyczne).
4) Bezpieczne zalecenia początkowe (nawadnianie, leki przeciwwymiotne tylko jako ogólna idea, bez przepisywania) i kontrola.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-010",
    title: "Objawy z układu moczowego (dyzuria): zapalenie pęcherza vs odmiedniczkowe vs STI",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Klasyfikuje ciężkość i ukierunkowuje różnicowanie w objawach moczowych.",
    prompt: `Działaj jako lekarz. Oceniasz DYZURIĘ/OBJAWY MOCZOWE.

Dane wejściowe:
- Płeć/wiek.
- Objawy: pieczenie, parcie, częstomocz, ból w okolicy lędźwiowej, gorączka.
- Ciąża (jeśli dotyczy).
- Ryzyko seksualne.

Wygeneruj:
1) 14 pytań ukierunkowanych.
2) Objawy odmiedniczkowego/komplikacji i kryteria pilności.
3) Różnicowanie: zapalenie pęcherza, STI/zapalenie cewki, zapalenie prostaty, kamica.
4) Sugerowane podstawowe badania (np. badanie ogólne moczu) i plan kontroli.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-011",
    title: "Zawroty głowy/vertigo: różnicowanie obwodowe vs ośrodkowe",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Wywiad ukierunkowany + neurologiczne czerwone flagi w zawrotach głowy.",
    prompt: `Działaj jako lekarz. Oceniasz ZAWROTY GŁOWY/WERTYGO.

Dane wejściowe:
- Wiek.
- Opis objawu (wirowanie vs niestabilność vs zasłabnięcie).
- Początek i czas trwania epizodów.
- Objawy neurologiczne, słuchowe.
- Czynniki ryzyka naczyniowego.

Wygeneruj:
1) 16 pytań ukierunkowanych.
2) Czerwone flagi (podejrzenie udaru) i zalecane działanie.
3) Różnicowanie: BPPV, zapalenie nerwu przedsionkowego, migrena przedsionkowa, hipotensja, arytmia.
4) Sugerowane badanie fizykalne (w tym nystagmus i proste próby).
5) Edukację pacjenta i kiedy wrócić natychmiast.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-012",
    title: "Ból krzyża: mechaniczny vs neurologiczny (cauda equina/czerwone flagi)",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Ocena lumbalgii i wykrywanie neurologicznych lub infekcyjnych czerwonych flag.",
    prompt: `Działaj jako lekarz. Oceniasz BÓL KRZYŻA.

Dane wejściowe:
- Wiek.
- Początek (uraz / dźwiganie / samoistny).
- Promieniowanie.
- Gorączka, spadek masy ciała.
- Zaburzenia zwieraczy lub osłabienie.

Wygeneruj:
1) 15 pytań ukierunkowanych.
2) Czerwone flagi: zespół ogona końskiego, złamanie, infekcja, nowotwór.
3) Klasyfikację pilności (rutynowe vs pilne).
4) Bezpieczny plan leczenia zachowawczego i zalecenia aktywności.
5) Jasne sygnały do SOR.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-013",
    title: "Drobny uraz: wstępna ocena i potrzeba obrazowania",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Strukturyzuje pytania i badanie po uderzeniach/upadkach oraz decyzję o skierowaniu.",
    prompt: `Działaj jako lekarz. Oceniasz DROBNY URAZ (upadek/uderzenie).

Dane wejściowe:
- Mechanizm.
- Okolica urazu.
- Ból, deformacja, ograniczenie ruchu.
- Objawy neurologiczne, jeśli głowa/szyja.

Wygeneruj:
1) Wywiad ukierunkowany zależnie od okolicy (głowa, nadgarstek, kostka, kolano).
2) Czerwone flagi (utrata przytomności, uporczywe wymioty, deformacja, drętwienie).
3) Sugerowane badanie fizykalne.
4) Rekomendację: obserwacja w domu vs natychmiastowa ocena w SOR.
5) Instrukcje pielęgnacji i objawy alarmowe.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-014",
    title: "Wysypka/zmiany skórne: alergiczna vs infekcyjna vs groźna",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Bezpieczna ocena wysypek i czerwonych flag (anafilaksja, SJS, meningokoki).",
    prompt: `Działaj jako lekarz. Oceniasz WYSYPKĘ/ZMIANY SKÓRNE.

Dane wejściowe:
- Wiek.
- Początek i przebieg.
- Lokalizacja (gdzie zaczęło i gdzie jest).
- Świąd/ból.
- Gorączka i objawy ogólne.
- Nowe leki (ostatnie 2–8 tygodni).

Wygeneruj:
1) 16 pytań ukierunkowanych.
2) Czerwone flagi: anafilaksja, zespół Stevensa-Johnsona, plamica meningokokowa, ciężka cellulitis.
3) Prawdopodobne rozpoznania różnicowe z podpowiedziami klinicznymi.
4) Rekomendację pilności i bezpieczne postępowanie początkowe.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-015",
    title: "Lęk vs przyczyna somatyczna: bezpieczny wywiad kliniczny",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Przewodnik, by nie przypisywać objawów lękowi bez wykluczenia przyczyn medycznych i wykrycia ryzyka.",
    prompt: `Działaj jako lekarz. Oceniasz OBJAWY zgodne z lękiem (kołatanie, ucisk, duszność, zawroty głowy).

Dane wejściowe:
- Wiek.
- Główny objaw.
- Początek i kontekst.
- Wywiad (kardiologiczny, tarczycowy, anemia, substancje).

Wygeneruj:
1) Pytania wykluczające przyczyny somatyczne (serce/płuca/endokrynologia/metabolizm).
2) Czerwone flagi wymagające SOR.
3) Pytania dot. zdrowia psychicznego (krótki screening) w języku pełnym szacunku.
4) Plan bezpieczeństwa i zalecenia kontroli.
Nie bagatelizuj pacjenta.`,
    thumbnail: "",
  },

  // --- Nota: Del 16 al 40 seguimos igual de "médico profesional" y detallados. ---
  {
    id: "saludtriage-016",
    title: "Wykryte nadciśnienie: potwierdzenie, ryzyko i pilność",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Ocenia wysokie wartości ciśnienia i decyduje, czy to przełom/stan nagły.",
    prompt: `Działaj jako lekarz. Oceniasz PODWYŻSZONE CIŚNIENIE TĘTNICZE.

Dane wejściowe:
- Pomiary (z godziną i sposobem pomiaru).
- Objawy: ból głowy, ból w klatce, duszność, deficyt neurologiczny, zamazane widzenie.
- Wywiad i leki.
- Ciąża (jeśli dotyczy).

Wygeneruj:
1) Checklistę potwierdzenia prawidłowego pomiaru.
2) Pytania ukierunkowane na uszkodzenie narządów docelowych.
3) Klasyfikację: kontrola ambulatoryjna vs pilne.
4) Bezpieczne zalecenia natychmiastowe + kontrola i objawy alarmowe.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-017",
    title: "Hipoglikemia/hiperglikemia: objawy, ryzyko i działania",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Triage zaburzeń glikemii i kiedy zgłosić się na SOR.",
    prompt: `Działaj jako lekarz. Oceniasz możliwe ZABURZENIA GLIKEMII.

Dane wejściowe:
- Cukrzyca tak/nie, leczenie.
- Odczyt glukozy (jeśli jest).
- Objawy (drżenie, poty, splątanie; lub wielomocz/wzmożone pragnienie, wymioty).
- Stan świadomości.

Wygeneruj:
1) Szybkie pytania różnicujące hipo vs hiperglikemię.
2) Czerwone flagi (kwasica ketonowa, stan hiperosmolarny, neuroglikopenia).
3) Bezpieczne działania natychmiastowe (wg scenariusza) i kryteria SOR.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-018",
    title: "Ciąża: ból i krwawienie w I trymestrze (bezpieczeństwo)",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Ocena pilności przy wczesnym krwawieniu/bólu w celu wykluczenia ciąży pozamacicznej.",
    prompt: `Działaj jako lekarz. Oceniasz KRWAWIENIE i/lub BÓL we wczesnej ciąży.

Dane wejściowe:
- Szacowana liczba tygodni.
- Ilość krwawienia.
- Ból (lokalizacja i nasilenie).
- Zawroty/omdlenie.
- Wywiad: ciąża pozamaciczna/UTI/operacje.

Wygeneruj:
1) Pytania ukierunkowane (min. 14).
2) Czerwone flagi ciąży pozamacicznej/wstrząsu.
3) Natychmiastową rekomendację (SOR vs konsultacja) z jasnym uzasadnieniem.
4) Empatyczny komunikat i wskazówki bezpieczeństwa.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-019",
    title: "Dziecko z gorączką: triage wg wieku i objawów alarmowych",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Strukturyzuje podstawową ocenę pediatryczną i określa pilność.",
    prompt: `Działaj jako lekarz z podejściem pediatrycznym. Oceniasz GORĄCZKĘ U DZIECKA.

Dane wejściowe:
- Dokładny wiek (miesiące/lata).
- Temperatura i metoda pomiaru.
- Czas trwania.
- Zachowanie (drażliwe, senne, je/pije).
- Szczepienia aktualne tak/nie.

Wygeneruj:
1) Pytania ukierunkowane wg układów (oddechowy, GI, moczowy, skóra).
2) Objawy alarmowe wymagające SOR (jasna lista).
3) Wskazówki dot. postępowania w domu (nawodnienie, leki przeciwgorączkowe jako ogólna idea) i kontrola.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-020",
    title: "Kaszel: infekcja łagodna vs zapalenie płuc vs astma/POChP",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Ukierunkowany wywiad przy kaszlu i kryteria ciężkości.",
    prompt: `Działaj jako lekarz. Oceniasz KASZEL.

Dane wejściowe:
- Czas trwania (ostry/podostry/przewlekły).
- Gorączka, duszność, ból opłucnowy.
- Plwocina (kolor/ilość), krwioplucie.
- Wywiad astma/POChP.

Wygeneruj:
1) 14 pytań ukierunkowanych.
2) Czerwone flagi (duszność, niska saturacja, krwioplucie, ból w klatce, splątanie).
3) Różnicowanie i rekomendację poziomu opieki.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-021",
    title: "Czerwone oko: zapalenie spojówek vs zapalenie błony naczyniowej vs ostry jaskrowy",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Ocena czerwonego oka i wykrywanie pilnych stanów okulistycznych.",
    prompt: `Działaj jako lekarz. Oceniasz CZERWONE OKO.

Dane wejściowe:
- Ból (tak/nie), światłowstręt, niewyraźne widzenie.
- Wydzielina.
- Noszenie soczewek kontaktowych.
- Uraz lub chemikalia.

Wygeneruj:
1) 12–15 pytań ukierunkowanych.
2) Czerwone flagi (silny ból, światłowstręt, pogorszenie widzenia, soczewki, chemikalia).
3) Prawdopodobne rozpoznania różnicowe i rekomendację (pilne vs konsultacja).
4) Wskazówki bezpieczeństwa (nie stosować samodzielnie kropli ze sterydem).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-022",
    title: "Ból gardła: zapalenie gardła vs ropień okołomigdałkowy",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Wywiad ukierunkowany i objawy powikłań w odynofagii.",
    prompt: `Działaj jako lekarz. Oceniasz BÓL GARDŁA.

Dane wejściowe:
- Czas trwania.
- Gorączka.
- Kaszel/katar.
- Trudność w połykaniu, stłumiony głos, szczękościsk.
- Kontakty chore.

Wygeneruj:
1) 12 pytań ukierunkowanych.
2) Czerwone flagi (duszność, stridor, szczękościsk, ślinotok, „głos jak gorący ziemniak”).
3) Różnicowanie i pilność.
4) Bezpieczne zalecenia i plan kontroli.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-023",
    title: "Ból ucha: zapalenie ucha vs zapalenie wyrostka sutkowatego (alarm)",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Przewodnik pytań i kryteria powikłań w otalgii.",
    prompt: `Działaj jako lekarz. Oceniasz BÓL UCHA.

Dane wejściowe:
- Wiek.
- Gorączka.
- Wydzielina.
- Pogorszenie słuchu.
- Ból za uchem / odstawanie małżowiny.

Wygeneruj:
1) 12 pytań ukierunkowanych.
2) Objawy zapalenia wyrostka sutkowatego/powikłań i pilność.
3) Różnicowanie i plan opieki.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-024",
    title: "Kołatanie serca: arytmia vs lęk vs stymulanty",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Wywiad ukierunkowany przy palpitacjach i czerwone flagi.",
    prompt: `Działaj jako lekarz. Oceniasz KOŁATANIE SERCA.

Dane wejściowe:
- Wiek.
- Nagły/stopniowy początek.
- Czas trwania epizodu.
- Objawy towarzyszące (omdlenie, ból w klatce, duszność).
- Kofeina/energetyki/substancje.

Wygeneruj:
1) 14 pytań ukierunkowanych.
2) Czerwone flagi (omdlenie, ból w klatce, hipotensja, wywiad rodzinny nagłej śmierci).
3) Rekomendację pilności i sugerowane badania (np. EKG), jeśli zasadne.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-025",
    title: "Obrzęk nóg: niewydolność żylna vs niewydolność serca vs DVT",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Wywiad ukierunkowany przy obrzękach i wykrywanie zakrzepicy żył głębokich.",
    prompt: `Działaj jako lekarz. Oceniasz OBRZĘK NÓG.

Dane wejściowe:
- Jednostronny vs obustronny.
- Ból, ciepło, zaczerwienienie.
- Duszność/ból w klatce.
- Wywiad (podróż, nowotwór, operacja, antykoncepcja).

Wygeneruj:
1) 14 pytań ukierunkowanych.
2) Czerwone flagi (DVT/ZP, zaostrzenie niewydolności serca).
3) Różnicowanie i natychmiastową rekomendację.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-026",
    title: "Omdlenie/synkopę: przyczyny łagodne vs ryzyko sercowe",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Strukturyzuje ocenę omdlenia z naciskiem na bezpieczeństwo.",
    prompt: `Działaj jako lekarz. Oceniasz OMDLENIE (SYNKOPĘ).

Dane wejściowe:
- Kontekst (stanie, wysiłek, ból, emocje).
- Objawy prodromalne (nudności, poty, „tunel widzenia”).
- Uraz towarzyszący.
- Wywiad sercowy/rodzinny.

Wygeneruj:
1) 16 pytań ukierunkowanych.
2) Czerwone flagi omdlenia kardiogennego.
3) Rekomendację pilności i sugerowane badania początkowe.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-027",
    title: "Niezamierzona utrata masy ciała: podejście kliniczne i różnicowanie",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Wywiad ukierunkowany przy utracie masy i objawach ogólnych.",
    prompt: `Działaj jako internista. Oceniasz NIEZAMIERZONĄ UTRATĘ MASY CIAŁA.

Dane wejściowe:
- Ilość (kg) i czas.
- Apetyt.
- Objawy: gorączka, nocne poty, biegunka, kaszel, ból.
- Wywiad i leki.

Wygeneruj:
1) 18 pytań ukierunkowanych (endokrynne, GI, infekcyjne, nowotworowe, psychiatryczne).
2) Czerwone flagi.
3) Wstępny plan oceny (badania lab./obrazowe) i kontrola.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-028",
    title: "Przewlekłe zmęczenie: wykluczyć anemię, tarczycę, depresję, sen",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Ustrukturyzowany wywiad przy zmęczeniu i plan początkowy.",
    prompt: `Działaj jako lekarz. Oceniasz ZMĘCZENIE.

Dane wejściowe:
- Czas trwania.
- Sen (godziny/jakość).
- Stres/nastrój.
- Objawy towarzyszące.
- Leki.

Wygeneruj:
1) 16 pytań ukierunkowanych.
2) Czerwone flagi (utrata masy, przewlekła gorączka, krwawienia).
3) Wstępny plan oceny i zalecenia stylu życia.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-029",
    title: "Ból stawów: zapalny vs mechaniczny + objawy alarmowe",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Wywiad ukierunkowany przy bólach stawów i podejrzeniu zapalenia.",
    prompt: `Działaj jako lekarz. Oceniasz BÓL STAWÓW.

Dane wejściowe:
- Zajęte stawy.
- Sztywność poranna i jej czas trwania.
- Widoczny obrzęk, ucieplenie.
- Gorączka, zmiany skórne.
- Wywiad autoimmunologiczny.

Wygeneruj:
1) 16 pytań ukierunkowanych.
2) Różnicowanie (ChZ, RZS, dna, spondyloartropatie, infekcyjna).
3) Czerwone flagi (septyczne zapalenie stawu).
4) Wstępny plan i pilność.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-030",
    title: "Rana/skaleczenie: ocena infekcji i potrzeba szycia",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Przewodnik dla ran: czas, zabrudzenie, tężec i alarmy.",
    prompt: `Działaj jako lekarz. Oceniasz RANĘ/SKALECZENIE.

Dane wejściowe:
- Czas od urazu.
- Głębokość i lokalizacja.
- Zabrudzenie (ziemia, zwierzę, szkło).
- Ból, zaczerwienienie, wydzielina.
- Szczepienie przeciw tężcowi (ostatnia dawka).

Wygeneruj:
1) 12 pytań ukierunkowanych.
2) Kryteria szycia/SOR.
3) Objawy infekcji i bezpieczna pielęgnacja początkowa.
4) Zalecenia kontroli.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-031",
    title: "Oparzenie: ciężkość, powierzchnia i kryteria skierowania",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Klasyfikuje oparzenia i decyduje o skierowaniu do SOR/ośrodka specjalistycznego.",
    prompt: `Działaj jako lekarz. Oceniasz OPARZENIE.

Dane wejściowe:
- Przyczyna (termiczne/chemiczne/elektryczne).
- Okolica.
- Przybliżony rozmiar.
- Pęcherze/ból.
- Wdychanie dymu (jeśli dotyczy).

Wygeneruj:
1) Kluczowe pytania kliniczne (min. 12).
2) Prawdopodobną klasyfikację (powierzchowne/częściowej grubości/głębokie) wg cech.
3) Kryteria pilnego skierowania (twarz/dłonie/genitalia, duże, chemiczne, elektryczne, inhalacyjne).
4) Bezpieczną pierwszą pomoc i czego NIE robić.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-032",
    title: "Reakcja alergiczna: pokrzywka vs anafilaksja (plan bezpieczeństwa)",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Odróżnia prostą pokrzywkę od anafilaksji i określa pilność.",
    prompt: `Działaj jako lekarz. Oceniasz REAKCJĘ ALERGICZNĄ.

Dane wejściowe:
- Objawy (bąble, obrzęk, trudności w oddychaniu, chrypka).
- Prawdopodobna ekspozycja (pokarm, lek, użądlenie).
- Czas od początku.

Wygeneruj:
1) 12 pytań ukierunkowanych.
2) Kryteria kliniczne anafilaksji (wskazanie do natychmiastowego SOR).
3) Wskazówki bezpieczeństwa i kontrola.
Nie bagatelizuj; priorytetem jest życie.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-033",
    title: "Infekcja górnych dróg oddechowych: przeziębienie vs grypa vs COVID (orientacja)",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Wywiad ukierunkowany i kryteria ciężkości w infekcjach oddechowych.",
    prompt: `Działaj jako lekarz. Oceniasz OBJAWY GÓRNYCH DRÓG ODDECHOWYCH.

Dane wejściowe:
- Liczba dni.
- Gorączka, kaszel, katar, ból gardła.
- Duszność.
- Choroby współistniejące.

Wygeneruj:
1) 14 pytań ukierunkowanych.
2) Czerwone flagi.
3) Ogólne bezpieczne zalecenia (opieka domowa) i kiedy konsultacja/SOR.
4) Racjonalne wskazówki dot. izolacji (jeśli dotyczy).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-034",
    title: "Ostry ból jądra: wykluczyć skręt (stan nagły)",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Szybka ocena bólu jądra i kryteria pilności.",
    prompt: `Działaj jako lekarz. Oceniasz OSTRY BÓL JĄDRA.

Dane wejściowe:
- Wiek.
- Nagły vs stopniowy początek.
- Nudności/wymioty.
- Uraz.
- Objawy moczowe.

Wygeneruj:
1) 12–15 pytań ukierunkowanych.
2) Czerwone flagi skrętu jądra i pilność.
3) Różnicowanie (zapalenie najądrza, przepuklina, skręt przyczepka).
4) Jasny komunikat bezpieczeństwa.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-035",
    title: "Krwawienie z odbytu: hemoroidy vs poważne przyczyny (triage)",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Wywiad ukierunkowany i objawy alarmowe w krwawieniu z odbytu.",
    prompt: `Działaj jako lekarz. Oceniasz KRWAWIENIE Z ODBYTU.

Dane wejściowe:
- Wiek.
- Kolor krwi (jasnoczerwona vs ciemna).
- Ilość i częstość.
- Ból przy wypróżnianiu.
- Utrata masy/anemia.

Wygeneruj:
1) 14 pytań ukierunkowanych.
2) Czerwone flagi (melena, anemia, hipotensja, utrata masy, >50 lat ze zmianą rytmu wypróżnień).
3) Rekomendację poziomu opieki i wstępne badania.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-036",
    title: "Ból miednicy u kobiety: ginekologiczny vs moczowy vs GI",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Wywiad ukierunkowany przy bólu miednicy i kryteria pilności.",
    prompt: `Działaj jako lekarz. Oceniasz BÓL MIEDNICY.

Dane wejściowe:
- Wiek.
- Data ostatniej miesiączki.
- Możliwa ciąża.
- Upławy, krwawienie.
- Gorączka, objawy moczowe.

Wygeneruj:
1) 16 pytań ukierunkowanych.
2) Czerwone flagi (ciąża pozamaciczna, skręt jajnika, ciężka PID).
3) Różnicowanie i rekomendację pilności.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-037",
    title: "Mrowienie/drętwienie: neuropatia vs udar",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Wywiad ukierunkowany przy parestezjach i neurologiczne czerwone flagi.",
    prompt: `Działaj jako lekarz. Oceniasz MROWIENIE/DRĘTWIENIE.

Dane wejściowe:
- Początek (nagły vs stopniowy).
- Rozmieszczenie (twarz/ręka/noga; jednostronne/obustronne).
- Towarzyszące osłabienie.
- Czynniki ryzyka (NT, cukrzyca).

Wygeneruj:
1) 14 pytań ukierunkowanych.
2) Czerwone flagi (udar/TIA, zespół rdzeniowy).
3) Różnicowanie (neuropatia obwodowa, ucisk, lęk, niedobór B12).
4) Rekomendację pilności.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-038",
    title: "Kontrola parametrów życiowych w domu: interpretacja kliniczna",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Pomaga interpretować ciśnienie, tętno, temperaturę i SpO2 w kontekście klinicznym.",
    prompt: `Działaj jako lekarz. Zinterpretuj PARAMETRY ŻYCIOWE ZMIERZONE W DOMU.

Dane wejściowe:
- Ciśnienie, tętno, temperatura, SpO2 (jeśli jest).
- Aktualne objawy.
- Wiek i choroby współistniejące.
- Leki.

Wygeneruj:
1) Weryfikację prawidłowego pomiaru (kroki).
2) Interpretację wg zakresów i kontekstu.
3) Sygnały wymagające SOR vs konsultacji.
4) Zalecenia kontroli (kiedy powtórzyć, jak notować).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-039",
    title: "Checklist przed wizytą: przygotować pacjenta do lepszej oceny",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Lista informacji i dokumentów, które pacjent powinien zabrać na skuteczną konsultację.",
    prompt: `Działaj jako lekarz. Stwórz CHECKLISTĘ dla pacjentów przed wizytą.

Dane wejściowe:
- Rodzaj konsultacji (ogólna / kardiologia / gastro / itd.).
- Główny powód.

Wygeneruj:
1) Jakie dane przynieść (objawy, chronologia, wyzwalacze).
2) Listę leków z dawkami.
3) Przydatne wcześniejsze wyniki badań.
4) Pytania, które pacjent powinien zadać.
5) Jak opisać ból/objawy (OPQRST) w 60 sekund.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-040",
    title: "Podsumowanie kliniczne do skierowania (konsultacja) w stylu profesjonalnym",
    area: "Zdrowie i Medycyna",
    category: "Historia kliniczna + triage",
    summary:
      "Zamienia luźne dane w krótkie podsumowanie kliniczne do skierowania do specjalisty.",
    prompt: `Działaj jako lekarz. Napisz PODSUMOWANIE KLINICZNE do konsultacji specjalistycznej.

Dane wejściowe:
- Powód skierowania.
- Kluczowe ustalenia.
- Istotny wywiad.
- Leki.
- Wykonane badania i wyniki (jeśli są).
- Pytania kliniczne do specjalisty.

Wygeneruj:
1) Podsumowanie 8–12 linijek (jasne i zwięzłe).
2) Listę problemów/rozpoznań różnicowych.
3) Konkretnie sformułowane pytania do specjalisty.
4) Priorytet (rutynowe vs pilne preferencyjne vs nagłe) z uzasadnieniem.`,
    thumbnail: "",
  },
];
