// src/lib/prompts/text/marketing-whatsapp-email.js

export const textPromptsMarketingWhatsappEmail = [
  {
    id: "mwe-001",
    title:
      "Sekwencja WhatsApp (D0–D3) dla zimnych leadów: rozgrzać bez sprzedaży + mikro-zobowiązania",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Kompletna sekwencja WhatsApp, która zamienia zimne leady w realne rozmowy bez presji.",
    prompt: `Kontekst:
- Nisza/branża: [ ]
- Oferta: [ ]
- Lead magnet lub źródło leada: [reklama / DM / webinar / polecenie / treść]
- Poziom świadomości leada: [nie wie / świadomy problemu / świadomy rozwiązania / świadomy produktu]
- Ton marki: [bliski/poważny/zabawny/premium]
- Kraj/slang: [ ]
- Typowa obiekcja: [cena/czas/zaufanie/„nie potrzebuję tego”]

Stwórz sekwencję WhatsApp na 4 dni (D0, D1, D2, D3) z:
1) Celem na każdy dzień (mierzalny mikrocel).
2) Wiadomościami (2–4 dziennie) o realistycznej długości:
   - otwarcie i zgoda („pasuje Ci teraz?”)
   - krótkie pytanie diagnostyczne
   - mini insight lub mikro-wartość (bez linku na początku)
   - minimalne CTA (odpowiedź 1 słowem lub liczbą)
3) Wariantami stylu:
   - ton ultra bliski
   - ton profesjonalny
4) Zasadami anti-spam:
   - bez linków w 2 pierwszych wiadomościach
   - nie więcej niż 2 pytania z rzędu
   - używaj „break lines” dla lepszej czytelności
5) Gotowymi odpowiedziami (makra) na 8 scenariuszy:
   - „ile to kosztuje?”
   - „nie mam czasu”
   - „wyślij mi informacje”
   - „później”
   - „nie interesuje mnie to”
   - wyświetlone/brak odpowiedzi
   - „kim jesteś?”
   - „interesuje mnie — co dalej?”
6) Zakończeniem dnia 3 z miękkim przejściem do rozmowy/checkoutu TYLKO jeśli jest zainteresowanie.`,
    thumbnail: "",
  },
  {
    id: "mwe-002",
    title:
      "Sekwencja WhatsApp do domknięcia (6 wiadomości) dla ciepłego leada: diagnoza, propozycja i czyste zamknięcie",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Skrypt WhatsApp do domykania sprzedaży: kluczowe pytania, propozycja i CTA bez niezręczności.",
    prompt: `Dane:
- Produkt/usługa: [ ]
- Cena i opcje: [ ]
- Gwarancja: [ ]
- Idealny klient: [ ]
- Obiecywany rezultat (realistyczny): [ ]
- Czas wdrożenia: [ ]
- Obiekcja #1: [ ]
- Obiekcja #2: [ ]

Napisz skrypt WhatsApp z 6 wiadomości (każda ma 1 cel):
1) Otwarcie + potwierdzenie kontekstu („żebym dobrze zrozumiał/a…”)
2) Pytania diagnostyczne (w jednej wiadomości, format numerowany)
3) Odbicie (mirror) tego, co powiedział/a + „jeśli dobrze rozumiem…”
4) Propozycja: 2 opcje (A/B), w bulletach, bez długiego tekstu
5) Uprzedzenie obiekcji (wybierz najczęstszą)
6) Domknięcie z jasnym CTA + alternatywą (jeśli nie teraz: termin / lista oczekujących)

Uwzględnij:
- 3 warianty wiadomości #4 (propozycja) wg tonu: bliski, premium, bezpośredni
- 5 różnych domknięć (miękkie, średnie, mocne, konsultacyjne, „ostatnie pytanie”)
- 1 wersję dla sprzedaży B2B i 1 dla B2C.`,
    thumbnail: "",
  },
  {
    id: "mwe-003",
    title:
      "Email powitalny (po lead magnecie): autorytet + natychmiastowa wartość + ‘reply trigger’",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Email #1 w onboardingu: dostarczenie, oczekiwania, wiarygodność i trigger do odpowiedzi.",
    prompt: `Kontekst:
- Lead magnet: [ ]
- Główna obietnica: [ ]
- Profil czytelnika: [ ]
- Oferta docelowa: [ ]
- Ton: [ ]

Napisz email powitalny, który zawiera:
1) 8 tematów (4 ciekawość, 2 bezpośrednie, 2 ultra krótkie).
2) Pierwszy akapit z „pattern interrupt” (1–2 linie).
3) Dostarczenie zasobu (użyj placeholderów jeśli są linki).
4) Mini-historię autorytetu (5–7 linii) bez przechwalania.
5) 3 praktyczne wnioski związane z zasobem (bullets z przykładami).
6) „Reply trigger”: 1 pytanie zwiększające odpowiedzi (z 3 opcjami A/B/C).
7) Miękkie CTA do następnego kroku (czytać / obejrzeć / odpisać / umówić), bez twardej sprzedaży.
8) P.S. z przypomnieniem i emocjonalnym wzmocnieniem.

Stwórz 2 wersje:
- Krótka (<= 180 słów)
- Długa (450–650 słów).`,
    thumbnail: "",
  },
  {
    id: "mwe-004",
    title:
      "Sekwencja Email (5 maili) nurturing: problem → insight → case → miękka oferta → zamknięcie",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Kompletna sekwencja, która zamienia leady w kupujących bez ‘spalenia’ odbiorcy.",
    prompt: `Dane:
- Nisza: [ ]
- Główny ból: [ ]
- Główne pragnienie: [ ]
- Unikalny mechanizm (Twoje podejście): [ ]
- Case lub przykład: [jeśli nie ma, użyj hipotetycznego bez udawania, że jest prawdziwy]
- Oferta: [ ]
- Finalne CTA: [umów/checkout/DM]

Stwórz sekwencję 5 maili:
Email 1: „Najczęstszy błąd” (edukacja + reframe)
Email 2: „Niewygodna prawda” (mit vs rzeczywistość)
Email 3: „Mini case / historia” (przed-po z detalami)
Email 4: „Jak wygląda proces” (framework krok po kroku)
Email 5: „Zaproszenie” (miękka oferta + etyczna pilność)

Dla każdego maila podaj:
- 10 tematów (mix stylów)
- preheader
- pełną treść (350–700 słów)
- CTA główne + CTA alternatywne (dla nieśmiałych)
- 2 różne P.S. (1 logiczne, 1 emocjonalne)

Extra:
- dodaj 1 wersję „tryb WhatsApp” (streszczenie w 3 wiadomościach) dla każdego maila.`,
    thumbnail: "",
  },
  {
    id: "mwe-005",
    title:
      "WhatsApp: reaktywacja leadów ‘wyświetlone i bez odpowiedzi’ (7 dni) z klasą",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Sekwencja do ożywienia martwego czatu bez nacisku: lekki humor, wartość i godne wyjście.",
    prompt: `Kontekst:
- O czym rozmawialiście wcześniej: [ ]
- Oferta: [ ]
- Prawdopodobna obiekcja: [ ]
- Ton: [bliski/premium]

Stwórz sekwencję reaktywacji na WhatsApp na 7 dni (1 wiadomość dziennie) z:
1) Krótkimi wiadomościami (1–3 linie), naturalnymi, bez presji.
2) Strukturą dnia:
   - Dzień 1: check-in z pozwoleniem
   - Dzień 2: mikro-wartość (tip)
   - Dzień 3: pytanie o priorytet (A/B)
   - Dzień 4: mini social proof
   - Dzień 5: oferta pomocy (diagnoza)
   - Dzień 6: eleganckie zamknięcie („zostawiamy temat?”)
   - Dzień 7: ostatnia wiadomość z otwartymi drzwiami
3) 3 warianty na każdy dzień (neutralny, lekki humor, premium).
4) Gotowe odpowiedzi jeśli:
   - odpowie „tak”
   - odpowie „nie”
   - odpowie „cena?”
   - nie odpowie`,
    thumbnail: "",
  },
  {
    id: "mwe-006",
    title:
      "Email na „wyślij info” (one-shot): tekstowa broszura, która konwertuje + jasne CTA",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Jeden email, gdy proszą o informacje: oferta, korzyści, proces, FAQ i domknięcie.",
    prompt: `Dane:
- Oferta: [ ]
- Dla kogo NIE jest: [ ]
- Główne korzyści: [ ]
- Proces (kroki): [ ]
- Cena: [ ]
- Gwarancja/warunki: [ ]
- Typowe obiekcje: [ ]

Napisz email „wyślij info”, który zawiera:
1) 6 tematów.
2) Otwarcie: „Wysyłam pełne info tutaj…”
3) Co to jest + dla kogo jest (i dla kogo nie).
4) Korzyści (6 bulletów) z konkretnymi przykładami.
5) Proces w 5 krokach (co się dzieje, co dostarczasz, co dostajesz).
6) Social proof (2 mini przykłady: jeśli nie ma, napisz jako „co zwykle się dzieje” bez udawania, że to realne).
7) FAQ (8 pytań) w tym cena, czas, wsparcie, rezultaty.
8) CTA główne + CTA alternatywne.
9) Zakończenie: „jeśli odpiszesz X, polecę idealną opcję”.

Dodaj wersję krótką (<= 200 słów) bez utraty sensu.`,
    thumbnail: "",
  },
  {
    id: "mwe-007",
    title:
      "WhatsApp: obiekcja „za drogo” (bez obniżania ceny): 9 odpowiedzi na różne kąty",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Gotowce na cenę: wartość, ROI, ryzyko, porównanie, opcje i domknięcie.",
    prompt: `Dane:
- Cena: [ ]
- Tańsze alternatywy (konkurencja/zrób to sam): [ ]
- Jaki rezultat dajesz: [ ]
- Czas do rezultatu: [ ]
- Gwarancja: [ ]
- Typ klienta: [B2B/B2C]

Wygeneruj 9 odpowiedzi WhatsApp na „za drogo” (2–4 linie), używając kątów:
1) ROI z przykładem liczbowym
2) Porównanie vs koszt nie-zrobienia
3) Rozpiska, co zawiera (percepcja wartości)
4) Proces i ekspertiza (dlaczego to nie commodity)
5) Gwarancja / zmniejszenie ryzyka
6) Opcje płatności / plan stopniowany
7) Priorytety: „jeśli Twoim priorytetem dziś jest X…”
8) Pytanie diagnostyczne z reframem („co dokładnie chcesz osiągnąć?”)
9) Konsultacyjne domknięcie (decyzja w 10 sekund)

Uwzględnij:
- 3 odpowiedzi dla B2B
- 3 odpowiedzi dla B2C
- 3 odpowiedzi w tonie premium.`,
    thumbnail: "",
  },
  {
    id: "mwe-008",
    title:
      "Email odzyskiwania koszyka (3 maile): empatia + obiekcja + dowód + etyczna pilność",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Sekwencja do odzyskania utraconych sprzedaży bez agresji.",
    prompt: `Dane:
- Produkt: [ ]
- Cena: [ ]
- Główna korzyść: [ ]
- Dominująca obiekcja: [ ]
- Realna pilność: [zamknięcie / miejsca / bonus]
- Zachęta (jeśli jest): [ ]

Stwórz 3 maile:
Email 1 (1–2h): „Zaciąłeś/-aś się?” (pomoc + wsparcie)
Email 2 (24h): obiekcja + social proof
Email 3 (48–72h): ostatnie przypomnienie + etyczna pilność

Dla każdego maila:
- 8 tematów + preheader
- pełna treść (250–500 słów)
- CTA główne
- 2 różne P.S.

Dodatkowo stwórz 1 wersję WhatsApp (2 wiadomości) na każdy mail.`,
    thumbnail: "",
  },
  {
    id: "mwe-009",
    title:
      "WhatsApp: sekwencja po zakupie (D0–D7) — mniej zwrotów, większa aktywacja",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Onboarding na WhatsApp: oczekiwania, pierwsza wygrana, nawyki i wsparcie.",
    prompt: `Produkt: [ ]
Pierwsza wygrana (quick win): [ ]
Typowe powody zwrotu: [ ]
Wsparcie: [kanał]

Stwórz sekwencję D0–D7 (1 wiadomość dziennie):
- D0: powitanie + czego się spodziewać + pierwszy krok
- D1: prowadzone quick win
- D2: typowy błąd i jak go uniknąć
- D3: checklista postępu (odpowiedz 1–3)
- D4: mini historia/case + lekcja
- D5: nawyk (sugerowana rutyna)
- D6: oferta pomocy (diagnoza)
- D7: miękka prośba o polecenie/opinię

Uwzględnij:
- 2 warianty dziennie (bliski i premium)
- 1 makro odpowiedzi, gdy użytkownik jest zagubiony
- 1 makro, gdy użytkownik idzie bardzo szybko`,
    thumbnail: "",
  },
  {
    id: "mwe-010",
    title:
      "Email launch „open cart” (dzień 1): historia + mechanizm + jasna oferta + CTA",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Główny email sprzedażowy: narracja + klarowność (bez lania wody).",
    prompt: `Dane:
- Oferta: [ ]
- Cena: [ ]
- Bonus: [ ]
- Data zamknięcia: [ ]
- Odbiorcy: [ ]
- Wielki ból: [ ]
- Wielkie pragnienie: [ ]
- Unikalny mechanizm: [ ]

Napisz email „open cart” (600–900 słów) z:
1) 12 tematami (mix: ciekawość, bezpośrednio, korzyść, historia).
2) Hookiem z realistyczną historią (7–10 linii).
3) Reframem: dlaczego dotychczasowe próby nie działają.
4) Mechanizmem z jasną analogią.
5) Co zawiera (bullets: moduły/dostarczane rzeczy).
6) Dla kogo jest / dla kogo nie jest.
7) Bonus + dlaczego istnieje.
8) Mocnym i jasnym CTA (placeholder link).
9) FAQ (6) pod obiekcje.
10) Emocjonalnym zamknięciem + P.S. z etyczną pilnością.`,
    thumbnail: "",
  },

  {
    id: "mwe-011",
    title:
      "WhatsApp: mini-launch (3 dni) dla małej społeczności: wartość → case → oferta",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Launch na WhatsApp: 3 dni, 2 wiadomości dziennie, bez wrażenia sprzedawcy.",
    prompt: `Dane:
- Oferta: [ ]
- Cena: [ ]
- Obiekcja #1: [ ]
- Case lub historia: [ ]
- Ton: [ ]

Stwórz mini-launch na WhatsApp:
Dzień 1: 2 wiadomości wartości (insight + tip do wdrożenia)
Dzień 2: 2 wiadomości (historia/case + lekcja)
Dzień 3: 2 wiadomości (oferta + CTA)

Każda wiadomość:
- 2–5 linii
- 1 główna idea
- 1 pytanie lub mikro-CTA

Uwzględnij:
- 3 wariacje na dzień (blisko, profesjonalnie, lekki humor)
- Gotowe odpowiedzi, jeśli pytają o cenę, gwarancję i „nie mam czasu”.`,
    thumbnail: "",
  },
  {
    id: "mwe-012",
    title:
      "Email „Last Call” (zamknięcie koszyka): napięcie + klarowność + recap + CTA (bez manipulacji)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Email zamykający: podsumowanie, obiekcje, realna pilność i finalne CTA.",
    prompt: `Dane:
- Oferta: [ ]
- Co przepada przy zamknięciu: [bonus/miejsca/cena]
- Główne obiekcje: [ ]
- Ton: [bezpośredni/premium]

Napisz email zamknięcia (450–750 słów) z:
1) 10 tematami (w tym 2 ultra krótkie).
2) Otwarciem „ostatnie przypomnienie” bez agresji.
3) Recap:
   - co to jest
   - dla kogo
   - transformacja
4) 3 obiekcje z odpowiedziami na przykładach.
5) Finalnym CTA (placeholder link) + alternatywą (odpisz „PYTANIE”).
6) Podwójnym P.S.:
   - P.S. logiczny
   - P.S. emocjonalny`,
    thumbnail: "",
  },
  {
    id: "mwe-013",
    title:
      "WhatsApp: skrypt kwalifikacji leada (lead qualification) w 7 pytaniach + scoring",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Kwalifikuj leady na WhatsApp bez przesłuchania: krótkie pytania + scoring i następny krok.",
    prompt: `Oferta: [ ]
Idealny klient: [ ]
Cena: [ ]
Rezultat: [ ]

Stwórz skrypt WhatsApp z:
1) Intro z pozwoleniem (1–2 linie).
2) 7 pytań (1 na wiadomość), aby zweryfikować:
   - pilność
   - budżet
   - decyzyjność
   - realny problem
   - zdolność wdrożenia
3) System scoringu (0–20) z jasnymi zasadami.
4) Wynik wg score:
   - 0–7: nurturing
   - 8–14: umówić rozmowę
   - 15–20: domknąć
5) Wiadomości przejścia dla każdego wyniku (po 3 warianty).`,
    thumbnail: "",
  },
  {
    id: "mwe-014",
    title:
      "Email „case study” sprzedażowy: struktura narracyjna z danymi, porażkami i wnioskami",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Case study, które sprzedaje: historia, metryki, przeszkody, metoda i CTA.",
    prompt: `Case:
- Typ klienta: [ ]
- Sytuacja startowa: [ ]
- Przeszkoda: [ ]
- Proces: [ ]
- Rezultat: [metryki]
- Oferta, do której prowadzi: [ ]

Napisz email case study (650–1 000 słów) z:
1) 10 tematami.
2) Kontekstem i tym, co próbowano (realistyczne porażki).
3) Diagnozą problemu źródłowego.
4) Procesem w 5 etapach (ze szczegółami).
5) Rezultatem z metrykami (i jakościowo).
6) Lekcjami (5 bulletów).
7) Miękkim CTA do oferty + alternatywa: odpowiedz „CASE”.

Dodaj wersję krótką (300 słów) dla zimnej publiczności.`,
    thumbnail: "",
  },
  {
    id: "mwe-015",
    title:
      "WhatsApp: skrypt sprzedaży przez wiadomości głosowe (3 audio): struktura i dokładny tekst",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Struktura 3 krótkich głosówek, które domykają bez agresji.",
    prompt: `Oferta: [ ]
Ton: [ ]
Długość audio: [20–35s]
Główna obiekcja: [ ]

Stwórz:
1) Skrypt Audio 1 (kontekst + diagnoza) z dokładnym tekstem.
2) Skrypt Audio 2 (rozwiązanie + dlaczego działa) z analogią.
3) Skrypt Audio 3 (propozycja + CTA) z konsultacyjnym domknięciem.

Uwzględnij:
- alternatywną wersję tekstową (gdy ktoś nie używa audio)
- 5 „zdań-mostów” do odpowiedzi bez improwizacji
- 3 różne domknięcia (miękkie, bezpośrednie, premium).`,
    thumbnail: "",
  },

  {
    id: "mwe-016",
    title:
      "Email segmentowany wg obiekcji (czas / pieniądze / zaufanie): 3 różne maile, ta sama oferta",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Ta sama oferta, 3 kąty: dominująca obiekcja w segmencie.",
    prompt: `Oferta: [ ]
Cena: [ ]
Gwarancja: [ ]
Dowody: [testimoniale/portfolio]
Ton: [ ]

Stwórz 3 maile (400–650 słów każdy):
A) Segment CZAS: „jak to zrobić bez czasu”
B) Segment PIENIĄDZE: „jak odzyskać inwestycję / uniknąć ukrytego kosztu”
C) Segment ZAUFANIE: „dlaczego to działa + dowód + transparentność”

Dla każdego maila:
- 10 tematów + preheader
- inny hook
- 5 bulletów korzyści dopasowanych
- CTA główne + CTA alternatywne
- 2 różne P.S.`,
    thumbnail: "",
  },
  {
    id: "mwe-017",
    title:
      "WhatsApp: skrypt proszenia o polecenia (bez wstydu) + gotowy tekst do przekazania dalej",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Prośba o rekomendację po dobrym wyniku + gotowy copy do przekazania.",
    prompt: `Rezultat osiągnięty przez klienta: [ ]
Kogo chcesz jako poleconych: [profil]
Incentive: [jeśli dotyczy]
Ton: [ ]

Stwórz:
1) 3 wiadomości WhatsApp z prośbą o polecenie (2–5 linii).
2) Tekst do przekazania dalej (gotowe copy) w 3 tonach:
   - casual
   - profesjonalny
   - premium
3) Odpowiedzi na:
   - „tak, mam kogoś”
   - „nie znam nikogo”
   - „później”
4) Wariant z prośbą o opinię/testimonial (miękko).`,
    thumbnail: "",
  },
  {
    id: "mwe-018",
    title:
      "Email upsell po zakupie: nawiązanie do aktualnego postępu + next level + oferta limitowana",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Upsell, który nie irytuje: oparty o postęp i kolejny etap, z etyczną pilnością.",
    prompt: `Produkt startowy: [ ]
Upsell: [ ]
Cena upsellu: [ ]
Typowy postęp po 7 dniach: [ ]
Realna pilność: [bonus/data]

Napisz email (450–750 słów) z:
1) 10 tematami.
2) Gratulacją postępu (konkretną).
3) Następnym wąskim gardłem, które zwykle się pojawia.
4) Upsellem jako rozwiązaniem + dlaczego teraz.
5) Co zawiera (bullets) + dla kogo NIE jest.
6) Oferta/bonus z realną pilnością.
7) CTA + alternatywa „odpisz UPSELL”.
Dodaj wersję krótką (<= 200 słów).`,
    thumbnail: "",
  },
  {
    id: "mwe-019",
    title:
      "WhatsApp: follow-up po wycenie (B2B) — 5 wiadomości z wartością + konsultacyjne domknięcie",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Follow-up B2B po wysłaniu oferty: wartość, klarowność i kolejny krok.",
    prompt: `Usługa: [ ]
Cena: [ ]
Decydent: [rola]
Typowy czas decyzji: [ ]
Częsta obiekcja: [ ]

Stwórz 5 wiadomości (co 2–3 dni):
1) Krótkie przypomnienie + jedno pytanie
2) Doprecyzowanie ROI (mini kalkulacja)
3) Podobny case (mini historia)
4) Wdrożenie: jak to upraszczamy
5) Zamknięcie: „domykamy czy zostawiamy temat?” z klasą

Uwzględnij:
- 2 warianty na wiadomość (blisko/profesjonalnie)
- 1 wersję mailową (jeśli klient woli email).`,
    thumbnail: "",
  },
  {
    id: "mwe-020",
    title:
      "Email z ofertą handlową (B2B): cele, zakres, deliverables, timeline, inwestycja i ryzyka",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Propozycja w mailu: cele, zakres, deliverables, timeline, inwestycja i następne kroki.",
    prompt: `Klient (branża): [ ]
Cel (KPI): [ ]
Zakres: [ ]
Timeline: [ ]
Inwestycja: [ ]
Ryzyka/zależności po stronie klienta: [ ]

Napisz email-propozycję B2B z:
1) 6 tematami
2) Podsumowaniem wykonawczym (max 8 bulletów)
3) Celami mierzalnymi (3–5)
4) Zakresem i deliverables (szczegółowa lista)
5) Planem tygodniowym (timeline)
6) Rolami i odpowiedzialnością (My vs Klient)
7) Inwestycją + warunkami (jasno)
8) Ryzykami i mitigacją (3–6)
9) Następnym krokiem: umówić call / akceptacja przez reply

Dodaj blok końcowy „TL;DR” (5 bulletów).`,
    thumbnail: "",
  },

  {
    id: "mwe-021",
    title:
      "WhatsApp: zamiana komentarzy/DM w lead: skrypt przejścia na WhatsApp bez tarcia",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Z DM (IG/TikTok) na WhatsApp: zgoda, kontekst, wartość i przejście.",
    prompt: `Platforma źródłowa: [IG/TikTok]
Temat komentarza: [ ]
Oferta: [ ]
Ton: [ ]

Stwórz skrypt 5 wiadomości, aby:
1) odpowiedzieć w DM wartością i pytaniem
2) poprosić o zgodę na wysłanie szczegółów
3) zaproponować „wyślę Ci to na WhatsApp, żeby nie zginęło”
4) poprosić o numer naturalnym zdaniem
5) pierwsza wiadomość na WhatsApp (rozgrzanie + pytanie)

Dodaj warianty:
- osoba nieśmiała
- osoba agresywna
- osoba tylko ciekawska`,
    thumbnail: "",
  },
  {
    id: "mwe-022",
    title:
      "Email „jedno pytanie”, które generuje odpowiedzi: badanie rynku bez wrażenia ankiety",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Krótki email, żeby zrozumieć bóle i zamienić je w rozmowę 1:1.",
    prompt: `Nisza: [ ]
Temat: [ ]
Ton: [ ]

Napisz email (<= 180 słów) z:
1) 8 tematami
2) Krótkim kontekstem: czemu pytasz teraz
3) 1 mocnym pytaniem (nie podwójnym), które ujawni realny ból
4) 3 opcjami odpowiedzi A/B/C dla łatwiejszego reply
5) Ludzkim zakończeniem

Dodaj 2 warianty: bliski i profesjonalny.`,
    thumbnail: "",
  },
  {
    id: "mwe-023",
    title:
      "WhatsApp: skrypt ‘darmowej diagnozy’ (10 min), który filtruje ciekawskich i przyciąga poważnych",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Oferujesz diagnozę bez rozdawania konsultingu: pytania, limity i CTA do kalendarza/checkoutu.",
    prompt: `Oferta: [ ]
Co obejmuje diagnoza: [ ]
Czego NIE obejmuje: [ ]
Ton: [ ]

Stwórz skrypt WhatsApp z:
1) Wiadomością zaproszenia (3 warianty).
2) 5 szybkimi pytaniami filtrującymi (w 5 wiadomościach).
3) Odpowiedziami wg profilu:
   - ciekawski bez budżetu
   - poważnie zainteresowany
   - bardzo pilne
4) Zakończeniem:
   - jeśli kwalifikuje → kalendarz/checkout
   - jeśli nie → darmowy zasób + eleganckie wyjście
Dodaj copy do wysłania linku do kalendarza bez brzmienia jak sprzedawca.`,
    thumbnail: "",
  },
  {
    id: "mwe-024",
    title:
      "Email ‘obiekcja czas’ dla kursów/usług: plan 20 minut dziennie + tygodniowa struktura",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Rozbija obiekcję „nie mam czasu” realnym planem i przykładami.",
    prompt: `Oferta: [ ]
Minimalny sensowny czas: [ ]
Transformacja: [ ]
Profil czytelnika: [praca, rodzina itd.]
Ton: [ ]

Napisz email (500–850 słów) z:
1) 10 tematami
2) Krótką historią kogoś bez czasu
3) Planem wdrożenia:
   - 20 min/dzień (co robić)
   - alternatywa 3 dni/tydzień
4) Jak mierzyć postęp (3 metryki)
5) Odpowiedzią na 3 pochodne obiekcje
6) Miękkim CTA + alternatywa „odpisz CZAS”.`,
    thumbnail: "",
  },
  {
    id: "mwe-025",
    title:
      "WhatsApp: sekwencja sprzedaży low-ticket (≤ 49$) bez rozmowy (8 wiadomości)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Bezpośrednie domknięcie low-ticket: dowód, korzyść, pilność i CTA do checkoutu.",
    prompt: `Produkt: [ ]
Cena: [ ]
Szybki rezultat: [ ]
Realna pilność: [bonus/stock]
Ton: [ ]

Stwórz 8 wiadomości WhatsApp:
1) Zgoda + kontekst
2) Diagnoza (1 pytanie)
3) Insight i reframe
4) Prezentacja produktu (1 akapit)
5) Korzyści w bulletach
6) Mini social proof
7) Etyczna pilność
8) CTA do linku (placeholder) + alternatywa

Dodaj:
- 3 odpowiedzi na „czy to bezpieczne?”
- 3 odpowiedzi na „a jeśli mi nie zadziała?”`,
    thumbnail: "",
  },

  {
    id: "mwe-026",
    title:
      "Email ‘anti-bullshit’: sprzedaż bez obiecywania cudów (transparentność + ograniczenia + plan)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Email budujący zaufanie: co tak, co nie, i jak to działa przy prawdziwej pracy.",
    prompt: `Oferta: [ ]
Realistyczne wyniki: [ ]
Ograniczenia: [ ]
Dla kogo nie działa: [ ]
Ton: [ ]

Napisz email (550–900 słów) z:
1) 10 tematami
2) Deklaracją szczerości (hook)
3) Czego NIE obiecujemy (lista)
4) Co SIĘ dzieje, jeśli robisz proces (z przykładami)
5) Wymagania po stronie klienta (3–7)
6) Jak wspieramy (support, społeczność itd.)
7) CTA: aplikuj / umów / kup
8) P.S. „jeśli masz wątpliwości, odpisz w 3 linijkach z kontekstem”.`,
    thumbnail: "",
  },
  {
    id: "mwe-027",
    title:
      "WhatsApp: od „interesuje mnie” do „zapłacone” (bez nacisku) — odblokowanie tarcia i domknięcie",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Gdy ktoś już powiedział „tak”, ale nie płaci: zidentyfikuj tarcie i zamknij z szacunkiem.",
    prompt: `Oferta: [ ]
Cena: [ ]
Typowe tarcie: [link/czas/wątpliwości]
Ton: [ ]

Stwórz skrypt w 5 krokach:
1) Krótki check-in
2) Pytanie o tarcie (A/B/C)
3) Rozwiązanie tarcia (3 szablony wg odpowiedzi)
4) Potwierdzenie rezultatu (mirror)
5) Finalne CTA z 2 opcjami:
   - zapłacić teraz (placeholder link)
   - umówić 10 min (jeśli się waha)

Dodaj 10 szybkich odpowiedzi na typowe obiekcje.`,
    thumbnail: "",
  },
  {
    id: "mwe-028",
    title:
      "Email „lista oczekujących”: zamień „zamknięte” w pragnienie (wartość + priorytet + powiadomienie)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Email listy oczekujących: oczekiwanie, autorytet i ludzie zaangażowani.",
    prompt: `Zamknięta oferta: [ ]
Powód zamknięcia: [miejsca/sezon]
Korzyść: [ ]
Ton: [ ]

Napisz email (400–650 słów) z:
1) 8 tematami
2) Dlaczego jest zamknięte (bez dramy)
3) Co daje lista oczekujących (3–5 bulletów)
4) Jak działa priorytet (jasna zasada)
5) Reply trigger: niech odpiszą z celem i przeszkodą
6) CTA: dołącz do listy (placeholder).`,
    thumbnail: "",
  },
  {
    id: "mwe-029",
    title:
      "WhatsApp: wiadomość z linkiem do zakupu bez tracenia momentum (kotwica wartości + potwierdzenie)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Wysyłasz link z kontekstem: wartość, jak sprawdzić dopasowanie i wsparcie jeśli utknie.",
    prompt: `Oferta: [ ]
Cena: [ ]
Link: [placeholder]
Ton: [ ]

Stwórz 6 wariantów wiadomości „tu jest link”:
- 2 ultra krótkie
- 2 z kotwicą wartości (korzyść + przypomnienie)
- 2 premium (opieka + wsparcie)

Dodaj opcjonalną ostatnią linijkę:
- „jeśli utkniesz, napisz na którym kroku i ogarniemy”.`,
    thumbnail: "",
  },
  {
    id: "mwe-030",
    title:
      "Email ‘ratunkowy’ do nie-kupujących po launchu: wartość + ankieta + minimalna oferta",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Po zamknięciu: odzyskaj ucząc się i (jeśli pasuje) daj alternatywę bez presji.",
    prompt: `Zamknięta oferta: [ ]
Alternatywa low-tier (jeśli jest): [ ]
Typowe powody braku zakupu: [ ]
Ton: [ ]

Napisz email (450–750 słów) z:
1) 10 tematami
2) Podziękowaniem + realnym zamknięciem
3) 1 dużą lekcją dla czytelnika (wartość)
4) Mini-ankietą (3 pytania, po 1 linii)
5) Opcjonalną minimalną ofertą (jeśli jest) bez presji
6) Głównym CTA: odpowiedzieć na ankietę`,
    thumbnail: "",
  },

  {
    id: "mwe-031",
    title:
      "WhatsApp: sprzedaż historią osobistą (story selling) w 6 wiadomościach (przed → przełom → odkrycie)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Story-selling na WhatsApp, który brzmi ludzko: przed, przełom, szukanie, odkrycie, wynik, zaproszenie.",
    prompt: `Temat historii: [ ]
Oferta: [ ]
Rezultat: [ ]
Ton: [ ]

Stwórz 6 wiadomości:
1) Przed (ból)
2) Przełom (moment)
3) Szukanie (nieudane próby)
4) Odkrycie (mechanizm)
5) Wynik (dowód)
6) Zaproszenie (miękkie CTA)

Każda po 2–4 linie.

Dodaj 3 wersje: bliska, profesjonalna, premium.`,
    thumbnail: "",
  },
  {
    id: "mwe-032",
    title:
      "Email „porównanie”: Twoje podejście vs alternatywa (bez ataku na konkurencję) + prowadzenie decyzji",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Eleganckie porównanie: kryteria, trade-offy i rekomendacja wg profilu.",
    prompt: `Oferta: [ ]
Alternatywy: [zrób sam/inna usługa]
Kryteria: [czas/pieniądze/wsparcie/kontrola]
Ton: [ ]

Napisz email (500–850 słów) z:
1) 10 tematami
2) Ramą decyzji: 5 kryteriów z wyjaśnieniem
3) „Jeśli jesteś X, wybierz Y” (4 profile)
4) Korzyści Twojego podejścia bez ataku na inne
5) CTA + alternatywa: odpisz „WĄTPIĘ”.`,
    thumbnail: "",
  },
  {
    id: "mwe-033",
    title:
      "WhatsApp: umawianie rozmowy (bez brzmienia jak ‘sprzedawca marzeń’) + potwierdzenie + przypomnienia + no-show",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Umawianie rozmów: pre-frame, zobowiązania, przypomnienia i obsługa no-show.",
    prompt: `Oferta: [ ]
Długość rozmowy: [15/30]
Cel rozmowy: [diagnoza/domknięcie]
Link do kalendarza: [placeholder]
Ton: [ ]

Stwórz:
1) Wiadomość zapraszającą na rozmowę (3 warianty)
2) Wiadomość potwierdzającą (co przygotować)
3) Przypomnienie 24h i 1h wcześniej (po 2 warianty)
4) Wiadomość, gdy nie przyszedł/-a (no-show) bez obwiniania
5) Wiadomość po rozmowie: domknięcie lub następny krok`,
    thumbnail: "",
  },
  {
    id: "mwe-034",
    title:
      "Email ‘obiekcja zaufanie’: ekstremalna transparentność (co zawiera, czego nie, ryzyka, przykłady)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Email zaufania: zmniejsza sceptycyzm przez detale, limity i jasność.",
    prompt: `Oferta: [ ]
Czas trwania: [ ]
Wsparcie: [ ]
Ograniczenia: [ ]
Social proof: [ ]
Ton: [ ]

Napisz email (650–1 000 słów) z:
1) 12 tematami
2) Co to jest / czym nie jest (lista)
3) Co zawiera (szczegółowo)
4) Typowe wyniki i warunki
5) Ryzyka i mitigacja
6) 2 przykłady (mini case hipotetyczne, jeśli brak realnych)
7) CTA + alternatywa: „odpisz z kontekstem i powiem, czy to pasuje”.`,
    thumbnail: "",
  },
  {
    id: "mwe-035",
    title:
      "WhatsApp: ‘zamknięcie przez decyzję’ — poprowadź decyzję 5 pytaniami (bez presji)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Konsultacyjne domknięcie: pytania + uczciwa rekomendacja + godne wyjście.",
    prompt: `Oferta: [ ]
Cena: [ ]
Ton: [ ]

Stwórz skrypt WhatsApp, który:
1) Potwierdza cel leada
2) Zadaje 5 pytań (1 na wiadomość) o pilność, priorytet, działanie, wsparcie i budżet
3) Daje uczciwą rekomendację (kup teraz / poczekaj / alternatywa)
4) Domyka jednym CTA wg rekomendacji

Dodaj 3 warianty zdań „to nie jest moment” bez psucia relacji.`,
    thumbnail: "",
  },

  {
    id: "mwe-036",
    title:
      "Email ‘sekwencja obiekcji’ (3 maile): cena → czas → zaufanie",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Trójząb obiekcji: 3 kolejne maile, każdy trafia w mocną obiekcję.",
    prompt: `Oferta: [ ]
Cena: [ ]
Mechanizm: [ ]
Social proof: [ ]
Ton: [ ]

Stwórz 3 maile (450–750 słów):
Email A: Cena (ROI, koszt braku działania, opcje)
Email B: Czas (minimalny plan, tempo)
Email C: Zaufanie (transparentność, dowód, ryzyka)

Dla każdego maila:
- 10 tematów + preheader
- 1 krótka historia (realistyczna)
- 5 bulletów wartości
- CTA + alternatywa reply-trigger`,
    thumbnail: "",
  },
  {
    id: "mwe-037",
    title:
      "WhatsApp: ekspresowy nurture w 3 wiadomościach (gdy lead mówi ‘wyślij coś’)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Mini nurturing: wartość + diagnoza + CTA do kolejnego kroku w 3 wiadomościach.",
    prompt: `Oferta: [ ]
Lead mówi: „wyślij coś”
Ton: [ ]
Link (jeśli dotyczy): [placeholder]

Stwórz 3 wiadomości:
1) 1 insight + krótkie pytanie
2) Mikro-framework (3 kroki) + przykład
3) Miękkie CTA (umówić / zobaczyć info / odpisać)

Dodaj 5 wariantów wg tonu: bliski, profesjonalny, lekki humor, premium, ultra krótki.`,
    thumbnail: "",
  },
  {
    id: "mwe-038",
    title:
      "Email z ‘pełnym frameworkiem’ (bez załącznika): uczysz metody i sprzedajesz na końcu",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Edukacyjny email z kompletnym frameworkiem, który prowadzi do oferty.",
    prompt: `Temat frameworku: [ ]
Powiązana oferta: [ ]
Ton: [ ]

Napisz email (700–1 200 słów) z:
1) 12 tematami
2) Wyjaśnieniem frameworku (5–7 kroków) z:
   - celem każdego kroku
   - przykładem zastosowania
   - typowym błędem
3) Jak użyć tego dziś (checklista)
4) CTA do oferty jako „skrót” lub „wsparcie”, bez presji
5) P.S. z pytaniem pod odpowiedzi`,
    thumbnail: "",
  },
  {
    id: "mwe-039",
    title:
      "WhatsApp: sprzedaż usługi high-ticket (konsultacyjnie) — diagnoza → propozycja → cena na końcu",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Konsultacyjna sekwencja high-ticket: diagnoza, wartość, propozycja i dopiero potem cena.",
    prompt: `Usługa: [ ]
Widełki cenowe: [ ]
Idealny klient: [ ]
Rezultat: [ ]
Ton: [ ]

Stwórz sekwencję WhatsApp w 9 wiadomościach:
1) Kontekst i zgoda
2) Diagnoza 1
3) Diagnoza 2
4) Diagnoza 3
5) Podsumowanie lustrzane (co zrozumiałem/-am)
6) Co zwykle działa (mechanizm)
7) Oferta w 2 opcjach (bez ceny)
8) Cena + co zawiera + warunki
9) CTA do rozmowy / aplikacji

Dodaj:
- zdania do wprowadzenia ceny bez napięcia
- 6 odpowiedzi na obiekcje (cena, czas, zaufanie, „muszę skonsultować”, „później”, „wyślij info”).`,
    thumbnail: "",
  },
  {
    id: "mwe-040",
    title:
      "Email ‘aplikacja’ dla high-ticket: filtruje i zwiększa zaangażowanie (kryteria + pytania + CTA)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Email zapraszający do aplikacji: kryteria, oczekiwania, pytania i CTA.",
    prompt: `Usługa: [ ]
Wyniki: [ ]
Wymagania: [ ]
Kryteria akceptacji: [ ]
Ton: [premium]

Napisz email (500–900 słów) z:
1) 10 tematami
2) Dlaczego jest aplikacja (jakość, wyniki)
3) Dla kogo jest / dla kogo nie jest (szczegółowo)
4) Co zawiera i jak pracujemy
5) Pytania aplikacyjne (8–12) dobrze zaprojektowane
6) CTA do formularza (placeholder)
7) Premium zakończenie + P.S. na wątpliwości`,
    thumbnail: "",
  },

  {
    id: "mwe-041",
    title:
      "WhatsApp: pełny cykl webinaru (zaproszenie + przypomnienia + follow-up wg obecności)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Pełny cykl: zaprosić, przypomnieć i konwertować po webinarze przez WhatsApp.",
    prompt: `Webinar:
- Temat: [ ]
- Data/godzina: [ ]
- Korzyść: [ ]
- Oferta po webinarze: [ ]
- Link rejestracji: [placeholder]
- Link replay: [placeholder]
- Ton: [ ]

Stwórz:
1) Zaproszenie (3 warianty)
2) Przypomnienia: 24h, 2h, 15 min (po 2 warianty)
3) Wiadomość „jesteśmy na żywo” (1)
4) Follow-up po webinarze:
   - dla obecnych (3 wiadomości)
   - dla nieobecnych (3 wiadomości)

Każda wiadomość:
- 2–6 linii
- 1 jedyne CTA (rejestracja/uczestnictwo/replay/oferta).`,
    thumbnail: "",
  },
  {
    id: "mwe-042",
    title:
      "Email zapraszający na webinar (wysoka konwersja): obietnica + bullets + autorytet + CTA",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Email do wypełnienia webinaru: jasno, atrakcyjnie i bez waty.",
    prompt: `Webinar:
- Temat: [ ]
- Czas trwania: [ ]
- Dla kogo: [ ]
- Rezultat: [ ]
- Host/autorytet: [ ]
- Link rejestracji: [placeholder]
- Ton: [ ]

Napisz email (450–750 słów) z:
1) 12 tematami + preheader
2) Hook: ból + obietnica
3) Czego się nauczą (8 bulletów) z konkretnymi rezultatami
4) Dla kogo jest/nie jest
5) CTA (placeholder)
6) Mini bio (autorytet) + zakończenie

Dodaj wersję krótką (<= 180 słów).`,
    thumbnail: "",
  },
  {
    id: "mwe-043",
    title:
      "WhatsApp: paczka szybkich odpowiedzi na powtarzające się pytania (cena, gwarancja, wsparcie, dostawa)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Krótkie makra (1–4 linie) gotowe do kopiuj-wklej, w ludzkim tonie.",
    prompt: `Oferta: [ ]
Cena: [ ]
Gwarancja: [ ]
Dostawa/udostępnienie: [ ]
Wsparcie: [ ]
Ton: [ ]

Stwórz paczkę 25 szybkich odpowiedzi WhatsApp, pogrupowanych:
A) Cena (5)
B) Gwarancja (5)
C) Co zawiera / dostawa (5)
D) Wyniki / oczekiwania (5)
E) Wsparcie / terminy (5)

Każda odpowiedź:
- 1–4 linie
- kończy się 1 opcjonalnym pytaniem, żeby iść dalej.`,
    thumbnail: "",
  },
  {
    id: "mwe-044",
    title:
      "Email do kadry zarządzającej (B2B): ultra czytelny — TL;DR + business case + ryzyka + CTA",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Email B2B ‘executive’: problem, propozycja, ROI, ryzyka i następny krok.",
    prompt: `Klient (branża): [ ]
Problem: [ ]
Propozycja: [ ]
Szacowane ROI: [ ]
Timeline: [ ]
Inwestycja: [ ]
Ton: [korporacyjny]

Napisz email w stylu executive, który:
1) Zaczyna się od TL;DR (max 8 bulletów)
2) Zawiera mini business case (koszt dziś vs po wdrożeniu) z przykładem liczbowym
3) Ryzyka i zależności (3–5)
4) Jasny następny krok (spotkanie/akceptacja)

Dodaj 6 tematów maila.`,
    thumbnail: "",
  },
  {
    id: "mwe-045",
    title:
      "WhatsApp: oferta błyskawiczna (flash) bez spalania zaufania (etycznie) — start + przypomnienie + domknięcie",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Flash sale na WhatsApp: jasność, warunki i domknięcie bez manipulacji.",
    prompt: `Oferta: [ ]
Rabat/bonus: [ ]
Realny czas trwania: [ ]
Warunki: [ ]
Ton: [ ]

Stwórz:
1) Wiadomość startową (3 warianty)
2) Przypomnienie w połowie okna (2 warianty)
3) Ostatnie przypomnienie (2 warianty)
4) Odpowiedzi na 8 szybkich obiekcji
Dodaj zdanie „jeśli to nie Twój moment, totalnie OK…” dla ochrony marki.`,
    thumbnail: "",
  },

  {
    id: "mwe-046",
    title:
      "Email benefit-driven (1 rezultat + 1 mechanizm + 1 dowód + CTA): bezpośredni i mocny",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Struktura prosta: obietnica, mechanizm, dowód, oferta, CTA.",
    prompt: `Rezultat: [ ]
Mechanizm: [ ]
Dowód: [testimonial/dane]
Oferta: [ ]
Ton: [ ]

Napisz email (400–650 słów) z:
1) 12 tematami (kilka z liczbami)
2) Konkretną obietnicą (bez ściemy)
3) Wyjaśnieniem mechanizmu na przykładzie
4) 2 elementami social proof
5) Ofertą w bulletach (co zawiera)
6) CTA + alternatywa „odpisz ‘GOTOWE’”
Dodaj wersję super krótką (<= 120 słów).`,
    thumbnail: "",
  },
  {
    id: "mwe-047",
    title:
      "WhatsApp: zebranie wymagań B2B do oferty (bez spotkania) — 8 wiadomości",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Zbierasz wymagania przez WhatsApp w uporządkowany i profesjonalny sposób.",
    prompt: `Usługa: [ ]
Branża: [ ]
Cel: [KPI]
Termin: [ ]
Ton: [ ]

Stwórz 8 wiadomości, aby:
1) Ustalić cel
2) Potwierdzić zakres
3) Zidentyfikować ograniczenia
4) Zebrać minimalne dane
5) Potwierdzić interesariuszy
6) Timeline
7) Budżet (widełki) bez niezręczności
8) Potwierdzenie: „na tej podstawie przygotuję ofertę”

Dodaj:
- 2 warianty na wiadomość (blisko i korporacyjnie)
- finalną wiadomość „co otrzymasz” (bez obiecywania dokładnej godziny).`,
    thumbnail: "",
  },
  {
    id: "mwe-048",
    title:
      "Email do umówienia rozmowy z wartością: jasny outcome + przygotowanie + CTA",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Email do kalendarza: sprzedaje outcome rozmowy (realna diagnoza).",
    prompt: `Rozmowa: [15/30]
Outcome rozmowy: [klarowność/plan/diagnoza]
Link: [placeholder]
Ton: [ ]

Napisz email z:
1) 8 tematami
2) Co osiągniemy na rozmowie (3 bulletsy)
3) Co przygotować (5 bulletów, prosto)
4) 2 opcjami terminów (placeholders) + link do kalendarza
5) Ludzkim zakończeniem + P.S. dla tych, co nie chcą rozmowy (alternatywa).`,
    thumbnail: "",
  },
  {
    id: "mwe-049",
    title:
      "WhatsApp: szybki discovery (5 pytań) + natychmiastowa spersonalizowana propozycja (2 profile)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Mini discovery: 5 pytań, potem propozycja w 1 wiadomości.",
    prompt: `Oferta: [ ]
Typ klienta: [ ]
Ton: [ ]

Stwórz:
1) 5 pytań (1 na wiadomość), żeby odkryć:
   - cel
   - obecną sytuację
   - główną blokadę
   - wcześniejszą próbę
   - pilność
2) Następnie:
   - zasymuluj odpowiedzi 2 różnych profili
   - stwórz 2 natychmiastowe propozycje (po 1 wiadomości) z:
     - odbiciem (mirror)
     - planem w 3 krokach
     - CTA

Dodaj 3 warianty CTA (miękkie, średnie, mocne).`,
    thumbnail: "",
  },
  {
    id: "mwe-050",
    title:
      "Email po spotkaniu (B2B): recap, decyzje, następne kroki, ryzyka (+ CTA akceptacji)",
    area: "Marketing i sprzedaż",
    category: "WhatsApp i Email",
    summary:
      "Email recap, który przyspiesza domknięcia: ustalenia, zaległości, ownerzy i szybka decyzja.",
    prompt: `Spotkanie: [temat]
Uczestnicy (role): [ ]
Ustalenia: [ ]
Zaległości: [ ]
Propozycja: [ ]
Ton: [korporacyjny]

Napisz email po spotkaniu z:
1) 6 tematami
2) Podsumowaniem w 6 bulletach
3) Decyzjami podjętymi vs do podjęcia
4) Następnymi krokami z ownerem (Klient/My) (tabela tekstowa w bulletach)
5) Ryzykami/zależnościami (3–5)
6) CTA: potwierdzić reply „ZATWIERDZONE” lub „ZMIANY”

Dodaj wersję krótką (<= 160 słów).`,
    thumbnail: "",
  },
];
