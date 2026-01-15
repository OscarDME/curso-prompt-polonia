// src/lib/prompts/text/salud-clinica-triage-y-anamnesis.js

export const textPromptsSaludClinicaTriageYAnamnesis = [
  {
    id: "saludtri-001",
    title: "Szybki triaż: klasyfikacja pilności w 60 sekund (bez diagnozowania)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Strukturyzuje kluczowe pytania do oceny ciężkości, priorytetyzacji i decyzji o eskalacji.",
    prompt: `Działaj jako lekarz wykonujący wstępny triaż (bez ostatecznej diagnozy).

Inputs:
- Powód konsultacji.
- Wiek.
- Istotne choroby współistniejące.
- Kontekst (ciąża, immunosupresja, antykoagulanty).

Generuj:
1) 8–12 niezbędnych pytań zamkniętych (tak/nie lub wielokrotnego wyboru).
2) 6–10 pytań otwartych dla kontekstu (początek, przebieg, nasilenie).
3) Priorytetową listę „czerwonych flag” specyficznych dla tego powodu.
4) Orientacyjną klasyfikację pilności w 4 poziomach:
   - Nagłe (teraz)
   - Pilne (dziś)
   - Priorytetowe (24–72 h)
   - Do zaplanowania
5) Rekomendację następnego kroku (konsultacja, SOR, obserwacja) z jednym zdaniem uzasadnienia.`,
    thumbnail: "",
  },

  {
    id: "saludtri-002",
    title: "Pełny wywiad typu HPI (Historia Aktualnego Problemu)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Zamienia objaw w dobrze ustrukturyzowaną i kompletną historię choroby.",
    prompt: `Działaj jako lekarz. Uporządkuj Historię Aktualnego Problemu (HPI).

Inputs:
- Główny objaw.
- Narracja pacjenta (dowolny tekst).
- Parametry życiowe, jeśli są.

Generuj:
1) HPI w formacie OLDCARTS lub równoważnym (początek, lokalizacja, czas trwania, charakter, czynniki nasilające, łagodzące, promieniowanie, przebieg w czasie, nasilenie).
2) Istotne dodatnie i ujemne objawy towarzyszące (lista).
3) Wpływ na funkcjonowanie (sen, praca, aktywność).
4) Perspektywa pacjenta: obawy, oczekiwania, cel wizyty.
5) 5 pytań „kolejnej warstwy” do pogłębienia w zależności od ustaleń.`,
    thumbnail: "",
  },

  {
    id: "saludtri-003",
    title: "Ukierunkowany przegląd układów (Review of Systems)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Generuje krótki, ale kompletny ROS dostosowany do powodu konsultacji.",
    prompt: `Działaj jako lekarz. Wygeneruj ukierunkowany Review of Systems.

Inputs:
- Powód konsultacji.
- Wiek i płeć.
- Główne choroby w wywiadzie.

Generuj:
1) ROS wg układów (ogólny, oddechowy, sercowo-naczyniowy, pokarmowy, moczowo-płciowy, neurologiczny, mięśniowo-szkieletowy, skóra, endokrynny, psychiatryczny) po 2–4 pytania na układ.
2) Zaznacz, które są „must ask” vs „nice to ask”.
3) Sygnały zmieniające priorytet (czerwone flagi) dla każdego istotnego układu.`,
    thumbnail: "",
  },

  {
    id: "saludtri-004",
    title: "Szablon triażu bólu w klatce piersiowej (najpierw bezpieczeństwo)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Krytyczne pytania i czerwone flagi dla bólu w klatce piersiowej bez wzbudzania paniki.",
    prompt: `Działaj jako lekarz w triażu. Ból w klatce piersiowej.

Inputs:
- Wiek.
- Opis bólu.
- Czynniki ryzyka (palenie, nadciśnienie, cukrzyca, dyslipidemia).

Generuj:
1) Krytyczne pytania (12–18), których nie można pominąć.
2) Jasną listę czerwonych flag (10) i dlaczego są ważne.
3) Różnicowanie: „do wykluczenia w pierwszej kolejności” vs „częste i mniej groźne” (lista).
4) Orientacyjną rekomendację pilności (teraz / dziś / 24–72 h / do zaplanowania).
5) Wiadomość dla pacjenta (3–5 zdań) wyjaśniającą, dlaczego kierujesz (lub nie) dalej.`,
    thumbnail: "",
  },

  {
    id: "saludtri-005",
    title: "Szablon triażu dla duszności",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Algorytm pytań i eskalacji dla duszności, uwzględniający astmę, infekcję i ryzyko zakrzepowe.",
    prompt: `Działaj jako lekarz w triażu: duszność.

Inputs:
- Wiek i choroby współistniejące.
- Początek (nagły/stopniowy).
- Objawy towarzyszące (gorączka, ból w klatce piersiowej, kaszel, świsty).
- Saturacja, jeśli jest.

Generuj:
1) Pytania niezbędne (15).
2) Checklistę wysokiego ryzyka (ZP, zapalenie płuc, niewydolność serca, anafilaksja).
3) Objawy wymagające natychmiastowego SOR (lista).
4) Jakie dane zebrać, jeśli dostępne (SatO2, tętno, oddechy, temperatura).
5) Sugerowany następny krok i uzasadnienie (1–2 zdania).`,
    thumbnail: "",
  },

  {
    id: "saludtri-006",
    title: "Szablon triażu bólu brzucha",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Strukturyzuje pytania wg kwadrantów, objawów towarzyszących i ryzyka chirurgicznego.",
    prompt: `Działaj jako lekarz. Triaż bólu brzucha.

Inputs:
- Lokalizacja bólu.
- Wiek/płeć.
- Możliwa ciąża tak/nie.
- Przebyte operacje.

Generuj:
1) Pytania charakteryzujące (12).
2) Krytyczne objawy towarzyszące (uporczywe wymioty, krwawienie, gorączka, żółtaczka, obrona mięśniowa).
3) Chirurgiczne czerwone flagi (lista).
4) Różnicowanie wg lokalizacji (KWADRANT/OKOLICA w krótkiej liście).
5) Orientacyjną pilność i następny krok.`,
    thumbnail: "",
  },

  {
    id: "saludtri-007",
    title: "Szablon triażu bólu głowy (wykluczyć stany nagłe)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Wykrywa sygnały alarmowe (SNOOP10) i prowadzi przez kluczowe pytania.",
    prompt: `Działaj jako lekarz. Triaż bólu głowy.

Inputs:
- Początek (nagły/stopniowy).
- Nasilenie.
- Objawy neurologiczne tak/nie.
- Wywiad (migrena, nadciśnienie, antykoagulanty).

Generuj:
1) 12–16 krytycznych pytań.
2) Listę alarmów (najgorszy ból głowy w życiu, objawy ogniskowe, gorączka, sztywność karku, po urazie, immunosupresja, ciąża itd.).
3) Częste różnicowanie, jeśli NIE ma alarmów (migrena, napięciowy, zatoki) bez diagnozowania.
4) Rekomendację pilności i krótkie wyjaśnienie dla pacjenta.`,
    thumbnail: "",
  },

  {
    id: "saludtri-008",
    title: "Triaż pediatryczny: gorączka u dziecka (bezpieczne podejście)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Prowadzi przez pytania i czerwone flagi wg wieku i stanu ogólnego bez nadmiernego straszenia.",
    prompt: `Działaj jako lekarz. Triaż pediatryczny z powodu gorączki.

Inputs:
- Wiek dziecka.
- Liczba dni gorączki.
- Maksymalna temperatura.
- Szczepienia pełne tak/nie.
- Objawy (oddechowe, GI, wysypka).

Generuj:
1) Pytania niezbędne (15) z naciskiem na nawodnienie, czujność, oddychanie.
2) Listę czerwonych flag (wyraźna senność, sztywność, trudności w oddychaniu, wybroczyny, całkowita odmowa płynów).
3) Orientacyjną rekomendację pilności (teraz/dziś/obserwacja) z uzasadnieniem.
4) Checklistę danych, które rodzice mogą zapisywać (przyjmowanie płynów, mokre pieluchy, temperatura, zachowanie).`,
    thumbnail: "",
  },

  {
    id: "saludtri-009",
    title: "Triaż ginekologiczny: nieprawidłowe krwawienie z macicy",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Kluczowe pytania o nasilenie, ciążę, anemię i pilność.",
    prompt: `Działaj jako lekarz. Triaż w nieprawidłowym krwawieniu z macicy.

Inputs:
- Wiek.
- Data ostatniej miesiączki.
- Możliwa ciąża tak/nie.
- Ilość krwawienia (podpaski/godz.).
- Ból tak/nie.

Generuj:
1) Pytania niezbędne (15) do oceny krwawienia i ryzyka.
2) Czerwone flagi (niestabilność, omdlenie, ciąża pozamaciczna, duże skrzepy, silny ból).
3) Rekomendację pilności i następny krok.
4) Jakie informacje zabrać na wizytę (zapisy, leki, wcześniejsze wyniki).`,
    thumbnail: "",
  },

  {
    id: "saludtri-010",
    title: "Triaż zdrowia psychicznego: atak paniki vs SOR",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Pytania pomagające odróżnić lęk od przyczyn somatycznych i ocenić ryzyko.",
    prompt: `Działaj jako lekarz. Triaż w kryzysie lęku/paniki.

Inputs:
- Objawy (kołatanie, duszność, ucisk).
- Początek i wyzwalacz.
- Wywiad medyczny.
- Używki/kofeina.

Generuj:
1) Pytania do wykluczenia pilnych przyczyn somatycznych (typowy ból w klatce, omdlenie, objawy ogniskowe, gorączka itd.).
2) Pytania bezpieczeństwa (ryzyko samouszkodzenia, wsparcie społeczne).
3) Sygnały do natychmiastowego SOR.
4) Plan pierwszej pomocy/uspokojenia (niefarmakologiczny) i zalecany follow-up.`,
    thumbnail: "",
  },

  {
    id: "saludtri-011",
    title: "Triaż: zakażenie dróg moczowych vs odmiedniczkowe zapalenie nerek",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Wykrywa cechy zakażenia górnego i kieruje do pilnej opieki, gdy trzeba.",
    prompt: `Działaj jako lekarz. Triaż urologiczny.

Inputs:
- Objawy (dysuria, parcie, częstomocz).
- Gorączka tak/nie.
- Ból w boku/lędźwiach tak/nie.
- Ciąża tak/nie.

Generuj:
1) Pytania niezbędne (12).
2) Checklistę zakażenia górnego/powikłanego.
3) Rekomendację pilności (dziś vs planowo) z uzasadnieniem.
4) Przydatne dane: badanie ogólne moczu/posiew, jeśli zlecane, nawodnienie i sygnały alarmowe.`,
    thumbnail: "",
  },

  {
    id: "saludtri-012",
    title: "Wywiad lekowy i alergiczny (zapobieganie błędom)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Zbiera listę leków, dawki, adherencję, reakcje i suplementy.",
    prompt: `Działaj jako lekarz. Zbierz pełny wywiad o lekach i alergiach.

Inputs:
- Częściowa lista pacjenta (jeśli jest).
- Powód konsultacji.

Generuj:
1) Pytania o: nazwę, dawkę, godzinę, wskazanie, kto zalecił, adherencję.
2) Pytania o OTC, suplementy, zioła, „domowe środki”.
3) Alergie: typ reakcji, ciężkość, data, prawdziwa alergia vs nietolerancja.
4) Ogólne czerwone flagi interakcji w zależności od powodu konsultacji (lista).`,
    thumbnail: "",
  },

  {
    id: "saludtri-013",
    title: "Krótki wywiad do telemedycyny (maksymalna efektywność)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Krótki format do konsultacji zdalnej: kluczowe dane, alarmy i plan eskalacji.",
    prompt: `Działaj jako lekarz w telemedycynie. Masz być efektywny.

Inputs:
- Powód konsultacji.
- Wiek/płeć.
- Choroby współistniejące.
- Dostęp do pomiaru parametrów życiowych tak/nie.

Generuj:
1) 10 niezbędnych pytań (w kolejności).
2) 5 pytań opcjonalnych zależnych od odpowiedzi.
3) „Jeśli mówi X → zapytaj Y” (proste drzewko decyzyjne w tekście).
4) Zakończenie: podsumowanie + kiedy SOR + kiedy follow-up.`,
    thumbnail: "",
  },

  {
    id: "saludtri-014",
    title: "Wywiad bólu: skala, ograniczenia i cele pacjenta",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Strukturyzuje ból w wymiarach klinicznych i mierzalnych celach funkcjonalnych.",
    prompt: `Działaj jako lekarz. Zbierz pełną historię bólu.

Inputs:
- Lokalizacja i typ bólu.
- Czas trwania.
- Dotychczasowe leczenie.

Generuj:
1) Pytania o: natężenie (0–10), jakość, promieniowanie, częstość, wyzwalacze.
2) Wpływ na funkcjonowanie (co przestał/powinna robić).
3) Cel pacjenta (co dla niego oznacza „poprawa”).
4) Czerwone flagi bólu (neurologiczne, gorączka, spadek masy, uraz).`,
    thumbnail: "",
  },

  {
    id: "saludtri-015",
    title: "Triaż oddechowy: kaszel (ostry vs przewlekły) + czerwone flagi",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Klasyfikuje kaszel wg czasu trwania i wykrywa sygnały alarmowe w sposób uporządkowany.",
    prompt: `Działaj jako lekarz. Triaż z powodu kaszlu.

Inputs:
- Czas trwania kaszlu.
- Gorączka tak/nie.
- Ból w klatce piersiowej tak/nie.
- Odkrztuszanie (kolor/krew).
- Kontakty/ostatnie choroby.

Generuj:
1) Kluczowe pytania (15) podzielone na: ostry (<3 tygodnie) vs podostry/przewlekły.
2) Czerwone flagi (krwioplucie, utrata masy, duszność, niska saturacja, ból opłucnowy).
3) Rekomendację pilności i następny krok.`,
    thumbnail: "",
  },

  {
    id: "saludtri-016",
    title: "Triaż dermatologiczny: wysypka/rash (wykluczyć stany nagłe)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Pytania do rozpoznania ciężkiej alergii, poważnej infekcji i potrzeby natychmiastowej opieki.",
    prompt: `Działaj jako lekarz. Triaż z powodu wysypki.

Inputs:
- Początek i rozmieszczenie.
- Świąd/ból.
- Gorączka tak/nie.
- Nowe leki tak/nie.
- Trudności w oddychaniu tak/nie.

Generuj:
1) Pytania niezbędne (15).
2) Lista stanów pilnych: anafilaksja, podejrzenie Stevens-Johnsona (zmiany śluzówkowe), wybroczyny z gorączką, rozległa cellulitis.
3) Orientacyjna klasyfikacja i następny krok.`,
    thumbnail: "",
  },

  {
    id: "saludtri-017",
    title: "Triaż mięśniowo-szkieletowy: ostry uraz (skręcenie/uraz)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Ocena mechanizmu, ograniczenia funkcji, statusu nerwowo-naczyniowego i potrzeby RTG.",
    prompt: `Działaj jako lekarz. Triaż ostrego urazu.

Inputs:
- Miejsce urazu.
- Mechanizm (skręcenie, uderzenie, upadek).
- Czy może obciążać/poruszać.
- Obrzęk/deformacja.

Generuj:
1) Pytania niezbędne (12).
2) Checklistę nerwowo-naczyniową (czucie, kolor, temperatura, tętno obwodowe).
3) Sygnały do SOR i kiedy wskazać obrazowanie.
4) Ogólne zalecenia wstępne (RICE/środki) bez przepisywania dawek.`,
    thumbnail: "",
  },

  {
    id: "saludtri-018",
    title: "Ukierunkowany wywiad rodzinny i społeczny pod kątem ryzyka",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Strukturyzuje istotny wywiad rodzinny i społeczny bez przeciągania.",
    prompt: `Działaj jako lekarz. Zbierz istotny wywiad rodzinny/społeczny.

Inputs:
- Powód konsultacji.
- Wiek.
- Aktualne rozpoznania.

Generuj:
1) Rodzinne pytania „wysokiego znaczenia” (sercowo-naczyniowe, cukrzyca, kluczowe nowotwory, zakrzepica).
2) Społeczne: tytoń, alkohol, substancje, praca, sen, aktywność, dieta.
3) Wskaźniki ryzyka i jak zmieniają plan (krótka lista).`,
    thumbnail: "",
  },

  {
    id: "saludtri-019",
    title: "Triaż zawrotów głowy/omdlenia (wykluczyć przyczyny groźne)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Różnicuje zawroty wirowe, przedsynkopę i przyczyny sercowe/neurologiczne ukierunkowanymi pytaniami.",
    prompt: `Działaj jako lekarz. Triaż zawrotów głowy/omdlenia.

Inputs:
- Typ (wirowanie otoczenia, niestabilność, omdlenie).
- Wyzwalacz (pozycja, wysiłek).
- Czas trwania.
- Leki.

Generuj:
1) Pytania krytyczne (16).
2) Czerwone flagi (ból w klatce, kołatanie, objawy ogniskowe, uraz, ciąża).
3) Rekomendację pilności i następny krok.`,
    thumbnail: "",
  },

  {
    id: "saludtri-020",
    title: "Triaż bólu gardła (unikać niepotrzebnych antybiotyków)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Zbiera dane typu Centor i czerwone flagi ropnia okołomigdałkowego.",
    prompt: `Działaj jako lekarz. Triaż odynofagii/faryngitis.

Inputs:
- Liczba dni.
- Gorączka tak/nie.
- Kaszel tak/nie.
- Wysięk/migdałki tak/nie.
- Bolesne węzły chłonne tak/nie.

Generuj:
1) Pytania niezbędne (12).
2) Sygnały alarmowe (przytłumiony głos, szczękościsk, przemieszczenie języczka, trudność w połykaniu śliny).
3) Orientacyjną klasyfikację i czy wymaga oceny dziś.`,
    thumbnail: "",
  },

  {
    id: "saludtri-021",
    title: "Wywiad objawów przewlekłych (zamienić chaos w strukturę)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Porządkuje liczne objawy na osi czasu i wg wzorców, aby posunąć diagnostykę różnicową.",
    prompt: `Działaj jako lekarz. Pacjent ma wiele przewlekłych objawów.

Inputs:
- Lista objawów.
- Całkowity czas trwania.
- Wcześniejsze badania.

Generuj:
1) Oś czasu (pierwszy objaw → zmiany).
2) Grupowanie wg układów.
3) 10 pytań do znalezienia wzorca (związek z jedzeniem, cyklem, snem, stresem, wysiłkiem).
4) 5 czerwonych flag i 5 danych uspokajających.
5) Następne kroki do doprecyzowania (bez przepisywania).`,
    thumbnail: "",
  },

  {
    id: "saludtri-022",
    title: "Triaż ran: skaleczenie/oparzenie/ugryzienie",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Ocena głębokości, krwawienia, infekcji i potrzeby szczepienia/tężca (bez podawania dokładnego schematu).",
    prompt: `Działaj jako lekarz. Triaż ran.

Inputs:
- Typ (skaleczenie/oparzenie/ugryzienie).
- Czas od zdarzenia.
- Głębokość/obszar.
- Ból, zaczerwienienie, ropa, gorączka.
- Status szczepienia przeciw tężcowi (jeśli wiadomo).

Generuj:
1) Pytania niezbędne (14).
2) Sygnały pilności (krwawienie nie do opanowania, utrata czucia, rozległe oparzenie, głębokie ugryzienie dłoni/twarzy, objawy ogólne).
3) Bezpieczne postępowanie początkowe (oczyszczenie, opatrunek, uniesienie) bez niebezpiecznych zaleceń.
4) Kiedy ponownie ocenić i co obserwować.`,
    thumbnail: "",
  },

  {
    id: "saludtri-023",
    title: "Triaż kardiometaboliczny: wysokie ciśnienie wykryte w domu",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Odróżnia pilny przełom nadciśnieniowy od pojedynczego pomiaru i wskazuje, jakie dane zebrać.",
    prompt: `Działaj jako lekarz. Triaż z powodu wysokiego ciśnienia w domu.

Inputs:
- Pomiary (ciśnienie i godzina).
- Objawy (ból głowy, zamazane widzenie, ból w klatce, duszność).
- Aktualne leki hipotensyjne.

Generuj:
1) Pytania o technikę pomiaru (pozycja, odpoczynek, mankiet).
2) Objawy ostrego uszkodzenia narządowego (czerwone flagi).
3) Rekomendację: pilnie vs kontrola planowa.
4) Protokół zapisu ciśnienia przez 3–7 dni (w tekście).`,
    thumbnail: "",
  },

  {
    id: "saludtri-024",
    title: "Wywiad nawyków (dieta/aktywność) bez oceniania",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Zbiera nawyki w sposób życzliwy i przydatny do planu klinicznego.",
    prompt: `Działaj jako lekarz. Pytaj o nawyki bez oceniania.

Inputs:
- Rozpoznanie lub cel (masa ciała, lipidy, glukoza, nadciśnienie).
- Kulturowe preferencje żywieniowe.
- Dostępny czas.

Generuj:
1) Pytania, by poznać realny wzorzec (24-godzinny recall + weekendy).
2) Pytania o aktywność fizyczną (rodzaj, częstość, bariery).
3) Sen i stres (po 2–3 pytania).
4) Podsumowanie w 6 punktach: „co już robisz dobrze” + „szanse na poprawę”.`,
    thumbnail: "",
  },

  {
    id: "saludtri-025",
    title: "Triaż biegunki/wymiotów: nawodnienie i ryzyko",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Wykrywa odwodnienie, krew, wysoką gorączkę i potrzebę pilnej pomocy.",
    prompt: `Działaj jako lekarz. Triaż gastroenteritis.

Inputs:
- Liczba dni objawów.
- Liczba wypróżnień/wymiotów.
- Krew w stolcu tak/nie.
- Gorączka tak/nie.
- Możliwość picia płynów.

Generuj:
1) Pytania niezbędne (14).
2) Objawy odwodnienia wg ciężkości.
3) Sygnały alarmowe (krew, silny ból miejscowy, utrzymująca się gorączka, immunosupresja).
4) Rekomendację pilności i kolejne kroki.`,
    thumbnail: "",
  },

  {
    id: "saludtri-026",
    title: "Wywiad ukierunkowany na zakrzepicę/ZP (ryzyko) bez straszenia",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Kluczowe pytania o unieruchomienie, operacje, antykoncepcję i objawy towarzyszące.",
    prompt: `Działaj jako lekarz. Wywiad ryzyka zakrzepowego.

Inputs:
- Główny objaw (duszność, ból w klatce, obrzęk nogi).
- Wiek.
- Niedawne sytuacje (podróże, operacja, poród, unieruchomienie).

Generuj:
1) Pytania o ryzyko (12).
2) Krytyczne objawy towarzyszące.
3) Lista sygnałów do natychmiastowego SOR.
4) Jak wyjaśnić pacjentowi, czemu o to pytasz (3 zdania).`,
    thumbnail: "",
  },

  {
    id: "saludtri-027",
    title: "Triaż bólu oka/zamazanego widzenia",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Ocena objawów wzrokowych mogących być pilne (jaskra, odwarstwienie, keratitis).",
    prompt: `Działaj jako lekarz. Triaż okulistyczny.

Inputs:
- Ból oka tak/nie.
- Nagła utrata widzenia tak/nie.
- Fotofobia tak/nie.
- Wydzielina tak/nie.
- Soczewki kontaktowe tak/nie.

Generuj:
1) Pytania niezbędne (12).
2) Czerwone flagi do SOR (nagła utrata, halo, silny ból, uraz, soczewki + ból).
3) Rekomendację działania (SOR / okulista dziś / kontrola).`,
    thumbnail: "",
  },

  {
    id: "saludtri-028",
    title: "Triaż alergii: pokrzywka vs anafilaksja",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Identyfikuje zajęcie oddechowe/krążeniowe i decyduje o natychmiastowej pilności.",
    prompt: `Działaj jako lekarz. Triaż reakcji alergicznej.

Inputs:
- Objawy (pokrzywka, obrzęk, trudności w oddychaniu).
- Prawdopodobna ekspozycja (pokarm, lek, użądlenie).
- Czas od ekspozycji.

Generuj:
1) Pytania niezbędne (12).
2) Kryteria możliwej anafilaksji (prosto).
3) Sygnały natychmiastowego zagrożenia i co zrobić.
4) Jeśli to nie anafilaksja: co obserwować i follow-up.`,
    thumbnail: "",
  },

  {
    id: "saludtri-029",
    title: "Triaż endokrynny: hipoglikemia/hiperglikemia w domu",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Bezpieczne pytania o objawy i skrajne wartości bez podawania konkretnego leczenia.",
    prompt: `Działaj jako lekarz. Triaż glikemii w domu.

Inputs:
- Odczyt(y) glukozy i godzina.
- Objawy (drżenie, poty, splątanie, pragnienie, wymioty).
- Aktualne leczenie (insulina/leki przeciwcukrzycowe).

Generuj:
1) Pytania niezbędne (12).
2) Sygnały pilności (zaburzenia świadomości, uporczywe wymioty, nieprawidłowy oddech, ciężkie odwodnienie).
3) Rekomendację działania (SOR dziś vs kontakt z lekarzem vs obserwacja) z uzasadnieniem.`,
    thumbnail: "",
  },

  {
    id: "saludtri-030",
    title: "Wywiad bólu stawów: zapalny vs mechaniczny",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Pytania o sztywność poranną, zajęte stawy i objawy ogólnoustrojowe.",
    prompt: `Działaj jako lekarz. Wywiad bólu stawów.

Inputs:
- Zajęte stawy.
- Czas trwania.
- Sztywność poranna i jej czas.
- Obrzęk/ucieplenie tak/nie.

Generuj:
1) 12 kluczowych pytań dla wzorca zapalnego vs mechanicznego.
2) Objawy ogólnoustrojowe do poszukiwania (gorączka, utrata masy, wysypka).
3) Czerwone flagi (ostra monoartritis, gorączka + staw, całkowita niezdolność).
4) Zalecany następny krok (ocena, badania) bez przepisywania.`,
    thumbnail: "",
  },

  {
    id: "saludtri-031",
    title: "Triaż neurologiczny: nagła słabość/drętwienie",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Wykrywa możliwe ostre zdarzenia neurologiczne i uruchamia pilną ścieżkę.",
    prompt: `Działaj jako lekarz. Triaż neurologiczny przy osłabieniu/drętwieniu.

Inputs:
- Początek (dokładna godzina).
- Obszary zajęte.
- Zaburzenia mowy/widzenia tak/nie.
- Silny ból głowy tak/nie.

Generuj:
1) Krytyczne pytania (12) ukierunkowane na udar i stany nagłe.
2) Jasne sygnały do natychmiastowego SOR.
3) Wiadomość do pacjenta, dlaczego to pilne (3 zdania).`,
    thumbnail: "",
  },

  {
    id: "saludtri-032",
    title: "Triaż położniczy: ból brzucha w ciąży",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Ocena krwawienia, ruchów płodu, skurczów i stanów nagłych.",
    prompt: `Działaj jako lekarz. Triaż w ciąży.

Inputs:
- Tydzień ciąży.
- Ból i lokalizacja.
- Krwawienie tak/nie.
- Gorączka tak/nie.
- Ruchy płodu (jeśli dotyczy).

Generuj:
1) Pytania niezbędne (14).
2) Czerwone flagi (obfite krwawienie, silny ból, gorączka, zmniejszenie ruchów, odpływanie płynu).
3) Natychmiastową rekomendację (SOR dziś vs pilna ocena).`,
    thumbnail: "",
  },

  {
    id: "saludtri-033",
    title: "Szybki wywiad do wizyty kontrolnej (follow-up)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Checklista do wizyt kontrolnych: adherencja, działania niepożądane, cele i korekty.",
    prompt: `Działaj jako lekarz. Wizyta kontrolna.

Inputs:
- Rozpoznanie w kontroli.
- Aktualne leczenie.
- Cel (np. ciśnienie, A1c, objawy).

Generuj:
1) 10 kluczowych pytań o adherencję, działania niepożądane i zmiany.
2) „Co się poprawiło” vs „co się pogorszyło” (2 listy).
3) Sygnały alarmowe między wizytami.
4) Następne kroki i plan kontroli (ogólnie).`,
    thumbnail: "",
  },

  {
    id: "saludtri-034",
    title: "Triaż u osób starszych: upadki i ryzyko",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Ocena urazu, antykoagulantów, omdlenia i pogorszenia funkcjonalnego.",
    prompt: `Działaj jako lekarz. Triaż po upadku u osoby starszej.

Inputs:
- Wiek.
- Jak doszło do upadku.
- Uderzenie głową tak/nie.
- Antykoagulanty tak/nie.
- Utrata przytomności tak/nie.

Generuj:
1) Pytania niezbędne (14).
2) Czerwone flagi do SOR (silny ból głowy, wymioty, senność, silny ból, deformacja).
3) Orientacyjną ocenę przyczyny (mechaniczna vs omdlenie) z pytaniami naprowadzającymi.
4) Zalecany następny krok.`,
    thumbnail: "",
  },

  {
    id: "saludtri-035",
    title: "Triaż bólu ucha / otitis vs SOR",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Strukturyzuje pytania o nasilenie, gorączkę, wyciek i podejrzenie mastoiditis.",
    prompt: `Działaj jako lekarz. Triaż bólu ucha.

Inputs:
- Wiek.
- Gorączka tak/nie.
- Wyciek tak/nie.
- Ból przy poruszaniu małżowiną tak/nie.

Generuj:
1) Pytania niezbędne (12).
2) Sygnały alarmowe (silny ból + wysoka gorączka, obrzęk za uchem, silne zawroty, porażenie nerwu twarzowego).
3) Rekomendację pilności i następny krok.`,
    thumbnail: "",
  },

  {
    id: "saludtri-036",
    title: "Wywiad w nawracających infekcjach (szukanie wzorca)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Zamienia powtarzające się epizody w hipotezy: ekspozycje, choroby współistniejące, odporność.",
    prompt: `Działaj jako lekarz. Nawracające infekcje.

Inputs:
- Typ infekcji (oddechowe, moczowe, skóra).
- Częstość i przybliżone daty.
- Dotychczasowe leczenie.

Generuj:
1) Oś czasu epizodów (struktura).
2) 12 pytań o czynniki predysponujące (cukrzyca, palenie, higiena, anatomia, seksualność, praca).
3) Sygnały do pogłębionej oceny (niedobór odporności, spadek masy, przedłużająca się gorączka).
4) Ogólne następne kroki.`,
    thumbnail: "",
  },

  {
    id: "saludtri-037",
    title: "Triaż bólu zęba / zakażenia odontogennego",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Identyfikuje ropień, cellulitis twarzy i zagrożenie drożności dróg oddechowych.",
    prompt: `Działaj jako lekarz. Triaż stomatologiczny.

Inputs:
- Ból zęba.
- Obrzęk twarzy tak/nie.
- Gorączka tak/nie.
- Trudność w otwieraniu ust lub połykaniu tak/nie.

Generuj:
1) Pytania niezbędne (12).
2) Czerwone flagi (szczękościsk, duszność, wysoka gorączka, szybko narastający obrzęk, zajęcie okolicy oczodołu).
3) Rekomendację: SOR vs dentysta dziś.
4) Wiadomość dla pacjenta wyjaśniającą priorytet.`,
    thumbnail: "",
  },

  {
    id: "saludtri-038",
    title: "Triaż bólu miednicy (kobieta): wykluczyć stany nagłe",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Ocena ciąży pozamacicznej, skrętu jajnika, PID poprzez kluczowe pytania.",
    prompt: `Działaj jako lekarz. Triaż bólu miednicy.

Inputs:
- Wiek.
- Data ostatniej miesiączki.
- Możliwa ciąża tak/nie.
- Gorączka tak/nie.
- Nieprawidłowa wydzielina z pochwy tak/nie.

Generuj:
1) Pytania niezbędne (15).
2) Czerwone flagi (nagły silny ból, omdlenie, krwawienie, wysoka gorączka, ciąża).
3) Rekomendację pilności i następny krok.`,
    thumbnail: "",
  },

  {
    id: "saludtri-039",
    title: "Triaż bólu jądra (pilność zależna od czasu)",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Wykrywa skręt jądra i priorytetyzuje natychmiastowe skierowanie.",
    prompt: `Działaj jako lekarz. Triaż bólu jądra.

Inputs:
- Początek (dokładna godzina).
- Ból nagły/stopniowy.
- Nudności/wymioty tak/nie.
- Uraz tak/nie.
- Gorączka/dysuria tak/nie.

Generuj:
1) Pytania krytyczne (12).
2) Objawy skrętu (nagły, silny, nudności, uniesienie jądra) prostym językiem.
3) Jasną rekomendację natychmiastowego SOR, jeśli dotyczy (bez dwuznaczności).
4) Wiadomość dla pacjenta, dlaczego czas ma znaczenie.`,
    thumbnail: "",
  },

  {
    id: "saludtri-040",
    title: "Podsumowanie triażu gotowe do wklejenia do notatki klinicznej",
    area: "Zdrowie i Medycyna",
    category: "Triaż i wywiad",
    summary:
      "Zamienia odpowiedzi pacjenta w krótkie, użyteczne podsumowanie kliniczne.",
    prompt: `Działaj jako lekarz. Podsumuj triaż w formacie klinicznym.

Inputs:
- Powód konsultacji.
- Odpowiedzi na kluczowe pytania.
- Parametry życiowe, jeśli są.

Generuj:
1) Podsumowanie w 6–10 linijkach, kliniczne, bez przymiotników.
2) Istotne dodatnie i ujemne ustalenia.
3) Ocena ryzyka (niskie/umiarkowane/wysokie) z jednym zdaniem.
4) Zalecany plan natychmiastowy (bez przepisywania).`,
    thumbnail: "",
  },
];
