// src/lib/prompts/text/finanzas-contabilidad-presupuesto-planificacion.js

export const textPromptsFinanzasContabilidadPresupuestoPlanificacion = [
  {
    id: "finpres-001",
    title: "Spersonalizowany budżet miesięczny 50/30/20 + metryki kontroli",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Tworzy realistyczny i mierzalny budżet dla Twojej sytuacji z jasnymi zasadami.",
    prompt: `Działaj jako doradca finansowy (praktyczne podejście, bez obiecywania zysków).

Inputs:
- Miesięczny dochód netto.
- Długi (rodzaj, oprocentowanie, minimalna rata).
- Stałe wydatki (czynsz, rachunki, transport itd.).
- Wydatki zmienne.
- Cele (oszczędzanie, poduszka bezpieczeństwa, duży zakup).
- Tolerancja ryzyka (niska/średnia/wysoka).

Generuj:
1) Miesięczny budżet w stylu 50/30/20 dopasowany do moich liczb (jeśli nie pasuje, zaproponuj inną strukturę).
2) Tabela: kategoria | kwota | % | limit tygodniowy.
3) Zasady kontroli (top 7), aby nie rozwalić budżetu.
4) 5 kluczowych metryk do sprawdzenia co tydzień (z progami).
5) Plan korekty, jeśli trafi się zły miesiąc (dochód spada o 20%).`,
    thumbnail: "",
  },

  {
    id: "finpres-002",
    title: "Budżet zero-based (Zero-Based Budget) krok po kroku",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Przypisuje każdą złotówkę/dolara do celu, aby wyeliminować przecieki i wydawać świadomie.",
    prompt: `Działaj jako coach finansowy.

Inputs:
- Miesięczny dochód netto.
- Lista stałych i zmiennych wydatków z ostatniego miesiąca.
- Cele finansowe (3).
- Aktualne oszczędności.
- Używane konto(a) bankowe.

Generuj:
1) Budżet zero-based z sugerowanymi kategoriami.
2) Dokładny przydział: stałe, zmienne, oszczędności, fundusz awaryjny, dług, rozrywka.
3) Jak często przesuwać pieniądze (co tydzień/co 2 tygodnie) i jak.
4) Szablon tygodniowego przeglądu (checklista).
5) 10 „bezbolesnych” cięć dopasowanych do moich wydatków.`,
    thumbnail: "",
  },

  {
    id: "finpres-003",
    title: "Plan zbudowania funduszu awaryjnego (3–6 miesięcy) bez duszenia się",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Buduje finansową poduszkę z kamieniami milowymi, terminami i automatyzacją.",
    prompt: `Działaj jako konserwatywny doradca finansowy.

Inputs:
- Miesięczne wydatki podstawowe (tylko niezbędne).
- Aktualne oszczędności.
- Stabilność dochodu (stabilny/zmienny).
- Osoby na utrzymaniu (tak/nie).
- Ryzyka (zdrowie, auto, praca).

Generuj:
1) Rekomendowany cel awaryjny (3, 4,5 lub 6 miesięcy) z uzasadnieniem.
2) Plan wpłat tygodniowo/miesięcznie, aby dojść do celu w X miesięcy (zaproponuj 3 scenariusze).
3) Gdzie trzymać środki (bezpieczne opcje, płynność) bez wymieniania marek, jeśli nie trzeba.
4) Zasady użycia: kiedy wolno / kiedy nie ruszać.
5) Miesięczną checklistę utrzymania i uzupełniania, jeśli skorzystam.`,
    thumbnail: "",
  },

  {
    id: "finpres-004",
    title: "Agresywny plan wyjścia z długów (lawina vs kula śnieżna)",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Strategia szybszej spłaty długów z kalendarzem płatności i cięciami kosztów.",
    prompt: `Działaj jako doradca finansowy i analityk.

Inputs:
- Lista długów: saldo, oprocentowanie, minimalna rata.
- Miesięczny dochód netto.
- Dodatkowa miesięczna kwota na spłatę.
- Preferencja: szybka motywacja vs oszczędność na odsetkach.

Generuj:
1) Porównanie metody lawiny vs kuli śnieżnej na moich liczbach.
2) Miesięczny harmonogram spłat (pierwsze 6 miesięcy szczegółowo + podsumowanie roczne).
3) Jak redystrybuować płatności, gdy dług zostanie spłacony.
4) 10 pomysłów na uwolnienie cashflow w tym miesiącu.
5) Zasady, aby nie wrócić do długów (system zapobiegania).`,
    thumbnail: "",
  },

  {
    id: "finpres-005",
    title: "Tygodniowy plan cashflow dla zmiennych dochodów",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Organizuje pieniądze tygodniami i priorytetami, jeśli zarabiasz z prowizji/sprzedaży.",
    prompt: `Działaj jako planista finansowy dla freelancerów/przedsiębiorców.

Inputs:
- Szacowane dochody tygodniowe (ostatnie 8 tygodni).
- Stałe koszty z terminami płatności.
- Średnie wydatki zmienne.
- Długi i cele.
- Metoda wypłaty (dziennie/tygodniowo/co 2 tygodnie).

Generuj:
1) System „bucketów” (kubków) i sugerowane %.
2) Tygodniowy kalendarz przydziału (w który dzień co odkładać).
3) Zasadę priorytetu, gdy wpływają pieniądze (dokładna kolejność).
4) Plan na słabe tygodnie (próg i działania).
5) Checklistę tygodniowego zamknięcia (15 min).`,
    thumbnail: "",
  },

  {
    id: "finpres-006",
    title: "Budżet dla pary/rodziny (sprawiedliwy model) + ustalenia",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Tworzy wspólny system bez kłótni: wkłady, cele i zasady.",
    prompt: `Działaj jako mediator finansowy.

Inputs:
- Dochód netto każdej osoby.
- Wydatki wspólne i osobiste.
- Cele (dom, podróż, awaryjny, długi).
- Styl wydawania (oszczędny/rozrzutny/mieszany).

Generuj:
1) Rekomendowany model (50/50, proporcjonalny, hybrydowy) z uzasadnieniem.
2) Budżet wspólny i osobisty z kwotami.
3) Zasady: duże zakupy, subskrypcje, awarie, długi.
4) Miesięczne spotkanie finansowe (agenda + checklista).
5) „Pisane porozumienie” na 1 stronę do symbolicznego podpisu.`,
    thumbnail: "",
  },

  {
    id: "finpres-007",
    title: "Roczny plan celów finansowych (OKR) z miesięcznymi kamieniami milowymi",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Zamienia cele w mierzalne OKR-y i miesięczny monitoring.",
    prompt: `Działaj jako doradca finansowy nastawiony na cele.

Inputs:
- Cele (maks. 5) z kwotą i docelową datą.
- Dochód obecny i oczekiwany.
- Długi.
- Aktualne oszczędności.
- Ryzyka i priorytety.

Generuj:
1) Finansowe OKR-y (Objectives + Key Results) na 12 miesięcy.
2) Miesięczne kamienie milowe z dokładnymi kwotami.
3) Wskaźniki wyprzedzające (nawyki) i opóźnione (wyniki).
4) Plan przeglądu kwartalnego: co korygować i jak.
5) Szablon „dashboardu” w tekście do skopiowania do Notion/Sheets.`,
    thumbnail: "",
  },

  {
    id: "finpres-008",
    title: "Plan zakupu dużej rzeczy (auto/dom/sprzęt) bez utraty płynności",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Określa, ile oszczędzać, ile finansować i jak nie rozwalić stabilności.",
    prompt: `Działaj jako doradca finansowy.

Inputs:
- Co chcesz kupić i szacowany koszt.
- Dostępne oszczędności.
- Miesięczny dochód netto.
- Aktualne długi.
- Pilność (wysoka/średnia/niska).
- Tolerancja ryzyka.

Generuj:
1) Rekomendowaną maksymalną ratę miesięczną (konserwatywna zasada).
2) Plan oszczędzania na wkład własny z 3 scenariuszami (szybki/średni/luźny).
3) Wpływ na budżet miesięczny i co uciąć.
4) Checklistę przed zakupem (dokumenty, ubezpieczenia, utrzymanie).
5) Plan „po zakupie” na odbudowę płynności.`,
    thumbnail: "",
  },

  {
    id: "finpres-009",
    title: "Plan redukcji wydatków (audyt) z rankingiem wg wpływu",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Wykrywa przecieki pieniędzy i tnie mądrze bez spadku jakości życia.",
    prompt: `Działaj jako osobisty audytor wydatków.

Inputs:
- Zestawienie wydatków z ostatniego miesiąca (lista lub kategorie).
- Stałe wydatki (czynsz, rachunki itd.).
- Subskrypcje.
- Drobne wydatki (tzw. „przecieki”).
- Cel: oszczędzić X miesięcznie.

Generuj:
1) Klasyfikację wydatków: niezbędne / ważne / zbędne.
2) Ranking cięć wg wpływu (top 15) z szacowanymi oszczędnościami.
3) 30-dniowy plan wdrożenia cięć (tygodniami).
4) Zasady unikania „odbicia” (wydawania z lęku/stresu).
5) Tanie alternatywy dla 10 typowych wydatków.`,
    thumbnail: "",
  },

  {
    id: "finpres-010",
    title: "Nowoczesna metoda kopert (envelope method) z kontami cyfrowymi",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Wdraża metodę kopert z użyciem kont/sejfów cyfrowych i automatyzacji.",
    prompt: `Działaj jako coach finansowy.

Inputs:
- Miesięczny dochód netto.
- Częstotliwość wypłat.
- Główne kategorie wydatków.
- Poziom dyscypliny (niski/średni/wysoki).

Generuj:
1) Strukturę kopert (10–15) z sugerowanymi %.
2) Zasady zasilania (przy każdej wypłacie) i limity.
3) Co robić, gdy koperta jest pusta (protokoły).
4) Rekomendowane automatyzacje (przelewy, alerty).
5) Checklistę tygodniowego utrzymania (10 min).`,
    thumbnail: "",
  },

  {
    id: "finpres-011",
    title: "Budżet dla studentów (czynsz, jedzenie, transport) + triki oszczędzania",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Prosty budżet, by przetrwać i iść do przodu przy niskim dochodzie.",
    prompt: `Działaj jako doradca finansowy dla studentów.

Inputs:
- Miesięczny dochód (stypendium, praca).
- Czynsz i rachunki.
- Transport.
- Jedzenie.
- Długi (jeśli dotyczy).
- Cel (oszczędzić X / spłacić dług / ustabilizować).

Generuj:
1) Budżet wg kategorii (wariant idealny i minimalnie wystarczający).
2) Tygodniowy plan posiłków z kosztem szacunkowym (bez marek).
3) 20 praktycznych i realistycznych trików oszczędzania.
4) Sygnały ostrzegawcze (gdy wymyka się spod kontroli) + co zrobić.
5) Mini-plan zbudowania 1-miesięcznej poduszki awaryjnej.`,
    thumbnail: "",
  },

  {
    id: "finpres-012",
    title: "Budżet dla małych firm (micro-P&L) + kontrola gotówki",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Porządkuje przychody, koszty, wydatki i gotówkę, żeby nie stracić płynności.",
    prompt: `Działaj jako księgowy/finansista dla mikro-biznesów.

Inputs:
- Średnie miesięczne przychody.
- Koszty bezpośrednie (dostawcy, platformy, prowizje).
- Koszty operacyjne (aplikacje, pensje, reklamy).
- Szacowane podatki (jeśli dotyczy).
- Cel zysku.

Generuj:
1) Szablon micro P&L: przychody, COGS, marża, koszty, zysk.
2) Miesięczny budżet wg pozycji z rekomendowanymi %.
3) Zasadę „rezerwy” na podatki i nieprzewidziane wydatki.
4) Rytm przeglądu: tygodniowo (gotówka) i miesięcznie (P&L).
5) Sygnały zagrożenia płynności + plan odbudowy.`,
    thumbnail: "",
  },

  {
    id: "finpres-013",
    title: "Plan podniesienia oszczędzania z 0% do 15% w 60 dni",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Stopniowa strategia zwiększania oszczędności bez poczucia duszenia.",
    prompt: `Działaj jako coach finansów behawioralnych.

Inputs:
- Miesięczny dochód netto.
- Aktualny poziom oszczędzania (0–5%).
- 5 najbardziej obciążających wydatków.
- Poziom stresu finansowego (1–10).
- Cel oszczędzania.

Generuj:
1) Plan 8 tygodni (tygodniowy cel oszczędzania).
2) Stopniowe cięcia z alternatywami.
3) Rekomendowaną automatyzację (dzień i kwota).
4) Nagrody i zasady utrzymania motywacji (bez sabotażu).
5) Co zrobić, jeśli zawalisz tydzień (protokół powrotu).`,
    thumbnail: "",
  },

  {
    id: "finpres-014",
    title: "Plan organizacji płatności i terminów (bez opóźnień) + kalendarz",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Unika opłat i spóźnień: kalendarz, przypomnienia i priorytety.",
    prompt: `Działaj jako doradca finansowy.

Inputs:
- Lista rachunków do zapłaty + terminy.
- Dochód i częstotliwość wypłat.
- Czy są długi z odsetkami/opłatami.
- Obecny system (chaotyczny/średni/uporządkowany).

Generuj:
1) Miesięczny kalendarz płatności (struktura tygodniowa).
2) Strategię: płacić przy wypłacie vs płacić w terminie (zarekomenduj jedną).
3) System przypomnień i tygodniowy przegląd.
4) Priorytet płatności (kolejność z uzasadnieniem).
5) Plan awaryjny, gdy brakuje pieniędzy (co odłożyć i jak negocjować).`,
    thumbnail: "",
  },

  {
    id: "finpres-015",
    title: "Plan „minimalistycznego budżetu” (3 konta) dla zapracowanych",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Prosty i automatyczny system z niewielką liczbą decyzji.",
    prompt: `Działaj jako doradca finansowy. Zaprojektuj ultra-prosty system 3 kont (lub 3 bucketów).

Inputs:
- Miesięczny dochód netto.
- Stałe wydatki.
- Cele (oszczędności/dług).
- Typ dochodu (stabilny/zmienny).
- Dyscyplina (niska/średnia/wysoka).

Generuj:
1) Strukturę 3 kont: Stałe wydatki / Zmienne wydatki / Cele.
2) Procenty i dokładne kwoty.
3) Kiedy przelewać (dzień miesiąca lub przy wypłacie).
4) Zasady anty-bałagan.
5) Miesięczną checklistę (10 min) utrzymania systemu.`,
    thumbnail: "",
  },

  {
    id: "finpres-016",
    title: "Plan budżetu na podróż (bez zadłużania się)",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Odkłada na podróż z kalendarzem, kosztami i planem B.",
    prompt: `Działaj jako doradca finansowy.

Inputs:
- Szacowany koszt podróży.
- Data podróży.
- Aktualne oszczędności.
- Miesięczny dochód.
- Poziom elastyczności (mogę mocno/mało ciąć).

Generuj:
1) Miesięczny cel oszczędzania i datę realizacji (3 scenariusze).
2) Kategorie podróży z sugerowanymi % (loty, noclegi, jedzenie, dodatki).
3) Strategię zakupów (co płacić najpierw i kiedy).
4) Plan B, jeśli ceny wzrosną lub dochód spadnie.
5) Końcową checklistę 2 tygodnie przed podróżą.`,
    thumbnail: "",
  },

  {
    id: "finpres-017",
    title: "Finansowy plan po kryzysie (odbudowa w 90 dni)",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Odzyskuje kontrolę po ciosie (dług, spadek dochodu, nagły wydatek).",
    prompt: `Działaj jako doradca finansowy w sytuacjach kryzysowych.

Inputs:
- Co się stało (spadek dochodu, nagły wydatek medyczny, dług).
- Aktualny dochód.
- Wydatki podstawowe.
- Długi.
- Dostępne wsparcie (rodzina, ubezpieczenie itd.).

Generuj:
1) Budżet przetrwania (minimalnie wystarczający) na 30 dni.
2) Plan 90 dni w 3 fazach (ustabilizować, naprawić, budować).
3) Co negocjować i z kim (długi, usługi, czynsz) + krótkie skrypty rozmów.
4) Tygodniową checklistę monitorowania.
5) Sygnały, że mogę wrócić do „trybu normalnego”.`,
    thumbnail: "",
  },

  {
    id: "finpres-018",
    title: "Plan ewidencji wydatków i oszczędzania na podatkach (organizacja dokumentów)",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "System porządkowania paragonów, kategorii i raportów miesięcznych (bez konkretnego doradztwa podatkowego).",
    prompt: `Działaj jako zorganizowany księgowy. (Nie udzielaj konkretnego doradztwa podatkowego — tylko struktura i dobre praktyki.)

Inputs:
- Czy jestem pracownikiem/freelancerem/firmą.
- Typy wydatków (sprzęt, software, transport itd.).
- Aktualne narzędzia (nic/Excel/apka).
- Częstotliwość fakturowania/paragonów.

Generuj:
1) Strukturę folderów i nazewnictwo (cyfrowe) wg miesiąca i typu.
2) Typowe kategorie księgowe (lista) do ewidencji wydatków.
3) Rutynę tygodniową (15 min) + rutynę miesięczną (60 min).
4) Szablon rejestru: data, dostawca, kategoria, metoda, dokument, notatka.
5) Checklistę zamknięcia miesiąca, aby być gotowym na księgowego/audyt.`,
    thumbnail: "",
  },

  {
    id: "finpres-019",
    title: "Budżet na „zwiększanie dochodów” (bonus: strategia wzrostu)",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Dopasowuje budżet do wzrostu: inwestycje, oszczędności i kontrolę wydatków.",
    prompt: `Działaj jako doradca finansowy dla rozwoju osobistego/biznesu.

Inputs:
- Aktualny dochód.
- Główna umiejętność (sprzedaż, freelancing itd.).
- Dostępny czas tygodniowo.
- Stałe wydatki.
- Cel dochodu w 90 dni.

Generuj:
1) „Budżet obecny” vs „budżet docelowy” (co się zmienia).
2) Rekomendowany % na inwestycje we wzrost (kursy, narzędzia, reklamy itd.).
3) Tygodniowy plan działań zwiększania dochodu (5 działań).
4) Wskaźniki zwrotu (co mierzyć), by ocenić opłacalność.
5) Zasady, aby wzrost dochodu nie zamienił się we wzrost wydatków.`,
    thumbnail: "",
  },

  {
    id: "finpres-020",
    title: "Ekspresowa diagnoza finansowa (score) + plan poprawy",
    area: "Finanse i Księgowość",
    category: "Budżet i planowanie",
    summary:
      "Ocenia kondycję finansową wynikiem i planem na 30 dni.",
    prompt: `Działaj jako doradca finansowy.

Inputs:
- Dochód netto.
- Dostępne oszczędności.
- Długi i płatności.
- Wydatki podstawowe.
- Główne cele.
- Stres finansowy (1–10).

Generuj:
1) Wynik kondycji finansowej (0–100) z 5 sub-score (oszczędności, dług, płynność, stabilność, nawyki).
2) Diagnozę: 3 problemy źródłowe.
3) Plan 30 dni z zadaniami tygodniowymi.
4) Proste zasady (maks. 7) utrzymania postępu.
5) Miesięczną checklistę przeglądu, by nie cofnąć się.`,
    thumbnail: "",
  },
];
