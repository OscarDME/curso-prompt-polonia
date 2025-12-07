// src/lib/prompts/text/soporte-guiones-atencion.js

export const textPromptsSoporteGuionesAtencion = [
  {
    id: "sop-atn-001",
    title:
      "Główny skrypt obsługi (wielokanałowy): powitanie → diagnoza → rozwiązanie → domknięcie",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Kompletny skrypt do czatu/emaila/telefonu z drzewem diagnozy, planami A/B/C i checklistą agenta.",
    prompt: `Kanał: [czat/email/telefon/WhatsApp]
Język: [ ]
Ton marki: [na luzie/neutralny/premium]
Produkt/usługa: [ ]
Sytuacja: [opisz problem]
Ograniczenia (polityka/SLA): [ ]

Stwórz GŁÓWNY SKRYPT gotowy do kopiuj-wklej z:
1) Powitaniem (3 wersje: standard, empatyczna, ultra krótka).
2) Potwierdzeniem tożsamości (jeśli dotyczy) bez tarcia (2 warianty).
3) Diagnozą z drzewem pytań:
   - 10 pytań po kolei, od najmniej do najbardziej wymagających dla klienta
   - jakiego sygnału szukasz w każdej odpowiedzi
   - kiedy przestać pytać i przejść do rozwiązania
4) Parafrazą i walidacją:
   - 4 formuły pokazujące zrozumienie bez przyznawania winy
5) Rozwiązaniem krok po kroku:
   - Plan A (najbardziej prawdopodobny) z ponumerowanymi krokami (i co klient powinien zobaczyć)
   - Plan B, jeśli nie zadziała (dlaczego może nie działać / jak skorygować)
   - Plan C (eskalacja) z danymi do zebrania
6) Domknięciem:
   - podsumowanie w 2 linijkach
   - akcja klienta i akcja zespołu
   - finalne potwierdzenie (proste pytanie)
7) Follow-up:
   - 2 wiadomości, jeśli klient nie odpowiada (24h/72h)
8) Wewnętrzną checklistą (12 punktów) do QA i dokumentacji sprawy.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-002",
    title:
      "Skrypt deeskalacji: zdenerwowany klient (empatia → kontrola → rozwiązanie) z granicami",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Realna deeskalacja: konkretne frazy, limity, protokoły przy obelgach i domknięcie z uzgodnieniem.",
    prompt: `Kontekst złości: [opłata/opóźnienie/bug/zła obsługa/niespełnione oczekiwania]
Kanał: [czat/telefon/email]
Co mogę zaoferować: [ ]
Czego NIE mogę zaoferować: [ ]
Istotne polityki: [ ]

Stwórz skrypt z:
1) Empatycznym otwarciem (6 wariantów wg intensywności).
2) “Przejęciem kontroli” bez konfrontacji:
   - 8 fraz, które porządkują rozmowę i prowadzą do celu
3) Minimalną diagnozą:
   - 6 krótkich pytań, jedno na wiadomość
   - jak priorytetyzować (pilność vs wpływ)
4) Propozycją rozwiązania z opcją A/B:
   - A: szybka (workaround)
   - B: pełna (docelowe rozwiązanie)
   - jak zaprezentować opcje, żeby klient wybrał
5) Jak powiedzieć NIE:
   - 10 sposobów odmowy bez sztywnego tonu
   - konkretne alternatywy do każdego “nie”
6) Jeśli są obelgi/groźby:
   - protokół w 4 krokach
   - frazy ostrzegawcze i formalne zakończenie
7) Domknięcie:
   - jednoznaczne potwierdzenie ustaleń + kolejny update`,
    thumbnail: "",
  },
  {
    id: "sop-atn-003",
    title:
      "Skrypt zwrotów: kwalifikuje się / nie kwalifikuje się / przypadek graniczny (z alternatywami i obiekcjami)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Solidne szablony do akceptacji lub odmowy zwrotu bez konfliktu, z alternatywami i odpowiedziami na obiekcje.",
    prompt: `Produkt/usługa: [ ]
Polityka zwrotów (skrót): [ ]
Powód klienta: [ ]
Kanał: [ ]

Napisz 3 skrypty:
A) KWALIFIKUJE SIĘ:
- potwierdzenie
- kroki i terminy
- potwierdzenie (dowód) i domknięcie

B) NIE KWALIFIKUJE SIĘ:
- wyjaśnij politykę ludzkim językiem
- 4 alternatywy (kredyt, wymiana, wsparcie, pauza, upgrade itd.)
- 10 “zakazanych fraz” i jak je zastąpić

C) PRZYPADEK GRANICZNY:
- poproś o dodatkowe dowody bez obwiniania
- utrzymaj dobrą wolę
- zdecyduj i uzasadnij z transparentnością

