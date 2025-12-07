// src/lib/prompts/image/foto-retrato-estudio.js

export const imagePromptsFotoRetratoEstudio = [
  // =========================
  // CATEGORY: Portret studyjny (realistyczny)
  // =========================
  {
    id: "img-foto-retrato-est-001",
    title: "Premium portret w studiu (softbox + delikatne szare tło)",
    area: "Fotografia Profesjonalna",
    category: "Portret studyjny (realistyczny)",
    summary:
      "Realistyczny portret studyjny z miękkim światłem (softbox) i czystym, profesjonalnym wyglądem.",
    prompt: `Wygeneruj REALISTYCZNY portret fotograficzny w stylu studyjnym.

DANE:
- Osoba: [mężczyzna/kobieta/osoba] w wieku [wiek przybliżony], [etniczność/cechy], [kolor oczu], [fryzura], [broda/makijaż opcjonalnie]
- Ubiór: [np. czarny blazer + biała koszulka / biała koszula / elegancka sukienka]
- Wyraz twarzy: [pewny siebie/spokojny/życzliwy]
- Tło: gładkie neutralne szare, bez mocnej faktury

KAMERA / ŚWIATŁO:
- Aparat full-frame, obiektyw 85mm, f/1.8, ISO 100, 1/160s
- Oświetlenie: duży softbox 45° po prawej + miękki reflektor po lewej
- Miękki cień, naturalna skóra z detalem, bez efektu plastiku

KOMPOZYCJA:
- Kadr: plan średnio-bliski (od klatki piersiowej do głowy), osoba wyśrodkowana
- Ostre oczy, miękki bokeh
- Color grading: czysto, naturalne tony, umiarkowany kontrast

OGRANICZENIA:
- Bez tekstu, bez watermarku, bez deformacji
- Unikać dodatkowych dłoni, dziwnych zębów, asymetrycznych oczu, sztucznej skóry`,
    thumbnail: "/images/foto-pro/estudio1.webp",
  },
  {
    id: "img-foto-retrato-est-002",
    title: "Jasny portret high-key (białe tło, naturalna skóra)",
    area: "Fotografia Profesjonalna",
    category: "Portret studyjny (realistyczny)",
    summary:
      "Portret high-key na czystym białym tle, otulające światło i świeża estetyka w stylu magazynowym.",
    prompt: `Wygeneruj REALISTYCZNY portret high-key do fotografii studyjnej.

DANE:
- Osoba: [kobieta/mężczyzna/osoba], [wiek], [cechy], [fryzura]
- Ubiór: [biała koszula / jasna koszulka / minimal look]
- Nastrój: świeży, czysty, editorial

OŚWIETLENIE:
- Czyste białe tło z równomiernym światłem
- Światło główne: duży softbox z przodu + miękkie dopełnienie (bez twardych cieni)
- Realistyczny detal skóry, naturalna tekstura

KAMERA:
- Obiektyw 50mm lub 85mm, f/2.2, ISO 100, wysoka ostrość, szeroki zakres tonalny

KOMPOZYCJA:
- Kadr: zbliżenie (twarz) lub średni (bust)
- Tło całkowicie czyste, bez elementów

OGRANICZENIA:
- Bez tekstu/logo
- Unikać nadmiernego połysku skóry, nie prześwietlać twarzy
- Realistyczne proporcje twarzy, naturalne spojrzenie`,
    thumbnail: "/images/foto-pro/estudio2.webp",
  },
  {
    id: "img-foto-retrato-est-003",
    title: "Dramatyczny portret low-key (czarne tło, miękki Rembrandt)",
    area: "Fotografia Profesjonalna",
    category: "Portret studyjny (realistyczny)",
    summary:
      "Dramatyczny portret low-key z miękkim światłem Rembrandta, idealny dla marek premium.",
    prompt: `Wygeneruj REALISTYCZNY portret low-key w stylu premium.

DANE:
- Osoba: [osoba], [wiek], [cechy], [fryzura], [broda/makijaż]
- Ubiór: czarny/ciemny (np. czarny golf lub ciemny blazer)
- Tło: głęboka czerń bez faktury

OŚWIETLENIE:
- Styl Rembrandta: światło główne z boku 45° + delikatne światło kontrowe (rim light) subtelne
- Cienie wyraźne, ale miękkie, wysoki kontrast kontrolowany
- Zachować detal w cieniach (nie „zatykać”)

KAMERA:
- Obiektyw 85mm, f/2, ISO 200, 1/160s
- Ostrość na oczach, wysoka szczegółowość, bardzo subtelne ziarno (opcjonalnie)

KOMPOZYCJA:
- Zbliżenie lub plan średnio-bliski
- Filmowy, elegancki look

OGRANICZENIA:
- Bez tekstu, bez watermarku
- Unikać sztucznie świecących oczu lub zdeformowanych rysów`,
    thumbnail: "/images/foto-pro/estudio3.webp",
  },
  {
    id: "img-foto-retrato-est-004",
    title: "Editorialowy portret na ciepłym beżowym tle (realistyczna skóra)",
    area: "Fotografia Profesjonalna",
    category: "Portret studyjny (realistyczny)",
    summary:
      "Miękki portret editorial z ciepłą paletą (beż), idealny do lifestyle/beauty.",
    prompt: `Wygeneruj REALISTYCZNY portret w stylu editorial.

DANE:
- Osoba: [kobieta/mężczyzna/osoba], [wiek], [cechy], [fryzura]
- Ubiór: odcienie kremu/beżu, minimal i elegancko
- Tło: jednolity ciepły beż

OŚWIETLENIE:
- Miękkie światło jak z okna (soft daylight) + subtelne dopełnienie
- Lekkie cienie, naturalna skóra bez nadmiernego wygładzania

KAMERA:
- Obiektyw 85mm, f/2.5, ISO 100
- Color grading: ciepły, miękki, średni kontrast

KOMPOZYCJA:
- Kadr: bust lub zbliżenie, spojrzenie w kamerę
- Wykończenie jak w magazynie: ostro, ale naturalnie

OGRANICZENIA:
- Bez tekstu, bez artefaktów, bez dodatkowych dłoni`,
    thumbnail: "/images/foto-pro/estudio4.webp",
  },
  {
    id: "img-foto-retrato-est-005",
    title: "Portret ze światłem kontrowym (rim light) dla separacji od tła",
    area: "Fotografia Profesjonalna",
    category: "Portret studyjny (realistyczny)",
    summary:
      "Profesjonalny portret z rim light dla głębi, styl studio branding.",
    prompt: `Wygeneruj REALISTYCZNY portret studyjny z rim light.

DANE:
- Osoba: [osoba], [wiek], [cechy]
- Ubiór: [ciemny lub neutralny]
- Tło: ciemnoszare lub bardzo subtelny granat nocny

ŚWIATŁA:
- Miękkie światło główne softbox z przodu-boku
- Rim light (światło kontrowe) z tyłu, obrys ramion i włosów (subtelnie, bez przesady)
- Minimalne dopełnienie, aby zachować wymiar

KAMERA:
- 85mm, f/2.2, ISO 125, 1/160s
- Skóra z realną teksturą, naturalne oczy

KOMPOZYCJA:
- Plan średnio-bliski, osoba lekko z boku (zasada trójpodziału)

OGRANICZENIA:
- Bez tekstu/logo
- Unikać sztucznych „halo”, rim light ma być realistyczny`,
    thumbnail: "/images/foto-pro/estudio5.webp",
  },

  // =========================
  // CATEGORY: Portret korporacyjny / LinkedIn
  // =========================
  {
    id: "img-foto-retrato-est-006",
    title: "Korporacyjny headshot LinkedIn (tło niebiesko-szare, lekki uśmiech)",
    area: "Fotografia Profesjonalna",
    category: "Portret korporacyjny / LinkedIn",
    summary:
      "Profesjonalne zdjęcie jak na LinkedIn: czyste światło, korporacyjne tło i wiarygodna mimika.",
    prompt: `Wygeneruj REALISTYCZNY headshot w stylu LinkedIn.

DANE:
- Osoba: [mężczyzna/kobieta/osoba], [wiek], [cechy], [fryzura], [broda opcjonalnie]
- Ubiór: [blazer + koszula] lub [koszula formalna], stonowane kolory
- Wyraz twarzy: lekki uśmiech, wiarygodny, profesjonalny
- Tło: miękkie niebiesko-szare (subtelny gradient), czyste

OŚWIETLENIE:
- Miękkie 3-punktowe: key light z przodu, miękkie fill, bardzo subtelne hair light
- Bez mocnych blików na czole lub nosie

KAMERA:
- Obiektyw 85mm, f/2.8, ISO 100, ostry look

KOMPOZYCJA:
- Kadr: ramiona do głowy, wyśrodkowane, odpowiedni zapas u góry
- Perfekcyjna ostrość na oczach

OGRANICZENIA:
- Bez tekstu, bez logo, bez przesadzonych filtrów
- Naturalne proporcje twarzy`,
    thumbnail: "/images/foto-pro/estudio6.webp",
  },
  {
    id: "img-foto-retrato-est-007",
    title: "Korporacyjny portret w biurze (miękki bokeh, naturalne światło)",
    area: "Fotografia Profesjonalna",
    category: "Portret korporacyjny / LinkedIn",
    summary:
      "Profesjonalny portret w otoczeniu biura z rozmytym tłem i naturalnym światłem.",
    prompt: `Wygeneruj REALISTYCZNY portret w nowoczesnym środowisku korporacyjnym.

DANE:
- Osoba: [osoba], [wiek], profesjonalny wygląd
- Outfit: [blazer, koszula, business casual]
- Tło: nowoczesne biuro z dużymi oknami i biurkami, rozmyte (bokeh)
- Nastrój: pewność, przywództwo

OŚWIETLENIE:
- Naturalne światło z okna + miękkie dopełnienie
- Neutralne tony, realistyczne odcienie skóry

KAMERA:
- 50mm lub 85mm, f/2, ISO 200
- Mała głębia ostrości, miękki bokeh

KOMPOZYCJA:
- Plan średni (od pasa/klatki piersiowej do głowy), zasada trójpodziału
- Ostrość na oczach

OGRANICZENIA:
- Bez tekstu, bez znaków wodnych
- Nie deformować dłoni/twarzy`,
    thumbnail: "/images/foto-pro/estudio7.webp",
  },
  {
    id: "img-foto-retrato-est-008",
    title: "Zdjęcie zespołu korporacyjnego (3 osoby, czyste studio)",
    area: "Fotografia Profesjonalna",
    category: "Portret korporacyjny / LinkedIn",
    summary:
      "Zdjęcie typu „zespół profesjonalny” na stronę: 3 osoby, spójny look, neutralne studio.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie zespołu korporacyjnego (3 osoby).

DANE:
- Osoby: 3 (różne płcie/wiek), profesjonalny wygląd
- Ubiór: skoordynowany business casual (granaty, szarości, biele)
- Tło: jasnoszare lub miękkie białe, styl studyjny
- Wyraz twarzy: miły, profesjonalny

OŚWIETLENIE:
- Duże softboxy, równomierne światło, miękkie cienie
- Korporacyjny clean color grading

KAMERA:
- Obiektyw 35mm lub 50mm, f/4 aby utrzymać ostrość wszystkich
- ISO 100, wysoka ostrość

KOMPOZYCJA:
- Osoby ustawione z minimalną głębią, naturalna postawa
- Wystarczająca negatywna przestrzeń na baner web (ale NIE dodawaj tekstu)

OGRANICZENIA:
- Bez tekstu ani logo
- Realistyczne proporcje ciała (dłonie poprawne)`,
    thumbnail: "/images/foto-pro/estudio8.webp",
  },
  {
    id: "img-foto-retrato-est-009",
    title: "Premium portret CEO (ciemne tło, look przywódcy)",
    area: "Fotografia Profesjonalna",
    category: "Portret korporacyjny / LinkedIn",
    summary:
      "Portret w stylu CEO/Founder: premium estetyka i autorytet wizualny.",
    prompt: `Wygeneruj REALISTYCZNY portret w stylu premium CEO.

DANE:
- Osoba: [osoba], [wiek], wygląd executive
- Ubiór: premium blazer, nienaganna koszula, minimalne dodatki
- Wyraz twarzy: poważny, ale przystępny (spokojna pewność)
- Tło: eleganckie ciemne (antracyt/granat nocny) z bardzo subtelną fakturą

OŚWIETLENIE:
- Miękkie boczne key light + minimalne fill
- Bardzo subtelne rim light dla separacji od tła
- Profesjonalny kontrast, bez twardych cieni

KAMERA:
- 85mm, f/2.2, ISO 125, wysoka ostrość

KOMPOZYCJA:
- Plan średnio-bliski, prosta postawa, barki lekko skręcone

OGRANICZENIA:
- Bez tekstu/watermarku
- Unikać plastikowej skóry lub przesady w rysach`,
    thumbnail: "/images/foto-pro/estudio9.webp",
  },
  {
    id: "img-foto-retrato-est-010",
    title: "Portret do profilu zawodowego (miękkie pastelowe tło, friendly)",
    area: "Fotografia Profesjonalna",
    category: "Portret korporacyjny / LinkedIn",
    summary:
      "Przyjazne zdjęcie profesjonalne dla coacha/konsultanta: pastelowe tło i bliska estetyka.",
    prompt: `Wygeneruj REALISTYCZNY portret profesjonalny i przystępny.

DANE:
- Osoba: [osoba], [wiek], naturalny uśmiech
- Ubiór: smart casual (jasne kolory)
- Tło: miękki pastel (np. mięta / błękit / beż), jednolite

OŚWIETLENIE:
- Miękkie frontalne światło (softbox) + lekkie dopełnienie
- Naturalna skóra, świeży wygląd

KAMERA:
- 50mm lub 85mm, f/2.8, ISO 100
- Color grading: jasny, lekko ciepły

KOMPOZYCJA:
- Kadr: ramiona do głowy, wyśrodkowany
- Look „zaufany coach/konsultant”

OGRANICZENIA:
- Bez tekstu/logo
- Unikać sztucznego uśmiechu, dziwnych oczu`,
    thumbnail: "/images/foto-pro/estudio10.webp",
  },

  // =========================
  // CATEGORY: Premium headshot
  // =========================
  {
    id: "img-foto-retrato-est-011",
    title: "Hiperrealistyczny headshot na ciemnym tle (ostry detal w oczach)",
    area: "Fotografia Profesjonalna",
    category: "Premium headshot",
    summary:
      "Hiperrealistyczne zbliżenie, chirurgiczna ostrość na oczach, premium estetyka na stronę www.",
    prompt: `Wygeneruj HIPERREALISTYCZNY HEADSHOT (zbliżenie) w jakości premium.

DANE:
- Osoba: [osoba], [wiek], [cechy], [fryzura]
- Wyraz twarzy: spokojny i pewny siebie
- Tło: miękkie ciemne, minimalistyczne

OŚWIETLENIE:
- Miękki softbox z przodu + subtelne dopełnienie
- Realistyczny catchlight w oczach (mały, bez przesady)
- Realna tekstura skóry (subtelne pory), bez sztucznego wygładzania

KAMERA:
- Obiektyw 85mm, f/2, ISO 100
- Wysoka ostrość na oczach, naturalny mikro-kontrast

KOMPOZYCJA:
- Tylko twarz i część szyi, lekki zapas u góry

OGRANICZENIA:
- Bez tekstu/watermarku
- Unikać rozjechanych oczu, dziwnych źrenic, zdeformowanych zębów`,
    thumbnail: "/images/foto-pro/estudio11.webp",
  },
  {
    id: "img-foto-retrato-est-012",
    title: "Headshot na jednolitym kolorowym tle (spójny branding)",
    area: "Fotografia Profesjonalna",
    category: "Premium headshot",
    summary:
      "Headshot z jednolitym tłem pod identyfikację marki (idealne dla zespołów i profili).",
    prompt: `Wygeneruj REALISTYCZNY headshot do spójnego brandingu.

DANE:
- Osoba: [osoba], [wiek], [cechy]
- Ubiór: [gładka koszula / polo / blazer], bez mocnych wzorów
- Tło: dokładny jednolity kolor: [#HEX lub kolor], równe i czyste

OŚWIETLENIE:
- Miękkie i równomierne światło, bez twardych cieni
- Balans bieli neutralny (lub lekko ciepły)

KAMERA:
- 85mm, f/2.8, ISO 100
- Czyste krawędzie, profesjonalny kadr

KOMPOZYCJA:
- Ramiona do głowy, wyśrodkowany

OGRANICZENIA:
- Bez tekstu/logo
- Utrzymać wierny kolor tła, bez gradientów`,
    thumbnail: "/images/foto-pro/estudio12.webp",
  },
  {
    id: "img-foto-retrato-est-013",
    title: "Headshot w stylu magazynowym (jasne tło + miękki kontrast)",
    area: "Fotografia Profesjonalna",
    category: "Premium headshot",
    summary:
      "Editorialowy look magazynowy: czysto, elegancko, naturalna skóra, bez przesadnego retuszu.",
    prompt: `Wygeneruj REALISTYCZNY headshot w stylu editorial magazynowego (bez karykatury).

DANE:
- Osoba: [osoba], [wiek], [cechy]
- Outfit: minimalistyczny, elegancki
- Tło: jasne (bardzo jasnoszare lub kremowe)

ŚWIATŁA:
- Miękkie światło dzienne, miękkie cienie
- Realny detal skóry, bez blur

KAMERA:
- 50mm lub 85mm, f/2.5, ISO 100
- Color grading: editorial clean, miękki kontrast, czernie nie „zgniecione”

KOMPOZYCJA:
- Zbliżenie, spojrzenie w kamerę, naturalny gest

OGRANICZENIA:
- Bez tekstu, bez watermarku
- Unikać plastikowego retuszu`,
    thumbnail: "/images/foto-pro/estudio13.webp",
  },
  {
    id: "img-foto-retrato-est-014",
    title: "Headshot z filmowym lookiem (subtelne ziarno filmu)",
    area: "Fotografia Profesjonalna",
    category: "Premium headshot",
    summary:
      "Headshot z delikatną filmową estetyką i dyskretnym ziarnem jak na kliszy.",
    prompt: `Wygeneruj REALISTYCZNY headshot o estetyce filmowej.

DANE:
- Osoba: [osoba], [wiek], [cechy]
- Outfit: ciemny/neutralny
- Tło: ciemnoszare lub granat nocny

OŚWIETLENIE:
- Miękkie boczne key light + minimalne fill
- Cienie z detalem, kontrast średni-wysoki

KAMERA:
- 85mm, f/2, ISO 200
- Dodaj BARDZO subtelne film grain (nie mocny szum)
- Color grading: lekki teal/orange lub neutralne kino

KOMPOZYCJA:
- Zbliżenie, ostrość na oczach

OGRANICZENIA:
- Bez tekstu/logo
- Unikać halo, przesadnego ziarna, zniekształceń twarzy`,
    thumbnail: "/images/foto-pro/estudio14.webp",
  },
  {
    id: "img-foto-retrato-est-015",
    title: "Headshot w okularach (kontrolowane odbicia, intelektualny look)",
    area: "Fotografia Profesjonalna",
    category: "Premium headshot",
    summary:
      "Portret w okularach bez uciążliwych refleksów, idealny do profili zawodowych.",
    prompt: `Wygeneruj REALISTYCZNY headshot osoby w okularach.

DANE:
- Osoba: [osoba], [wiek], [cechy]
- Okulary: styl [cienki metal / oprawki z acetatu], premium wygląd
- Tło: neutralne (szary/beż)

OŚWIETLENIE:
- Miękkie światło z przodu + lekkie boczne
- Kontrola odbić: szkła bez mocnych blików, oczy widoczne

KAMERA:
- 85mm, f/2.8, ISO 100
- Wysoka ostrość, naturalny detal

KOMPOZYCJA:
- Kadr ramiona do głowy, wyśrodkowany

OGRANICZENIA:
- Bez tekstu
- Unikać zdeformowanych okularów, odbić zasłaniających oczy`,
    thumbnail: "/images/foto-pro/estudio15.webp",
  },

  // =========================
  // CATEGORY: Beauty / skincare (zbliżenie)
  // =========================
  {
    id: "img-foto-retrato-est-016",
    title: "Beauty close-up skincare (naturalna skóra + miękkie frontalne światło)",
    area: "Fotografia Profesjonalna",
    category: "Beauty / skincare (zbliżenie)",
    summary:
      "Beauty close-up z realną teksturą skóry, miękkim oświetleniem i estetyką skincare.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie beauty close-up (skincare editorial).

DANE:
- Osoba: [kobieta/osoba], [wiek], zdrowa skóra, minimalny makijaż
- Tło: miękkie białe/kremowe
- Nastrój: czysto, świeżo, self-care

OŚWIETLENIE:
- Miękkie frontalne światło (softbox) z minimalnymi cieniami
- Skóra z realną teksturą (subtelne pory), kontrolowany naturalny połysk

KAMERA:
- Miękkie makro lub 85mm, f/3.2, ISO 100
- Ostrość na oczach i policzkach, wysoka ostrość bez przesady

KOMPOZYCJA:
- Ekstremalne zbliżenie, twarz dominuje kadr
- Bez rozpraszających dodatków

OGRANICZENIA:
- Bez tekstu, bez produktów z widocznymi prawdziwymi markami
- Unikać plastikowej lub zbyt wygładzonej skóry`,
    thumbnail: "/images/foto-pro/estudio16.webp",
  },
  {
    id: "img-foto-retrato-est-017",
    title: "Beauty editorial ze światłem bocznym (objętość na kościach policzkowych)",
    area: "Fotografia Profesjonalna",
    category: "Beauty / skincare (zbliżenie)",
    summary:
      "Beauty portret z miękką objętością i kontrolowanymi cieniami dla premium editorial look.",
    prompt: `Wygeneruj REALISTYCZNE beauty close-up o estetyce premium editorial.

DANE:
- Osoba: [osoba], [wiek], subtelny makijaż (skóra, brwi, naturalne usta)
- Tło: jasnoszare lub beżowe
- Wyraz twarzy: spokojny, elegancki

OŚWIETLENIE:
- Miękkie boczne key light (45°) podkreślające kości policzkowe
- Lekkie fill, aby uniknąć twardych cieni
- Naturalny catchlight w oczach

KAMERA:
- 85mm, f/2.8, ISO 100
- Color grading: miękko ciepły, średni kontrast

KOMPOZYCJA:
- Zbliżenie, ostra ostrość na oczach i skórze

OGRANICZENIA:
- Bez tekstu/logo
- Unikać dziwnych oczu, zdeformowanych ust, dziwnych zębów`,
    thumbnail: "/images/foto-pro/estudio17.webp",
  },
  {
    id: "img-foto-retrato-est-018",
    title: "Beauty z włosami na wietrze (bez sztucznego blur, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Beauty / skincare (zbliżenie)",
    summary:
      "Dynamiczny beauty look z ruchem włosów, zachowując ostrość i realizm.",
    prompt: `Wygeneruj REALISTYCZNE beauty zdjęcie z włosami w ruchu.

DANE:
- Osoba: [osoba], [wiek], włosy [długie/średnie], naturalna mimika
- Tło: neutralne (jasnoszare/kremowe)
- Nastrój: świeży i nowoczesny

OŚWIETLENIE:
- Miękkie frontalne światło z lekkim bocznym akcentem
- Zachować detal włosów (bez plastikowego rozmycia)

KAMERA:
- 85mm, f/2.8, ISO 200, czas naświetlania wystarczający by zamrozić ruch
- Ostrość na twarzy i oczach

KOMPOZYCJA:
- Zbliżenie lub bust, subtelny wiatr we włosach
- Realistyczna skóra, bez nadmiernego retuszu

OGRANICZENIA:
- Bez tekstu
- Unikać dziwnego zlewania się włosów z tłem`,
    thumbnail: "/images/foto-pro/estudio18.webp",
  },
  {
    id: "img-foto-retrato-est-019",
    title: "Beauty minimal z dłońmi przy twarzy (realistyczne dłonie)",
    area: "Fotografia Profesjonalna",
    category: "Beauty / skincare (zbliżenie)",
    summary:
      "Beauty close-up z elegancką pozą dłoni, z dbałością o realistyczną anatomię.",
    prompt: `Wygeneruj REALISTYCZNE beauty close-up z dłońmi blisko twarzy.

DANE:
- Osoba: [osoba], [wiek], minimalny makijaż
- Poza: dłonie przy twarzy (elegancka poza beauty), rozluźnione palce
- Tło: miękki krem/beż

OŚWIETLENIE:
- Miękki frontalny softbox + lekkie dopełnienie
- Detal skóry, paznokcie czyste i realistyczne

KAMERA:
- 85mm, f/3.2, ISO 100
- Ostrość: oczy + twarz, dłonie lekko mniej ostre (naturalnie)

KOMPOZYCJA:
- Zbliżenie, dłonie kadrują twarz

WAŻNE OGRANICZENIA:
- Poprawna anatomia: 5 palców na dłoń, realne proporcje
- Bez dodatkowych palców, bez zdeformowanych dłoni, bez tekstu`,
    thumbnail: "/images/foto-pro/estudio19.webp",
  },
  {
    id: "img-foto-retrato-est-020",
    title: "Premium beauty na czarnym tle (wysoki kontrast, zadbana skóra)",
    area: "Fotografia Profesjonalna",
    category: "Beauty / skincare (zbliżenie)",
    summary:
      "Elegancki beauty close-up na czarnym tle, premium kontrast i detal tekstury.",
    prompt: `Wygeneruj REALISTYCZNE premium beauty close-up na czarnym tle.

DANE:
- Osoba: [osoba], [wiek], elegancki makijaż (subtelne oczy/usta)
- Tło: głęboka czerń
- Nastrój: luksus, wysoka estetyka

OŚWIETLENIE:
- Miękkie boczne key light + minimalne fill
- Bardzo subtelne rim light dla separacji włosów od tła
- Zachować detal skóry bez „plastiku”

KAMERA:
- 85mm, f/2.5, ISO 200
- Color grading: luxury (kontrolowany kontrast, realne odcienie skóry)

KOMPOZYCJA:
- Zbliżenie, spojrzenie w kamerę lub lekki kąt 3/4

OGRANICZENIA:
- Bez tekstu/logo
- Unikać agresywnych blików, zdeformowanych rysów`,
    thumbnail: "/images/foto-pro/estudio20.webp",
  },
];
