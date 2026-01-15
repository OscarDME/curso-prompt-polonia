// src/lib/prompts/text/abogado-legal-litigio-resolucion-conflictos.js

export const textPromptsAbogadoLegalLitigioResolucionConflictos = [
  {
    id: "legallitigio-001",
    title: "Wstępna analiza sprawy + strategia (drzewo decyzyjne)",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Kompletna diagnoza sprawy: fakty, ryzyka, opcje i rekomendowana strategia.",
    prompt: `Działaj jako doświadczony prawnik procesowy. Przeanalizuj sprawę i zaprojektuj strategię.

Inputs:
- Jurysdykcja/kraj (bez cytowania konkretnych przepisów).
- Rodzaj sporu (cywilny, gospodarczy/handlowy, konsumencki itp.).
- Fakty w punktach (chronologia).
- Strony i relacja między nimi.
- Dostępne dowody (dokumenty, czaty, świadkowie).
- Cel klienta (odzyskać pieniądze, obrona, ugoda, środki pilne).
- Budżet/pilność.

Generuj:
1) Podsumowanie sprawy (1 strona).
2) Kluczowe zagadnienia i punkty sporne.
3) Mocne/słabe strony (tabela).
4) Drzewo decyzyjne: A) negocjacje, B) mediacja, C) pozew, D) obrona.
5) Plan na najbliższe 14 dni (działania i dokumenty do zebrania).
6) Wiadomość dla klienta wyjaśniająca ryzyka prostym językiem.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-002",
    title: "Uszczelniona chronologia (timeline) + luki i kluczowe pytania",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Zamienia chaotyczne fakty w solidną chronologię i wykrywa luki informacyjne.",
    prompt: `Działaj jako prawnik. Zbuduj chronologiczną oś czasu sprawy.

Inputs:
- Lista faktów z przybliżonymi datami.
- Dostępne dokumenty i wiadomości.
- Kluczowe zdarzenia (płatności, dostawy, naruszenia).

Generuj:
1) Timeline w tabeli: data | zdarzenie | dowód | wpływ prawny/strategiczny (ogólnie).
2) 15 pytań uzupełniających, aby domknąć luki.
3) „Dobre fakty” vs „złe fakty” dla klienta (tabela).
4) Priorytetyzowana lista brakujących dowodów (wysoki/średni/niski).
5) Red flags (niespójności), które pełnomocnik drugiej strony mógłby zaatakować.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-003",
    title: "Wezwanie przedsądowe (stanowcze, profesjonalne i negocjacyjne)",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Tworzy formalne wezwanie do zapłaty/naprawienia szkody przed pozwem (bez eskalowania konfliktu).",
    prompt: `Działaj jako prawnik. Napisz wezwanie przedsądowe.

Inputs:
- Dłużnik/strona przeciwna (imię/nazwa, firma).
- Fakty (streszczenie).
- Kwota roszczenia lub żądane zadośćuczynienie/naprawa.
- Termin na odpowiedź/zapłatę.
- Główne dowody (faktury, umowa, czaty).
- Pożądany ton: łagodny / stanowczy / bardzo stanowczy.

Generuj:
1) Pełne pismo w formacie profesjonalnym.
2) 3 wersje akapitu końcowego (łagodny/stanowczy/bardzo stanowczy).
3) Lista załączników do dołączenia.
4) Skrypt rozmowy telefonicznej po piśmie (5–7 linijek).
Nie cytuj artykułów; używaj języka ogólnego.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-004",
    title: "Odpowiedź na wezwanie (obrona + propozycja wyjścia)",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Odpowiada na roszczenie bez przyznawania odpowiedzialności i otwierając drogę do ugody.",
    prompt: `Działaj jako prawnik strony pozwanej/obrony. Odpowiedz na wezwanie.

Inputs:
- Główne zarzuty.
- Twoja wersja faktów.
- Dowody na Twoją korzyść.
- Co jesteś gotów zaoferować (jeśli dotyczy).
- Czerwone linie (nie przyznawać winy, nie płacić X itd.).

