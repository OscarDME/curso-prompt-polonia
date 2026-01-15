// src/lib/prompts/text/salud-clinica-explicacion-al-paciente.js

export const textPromptsSaludClinicaExplicacionAlPaciente = [
  {
    id: "saludexp-001",
    title: "Wyjaśnienie prawdopodobnej diagnozy (bez potwierdzania) prostym językiem",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Przekłada ustalenia kliniczne na jasne wyjaśnienie, bez straszenia i bez obiecywania ostatecznej diagnozy.",
    prompt: `Działaj jak lekarz i wyjaśnij pacjentowi, co może się dziać, używając prostego języka.

Dane wejściowe:
- Główny objaw.
- Czas trwania i przebieg.
- Istotne wyniki (jeśli są).
- Czego obawia się pacjent (główny lęk).

Wygeneruj:
1) Wyjaśnienie w 6–10 zdaniach (poziom szkoły średniej).
2) Różnicę między: „najbardziej prawdopodobne” a „co trzeba wykluczyć”.
3) Jakich danych brakuje i dlaczego są ważne.
4) Kolejne kroki (obserwacja, konsultacja, badania) z jasnym uzasadnieniem.
5) Empatyczne zakończenie + 3 zdania zmniejszające lęk bez bagatelizowania.`,
    thumbnail: "",
  },

  {
    id: "saludexp-002",
    title: "Przekazywanie wyników badań laboratoryjnych: jak je interpretować bez wprowadzania zamieszania",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Wyjaśnia częste wyniki badań w kontekście, unikając technicznego języka i niepotrzebnych alarmów.",
    prompt: `Działaj jak lekarz. Wyjaśnij pacjentowi wyniki badań laboratoryjnych.

Dane wejściowe:
- Lista wyników z zakresami (np. glukoza, HbA1c, cholesterol, TSH, morfologia).
- Objawy pacjenta (jeśli występują).
- Istotne informacje z wywiadu.

Wygeneruj:
1) Ogólne podsumowanie (1 akapit).
2) Tabelę w tekście (bez markdown) z: badanie → co mierzy → czy jest wysokie/niskie → typowe znaczenie.
3) Co może zafałszować wynik (częste błędy).
4) Jakie działania są zalecane (nawyki / kontrola / powtórzenie badania).
5) Objawy, przy których pilnie trzeba skonsultować się z lekarzem.`,
    thumbnail: "",
  },

  {
    id: "saludexp-003",
    title: "Wyjaśnienie planu leczenia krok po kroku (przestrzeganie zaleceń)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Zamienia zalecenia medyczne w codzienny plan działania, aby poprawić przestrzeganie leczenia.",
    prompt: `Działaj jak lekarz. Wyjaśnij plan leczenia tak, aby pacjent go realizował.

Dane wejściowe:
- Rozpoznanie lub problem (np. zapalenie żołądka, nadciśnienie, astma).
- Zalecone leki (nazwa/dawka/godzina) jeśli dotyczy.
- Zalecane zmiany stylu życia.
- Ograniczenia pacjenta (praca, godziny, budżet).

Wygeneruj:
1) Krótkie wyjaśnienie celu leczenia (2–3 zdania).
2) Codzienną rutynę w punktach (rano/popołudnie/wieczór).
3) „Triki” na przestrzeganie (przypomnienia, łączenie z nawykami).
4) Oczekiwane efekty vs częste działania niepożądane (bez straszenia).
5) Co zrobić, jeśli zapomni dawki (ogólnie, bez niebezpiecznych instrukcji).
6) Kiedy wrócić na kontrolę i jakie objawy wymagają wcześniejszej konsultacji.`,
    thumbnail: "",
  },

  {
    id: "saludexp-004",
    title: "Wyjaśnianie ryzyka i rokowania (bez straszenia) za pomocą prostych analogii",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Przekazuje ryzyko w zrozumiały sposób, z przykładami z życia codziennego i naciskiem na to, co można kontrolować.",
    prompt: `Działaj jak lekarz. Masz wyjaśnić pacjentowi ryzyko/prawdopodobieństwo.

Dane wejściowe:
- Problem zdrowotny.
- Obecne czynniki ryzyka.
- Wątpliwości lub lęki pacjenta.

Wygeneruj:
1) Wyjaśnienie prostym językiem bez skomplikowanych procentów.
2) Odpowiednią analogię z życia codziennego (nie infantylną).
3) Co pacjent może kontrolować (3–5 działań).
4) Czego nie może kontrolować (żeby zmniejszyć poczucie winy).
5) Plan kontroli i dlaczego monitorowanie zmniejsza ryzyko.`,
    thumbnail: "",
  },

  {
    id: "saludexp-005",
    title: "Wyjaśnienie „czerwonych flag” i kiedy jechać na SOR",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Jasna, uporządkowana lista objawów alarmowych z konkretnymi instrukcjami.",
    prompt: `Działaj jak lekarz. Wyjaśnij pacjentowi, które objawy oznaczają pilność.

Dane wejściowe:
- Objaw lub prawdopodobna diagnoza.
- Wiek i choroby współistniejące.
- Kontekst (mieszka sam, dostęp do transportu itp.).

Wygeneruj:
1) 6–10 czerwonych flag (od najpoważniejszych).
2) Co dokładnie zrobić przy każdej (np. „udać się dziś na SOR”).
3) Czego NIE robić (częste błędy).
4) Spokojne zakończenie: „to nie po to, by straszyć, tylko by Cię chronić”.`,
    thumbnail: "",
  },

  {
    id: "saludexp-006",
    title: "Wyjaśnienie, dlaczego NIE są potrzebne antybiotyki (oporność)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Odpowiada na oczekiwania pacjenta z empatią i jasną edukacją.",
    prompt: `Działaj jak lekarz. Pacjent prosi o antybiotyk, ale nie ma wskazań.

Dane wejściowe:
- Główny objaw (np. przeziębienie, ostre zapalenie oskrzeli, wirusowe zapalenie gardła).
- Czas trwania.
- Czego oczekuje pacjent („chcę coś mocnego”).

Wygeneruj:
1) Empatyczne uznanie (1–2 zdania).
2) Krótkie wyjaśnienie: wirus vs bakteria (prosto).
3) Realne ryzyka niepotrzebnych antybiotyków (3 punkty).
4) Co faktycznie pomaga (ogólny plan objawowy i samoopieka).
5) Objawy, które wskazywałyby na potrzebę ponownej oceny lub możliwy antybiotyk.`,
    thumbnail: "",
  },

  {
    id: "saludexp-007",
    title: "Wyjaśnienie badania obrazowego (RTG/USG/TK/MR) bez technicznego żargonu",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Opisuje, czego szuka badanie, jak się przygotować i czego oczekiwać po wyniku.",
    prompt: `Działaj jak lekarz. Wyjaśnij pacjentowi badanie obrazowe.

Dane wejściowe:
- Zlecone badanie (RTG/USG/TK/MR).
- Powód i podejrzenie kliniczne.
- Obawy pacjenta (promieniowanie, klaustrofobia, koszt).

Wygeneruj:
1) Czym jest badanie i jakie informacje daje (prosto).
2) Dlaczego je zlecono (cel kliniczny).
3) Czego się spodziewać w dniu badania (kroki, czas trwania).
4) Istotne ryzyka/środki ostrożności (bez straszenia).
5) Co oznacza wynik „prawidłowy” vs „znalezisko” i jakie są kolejne kroki.`,
    thumbnail: "",
  },

  {
    id: "saludexp-008",
    title: "Wyjaśnienie przewlekłej diagnozy (NT/Cukrzyca) w podejściu motywacyjnym",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Przekazuje przewlekłą diagnozę i plan kontroli bez obwiniania, podkreślając szybkie korzyści.",
    prompt: `Działaj jak lekarz w podejściu wywiadu motywującego.

Dane wejściowe:
- Rozpoznanie (nadciśnienie/cukrzyca/dyslipidemia).
- Ostatnie wartości (ciśnienie, HbA1c, LDL).
- Bariery pacjenta (czas, jedzenie, ruch, stres).

Wygeneruj:
1) Co oznacza rozpoznanie w 1 akapicie.
2) Dlaczego warto to kontrolować (konkretne korzyści).
3) 3 małe zmiany (mikronawyki), które dadzą efekt w 2 tygodnie.
4) Prosty plan kontroli (co mierzyć i kiedy).
5) Komunikat bez poczucia winy + wzmocnienie poczucia sprawczości.`,
    thumbnail: "",
  },

  {
    id: "saludexp-009",
    title: "Wyjaśnienie bólu: różnica między uszkodzeniem a nadwrażliwością (edukacja)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Pomaga pacjentom z przewlekłym bólem zrozumieć ból bez katastrofizowania.",
    prompt: `Działaj jak lekarz. Wyjaśnij ból bez straszenia pacjenta.

Dane wejściowe:
- Miejsce bólu.
- Czas trwania.
- Jakie wcześniejsze badania były prawidłowe (jeśli dotyczy).
- Obawy pacjenta (np. „zostanę kaleką”).

Wygeneruj:
1) Proste wyjaśnienie: ból ≠ zawsze uszkodzenie (bez unieważniania).
2) Jakie czynniki go nasilają (sen, stres, bezruch).
3) Jakie działania zwykle zmniejszają ból (stopniowany ruch, ciepło, nawyki).
4) Objawy, które byłyby alarmem i wymagają ponownej oceny.`,
    thumbnail: "",
  },

  {
    id: "saludexp-010",
    title: "Wyjaśnienie „kontroli” i dlaczego to nie znaczy „zignorowali mnie”",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Zmniejsza frustrację, gdy planem jest obserwacja i ponowna ocena.",
    prompt: `Działaj jak lekarz. Wyjaśnij, dlaczego planem jest kontrola/obserwacja.

Dane wejściowe:
- Objaw.
- Uspokajające ustalenia.
- Zalecany czas obserwacji.
- Co frustruje pacjenta?

Wygeneruj:
1) 5–7 jasnych zdań.
2) Co może się zmieniać w czasie, co czyni rozpoznanie bardziej klarownym.
3) Co pacjent powinien zapisywać (prosty dziennik).
4) Kiedy wrócić wcześniej (czerwone flagi).`,
    thumbnail: "",
  },

  {
    id: "saludexp-011",
    title: "Wyjaśnienie częstych vs niebezpiecznych działań niepożądanych (bez paniki)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Komunikuje bezpieczeństwo leku: co jest spodziewane, a co nie.",
    prompt: `Działaj jak lekarz. Wyjaśnij działania niepożądane leczenia.

Dane wejściowe:
- Lek (nazwa i do czego służy).
- Dawka i godziny.
- Kontekst pacjenta (alergie, ciąża, wiek).

Wygeneruj:
1) Częste działania niepożądane (3–6) i jak sobie z nimi radzić ogólnie.
2) Rzadkie, ale groźne działania niepożądane (2–4) i co zrobić, jeśli wystąpią.
3) Porady, jak lepiej tolerować (z jedzeniem, nawodnienie, godziny).
4) Objawy, przy których przerwać i skonsultować się (jasne sformułowania).`,
    thumbnail: "",
  },

  {
    id: "saludexp-012",
    title: "Wyjaśnienie, dlaczego zleca się konsultację specjalistyczną (skierowanie)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Uzasadnia skierowanie bez sprawiania, że pacjent czuje się „poważnie chory” lub porzucony.",
    prompt: `Działaj jak lekarz. Wyjaśnij pacjentowi skierowanie do specjalisty.

Dane wejściowe:
- Powód skierowania.
- Co próbowano do tej pory.
- Jaka wątpliwość kliniczna pozostaje.

Wygeneruj:
1) Wyjaśnienie w 1 akapicie: cel konsultacji.
2) Jakie pytania zada specjalista (2–4).
3) Co pacjent powinien zabrać (badania, lista objawów).
4) Co może się wydarzyć potem (możliwe kroki) bez obiecywania.`,
    thumbnail: "",
  },

  {
    id: "saludexp-013",
    title: "Wyjaśnienie rozpoznania „czynnościowego” (np. IBS) z podkreśleniem realności objawów",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Zapobiega poczuciu pacjenta, że „to wszystko w głowie”.",
    prompt: `Działaj jak lekarz. Wyjaśnij rozpoznanie czynnościowe (np. zespół jelita drażliwego, dyspepsja czynnościowa).

Dane wejściowe:
- Główne objawy.
- Prawidłowe badania (jeśli są).
- Zidentyfikowane wyzwalacze (stres, jedzenie itp.).

Wygeneruj:
1) Wyjaśnienie, które potwierdza, że objawy są realne.
2) Co oznacza, że badania są prawidłowe (dobre rokowanie).
3) Jakie mechanizmy mogą się do tego przyczyniać (motoryka, nadwrażliwość, oś jelita–mózg) prostym językiem.
4) Plan postępowania warstwowo: nawyki, dieta, wsparcie, kontrola.
5) Czerwone flagi do ponownej oceny.`,
    thumbnail: "",
  },

  {
    id: "saludexp-014",
    title: "Wyjaśnienie częstej infekcji i jej spodziewanego przebiegu (oś czasu)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Daje realistyczną oś czasu objawów i powrotu do zdrowia, zmniejszając niepokój i niepotrzebne wizyty.",
    prompt: `Działaj jak lekarz. Wyjaśnij spodziewany przebieg częstej infekcji.

Dane wejściowe:
- Typ (oddechowa, pokarmowa, moczowa, skórna).
- Aktualny dzień choroby.
- Dominujące objawy.

Wygeneruj:
1) Oś czasu dzień po dniu (lub przedziałami) tego, czego się spodziewać.
2) Jakie objawy mogą utrzymywać się i nie muszą być groźne (np. kaszel 2–3 tygodnie).
3) Jakie objawy wskazują na powikłanie.
4) Bezpieczne ogólne zalecenia pielęgnacyjne.`,
    thumbnail: "",
  },

  {
    id: "saludexp-015",
    title: "Wyjaśnienie bólu w klatce piersiowej niekardiologicznego (gdy to prawdopodobne) bez unieważniania",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Zmniejsza lęk i wyjaśnia częste przyczyny, gdy nie ma objawów alarmowych.",
    prompt: `Działaj jak lekarz. Wyjaśnij ból w klatce piersiowej prawdopodobnie niekardiologiczny, zachowując bezpieczeństwo.

Dane wejściowe:
- Charakterystyka bólu.
- Uspokajające ustalenia (jeśli są).
- Obawa pacjenta.

Wygeneruj:
1) Co sprawia, że to NIE wygląda na nagły problem kardiologiczny (bez gwarancji).
2) Częste przyczyny (mięśniowo-szkieletowa, refluks, lęk) wraz z podpowiedziami.
3) Plan samoopieki i kontroli.
4) Jasne czerwone flagi.`,
    thumbnail: "",
  },

  // --- completamos hasta 40 ---
  {
    id: "saludexp-016",
    title: "Wyjaśnienie „incydentalnego” wyniku w badaniu obrazowym (znalezisko przypadkowe)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Wyjaśnia częste znaleziska incydentalne i jak decyduje się, czy wymagają kontroli.",
    prompt: `Działaj jak lekarz. Wyjaśnij znalezisko incydentalne.

Dane wejściowe:
- Znalezisko (tekst opisu).
- Badanie (TK/MR/USG).
- Objawy pacjenta (jeśli są).

Wygeneruj:
1) Co znaczy „incydentalne” (prosto).
2) Jak często się to zdarza (bez wymyślania statystyk; opisowo).
3) Jakie kryteria zwykle decydują o kontroli vs braku kontroli.
4) Zalecany kolejny krok (obserwacja, powtórzenie, specjalista).`,
    thumbnail: "",
  },

  {
    id: "saludexp-017",
    title: "Wyjaśnienie, dlaczego objaw może wynikać z odwodnienia",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Łączy objawy (zawroty głowy, tachykardia, zmęczenie) z nawodnieniem w praktyczny sposób.",
    prompt: `Działaj jak lekarz. Wyjaśnij odwodnienie i jego związek z objawami.

Dane wejściowe:
- Objawy.
- Przybliżone spożycie płynów.
- Straty (biegunka, wymioty, wysiłek, upał).
- Parametry życiowe, jeśli są.

Wygeneruj:
1) Proste wyjaśnienie mechanizmu.
2) Jak sprawdzić w domu (objawy/wskaźniki).
3) Praktyczny ogólny plan nawodnienia i kiedy skonsultować się z lekarzem.`,
    thumbnail: "",
  },

  {
    id: "saludexp-018",
    title: "Wyjaśnienie zapalenia żołądka/refluksu i realistycznych zmian dietetycznych",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Krótka edukacja + lista zmian żywieniowych o dużym wpływie.",
    prompt: `Działaj jak lekarz. Wyjaśnij refluks/zapalenie żołądka prostym językiem.

Dane wejściowe:
- Objawy (zgaga, cofanie treści, ból w nadbrzuszu).
- Godziny posiłków.
- Spożycie kawy/alkoholu/ostrego jedzenia.
- Aktualne leki.

Wygeneruj:
1) Proste wyjaśnienie refluksu/zapalenia żołądka.
2) 8 realistycznych zmian dietetycznych (wyróżnij 3 najważniejsze).
3) Nawyki/postawa (godziny, uniesienie wezgłowia).
4) Czerwone flagi (utrata masy, wymioty z krwią, anemia, dysfagia).`,
    thumbnail: "",
  },

  {
    id: "saludexp-019",
    title: "Wyjaśnienie astmy: czym jest, co ją wyzwala i co znaczy kontrola",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Jasna definicja astmy, wyzwalacze i ogólny plan kontroli.",
    prompt: `Działaj jak lekarz. Wyjaśnij astmę pacjentowi.

Dane wejściowe:
- Objawy (świsty, kaszel nocny, duszność).
- Podejrzewane wyzwalacze.
- Aktualne leczenie, jeśli jest.

Wygeneruj:
1) Co dzieje się w drogach oddechowych (prosto).
2) Różnicę między „ratunkowe” a „kontrolujące” (bez przepisywania).
3) Częste wyzwalacze i jak je ograniczać.
4) Ogólny plan działania: co obserwować i kiedy pilnie skonsultować.`,
    thumbnail: "",
  },

  {
    id: "saludexp-020",
    title: "Wyjaśnienie POChP: przebieg, cele i samoopieka",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Jasna komunikacja u palaczy lub byłych palaczy bez obwiniania.",
    prompt: `Działaj jak lekarz. Wyjaśnij POChP.

Dane wejściowe:
- Objawy i ograniczenia.
- Historia palenia.
- Ostatnie zaostrzenia.

Wygeneruj:
1) Proste wyjaśnienie, czym jest POChP.
2) Jakie cele są realistyczne (lepsza tolerancja wysiłku, mniej zaostrzeń).
3) Priorytetowe działania (rzucenie palenia, szczepienia, aktywność).
4) Objawy zaostrzenia i kiedy to pilne.`,
    thumbnail: "",
  },

  {
    id: "saludexp-021",
    title: "Wyjaśnienie anemii: dlaczego daje objawy i co zwykle się bada",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Przekłada anemię na codzienne objawy i ogólny plan diagnostyki.",
    prompt: `Działaj jak lekarz. Wyjaśnij pacjentowi anemię.

Dane wejściowe:
- Hb/hematokryt (jeśli jest).
- Objawy (zmęczenie, bladość, duszność).
- Miesiączki/krwawienia/dieta.

Wygeneruj:
1) Czym jest anemia (prosto).
2) Dlaczego powoduje objawy.
3) Częste przyczyny w grupach (utrata krwi, niedobór żelaza, choroby przewlekłe) bez stawiania diagnozy.
4) Typowe kolejne kroki (badania i kontrola).
5) Czerwone flagi (omdlenie, ból w klatce, aktywne krwawienie).`,
    thumbnail: "",
  },

  {
    id: "saludexp-022",
    title: "Wyjaśnienie tarczycy (TSH/T4) i typowych objawów",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Wyjaśnia, co oznacza niedoczynność/nadczynność tarczycy bez żargonu.",
    prompt: `Działaj jak lekarz. Wyjaśnij funkcję tarczycy i wyniki badań.

Dane wejściowe:
- TSH, T4 (jeśli są).
- Objawy (waga, nastrój, kołatania, zimno/ciepło).
- Leki i wywiad.

Wygeneruj:
1) Co robi tarczyca (prosto).
2) Co intuicyjnie oznacza wysokie/niskie TSH.
3) Związek z objawami.
4) Co zwykle robi się dalej (potwierdzenie, powtórzenie, leczenie/kontrola).`,
    thumbnail: "",
  },

  {
    id: "saludexp-023",
    title: "Wyjaśnienie bólu krzyża: dlaczego ruch pomaga",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Zmniejsza lęk przed ruchem i wspiera bezpieczny powrót do sprawności.",
    prompt: `Działaj jak lekarz. Wyjaśnij mechaniczny ból krzyża i ogólne postępowanie.

Dane wejściowe:
- Początek (dźwiganie/pozycja).
- Promieniowanie tak/nie.
- Czerwone flagi nieobecne/obecne.

Wygeneruj:
1) Proste wyjaśnienie bólu mechanicznego.
2) Dlaczego całkowity odpoczynek pogarsza (prosto).
3) Jaki ruch zwykle pomaga (ogólnie).
4) Neurologiczne czerwone flagi wymagające pilnej oceny.`,
    thumbnail: "",
  },

  {
    id: "saludexp-024",
    title: "Wyjaśnienie cholesterolu i ryzyka sercowo-naczyniowego (bez obwiniania)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Wyjaśnia LDL/HDL/triglicerydy i działania o dużym wpływie.",
    prompt: `Działaj jak lekarz. Wyjaśnij pacjentowi lipidogram.

Dane wejściowe:
- LDL, HDL, TG.
- Wywiad rodzinny i czynniki ryzyka.
- Aktualne nawyki.

Wygeneruj:
1) Proste wyjaśnienie każdego składnika.
2) Co oznacza „ryzyko” i dlaczego ma znaczenie w długim okresie.
3) 5 działań o dużym wpływie (jedzenie/aktywność/sen).
4) Zalecana kontrola i motywujące podsumowanie.`,
    thumbnail: "",
  },

  {
    id: "saludexp-025",
    title: "Wyjaśnienie, dlaczego objaw może wynikać ze stresu (bez unieważniania)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Łączy ciało i psychikę z szacunkiem, potwierdzając realność objawów.",
    prompt: `Działaj jak lekarz. Wyjaśnij związek stres–objawy bez mówienia „to psychiczne”.

Dane wejściowe:
- Objawy fizyczne.
- Kontekst stresu.
- Prawidłowe badania (jeśli dotyczy).

Wygeneruj:
1) Potwierdzenie: „Twój objaw jest realny”.
2) Proste wyjaśnienie osi stres–ciało.
3) Plan postępowania: nawyki + kontrola + kiedy ponownie ocenić.
4) 3 praktyczne techniki regulacji (oddech, przerwa, sen).`,
    thumbnail: "",
  },

  {
    id: "saludexp-026",
    title: "Wyjaśnienie „prawidłowego” EKG i czego to NIE wyklucza",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Unika fałszywego spokoju lub fałszywego alarmu: wyjaśnia ograniczenia badania.",
    prompt: `Działaj jak lekarz. Wyjaśnij prawidłowe EKG.

Dane wejściowe:
- Powód wykonania EKG.
- Aktualne objawy.
- Czynniki ryzyka.

Wygeneruj:
1) Co ocenia EKG.
2) Co znaczy, że jest prawidłowe.
3) Czego NIE wyklucza (wyjaśnij ostrożnie).
4) Co dalej (obserwacja, dodatkowe badania lub kontrola) zależnie od objawów.`,
    thumbnail: "",
  },

  {
    id: "saludexp-027",
    title: "Wyjaśnienie, dlaczego boli bardziej w nocy (zapalne vs mechaniczne)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Pomaga rozumieć wzorce bólu bez samodiagnozowania.",
    prompt: `Działaj jak lekarz. Wyjaśnij wzorce bólu w dzień/noc.

Dane wejściowe:
- Okolica.
- Wzorzec (nocny, poranny, z ruchem).
- Sztywność i czas trwania.
- Objawy ogólne.

Wygeneruj:
1) Proste wyjaśnienie typowych wzorców (mechaniczny vs zapalny) bez diagnozowania.
2) Jakie dane pomogłyby to doprecyzować.
3) Kiedy to jest alarm (gorączka, spadek masy, ubytki neurologiczne).`,
    thumbnail: "",
  },

  {
    id: "saludexp-028",
    title: "Wyjaśnienie szczepień: korzyści, typowe działania niepożądane i mity",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Spokojna komunikacja oparta na bezpieczeństwie dla wątpliwości dotyczących szczepień.",
    prompt: `Działaj jak lekarz. Wyjaśnij szczepionkę zalecaną pacjentowi.

Dane wejściowe:
- Szczepionka (grypa, COVID, tężec, pneumokoki, HPV itd.).
- Wiek i choroby współistniejące.
- Wątpliwości pacjenta.

Wygeneruj:
1) Główne korzyści (2–4).
2) Częste działania niepożądane (czego się spodziewać).
3) Rzadkie objawy, przy których trzeba się skonsultować.
4) Odpowiedź na 3 częste mity, z szacunkiem i prostym językiem.`,
    thumbnail: "",
  },

  {
    id: "saludexp-029",
    title: "Wyjaśnienie higieny snu przy bezsenności (praktyczny plan)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Daje konkretne zalecenia bez moralizowania i perfekcjonizmu.",
    prompt: `Działaj jak lekarz. Wyjaśnij higienę snu.

Dane wejściowe:
- Zwykła godzina zasypiania/budzenia.
- Spożycie kofeiny/alkoholu.
- Drzemki tak/nie.
- Stres.

Wygeneruj:
1) 8 praktycznych zasad (wyróżnij 3 pierwsze).
2) Rutynę 30 minut przed snem (krok po kroku).
3) Co zrobić, jeśli nie zaśniesz w 20–30 min.
4) Kiedy rozważyć przyczyny medyczne (bezdech, depresja, tarczyca).`,
    thumbnail: "",
  },

  {
    id: "saludexp-030",
    title: "Wyjaśnienie bólu głowy: migrena vs napięciowy (edukacja)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Pomaga pacjentowi rozpoznawać wzorce i wyzwalacze.",
    prompt: `Działaj jak lekarz. Wyjaśnij migrenę vs ból napięciowy.

Dane wejściowe:
- Charakterystyka bólu.
- Objawy towarzyszące (nudności, światłowstręt).
- Częstość/miesiąc.
- Stosowanie leków przeciwbólowych.

Wygeneruj:
1) Proste wyjaśnienie obu typów.
2) Częste wyzwalacze i jak je identyfikować.
3) Dlaczego ważne jest unikanie nadużywania leków przeciwbólowych (prosto).
4) Czerwone flagi wymagające pilnej oceny.`,
    thumbnail: "",
  },

  {
    id: "saludexp-031",
    title: "Wyjaśnienie czynnościowego bólu brzucha vs alarmy gastroenterologiczne",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Wyjaśnia, dlaczego czasem nie ma widocznej „zmiany” i jak się to prowadzi.",
    prompt: `Działaj jak lekarz. Wyjaśnij nawracający ból brzucha bez objawów alarmowych.

Dane wejściowe:
- Wzorzec bólu.
- Związek z jedzeniem/stresem/wypróżnieniem.
- Wcześniejsze badania.

Wygeneruj:
1) Proste wyjaśnienie (z potwierdzeniem realności).
2) Strategie praktyczne: dieta, błonnik, nawodnienie, rutyna.
3) Co obserwować (dziennik objawów).
4) Alarmy GI (krwawienie, gorączka, spadek masy, anemia, nocne objawy).`,
    thumbnail: "",
  },

  {
    id: "saludexp-032",
    title: "Wyjaśnienie zakażenia układu moczowego: objawy, postępowanie i profilaktyka",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Jasna edukacja dla niepowikłanego zapalenia pęcherza + objawy alarmowe.",
    prompt: `Działaj jak lekarz. Wyjaśnij pacjentowi zakażenie układu moczowego (zapalenie pęcherza).

Dane wejściowe:
- Objawy.
- Poprzednie epizody tak/nie.
- Ciąża tak/nie.
- Gorączka/ból w okolicy lędźwiowej tak/nie.

Wygeneruj:
1) Co się dzieje i dlaczego piecze (prosto).
2) Co pomaga (nawodnienie, działania ogólne).
3) Profilaktyka (nawyki).
4) Objawy sugerujące zakażenie „wyżej” (odmiedniczkowe) i pilność.`,
    thumbnail: "",
  },

  {
    id: "saludexp-033",
    title: "Wyjaśnienie wyniku HbA1c i realistycznych celów",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Tłumaczy HbA1c jako prostą średnią i wskazuje kolejne kroki.",
    prompt: `Działaj jak lekarz. Wyjaśnij HbA1c.

Dane wejściowe:
- HbA1c.
- Pomiary glukozy (jeśli są).
- Aktualne leczenie.
- Trudności pacjenta.

Wygeneruj:
1) Czym jest HbA1c (średnia z 2–3 miesięcy).
2) Co oznacza aktualna wartość (opisowo).
3) 3 działania o dużym wpływie (posiłki, ruch, sen).
4) Prosty plan kontroli i pomiarów.`,
    thumbnail: "",
  },

  {
    id: "saludexp-034",
    title: "Wyjaśnienie, dlaczego aktywność fizyczna jest częścią leczenia (bez ganiącego tonu)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Motywuje korzyściami natychmiastowymi i planem minimum.",
    prompt: `Działaj jak lekarz. Wyjaśnij aktywność fizyczną jako leczenie.

Dane wejściowe:
- Rozpoznanie (nadciśnienie, cukrzyca, lęk, ból krzyża itd.).
- Aktualny stan (siedzący tryb, urazy).
- Bariery (czas, ból, wstyd).

Wygeneruj:
1) Korzyści krótkoterminowe (7–14 dni) i długoterminowe.
2) Plan minimum (10–15 min/dzień) z tygodniową progresją.
3) Jak robić to bezpiecznie (rozgrzewka, sygnały do przerwania).
4) Realistyczny komunikat motywacyjny.`,
    thumbnail: "",
  },

  {
    id: "saludexp-035",
    title: "Wyjaśnienie nadwagi/otyłości jako stanu medycznego (bez stygmatyzacji)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Współczujące podejście: biologia, środowisko, nawyki i trwałe cele.",
    prompt: `Działaj jak lekarz. Mów o masie ciała bez stygmatyzowania.

Dane wejściowe:
- BMI lub masa/wzrost (jeśli dotyczy).
- Choroby współistniejące.
- Cel pacjenta.

Wygeneruj:
1) Wyjaśnienie bez winy: dlaczego ciało reguluje masę.
2) Realistyczne cele (zdrowie > estetyka).
3) 5 zrównoważonych działań w kolejności wpływu.
4) Kontrola i sygnały zaburzeń odżywiania, by rozważyć wsparcie.`,
    thumbnail: "",
  },

  {
    id: "saludexp-036",
    title: "Wyjaśnienie bólu menstruacyjnego (dysmenorrhea) i kiedy się martwić",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Rozróżnia typowy ból od sygnałów endometriozy/objawów alarmowych.",
    prompt: `Działaj jak lekarz. Wyjaśnij ból miesiączkowy.

Dane wejściowe:
- Nasilenie i przebieg.
- Czy utrudnia codzienne funkcjonowanie.
- Obfite krwawienia tak/nie.
- Ból między miesiączkami lub przy współżyciu (jeśli dotyczy).

Wygeneruj:
1) Proste wyjaśnienie dysmenorrhei.
2) Ogólne metody łagodzenia i nawyki.
3) Sygnały sugerujące diagnostykę (endometrioza, anemia itd.).
4) Plan kontroli.`,
    thumbnail: "",
  },

  {
    id: "saludexp-037",
    title: "Wyjaśnienie, dlaczego zaleca się fizjoterapię",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Zwiększa przestrzeganie: wyjaśnia cel, oczekiwania i czas.",
    prompt: `Działaj jak lekarz. Wyjaśnij wskazanie do fizjoterapii.

Dane wejściowe:
- Rozpoznanie (ból krzyża, bark, kolano, skręcenie).
- Aktualny ból.
- Czas trwania.

Wygeneruj:
1) Co robi fizjoterapia i dlaczego działa.
2) Czego oczekiwać po 2 tygodniach vs po 6 tygodniach.
3) Znaczenie ćwiczeń w domu (bez obwiniania).
4) Kiedy ponownie ocenić, jeśli się pogarsza.`,
    thumbnail: "",
  },

  {
    id: "saludexp-038",
    title: "Wyjaśnienie planu profilaktyki (check-up) według wieku i ryzyka",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Prosta lista kontrolna profilaktyki (szczepienia, badania przesiewowe) dopasowana do kontekstu.",
    prompt: `Działaj jak lekarz. Wyjaśnij plan profilaktyki/badań przesiewowych.

Dane wejściowe:
- Wiek/płeć.
- Wywiad rodzinny.
- Nawyki (tytoń, alkohol).
- Choroby współistniejące.

Wygeneruj:
1) 5–10 działań profilaktycznych w kolejności priorytetu.
2) Dlaczego każde jest ważne (po 1 zdaniu).
3) Częstotliwość kontroli (rocznie, co 3–5 lat itd. ogólnie).
4) Motywujące przesłanie o długowieczności i jakości życia.`,
    thumbnail: "",
  },

  {
    id: "saludexp-039",
    title: "Wyjaśnienie, dlaczego zaleca się ograniczenie soli/cukru (prosty mechanizm)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Łączy spożycie z objawami/wynikami i proponuje realistyczne zamienniki.",
    prompt: `Działaj jak lekarz. Wyjaśnij ograniczenie soli i/lub cukru.

Dane wejściowe:
- Rozpoznanie (nadciśnienie, stan przedcukrzycowy, obrzęki itd.).
- Aktualne nawyki.
- Bariery kulturowe i budżet.

Wygeneruj:
1) Proste wyjaśnienie mechanizmu (dlaczego wpływa na organizm).
2) 7 realistycznych zamienników (prawdziwe jedzenie, sklep).
3) „Zasada 3”: 3 zmiany dające 80% efektu.
4) Kontrola: co mierzyć i kiedy.`,
    thumbnail: "",
  },

  {
    id: "saludexp-040",
    title: "Wiadomość po wizycie: podsumowanie + kolejne kroki (WhatsApp/e-mail)",
    area: "Zdrowie i Medycyna",
    category: "Wyjaśnienie dla pacjenta",
    summary:
      "Krótkie podsumowanie do wysłania pacjentowi: plan, kontrola i objawy alarmowe.",
    prompt: `Działaj jak lekarz. Napisz wiadomość po wizycie dla pacjenta.

Dane wejściowe:
- Główny problem.
- Uzgodniony plan (nawyki/badania/ogólne leczenie).
- Sugerowana data kontroli.
- Czerwone flagi.

Wygeneruj:
1) Krótką wiadomość (maks. 1200 znaków) w ciepłym i jasnym tonie.
2) Lista kolejnych kroków (maks. 5 punktów).
3) Objawy alarmowe (maks. 5 punktów).
4) Empatyczne zakończenie.`,
    thumbnail: "",
  },
];
