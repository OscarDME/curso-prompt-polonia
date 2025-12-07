// src/lib/prompts/viral-text/ctas.js
// Unikalny obszar i kategoria dla CAŁEGO tego pliku:
const AREA = "CTA";
const CATEGORY = "Komentarze (keyword) + DM";

export const viralTextPromptsCtas = [
  {
    id: "viral-cta-comentarios-001",
    title: "CTA z keywordem do wysłania szablonu",
    summary: "Bezpośrednie CTA, które uruchamia komentarze i wysyłkę w DM.",
    area: AREA,
    category: CATEGORY,
    prompt: `Działaj jak strateg wzrostu. Napisz 15 CTA na koniec Reelsa o [TEMAT].
Cel: żeby skomentowali keyword i dostali szablon w DM.
Wymagania:
- Dodaj keyword: „[KEYWORD]”
- 1 zdanie, maksymalnie 14 słów
- Ton: bliski, bez desperacji
Podaj w liście.`,
  },
  {
    id: "viral-cta-comentarios-002",
    title: "CTA z konkretną obietnicą (bez przesady)",
    summary: "Keyword + konkretna i realistyczna wartość.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 CTA z keywordem dla [ODBIORCY] o [TEMAT].
Struktura: „Skomentuj [KEYWORD], a wyślę ci [ZASÓB]”
[ZASÓB] ma być konkretny (checklista, skrypt, szablon, swipe file).
Unikaj słów: „darmowe”, „pilne”, „ostatnia szansa”.`,
  },
  {
    id: "viral-cta-comentarios-003",
    title: "CTA z dwiema opcjami keywordów",
    summary: "2 keywordy do segmentacji zainteresowań.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 CTA z dwiema opcjami keywordów do segmentacji.
Format:
„Skomentuj [A], jeśli chcesz [X], albo [B], jeśli chcesz [Y].”
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].
X i Y mają być różnymi zasobami.`,
  },
  {
    id: "viral-cta-comentarios-004",
    title: "CTA: skomentuj i wyślę realny przykład",
    summary: "Obietnica realnego przykładu zwiększa intencję.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 CTA dla [TEMAT], które oferują „realny przykład”.
Musi zawierać keyword [KEYWORD].
Zróżnicuj ton: 5 bezpośrednich, 5 luźnych, 5 premium.`,
  },
  {
    id: "viral-cta-comentarios-005",
    title: "CTA z mikro-autorytetem",
    summary: "Sugeruje, że używasz tego i działa (wiarygodnie).",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 CTA z keywordem dla [TEMAT], które wspominają, że to „szablon, którego ja używam”.
Przykład: „Skomentuj [KEYWORD] i wyślę ci szablon, którego ja używam.”
Każde ma być inne. Maks. 14 słów.`,
  },
  {
    id: "viral-cta-comentarios-006",
    title: "CTA gentle: bez presji",
    summary: "Delikatne wezwanie do działania.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 łagodnych CTA (bez presji) dla [ODBIORCY].
Musisz użyć keyword [KEYWORD] i idei „jeśli ci się przyda”.
Maks. 16 słów.`,
  },
  {
    id: "viral-cta-comentarios-007",
    title: "CTA z ciekawością: „podeślę ci”",
    summary: "Kończy się nutą tajemnicy, by zwiększyć komentarze.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 CTA z keywordem, które zawierają zwrot „podeślę ci to”.
Temat: [TEMAT].
Zasób ma być intrygujący, ale konkretny.
Maksymalnie 14 słów.`,
  },
  {
    id: "viral-cta-comentarios-008",
    title: "CTA do serii: część 2 za keyword",
    summary: "Skomentuj keyword, aby dostać część 2 w DM.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 CTA na zakończenie wideo, które zapraszają do „części 2” przez DM.
Dodaj keyword [KEYWORD].
Zasady:
- Bez błagania.
- Powiedz, co zawiera część 2 (1 rzecz).
Maks. 16 słów.`,
  },
  {
    id: "viral-cta-comentarios-009",
    title: "CTA do karuzeli: keyword na końcu",
    summary: "Pod posty „do zapisania”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 CTA do karuzeli o [TEMAT], które proszą o komentarz [KEYWORD].
Musi oferować: checklistę/szablon/poradnik.
Dodaj 5 wariantów, które proszą też o „zapisanie”.`,
  },
  {
    id: "viral-cta-comentarios-010",
    title: "CTA z mini-zaangażowaniem",
    summary: "Prosi o keyword + sygnał (emoji/liczba).",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 CTA dla [TEMAT], w których prosisz:
„Skomentuj [KEYWORD] + liczbę od 1 do 3”
żeby wybrać wersję zasobu.
Przykład: „1 szybka, 2 pełna, 3 pro”.
Maks. 18 słów.`,
  },

  {
    id: "viral-cta-comentarios-011",
    title: "CTA: skomentuj keyword, jeśli chcesz przykład",
    summary: "Segmentuje po intencji.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 20 CTA zaczynających się od:
„Jeśli chcesz przykład…”
i kończących się: „skomentuj [KEYWORD]”.
Temat: [TEMAT].`,
  },
  {
    id: "viral-cta-comentarios-012",
    title: "CTA na obiekcje: „jeśli nie wiesz od czego”",
    summary: "Dla początkujących, którzy utknęli.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 CTA z keywordem dla osób, które utknęły w [TEMAT].
Musi zawierać „jeśli nie wiesz, od czego zacząć”.
keyword: [KEYWORD].
Maks. 18 słów.`,
  },
  {
    id: "viral-cta-comentarios-013",
    title: "CTA dla zaawansowanej publiki",
    summary: "Ton pro, zasób pro, keyword.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 CTA dla zaawansowanej publiki w [NISZA].
Zaoferuj zaawansowany zasób (framework, skrypt, audyt, swipe file).
Dodaj keyword [KEYWORD].
Ton: premium i bezpośredni.`,
  },
  {
    id: "viral-cta-comentarios-014",
    title: "CTA z zachętą szybkości (bez fałszywej presji)",
    summary: "„Wyślę ci dziś” bez manipulacji.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 CTA z keywordem dla [TEMAT], które zawierają:
„wyślę ci to dziś”
Bez brzmienia jak limitowana oferta.
Maks. 14 słów.`,
  },
  {
    id: "viral-cta-comentarios-015",
    title: "CTA: keyword + pytanie",
    summary: "CTA kończące się pytaniem dla większej liczby odpowiedzi.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 CTA, które proszą o komentarz [KEYWORD] i kończą się pytaniem.
Temat: [TEMAT].
Przykład: „Skomentuj X i podeślę ci to, przyda się?”
Maks. 18 słów.`,
  },
  {
    id: "viral-cta-comentarios-016",
    title: "CTA z obietnicą 3 wersji",
    summary: "Oferuje wersje (mini, pełna, pro).",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 10 CTA:
„Skomentuj [KEYWORD], a wyślę 3 wersje: mini, pełną i pro.”
Temat: [TEMAT].
Zrób 10 wariantów bez powtarzania słownictwa.`,
  },
  {
    id: "viral-cta-comentarios-017",
    title: "CTA: keyword + automatyczna wysyłka",
    summary: "Wspomina automatyzację bez brzmienia jak bot.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 CTA, w których mówisz, że wysyłka idzie automatycznie w DM.
Dodaj keyword [KEYWORD].
Temat: [TEMAT].
Ton ludzki, zero robota.`,
  },
  {
    id: "viral-cta-comentarios-018",
    title: "CTA: keyword + „dam ci gotowe”",
    summary: "Obietnica „kopiuj-wklej”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 CTA dla [TEMAT], które obiecują „kopiuj i wklej”.
Dodaj keyword [KEYWORD].
Maks. 16 słów.`,
  },
  {
    id: "viral-cta-comentarios-019",
    title: "CTA na lead magnet bez mówienia „lead magnet”",
    summary: "Oferuje zasób do pobrania za keyword.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 CTA oferujących poradnik do pobrania / PDF / checklistę
bez używania słów „lead magnet”.
Dodaj keyword [KEYWORD].
Temat: [TEMAT].`,
  },
  {
    id: "viral-cta-comentarios-020",
    title: "CTA z lekkim social proof",
    summary: "„Wielu osobom pomogło…” bez wymyślania liczb.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 CTA z keywordem, które zawierają „Wielu osobom się przydało…”
bez podawania liczb.
Temat: [TEMAT]. keyword: [KEYWORD].
Maks. 16 słów.`,
  },

  {
    id: "viral-cta-comentarios-021",
    title: "CTA: keyword + lista przykładów",
    summary: "Oferuje przykłady, by zwiększyć chęć.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 CTA dla [TEMAT] oferujących „listę przykładów”.
keyword: [KEYWORD].
Zmieniaj zasób: przykłady hooków, skryptów, CTA, ofert itd.`,
  },
  {
    id: "viral-cta-comentarios-022",
    title: "CTA: keyword + mini-audyt",
    summary: "Oferuje checklistę-audyt w DM.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 10 CTA dla [ODBIORCY] oferujących „mini-audyt” w DM.
Dodaj keyword [KEYWORD].
Zrób to etycznie: „zostawię ci 3 szybkie poprawki”.`,
  },
  {
    id: "viral-cta-comentarios-023",
    title: "CTA dla niszy lokalnej",
    summary: "Keyword + „dopasuję do twojego miasta/biznesu”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 CTA dla lokalnych biznesów o [TEMAT].
Dodaj keyword [KEYWORD].
Musi mówić, że dopasujesz do ich typu biznesu.
Maks. 18 słów.`,
  },
  {
    id: "viral-cta-comentarios-024",
    title: "CTA: keyword + „ułożę ci to”",
    summary: "Obiecuje gotową strukturę do użycia.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 CTA dla [TEMAT] z frazą „ułożę ci to”.
keyword: [KEYWORD].
Zmieniaj to, co „układasz”: skrypt, caption, strukturę, checklistę.`,
  },
  {
    id: "viral-cta-comentarios-025",
    title: "CTA z łatwym słowem (1–2 sylaby)",
    summary: "Krótkie keywordy = więcej komentarzy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Zaproponuj 20 CTA z keywordami 1–2 sylabowymi (np. „tak”, „mix”, „pro”, „kit”).
Temat: [TEMAT].
Każde CTA musi zawierać: „Skomentuj [KEYWORD], a podeślę ci to w DM.”`,
  },
  {
    id: "viral-cta-comentarios-026",
    title: "CTA: keyword + „wyślę mój skrypt”",
    summary: "Dla twórców wideo.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 CTA dla twórców o [TEMAT], które oferują „mój skrypt”.
Dodaj keyword [KEYWORD].
Ton: bliski, naturalny.`,
  },
  {
    id: "viral-cta-comentarios-027",
    title: "CTA: keyword + „wyślę strukturę”",
    summary: "Skupione na frameworkach.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 CTA oferujących „strukturę” lub „framework” w DM.
keyword: [KEYWORD]. Temat: [TEMAT].
Zmieniaj końcówkę (DM, wiadomość, wyślę ci, podeślę itd.).`,
  },
  {
    id: "viral-cta-comentarios-028",
    title: "CTA z bonusem w DM",
    summary: "Daje mały bonus za komentarz z keywordem.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 12 CTA dla [TEMAT], w których zasób ma bonus.
Format:
„Skomentuj [KEYWORD], a wyślę ci [ZASÓB] + [BONUS]”
Bonus ma być mały i użyteczny.`,
  },
  {
    id: "viral-cta-comentarios-029",
    title: "CTA: keyword + „spersonalizuję to”",
    summary: "Lekka personalizacja bez przesadnych obietnic.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 10 CTA, które zawierają „spersonalizuję to” dla [ODBIORCY].
keyword: [KEYWORD].
Doprecyzuj zakres: „1 szybka poprawka” albo „wersja dopasowana”.`,
  },
  {
    id: "viral-cta-comentarios-030",
    title: "CTA: keyword + „dopasuję do twojej niszy”",
    summary: "Dopasowanie do niszy zwiększa intencję.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 12 CTA:
„Skomentuj [KEYWORD], a dopasuję to do twojej niszy.”
Temat: [TEMAT].
Zrób 12 wariantów z synonimami (dopasuję, przeniosę na twój przypadek, przełożę, „uziemię” w realiach).`,
  },

  {
    id: "viral-cta-comentarios-031",
    title: "CTA z keywordem i szybkim testem",
    summary: "Prosi: skomentuj + przetestuj + wróć z wynikiem.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 10 CTA, które proszą:
1) o komentarz [KEYWORD]
2) o przetestowanie zasobu dziś
3) o powrót i komentarz z wynikiem
Temat: [TEMAT].
Ton motywujący, bez presji.`,
  },
  {
    id: "viral-cta-comentarios-032",
    title: "CTA na obiekcję „nie mam czasu”",
    summary: "Podkreśla szybkość zasobu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 CTA z keywordem dla osób bez czasu.
Dodaj „zajmie ci 5 minut”.
keyword: [KEYWORD].
Temat: [TEMAT].`,
  },
  {
    id: "viral-cta-comentarios-033",
    title: "CTA: keyword + „lista fraz”",
    summary: "Swipy z frazami gotowymi do kopiowania.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 CTA dla [TEMAT] oferujących „listę fraz” w DM.
Dodaj keyword [KEYWORD].
Ma brzmieć użytecznie i konkretnie.`,
  },
  {
    id: "viral-cta-comentarios-034",
    title: "CTA: keyword + szablon w 3 krokach",
    summary: "Prosty szablon, wysoka konwersja.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 CTA oferujących szablon w 3 krokach do [REZULTAT].
Dodaj keyword [KEYWORD].
Maks. 16 słów.`,
  },
  {
    id: "viral-cta-comentarios-035",
    title: "CTA: keyword + przykład w twoim przypadku",
    summary: "Oferuje przykład dopasowany do użytkownika.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 10 CTA:
„Skomentuj [KEYWORD], a wyślę ci przykład dopasowany do twojego przypadku.”
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].
Bez obiecywania długiej konsultacji.`,
  },
  {
    id: "viral-cta-comentarios-036",
    title: "CTA: keyword + mini-poradnik",
    summary: "Krótki i konkretny przewodnik.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 CTA dla [TEMAT] oferujących „mini-poradnik” w DM.
Dodaj keyword [KEYWORD].
Zmieniaj styl: 10 luźnych, 10 formalnych.`,
  },
  {
    id: "viral-cta-comentarios-037",
    title: "CTA: keyword + „bez spamu”",
    summary: "Zmniejsza opór przed spamem.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 12 CTA zawierających antyspamową frazę:
„Wyślę bez spamu” / „bez dziwnych linków” / „tylko zasób”.
Dodaj keyword [KEYWORD].
Temat: [TEMAT].`,
  },
  {
    id: "viral-cta-comentarios-038",
    title: "CTA: keyword + „zostawię ci szkic”",
    summary: "Obiecuje treść gotową do kopiowania.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 10 CTA, gdzie oferujesz „gotowy szkic”.
keyword: [KEYWORD]. Temat: [TEMAT].
Np.: gotowy caption, gotowy skrypt, gotowa wiadomość.`,
  },
  {
    id: "viral-cta-comentarios-039",
    title: "CTA: keyword + checklista błędów",
    summary: "Błędy = wysoki zapis i chęć.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 CTA oferujących „checklistę błędów” dla [TEMAT].
Dodaj keyword [KEYWORD].
Krótko (maks. 16 słów).`,
  },
  {
    id: "viral-cta-comentarios-040",
    title: "CTA: keyword w zabawnym tonie",
    summary: "Playful CTA, by zwiększyć komentarze.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 CTA z keywordem [KEYWORD] dla [TEMAT] w zabawnym tonie (bez cringu).
Musi zawierać mrugnięcie typu: „podeślę ci to i tyle”.
Maks. 16 słów.`,
  },

  {
    id: "viral-cta-comentarios-041",
    title: "CTA: keyword + „wyślę teraz”",
    summary: "Natychmiastowość bez fałszywej presji.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 12 CTA z:
„Skomentuj [KEYWORD], a wyślę ci to teraz.”
Temat: [TEMAT].
Zrób 12 wariantów bez powtarzania „teraz” (np. „w tej chwili”, „już”).`,
  },
  {
    id: "viral-cta-comentarios-042",
    title: "CTA: keyword + szablony do 3 formatów",
    summary: "Wersje pod format (Reel, karuzela, story).",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 10 CTA oferujących szablony do 3 formatów.
Bazowy format:
„Skomentuj [KEYWORD], a wyślę wersje na Reels, karuzelę i stories.”
Temat: [TEMAT].`,
  },
  {
    id: "viral-cta-comentarios-043",
    title: "CTA: keyword + „wyślę mój swipe file”",
    summary: "Premium obietnica: swipe file.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 CTA oferujących „mój swipe file” dla [TEMAT].
Dodaj keyword [KEYWORD].
Ton: pro i bezpośredni, bez arogancji.`,
  },
  {
    id: "viral-cta-comentarios-044",
    title: "CTA: keyword + „przełożę na twój poziom”",
    summary: "Segmentacja po poziomie użytkownika.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 10 CTA:
„Skomentuj [KEYWORD], a przełożę to na twój poziom (początkujący/średni/pro).”
Temat: [TEMAT].
Zrób 10 wariantów.`,
  },
  {
    id: "viral-cta-comentarios-045",
    title: "CTA: keyword + „dokładny szablon”",
    summary: "Jasność i konkret.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 CTA, które zawierają „dokładny szablon”.
keyword: [KEYWORD]. Temat: [TEMAT].
Maks. 16 słów.`,
  },
  {
    id: "viral-cta-comentarios-046",
    title: "CTA: keyword + obietnica 5 przykładów",
    summary: "Konkrety zwiększają chęć.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 CTA:
„Skomentuj [KEYWORD], a wyślę 5 gotowych przykładów.”
Temat: [TEMAT].
Zróżnicuj typ przykładów (hooki, skrypty, captiony, wiadomości).`,
  },
  {
    id: "viral-cta-comentarios-047",
    title: "CTA: keyword + „zrobię to prosto”",
    summary: "Zmniejsza tarcie przez złożoność.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 12 CTA z keywordem [KEYWORD], które zawierają „zrobię to prosto”.
Temat: [TEMAT].
Ton ludzki i krótki.`,
  },
  {
    id: "viral-cta-comentarios-048",
    title: "CTA: keyword + „struktura na 1 kartce”",
    summary: "Obiecuje skrót na 1 stronie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 10 CTA oferujących „strukturę na 1 kartce”.
Dodaj keyword [KEYWORD]. Temat: [TEMAT].
Zrób 10 wariantów bez powtórek.`,
  },
  {
    id: "viral-cta-comentarios-049",
    title: "CTA: keyword + „podeślę i powiesz”",
    summary: "Tworzy rozmowę po wysyłce.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 CTA kończących się:
„podeślę ci to i powiesz, czy się przydało.”
Dodaj keyword [KEYWORD].
Temat: [TEMAT].`,
  },
  {
    id: "viral-cta-comentarios-050",
    title: "CTA na zakończenie z miękkim autorytetem",
    summary: "Mentorski ton i wysyłka w DM.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 12 CTA z keywordem, które brzmią jak mentor:
„Jeśli chcesz, żebym zostawił(a) ci to gotowe, skomentuj [KEYWORD].”
Temat: [TEMAT]. Odbiorcy: [ODBIORCY].
Bez twardej sprzedaży.`,
  },
];
