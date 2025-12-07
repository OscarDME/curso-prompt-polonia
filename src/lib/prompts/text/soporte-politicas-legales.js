// src/lib/prompts/text/soporte-politicas-legales.js

export const textPromptsSoportePoliticasLegales = [
  {
    id: "sop-pol-001",
    title:
      "Polityka zwrotów (produkt cyfrowy): jasna, uczciwa i łatwa do stosowania (z przykładami)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Napisz politykę zwrotów dla produktu cyfrowego: zasady, wyjątki i realistyczne przykłady.",
    prompt: `Biznes: [rodzaj działalności]
Produkt cyfrowy: [kurs/szablony/SaaS/subskrypcja]
Główny kraj/rynek: [ ]
Kanały sprzedaży: [www/Stripe/Hotmart/etc.]
Obecne warunki (jeśli są): [ ]

Stwórz kompletną politykę zwrotów (gotową na stronę i do Regulaminu) z:
1) Definicjami: zakup, dostęp, dostarczenie, konsumpcja, okres próbny, odnowienie.
2) Kwalifikacją: co się kwalifikuje, a co nie (wg kategorii).
3) Terminami: okno zwrotu wg typu produktu (kurs, SaaS, subskrypcja).
4) Dowodami: co jest potrzebne do realizacji (minimalizuj tarcie).
5) Wyjątkami: oszustwo, nadużycia, chargebacki, wiele kont.
6) Procesem: jak złożyć wniosek, czasy odpowiedzi, sposób zwrotu środków.
7) Przykładami (min. 8) “jeśli X → obowiązuje Y”.
8) Podsumowaniem w 6 bulletach (“wersja prosta”) dla supportu.
9) Wewnętrzną checklistą agenta (10 kroków) do decyzji.
10) Szablonami odpowiedzi: zaakceptowano / odrzucono / przypadek graniczny.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-002",
    title:
      "Polityka anulowania i odnowień (subskrypcje): anty-zamieszanie i anty-chargeback",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj anulowanie, odnowienia, proporcjonalne rozliczenia i co dzieje się z dostępem.",
    prompt: `Produkt: [SaaS/subskrypcja]
Cykl: [miesięczny/roczny]
Trial: [tak/nie]
Proporcjonalne rozliczenie: [tak/nie]
Kraj: [ ]

Napisz kompletną politykę, która obejmuje:
1) Jak działa automatyczne odnowienie (prostym językiem).
2) Jak anulować (kroki wg platformy) i co użytkownik potwierdza.
3) Co dzieje się z dostępem (od razu vs do końca okresu).
4) Zwroty przy odnowieniu: jasne reguły wg przypadków.
5) Zmiana planu: upgrade/downgrade, kiedy obowiązuje, proporcje.
6) Nieudane płatności: ponowienia, zawieszenie, powiadomienia.
7) Prewencja nieporozumień: 10 “jasnych” zdań do UX/checkout.
8) Mini-FAQ (12 pytań) dla klientów.
9) Makra supportowe (akceptacja/odmowa/wyjaśnienie) w ludzkim tonie.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-003",
    title:
      "Polityka dopuszczalnego użytkowania (AUP) dla społeczności/subskrypcji (zachowanie, sankcje, odwołanie)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zasady zachowania: co wolno, czego nie, poziomy sankcji i proces odwołania.",
    prompt: `Platforma: [Discord/forum/prywatna społeczność]
Typ odbiorców: [ ]
Ryzyka: [spam/nękanie/oszustwa/NSFW]
Moderacja: [zespół/narzędzia]

Napisz kompletną AUP z:
1) Zasadami współżycia (3–5).
2) Zakazanymi zachowaniami (szczegółowa lista wg kategorii).
3) Zakazanymi treściami i odpowiedzialnością użytkownika.
4) Poziomami działań: ostrzeżenie → mute → ban czasowy → ban stały.
5) Procesem zgłoszeń: jak zgłaszać, jakie info dodać, terminy.
6) Procesem odwołania: terminy, kryteria, decyzja końcowa.
7) Prywatnością: co udostępniamy, a czego nie w sprawach.
8) Makrami dla moderatorów (10) do ostrzeżeń/zamykania/banów z szacunkiem.
9) Stroną “wersja krótka” w 8 bulletach do onboardingu.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-004",
    title:
      "Polityka prywatności (jasne streszczenie) + teksty zgód i cookies",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Stwórz zrozumiałe streszczenie prywatności oraz teksty zgód do bannerów i formularzy.",
    prompt: `Typ biznesu: [ ]
Zbierane dane: [email, imię, płatności, analityka itd.]
Narzędzia: [GA, Meta Pixel, Stripe, CRM]
Regiony: [UE/USA/MX/LatAm]

Wygeneruj:
1) “Streszczenie prywatności” prostym językiem (max 350 słów).
2) Tabelę kategorii danych:
   - co zbieramy
   - po co
   - podstawa prawna (jeśli dotyczy)
   - retencja
3) Teksty zgód:
   - checkbox newsletter
   - checkbox regulamin
   - zgoda marketingowa