Generuj:
1) Pełne pismo odpowiedzi.
2) Opcjonalne akapity: (A) całkowite odrzucenie, (B) częściowe odrzucenie, (C) oferta bez przyznania.
3) Lista punktów, o które poprosisz jako dowody.
4) Tekst „bez uszczerbku / bez uznania” (ogólny).
5) Propozycja ugody w 3 scenariuszach (niski/średni/wysoki).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-005",
    title: "Teoria sprawy (storyline) dla sędziego/arbitra: 1 strona",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Buduje centralną narrację: co się stało, dlaczego to ważne, czego żądasz i dlaczego.",
    prompt: `Działaj jako prawnik procesowy. Zbuduj jasną i przekonującą „teorię sprawy”.

Inputs:
- Kluczowe fakty (maks. 10 punktów).
- Cel (zapłata/odszkodowanie/obrona).
- Najmocniejsze dowody (maks. 5).
- Słaby punkt (jeśli jest).

Generuj:
1) Teorię sprawy (maks. 400–600 słów).
2) 5 „sound bite’ów” do wystąpień.
3) Lista 6 faktów, które musisz koniecznie udowodnić.
4) Mapa: dowód → fakt, który udowadnia (tabela).
5) Jak zneutralizować słaby punkt (3 taktyki).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-006",
    title: "Mapa dowodów (dokumenty / świadkowie / opinie biegłych) + plan pozyskania",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Porządkuje całą evidencję i planuje, jak zdobyć to, czego brakuje.",
    prompt: `Działaj jako prawnik. Zaprojektuj mapę dowodów.

Inputs:
- Co chcesz wykazać (roszczenia lub zarzuty obrony).
- Dowody, które już masz.
- Dowody, które podejrzewasz, że ma druga strona.
- Potencjalni świadkowie.

Generuj:
1) Macierz: element do wykazania | rodzaj dowodu | źródło | priorytet | ryzyko.
2) Plan pozyskania brakujących dowodów (kroki i kolejność).
3) Checklista zabezpieczenia dowodów cyfrowych (czaty, e-maile).
4) Lista ryzyk „skażonego dowodu” i jak ich uniknąć.
5) Skrypt do wstępnego przesłuchania/wywiadu ze świadkiem (10 pytań).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-007",
    title: "Kwantyfikacja szkód (scenariusze) + wsparcie dokumentami",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Wylicza szkody/zaległości bez zmyślania: scenariusze i dokumenty uzasadniające.",
    prompt: `Działaj jako prawnik i analityk. Oszacuj szkody/zaległości w scenariuszach.

Inputs:
- Kwota bazowa (jeśli istnieje).
- Dokonane płatności.
- Koszty powiązane.
- Szkoda rzeczywista vs utracone korzyści (jeśli dotyczy).
- Dostępne dowody finansowe.

Generuj:
1) 3 scenariusze: konserwatywny / prawdopodobny / agresywny (tabela).
2) Jakie dokumenty wspierają każdą pozycję (lista).
3) Jakich pozycji NIE dochodziłbyś z braku podstaw (i dlaczego).
4) Plan zdobycia dokumentów na poparcie (kroki).
5) Streszczenie dla klienta wyjaśniające szkody (prosty język).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-008",
    title: "Szkic pozwu (szkielet + sekcje + pola do uzupełnienia)",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Strukturyzuje ogólny pozew (bez cytowania przepisów) gotowy do wypełnienia.",
    prompt: `Działaj jako prawnik. Napisz szkic pozwu (szablon).

Inputs:
- Jurysdykcja/sąd (ogólnie).
- Powód i pozwany.
- Fakty (chronologia).
- Roszczenie (czego żądasz).
- Szkody/kwota.
- Główne dowody.

Generuj:
1) Dokument z typowymi sekcjami.
2) Jasne, ponumerowane fakty.
3) Roszczenia i końcowe wnioski.
4) Lista sugerowanych załączników.
5) Checklista weryfikacji przed złożeniem.
Używaj [ZASTĄP] tam, gdzie brakuje informacji. Nie cytuj konkretnych przepisów.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-009",
    title: "Odpowiedź na pozew (struktura + zarzuty/obrona + właściwy ton)",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Szablon odpowiedzi na pozew: zaprzeczenie/przyznanie faktów i podniesienie zarzutów obrony.",
    prompt: `Działaj jako prawnik pozwanego. Napisz odpowiedź na pozew.

Inputs:
- Streszczenie pozwu/roszczeń.
- Fakty twierdzone przez drugą stronę.
- Twoja wersja faktów.
- Dowody na Twoją korzyść.
- Cel (oddalenie, ograniczenie szkód, negocjacje).

Generuj:
1) Pełną odpowiedź na pozew z typowymi sekcjami.
2) Tabela: fakt twierdzony | stanowisko (przyznaję/zaprzeczam/częściowo) | krótkie wyjaśnienie | dowód.
3) Lista ogólnych zarzutów/obron, które mogą mieć zastosowanie (bez cytowania przepisów).
4) Wnioski pozwanego (o co prosisz sąd).
5) Równoległa strategia negocjacyjna (2 propozycje).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-010",
    title: "Zarzuty/obrony wstępne (checklista + bazowe brzmienie)",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Identyfikuje częste obrony początkowe i tworzy tekst bazowy do ich użycia.",
    prompt: `Działaj jako prawnik. Zbuduj ogólne obrony wstępne.

Inputs:
- Rodzaj sprawy.
- Sąd/jurysdykcja (ogólnie).
- Istotne daty i terminy.
- Kluczowe dokumenty.