Dodaj:
- 12 typowych obiekcji (cena/czas/zaufanie) i odpowiedzi
- wewnętrzną checklistę dokumentacji (10 pól).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-004",
    title:
      "Skrypt anulowania z etyczną retencją (wykryj realny powód → zaproponuj dopasowanie → potwierdź)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Redukuj churn bez manipulacji: diagnoza, sensowne alternatywy i czyste anulowanie, jeśli klient nalega.",
    prompt: `Produkt: [ ]
Plan klienta: [ ]
Prawdopodobny powód: [cena/brak użycia/bug/brak wartości/wsparcie]
Dozwolone dźwignie: [pauza/downgrade/rabat/onboarding]
Kanał: [ ]

Stwórz skrypt z:
1) Otwarciem + walidacją (3 opcje).
2) Szybką diagnozą (7 pytań), by znaleźć prawdziwą przyczynę.
3) Macierzą powód→oferta:
   - dla każdego powodu 2 rozsądne alternatywy i jak je przedstawić
4) Jeśli akceptuje alternatywę:
   - dokładne kroki + potwierdzenie na piśmie
5) Jeśli nalega na anulowanie:
   - jasne potwierdzenie + co zachowuje/traci + data wejścia w życie
   - eleganckie pożegnanie i otwarte drzwi
6) Winback:
   - 2 wiadomości (dzień 7 i dzień 21) dopasowane do powodu.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-005",
    title:
      "Skrypt ekspresowego onboardingu (7–10 min): zagubiony klient → prowadzenie → mini-zwycięstwo → następny krok",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Zamienia chaos w szybki progres dzięki łagodnej diagnozie, konkretnym krokom i weryfikacji.",
    prompt: `Produkt/funkcja: [ ]
Poziom klienta: [początkujący/średniozaawansowany]
Cel klienta: [ ]
Kanał: [czat/telefon]

Stwórz:
1) Diagnozę bez wstydu (6 pytań).
2) Prowadzoną ścieżkę w 8–12 krokach:
   - co zrobić
   - co powinien zobaczyć na ekranie
   - typowe błędy i korekty
3) Mini-zadanie potwierdzające (1 prosta akcja).
4) Domknięcie:
   - podsumowanie
   - “najlepszy kolejny krok” (priorytet 1)
   - 2 sugerowane zasoby (jeśli nie istnieją, stwórz tytuły + bulletsy).`,
    thumbnail: "",
  },

  {
    id: "sop-atn-006",
    title:
      "Skrypt opóźnień/logistyki: tracking, incydenty, ponowna wysyłka i rekompensata (jeśli dotyczy)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Szablon na opóźnienia: empatia + fakty + opcje + zobowiązanie + follow-up.",
    prompt: `Typ operacji: [ecommerce/usługi]
Status: [ ]
Polityka rekompensat: [ ]
Kanał: [ ]

Stwórz skrypt:
1) Empatyczne otwarcie (4 wersje).
2) Minimalna prośba o dane w 1 wiadomości.
3) Wyjaśnienie statusu:
   - wersja krótka
   - wersja szczegółowa, ale prosta
4) Opcje:
   - czekanie z zaplanowanym update’em
   - ponowna wysyłka
   - częściowy/pełny zwrot (jeśli dotyczy)
5) Zobowiązanie:
   - co zrobimy i kiedy (bez obiecywania za dużo)
6) Follow-up:
   - 3 makra, jeśli nadal brak update’u
   - 2 makra “status: dostarczono, ale nie odebrałem/am”
7) Rejestr wewnętrzny:
   - tagi + pola obowiązkowe.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-007",
    title:
      "Makra czatowe (30) na częste przypadki: klarownie + ludzki ton + jedno CTA",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Makra gotowe do kopiuj-wklej, które przyspieszają support bez robotycznego brzmienia.",
    prompt: `Produkt/usługa: [ ]
Ton: [na luzie/neutralny/premium]
Częste przypadki (jeśli masz): [wklej listę]

Wygeneruj 30 makr (1–3 linijki) z:
- TYTUŁEM makra (krótki)
- TEKSTEM
- jednym jasnym CTA (czego potrzebuję od klienta)
Pogrupuj:
1) Info ogólne (6)
2) Konto/dostęp (8)
3) Płatności (6)
4) Bugi (6)
5) Wysyłka/logistyka (4)

Dodaj:
- 1 alternatywny wariant na makro (bardziej bezpośredni)
- listę 12 fraz do unikania + rekomendowane zamienniki.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-008",
    title:
      "Skrypt eskalacji do poziomu 2: minimalne dane, oczekiwania, update’y i domknięcie",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Eskaluj bez utraty zaufania: zbierz dowody, ustaw SLA i utrzymaj kontrolę komunikacji.",
    prompt: `Typ sprawy: [bug/płatność/bezpieczeństwo/prawne]
Docelowe SLA: [ ]
Kanał: [ ]

Stwórz:
1) Wiadomość do klienta o eskalacji (3 wersje).
2) Checklistę dowodów (12–16 punktów) + szablon odpowiedzi, żeby klientowi było łatwo.
3) Jak mówić o czasie:
   - gdy jest ETA
   - gdy NIE ma ETA (widełki + następny update)
4) Update’y:
   - 3 proaktywne wiadomości (z i bez nowości)
5) Rozwiązanie:
   - finalna wiadomość z przyczyną (wysoki poziom), rozwiązaniem, prewencją, weryfikacją
