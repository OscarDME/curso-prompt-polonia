// src/lib/bonus-03-carruseles-content.js

export const bonus03ManualCarruseles = {
  id: "bonus-03",
  title: "Podręcznik wiralowych karuzel",
  subtitle:
    "Poznaj sekret karuzel w stylu komiksu, które generują ogromne zaangażowanie.",
  heroText: `W tym podręczniku nauczysz się projektować karuzele w stylu komiksu, które przyciągają uwagę, opowiadają historie i prowadzą do działania.

To nie jest sama teoria: zobaczysz struktury, praktyczne przykłady i prompty gotowe do użycia z Twoim Tajnym Bankiem Promptów.`,

  sections: [
    {
      id: "que-es-carrusel-viral",
      title: "1. Czym jest wiralowa karuzela i dlaczego działa",
      body: [
        `Wiralowa karuzela to nie tylko seria ładnych slajdów. To **skompresowana historia** w kilku planszach, która robi trzy rzeczy naraz:`,
      ],
      bullets: [
        {
          label: "Przyciąga uwagę",
          description:
            "Pierwsza plansza działa jak mocny haczyk: odważna obietnica, niewygodne pytanie albo kontraintuicyjne zdanie.",
        },
        {
          label: "Podtrzymuje ciekawość",
          description:
            "Każda plansza otwiera małą pętlę: coś ujawnia… ale zostawia coś na następny slajd.",
        },
        {
          label: "Prowadzi do działania",
          description:
            "Ostatnia plansza zamienia ciekawość w działanie: obserwowanie, zapisanie posta, komentarz albo kliknięcie w link.",
        },
      ],
      highlight:
        "Pomyśl o karuzeli jak o mini lejku: pierwsza plansza to reklama, środek to historia, a ostatnia plansza to mini strona sprzedażowa.",
    },
    {
      id: "anatomia-historieta",
      title: "2. Anatomia karuzeli w stylu komiksu",
      body: [
        `Format „w stylu komiksu” działa, bo łączy **historię + kadry**. Oto bazowa struktura, którą możesz wykorzystać w prawie każdej niszy:`,
      ],
      bullets: [
        {
          label: "Plansza 1 — Haczyk",
          description:
            "Duże, jasne i bezpośrednie zdanie. Ma natychmiast wzbudzić ciekawość lub identyfikację. Przykład: „Cichy błąd, który zabija Twoją sprzedaż”.",
        },
        {
          label: "Plansza 2 — Kontekst",
          description:
            "Przedstawiasz „bohatera” (to możesz być Ty, klient lub archetyp). Krótko opisujesz sytuację startową.",
        },
        {
          label: "Plansze 3–5 — Konflikt",
          description:
            "Tu rozwija się problem: przeszkody, frustracje, nieudane próby. Idealne miejsce na „kadry” z mini-scenami.",
        },
        {
          label: "Plansza 6 — Rozwiązanie",
          description:
            "Wprowadzasz zmianę podejścia, metodę, narzędzie lub lekcję, która odmienia sytuację.",
        },
        {
          label: "Plansza 7 — Lekcja",
          description:
            "Kondensujesz kluczową ideę w jedno jasne zdanie. To „morał”, który ma zostać w głowie odbiorcy.",
        },
        {
          label: "Plansza 8 — Wezwanie do działania (CTA)",
          description:
            "Prosisz o konkretną akcję: obserwowanie konta, zapisanie posta, komentarz, przejście do linku w bio itd.",
        },
      ],
      highlight:
        "Nie musisz zawsze używać 8 plansz. Ta struktura to przewodnik: możesz ją skrócić (5–6 plansz) albo rozciągnąć (do 10–12), zależnie od sytuacji.",
    },
    {
      id: "estructuras-base",
      title: "3. Struktury karuzel, które znajdziesz w tym podręczniku",
      body: [
        `Żebyś nie zaczynał/a od zera, w tym podręczniku pracujemy na **szablonach struktury**, które możesz używać w każdej niszy.`,
        `Oto kilka najważniejszych:`,
      ],
      bullets: [
        {
          label: "Historia transformacji",
          description:
            "Przed / Po z bohaterem. Idealne do case studies, zmiany nawyków lub wyników klientów.",
        },
        {
          label: "Najczęstsze błędy",
          description:
            "Lista błędów pokazana w wizualnych „kadrach”. Świetne do edukacji i jednoczesnego pozycjonowania się jako ekspert.",
        },
        {
          label: "Krok po kroku",
          description:
            "Krótki tutorial: „5 kroków do X”. Format bardzo „zapisywalny” i chętnie udostępniany.",
        },
        {
          label: "Mity vs rzeczywistość",
          description:
            "Zestawiasz przekonania rynku z tym, co naprawdę działa. Buduje dyskusję i komentarze.",
        },
        {
          label: "„Przed/Po” w sposobie myślenia",
          description:
            "Porównujesz stare podejście do tematu z nową perspektywą. Bardzo mocne w treściach „deep”.",
        },
      ],
      extra: [
        `Na co dzień możesz łączyć te struktury z promptami z Tajnego Banku: najpierw wybierasz strukturę, potem używasz promptu, aby AI wygenerowała bazową treść.`,
      ],
    },
    {
      id: "como-usar-con-banco",
      title: "4. Jak używać tego podręcznika z Tajnym Bankiem Promptów",
      body: [
        `Nie chodzi o to, żeby pisać każdą karuzelę od zera, tylko żeby **zbudować system**:`,
        `1) Wybierasz strukturę z tego podręcznika.  
2) Otwierasz moduł **Promptów tekstowych**.  
3) Wybierasz prompt do pomysłów na treści, storytellingu lub edukacji.  
4) Prosisz AI, aby wygenerowała treść według struktury z tego podręcznika.`,
        `W ten sposób zamieniasz ten PDF w **silnik pomysłów**, a nie kolejny dokument, który tylko leży zapisany.`,
      ],
      highlight:
        "Wskazówka: utwórz notatkę w ulubionym narzędziu o nazwie „Szablony karuzel” i skopiuj tam swoje ulubione struktury z tego podręcznika, żeby zawsze mieć je pod ręką.",
    },
    {
      id: "prompts-clave",
      title: "5. Kluczowe prompty do tworzenia karuzel w stylu komiksu",
      body: [
        `Poniżej masz kilka promptów gotowych do połączenia tego podręcznika z Twoją AI. Użyj ich jako bazy i dopasuj do swojego stylu.`,
        `**Prompt 1 — Generowanie pomysłów na karuzele ze strukturą historii**`,
        `Chcę, żebyś działał/a jak strateg treści wyspecjalizowany w Instagramie i LinkedIn.

Moja nisza to: [opisz swoją niszę].  
Mój idealny klient to: [opisz idealnego klienta].  
Mój cel to: [pozyskiwać leady / edukować / sprzedawać / pozycjonować markę].

Użyj struktury „Historia transformacji”, aby zaproponować **10 pomysłów na karuzele w stylu komiksu**.  
Dla każdej karuzeli podaj:
- Tytuł na planszę 1 (mocny haczyk).  
- Streszczenie historii (2–3 linie).  
- Jaki rezultat/transformację pokazujesz.  
- Sugerowane CTA na ostatnią planszę.`,
        `**Prompt 2 — Napisanie treści każdej planszy**`,
        `Na podstawie tego pomysłu na karuzelę:

[wklej tutaj wybrany pomysł]

Chcę, żebyś napisał/a treść do karuzeli w stylu komiksu (maks. 8 plansz), używając tej struktury:
1) Haczyk  
2) Kontekst  
3) Konflikt (część 1)  
4) Konflikt (część 2)  
5) Zwrot / odkrycie  
6) Rozwiązanie lub metoda  
7) Kluczowa lekcja  
8) CTA

Dla każdej planszy napisz:
- Krótki, chwytliwy tytuł (maks. 8 słów).  
- Krótki tekst wspierający (1–3 proste zdania).`,
        `**Prompt 3 — Adaptacja karuzeli do innego formatu**`,
        `Wkleję Ci treść karuzeli w formacie tekstowym.

[wklej tutaj całą karuzelę]

Chcę, żebyś:
1) Zamienił/a to w scenariusz krótkiego wideo (Reel/TikTok).  
2) Streścił/a karuzelę do jednego posta na LinkedIn.  
3) Dał/a mi 3 alternatywne tytuły dla planszy 1.`,
        `**Prompt 4 — Dopasowanie tonu i głosu marki**`,
        `Poniżej masz treść karuzeli:

[wklej tutaj karuzelę]

Chcę, żebyś dopasował/a tekst tak, aby brzmiał zgodnie z tym stylem marki:
- Ton: [bliższy / profesjonalny / zabawny / bezpośredni].  
- Poziom techniczności: [niski / średni / wysoki].  
- Słowa, których chcemy używać: [lista].  
- Słowa, których wolimy unikać: [lista].

Zwróć poprawioną karuzelę, zachowując strukturę plansza po planszy.`,
      ],
      highlight:
        "Zapisz swoje ulubione prompty w swojej bibliotece. Mając 3–5 dobrze skonfigurowanych promptów, możesz generować dziesiątki karuzel bez zaczynania od zera.",
    },
    {
      id: "plan-implementacion",
      title: "6. Plan wdrożenia w 7 dni",
      body: [
        `Żeby ten bonus nie został tylko teorią, oto mini plan działania na tydzień:`,
        `• Dzień 1: Wybierz 1–2 ulubione struktury z tego podręcznika.  
• Dzień 2: Użyj **Promptu 1**, aby wygenerować co najmniej 10 pomysłów na karuzele.  
• Dzień 3: Wybierz 3 najlepsze pomysły i rozwiń treść za pomocą **Promptu 2**.  
• Dzień 4: Dopasuj ton **Promptem 4** i sprawdź, czy wszystko brzmi jak Ty.  
• Dzień 5: Zaprojektuj karuzele w ulubionym narzędziu (Canva, Figma itd.).  
• Dzień 6: Zaplanuj publikację co najmniej 2 karuzel.  
• Dzień 7: Przeanalizuj, co zadziałało najlepiej, i zrób notatki na kolejny zestaw.`,
        `Jeśli powtarzasz ten cykl co tydzień, po kilku tygodniach będziesz mieć system wizualnych treści, który pracuje dla Twojej marki nawet wtedy, gdy jesteś offline.`,
      ],
    },
  ],
};