Generuj:
1) Checklistę możliwych obron wstępnych (z wyjaśnieniem).
2) Krótki tekst bazowy dla każdej (3–6 linijek).
3) Jakie dowody/dokumenty są potrzebne do ich poparcia.
4) Ryzyka podnoszenia ich, gdy nie pasują (czego unikać).
5) Rekomendowaną kolejność ich podniesienia.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-011",
    title: "Skrypt negocjacji (BATNA, ustępstwa, czerwone linie)",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "System do negocjowania ugód bez oddawania sprawy za darmo.",
    prompt: `Działaj jako prawnik-negocjator. Zaprojektuj skrypt negocjacyjny.

Inputs:
- Cel końcowy.
- Kwota idealna / minimalnie akceptowalna.
- Ryzyka sprawy.
- Czy będzie relacja w przyszłości z drugą stroną (tak/nie).
- Czas/pilność.

Generuj:
1) BATNA i WATNA (najlepsza/najgorsza alternatywa).
2) Lista stopniowanych ustępstw (co daję i co chcę).
3) Czerwone linie i sygnały wyjścia.
4) 10-minutowy skrypt rozmowy (otwarcie → propozycja → zamknięcie).
5) 5 zdań do obsługi typowych obiekcji.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-012",
    title: "Ugoda/porozumienie (projekt) – nie umowy handlowe, tylko settlement",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Projekt ugody zamykającej spór: płatności, zrzeczenia, poufność, brak przyznania.",
    prompt: `Działaj jako prawnik. Napisz projekt ugody (settlement).

Inputs:
- Strony.
- Spór (streszczenie).
- Płatności/kompensacja.
- Terminy wykonania.
- Czy będzie poufność (tak/nie).
- Czy będzie klauzula o niedyskredytowaniu (tak/nie).
- Skutek niewykonania.

Generuj:
1) Pełny settlement z typowymi sekcjami.
2) Klauzule: brak przyznania, zwolnienie/zrzeczenie roszczeń, poufność (opcjonalnie), niedyskredytowanie (opcjonalnie).
3) Załącznik: harmonogram płatności.
4) Krótki tekst do maila zamykającego „osiągnięto porozumienie”.
Bez cytowania przepisów; używaj [ZASTĄP] tam, gdzie brakuje informacji.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-013",
    title: "Przygotowanie do rozprawy: scenariusz + kolejność argumentów + cele",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Buduje scenariusz na rozprawę: otwarcie, kluczowe punkty, odpowiedzi i zamknięcie.",
    prompt: `Działaj jako prawnik procesowy. Zaplanuj przygotowanie do rozprawy.

Inputs:
- Rodzaj posiedzenia/rozprawy (zabezpieczenie, wstępne, proces itd.).
- 3 główne argumenty.
- Główne dowody.
- Prawdopodobne argumenty drugiej strony.

Generuj:
1) Scenariusz na 5–8 minut (otwarcie → rozwinięcie → zamknięcie).
2) Lista pytań, które może zadać sędzia, i sugerowane odpowiedzi.
3) „Jeśli mi przerwą, wrócę do…” (zdania pomostowe).
4) Priorytet: co powiedzieć koniecznie w 60 sekund.
5) Checklista przed rozprawą (dokumenty, kopie, załączniki).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-014",
    title: "Przesłuchanie bezpośrednie (własny świadek) – pytania blokami",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Strukturyzuje pytania do własnego świadka i pomaga unikać ryzykownych pytań.",
    prompt: `Działaj jako prawnik. Zaprojektuj przesłuchanie bezpośrednie własnego świadka.

Inputs:
- Kim jest świadek (rola/relacja).
- Fakty, które ma potwierdzić (lista).
- Dokumenty, które może uwierzytelnić.
- Wrażliwe punkty (czego unikać).

Generuj:
1) Bloki pytań: identyfikacja, kontekst, fakty, dokumenty, zamknięcie.
2) 25–40 sugerowanych pytań (jasnych i sekwencyjnych).
3) Pytania zakazane/ryzykowne i dlaczego.
4) Mini-scenariusz przygotowania świadka (jak odpowiadać).
5) 5 pytań „ratunkowych”, gdy się pogubi.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-015",
    title: "Kontrprzesłuchanie (świadek przeciwny) – cele i pytania „tak/nie”",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Przewodnik osłabiania wiarygodności i utrwalania przyznanych faktów.",
    prompt: `Działaj jako prawnik. Zaprojektuj kontrprzesłuchanie świadka strony przeciwnej.

Inputs:
- Profil świadka strony przeciwnej.
- Znane sprzeczności (czaty/dokumenty).
- Fakty, które chcesz utrwalić.
- Emocjonalny punkt, który może „wybuchnąć”.

Generuj:
1) Cele kontrprzesłuchania (maks. 5).
2) 30 pytań zamkniętych (tak/nie) w blokach.
3) Ścieżka, jeśli zaprzecza: dowody do pokazania (w kolejności).
4) Jak uniknąć, by za dużo tłumaczył (techniki).
5) Zakończenie: 3 ostatnie pytania, by zostawić „myśl” na sali.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-016",
    title: "Mediacja: jednostronicowy brief + propozycja ugody",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Zwięzły dokument do mediacji: fakty, punkty, propozycja i ustępstwa.",
    prompt: `Działaj jako prawnik. Napisz brief do mediacji.

