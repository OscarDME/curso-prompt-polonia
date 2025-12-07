// src/lib/prompts/text/marketing-objetivos.js

export const textPromptsMarketingObjetivos = [
  {
    id: "mobj-001",
    title:
      "Zdefiniuj główny cel kampanii (hierarchia: biznes → marketing → kanał)",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Zamienia pomysł na kampanię w jasny, mierzalny cel spójny z biznesem.",
    prompt: `Kontekst (uzupełnij):
- Produkt/usługa:
- Średni koszyk (ticket) i marża (jeśli dotyczy):
- Model (ecom, infoprodukt, SaaS, usługi):
- Rynek/kraj:
- Okres kampanii (daty):
- Główne ograniczenie (budżet, czas, zespół):
- Dostępne kanały (Meta/Google/TikTok/Email/WhatsApp/Organicznie/Partnerzy):
- Aktualne dane (jeśli masz): ruch, leady, CVR, CAC, LTV, ROAS, MQL→SQL, close rate

Zadanie:
1) Zaproponuj 3 możliwe cele biznesowe (np. przychód, retencja, aktywacja, ekspansja) i wybierz najbardziej rozsądny na podstawie kontekstu.
2) Przetłumacz ten cel (biznes) na:
   - cel marketingowy (np. popyt, leady, pipeline, aktywacja)
   - cel per kanał (co ma dowieźć każdy kanał)
3) Zdefiniuj KPI główny, 2 KPI poboczne i 3 wskaźniki operacyjne (leading indicators).
4) Zdefiniuj finalny cel SMART (jedno zdanie) + wersję „dla zespołu” (prościej) + wersję „dla zarządu” (bardziej executives).
5) Dodaj założenia i warunki potrzebne do realizacji (bez obietnic).
6) Zakończ checklistą walidacyjną: „jeśli Twój cel nie spełnia X, popraw”.`,
    thumbnail: "",
  },
  {
    id: "mobj-002",
    title: "Drzewo celów (Goal Tree) — od przychodu do metryk operacyjnych",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Buduje drzewo łączące: przychód → konwersje → wolumeny → aktywności.",
    prompt: `Uzupełnij:
- Cel przychodu (kwota):
- Cena/średni koszyk:
- Współczynnik konwersji (jeśli istnieje) lub estymacja:
- Lead→Sprzedaż (jeśli dotyczy):
- Aktualny ruch:
- Okres:

Zadanie:
1) Stwórz Goal Tree i policz:
   - # potrzebnych sprzedaży
   - # potrzebnych leadów
   - # potrzebnych wizyt
   - # szacowanych wyświetleń/kliknięć (jeśli są ads)
2) Wskaż 3 punkty dźwigni: która zmienna najsilniej rusza wynik.
3) Zaproponuj 2 scenariusze:
   - konserwatywny
   - agresywny
4) Dla każdego scenariusza: cele liczbowe per tydzień i per kanał (jeśli dotyczy).
5) Zakończ: „co mierzyć codziennie / co tydzień” (rytuał monitoringu).`,
    thumbnail: "",
  },
  {
    id: "mobj-003",
    title:
      "Cele na etapach lejka (Świadomość → Rozważanie → Konwersja → Retencja)",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Definiuje cele i KPI na etapach lejka z logicznymi metrykami.",
    prompt: `Kontekst:
- Produkt:
- Aktualna świadomość (niska/średnia/wysoka):
- Typ zakupu (impulsowy/przemyślany):
- Cykl sprzedaży (dni):
- Kanały:

Zadanie:
1) Zdefiniuj po 1 celu na każdy etap:
   - Świadomość (Awareness)
   - Rozważanie (Consideration)
   - Konwersja (Conversion)
   - Retencja/Polecenia (Retention/Referral)
2) Dla każdego etapu:
   - KPI główny
   - 2 KPI poboczne
   - 3 rekomendowane taktyki
   - sygnały, że etap „siada”
3) Zarekomenduj, gdzie skupić się przez najbliższe 4 tygodnie i dlaczego (wg kontekstu).
4) Dodaj tygodniowy „scoreboard” z maks. 6–10 metrykami.`,
    thumbnail: "",
  },
  {
    id: "mobj-004",
    title: "OKRy marketingowe (O + 3–5 KR) na 30 dni / 90 dni",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Tworzy realistyczne OKRy z mierzalnymi KR, kamieniami milowymi i sugerowanymi ownerami.",
    prompt: `Uzupełnij:
- Cel firmy:
- Produkt:
- Zespół (dostępne role):
- Ograniczenia:
- Kanały:
- Aktualny baseline (jeśli istnieje):

Zadanie:
1) Zaproponuj 2 możliwe cele (O) i wybierz najlepszy.
2) Stwórz 3–5 mierzalnych Key Results (KR).
3) Rozbij każdy KR na:
   - inicjatywy (3–6)
   - sugerowany owner (rola)
   - tygodniowe milestones
4) Zdefiniuj „anty-metryki” (vanity), których NIE będziemy używać.
5) Dodaj plan tygodniowego przeglądu (co decydujemy, gdy KR jest na czerwono).`,
    thumbnail: "",
  },
  {
    id: "mobj-005",
    title:
      "Cel launchu (pre-launch → launch → post) z metrykami na fazę",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Porządkuje cele na fazach launchu i unika mieszania metryk.",
    prompt: `Uzupełnij:
- Oferta/launch:
- Daty:
- Odbiorcy:
- Kanały:
- Cel przychodu lub sprzedaży:
- Aktywa (lista email, społeczność, partnerzy):

Zadanie:
1) Zdefiniuj cele na fazy:
   - Pre (budowanie oczekiwań i leadów)
   - Launch (konwersja)
   - Post (retencja, upsell, opinie)
2) Dla każdej fazy:
   - KPI główny
   - dzienne leading indicators
   - benchmarki/progi (co będzie „dobre”)
3) Zaproponuj dashboard (max 12 metryk) per faza.
4) Dodaj plan awaryjny, jeśli:
   - niski CTR
   - niski CVR
   - tanie leady, ale niska jakość
   - wysoka frikcja w checkout.`,
    thumbnail: "",
  },
  {
    id: "mobj-006",
    title:
      "Zdefiniuj cel contentu (organicznego) powiązany ze sprzedażą (bez vanity)",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Zamienia cele contentowe w mierzalne działania zorientowane na popyt i konwersję.",
    prompt: `Uzupełnij:
- Nisza:
- Oferta:
- Kanał (IG/TikTok/YT/LinkedIn):
- Częstotliwość:
- Cel biznesowy (sprzedaż/leady):
- Aktywa (lead magnet, landing, słowo-klucz DM):

Zadanie:
1) Zdefiniuj 3 cele contentowe (np. kwalifikowany awareness, leady z DM, wejścia na landing).
2) Wybierz 1 główny cel na 30 dni.
3) Zdefiniuj:
   - KPI główny
   - 2 KPI poboczne
   - 5 metryk operacyjnych (np. zapisy, obejrzenie do końca, DM, kliknięcia)
4) Stwórz tygodniowy plan pomiaru + kryteria pivotu.
5) Zaproponuj 3 eksperymenty (A/B), żeby szybko się uczyć.`,
    thumbnail: "",
  },
  {
    id: "mobj-007",
    title:
      "Cel performance (ads) — ROAS/CAC z regułami decyzyjnymi",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Definiuje cele dla kampanii płatnych wraz z jasnymi regułami: skaluj/pauzuj/iteruj.",
    prompt: `Uzupełnij:
- Produkt:
- Średni koszyk i marża:
- Maksymalny akceptowalny CAC:
- Docelowy ROAS (jeśli dotyczy):
- Budżet:
- Okres:
- Kanały reklamowe:

Zadanie:
1) Zdefiniuj cel główny (ROAS albo CAC) i uzasadnij względem marży.
2) Zdefiniuj:
   - KPI główny
   - KPI poboczny (CPA, CVR, AOV itd.)
   - leading indicators (CTR, CPC, ATC itd.)
3) Stwórz „reguły decyzyjne”:
   - kiedy pauzować
   - kiedy iterować
   - kiedy skalować
4) Dodaj cel tygodniowy i dzienny (w widełkach).
5) Zakończ checklistą setupu, by pomiar był poprawny.`,
    thumbnail: "",
  },
  {
    id: "mobj-008",
    title:
      "Cele dla WhatsApp/DM (rozmowy → domknięcia) z lejkiem wiadomości",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Mierzalne cele dla sprzedaży konwersacyjnej: czas odpowiedzi, kwalifikacja, domknięcia.",
    prompt: `Uzupełnij:
- Oferta:
- Kanał (WhatsApp / IG DM):
- Aktualny wolumen chatów dziennie:
- Czas odpowiedzi:
- Aktualny close rate (jeśli istnieje):
- Typowe obiekcje:

Zadanie:
1) Zdefiniuj główny cel na 30 dni (sprzedaże lub domknięcia).
2) Zbuduj lejek:
   - rozpoczęte rozmowy
   - odpowiedziane rozmowy
   - rozmowy zakwalifikowane
   - wysłana oferta
   - domknięcie
3) Ustal targety na etap (dziennie/tygodniowo).
4) Zdefiniuj 5 KPI operacyjnych (czas odpowiedzi, follow-upy itd.).
5) Zaprojektuj scoreboard i dzienny rytuał (15 min), aby ruszać liczbę.`,
    thumbnail: "",
  },
  {
    id: "mobj-009",
    title:
      "Cel email marketingu — przychód per wysyłka + zdrowie listy",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Definiuje cele emailowe, które balansują przychód i deliverability.",
    prompt: `Uzupełnij:
- Typ listy:
- Wielkość:
- Częstotliwość wysyłek:
- Oferta:
- Aktualna sprzedaż z emaila (jeśli jest):
- Segmenty:

Zadanie:
1) Zdefiniuj cel główny (przychód/miesiąc lub przychód/wysyłkę).
2) Zdefiniuj cele zdrowia listy:
   - skargi spam
   - odbicia (bounce)
   - nieaktywni
3) Zdefiniuj KPI:
   - główny (revenue/email)
   - poboczne (CTR, reply rate, conversion)
4) Stwórz plan 30 dni z:
   - typami kampanii (promo, wartość, nurturing)
   - celami tygodniowymi
5) Dodaj reguły higieny: kiedy czyścić, reengage, segmentować.`,
    thumbnail: "",
  },
  {
    id: "mobj-010",
    title:
      "Cel retencji (po zakupie) — mniej zwrotów i więcej ponownych zakupów",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Definiuje cele post-purchase: retencja, ponowny zakup i doświadczenie klienta.",
    prompt: `Uzupełnij:
- Produkt:
- Okno ponownego zakupu (dni):
- Typowy problem po zakupie (użycie, onboarding, oczekiwania):
- Kanały post-purchase (email, WhatsApp, społeczność):
- % zwrotów (jeśli jest):

Zadanie:
1) Zdefiniuj cel główny (ponowny zakup, retencja albo redukcja zwrotów).
2) Wybierz 3 KPI:
   - rate ponownego zakupu
   - NPS/CSAT
   - zwroty/tickety
3) Zdefiniuj 4 inicjatywy retencyjne (onboarding, tipy, content, wsparcie).
4) Stwórz cele tygodniowe i sygnały alarmowe.
5) Dodaj mapę momentów po zakupie (dzień 0, 1, 3, 7, 14, 30).`,
    thumbnail: "",
  },

  {
    id: "mobj-011",
    title:
      "Cele per produkt (portfolio) — priorytetyzacja, co promować wg wpływu",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Definiuje cele per SKU/ofertę: fokus, KPI, kanał i argumenty.",
    prompt: `Uzupełnij:
- Lista produktów/ofert (cena + marża):
- Stan magazynu (jeśli dotyczy):
- Aktualna trakcja per produkt:
- Sezon:
- Możliwości operacyjne (support/realizacja):

Zadanie:
1) Sklasyfikuj produkty:
   - Hero (główny)
   - Profit (marża)
   - Entry (pozyskanie)
   - Niche (segment)
2) Zdefiniuj cel dla każdej kategorii (sprzedaż, leady, awareness, retencja).
3) KPI per produkt + rekomendowany kanał.
4) Zaproponuj 2 hipotezy per produkt do przetestowania w 30 dni.
5) Zakończ tygodniowym kalendarzem priorytetów.`,
    thumbnail: "",
  },
  {
    id: "mobj-012",
    title:
      "Cele eksperymentów (growth) — 10 testów z hipotezą i kryterium sukcesu",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Zamienia ‘trzeba próbować’ w mierzalne testy z jasnym kryterium.",
    prompt: `Uzupełnij:
- Główny kanał:
- Metryka do poprawy (CTR, CVR, CAC, AOV, MQL→SQL):
- Baseline:
- Ograniczenia:

Zadanie:
1) Wygeneruj 10 eksperymentów (priorytet: impact vs effort).
2) Dla każdego eksperymentu:
   - hipoteza (jeśli zrobimy X, to Y)
   - metryka główna
   - kryterium sukcesu (próg)
   - minimalny czas trwania
   - ryzyka
3) Zdefiniuj nadrzędny cel uczenia (czego musimy się dowiedzieć w 30 dni).
4) Zaproponuj tygodniową kolejność realizacji (4 tygodnie).`,
    thumbnail: "",
  },
  {
    id: "mobj-013",
    title:
      "Cel rebrand/repositioning — kwalifikowany awareness + zweryfikowany przekaz",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Definiuje realistyczne cele repozycjonowania: sygnał rynku i walidacja komunikatu.",
    prompt: `Uzupełnij:
- Obecna marka:
- Nowe pozycjonowanie:
- ICP:
- 3 claimy do walidacji:
- Kanały:

Zadanie:
1) Zdefiniuj cel główny (walidacja przekazu, nie tylko zasięg).
2) Zdefiniuj 3 sygnały walidacji:
   - kwalifikowane odpowiedzi (replies)
   - demo/diagnozy
   - konwersja na landing
3) Zdefiniuj KPI i cele tygodniowe (4–6 tygodni).
4) Zaprojektuj 5 testów komunikatu (ads, posty, email, webinar).
5) Dodaj plan uczenia: jak wybierzesz finalny przekaz.`,
    thumbnail: "",
  },
  {
    id: "mobj-014",
    title:
      "Cele dla eCommerce — AOV, CVR, CAC z ‘dźwigniami’ i priorytetami",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Definiuje cele eCommerce i dźwignie per etap lejka.",
    prompt: `Uzupełnij:
- AOV:
- CVR:
- CAC:
- Marża:
- Kategoria produktu:
- Główne źródła ruchu:

Zadanie:
1) Zdefiniuj 1 cel główny: podnieść AOV / podnieść CVR / obniżyć CAC.
2) Wypisz 5 dźwigni dla tego celu (np. bundling, próg darmowej dostawy, PDP, zaufanie).
3) Zdefiniuj leading metrics (ATC, initiate checkout itd.).
4) Zdefiniuj cele tygodniowe i kryterium sukcesu.
5) Stwórz plan „2 tygodnie” (quick wins) i plan „6 tygodni” (większe zmiany).`,
    thumbnail: "",
  },
  {
    id: "mobj-015",
    title:
      "Cele dla SaaS — aktywacja, retencja, ekspansja (z metryką North Star)",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Definiuje North Star i cele per etap dla SaaS bez utraty fokus.",
    prompt: `Uzupełnij:
- SaaS:
- ICP:
- Event aktywacji (Aha moment):
- Cykl sprzedaży:
- Churn:
- ARPA/LTV:

Zadanie:
1) Zdefiniuj sensowną North Star Metric (NSM) i dlaczego.
2) Zdefiniuj 3 cele:
   - pozyskanie/pipeline
   - aktywacja
   - retencja/ekspansja
3) KPI per cel + cele 30/90 dni (widełki).
4) 10 inicjatyw w kolejności, które poruszą NSM.
5) Tygodniowy rytuał i dashboard executives.`,
    thumbnail: "",
  },

  {
    id: "mobj-016",
    title:
      "Cel kampanii remarketingowej — odzyskaj intencję bez przepalania audience",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Definiuje cele remarketingu: częstotliwość, CPA, segmentacja i limity.",
    prompt: `Uzupełnij:
- Produkt:
- Audiencje (visitors, ATC, IC, lead):
- Okno retargetingu:
- Oferta:
- Budżet:

Zadanie:
1) Zdefiniuj cel (CPA/CAC lub CVR remarketingu).
2) Ustal maksymalną częstotliwość i sygnały zmęczenia.
3) Zdefiniuj KPI główny i poboczne.
4) Cele per segment (ATC vs IC vs ViewContent).
5) Reguły pauzy/rotacji kreacji.`,
    thumbnail: "",
  },
  {
    id: "mobj-017",
    title:
      "Cele społeczności (Discord/Telegram) — engagement, który generuje sprzedaż",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele społeczności powiązane z biznesem: aktywacja, polecenia, support.",
    prompt: `Uzupełnij:
- Społeczność:
- Oferta:
- Wielkość:
- Aktualna aktywność:
- Cele biznesowe:

Zadanie:
1) Zdefiniuj cel główny (np. leady/mies. ze społeczności, retencja, support).
2) KPI społeczności, które mają znaczenie (bez vanity): aktywny udział, pomoc między członkami, referrals.
3) Zdefiniuj 4 rytuały tygodniowe (AMA, wyzwania, warsztaty).
4) Cele tygodniowe (30 dni) i jak mierzyć.
5) Plan anty-spam i segmentacja.`,
    thumbnail: "",
  },
  {
    id: "mobj-018",
    title:
      "Cele per kanał (macierz) — co ma robić IG vs Email vs Ads vs SEO",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Tworzy macierz celów per kanał i zapobiega mierzeniu wszystkiego tym samym KPI.",
    prompt: `Uzupełnij:
- Aktywne kanały:
- Oferta:
- Lejek:
- Dostępne zasoby:

Zadanie:
1) Stwórz macierz, gdzie każdy kanał ma:
   - rolę (awareness, pozyskanie, nurture, konwersja, retencja)
   - KPI główny
   - 2 KPI poboczne
   - 2 kluczowe taktyki
2) Zdefiniuj przekazywanie użytkowników między kanałami (handoff).
3) Zdefiniuj cele miesięczne per kanał + cele tygodniowe.
4) Zakończ: 5 częstych błędów w definiowaniu celów per kanał.`,
    thumbnail: "",
  },
  {
    id: "mobj-019",
    title:
      "Cele launchu per kohorta (cohort-based goals) — tydzień po tygodniu",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Dzieli cele na kohorty tygodniowe, by szybko diagnozować, gdzie pęka lejek.",
    prompt: `Uzupełnij:
- Cały okres (tygodnie):
- Cel przychodu/sprzedaży:
- Szacowana konwersja:
- Kanały:

Zadanie:
1) Podziel kampanię na kohorty tygodniowe z:
   - celem leadów
   - celem sprzedaży
   - celem przychodu
2) Zdefiniuj KPI kohorty:
   - CAC
   - CVR
   - show-up rate (jeśli webinary)
3) Zdefiniuj “triggery”: jeśli kohorta tyg. 1 <80% celu, co zmieniasz w tyg. 2.
4) Dodaj scoreboard i szablon raportu tygodniowego.`,
    thumbnail: "",
  },
  {
    id: "mobj-020",
    title:
      "Cele dla agencji/freelancera — cele, które klient rozumie i akceptuje",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Formułuje jasne cele dla klienta: deliverables, KPI, założenia i limity.",
    prompt: `Uzupełnij:
- Klient:
- Zakres usługi:
- Pożądany KPI:
- Budżet:
- Ograniczenia:
- Timeline:

Zadanie:
1) Napisz 1 cel główny + 3 cele poboczne.
2) Zdefiniuj, co zależy od Ciebie vs od klienta.
3) Zdefiniuj metryki, których nie gwarantujesz (i dlaczego).
4) Zdefiniuj kadencję raportowania i format.
5) Napisz sekcję “kryterium sukcesu” i “kryterium braku sukcesu” (uczciwie).`,
    thumbnail: "",
  },

  {
    id: "mobj-021",
    title:
      "Cele kampanii awareness (top of funnel) — kwalifikacja, nie tylko zasięg",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Definiuje cele awareness z sygnałami jakości i obowiązkowym następnym krokiem.",
    prompt: `Uzupełnij:
- Produkt:
- ICP:
- Komunikat:
- Kanały:
- Budżet:

Zadanie:
1) Zdefiniuj cel główny (kwalifikowany awareness).
2) KPI: reach, VTR/retencja, jakościowe wizyty, engagement z intencją.
3) Ustal progi jakości (np. % obejrzenia do końca, kwalifikowane kliknięcia).
4) Zdefiniuj obowiązkowy “next step” (retarget do consideration).
5) Stwórz tygodniowy plan pomiaru + rotację kreacji.`,
    thumbnail: "",
  },
  {
    id: "mobj-022",
    title:
      "Cele dla etapu rozważania (mid funnel) — zamień uwagę w intencję",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele mid-funnel: leady, content pomostowy, dema, koszyki itd.",
    prompt: `Uzupełnij:
- Oferta:
- Lead magnet / VSL / webinar:
- Audiencja:
- Kanały:

Zadanie:
1) Zdefiniuj cel główny consideration (kwalifikowane leady / dema / ATC).
2) Zdefiniuj KPI: CPL/CPQL, CVR landingu, show-up (jeśli webinary), reply rate.
3) Zdefiniuj 3 “bridge content” + deliverables (checklista, kalkulator, przewodnik).
4) Cele tygodniowe i reguły optymalizacji.`,
    thumbnail: "",
  },
  {
    id: "mobj-023",
    title:
      "Cele konwersji (bottom funnel) — domykaj bez głupich rabatów",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele bottom-funnel z naciskiem na jakość konwersji i marżę.",
    prompt: `Uzupełnij:
- Oferta:
- Cena i marża:
- Punkt tarcia (checkout, zaufanie, dostawa):
- Obiekcje:
- Kanały:

Zadanie:
1) Zdefiniuj cel główny (CVR, CAC, przychód).
2) Zdefiniuj 3 dźwignie konwersji (zaufanie, oferta, tarcie).
3) Cele tygodniowe + leading indicators (start checkoutów, próby płatności).
4) Reguły: kiedy używać bodźca (incentive), a kiedy nie.
5) Zakończ checklistą CRO.`,
    thumbnail: "",
  },
  {
    id: "mobj-024",
    title:
      "Cele segmentacji — cele per segment (nowy vs powracający, zimny vs gorący)",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Definiuje cele per segment, żeby uniknąć mylących średnich.",
    prompt: `Uzupełnij:
- Dostępne segmenty:
- Oferta:
- Metryki per segment (jeśli istnieją):
- Kanały:

Zadanie:
1) Zaproponuj 4 kluczowe segmenty (zimny, ciepły, gorący, klient).
2) Dla każdego segmentu: cel główny + KPI.
3) Dla każdego segmentu: komunikat i kanał (krótko).
4) Cele tygodniowe per segment.
5) Jak raportować bez chaosu (sugerowana tabela).`,
    thumbnail: "",
  },
  {
    id: "mobj-025",
    title:
      "Cel pozycjonowania ceną (premium vs dostępne) — spójność metryk",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Dopasowuje cele do pozycjonowania cenowego: premium wymaga innych sygnałów.",
    prompt: `Uzupełnij:
- Cena:
- Konkurencja:
- ICP:
- Cykl zakupu:
- Social proof:

Zadanie:
1) Określ, czy pozycjonowanie powinno być premium czy dostępne (uzasadnij).
2) Zdefiniuj cele i KPI spójne z tym pozycjonowaniem.
3) Zdefiniuj sygnały jakości (np. calls booked, replies, prośby o demo).
4) Cele na 30 i 90 dni wraz z założeniami.`,
    thumbnail: "",
  },

  {
    id: "mobj-026",
    title:
      "Cele dla nowego kanału (TikTok/YouTube/LinkedIn) — realistyczne cele nauki",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele wejścia w kanał: konsekwencja, learning, sygnały popytu.",
    prompt: `Uzupełnij:
- Nowy kanał:
- Oferta:
- Zasoby (czas/montaż):
- Docelowy KPI na końcu:
- Wcześniejsze doświadczenie:

Zadanie:
1) Zdefiniuj cel 30 dni skoncentrowany na nauce (nie tylko wynikach).
2) Ustal:
   - output (liczba publikacji)
   - signal (retencja, kliknięcia, DM)
   - outcome (leady/sprzedaż)
3) Zdefiniuj “criteria to continue” i “criteria to stop/pivot”.
4) Zaprojektuj 8 eksperymentów contentowych na tydzień.`,
    thumbnail: "",
  },
  {
    id: "mobj-027",
    title:
      "Cele kampanii z influencerem/afiliacją — alignment i pomiar",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele i KPI dla współprac: zasięg, ruch, sprzedaż z atrybucją.",
    prompt: `Uzupełnij:
- Produkt:
- Typ influencera:
- Model (stała opłata/afiliacja):
- Kod/UTM:
- Okno:

Zadanie:
1) Zdefiniuj cel główny (sprzedaż/CPA/lead gen).
2) Zdefiniuj KPI: ER, kliknięcia, CVR landingu, sprzedaż, AOV.
3) Ustal minimalne kryteria sukcesu per influencer.
4) Plan contentu (3 materiały) + zasady trackingu.
5) Jak iterować, jeśli influencer daje ruch, ale nie sprzedaż.`,
    thumbnail: "",
  },
  {
    id: "mobj-028",
    title:
      "Cele kampanii reaktywacyjnej (nieaktywni klienci / zimne leady)",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele reaktywacji: reply rate, konwersja, win-back.",
    prompt: `Uzupełnij:
- Segment do reaktywacji:
- Czas nieaktywności:
- Oferta:
- Kanały (email/whatsapp):
- Historia:

Zadanie:
1) Zdefiniuj cel główny (win-back revenue lub reaktywacja intencji).
2) KPI: reply rate, CTR, konwersja, unsub.
3) Zdefiniuj 3 komunikaty/kąty i jak mierzyć zwycięzcę.
4) Cele tygodniowe i reguły czyszczenia listy.`,
    thumbnail: "",
  },
  {
    id: "mobj-029",
    title:
      "Cele eventu offline (sprzedaż + leady + content) z metrykami per etap",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele eventowe: rejestracje, frekwencja, leady, domknięcia, content.",
    prompt: `Uzupełnij:
- Event:
- Pojemność:
- Cena (jeśli dotyczy):
- Cel biznesowy:
- Kanały:

Zadanie:
1) Zdefiniuj cele:
   - rejestracje
   - frekwencja
   - kwalifikowane leady
   - sprzedaż/domknięcia
   - liczba materiałów contentowych
2) KPI per cel + cele tygodniowe.
3) Plan follow-up po evencie (7–14 dni) z celami domknięcia.`,
    thumbnail: "",
  },
  {
    id: "mobj-030",
    title:
      "Cele PR/prasy — sygnały popytu i reputacji (nie tylko wzmianki)",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele PR powiązane z biznesem: jakościowy ruch, zaufanie, leady.",
    prompt: `Uzupełnij:
- Marka:
- Komunikat:
- Odbiorca:
- Media docelowe:
- Asset konwersji (landing, lead magnet):

Zadanie:
1) Zdefiniuj główny cel PR (reputacja + popyt).
2) KPI: branded visits, wyszukiwania, leady, wzmianki jakościowe.
3) Cel per okres i jak atrybuować (UTM, piki).
4) Plan “aktywacji” po każdej publikacji.`,
    thumbnail: "",
  },

  {
    id: "mobj-031",
    title:
      "Rozbij cel na zadania (Workback plan) — od deadlinu do dziś",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Plan wsteczny: kamienie milowe, zależności, ownerzy.",
    prompt: `Uzupełnij:
- Cel finalny (SMART):
- Deadline:
- Brakujące aktywa (landing, kreacje, emaile):
- Zespół/role:

Zadanie:
1) Stwórz workback plan tygodniami (albo dniami, jeśli zostało <14 dni).
2) Uwzględnij:
   - deliverables
   - owner (rola)
   - zależności
   - wewnętrzny termin
3) Zdefiniuj “critical path” (co jak się opóźni — psuje całość).
4) Zdefiniuj rytuały kontrolne (max 3 spotkania).`,
    thumbnail: "",
  },
  {
    id: "mobj-032",
    title:
      "Cele z ograniczeniami (budżet/czas/zespół) — świadomie zdecyduj, co poświęcasz",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Dopasowuje cel do realnych ograniczeń: trójkąt zakres/czas/jakość.",
    prompt: `Uzupełnij:
- Pożądany cel:
- Budżet:
- Czas:
- Zespół:
- Kanały:

Zadanie:
1) Oceń wykonalność i oznacz:
   - możliwe
   - ryzykowne
   - niemożliwe
2) Zaproponuj skalibrowaną wersję celu (realistyczną) + KPI.
3) Zdefiniuj, co poświęcasz:
   - zasięg
   - szybkość
   - jakość
4) Zaproponuj 3 dźwignie poprawy bez zwiększania zasobów.`,
    thumbnail: "",
  },
  {
    id: "mobj-033",
    title:
      "Cele per rynek (lokalny vs międzynarodowy) — dopasuj KPI i komunikat",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele przy wejściu na nowy kraj/język: benchmarki i sygnały product-market fit.",
    prompt: `Uzupełnij:
- Obecny kraj:
- Nowy kraj:
- Kanały:
- Oferta:
- Dostępny social proof:

Zadanie:
1) Zdefiniuj cel wejścia na rynek (30/90 dni).
2) KPI walidacji: CTR, CPC, CVR, replies, demo.
3) Zdefiniuj 3 hipotezy kulturowe (komunikaty) do testu.
4) Cele tygodniowe i plan uczenia.`,
    thumbnail: "",
  },
  {
    id: "mobj-034",
    title:
      "Cele dla nowego vs dojrzałego produktu — co się zmienia i co mierzyć",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Dopasowuje cele do etapu: discovery vs optymalizacja.",
    prompt: `Uzupełnij:
- Produkt:
- Etap (nowy/dojrzały):
- Aktualne dane:
- Kanały:

Zadanie:
1) Jeśli nowy: zdefiniuj cele uczenia + początkowy popyt.
2) Jeśli dojrzały: zdefiniuj cele efektywności (CAC/ROAS/CVR).
3) Zdefiniuj minimalny dashboard dla obu przypadków.
4) Zdefiniuj “gates” przejścia: nowy → optymalizacja.`,
    thumbnail: "",
  },
  {
    id: "mobj-035",
    title:
      "Cele pricingu/promocji — zwiększ marżę bez ubicia konwersji",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele przy zmianie ceny: marża, CVR, churn, percepcja.",
    prompt: `Uzupełnij:
- Obecna cena:
- Nowa cena:
- Powód zmiany:
- Marża:
- Konkurencja:

Zadanie:
1) Zdefiniuj cel główny (marża/konwersja/retencja).
2) Zdefiniuj KPI i progi alarmowe.
3) Zaproponuj 3 eksperymenty z anchoringiem/ofertą, by utrzymać CVR.
4) Plan komunikacji (email, landing, skrypty) z celami per kanał.`,
    thumbnail: "",
  },

  {
    id: "mobj-036",
    title:
      "Cel jakości leadów — od ‘dużo leadów’ do ‘leady, które kupują’",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele jakości: MQL→SQL, show-up, close rate, pipeline.",
    prompt: `Uzupełnij:
- Produkt/usługa:
- Źródła leadów:
- Problem: śmieciowe leady vs mało domknięć
- Baseline: MQL→SQL, show-up, close rate (jeśli istnieje)

Zadanie:
1) Zdefiniuj cel główny jako “jakość”, nie wolumen.
2) Zdefiniuj KPI:
   - CPQL
   - SQL rate
   - close rate
   - CAC
3) Zdefiniuj 5 zmian poprawiających jakość (komunikat, formularz, kwalifikacja, nurture).
4) Cele tygodniowe i jak mierzyć realną poprawę.`,
    thumbnail: "",
  },
  {
    id: "mobj-037",
    title:
      "Cele dla umawiania rozmów (B2B/B2C high ticket) — od kliknięć do spotkań",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele kalendarza: show-up, set rate, close rate i wartość pipeline’u.",
    prompt: `Uzupełnij:
- Oferta:
- Cena:
- Lejek Calendly:
- Show-up rate:
- Close rate:
- Budżet:

Zadanie:
1) Zdefiniuj cel spotkań (liczba) i pipeline ($).
2) Zdefiniuj lejek: kliknięcia → leady → booked → showed → closed.
3) Targety per etap + reguły, gdy spada show-up.
4) Stwórz scoreboard dzienny i tygodniowy.
5) Zdefiniuj 3 dźwignie poprawy (remindery, kwalifikacja, oferta rozmowy).`,
    thumbnail: "",
  },
  {
    id: "mobj-038",
    title:
      "Cele SEO (90 dni) — cele per content, pozycje i leady",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Realistyczne cele SEO: output, jakość, proxy rankingów i leady.",
    prompt: `Uzupełnij:
- Nisza:
- Oferta:
- Aktualny stan SEO:
- Zasoby (writerzy):
- Priorytety:

Zadanie:
1) Zdefiniuj cele 30/60/90 dni (output i outcomes).
2) KPI: publikacje, indeksacja, pozycje (top 10), kliknięcia, leady.
3) Zdefiniuj 3 klastry i cele per klaster.
4) Plan pomiaru i miesięczne decyzje.`,
    thumbnail: "",
  },
  {
    id: "mobj-039",
    title:
      "Cele partnerships — współdzielone leady i atrybuowalny przychód",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele alianse: pipeline, rozmowy, przychód i aktywność.",
    prompt: `Uzupełnij:
- Idealny partner:
- Audiencja:
- Format (webinar, bundle, referral):
- Okno:
- Oferta:

Zadanie:
1) Zdefiniuj cel główny (leady, pipeline, przychód).
2) KPI główny + poboczne (spotkania, CTR, CVR).
3) Minimalna aktywność per partner (liczba wysyłek, postów itd.).
4) Raport i reguły kontynuacji (kontynuować/uciąć).`,
    thumbnail: "",
  },
  {
    id: "mobj-040",
    title:
      "Cele ‘North Star’ dla marketingu osobistego (personal brand) — sygnały, które mają znaczenie",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Ustala NSM dla marki osobistej: inbound popyt, kwalifikowane DM, rozmowy.",
    prompt: `Uzupełnij:
- Oferta:
- Platforma:
- Dostępny czas:
- Baseline:
- Publiczność:

Zadanie:
1) Zdefiniuj idealną NSM (np. calls booked/mies., kwalifikowane DM/tydz.).
2) Zdefiniuj 3 cele “pod spodem” (content, lead capture, nurture).
3) Zdefiniuj tygodniowy scoreboard.
4) Zdefiniuj kadencję: co robisz dziennie/tygodniowo i jakich wyników oczekujesz.`,
    thumbnail: "",
  },

  {
    id: "mobj-041",
    title:
      "Cel typu ‘Scoreboard’ (max 12 metryk) — executives dashboard kampanii",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Projektuje prosty scoreboard, którego zespół naprawdę używa do decyzji.",
    prompt: `Uzupełnij:
- Kampania:
- Kanały:
- KPI główny:
- Lejek:

Zadanie:
1) Wybierz 12 metryk lub mniej i pogrupuj:
   - zdrowie pozyskania
   - zdrowie intencji
   - zdrowie konwersji
   - zdrowie retencji
2) Zdefiniuj częstotliwość przeglądu (codziennie/tygodniowo) dla każdej metryki.
3) Ustal progi (zielony/żółty/czerwony).
4) Zdefiniuj działania dla czerwonego (co robimy, nie tylko patrzymy).`,
    thumbnail: "",
  },
  {
    id: "mobj-042",
    title:
      "Cele per kreacja (ads) — co ma ruszać każdy typ kreacji",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele per kąt kreatywny: hook, dowód, oferta, obiekcje.",
    prompt: `Uzupełnij:
- Produkt:
- Używane kąty kreatywne:
- Aktualny problem (niski CTR, niski CVR itd.):
- Kanały:

Zadanie:
1) Zdefiniuj 5 typów kreacji i ich cel:
   - Hook/awareness
   - Social proof
   - Demo
   - Objection handling
   - Oferta
2) KPI per typ (CTR, hold rate, CVR).
3) Cele i kryteria sukcesu per typ.
4) Plan tygodniowej rotacji (ile nowych per typ).`,
    thumbnail: "",
  },
  {
    id: "mobj-043",
    title:
      "Cele, gdy ‘wszystko siada’ — szybka diagnoza (jaki cel priorytet dziś)",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Framework do wyboru celu tygodnia, gdy jest chaos i mieszane dane.",
    prompt: `Uzupełnij:
- Symptomy (CTR, CPC, leady, CVR, sprzedaż):
- Kanały:
- Oferta:
- Ostatnie zmiany:

Zadanie:
1) Zdiagnozuj, w której części lejka jest problem (top/mid/bottom/fulfillment).
2) Zdefiniuj 1 jedyny cel na 7 dni (maks. priorytet).
3) Zdefiniuj 3 działania o najwyższym wpływie na ten tydzień.
4) Zdefiniuj, czego NIE zrobimy (stop doing).
5) Zdefiniuj, skąd będziesz wiedzieć po 72h, czy idzie lepiej czy gorzej.`,
    thumbnail: "",
  },
  {
    id: "mobj-044",
    title:
      "Cele jakości kreatywnej — spójność, jasność, wiarygodność (content i ads)",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele poprawiające jakość komunikatu (nie tylko KPI zakupowe).",
    prompt: `Uzupełnij:
- Marka:
- Oferta:
- Aktualny problem (zamieszanie, brak zaufania, rozjechany przekaz):

Zadanie:
1) Zdefiniuj 3 cele jakości:
   - klarowność oferty
   - wiarygodność/dowód
   - spójność narracyjna
2) Zdefiniuj wskaźniki jakości (wewnętrzne i zewnętrzne).
3) Zdefiniuj checklistę audytu materiałów (10 punktów).
4) Zdefiniuj plan 30 dni na podniesienie jakości (deliverables tygodniowe).`,
    thumbnail: "",
  },
  {
    id: "mobj-045",
    title:
      "Cele upsell/cross-sell — zwiększ LTV bez zwiększania CAC",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele pod LTV: upsell rate, take rate, AOV, marża.",
    prompt: `Uzupełnij:
- Produkt główny:
- Dostępne upsell/cross-sell:
- Aktualny AOV:
- Okno po zakupie:
- Kanały:

Zadanie:
1) Zdefiniuj cel główny (LTV/AOV take rate).
2) KPI i cele tygodniowe.
3) 3 punkty wpięcia:
   - checkout
   - post-purchase
   - email/whatsapp
4) 5 hipotez bundli/ofert do przetestowania.`,
    thumbnail: "",
  },

  {
    id: "mobj-046",
    title:
      "Cel szybkości (time-to-launch) — wypuść w 7 dni bez rozwalenia jakości",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cel szybkiego wyjścia: minimum deliverables, akceptowalne ryzyka i kontrola.",
    prompt: `Uzupełnij:
- Oferta:
- Data docelowa:
- Minimalne aktywa:
- Zespół:
- Ryzyka:

Zadanie:
1) Zdefiniuj MVP launchu (co musi istnieć bezwzględnie).
2) Zdefiniuj cel główny (wyjść na rynek i mierzyć).
3) Zdefiniuj minimalne metryki walidacji w 72h.
4) Lista “must not ship” (rzeczy, które nie mogą się zepsuć).
5) Workback plan dzień po dniu.`,
    thumbnail: "",
  },
  {
    id: "mobj-047",
    title:
      "Cele pricingu per segment — ta sama oferta, różne cele wg klienta",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele per segment dla pricingu: premium vs wolumen vs wejście.",
    prompt: `Uzupełnij:
- Segmenty:
- Skłonność do płacenia:
- Oferta:
- Kanały:

Zadanie:
1) Zdefiniuj cel per segment (marża vs wolumen vs pozyskanie).
2) KPI per segment.
3) Komunikat per segment (1–2 zdania).
4) Plan pomiaru i kiedy rozdzielać kampanie/landingi.`,
    thumbnail: "",
  },
  {
    id: "mobj-048",
    title:
      "Cele redukcji frikcji — checkout/landing/call booking",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cel skupiony na tarciu: porzucenia i konwersje kroków.",
    prompt: `Uzupełnij:
- Punkt tarcia (formularz, checkout, kalendarz):
- Krok, na którym odpadają:
- Baseline:
- Narzędzia:

Zadanie:
1) Zdefiniuj cel główny (zredukować porzucenia o X%).
2) Metryki per krok (step conversion).
3) 10 hipotez tarcia + poprawki.
4) Plan testów (2 tygodnie) z kryterium sukcesu.`,
    thumbnail: "",
  },
  {
    id: "mobj-049",
    title:
      "Cele z niedoskonałą atrybucją — jak mierzyć bez perfekcyjnego trackingu",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Cele i pomiar przy iOS/dark social/sprzedaży przez WhatsApp itd.",
    prompt: `Uzupełnij:
- Kanały:
- Sprzedaż przez DM/WhatsApp:
- Problemy z trackingiem:
- KPI, które możesz mierzyć:

Zadanie:
1) Zdefiniuj cel główny i metryki proxy (leading).
2) System “self-reported attribution” (pytania w checkout/DM).
3) Hybrydowy dashboard: dane bezpośrednie + proxy.
4) Reguły decyzji: jak skalować bez 100% pewności.`,
    thumbnail: "",
  },
  {
    id: "mobj-050",
    title:
      "Cel końcowy + kontrakt pomiaru — prosty dokument do wyrównania zespołu",
    area: "Marketing i sprzedaż",
    category: "Cele",
    summary:
      "Szablon ‘kontraktu celów’: co mierzymy, jak i co oznacza sukces.",
    prompt: `Uzupełnij:
- Kampania:
- Cel startowy:
- KPI:
- Kanały:
- Założenia:
- Odpowiedzialni:

Zadanie:
Napisz krótki dokument (1 strona), który zawiera:
1) Cel SMART (1 zdanie).
2) KPI (główny/poboczne) z dokładnymi definicjami.
3) Założenia i zależności (co musi się wydarzyć).
4) Progi (zielony/żółty/czerwony) per KPI.
5) Rytm raportowania i kto decyduje.
6) Czego NIE mierzymy i dlaczego.
7) Lista ryzyk i mitigacji.
Ma być gotowe do wklejenia do Notion/Docs.`,
    thumbnail: "",
  },
];
