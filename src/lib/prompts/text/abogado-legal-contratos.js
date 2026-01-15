// src/lib/prompts/text/abogado-legal-contratos.js

export const textPromptsAbogadoLegalContratos = [
  {
    id: "legalcontratos-001",
    title: "Główna lista kontrolna do sporządzenia umowy (dowolna usługa/produkt)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Tworzy kompletną listę kontrolną klauzul, załączników i danych potrzebnych do sporządzenia solidnej umowy.",
    prompt: `Działaj jak prawnik korporacyjny/kontraktowy. Potrzebuję głównej listy kontrolnej do przygotowania umowy.

Dane wejściowe:
- Rodzaj umowy (usługi, SaaS, konsulting, sprzedaż, licencja itp.).
- Jurysdykcja/kraj (jeśli dotyczy).
- Strony (firma/osoba) i role.
- Zakres usługi/rezultatu (deliverable).
- Cena, sposób płatności, podatki.
- Czas trwania, odnowienia, rozwiązanie.
- Główne ryzyka biznesowe (chargebacki, IP, dane, opóźnienia).
- Poziom formalności (prosty / enterprise).

Wygeneruj:
1) Dane, które muszę zebrać przed sporządzeniem (20+).
2) Rekomendowany spis treści umowy (sekcje).
3) Klauzule niezbędne (wyjaśnij cel + ryzyka, jeśli ich zabraknie).
4) Klauzule opcjonalne w zależności od scenariusza (w punktach).
5) Typowe załączniki (SOW, SLA, DPA, NDA itp.) i kiedy ich używać.
6) Częste red flags/niejednoznaczności i jak ich unikać.
7) Lista „decyzji biznesowych” (co negocjować koniecznie).

Dostarcz po hiszpańsku, styl praktyczny. Nie wymyślaj konkretnych przepisów; oznacz „zależy od jurysdykcji”.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-002",
    title: "Umowa o świadczenie usług (pełny szkic)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Generuje kompletny szkic ze standardowymi klauzulami gotowymi do skopiowania i dostosowania.",
    prompt: `Działaj jak prawnik. Sporządź SZKIC umowy o świadczenie usług.

Dane wejściowe:
- Strony (pełna nazwa prawna, adres, NIP/ID jeśli dotyczy).
- Dokładna usługa i rezultaty.
- Daty, kamienie milowe, poprawki.
- Wynagrodzenie (kwota, waluta, podatki) i sposób płatności.
- Polityka zmian (scope creep) i dodatków.
- Poufność (tak/nie).
- Własność intelektualna (kto zatrzymuje co).
- Odpowiedzialność/ograniczenie (pożądany poziom).
- Jurysdykcja i prawo właściwe (jeśli znane).

Wygeneruj:
Dokument z: definicjami, przedmiotem, zakresem, obowiązkami, płatnościami, zmianami, własnością intelektualną, poufnością, ochroną danych (jeśli dotyczy), gwarancjami i wyłączeniami (disclaimers), ograniczeniem odpowiedzialności, rozwiązaniem, siłą wyższą, powiadomieniami, cesją, całością umowy, podpisami.

Dodaj pola [ZASTĄP] tam, gdzie brakuje danych. Zachowaj profesjonalny ton prawniczy (bez wymyślania artykułów prawa).`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-003",
    title: "Audyt umowy: ryzyka, stronniczości i punkty do negocjacji",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Analizuje wklejoną umowę i wykrywa ryzyka, klauzule niekorzystne oraz konkretne usprawnienia.",
    prompt: `Działaj jak prawnik. Wkleję umowę i chcę audyt.

Dane wejściowe:
- Tekst umowy.
- Moja rola (dostawca/klient).
- Co mnie martwi (płatność, IP, dane, rozwiązanie, odpowiedzialność).
- Jurysdykcja (jeśli znana).

Wygeneruj:
1) Streszczenie wykonawcze w 5 punktach.
2) Krytyczne ryzyka (top 10) z oceną: wysokie/średnie/niskie oraz dlaczego.
3) Klauzule do renegocjacji z propozycjami alternatywnego brzmienia.
4) Niejednoznaczności i luki (czego brakuje).
5) Kluczowe pytania do drugiej strony.
Nie udzielaj ostatecznej porady prawnej; skup się na najlepszych praktykach i ryzykach.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-004",
    title: "Własność intelektualna (IP): 6 wariantów gotowych do skopiowania",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Generuje 6 opcji klauzuli IP (przeniesienie, licencje, hybrydowa itd.).",
    prompt: `Działaj jak prawnik. Potrzebuję klauzul Własności Intelektualnej gotowych do skopiowania.

Dane wejściowe:
- Rodzaj pracy (oprogramowanie, design, treści, kurs, konsulting).
- Kto płaci (klient) i kto tworzy (dostawca).
- Materiały wcześniej istniejące (tak/nie).
- Czy dozwolone jest ponowne wykorzystanie (tak/nie).
- Czy są sublicencje/strony trzecie (tak/nie).

Wygeneruj 6 wariantów:
A) Pełne przeniesienie na klienta.
B) Licencja wyłączna.
C) Licencja niewyłączna.
D) Hybrydowa (core dostawcy + rezultat klienta).
E) Szablony dostawcy + personalizacja.
F) Współwłasność IP (co-owned) z jasnymi zasadami.

Dla każdego wariantu:
- Tekst klauzuli.
- Plusy/minusy dla dostawcy i klienta.
- Typowe ryzyka i sposoby ograniczenia.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-005",
    title: "Klauzule płatności + zwłoka + zwroty (low-ticket / kursy)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Porządkuje warunki płatności, brak zwrotu, chargebacki i spory dla produktów cyfrowych.",
    prompt: `Działaj jak prawnik skoncentrowany na produktach cyfrowych. Sporządź klauzule płatności i zwrotów.

