// src/lib/prompts/text/salud-clinica-educacion-del-paciente-y-adherencia.js

export const textPromptsSaludClinicaEducacionYAdherencia = [
  {
    id: "saluded-001",
    title: "Wyjaśnienie diagnozy prostym językiem (bez infantylizacji)",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Przekłada diagnozę na jasny, empatyczny i możliwy do zastosowania komunikat dla pacjenta.",
    prompt: `Działaj jako lekarz i edukator kliniczny. Wyjaśnij diagnozę w sposób jasny.

Inputs:
- Diagnoza lub podejrzenie kliniczne.
- Wiek i poziom zrozumienia (podstawowy/średni/wysoki).
- Kontekst pacjenta (praca, rodzina, lęk, bariery).
- Co najbardziej niepokoi pacjenta (główny lęk).

Generuj:
1) Wyjaśnienie w 5–7 zdaniach: czym jest, dlaczego się pojawia, czego się spodziewać.
2) Najważniejsze, czym NIE jest (aby uspokoić bez obiecywania).
3) Sygnały alarmowe (3–6), z którymi należy zgłosić się na SOR.
4) Co można zrobić dziś w domu (5 konkretnych działań).
5) Jak będzie mierzona poprawa (2–4 wskaźniki).
6) Empatyczne zakończenie (1–2 zdania).`,
    thumbnail: "",
  },

  {
    id: "saluded-002",
    title: "Plan leczenia w formacie checklisty (wysoka adherencja)",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Zamienia plan kliniczny w łatwą do realizacji listę kroków dziennych/tygodniowych.",
    prompt: `Działaj jako lekarz. Przekształć plan w praktyczną checklistę.

Inputs:
- Diagnoza.
- Zalecenia (higiena, dieta, aktywność, kontrola).
- Leki (jeśli dotyczy, bez dawek, jeśli nie podano).
- Czas trwania planu (dni/tygodnie).

Generuj:
1) Checklistę dzienną (rano/popołudnie/wieczór).
2) Checklistę tygodniową (kontrole, rejestr, nawyki).
3) „Jeśli wydarzy się X, zrób Y” (5 prostych zasad).
4) Częste błędy do uniknięcia (5).
5) Przypomnienie o kontroli (kiedy i dlaczego).`,
    thumbnail: "",
  },

  {
    id: "saluded-003",
    title: "Wiadomości w stylu WhatsApp poprawiające adherencję (7 dni)",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Tworzy krótkie, motywujące i klinicznie poprawne wiadomości do monitorowania.",
    prompt: `Działaj jako lekarz. Stwórz sekwencję wiadomości typu WhatsApp dla adherencji.

Inputs:
- Diagnoza/cel (np. kontrola ciśnienia, glikemii, bólu).
- 3 kluczowe nawyki lub zadania.
- Ton (ciepły / bezpośredni / motywacyjny).
- Główna bariera (zapominanie, brak czasu, strach, działania niepożądane).

Generuj:
1) 7 wiadomości (dzień 1–7) do maks. 240 znaków.
2) 2 wiadomości „jeśli plan został pominięty” (bez obwiniania).
3) 2 wiadomości wzmacniające sygnały alarmowe i kiedy się skontaktować.
4) Wiadomość końcową do umówienia kontroli.`,
    thumbnail: "",
  },

  {
    id: "saluded-004",
    title: "Przewodnik samomonitorowania (ciśnienie, glukoza, objawy) z szablonem",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Jasne instrukcje do zapisywania pomiarów/objawów i wykrywania istotnych zmian.",
    prompt: `Działaj jako lekarz. Zaprojektuj przewodnik samomonitorowania.

Inputs:
- Co jest monitorowane (ciśnienie / glukoza / masa ciała / objawy).
- Pożądana częstotliwość.
- Dostępny sprzęt (ciśnieniomierz, glukometr, aplikacja, zeszyt).
- Cel kliniczny (kontrola, obserwacja, modyfikacja).

Generuj:
1) Instrukcje krok po kroku pomiaru/zapisu (technika).
2) Tekstowy szablon tabeli (pola: data, godzina, wartość, notatki, objawy).
3) Jak interpretować trendy (co oznacza wzrost/spadek).
4) Orientacyjne progi kontaktu z lekarzem vs SOR (bez liczb, jeśli nie podano; użyj „bardzo wysokie/bardzo niskie” i wskazówek objawowych).
5) Zalecenie przeglądu zapisów (co X dni) i co wysłać.`,
    thumbnail: "",
  },

  {
    id: "saluded-005",
    title: "Działania niepożądane: wyjaśnienie + kiedy się martwić",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Pomaga radzić sobie z obawami dotyczącymi leków i odróżniać objawy spodziewane od groźnych.",
    prompt: `Działaj jako lekarz. Edukuj o działaniach niepożądanych leczenia.

Inputs:
- Lek lub klasa (jeśli nieznane, opisz „leczenie na X”).
- Powód stosowania.
- Szacowany czas trwania.
- Stany pacjenta (ciąża, nerki, wątroba, alergie).

Generuj:
1) Częste działania niepożądane (lista z prostym opisem).
2) Co zrobić, gdy się pojawią (bezpieczne działania).
3) Rzadkie, ale poważne działania (lista) i co zrobić.
4) Objawy alergii/anafilaksji (prostym językiem).
5) Zdanie poprawiające adherencję bez bagatelizowania ryzyka.`,
    thumbnail: "",
  },

  {
    id: "saluded-006",
    title: "Uproszczona świadoma zgoda (procedura / badanie)",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Wyjaśnia, co będzie zrobione, korzyści, ryzyka i alternatywy przystępnym językiem.",
    prompt: `Działaj jako lekarz. Napisz uproszczoną zgodę dla pacjenta.

Inputs:
- Procedura/badanie.
- Cel.
- Alternatywy.
- Główne ryzyka.
- Wymagane przygotowanie.

Generuj:
1) Czym jest i do czego służy (5 zdań).
2) Oczekiwane korzyści (3–5 punktów).
3) Ryzyka/powikłania (3–7 punktów) prostym językiem.
4) Rozsądne alternatywy (lista).
5) Przygotowanie przed i opieka po (checklista).
6) Najczęstsze pytania (5) z krótkimi odpowiedziami.`,
    thumbnail: "",
  },

  {
    id: "saluded-007",
    title: "Krótka rozmowa motywująca (5 minut) do zmiany nawyku",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Scenariusz kliniczny zwiększający motywację i zaangażowanie bez moralizowania.",
    prompt: `Działaj jako lekarz, stosując krótką rozmowę motywującą (MI).

Inputs:
- Nawyki do zmiany (palenie, brak aktywności, dieta, alkohol, sen).
- Poziom gotowości (0–10).
- Główne bariery.
- Korzyść pożądana przez pacjenta.

Generuj:
1) 6 pytań otwartych w stylu MI.
2) 6 empatycznych afirmacji (odzwierciedlenie i walidacja).
3) Techniki „ważność” i „pewność” (po 2 pytania).
4) Zakończenie z minimalnym możliwym zobowiązaniem (1 działanie w 24 h + 1 w 7 dni).
5) Plan na nawroty (jeśli X, zrobię Y).`,
    thumbnail: "",
  },

  {
    id: "saluded-008",
    title: "Edukacja w poczekalni: jednostronicowa ulotka",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Tworzy krótką kartę do druku i przekazania pacjentowi.",
    prompt: `Działaj jako lekarz. Stwórz jednostronicową ulotkę informacyjną.

Inputs:
- Temat (choroba lub częsty objaw).
- Odbiorcy (dorośli / pediatria / seniorzy).
- Poziom czytania (podstawowy/średni).
- Powszechne mity na temat.

Generuj:
1) Tytuł + streszczenie w 2–3 linijkach.
2) Czym jest / dlaczego występuje (krótka sekcja).
3) Co pomaga (5–8 punktów).
4) Czego unikać (5 punktów).
5) Kiedy pilnie skonsultować się (sygnały alarmowe).
6) Mity i fakty (3–5).
7) Nota końcowa: „to nie zastępuje konsultacji lekarskiej”.`,
    thumbnail: "",
  },

  {
    id: "saluded-009",
    title: "Plan profilaktyki: badania kontrolne i szczepienia wg profilu (ogólny)",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Porządkuje profilaktykę wg wieku/ryzyka bez lokalnych, specyficznych zaleceń.",
    prompt: `Działaj jako lekarz. Stwórz ogólny plan profilaktyczny.

Inputs:
- Wiek i płeć.
- Czynniki ryzyka (palenie, cukrzyca, NT, otyłość).
- Istotny wywiad rodzinny.
- Kraj/środowisko (jeśli dotyczy).

Generuj:
1) Lista zalecanych badań kontrolnych (ogólnie, bez zastępowania lokalnych wytycznych).
2) Orientacyjna częstość (rocznie / co 2–3 lata / wg ryzyka).
3) Szczepienia do sprawdzenia (bez dokładnego kalendarza, jeśli nie podano kraju).
4) Nawyki ochronne (5).
5) „Co zabrać na wizytę” (lista).`,
    thumbnail: "",
  },

  {
    id: "saluded-010",
    title: "Wyjaśnienie wyniku badania laboratoryjnego prostym językiem",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Tłumaczy wyniki: co znaczą, co może na nie wpływać i kolejne kroki.",
    prompt: `Działaj jako lekarz. Wyjaśnij wynik badania laboratoryjnego.

Inputs:
- Nazwa badania.
- Wartość pacjenta.
- Zakres referencyjny.
- Objawy i choroby współistniejące.

Generuj:
1) Co mierzy i dlaczego jest ważne (3–5 zdań).
2) Interpretację wartości (w ujęciu ogólnym).
3) Częste przyczyny odchyleń (lista).
4) Co powtórzyć/potwierdzić i kiedy (orientacyjnie).
5) Jakie zmiany stylu życia mogą pomóc (jeśli dotyczy).
6) Sygnały wymagające wcześniejszej konsultacji.`,
    thumbnail: "",
  },

  {
    id: "saluded-011",
    title: "Skrypt wyjaśniający antybiotyki: kiedy tak / kiedy nie",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Jasny przekaz ograniczający niepotrzebne antybiotyki i utrzymujący satysfakcję pacjenta.",
    prompt: `Działaj jako lekarz. Pacjent prosi o antybiotyk.

Inputs:
- Powód wizyty (przeziębienie, kaszel, gardło, zapalenie zatok itp.).
- Czas trwania objawów.
- Gorączka tak/nie.
- Czynniki ryzyka.

Generuj:
1) Krótkie wyjaśnienie, dlaczego NIE zawsze pomaga.
2) Co pomaga (leczenie objawowe) – 5 ogólnych zaleceń.
3) Kiedy ponownie rozważyć (sygnały alarmowe / pogorszenie).
4) Plan obserwacji (za ile dni ponowna ocena).
5) Zdanie końcowe budujące zaufanie.`,
    thumbnail: "",
  },

  {
    id: "saluded-012",
    title: "Edukacja i wspólne podejmowanie decyzji (Shared Decision-Making)",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Strukturyzuje opcje A/B/C z plusami/minusami do decyzji z pacjentem.",
    prompt: `Działaj jako lekarz. Zastosuj wspólne podejmowanie decyzji.

Inputs:
- Problem kliniczny.
- Dostępne opcje (A/B/C).
- Preferencje pacjenta (czas, koszt, inwazyjność).
- Awersje lub lęki.

Generuj:
1) Mentalną tabelę A/B/C (bez tabeli): dla każdej opcji: korzyści, ryzyka, wysiłek, czas, przybliżony koszt (jeśli podano).
2) Pytania eksplorujące wartości pacjenta (5).
3) Rekomendację warunkową: „Jeśli cenisz X, opcja Y”.
4) Następny krok i plan ponownej oceny.`,
    thumbnail: "",
  },

  {
    id: "saluded-013",
    title: "Edukacja o sygnałach alarmowych: karta „kiedy wrócić”",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Tworzy krótką, zapamiętywalną i konkretną listę objawów wymagających konsultacji.",
    prompt: `Działaj jako lekarz. Stwórz kartę „return precautions”.

Inputs:
- Diagnoza/objaw.
- Zastosowane leczenie.
- Ryzyka pacjenta (wiek, ciąża, choroby współistniejące).

Generuj:
1) 6–10 konkretnych sygnałów alarmowych.
2) Co zrobić przy każdym (SOR / zadzwonić / skonsultować).
3) Co jest normalne w trakcie zdrowienia (3–5 punktów).
4) Oczekiwany czas poprawy (orientacyjnie).`,
    thumbnail: "",
  },

  {
    id: "saluded-014",
    title: "Plan adherencji przyjmowania leków (bez zapominania)",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Praktyczne strategie: przypomnienia, kotwiczenie, organizery, rutyna i radzenie sobie z pominięciami.",
    prompt: `Działaj jako lekarz. Zaprojektuj plan adherencji lekowej.

Inputs:
- Liczba leków.
- Przybliżone godziny.
- Problem (zapominanie, działania niepożądane, koszt, złożoność).
- Codzienna rutyna pacjenta.

Generuj:
1) Strategię kotwiczenia (leki powiązane z istniejącymi nawykami).
2) System przypomnień (aplikacja/alarm/organizer).
3) Co zrobić w razie pominięcia dawki (ogólna wskazówka: sprawdzić ulotkę/lekarza; bez szczegółowych instrukcji, jeśli nie na miejscu).
4) Plan na łagodne działania niepożądane (kiedy zgłosić).
5) Mini-checklistę tygodniową do porządkowania/uzupełniania.`,
    thumbnail: "",
  },

  {
    id: "saluded-015",
    title: "Edukacja dla rodziny/opiekunów (pacjent zależny)",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Przewodnik opieki, monitorowania, komunikacji i eskalacji dla opiekunów.",
    prompt: `Działaj jako lekarz. Edukuj opiekuna.

Inputs:
- Diagnoza.
- Poziom zależności.
- Ryzyka (upadki, splątanie, odwodnienie).
- Rutyna opiekuna.

Generuj:
1) Co obserwować codziennie (checklista).
2) Sygnały alarmowe (lista).
3) Jak wspierać adherencję (leki, wizyty, nawodnienie, aktywność).
4) Komunikację z zespołem medycznym: co zgłaszać i jak.
5) Samoopiekę opiekuna (3 wskazówki).`,
    thumbnail: "",
  },

  {
    id: "saluded-016",
    title: "Skrypt wyjaśniający „dlaczego kierujemy do specjalisty”",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Przekaz zmniejszający lęk i zwiększający współpracę przy konsultacji specjalistycznej.",
    prompt: `Działaj jako lekarz. Wyjaśnij skierowanie do specjalisty.

Inputs:
- Powód skierowania.
- Wykonane badania.
- Co chcemy wykluczyć/potwierdzić.
- Główna obawa pacjenta.

Generuj:
1) Wyjaśnienie w 4–6 zdaniach: dlaczego, co wnosi, czego się spodziewać.
2) Jakie informacje zabrać (lista).
3) Co może się wydarzyć na wizycie (typowe kroki).
4) Sygnały wymagające wcześniejszego zgłoszenia się przed wizytą.`,
    thumbnail: "",
  },

  {
    id: "saluded-017",
    title: "Edukacja stylu życia: realistyczny plan na 2 tygodnie",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Mikronawyki i mierzalne cele do rozpoczęcia zmian bez przeciążenia pacjenta.",
    prompt: `Działaj jako lekarz. Stwórz 14-dniowy plan nawyków.

Inputs:
- Cel (masa ciała, ciśnienie, glikemia, cholesterol, sen, stres).
- Aktualny poziom (siedzący, umiarkowany, aktywny).
- Ograniczenia (czas, budżet, urazy).
- Preferencje (jedzenie, godziny).

Generuj:
1) 3 mikronawyki (maks. 10 min każdy).
2) Cele tygodniowe (tydzień 1 i 2).
3) Jak mierzyć postęp (2 metryki).
4) Prawdopodobne przeszkody i plan „jeśli–to” (5).
5) Kliniczny komunikat motywacyjny (bez obietnic).`,
    thumbnail: "",
  },

  {
    id: "saluded-018",
    title: "Edukacja o bólu: oczekiwania i rekonwalescencja (bez obietnic)",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Wyjaśnia, dlaczego boli, co jest normalne, czego unikać i jak robić postępy.",
    prompt: `Działaj jako lekarz. Edukuj pacjenta z bólem.

Inputs:
- Typ bólu (mięśniowy, stawowy, neuropatyczny).
- Czas trwania.
- Aktywności nasilające.
- Główny lęk (np. „bardziej się uszkodzę”).

Generuj:
1) Wyjaśnienie bólu (proste, 5–7 zdań).
2) Co jest normalne vs niepokojące (2 listy).
3) Stopniowy plan aktywności (3 poziomy).
4) Sygnały do ponownej oceny.
5) Zdanie zmniejszające lęk przed ruchem.`,
    thumbnail: "",
  },

  {
    id: "saluded-019",
    title: "Edukacja dla pacjentów z wieloma chorobami współistniejącymi (jedno podsumowanie)",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Integruje wiele schorzeń w jeden jasny plan, aby uniknąć dezorientacji.",
    prompt: `Działaj jako lekarz. Pacjent ma wiele schorzeń.

Inputs:
- Lista diagnoz.
- Podstawowe leczenie.
- Główny cel pacjenta.
- Najbardziej dokuczliwe objawy.

Generuj:
1) Podsumowanie „co najpierw” (priorytety 1–3).
2) Zintegrowany plan (nawyki + kontrole + leki).
3) Sygnały interakcji lub konfliktów między planami (np. dieta vs nerki) prostym językiem.
4) Następna kontrola: co sprawdzić i kiedy.`,
    thumbnail: "",
  },

  {
    id: "saluded-020",
    title: "List po wizycie (After Visit Summary) gotowy do skopiowania",
    area: "Zdrowie i Medycyna",
    category: "Edukacja pacjenta i adherencja",
    summary:
      "Końcowe podsumowanie gotowe do wysłania pacjentowi z planem, alarmami i kontrolą.",
    prompt: `Działaj jako lekarz. Napisz podsumowanie po wizycie.

Inputs:
- Diagnoza/podejrzenie.
- Istotne ustalenia.
- Plan (leki, zalecenia, badania).
- Kontrola.

Generuj:
1) Podsumowanie rozmowy (3–5 linijek).
2) Plan działania (jasne punkty).
3) Sygnały alarmowe (punkty).
4) Następna wizyta: kiedy i co zabrać.
5) Empatyczna i profesjonalna nota końcowa.`,
    thumbnail: "",
  },
];
