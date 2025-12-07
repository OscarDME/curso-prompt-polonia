// src/lib/bonus-05-chatgpt-training-content.js

export const bonus05ChatGPTTraining = {
  title: "Trening ChatGPT: od zera do poziomu zaawansowanego",
  heroText:
    "Praktyczna ścieżka, dzięki której przejdziesz od pojedynczych próśb do budowania kompletnych systemów z ChatGPT i Twoim Sekretnym Bankiem Promptów.",

  classes: [
    {
      id: "intro-fundamentos",
      title: "Lekcja 1 — Podstawy ChatGPT i generatywnej AI",
      level: "Początkujący",
      duration: "20–30 min",
      summary:
        "Zrozumiesz, czym naprawdę jest ChatGPT, co potrafi (a czego nie), oraz jak wpasować go w swój workflow jako twórca lub przedsiębiorca.",
      goals: [
        "Mieć jasność, czym jest, a czym nie jest ChatGPT.",
        "Zidentyfikować zadania, w których AI daje realną przewagę.",
        "Unikać nierealnych oczekiwań i niepotrzebnej frustracji.",
      ],
      outline: [
        "Czym jest model językowy i jak „działa” (spoiler: nie myśli jak człowiek).",
        "Jakie typy zadań ChatGPT rozwiązuje najlepiej.",
        "Typowe ograniczenia: halucynacje, daty, kontekst, prywatne dane.",
        "Podstawowe dobre praktyki pracy z AI.",
        "Jak włączyć ChatGPT do codziennej pracy.",
      ],
      content: [
        "Zanim przejdziemy do promptów zaawansowanych, musimy skalibrować oczekiwania. ChatGPT nie jest idealną wyrocznią ani „osobą w komputerze”: to model językowy wytrenowany do przewidywania kolejnych słów w spójny sposób.",
        "W praktyce oznacza to, że świetnie radzi sobie z tworzeniem szkiców, proponowaniem pomysłów, przerabianiem tekstów, budowaniem struktur i wspieraniem myślenia. Słabiej wypada, gdy prosisz o ultra-precyzyjne dane, bardzo świeże informacje albo decyzje wymagające głębokiego ludzkiego osądu.",
        "Pomocny skrót myślowy: Ty dostarczasz kryteria i kontekst; ChatGPT dostarcza szybkość i kreatywność. Gdy próbujesz oddać mu kryteria, pojawia się frustracja: ogólniki, błędy albo rzeczy, które „brzmią dobrze”, ale nie są prawdziwe.",
        "Spójrz na swoje życie lub biznes i zrób krótką listę zadań powtarzalnych: pisać maile, tworzyć posty, przygotowywać wyjaśnienia, streszczać informacje, tłumaczyć, porządkować pomysły… To idealni kandydaci do wsparcia przez AI i uwolnienia przestrzeni w głowie.",
        "Celem tego treningu nie jest tylko pisanie lepszych promptów, ale zrozumienie, jak używać ChatGPT jako elementu większego systemu: Twojego Sekretnego Banku Promptów, narzędzi i realnych celów.",
      ],
    },
    {
      id: "prompting-basico",
      title: "Lekcja 2 — Podstawowy prompting: mów do AI jasno",
      level: "Początkujący",
      duration: "25–35 min",
      summary:
        "Poznasz podstawowe elementy dobrego promptu: rolę, kontekst, cel, format odpowiedzi i ton.",
      goals: [
        "Opanować bazową strukturę skutecznego promptu.",
        "Umieć precyzyjnie wymuszać format wyjścia.",
        "Zminimalizować ogólnikowe odpowiedzi.",
      ],
      outline: [
        "Elementy dobrego promptu.",
        "Definiowanie roli AI.",
        "Dawanie wystarczającego kontekstu (ale nie nieskończonego).",
        "Wymaganie jasnego formatu odpowiedzi.",
        "Kontrola tonu i poziomu szczegółowości.",
      ],
      content: [
        "Większość osób używa ChatGPT tak, jakby wysyłała luźne wiadomości na WhatsAppie: krótkie zdania, bez kontekstu i z bardzo ogólną prośbą. Efekt: równie ogólne odpowiedzi.",
        "Dobry podstawowy prompt zwykle ma pięć elementów: 1) Rola (kim ma być AI), 2) Kontekst (o co chodzi), 3) Cel (co chcesz osiągnąć), 4) Format odpowiedzi (jak ma wyglądać output), 5) Ton (jak ma brzmieć).",
        "Zamiast: „Zrób mi post o nawykach”, lepiej: „Wciel się w twórcę treści o produktywności dla przedsiębiorców. Moja publiczność to freelancerzy, którzy czują chaos. Chcę krótki post na Instagram o 3 prostych nawykach na start. Odpowiedz w formacie karuzeli: chwytliwy tytuł + 3 jasne bullet-pointy. Ton bliski, bez technicznego żargonu.”",
        "Rola ustawia „osobowość” AI, kontekst daje materiał, a format i ton zmniejszają tarcie, bo nie musisz potem dopasowywać treści ręcznie.",
        "Od tej lekcji używaj mini-checklisty: Czy zdefiniowałem rolę? Czy dałem kontekst? Czy cel jest jasny? Czy poprosiłem o konkretny format? Czy określiłem ton?",
      ],
    },
    {
      id: "prompting-intermedio",
      title: "Lekcja 3 — Prompting średniozaawansowany: iteracja i dopracowanie wyników",
      level: "Średniozaawansowany",
      duration: "25–40 min",
      summary:
        "Nie zadowalaj się pierwszą odpowiedzią. Naucz się iterować mądrze, aż uzyskasz rezultat, którego naprawdę użyjesz.",
      goals: [
        "Zrozumieć, dlaczego iteracja jest kluczowa w pracy z AI.",
        "Mieć gotowe zwroty do doprecyzowywania i ulepszania odpowiedzi.",
        "Nauczyć się łączyć kilka promptów w mini-rozmowę.",
      ],
      outline: [
        "Pierwsza odpowiedź rzadko jest najlepsza.",
        "Jak prosić o konkretne poprawki.",
        "Doprecyzowanie kierunku, tonu i poziomu szczegółów.",
        "Dodawanie przykładów i kontrprzykładów.",
        "Łączenie kilku odpowiedzi w jedną lepszą.",
      ],
      content: [
        "Jedną z najważniejszych umiejętności z ChatGPT nie jest napisanie „idealnego promptu”, tylko umiejętność rozmowy z AI. Pierwsza odpowiedź to zazwyczaj szkic. Wartość pojawia się, gdy zaczynasz iterować.",
        "Zamiast kasować i zaczynać od zera, możesz powiedzieć: „Zrób to bardziej bezpośrednio i krótszymi zdaniami”, „Dodaj konkretne przykłady dla osoby początkującej”, „Skróć o połowę bez utraty kluczowych idei” albo „Daj trzy alternatywne wersje nastawione na różne korzyści”.",
        "Możesz też korygować styl: „To brzmi zbyt motywacyjnie — chcę bardziej technicznie i na danych” albo „Zrób to dla odbiorcy zaawansowanego, nie dla początkującego”.",
        "Świetna technika: poproś AI o krytykę własnego wyniku: „Wciel się w wymagającego redaktora. Co poprawił(a)byś w tym tekście, żeby był bardziej perswazyjny i klarowny?”. Potem poproś o wdrożenie tych uwag.",
        "Traktuj ChatGPT jak współpracownika pracującego z Tobą nad jedną wersją, a nie kogoś, kto ma „trafić za pierwszym razem”. Twoją rolą jest prowadzić iterację tak długo, aż rezultat pasuje do potrzeb.",
      ],
    },
    {
      id: "prompting-avanzado-sistemas",
      title: "Lekcja 4 — Prompting zaawansowany: systemy, szablony i prompty główne",
      level: "Zaawansowany",
      duration: "30–45 min",
      summary:
        "Przejdź od pojedynczych promptów do małych systemów opartych o prompty główne, szablony i wyspecjalizowanych asystentów.",
      goals: [
        "Zrozumieć, czym jest prompt główny i czym różni się od promptu jednorazowego.",
        "Tworzyć szablony, których użyjesz wielokrotnie.",
        "Połączyć Sekretny Bank Promptów z realnymi przepływami pracy.",
      ],
      outline: [
        "Prompt jednorazowy vs. prompt główny.",
        "Trwałe role i wyspecjalizowani asystenci.",
        "Szablony promptów do zadań powtarzalnych.",
        "Łączenie modułów: tekst, obraz, wideo, narzędzia.",
        "Projektowanie własnego minimalnego systemu z AI.",
      ],
      content: [
        "Prompt główny to dłuższy, bardziej szczegółowy tekst, który definiuje rolę, zasady, styl i sposób odpowiadania AI w konkretnym typie zadania. To właśnie stoi za +30 wirtualnymi asystentami z Bonusu #02.",
        "Zamiast improwizować za każdym razem, raz definiujesz, jak ma działać Twój „Copywriter Pro”, „Social Media Manager” czy „Konsultant biznesowy”, a potem tylko podajesz nowe dane do kolejnych przypadków.",
        "Możesz też budować szablony promptów do zadań cyklicznych, np.: „pisanie scenariuszy Reels”, „zamiana długiego artykułu na 5 postów”, „pisanie maili powitalnych” czy „tłumaczenie treści z zachowaniem tonu”. Szablon ma pola do uzupełnienia pod projekt.",
        "Twój Sekretny Bank Promptów daje dużą bazę takich promptów i asystentów. Ta lekcja zmienia sposób myślenia: z „chaotycznej kolekcji” na „elementy systemu, które realizują konkretne cele”.",
        "Ćwiczenie: rozpisz swoje tygodniowe zadania (treści, klienci, produkty, itp.) i zdecyduj, jakich 3–5 promptów głównych oraz 5–10 szablonów będziesz używać zawsze. To stanie się Twoim minimalnym systemem pracy z AI.",
      ],
    },
    {
      id: "aplicacion-negocio",
      title: "Lekcja 5 — Zastosuj ChatGPT w biznesie, treściach i marce osobistej",
      level: "Średniozaawansowany",
      duration: "30–40 min",
      summary:
        "Ugruntuj wszystko na konkretnych przypadkach: treści, lejki, produkty, obsługa klienta i procesy wewnętrzne.",
      goals: [
        "Wychwycić konkretne możliwości użycia AI w Twoim kontekście.",
        "Nie używać ChatGPT tylko do „contentu dla samego contentu”.",
        "Mieć jasną mapę priorytetowych use-case’ów.",
      ],
      outline: [
        "Zastosowania w treściach (posty, scenariusze, karuzele, maile).",
        "Zastosowania w biznesie (oferty, lejki, research, skrypty).",
        "Zastosowania w procesach (dokumentacja, SOP, podsumowania).",
        "Balans: co delegować AI, a czego nie.",
        "Jak mierzyć, czy AI naprawdę oszczędza czas.",
      ],
      content: [
        "Jeśli używasz ChatGPT wyłącznie do generowania pomysłów na treści, ale nie łączysz tego z ofertą, produktami ani procesami, zostajesz na powierzchni. Prawdziwy skok jest wtedy, gdy AI dotyka kluczowych punktów Twojego biznesu.",
        "W treściach możesz używać AI do: budowania kalendarzy miesięcznych, repurposingu (jedna treść → wiele formatów), dopasowania tonu pod kanały oraz pisania scenariuszy wideo. W biznesie: definiowanie ofert, pisanie stron sprzedażowych, przygotowanie skryptów rozmów, synteza feedbacku od klientów.",
        "W procesach wewnętrznych ChatGPT jest świetny do dokumentacji: SOPy (procedury), checklisty, wewnętrzne przewodniki i podsumowania spotkań. Może też porządkować rozproszone notatki w logiczną strukturę.",
        "Klucz: mierz, czy AI oszczędza czas, czy tylko zajmuje uwagę. Dobre pytanie: „Jakich zadań przestałem/przestałam robić ręcznie dzięki temu przepływowi z AI?”. Jeśli odpowiedź brzmi „żadnych”, warto coś przestawić.",
        "Celem nie jest używanie AI „bo trend”, tylko uwolnienie czasu i energii na rzeczy, które umiesz tylko Ty: decyzje, relacje, wizja długoterminowa.",
      ],
    },
    {
      id: "productividad-flujos",
      title: "Lekcja 6 — Produktywność i workflowy z ChatGPT",
      level: "Średniozaawansowany",
      duration: "20–30 min",
      summary:
        "Na koniec zbudujesz realistyczny workflow z ChatGPT i Sekretnym Bankiem Promptów do codziennego działania.",
      goals: [
        "Zaprojektować dzienny/tygodniowy workflow z AI.",
        "Unikać blokady: „nie wiem, jakiego promptu teraz użyć”.",
        "Wdrożyć prosty system, który da się utrzymać w czasie.",
      ],
      outline: [
        "Projektowanie rutyny AI (dziennie i tygodniowo).",
        "Tworzenie własnej mini-biblioteki ulubionych promptów.",
        "Jak dokumentować najlepsze prompty i wyniki.",
        "Typowe błędy przy próbie „życia w ChatGPT”.",
        "Kolejny krok: integracja z innymi narzędziami (Gamma, narzędzia AI itd.).",
      ],
      content: [
        "Częsty błąd: otwierasz ChatGPT bez planu i kręcisz się w kółko wokół odpowiedzi, których nigdzie nie używasz. Alternatywa: otwierasz go jako część jasnej rutyny — generowanie pomysłów, rozwijanie kluczowej treści, korekta tekstu, dokumentowanie decyzji.",
        "Możesz zdefiniować codzienną rutynę AI (20–30 min): 1) generujesz pomysły na treści, 2) rozwijasz jedną konkretną rzecz, 3) porządkujesz jedno zadanie wewnętrzne (procedura, mail, wyjaśnienie).",
        "Ważne jest też posiadanie własnej mini-biblioteki ulubionych promptów. Nawet mając tysiące promptów, w praktyce będziesz wracać do kilku. Trzymaj je w dokumencie, Notion, Google Docs lub gdzie wolisz.",
        "Dokumentuj najlepsze wyniki: wklej odpowiedzi, które faktycznie zadziałały, i dopisz, jakiego promptu użyłeś/użyłaś, co zmieniłeś/zmieniłaś i dlaczego to zadziałało. Dzięki temu system staje się coraz bardziej „Twój”.",
        "ChatGPT i Sekretny Bank Promptów to potężne narzędzia, ale potrzebujesz prostych ram, żeby się nie utopić: lepiej kilka jasnych, powtarzalnych workflowów niż sto rozproszonych eksperymentów, których nigdy nie integrujesz z realną pracą.",
      ],
    },
  ],
};