4) Copy do bannera cookies (3 wersje: krótka/średnia/długa).
5) FAQ prywatności (10).
6) Makra supportowe dla wniosków: dostęp, korekta, usunięcie (DSAR).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-005",
    title:
      "Polityka gwarancji i zwrotów (produkt fizyczny): terminy, stan, logistyka i wyjątki",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj zwroty produktów fizycznych: kryteria stanu, opakowania, wysyłki i zwroty pieniędzy.",
    prompt: `Produkt fizyczny: [ ]
Kraje dostawy: [ ]
Termin zwrotu: [ ]
Kto płaci za wysyłkę zwrotną: [klient/firma/to zależy]
Wymagany stan: [nowe/nieużywane/itd.]

Napisz politykę z:
1) Co można zwrócić i dlaczego (wady, zmiana zdania, rozmiar itd.).
2) Okna czasowe wg typu zwrotu.
3) Stan produktu i opakowanie (obiektywne kryteria).
4) Proces RMA: kroki, etykiety, adres, tracking.
5) Inspekcja i decyzja: zwrot/wymiana/kredyt.
6) Wyjątki (higiena, personalizacja, produkty łatwo psujące się).
7) Przykłady: 10 częstych przypadków i decyzja.
8) Makra supportowe: prośba o dowody, akceptacja, odmowa, “przypadek graniczny”.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-006",
    title: "Regulamin (streszczenie operacyjne) dla kursów cyfrowych",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Obejmuje licencje, dostęp, własność intelektualną, limity i zasady uczestnika.",
    prompt: `Kurs: [ ]
Dostęp: [dożywotni/12 miesięcy]
Materiały do pobrania: [tak/nie]
Dostęp do społeczności: [tak/nie]
Kraj: [ ]

Stwórz streszczenie operacyjne T&C z:
1) Licencją użytkowania (osobista/nieprzenoszalna) i limitami.
2) Zakazami: udostępnianie danych logowania, odsprzedaż, scraping.
3) Dostępem: co obejmuje, czego nie, zmiany treści.
4) Własnością intelektualną: znaki, materiały, nagrania.
5) Zachowaniem: zasady w społeczności, sankcje.
6) Płatnościami i zwrotami: jak są regulowane (bez sprzeczności).
7) Zastrzeżeniem odpowiedzialności (brak gwarancji wyników) prostym językiem.
8) Mini-FAQ (10) i makrami supportowymi (8).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-007",
    title:
      "Klauzula ograniczenia odpowiedzialności (wyjaśniona po ludzku) + wersja formalna",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Dwie wersje: prosta na stronę i formalna do Regulaminu.",
    prompt: `Biznes: [ ]
Ryzyka: [finanse/zdrowie/technologia/konsulting]
Jurysdykcja: [ ]

Napisz:
1) Wersję prostą (120–180 słów) wyjaśniającą:
   - co obejmujemy
   - czego nie obejmujemy
   - rozsądne limity
2) Wersję formalną (Regulamin) bardziej kompletną.
3) 6 przykładów interpretacji (case’y), żeby support rozumiał.
4) 8 fraz zakazanych w supporcie, które mogą “przyznać winę” + bezpieczne alternatywy.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-008",
    title:
      "Polityka antyfraudowa i anty-nadużyciowa: zwroty, wiele kont, chargebacki, niewłaściwe użycie",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj sygnały, progi, działania i komunikację z klientem bez oskarżeń.",
    prompt: `Produkt: [ ]
Znane sygnały nadużyć: [ ]
Narzędzia: [Stripe Radar, logi itd.]

Stwórz:
1) Definicje: fraud vs nadużycie vs błąd.
2) Sygnały i progi (lista 20) z poziomem ryzyka.
3) Działania wg ryzyka:
   - prośba o weryfikację
   - ograniczenie dostępu
   - zawieszenie
   - odmowa zwrotu
4) Szablony komunikacji:
   - prośba o weryfikację (bez oskarżeń)
   - zawieszenie tymczasowe
   - decyzja końcowa
5) Wewnętrzną checklistę dla agentów (12).
6) Rejestr wewnętrzny (pola/tagi) i eskalację do legal.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-009",
    title:
      "Przewodnik ‘legal-friendly’ dla supportu: jak przepraszać i jak NIE (unikać przyznań)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Bezpieczne frazy, struktura przeprosin i czerwone linie dla agentów.",
    prompt: `Typ biznesu: [ ]
Ryzyko: [niskie/wysokie]
Kanały: [czat/email]

Stwórz wewnętrzny przewodnik:
1) Zasady bezpiecznej komunikacji (7).
2) Przeprosiny w 5 krokach (bez przyznania odpowiedzialności prawnej).
3) 25 bezpiecznych fraz (wg sytuacji).
4) 20 ryzykownych fraz + rekomendowane zamienniki.
5) Kiedy eskalować do legal (macierz decyzji).
6) Szablon notatki wewnętrznej, gdy jest ryzyko prawne.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-010",
    title:
      "Polityka zmian cen: komunikacja, grandfathering, powiadomienia i wyjątki",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj jak ogłaszasz zmiany cen i jakie prawa ma klient.",
    prompt: `Produkt: [SaaS/subskrypcja]
