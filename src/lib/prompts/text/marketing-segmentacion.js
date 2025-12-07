// src/lib/prompts/text/marketing-segmentacion.js

export const textPromptsMarketingSegmentacion = [
  {
    id: "mseg-001",
    title:
      "Kompletna segmentacja (ICP) — zdefiniuj segmenty wg problemu, nie demografii",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Tworzy segmenty możliwe do wykorzystania w praktyce, oparte o Jobs-To-Be-Done, ból, intencję i kontekst użycia.",
    prompt: `Kontekst (uzupełnij):
- Produkt/usługa:
- Cena / ticket:
- Rynek / kraj:
- Główny kanał (ads/organic/email/whatsapp):
- Kto kupuje dziś (co wiesz):
- Główne use case’y:
- Konkurenci/alternatywy:
- Typowe obiekcje:
- Czas decyzji:
- Co oznacza ‘sukces’ dla klienta:

Zadanie:
1) Zdefiniuj 6–10 segmentów na podstawie:
   - Głównego problemu (Job-To-Be-Done)
   - Kontekstu (kiedy boli najbardziej)
   - Pilności (wysoka/średnia/niska)
   - Zdolności (pieniądze/czas/zespół)
2) Dla każdego segmentu napisz:
   - nazwę segmentu (jasną i zapadającą w pamięć)
   - “zdanie-moment” (np. “kiedy ____ się dzieje, potrzebuję ____”)
   - triggery zakupu
   - 3 kluczowe komunikaty
   - idealna oferta/CTA (call, checkout, demo, lead magnet)
   - sygnały “no fit”
3) Ustal priorytety segmentów (top 3) używając macierzy:
   - dostępny TAM, łatwość pozyskania, marża/LTV, pilność
4) Zakończ planem testu na 2 tygodnie:
   - jak walidować każdy segment (ads, content, ankieta, rozmowy).`,
    thumbnail: "",
  },
  {
    id: "mseg-002",
    title:
      "Segmentacja wg intencji (cold / warm / hot) — jasne reguły i triggery",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Definiuje segmenty wg intencji i automatyzuje, jaką treść/ofertę otrzymuje każdy segment.",
    prompt: `Uzupełnij:
- Kanały (email/whatsapp/ads/site):
- Trackowalne zdarzenia (wizyta pricing, klik CTA, reply itd.):
- Oferta:
- Sprzedaż (B2B/B2C) i cykl:

Zadanie:
1) Zdefiniuj 3 poziomy:
   - Zimny: definicja + kryterium
   - Ciepły: definicja + kryterium
   - Gorący: definicja + kryterium
2) Zdefiniuj prosty scoring (0–100) z punktami za zdarzenia.
3) Zdefiniuj 8 triggerów i jaką akcję uruchamiają:
   - sekwencja A/B/C
   - zmiana komunikatu
   - oferta (soft/hard)
4) Zdefiniuj “caps”, żeby nie spamować.
5) Oddaj tabelę:
   Poziom | Kryterium | Główny komunikat | CTA | Rekomendowane treści | Częstotliwość`,
    thumbnail: "",
  },
  {
    id: "mseg-003",
    title:
      "Segmentacja wg etapu lejka — awareness → rozważanie → konwersja",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Tworzy segmenty wg poziomu świadomości i dopasowuje narrację do każdego poziomu.",
    prompt: `Uzupełnij:
- Produkt:
- Problem, który rozwiązuje:
- Mechanizm/rozwiązanie:
- Obiekcje:
- Kanały:

Zadanie:
1) Zdefiniuj 4 poziomy świadomości:
   - Nieświadomy
   - Świadomy problemu
   - Świadomy rozwiązania
   - Świadomy produktu
2) Dla każdego poziomu:
   - cel komunikacji
   - 5 kątów komunikatu
   - 3 idealne typy treści
   - właściwe CTA
3) Podaj przykłady (copy) dla każdego poziomu:
   - 2 hooki
   - 1 email/wiadomość
   - 1 krótka reklama`,
    thumbnail: "",
  },
  {
    id: "mseg-004",
    title:
      "Segmentacja wg ‘Job-To-Be-Done’ — mapowanie jobs, pains, gains i ofert",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Rozbija rynek na jobs i dopasowuje komunikaty + ofertę do każdego joba.",
    prompt: `Uzupełnij:
- Produkt:
- Główne zastosowania:
- Wyniki, których szukają:
- Alternatywy:

Zadanie:
1) Zidentyfikuj 8 konkretnych Jobs-To-Be-Done (JTBD).
2) Dla każdego joba:
   - sytuacja wyzwalająca
   - pożądany rezultat
   - główny pain
   - obecna alternatywa
   - dlaczego zawodzi
   - główny komunikat
   - idealna oferta (lead magnet/entry/prime)
3) Ustal priorytety 3 JTBD wg potencjału i łatwości pozyskania.`,
    thumbnail: "",
  },
  {
    id: "mseg-005",
    title:
      "Segmentacja wg ‘możliwości’ (czas/pieniądze/zespół) — dopasuj obietnicę i format",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Tworzy segmenty wg realnych zasobów klienta i dopasowuje obietnicę, tempo i wsparcie.",
    prompt: `Uzupełnij:
- Oferta:
- Format (kurs, usługa, SaaS):
- Dostępne wsparcie:
- Cena:

Zadanie:
1) Zdefiniuj 5 poziomów możliwości:
   - Czas (wysoki/niski)
   - Pieniądze (wysokie/niskie)
   - Zespół (solo/mały/z firmą)
2) Skrzyżuj je i zbuduj 4–6 finalnych segmentów.
3) Dla każdego segmentu:
   - czego NIE wolno obiecywać
   - realistyczna obietnica (jak brzmi)
   - rekomendowany format (DIY, DFY, DWY)
   - idealne CTA
4) Zakończ: “jak wykryć możliwości” (pytania do formularza/DM).`,
    thumbnail: "",
  },

  {
    id: "mseg-006",
    title:
      "Segmentacja wg branży (B2B) — verticale i komunikaty per vertical",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Buduje 6 verticali z bólami, KPI i przykładami, by dopasować landing/ads.",
    prompt: `Uzupełnij:
- Usługa B2B:
- KPI, które poprawiasz:
- Docelowe branże (jeśli masz):
- Case’y lub doświadczenie:

Zadanie:
1) Zaproponuj 6 relewantnych verticali.
2) Dla każdego verticala:
   - ból #1 i #2
   - główny KPI
   - typowa obiekcja
   - przykład use case’u
   - copy: 1 headline + 3 bullets
   - rekomendowane CTA
3) Zarekomenduj 2 verticale na start i dlaczego.`,
    thumbnail: "",
  },
  {
    id: "mseg-007",
    title:
      "Segmentacja wg roli (B2B) — decydent vs użytkownik vs wewnętrzny champion",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Dopasowuje komunikaty i assety do roli: CFO/CEO/marketing manager/ops itd.",
    prompt: `Uzupełnij:
- Produkt/usługa:
- Role zaangażowane:
- Proces zakupu:
- Postrzegane ryzyka:

Zadanie:
1) Zdefiniuj 3 typowe role:
   - Decydent finansowy
   - Główny użytkownik
   - Wewnętrzny champion
2) Dla każdej roli:
   - co ich obchodzi (priorytety)
   - obiekcje
   - metryki sukcesu
   - jaki proof jest potrzebny
   - główny komunikat i CTA
3) Napisz 1 email i 1 krótką reklamę na rolę.`,
    thumbnail: "",
  },
  {
    id: "mseg-008",
    title:
      "Segmentacja behawioralna (RFM) — Recent, Frequency, Monetary",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Tworzy segmenty RFM gotowe do email/WhatsApp: reaktywacja, upsell, VIP i inne.",
    prompt: `Uzupełnij:
- Typ biznesu (ecom/usługi):
- Okno zakupu/ponownego zakupu:
- Dostępne dane (daty, #zakupów, wydatki):
- Produkty/kategorie:

Zadanie:
1) Zdefiniuj progi RFM (wysoki/średni/niski) pod Twoją sytuację.
2) Stwórz 8 segmentów:
   - VIP (wysoka wartość, wysoka częstotliwość)
   - Nowi (świeży zakup, niska częstotliwość)
   - W ryzyku (brak świeżości)
   - Uśpieni
   - Łowcy promocji itd.
3) Dla każdego segmentu:
   - cel (utrzymanie, upsell, winback)
   - 3 komunikaty/kąty
   - rekomendowana oferta
   - bezpieczna częstotliwość
4) Stwórz kalendarz na 4 tygodnie (który segment dostaje co).`,
    thumbnail: "",
  },
  {
    id: "mseg-009",
    title:
      "Segmentacja wg engagementu (email) — aktywni / ciepli / nieaktywni + plan higieny",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Ustala reguły segmentacji wg engagementu i poprawia deliverability bez utraty sprzedaży.",
    prompt: `Uzupełnij:
- ESP (Klaviyo/Mailchimp/etc.):
- Częstotliwość wysyłki:
- Bazowy poziom open/click:
- Cel (sprzedaż/nurturing):

Zadanie:
1) Zdefiniuj segmenty:
   - Super aktywni
   - Aktywni
   - Ciepławo aktywni
   - Nieaktywni 30/60/90
2) Zdefiniuj dokładne reguły (np. “otworzył ≥2 z ostatnich 10”).
3) Dla każdego segmentu:
   - typ treści
   - częstotliwość
   - CTA
4) Zdefiniuj plan re-engagement (7 dni) i plan czyszczenia (kiedy i jak).`,
    thumbnail: "",
  },
  {
    id: "mseg-010",
    title:
      "Segmentacja wg źródła pozyskania — dopasuj obietnicę do tego, ‘skąd przyszli’",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Zamienia sources (ads, organic, referral, webinar) w segmenty z inną narracją.",
    prompt: `Uzupełnij:
- Źródła (Meta ads, Google, TikTok, organic, afiliacje itd.):
- Lead magnety per źródło:
- Oferta:
- Obiekcje:

Zadanie:
1) Zdefiniuj 6 segmentów wg źródła.
2) Dla każdego źródła:
   - z jakimi oczekiwaniami przychodzą
   - czego muszą się nauczyć najpierw
   - idealna wiadomość powitalna
   - właściwe CTA
3) Napisz 1 onboarding message na źródło (gotowe do skopiowania).`,
    thumbnail: "",
  },

  {
    id: "mseg-011",
    title:
      "Segmentacja wg ‘konkretnego problemu’ — 12 mikrosegmentów z innym copy",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Generuje mikrosegmenty wg konkretnego sub-problemu i tworzy komunikaty oraz zasoby per segment.",
    prompt: `Uzupełnij:
- Oferta:
- Problem ogólny:
- Znane sub-problemy (jeśli masz):

Zadanie:
1) Wygeneruj 12 mikrosegmentów wg sub-problemów (bardzo konkretnie).
2) Dla każdego mikrosegmentu:
   - nazwa
   - typowy symptom
   - prawdopodobna przyczyna źródłowa
   - rozwiązanie (idea)
   - zasób-pomost (lead magnet)
   - finalne CTA
3) Napisz 2 hooki i 1 headline na mikrosegment.`,
    thumbnail: "",
  },
  {
    id: "mseg-012",
    title:
      "Segmentacja wg triggerów (momenty) — ‘gdy dzieje się X, kupują szybciej’",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Wyszukuje sytuacyjne wyzwalacze zakupu i tworzy komunikaty specyficzne dla triggera.",
    prompt: `Uzupełnij:
- Oferta:
- Znane momenty (np. launch, kryzys, zatrudnianie, wejście na rynek):
- Kanał:

Zadanie:
1) Wypisz 10 triggerów zakupu (sytuacji).
2) Dla każdego triggera:
   - dominująca emocja
   - pilność
   - najbardziej relewantna obietnica
   - typowa obiekcja
   - idealne CTA
3) Napisz 1 krótką reklamę i 1 DM na trigger.`,
    thumbnail: "",
  },
  {
    id: "mseg-013",
    title:
      "Segmentacja wg poziomu doświadczenia — początkujący vs średniozaawansowany vs zaawansowany",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Dopasowuje język, przykłady i ofertę wg doświadczenia klienta.",
    prompt: `Uzupełnij:
- Oferta:
- Temat:
- Typowe błędy:
- Kanał:

Zadanie:
1) Zdefiniuj 3 poziomy (początkujący/średniozaawansowany/zaawansowany) z jasnymi kryteriami.
2) Dla każdego poziomu:
   - w co wierzą dziś (przekonania)
   - czego muszą się nauczyć
   - czego unikać (co frustruje)
   - główny komunikat i CTA
3) Napisz:
   - 1 email
   - 1 reklamę
   - 1 hook do wideo
dla każdego poziomu.`,
    thumbnail: "",
  },
  {
    id: "mseg-014",
    title:
      "Segmentacja wg budżetu — ‘wrażliwi na cenę’ bez niszczenia marży",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg wrażliwości cenowej i definiuje drabinkę ofert oraz dopasowane copy.",
    prompt: `Uzupełnij:
- Aktualna cena:
- Tańsze alternatywy:
- Premium alternatywy:
- Kanał:

Zadanie:
1) Zdefiniuj 3 segmenty:
   - Wrażliwy na cenę
   - Wartość/ROI
   - Premium (status/bezpieczeństwo)
2) Dla każdego segmentu:
   - rekomendowany język
   - proof, który waży najwięcej
   - format oferty (bundle, plan, gwarancja, trial)
   - CTA
3) Napisz 2 wersje pitchu na segment (krótki i długi).`,
    thumbnail: "",
  },
  {
    id: "mseg-015",
    title:
      "Segmentacja wg dominującej obiekcji — 8 segmentów wg powodu, dla którego NIE kupują",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Tworzy segmenty wg obiekcji i przypisuje nurturing/ads specyficzne dla każdego segmentu.",
    prompt: `Uzupełnij:
- Oferta:
- Lista realnych obiekcji (min. 8):
- Kanały:

Zadanie:
1) Zamień każdą obiekcję w segment (np. “Nie mam czasu”).
2) Dla każdego segmentu:
   - co muszą zobaczyć/zrozumieć
   - główny komunikat (reframe)
   - idealny zasób-pomost
   - finalne CTA
3) Napisz 1 reklamę i 1 email na obiekcję.`,
    thumbnail: "",
  },

  {
    id: "mseg-016",
    title:
      "Segmentacja wg kategorii produktu (eCommerce) — kolekcje i bundle’e wg intencji",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Tworzy segmenty wg intencji zakupu (use case) i przypisuje kolekcje/bundle’e.",
    prompt: `Uzupełnij:
- Katalog (kategorie):
- AOV:
- top produkty:
- Sezonowość:

Zadanie:
1) Zdefiniuj 8 intencji zakupu (np. prezent, codziennie, premium, pilne).
2) Dla każdej intencji:
   - rekomendowana kolekcja (produkty)
   - sugerowany bundle
   - copy: 1 headline + 5 bullets
   - CTA
3) Zdefiniuj flow po kliknięciu: landing/kolekcja i upsell.`,
    thumbnail: "",
  },
  {
    id: "mseg-017",
    title:
      "Segmentacja wg cyklu życia — nowy → aktywowany → powracający → w ryzyku",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Definiuje lifecycle stages i co powinien dostać każdy etap, żeby podnieść LTV.",
    prompt: `Uzupełnij:
- Typowe okno ponownego zakupu:
- Produkt:
- Kanały po zakupie:

Zadanie:
1) Zdefiniuj 6 etapów cyklu życia z kryteriami liczbowymi.
2) Dla każdego etapu:
   - cel (aktywować, utrzymać, upsell, winback)
   - 3 kluczowe komunikaty
   - rekomendowana oferta
3) Stwórz tabelę automatyzacji per etap.`,
    thumbnail: "",
  },
  {
    id: "mseg-018",
    title:
      "Segmentacja wg ‘mechanizmu rozwiązania’ — ludzie wierzą w różne podejścia",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg przekonań: automatyzacja vs kreatywność vs dyscyplina vs narzędzia.",
    prompt: `Uzupełnij:
- Problem:
- Twoje rozwiązanie/metoda:
- “Szkoły” na rynku (jeśli istnieją):
- Kanał:

Zadanie:
1) Zdefiniuj 4–6 segmentów wg przekonań/mechanizmu.
2) Dla każdego segmentu:
   - język i metafory
   - jakie dowody ich przekonują
   - jaka obiekcja ich blokuje
   - idealne CTA
3) Napisz 3 hooki na segment.`,
    thumbnail: "",
  },
  {
    id: "mseg-019",
    title:
      "Segmentacja z minimalnej ilości danych — 5 magicznych pytań do formularza/DM",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Projektuje 5 pytań, które pozwalają segmentować prawie wszystko bez tarcia.",
    prompt: `Uzupełnij:
- Oferta:
- Kanał pytań (form/DM/WhatsApp):
- 3 możliwe rezultaty klienta:
- Ograniczenia:

Zadanie:
1) Zaproponuj 5 pytań (max) i zestawy odpowiedzi (opcje), aby segmentować:
   - możliwości
   - pilność
   - ból
   - doświadczenie
   - budżet
2) Zmapuj każdą odpowiedź do segmentu (etykiety).
3) Napisz inne podziękowanie/thank you screen dla każdego segmentu (5 wariantów).`,
    thumbnail: "",
  },
  {
    id: "mseg-020",
    title:
      "Segmentacja po języku — wykryj ‘słowa’, które zdradzają segment",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Identyfikuje wzorce słów per segment i dopasowuje copy, by mocniej rezonowało.",
    prompt: `Uzupełnij:
- Nisza:
- Oferta:
- 20 realnych zdań od klientów (jeśli nie masz, wymyśl realistyczne przykłady):
- Kanał:

Zadanie:
1) Zgrupuj zdania w 4–6 klastrów (segmentów).
2) Dla każdego klastra:
   - powtarzające się słowa
   - dominująca emocja
   - priorytet
   - rekomendowane copy (headline + 3 bullets + CTA)
3) Stwórz glosariusz “zakazanych słów” per segment (czego nie znoszą).`,
    thumbnail: "",
  },

  {
    id: "mseg-021",
    title:
      "Segmentacja wg ‘poziomu bólu’ — lekki, umiarkowany, krytyczny (różne komunikaty)",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Rozróżnia ból i pilność, żeby nie przesprzedawać ani nie niedosprzedawać.",
    prompt: `Uzupełnij:
- Problem:
- Oferta:
- Sygnały bólu:

Zadanie:
1) Zdefiniuj 3 poziomy bólu z obserwowalnymi kryteriami.
2) Dla każdego poziomu:
   - komunikat (co mówić)
   - ton (czego unikać)
   - CTA (właściwy krok)
3) Napisz 2 krótkie reklamy na poziom.`,
    thumbnail: "",
  },
  {
    id: "mseg-022",
    title:
      "Segmentacja wg ‘momentu biznesowego’ — pre-launch, launch, skalowanie, kryzys",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg etapu biznesu klienta i dopasowuje ofertę, obietnicę i dowód.",
    prompt: `Uzupełnij:
- Nisza:
- Oferta:
- Typowe etapy Twoich klientów:
- Kanał:

Zadanie:
1) Zdefiniuj 5 etapów biznesu klienta.
2) Dla każdego etapu:
   - cel klienta
   - główny strach
   - kluczowa metryka
   - komunikat i CTA
3) Stwórz mini-outline landing page’a na etap (sekcje i bullets).`,
    thumbnail: "",
  },
  {
    id: "mseg-023",
    title:
      "Segmentacja wg preferowanego kanału — ‘tylko WhatsApp’, ‘tylko email’, ‘tylko call’",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg preferencji komunikacji i dopasowuje nurturing do kanału.",
    prompt: `Uzupełnij:
- Oferta:
- Dostępne kanały:
- Assety per kanał:

Zadanie:
1) Zdefiniuj 4 segmenty wg preferencji kanału.
2) Dla każdego segmentu:
   - idealna częstotliwość
   - styl copy
   - właściwe CTA
3) Napisz 1 onboarding message i 1 ofertową wiadomość na segment.`,
    thumbnail: "",
  },
  {
    id: "mseg-024",
    title:
      "Segmentacja wg wrażliwości na ryzyko — ‘chcę pewności’ vs ‘lubię eksperymentować’",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg tolerancji ryzyka i dopasowuje dowody, gwarancje oraz strukturę oferty.",
    prompt: `Uzupełnij:
- Oferta:
- Postrzegane ryzyka:
- Gwarancje/dowody:
- Kanał:

Zadanie:
1) Zdefiniuj 3 segmenty:
   - niska tolerancja ryzyka (potrzebuje pewności)
   - średnia tolerancja ryzyka
   - wysoka tolerancja ryzyka (eksperymentator)
2) Dla każdego segmentu:
   - jaki proof działa najlepiej
   - jakich słów używać/unikać
   - CTA
3) Napisz 2 wersje pitchu na segment.`,
    thumbnail: "",
  },
  {
    id: "mseg-025",
    title:
      "Segmentacja wg ‘tego, co już próbowali’ — DIY, agencja, kursy, narzędzia",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg wcześniejszych prób i tworzy komunikaty, które szanują ich historię bez oceniania.",
    prompt: `Uzupełnij:
- Oferta:
- Alternatywy, które już testowali:
- Dlaczego nie zadziałało:
- Kanał:

Zadanie:
1) Stwórz 5 segmentów wg wcześniejszej próby.
2) Dla każdego segmentu:
   - walidacja (empatia)
   - reframe (czego brakowało)
   - dlaczego Twoja metoda pasuje
   - idealne CTA
3) Napisz 1 email i 1 DM na segment.`,
    thumbnail: "",
  },

  {
    id: "mseg-026",
    title:
      "Segmentacja wg ‘pożądanego rezultatu’ — szybkość, jakość, stabilność, wzrost",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg końcowego celu klienta i przypisuje obietnicę, proof i ofertę.",
    prompt: `Uzupełnij:
- Oferta:
- 4 typowe pożądane rezultaty:
- Kanał:

Zadanie:
1) Zdefiniuj 4–6 segmentów wg rezultatu (np. “chcę szybko wyników”).
2) Dla każdego segmentu:
   - realistyczna obietnica
   - ryzyka/ograniczenia
   - idealny proof
   - CTA
3) Wygeneruj 3 hooki i 1 headline na segment.`,
    thumbnail: "",
  },
  {
    id: "mseg-027",
    title:
      "Segmentacja wg ‘dojrzałości systemu’ — brak systemu vs jest system vs optymalizacja",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg poziomu procesów/systemów klienta i dopasowuje rozwiązanie.",
    prompt: `Uzupełnij:
- Nisza:
- Oferta:
- Wymagania Twojego rozwiązania (dane, procesy itd.):

Zadanie:
1) Zdefiniuj 3 poziomy dojrzałości:
   - chaos (brak systemu)
   - stabilnie (jakiś system)
   - optymalizacja (solidny system)
2) Dla każdego poziomu:
   - czego potrzebują najpierw
   - czego NIE sprzedawać jeszcze
   - jakie korzyści są najważniejsze
   - właściwe CTA
3) Stwórz kwestionariusz (8 pytań) do klasyfikacji.`,
    thumbnail: "",
  },
  {
    id: "mseg-028",
    title:
      "Segmentacja wg geografii i kultury — dopasuj przykłady, odniesienia i obietnice",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg kraju/miasta/kultury i dopasowuje copy bez tanich stereotypów.",
    prompt: `Uzupełnij:
- Kraje/rynki docelowe:
- Oferta:
- Znane różnice kulturowe:
- Kanały:

Zadanie:
1) Zdefiniuj 4 sensowne segmenty geograficzne (lub kulturowe).
2) Dla każdego segmentu:
   - odniesienia i przykłady, które rezonują
   - ton (formalny/nieformalny)
   - typowe obiekcje
   - dopasowane CTA i oferta
3) Napisz 1 reklamę i 1 email na segment (w lokalnym języku).`,
    thumbnail: "",
  },
  {
    id: "mseg-029",
    title:
      "Segmentacja wg zachowania na stronie — ścieżki page’ów i konsumowane treści",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Tworzy segmenty wg nawigacji: czytelnicy bloga, odwiedzający pricing, startujący checkout itd.",
    prompt: `Uzupełnij:
- Kluczowe strony (home, pricing, case’y, checkout):
- Trackowalne zdarzenia:
- Oferta:
- Kanał aktywacji (email/ads):

Zadanie:
1) Zdefiniuj 8 segmentów na podstawie ścieżek:
   - odwiedził pricing 2+ razy
   - przeczytał 3 artykuły z jednego klastra
   - rozpoczął checkout, ale nie kupił
   - obejrzał case’y itd.
2) Dla każdego segmentu:
   - hipoteza intencji
   - główny komunikat
   - zasób-pomost
   - CTA
3) Zaprojektuj sekwencję 4 wiadomości dla segmentu “pricing visitor”.`,
    thumbnail: "",
  },
  {
    id: "mseg-030",
    title:
      "Segmentacja wg produktu wejściowego — zmapuj ‘entry’ → ‘core’ → ‘premium’",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg tego, co kupili/pobrali i tworzy ścieżki wartości (ladder).",
    prompt: `Uzupełnij:
- Oferta entry:
- Oferta core:
- Oferta premium:
- Typowe okno upgrade’u:
- Kanał:

Zadanie:
1) Zdefiniuj 5 segmentów wg punktu wejścia.
2) Dla każdego segmentu:
   - co muszą osiągnąć, zanim przejdą poziom wyżej
   - nurturing content (3 pomysły)
   - właściwy moment upsellu
   - wiadomość upsell (copy)
3) Stwórz mapę journey wg poziomów.`,
    thumbnail: "",
  },

  {
    id: "mseg-031",
    title:
      "Segmentacja do reklam (Meta/TikTok) — struktura ad setów per segment i kreacje",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Zamienia segmenty w ad sety, definiuje kreacje i KPI dla każdego segmentu.",
    prompt: `Uzupełnij:
- Oferta:
- Segmenty-kandydaci:
- Budżet:
- KPI docelowy:
- Dostępne kreacje:

Zadanie:
1) Zaproponuj strukturę kampanii:
   - prospecting (segmenty)
   - remarketing (segmenty)
2) Dla każdego segmentu:
   - kąty kreatywne (3)
   - rekomendowane formaty (UGC, demo, dowód)
   - główna metryka i próg
3) Zdefiniuj hipotezę per ad set i plan testu na 14 dni.`,
    thumbnail: "",
  },
  {
    id: "mseg-032",
    title:
      "Segmentacja do contentu organicznego — filary per segment i powtarzalne serie",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Definiuje serie treści per segment, aby łapać kwalifikowany popyt.",
    prompt: `Uzupełnij:
- Platforma:
- Oferta:
- Segmenty:
- Częstotliwość:

Zadanie:
1) Wybierz 3 segmenty priorytetowe.
2) Dla każdego segmentu:
   - 4 filary treści
   - 3 serie (np. “błędy”, “case’y”, “jak to zrobić”)
   - 10 konkretnych tytułów
3) Zdefiniuj CTA per segment (keyword do DM, link, komentarz).`,
    thumbnail: "",
  },
  {
    id: "mseg-033",
    title:
      "Segmentacja wg pilności — ‘potrzebuję teraz’ vs ‘kiedyś’",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Rozdzielenie pilności zmienia copy, ofertę i follow-up. Reguły i teksty per poziom.",
    prompt: `Uzupełnij:
- Oferta:
- Sygnały pilności:
- Kanał:

Zadanie:
1) Zdefiniuj 3 poziomy pilności z obserwowalnymi kryteriami.
2) Dla każdego poziomu:
   - główny komunikat
   - częstotliwość follow-upu
   - CTA
3) Napisz 3 follow-up wiadomości per pilność.`,
    thumbnail: "",
  },
  {
    id: "mseg-034",
    title:
      "Segmentacja wg ‘poziomu zaufania’ — sceptycy vs neutralni vs wierzący",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Tworzy segmenty wg zaufania do kategorii i dopasowuje proof: dane, case’y, gwarancja, demo.",
    prompt: `Uzupełnij:
- Oferta:
- Kategoria (co sprzedajesz):
- Dostępne dowody:
- Kanał:

Zadanie:
1) Zdefiniuj 3 segmenty: sceptyk, neutralny, wierzący.
2) Dla każdego:
   - jaki proof waży najbardziej
   - jakiego języka używać/unikać
   - CTA
3) Napisz krótką reklamę i krótki email na segment.`,
    thumbnail: "",
  },
  {
    id: "mseg-035",
    title:
      "Segmentacja wg ‘głównej bariery’ — wiedza, wykonanie, dyscyplina, narzędzia",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Definiuje segmenty wg dominującej bariery i reframuje ofertę, żeby ją rozwiązać.",
    prompt: `Uzupełnij:
- Oferta:
- Typowe bariery:
- Kanał:

Zadanie:
1) Zdefiniuj 4 segmenty wg bariery.
2) Dla każdego segmentu:
   - diagnoza (jak to wygląda)
   - rozwiązanie (jak to ogarniasz)
   - główny komunikat
   - CTA
3) Napisz 5 hooków na segment.`,
    thumbnail: "",
  },

  {
    id: "mseg-036",
    title:
      "Zaawansowana segmentacja (B2B) — konta docelowe (ABM lite) z hipotezami per konto",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Lekki ABM: definiuje konta, hipotezy bólu, komunikaty i spersonalizowane sekwencje.",
    prompt: `Uzupełnij:
- Usługa B2B:
- Lista 10–30 kont docelowych (nazwy):
- Rola docelowa:
- KPI:
- Kanały (email, LinkedIn):

Zadanie:
1) Dla każdego konta (lub typu konta) napisz hipotezy:
   - 2 prawdopodobne bóle
   - 1 trigger (rekrutacja, funding, ekspansja)
   - propozycja wartości w 1 zdaniu
2) Stwórz 3 sekwencje:
   - cold email (4 kroki)
   - LinkedIn DM (4 kroki)
   - follow-up (2 kroki)
3) Zdefiniuj jak mierzyć sukces (replies, meetings, pipeline).`,
    thumbnail: "",
  },
  {
    id: "mseg-037",
    title:
      "Segmentacja typu ‘persony’ — 5 użytecznych buyer person (bez waty) + copy",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Tworzy 5 person możliwych do użycia: realny język, motywatory, obiekcje i komunikaty.",
    prompt: `Uzupełnij:
- Oferta:
- Nisza:
- Typy obecnych klientów (jeśli są):

Zadanie:
1) Stwórz 5 buyer person z:
   - imieniem avatara
   - kontekstem i celem
   - głównym bólem
   - obiekcjami
   - co ich przekonuje
   - cytatami (jak mówią)
2) Dla każdej persony:
   - 1 headline
   - 3 bullets
   - 1 CTA
3) Zakończ mapą “content per persona” (po 5 pomysłów na personę).`,
    thumbnail: "",
  },
  {
    id: "mseg-038",
    title:
      "Segmentacja wg ‘poziomu potrzebnego wsparcia’ — self-serve vs z prowadzeniem vs DFY",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg potrzeby wsparcia i dopasowuje doświadczenie, onboarding oraz obietnicę.",
    prompt: `Uzupełnij:
- Oferta:
- Zdolność supportu (godz./tydzień):
- Typy wsparcia (chat, call, społeczność):
- Kanał:

Zadanie:
1) Zdefiniuj 3 segmenty wg wymaganego wsparcia.
2) Dla każdego segmentu:
   - ryzyka, jeśli sprzedasz niewłaściwy plan
   - realistyczna obietnica
   - idealny onboarding
   - CTA
3) Napisz copy do pricingu (3 plany) spójne z tymi segmentami.`,
    thumbnail: "",
  },
  {
    id: "mseg-039",
    title:
      "Segmentacja wg etapu adopcji (innovators → early majority) — język i dowód",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Dopasowuje copy wg adopcji: innowatorzy chcą nowości, większość chce pewności.",
    prompt: `Uzupełnij:
- Oferta:
- Kategoria:
- Dowody:
- Kanał:

Zadanie:
1) Zdefiniuj 4 segmenty adopcji.
2) Dla każdego segmentu:
   - co jest ważne
   - jakiego dowodu potrzebują
   - copy (headline + bullets + CTA)
3) Zarekomenduj, na który segment postawić, biorąc pod uwagę ticket i markę.`,
    thumbnail: "",
  },
  {
    id: "mseg-040",
    title:
      "Segmentacja wg urządzenia/doświadczenia — mobile-first vs desktop, tarcia i CTA",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg zachowań i tarć zależnych od urządzenia, dopasowuje funnel i komunikaty.",
    prompt: `Uzupełnij:
- Kanały:
- % mobile vs desktop (jeśli masz):
- Oferta:
- Aktualne tarcia:

Zadanie:
1) Zdefiniuj 2–3 segmenty wg urządzenia/doświadczenia:
   - szybki scroll
   - głębokie czytanie
2) Dla każdego segmentu:
   - idealny asset (krótkie wideo, checklista, longform)
   - idealne CTA
   - rekomendowane zmiany na stronie
3) Stwórz 2 reklamy i 2 wersje hero copy na landing dla segmentu.`,
    thumbnail: "",
  },

  {
    id: "mseg-041",
    title:
      "Segmentacja dla WhatsApp/DM — minimalne etykiety i drzewko rozmowy",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Definiuje minimalny zestaw etykiet i flow rozmowy do segmentowania w czasie rzeczywistym.",
    prompt: `Uzupełnij:
- Oferta:
- 3 pytania kwalifikacyjne:
- Kanał (WhatsApp/IG DM):
- CTA:

Zadanie:
1) Zdefiniuj 8 minimalnych etykiet (max) do segmentacji:
   - intencja
   - budżet
   - pilność
   - doświadczenie
2) Zaprojektuj drzewko rozmowy z trasami A/B/C.
3) Napisz dokładne wiadomości:
   - jak pytasz
   - jak odpowiadasz
   - jak zmieniasz segment
4) Zakończ dziennym scoreboardem dla kanału.`,
    thumbnail: "",
  },
  {
    id: "mseg-042",
    title:
      "Segmentacja wg ‘głównego tarcia’ — wiarygodność, jasność, złożoność, logistyka",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg typu tarcia i tworzy komunikaty/asset’y, które je usuwają.",
    prompt: `Uzupełnij:
- Oferta:
- Typowe tarcia:
- Kanały:

Zadanie:
1) Zdefiniuj 4 segmenty wg tarcia.
2) Dla każdego segmentu:
   - idealny asset (case, FAQ, demo, gwarancja, porównanie)
   - copy: 1 wiadomość i 1 headline
   - CTA
3) Plan 14 dni na redukcję tarcia wg priorytetu.`,
    thumbnail: "",
  },
  {
    id: "mseg-043",
    title:
      "Segmentacja wg ‘typu decyzji’ — impulsywna vs konsultacyjna vs komitet",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Definiuje segmenty wg sposobu podejmowania decyzji: szybko, przez research, albo wieloosobowo.",
    prompt: `Uzupełnij:
- Oferta:
- Ticket:
- Kto decyduje:
- Kanał:

Zadanie:
1) Zdefiniuj 3 segmenty wg typu decyzji.
2) Dla każdego:
   - najlepsze assety (VSL, PDF, demo, call)
   - komunikaty i proof
   - CTA
3) Stwórz krótką sekwencję na segment (3 wiadomości).`,
    thumbnail: "",
  },
  {
    id: "mseg-044",
    title:
      "Segmentacja remarketingu — okna intencji i rekomendowana częstotliwość",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje remarketing wg intencji (VC/ATC/IC) i definiuje komunikaty oraz limity.",
    prompt: `Uzupełnij:
- Strony/zdarzenia:
- Okna (1–3, 4–7, 8–14, 15–30):
- Oferta:
- Kreacje:

Zadanie:
1) Zdefiniuj segmenty remarketingu wg zdarzenia i okna.
2) Dla każdego segmentu:
   - cel
   - główny komunikat
   - rekomendowana kreacja
   - KPI (CTR/CVR/CPA)
   - maks. częstotliwość
3) Zdefiniuj reguły zmęczenia i tygodniową rotację.`,
    thumbnail: "",
  },
  {
    id: "mseg-045",
    title:
      "Segmentacja wg ‘obiektu pragnienia’ — przyszła tożsamość (status, wolność, kontrola, prostota)",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje wg motywacji emocjonalnej i tożsamości, by zwiększyć rezonans copy.",
    prompt: `Uzupełnij:
- Oferta:
- Emocje/motywacje odbiorców:
- Kanały:

Zadanie:
1) Zdefiniuj 5 motywacji (status, wolność, bezpieczeństwo, prostota, przynależność).
2) Dla każdej motywacji:
   - główny komunikat
   - idealny proof
   - CTA
3) Napisz 3 hooki i 1 akapit sprzedażowy na motywację.`,
    thumbnail: "",
  },

  {
    id: "mseg-046",
    title:
      "Segmentacja i personalizacja landing page’a — dynamiczne bloki per segment",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Projektuje landing z wymiennymi blokami wg segmentu (vertical, ból, rola).",
    prompt: `Uzupełnij:
- Oferta:
- Segmenty (3–5):
- Dostępne bloki (hero, case, bullets, FAQ):
- Narzędzie (jeśli jest):

Zadanie:
1) Zdefiniuj 3–5 segmentów, które warto personalizować.
2) Dla każdego segmentu napisz:
   - hero (headline + sub)
   - 5 bullets
   - 3 FAQ
   - 1 idealny social proof
3) Zdefiniuj reguły routingu (jak wykrywasz segment: UTM, formularz, quiz).
4) Zakończ checklistą spójności (komunikat-CTA).`,
    thumbnail: "",
  },
  {
    id: "mseg-047",
    title:
      "Segmentacja przez quiz — zaprojektuj quiz do klasyfikacji i rekomendacji ścieżki",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Tworzy kompletny quiz: pytania, scoring, segmenty końcowe i rekomendacje per segment.",
    prompt: `Uzupełnij:
- Oferta:
- 3–5 docelowych segmentów końcowych:
- Zmienne do pomiaru (pilność, doświadczenie, budżet itd.):

Zadanie:
1) Zaprojektuj quiz z 8–12 pytaniami (z opcjami).
2) Zdefiniuj scoring (punkty) i reguły przypisania do segmentu.
3) Dla każdego segmentu:
   - rezultat (dłuższy tekst)
   - 3 rekomendacje
   - CTA
4) Napisz copy strony quizu (hero + bullets) i maila z wynikami.`,
    thumbnail: "",
  },
  {
    id: "mseg-048",
    title:
      "Segmentacja wg kohort — porównaj zachowania wg tygodnia/miesiąca pozyskania",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Segmentuje po kohorcie czasowej, by wykrywać zmiany jakości i optymalizować źródła.",
    prompt: `Uzupełnij:
- Okres analizy:
- Źródła:
- Dostępne metryki:
- Oferta:

Zadanie:
1) Zdefiniuj kohorty tygodniowe (lub miesięczne).
2) Dla każdej kohorty zdefiniuj KPI do porównania:
   - CVR
   - CAC
   - LTV
   - rate odpowiedzi
3) Zaproponuj hipotezy, jeśli kohorta działa inaczej:
   - zmiana komunikatu
   - zmiana kanału
   - zmiana oferty
4) Zdefiniuj rekomendowane działania (co testować) per kohorta.`,
    thumbnail: "",
  },
  {
    id: "mseg-049",
    title:
      "Finalna segmentacja gotowa do wdrożenia — 12 segmentów z komunikatami, CTA i assetami",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Dostarcza paczkę segmentów gotowych do użycia: copy, CTA i plan aktywacji.",
    prompt: `Uzupełnij:
- Oferta:
- Nisza:
- Kanały:
- Dostępne aktywa:
- Ograniczenia:

Zadanie:
Stwórz 12 segmentów do egzekucji i dla każdego napisz:
- nazwa
- dokładne kryterium (jak wykryć)
- główny komunikat (1 zdanie)
- 2 dodatkowe kąty
- idealna oferta/CTA
- rekomendowany asset (lead magnet, demo, case, checklista)
- pierwsza wiadomość (copy gotowe)
Zakończ priorytetami (top 3) i planem 14 dni (testy).`,
    thumbnail: "",
  },
  {
    id: "mseg-050",
    title:
      "System segmentacji (SOP) — etykiety, reguły, źródła, audyt i utrzymanie",
    area: "Marketing i sprzedaż",
    category: "Segmentacja",
    summary:
      "Tworzy pełny SOP utrzymania segmentacji w zdrowiu i użyteczności dla zespołu.",
    prompt: `Uzupełnij:
- Narzędzia (CRM/Email/WhatsApp):
- Kanały:
- Oferta:
- Zespół (role):

Zadanie:
Napisz SOP, który zawiera:
1) Zasady: czym jest poprawny segment (wykonywalny, mierzalny, użyteczny).
2) Taksonomię etykiet (max 30) i konwencje nazewnictwa.
3) Reguły przypisywania (wg źródła, zachowania, manualnie).
4) Tygodniowy audyt: co sprawdzać i jak wykrywać śmieciowe etykiety.
5) Miesięczne utrzymanie: czyszczenie, mergowanie, wygaszanie segmentów.
6) Checklistę wdrożenia (UTM, eventy, formularze, zgody).
Format: nagłówki + bulletsy + przykłady etykiet.`,
    thumbnail: "",
  },
];
