// src/lib/prompts/image/foto-automotriz.js

export const imagePromptsFotoAutomotriz = [
  // =========================
  // KATEGORIA: Auto + model(ka) (lifestyle)
  // =========================
  {
    id: "img-foto-auto-001",
    title: "Model(ka) obok czerwonego sportowego auta (golden hour, droga, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Auto + model(ka) (lifestyle)",
    summary:
      "Premium zdjęcie lifestyle: model(ka) z autem sportowym na drodze o zachodzie słońca, realistyczny editorial look.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie lifestyle z autem + modelką/modelem.

DANE:
- Auto: sportowe [kolor: czerwony], czyste, bez widocznych logotypów marki
- Model(ka): [kobieta/mężczyzna/osoba], [wiek], pewna i naturalna poza
- Outfit: [elegancki casual / sukienka / skórzana kurtka], dopasowany do premium vibe
- Lokalizacja: otwarta droga, szeroki horyzont, tło lekko rozmyte

OŚWIETLENIE:
- Golden hour (zachód słońca), ciepłe boczne światło
- Realistyczne refleksy na karoserii, bez „przepaleń”
- Naturalna skóra, miękkie cienie

KAMERA:
- 35mm lub 50mm, f/2.2, ISO 100–200
- Ostrość na model(ce) i przednią/boczną część auta

KOMPOZYCJA:
- Kadr 3/4 lub pełny, auto zajmuje 40–60% kadru
- Lekko niska perspektywa dla mocnego wrażenia

OGRANICZENIA:
- Bez tekstu, bez logo, bez czytelnych tablic
- Unikaj deformacji auta (owalne koła, dziwna karoseria)`,
    thumbnail: "/images/foto-pro/auto1.webp",
  },
  {
    id: "img-foto-auto-002",
    title: "Kobieta w czerwonej sukience przed autem (luksusowy editorial, miejskie tło)",
    area: "Fotografia Profesjonalna",
    category: "Auto + model(ka) (lifestyle)",
    summary:
      "Luksusowa estetyka editorial: wyrazista sukienka + auto, miasto rozmyte w tle.",
    prompt: `Wygeneruj REALISTYCZNE luksusowe zdjęcie editorial z modelką + autem.

DANE:
- Model(ka): kobieta/osoba, [wiek], elegancka czerwona sukienka
- Auto: sportowe lub premium sedan [kolor: czerwony lub czarny], bez logo
- Scena: miejska okolica o zachodzie słońca, budynki i światła rozmyte
- Poza: editorial attitude, mocne spojrzenie, elegancka postawa

OŚWIETLENIE:
- Miękkie światło zachodu + miejskie refleksy
- Średni kontrast, naturalna skóra, tkanina z realistyczną fakturą

KAMERA:
- 50mm, f/2, ISO 200
- Delikatny miejski bokeh w tle

KOMPOZYCJA:
- Kadr 3/4, auto częściowo widoczne (nie ucinać dziwnie kół)
- Zachować proste linie auta (bez dystorsji)

OGRANICZENIA:
- Bez tekstu/watermarku
- Bez czytelnych tablic, bez rozpoznawalnych marek`,
    thumbnail: "/images/foto-pro/auto2.webp",
  },
  {
    id: "img-foto-auto-003",
    title: "Model(ka) oparty(a) o auto (premium street vibe, miękkie światło)",
    area: "Fotografia Profesjonalna",
    category: "Auto + model(ka) (lifestyle)",
    summary:
      "Premium street foto: model(ka) oparty(a) o auto, naturalna estetyka jak kampania.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie kampanijne street premium z modelką/modelem + autem.

DANE:
- Model(ka): [osoba], [wiek], pewna ekspresja
- Outfit: skórzana kurtka lub blazer, miejski premium look
- Auto: kolor czarny/szary, styl premium, bez widocznych logo
- Sceneria: czysta ulica, miejskie tło rozmyte (bokeh)

OŚWIETLENIE:
- Miękkie światło (popołudnie/pochmurno), delikatne cienie
- Realistyczne refleksy na aucie, bez sztucznych błysków

KAMERA:
- 35mm, f/2.2, ISO 200
- Ostrość na oczy + detale auta

KOMPOZYCJA:
- Kadr pełny lub 3/4, linie auta dobrze proporcjonalne
- Naturalna perspektywa, nie przesadzać z szerokim kątem

OGRANICZENIA:
- Bez tekstu/logo/czytelnych tablic
- Unikać zdeformowanych kół lub niespójnej karoserii`,
    thumbnail: "/images/foto-pro/auto3.webp",
  },
  {
    id: "img-foto-auto-004",
    title: "Wnętrze auta: portret na fotelu kierowcy (boczne światło, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Auto + model(ka) (lifestyle)",
    summary:
      "Realistyczny portret wewnątrz auta, boczne światło z okna, look twórca/CEO.",
    prompt: `Wygeneruj REALISTYCZNY portret wewnątrz auta (fotel kierowcy).

DANE:
- Osoba: [osoba], [wiek], premium look
- Outfit: business casual (koszula, marynarka lub elegancki top)
- Wnętrze: nowoczesne auto (bez widocznych marek), czyste
- Tło na zewnątrz: rozmyte przez szyby

OŚWIETLENIE:
- Miękkie naturalne boczne światło wpadające przez okno, delikatne
- Naturalna skóra, miękkie cienie

KAMERA:
- 50mm, f/2, ISO 400
- Ostrość na oczy, lekko rozmyta deska rozdzielcza

KOMPOZYCJA:
- Ujęcie średnie-bliskie (ramiona do głowy), kierownica i fotel subtelnie widoczne

OGRANICZENIA:
- Bez logo, bez tekstu, bez tablic
- Unikać zniekształceń twarzy oraz dodatkowych dłoni`,
    thumbnail: "/images/foto-pro/auto4.webp",
  },
  {
    id: "img-foto-auto-005",
    title: "Lifestyle z autem i nocnym miastem (subtelny neon, filmowy look)",
    area: "Fotografia Profesjonalna",
    category: "Auto + model(ka) (lifestyle)",
    summary:
      "Auto + model(ka) w nocnym mieście z światłami i subtelnym neonem, filmowa realistyczna estetyka.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie auta + modelki/modela w nocnym mieście.

DANE:
- Model(ka): [osoba], [wiek], editorial attitude
- Auto: premium w ciemnym kolorze, bez logo
- Scena: miasto z subtelnym neonem, odbicia na asfalcie (jak po deszczu)
- Outfit: ciemny/premium, kurtka lub elegancka sukienka

OŚWIETLENIE:
- Światła miejskie jako key light + miękkie dopełnienie
- Neon magenta/cyan bardzo subtelny (bez fluorescencyjnej skóry)
- Realistyczne refleksy na karoserii

KAMERA:
- 35mm, f/1.8, ISO 800–1200
- Bokeh świateł w tle

KOMPOZYCJA:
- Kadr 3/4, auto i model(ka) zbalansowane

OGRANICZENIA:
- Bez tekstu/logo/czytelnych tablic
- Unikać deformacji auta i kół`,
    thumbnail: "/images/foto-pro/auto5.webp",
  },

  // =========================
  // KATEGORIA: Auto (filmowe)
  // =========================
  {
    id: "img-foto-auto-006",
    title: "Auto hero shot z przodu (filmowo, droga, lekka mgła)",
    area: "Fotografia Profesjonalna",
    category: "Auto (filmowe)",
    summary:
      "Filmowy hero shot auta na drodze z atmosferą (lekka mgła) i premium look.",
    prompt: `Wygeneruj REALISTYCZNE filmowe zdjęcie auta (bez modela).

DANE:
- Auto: sportowe lub premium sedan, kolor [czarny/szary/czerwony], bez widocznych logo
- Lokalizacja: otwarta droga, minimalistyczny krajobraz
- Atmosfera: delikatna mgła lub lekka bryza/mgielka (opcjonalnie)

OŚWIETLENIE:
- Miękkie światło (świt/zachód), łagodne cienie
- Realistyczne refleksy na karoserii, bez przesady

KAMERA:
- Obiektyw 35mm, f/2.8, ISO 100–200
- Ostrość na przód auta, tło lekko rozmyte

KOMPOZYCJA:
- Niski kąt, przód 3/4
- Auto wycentrowane, proste linie, realistyczna perspektywa

OGRANICZENIA:
- Bez tekstu/watermarku
- Bez logo/czytelnych tablic
- Koła idealnie okrągłe, realne proporcje`,
    thumbnail: "/images/foto-pro/auto6.webp",
  },
  {
    id: "img-foto-auto-007",
    title: "Auto z boku 3/4 (golden hour, subtelny kurz, kampania)",
    area: "Fotografia Profesjonalna",
    category: "Auto (filmowe)",
    summary:
      "Ujęcie kampanijne: auto 3/4 z boku w złotym świetle i wrażeniem ruchu (subtelny kurz).",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie w stylu kampanii motoryzacyjnej (bez osób).

DANE:
- Auto: premium [kolor], bez widocznych logo
- Scena: droga szutrowa lub asfalt z BARDZO subtelnym kurzem z tyłu (opcjonalnie)
- Klimat: golden hour, ciepłe niebo

OŚWIETLENIE:
- Złote boczne światło (delikatny rim light na krawędziach)
- Naturalne refleksy, średni kontrast

KAMERA:
- 70mm, f/3.2, ISO 100–200
- Auto bardzo ostre, tło lekko rozmyte

KOMPOZYCJA:
- Kadr 3/4 z boku, auto zajmuje 70% kadru
- Czyste linie, premium feeling

OGRANICZENIA:
- Bez tekstu/logo/czytelnych tablic
- Unikać dystorsji karoserii i kół`,
    thumbnail: "/images/foto-pro/auto7.webp",
  },
  {
    id: "img-foto-auto-008",
    title: "Auto nocą w deszczu (odbicia, city lights, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Auto (filmowe)",
    summary:
      "Auto w nocnym mieście z mokrą nawierzchnią i mocnymi odbiciami, filmowy realistyczny styl.",
    prompt: `Wygeneruj REALISTYCZNE filmowe zdjęcie auta w nocnym mieście.

DANE:
- Auto: ciemne premium, bez logo
- Scena: mokra ulica z odbiciami, rozmyte światła miasta
- Deszcz: lekki (subtelny, nie przesadzony)

OŚWIETLENIE:
- Latarnie + miejskie światła odbite w karoserii
- Średnio-wysoki kontrast, ale z detalem w cieniach

KAMERA:
- 35mm, f/2, ISO 1000
- Bokeh świateł, ostrość na auto

KOMPOZYCJA:
- Przód 3/4 lub bok, niski kąt
- Głębokie miejskie tło

OGRANICZENIA:
- Bez tekstu/watermarku
- Bez czytelnych tablic, unikać zdeformowanych kół`,
    thumbnail: "/images/foto-pro/auto8.webp",
  },
  {
    id: "img-foto-auto-009",
    title: "Auto w studiu (szare tło, softbox, premium katalog)",
    area: "Fotografia Profesjonalna",
    category: "Auto (filmowe)",
    summary:
      "Zdjęcie auta jak w studiu/premium garażu: szare tło, softboxy i detal lakieru.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie auta w ustawieniu typu premium studio.

DANE:
- Auto: [sportowe/sedan], kolor [szary/czarny/czerwony], bez widocznych logo
- Tło: neutralna szarość, styl dużego studia lub czystego premium garażu

OŚWIETLENIE:
- Duże softboxy subtelnie odbite w karoserii
- Miękkie cienie, ostry detal lakieru i linii

KAMERA:
- 50mm, f/5.6, ISO 100
- Wysoka ostrość dla premium katalogu

KOMPOZYCJA:
- Bok 3/4, auto wycentrowane, miejsce na banner

OGRANICZENIA:
- Bez tekstu/logo/czytelnych tablic
- Unikać dziwnych odbić, owalnych kół`,
    thumbnail: "/images/foto-pro/auto9.webp",
  },
  {
    id: "img-foto-auto-010",
    title: "Filmowy detal auta (włączone reflektory, miejski bokeh)",
    area: "Fotografia Profesjonalna",
    category: "Auto (filmowe)",
    summary:
      "Filmowy close-up reflektorów i detali auta z miejskim bokeh w tle.",
    prompt: `Wygeneruj REALISTYCZNE filmowe zdjęcie close-up auta.

DANE:
- Auto: premium, kolor [ciemny], bez logo
- Detal: ostrość na przedni reflektor i część maski
- Tło: nocne miasto z bokeh świateł

OŚWIETLENIE:
- Włączone reflektory (realistyczne, bez przepaleń)
- Miękkie miejskie światło ambient

KAMERA:
- 85mm, f/2, ISO 800
- Ostra ostrość na reflektor, mocny bokeh z tyłu

KOMPOZYCJA:
- Czysty kadr, detal jako główny bohater
- Realistyczne linie auta (bez dystorsji)

OGRANICZENIA:
- Bez tekstu/watermarku
- Unikać zdeformowanych reflektorów lub niemożliwych odbić`,
    thumbnail: "/images/foto-pro/auto10.webp",
  },

  // =========================
  // KATEGORIA: Motocykl (ulica)
  // =========================
  {
    id: "img-foto-auto-011",
    title: "Kobieta na czarnym motocyklu na jesiennej alei (premium lifestyle)",
    area: "Fotografia Profesjonalna",
    category: "Motocykl (ulica)",
    summary:
      "Zdjęcie lifestyle: kobieta na czarnym motocyklu na alei z jesiennymi drzewami, realistyczna estetyka editorial.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie lifestyle z motocyklem na ulicy.

DANE:
- Osoba: kobieta/osoba, [wiek], pewna postawa
- Motocykl: nowoczesny czarny, bez widocznych logo
- Outfit: skórzana kurtka + jeansy lub premium miejski look
- Lokalizacja: aleja z jesiennymi drzewami, liście na ziemi, głębia ulicy

OŚWIETLENIE:
- Miękkie światło (popołudnie/pochmurno), ciepłe jesienne tony
- Realistyczne refleksy na motocyklu, miękkie cienie

KAMERA:
- 35mm lub 50mm, f/2, ISO 200
- Ostrość na osobie, umiarkowanie rozmyte tło

KOMPOZYCJA:
- Kadr 3/4 lub pełny, motocykl widoczny bez deformacji
- Proste linie, naturalna perspektywa

OGRANICZENIA:
- Bez tekstu/logo/tablic
- Unikać owalnych kół i niespójnych elementów`,
    thumbnail: "/images/foto-pro/auto11.webp",
  },
  {
    id: "img-foto-auto-012",
    title: "Motocykl w nocnym mieście (subtelny neon, filmowy look)",
    area: "Fotografia Profesjonalna",
    category: "Motocykl (ulica)",
    summary:
      "Filmowe zdjęcie motocykla w nocnym mieście z subtelnym neonem i realistycznymi odbiciami.",
    prompt: `Wygeneruj REALISTYCZNE filmowe zdjęcie motocykla w nocnym mieście.

DANE:
- Motocykl: czarny lub szary, nowoczesny styl, bez logo
- Osoba: [osoba] w kasku (opcjonalnie), luźna poza
- Scena: mokra ulica z odbiciami, subtelny neon magenta/cyan

OŚWIETLENIE:
- Światła miejskie + neon jako oświetlenie ambient
- Zachować realistyczną skórę, jeśli widać twarz

KAMERA:
- 35mm, f/1.8, ISO 1200
- Bokeh świateł, ostrość na motocyklu

KOMPOZYCJA:
- Niski kąt, motocykl jako bohater
- Miejska głębia, filmowy klimat

OGRANICZENIA:
- Bez tekstu/watermarku
- Unikać zdublowanych części lub zdeformowanego koła`,
    thumbnail: "/images/foto-pro/auto12.webp",
  },
  {
    id: "img-foto-auto-013",
    title: "Portret z motocyklem na drodze (golden hour, subtelny kurz)",
    area: "Fotografia Profesjonalna",
    category: "Motocykl (ulica)",
    summary:
      "Model(ka) z motocyklem na otwartej drodze o zachodzie, outdoor kampanijny klimat.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie kampanijne z motocyklem na drodze.

DANE:
- Osoba: [osoba], [wiek], naturalna editorial poza
- Motocykl: styl [naked/sport], bez logo
- Lokalizacja: otwarta droga, minimalistyczny krajobraz
- Klimat: golden hour, lekki kurz (opcjonalnie)

OŚWIETLENIE:
- Złote boczne światło, miękkie cienie
- Realistyczne refleksy na baku i metalu

KAMERA:
- 50mm, f/2.2, ISO 100–200
- Ostrość na osobie i motocyklu, miękkie tło

KOMPOZYCJA:
- Kadr pełny lub 3/4, naturalna perspektywa

OGRANICZENIA:
- Bez tekstu/tablic
- Unikać zdeformowanego motocykla, owalnych kół`,
    thumbnail: "/images/foto-pro/auto13.webp",
  },
  {
    id: "img-foto-auto-014",
    title: "Zaparkowany motocykl (premium katalog, czyste tło)",
    area: "Fotografia Profesjonalna",
    category: "Motocykl (ulica)",
    summary:
      "Premium zdjęcie motocykla jak do katalogu z czystym tłem i detalem materiałów.",
    prompt: `Wygeneruj REALISTYCZNE premium zdjęcie katalogowe motocykla (bez osób).

DANE:
- Motocykl: czarny/czerwony/szary, czysty, bez widocznych logo
- Tło: neutralna ściana lub czysty premium garaż
- Powierzchnia: czysta podłoga, miękkie cienie

OŚWIETLENIE:
- Miękki softbox, kontrolowane refleksy na metalu/lakierze
- Ostry detal bez nadmiernego kontrastu

KAMERA:
- 50mm, f/5.6, ISO 100
- Ostrość na cały motocykl

KOMPOZYCJA:
- Pełny profil z boku, motocykl wycentrowany
- Proste linie, realne proporcje

OGRANICZENIA:
- Bez tekstu/watermarku
- Unikać duplikacji, „pływających” części`,
    thumbnail: "/images/foto-pro/auto14.webp",
  },
  {
    id: "img-foto-auto-015",
    title: "Motocykl z riderem (kask, kurtka, street pro vibe)",
    area: "Fotografia Profesjonalna",
    category: "Motocykl (ulica)",
    summary:
      "Rider w kasku i kurtce, realistyczna estetyka street pro do sociali.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie street pro ridera z motocyklem.

DANE:
- Osoba: [osoba], [wiek], kask założony (opcjonalnie ciemna wizjera)
- Outfit: kurtka motocyklowa, rękawice, autentyczny look
- Motocykl: nowoczesny, bez logo
- Scena: miejska ulica, tło z głębią rozmyte

OŚWIETLENIE:
- Miękkie światło (popołudnie/pochmurno) lub noc z latarniami
- Realistyczne refleksy na kasku i motocyklu

KAMERA:
- 35mm, f/2, ISO 400
- Ostrość na kask/twarz i przednią część motocykla

KOMPOZYCJA:
- Kadr 3/4, niski kąt dla mocniejszego wrażenia

OGRANICZENIA:
- Bez tekstu/logo/tablic
- Unikać zdeformowanych dłoni, zdublowanych elementów`,
    thumbnail: "/images/foto-pro/auto15.webp",
  },

  // =========================
  // KATEGORIA: Koła / detale (makro)
  // =========================
  {
    id: "img-foto-auto-016",
    title: "Makro felgi i hamulca (realistyczny detal, miękkie światło)",
    area: "Fotografia Profesjonalna",
    category: "Koła / detale (makro)",
    summary:
      "Makro close-up felgi i hamulca z realistyczną teksturą i kontrolowanymi refleksami.",
    prompt: `Wygeneruj REALISTYCZNE makro zdjęcie detalu motoryzacyjnego.

DANE:
- Detal: premium felga + widoczny hamulec (zacisk), realistyczna faktura
- Auto: bez widocznych marek (generyczne)
- Tło: rozmyte, ciemne lub neutralne

OŚWIETLENIE:
- Miękkie boczne światło, aby pokazać fakturę metalu i gumy
- Kontrolowane refleksy, bez przepaleń

KAMERA:
- Makro lub 85mm, f/3.5, ISO 200
- Precyzyjna ostrość na fakturę felgi i hamulca

KOMPOZYCJA:
- Ciasny kadr, detal jako bohater
- Premium estetyka, jak reklama

OGRANICZENIA:
- Bez tekstu/logo
- Unikać dziwnych wzorów lub „roztopionego” metalu`,
    thumbnail: "/images/foto-pro/auto16.webp",
  },
  {
    id: "img-foto-auto-017",
    title: "Makro kierownicy i deski rozdzielczej (premium wnętrze, miękki bokeh)",
    area: "Fotografia Profesjonalna",
    category: "Koła / detale (makro)",
    summary:
      "Detal wnętrza: kierownica i deska rozdzielcza z premium lookiem, bez logo i czytelnych napisów.",
    prompt: `Wygeneruj REALISTYCZNE makro zdjęcie wnętrza premium auta.

DANE:
- Główny detal: kierownica + deska rozdzielcza + faktura skóry
- Wnętrze: nowoczesne, czyste, bez widocznych logo
- Tło: rozmyte, miękkie światła

OŚWIETLENIE:
- Miękkie boczne światło, subtelne refleksy na skórze i metalu
- Ciepły premium klimat

KAMERA:
- 50mm lub 85mm, f/2.8, ISO 400
- Ostrość na fakturę skóry i przeszycia

KOMPOZYCJA:
- Ciasny kadr z perspektywy kierowcy
- Miękki bokeh w tle

OGRANICZENIA:
- Bez czytelnego tekstu na ekranach
- Bez logo/marek`,
    thumbnail: "/images/foto-pro/auto17.webp",
  },
  {
    id: "img-foto-auto-018",
    title: "Makro z zewnątrz: przedni reflektor (krople deszczu, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Koła / detale (makro)",
    summary:
      "Close-up reflektora z subtelnymi kroplami, nocny premium styl i realne odbicia.",
    prompt: `Wygeneruj REALISTYCZNE makro zdjęcie przedniego reflektora auta.

DANE:
- Detal: włączony przedni reflektor, widoczna część maski
- Klimat: noc lub ciemny zachód
- Krople: subtelny deszcz (opcjonalnie)

OŚWIETLENIE:
- Reflektor jako główne źródło światła + miękkie miejskie odbicia
- Realistyczne refleksy na szkle i lakierze

KAMERA:
- 85mm, f/2.2, ISO 800
- Ostrość na reflektor, bokeh świateł w tle

KOMPOZYCJA:
- Ciasny kadr, proste linie auta, bez dystorsji

OGRANICZENIA:
- Bez logo/tablic
- Unikać zdeformowanych reflektorów lub niemożliwych kształtów`,
    thumbnail: "/images/foto-pro/auto18.webp",
  },
  {
    id: "img-foto-auto-019",
    title: "Makro lakieru i refleksu (premium karoseria, miękkie światło)",
    area: "Fotografia Profesjonalna",
    category: "Koła / detale (makro)",
    summary:
      "Detal błyszczącego lakieru z kontrolowanymi odbiciami dla premium kampanijnego looku.",
    prompt: `Wygeneruj REALISTYCZNE makro zdjęcie karoserii premium auta.

DANE:
- Detal: panel karoserii (maska/drzwi) z błyszczącym lakierem
- Odbicie: miękkie linie światła (softbox) odbite realistycznie
- Kolor: [czarny/szary/czerwony], bez widocznych logo

OŚWIETLENIE:
- Duże softboxy, miękkie i kontrolowane refleksy
- Pokazać fakturę lakieru (bardzo subtelnie), bez dziwnego szumu

KAMERA:
- Makro lub 85mm, f/3.2, ISO 100–200
- Ostrość na odbicie i powierzchnię

KOMPOZYCJA:
- Abstrakcyjny premium kadr, minimalistyczny

OGRANICZENIA:
- Bez tekstu/logo
- Unikać „niemożliwych” odbić lub artefaktów`,
    thumbnail: "/images/foto-pro/auto19.webp",
  },
  {
    id: "img-foto-auto-020",
    title: "Detal wydechu i dyfuzora (agresywny look, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Koła / detale (makro)",
    summary:
      "Close-up tylnej strefy: wydech/dyfuzor z realistyczną fakturą, estetyka performance.",
    prompt: `Wygeneruj REALISTYCZNE makro zdjęcie detalu performance w aucie.

DANE:
- Detal: podwójny wydech + tylny dyfuzor (bez logo)
- Klimat: premium garaż lub nocna ulica (rozmyte tło)
- Estetyka: agresywna, ale elegancka

OŚWIETLENIE:
- Miękkie boczne światło, aby pokazać fakturę metalu/karbonu
- Średnio-wysoki kontrast z detalem w cieniach

KAMERA:
- 85mm, f/2.8, ISO 400
- Ostrość na metal i fakturę, miękki bokeh w tle

KOMPOZYCJA:
- Ciasny kadr, proste linie, realne proporcje

OGRANICZENIA:
- Bez tekstu/watermarku
- Unikać zdublowanych elementów lub „roztopionego” metalu`,
    thumbnail: "/images/foto-pro/auto20.webp",
  },
];