Dane wejściowe:
- Produkt (kurs, członkostwo, szablony, SaaS).
- Cena i model (jednorazowo / subskrypcja / raty).
- Polityka zwrotów (tak/nie, termin).
- Ryzyko chargebacków (wysokie/średnie/niskie).
- Dostawa (natychmiastowa, modułami, dostęp czasowy).

Wygeneruj:
1) Klauzulę ceny/płatności/podatków (bez wymyślania stawek).
2) Zwłoka/odsetki (oznacz „zgodnie z prawem lokalnym”).
3) Jasną politykę zwrotów (z wyjątkami).
4) Procedurę anty-chargeback (support przed sporem).
5) Zawieszenie/rozwiązanie za brak płatności.
6) Krótką wersję prostym językiem do T&C.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-006",
    title: "Ograniczenie odpowiedzialności: 5 poziomów (lite → enterprise)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Tworzy wersje ograniczenia odpowiedzialności w zależności od ryzyka i wielkości transakcji.",
    prompt: `Działaj jak prawnik. Potrzebuję klauzul ograniczenia odpowiedzialności.

Dane wejściowe:
- Rola (klient/dostawca).
- Obawiany rodzaj szkody (dane, reputacja, utracone korzyści).
- Wartość umowy (low/mid/high).
- Czy jest ubezpieczenie (tak/nie).
- Czy to B2C czy B2B.

Wygeneruj 5 poziomów:
1) Łagodny (wyłączenie szkód pośrednich).
2) Umiarkowany (limit do kwoty zapłaconej w X miesiącach).
3) Mocny (niski limit + szerokie wyłączenia).
4) Enterprise (limit + carve-outs: oszustwo, umyślność, IP, dane).
5) B2C produkt cyfrowy (jasny i rozsądny język).

Uwzględnij: tekst + co chroni + ryzyka + wskazówki negocjacyjne.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-007",
    title: "Rozwiązanie umowy: przyczyny, wypowiedzenie, skutki i klauzule przetrwania",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Projektuje zrównoważone rozwiązanie umowy, ze skutkami, zwrotem materiałów i płatnościami zaległymi.",
    prompt: `Działaj jak prawnik. Sporządź kompletną sekcję rozwiązania umowy.

Dane wejściowe:
- Czas trwania (określony/nieokreślony).
- Pożądany okres wypowiedzenia (dni).
- Rezultaty/kamienie milowe (tak/nie).
- Poufność/IP/dane (tak/nie).
- Kara za anulowanie (tak/nie).

Wygeneruj:
1) Rozwiązanie dla wygody (z wypowiedzeniem).
2) Rozwiązanie za naruszenie (okres naprawczy).
3) Natychmiastowe rozwiązanie (poważne przesłanki).
4) Skutki rozwiązania (płatności, rezultaty, dostępy).
5) Klauzule, które przetrwają (poufność, IP, ograniczenie itd.).`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-008",
    title: "Umowa SaaS: struktura + kluczowe klauzule (SLA, bezpieczeństwo, wsparcie)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Szablon struktury i kluczowych zapisów dla SaaS z naciskiem na typowe ryzyka.",
    prompt: `Działaj jak prawnik SaaS. Zaprojektuj umowę SaaS.

