// src/lib/prompts/viral-text/hooks-empatía.js
// Unikalny obszar i kategoria dla CAŁEGO tego pliku:
const AREA = "Hooki";
const CATEGORY = "Empatia";

export const viralTextPromptsHooksEmpatia = [
  {
    id: "viral-hook-empatia-001",
    title: "Jeśli czujesz się tak, to normalne",
    summary: "Waliduje emocje + otwiera pętlę rozwiązaniem.",
    area: AREA,
    category: CATEGORY,
    prompt: `Działaj jak scenarzysta Reels/TikTok. Napisz 15 hooków (1 zdanie, 7–12 słów) dla [ODBIORCY] o [BÓL].
Zasady:
- Zacznij od „Jeśli czujesz…” albo „Jeśli ci się zdarza…”
- Dodaj walidację („to normalne”, „to się zdarza”, „nie jesteś sam/a”).
- Zakończ realistyczną obietnicą („pokażę ci, jak z tego wyjść”).
Podaj w numerowanej liście.`,
  },
  {
    id: "viral-hook-empatia-002",
    title: "Nie jesteś sam (i jest wyjście)",
    summary: "Bezpośrednia empatia + konkretna nadzieja.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków dla [TEMAT], które zawierają „nie jesteś sam/a” (lub wariacje).
Wymagania:
- 8–11 słów
- Mają brzmieć po ludzku (bez pustych motywacyjnych frazesów)
- Na końcu zasugeruj kolejny krok (bez pełnego wyjaśniania).`,
  },
  {
    id: "viral-hook-empatia-003",
    title: "Ja też tam byłem/byłam",
    summary: "Kontakt przez doświadczenie bez użalania się.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków w pierwszej osobie dla [ODBIORCY] o [PROBLEM].
Zasady:
- Muszą zaczynać się od „Ja też…”
- Dodaj 1 konkretny detal (czas/miejsce/objaw)
- Zakończ „i to mi pomogło”.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-004",
    title: "Jeśli wstydzisz się zrobić X, zobacz to",
    summary: "Empatia z wstydem/strachem + most do rozwiązania.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 18 hooków dla [ODBIORCY], który wstydzi się [DZIAŁANIE].
Szablon:
„Jeśli wstydzisz się [DZIAŁANIE], zobacz to…”
Dodaj mikro-korzyść (2–4 słowa).
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-005",
    title: "To jest dla ciebie, jeśli jesteś zmęczony",
    summary: "Segmentuje po stanie emocjonalnym.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków zaczynających się od:
„To jest dla ciebie, jeśli…”
Skierowane do [ODBIORCY], który jest [STAN] (zmęczony, sfrustrowany, zablokowany).
Dodaj realistyczną obietnicę ulgi.
Maks. 13 słów.`,
  },
  {
    id: "viral-hook-empatia-006",
    title: "Jeśli czujesz, że jesteś do tyłu, przeczytaj to",
    summary: "Empatia z porównywaniem i tempem.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków dla [TEMAT] o poczuciu „bycia do tyłu”.
Zasady:
- Zacznij od „Jeśli czujesz, że jesteś spóźniony/a…”
- Wspomnij 1 częstą przyczynę (porównywanie, szum, brak planu)
- Zakończ obietnicą: „dam ci prosty plan”.`,
  },
  {
    id: "viral-hook-empatia-007",
    title: "Nikt cię na to nie przygotował",
    summary: "Empatia z łagodnym zaskoczeniem.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków zaczynających się od:
„Nikt cię nie przygotował na…”
Temat: [TEMAT].
Zasady:
- 7–11 słów
- Mają brzmieć realnie (typowe sytuacje)
- Zasugeruj, że jest praktyczne rozwiązanie.`,
  },
  {
    id: "viral-hook-empatia-008",
    title: "Jeśli dziś nie ogarniasz wszystkiego, to okej",
    summary: "Waliduje i daje mikro-krok.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 18 hooków dla [ODBIORCY] z wypaleniem lub przeciążeniem w [TEMAT].
Uwzględnij:
- Walidację („to okej”, „to normalne”)
- Mikro-krok na 2 minuty (bez pełnego tłumaczenia)
Maks. 14 słów.`,
  },
  {
    id: "viral-hook-empatia-009",
    title: "Obiecuję, że nie jesteś leniwy",
    summary: "Reframing: brak systemu, nie brak woli.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków zaczynających się od:
„Obiecuję, że nie jesteś leniwy/a…”
Temat: [TEMAT]. Odbiorca: [ODBIORCA].
Zakończ reframingiem: „brakuje ci [SYSTEMU]”.
Maks. 13 słów.`,
  },
  {
    id: "viral-hook-empatia-010",
    title: "Jeśli paraliżuje cię wybór, rozumiem cię",
    summary: "Empatia z niezdecydowaniem + proste kryterium.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków dla [ODBIORCY] z niezdecydowaniem w [TEMAT].
Zasady:
- Zacznij od „Jeśli paraliżuje cię…”
- Dodaj „rozumiem cię” lub wariację
- Obiecaj proste kryterium (bez pełnego wyjaśniania).`,
  },

  {
    id: "viral-hook-empatia-011",
    title: "Jeśli trudno ci zacząć, to nie twoja wina",
    summary: "Waliduje + obiecuje strukturę.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 18 hooków:
„Jeśli trudno ci zacząć, to nie twoja wina…”
Temat: [TEMAT].
Dodaj konkretną przyczynę strukturalną (brak prowadzenia, mylące kroki, niejasny cel).
Maks. 14 słów.`,
  },
  {
    id: "viral-hook-empatia-012",
    title: "Jeśli boisz się sprzedawać, to ci pomoże",
    summary: "Empatia z odrzuceniem i sprzedażą.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków dla [ODBIORCY], który boi się sprzedawać [OFERTA].
Szablon:
„Jeśli boisz się sprzedawać, spróbuj tego…”
Dodaj konkretną korzyść (pewność, jasność, DM itd.).
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-013",
    title: "Mnie też było wstyd publikować",
    summary: "Wyznanie, które normalizuje.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 hooków w pierwszej osobie o [PLATFORMA].
Zasady:
- Muszą zaczynać się od „Mnie też…”
- Muszą zawierać „było mi wstyd” albo „bałem/am się”
- Zakończ „i tak to zrobiłem/zrobiłam”.
Maks. 13 słów.`,
  },
  {
    id: "viral-hook-empatia-014",
    title: "Jeśli czujesz, że nikt cię nie słucha",
    summary: "Empatia z niewidzialnością.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 18 hooków dla [NISZA] o poczuciu bycia ignorowanym.
Struktura:
„Jeśli czujesz, że nikt cię nie słucha, to przez [X].”
[X] ma być użyteczne i do poprawy (komunikat, fokus, hook, CTA).
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-015",
    title: "Jeśli dziś jesteś zagubiony, zacznij tutaj",
    summary: "Kotwica natychmiastowej jasności.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków kończących się „zacznij tutaj”.
Temat: [TEMAT]. Odbiorca: [ODBIORCA].
Zasady:
- Wspomnij konkretny objaw (chaos, nadmiar info, stagnacja)
- Obiecaj prosty pierwszy krok.`,
  },
  {
    id: "viral-hook-empatia-016",
    title: "Jeśli się porównujesz, rozumiem cię",
    summary: "Empatia z porównywaniem społecznym.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 hooków o porównywaniu się na [PLATFORMA] dla [ODBIORCY].
Zasady:
- Zacznij od „Jeśli się porównujesz…”
- Dodaj walidację
- Zakończ praktycznym reframingiem (np. „mierz to zamiast tego”).`,
  },
  {
    id: "viral-hook-empatia-017",
    title: "Staram się, ale zła rzecz cię sabotuje",
    summary: "Walidacja + konkretna przyczyna.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków:
„Staram się… ale używam złego [X].”
Temat: [TEMAT].
[X] ma być konkretny (fokus, taktyka, kanał, komunikat).
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-018",
    title: "Jeśli czujesz winę za odpoczynek",
    summary: "Empatia z odpoczynkiem i produktywnością.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 18 hooków o poczuciu winy za odpoczynek dla [ODBIORCY].
Zasady:
- Zacznij od „Jeśli czujesz winę…”
- Dodaj walidację („to normalne”)
- Obiecaj małą zmianę mentalną albo praktyczną regułę.`,
  },
  {
    id: "viral-hook-empatia-019",
    title: "Jeśli to wywołuje lęk, nie rób tego tak",
    summary: "Empatia + alternatywa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków dla [TEMAT] używając:
„Jeśli to wywołuje lęk, nie rób tego tak…”
Potem zasugeruj, że jest prosta alternatywa.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-020",
    title: "Jeśli jesteś wypalony, zmniejsz to najpierw",
    summary: "Wypalenie: najpierw redukuj tarcie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków dla [ODBIORCY] z wypaleniem w [TEMAT].
Szablon:
„Jeśli jesteś wypalony/a, zmniejsz najpierw [X].”
[X] ma być konkretny (oczekiwania, zadania, kroki, perfekcja).
Maks. 11 słów.`,
  },

  {
    id: "viral-hook-empatia-021",
    title: "Jeśli frustruje cię X, jest powód",
    summary: "Waliduje frustrację + przyczyna.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków:
„Jeśli frustruje cię [X], jest powód.”
Temat: [TEMAT].
[X] ma być momentem procesu (sprzedaż, tworzenie treści, nauka itd.).
Zakończ sugerując rozwiązanie.`,
  },
  {
    id: "viral-hook-empatia-022",
    title: "Nie jesteś słaby, brakuje ci porządku",
    summary: "Empatia + system.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 18 hooków:
„Nie jesteś słaby/a w [TEMAT]. Brakuje ci [PORZĄDKU].”
PORZĄDEK = struktura, skrypt, kroki, checklist.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-023",
    title: "Jeśli czujesz się niewidzialny, zmień to",
    summary: "Empatia + obietnica zmiany.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków dla [PLATFORMA] z:
„Jeśli czujesz się niewidzialny/a, zmień [X].”
[X] ma być konkretem (pierwsza sekunda, nagłówek, CTA, fokus).
Maks. 11 słów.`,
  },
  {
    id: "viral-hook-empatia-024",
    title: "Jeśli masz dość prób, rozumiem cię",
    summary: "Mocna empatia + wyjście.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 12 hooków zawierających „mam dość” albo „jestem zmęczony/a” (w 1. lub 2. osobie).
Temat: [TEMAT].
Zakończ konkretną nadzieją („jest prosta droga”).`,
  },
  {
    id: "viral-hook-empatia-025",
    title: "Nie brakuje ci chęci, brakuje ci jasności",
    summary: "Klasyczny, bezpośredni reframing.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków:
„Nie brakuje ci chęci. Brakuje ci jasności w [X].”
X = oferta, komunikat, następny krok, cel.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-026",
    title: "Jeśli trudno ci mówić „nie”",
    summary: "Empatia z granicami.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków dla [ODBIORCY] o stawianiu granic.
Szablon:
„Jeśli trudno ci mówić „nie”, spróbuj tego…”
Dodaj korzyść (spokój, fokus, czas).
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-027",
    title: "Jeśli utknąłeś, nie zmieniaj wszystkiego",
    summary: "Empatia + mikro-zmiana.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków:
„Jeśli utknąłeś/utknęłaś, nie zmieniaj wszystkiego: zmień [X].”
[X] konkretny (krok, zdanie, nawyk).
Maks. 13 słów.`,
  },
  {
    id: "viral-hook-empatia-028",
    title: "Jeśli nie wychodzi, to nie znaczy, że to nie dla ciebie",
    summary: "Empatia z chwilową porażką.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 12 hooków dla [ODBIORCY] sfrustrowanego w [TEMAT].
Uwzględnij:
- „to nie znaczy, że to nie dla ciebie”
- obietnicę metody/struktury
Maks. 14 słów.`,
  },
  {
    id: "viral-hook-empatia-029",
    title: "Jeśli wstydzisz się powiedzieć cenę",
    summary: "Empatia sprzedażowa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków dla [ODBIORCY], który sprzedaje [OFERTA].
Szablon:
„Jeśli wstydzisz się powiedzieć cenę, zrób to…”
Dodaj korzyść (pewność/jasność).
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-030",
    title: "Jeśli masz mętlik, to robisz 3 rzeczy naraz",
    summary: "Empatia + konkretna diagnoza.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków diagnostycznych:
„Jeśli masz mętlik, to dlatego że…”
Dla [TEMAT]. Dodaj konkretną przyczynę (za dużo celów, za dużo odbiorców itd.).
Maks. 14 słów.`,
  },

  {
    id: "viral-hook-empatia-031",
    title: "Jeśli trudno ci mówić do kamery, spróbuj tego",
    summary: "Empatia z tremą.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 18 hooków dla twórców bojących się mówić do kamery.
Szablon:
„Jeśli trudno ci mówić do kamery, spróbuj tego…”
Dodaj jasną korzyść (płynność, mniej stresu, większa jasność).
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-032",
    title: "Jeśli nie wiesz, co publikować, nie jesteś sam",
    summary: "Empatia redakcyjna.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków dla [PLATFORMA]:
„Jeśli nie wiesz, co publikować, nie jesteś sam/a.”
Zakończ obietnicą: „dam ci dziś 3 pomysły”.
Maks. 13 słów.`,
  },
  {
    id: "viral-hook-empatia-033",
    title: "Jeśli czujesz, że stoisz w miejscu, mierz to",
    summary: "Empatia + skupienie na użytecznej metryce.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków:
„Jeśli czujesz, że stoisz w miejscu, mierz [METRYKA].”
Temat: [TEMAT]. Metryka ma być prosta i trafna.`,
  },
  {
    id: "viral-hook-empatia-034",
    title: "Jeśli ciężko ci zaczynać od nowa, zrób to mniejsze",
    summary: "Empatia + mikro-cel.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków o „zaczynaniu od nowa” w [TEMAT].
Szablon:
„Jeśli ciężko ci zaczynać od nowa, zrób to mniejsze: [X].”
[X] = prosta akcja.`,
  },
  {
    id: "viral-hook-empatia-035",
    title: "Jeśli dziś ci nie idzie, nie karz się",
    summary: "Empatia + łagodna korekta.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 12 hooków zaczynających się od:
„Jeśli dziś ci nie idzie…”
Dodaj „nie karz się”
i zakończ obietnicą metody.`,
  },
  {
    id: "viral-hook-empatia-036",
    title: "Twoje zmęczenie ma sens",
    summary: "Waliduje i przeformułowuje.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków dla [ODBIORCY] o zmęczeniu w [TEMAT].
Musi zawierać „ma sens” i konkretną przyczynę.
Zakończ „dam ci prostą korektę”.`,
  },
  {
    id: "viral-hook-empatia-037",
    title: "Jeśli próbujesz robić wszystko perfekcyjnie, rozumiem cię",
    summary: "Empatia z perfekcjonizmem.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 18 hooków o perfekcjonizmie dla [ODBIORCY].
Zasady:
- Zacznij od „Jeśli próbujesz robić wszystko perfekcyjnie…”
- Dodaj „rozumiem cię”
- Zakończ reframingiem: „lepiej zrób to tak”.
Maks. 14 słów.`,
  },
  {
    id: "viral-hook-empatia-038",
    title: "Jeśli czujesz się w tym sam, napisz",
    summary: "Empatia + wezwanie do społeczności.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 hooków zachęcających do komentarza/udziału w doświadczeniu.
Temat: [TEMAT]. Odbiorca: [ODBIORCA].
Musi zawierać empatię („mnie też to spotkało”).`,
  },
  {
    id: "viral-hook-empatia-039",
    title: "Jeśli boli cię cudzy sukces",
    summary: "Empatia z zazdrością/porównaniem.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 12 hooków dla [ODBIORCY] o porównywaniu wyników.
Zasady:
- Zacznij od „Jeśli boli cię…”
- Waliduj bez oceniania
- Zakończ konkretną akcją, żeby wrócić do siebie.`,
  },
  {
    id: "viral-hook-empatia-040",
    title: "Jeśli czujesz się bez kierunku, wróć do tego",
    summary: "Empatia + fundament.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków:
„Jeśli czujesz się bez kierunku, wróć do [FUNDAMENT].”
[FUNDAMENT] ma być konkretny (cel, oferta, odbiorca, rutyna).
Maks. 12 słów.`,
  },

  {
    id: "viral-hook-empatia-041",
    title: "Jeśli boisz się pomylić, zobacz to",
    summary: "Empatia z lękiem przed błędem.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków o strachu przed pomyłką w [TEMAT].
Szablon:
„Jeśli boisz się pomylić, zobacz to…”
Dodaj korzyść (więcej pewności / mniej lęku).
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-empatia-042",
    title: "Jeśli jesteś zestresowany, nie przegrywasz",
    summary: "Empatia + reframing.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 hooków:
„Jeśli jesteś zestresowany/a, nie przegrywasz.”
Zakończ prostym krokiem (bez pełnego opisu).
Temat: [TEMAT].`,
  },
  {
    id: "viral-hook-empatia-043",
    title: "Jeśli ci nie wierzą, brakuje ci tego",
    summary: "Empatia z brakiem wiarygodności + rozwiązanie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków dla [OFERTA] w [NISZA]:
„Jeśli ci nie wierzą, brakuje ci [DOWODU].”
[DOWÓD] ma być konkretny (case, demo, przed/po, realistyczne liczby).`,
  },
  {
    id: "viral-hook-empatia-044",
    title: "Jeśli boisz się zacząć, zrób to tak",
    summary: "Empatia + mikro-akcja.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 18 hooków:
„Jeśli boisz się zacząć, zrób to tak: [X].”
[X] ma być pierwszym krokiem < 2 minuty.
Temat: [TEMAT].`,
  },
  {
    id: "viral-hook-empatia-045",
    title: "Jeśli masz wrażenie, że nic nie działa, zmień to najpierw",
    summary: "Empatia + priorytet.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 12 hooków:
„Jeśli masz wrażenie, że nic nie działa, zmień najpierw [X].”
[X] = główna dźwignia (jasność, oferta, komunikat, fokus).
Temat: [TEMAT].`,
  },
  {
    id: "viral-hook-empatia-046",
    title: "Jeśli trudno ci być konsekwentnym, to przez to",
    summary: "Empatia + diagnoza.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków:
„Jeśli trudno ci być konsekwentnym, to przez [X].”
[X] = realna przyczyna (nierealny plan, niejasne cele, brak rutyny).
Zakończ „i naprawisz to tak…”`,
  },
  {
    id: "viral-hook-empatia-047",
    title: "Jeśli nie wychodzi, uprość",
    summary: "Empatia + krótkie rozwiązanie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków:
„Jeśli nie wychodzi, uprość: [X].”
[X] ma być konkretną korektą.
Temat: [TEMAT]. Maks. 11 słów.`,
  },
  {
    id: "viral-hook-empatia-048",
    title: "Jeśli wstydzisz się brać zapłatę, przeczytaj to",
    summary: "Empatia cenowa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków dla [ODBIORCY], który pobiera opłatę za [USŁUGA/PRODUKT].
Szablon:
„Jeśli wstydzisz się brać zapłatę, przeczytaj to…”
Dodaj obietnicę: „dam ci jedno zdanie”.
Maks. 13 słów.`,
  },
  {
    id: "viral-hook-empatia-049",
    title: "Jeśli czujesz blokadę, to nie brak pomysłów",
    summary: "Empatia + reframing na strukturę.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 18 hooków:
„Jeśli czujesz blokadę, to nie brak pomysłów, tylko [X].”
[X] = struktura, jasność, cel.
Temat: [TEMAT].`,
  },
  {
    id: "viral-hook-empatia-050",
    title: "Jeśli ciężko ci robić to samemu, dołącz do tego",
    summary: "Empatia + społeczność/działanie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 hooków, które kończą się zaproszeniem do komentarza po wsparcie.
Dodaj empatię („mnie też to spotkało”).
Temat: [TEMAT]. Odbiorca: [ODBIORCA].`,
  },
];
