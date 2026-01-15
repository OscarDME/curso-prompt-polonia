// src/lib/prompts/text/finanzas-contabilidad-otros.js

export const textPromptsFinanzasContabilidadOtros = [
  {
    id: "finoth-001",
    title: "Diagnoza finansowa 360° (mała firma) w 30 minut",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Szybki przegląd, żeby wiedzieć, co naprawić najpierw: gotówka, marże, koszty i długi.",
    prompt: `Działaj jako CFO dla małej firmy.

Dane wejściowe:
- Średnie miesięczne przychody (ostatnie 3 miesiące).
- Koszty stałe i zmienne.
- Długi (kwota, oprocentowanie, miesięczna rata).
- Aktualne saldo gotówki.
- Cel (stabilność/wzrost/oszczędzanie).

Wygeneruj:
1) Diagnozę w 4 blokach: płynność, rentowność, dźwignia finansowa, efektywność.
2) 10 kluczowych pytań, aby wykryć „wycieki”.
3) Listę „działań o dużym wpływie” na 7 dni.
4) Plan 30 dni z priorytetami.
5) Metryki do monitorowania co tydzień.`,
    thumbnail: "",
  },

  {
    id: "finoth-002",
    title: "Kontrola subskrypcji i drobnych wydatków (wykrywanie + porządki)",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Znajdź i usuń niewidoczne koszty oraz stwórz system, żeby nie wróciły.",
    prompt: `Działaj jako analityk wydatków.

Dane wejściowe:
- Banki/karty, których używam.
- Znane subskrypcje (lista).
- Częstotliwość zakupów online.
- Czy współdzielę konta z kimś (tak/nie).

Wygeneruj:
1) Metodę krok po kroku do audytu obciążeń z 90 dni.
2) Tabelę klasyfikacji: niezbędne / przydatne / zbędne.
3) Skrypt do anulowania (email/wiadomość) i checklistę potwierdzeń.
4) Miesięczną zasadę utrzymania (10 min).
5) Szacunkowy potencjalny poziom oszczędności w zakresach (niski/średni/wysoki).`,
    thumbnail: "",
  },

  {
    id: "finoth-003",
    title: "Polityka cenowa: jak podnieść ceny bez zabijania konwersji",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Zdefiniuj strukturę, kotwice i progi, aby bezpiecznie zwiększyć marżę.",
    prompt: `Działaj jako strateg pricingu z perspektywą finansową.

Dane wejściowe:
- Produkt/usługa.
- Aktualna cena.
- Koszty (czas, narzędzia, materiały).
- Konkurencja (tańsza/taka sama/droższa).
- Cel (większa marża / większy wolumen / premium).

Wygeneruj:
1) 3 strategie podwyżki (bezpośrednia, stopniowa, pakiety/bundles).
2) Tabelę scenariuszy: cena vs wolumen vs zysk (z przykładami).
3) Jak tworzyć kotwice (plan basic/pro/premium).
4) Komunikaty do ogłoszenia zmiany (bez nadmiernego tłumaczenia).
5) Checklistę sygnałów, kiedy cofnąć lub skorygować.`,
    thumbnail: "",
  },

  {
    id: "finoth-004",
    title: "Prosta prognoza gotówki (cashflow) na 12 tygodni",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Model tygodniowy, by nie zostać bez pieniędzy nawet przy dobrych sprzedażach.",
    prompt: `Działaj jako controller przepływów pieniężnych.

Dane wejściowe:
- Saldo początkowe.
- Oczekiwane przychody tygodniowe (lub średnia).
- Koszty stałe (daty i kwoty).
- Szacowane koszty zmienne.
- Wydarzenia: launch/sezony/duże płatności.

Wygeneruj:
1) Szablon cashflow na 12 tygodni (kolumny i formuły opisane tekstowo).
2) Jak szacować przychody konserwatywnie vs realistycznie.
3) Zasadę „minimalnego progu gotówki” i co robić, gdy go przekroczę.
4) Plan awaryjny (działania w 48h).
5) Tygodniowy rytuał 15 min do aktualizacji.`,
    thumbnail: "",
  },

  {
    id: "finoth-005",
    title: "Plan anty-stres: uporządkuj finanse osobiste + firmowe (mieszane)",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Hybrydowy system, gdy wszystko jest pomieszane i potrzebujesz szybkiej kontroli.",
    prompt: `Działaj jako organizator finansów.

Dane wejściowe:
- Dochód osobisty i firmowy (jeśli dotyczy).
- Długi osobiste i firmowe.
- Aktualne oszczędności.
- Poziom chaosu (pełna mieszanka / częściowo uporządkowane).
- Narzędzia (bank, Excel, aplikacje).

Wygeneruj:
1) Plan 14 dni na rozdzielenie i uporządkowanie (krok po kroku).
2) Zasady płatności: kto za co płaci (osobiste vs firmowe).
3) System kopert/kubełków (5 bucketów) z procentami.
4) Tygodniową checklistę utrzymania.
5) Wskaźniki postępu (jasne i mierzalne).`,
    thumbnail: "",
  },

  {
    id: "finoth-006",
    title: "Strategia redukcji długu (śnieżna kula vs lawina)",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Wybierz właściwą metodę i ułóż realistyczny plan spłat.",
    prompt: `Działaj jako doradca finansowy (edukacyjnie).

Dane wejściowe:
- Lista długów: saldo, oprocentowanie, minimalna rata.
- Miesięczna kwota dostępna na spłatę długu.
- Poziom ryzyka/stresu (niski/średni/wysoki).
- Czy spodziewam się dodatkowych wpływów (tak/nie).

Wygeneruj:
1) Porównanie śnieżnej kuli vs lawiny i co wybrać w moim przypadku.
2) Tabelę sugerowanych płatności dla każdego długu (rekomendowana kolejność).
3) Szacowaną datę spłaty wg scenariusza (z zakresami).
4) 5 taktyk uwolnienia cashflow (bez zwiększania długu).
5) Skrypt do negocjacji/prośby o lepsze warunki (profesjonalny ton).`,
    thumbnail: "",
  },

  {
    id: "finoth-007",
    title: "Jak ustalić wynagrodzenie właściciela (owner’s pay) bez duszenia firmy",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Określ, ile sobie płacić stabilnie, nawet gdy sprzedaż jest zmienna.",
    prompt: `Działaj jako CFO dla solopreneur.

Dane wejściowe:
- Przychody z ostatnich 3 miesięcy.
- Koszty stałe firmy.
- Aktualne rezerwy.
- Osobisty cel miesięczny.
- Zmienność przychodu.

Wygeneruj:
1) Metodę wyliczenia „pensji bazowej” + „premii zmiennej”.
2) Progi bezpieczeństwa (kiedy NIE podnosić wypłaty).
3) Przykład liczbowy w 3 scenariuszach.
4) Zasadę podziału: reinwestycja vs właściciel vs rezerwa.
5) Miesięczną checklistę korekt.`,
    thumbnail: "",
  },

  {
    id: "finoth-008",
    title: "Unit economics: koszt obsługi i realna marża na produkcie",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Policz realną marżę, uwzględniając prowizje, zwroty, support i czas.",
    prompt: `Działaj jako analityk finansowy.

Dane wejściowe:
- Cena sprzedaży.
- Koszty bezpośrednie (materiały, narzędzia, godziny).
- Prowizje (bramka płatności, marketplace).
- Zwroty (%).
- Średni czas supportu na klienta.

Wygeneruj:
1) Wzór na realną marżę (tekstowo) i jak go policzyć.
2) Tabelę typowych „ukrytych” kosztów.
3) 3 dźwignie poprawy marży bez podnoszenia ceny.
4) Sygnały, kiedy wstrzymać nierentowny produkt.
5) Krótki raport unit economics (szablon).`,
    thumbnail: "",
  },

  {
    id: "finoth-009",
    title: "Budżet bazowy zero (ZBB) dla biznesu cyfrowego",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Zaprojektuj budżet od zera i przydziel każdą złotówkę/dolara z intencją.",
    prompt: `Działaj jako planner finansowy.

Dane wejściowe:
- Oczekiwany miesięczny przychód.
- Lista aktualnych wydatków.
- Priorytety: wzrost/stabilność/zysk.
- Kanały pozyskania.
- Niezbędne narzędzia.

Wygeneruj:
1) Proste wyjaśnienie procesu ZBB.
2) Sugerowane kategorie i początkowe limity.
3) Zasadę „wydatków, które same się spłacają” vs „przyjemności”.
4) Przegląd co 2 tygodnie: jak korygować bez psucia planu.
5) Szablon gotowy do skopiowania do Sheets.`,
    thumbnail: "",
  },

  {
    id: "finoth-010",
    title: "Model prowizji dla sprzedaży/afiliacji (bez strat)",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Zaprojektuj prowizje, które motywują, nie niszcząc marży.",
    prompt: `Działaj jako CFO i projektant systemów motywacyjnych.

Dane wejściowe:
- Produkt i cena.
- Szacowana marża brutto.
- Średnie zwroty.
- Typ sprzedawcy (afiliant/closer/partner).
- Cel (wolumen / jakość / LTV).

Wygeneruj:
1) 3 schematy prowizji (flat, progowy, jakościowy).
2) Zasady anti-fraud i anti-chargeback.
3) Przykłady liczbowe z marżą końcową.
4) Warunki operacyjne/„mini-umowa” (kluczowe punkty, bez języka prawniczego).
5) KPI do monitorowania, czy plan działa.`,
    thumbnail: "",
  },

  {
    id: "finoth-011",
    title: "Plan dużych zakupów (capex) bez utraty płynności",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Zdecyduj, kiedy kupować drogi sprzęt/narzędzia i jak to zdrowo sfinansować.",
    prompt: `Działaj jako controller.

Dane wejściowe:
- Planowany zakup (kwota).
- Oczekiwany benefit (oszczędność/przychód).
- Aktualna gotówka.
- Istniejące długi.
- Pilność (niska/średnia/wysoka).

Wygeneruj:
1) Ramy decyzyjne: kupić vs poczekać vs wynająć vs finansować.
2) Zasadę „maks. % gotówki” na zakup.
3) Plan odkładania na zakup (tygodniowo/miesięcznie).
4) Proste ROI (z przykładem).
5) Checklistę przed realizacją.`,
    thumbnail: "",
  },

  {
    id: "finoth-012",
    title: "System celów finansowych (OKR) dla małej firmy",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Zamień cele na liczby: przychody, marża, gotówka, CAC i retencja.",
    prompt: `Działaj jako CFO.

Dane wejściowe:
- Cel roczny (przychód lub zysk).
- Kanały sprzedaży.
- Produkt(y).
- Aktualne metryki (jeśli mam).
- Zespół (solo / zespół).

Wygeneruj:
1) 3–5 celów finansowych (O) i 3–4 KR na cel.
2) Rytm przeglądu tygodniowego/miesięcznego.
3) Tablicę metryk i progów (zielony/żółty/czerwony).
4) Działania, gdy KR jest na czerwono.
5) Pełny przykład z fikcyjnymi liczbami.`,
    thumbnail: "",
  },

  {
    id: "finoth-013",
    title: "Raport dla inwestora/partnera (prosty i przekonujący)",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Struktura miesięcznego raportu dla wspólników bez zalewania księgowością.",
    prompt: `Działaj jako analityk raportowania.

Dane wejściowe:
- Przychody miesiąca.
- Główne koszty.
- Wydarzenia: premiery, kampanie, zmiany.
- Metryki (klienci, churn, tickety itd.).
- Kolejne kroki.

Wygeneruj:
1) Format raportu 1–2 strony.
2) Kluczowe KPI wg modelu (usługi, SaaS, infoprodukt).
3) „Narrację” miesiąca: co się stało i dlaczego.
4) Ryzyka i mitygacje (top 5).
5) Plan na kolejny miesiąc (priorytety).`,
    thumbnail: "",
  },

  {
    id: "finoth-014",
    title: "Minimalna opłacalna cena: kalkulacja i zasady, by nie brać złych klientów",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Zdefiniuj próg cenowy na podstawie kosztów, czasu i docelowej marży.",
    prompt: `Działaj jako analityk rentowności.

Dane wejściowe:
- Szacunkowy koszt godziny (lub pożądana stawka).
- Godziny na projekt/usługę.
- Miesięczne koszty stałe.
- Miesięczna przepustowość (projekty).
- Docelowa marża.

Wygeneruj:
1) Wzór na minimalną opłacalną cenę.
2) Przykład w 3 scenariuszach (niski, średni, premium).
3) Politykę rabatów (kiedy tak/kiedy nie).
4) Zasady finansowe dot. scope creep.
5) Checklistę przed wyceną.`,
    thumbnail: "",
  },

  {
    id: "finoth-015",
    title: "System załączników i załączników: kontrola kosztów per projekt (job costing)",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Rejestruj godziny i koszty per projekt, by wiedzieć, które naprawdę zarabiają.",
    prompt: `Działaj jako controller projektów.

Dane wejściowe:
- Typ projektów.
- Średni czas trwania.
- Koszty bezpośrednie (narzędzia, freelancerzy).
- Czy rozliczam ryczałtowo czy godzinowo.
- Aktualne problemy (niepewna marża, opóźnienia).

Wygeneruj:
1) Szablon job costing (pola i organizacja).
2) Tygodniowy proces zbierania godzin/kosztów.
3) Wskaźniki: marża per projekt, odchylenia, godziny realne vs estymowane.
4) Jak korygować ceny na podstawie danych.
5) Raport post-mortem per projekt (checklista).`,
    thumbnail: "",
  },

  {
    id: "finoth-016",
    title: "Polityka zwrotów z perspektywy finansów: jak zminimalizować wpływ na gotówkę",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Strategia operacyjna, by ograniczyć zwroty i chronić cashflow bez złej reputacji.",
    prompt: `Działaj jako CFO z naciskiem na doświadczenie klienta.

Dane wejściowe:
- Aktualny wskaźnik zwrotów (jeśli znam).
- Najczęstsze powody.
- Typ oferty (kurs, SaaS, usługa).
- Okno gwarancji.
- Kanały sprzedaży.

Wygeneruj:
1) Działania prewencyjne (przed zakupem): jasność, oczekiwania, filtry.
2) Działania po zakupie: onboarding, wsparcie, quick wins.
3) Opcje rozwiązania: kredyt, pauza, upgrade, dodatkowy support.
4) Jak tworzyć rezerwę gotówkową na zwroty.
5) KPI i alerty do wczesnego wykrywania problemów.`,
    thumbnail: "",
  },

  {
    id: "finoth-017",
    title: "Plan budowy funduszu awaryjnego firmy (3 poziomy)",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Zbuduj rezerwy, by przetrwać słabsze miesiące bez panicznych cięć.",
    prompt: `Działaj jako doradca finansów firmowych.

Dane wejściowe:
- Miesięczne koszty stałe.
- Zmienność przychodu.
- Aktualna gotówka.
- Tempo wzrostu.
- Główne ryzyka (ads, dostawca, platforma).

Wygeneruj:
1) 3 poziomy funduszu (1 miesiąc, 3 miesiące, 6 miesięcy) i cel kwotowy na poziom.
2) Strategię wpłat tygodniowych/miesięcznych.
3) Zasady użycia (kiedy używać i jak odbudowywać).
4) Gdzie trzymać (ogólne opcje) i dlaczego.
5) Plan 90 dni na start.`,
    thumbnail: "",
  },

  {
    id: "finoth-018",
    title: "Plan poprawy marży: 12 dźwigni z szacowanym wpływem",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Wykonalna lista, by zwiększyć zysk bez polegania wyłącznie na większej sprzedaży.",
    prompt: `Działaj jako konsultant rentowności.

Dane wejściowe:
- Produkt/usługa i cena.
- Główne koszty.
- Kanał pozyskania.
- Struktura zespołu.
- Problem: niska marża / wysoki CAC / dużo zwrotów.

Wygeneruj:
1) 12 dźwigni (cena, bundling, koszty, churn, upsell itd.).
2) Dla każdej dźwigni: trudność (niska/średnia/wysoka) i wpływ (niski/średni/wysoki).
3) Plan wykonania na 4 tygodnie (priorytety).
4) Metryki, by zmierzyć skuteczność.
5) Ryzyka i jak je mitygować.`,
    thumbnail: "",
  },

  {
    id: "finoth-019",
    title: "Dashboard finansowy w Notion/Sheets: projekt minimalnego panelu",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Prosty panel z kluczowymi KPI, by codziennie widzieć kondycję firmy.",
    prompt: `Działaj jako analityk BI finansowego.

Dane wejściowe:
- Model biznesowy (usługi, infoprodukt, SaaS, e-commerce).
- Źródła danych (Stripe/PayPal/bank/Shopify).
- KPI, które już mierzę (jeśli jakieś).
- Częstotliwość przeglądu.

Wygeneruj:
1) Rdzeniowe KPI (5–8) wg modelu.
2) Strukturę panelu (sekcje, widoki, filtry).
3) Pola i definicje, aby uniknąć nieporozumień.
4) Rytuały: przegląd dzienny/tygodniowy/miesięczny.
5) Wersję „minimalnie wykonalną” (jedna karta/arkusz) i wersję „pro” (pełny dashboard).`,
    thumbnail: "",
  },

  {
    id: "finoth-020",
    title: "Jak zrobić „zamknięcie miesiąca” jak firma (nawet jeśli jesteś solo)",
    area: "Finanse i Księgowość",
    category: "Inne",
    summary:
      "Standardowa rutyna zamknięcia miesiąca: uzgodnienia, raport, decyzje.",
    prompt: `Działaj jako corporate controller.

Dane wejściowe:
- Liczba kont/kart.
- Liczba źródeł przychodów.
- Wolumen transakcji.
- Czy mam magazyn/pracowników.

Wygeneruj:
1) Zamknięcie miesiąca krok po kroku (dokładna kolejność).
2) Szacowany czas na blok i jak go skrócić.
3) Checklistę dostarczenia (raporty i dowody).
4) Pytania zarządcze: jakie decyzje podjąć na podstawie zamknięcia.
5) Szablon „protokołu zamknięcia” z wnioskami i zadaniami.`,
    thumbnail: "",
  },
];
