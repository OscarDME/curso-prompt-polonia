// src/lib/bonus-07-avatar-hablante-content.js

export const bonus07AvatarHablante = {
  id: "bonus-07",
  title: "Stwórz swojego mówiącego awatara AI",
  subtitle:
    "Naucz się tworzyć mówiącego awatara z pomocą AI, który nagrywa za Ciebie kompletne wideo.",
  heroText: `W tym bonusie zobaczysz kompletny proces, dzięki któremu będziesz mieć własnego „cyfrowego klona” nagrywającego filmy:

1) Zdefiniowanie awatara (lub postaci).  
2) Tworzenie scenariuszy z Twoim Sekretnym Bankiem Promptów.  
3) Generowanie głosu i wideo narzędziami AI.  
4) Zbudowanie powtarzalnego systemu do produkcji filmów „hurtowo”.`,

  sections: [
    {
      id: "vision-general",
      title: "1. Czym jest mówiący awatar AI i co możesz z nim zrobić",
      body: [
        `Mówiący awatar to wideo, na którym widzisz twarz (realistyczną, rysunkową albo w stylu korporacyjnym) mówiącą z synchronizacją ruchu ust — bez konieczności nagrywania się za każdym razem.`,
        `Najciekawsze nie jest samo „wizualne trickowanie”, tylko to, co daje Ci w biznesie lub marce osobistej:`,
      ],
      bullets: [
        {
          label: "Treści na pół-autopilocie",
          description:
            "Możesz publikować filmy wyjaśniające pojęcia, produkty lub procesy, bez włączania kamery każdego dnia.",
        },
        {
          label: "Szybkie testy A/B",
          description:
            "Testujesz różne scenariusze, hooki i komunikaty bez długich nagrań i bez ekipy.",
        },
        {
          label: "Standaryzacja edukacji",
          description:
            "Tworzysz moduły szkoleniowe, w których ten sam awatar może wyjaśniać ten sam materiał setki razy — bez zmęczenia.",
        },
      ],
      highlight:
        "Pomyśl o awatarze jak o „skalowalnej wersji Ciebie”: mówi to, co Ty byś powiedział(a), ale jest dostępny 24/7.",
    },
    {
      id: "flujo-completo",
      title: "2. Pełny przepływ: od pomysłu do wideo z awatarem",
      body: [
        `Zanim przejdziemy do narzędzi, zobacz mapę całego procesu, którego będziesz używać w kółko:`,
        `1) Określenie celu wideo (co ma się wydarzyć potem).  
2) Napisanie scenariusza z Twoim Sekretnym Bankiem Promptów.  
3) Wybór głosu i stylu awatara.  
4) Wygenerowanie wideo w narzędziu do „mówiących awatarów”.  
5) Dopracowanie detali (napisy, cięcia, formaty pod social media).`,
        `Ten bonus skupia się na **procesie i promptach**. Narzędzia mogą się zmieniać z czasem, ale system zostaje.`,
      ],
      highlight:
        "Najpierw system, potem narzędzie. Jeśli jutro pojawi się lepsza aplikacja, podmieniasz tylko ten element — nie cały proces.",
    },
    {
      id: "definir-avatar",
      title: "3. Zdefiniuj styl i rolę swojego awatara",
      body: [
        `Twój awatar może być dosłownie Tobą (Twoja twarz) albo postacią reprezentującą Twoją markę. Najważniejsze to określić jego **rolę** i **styl**.`,
        `Żeby było łatwiej, odpowiedz na te pytania:`,
      ],
      bullets: [
        {
          label: "Kim jest awatar?",
          description:
            "Czy to Twoja profesjonalna wersja? Bardziej luźna? Postać w stylu mentora? Ktoś „z zespołu”?",
        },
        {
          label: "Jakie filmy będzie tworzył?",
          description:
            "Wyjaśniające? Sprzedażowe? Szybkie tipy? Onboarding klientów? Lekcje kursu?",
        },
        {
          label: "Jakiego tonu użyjesz?",
          description:
            "Bardziej poważny, bardziej bliski, zabawny, techniczny… Ma pasować do Twojej marki.",
        },
      ],
      highlight:
        "Im jaśniej określisz, kim jest awatar, tym łatwiej utrzymasz spójność we wszystkich filmach.",
    },
    {
      id: "guiones-con-banco",
      title: "4. Twórz scenariusze dla awatara z Twoim Sekretnym Bankiem Promptów",
      body: [
        `To tutaj awatar łączy się bezpośrednio z Twoim Sekretnym Bankiem Promptów. Chodzi o to, żebyś już nigdy nie patrzył(a) na pustą stronę.`,
        `Możesz używać modułów **Promptów tekstowych** i **Promptów wideo**, aby:  
- Generować pomysły na wideo.  
- Pisać krótkie scenariusze typu Reel/TikTok/Short.  
- Pisać dłuższe scenariusze do lekcji lub filmów wyjaśniających.`,
        `Oto kilka bazowych promptów, które możesz wielokrotnie wykorzystywać (dostosowując je w swojej bibliotece):`,
        `**Prompt 1 — Pomysły na wideo pod mówiącego awatara**  
Chcę, żebyś działał(a) jako strateg treści wideo.  
Mam mówiącego awatara AI, którego będę używać w swojej marce.

Moja nisza to: [opisz niszę].  
Mój idealny klient to: [krótki opis].  
Mój cel tych wideo to: [pozyskiwać leady / edukować / sprzedawać / pozycjonować markę].

Zaproponuj 15 pomysłów na krótkie wideo (30–60 s), które mogę nagrać z mówiącym awatarem.  
Dla każdego pomysłu podaj:  
- Tytuł / hook do pierwszego zdania.  
- Streszczenie treści w 2–3 linijkach.  
- Efekt lub obietnicę (co odbiorca zyska).  
- Proponowane CTA na końcu.`,
        `**Prompt 2 — Scenariusz do krótkiego wideo z awatarem**  
Na podstawie tego pomysłu:

[wklej tutaj jeden z powyższych pomysłów]

Napisz scenariusz do wideo 45–60 sekund z mówiącym awatarem.  
Struktura:  
1) Mocny hook na start (maks. 8 sekund).  
2) Rozwinięcie w 3–4 kluczowych punktach (proste zdania).  
3) Zakończenie z jasnym CTA.

Napisz scenariusz tak, jakby był czytany na głos: krótkie zdania, prosty język i szybkie tempo.`,
        `**Prompt 3 — Dopasuj scenariusz do różnych formatów**  
Wkleję Ci scenariusz wideo:

[wklej tutaj scenariusz]

Chcę, żebyś:  
1) Dał(a) wersję ultra-krótką na 15 sekund.  
2) Dał(a) wersję bardziej rozwiniętą na 90 sekund.  
3) Zaproponował(a) 3 alternatywne hooki na początek do testów.`,
      ],
      highlight:
        "Klucz: awatar nie „wymyśla”, co mówić. To Ty, dzięki promptom, układasz strategiczny przekaz — awatar tylko ubiera go w formę wideo.",
    },
    {
      id: "voz-avatar",
      title: "5. Wybierz i wygeneruj głos awatara",
      body: [
        `Masz dwie główne opcje głosu dla awatara:`,
        `1) Użyć własnego głosu (nagrać się raz lub zastosować klonowanie głosu).  
2) Użyć głosu generowanego przez AI, który pasuje do Twojej marki.`,
        `Typowe narzędzia (nazwy mogą się zmieniać z czasem, ale logika zostaje) to usługi **text-to-speech (TTS)** z naturalnymi głosami, a czasem także klonowaniem głosu na bazie Twoich próbek.`,
        `Niezależnie od konkretnego narzędzia, proces zwykle wygląda tak:  
- Kopiujesz scenariusz wygenerowany promptami.  
- Wklejasz go do narzędzia głosowego.  
- Wybierasz język, akcent i styl głosu.  
- Generujesz audio i eksportujesz (zwykle .mp3 lub .wav).`,
        `Wskazówka: nawet przy głosie syntetycznym zawsze sprawdź, czy intonacja brzmi sensownie. Jeśli narzędzie na to pozwala, dopasuj tempo i ton, żeby brzmiało naturalnie.`,
      ],
      highlight:
        "Zacznij prosto: najpierw dobre scenariusze, potem „wystarczająco dobry” głos. Nie wszystko musi być perfekcyjne od pierwszego dnia.",
    },
    {
      id: "herramienta-avatar",
      title: "6. Wygeneruj wideo w narzędziu do mówiącego awatara",
      body: [
        `Gdy masz już scenariusz i audio (albo sam scenariusz — zależnie od narzędzia), czas wygenerować wideo awatara.`,
        `Wiele narzędzi do mówiących awatarów działa podobnie (ogólny schemat):  
1) Wybierasz awatara (szablon lub własne zdjęcie — zgodnie z zasadami danego narzędzia).  
2) Wklejasz tekst scenariusza lub wgrywasz wygenerowane wcześniej audio.  
3) Narzędzie synchronizuje ruch ust, gesty i głos.  
4) Eksportujesz wideo w formacie MP4.`,
        `Niektóre pozwalają także:  
- Zmieniać tła i sceny.  
- Dodawać tekst na ekranie.  
- Dopasowywać kadry i gesty awatara.`,
        `Twoim priorytetem powinny być **dobre scenariusze i jasny przekaz**. Detale wizualne dopracujesz z czasem.`,
      ],
      highlight:
        "Najpierw testuj krótkie wideo (30–60 s), aż znajdziesz styl, który Ci się podoba. Potem przechodź do dłuższych formatów.",
    },
    {
      id: "edicion-y-formatos",
      title: "7. Finalne poprawki: napisy, formaty i dystrybucja",
      body: [
        `Po wygenerowaniu wideo z awatarem możesz mocno podbić jakość kilkoma prostymi krokami:`,
        `• Dodaj napisy: wiele edytorów (np. CapCut, Descript i inne) oferuje automatyczne napisy.  
• Dopasuj format: kwadrat, pion, poziom — zależnie od platformy (Reels, TikTok, YouTube itd.).  
• Dodaj elementy marki: logo, kolory, fonty, proste overlaye.`,
        `Znów możesz wesprzeć się promptami, aby:  
- Tworzyć tytuły i opisy do publikacji.  
- Generować copy towarzyszące wideo w social media.  
- Zaproponować warianty tej samej treści pod różne platformy.`,
      ],
      highlight:
        "Awatar to element większego systemu: wideo powstaje ze scenariuszy generowanych promptami i łączy się z karuzelami, e-mailami oraz stronami sprzedażowymi.",
    },
    {
      id: "sistema-repetible",
      title: "8. Zaprojektuj powtarzalny system z mówiącym awatarem",
      body: [
        `Żeby ten bonus nie skończył się na „zrobiłem(am) jedno wideo i tyle”, proponuję prosty, powtarzalny system produkcji:`,
        `1) Ustal częstotliwość: np. 1–3 wideo tygodniowo z awatarem.  
2) Stwórz dokument, w którym trzymasz:  
   - Szablon promptów do generowania pomysłów.  
   - Szablon promptów do scenariuszy.  
   - Checklistę procesu (scenariusz → głos → awatar → montaż → publikacja).  
3) Zarezerwuj 1–2 godziny tygodniowo na:  
   - Wygenerowanie 3–5 scenariuszy promptami.  
   - Przepuszczenie ich przez proces głos + awatar.  
   - Przygotowanie kilku filmów gotowych lub prawie gotowych.`,
        `Jeśli będziesz to powtarzać co tydzień, szybko zbudujesz bibliotekę filmów z awatarem, które pokrywają kluczowe komunikaty Twojej marki, produktów i treści edukacyjnych.`,
      ],
      highlight:
        "Magia nie polega na jednym perfekcyjnym filmie, tylko na procesie, który możesz powtarzać niemal „na autopilocie”.",
    },
  ],
};
