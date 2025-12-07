// src/lib/course-intro.js

export const courseIntro = {
  id: "inicio",
  title: "Witamy w Tajnym Banku Promptów",
  subtitle:
    "Zanim zaczniesz, zobacz, jak wszystko jest zorganizowane, żeby wycisnąć z tego maksimum.",
  heroText: `Dzięki za zaufanie Tajnemu Bankowi Promptów.
Oto centrum dowodzenia Twojego arsenału AI: prompty, asystenci, narzędzia i szkolenia.

W tej sekcji wyjaśniam, jak działa platforma, co znajdziesz w każdym module i jak krok po kroku korzystać z każdej części.`,

  // Główne sekcje wyjaśniające
  sections: [
    {
      id: "acceso-y-codigo",
      title: "1. Dostęp i kod zakupu",
      body: [
        `Twój dostęp do tej platformy jest powiązany z kursem, który kupiłeś(-aś) na Hotmart.`,
        `W produkcie, który otrzymałeś(-aś) mailowo (z Hotmart), znajduje się Twój **kod dostępu**. To ten sam kod, którego używasz, aby wejść do tej strefy członkowskiej.`,
        `Dopóki masz ten kod, możesz wracać i logować się zawsze, kiedy chcesz, ze strony logowania. Jeśli zgubisz maila, sprawdź spam/oferty lub skontaktuj się ze wsparciem.`
      ]
    },
    {
      id: "ruta-principal",
      title: "2. Jak jest zorganizowana platforma",
      body: [
        `Po wejściu do strefy członkowskiej zobaczysz ekran główny z **hero** oraz dwoma rzędami kart w stylu „Netflix”.`,
        `Pierwszy rząd nazywa się **„Główna ścieżka — Tajny Bank Promptów”**.
To tutaj znajduje się wszystko, czego będziesz używać na co dzień:`
      ],
      bullets: [
        {
          label: "Start",
          description:
            "Ta sekcja (w której jesteś teraz): szybki przewodnik po tym, jak działa cały kurs i platforma."
        },
        {
          label: "Prompty tekstowe",
          description:
            "Biblioteka promptów do copy, skryptów, postów, e-maili, reklam, skryptów sprzedażowych i dużo więcej."
        },
        {
          label: "Prompty do obrazów",
          description:
            "Gotowe prompty do generowania obrazów, okładek, reklam i profesjonalnych zdjęć z użyciem AI."
        },
        {
          label: "Prompty do wideo",
          description:
            "Prompty zaprojektowane do tworzenia viralowych filmów, reklam i krótkich treści z użyciem AI."
        },
        {
          label: "Narzędzia AI",
          description:
            "Rekomendacje i poradniki narzędzi, które pomogą Ci tworzyć strony, montować wideo i automatyzować zadania."
        },
        {
          label: "Asystenci GPT",
          description:
            "Dostęp do ponad 30 wyspecjalizowanych asystentów (copywriter, social media, programista, konsultant i inne)."
        },
        {
          label: "Szkolenia",
          description:
            "Lekcje i dodatkowe materiały, żeby pogłębić wiedzę o AI, ChatGPT i strategiach biznesowych."
        }
      ],
      image: "/intro/ecosistema-ia.png"
    },
    {
      id: "bonos",
      title: "3. Bonusy i dodatki",
      body: [
        `Drugi rząd jest przeznaczony na **ekskluzywne bonusy**, które są częścią Twojego dostępu.`,
        `Na początku zobaczysz karty bonusów ciemniejsze i z komunikatem „Dostępne za 48 godzin”. To celowe: bonusy odblokowują się automatycznie trochę po zakupie.`,
        `W tej sekcji uzyskasz dostęp do:`
      ],
      bullets: [
        {
          label: "Bonus #01 — Społeczność VIP na WhatsApp",
          description:
            "Prywatna grupa z aktywnymi członkami, networkingiem i codziennym wsparciem, żeby przyspieszyć Twoje rezultaty."
        },
        {
          label: "+30 wirtualnych asystentów AI",
          description:
            "Asystenci już wytrenowani, by pomagać Ci jako copywriter, social media manager, programista, konsultant i nie tylko."
        },
        {
          label: "Instrukcja viralowych karuzel",
          description:
            "Praktyczny przewodnik w formie „historyjki” do tworzenia karuzel, które generują ogromne zaangażowanie."
        },
        {
          label: "Generator e-booków i prezentacji",
          description:
            "System do tworzenia e-booków, prezentacji i bogatych materiałów w kilka minut."
        },
        {
          label: "Szkolenie ChatGPT: od zera do zaawansowanego",
          description:
            "Kompleksowe szkolenie, by opanować ChatGPT od podstaw do poziomu zaawansowanego."
        },
        {
          label: "Arsenał +600 narzędzi AI",
          description:
            "Wyselekcjonowana lista narzędzi (wiele darmowych) do tworzenia, automatyzacji i skalowania Twojego biznesu."
        },
        {
          label: "Stwórz mówiącego avatara AI",
          description:
            "Metoda tworzenia avatara, który nagrywa filmy za Ciebie — z głosem i twarzą generowanymi przez AI."
        },
        {
          label: "Mega Milionerski Prompt",
          description:
            "Strategiczny prompt, który streszcza ekosystem biznesowy z wieloma źródłami przychodu."
        }
      ],
      highlight:
        `Gdy bonusy się aktywują, po prostu wrócisz do startu kursu i będziesz mógł/mogła kliknąć każdą kartę tak jak w głównej ścieżce.`
    },
    {
      id: "biblioteca-prompts",
      title: "4. Jak korzystać z biblioteki promptów",
      body: [
        `Moduły **Prompty tekstowe**, **Prompty do obrazów** i **Prompty do wideo** działają według tej samej logiki.`,
        `Po wejściu do którejkolwiek z tych sekcji zobaczysz **bibliotekę kart** z:`
      ],
      bullets: [
        {
          label: "Tytułem promptu",
          description:
            "Szybko pokazuje, do czego służy dany prompt (np. „Spersonalizowany program nauki”)."
        },
        {
          label: "Kategorią",
          description:
            "Grupuje prompty według zastosowania: edukacja, marketing, reklamy, produkty itd."
        },
        {
          label: "Podsumowaniem",
          description:
            "Krótki opis tego, co robi prompt i kiedy warto go użyć."
        }
      ],
      image: "/intro/panel-control-creador.png",
      extra: [
        `Nad biblioteką znajdziesz:`,
        `• **Filtr kategorii:** możesz włączyć kategorię, aby zobaczyć tylko prompty tego typu.`,
        `• **Wyszukiwarkę po tytule:** wpisz słowo kluczowe z tytułu, aby przefiltrować listę (idealne, gdy już wiesz, czego szukasz).`
      ]
    },
    {
      id: "ver-y-copiar-prompts",
      title: "5. Podgląd i kopiowanie promptu",
      body: [
        `Po kliknięciu przycisku **„Zobacz prompt”** na karcie, rozwinie się pełna treść promptu.`,
        `Stamtąd możesz:`
      ],
      bullets: [
        {
          label: "Przeczytać pełny prompt",
          description:
            "Zobaczysz go sformatowanego w polu tekstowym, gotowego do zaznaczenia lub dostosowania."
        },
        {
          label: "Skopiować jednym kliknięciem",
          description:
            "Kliknij przycisk **„Kopiuj”**, a prompt automatycznie trafi do schowka, aby wkleić go w ChatGPT lub inną AI."
        }
      ],
      image: "/intro/flujo-trabajo-automatizado.png",
      highlight:
        "Idealny workflow: filtruj / wyszukaj → otwórz jeden lub kilka promptów → kopiuj → wklej do ulubionej AI → dopasuj do kontekstu."
    },
    {
      id: "herramientas-y-asistentes",
      title: "6. Narzędzia AI i asystenci GPT",
      body: [
        `W tych modułach znajdziesz nie tylko prompty, ale też **wyjaśnienia i praktyczne rekomendacje**.`,
        `• W **Narzędziach AI** zobaczysz opisy polecanych narzędzi, możliwe zastosowania oraz sugestie, jak wdrożyć je w biznesie lub projekcie.`,
        `• W **Asystentach GPT** poznasz logikę korzystania z asystentów: jak uzyskać dostęp, co robi każdy z nich i przykładowe komendy, aby szybko wystartować.`,
        `Wszystko będzie zgodne z filozofią kursu: jasne wyjaśnienia, praktyczne podejście i zawsze z promptami gotowymi do użycia.`
      ]
    },
    {
      id: "entrenamientos",
      title: "7. Szkolenia bez komplikowania",
      body: [
        `W module **Szkolenia** znajdziesz treści w formie tekstu (a gdy to ma zastosowanie — linki do wideo), gdzie pogłębiamy kluczowe tematy, takie jak:`
      ],
      bullets: [
        {
          label: "Strategiczne użycie ChatGPT",
          description:
            "Jak przejść od pojedynczych próśb do budowania kompletnych systemów z AI."
        },
        {
          label: "Zastosowanie w biznesie i marce osobistej",
          description:
            "Konkretne pomysły, jak używać promptów w swojej niszy, a nie zostawiać ich tylko w teorii."
        },
        {
          label: "Praktyczne przypadki",
          description:
            "Realne przykłady i szablony, które możesz skopiować/dostosować do swojego kontekstu."
        }
      ],
      highlight:
        "Nie musisz przerabiać wszystkiego naraz. Traktuj szkolenia jako wsparcie, gdy poczujesz, że chcesz wejść poziom wyżej."
    },
    {
      id: "consejos-uso",
      title: "8. Wskazówki, jak wycisnąć maksimum",
      body: [
        `Żeby ten arsenał nie „leżał martwy” na Twoim koncie, polecam:`
      ],
      bullets: [
        {
          label: "Zacznij od konkretnego celu",
          description:
            "Np. „zaplanować mój content na przyszły miesiąc” albo „wymyślić 3 pomysły na reklamy dla tego produktu”."
        },
        {
          label: "Zapisuj ulubione prompty",
          description:
            "Miej dokument lub notatkę, gdzie trzymasz prompty, których używasz najczęściej, żeby szybko do nich wracać."
        },
        {
          label: "Dopasuj język do swojego stylu",
          description:
            "Prompty to szablony. Personalizuj ton, przykłady i kontekst, żeby brzmiało jak Ty."
        },
        {
          label: "Nie bój się iterować",
          description:
            "Jeśli wynik Cię nie przekonuje, dopracuj prompt, dodaj więcej kontekstu albo połącz dwa prompty w jeden."
        }
      ]
    },
    {
      id: "soporte",
      title: "9. Wsparcie i pomoc",
      body: [
        `Jeśli w dowolnym momencie masz pytania o dostęp, kod, korzystanie z platformy lub konkretny moduł:`,
        `• Najpierw wróć do tej sekcji **Start**, żeby sprawdzić, czy odpowiedź już tu jest.
• Jeśli nadal masz wątpliwości, skorzystaj z kanału wsparcia wskazanego w kursie lub w Twoim dostępie (np. Społeczność VIP na WhatsApp, gdy będzie aktywna).`,
        `Pamiętaj: celem jest, aby ten Tajny Bank Promptów był narzędziem, z którego korzystasz stale — a nie kolejnym kursem, który zbiera kurz w skrzynce odbiorczej.`
      ]
    }
  ]
};