Częstotliwość zmian: [ ]
Grandfathering: [tak/nie/segmenty]
Wyprzedzenie powiadomienia: [dni]
Kraj: [ ]

Napisz politykę z:
1) Zasadą: dlaczego ceny się zmieniają (ludzkim językiem).
2) Powiadomieniem: kanały, terminy, potwierdzenie.
3) Co z istniejącymi planami (migracja/grandfathering).
4) Opcje klienta: downgrade/anuluj/odnów rocznie wcześniej.
5) Przypadki specjalne: promocje, kupony, enterprise.
6) FAQ (12).
7) Makra supportowe (10) na twarde obiekcje.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-011",
    title:
      "Polityka własności intelektualnej: licencja, dozwolone i zabronione użycia (cyfrowe)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zapobiega odsprzedaży i wyciekom: licencja osobista, limity, sankcje i dowody.",
    prompt: `Typ treści: [kurs/szablony/prompty/wideo]
Ryzyka: [piractwo/odsprzedaż]
Dostęp: [ ]

Napisz:
1) Licencję (osobista, nieprzenoszalna) z przykładami.
2) Dozwolone użycia (5–8) i zabronione (10–15).
3) Działania przy naruszeniu:
   - ostrzeżenia
   - cofnięcie dostępu
   - kroki prawne (jeśli dotyczy)
4) Proces zgłoszenia wycieku.
5) Makra supportowe:
   - ostrzeżenie
   - zamknięcie za naruszenie
   - prośba o usunięcie`,
    thumbnail: "",
  },
  {
    id: "sop-pol-012",
    title:
      "Polityka poufności (NDA light) dla konsultingu/usług",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Prosty szablon NDA i wyjaśnienie dla klientów nietechnicznych/prawnicy-free.",
    prompt: `Usługa: [konsulting/agencja/rozwój]
Informacje wrażliwe: [ ]
Czas trwania: [ ]
Jurysdykcja: [ ]

Stwórz:
1) NDA light (streszczenie umowne) z:
   - definicjami
   - obowiązkami
   - wyjątkami
   - czasem trwania
   - zwrotem/usunięciem danych
2) Wersję prostą dla klienta (120–180 słów).
3) Wewnętrzną checklistę przed udostępnieniem dokumentów.
4) Szablon emaila do wysłania NDA i prośby o podpis.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-013",
    title:
      "Polityka danych i retencji: jak długo przechowujemy, po co i jak usuwamy",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj retencję wg kategorii i wewnętrzny proces usuwania.",
    prompt: `Dane: [konta, płatności, tickety, analityka]
Narzędzia: [CRM, Helpdesk, Stripe]
Region: [ ]

Wygeneruj:
1) Macierz retencji wg typu danych:
   - okres
   - powód
   - system, gdzie to jest
2) Wewnętrzny proces usuwania/anonymizacji:
   - kroki
   - odpowiedzialni
   - weryfikacja
3) Komunikację do użytkownika:
   - szablon “potwierdzenie usunięcia”
4) Proste FAQ (10) dla supportu.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-014",
    title:
      "Polityka nieletnich: dostęp, zgoda, ograniczenia i wsparcie",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Jasne zasady dla nieletnich (rejestracja, zakupy, społeczność).",
    prompt: `Typ produktu: [ ]
Rynek: [ ]
Docelowy minimalny wiek: [ ]

Napisz:
1) Zasady dostępu (minimalny wiek i weryfikacja, jeśli dotyczy).
2) Zgoda rodzica/opiekuna (jak i kiedy).
3) Ograniczenia w społeczności/treściach.
4) Proces supportowy, gdy wykryjemy nieletniego:
   - wstrzymanie konta
   - prośba o potwierdzenie
   - zwrot, jeśli należy się
5) Makra supportowe (8) w uprzejmym tonie.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-015",
    title:
      "Polityka cookies i trackingu: wersja prawna + wersja ludzka + preferencje",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Teksty do bannera cookies, centrum preferencji i dla supportu.",
    prompt: `Narzędzia: [GA, Meta, Hotjar itd.]
Kraje: [UE/LatAm]
Cookies: [niezbędne/analityczne/marketing]

Wygeneruj:
1) Wyjaśnienie ludzkie (200–300 słów).
2) Sekcję prawną bardziej kompletną do polityki.
3) Teksty do:
   - bannera (akceptuj/odrzuć/personalizuj)
   - centrum preferencji (opisy kategorii)