6) Rejestr wewnętrzny:
   - szablon ticketa (pola i tagi).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-009",
    title:
      "Skrypt upsell/cross-sell z supportu (etycznie): tylko jeśli realnie poprawia rozwiązanie",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Wykrywaj właściwe sygnały, proponuj jako opcję i obsługuj obiekcje bez presji.",
    prompt: `Produkt: [ ]
Plany/upselle: [ ]
Problem klienta: [ ]
Kanał: [ ]

Stwórz skrypt:
1) Najpierw rozwiąż bazowy problem (zdanie-pomost).
2) Sygnały, kiedy proponować upgrade (7 sygnałów).
3) Etyczna oferta:
   - 6 fraz, jak przedstawić jako “opcję”
   - 3 przykłady copy wg powodu (limit/szybkość/funkcja)
4) Obiekcje i odpowiedzi:
   - “nie chcę płacić więcej”
   - “to tylko pytanie”
   - “zastanowię się”
5) Domknięcie:
   - potwierdź, że baza działa
   - proste porównanie (bullets A vs B).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-010",
    title:
      "Skrypt rozmowy supportowej: kontrola czasu, frazy przejściowe i szablon notatek",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Struktura rozmowy, żeby szybko rozwiązywać i perfekcyjnie dokumentować.",
    prompt: `Typ: [techniczny/rozliczenia/onboarding]
Docelowy czas: [10–15 min]
Produkt: [ ]

Zaprojektuj:
1) Otwarcie (30–60s): powitanie + cel + potwierdzenie.
2) Diagnoza (3–5 min): pytania w kolejności + dlaczego pytamy.
3) Rozwiązanie (5–7 min): kroki + co mówić, gdy klient wykonuje.
4) Domknięcie (1–2 min): recap + next steps + potwierdzenie satysfakcji.
5) Plan B, jeśli nie da się rozwiązać na rozmowie: eskalacja + czasy + follow-up.
6) Szablon notatek:
   - pola obowiązkowe
   - tagi
   - podsumowanie w 3 linijkach.`,
    thumbnail: "",
  },

  // ---- Od tej sekcji: 40 kolejnych promptów (aż do 50). ----

  {
    id: "sop-atn-011",
    title:
      "Skrypt na “pobrali mi podwójnie”: weryfikacja, proste wyjaśnienie i rozwiązanie (3 scenariusze)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Podwójne obciążenie: blokada bankowa vs realne duplikaty vs cykle subskrypcji.",
    prompt: `Bramka płatności: [Stripe/PayPal/etc.]
Typ: [subskrypcja/zakup]
Dane: [email, data, ID]

Stwórz skrypt:
1) Walidacja + uspokojenie (3 wersje).
2) Minimalna prośba o dane (1 wiadomość).
3) Diagnoza wg scenariuszy:
   - blokada/retencja bankowa
   - realny duplikat
   - pomyłka w cyklu/planach
4) Rozwiązanie dla każdego scenariusza (kroki + terminy).
5) Domknięcie z dowodem:
   - potwierdzenie na piśmie
   - wiadomość follow-up po 48h.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-012",
    title:
      "Skrypt na “nie mogę się zalogować”: odzyskiwanie, 2FA, weryfikacja i prewencja",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Logowanie bez dramatu: kroki wg platformy i bezpieczeństwo bez proszenia o dane wrażliwe.",
    prompt: `System: [email+hasło/SSO/magic link/2FA]
Platforma: [web/app]
Błąd: [treść]

Stwórz:
1) Szybką diagnozę (8 pytań).
2) Rozwiązanie krok po kroku (Plan A/B/C):
   - reset hasła
   - magic link
   - cache/incognito
   - aplikacja (iOS/Android)
3) Bezpieczeństwo:
   - jak weryfikować tożsamość bez proszenia o hasła
   - co zrobić przy podejrzeniu przejęcia
4) Prewencja (6 tipów).
5) Eskalacja: checklista danych technicznych.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-013",
    title:
      "Skrypt na “nie działa” (zbyt ogólne): zamień w kroki odtwarzalne + dowody (bez frustracji)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Porządkuje chaos: kroki do reprodukcji, oczekiwane vs otrzymane, środowisko i szybkie testy.",
    prompt: `Klient mówi: “nie działa”
Funkcja: [ ]
Kanał: [ ]

Stwórz skrypt:
1) Walidacja (3 opcje).
2) Prośba o repro steps z szablonem:
   - Krok 1/2/3
   - Oczekiwałem/am / Otrzymałem/am
   - Zrzut/wideo (jeśli może)
3) Środowisko: urządzenie, przeglądarka, wersja, połączenie.
4) Szybkie testy (6) i jak je wyjaśnić.
5) Jeśli to bug: workaround + eskalacja + plan update’ów.
6) Domknięcie: podsumowanie + kolejny krok + potwierdzenie.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-014",
    title:
      "Skrypt dla klientów VIP: priorytet, język premium, proaktywne update’y (bez obiecywania za dużo)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "VIP experience: maks. 3 pytania, pełna kontrola i proaktywne update’y.",
    prompt: `Poziom VIP: [ ]
SLA: [ ]
Problem: [ ]
Kanał: [ ]

Stwórz skrypt premium:
1) Otwarcie z uznaniem (bez przesady).
2) Ultra efektywną diagnozę (3 pytania).
3) Rozwiązanie:
   - kroki albo eskalacja (z kontrolą)
4) Proaktywne update’y:
   - wiadomość po 2h i po 24h (nawet bez nowości)
5) Domknięcie:
   - potwierdzenie + otwarte drzwi
6) Notatka wewnętrzna: checklista VIP + rejestr “account health”.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-015",
    title:
      "Skrypt skutecznych przeprosin (bez przyznawania winy prawnej): wpływ → działanie → prewencja",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Jak przeprosić dobrze bez ryzyka: bezpieczne frazy i frazy zakazane.",
    prompt: `Sytuacja: [ ]
Ryzyko prawne: [niskie/średnie/wysokie]
Dozwolona rekompensata: [ ]

