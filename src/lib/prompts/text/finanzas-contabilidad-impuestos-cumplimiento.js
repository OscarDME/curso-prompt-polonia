// src/lib/prompts/text/finanzas-contabilidad-impuestos-cumplimiento.js

export const textPromptsFinanzasContabilidadImpuestosCumplimiento = [
  {
    id: "fintax-001",
    title: "Roczna lista kontrolna podatkowa dla freelancerów/biznesów (bez typowych błędów)",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Porządkuje obowiązki, kalendarz i dokumentację, aby działać zgodnie i bez chaosu.",
    prompt: `Działaj jak księgowy organizacyjny. Nie udzielaj konkretnej porady podatkowej dla danego kraju; skup się na strukturze i najlepszych praktykach.

Dane wejściowe:
- Kraj/stan (jeśli dotyczy).
- Rodzaj aktywności: etat/freelancer/biznes.
- Częstotliwość przychodów (miesięczna/zmienna).
- Czy wystawiam faktury/rachunki (tak/nie).
- Aktualne narzędzie (Excel/aplikacja/brak).

Wygeneruj:
1) Roczną listę kontrolną wg kwartałów/miesięcy (co sprawdzać i kiedy).
2) Listę dokumentów do przechowywania (przychody, koszty, bankowe).
3) Rutynę tygodniową/miesięczną, by utrzymać wszystko na bieżąco.
4) Top 10 typowych błędów i jak ich unikać.
5) Szablon „folderu podatkowego” ze strukturą i nazwami.`,
    thumbnail: "",
  },

  {
    id: "fintax-002",
    title: "System rezerw na podatki (tax buckets) z automatycznymi regułami",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Określa, ile odkładać z każdego wpływu, aby uniknąć niespodzianek na koniec okresu.",
    prompt: `Działaj jak doradca finansowy/księgowy.

Dane wejściowe:
- Średni miesięczny dochód.
- Zmienność dochodu (niska/średnia/wysoka).
- Szacowany % podatku (jeśli znam; jeśli nie, zaproponuj konserwatywny zakres).
- Koszty biznesu (w przybliżeniu).
- Czy jestem pracownikiem/freelancerem/firmą.

Wygeneruj:
1) System „kubeczków”: podatki, operacje, oszczędności, reinwestycja.
2) Reguły przelewów (z każdego wpływu) w % oraz przykładowe kwoty.
3) Progi: kiedy podnieść lub obniżyć % rezerwy.
4) Miesięczną checklistę do uzgodnienia i korekt.
5) Protokół awaryjny, jeśli rezerwa została już wydana.`,
    thumbnail: "",
  },

  {
    id: "fintax-003",
    title: "Klasyfikacja kosztów: odliczalne vs nieodliczalne (praktyczny szablon)",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Tworzy system kategorii, aby rejestrować koszty w uporządkowany sposób.",
    prompt: `Działaj jak księgowy (podejście ogólne, nie prawne).

Dane wejściowe:
- Rodzaj biznesu/aktywności.
- Częste typy kosztów (lista).
- Metoda płatności (karta/gotówka/mieszana).
- Czy przechowuję dowody/rachunki (tak/nie).

Wygeneruj:
1) Tabelę sugerowanych kategorii (20–30) i przykłady dla każdej.
2) Zasady dot. dowodów (co przechowywać i jak).
3) Etykiety do oznaczania „do konsultacji z księgowym” w razie wątpliwości.
4) Szablon rejestru (pola i format).
5) Tygodniowy przepływ: rejestrować → weryfikować → archiwizować → uzgadniać.`,
    thumbnail: "",
  },

  {
    id: "fintax-004",
    title: "Kalendarz obowiązków i płatności (miesięczny/tygodniowy) gotowy do skopiowania",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Zamienia Twoje obowiązki w operacyjny kalendarz bez zapominalstwa.",
    prompt: `Działaj jak administrator księgowości.

Dane wejściowe:
- Typ podatnika (etat/freelancer/firma).
- Częstotliwość deklaracji (miesięczna/kwartalna/roczna).
- Znane kluczowe daty (jeśli mam).
- Aktualny proces (chaos/średnio/uporządkowany).

Wygeneruj:
1) Roczny kalendarz z blokami pracy (przygotowanie, przegląd, płatność, archiwum).
2) Listę automatycznych przypomnień (co i kiedy).
3) Checklistę na okres (miesięcznie/kwartalnie/rocznie).
4) Sygnały ostrzegawcze: kiedy poprosić o pomoc specjalisty.
5) Szablon 60-minutowego „miesięcznego zamknięcia podatkowego”.`,
    thumbnail: "",
  },

  {
    id: "fintax-005",
    title: "Plan zgodności dla e-commerce/sprzedaży online (porządek dokumentów)",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Porządkuje przychody z bramek płatniczych, prowizje, zwroty i raporty.",
    prompt: `Działaj jak księgowy dla sprzedaży online.

Dane wejściowe:
- Platformy sprzedaży i płatności.
- Miesięczny wolumen sprzedaży.
- Zwroty/anulowania (niskie/średnie/wysokie).
- Waluta i kraje, w których sprzedaję.
- Czy mam magazyn/inwentarz (tak/nie).

Wygeneruj:
1) Przepływ rejestracji: sprzedaż brutto, prowizje, netto i zwroty.
2) Sugerowane kategorie księgowe (przychody, fee, chargebacki, wysyłki itd.).
3) Miesięczną checklistę uzgodnienia: bank vs platforma.
4) Dokumenty do pobrania/przechowywania (i częstotliwość).
5) Szablon miesięcznego raportu dla księgowego.`,
    thumbnail: "",
  },

  {
    id: "fintax-006",
    title: "Organizacja faktur/rachunków: nazewnictwo, foldery i kontrola",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Prosty system, dzięki któremu nigdy nie zgubisz dokumentu.",
    prompt: `Działaj jak specjalista ds. kontroli dokumentów.

Dane wejściowe:
- Szacowana liczba dokumentów miesięcznie.
- Czy pracuję na papierze, cyfrowo, czy mieszanie.
- Narzędzia: Drive/OneDrive/Dropbox/lokalnie.
- Czy mam sprzęt (PC/telefon).

Wygeneruj:
1) Strukturę folderów wg rok/miesiąc/typ.
2) Konwencję nazw (data_dostawca_kwota_kategoria).
3) Proces skanowania/zbierania z telefonu (kroki).
4) Tygodniową checklistę „zero zaległości”.
5) Zasadę retencji dokumentów (ogólnie) i backupy.`,
    thumbnail: "",
  },

  {
    id: "fintax-007",
    title: "Protokoły przeciw karom: kontrola terminów + podwójna weryfikacja",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Zmniejsza ryzyko odsetek i kar dzięki procesom i walidacjom.",
    prompt: `Działaj jak compliance officer (praktycznie).

Dane wejściowe:
- Rodzaj obowiązków (podatki, ubezpieczenia społeczne, licencje itd.).
- Historia: czy już wcześniej dostałem karę? (tak/nie i za co).
- Zespół: sam / z księgowym / z administracją.
- Częstotliwość płatności.

Wygeneruj:
1) System kontroli terminów (3 warstwy przypomnień).
2) Checklistę przed wysłaniem/zapłatą (10 punktów).
3) Kontrolę dowodów: co przechowywać jako „potwierdzenie”.
4) Protokół korekty, jeśli po czasie wykryję błąd.
5) Cotygodniowy „dashboard”, żeby w 1 minutę znać status.`,
    thumbnail: "",
  },

  {
    id: "fintax-008",
    title: "Skrypt rozmowy z księgowym: kluczowe pytania i deliverables",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Gwarantuje jasność, a nie tylko „wszystko OK”: co i jak pytać.",
    prompt: `Działaj jak doradca przy wyborze/koordynacji księgowości.

Dane wejściowe:
- Rodzaj działalności (etat/freelancer/firma).
- Złożoność: niska/średnia/wysoka.
- Główny ból (wysokie podatki, bałagan, kary itd.).
- Aktualne narzędzia.

Wygeneruj:
1) Listę 20 pytań do księgowego (z intencją).
2) Minimalne miesięczne deliverables: jakie raporty wymagać.
3) Checklistę tego, co JA mam dostarczyć (i jak).
4) Wskaźniki, czy księgowy wykonuje dobrą pracę.
5) Szablon e-maila/wiadomości na start rozmowy.`,
    thumbnail: "",
  },

  {
    id: "fintax-009",
    title: "Miesięczny raport podatkowy: executive summary do szybkiego przeglądu",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Format 1 strony, by widzieć przychody, koszty, podstawę i rezerwy.",
    prompt: `Działaj jak księgowy i twórca raportów.

Dane wejściowe:
- Przychody miesiąca (brutto i netto, jeśli dotyczy).
- Koszty miesiąca (wg kategorii).
- Rezerwy na podatki (kwota/%).
- Długi/zaległe zobowiązania.
- Cele na kolejny miesiąc.

Wygeneruj:
1) Szablon miesięcznego raportu na 1 stronę (sekcje i pola).
2) Proste definicje każdego pola, żebym się nie mylił.
3) Checklistę uzgodnień (bank vs rejestr).
4) 5 pytań kontrolnych (żeby wyłapać błędy).
5) Plan działania na kolejny miesiąc wg wyników.`,
    thumbnail: "",
  },

  {
    id: "fintax-010",
    title: "Uzgodnienie bankowe dla zgodności: szybka metoda (bez łez)",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Proces uzgadniania banku z rejestrem, aby uniknąć niespójności.",
    prompt: `Działaj jak pomocnik księgowy.

Dane wejściowe:
- Liczba kont bankowych.
- Miesięczny wolumen transakcji.
- Czy używam gotówki (tak/nie).
- Aktualny rejestr (Excel/aplikacja/brak).

Wygeneruj:
1) Metodę krok po kroku do uzgodnień (tygodniowo i miesięcznie).
2) Kategorie typowych „różnic” i jak je rozwiązać.
3) Checklistę wykrywania podwójnych płatności, zapomnianych subskrypcji, prowizji.
4) Szablon „logu różnic” z kolumnami.
5) Zasady zostawiania dowodów i audytu wewnętrznego.`,
    thumbnail: "",
  },

  {
    id: "fintax-011",
    title: "Plan zgodności dla przychodów międzynarodowych (struktura i ryzyka)",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Porządkuje wpływy wielowalutowe i dokumentację, aby działać z ładem.",
    prompt: `Działaj jak doradca kontroli finansowej (bez porad prawnych).

Dane wejściowe:
- Kraj rezydencji.
- Kraje, z których pobieram opłaty/sprzedaję.
- Waluty.
- Platformy płatnicze.
- Czy otrzymuję przelewy czy płatności kartą.

Wygeneruj:
1) System rejestracji przychodów wg kraju/waluty.
2) Zasady kursu wymiany (jak to dokumentować).
3) Checklistę dokumentów dla każdego wpływu (potwierdzenie, raport, bank).
4) Sygnały ryzyka, kiedy skonsultować się lokalnie ze specjalistą.
5) Sugerowany miesięczny raport podsumowujący przychody międzynarodowe.`,
    thumbnail: "",
  },

  {
    id: "fintax-012",
    title: "Plan rozdzielenia finansów osobistych i firmowych (czysta zgodność)",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Zapobiega mieszaniu pieniędzy i upraszcza księgowość dzięki regułom i kontom.",
    prompt: `Działaj jak księgowy.

Dane wejściowe:
- Czy już mieszam finanse (tak/nie).
- Liczba obecnych kont.
- Koszty mieszane (internet, telefon, transport).
- Przychody firmy.
- Ból: bałagan / podatki / kontrola.

Wygeneruj:
1) Rekomendowaną strukturę kont (minimum viable).
2) Zasady płatności mieszanych i zwrotów.
3) Cotygodniową checklistę utrzymania rozdziału.
4) Co dokumentować, by uzasadnić transfery.
5) 14-dniowy plan migracji, żeby uporządkować bez zatrzymywania biznesu.`,
    thumbnail: "",
  },

  {
    id: "fintax-013",
    title: "Podstawowa obsługa listy płac (gdy mam 1–5 pracowników) + zgodność",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Porządkuje wypłaty, rejestry i raporty wewnętrzne bez błędów procesowych.",
    prompt: `Działaj jak administrator księgowości dla mikrofirmy (bez porad prawnych).

Dane wejściowe:
- Liczba pracowników.
- Częstotliwość wypłat (tygodniowo/co dwa tygodnie/miesięcznie).
- Rodzaj umów (jeśli dotyczy).
- Benefity/bonusy (jeśli dotyczy).
- Aktualne narzędzie.

Wygeneruj:
1) Checklistę na okres wypłaty (przed/w trakcie/po).
2) Minimalne pola do rejestracji dla pracownika (szablon).
3) Proces dokumentów płacowych i archiwizacji.
4) Alerty: sygnały niezgodności lub bałaganu.
5) Wewnętrzny miesięczny raport płac (1 strona).`,
    thumbnail: "",
  },

  {
    id: "fintax-014",
    title: "Szybki audyt wewnętrzny: czy moje liczby są czyste?",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Sprawdza spójność i wykrywa luki zanim staną się problemem.",
    prompt: `Działaj jak audytor wewnętrzny (poziom podstawowy).

Dane wejściowe:
- Miesiąc do sprawdzenia.
- Zarejestrowane przychody.
- Zarejestrowane koszty.
- Wyciągi bankowe (łączna kwota).
- Czy operuję gotówką.

Wygeneruj:
1) Checklistę audytu (20 punktów) do wykrycia niespójności.
2) Proste testy: sumy, wskaźniki, uzgodnienia.
3) „Listę ustaleń” z wagą (wysoka/średnia/niska).
4) Plan korekt wg priorytetu.
5) Co zautomatyzować, aby problem nie wracał.`,
    thumbnail: "",
  },

  {
    id: "fintax-015",
    title: "Plan kontroli gotówki, żeby nie tracić śladu",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Minimalny rejestr i dowody dla gotówki bez chaosu.",
    prompt: `Działaj jak praktyczny księgowy.

Dane wejściowe:
- % przychodów w gotówce.
- % kosztów w gotówce.
- Częstotliwość wpłat do banku.
- Czy zachowuję paragony (tak/nie).

Wygeneruj:
1) Księgę kasy (szablon) z polami i zasadami.
2) Dzienny/tygodniowy protokół rejestracji gotówki.
3) Zasady wpłat: kiedy, ile i jak to dokumentować.
4) Sygnały ubytków i sposoby kontroli.
5) Miesięczną rutynę uzgodnienia gotówki vs bank.`,
    thumbnail: "",
  },

  {
    id: "fintax-016",
    title: "Proces obsługi zwrotów i reklamacji (zgodność księgowa)",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Zapobiega bałaganowi, poprawnie księgując zwroty i chargebacki.",
    prompt: `Działaj jak księgowy dla biznesu cyfrowego.

Dane wejściowe:
- Platformy płatności.
- Częstotliwość zwrotów (niska/średnia/wysoka).
- Najczęstsze powody.
- Polityka zwrotów.

Wygeneruj:
1) Przepływ: prośba → akceptacja → zwrot → księgowanie → dowody.
2) Kategorie księgowe dla zwrotów/chargebacków.
3) Checklistę dowodów (zrzuty, e-maile, numery spraw).
4) Miesięczny raport zwrotów (pola i metryki).
5) Operacyjne zasady ograniczania oszustw i nadużyć.`,
    thumbnail: "",
  },

  {
    id: "fintax-017",
    title: "Podstawowy plan kontroli zapasów (jeśli sprzedaję produkt fizyczny)",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Minimalny system rejestracji przyjęć/wydań, aby uniknąć strat.",
    prompt: `Działaj jak kontroler magazynu (podstawy).

Dane wejściowe:
- Rodzaj produktów.
- Przybliżona liczba SKU.
- Kanał sprzedaży.
- Częstotliwość zakupów u dostawców.
- Główny problem (braki, nadmiar, straty).

Wygeneruj:
1) Szablon inwentarza (minimalne pola).
2) Proces przyjęć/wydań (krok po kroku).
3) Liczenie cykliczne (co tydzień/miesiąc) i jak robić to szybko.
4) Kluczowe metryki (rotacja, braki, ubytki/straty).
5) Checklistę miesięcznego zamknięcia dla zapasów.`,
    thumbnail: "",
  },

  {
    id: "fintax-018",
    title: "SOP dokumentacji: od kosztu do archiwum (styl firmowy)",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Zamienia chaos w standardową, powtarzalną procedurę.",
    prompt: `Działaj jak specjalista od SOP-ów księgowych.

Dane wejściowe:
- Kto wykonuje proces (ja / asystent).
- Narzędzia (Drive/OneDrive/Notion/Sheets).
- Typowe koszty.
- Częstotliwość zakupów.

Wygeneruj:
1) Pełny SOP: cel, zakres, odpowiedzialności, kroki, jakość.
2) Checklistę jakości (co musi mieć każdy zapis).
3) Szablony: rejestr kosztów, log różnic, tracker obowiązków.
4) Politykę backupów i kontroli wersji.
5) Wskaźniki procesu (czas, % kompletnych dokumentów itd.).`,
    thumbnail: "",
  },

  {
    id: "fintax-019",
    title: "Plan przygotowania deklaracji/przeglądu z księgowym (gotowy pakiet)",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Składa uporządkowany pakiet, żeby księgowy pracował szybciej i taniej.",
    prompt: `Działaj jak koordynator księgowości.

Dane wejściowe:
- Okres rozliczeniowy (miesiąc/kwartał/rok).
- Wolumen transakcji.
- Czy są przychody międzynarodowe.
- Czy są pracownicy.
- Narzędzia.

Wygeneruj:
1) Dokładną listę plików do przekazania (w kolejności).
2) Format nazewnictwa dla całego pakietu.
3) Executive summary dla księgowego (1 strona) z kluczowymi liczbami.
4) Końcową checklistę przed wysyłką (typowe błędy).
5) E-mail/wiadomość przekazania z jasnymi instrukcjami.`,
    thumbnail: "",
  },

  {
    id: "fintax-020",
    title: "Miesięczny dashboard zgodności: status, dowody i zaległości",
    area: "Finanse i Księgowość",
    category: "Podatki i Zgodność",
    summary:
      "Prosty dashboard, żeby co miesiąc wiedzieć, czy jesteś „na 100%”.",
    prompt: `Działaj jak analityk operacji finansowych.

Dane wejściowe:
- Obowiązki (lista).
- Źródła danych (banki, platformy, faktury).
- Zespół (sam / z księgowym / z administracją).
- Częstotliwość przeglądu.

Wygeneruj:
1) Strukturę dashboardu z sekcjami (obowiązki, dokumenty, uzgodnienia, rezerwy).
2) Pola dla zadania: odpowiedzialny, data, status, link do dowodu, notatki.
3) Tygodniowy rytm aktualizacji z checklistą.
4) „Sygnalizację świetlną” (zielony/żółty/czerwony) i reguły dla każdego koloru.
5) Wersję „minimum viable” w 10 minut i wersję „pro” w 60 minut.`,
    thumbnail: "",
  },
];