4) Odpowiedzi supportu (6) na częste pytania.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-016",
    title:
      "Szablony DSAR: dostęp, przenoszenie, korekta i usunięcie danych (krok po kroku)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Procedura wniosków prywatności: tożsamość, terminy, realizacja i potwierdzenie.",
    prompt: `Region: [ ]
Helpdesk/CRM: [ ]
Docelowy czas: [ ]

Stwórz:
1) Wewnętrzny proces DSAR:
   - weryfikacja tożsamości (dopuszczalne metody)
   - wyszukiwanie w systemach (checklista)
   - eksport/przenoszenie
   - korekta
   - usunięcie/anonymizacja
2) Szablony do użytkownika:
   - potwierdzenie przyjęcia
   - prośba o weryfikację
   - przekazanie danych
   - potwierdzenie usunięcia
3) Macierz wyjątków (kiedy nie da się usunąć wszystkiego) prostym językiem.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-017",
    title:
      "Polityka treści generowanych przez użytkowników (UGC): licencje, moderacja i usuwanie",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj licencję UGC, prawa użytkownika i proces moderacji/usuwania treści.",
    prompt: `Platforma: [społeczność/aplikacja]
Typ UGC: [posty, komentarze, pliki]
Moderacja: [ ]

Napisz:
1) Prawa użytkownika (własność) vs licencja dla platformy (użycie).
2) Treści zabronione (kategorie).
3) Proces moderacji i usuwania:
   - zgłoszenia
   - terminy
   - odwołanie
4) Szablony:
   - info o usunięciu
   - ostrzeżenie (warning)
   - potwierdzenie odwołania`,
    thumbnail: "",
  },
  {
    id: "sop-pol-018",
    title:
      "Polityka gwarancji wyników (zastrzeżenie): bez bajek, jasno i uczciwie",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Uczciwe disclaimery do kursów/konsultingu bez agresywnego tonu.",
    prompt: `Oferta: [kurs/konsulting]
Obecne obietnice marketingowe: [ ]
Ryzyko: [wysokie/niskie]

Wygeneruj:
1) “Ludzkie” zastrzeżenie (120–180 słów), które:
   - nie obiecuje wyników
   - tłumaczy zmienne
   - jest empatyczne
2) Wersję formalną do Regulaminu.
3) 8 przykładów “co mówimy” w marketingu vs “czego nie mówimy”.
4) Makro supportowe dla klientów, którzy żądają wyniku/zwrotu z powodu oczekiwań.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-019",
    title:
      "Polityka pożyczania/współdzielenia dostępu: wykrywanie, działania i komunikacja",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj użytek osobisty i jak reagować na współdzielenie bez kłótni.",
    prompt: `Produkt: [kurs/SaaS]
Zasada: [1 użytkownik / X urządzeń]
Sygnały: [IP, sesje itd.]

Stwórz:
1) Jasną zasadę (wersja dla użytkownika).
2) Formalną zasadę (Regulamin).
3) Proces egzekwowania:
   - ostrzeżenie
   - ograniczenie
   - zawieszenie
4) Szablony supportowe:
   - pierwsze ostrzeżenie
   - drugie ostrzeżenie
   - działanie końcowe
5) Opcje dla klienta (upgrade, plan zespołowy itd.).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-020",
    title:
      "Polityka promocji i kuponów: warunki, ważność, łączenie i spory",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Koniec wojen o kupony: jasne zasady i gotowe odpowiedzi supportu.",
    prompt: `Typowe promocje: [ ]
Pożądane zasady: [nie łączy się, 1 na konto itd.]

Napisz:
1) Warunki użycia kuponów/promocji.
2) Ważność i dostępność.
3) Typowe problemy i jak rozwiązać:
   - kupon nie działa
   - kupon wygasł
   - kupon już użyty
   - cena się zmieniła
4) Makra supportowe (10) do każdego przypadku z alternatywami.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-021",
    title:
      "Polityka windykacji płatności: zaległości, zawieszenia, ponowienia i reaktywacja",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj proces nieudanej płatności i zawieszeń bez zaskakiwania użytkownika.",
    prompt: `Produkt: [SaaS/subskrypcja]
Ponowienia: [ ]
Zawieszenie: [dzień X]
Powiadomienia: [email/in-app]

Wygeneruj:
1) Politykę: harmonogram (dzień 0, 1, 3, 7…).
2) Teksty powiadomień wg etapu (4–6 wiadomości).
3) Co się dzieje z danymi/dostępem w trakcie zawieszenia.
4) Proces reaktywacji.
5) Makra supportowe i obiekcje (10).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-022",
    title: "Polityka wsparcia (SLA): priorytety P1–P4, czasy i kanały",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Określa zakres wsparcia, priorytety i czasy, by uniknąć nierealnych oczekiwań.",
    prompt: `Kanały: [email/czat/WhatsApp]
Godziny pracy: [ ]
Zespół: [ ]
Klienci VIP: [tak/nie]