Dane wejściowe:
- Produkt SaaS i funkcja.
- Plany i ceny.
- Przetwarzane dane (osobowe/wrażliwe/nie).
- Docelowy uptime.
- Kanały wsparcia.
- Integracje stron trzecich.

Wygeneruj:
1) Spis treści (Master Agreement + załączniki).
2) Licencja/akceptowalne użycie/konta.
3) Bezpieczeństwo/kopie zapasowe/wsparcie.
4) SLA (metryki, kredyty, wyłączenia).
5) DPA (role, podprzetwarzający, zgłoszenie naruszenia).
6) Odnowienie/anulowanie + eksport danych.
Nie wymyślaj zgodności prawnej; zostaw pola [ZASTĄP].`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-009",
    title: "NDA (jednostronne lub wzajemne) + podsumowanie dla nieprawników",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Sporządza pełne NDA z definicjami, wyjątkami, czasem trwania i środkami ochrony.",
    prompt: `Działaj jak prawnik. Sporządź NDA.

Dane wejściowe:
- Typ (jednostronne/wzajemne).
- Cel ujawnienia.
- Czas trwania NDA i obowiązku.
- Jurysdykcja.
- Rodzaj informacji (techniczna, handlowa, kod, tajemnice).

Wygeneruj:
- Pełne NDA z: definicjami, wyłączeniami, obowiązkami, należytą starannością, brakiem licencji, zwrotem/zniszczeniem, czasem trwania, środkami ochrony, zakazem pozyskiwania (opcjonalnie), prawem właściwym, podpisami.
- Wersję „podsumowanie w 8 punktach” prostym językiem.
Dodaj pola [ZASTĄP].`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-010",
    title: "Zakaz konkurencji / zakaz pozyskiwania (rozsądny i możliwy do obrony)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Generuje rozsądne warianty (szczególnie zakaz pozyskiwania), minimalizując ryzyko nieważności.",
    prompt: `Działaj jak prawnik. Potrzebuję klauzul zakazu konkurencji / zakazu pozyskiwania.

Dane wejściowe:
- Relacja (etat/kontraktor/dostawca).
- Branża/działalność.
- Terytorium (jeśli dotyczy).
- Pożądany okres.
- Chronione interesy (klienci, pracownicy, tajemnice).

Wygeneruj:
1) Wersję rekomendowaną: ZAKAZ POZYSKIWANIA klientów i pracowników.
2) Łagodną wersję zakazu konkurencji (jeśli ma sens) z rozsądnymi limitami.
3) Ryzyka wykonalności/enforceability (bez cytowania przepisów).
4) Alternatywy: wzmocniona poufność, zakaz użycia, zakaz przekierowania.
5) Checklist do dostosowania do jurysdykcji.`,
    thumbnail: "",
  },

  // --- +10 NOWYCH (do 20) ---

  {
    id: "legalcontratos-011",
    title: "Master Service Agreement (MSA) + Statement of Work (SOW)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Strukturyzuje wielokrotnego użytku MSA i SOW dla każdego projektu, by uniknąć scope creep i sporów.",
    prompt: `Działaj jak prawnik dla usług B2B. Zaprojektuj schemat MSA + SOW.

Dane wejściowe:
- Rodzaj usługi.
- Częstotliwość projektów (jeden / cykliczne).
- Ryzyka (opóźnienia, zależności po stronie klienta, IP, podwykonawcy).
- Model płatności (godzinowo / ryczałt / kamienie milowe).
- Jurysdykcja (jeśli znana).

Wygeneruj:
1) Co powinno być w MSA (warunki ogólne do wielokrotnego użycia).
2) Co powinno być w SOW (zakres, rezultaty, daty, akceptacja).
3) Szablon SOW z polami [ZASTĄP].
4) Klauzulę zmian (change requests) i kontrolę zakresu.
5) Proces akceptacji/odrzucenia rezultatów.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-012",
    title: "Umowa afiliacyjna (prowizje, atrybucja, nadużycia, wypłaty)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Tworzy warunki dla afiliantów z jasnymi zasadami, aby ograniczyć nadużycia i spory o prowizje.",
    prompt: `Działaj jak prawnik. Sporządź umowę/warunki dla programu afiliacyjnego.

Dane wejściowe:
- Produkt (kurs, SaaS, fizyczny).
- Prowizja (% lub kwota), cookies/atrybucja.
- Okres wypłat (tygodniowo/miesięcznie), minimalny próg.
- Polityka zwrotów/chargebacków.
- Dozwolone kanały (ads, email, kupony, brand bidding).
- Zakazy (spam, wprowadzające w błąd twierdzenia, zachęty).

Wygeneruj:
1) Kluczowe definicje.
2) Zasady atrybucji i kwalifikowalności prowizji.
3) Nadużycia i zachowania zakazane (z przykładami).
4) Wypłaty: harmonogram, wstrzymania, korekty o zwroty.
5) Rozwiązanie i skutki (utrata prowizji z nadużyć).
6) Szablon gotowy do wklejenia do T&C.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-013",
    title: "Umowa licencyjna na treści (szablony, prompty, zasoby)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Definiuje licencję na korzystanie z treści cyfrowych bez przenoszenia IP: limity, sublicencje, redystrybucja.",
    prompt: `Działaj jak prawnik od własności intelektualnej. Sporządź umowę licencyjną na treści cyfrowe.

