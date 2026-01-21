// src/lib/prompts/image/modelki-ugc-ads.js

export const imagePromptsModelkiUGCAds = [
  // =========================================================
  // KEEP: #1 y #2 (tal cual los pediste)
  // =========================================================
  {
    id: "img-ugc-model-001",
    title: "Selfie w lustrze w łazience (poranny UGC, naturalnie, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary:
      "Naturalny selfie-shot jak z telefonu: poranek, łazienka, vibe 'real life'.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC w pionie 9:16 (Reels/TikTok).

SCENA:
- Młoda kobieta (bardzo atrakcyjna, naturalna uroda), wiek 20–28
- Selfie w lustrze w nowoczesnej łazience (czyste kafelki, prysznic w tle)
- Telefon w dłoni zasłania częściowo twarz (realistycznie jak w selfie)

STYL UGC:
- Wygląda jak zdjęcie z iPhone/telefonu, bez studyjnej perfekcji
- Naturalna skóra z drobnymi detalami (delikatne piegi, subtelne zaczerwienienia)
- Lekki, codzienny outfit (beżowy top, kardigan lub bluza)

ŚWIATŁO:
- Miękkie dzienne światło z okna, delikatne cienie

KAMERA:
- Smartfonowy look, lekka kompresja, ostrość na twarz/dłoń
- Format 9:16, kadr od klatki piersiowej w górę

OGRANICZENIA:
- Bez tekstu, bez watermarków, bez logo marek
- Realistyczne dłonie (5 palców), bez zniekształceń twarzy`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc1.png",
  },
  {
    id: "img-ugc-model-002",
    title: "Talking head w sypialni (vlog vibe, miękkie światło, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary:
      "Ujęcie jak kadr z vloga: kobieta w sypialni, ciepły, autentyczny klimat.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNY kadr UGC w pionie 9:16 (jak stopklatka z TikToka).

SCENA:
- Atrakcyjna młoda kobieta 20–28
- Siedzi na łóżku w jasnej sypialni, w tle poduszki i minimalistyczny wystrój
- Trzyma mały mikrofon lub pilot (opcjonalnie), gest dłoni w trakcie mówienia

STYL:
- Naturalna mimika, lekki uśmiech, kontakt wzrokowy z kamerą
- Włosy lekko falowane, delikatnie 'nieperfekcyjne'
- Outfit: kremowa bluza lub beżowy sweter (bez logo)

ŚWIATŁO:
- Miękkie światło z okna, neutralne kolory, bez przesadnych filtrów

KAMERA:
- Smartfon, 9:16, kadr od pasa/klatki piersiowej w górę, lekki bokeh tła

OGRANICZENIA:
- Bez napisów i grafik
- Poprawna anatomia dłoni i twarzy`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc2.png",
  },

  // =========================================================
  // NOW: 18 wariantów "dziewczyna mówi do kamery" (ADS)
  // - zmieniamy modelkę + tło + klimat
  // - mało "robienia rzeczy", dużo "talking head / UGC ad"
  // - kilka close-upów
  // =========================================================

  {
    id: "img-ugc-ads-003",
    title: "Close-up twarzy (kamera bardzo blisko, naturalna skóra, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary:
      "Mocny close-up jak w hooku: twarz blisko obiektywu, ultra-realizm.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC w pionie 9:16 — close-up twarzy jak w reklamie UGC.

MODEL:
- Bardzo atrakcyjna młoda kobieta 20–28, naturalna uroda
- Skóra realistyczna: drobne pory, subtelne piegi, lekka nierówność koloru, minimalny makijaż
- Naturalne brwi, delikatny połysk ust

SCENA:
- Neutralne wnętrze (jasna ściana), dyskretne tło
- Kobieta patrzy prosto w kamerę, usta lekko otwarte jak w trakcie mówienia

ŚWIATŁO:
- Miękkie dzienne światło z okna z boku, bardzo naturalne

KAMERA:
- Smartfon, 9:16
- Bardzo blisko: kadr od brody do czoła (lub od nosa do czoła), ostrość na oczy
- Lekki naturalny szum/kompresja jak w telefonie

OGRANICZENIA:
- Bez tekstu/watermarku/logo
- Brak deformacji twarzy/oczu`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc3.png",
  },

  {
    id: "img-ugc-ads-004",
    title: "Talking head w salonie (jasne mieszkanie, sofa, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary:
      "Reklama UGC: dziewczyna mówi do kamery w salonie, vibe domowy i wiarygodny.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16, dziewczyna mówi do kamery.

MODEL:
- Atrakcyjna kobieta 22–30, naturalny wygląd, delikatny makijaż

SCENA:
- Jasny salon, sofa w tle, minimalistyczny wystrój, roślina (opcjonalnie)
- Telefon na statywie, kadr od klatki piersiowej w górę
- Naturalny gest dłoni jak w trakcie tłumaczenia (1 dłoń widoczna)

ŚWIATŁO:
- Miękkie światło dzienne z okna, neutralna kolorystyka

KAMERA:
- Smartfon look, lekki bokeh tła, ostrość na oczy

OGRANICZENIA:
- Bez tekstu, bez logo marek
- Realistyczne dłonie (5 palców)`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc4.png",
  },

  {
    id: "img-ugc-ads-005",
    title: "Talking head w kuchni (czyste tło, nowoczesna kuchnia, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary: "Kuchnia jako tło do reklamy UGC, proste i realistyczne.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16, kobieta mówi do kamery w kuchni.

MODEL:
- Atrakcyjna kobieta 20–28, naturalna uroda, realistyczna skóra

SCENA:
- Nowoczesna kuchnia, czyste blaty, neutralne kolory, tło lekko rozmyte
- Kobieta stoi lub siedzi przy blacie, patrzy prosto w obiektyw jak w reklamie
- Subtelny gest dłoni, naturalna mimika

ŚWIATŁO:
- Naturalne dzienne, miękkie, bez przepaleń

KAMERA:
- Smartfon, 9:16, kadr od pasa/klatki piersiowej w górę

OGRANICZENIA:
- Bez marek/napisów, bez watermarku`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc5.png",
  },

  {
    id: "img-ugc-ads-006",
    title: "Talking head w biurze domowym (laptop, neutral, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary:
      "Creator/coach vibe: biurko, laptop rozmyty, dziewczyna mówi do kamery.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16, kobieta mówi do kamery w home office.

MODEL:
- Atrakcyjna kobieta 23–32, wiarygodny 'creator' look, naturalna skóra

SCENA:
- Biurko, laptop i kubek w tle (bez marek), minimalistyczny wystrój
- Telefon na statywie, kobieta siedzi prosto, kontakt wzrokowy z kamerą
- Naturalny gest dłoni (jak podkreślanie punktu)

ŚWIATŁO:
- Miękkie światło z okna + delikatne doświetlenie, neutralne

KAMERA:
- 9:16, smartfonowy look, lekki bokeh tła, ostrość na oczy

OGRANICZENIA:
- Bez tekstu/logo/watermarku, realistyczne dłonie`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc6.png",
  },

  {
    id: "img-ugc-ads-007",
    title: "Talking head w aucie (pasażer, dzienne światło, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary: "Kadr w aucie jak szybki UGC ad: naturalne światło, tło miasta.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16, dziewczyna mówi do kamery w aucie.

MODEL:
- Atrakcyjna kobieta 20–30, naturalna uroda, realistyczna skóra

SCENA:
- Siedzi na miejscu pasażera, pas bezpieczeństwa opcjonalnie
- Tło: rozmyte miasto za szybą
- Telefon w dłoni lub na uchwycie, kontakt wzrokowy z kamerą

ŚWIATŁO:
- Dzienne światło z okna, miękkie cienie

OGRANICZENIA:
- Bez logo marek auta, bez tekstu, bez tablic rejestracyjnych`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc7.png",
  },

  {
    id: "img-ugc-ads-008",
    title: "Talking head przy oknie (backdrop: miasto, miękki bokeh, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary: "Bardzo wiarygodne tło: okno + rozmyte miasto, kadr jak z iPhone.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16, kobieta mówi do kamery stojąc przy oknie.

MODEL:
- Atrakcyjna kobieta 22–30, naturalny look, delikatne niedoskonałości skóry

SCENA:
- Duże okno, w tle rozmyte budynki/miasto, minimalistyczne wnętrze
- Kobieta w półprofilu lekko odwraca się do kamery, jak w reklamie UGC
- Naturalny gest dłoni

ŚWIATŁO:
- Miękkie światło dzienne (okno jako key light)

KAMERA:
- Smartfon, 9:16, ostrość na oczy, tło mocno rozmyte

OGRANICZENIA:
- Bez tekstu/logo/watermarku`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc8.png",
  },

  {
    id: "img-ugc-ads-009",
    title: "Talking head w pokoju hotelowym (premium, czysto, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary: "Tło jak z hotelu: łóżko, zasłony, premium vibe, ad UGC.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16, kobieta mówi do kamery w pokoju hotelowym.

MODEL:
- Atrakcyjna kobieta 24–32, premium natural look

SCENA:
- Pokój hotelowy: łóżko z białą pościelą, zasłony, minimalistyczne wnętrze
- Kobieta siedzi na łóżku lub stoi obok, patrzy do kamery jak w reklamie
- Naturalna mimika, lekki uśmiech

ŚWIATŁO:
- Miękkie dzienne, neutralne tony

KAMERA:
- Smartfon, 9:16, kadr od klatki piersiowej w górę, lekki bokeh

OGRANICZENIA:
- Bez tekstu/watermarku/logo`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc9.png",
  },

  {
    id: "img-ugc-ads-010",
    title: "Natural UGC talking frame (indoor, candid, ultra-realistic, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary:
      "Naturalny kadr jak wycięty z reklamy UGC — dziewczyna mówi, ale NIE nagrywa siebie.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC w formacie 9:16, wyglądające jak pojedyncza klatka z reklamy wideo.

MODEL:
- Bardzo atrakcyjna kobieta 22–30
- Naturalna uroda, realistyczna skóra (pory, delikatne niedoskonałości)
- Lekko otwarte usta, mimika jak w trakcie mówienia

SCENA:
- Wnętrze mieszkania lub hotelu (neutralne ściany, miękkie tło)
- Kamera ustawiona PRZED nią, jak w reklamie lub rozmowie
- Brak telefonu w dłoniach, brak selfie
- Naturalna postawa, delikatny gest ręką (opcjonalnie)

ŚWIATŁO:
- Miękkie naturalne światło dzienne (okno z boku)
- Zero filtrów beauty, zero sztucznego glow

KAMERA:
- Look smartfon / social ads
- Ostrość na oczy
- Lekko rozmyte tło
- Format 9:16 (TikTok / Reels)

OGRANICZENIA:
- Bez tekstu, bez watermarku, bez logo
- Brak telefonu w kadrze
- Brak teatralnych póz lub influencer vibe`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc10.png",
  },

  {
    id: "img-ugc-ads-011",
    title: "Selfie w ruchu na zewnątrz (bez gadania, naturalny kadr, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary:
      "Outdoor selfie jak z telefonu: naturalny moment, bez 'nagrywania się', bez mówienia do kamery.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC w pionie 9:16 (Reels/TikTok) — bez mówienia do kamery, bez 'nagrywania się'.

MODEL:
- Bardzo atrakcyjna młoda kobieta 20–30, naturalna uroda
- Realistyczna skóra: pory, delikatne piegi, subtelne zaczerwienienia (bez beauty filter)

SCENA:
- Zwykły chodnik/ulica lub parkowa alejka, tło mocno rozmyte (budynki/drzewa)
- Kobieta idzie i robi szybkie selfie z ręki (telefon w dłoni), patrzy lekko obok obiektywu (jak naturalnie)
- Delikatny wiatr we włosach, minimalny motion blur w tle (bardzo subtelny)

ŚWIATŁO:
- Pochmurne miękkie, naturalne, bez przepaleń

KAMERA:
- Smartfonowy look, lekka kompresja jak z social mediów
- 9:16, kadr od ramion w górę

OGRANICZENIA:
- Bez tekstu, bez watermarku, bez logo marek
- Bez czytelnych znaków/nazw sklepów
- Realistyczne dłonie (5 palców), brak deformacji`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc11.png",
  },

  {
    id: "img-ugc-ads-012",
    title:
      "Kawiarnia: candid selfie przy stoliku (bez gadania, naturalnie, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary:
      "Candid kadr z kawiarni: wygląda jak spontaniczne selfie, bez mówienia do kamery i bez 'nagrywania'.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC w pionie 9:16 — naturalne selfie w kawiarni, bez mówienia do kamery.

MODEL:
- Bardzo atrakcyjna młoda kobieta 20–30, naturalna skóra, minimalny makijaż
- Realistyczne detale: pory skóry, delikatne niedoskonałości, naturalne brwi

SCENA:
- Przytulna kawiarnia, kobieta siedzi przy stoliku
- Trzyma telefon w dłoni i robi spontaniczne selfie (jak do Stories), patrzy lekko w bok lub na ekran
- W tle subtelny bokeh świateł i rozmyte sylwetki ludzi (bez czytelnych napisów)

REKWIZYTY:
- Kubek kawy/matchy + laptop lub notes (opcjonalnie), wszystko bez marek

ŚWIATŁO:
- Ciepłe światło wnętrza + miękkie światło z okna, bardzo naturalne

KAMERA:
- Smartfon, 9:16, kadr od klatki piersiowej w górę, lekki bokeh tła

OGRANICZENIA:
- Bez tekstu/logo/watermarku
- Bez czytelnych nazw kawiarni/brandów
- Realistyczne dłonie (5 palców), brak deformacji`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc12.png",
  },

  {
    id: "img-ugc-ads-013",
    title: "Gym variant: inne wnętrze + inna modelka (UGC ad, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary:
      "Siłownia, ale inna osoba i inny klimat — bardziej premium, mniej 'selfie'.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16 na siłowni, kobieta mówi do kamery (reklama).

MODEL:
- Atrakcyjna kobieta 23–33, sportowy look, realistyczna skóra
- Włosy związane lub w luźnym koku, naturalny pot bardzo subtelny

SCENA:
- Nowoczesna siłownia premium, tło rozmyte, światła sufitowe
- Telefon na statywie przy maszynie, kobieta mówi do kamery, lekki gest dłoni

OUTFIT:
- Sportowy zestaw bez logo (ciemny top + legginsy)

ŚWIATŁO:
- Indoor, neutralno-chłodne, realistyczne

OGRANICZENIA:
- Bez tekstu/logo/watermarku
- Realistyczne dłonie, brak deformacji`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc13.png",
  },

  {
    id: "img-ugc-ads-014",
    title: "Close-up + ręka w kadrze (hook ad, bardzo realne, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary: "Close-up z gestem dłoni (jak 'wait' / 'listen'), bardzo adsowe.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16 — close-up z gestem dłoni jak w reklamie.

MODEL:
- Atrakcyjna kobieta 20–28, naturalna uroda, realistyczna skóra (pory, piegi)
- Emocja: zaskoczenie/ekscytacja w twarzy, jak w hooku

SCENA:
- Neutralne wnętrze, tło miękko rozmyte
- Jedna dłoń w kadrze (gest "stop" lub "wait"), realistyczne palce

KAMERA:
- Smartfon, 9:16, bardzo blisko, ostrość na oczy
- Lekki naturalny szum/kompresja jak w socialach

OGRANICZENIA:
- Bez tekstu/watermarku
- Dokładnie 5 palców, brak deformacji`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc14.png",
  },

  {
    id: "img-ugc-ads-015",
    title: "Talking head w korytarzu mieszkania (casual, miękko, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary: "Domowy korytarz, casual vibe, dziewczyna mówi do telefonu.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16 w mieszkaniu (korytarz), kobieta mówi do kamery.

MODEL:
- Atrakcyjna kobieta 20–30, naturalny look

SCENA:
- Jasny korytarz, drzwi w tle, minimalistycznie, czysto
- Telefon w dłoni (selfie) lub na statywie, kadr od ramion w górę
- Naturalna mimika 'w trakcie mówienia'

ŚWIATŁO:
- Miękkie dzienne, bardzo naturalne

OGRANICZENIA:
- Bez tekstu/logo/watermarku`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc15.png",
  },

  {
    id: "img-ugc-ads-016",
    title: "Talking head przy stole (jadalnia, neutral, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary: "Proste tło: jadalnia/stół, kadr jak reklama z telefonu.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16, kobieta mówi do kamery przy stole.

MODEL:
- Atrakcyjna kobieta 22–32, naturalna skóra, delikatny makijaż

SCENA:
- Stół, krzesło, neutralne wnętrze, tło lekko rozmyte
- Telefon na statywie, kadr od klatki piersiowej w górę
- Naturalny gest dłoni, kontakt wzrokowy

ŚWIATŁO:
- Miękkie światło dzienne, neutralne barwy

OGRANICZENIA:
- Bez tekstu/watermarku/logo`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc16.png",
  },

  {
    id: "img-ugc-ads-017",
    title: "Talking head na kanapie (wieczór, ciepła lampka, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary: "Wieczorne UGC ad: ciepła lampka w tle, cozy, wiarygodne.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16 wieczorem, kobieta mówi do kamery na kanapie.

MODEL:
- Atrakcyjna kobieta 23–33, naturalny look

SCENA:
- Kanapa, ciepła lampka w tle, bardzo subtelny bokeh
- Telefon na statywie, kadr od klatki piersiowej w górę
- Mimika jak w reklamie: 'mam coś ważnego do powiedzenia'

ŚWIATŁO:
- Ciepłe, miękkie, bez przesadnej saturacji

OGRANICZENIA:
- Bez tekstu/watermarku/logo`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc17.png",
  },

  {
    id: "img-ugc-ads-018",
    title: "Talking head z naturalnym oknem w tle (minimal studio, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary: "Minimal tło, okno w tle rozmyte, jak 'creator setup'.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16 w minimalistycznym wnętrzu, kobieta mówi do kamery.

MODEL:
- Atrakcyjna kobieta 20–30, naturalna uroda, realistyczna skóra

SCENA:
- Jasna ściana + okno w tle (rozmyte), czyste 'creator setup'
- Telefon na statywie, kadr od ramion w górę, kontakt wzrokowy
- Subtelny gest dłoni

ŚWIATŁO:
- Miękkie dzienne, okno jako key light

OGRANICZENIA:
- Bez tekstu/watermarku/logo`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc18.png",
  },

  {
    id: "img-ugc-ads-019",
    title:
      "Talking head w pokoju z plakatem (ale bez tekstu, estetyczny, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary:
      "Tło bardziej 'aesthetic' ale bez czytelnych napisów — dalej UGC ad.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16, kobieta mówi do kamery w estetycznym pokoju.

MODEL:
- Atrakcyjna kobieta 21–30, naturalny look

SCENA:
- Pokój z minimalistycznym plakatem/ramą na ścianie (bez czytelnego tekstu)
- Telefon na statywie, kadr od klatki piersiowej w górę
- Naturalna mimika i gest dłoni

ŚWIATŁO:
- Miękkie dzienne, neutralne

OGRANICZENIA:
- Zero czytelnych napisów, bez watermarku`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc19.png",
  },

  {
    id: "img-ugc-ads-020",
    title: "Close-up 3/4 profilu (cinematic, ale telefon, 9:16)",
    area: "Fotografia Profesjonalna",
    category: "Modelki AI (UGC Ads)",
    summary:
      "Close-up w półprofilu, mocny 'scroll-stopper', nadal telefonowy look.",
    prompt: `Wygeneruj ULTRA-REALISTYCZNE ujęcie UGC 9:16 — close-up półprofilu (3/4) jak w reklamie.

MODEL:
- Atrakcyjna kobieta 20–28, naturalna skóra (pory, piegi, delikatne zaczerwienienia)
- Mimika: mówi do kamery, naturalny ruch ust

SCENA:
- Neutralne wnętrze, tło miękko rozmyte
- Kamera bardzo blisko, widać detal skóry i rzęs

ŚWIATŁO:
- Miękkie światło z okna z boku, lekki cień po drugiej stronie twarzy

KAMERA:
- Smartfon, 9:16, ostrość na oku bliższym kamerze
- Delikatna kompresja jak w social media

OGRANICZENIA:
- Bez tekstu/watermarku/logo
- Bez deformacji oczu/nosa`,
    thumbnail:
      "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/images/ugc/ugc20.png",
  },
];