Napisz:
1) Zakres: co support obejmuje i czego nie.
2) Priorytety P1–P4 z jasnymi przykładami.
3) SLA wg priorytetu i planu.
4) Proces eskalacji.
5) Politykę awarii i utrzymania.
6) Publiczne podsumowanie (8 bulletów) + wewnętrzny przewodnik dla agentów.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-023",
    title:
      "Polityka dostępności (accessibility): zobowiązania, wsparcie i usprawnienia (wersja ludzka)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Realistyczne zobowiązanie: jak prosić o pomoc, jak obsługujemy zgłoszenia i terminy.",
    prompt: `Produkt: [www/app]
Odbiorcy: [ ]
Zasoby: [zespół/ograniczone]

Stwórz:
1) Deklarację dostępności (ludzką) z realistycznymi zobowiązaniami.
2) Kanał zgłaszania problemów + jakie info zbierać.
3) Wewnętrzny proces: ocena → poprawka → komunikacja.
4) FAQ (8) i makra supportowe (6).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-024",
    title:
      "Polityka wysyłek międzynarodowych: cło, podatki, czasy i odpowiedzialności",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Unikaj konfliktów: określ odpowiedzialność za cło i jak informować klienta.",
    prompt: `Kraje docelowe: [ ]
Kurier: [ ]
Incoterms (jeśli dotyczy): [ ]

Napisz:
1) Realistyczne czasy dostawy i możliwe odchylenia.
2) Cło i podatki: kto płaci i jak o tym informujemy.
3) Co jeśli paczka zostanie zatrzymana lub zwrócona.
4) Proces reklamacji u kuriera.
5) Makra supportowe (10) do typowych przypadków.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-025",
    title:
      "Polityka anty-spam i komunikacja: częstotliwość, wypisanie i preferencje",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Teksty do newslettera/marketingu: wypis, preferencje i obsługa skarg.",
    prompt: `Kanały: [email/WhatsApp/SMS]
Typ wiadomości: [marketing/operacyjne]
Preferencje: [tak/nie]

Stwórz:
1) Politykę komunikacji (ludzką) z:
   - co wysyłamy
   - jak często
   - jak się wypisać
2) Tekst do stopki emaili.
3) Makra supportowe (8) na:
   - “nie piszcie do mnie”
   - “wypisałem/am się, a nadal wysyłacie”
   - “nigdy się nie zapisałem/am”
4) Wewnętrzny proces supresji (checklista).`,
    thumbnail: "",
  },

  {
    id: "sop-pol-026",
    title:
      "Legalne szablony dla supportu: zaakceptowano/odrzucono/przypadek graniczny (ludzko + bezpiecznie)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Pakiet makr do spraw z ryzykiem prawnym: jasność bez przyznania winy.",
    prompt: `Temat: [zwrot/chargeback/naruszenie/prywatność]
Ton: [ ]

Stwórz pakiet:
1) Szablon “zaakceptowano” (2 wersje).
2) Szablon “odrzucono” z alternatywami (2 wersje).
3) Szablon “przypadek graniczny: prośba o info” (2 wersje).
4) 12 bezpiecznych fraz i 12 ryzykownych fraz do unikania.
5) Sekcję “notatka wewnętrzna” dla agentów: co rejestrować i jak.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-027",
    title:
      "Polityka sporów i rozwiązywania konfliktów: mediacja, arbitraż (jeśli dotyczy) i kontakt",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Jak prowadzić konflikty: eskalacja, kontakt formalny i uporządkowane kroki.",
    prompt: `Jurysdykcja: [ ]
Kanał prawny: [email]
Typ biznesu: [ ]

Napisz:
1) Formalny proces reklamacji (kroki).
2) Terminy odpowiedzi.
3) Jakie informacje są wymagane.
4) Jak dokumentować wewnętrznie.
5) Podsumowanie dla supportu (co mówić i czego nie mówić).
6) Szablony:
   - potwierdzenie odbioru
   - prośba o dodatkowe informacje
   - propozycja rozwiązania`,
    thumbnail: "",
  },
  {
    id: "sop-pol-028",
    title:
      "Polityka testów i triali: co obejmuje, limity, konwersja i zwroty",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj darmowe testy bez niespodzianek: limity i transparentna konwersja.",
    prompt: `Trial: [7/14/30 dni]
Wymaga karty: [tak/nie]
Limity: [funkcje/użycie]
Konwersja: [auto/ręczna]

Napisz:
1) Politykę trial (ludzką + jasną).
2) Teksty do checkout i email:
   - start trial
   - przypomnienie przed konwersją
   - potwierdzenie konwersji
3) Zwroty związane z trial.
4) FAQ (10) i makra supportowe (8).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-029",
    title:
      "Polityka zmian w usłudze: maintenance, zmiany funkcji i deprecations",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Jak komunikować zmiany: powiadomienia, alternatywy i support bez obietnic roadmapy.",
    prompt: `Produkt: [ ]
Typowe zmiany: [ ]
Kanały powiadomień: [email/in-app/status]

Stwórz:
1) Politykę zmian obejmującą:
   - planowane prace serwisowe
   - zmiany funkcji
   - usunięcia/deprecations
2) 3 wzorcowe komunikaty:
   - ogłoszenie
   - przypomnienie
   - domknięcie
3) FAQ (8) i makra (8) na obiekcje.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-030",
    title:
      "Polityka użycia AI i treści generowanych: odpowiedzialności i limity (prompty/kursy AI)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj odpowiedzialność za outputy AI, prawa i środki ostrożności.",
    prompt: `Produkt: [prompty/kurs AI/SaaS]