Stwórz:
1) Strukturę przeprosin w 5 krokach (skrypt tekstowy).
2) 15 bezpiecznych fraz + 10 fraz do unikania (z zamiennikami).
3) 5 krótkich przeprosin do czatu.
4) 2 długie przeprosiny do emaila (2 tony).
5) Wytyczne dla agenta: kiedy eskalować do legal + jak dokumentować.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-016",
    title:
      "Proaktywny skrypt incydentu: komunikat startowy + FAQ + update’y + komunikat zamykający",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Komunikacja incydentów: jasno, po ludzku, użytecznie, z workaroundem i rytmem update’ów.",
    prompt: `Incydent: [ ]
Wpływ: [ ]
ETA: [ ]
Workaround: [ ]
Kanały: [email/banner/status/czat]

Napisz:
1) Komunikat startowy (120–180 słów).
2) Wersję krótką (max 240 znaków).
3) FAQ (10 pytań i odpowiedzi).
4) Update #1 (postęp) + Update #2 (w toku bez ETA) + Update #3 (naprawione).
5) Komunikat po incydencie:
   - co się stało (wysoki poziom)
   - co zrobiono
   - co zrobimy, żeby zapobiec
   - jak zgłosić, jeśli nadal występuje.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-017",
    title:
      "Skrypt wewnętrznego handoffu (przekazanie między zespołami) + wiadomość do klienta",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Bez ping-ponga: szablony dla klienta i dla zespołu docelowego z dowodami i tagami.",
    prompt: `Zespół docelowy: [rozliczenia/techniczny/prawny]
Sprawa: [ ]
Kanał: [ ]

Stwórz:
A) Wiadomość do klienta (3 wersje) wyjaśniająca przekazanie + oczekiwania.
B) Handoff wewnętrzny:
- podsumowanie w 5 linijkach
- kroki już wykonane
- dołączone dowody
- hipoteza
- priorytet i powód
- otwarte pytania (3)
C) Checklistę anti ping-pong (10 punktów) + rekomendowane tagi.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-018",
    title: "Skrypt na “zostałem/am źle obsłużony/a”: naprawa usługi i retencja",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Odbuduj zaufanie: przeprosiny, reframing, rozwiązanie i follow-up.",
    prompt: `Skarga: [ ]
Kanał: [ ]
Dozwolona rekompensata: [ ]

Stwórz:
1) Otwarcie bez defensywy (3 warianty).
2) Łagodne pytania (6) do zrozumienia i rejestru.
3) Naprawę:
   - działanie natychmiastowe
   - opcja rekompensaty (jeśli dotyczy)
4) Zobowiązanie do poprawy (bez pustych obietnic).
5) Domknięcie + follow-up 24–48h.
6) Notatka wewnętrzna: VoC + eskalacja do przełożonego.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-019",
    title:
      "Skrypt tłumaczenia polityk bez robotycznego tonu: ludzki powód + alternatywy",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Wyjaśnia zasady z empatią i opcjami oraz obsługuje typowe obiekcje.",
    prompt: `Polityka: [zwroty/gwarancja/terminy/zasady użycia]
Sprawa: [ ]
Kanał: [ ]

Stwórz:
1) Krótkie wyjaśnienie (2–3 zdania) + wersję szczegółową (1 akapit).
2) “Dlaczego istnieje” ludzkim językiem.
3) 4 konkretne alternatywy, jeśli polityka nie pozwala na prośbę.
4) Odpowiedzi na obiekcje:
   - “to niesprawiedliwe”
   - “inna firma tak robi”
   - “nikt mnie nie uprzedził”
   - “chcę przełożonego”
5) Domknięcie: podsumowanie + kolejny krok.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-020",
    title:
      "Checklista idealnego domknięcia: mniej ponownych kontaktów i mniej przyszłych ticketów",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Domknięcia, które obniżają re-contact: podsumowanie, prewencja, zasób i potwierdzenie.",
    prompt: `Sprawa rozwiązana: [ ]
Kanał: [ ]

Stwórz 10 szablonów domknięcia:
- 4 do czatu (1–2 linijki)
- 4 do emaila (1 akapit)
- 2 do rozmowy (skrypt mówiony)
Każde domknięcie musi zawierać:
1) Co zostało rozwiązane (podsumowanie)
2) Krok prewencyjny (jeśli wróci…)
3) Zasób/FAQ albo tip
4) Pytanie końcowe potwierdzające

Dodaj też:
- 6 odpowiedzi, jeśli klient odpisze “dalej jest to samo”.`,
    thumbnail: "",
  },

  // 30 pozostałych promptów (21–50)
  {
    id: "sop-atn-021",
    title:
      "Skrypt rozliczeń: faktura, VAT, dane podatkowe i ponowne wysyłanie potwierdzeń",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Rozwiązuje kwestie podatkowe bez tarcia: szablon + minimum danych + jasne kroki.",
    prompt: `Kraj: [ ]
Typ klienta: [B2B/B2C]
Prośba: [faktura/VAT/dane podatkowe/zmiana danych firmy]
Kanał: [ ]

Stwórz skrypt:
1) Otwarcie + potwierdzenie prośby.
2) Minimalne dane do zebrania (w jednej liście) + powód każdego.
3) Kroki rozwiązania wg prośby:
   - ponowna wysyłka potwierdzenia
   - wystawienie/korekta faktury
   - zmiana danych podatkowych
4) Czasy realizacji i “następny update”.
5) Domknięcie + wewnętrzna checklista rejestru.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-022",
    title:
      "Skrypt chargebacków/sporów: zabezpieczenie, dowody, proces i komunikacja",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Obsługa sporów bez konfrontacji: wyjaśnij proces, zbierz dowody i zmniejsz ryzyko.",
    prompt: `Bramka płatności: [ ]
Spór: [otwarty/zamknięty]
Powód: [fraud/nie rozpoznaję/nie otrzymałem usługi]
Kanał: [ ]

Stwórz:
1) Ostrożne otwarcie (bez oskarżeń).
2) Proste wyjaśnienie procesu + terminy.
3) Lista dowodów do zebrania i jak o nie poprosić.
4) Opcje:
   - polubownie (częściowy zwrot/rozwiązanie)
   - kontynuacja sporu (jeśli dotyczy)
