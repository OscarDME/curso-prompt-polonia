// src/lib/prompts/text/salud-clinica-otros.js

export const textPromptsSaludClinicaOtros = [
  {
    id: "saludotros-001",
    title: "Notatka kliniczna SOAP (konsultacja ogólna) gotowa do dokumentacji",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Strukturyzuje pełną, jasną i możliwą do obrony notatkę SOAP do dokumentacji medycznej.",
    prompt: `Działaj jako lekarz. Napisz profesjonalną notatkę SOAP.

Inputs:
- Powód konsultacji (CC).
- Historia obecnej choroby (HPI) z chronologią.
- Wywiad (AP, AHF, alergie, leki).
- Istotny przegląd układów (ROS).
- Badanie przedmiotowe (parametry życiowe + wyniki).
- Wrażenie diagnostyczne (Dx różnicowe).
- Plan (badania, leczenie, edukacja, kontrola).

Generuj:
S) Subiektywne (HPI + podsumowany ROS)
O) Obiektywne (parametry + badanie + lab/obrazowanie, jeśli dotyczy)
A) Ocena (rozpoznanie główne + różnicowe + uzasadnienie)
P) Szczegółowy plan wg problemów + edukacja + return precautions + follow-up
Uwzględnij: standardowy język medyczny, zwięzły, bez wymyślania brakujących danych (oznacz „Nie podano”, jeśli brakuje).`,
    thumbnail: "",
  },

  {
    id: "saludotros-002",
    title: "Rozpoznanie różnicowe z uzasadnieniem i czerwonymi flagami",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Generuje różnicowanie według prawdopodobieństwa i pilności oraz wskazuje, o co jeszcze dopytać.",
    prompt: `Działaj jako internista. Zbuduj rozpoznanie różnicowe.

Inputs:
- Główny objaw.
- Wiek/płeć.
- Czas trwania i przebieg.
- Objawy towarzyszące.
- Czynniki ryzyka i wywiad.
- Wyniki badania.

Generuj:
1) Top 5 najbardziej prawdopodobnych rozpoznań (z 1–2 linijkami uzasadnienia każde).
2) 3 rozpoznania, których NIE wolno przeoczyć (niebezpieczne) + dlaczego.
3) Kluczowe brakujące pytania (10), aby doprecyzować.
4) Badanie ukierunkowane (czego szukać) (8 punktów).
5) Sugerowane badania początkowe (laboratoryjne/obrazowe) w ujęciu ogólnym.
6) Sygnały alarmowe zmieniające postępowanie.`,
    thumbnail: "",
  },

  {
    id: "saludotros-003",
    title: "Algorytm triażu (telemedycyna) dla częstego objawu",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Przewodnik decyzyjny: samopomoc vs wizyta vs SOR.",
    prompt: `Działaj jako lekarz triażowy w telemedycynie. Stwórz bezpieczny algorytm.

Inputs:
- Objaw (np. ból gardła, gorączka, biegunka, ból głowy).
- Grupa (dorośli/pediatria/ciąża/senior).
- Czynniki ryzyka.
- Czas trwania.

Generuj:
1) Pytania przesiewowe na start (8–12).
2) Gałęzie decyzyjne:
   - SOR dziś (kryteria).
   - Pilna konsultacja (24–72 h).
   - Postępowanie domowe (kryteria).
3) Zalecenia samopomocy (5–8) bez leków, jeśli nie podano.
4) Konkretne sygnały alarmowe.
5) Komunikat końcowy prawny/etyczny: „to nie zastępuje oceny w gabinecie”.`,
    thumbnail: "",
  },

  {
    id: "saludotros-004",
    title: "Kliniczna interpretacja parametrów życiowych (w kontekście)",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Pomaga interpretować ciśnienie, tętno, oddechy, temperaturę i saturację w zależności od kontekstu i objawów.",
    prompt: `Działaj jako lekarz. Interpretuj parametry życiowe w kontekście.

Inputs:
- Wiek/płeć.
- Parametry życiowe (ciśnienie, tętno, częstość oddechów, temperatura, SatO2).
- Aktualne objawy.
- Wywiad (serce/płuca/ciąża).
- Sytuacja (spoczynek, po wysiłku, lęk, ból).

Generuj:
1) Które wyniki są najbardziej niepokojące vs spodziewane (w kontekście).
2) 5 możliwych przyczyn dla każdej istotnej nieprawidłowości.
3) Co potwierdzić/zmierzyć ponownie (technika i moment).
4) O co dopytać, aby różnicować przyczyny.
5) Kiedy zalecić pilną ocenę.`,
    thumbnail: "",
  },

  {
    id: "saludotros-005",
    title: "Plan kontroli i kryteria ponownej oceny",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Określa optymalny follow-up: kiedy, z jakimi celami i co zmienić, jeśli brak poprawy.",
    prompt: `Działaj jako lekarz. Zaprojektuj bezpieczny plan kontroli.

Inputs:
- Rozpoznanie lub problem kliniczny (lub podejrzenie).
- Leczenie początkowe.
- Nasilenie (łagodne/umiarkowane/ciężkie).
- Bariery (dostęp, koszty, odległość).
- Cele pacjenta.

Generuj:
1) Idealny follow-up (czas i forma: stacjonarnie/tele).
2) Co zmierzyć/zapisywać przed kontrolą (lista).
3) Kryteria poprawy (3–5).
4) Kryteria nieskuteczności leczenia (3–5).
5) Co skorygować, jeśli nieskuteczne (ogólnie).
6) Sygnały alarmowe do natychmiastowej konsultacji.`,
    thumbnail: "",
  },

  {
    id: "saludotros-006",
    title: "Podsumowanie kliniczne do skierowania do specjalisty (konsultacja)",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Krótki, jasny i użyteczny list do specjalisty z konkretnym pytaniem klinicznym.",
    prompt: `Działaj jako lekarz. Napisz podsumowanie do konsultacji specjalistycznej.

Inputs:
- Specjalizacja docelowa.
- Powód skierowania (pytanie kliniczne).
- Podsumowanie przypadku (objawy, przebieg).
- Istotne ustalenia.
- Wykonane badania (daty i wyniki).
- Zastosowane leczenie i odpowiedź.

Generuj:
1) Powód/pytanie kliniczne w 1–2 linijkach.
2) Skrócona historia (chronologicznie).
3) Kluczowe ustalenia (punkty).
4) Załączone badania (lista).
5) Leczenie dotychczasowe i odpowiedź.
6) O co prosimy specjalistę (bardzo konkretnie).`,
    thumbnail: "",
  },

  {
    id: "saludotros-007",
    title: "Scenariusz przekazywania złych wiadomości (SPIKES – adaptacja)",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Empatyczna struktura do przekazywania trudnych diagnoz bez utraty jasności.",
    prompt: `Działaj jako lekarz. Przygotuj scenariusz według modelu SPIKES.

Inputs:
- Diagnoza/wiadomość.
- Poziom podejrzeń pacjenta (spodziewa się/nie spodziewa się).
- Obecność rodziny (tak/nie).
- Dostępne kolejne kroki.

Generuj:
1) S: Setting (jak przygotować otoczenie).
2) P: Perception (pytania, by zrozumieć, co pacjent wie).
3) I: Invitation (ile chce wiedzieć teraz).
4) K: Knowledge (jak powiedzieć jasno i porcjami).
5) E: Empathy (zdania walidujące).
6) S: Strategy/Summary (natychmiastowy plan i kontrola).
Dodaj 5 dokładnych zdań do użycia i 5 zdań, których unikać.`,
    thumbnail: "",
  },

  {
    id: "saludotros-008",
    title: "Zalecenia przedoperacyjne / przedzabiegowe (checklista dla pacjenta)",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Jasna checklista przygotowania do zabiegu, aby zmniejszyć ryzyko odwołań.",
    prompt: `Działaj jako lekarz. Napisz zalecenia przedzabiegowe.

Inputs:
- Procedura.
- Rodzaj znieczulenia/sedacji (jeśli dotyczy).
- Istotne choroby współistniejące.
- Aktualne leki (antykoagulanty, cukrzyca itp.), jeśli znane.

Generuj:
1) Checklistę: 72 h przed / 24 h przed / w dniu zabiegu.
2) Post (opisz ogólnie, jeśli brak szczegółowej instrukcji).
3) Co zabrać / czego unikać.
4) Sygnały, które należy zgłosić wcześniej (gorączka, infekcja itp.).
5) Wstępne zalecenia po zabiegu (ogólne).
Nie wymyślaj szczegółowych instrukcji, jeśli brakuje danych; oznacz „potwierdź z zespołem”.`,
    thumbnail: "",
  },

  {
    id: "saludotros-009",
    title: "Szablon codziennej notatki szpitalnej (progress note)",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Standardowy format postępu wg problemów z planem na dzień.",
    prompt: `Działaj jako lekarz szpitalny. Napisz progress note.

Inputs:
- Dzień hospitalizacji.
- Główne rozpoznanie.
- Wydarzenia z ostatnich 24 h.
- Parametry życiowe / bilans płynów.
- Istotne badania lab/obrazowe.
- Aktywne leczenie.

Generuj:
1) Subjective (objawy pacjenta).
2) Objective (parametry, badanie, laby, bilans I/O).
3) Assessment/Plan wg problemów (punkty).
4) Dyspozycja i cele dnia (wypis, badania oczekujące, bariery).
5) Profilaktyka/bezpieczeństwo (upadki, zakrzepica, odleżyny itp. ogólnie).`,
    thumbnail: "",
  },

  {
    id: "saludotros-010",
    title: "Notatka z SOR: podejście ABCDE + postępowanie",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Szybka struktura dla stanów ostrych: stabilizacja, różnicowanie i plan natychmiastowy.",
    prompt: `Działaj jako lekarz medycyny ratunkowej. Uporządkuj przypadek wg ABCDE.

Inputs:
- Ostra prezentacja.
- Parametry życiowe.
- Wyniki badania.
- Dostępne szybkie wyniki.
- Wykonane interwencje.

Generuj:
1) ABCDE (ustalenia + działania).
2) Wrażenie diagnostyczne (główne + różnicowe).
3) Plan natychmiastowy (postępowanie, badania, ponowna ocena).
4) Kryteria przyjęcia vs wypisu (ogólnie).
5) Zalecenia wypisowe i alarmy (jeśli dotyczy).`,
    thumbnail: "",
  },

  {
    id: "saludotros-011",
    title: "Analiza interakcji lek–lek oraz lek–choroba",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Przegląda możliwe interakcje i proponuje pytania/monitorowanie (bez modyfikacji dawek).",
    prompt: `Działaj jako lekarz. Przeanalizuj interakcje i ryzyka.

Inputs:
- Lista leków (w tym OTC i suplementy).
- Rozpoznania/stany.
- Aktualne objawy.
- Funkcja nerek/wątroby, jeśli znana.

Generuj:
1) Potencjalne interakcje (uporządkuj wg ciężkości: wysokie/średnie/niskie).
2) Jakie objawy monitorować pod kątem interakcji (lista).
3) Jakich pytań brakuje do oceny ryzyka (8–12).
4) Ogólne zalecenia monitorowania (laby/ciśnienie/ECG).
5) Komunikat bezpieczeństwa: „nie zmieniaj nic bez lekarza”.`,
    thumbnail: "",
  },

  {
    id: "saludotros-012",
    title: "Krótki plan postępowania z lękiem w trakcie wizyty (brief)",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Praktyczny przewodnik dla pacjentów z lękiem: oddech, przeformułowanie i plan działania.",
    prompt: `Działaj jako lekarz. Pacjent jest bardzo zaniepokojony objawami.

Inputs:
- Powód lęku (objaw, badanie, diagnoza).
- Objawy somatyczne lęku (kołatanie, duszność, bezsenność).
- Kontekst (stres, żałoba, praca).
- Preferencje (terapia, nawyki, bez leków).

Generuj:
1) Empatyczną walidację (2–3 zdania).
2) Krótką technikę oddechową (kroki).
3) Rozróżnienie „objawów alarmowych” vs „objawów zgodnych z lękiem” (bez stawiania diagnozy, jeśli nie dotyczy).
4) Plan 7-dniowy (nawyki + kontrola).
5) Kiedy skierować/zgłosić się pilnie (kryteria).`,
    thumbnail: "",
  },

  {
    id: "saludotros-013",
    title: "Checklista bezpieczeństwa pacjenta (zapobieganie błędom)",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Lista kontrolna zmniejszająca ryzyko: alergie, identyfikacja, leki itd.",
    prompt: `Działaj jako lekarz z podejściem do bezpieczeństwa pacjenta.

Inputs:
- Kontekst (poradnia, SOR, szpital).
- Planowane procedury/leki.
- Ryzyka (alergie, antykoagulanty, ciąża, upadki).

Generuj:
1) Checklistę przed interwencją (10–15 punktów).
2) Checklistę w trakcie (5–8 punktów).
3) Checklistę przy wypisie/wyjściu (8–12 punktów).
4) „Częste błędy” i jak ich unikać (6).
5) Komunikat o kulturze bezpieczeństwa (1 akapit).`,
    thumbnail: "",
  },

  {
    id: "saludotros-014",
    title: "Strategia komunikacji klinicznej: trudny / zdenerwowany pacjent",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Scenariusz deeskalacji konfliktu, utrzymania granic i uzyskania porozumienia terapeutycznego.",
    prompt: `Działaj jako lekarz. Poprowadź rozmowę z rozgniewanym pacjentem.

Inputs:
- Powód złości (czas oczekiwania, diagnoza, koszty, leczenie).
- Poziom agresji (niski/średni/wysoki).
- Co trzeba dziś osiągnąć (plan, adherencja, skierowanie).

Generuj:
1) Zdania otwierające do deeskalacji (5).
2) Pytania, by zidentyfikować prawdziwą potrzebę (5).
3) Jasne i szanujące granice (3 zdania).
4) Plan uzgodnienia (opcje A/B) i jak je przedstawić.
5) Co udokumentować w dokumentacji (lista).
6) Sygnały bezpieczeństwa do eskalacji po wsparcie (jeśli dotyczy).`,
    thumbnail: "",
  },

  {
    id: "saludotros-015",
    title: "Standaryzacja „zaleceń wypisowych” według zespołu/obrazu klinicznego",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Tworzy szablon wielokrotnego użytku: opieka, sygnały alarmowe i kontrola dla zespołów klinicznych.",
    prompt: `Działaj jako lekarz. Stwórz wielokrotnego użytku szablon wypisu.

Inputs:
- Zespół/stan (np. gastroenteritis, ból krzyża, infekcje górnych dróg oddechowych).
- Populacja (dorośli/pediatria/ciąża).
- Zalecone postępowanie (ogólne).

Generuj:
1) Czym jest (krótkie wyjaśnienie).
2) Postępowanie domowe (8 punktów).
3) Czego unikać (5 punktów).
4) Sygnały alarmowe (8–12).
5) Zalecany follow-up (kiedy i u kogo).
6) FAQ (5) z krótkimi odpowiedziami.`,
    thumbnail: "",
  },

  {
    id: "saludotros-016",
    title: "Szybki przewodnik czytania EKG / RTG / TK (struktura opisu)",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Szablon do systematycznej interpretacji badań (bez wymyślania ustaleń).",
    prompt: `Działaj jako lekarz. Stwórz systematyczny szablon odczytu.

Inputs:
- Rodzaj badania (EKG / RTG klatki piersiowej / TK jamy brzusznej itp.).
- Pytanie kliniczne.
- Zgłoszone ustalenia (jeśli istnieje opis).
- Objawy i kontekst.

Generuj:
1) Metodę systematyczną krok po kroku (checklista).
2) Kluczowe ustalenia do poszukiwania w zależności od pytania (lista).
3) Jak korelować z obrazem klinicznym (pytania).
4) Jakie ustalenia wymagają natychmiastowego działania (czerwone flagi).
5) Jak udokumentować wniosek i kolejny krok.`,
    thumbnail: "",
  },

  {
    id: "saludotros-017",
    title: "Plan opieki dla pacjentów przewlekłych (roczny care plan)",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Strukturyzuje plan roczny: cele, kontrole, edukację, profilaktykę i follow-up.",
    prompt: `Działaj jako lekarz POZ. Zaprojektuj roczny care plan.

Inputs:
- Choroba przewlekła (T2D, nadciśnienie, POChP, astma itp.).
- Wiek i choroby współistniejące.
- Zasoby pacjenta (czas, dostęp, wsparcie).
- Cele pacjenta.

Generuj:
1) Cele SMART (3–5).
2) Kontrole i monitorowanie (co i jak często, ogólnie).
3) Plan stylu życia wg obszarów (żywienie, aktywność, sen, stres).
4) Sygnały dekompensacji i plan działania.
5) Kalendarz kontroli (3–4 kamienie milowe).
6) Jak zaangażować rodzinę/opiekunów.`,
    thumbnail: "",
  },

  {
    id: "saludotros-018",
    title: "Audyt dokumentacji medycznej (jakość i ryzyko prawne)",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Przegląda notatkę, aby wykryć luki, niejednoznaczności i poprawić obronę kliniczną.",
    prompt: `Działaj jako audytor kliniczny. Oceń notatkę medyczną.

Inputs:
- Tekst notatki.
- Kontekst (poradnia/SOR/szpital).
- Cel (poprawa jasności, rozliczeń, ryzyk).

Generuj:
1) 10 konkretnych usprawnień (czego brakuje, co jest zbędne, co doprecyzować).
2) Ryzyka medyczno-prawne wynikające z braków (lista).
3) Sugestie sformułowań dla: HPI, badania, uzasadnienia, planu.
4) Końcową checklistę dla przyszłych notatek.`,
    thumbnail: "",
  },

  {
    id: "saludotros-019",
    title: "Scenariusz „wyjaśnij, dlaczego nie zlecamy niepotrzebnego badania”",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Odpowiedź, gdy pacjent domaga się rezonansu/antybiotyku/badań bez wskazań.",
    prompt: `Działaj jako lekarz. Pacjent prosi o badanie bez jasnych wskazań.

Inputs:
- Badanie, o które prosi.
- Aktualny objaw/rozpoznanie.
- Lęk pacjenta (co myśli, że ma).
- Ustalenia zmniejszające prawdopodobieństwo ciężkiej choroby.

Generuj:
1) Krótkie wyjaśnienie (korzyść vs fałszywie dodatni wynik/szkoda/koszt).
2) Co zrobimy zamiast (plan alternatywny) i dlaczego to teraz bardziej użyteczne.
3) Sygnały, które faktycznie uzasadniałyby badanie (kryteria kliniczne).
4) Plan kontroli z ramami czasowymi.
5) Empatyczne zakończenie podtrzymujące zaufanie.`,
    thumbnail: "",
  },

  {
    id: "saludotros-020",
    title: "Szablon sesji klinicznej: przypadek + dyskusja + perełki",
    area: "Zdrowie i Medycyna",
    category: "Inne",
    summary:
      "Strukturyzuje przypadek do przedstawienia na obchodzie lub sesji akademickiej.",
    prompt: `Działaj jako lekarz-nauczyciel. Uporządkuj prezentację przypadku.

Inputs:
- Przypadek (wiek, płeć, powód, HPI, badanie, laby/obrazowanie).
- Ostateczne rozpoznanie lub podejrzenie.
- Punkty do nauki.

Generuj:
1) Prezentację w 60–90 sekund (styl obchodowy).
2) Problem reprezentatywny (1 zdanie).
3) Rozpoznanie różnicowe wg układów.
4) Rozumowanie kliniczne (dlaczego rozpoznanie A > B).
5) Postępowanie i kontrolę.
6) 5 perełek klinicznych + 3 częste błędy.`,
    thumbnail: "",
  },
];
