// src/lib/prompts/viral-text/captions.js
// Unikalny obszar i kategoria dla CAŁEGO tego pliku:
const AREA = "Podpisy";
const CATEGORY = "Nagłówki + pierwsza linia";

export const viralTextPromptsCaptions = [
  {
    id: "viral-caption-titulares-001",
    title: "20 nagłówków z korzyścią + ciekawością",
    summary: "Krótkie nagłówki, które otwierają pętlę w pierwszej linii.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 nagłówków (max 9 słów) do posta o [TEMAT] skierowanego do [ODBIORCY].
Zasady:
- Muszą obiecywać konkretną korzyść.
- Muszą zawierać mikro „lukę ciekawości”.
- Bez przesady („gwarantowane”, „miliony” itd.).
Podaj w numerowanej liście.`,
  },
  {
    id: "viral-caption-titulares-002",
    title: "Nagłówki w stylu „Czego nikt ci nie mówi”",
    summary: "Warianty tej samej idei bez powtórek.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 25 nagłówków dla [TEMAT] używając idei „Czego nikt ci nie mówi…”.
Każdy nagłówek ma być unikalny i konkretny (wspomnij prawdziwy szczegół).
Maksymalnie 10 słów.`,
  },
  {
    id: "viral-caption-titulares-003",
    title: "Pierwsza linia w stylu rozmowy",
    summary: "Otwarcia brzmiące jak DM i wciągające.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 30 pierwszych linijek do podpisu (caption), które brzmią jak prawdziwa rozmowa.
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].
Zasady:
- Zacznij od „Hej,” albo „Przysięgam,” albo „Słuchaj,” (wymieszaj).
- 6–12 słów.
- Ma zachęcać do czytania dalej.`,
  },
  {
    id: "viral-caption-titulares-004",
    title: "Nagłówki z realistycznymi liczbami",
    summary: "Liczby dla wiarygodności bez ściemy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj mi 25 nagłówków z realistycznymi liczbami dla [TEMAT].
Przykładowe dozwolone liczby: 3, 5, 7, 10, 30, 60, 90.
Unikaj „100x”, „milioner”, „w 1 dzień”.
Maksymalnie 11 słów.`,
  },
  {
    id: "viral-caption-titulares-005",
    title: "Nagłówki obalające mity",
    summary: "Obalanie mitów bez agresji.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 nagłówków, które obalają popularny mit w [NISZA].
Struktura: „Mit: [X]. Rzeczywistość: [Y].”
[X] i [Y] krótkie (max 6 słów każde).`,
  },
  {
    id: "viral-caption-titulares-006",
    title: "Pierwsza linia z wyznaniem",
    summary: "Krótkie wyznanie otwierające pętlę.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 25 pierwszych linijek caption w formie wyznania dla [TEMAT].
Zasady:
- Muszą zaczynać się od „Przyznaję, że…”, „Zauważyłem(am), że…”, albo „Kiedyś ja…”.
- 8–14 słów.
- Mają sugerować lekcję dla czytelnika.`,
  },
  {
    id: "viral-caption-titulares-007",
    title: "Nagłówki typu checklist",
    summary: "Hooki w formie listy do zapisania.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 nagłówków w stylu checklist dla [TEMAT].
Możliwe szablony:
- „Checklist: jeśli masz X, zrób Y”
- „Zanim zrobisz X, sprawdź to”
- „Jeśli chcesz X, nie zapomnij o tym”
Maksymalnie 12 słów.`,
  },
  {
    id: "viral-caption-titulares-008",
    title: "Nagłówki z „sam(a) siebie sabotujesz”",
    summary: "Ból + domyślne rozwiązanie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 25 nagłówków dla [ODBIORCY] o autosabotażu w [TEMAT].
Zacznij od „Sam(a) siebie sabotujesz, gdy…”
Zakończ jasną konsekwencją.
Maksymalnie 12 słów.`,
  },
  {
    id: "viral-caption-titulares-009",
    title: "Nagłówki z kontrastem „przed/po”",
    summary: "Wizualny kontrast dla wysokiej retencji.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 nagłówków w strukturze „Przed / Po” dla [TEMAT].
Przykład: „Przed: X. Po: Y.”
X ma być bólem, a Y realistycznym rezultatem.
Maksymalnie 14 słów łącznie.`,
  },
  {
    id: "viral-caption-titulares-010",
    title: "Pierwsza linia z niewygodnym pytaniem",
    summary: "Bezpośrednie pytanie, które zmusza do mentalnej odpowiedzi.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 30 pierwszych linijek w formie „niewygodnego, ale pomocnego” pytania dla [ODBIORCY] o [TEMAT].
Zasady:
- 8–12 słów.
- Bez oceniania i obrażania.
- Ma celować w konkretne zachowanie.`,
  },

  {
    id: "viral-caption-titulares-011",
    title: "Nagłówki „zrób to zamiast tamtego”",
    summary: "Bezpośrednie porównanie dla jasności.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 25 nagłówków dla [TEMAT] według szablonu:
„Zamiast [X], zrób [Y].”
[X] i [Y] muszą być konkretnymi działaniami.
Maksymalnie 11 słów.`,
  },
  {
    id: "viral-caption-titulares-012",
    title: "Pierwsza linia z mini-historią",
    summary: "Mikro historia, która otwiera pętlę w jednym zdaniu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 pierwszych linijek, które brzmią jak początek prawdziwej historii.
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].
Zasady:
- Dodaj 1 konkretny detal (miejsce, godzina, liczba).
- Maksymalnie 14 słów.
- Musi kończyć się „i wtedy coś zrozumiałem(am)”.`,
  },
  {
    id: "viral-caption-titulares-013",
    title: "Nagłówki z obietnicą szablonu",
    summary: "Hook pod komentarz/DM.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 nagłówków obiecujących szablon bez brzmienia jak twarda sprzedaż.
Uwzględnij „szablon” lub „poradnik” lub „checklistę”.
Temat: [TEMAT].
Maksymalnie 12 słów.`,
  },
  {
    id: "viral-caption-titulares-014",
    title: "Nagłówki „gdybym zaczynał(a) dziś”",
    summary: "Mentorski ton budujący zaufanie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 20 nagłówków zaczynających się od:
„Gdybym zaczynał(a) dziś w [TEMAT]…”
Zakończ konkretnym działaniem.
Maksymalnie 13 słów.`,
  },
  {
    id: "viral-caption-titulares-015",
    title: "Pierwsza linia „zaoszczędzę ci czas”",
    summary: "Realistyczna obietnica oszczędności czasu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 25 pierwszych linijek do caption z obietnicą oszczędzenia czasu.
Szablony:
- „Zaoszczędzę ci X godzin dzięki temu…”
- „To pozwoli ci uniknąć X błędów…”
Używaj realistycznych liczb. Temat: [TEMAT].`,
  },
  {
    id: "viral-caption-titulares-016",
    title: "Nagłówki „część, którą ignorujesz”",
    summary: "Skupienie na niewidocznym/kluczowym.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 25 nagłówków dla [TEMAT] o „części, którą ignorujesz”.
Musi zawierać jasny obiekt: „twoja oferta”, „pierwsza sekunda”, „twoje CTA” itd.
Maksymalnie 12 słów.`,
  },
  {
    id: "viral-caption-titulares-017",
    title: "Pierwsza linia z wyzwaniem",
    summary: "Proste wyzwanie pod komentarze/engagement.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 pierwszych linijek będących wyzwaniem dla [ODBIORCY] w temacie [TEMAT].
Zasady:
- Zacznij od „Wyzwanie:”
- Jedno zdanie.
- Zakończ „dasz radę?”`,
  },
  {
    id: "viral-caption-titulares-018",
    title: "Nagłówki „przestań robić to”",
    summary: "Delikatny zakaz, by przyciągnąć uwagę.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 30 nagłówków zaczynających się od:
„Przestań robić to w [TEMAT]…”
Potem dodaj krótkie „dlaczego” (max 6 słów).
Bez agresji.`,
  },
  {
    id: "viral-caption-titulares-019",
    title: "Pierwsza linia „nie jesteś sam(a)”",
    summary: "Empatia dla niepewnych odbiorców.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 empatycznych pierwszych linijek dla [ODBIORCY] o [BÓL].
Zasady:
- Muszą zawierać „nie jesteś sam(a)” lub „to spotyka nas wszystkich” (różnie).
- Muszą obiecywać rozwiązanie w poście/wideo.
- Maksymalnie 14 słów.`,
  },
  {
    id: "viral-caption-titulares-020",
    title: "Nagłówki typu „częste błędy”",
    summary: "Klasyk do zapisywania.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 25 nagłówków w stylu „Częste błędy” dla [TEMAT].
Przykłady:
- „3 częste błędy, które kosztują cię X”
- „Błędy, które blokują cię w X”
Używaj realistycznych liczb i jasnego języka.`,
  },

  {
    id: "viral-caption-titulares-021",
    title: "Pierwsza linia „to zmienia grę”",
    summary: "Mocne otwarcia bez ściemy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 25 pierwszych linijek z „to zmienia grę”.
Zasady:
- Muszą wskazywać, czym jest „to” (konkretne działanie).
- Bez absolutnych obietnic.
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].`,
  },
  {
    id: "viral-caption-titulares-022",
    title: "Nagłówki z prostą analogią",
    summary: "Krótkie metafory do wyjaśniania trudnych idei.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 nagłówków z prostymi analogiami dla [TEMAT].
Przykład: „Twoja oferta jest jak menu: jeśli myli, nie kupują.”
Maksymalnie 16 słów.`,
  },
  {
    id: "viral-caption-titulares-023",
    title: "Pierwsza linia „wytłumaczę ci prosto”",
    summary: "Obietnica natychmiastowej jasności.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 30 pierwszych linijek w stylu:
„Wytłumaczę ci prosto: …”
Musi wprowadzić [TEMAT] i obiecać wyjaśnienie w 3 krokach.
Maksymalnie 14 słów.`,
  },
  {
    id: "viral-caption-titulares-024",
    title: "Nagłówki „sprawdziłem(am), żebyś ty nie musiał(a)”",
    summary: "Autorytet przez doświadczenie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 nagłówków z:
„Sprawdziłem(am) to, żebyś ty nie…” 
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].
Dodaj realistyczną konsekwencję i ukrytą lekcję.`,
  },
  {
    id: "viral-caption-titulares-025",
    title: "Pierwsza linia z liczbą, która boli",
    summary: "Realistyczna liczba, która przykuwa uwagę.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 pierwszych linijek z „bolesną” liczbą (realistyczną) o [TEMAT].
Np.: „Straciłem(am) 3 godziny, bo nie zrobiłem(am) tego…”
Bez absurdalnych liczb. Maksymalnie 14 słów.`,
  },
  {
    id: "viral-caption-titulares-026",
    title: "Nagłówki na „zapisz to”",
    summary: "Od początku pod kątem zapisywania.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 25 nagłówków, które sprawią, że ludzie będą chcieli zapisać post/wideo.
Musi sugerować:
- checklistę
- kroki
- szablon
Temat: [TEMAT]. Maksymalnie 12 słów.`,
  },
  {
    id: "viral-caption-titulares-027",
    title: "Pierwsza linia z mikro-obietnicą",
    summary: "Jasna mikro obietnica w jednym zdaniu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 30 pierwszych linijek z krótką obietnicą dla [ODBIORCY].
Szablon: „Dziś wyniesiesz [KORZYŚĆ] w [CZAS].”
[CZAS] realistyczny (30s, 2min, 5min).
Temat: [TEMAT].`,
  },
  {
    id: "viral-caption-titulares-028",
    title: "Nagłówki „jeśli robisz X, dzieje się Y”",
    summary: "Prosty związek przyczynowo-skutkowy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 25 nagłówków przyczyna-skutek:
„Jeśli robisz [X], dzieje się [Y].”
Dla [TEMAT]. [X] i [Y] muszą być konkretne.
Maksymalnie 13 słów.`,
  },
  {
    id: "viral-caption-titulares-029",
    title: "Pierwsza linia „powiem ci coś”",
    summary: "Otwarcie jak sekret/wyznanie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 30 pierwszych linijek zaczynających się od:
„Powiem ci coś:”
Temat: [TEMAT].
To, co dalej, ma być konkretne i przydatne (nie ogólne).`,
  },
  {
    id: "viral-caption-titulares-030",
    title: "Nagłówki „to nie X, to Y”",
    summary: "Mocne przeformułowanie na scroll-stopper.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 25 nagłówków z:
„To nie [X], to [Y].”
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].
[X] ma być popularnym przekonaniem; [Y] prawdziwą przyczyną.`,
  },

  {
    id: "viral-caption-titulares-031",
    title: "Pierwsza linia do treści edukacyjnych",
    summary: "Didaktyczne otwarcia bez nudy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 25 edukacyjnych pierwszych linijek dla [TEMAT].
Zasady:
- Muszą obiecywać „w 3 punktach”.
- Muszą zawierać praktyczną korzyść.
- Maksymalnie 14 słów.`,
  },
  {
    id: "viral-caption-titulares-032",
    title: "Nagłówki „na twoim miejscu”",
    summary: "Mentoring i bliskość.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 nagłówków zaczynających się od:
„Na twoim miejscu zrobił(a)bym tak…”
Temat: [TEMAT].
Musi kończyć się konkretnym działaniem. Maksymalnie 14 słów.`,
  },
  {
    id: "viral-caption-titulares-033",
    title: "Pierwsza linia z ostrzeżeniem",
    summary: "Przydatne ostrzeżenia, bez paniki.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 pierwszych linijek w formie ostrzeżenia dla [TEMAT].
Szablony:
- „Uważaj na to…”
- „Nie daj się w to wciągnąć…”
- „Zanim zrobisz X, zobacz to…”
Maksymalnie 12 słów.`,
  },
  {
    id: "viral-caption-titulares-034",
    title: "Nagłówki pod komentarze z keywordem",
    summary: "Zaprojektowane, by wywoływać komentarze.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 25 nagłówków kończących się:
„Napisz w komentarzu [SŁOWO_KLUCZOWE], a ci to podeślę.”
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].
Upewnij się, że to, co „podeślesz”, jest wartościowe (szablon/poradnik/lista).`,
  },
  {
    id: "viral-caption-titulares-035",
    title: "Pierwsza linia z mini-wyzwaniem",
    summary: "Otwarcia zachęcające, by spróbować dziś.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 pierwszych linijek z mini-wyzwaniem dla [ODBIORCY] o [TEMAT].
Musi zawierać „dziś” i działanie poniżej 5 minut.
Maksymalnie 14 słów.`,
  },
  {
    id: "viral-caption-titulares-036",
    title: "Nagłówki „to cię kosztuje”",
    summary: "Realistyczny koszt czasu/pieniędzy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 25 nagłówków z:
„To kosztuje cię [PIENIĄDZE/CZAS]…”
Temat: [TEMAT].
Używaj realistycznych liczb lub określeń („godziny”, „klienci”, „energia”).
Maksymalnie 13 słów.`,
  },
  {
    id: "viral-caption-titulares-037",
    title: "Pierwsza linia: sprzedawaj bez sprzedawania",
    summary: "Wartość + ciekawość bez sprzedażowego tonu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 25 pierwszych linijek dla [OFERTA], w których NIE brzmi to jak sprzedaż.
Musi dać realny tip i otworzyć pętlę.
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].`,
  },
  {
    id: "viral-caption-titulares-038",
    title: "Nagłówki „prawda jest taka…”",
    summary: "Krótka prawda + szczegół, który zaskakuje.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 30 nagłówków zaczynających się od:
„Prawda jest taka…”
Temat: [TEMAT].
Dodaj konkretny szczegół (metryka, przykład, zasada, zdanie).
Maksymalnie 12 słów.`,
  },
  {
    id: "viral-caption-titulares-039",
    title: "Pierwsza linia „nikt o tym nie mówi”",
    summary: "Pomijanie + ciekawość.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 20 pierwszych linijek z:
„Nikt o tym nie mówi…”
Temat: [TEMAT].
Musi wskazywać coś realnego i użytecznego (proces, krok, błąd, detal).
Maksymalnie 13 słów.`,
  },
  {
    id: "viral-caption-titulares-040",
    title: "Nagłówki „3 sygnały, że…”",
    summary: "Sygnały = do zapisania + do komentowania.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 nagłówków z:
„3 sygnały, że…”
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].
„Sygnały” mają być konkretne, nie abstrakcyjne.
Maksymalnie 13 słów.`,
  },

  {
    id: "viral-caption-titulares-041",
    title: "Pierwsza linia z gotową frazą",
    summary: "Zdanie gotowe do skopiowania.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 pierwszych linijek zawierających dokładną frazę w cudzysłowie dla [ODBIORCY].
Fraza ma być „kopiuj-wklej” i przydatna w [TEMAT].
Maksymalnie 16 słów.`,
  },
  {
    id: "viral-caption-titulares-042",
    title: "Nagłówki „to nie jest normalne”",
    summary: "Umiarkowane zaskoczenie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 nagłówków zaczynających się od:
„To nie jest normalne:”
Temat: [TEMAT].
Dokończ realistycznym faktem lub danymi, które zaskoczą (bez przesady).
Maksymalnie 13 słów.`,
  },
  {
    id: "viral-caption-titulares-043",
    title: "Pierwsza linia: „za bardzo to komplikujesz”",
    summary: "Uproszczenie + obietnica.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 25 pierwszych linijek z:
„Za bardzo to komplikujesz…”
Temat: [TEMAT].
Musi kończyć się prostym rozwiązaniem („zrób to zamiast”).`,
  },
  {
    id: "viral-caption-titulares-044",
    title: "Nagłówki „oto różnica”",
    summary: "Porównanie dające jasność.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 25 nagłówków z:
„To jest różnica między [A] a [B]”
Temat: [TEMAT].
[A] i [B] muszą być pojęciami z niszy i użyteczne.`,
  },
  {
    id: "viral-caption-titulares-045",
    title: "Pierwsza linia: „nie potrzebujesz więcej”",
    summary: "Przeciwko przeładowaniu informacją.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 pierwszych linijek z:
„Nie potrzebujesz więcej [X], potrzebujesz [Y].”
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].
[X] i [Y] muszą być konkretne.`,
  },
  {
    id: "viral-caption-titulares-046",
    title: "Nagłówki „gdybyś wiedział(a)”",
    summary: "Mocna luka ciekawości.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 25 nagłówków z:
„Gdybyś wiedział(a) to o [TEMAT]…”
Dokończ konkretną wskazówką (nie ogólnikiem).
Maksymalnie 13 słów.`,
  },
  {
    id: "viral-caption-titulares-047",
    title: "Pierwsza linia pod „część 2”",
    summary: "Otwarcia z miejscem na serię.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 pierwszych linijek zaprojektowanych tak, by skończyć na „część 2”.
Temat: [TEMAT].
Zasady:
- Zasugeruj, że jest krok, który ludzie zawsze pomijają.
- Nie zdradzaj wszystkiego.
Maksymalnie 14 słów.`,
  },
  {
    id: "viral-caption-titulares-048",
    title: "Nagłówki „czego nikt ci nie uprzedził”",
    summary: "Realistyczne ostrzeżenie + użyteczność.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 20 nagłówków z:
„Czego nikt cię nie uprzedził o [TEMAT]”
Dodaj konkretny detal (koszt, tarcie, błąd).
Maksymalnie 14 słów.`,
  },
  {
    id: "viral-caption-titulares-049",
    title: "Pierwsza linia z delikatną pilnością",
    summary: "Pilność bez manipulacji.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 pierwszych linijek z delikatną pilnością dla [TEMAT].
Używaj zwrotów:
- „Zanim…”
- „Jeśli robisz to w tym tygodniu…”
- „Jeśli dziś utknąłeś(aś) w…”
Maksymalnie 14 słów.`,
  },
  {
    id: "viral-caption-titulares-050",
    title: "Nagłówki „zrób to dziś”",
    summary: "Natychmiastowa i prosta akcja.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 25 nagłówków zawierających „dziś” i konkretną akcję (<5 min) dla [TEMAT].
Ma brzmieć praktycznie i realistycznie.
Maksymalnie 12 słów.`,
  },
];