5) Domknięcie:
   - potwierdzenie na piśmie
   - zaplanowany follow-up.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-023",
    title:
      "Skrypt bezpieczeństwa: podejrzenie przejęcia konta (blokada, weryfikacja, odzyskanie)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Tekstowy protokół incydentów bezpieczeństwa bez proszenia o dane wrażliwe.",
    prompt: `Sygnały: [dziwne logowanie/nieautoryzowane zmiany/2FA]
Kanał: [ ]

Stwórz skrypt:
1) Otwarcie bezpieczeństwa (spokój + kontrola).
2) Działania natychmiastowe (krok po kroku), by zabezpieczyć:
   - reset
   - wylogowanie ze wszystkich sesji
   - włączenie 2FA
3) Weryfikacja tożsamości (dopuszczalne metody) bez proszenia o hasła.
4) Jeśli jest szkoda:
   - co sprawdzić
   - jak odwrócić zmiany
5) Domknięcie:
   - podsumowanie + checklista prewencji + follow-up.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-024",
    title:
      "Skrypt na nadużycia w supporcie: obelgi, nękanie i nieodpowiedni język (granice + zakończenie)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Stanowcze, uprzejme granice: ostrzeżenie, rejestr i bezpieczne zakończenie.",
    prompt: `Polityka zachowania: [wklej skrót]
Kanał: [ ]

Stwórz:
1) Miękką wiadomość o granicy (3 wersje).
2) Formalne ostrzeżenie (3 wersje).
3) Zamykanie rozmowy (2 wersje).
4) Protokół wewnętrzny:
   - co rejestrować
   - kiedy eskalować
   - kiedy blokować
5) 10 fraz zakazanych i alternatywy.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-025",
    title:
      "Skrypt techniczny: prośba o logi/zrzuty bez przytłoczenia + szablon raportu",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Zbieraj dowody techniczne metodycznie i prostym językiem.",
    prompt: `Platforma: [web/app]
Typ dowodu: [zrzut/wideo/log]
Kanał: [ ]

Stwórz:
1) Jak poprosić o dowody (3 tony: miły/bezpośredni/premium).
2) Instrukcje krok po kroku:
   - zrzut ekranu
   - krótkie wideo
   - skopiowanie błędu
3) Szablon raportu:
   - kroki reprodukcji
   - oczekiwane vs otrzymane
   - środowisko
   - częstotliwość
4) Domknięcie:
   - potwierdzenie
   - kolejne kroki + plan update’ów.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-026",
    title:
      "Skrypt WhatsApp: mikro-wiadomości, potwierdzenia między krokami i follow-up",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Support na WhatsApp bez ścian tekstu: krótkie bloki, potwierdzenia i makra.",
    prompt: `Produkt: [ ]
Sprawa: [ ]
Ton: [ ]

Stwórz:
1) Skrypt w 8–12 krótkich wiadomościach (z przerwami).
2) Potwierdzenia między krokami (dokładne frazy).
3) 3 wiadomości, jeśli klient długo nie odpowiada.
4) 12 makr WhatsApp na typowe sprawy.
5) Domknięcie z podsumowaniem i prewencją.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-027",
    title:
      "Skrypt emaila supportowego: jasna struktura + jedno CTA + wersje wg tonu",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Maile, które pchają sprawę do przodu: podsumowanie, co sprawdzono, kroki i jedno CTA.",
    prompt: `Sprawa: [ ]
Ton: [na luzie/korporacyjny]
Pilność: [ ]

Stwórz:
1) 8 tematów wiadomości.
2) Szablon emaila:
   - podsumowanie problemu
   - co zrobiliśmy/sprawdziliśmy
   - rekomendowane kroki
   - jedno CTA (czego potrzebuję)
   - zamknięcie
3) Wersję “pilną” i wersję “wrażliwą”.
4) Checklistę przed wysyłką (10 punktów).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-028",
    title:
      "Skrypt odpowiedzi na negatywne opinie (publicznie) + pomost do kanału prywatnego",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Eleganckie odpowiedzi publiczne bez dyskusji i bez proszenia o dane wrażliwe.",
    prompt: `Opinia (wklej): [ ]
Platforma: [Google/Trustpilot/App Store]
Polityka prywatności: [ ]

Stwórz:
1) Odpowiedź publiczną (80–120 słów).
2) 3 warianty wg tonu (agresywna/rozczarowana/sarkastyczna).
3) Wiadomość prywatną follow-up:
   - prośba o minimalne dane
   - propozycja rozwiązania
