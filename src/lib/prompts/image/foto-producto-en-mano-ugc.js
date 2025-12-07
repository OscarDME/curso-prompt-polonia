// src/lib/prompts/image/foto-producto-en-mano-ugc.js

export const imagePromptsFotoProductoEnManoUGC = [
  // =========================
  // CATEGORY: Produkt w dłoni (UGC)
  // =========================
  {
    id: "img-ugc-mano-001",
    title: "Produkt w dłoni na tle kamery (selfie UGC, miękkie naturalne światło)",
    area: "Fotografia Profesjonalna",
    category: "Produkt w dłoni (UGC)",
    summary:
      "Wiarygodne selfie pokazujące produkt blisko twarzy, autentyczny look w stylu UGC.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie w stylu selfie UGC, pokazujące produkt trzymany w dłoni.

DANE:
- Osoba: [kobieta/mężczyzna/osoba] w wieku [wiek], naturalna mimika (lekki uśmiech lub neutralnie)
- Produkt: [opisz produkt ogólny], BEZ marek i bez czytelnego tekstu
- Poza: trzymanie produktu blisko twarzy, luźna dłoń, widoczne palce
- Tło: proste wnętrze (dom) lub łagodne plenerowe, rozmyte

OŚWIETLENIE:
- Miękkie naturalne światło (okno lub rozproszone światło w cieniu)
- Realistyczna skóra, bez ekstremalnych filtrów

KAMERA:
- Symuluj przednią kamerę smartfona, naturalna ostrość, realistyczna kompresja
- Ostrość na twarzy i produkcie (oba ostre)

KOMPOZYCJA:
- Kadr: twarz + ramiona, produkt obok twarzy
- Styl autentyczny, bez przesadnie reklamowego efektu

KRYTYCZNE OGRANICZENIA:
- Dłoń anatomicznie poprawna (5 palców, realne proporcje)
- Bez tekstu/logo/watermarku`,
    thumbnail: "/images/foto-pro/ugc1.webp",
  },
  {
    id: "img-ugc-mano-002",
    title: "Produkt w dłoni na tle łazienki (skincare UGC, białe światło)",
    area: "Fotografia Profesjonalna",
    category: "Produkt w dłoni (UGC)",
    summary:
      "Typowe UGC skincare w czystej łazience, miękkie białe światło i realistyczny look.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie UGC w łazience (styl skincare) z produktem w dłoni.

DANE:
- Osoba: [osoba], [wiek], minimalny makijaż
- Produkt: ogólna butelka/dozownik/pudełko skincare, bez marki i bez czytelnego tekstu
- Scena: czysta nowoczesna łazienka, lustro w tle (bez dziwnego podwójnego odbicia)
- Poza: trzymanie produktu w kierunku kamery

OŚWIETLENIE:
- Miękkie białe światło jak w łazience (nie intensywnie niebieskie), minimalne cienie
- Naturalna skóra z realistyczną teksturą

KAMERA:
- Symuluj smartfona, naturalna ostrość
- Ostrość na produkcie, twarz lekko z tyłu, ale wyraźna

KOMPOZYCJA:
- Plan średnio-bliski (od klatki piersiowej do głowy)
- Codzienna, autentyczna estetyka

OGRANICZENIA:
- Bez logo / czytelnego tekstu
- Realistyczna dłoń (5 palców), unikać deformacji`,
    thumbnail: "/images/foto-pro/ugc2.webp",
  },
  {
    id: "img-ugc-mano-003",
    title: "Produkt w dłoni siedząc na sofie (lifestyle UGC, ciepło)",
    area: "Fotografia Profesjonalna",
    category: "Produkt w dłoni (UGC)",
    summary:
      "Osoba w salonie pokazuje produkt w dłoni, ciepły domowy vibe i wiarygodny wygląd.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie UGC w domu, osoba siedzi na sofie i pokazuje produkt w dłoni.

DANE:
- Osoba: [osoba], [wiek], przyjazny wyraz twarzy
- Produkt: [opisz produkt ogólny], bez marek
- Scena: minimalistyczny salon z jasną sofą, rozmyta roślina lub lampa
- Poza: produkt w dłoni blisko klatki piersiowej lub twarzy

OŚWIETLENIE:
- Miękkie ciepłe światło (popołudnie), lekkie cienie
- Naturalne kolory, bez mocnych filtrów

KAMERA:
- Symuluj smartfona, odpowiednik 28–35mm
- Ostrość na twarzy, produkt także czytelny wizualnie

KOMPOZYCJA:
- Plan średni, otoczenie widoczne, ale rozmyte

OGRANICZENIA:
- Bez tekstu/logo
- Poprawna dłoń, bez dodatkowych palców`,
    thumbnail: "/images/foto-pro/ugc3.webp",
  },
  {
    id: "img-ugc-mano-004",
    title: "Produkt w dłoni na zewnątrz (rozproszone światło, autentyczny look)",
    area: "Fotografia Profesjonalna",
    category: "Produkt w dłoni (UGC)",
    summary:
      "UGC na zewnątrz pokazujące produkt, równe naturalne światło i miękkie rozmyte tło.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie UGC na zewnątrz, pokazujące produkt trzymany w dłoni.

DANE:
- Osoba: [osoba], [wiek], naturalna mimika
- Produkt: [opisz produkt], ogólny, bez marki / czytelnej etykiety
- Tło: rozmyty park/ulica, naturalne światło
- Poza: produkt blisko kamery, twarz widoczna

OŚWIETLENIE:
- Rozproszone światło (miękkie), bez twardych cieni
- Realistyczna skóra, neutralne kolory

KAMERA:
- Symuluj smartfona, naturalna ostrość
- Zbalansowana ostrość: produkt i oczy

KOMPOZYCJA:
- Twarz na środku, produkt na pierwszym planie lekko z boku

OGRANICZENIA:
- Bez tekstu/logo
- Dłoń anatomicznie poprawna`,
    thumbnail: "/images/foto-pro/ugc4.webp",
  },
  {
    id: "img-ugc-mano-005",
    title: "Produkt w dłoni z zadbanymi paznokciami (beauty UGC, perfekcyjne dłonie)",
    area: "Fotografia Profesjonalna",
    category: "Produkt w dłoni (UGC)",
    summary:
      "Nacisk na dłoń trzymającą produkt: zadbane paznokcie i perfekcyjna anatomia.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie UGC z naciskiem na dłoń trzymającą produkt.

DANE:
- Dłoń: zadbane paznokcie (naturalne lub prosta manicure), realistyczna skóra
- Produkt: [butelka/pudełko ogólne], bez marki i bez czytelnego tekstu
- Tło: rozmyte (dom lub łagodny plener)
- Opcjonalnie: częściowo rozmyta twarz w tle dla kontekstu

OŚWIETLENIE:
- Miękkie naturalne światło, lekkie refleksy na produkcie
- Fokus na teksturę skóry i produktu

KAMERA:
- Miękkie makro lub 50mm, f/2.8, ISO 200
- Ostrość głównie na dłoni i produkcie

KOMPOZYCJA:
- Produkt wycentrowany, dłoń trzyma naturalnie

KRYTYCZNE OGRANICZENIA:
- 5 palców, realne proporcje, bez deformacji
- Bez tekstu/logo/watermarku`,
    thumbnail: "/images/foto-pro/ugc5.webp",
  },

  // =========================
  // CATEGORY: Unboxing / test (UGC)
  // =========================
  {
    id: "img-ugc-mano-006",
    title: "Unboxing UGC na stole (otwarte pudełko, realistyczne dłonie)",
    area: "Fotografia Profesjonalna",
    category: "Unboxing / test (UGC)",
    summary:
      "Zdjęcie w stylu unboxingu: otwarte pudełko na stole, dłonie otwierają, realny look bez marek.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie UGC w stylu unboxing na stole.

DANE:
- Scena: czysty stół (jasne drewno lub biel)
- Produkt: ogólne pudełko bez marki, otwarte, zawartość częściowo widoczna (bez czytelnego tekstu)
- Dłonie: dwie dłonie otwierają lub trzymają wieczko, perfekcyjna anatomia
- Tło: domowe wnętrze, rozmyte

OŚWIETLENIE:
- Miękkie naturalne światło z okna
- Lekkie i realistyczne cienie

KAMERA:
- 35mm lub 50mm, f/2.8, ISO 250
- Ostrość na pudełku i dłoniach

KOMPOZYCJA:
- Ujęcie z góry lekko pod kątem (łagodne top-down)
- Autentyczna estetyka, nie super reklamowa

OGRANICZENIA:
- Bez logo / czytelnego tekstu
- Poprawne dłonie (po 5 palców każda), bez dodatkowych palców`,
    thumbnail: "/images/foto-pro/ugc6.webp",
  },
  {
    id: "img-ugc-mano-007",
    title: "Produkt świeżo wyjęty z pudełka (zbliżenie, realna tekstura)",
    area: "Fotografia Profesjonalna",
    category: "Unboxing / test (UGC)",
    summary:
      "Zbliżenie produktu trzymanego po unboxingu, realna tekstura i rozmyte domowe tło.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie UGC pokazujące produkt świeżo wyjęty z pudełka.

DANE:
- Produkt: [gadżet/butelka/pudełko], ogólny bez marki
- Pudełko: otwarte w drugim planie (rozmyte), bez czytelnego tekstu
- Dłoń: trzyma produkt pewnie, ale naturalnie
- Tło: minimalistyczny dom, rozmyte

OŚWIETLENIE:
- Miękkie naturalne światło, realne kolory
- Kontrolowane refleksy na produkcie

KAMERA:
- 50mm, f/2.2, ISO 200
- Ostrość na produkcie, dłoń ostra

KOMPOZYCJA:
- Produkt wycentrowany, pudełko w tle jako kontekst

OGRANICZENIA:
- Bez logo / czytelnego tekstu
- Realistyczna dłoń bez deformacji`,
    thumbnail: "/images/foto-pro/ugc7.webp",
  },
  {
    id: "img-ugc-mano-008",
    title: "Nakładanie produktu (skincare: krem na policzek, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Unboxing / test (UGC)",
    summary:
      "UGC podczas nakładania produktu (krem/serum) z realistyczną skórą i naturalnym gestem.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie UGC przedstawiające nakładanie produktu skincare.

DANE:
- Osoba: [osoba], [wiek], czysta twarz
- Produkt: ogólny krem/serum w butelce bez marki
- Akcja: nakładanie małej ilości na policzek lub dłoń (bez przesady)
- Tło: łazienka lub pokój, rozmyte

OŚWIETLENIE:
- Miękkie naturalne światło lub miękkie białe światło łazienkowe
- Realistyczna skóra z naturalną teksturą

KAMERA:
- 50mm lub 85mm, f/2.8, ISO 250
- Ostrość na twarzy i geście aplikacji

KOMPOZYCJA:
- Zbliżenie lub plan średnio-bliski

KRYTYCZNE OGRANICZENIA:
- Poprawne dłonie i palce
- Bez tekstu/logo, bez „plastikowej” skóry`,
    thumbnail: "/images/foto-pro/ugc8.webp",
  },
  {
    id: "img-ugc-mano-009",
    title: "Test produktu przed lustrem (realistyczne UGC, bez dziwnego podwójnego odbicia)",
    area: "Fotografia Profesjonalna",
    category: "Unboxing / test (UGC)",
    summary:
      "UGC przed lustrem: produkt widoczny, naturalne odbicie i realistyczne otoczenie.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie UGC przed lustrem podczas testowania produktu.

DANE:
- Osoba: [osoba], [wiek]
- Produkt: ogólny bez marki, trzymany blisko lustra
- Scena: czysta łazienka, główne lustro, realistyczne odbicie
- Akcja: pokazanie produktu lub aplikacja

OŚWIETLENIE:
- Miękkie białe światło, naturalne
- Realistyczna skóra, minimalne cienie

KAMERA:
- Symuluj smartfona, naturalna ostrość
- Zbalansowana ostrość na twarzy i produkcie

KOMPOZYCJA:
- Wiarygodny mirror shot, bez niemożliwych odbić

OGRANICZENIA:
- Unikać niemożliwego podwójnego odbicia lub zdublowanych dłoni
- Bez logo / czytelnego tekstu`,
    thumbnail: "/images/foto-pro/ugc9.webp",
  },
  {
    id: "img-ugc-mano-010",
    title: "Przed i po (2 panele, wiarygodne UGC, bez tekstu)",
    area: "Fotografia Profesjonalna",
    category: "Unboxing / test (UGC)",
    summary:
      "Kompozycja przed/po w dwóch panelach, wiarygodna dla UGC (bez tekstu na obrazie).",
    prompt: `Wygeneruj REALISTYCZNY obraz typu przed vs po w 2 panelach (obok siebie), w stylu UGC.

DANE:
- Osoba: [osoba], [wiek]
- PANEL LEWY (PRZED): neutralna mimika, „normalna” skóra/scena
- PANEL PRAWY (PO): bardziej zadowolona mimika, subtelna i realistyczna poprawa (bez przesady)
- Produkt: ogólny bez marki, widoczny w prawym panelu w dłoni

OŚWIETLENIE:
- Spójne w obu panelach (to samo światło)
- Realistyczna skóra, bez mocnych filtrów

KAMERA:
- Styl smartfona, naturalna ostrość
- Podobne i rozmyte tło

KOMPOZYCJA:
- Dwa czyste panele, bez tekstu i etykiet na obrazie

OGRANICZENIA:
- Bez tekstu/watermarku
- Unikać nierealnych lub przesadzonych zmian`,
    thumbnail: "/images/foto-pro/ugc10.webp",
  },

  // =========================
  // CATEGORY: Czyste tło (ads UGC)
  // =========================
  {
    id: "img-ugc-mano-011",
    title: "Produkt w dłoni na gładkim tle (UGC do reklam, czysto)",
    area: "Fotografia Profesjonalna",
    category: "Czyste tło (ads UGC)",
    summary:
      "Czyste UGC do reklam: osoba + produkt na gładkim tle i miękkim świetle.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie w stylu UGC do reklamy, z gładkim tłem.

DANE:
- Osoba: [osoba], [wiek], lekki uśmiech
- Produkt: [opisz], ogólny bez marki
- Tło: gładkie (biały/krem/jasnoszary), czyste
- Poza: produkt z przodu, twarz widoczna

OŚWIETLENIE:
- Miękkie, równomierne światło (softbox lub okno)
- Naturalna skóra, bez przesadnego retuszu

KAMERA:
- 50mm, f/2.8, ISO 100
- Ostra ostrość na oczach i produkcie

KOMPOZYCJA:
- Plan średnio-bliski, negatywna przestrzeń na tekst (ale NIE dodawaj tekstu)

OGRANICZENIA:
- Bez tekstu/logo
- Realistyczna dłoń bez deformacji`,
    thumbnail: "/images/foto-pro/ugc11.webp",
  },
  {
    id: "img-ugc-mano-012",
    title: "Produkt w dłoni w stylu „review” (gest wskazania, poprawne dłonie)",
    area: "Fotografia Profesjonalna",
    category: "Czyste tło (ads UGC)",
    summary:
      "Osoba pokazuje produkt i wskazuje go drugą dłonią (idealne do ads), perfekcyjna anatomia.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie UGC w stylu review, z czystym tłem.

DANE:
- Osoba: [osoba], [wiek], entuzjastyczna, ale realistyczna mimika
- Produkt: ogólny bez marki, trzymany w jednej dłoni
- Gest: drugą dłonią naturalnie wskazuje produkt (palec wskazujący)
- Tło: gładkie (jasnoszare lub kremowe)

OŚWIETLENIE:
- Miękkie i równomierne, minimalne cienie

KAMERA:
- 50mm, f/3.2, ISO 100
- Ostrość na twarzy i produkcie

KOMPOZYCJA:
- Plan średnio-bliski, produkt dobrze widoczny

KRYTYCZNE OGRANICZENIA:
- Poprawne dłonie (5 palców), naturalne wskazywanie
- Bez tekstu/logo/watermarku`,
    thumbnail: "/images/foto-pro/ugc12.webp",
  },
  {
    id: "img-ugc-mano-013",
    title: "Produkt w dłoni z wyrazem zaskoczenia (wizualny hook UGC)",
    area: "Fotografia Profesjonalna",
    category: "Czyste tło (ads UGC)",
    summary:
      "UGC do reklam z wyrazem zaskoczenia (hook wizualny) i produktem widocznym w dłoni.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie UGC do reklam z wyrazem zaskoczenia.

DANE:
- Osoba: [osoba], [wiek], zaskoczona mimika (bez karykatury)
- Produkt: [opisz], ogólny bez marki
- Tło: gładkie (złamana biel lub jasnoszare)
- Poza: produkt blisko twarzy, naturalna dłoń

OŚWIETLENIE:
- Miękkie światło z przodu, realistyczna skóra
- Umiarkowany kontrast, naturalne kolory

KAMERA:
- 50mm, f/2.8, ISO 100
- Ostrość na oczach i produkcie

KOMPOZYCJA:
- Plan średnio-bliski, produkt jako bohater

OGRANICZENIA:
- Bez tekstu/logo
- Unikać przesadnej miny jak z kreskówki`,
    thumbnail: "/images/foto-pro/ugc13.webp",
  },
  {
    id: "img-ugc-mano-014",
    title: "Produkt w dłoni na pastelowym tle (cute branding, realistyczne UGC)",
    area: "Fotografia Profesjonalna",
    category: "Czyste tło (ads UGC)",
    summary:
      "UGC z pastelowym tłem dla przyjaznej estetyki i brandingu, z zachowaniem realizmu.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie UGC z pastelowym tłem (branding).

DANE:
- Osoba: [osoba], [wiek], naturalny uśmiech
- Produkt: ogólny bez marki
- Tło: jednolity pastel (mięta / błękit / delikatny lila)
- Outfit: neutralne kolory, bez mocnych wzorów

OŚWIETLENIE:
- Miękkie równomierne światło, miękkie cienie

KAMERA:
- 50mm, f/3.2, ISO 100
- Ostrość na twarzy i produkcie

KOMPOZYCJA:
- Plan średnio-bliski, boczna negatywna przestrzeń

OGRANICZENIA:
- Bez tekstu/logo
- Utrzymać pastel czysty i równy`,
    thumbnail: "/images/foto-pro/ugc14.webp",
  },
  {
    id: "img-ugc-mano-015",
    title: "Produkt w dłoni pod kątem 3/4 (premium look, neutralne tło)",
    area: "Fotografia Profesjonalna",
    category: "Czyste tło (ads UGC)",
    summary:
      "Bardziej premium UGC: osoba pod kątem 3/4, produkt widoczny, czysta i profesjonalna estetyka.",
    prompt: `Wygeneruj REALISTYCZNE premium zdjęcie UGC z osobą pod kątem 3/4.

DANE:
- Osoba: [osoba], [wiek], wiarygodna mimika
- Produkt: ogólny bez marki, trzymany na wysokości klatki piersiowej
- Tło: neutralne gładkie (ciepły szary lub beż)
- Outfit: smart casual minimal

OŚWIETLENIE:
- Miękki boczny softbox + lekkie dopełnienie
- Realistyczna skóra, naturalny detal

KAMERA:
- 85mm, f/2.8, ISO 100
- Ostrość na oczach, produkt wyraźny

KOMPOZYCJA:
- Plan średnio-bliski, elegancka, ale naturalna poza

OGRANICZENIA:
- Bez tekstu/logo
- Unikać zdeformowanych dłoni`,
    thumbnail: "/images/foto-pro/ugc15.webp",
  },

  // =========================
  // CATEGORY: Produkt w dłoni (tylko dłonie / zbliżenie)
  // =========================
  {
    id: "img-ugc-mano-016",
    title: "Zbliżenie: tylko dłonie trzymające produkt (miękkie tło, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Produkt w dłoni (tylko dłonie / zbliżenie)",
    summary:
      "Zbliżenie dłoni trzymających produkt, idealne do reklam i katalogów bez pokazywania twarzy.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie close-up dłoni trzymających produkt (bez twarzy).

DANE:
- Dłonie: odcień skóry [opisz], czyste paznokcie, perfekcyjna anatomia
- Produkt: [opisz], ogólny bez marki i bez czytelnego tekstu
- Tło: miękkie rozmyte (krem/szary), minimal

OŚWIETLENIE:
- Miękkie boczne światło podkreślające teksturę
- Kontrolowane refleksy na produkcie

KAMERA:
- Makro lub 85mm, f/3.5, ISO 200
- Ostrość na dłoniach i produkcie

KOMPOZYCJA:
- Produkt wycentrowany, dłonie symetryczne lub naturalnie ułożone
- Czysta estetyka jak w reklamie

KRYTYCZNE OGRANICZENIA:
- 5 palców na dłoń, realne proporcje
- Bez tekstu/logo/watermarku`,
    thumbnail: "/images/foto-pro/ugc16.webp",
  },
  {
    id: "img-ugc-mano-017",
    title: "Zbliżenie produktu w dłoni z tłem kuchni (realnie, codziennie)",
    area: "Fotografia Profesjonalna",
    category: "Produkt w dłoni (tylko dłonie / zbliżenie)",
    summary:
      "Produkt w dłoni z codziennym (kuchennym) rozmytym tłem, autentyczny look.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie close-up produktu w dłoni z codziennym tłem.

DANE:
- Dłoń: perfekcyjna anatomia, naturalne paznokcie
- Produkt: [opisz], ogólny bez marki
- Tło: rozmyta kuchnia (drewno/łagodne płytki), realny klimat

OŚWIETLENIE:
- Miękkie naturalne światło z okna
- Realne kolory, umiarkowany kontrast

KAMERA:
- 50mm, f/2.2, ISO 250
- Ostrość na produkcie, bokeh tła

KOMPOZYCJA:
- Produkt lekko z boku, dłoń w pełni widoczna

OGRANICZENIA:
- Bez tekstu/logo
- Unikać dodatkowych palców lub zdeformowanego produktu`,
    thumbnail: "/images/foto-pro/ugc17.webp",
  },
  {
    id: "img-ugc-mano-018",
    title: "Zbliżenie produktu w dłoni z miękkim dramatycznym światłem (premium UGC)",
    area: "Fotografia Profesjonalna",
    category: "Produkt w dłoni (tylko dłonie / zbliżenie)",
    summary:
      "Premium UGC: zbliżenie z bardziej dramatycznym, ale miękkim światłem, kampanijny look.",
    prompt: `Wygeneruj REALISTYCZNE premium zdjęcie close-up produktu w dłoni.

DANE:
- Dłoń: realistyczna skóra, czyste paznokcie, bez deformacji
- Produkt: [opisz], ogólny bez marek
- Tło: miękko ciemne lub neutralne (antracyt), minimal

OŚWIETLENIE:
- Miękkie boczne key light + minimalne dopełnienie
- Cień z detalem, kontrolowane refleksy

KAMERA:
- 85mm, f/2.8, ISO 200
- Ostra ostrość na produkcie i teksturze skóry

KOMPOZYCJA:
- Ciasny kadr, produkt jako bohater

OGRANICZENIA:
- Bez tekstu/logo/watermarku
- 5 palców, perfekcyjna anatomia`,
    thumbnail: "/images/foto-pro/ugc18.webp",
  },
  {
    id: "img-ugc-mano-019",
    title: "Produkt w dłoni z gestem „aprobaty” (kciuk w górę, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Produkt w dłoni (tylko dłonie / zbliżenie)",
    summary:
      "Dłoń trzyma produkt + kciuk w górę (lub gest OK) jako wizualny sygnał aprobaty.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie produktu w dłoni z gestem aprobaty.

DANE:
- Dłoń 1: trzyma ogólny produkt bez marki
- Dłoń 2 (opcjonalnie) lub ta sama dłoń: naturalny gest kciuka w górę lub gest OK
- Tło: rozmyte wnętrze (dom) lub neutralne gładkie tło

OŚWIETLENIE:
- Miękkie naturalne światło, miękkie cienie

KAMERA:
- 50mm, f/2.8, ISO 200
- Ostrość na dłoniach i produkcie

KOMPOZYCJA:
- Produkt wyraźnie widoczny, gest aprobaty obok niego

KRYTYCZNE OGRANICZENIA:
- Perfekcyjna anatomia (poprawne palce, realistyczne stawy)
- Bez tekstu/logo/watermarku`,
    thumbnail: "/images/foto-pro/ugc19.webp",
  },
  {
    id: "img-ugc-mano-020",
    title: "Produkt w dłoni na tle biurka (creator setup, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Produkt w dłoni (tylko dłonie / zbliżenie)",
    summary:
      "Produkt w dłoni na tle setupu biurka (rozmyty laptop/klawiatura), realistyczny styl creatora.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie produktu w dłoni na tle biurka (creator setup).

DANE:
- Dłoń: trzyma ogólny produkt bez marki
- Tło: biurko z ROZMYTYM laptopem/klawiaturą/notatnikiem (bez logo, bez czytelnego tekstu)
- Styl: produktywność/creator, autentycznie

OŚWIETLENIE:
- Miękkie światło z okna lub lekko ciepłe światło lampy
- Naturalne kolory, miękkie cienie

KAMERA:
- 50mm, f/2.2, ISO 320
- Ostrość na produkcie, bokeh w tle

KOMPOZYCJA:
- Produkt wycentrowany, biurko daje kontekst

OGRANICZENIA:
- Bez tekstu/logo
- Realistyczna dłoń (5 palców), bez deformacji`,
    thumbnail: "/images/foto-pro/ugc20.webp",
  },
];
