// src/lib/ia-tools-content.js

export const iaToolsContent = {
  id: "ia-tools",
  title: "Polecane narzędzia AI",
  heroText:
    "W tej sekcji znajdziesz praktyczny przewodnik po narzędziach sztucznej inteligencji do pisania, projektowania, tworzenia wideo i automatyzacji procesów. Chodzi nie o to, żeby używać wszystkich, tylko żeby rozpoznać, które pasują do Twojego etapu i typu projektu.",

  // 🧠 Ogólne sekcje wyjaśniające (tekst, który już masz na stronie)
  sections: [
    {
      id: "mentalidad",
      title: "1. Zanim wybierzesz narzędzie",
      body: [
        "Narzędzie jest drugorzędne. Najważniejszy jest system, który budujesz dookoła: jasny cel, typ treści, które chcesz tworzyć, oraz workflow, który będziesz powtarzać co tydzień.",
        "Myśl o narzędziach AI jak o współpracownikach: każde świetnie robi jedną, konkretną część procesu (pomysły, pisanie, design, montaż, automatyzacja…). Twoim zadaniem jest je zorkiestrować."
      ],
      bullets: [
        {
          label: "Zacznij prosto",
          description:
            "Nie próbuj opanować 20 aplikacji naraz. Wybierz 1 do tekstu, 1 do obrazów i — jeśli trzeba — 1 do wideo."
        },
        {
          label: "Najpierw workflow, potem narzędzie",
          description:
            "Zdefiniuj, co chcesz osiągnąć (np. zaplanować treści na miesiąc), a dopiero potem wybierz narzędzie, które najlepiej pasuje do każdego kroku."
        },
        {
          label: "Unikaj paraliżu analitycznego",
          description:
            "Co tydzień pojawiają się setki nowych narzędzi. Twoją przewagą nie jest znać wszystkie, tylko dobrze używać kilku."
        }
      ]
    },

    {
      id: "texto",
      title: "2. Narzędzia do tekstu i pisania",
      body: [
        "Twoją bazą dla wszystkich treści tekstowych będzie model językowy (jak ChatGPT lub inne podobne AI). Prompty z tego kursu są stworzone właśnie po to, żeby wycisnąć z tego maksimum.",
        "Możesz używać tych narzędzi do pisania skryptów, postów, newsletterów, stron sprzedażowych, e-maili follow-up, pomysłów na content i wiele więcej."
      ],
      bullets: [
        {
          label: "ChatGPT lub podobne modele",
          description:
            "Twoje główne centrum do wykorzystania ponad 13 500 promptów. Tutaj piszesz, poprawiasz, streszczasz, przeredagowujesz i generujesz nowe pomysły."
        },
        {
          label: "Edytory tekstu z wbudowaną AI",
          description:
            "Platformy takie jak Notion, Google Docs czy edytory z wbudowaną AI pomagają dopracować styl i gramatykę bez wychodzenia z przestrzeni roboczej."
        },
        {
          label: "Rozszerzenia przeglądarki",
          description:
            "Pozwalają używać AI bezpośrednio w formularzach, social mediach lub klientach poczty, żeby odpowiadać szybciej i lepiej."
        }
      ],
      highlight:
        "Rekomendacja: trzymaj swoje najlepsze wyniki w jednym dokumencie „master”. Tam wklejaj prompty, których używasz najczęściej, oraz odpowiedzi, które zadziałały najlepiej."
    },

    {
      id: "imagen",
      title: "3. Narzędzia do obrazów i kreacji",
      body: [
        "Dzięki promptom obrazowym z Tajnego Banku możesz generować zdjęcia, ilustracje, okładki, miniatury i kreacje do reklam.",
        "Chociaż każda platforma obrazowa ma inne nazwy i przyciski, logika jest zawsze ta sama: jasny prompt + zdefiniowany styl wizualny + drobne poprawki."
      ],
      bullets: [
        {
          label: "Generatory obrazów z AI",
          description:
            "Używaj promptów do tworzenia zdjęć produktowych, profesjonalnych portretów, scen filmowych, teł do karuzel i nie tylko."
        },
        {
          label: "Lekka edycja i retusz",
          description:
            "Po wygenerowaniu obrazu możesz go doszlifować w prostych edytorach (jasność, kontrast, kadrowanie), aby dopasować do każdej platformy."
        },
        {
          label: "Własne banki assetów",
          description:
            "Zapisuj w folderach swoje najmocniejsze obrazy (okładki, tła, tekstury), aby wykorzystywać je ponownie w przyszłych treściach."
        }
      ]
    },

    {
      id: "video",
      title: "4. Narzędzia do krótkiego wideo z AI",
      body: [
        "Prompty wideo są stworzone tak, abyś mógł/mogła generować krótkie klipy i używać ich później w reklamach, reels, shorts lub jako B-roll z Twoim głosem.",
        "Kluczem jest połączenie trzech rzeczy: dobrego pomysłu (promptu), stylu wizualnego spójnego z marką oraz szybkiego montażu dopasowanego do każdej platformy."
      ],
      bullets: [
        {
          label: "Generatory wideo z AI",
          description:
            "Idealne do krótkich klipów: B-roll z pracy, sceny technologiczne, dynamiczne tła lub wizualizacje koncepcyjne."
        },
        {
          label: "Proste edytory wideo",
          description:
            "Narzędzia do podstawowej edycji pozwalają przyciąć materiał, dodać napisy, muzykę i CTA na klipach wygenerowanych przez AI."
        },
        {
          label: "Szablony do ponownego użycia",
          description:
            "Stwórz 2–3 bazowe szablony (intro, szybka porada, reklama) i używaj ich ponownie, zmieniając tylko tekst i wygenerowane klipy."
        }
      ]
    },

    {
      id: "automatizacion",
      title: "5. Automatyzacja i produktywność z AI",
      body: [
        "Poza tworzeniem treści AI może też zmniejszyć operacyjne obciążenie Twojego dnia.",
        "Od odpowiadania na powtarzalne maile po przygotowywanie szkiców raportów — wiele procesów da się zautomatyzować albo przynajmniej uprościć."
      ],
      bullets: [
        {
          label: "Półautomatyczne przepływy",
          description:
            "Np.: zbierasz dane formularzem, a potem konkretny prompt generuje skrypt, copy i e-mail z dostawą."
        },
        {
          label: "Integracje z innymi aplikacjami",
          description:
            "Narzędzia automatyzacji mogą połączyć Twoją AI z arkuszami, CRM-ami, menedżerami zadań lub formularzami."
        },
        {
          label: "Szablony procesów",
          description:
            "Dokumentuj kroki najczęściej powtarzanych przepływów (np. publikacja nowego posta), aby później łatwiej je delegować lub automatyzować."
        }
      ],
      highlight:
        "Zacznij od automatyzacji mikro-zadań: częste odpowiedzi, podsumowania spotkań, porządkowanie informacji… a potem skaluj do bardziej złożonych przepływów."
    },

    {
      id: "no-code",
      title: "6. Narzędzia no-code i przestrzenie robocze",
      body: [
        "Twój Tajny Bank Promptów działa jeszcze lepiej, gdy łączysz go z dobrą przestrzenią organizacji.",
        "Narzędzia no-code i systemy notatek pozwalają zbudować własne „centrum dowodzenia” bez programowania."
      ],
      bullets: [
        {
          label: "Systemy notatek i organizacji",
          description:
            "Używaj dokumentów, baz danych lub wiki do przechowywania ulubionych promptów, wyników, które działały, i realnych przykładów zastosowania."
        },
        {
          label: "Osobiste dashboardy",
          description:
            "Możesz tworzyć proste panele, aby w jednym miejscu widzieć kalendarz treści, aktywne kampanie i kluczowe metryki."
        },
        {
          label: "Wewnętrzne formularze",
          description:
            "Prosty formularz może zasilać Twoje prompty: użytkownik odpowiada na 3–5 pytań, a AI generuje wynik końcowy."
        }
      ]
    },

    {
      id: "como-elegir",
      title: "7. Jak wybrać właściwe narzędzie dla siebie",
      body: [
        "Nie istnieje narzędzie idealne — istnieje takie, które najlepiej pasuje do Twojego obecnego kontekstu. Żeby zdecydować, od czego zacząć, możesz użyć takiego filtra w głowie:"
      ],
      bullets: [
        {
          label: "Budżet i czas",
          description:
            "Jeśli budżet jest niski, wybieraj narzędzia darmowe lub z podstawowymi planami. Jeśli masz mało czasu, szukaj tego, co upraszcza najwięcej kroków — nawet jeśli jest płatne."
        },
        {
          label: "Główny typ treści",
          description:
            "Jeśli żyjesz z pisania — priorytetem jest AI do tekstu. Jeśli sprzedajesz wizualne produkty — priorytetem są obrazy i wideo. Jeśli obsługujesz wielu klientów — priorytetem jest automatyzacja."
        },
        {
          label: "Krzywa uczenia",
          description:
            "Lepiej opanować coś prostego w 7 dni, niż przez miesiące próbować używać czegoś złożonego, bez realnego wdrożenia do rutyny."
        }
      ],
      highlight:
        "Praktyczna zasada: jeśli narzędzie nie oszczędza Ci czasu ani nie poprawia wyników w 2–3 tygodnie konsekwentnego używania, prawdopodobnie nie jest teraz właściwe dla Ciebie."
    },

    {
      id: "siguientes-pasos",
      title: "8. Kolejne kroki w kursie",
      body: [
        "Skoro masz już jasny obraz narzędzi AI i tego, jak wpisują się w Twój system, kolejnym krokiem jest działanie.",
        "Polecam tę kolejność:"
      ],
      bullets: [
        {
          label: "1) Zdefiniuj swój główny workflow",
          description:
            "Np.: tygodniowy plan treści, launch produktu, tworzenie lead magnetu itd."
        },
        {
          label: "2) Wybierz 1–3 narzędzia",
          description:
            "Jedno do tekstu, jedno do obrazów i — jeśli ma zastosowanie — jedno do wideo. Nic więcej."
        },
        {
          label: "3) Używaj promptów z Tajnego Banku",
          description:
            "Wejdź do odpowiedniego modułu (tekst, obraz lub wideo) i wybierz prompty, które najlepiej pasują do Twojego celu."
        }
      ],
      highlight:
        "Im częściej używasz tego arsenału w realnych sytuacjach (klienci, własne projekty, premiery), tym większą wartość z niego wyciągniesz. Wracaj do tej sekcji, kiedy chcesz sprawdzić lub odświeżyć swój stack narzędzi."
    }
  ],

  // 🔹 Lista konkretnych narzędzi do pokazania w kartach
  tools: [
    // --- TEKST / PISANIE ---
    {
      id: "chatgpt",
      name: "ChatGPT",
      category: "Tekst i pisanie",
      description:
        "Twoja główna baza do wykorzystania ponad 13 500 promptów. Idealne do pisania, przeredagowywania, streszczania i generowania pomysłów na treści.",
      howToUseWithBank:
        "Skopiuj prompt z modułu tekstowego, wklej go do ChatGPT, dodaj kontekst swojego biznesu i zapisuj odpowiedzi, które działają najlepiej.",
      thumbnail: "/ia/Chat-GPT-logo.webp"
    },
    {
      id: "claude",
      name: "Claude",
      category: "Tekst i pisanie",
      description:
        "Model świetny do długich tekstów, dokumentacji i pracy z obszernymi plikami.",
      howToUseWithBank:
        "Używaj promptów do researchu, strukturyzacji treści i tworzenia manuali, aby generować dokumentację jasną i łatwą do zrozumienia.",
      thumbnail: "/ia/Claude.webp"
    },
    {
      id: "gemini",
      name: "Gemini",
      category: "Tekst i pisanie",
      description:
        "AI od Google, przydatne przy zadaniach powiązanych z ekosystemem Google (Docs, Sheets, Slides).",
      howToUseWithBank:
        "Łącz prompty planowania z arkuszami, dashboardami i raportami tworzonymi bezpośrednio w ekosystemie Google.",
      thumbnail: "/ia/Gemini.jpeg"
    },
    {
      id: "notion-ai",
      name: "Notion AI",
      category: "Tekst i pisanie",
      description:
        "Idealne do pisania i organizowania treści w przestrzeni roboczej: wiki, bazy danych i dokumenty.",
      howToUseWithBank:
        "Stwórz bazę danych z ulubionymi promptami i używaj Notion AI do dopracowywania tekstów, streszczeń oraz wewnętrznej dokumentacji.",
      thumbnail: "/ia/Notion.png"
    },
    {
      id: "perplexity",
      name: "Perplexity",
      category: "Research",
      description:
        "Asystent researchu z AI i wyszukiwaniem w sieci — idealny do szybkiego kontekstu i źródeł.",
      howToUseWithBank:
        "Najpierw zbadaj temat w Perplexity, a potem użyj promptów do skryptów, postów i newsletterów, żeby zamienić informacje w treści.",
      thumbnail: "/ia/Perplexity.png"
    },

    // --- OBRAZ / DESIGN ---
    {
      id: "dalle",
      name: "DALL·E",
      category: "Obraz i design",
      description:
        "Generator obrazów zintegrowany ze środowiskiem ChatGPT. Idealny do okładek, miniatur i szybkich kreacji.",
      howToUseWithBank:
        "Skopiuj prompt z modułu obrazów, wklej go do DALL·E i dopasuj drobiazgi (kąt, światło, kolory) pod swoje potrzeby.",
      thumbnail: "/ia/Dalle.jpeg"
    },
    {
      id: "midjourney",
      name: "Midjourney",
      category: "Obraz i design",
      description:
        "Świetne do stylów artystycznych, scen filmowych i bardzo szczegółowych wizuali.",
      howToUseWithBank:
        "Dostosuj prompty obrazowe z kursu do formatu Midjourney (komendy, parametry), aby tworzyć spójne pakiety wizualne.",
      thumbnail: "/ia/Midjourney.jpg"
    },
    {
      id: "leonardo",
      name: "Leonardo AI",
      category: "Obraz i design",
      description:
        "Dobry balans jakości i prostoty: sprawdza się w kreacjach reklamowych i assetach wizualnych.",
      howToUseWithBank:
        "Używaj promptów do reklam, mockupów produktów i teł do social media, generując serie obrazów w jednej sesji.",
      thumbnail: "/ia/Leonardo.jpeg"
    },
    {
      id: "canva",
      name: "Canva z AI",
      category: "Obraz i design",
      description:
        "Idealne do składania finalnych materiałów: karuzele, miniatury, prezentacje i reklamy.",
      howToUseWithBank:
        "Wygeneruj bazowe obrazy promptami, a potem połącz je w Canvie z tekstami, logo i elementami marki.",
      thumbnail: "/ia/Canva.jpeg"
    },

    // --- WIDEO ---
    {
      id: "runway",
      name: "Runway",
      category: "Wideo",
      description:
        "Generator wideo z AI świetny do B-roll, abstrakcyjnych scen i dynamicznych teł.",
      howToUseWithBank:
        "Weź prompty z modułu wideo (B-roll, sceny technologiczne, tła) i dopasuj je do pól w Runway.",
      thumbnail: "/ia/runway.png"
    },
    {
      id: "capcut",
      name: "CapCut",
      category: "Wideo",
      description:
        "Prosty edytor wideo z szablonami, automatycznymi napisami i szybkimi narzędziami pod social media.",
      howToUseWithBank:
        "Łącz klipy z AI i własne nagrania, dodając napisy, muzykę i CTA, korzystając ze struktur skryptów z Banku.",
      thumbnail: "/ia/capcut.jpg"
    },
    {
      id: "descript",
      name: "Descript",
      category: "Wideo",
      description:
        "Idealne do edycji wideo i audio na podstawie transkrypcji — szczególnie dla podcasterów i twórców edukacyjnych.",
      howToUseWithBank:
        "Użyj promptów do skryptów i struktury lekcji, nagraj materiał i edytuj w Descript, poprawiając bezpośrednio w tekście.",
      thumbnail: "/ia/descript.jpg"
    },

    // --- AUTOMATYZACJA / SYSTEMY ---
    {
      id: "zapier",
      name: "Zapier",
      category: "Automatyzacja",
      description:
        "Łączy Twoje ulubione aplikacje i uruchamia automatyczne działania bez programowania.",
      howToUseWithBank:
        "Połącz formularze z promptami: gdy ktoś wyśle dane, Zapier przekaże je do Twojej AI z konkretnym promptem i wygeneruje wynik końcowy.",
      thumbnail: "/ia/zapier.png"
    },
    {
      id: "make",
      name: "Make (Integromat)",
      category: "Automatyzacja",
      description:
        "Wizualna platforma do budowy złożonych procesów łączących AI, bazy danych i wiele aplikacji.",
      howToUseWithBank:
        "Użyj promptów do workflow i systemów, aby projektować scenariusze automatyzujące części Twojej usługi lub biznesu.",
      thumbnail: "/ia/make.png"
    },

    // --- ORGANIZACJA / PREZENTACJE ---
    {
      id: "notion",
      name: "Notion",
      category: "Organizacja",
      description:
        "Twoje „centrum dowodzenia” do przechowywania promptów, wyników, pomysłów i dokumentacji projektów.",
      howToUseWithBank:
        "Stwórz bazę danych z kolumnami: kategoria, cel, prompt, najlepsze wyniki i notatki. Dzięki temu Bank staje się w 100% konfigurowalny.",
      thumbnail: "/ia/notion.webp"
    },
    {
      id: "gamma",
      name: "Gamma",
      category: "Prezentacje",
      description:
        "Narzędzie do tworzenia prezentacji i wizualnych dokumentów generowanych przez AI.",
      howToUseWithBank:
        "Weź prompty do skryptów, lekcji i treści edukacyjnych, a następnie zamień je w slajdy i prezentacje gotowe do oddania.",
      thumbnail: "/ia/gamma.png"
    }
  ]
};