4) “Czego nie mówić”: 10 fraz i dlaczego.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-029",
    title:
      "Skrypt komunikowania czasu (SLA) bez obietnic: widełki, update’y i presja",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Jak mówić o czasie bez wpadek: frazy, struktura i proaktywne follow-upy.",
    prompt: `Realne SLA: [ ]
Sprawa: [ ]
Kanał: [ ]

Stwórz:
1) 15 fraz do komunikacji czasu: pewność/widełki/niepewność.
2) Struktura “czas + następny update” (szablony).
3) Odpowiedzi na presję:
   - “potrzebuję teraz”
   - “ignorujecie mnie”
   - “to nie do przyjęcia”
4) 3 proaktywne wiadomości, jeśli się opóźnia.
5) Notatka wewnętrzna: kiedy eskalować przez SLA.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-030",
    title:
      "Skrypt proszenia o informacje bez tarcia: 1 zwięzłe pytanie + opcje",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Zbieraj dane bez 20 wymian: zwięzła, przyjazna prośba i warianty.",
    prompt: `Sprawa: [ ]
Potrzebne dane: [email, numer zamówienia, zrzut itd.]
Kanał: [ ]

Stwórz:
1) 8 wersji “zwięzłego pytania” proszącego o kilka rzeczy naraz.
2) Wariant dla zabieganych (ultra krótki).
3) Wariant dla wrażliwych klientów (ultra empatyczny).
4) Jak zweryfikować otrzymane dane, nie sugerując winy.
5) Domknięcie potwierdzające: “z tym mogę już działać”.`,
    thumbnail: "",
  },

  {
    id: "sop-atn-031",
    title:
      "Skrypt ‘wiele tematów’: klient ma 5 problemów (priorytetyzuj i rozwiązuj blokami)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Porządkuj wiele problemów bez utraty kontroli i bez męczenia klienta.",
    prompt: `Lista problemów: [wklej]
Kanał: [ ]

Stwórz skrypt:
1) Walidacja (bez przytłaczania).
2) Propozycja kolejności wg wpływu/pilności/zależności (3 metody).
3) Rozwiązywanie blokami:
   - potwierdź po każdym bloku
4) Co rozwiążemy dziś vs co eskalujemy (z uzasadnieniem).
5) Domknięcie z checklistą + next steps.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-032",
    title:
      "Skrypt niepewności: “jeszcze nie wiem” z transparentnością, działaniem i follow-upem",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Frazy, by nie zmyślać: co wiemy, co sprawdzamy, next steps i update’y.",
    prompt: `Sprawa: [ ]
Co jest niejasne: [ ]
Kanał: [ ]

Stwórz:
1) 12 fraz, by powiedzieć “sprawdzam” pewnie.
2) Szablon odpowiedzi:
   - co już wiemy
   - co weryfikujemy
   - następny krok
   - kiedy wrócimy z update’em
3) 3 update’y (z i bez nowości).
4) 12 fraz do unikania + zamienniki.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-033",
    title:
      "Skrypt na “chcę przełożonego”: uspokojenie, najpierw rozwiązanie, eskalacja gdy ma sens",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Eskalacja bez blokowania: kryteria, alternatywy i perfekcyjny handoff.",
    prompt: `Sprawa: [ ]
Polityki: [ ]
Kanał: [ ]

Stwórz:
1) Walidację + intencję (3 warianty).
2) 5 fraz, by spróbować rozwiązać od razu.
3) Kryteria eskalacji (tak/nie) i jak to wyjaśnić.
4) Jeśli eskalujesz: wiadomość do klienta + szablon wewnętrzny.
5) Jeśli nie eskalujesz: jak powiedzieć nie z alternatywami.
6) Domknięcie z ustaleniem i follow-upem.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-034",
    title:
      "Skrypt na płatność bez dostawy: płatność OK, ale nie dotarło (cyfrowe/fizyczne) + prewencja",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Szybkie rozwiązanie: weryfikacja, ręczna dostawa, follow-up i tipy prewencyjne.",
    prompt: `Typ dostawy: [email/pobranie/wysyłka]
Płatność: [ ]
Kanał: [ ]

Stwórz:
1) Uspokajające otwarcie (3).
2) Minimum weryfikacji (dane).
3) Diagnozę wg przyczyn (5) i rozwiązanie do każdej.
4) Ręczna dostawa / ponowna wysyłka (kroki).
5) Prewencja (6 tipów).
6) Domknięcie: potwierdzenie + follow-up 24h.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-035",
    title:
      "Skrypt na intermittent bugi: częstotliwość, warunki, workaround i monitoring",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Trudne przypadki: intermitencja. Struktura mapowania warunków i workaround.",
    prompt: `Bug: [ ]
Częstotliwość: [czasem/zawsze]
Platforma: [ ]

Stwórz:
1) Pytania do mapowania warunków (10).
2) Jak prosić o “kiedy działa/kiedy nie” (szablon).
3) 3–5 workaroundów wg możliwych przyczyn.
4) Eskalację z dowodami:
   - logi/zrzuty
   - kroki i warunki