Inputs:
- Spór (streszczenie).
- Kluczowe fakty.
- Ryzyka obu stron.
- Co chcesz uzyskać.
- Na co jesteś gotów pójść na ustępstwa.

Generuj:
1) Brief na 1 stronę (fakty + stanowisko).
2) Lista 6 negocjowalnych punktów.
3) Wstępna propozycja ugody (kwota/działania/terminy).
4) „Pakiet alternatywny” na wypadek odrzucenia pierwszej propozycji.
5) Skrypt otwarcia mediacji (2 min).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-017",
    title: "Zarządzanie dowodami cyfrowymi (WhatsApp/E-maile/GDrive): prosty protokół",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Checklista i protokół zabezpieczenia dowodów cyfrowych bez utraty ich wiarygodności.",
    prompt: `Działaj jako prawnik. Stwórz praktyczny protokół zabezpieczania dowodów cyfrowych.

Inputs:
- Źródła: WhatsApp, e-mail, media społecznościowe, drive, połączenia itp.
- Rodzaj dowodu (wiadomości, pliki, logi, zrzuty ekranu).
- Kto ma dostęp.

Generuj:
1) Checklistę zabezpieczenia wg źródła (konkretne kroki).
2) Proponowane nazwy folderów i konwencję nazewnictwa plików.
3) Czego NIE robić (typowe błędy: edytowanie, przekazywanie dalej, przycinanie itp.).
4) Podstawowy plan łańcucha dowodowego (prosty rejestr).
5) Lista priorytetowych dowodów „wysokiego wpływu”.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-018",
    title: "Podsumowanie akt (case brief) do przekazania innemu prawnikowi",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Jasny pakiet do przekazania: fakty, dokumenty, status, terminy i strategia.",
    prompt: `Działaj jako prawnik. Podsumuj akta do przekazania.

Inputs:
- Fakty i chronologia.
- Kluczowe dokumenty.
- Status sprawy (jeśli toczy się postępowanie).
- Najbliższe terminy.
- Kontakty/świadkowie.

Generuj:
1) Streszczenie wykonawcze (maks. 1 strona).
2) Chronologia (tabela).
3) Indeks kluczowych dokumentów z opisem.
4) Lista zadań i krytycznych terminów.
5) Rekomendacja strategii (2 ścieżki).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-019",
    title: "Ryzyko reputacyjne i komunikacja (co mówić / czego NIE mówić)",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Wytyczne komunikacji z klientami/użytkownikami/social mediami podczas sporu, żeby nie „strzelić sobie w stopę”.",
    prompt: `Działaj jako prawnik i specjalista PR kryzysowego. Stwórz wytyczne komunikacji podczas sporu.

Inputs:
- Kontekst konfliktu.
- Odbiorcy (klienci, media społecznościowe, dostawcy, zespół).
- Co wyciekło lub może wyciec.
- Ton marki.

Generuj:
1) Dozwolone „talking points” (5–8).
2) Lista zakazanych sformułowań i dlaczego.
3) Odpowiedzi typu FAQ (8 pytań).
4) Krótkie szablony: e-mail do klientów + komunikat wewnętrzny.
5) Plan eskalacji: kiedy odpowiada prawnik vs wsparcie.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-020",
    title: "Checklista przygotowania przed pozwem (lub przed odpowiedzią) + scoring",
    area: "Prawnik i Prawo",
    category: "Spory sądowe i rozwiązywanie konfliktów",
    summary:
      "Ocena, czy warto iść do sporu: checklista z punktacją do chłodnej decyzji.",
    prompt: `Działaj jako prawnik. Stwórz checklistę z punktacją do decyzji o sporze.

Inputs:
- Cel klienta.
- Dostępne dowody.
- Budżet.
- Pilność.
- Ryzyko biznesowe/reputacyjne.
- Dostępność świadków.

Generuj:
1) Checklistę 25 pozycji z punktacją (0–2 każda).
2) Interpretację wyniku (zielone/żółte/czerwone).
3) Lista „deal breakerów” (kiedy NIE pozywać).
4) Plan alternatywny, jeśli bez sporu (negocjacje/mediacja).
5) Lista minimalnych dokumentów, zanim zrobisz cokolwiek.`,
    thumbnail: "",
  },
];
