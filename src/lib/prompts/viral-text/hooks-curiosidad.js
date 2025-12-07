// src/lib/prompts/viral-text/hooks-curiosidad.js
// Unikalny obszar i kategoria dla CAŁEGO tego pliku:
const AREA = "Hooki";
const CATEGORY = "Ciekawość";

export const viralTextPromptsHooksCuriosidad = [
  {
    id: "viral-hook-curiosidad-001",
    title: "Pokażę ci coś, czego prawie nikt nie rozumie",
    summary: "Tajemnica + jasna obietnica.",
    area: AREA,
    category: CATEGORY,
    prompt: `Działaj jak wiralowy scenarzysta. Napisz 20 hooków (7–11 słów) dla [TEMAT], które zaczynają się od:
„Pokażę ci…”
Zasady:
- Zasugeruj mechanizm („dlaczego to się dzieje”, „co to uruchamia”, „co to blokuje”)
- Nie zdradzaj pełnego „jak”
- Neutralny polski.`,
  },
  {
    id: "viral-hook-curiosidad-002",
    title: "Prawdziwy powód (nie ten oczywisty)",
    summary: "Ciekawość ukrytej przyczyny.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 25 hooków dla [ODBIORCY] w strukturze:
„Prawdziwy powód, dla którego [X], to…”
[X] = cel albo ból (sprzedać, rosnąć, skupić się itd.)
Maks. 10 słów. Bez pustego clickbaitu.`,
  },
  {
    id: "viral-hook-curiosidad-003",
    title: "Detal, który zawsze ci umyka",
    summary: "Ciekawość „mikrodetału”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków (maks. 9 słów) dla [NISZA] używając:
„Detal, który zawsze ci umyka: [DETAL]”
[DETAL] musi być konkretny i możliwy do wdrożenia.`,
  },
  {
    id: "viral-hook-curiosidad-004",
    title: "Jeśli to zrozumiesz, wszystko staje się łatwiejsze",
    summary: "Hook o kluczowym zrozumieniu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 18 hooków dla [TEMAT] zaczynając od:
„Jeśli to zrozumiesz…”
Warunki:
- 7–12 słów
- Zasugeruj kluczową ideę bez pełnego wyjaśnienia
- Zakończ „zobacz” albo „posłuchaj tego”.`,
  },
  {
    id: "viral-hook-curiosidad-005",
    title: "Brakuje ci jednego elementu i nawet nie wiesz jakiego",
    summary: "Ciekawość „brakującego elementu”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków dla [REZULTAT]:
„Brakuje ci jednego elementu… i nawet nie wiesz jakiego.”
Dodaj wskazówkę (2–4 słowa) o tym elemencie, bez pełnego zdradzania.`,
  },
  {
    id: "viral-hook-curiosidad-006",
    title: "To się zmienia, gdy zadasz to pytanie",
    summary: "Pętla ciekawości przez „kluczowe pytanie”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków, w których obiecujesz mocne pytanie dla [TEMAT].
Zasady:
- Muszą zawierać „jedno pytanie”
- Nie podawaj całego pytania (tylko zasugeruj)
- Maks. 11 słów.`,
  },
  {
    id: "viral-hook-curiosidad-007",
    title: "Założę się, że tego nie wiedziałeś",
    summary: "Ciekawość w formie wyzwania (bez agresji).",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 hooków, które zaczynają się od:
„Założę się, że…”
Temat: [TEMAT].
Niech będzie przyjazne, nie aroganckie. Maks. 10 słów.`,
  },
  {
    id: "viral-hook-curiosidad-008",
    title: "Zobacz, co się dzieje, gdy zmienisz jedną rzecz",
    summary: "Ciekawość mikro-zmiany.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 25 hooków z:
„Zobacz, co się dzieje, gdy zmienisz [1 RZECZ]”
Dla [ODBIORCY] w [NISZA].
[1 RZECZ] ma być super konkretna (fraza, kolejność, punkt, krok).`,
  },
  {
    id: "viral-hook-curiosidad-009",
    title: "Szybki (ale dziwny) sposób, żeby to zrobić",
    summary: "Ciekawość „dziwnej” metody.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 18 hooków dla [CEL] z:
„Szybki (ale dziwny) sposób na [X]”
[X] musi być działaniem z niszy.
Maks. 12 słów. Zakończ „pokażę ci”.`,
  },
  {
    id: "viral-hook-curiosidad-010",
    title: "Jest powód, dla którego zawsze ci się to zdarza",
    summary: "Ciekawość powtarzalnego wzorca.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 hooków, które zawierają:
„Zawsze ci się to dzieje przez…”
Temat: [BÓL] w [TEMAT].
Nie podawaj całej przyczyny, tylko wdrażalną wskazówkę.`,
  },

  {
    id: "viral-hook-curiosidad-011",
    title: "Streszczę ci to w 1 idei (której nikt nie używa)",
    summary: "Prosta obietnica + ciekawość.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków o [TEMAT]:
„Streszczę ci to w 1 idei, której nikt nie używa…”
Zakończ „zobacz to” albo „posłuchaj”.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-curiosidad-012",
    title: "To działa z nieoczywistego powodu",
    summary: "Ciekawość nieoczywistej przyczyny.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków dla [TEMAT] z:
„To działa z nieoczywistego powodu…”
Zasady:
- 7–12 słów
- Nie zdradzaj całej przyczyny
- Unikaj absolutnych obietnic.`,
  },
  {
    id: "viral-hook-curiosidad-013",
    title: "Najważniejsza część jest ukryta",
    summary: "Ciekawość „ukrytej części”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 18 hooków:
„Najważniejsza część jest ukryta w [MIEJSCE].”
[MIEJSCE] = krok/sytuacja (np. „twoja pierwsza wiadomość”, „twoje zakończenie”, „twój tytuł”).
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-curiosidad-014",
    title: "To nie magia, to to (i pokażę ci)",
    summary: "Ciekawość + obietnica dowodu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków z:
„To nie magia, to [X]…”
[X] ma być prostą ideą (struktura, tarcie, jasność, dowód itd.).
Zakończ „pokażę ci”.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-curiosidad-015",
    title: "To oszczędza ci błędy (i powiem jakie)",
    summary: "Ciekawość „listy błędów”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków dla [TEMAT], które obiecują:
„oszczędza ci 3 błędy”
Nie wymieniaj błędów — tylko zasugeruj, że zaraz będą.
Maks. 11 słów.`,
  },
  {
    id: "viral-hook-curiosidad-016",
    title: "Sygnał, który mówi ci prawdę",
    summary: "Ciekawość „sygnału”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków:
„Sygnał, który mówi ci prawdę: [SYGNAŁ].”
SYGNAŁ ma być mierzalny/obserwowalny dla [TEMAT].`,
  },
  {
    id: "viral-hook-curiosidad-017",
    title: "Jeśli zwrócisz uwagę na to, zmienia się wynik",
    summary: "Ciekawość przez fokus.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 25 hooków:
„Jeśli zwrócisz uwagę na [X], zmienia się wynik.”
Dla [TEMAT]. [X] ma być konkretnym elementem procesu.`,
  },
  {
    id: "viral-hook-curiosidad-018",
    title: "To jest dokładny moment, w którym to się psuje",
    summary: "Ciekawość „dokładnego momentu”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków dla [PROCES] z:
„Dokładny moment, w którym to się psuje, to gdy [X].”
[X] ma być konkretny (krok, fraza, decyzja).
Maks. 13 słów.`,
  },
  {
    id: "viral-hook-curiosidad-019",
    title: "Zasada, której nikt ci dobrze nie wytłumaczył",
    summary: "Ciekawość „zasady”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków dla [TEMAT]:
„Zasada, której nikt ci dobrze nie wytłumaczył…”
Zakończ „przetłumaczę ci to”.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-curiosidad-020",
    title: "Pokażę ci „przed” (i dlaczego)",
    summary: "Ciekawość transformacji.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków transformacyjnych dla [TEMAT]:
„Pokażę ci ‘przed’… i dlaczego.”
Ma brzmieć wiarygodnie. Maks. 11 słów.`,
  },

  {
    id: "viral-hook-curiosidad-021",
    title: "Jest krok, który pomijasz",
    summary: "Ciekawość „pominiętego kroku”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 25 hooków:
„Jest krok, który pomijasz…”
Temat: [TEMAT].
Dodaj wskazówkę o tym kroku (1–3 słowa), bez pełnego zdradzania.`,
  },
  {
    id: "viral-hook-curiosidad-022",
    title: "Ten trik jest niewidoczny, ale czuć go",
    summary: "Ciekawość sensoryczna/emocjonalna.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 18 hooków:
„Ten trik jest niewidoczny, ale czuć go…”
Dla [ODBIORCY] w [TEMAT].
Zakończ „zobacz” albo „posłuchaj tego”.`,
  },
  {
    id: "viral-hook-curiosidad-023",
    title: "Brakuje ci 1 słowa (dosłownie)",
    summary: "Ciekawość mikro-słowa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków:
„Brakuje ci 1 słowa: ‘[SŁOWO]’”
Dla [TEMAT]. Słowo ma być użyteczne w copy/sprzedaży/treści.
Nie wyjaśniaj dlaczego — tylko zasugeruj „i wszystko się zmienia”.`,
  },
  {
    id: "viral-hook-curiosidad-024",
    title: "To, na co nikt nie patrzy, decyduje",
    summary: "Ciekawość ukrytej zmiennej.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków:
„To, na co nikt nie patrzy, decyduje: [X].”
[X] ma być ukrytą zmienną (tarcie, kontekst, timing, oferta, energia…).`,
  },
  {
    id: "viral-hook-curiosidad-025",
    title: "Powiedz mi, czy też tak masz",
    summary: "Ciekawość + identyfikacja.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków, które zaczynają się od:
„Powiedz mi, czy też tak masz…”
Temat: [BÓL] w [TEMAT].
Zakończ: „bo jest ku temu powód.”`,
  },
  {
    id: "viral-hook-curiosidad-026",
    title: "Wyjaśnię ci, co naprawdę się dzieje",
    summary: "Ciekawość prawdziwego wyjaśnienia.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 18 hooków, które zaczynają się od:
„Wyjaśnię ci, co naprawdę się dzieje…”
Temat: [TEMAT]. Maks. 12 słów.`,
  },
  {
    id: "viral-hook-curiosidad-027",
    title: "To się zmienia, gdy zrozumiesz X",
    summary: "Ciekawość skoku poziomu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków:
„To się zmienia, gdy zrozumiesz [X]…”
[X] = kluczowa koncepcja z niszy.
Zakończ „zobacz to”.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-curiosidad-028",
    title: "Gdy to zobaczysz, nie da się tego „od-zobaczyć”",
    summary: "Ciekawość mocnego insightu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków z:
„Gdy to zobaczysz, nie da się tego ‘od-zobaczyć’…”
Temat: [TEMAT].
Ma brzmieć jak insight (bez przesady).`,
  },
  {
    id: "viral-hook-curiosidad-029",
    title: "Czego nikt ci nie powiedział o pierwszej sekundzie",
    summary: "Ciekawość pierwszej sekundy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków o „pierwszej sekundzie” dla [PLATFORMA].
Struktura:
„Czego nikt ci nie powiedział o pierwszej sekundzie…”
Zakończ „pokażę ci”.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-curiosidad-030",
    title: "To naprawisz jednym absurdalnym ustawieniem",
    summary: "Ciekawość małej poprawki.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków:
„To naprawisz jednym absurdalnym ustawieniem: [X].”
[X] ma być realną mikro-poprawką.
Temat: [TEMAT].`,
  },

  {
    id: "viral-hook-curiosidad-031",
    title: "Pokażę ci trik bez komplikowania",
    summary: "Ciekawość + niskie tarcie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 18 hooków:
„Pokażę ci trik bez komplikowania…”
Temat: [TEMAT]. Maks. 11 słów.`,
  },
  {
    id: "viral-hook-curiosidad-032",
    title: "Różnica jest tutaj (a nikt ci tego nie powiedział)",
    summary: "Ciekawość kluczowej różnicy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków:
„Różnica jest w [X]… a nikt ci tego nie powiedział.”
[X] ma być kluczową dźwignią w [TEMAT].`,
  },
  {
    id: "viral-hook-curiosidad-033",
    title: "To, co robisz na końcu, zmienia wszystko",
    summary: "Ciekawość zakończenia.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 18 hooków o finale/zamknięciu w [TEMAT]:
„To, co robisz na końcu, zmienia wszystko…”
Zakończ „zobacz”.
Maks. 11 słów.`,
  },
  {
    id: "viral-hook-curiosidad-034",
    title: "Naucz się tego i oszczędź sobie kręcenia w kółko",
    summary: "Ciekawość + oszczędność wysiłku.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków:
„Naucz się tego i oszczędź sobie kręcenia w kółko…”
Temat: [TEMAT]. Ma brzmieć realistycznie. Maks. 11 słów.`,
  },
  {
    id: "viral-hook-curiosidad-035",
    title: "Jeśli ci to powiem, zmieni ci perspektywę",
    summary: "Ciekawość kluczowej frazy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków:
„Jeśli ci to powiem, zmieni ci perspektywę…”
Dodaj „w 10 sekund”.
Maks. 12 słów. Temat: [TEMAT].`,
  },
  {
    id: "viral-hook-curiosidad-036",
    title: "Klucz tkwi w tym, czego NIE mówisz",
    summary: "Ciekawość przez pominięcie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 18 hooków dla copy/treści w [TEMAT]:
„Klucz tkwi w tym, czego nie mówisz…”
Zakończ „pokażę ci”.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-curiosidad-037",
    title: "Ten wzorzec się powtarza (i możesz go użyć)",
    summary: "Ciekawość wzorca.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków:
„Ten wzorzec się powtarza… i możesz go użyć.”
Temat: [TEMAT]. Dodaj wskazówkę 1–3 słowa o wzorcu.`,
  },
  {
    id: "viral-hook-curiosidad-038",
    title: "Pokażę ci trik, którego używam (bez ściemy)",
    summary: "Ciekawość + wiarygodność.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków:
„Pokażę ci trik, którego używam… (bez ściemy)”
Temat: [TEMAT]. Maks. 11 słów.`,
  },
  {
    id: "viral-hook-curiosidad-039",
    title: "Nie zgaduj: zobacz to",
    summary: "Ciekawość przez dowód.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków:
„Nie zgaduj… zobacz to.”
Temat: [TEMAT].
Dodaj wskazówkę dowodu (dane, przykład, przed/po) bez pokazywania.`,
  },
  {
    id: "viral-hook-curiosidad-040",
    title: "Dam ci metodę w 3 krokach (ale uważaj na 2.)",
    summary: "Ciekawość krytycznego kroku.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 hooków o metodzie 3 kroków w [TEMAT].
Musi zawierać:
- „3 kroki”
- „uważaj na 2.”
Maks. 14 słów.`,
  },

  {
    id: "viral-hook-curiosidad-041",
    title: "Ten błąd wygląda mały, ale uderza mocno",
    summary: "Ciekawość ukrytego wpływu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 18 hooków:
„Ten błąd wygląda mały, ale uderza mocno…”
Temat: [TEMAT]. Zakończ „zobacz dlaczego”.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-curiosidad-042",
    title: "Czego nikt ci nie powiedział o „dlaczego”",
    summary: "Ciekawość prawdziwej motywacji.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków:
„Czego nikt ci nie powiedział o ‘dlaczego’…”
Temat: [TEMAT].
Ma brzmieć jak realny insight, nie tania motywacja.`,
  },
  {
    id: "viral-hook-curiosidad-043",
    title: "Pokażę ci inny sposób",
    summary: "Ciekawość alternatywy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków:
„Pokażę ci inny sposób na [X]…”
[X] = typowe działanie z niszy.
Zakończ „w 15 sekund”.
Maks. 13 słów.`,
  },
  {
    id: "viral-hook-curiosidad-044",
    title: "Zrób to i powiedz, czy widzisz różnicę",
    summary: "Ciekawość eksperymentu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków w formie eksperymentu:
„Zrób to i powiedz, czy widzisz różnicę…”
Temat: [TEMAT]. Ma sugerować prostą zmianę.`,
  },
  {
    id: "viral-hook-curiosidad-045",
    title: "Zdanie, które zmienia odpowiedź",
    summary: "Ciekawość „magicznej” frazy (realistycznie).",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków:
„Zdanie, które zmienia odpowiedź: ‘[FRAZA]’”
[FRAZA] ma być copy/paste dla [ODBIORCY].
Nie wyjaśniaj dlaczego — tylko zasugeruj „i zobaczysz”.`,
  },
  {
    id: "viral-hook-curiosidad-046",
    title: "To brzmi dziwnie, ale działa",
    summary: "Ciekawość nieintuicyjnej metody.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 18 hooków:
„To brzmi dziwnie, ale działa…”
Temat: [TEMAT]. Zakończ „zobacz”.
Maks. 11 słów.`,
  },
  {
    id: "viral-hook-curiosidad-047",
    title: "Pokażę ci, czego nikt nie robi",
    summary: "Ciekawość przewagi.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków:
„Pokażę ci, czego nikt nie robi w [TEMAT]…”
Ma brzmieć konkretnie (nie „coś sekretnego”).
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-curiosidad-048",
    title: "Dlaczego to ci się dzieje? (już tłumaczę)",
    summary: "Ciekawość wyjaśnienia.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków w formie pytania:
„Dlaczego [SYMPTOM]?”
i dodaj na końcu „już tłumaczę”.
Temat: [TEMAT].`,
  },
  {
    id: "viral-hook-curiosidad-049",
    title: "Pokażę ci dokładny punkt",
    summary: "Ciekawość dokładnego detalu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków:
„Pokażę ci dokładny punkt, w którym [X] się zmienia.”
Temat: [TEMAT]. X = konwersja/retencja/sprzedaż/jasność/itd.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-curiosidad-050",
    title: "Jeśli zrobisz to, zrozumiesz grę",
    summary: "Ciekawość „zasady gry”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków:
„Jeśli zrobisz to, zrozumiesz grę…”
Temat: [TEMAT]. Zasugeruj zasadę (jasność, oferta, retencja itd.).
Zakończ „zobacz dlaczego”.`,
  },
];