5) Follow-up:
   - jak raportować postęp
   - jak prosić o potwierdzenie stabilności.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-036",
    title:
      "Skrypt bez dostępu do ekranu: klient nie może udostępnić ekranu ani wysłać zrzutów",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Diagnoza przez pytania o wysokiej wartości sygnału i opisowe prowadzenie krok po kroku.",
    prompt: `Ograniczenie: brak zrzutów i screen share
Produkt: [ ]
Kanał: [czat/telefon]

Stwórz:
1) Strategię diagnozy “tak/nie” (12 pytań o wysokiej wartości).
2) Instrukcje opisowe:
   - jak prowadzić po menu bez screenshotów
   - jak potwierdzać, że klient jest na właściwym ekranie
3) Plan A/B/C.
4) Domknięcie: podsumowanie + next step + follow-up.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-037",
    title:
      "Skrypt na “zmieniliście mi cenę”: komunikacja zmian, grandfathering i alternatywy",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Wysoka wrażliwość cenowa: empatia + zasady + uczciwa opcja.",
    prompt: `Zmiana: [podwyżka/nowa cena]
Polityka: [grandfathering/rabat/brak]
Kanał: [ ]

Stwórz:
1) Empatyczne otwarcie (3).
2) Jasne wyjaśnienie zmiany (bez korpomowy).
3) Opcje:
   - utrzymanie planu (jeśli dotyczy)
   - downgrade
   - pauza
   - rabat czasowy (jeśli dozwolony)
4) 10 obiekcji i odpowiedzi.
5) Domknięcie: potwierdzenie ustaleń.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-038",
    title:
      "Skrypt prewencji churnu: wykryj “sygnały odejścia” w ticketach i działaj",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Zamieniaj tickety w retencję: sygnały, pytania, interwencje i follow-up.",
    prompt: `Produkt: [ ]
Sygnały: [frustracja/brak wartości/brak użycia]
Kanał: [ ]

Stwórz:
1) Listę 12 sygnałów churnu w treści klienta.
2) 6 pytań do znalezienia przyczyny.
3) Interwencje wg przyczyny:
   - onboarding
   - dopasowanie planu
   - rozwiązanie techniczne
   - edukacja/zasoby
4) Szablon follow-up po 7 dniach.
5) Notatka wewnętrzna: tagi VoC + kolejka “ryzyko”.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-039",
    title:
      "Skrypt wsparcia B2B: stakeholderzy, krytyczność, SLA, wpływ i roadmap rozwiązania",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Support enterprise: krytyczność, wpływ, komunikacja executive i update’y.",
    prompt: `Klient B2B: [branża]
Krytyczność: [P1/P2/P3]
Wpływ: [ilu użytkowników]
Kanał: [email/telefon]

Stwórz:
1) Wiadomość startową (executive) z:
   - podsumowaniem
   - wpływem
   - natychmiastowym działaniem
   - następnym update’em
2) Diagnozę: kluczowe dane (lista).
3) Plan rozwiązania: now/next/later.
4) 3 zaplanowane update’y.
5) Domknięcie: RCA wysokopoziomowe + prewencja + potwierdzenie.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-040",
    title:
      "Skrypt edukacji klienta: wyjaśnij “dlaczego to się dzieje” bez technobełkotu",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Wyjaśnia przyczyny bez nudy: analogie, przykłady i checklista prewencji.",
    prompt: `Problem: [ ]
Odbiorca: [nietechniczny/mieszany/techniczny]
Kanał: [ ]

Stwórz:
1) Proste wyjaśnienie (2–3 zdania).
2) Wyjaśnienie z analogią (1).
3) Opcjonalne wyjaśnienie techniczne (1 akapit).
4) Co klient może zrobić, by tego uniknąć (checklista 8–12).
5) Domknięcie: potwierdzenie + dodatkowy zasób.`,
    thumbnail: "",
  },

  {
    id: "sop-atn-041",
    title:
      "Skrypt na prośby poza zakresem: odmowa + użyteczna alternatywa (bez tarcia)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Jak odmówić tego, czego nie da się zrobić, bez utraty klienta.",
    prompt: `Prośba poza zakresem: [ ]
Powód: [polityka/ograniczenie techniczne]
Możliwe alternatywy: [ ]

Stwórz:
1) 8 sposobów powiedzenia NIE z szacunkiem.
2) 6 użytecznych alternatyw (nawet “jak to osiągnąć inaczej”).
3) 6 odpowiedzi na obiekcje klienta.
4) Domknięcie: podsumowanie + następny krok.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-042",
    title:
      "Skrypt na powtarzające się tickety (ten sam klient): uznaj historię i przerwij cykl",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Gdy wraca z tym samym: uznanie, analiza przyczyny, fix docelowy i follow-up.",
    prompt: `Historia: [opisz]
Powtarzający się problem: [ ]
Kanał: [ ]

Stwórz:
1) Otwarcie uznające historię (bez obwiniania).
2) Pytania o przyczynę źródłową (10).
3) Działania:
   - szybkie obejście (workaround)
   - rozwiązanie docelowe (zmiany/ustawienia)
4) Follow-up:
   - check-in po 48h
   - check-in po 7 dniach
5) Notatka wewnętrzna: tag “powtarzalne” + VoC.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-043",
    title:
      "Skrypt na sezon szczytu: długie kolejki, niepokój i priorytety bez chaosu",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Zarządzaj wolumenem: oczekiwania, makra, priorytety i szybkie domknięcia.",
    prompt: `Sezon szczytu: [Black Friday/launch/itd.]
Realne SLA: [ ]
Kanał: [ ]

Stwórz:
1) Komunikat “wysokie obciążenie” (3 wersje).
2) Szablon priorytetyzacji:
   - pilność vs wpływ
   - kryteria
3) 15 makr “high volume” (prośba o dane, potwierdzenie, eskalacja, domknięcie).
4) Jak nie obiecywać:
   - 12 zamienników niebezpiecznych fraz
5) Szybkie domknięcie z prewencją.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-044",
    title:
      "Skrypt na ‘zdezorientowanego klienta’: uprość, podziel na kroki i potwierdź zrozumienie",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Zamienia zamieszanie w klarowność przez dzielenie na porcje, potwierdzenia i mini-checki.",
    prompt: `Temat: [ ]
