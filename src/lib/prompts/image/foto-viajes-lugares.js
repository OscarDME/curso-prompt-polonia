// src/lib/prompts/image/foto-viajes-lugares.js

export const imagePromptsFotoViajesLugares = [
  // =========================
  // CATEGORY: Miasto / urban
  // =========================
  {
    id: "img-viaje-001",
    title: "Miasto o zachodzie słońca (ikoniczna ulica, złote światło, filmowy look)",
    area: "Fotografia Profesjonalna",
    category: "Miasto / urban",
    summary:
      "Realistyczne zdjęcie podróżnicze w mieście w złotej godzinie z głębią, subtelnymi ludźmi i filmową estetyką.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie podróżnicze w mieście o zachodzie słońca.

DANE:
- Miejsce: generyczna ikoniczna ulica miejska (bez marek i czytelnych szyldów)
- Elementy: ciekawa architektura, latarnie, subtelny ruch uliczny
- Ludzie: kilka osób w tle (rozmytych), naturalnie
- Styl: cinematic travel, naturalne kolory (bez przesadnej saturacji)

OŚWIETLENIE:
- Golden hour (boczne złote światło), miękkie cienie
- Realistyczne refleksy w oknach i na nawierzchni

KAMERA:
- 35mm, f/2.2, ISO 200
- Ostrość na punkcie zainteresowania, tło z miękkim bokeh

KOMPOZYCJA:
- Linie prowadzące (ulica) w głąb kadru, poczucie głębi
- Lekka negatywna przestrzeń do użycia w designie (ale NIE dodawaj tekstu)

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać czytelnych tablic i marek`,
    thumbnail: "/images/foto-pro/viaje1.webp",
  },
  {
    id: "img-viaje-002",
    title: "Nocna ulica z subtelnym neonem (lekki deszcz, odbicia, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Miasto / urban",
    summary:
      "Nocna scena miejska z mokrą nawierzchnią i bokeh świateł, subtelny neon bez przesady.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie nocnego miasta w filmowej estetyce.

DANE:
- Miejsce: generyczna nowoczesna ulica miejska
- Klimat: lekko mokra nawierzchnia (odbicia), opcjonalnie bardzo subtelny deszcz
- Światła: subtelny neon magenta/cyjan + ciepłe latarnie
- Ludzie: opcjonalnie, nieliczni i rozmyci

OŚWIETLENIE:
- Kontrast średnio-wysoki, zachować detal w cieniach
- Realistyczne odbicia na jezdni

KAMERA:
- 35mm, f/1.8, ISO 1600
- Bokeh świateł w tle, ostrość na średnim planie

KOMPOZYCJA:
- Perspektywa ulicy z głębią, look jak kadr z filmu

OGRANICZENIA:
- Bez czytelnego tekstu/logo
- Unikać nadmiernego sztucznego glow`,
    thumbnail: "/images/foto-pro/viaje2.webp",
  },
  {
    id: "img-viaje-003",
    title: "Kawiarnia na europejskiej ulicy (poranek, miękkie światło, travel editorial)",
    area: "Fotografia Profesjonalna",
    category: "Miasto / urban",
    summary:
      "Editorialowy klimat: taras kawiarni na ładnej ulicy, miękkie poranne światło i realizm.",
    prompt: `Wygeneruj REALISTYCZNE editorialowe zdjęcie podróżnicze na ulicy z ogródkiem kawiarnianym.

DANE:
- Scena: stoliki na zewnątrz, krzesła, kamienna uliczka lub ładny chodnik
- Elementy: rośliny, okna, detale architektoniczne (bez czytelnych szyldów)
- Ludzie: opcjonalnie 1–2 osoby rozmyte, spokojna atmosfera
- Styl: travel editorial, czysto i jasno

OŚWIETLENIE:
- Miękkie poranne światło, bardzo lekkie cienie
- Naturalne barwy, neutralnie ciepłe tony

KAMERA:
- 50mm, f/2.2, ISO 200
- Ostrość na stoliku/głównym elemencie, tło bokeh

KOMPOZYCJA:
- Zasada trójpodziału, przytulne wrażenie

OGRANICZENIA:
- Bez czytelnego tekstu/logo
- Unikać dziwnych twarzy w tle`,
    thumbnail: "/images/foto-pro/viaje3.webp",
  },
  {
    id: "img-viaje-004",
    title: "Widok z miejskiego punktu widokowego (skyline, zachód, delikatna mgiełka)",
    area: "Fotografia Profesjonalna",
    category: "Miasto / urban",
    summary:
      "Realistyczny skyline z punktu widokowego z delikatną mgiełką i światłem zachodu, premium look.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie panoramy miasta (skyline) z punktu widokowego.

DANE:
- Miejsce: panoramiczny widok na miasto (budynki generyczne, bez marek)
- Atmosfera: delikatna realistyczna mgiełka/haze (bez przesady)
- Elementy: subtelna barierka lub detal punktu widokowego na pierwszym planie

OŚWIETLENIE:
- Zachód słońca, miękkie ciepłe światło i gradient na niebie
- Miękkie cienie, detal na budynkach

KAMERA:
- 70mm, f/4, ISO 200
- Wysoka ostrość, lekkie „tele” spłaszczenie planów

KOMPOZYCJA:
- Prosty horyzont, skyline w górnej części kadru
- Negatywna przestrzeń na niebie (bez tekstu)

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać zdeformowanych budynków`,
    thumbnail: "/images/foto-pro/viaje4.webp",
  },

  // =========================
  // CATEGORY: Natura / krajobrazy
  // =========================
  {
    id: "img-viaje-005",
    title: "Góry o świcie (lekka mgła, epicko ale realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Natura / krajobrazy",
    summary:
      "Górski krajobraz o świcie z subtelną mgłą warstwową i naturalnym kolorem, premium travel styl.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie gór o wschodzie słońca.

DANE:
- Scena: pasmo górskie z szczytami, doliną i lekką mgłą w warstwach (subtelnie)
- Elementy: naturalna roślinność, bez fantastycznych motywów
- Styl: travel premium, realistycznie, bez przesadnego HDR

OŚWIETLENIE:
- Świt: miękkie złote/różowe światło, delikatne długie cienie
- Naturalny gradient na niebie

KAMERA:
- 24–35mm, f/5.6, ISO 100–200
- Ogólna ostrość, duża głębia

KOMPOZYCJA:
- Warstwy głębi (pierwszy plan/środek/tło), epickie wrażenie

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać „malowanych” nierealnych gór`,
    thumbnail: "/images/foto-pro/viaje5.webp",
  },
  {
    id: "img-viaje-006",
    title: "Tropikalna plaża (realistyczna turkusowa woda, palmy, jasne światło)",
    area: "Fotografia Profesjonalna",
    category: "Natura / krajobrazy",
    summary:
      "Jasna plaża z realistyczną turkusową wodą, palmami i premium letnią estetyką.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie tropikalnej plaży.

DANE:
- Scena: plaża z jasnym piaskiem, palmy, realistyczne turkusowe morze
- Elementy: łagodne fale, naturalna piana, bezchmurne niebo
- Ludzie: opcjonalnie, bardzo mali i rozmyci w oddali

OŚWIETLENIE:
- Jasne światło południa lub poranka, miękkie cienie
- Naturalne kolory (bez nadmiernej saturacji)

KAMERA:
- 24–28mm, f/5, ISO 100
- Szeroka ostrość, prosty horyzont

KOMPOZYCJA:
- Horyzont w górnym trzecim, palma z boku jako rama

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać nierealnej „neonowej” wody`,
    thumbnail: "/images/foto-pro/viaje6.webp",
  },
  {
    id: "img-viaje-007",
    title: "Jesienny las (ścieżka, miękkie światło, naturalne ciepłe kolory)",
    area: "Fotografia Profesjonalna",
    category: "Natura / krajobrazy",
    summary:
      "Jesienny las ze ścieżką i naturalnymi ciepłymi tonami, realistyczny styl pocztówkowy.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie jesiennego lasu ze ścieżką.

DANE:
- Scena: ścieżka między drzewami z jesiennymi liśćmi, ziemia z suchymi liśćmi
- Elementy: opcjonalnie miękka mgiełka, bardzo subtelne promienie światła
- Styl: natural travel, realistycznie, bez mocnych filtrów

OŚWIETLENIE:
- Miękkie światło (popołudnie/pochmurnie), delikatne cienie
- Naturalne ciepłe kolory (żółty/pomarańcz/czerwony) bez przesady

KAMERA:
- 35mm, f/3.5, ISO 200
- Ostrość na ścieżce, tło z głębią

KOMPOZYCJA:
- Ścieżka jako linia prowadząca do środka

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać sztucznych powtarzalnych wzorów`,
    thumbnail: "/images/foto-pro/viaje7.webp",
  },
  {
    id: "img-viaje-008",
    title: "Wodospad w dżungli (lekka długa ekspozycja, realistycznie, głęboka zieleń)",
    area: "Fotografia Profesjonalna",
    category: "Natura / krajobrazy",
    summary:
      "Realistyczny wodospad z delikatnie „wygładzoną” wodą jak przy długiej ekspozycji i naturalną głęboką zielenią.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie wodospadu w naturalnym otoczeniu.

DANE:
- Scena: średni wodospad z kamieniami i roślinnością, realistyczna przejrzysta woda
- Styl: travel natura, czysto, bez fantazji
- Woda: delikatny efekt długiej ekspozycji (lekko, nie „przesadna wata”)

OŚWIETLENIE:
- Rozproszone światło (las), miękkie cienie, umiarkowany kontrast
- Realistyczna głęboka zieleń

KAMERA:
- 24–35mm, f/8, ISO 100 (symuluj długą ekspozycję)
- Ostrość na kamieniach i roślinności

KOMPOZYCJA:
- Wodospad na środku, kamienie na pierwszym planie dla głębi

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać nierealnej wody lub zduplikowanej roślinności`,
    thumbnail: "/images/foto-pro/viaje8.webp",
  },
  {
    id: "img-viaje-009",
    title: "Pustynia z wydmami (golden hour, długie cienie, minimal)",
    area: "Fotografia Profesjonalna",
    category: "Natura / krajobrazy",
    summary:
      "Minimalistyczne wydmy w złotej godzinie z długimi cieniami, spokojna i premium estetyka.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie pustyni z wydmami.

DANE:
- Scena: minimalistyczne falujące wydmy, bez nowoczesnych elementów
- Elementy: opcjonalnie subtelne ślady, czysty horyzont
- Styl: minimal travel, premium, naturalnie

OŚWIETLENIE:
- Golden hour, długie delikatne cienie, miękkie ciepłe tony
- Umiarkowany kontrast podkreślający fakturę piasku

KAMERA:
- 50–70mm, f/5.6, ISO 100
- Lekka kompresja dla kształtów wydm

KOMPOZYCJA:
- Krzywizny wydm jako główny temat, dużo negatywnej przestrzeni

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać „plastikowego” piasku i powtarzalnych wzorów`,
    thumbnail: "/images/foto-pro/viaje9.webp",
  },

  // =========================
  // CATEGORY: Architektura / zabytki (generyczne, bez marek)
  // =========================
  {
    id: "img-viaje-010",
    title: "Katedra/świątynia (wnętrze, światło przez witraże, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Architektura / zabytki",
    summary:
      "Uroczyste wnętrze ze światłem wpadającym przez witraże i realistyczną atmosferą, bez czytelnych elementów.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie wnętrza katedry/świątyni (architektura).

DANE:
- Scena: wnętrze z wysokimi łukami, witrażami, ławkami, ornamentami
- Ludzie: opcjonalnie, nieliczni i mali, rozmyci dla skali
- Styl: travel editorial, realistycznie

OŚWIETLENIE:
- Światło wpadające przez witraże (miękkie promienie), opcjonalnie subtelny kurz w powietrzu
- Miękkie cienie, zachować detale

KAMERA:
- 24mm, f/4.5, ISO 800
- Umiarkowany szeroki kąt, proste piony (bez dystorsji)

KOMPOZYCJA:
- Centralna symetria, nawa prowadząca do ołtarza (bez czytelnych symboli)

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać deformacji kolumn/łuków`,
    thumbnail: "/images/foto-pro/viaje10.webp",
  },
  {
    id: "img-viaje-011",
    title: "Generyczny ikoniczny most (świt, lekka mgła, pocztówkowy look)",
    area: "Fotografia Profesjonalna",
    category: "Architektura / zabytki",
    summary:
      "Duży most o świcie z lekką mgiełką i wodą, realistyczna estetyka pocztówki bez marek.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie dużego generycznego „ikonicznego” mostu (bez identyfikacji).

DANE:
- Scena: most nad rzeką lub zatoką, opcjonalnie miękka mgła
- Elementy: woda z odbiciami, daleki skyline rozmyty
- Styl: travel postcard premium

OŚWIETLENIE:
- Świt, miękkie światło, zbalansowane tony chłodne-ciepłe
- Realistyczne refleksy, umiarkowany kontrast

KAMERA:
- 35–50mm, f/5.6, ISO 200
- Szeroka ostrość, proste linie

KOMPOZYCJA:
- Most jako diagonal lub w trójpodziale, prosty horyzont

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać czytelnych znaków i logotypów`,
    thumbnail: "/images/foto-pro/viaje11.webp",
  },
  {
    id: "img-viaje-012",
    title: "Kolorowa dzielnica (fasady, wąska uliczka, miękkie światło, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Architektura / zabytki",
    summary:
      "Ulica z kolorowymi fasadami i travel vibe, naturalne kolory i bez czytelnych szyldów.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie dzielnicy z kolorowymi fasadami.

DANE:
- Scena: wąska ulica z malowanymi fasadami, balkonami i roślinami
- Elementy: bruk, drzwi, okna (bez czytelnych szyldów)
- Ludzie: opcjonalnie, nieliczni i rozmyci

OŚWIETLENIE:
- Miękkie światło (popołudnie/pochmurnie), naturalne barwy
- Lekkie cienie, editorial look

KAMERA:
- 35mm, f/2.8, ISO 250
- Ostrość na fasadach, głębia ulicy

KOMPOZYCJA:
- Linie prowadzące ulicą, wrażenie odkrywania

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać sztucznych powtarzalnych wzorów`,
    thumbnail: "/images/foto-pro/viaje12.webp",
  },

  // =========================
  // CATEGORY: Wnętrza / hotel / Airbnb
  // =========================
  {
    id: "img-viaje-013",
    title: "Minimalny pokój hotelowy (światło z okna, idealne łóżko, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Wnętrza / hotel / Airbnb",
    summary:
      "Minimalistyczne wnętrze hotelu/Airbnb z naturalnym światłem i czystą estetyką travel influencera.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie minimalistycznego wnętrza hotelu/Airbnb.

DANE:
- Scena: jasny pokój, idealnie pościelone łóżko, stoliki nocne, lampki
- Wystrój: ciepły minimal (drewno, biel, beż), bez marek
- Okno: wpadające naturalne światło, miękkie zasłony

OŚWIETLENIE:
- Miękkie światło z okna, delikatne cienie
- Naturalne neutralne kolory, bez przesadnego HDR

KAMERA:
- 24mm, f/4, ISO 250
- Umiarkowany szeroki kąt, proste linie (bez dystorsji)

KOMPOZYCJA:
- Częściowa symetria, poczucie spokoju

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać zdeformowanych lub powtórzonych obiektów`,
    thumbnail: "/images/foto-pro/viaje13.webp",
  },
  {
    id: "img-viaje-014",
    title: "Śniadanie do łóżka (travel cozy, miękkie światło, realistyczny editorial)",
    area: "Fotografia Profesjonalna",
    category: "Wnętrza / hotel / Airbnb",
    summary:
      "Śniadanie w łóżku w stylu travel cozy na social media, miękkie światło i realistyczne jedzenie.",
    prompt: `Wygeneruj REALISTYCZNE editorialowe zdjęcie śniadania do łóżka (travel cozy).

DANE:
- Scena: taca ze śniadaniem (kawa, owoce, pieczywo), naczynia bez marek
- Łóżko: naturalnie pogniecione białe prześcieradła, cozy estetyka
- Tło: elegancki pokój rozmyty, światło z okna

OŚWIETLENIE:
- Miękkie naturalne światło, neutralnie ciepłe tony
- Realistyczne tekstury jedzenia i tkanin

KAMERA:
- 50mm, f/2.5, ISO 400
- Ostrość na tacy, tło bokeh

KOMPOZYCJA:
- Taca na środku, dłonie opcjonalnie, ale poprawna anatomia

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać „plastikowego” jedzenia`,
    thumbnail: "/images/foto-pro/viaje14.webp",
  },
  {
    id: "img-viaje-015",
    title: "Widok z balkonu (kubek na pierwszym planie, miasto/morze rozmyte)",
    area: "Fotografia Profesjonalna",
    category: "Wnętrza / hotel / Airbnb",
    summary:
      "POV travel z balkonu z kubkiem na pierwszym planie i rozmytym widokiem w tle.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie typu POV z hotelowego balkonu.

DANE:
- Pierwszy plan: dłoń trzymająca kubek (bez logo), ostra
- Tło: widok na miasto lub morze, rozmyty z miękkim bokeh
- Elementy: balustrada balkonu, opcjonalnie rośliny, travel estetyka

OŚWIETLENIE:
- Poranne światło lub miękka golden hour
- Naturalne kolory, relaksujący klimat

KAMERA:
- 50mm, f/2.0, ISO 200
- Ostrość na kubku i dłoni, mocny bokeh w tle

KOMPOZYCJA:
- Kubek w trójpodziale, widok jako epicki kontekst

KRYTYCZNE OGRANICZENIA:
- Poprawna anatomicznie dłoń
- Bez tekstu/znaków wodnych`,
    thumbnail: "/images/foto-pro/viaje15.webp",
  },

  // =========================
  // CATEGORY: Ulica / lifestyle travel
  // =========================
  {
    id: "img-viaje-016",
    title: "Podróżnik z walizką na ulicy (editorial look, głębia, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Ulica / lifestyle travel",
    summary:
      "Lifestyle travel: osoba z walizką idąca po mieście, realistyczny editorial look.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie lifestyle travel z osobą i walizką.

DANE:
- Osoba: [osoba], [wiek], travel casual premium outfit (bez logo)
- Akcesoria: generyczna walizka lub plecak (bez marek)
- Scena: ładna miejska ulica, tło rozmyte
- Akcja: idzie albo sprawdza mapę/telefon (bez czytelnego tekstu)

OŚWIETLENIE:
- Miękkie światło (rano lub po południu), lekkie cienie
- Naturalne kolory, editorial estetyka

KAMERA:
- 35mm, f/2.2, ISO 250
- Ostrość na osobie, umiarkowany bokeh

KOMPOZYCJA:
- Przestrzeń w kierunku ruchu, linie prowadzące

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać logotypów na walizkach/ubraniach`,
    thumbnail: "/images/foto-pro/viaje16.webp",
  },
  {
    id: "img-viaje-017",
    title: "POV: paszport i generyczny boarding (bez czytelnego tekstu, travel aesthetic)",
    area: "Fotografia Profesjonalna",
    category: "Ulica / lifestyle travel",
    summary:
      "Travel aesthetic: paszport i generyczny bilet/boarding, bez czytelnego tekstu, editorial styl.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie typu POV w estetyce travel aesthetic.

DANE:
- Pierwszy plan: dłoń trzymająca generyczny paszport + generyczny boarding (bez czytelnego tekstu)
- Tło: rozmyte lotnisko lub okno z samolotami (bez marek)
- Rekwizyty: opcjonalnie rozmyta kawa lub walizka

OŚWIETLENIE:
- Miękkie białe światło jak na lotnisku
- Realne kolory, czysty look

KAMERA:
- 50mm, f/2.0, ISO 500
- Ostrość na dłoni i dokumentach, tło bokeh

KOMPOZYCJA:
- Dokumenty na środku, social media estetyka

KRYTYCZNE OGRANICZENIA:
- Poprawna anatomicznie dłoń
- Bez czytelnego tekstu, bez logo/znaków wodnych`,
    thumbnail: "/images/foto-pro/viaje17.webp",
  },
  {
    id: "img-viaje-018",
    title: "Szlak i plecak (plecy podróżnika, natura, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Ulica / lifestyle travel",
    summary:
      "Podróżnik widziany od tyłu na naturalnym szlaku z plecakiem, realistyczny klimat przygody.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie podróży przygodowej na szlaku.

DANE:
- Osoba: [osoba], [wiek], od tyłu, generyczny plecak bez logo
- Scena: szlak w naturze (las/góry), głębia
- Akcja: idzie, wiarygodna postawa

OŚWIETLENIE:
- Miękkie światło poranka lub popołudnia, delikatne cienie
- Naturalne kolory, przygodowa atmosfera

KAMERA:
- 35mm, f/2.8, ISO 400
- Ostrość na osobie, umiarkowany detal w tle

KOMPOZYCJA:
- Osoba w dolnym trzecim, ścieżka jako linia prowadząca

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać czytelnych marek na plecaku`,
    thumbnail: "/images/foto-pro/viaje18.webp",
  },
  {
    id: "img-viaje-019",
    title: "Punkt widokowy z osobą (miękka sylwetka, epicki krajobraz, realistycznie)",
    area: "Fotografia Profesjonalna",
    category: "Ulica / lifestyle travel",
    summary:
      "Osoba na punkcie widokowym kontemplująca krajobraz, miękka sylwetka i epicka, ale realistyczna estetyka.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie podróżnika na punkcie widokowym z krajobrazem.

DANE:
- Osoba: [osoba], [wiek], od tyłu lub w profilu, kontemplacyjna postawa
- Scena: punkt widokowy z szerokim pejzażem (góry/morze/dolina)
- Styl: epic travel, realistycznie, bez fantazji

OŚWIETLENIE:
- Świt lub zachód, miękki kontr-światło (sylwetka z detalem)
- Opcjonalnie lekka mgiełka

KAMERA:
- 24–35mm, f/5.0, ISO 200
- Duża głębia, ogólna ostrość

KOMPOZYCJA:
- Mała postać dla skali, krajobraz jako główny bohater

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać hiper nasyconego nieba`,
    thumbnail: "/images/foto-pro/viaje19.webp",
  },
  {
    id: "img-viaje-020",
    title: "Lokalny targ (naturalne kolory, rozmyci ludzie, travel dokumentalnie)",
    area: "Fotografia Profesjonalna",
    category: "Ulica / lifestyle travel",
    summary:
      "Travel dokument: lokalny targ z fakturą, realnymi kolorami i rozmytymi ludźmi.",
    prompt: `Wygeneruj REALISTYCZNE zdjęcie w stylu travel dokumental na lokalnym targu.

DANE:
- Scena: stoiska z owocami/przyprawami/pieczywem, żywe ale naturalne kolory
- Ludzie: kilka osób, rozmytych lub od tyłu (bez dziwnych twarzy)
- Detale: realistyczne faktury, światło otoczenia targu

OŚWIETLENIE:
- Naturalne światło filtrowane lub miękkie światło wewnętrzne
- Umiarkowany kontrast, zachować detale

KAMERA:
- 35mm, f/2.2, ISO 800
- Ostrość na jednym głównym stoisku, umiarkowany bokeh w tle

KOMPOZYCJA:
- Warstwy głębi, poczucie „bycia tam”

OGRANICZENIA:
- Bez tekstu/znaków wodnych
- Unikać czytelnych szyldów i marek`,
    thumbnail: "/images/foto-pro/viaje20.webp",
  },
];
