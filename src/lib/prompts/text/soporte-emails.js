// src/lib/prompts/text/soporte-emails.js

export const textPromptsSoporteEmails = [
  {
    id: "sop-email-001",
    title:
      "Email pierwszej odpowiedzi (uniwersalny): potwierdza, uspokaja i prosi o minimum (bez ping-ponga)",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Pierwszy email skracający czas obsługi: empatia + podsumowanie + 1 CTA + minimalne dane.",
    prompt: `Kontekst zgłoszenia: [wklej wiadomość klienta]
Produkt/usługa: [ ]
Ton: [serdeczny/neutralny/premium]
Cel: [rozwiązać / zdiagnozować / eskalować]
Dane, których potrzebuję: [lista]

Napisz email pierwszej odpowiedzi z:
1) Tematem (5 opcji): claro, ludzki, bez “robotycznego” tonu.
2) Empatycznym otwarciem (bez przesady) + potwierdzeniem otrzymania.
3) Podsumowaniem problemu w 1–2 zdaniach (parafraza, aby potwierdzić zrozumienie).
4) Jednym, jasnym CTA, żeby zdobyć brakujące info:
   - jeśli potrzebuję danych → poproś o nie w bulletach z przykładami
   - jeśli potrzebuję kroków → max. 5 kroków, ponumerowanych
5) “Co zrobimy po naszej stronie” (2–3 bullety) dla zbudowania zaufania.
6) Zakończeniem: dostępność + informacja o follow-up (bez obiecywania konkretnych dat) + podpis.
Dodaj 2 dodatkowe wersje:
- wersję krótką (<= 90 słów)
- wersję super premium (cieplejszą i bardziej szczegółową).`,
    thumbnail: "",
  },
  {
    id: "sop-email-002",
    title:
      "Email z prośbą o dane techniczne (bez straszenia): screen, kroki, środowisko, timestampy",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Prośba o techniczne dowody bez frustracji: precyzyjne pytania, checklista i przykłady.",
    prompt: `Incydent: [ ]
Platforma: [web/aplikacja]
Poziom użytkownika: [podstawowy/średni/zaawansowany]
Co już próbował/a: [ ]

Napisz email z prośbą o dane techniczne z:
1) Tematem (4 opcje).
2) Krótkim wyjaśnieniem, dlaczego prosimy o te dane (ludzko i spokojnie).
3) Checklistą w bulletach (8–12) z przykładami:
   - kroki odtworzenia
   - oczekiwane vs otrzymane
   - przeglądarka/OS/urządzenie
   - zrzut ekranu lub krótkie wideo
   - timestamp i strefa czasowa
   - dokładny URL / screen
4) Opcjonalnymi (łatwymi) instrukcjami:
   - incognito
   - wyłączenie rozszerzeń
   - hard refresh
5) Jednym CTA na końcu: “odpisz nam z X”.
Dodaj wersję ultra-krótką dla zirytowanych klientów.`,
    thumbnail: "",
  },
  {
    id: "sop-email-003",
    title:
      "Email follow-up bez odpowiedzi (Dzień 2 / Dzień 5 / Ostatnia próba): uprzejmy i skuteczny",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Sekwencja follow-upów, by reaktywować zgłoszenia bez pasywno-agresywnego tonu.",
    prompt: `Kontekst: [streszczenie zgłoszenia]
Czego brakuje od klienta: [dane/krok]
Ton: [ ]

Stwórz 3 emaile:
1) Follow-up Dzień 2: krótki, miły, 1 CTA.
2) Follow-up Dzień 5: zaproponuj alternatywę (call, screen, inny kanał).
3) Ostatnia próba: informacja o automatycznym zamknięciu + jak wznowić.
Dla każdego emaila dodaj:
- 3 opcje tematu
- pełny tekst
- opcjonalną linijkę: “Jeśli się spieszysz, odpisz tylko ____”.`,
    thumbnail: "",
  },
  {
    id: "sop-email-004",
    title:
      "Email zamknięcia (sukces): potwierdzenie + podsumowanie rozwiązania + prewencja + zasoby",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Zamknięcie, które zostawia dobre wrażenie: potwierdza, tłumaczy, zapobiega i prowadzi.",
    prompt: `Problem: [ ]
Zastosowane rozwiązanie: [ ]
Prawdopodobna przyczyna: [ ]
Zasoby: [linki/tytuły]

Napisz email zamknięcia z:
1) Tematem (4 opcje).
2) Potwierdzeniem, że powinno już działać + jak zweryfikować (2–3 checki).
3) Podsumowaniem rozwiązania w 3 bulletach (bez technicznego żargonu).
4) Prewencją: 5 konkretnych rekomendacji, aby nie wróciło.
5) Zasobami: 3 sugerowane linki (podaj tytuły nawet jeśli jeszcze nie istnieją).
6) Ciepłym zakończeniem + zaproszeniem do odpowiedzi, jeśli wróci.
Dodaj wersję krótką (<= 120 słów).`,
    thumbnail: "",
  },
  {
    id: "sop-email-005",
    title:
      "Email do zdenerwowanego klienta: deeskalacja, walidacja, plan i odbudowa zaufania",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Odpowiedź przy wysokim napięciu: empatia, zdrowe granice, jasny plan i jeden kolejny krok.",
    prompt: `Wiadomość klienta (wklej): [ ]
Rzeczywisty kontekst: [co się stało]
Co możesz zaoferować: [rozwiązanie/alternatywa]
Czego NIE możesz zaoferować: [limity/polityka]

Napisz email, który:
1) Waliduje emocje bez nieuzasadnionego przyznawania winy.
2) Podsumowuje problem w 1–2 zdaniach.
3) Proponuje plan w 3 krokach (co robi klient / co robimy my / kiedy wrócimy z update’em).
4) Daje 2 alternatywy (np. workaround vs eskalacja).
5) Utrzymuje granice z szacunkiem (jeśli dotyczy).
6) Kończy się JEDNYM CTA.
Dodaj 2 warianty: “bardzo neutralny” i “bardziej serdeczny”.`,
    thumbnail: "",
  },

  {
    id: "sop-email-006",
    title:
      "Email: zwrot zaakceptowany — potwierdzenie, orientacyjne czasy, potwierdzenie i przyszłe obciążenia",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Jasny komunikat o zwrocie: co zwracamy, kiedy się pojawi i co z dostępem.",
    prompt: `Produkt/plan: [ ]
Kwota: [ ]
Metoda płatności: [ ]
Polityka: [ ]
Dostęp: [pozostaje/kończy się]

Napisz email o zaakceptowanym zwrocie z:
1) Tematem (4 opcje).
2) Potwierdzeniem zwrotu + kwotą i referencją (placeholdery).
3) Orientacyjnymi czasami (bez obiecywania dokładnie) i dlaczego zależy od banku.
4) Co dzieje się z dostępem/przyszłymi odnowieniami.
5) Instrukcjami, jeśli nie widać zwrotu (checklista 6).
6) Uprzejmym zamknięciem + CTA na pytania.`,
    thumbnail: "",
  },
  {
    id: "sop-email-007",
    title:
      "Email: zwrot odrzucony (z alternatywą) — stanowczy, empatyczny i bez konfliktu",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Odmowa zwrotu z ludzkim wyjaśnieniem + alternatywy, żeby realnie pomóc.",
    prompt: `Powód odmowy: [ ]
Zastosowana polityka: [ ]
Alternatywy, które MOŻESZ zaoferować: [kredyt/zmiana planu/przedłużenie]

Napisz email z:
1) Tematem (4 opcje).
2) Krótkim, ludzkim wyjaśnieniem dlaczego (bez legalese).
3) Zwięzłym cytatem/parafrazą polityki (bez długiego kopiuj-wklej).
4) 2–3 konkretnymi alternatywami (z krokami).
5) Jednym CTA, żeby wybrał/a alternatywę.
Dodaj wersję “bardzo krótką” dla uniknięcia dyskusji.`,
    thumbnail: "",
  },
  {
    id: "sop-email-008",
    title:
      "Email: anulowanie potwierdzone — co się zmienia, do kiedy działa i jak reaktywować później",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Potwierdzenie anulowania, które zapobiega ticketom: dostęp, odnowienia, dane i reaktywacja.",
    prompt: `Plan: [ ]
Data końca dostępu: [ ]
Powód: [opcjonalnie]
Czy oferować retencję? [tak/nie]

Napisz email z:
1) Tematem (4 opcje).
2) Potwierdzeniem anulowania.
3) Dostępem: do kiedy + co zostaje zachowane (dane, historia).
4) Jak reaktywować (kroki).
5) (Opcjonalnie) Nienachalną ofertą retencji: 2 alternatywy.
6) Uprzejmym zakończeniem.`,
    thumbnail: "",
  },
  {
    id: "sop-email-009",
    title:
      "Email o incydencie (status): analizujemy / zidentyfikowano / monitorujemy / rozwiązano (4 szablony)",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Pakiet emaili wg statusu incydentu: jasność, spokój, workaround i kolejne update’y.",
    prompt: `Incydent: [ ]
Wpływ: [kogo dotyczy]
Workaround: [jeśli jest]
Kanał: [email]

Stwórz 4 emaile:
1) Analizujemy
2) Zidentyfikowano
3) Monitorujemy
4) Rozwiązano

Każdy email powinien zawierać:
- 3 propozycje tematu
- streszczenie wpływu
- co robimy
- workaround (jeśli dotyczy)
- kiedy damy kolejny update (bez konkretnej godziny)
- empatyczne zakończenie.`,
    thumbnail: "",
  },
  {
    id: "sop-email-010",
    title:
      "Email: ‘potrzebujemy Twojej autoryzacji’ (uprawnienia/admin) — poproś admina bez tarcia",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Prosi użytkownika o zaangażowanie admina — gotowy blok do przekazania dalej.",
    prompt: `Wymagana akcja admina: [zmiana roli/włączenie funkcji]
Kontekst: [ ]
Ton: [ ]

Napisz email do użytkownika z:
1) Tematem (3 opcje).
2) Krótkim wyjaśnieniem: dlaczego potrzebny jest admin.
3) Krokami dla użytkownika (2–3).
4) Blokiem “Wiadomość do przekazania Twojemu adminowi” (gotowy tekst) z:
   - krótkim kontekstem
   - dokładnymi krokami w produkcie (placeholdery)
   - co potwierdzić na końcu
5) Zakończeniem + jednym CTA.`,
    thumbnail: "",
  },

  {
    id: "sop-email-011",
    title:
      "Email z ‘krokami rozwiązania’ (maks. klarowność): instrukcje numerowane + ‘co powinieneś/-naś zobaczyć’",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Email z krokami, które klient naprawdę wykona: krótkie kroki, oczekiwany rezultat i plan B.",
    prompt: `Problem: [ ]
Proponowane rozwiązanie: [ ]
Platforma: [web/aplikacja]
Poziom użytkownika: [ ]

Napisz email z:
1) Tematem (4).
2) 6–10 krokami numerowanymi, każdy z:
   - dokładną akcją
   - co powinieneś/-naś zobaczyć
   - jeśli nie widać — co zrobić (plan B)
3) Sekcją “jeśli działa” (jak potwierdzić).
4) Sekcją “jeśli nie działa” (jakie dane nam wysłać).
5) Zakończeniem z jednym CTA.`,
    thumbnail: "",
  },
  {
    id: "sop-email-012",
    title:
      "Email: ‘zduplikowane zgłoszenie’ / ‘ticket już istnieje’ — porządkuje, redukuje szum i trzyma dobry ton",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Ujednolicenie ticketów bez tonu nagany: wyjaśnienie i następny krok.",
    prompt: `Ticket główny: [ID]
Ticket duplikat: [ID]
Status: [ ]

Napisz email z:
1) Tematem (3).
2) Wyjaśnieniem, dlaczego łączymy (szybkość/jasność).
3) Informacją, w którym tickecie będziemy wysyłać update’y.
4) Prośbą o potwierdzenie 1 rzeczy (jeśli trzeba).
5) Uprzejmym zakończeniem.`,
    thumbnail: "",
  },
  {
    id: "sop-email-013",
    title:
      "Email: ‘tymczasowe rozwiązanie / workaround’ — wyjaśnij limity, czas trwania i kolejny update",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Workaroundy: uczciwe, konkretne i z jasnymi oczekiwaniami.",
    prompt: `Bug: [ ]
Workaround: [ ]
Ograniczenia workaroundu: [ ]
Kolejny update: [ ]

Napisz email z:
1) Tematem (4).
2) Co się dzieje (wysoki poziom).
3) Workaround krok po kroku (5–8 kroków).
4) Czego workaround NIE zrobi (limity).
5) Co robimy, żeby przygotować fix.
6) Jednym CTA: potwierdź, czy działa / wyślij X info.`,
    thumbnail: "",
  },
  {
    id: "sop-email-014",
    title:
      "Email eskalacji do inżynierii (wewnętrzny): perfekcyjny, odtwarzalny i z kompletnymi danymi",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Wewnętrzny szablon eskalacji: dokładne kroki, expected/actual, środowisko i dowody.",
    prompt: `Bug/incydent: [ ]
Ważność: [P1–P4]
Konto/Org ID: [ ]
URL-e: [ ]
Timestampy: [ ]
Dowody: [screeny/logi/HAR]

Napisz wewnętrzny email do inżynierii z:
1) Tematem w standardzie: [Sev][Obszar] krótki opis.
2) Kontekstem klienta (bez PII).
3) Krokami odtworzenia (numerowane).
4) Expected vs Actual.
5) Zakresem: ilu użytkowników, od kiedy, regiony.
6) Dołączonymi dowodami.
7) Hipotezą (opcjonalnie) + rekomendowanym priorytetem.
8) Konkretnymi pytaniami (max 3), żeby odblokować.
Dodaj wersję krótką na Slacka.`,
    thumbnail: "",
  },
  {
    id: "sop-email-015",
    title:
      "Email weryfikacji tożsamości (zmiany wrażliwe): bezpieczny, jasny i bez tarcia",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Prośba o weryfikację do zmian wrażliwych bez proszenia o niebezpieczne dane.",
    prompt: `Żądana zmiana: [email/właściciel/2FA]
Ryzyko: [wysokie]
Dozwolone metody: [ostatnie 4 karty? NIE / bezpieczne dane TAK]
Polityki: [ ]

Napisz email z:
1) Tematem (3).
2) Ludzkim wyjaśnieniem, dlaczego weryfikujemy.
3) Listą 2–3 dozwolonych metod weryfikacji (z przykładami).
4) Czego NIGDY nie prosimy (1–2 linie).
5) Jednym CTA: odpisz z X.
6) Spokojnym, profesjonalnym zakończeniem.`,
    thumbnail: "",
  },

  {
    id: "sop-email-016",
    title:
      "Email do IT korporacyjnego: whitelisting/porty/domeny + jakiej próby potrzebujemy",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Technicznie przyjazny email do IT, gdy firewall/proxy blokuje produkt.",
    prompt: `Firma: [ ]
Objaw: [ ]
Wymagane domeny: [placeholdery]
Porty: [placeholdery]
Endpointy: [placeholdery]

Napisz email do IT z:
1) Tematem (3).
2) Streszczeniem problemu i jak go potwierdzić (test hotspotem).
3) Wymogami sieci (domeny/porty/endpointy) w formacie copy/paste.
4) Jakich logów lub testów prosimy (bez narzędzi, jeśli nie chcesz).
5) Kontaktem i zakończeniem.
Dodatkowo stwórz wersję “do przekazania” dla nietechnicznego klienta.`,
    thumbnail: "",
  },
  {
    id: "sop-email-017",
    title:
      "Email: ‘zmiana planu’ (upgrade/downgrade) — pro-rata wyjaśnione z prostym przykładem",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Wyjaśnienie pro-rata i skutków zmiany planu, aby uniknąć nieporozumień.",
    prompt: `Plany: [ ]
Pro-rata: [tak/nie]
Przypadek: [upgrade/downgrade]
Data: [ ]

Napisz email z:
1) Tematem (3).
2) Co się stanie (w bulletach).
3) Prosty przykład liczbowy (z placeholderami).
4) Co zmienia się w funkcjach/limitach i kiedy.
5) Mini-FAQ (5).
6) CTA: potwierdź, czy chcesz kontynuować.`,
    thumbnail: "",
  },
  {
    id: "sop-email-018",
    title:
      "Email: ‘faktura/IVA/VAT’ — jasne wyjaśnienia + jak zaktualizować dane podatkowe",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Odpowiada na pytania podatkowe jasno (bez tonu prawniczego) i prowadzi do aktualizacji danych.",
    prompt: `Kraj: [ ]
Dokument: [faktura/paragon]
Pytanie: [ ]

Napisz email z:
1) Tematem (3).
2) Jasną odpowiedzią na pytanie.
3) Krokami aktualizacji danych podatkowych (5–8).
4) Czego oczekiwać później (czasy, regeneracja).
5) Jakich danych potrzebujemy, jeśli nie może tego zrobić (lista).
6) Zakończeniem z jednym CTA.`,
    thumbnail: "",
  },
  {
    id: "sop-email-019",
    title:
      "Email: ‘prośba o zrzut/wideo’ (bez PII) — jak zebrać dowód z poszanowaniem prywatności",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Prosi o użyteczne screeny bez ryzyka danych: instrukcje i co zamazać.",
    prompt: `Incydent: [ ]
Co musimy zobaczyć: [ekran/błędy]
Poziom użytkownika: [ ]

Napisz email z:
1) Tematem (3).
2) Krótkim wyjaśnieniem: “to pomoże rozwiązać szybciej”.
3) Instrukcjami:
   - jak zrobić zrzut ekranu
   - jak nagrać wideo 20 s
   - jakie dane ukryć (emaile, płatności itd.)
4) Checklistą (6) tego, co ma zawierać dowód.
5) Jednym CTA: odpisz, dołączając X.`,
    thumbnail: "",
  },
  {
    id: "sop-email-020",
    title:
      "Email post-mortem (dla użytkownika): co się stało, jak to naprawiliśmy i co zmieni się na przyszłość",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Komunikacja po incydencie: transparentna, bez żargonu, z konkretnymi działaniami.",
    prompt: `Incydent: [ ]
Wpływ: [ ]
Czas trwania: [ ]
Przyczyna (wysoki poziom): [ ]
Działania zapobiegawcze: [ ]

Napisz email z:
1) Tematem (4).
2) Podsumowaniem (3 bullety).
3) Co się stało (wysoki poziom) bez żargonu.
4) Co zrobiliśmy, żeby rozwiązać.
5) Co zrobimy, żeby nie wróciło (5 działań).
6) Jeśli użytkownik ma coś zrobić — max 3 kroki.
7) Empatycznym zakończeniem + kanałem na pytania.`,
    thumbnail: "",
  },

  {
    id: "sop-email-021",
    title:
      "Email odbudowy zaufania po błędzie zespołu: odpowiedzialne przeprosiny + plan + rekompensata (jeśli dotyczy)",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Profesjonalne przeprosiny bez korpo tonu: przyznanie, naprawa, prewencja.",
    prompt: `Co poszło nie tak: [ ]
Wpływ na klienta: [ ]
Co zrobimy: [ ]
Rekompensata (jeśli dotyczy): [ ]

Napisz email z:
1) Tematem (3).
2) Odpowiedzialnymi przeprosinami (bez dramatyzowania).
3) Co się stało (wysoki poziom) + uznaniem wpływu.
4) Planem w 3 krokach (natychmiast, rozwiązanie, prewencja).
5) Rekompensatą (jeśli dotyczy) wyjaśnioną prosto.
6) Jednym CTA + ludzkim zakończeniem.`,
    thumbnail: "",
  },
  {
    id: "sop-email-022",
    title:
      "Email: ‘zastosowano politykę’ (bez tonu prawnego) — wyjaśnij zasady z empatią + alternatywy",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Wyjaśnianie polityk (zwroty, użycie, nadużycia) w ludzkim tonie i z pomocnymi opcjami.",
    prompt: `Polityka: [ ]
Przypadek klienta: [ ]
Alternatywy: [kredyt/pauza/zmiana planu]

Napisz email z:
1) Tematem (3).
2) Walidacją + podsumowaniem sytuacji.
3) Prostym wyjaśnieniem polityki i po co istnieje.
4) Jak dotyczy danego przypadku (bez oskarżeń).
5) 2–3 alternatywami z krokami.
6) Jednym CTA.`,
    thumbnail: "",
  },
  {
    id: "sop-email-023",
    title:
      "Email: ‘potwierdźmy wymagania’ przed dalszymi krokami (mniej niespodzianek): uprawnienia, plan, środowisko",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Potwierdza wymagania (plan/rola/kompatybilność) zanim ruszymy z trudnym rozwiązaniem.",
    prompt: `Docelowa akcja: [ ]
Wymagania: [plan/rola/przeglądarka]
Klient: [ ]

Napisz email z:
1) Tematem (3).
2) Wyjaśnieniem, że dla szybkości musimy potwierdzić wymagania.
3) Checklistą (8–12):
   - plan
   - rola
   - przeglądarka/OS
   - konfiguracja
4) Jeśli nie spełnia: 3 alternatywy.
5) Jednym CTA: odpisz z uzupełnioną checklistą.`,
    thumbnail: "",
  },
  {
    id: "sop-email-024",
    title:
      "Email: ‘instrukcje dla admina’ (do przekazania) — dokładne kroki + checklista potwierdzenia",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Idealny tekst do przekazania adminowi bez gubienia kontekstu.",
    prompt: `Akcja admina: [ ]
Ścieżka w produkcie: [ ]
Co potwierdzić: [ ]

Stwórz email do użytkownika z:
1) Tematem (2).
2) Blokiem do przekazania adminowi zawierającym:
   - krótki kontekst
   - dokładne kroki (numerowane)
   - co potwierdzić na końcu
   - przydatny zrzut (opcjonalnie)
3) Zakończeniem i jednym CTA.`,
    thumbnail: "",
  },
  {
    id: "sop-email-025",
    title:
      "Email ‘ostatnia wiadomość’ do automatycznego zamknięcia: miły, pomocny i z otwartą furtką",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Zamyka ticket bez urazy: co próbowaliśmy, jak wznowić i zasoby.",
    prompt: `Podsumowanie sprawy: [ ]
Czego zabrakło od klienta: [ ]
Zasoby: [ ]

Napisz email z:
1) Tematem (3).
2) Informacją, że na razie zamkniemy ticket (delikatny ton).
3) Podsumowaniem działań (3 bullety).
4) Jak wznowić: “odpisz na ten email z X”.
5) 3 sugerowanymi zasobami.
6) Ciepłym zakończeniem.`,
    thumbnail: "",
  },

  {
    id: "sop-email-026",
    title:
      "Email: ‘potwierdzenie buga’ (bez obiecywania ETA) — uznanie + workaround + kolejne update’y",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Potwierdza buga bez obiecywania terminów: co robimy i jak będziemy informować.",
    prompt: `Bug: [ ]
Wpływ: [ ]
Workaround: [tak/nie]
Priorytet: [ ]

Napisz email z:
1) Tematem (3).
2) Potwierdzeniem, że to bug + krótkie przeprosiny.
3) Workaroundem (jeśli jest) z jasnymi krokami.
4) Co jeszcze badamy (2–3 punkty).
5) Jak będziemy dawać update’y (bez konkretnych godzin).
6) Jednym CTA: potwierdź, czy workaround działa / wyślij dowód.`,
    thumbnail: "",
  },
  {
    id: "sop-email-027",
    title:
      "Email: ‘bug nie do odtworzenia’ (bez obwiniania) — poproś o właściwe szczegóły i utrzymaj zaufanie",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Gdy nie możesz odtworzyć buga: jak prosić o dowody bez frustracji.",
    prompt: `Objaw: [ ]
Co sprawdziłeś/-aś: [ ]
Ton: [ ]

Napisz email z:
1) Tematem (3).
2) Wyjaśnieniem, że chcemy to odtworzyć, by naprawić na stałe.
3) Prośbą tylko o minimum (checklista 8–10) z przykładami.
4) 2 szybkimi alternatywami:
   - wideo 20 s
   - krótka rozmowa
5) Jednym CTA i ludzkim zakończeniem.`,
    thumbnail: "",
  },
  {
    id: "sop-email-028",
    title:
      "Email: ‘bramka płatności’ (Stripe/PayPal) — jak tłumaczyć niepowodzenia bez obwiniania banku ani klienta",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Szablon dla płatności nieudanych: neutralny ton, konkretne kroki i alternatywa.",
    prompt: `Błąd: [ ]
Płatność: [subskrypcja/jednorazowo]
Kraj: [ ]

Napisz email z:
1) Tematem (3).
2) Neutralnym wyjaśnieniem typowych przyczyn (4 bullety).
3) Krokami rozwiązania (6–8).
4) Alternatywą: inna karta/metoda/link.
5) Jednym CTA: potwierdź, czy udało się zakończyć; jeśli nie — jaki błąd widzisz.`,
    thumbnail: "",
  },
  {
    id: "sop-email-029",
    title:
      "Email: ‘środowisko niewspierane’ (przeglądarka/OS) — takt + realne opcje",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Komunikuj niekompatybilność bez wyższości: zaoferuj drogi obejścia i weryfikację.",
    prompt: `Aktualne środowisko: [ ]
Wspierane środowisko: [ ]
Problem: [ ]

Napisz email z:
1) Tematem (3).
2) Uprzejmym wyjaśnieniem kompatybilności.
3) 2 konkretnymi opcjami, by ruszyć dziś.
4) Krótkimi krokami aktualizacji/zmiany.
5) Jednym CTA: potwierdź, czy zadziałała opcja A czy B.`,
    thumbnail: "",
  },
  {
    id: "sop-email-030",
    title:
      "Email: ‘problem sporadyczny’ — izoluj zmienne kilkoma pytaniami + plan follow-up",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Dla losowych błędów: poproś o użyteczny kontekst i zaproponuj plan bez męczenia klienta.",
    prompt: `Objaw: [ ]
Częstotliwość: [ ]
Podejrzany kontekst: [sieć/dane]

Napisz email z:
1) Tematem (3).
2) 6 pytaniami o najwyższej wartości (nie więcej).
3) Opcjonalną prośbą o dowód (wideo 20 s).
4) Planem follow-up: co sprawdzimy po naszej stronie i jak damy znać.
5) Jednym CTA.`,
    thumbnail: "",
  },

  {
    id: "sop-email-031",
    title:
      "Email: ‘dostęp do treści/kursu’ — wyjaśnij blokadę, potwierdź zakup i odzyskaj dostęp",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Szablon dla “kupiłem/-am, ale nie widzę”: weryfikacja emaila, statusu płatności i rozwiązanie.",
    prompt: `Kupiony produkt: [ ]
Email użyty do zakupu: [ ]
Platforma: [ ]
Status: [zablokowane/nie widać]

Napisz email z:
1) Tematem (3).
2) Weryfikacją zakupu na 3 danych (bez wrażliwych PII).
3) Krokami poprawnego dostępu (6–8).
4) Jeśli użyto złego emaila: jak to naprawić.
5) Jednym CTA: odpisz z 3 danymi, byśmy znaleźli zakup.`,
    thumbnail: "",
  },
  {
    id: "sop-email-032",
    title:
      "Email: ‘prośba o wyjątek’ (szary przypadek) — jak poprosić o zgodę wewnętrzną i jak odpisać klientowi",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Dwa emaile: wewnętrzny do przełożonego i do klienta na czas weryfikacji.",
    prompt: `Przypadek: [ ]
Polityka: [ ]
Dlaczego to szary przypadek: [ ]
O jaki wyjątek prosimy: [ ]

Stwórz:
A) Email wewnętrzny do przełożonego:
- temat
- streszczenie
- dowody
- rekomendacja
- ryzyko
- oczekiwana odpowiedź

B) Email do klienta:
- temat
- podziękowanie
- że weryfikujemy
- czego potrzebujemy, jeśli coś brakuje
- kolejny update (bez konkretnej godziny)`,
    thumbnail: "",
  },
  {
    id: "sop-email-033",
    title:
      "Email: ‘ostateczne potwierdzenie’ — checklista 3 punktów, by bezpiecznie zamknąć sprawę",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Przed zamknięciem: potwierdź w 3 checkach i uniknij ponownego otwierania.",
    prompt: `Zastosowane rozwiązanie: [ ]
Funkcja: [ ]
Ton: [ ]

Napisz email z:
1) Tematem (2–3).
2) 3 checkami potwierdzenia (w bulletach).
3) Jeśli coś nie działa: 1 CTA, by odpisać z minimalnym dowodem.
4) Uprzejmym zakończeniem.`,
    thumbnail: "",
  },
  {
    id: "sop-email-034",
    title:
      "Email: ‘migracja/duża zmiana’ — jasne instrukcje + przed/po + ‘co zrobić dziś’",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Komunikacja dużych zmian: praktyczny przewodnik i uspokojenie.",
    prompt: `Zmiana: [ ]
Kogo dotyczy: [ ]
Data: [ ]
Wymagane działania: [ ]

Napisz email z:
1) Tematem (4).
2) Executive summary (3 bullety).
3) Przed vs Po (6 bulletów).
4) Co użytkownik ma zrobić dziś (max 5 kroków).
5) Co się stanie, jeśli nic nie zrobi (uczciwie).
6) Mini-FAQ (6).
7) Jednym CTA w zakończeniu.`,
    thumbnail: "",
  },
  {
    id: "sop-email-035",
    title:
      "Email: ‘nadchodzące odnowienie/obciążenie’ — prewencyjny, jasny, redukuje spory",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Powiadomienie o odnowieniu: data, kwota, jak anulować/zmienić i uniknąć reklamacji.",
    prompt: `Plan: [ ]
Kwota: [ ]
Data: [ ]
Jak anulować: [ścieżka/kroki]

Napisz email z:
1) Tematem (4).
2) Kluczowymi informacjami (data, kwota, metoda) w bulletach.
3) Jak zaktualizować płatność (4–6 kroków).
4) Jak anulować lub zmienić plan (kroki).
5) Mini-FAQ (5).
6) Uprzejmym zakończeniem.`,
    thumbnail: "",
  },

  {
    id: "sop-email-036",
    title:
      "Email: ‘prośba o opinię/feedback’ (po rozwiązaniu): krótki, ludzki i pomocny",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Prośba o feedback bez irytowania: 2 sensowne pytania i szybka odpowiedź.",
    prompt: `Rozwiązany przypadek: [ ]
Ton: [ ]

Napisz email z:
1) Tematem (3).
2) Podziękowaniem + potwierdzeniem, że sprawa rozwiązana.
3) 2 ultra proste pytania:
   - czy rozwiązanie pomogło?
   - co możemy poprawić?
4) CTA: odpisz liczbą (1–5) + opcjonalnie 1 linia.
Dodaj wersję super krótką.`,
    thumbnail: "",
  },
  {
    id: "sop-email-037",
    title:
      "Email: ‘klient VIP/premium’ — ultra dopracowany ton + przyspieszenie + ownership",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Odpowiedź premium: pełne ownership, jasne kroki i proaktywny follow-up (bez obiecywania).",
    prompt: `Klient: [VIP]
Sprawa: [ ]
Priorytet: [ ]

Napisz email z:
1) Tematem (3).
2) Premium otwarciem (ciepłe, krótkie).
3) Ownership: “zajmę się tym osobiście”.
4) Planem w 3 krokach + czego potrzebuję (jeśli dotyczy).
5) Zobowiązaniem do follow-upu (bez obiecywania konkretnych terminów).
6) Eleganckim zakończeniem + podpisem.`,
    thumbnail: "",
  },
  {
    id: "sop-email-038",
    title:
      "Email: ‘użytkownik zagubiony w platformie’ — nawigacja + zasoby + propozycja następnego kroku",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Pomaga się odnaleźć: 3 typowe ścieżki, tipy i jedno CTA.",
    prompt: `Produkt: [ ]
Czego szuka użytkownik: [ ]
Poziom: [początkujący]

Napisz email z:
1) Tematem (3).
2) Wyjaśnieniem w 2 liniach “jak nawigować”.
3) 3 typowymi ścieżkami (A/B/C) z krokami.
4) 5 tipami, jak unikać typowych błędów.
5) 3 sugerowanymi zasobami.
6) Jednym CTA: powiedz, którą ścieżkę chcesz wybrać.`,
    thumbnail: "",
  },
  {
    id: "sop-email-039",
    title:
      "Email: ‘sprawa prawna / subskrypcja anulowana za nadużycia’ — stanowczy, profesjonalny i z jasnymi granicami",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Szablon dla delikatnych sytuacji: granice, odniesienie do polityk i właściwy kanał.",
    prompt: `Sytuacja: [nadużycia/fraud/prośba prawna]
Polityka: [ ]
Co możesz powiedzieć: [ ]

Napisz email z:
1) Tematem (3).
2) Odpowiedzią stanowczą i uprzejmą.
3) Krótkim odniesieniem do regulaminu/polityki (bez długich cytatów).
4) Krokami, które użytkownik może podjąć (jeśli dotyczy).
5) Zakończeniem, które nie eskaluje.
Dodaj wersję super krótką.`,
    thumbnail: "",
  },
  {
    id: "sop-email-040",
    title:
      "Email: ‘ponowne połączenie integracji’ (OAuth/webhooks) — jasne kroki + weryfikacja + co wysłać, jeśli nie działa",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Instrukcja reconnection integracji z weryfikacją i minimalną prośbą o dowody.",
    prompt: `Integracja: [ ]
Problem: [ ]
Platforma: [ ]

Napisz email z:
1) Tematem (3).
2) Krokami rozłączenia i ponownego połączenia (8–12) z “co zobaczysz”.
3) Krokiem weryfikacji: jak przetestować w 1 minutę.
4) Jeśli nie działa: 6 danych do wysłania (screen, błąd, timestamp, konto).
5) Jednym CTA.`,
    thumbnail: "",
  },

  {
    id: "sop-email-041",
    title:
      "Email: ‘potwierdzenie aktualizacji danych’ (profil/rozliczenia) — podsumowanie + co sprawdzić",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Potwierdza zmianę danych: co zaktualizowano i jak zweryfikować (mniej ticketów).",
    prompt: `Zmiana: [ ]
Poprzednia wartość: [opcjonalnie]
Nowa wartość: [ ]
Co trzeba sprawdzić: [ ]

Napisz email z:
1) Tematem (3).
2) Potwierdzeniem zmiany.
3) 3 checkami weryfikacji.
4) Co zrobić, jeśli coś wygląda źle (jedno CTA).
5) Krótkim, uprzejmym zakończeniem.`,
    thumbnail: "",
  },
  {
    id: "sop-email-042",
    title:
      "Email: ‘odpowiedź na chargeback’ — poważny ton + kroki + dowody",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Szablon do chargebacków: zbieranie danych, wyjaśnienie procesu i próba rozwiązania.",
    prompt: `Bramka: [ ]
Obciążenie: [ ]
Powód sporu: [ ]
Status: [otwarty]

Napisz email z:
1) Tematem (3).
2) Krótkim wyjaśnieniem procesu i czemu lepiej rozwiązać bezpośrednio.
3) Danymi, których potrzebujemy (checklista 8) do zbadania.
4) Opcjami rozwiązania (wg polityki).
5) Jednym CTA i bardzo profesjonalnym tonem.`,
    thumbnail: "",
  },
  {
    id: "sop-email-043",
    title:
      "Email: ‘rozwiązanie w 2 opcjach’ — A/B, żeby klient wybrał bez zamieszania",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Dwie jasne ścieżki (workaround vs fix) i krótszy czas decyzji.",
    prompt: `Problem: [ ]
Opcja A: [szybka]
Opcja B: [pełniejsza]
Ton: [ ]

Napisz email z:
1) Tematem (3).
2) Krótkim podsumowaniem problemu.
3) Opcją A:
   - kroki (3–6)
   - plusy/minusy
4) Opcją B:
   - kroki (3–6)
   - plusy/minusy
5) Jednym CTA: “odpisz A albo B” + 1 dane, jeśli trzeba.`,
    thumbnail: "",
  },
  {
    id: "sop-email-044",
    title:
      "Email: ‘spersonalizowana dokumentacja’ — wyjaśnij proces mini-przewodnikiem dopasowanym do przypadku",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Mini-dokumentacja w emailu: przewodnik krok po kroku dopasowany do realnego przypadku.",
    prompt: `Cel klienta: [ ]
Kontekst (role/plan): [ ]
Ograniczenia: [ ]

Napisz email typu mini-dokumentacja z:
1) Tematem (3).
2) “Cel” i “Oczekiwany rezultat”.
3) Wymaganiami wstępnymi.
4) Krokami (10–14), każdy z:
   - akcją
   - oczekiwanym rezultatem
   - typowym błędem i rozwiązaniem
5) Checklistą końcową weryfikacji.
6) Jednym CTA: potwierdź sukces lub powiedz, na którym kroku utknąłeś/-aś.`,
    thumbnail: "",
  },
  {
    id: "sop-email-045",
    title:
      "Email onboarding po zakupie: dostęp, pierwsze kroki, zasoby i wsparcie",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Email powitalny po zakupie: dostęp, quickstart i gdzie prosić o pomoc.",
    prompt: `Produkt: [ ]
Dostęp: [ścieżka]
Zasoby: [linki lub tytuły]
Ton: [ ]

Napisz email z:
1) Tematem (5 opcji).
2) Powitaniem + co zawiera.
3) Jak uzyskać dostęp (4–6 kroków).
4) Quickstart (3 akcje do “pierwszego sukcesu”).
5) Zasobami (3) + społecznością (jeśli jest).
6) Wsparciem: jak prosić o pomoc (co zawrzeć).
7) Ciepłym zakończeniem.`,
    thumbnail: "",
  },

  {
    id: "sop-email-046",
    title:
      "Email: ‘prośba o nową funkcję’ — waliduj, dopytaj i zamień w insight (bez obietnic)",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Odpowiedź na feature request bez obiecywania: pytania o use case i follow-up.",
    prompt: `Prośba klienta: [ ]
Status roadmapy: [nieznany/nie/może]
Ton: [ ]

Napisz email z:
1) Tematem (3).
2) Walidacją i podziękowaniem.
3) 5 pytaniami o use case (maksymalna wartość).
4) Co możemy zasugerować dziś (workaround), jeśli dotyczy.
5) Co zrobimy z feedbackiem (bez obietnic).
6) Jednym CTA: odpisz na 5 pytań.`,
    thumbnail: "",
  },
  {
    id: "sop-email-047",
    title:
      "Email: ‘odpowiedź wg SLA’ (gdy to potrwa) — transparentnie + kolejne kroki + spokój",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Gdy nie ma natychmiastowego rozwiązania: jak komunikować transparentnie bez irytowania.",
    prompt: `Sprawa: [ ]
Powód opóźnienia: [zależy od strony trzeciej/wymaga inżynierii]
Workaround: [tak/nie]
Ton: [ ]

Napisz email z:
1) Tematem (3).
2) Uznaniem pilności klienta.
3) Wyjaśnieniem, czemu potrwa dłużej (bez żargonu).
4) Co zrobimy w międzyczasie (3 bullety).
5) Workaroundem (jeśli jest).
6) Jednym CTA: potwierdź, czy workaround pomaga / wyślij brakujące dane.`,
    thumbnail: "",
  },
  {
    id: "sop-email-048",
    title:
      "Email: ‘częściowy zwrot’ / korekta — jasne rozbicie i jak to się pokaże",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Zwroty częściowe/korekty: jasne rozbicie, powód i kroki weryfikacji.",
    prompt: `Kwota całkowita: [ ]
Kwota skorygowana: [ ]
Powód: [pro-rata/rabat/korekta]
Bramka: [ ]

Napisz email z:
1) Tematem (3).
2) Krótkim wyjaśnieniem korekty.
3) Rozbiciem w bulletach (placeholdery).
4) Jak to się pojawi (czasy i gdzie sprawdzić).
5) Jednym CTA: odpisz, jeśli nie widać po X dniach roboczych (bez obiecywania dokładnie).`,
    thumbnail: "",
  },
  {
    id: "sop-email-049",
    title:
      "Email: ‘prewencja fraudu’ (bez oskarżeń) — dodatkowa weryfikacja i następny krok",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Gdy system wykrywa ryzyko: prośba o dodatkową weryfikację bez oskarżeń i bez straszenia.",
    prompt: `Sygnał ryzyka: [ ]
Wymagane: [weryfikacja]
Ton: [bardzo profesjonalny]

Napisz email z:
1) Tematem (3).
2) Neutralnym wyjaśnieniem: “ze względów bezpieczeństwa”.
3) Co potrzebujemy (2–3 dozwolone metody) z przykładami.
4) Czego NIGDY nie prosimy.
5) Jednym CTA + spokojnym zakończeniem.`,
    thumbnail: "",
  },
  {
    id: "sop-email-050",
    title:
      "Email: wewnętrzny recap do zespołu (handoff) — streszczenie, status, ryzyka i następna akcja",
    area: "Obsługa Klienta & SOPy",
    category: "Emaile",
    summary:
      "Idealny handoff wewnętrzny: kontekst, status, dowody, ryzyka i jasny next step.",
    prompt: `Sprawa: [ ]
Klient: [bez PII]
Status: [ ]
Blokery: [ ]
Dowody: [ ]
Następna akcja: [ ]

Napisz wewnętrzny email z:
1) Standardowym tematem.
2) Streszczeniem sprawy (3 bullety).
3) Osią czasu (3–6 zdarzeń z timestampami).
4) Co sprawdzono i jakie były wyniki.
5) Ryzykami/wpływem.
6) Jasną następną akcją + rekomendowanym ownerem.
Dodaj krótką wersję na Slacka.`,
    thumbnail: "",
  },
];