Wrażliwe use case’y: [zdrowie/finanse/prawo]
Jurysdykcja: [ ]

Napisz:
1) Zastrzeżenie dot. outputów (to nie jest porada profesjonalna).
2) Odpowiedzialność użytkownika: weryfikacja, zgodność, prawa autorskie.
3) Zakazy: użycie nielegalne, podszywanie się itd.
4) Dobre praktyki (10).
5) FAQ (10) i makra supportowe (8).`,
    thumbnail: "",
  },

  {
    id: "sop-pol-031",
    title:
      "Polityka usunięcia konta: dostęp, dane, rozliczenia i skutki po usunięciu",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Dobre domknięcie: co usuwamy, co zachowujemy i dlaczego (retencja).",
    prompt: `Produkt: [ ]
Region: [ ]
Systemy: [CRM/helpdesk/Stripe]

Stwórz:
1) Politykę usunięcia:
   - co usuwamy
   - co anonimizujemy
   - co zachowujemy i na jak długo (powód)
2) Proces dla użytkownika (kroki).
3) Szablony supportowe:
   - potwierdzenie przyjęcia
   - prośba o weryfikację
   - potwierdzenie finalne
4) FAQ (8).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-032",
    title:
      "Polityka backupów i odzyskiwania: limity, czasy i oczekiwania (SaaS)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Określ czy są backupy, jak długo i jakie przywrócenia są możliwe.",
    prompt: `Produkt SaaS: [ ]
Backupy: [tak/nie]
Retencja backupów: [ ]
Przywrócenie: [tak/nie/koszt]

Napisz:
1) Politykę backupów (jasną, bez obiecywania niemożliwego).
2) Co da się odzyskać, a czego nie.
3) Szacowane czasy i proces.
4) Makra supportowe (6) na prośby o restore.
5) Notatkę wewnętrzną: kiedy zatwierdzić restore i co rejestrować.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-033",
    title:
      "Polityka wsparcia integracji zewnętrznych: limity i odpowiedzialności",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Określ co wspierasz w Zapier/Meta/Google itd. i gdzie kończy się Twoja odpowiedzialność.",
    prompt: `Integracje: [lista]
Co wspieramy: [ ]
Czego nie wspieramy: [ ]

Stwórz:
1) Politykę integracji:
   - zakres (co tak)
   - poza zakresem (co nie)
2) Checklistę diagnozy przed eskalacją.
3) Makra supportowe:
   - “to wygląda na problem po stronie dostawcy”
   - “potrzebuję tych zrzutów”
   - “oto workaround”
4) FAQ (10).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-034",
    title:
      "Polityka eventów i warsztatów stacjonarnych: anulowanie, obecność i zwroty",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Jasne zasady eventów: zmiana uczestnika, no-show, siła wyższa.",
    prompt: `Event: [ ]
Data: [ ]
Pojemność: [ ]
Zwroty: [zasady]

Napisz:
1) Anulowanie przez klienta (okna i procenty, jeśli dotyczy).
2) Anulowanie przez organizatora (siła wyższa).
3) Przeniesienie biletu na inną osobę.
4) No-show i spóźnienia.
5) Zmiany terminu/miejsca.
6) Makra supportowe (10) do realnych przypadków.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-035",
    title:
      "Polityka afiliacji: warunki, wypłaty, fraud i zakończenie (streszczenie operacyjne)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Strukturuje zasady afiliacji: atrybucja, wypłaty, zwroty i nadużycia.",
    prompt: `Program afiliacyjny: [ ]
Prowizja: [ ]
Okno atrybucji: [ ]
Minimalna wypłata: [ ]
Narzędzie: [ ]

Stwórz:
1) Warunki operacyjne:
   - atrybucja
   - wypłaty
   - zwroty/chargebacki
   - fraud i auto-zakupy
   - zakończenie
2) FAQ dla afiliantów (12).
3) Makra supportowe (10) do sporów o prowizję.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-036",
    title:
      "Polityka wsparcia dla treści wrażliwych: zdrowie/finanse/prawo (limity i eskalacja)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Granice: bez porad profesjonalnych; wskazówki eskalacji i szablony.",
    prompt: `Temat wrażliwy: [zdrowie/finanse/prawo]
Produkt/kurs: [ ]
Rynki: [ ]

Stwórz:
1) Politykę ograniczeń (ludzką).
2) Wiadomości supportowe dla:
   - prośby o poradę profesjonalną
   - nalegań klienta
3) Kiedy eskalować lub odmówić.
4) Sugerowane zasoby alternatywne (niespecyficzne).
5) Notatkę wewnętrzną: bezpieczne i zakazane frazy.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-037",
    title:
      "Polityka treści i copyright: DMCA/takedowny (proces i szablony)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Proces roszczeń copyright: przyjęcie, weryfikacja, działanie i odwołanie.",
    prompt: `Platforma: [www/społeczność]