Kanał: [ ]

Stwórz:
1) 6 fraz upraszczających bez protekcjonalności.
2) Instrukcje w blokach (max 2 kroki na wiadomość) + potwierdzenie.
3) Mini-checki:
   - 5 krótkich pytań, by sprawdzić zrozumienie
4) Plan zasobów:
   - 2 zasoby (poradnik/FAQ) ze strukturą
5) Domknięcie z pytaniem “czy już działa?”.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-045",
    title:
      "Skrypt przy sprzecznych dowodach: klient mówi A, system mówi B",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Obsługa rozbieżności bez oskarżeń: walidacja, weryfikacja i rozwiązanie.",
    prompt: `Rozbieżność: [ ]
Kanał: [ ]

Stwórz:
1) Otwarcie bez winy (3).
2) Proces weryfikacji:
   - 6 kroków
   - dane do zebrania
3) 5 możliwych wyjaśnień prostym językiem.
4) Rozwiązanie wg scenariuszy.
5) Domknięcie z potwierdzeniem i follow-upem.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-046",
    title:
      "Skrypt supportu w społeczności/Discordzie: odpowiedź publiczna + follow-up prywatny",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Publiczny support: pomóż bez ujawniania danych i przenieś do DM/ticketa.",
    prompt: `Platforma: [Discord/społeczność]
Sprawa: [ ]

Stwórz:
1) Odpowiedź publiczną (krótką), która:
   - zwaliduje
   - poda 1–2 kroki
   - poprosi o przejście do DM/ticketa w celu zebrania danych
2) Wiadomość prywatną do zebrania danych (szablon).
3) Publiczne domknięcie po rozwiązaniu (bez wrażliwych szczegółów).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-047",
    title:
      "Skrypt na feature request: to nie bug, to prośba (empatia + zarządzanie)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Obsługa próśb: uznaj, doprecyzuj, zarejestruj i ustaw oczekiwania bez obiecywania roadmapy.",
    prompt: `Prośba: [ ]
Produkt: [ ]
Kanał: [ ]

Stwórz:
1) Walidację + podziękowanie (3).
2) Pytania doprecyzowujące (6):
   - use case
   - wpływ
   - częstotliwość
3) Jak rejestrować wewnętrznie (tagi + format).
4) Jak komunikować oczekiwania bez obietnic:
   - 10 bezpiecznych fraz
5) Alternatywy obecnie (workaroundy) i zasoby.
6) Domknięcie: potwierdzenie rejestracji.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-048",
    title:
      "Skrypt na błąd użytkownika (misconfig): popraw bez obwiniania i naucz prewencji",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Gdy to błąd konfiguracji: takt, prowadzenie i prewencja.",
    prompt: `Misconfig: [ ]
Kanał: [ ]

Stwórz:
1) 8 fraz, by wskazać przyczynę bez obwiniania.
2) Kroki naprawy (A/B/C).
3) Prewencja:
   - checklista konfiguracji (10)
4) Domknięcie:
   - potwierdzenie działania
   - “jeśli wróci, najpierw sprawdź X”.`,
    thumbnail: "",
  },
  {
    id: "sop-atn-049",
    title:
      "Skrypt przy barierze językowej: prosto, strukturalnie, z potwierdzeniami",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Prosta komunikacja: krótkie zdania, jasne kroki i potwierdzenia, by uniknąć nieporozumień.",
    prompt: `Język klienta: [ ]
Poziom: [niski/średni]
Kanał: [ ]

Stwórz skrypt:
1) Ultra proste zdania (10) do:
   - walidacji
   - proszenia o dane
   - podawania kroków
2) Instrukcje “jeden krok na wiadomość”.
3) Potwierdzenia:
   - 8 pytań potwierdzających (tak/nie)
4) Domknięcie:
   - podsumowanie i sugerowany zasób wizualny (jeśli dotyczy).`,
    thumbnail: "",
  },
  {
    id: "sop-atn-050",
    title:
      "Uniwersalny skrypt domykania ticketów z metrykami: CSAT, powód, tagi i nauka (VoC)",
    area: "Obsługa Klienta & SOPy",
    category: "Skrypty obsługi",
    summary:
      "Domknięcie zasilające ciągłe ulepszanie: CSAT, tagowanie i wewnętrzne podsumowanie.",
    prompt: `Sprawa: [ ]
Kanał: [ ]
Dostępne tagi: [ ]

Stwórz:
1) Wiadomość końcową do klienta z prośbą o CSAT (3 warianty) bez presji.
2) Opcjonalne pytanie o feedback (1 linijka) dla insightów.
3) Wewnętrzny szablon domknięcia:
   - podsumowanie (3 linijki)
   - przyczyna źródłowa
   - rozwiązanie
   - łączny czas
   - tagi (powód/podpowód)
   - szansa produktowa (jeśli dotyczy)
4) Lista 12 rekomendowanych tagów dla tego typu pliku.
5) Dobre praktyki, by uniknąć “przedwczesnego zamknięcia”.`,
    thumbnail: "",
  },
];