Dane wejściowe:
- Rodzaj treści (prompty, szablony, PDF-y, wideo, obrazy).
- Dozwolone użycie (osobiste, komercyjne, wewnętrzne, odsprzedaż).
- Czas trwania (wieczysta/czasowa).
- Terytorium (globalne/lokalne).
- Czy dopuszcza sublicencję (tak/nie).
- Zakazy (redystrybucja, scraping, udostępnianie konta).

Wygeneruj:
1) Udzieloną licencję (dokładny zakres).
2) Ograniczenia i zakazane użycia.
3) Atrybucję (jeśli dotyczy) i znaki towarowe.
4) Rozwiązanie za nadużycia + środki ochrony.
5) Tekst „prostym językiem” do pokazania w checkout.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-014",
    title: "Regulamin (Terms of Service) dla strony/aplikacji",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Zarys + szkic TOS dla platformy kursowej/SaaS z kontami, limitami i anulacjami.",
    prompt: `Działaj jak prawnik. Stwórz Regulamin (TOS) dla strony/aplikacji.

Dane wejściowe:
- Typ (kurs, członkostwo, SaaS).
- Kraj/jurysdykcja.
- Polityka zwrotów/anulowania.
- Zachowania zakazane (udostępnianie konta, scraping, odsprzedaż).
- Treści użytkowników (jeśli są).
- Płatności (Stripe, PayPal) i chargebacki.
- Pożądane ograniczenie odpowiedzialności.

Wygeneruj:
1) Spis treści i sekcje.
2) Pełny szkic z [ZASTĄP], gdy brakuje danych.
3) Szczegółową sekcję „Akceptowalne użycie”.
4) Jasną sekcję płatności/zwrotów/anulowania.
5) Krótką wersję (podsumowanie) na stronę checkout.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-015",
    title: "Klauzula odszkodowawcza (indemnity): 4 warianty",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Odszkodowanie za IP, niewłaściwe użycie, roszczenia osób trzecich oraz rozsądne limity z procedurą obrony.",
    prompt: `Działaj jak prawnik. Wygeneruj klauzule odszkodowawcze w praktycznym ujęciu.

Dane wejściowe:
- Rola (dostawca/klient).
- Główne ryzyko: IP, dane, roszczenia osób trzecich, naruszenie.
- Wartość umowy (low/mid/high).
- Czy są ubezpieczenia (tak/nie).

Wygeneruj 4 warianty:
A) Odszkodowanie tylko za naruszenie IP (dostawca odszkodowuje).
B) Wzajemne za naruszenie i roszczenia osób trzecich.
C) Mocne dla klienta (szerokie) + jak je ograniczyć.
D) Dla B2C cyfrowego (rozsądne + proste).

Uwzględnij:
- Tekst klauzuli.
- Procedurę: powiadomienie, kontrola obrony, współpraca, ugoda.
- Ryzyka i wskazówki negocjacyjne.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-016",
    title: "Siła wyższa + kontyngencje operacyjne (w tym AI/strony trzecie)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Sporządza nowoczesną klauzulę siły wyższej (dostawcy chmury, awarie, blokady platform) oraz skutki dla płatności/terminów.",
    prompt: `Działaj jak prawnik. Sporządź nowoczesną klauzulę siły wyższej.

Dane wejściowe:
- Rodzaj usługi lub produktu.
- Zależności (cloud, API, bramki płatnicze, platformy).
- Czy są krytyczne terminy.
- Co z płatnościami podczas kontyngencji.

Wygeneruj:
1) Definicję siły wyższej z nowoczesnymi przykładami (bez przesady).
2) Obowiązek minimalizacji skutków i powiadomienia.
3) Skutki: zawieszenie obowiązków, wydłużenie terminów.
4) Rozwiązanie, jeśli trwa zbyt długo (X dni), wraz ze skutkami.
5) Zasady płatności/opłat podczas zawieszenia.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-017",
    title: "Klauzula akceptacji rezultatów (QA, poprawki, kryteria)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Zapobiega „nigdy nie jest gotowe” dzięki kryteriom akceptacji, oknom na weryfikację i milczącej akceptacji.",
    prompt: `Działaj jak prawnik. Potrzebuję sekcji akceptacji rezultatów.