Kanał prawny: [email]
Kraj: [ ]

Wygeneruj:
1) Proces takedown:
   - co musi zawierać zgłoszenie
   - terminy
   - działania
2) Szablony:
   - potwierdzenie odbioru
   - prośba o brakujące informacje
   - potwierdzenie usunięcia
   - informacja do użytkownika, którego dotyczy
3) Proces kontr-zgłoszenia (jeśli dotyczy) w ujęciu ogólnym.
4) Wewnętrzną checklistę.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-038",
    title:
      "Polityka zwrotów za “produkt nieotrzymany”: kryteria, dochodzenie i decyzja",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Określ kiedy zwracasz, kiedy wysyłasz ponownie i jak prowadzisz sprawę u kuriera.",
    prompt: `Kurier: [ ]
Status: [dostarczone/w trakcie]
Dowód dostawy: [tak/nie]
Strefa ryzyka: [tak/nie]

Napisz:
1) Kryteria rozpoczęcia dochodzenia (terminy, dowody).
2) Co minimalnie zebrać od klienta.
3) Proces u kuriera (kroki).
4) Decyzje wg scenariuszy:
   - ponowna wysyłka
   - zwrot
   - oczekiwanie z update’em
5) Makra supportowe (10).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-039",
    title:
      "Polityka zwrotu przy błędzie klienta: duplikaty, zły plan, pomyłki",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zasady dla ludzkich pomyłek: jak rozwiązać bez otwierania furtki do nadużyć.",
    prompt: `Produkt: [ ]
Typowe przypadki: [duplikat/zły plan]
Okno “łaski”: [godziny/dni]

Stwórz:
1) Politykę “okna łaski” (jeśli dotyczy) z limitami.
2) Kryteria akceptacji:
   - czas od zakupu
   - użycie/konsumpcja
   - historia
3) Alternatywy: zmiana planu, kredyt, wsparcie.
4) Szablony supportowe (zaakceptowano/odrzucono/przypadek graniczny).
5) Wewnętrzną checklistę anty-nadużyciową.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-040",
    title:
      "Polityka zwrotów kursów: postęp, obejrzane moduły, pobrania i wyjątki",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Uczciwa polityka oparta o realną konsumpcję bez agresji.",
    prompt: `Kurs: [ ]
Platforma: [ ]
Da się mierzyć postęp: [tak/nie]
Materiały do pobrania: [tak/nie]

Napisz:
1) Kryteria wg konsumpcji:
   - % obejrzane
   - pobrania
   - czas od zakupu
2) Rozsądne wyjątki.
3) Proces wniosku.
4) Makra supportowe (12).
5) “Proste podsumowanie” do checkout.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-041",
    title:
      "Pakiet klauzul do checkout: regulamin, zwroty, subskrypcja, licencja (krótki copy)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Krótkie teksty do checkout, które zmniejszają spory i nieporozumienia.",
    prompt: `Produkt: [ ]
Model: [jednorazowo/subskrypcja]
Zwrot: [tak/nie/warunki]
Licencja: [osobista/nieprzenoszalna]

Wygeneruj krótkie copy do:
1) Checkbox “regulamin” (1–2 linie).
2) Box “zwroty” (1–2 linie) jasno.
3) Box “automatyczne odnowienie” (jeśli dotyczy) (1–2 linie).
4) Box “licencja/użycie” (1–2 linie).
5) Notka anti-chargeback (ludzka, niegrożąca).
6) 10 wariantów na element (A/B).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-042",
    title:
      "Wewnętrzna macierz eskalacji prawnej: jakie sprawy idą do legal i jak je dokumentować",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Przewodnik dla agentów: progi ryzyka, checklista i szablony wewnętrzne.",
    prompt: `Typ biznesu: [ ]
Ryzyka: [ ]

Stwórz:
1) Macierz eskalacji (logiczna tabela) z:
   - typem sprawy
   - poziomem ryzyka
   - natychmiastowym działaniem
   - kto decyduje
2) Checklistę dokumentacji (15 pól).
3) Szablon notatki wewnętrznej “legal risk”.
4) 10 bezpiecznych fraz dla supportu “w trakcie weryfikacji”.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-043",
    title:
      "Polityka nagrywania rozmów i zgód: teksty wg regionu i kanału",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Skrypty informacji o nagrywaniu, alternatywy i sposób rejestru zgody.",
    prompt: `Kanały: [telefon/zoom]
Region: [ ]
Cel: [jakość/bezpieczeństwo]

Wygeneruj:
1) Skrypt informacji o nagrywaniu (3 tony).
2) Co zrobić, jeśli klient nie wyraża zgody:
   - alternatywa (bez nagrania / email)