Dane wejściowe:
- Rodzaj rezultatu (design, dev, treści, kurs).
- Liczba rund poprawek.
- Czas na weryfikację (dni).
- Co jest „wadą” vs „zmianą zakresu”.

Wygeneruj:
1) Definicje (rezultat, wada, zmiana).
2) Proces: dostarczenie → weryfikacja → feedback → poprawki.
3) Milcząca akceptacja, jeśli brak odpowiedzi w X dni.
4) Limit poprawek + koszt dodatków.
5) Co się dzieje, jeśli klient nie współpracuje (zależności).`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-018",
    title: "Uproszczony aneks ochrony danych (DPA) dla dostawców",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Tworzy aneks przetwarzania danych bez wymyślania zgodności: role, podprzetwarzający, naruszenia.",
    prompt: `Działaj jak prawnik. Sporządź uproszczony DPA (Data Processing Addendum).

Dane wejściowe:
- Rodzaj danych (osobowe/wrażliwe/nie).
- Role (administrator/podmiot przetwarzający lub równoważne).
- Podprzetwarzający (tak/nie, lista jeśli jest).
- Ogólne środki bezpieczeństwa.
- Okres retencji i usuwania.

Wygeneruj:
1) Przedmiot i zakres przetwarzania.
2) Role i obowiązki (bez cytowania konkretnych przepisów).
3) Podprzetwarzający: zgoda/powiadomienie.
4) Bezpieczeństwo: środki organizacyjne/techniczne (ogólnie).
5) Naruszenia: powiadomienie i współpraca.
6) Retencja, zwrot lub usunięcie po zakończeniu.
Dodaj [ZASTĄP] tam, gdzie brakuje danych, i notę „zależy od jurysdykcji”.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-019",
    title: "Sprzedaż aktywa cyfrowego (domena, strona www, baza e-mail)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Strukturyzuje umowę sprzedaży i przekazania (escrow, gwarancje, zakaz konkurencji, zakres aktywów).",
    prompt: `Działaj jak prawnik. Chcę szkic umowy sprzedaży aktywa cyfrowego.

Dane wejściowe:
- Aktywo (domena, strona, aplikacja, konta społecznościowe, treści).
- Co wchodzi w skład i co NIE (kod, znak, design, dane).
- Cena i sposób płatności (zaliczka/escrow/kamienie milowe).
- Data zamknięcia i przekazania.
- Gwarancje sprzedającego (własność, brak naruszeń, brak długów).
- Transfery (DNS, repozytoria, dostępy, klucze, konta).
- Czy jest baza klientów i zgody (jeśli dotyczy).

Wygeneruj:
1) Checklist przed zamknięciem.
2) Szkic umowy z załącznikami aktywów.
3) Procedurę transferu krok po kroku.
4) Rozsądne gwarancje i ograniczenia.
5) Zakaz pozyskiwania/zakaz konkurencji (opcjonalnie i rozsądnie).`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-020",
    title: "Klauzula rozstrzygania sporów (eskalacja, mediacja, arbitraż)",
    area: "Prawnik i Prawo",
    category: "Umowy",
    summary:
      "Tworzy przepływ rozwiązywania konfliktów, by ograniczyć spory: eskalacja, terminy, jurysdykcja/forum.",
    prompt: `Działaj jak prawnik. Zaprojektuj sekcję rozstrzygania sporów.

Dane wejściowe:
- Relacja B2B lub B2C.
- Kraj/jurysdykcja (jeśli znane).
- Preferencja: sądy vs arbitraż.
- Pilność (zabezpieczenia, IP, poufność).

Wygeneruj:
1) Eskalację: negocjacje między osobami odpowiedzialnymi (z terminami).
2) Mediację (opcjonalnie) i terminy.
3) Arbitraż lub sądy: brzmienie z [ZASTĄP] dla forum/języka/siedziby.
4) Wyjątki dla środków pilnych (IP/poufność).
5) Zasady kosztów i honorariów (ogólne, bez wymyślania przepisów).`,
    thumbnail: "",
  },
];