3) Jak rejestrować zgodę wewnętrznie (pola).
4) Tekst do polityki publicznej (ludzki).
5) FAQ (8) dla klientów.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-044",
    title:
      "Polityka współdzielonych dostępów w planach team: role, limity i odpowiedzialność",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj role, adminów, odpowiedzialność za użytkowników i bezpieczeństwo.",
    prompt: `Produkt: [SaaS]
Plan team: [tak/nie]
Role: [admin/członek/tylko podgląd]

Napisz:
1) Definicję ról i uprawnień.
2) Odpowiedzialność admina za dostępy.
3) Limity urządzeń/sesji.
4) Proces dodawania/usuwania użytkowników.
5) Makra supportowe (10) do konfliktów ról i dostępów.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-045",
    title:
      "Polityka “uczciwego użycia” (fair use) dla planów nielimitowanych: rozsądne limity i egzekwowanie",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Chroń infrastrukturę bez ściemy: zdefiniuj “nielimitowane” jako fair use.",
    prompt: `Plan “nielimitowany”: [ ]
Krytyczne zasoby: [API/pobrania/zapytania]
Sygnały nadużyć: [ ]

Stwórz:
1) Definicję fair use (ludzką) i formalną.
2) Przykłady: 10 przypadków “tak” i 10 przypadków “nie”.
3) Stopniowany proces egzekwowania.
4) Szablony supportowe (8) bez oskarżeń.
5) Alternatywę: plan enterprise/upgrade.`,
    thumbnail: "",
  },

  {
    id: "sop-pol-046",
    title:
      "Polityka zwrotów przy uszkodzeniu w transporcie: dowody, terminy i decyzje",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj jakie zdjęcia zbierać, terminy i decyzje (wysyłka/zwrot).",
    prompt: `Produkt fizyczny: [ ]
Kurier: [ ]
Okno zgłoszenia: [ ]

Napisz:
1) Termin zgłoszenia szkody (i dlaczego).
2) Minimalne dowody:
   - zdjęcia paczki
   - etykiety
   - produktu
3) Proces:
   - weryfikacja
   - decyzja
   - logistyka
4) Szablony supportowe (10).
5) Wewnętrzna checklista antyfraudowa.`,
    thumbnail: "",
  },
  {
    id: "sop-pol-047",
    title:
      "Polityka zmiany adresu po zakupie: kryteria i limity",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Unikaj strat: kiedy można zmienić adres i jakie sprawdzenia wykonać.",
    prompt: `Typ: [fizyczne]
Status zamówienia: [w przygotowaniu/wysłane]
Ryzyko fraud: [wysokie/niskie]

Stwórz:
1) Politykę: kiedy można, a kiedy nie można zmienić adresu.
2) Weryfikację tożsamości (dopuszczalne metody).
3) Procedurę wewnętrzną.
4) Szablony supportowe (8) dla:
   - akceptacja
   - odmowa
   - przypadek graniczny`,
    thumbnail: "",
  },
  {
    id: "sop-pol-048",
    title:
      "Polityka prezentów (gift purchases): dostęp, transfery, zwroty i spory",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zasady zakupów prezentowych bez chaosu: kto jest właścicielem, jak przenieść i jak wspierać.",
    prompt: `Produkt: [cyfrowy/fizyczny]
Prezent: [tak/nie]
Można przenieść: [tak/nie]

Napisz:
1) Kto jest właścicielem zakupu i dostępu.
2) Jak prezent jest dostarczany i aktywowany.
3) Zwroty: kto może wnioskować i kiedy.
4) 8 częstych sporów i rozwiązania.
5) Makra supportowe (10).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-049",
    title:
      "Polityka komunikowania zmian prawnych/polityk: powiadomienia, akceptacja i rejestr",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Zdefiniuj jak informujesz o aktualizacjach i jak rejestrujesz akceptację.",
    prompt: `Produkt: [ ]
Kanały powiadomień: [email/in-app]
Akceptacja: [clickwrap/browsewrap]

Stwórz:
1) Politykę aktualizacji:
   - kiedy powiadamiamy
   - kiedy wchodzi w życie
2) Teksty:
   - email o aktualizacji
   - banner in-app
   - modal akceptacji
3) Proces wewnętrzny:
   - wersjonowanie
   - rejestr akceptacji
4) FAQ (8) i makra supportowe (6).`,
    thumbnail: "",
  },
  {
    id: "sop-pol-050",
    title:
      "Zestaw ‘streszczenie dla supportu’: zamień długie polityki w reguły operacyjne (cheat sheet)",
    area: "Obsługa Klienta & SOPy",
    category: "Polityki & Prawo",
    summary:
      "Przekształca polityki w manual operacyjny dla agentów: szybkie decyzje i makra.",
    prompt: `Wklej tu swoje polityki (albo streszcz): [ ]
Cel: szybki i spójny support

Wygeneruj:
1) Cheat sheet na 1 stronę:
   - reguły “jeśli X → robimy Y”
   - wyjątki
   - eskalacje
2) Drzewo decyzyjne:
   - zwroty
   - anulowania
   - nadużycia/fraud
3) 25 makr supportowych: akceptacja/odmowa/przypadek graniczny/eskalacja.
4) Lista “czerwonych linii” (10) i bezpiecznych fraz (10).
5) Checklista audytu: jak upewnić się, że agenci trzymają się polityk.`,
    thumbnail: "",
  },
];
