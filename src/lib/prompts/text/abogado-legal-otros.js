// src/lib/prompts/text/abogado-legal-otros.js

export const textPromptsAbogadoLegalOtros = [
  {
    id: "legalotros-001",
    title: "Ogólna lista kontrolna prawna do uruchomienia biznesu online (szybko i realistycznie)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Przegląd 360° ryzyk i podstaw prawnych, aby sprzedawać online bez wpadek.",
    prompt: `Działaj jak doświadczony prawnik (senior) dla biznesów cyfrowych.

Dane wejściowe:
- Kraj/jurysdykcja (ogólnie).
- Typ biznesu (kurs, SaaS, e-commerce, agencja, afiliacje itp.).
- Kanały sprzedaży (www, IG, WhatsApp, marketplace).
- Rodzaje płatności (Stripe, PayPal, przelewy).
- Czy są dane osobowe (tak/nie) i co zbierasz.

Wygeneruj:
1) Priorytetyzowaną listę kontrolną prawną (wysokie/średnie/niskie), aby móc sprzedawać już teraz.
2) Minimalne rekomendowane polityki (regulamin, prywatność, zwroty).
3) Typowe ryzyka dla danego modelu i jak je ograniczyć.
4) „Czego nie obiecywać” w marketingu, aby uniknąć problemów.
5) 7-dniowy plan, żeby mieć ogarnięte minimum niezbędnych rzeczy.`,
    thumbnail: "",
  },

  {
    id: "legalotros-002",
    title: "Sporządzenie regulaminu (szablon ogólny + pola do uzupełnienia)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Pełna struktura regulaminu serwisu (bez cytowania przepisów) gotowa do wypełnienia.",
    prompt: `Działaj jak prawnik. Stwórz szablon Regulaminu (Terms & Conditions) dla strony internetowej.

Dane wejściowe:
- Nazwa firmy.
- Co sprzedajesz/oferujesz.
- Czy jest subskrypcja/członkostwo.
- Polityka anulowania/zwrotów.
- Kontakt i wsparcie.

Wygeneruj:
1) Kompletny dokument ze standardowymi sekcjami.
2) Kluczowe klauzule: akceptowalne użycie, płatności, zwroty, ograniczenie odpowiedzialności (ogólne), własność intelektualna (ogólna), rozwiązanie umowy.
3) Sekcje z [ZASTĄP] tam, gdzie brakuje informacji.
4) Końcową listę kontrolną przed publikacją.`,
    thumbnail: "",
  },

  {
    id: "legalotros-003",
    title: "Polityka zwrotów (jasna i przeciwsporowa)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Polityka napisana tak, by ograniczać chargebacki i reklamacje, w zrozumiałym języku.",
    prompt: `Działaj jak prawnik i specjalista ds. zapobiegania sporom.

Dane wejściowe:
- Produkt (cyfrowy/usługa).
- Okno zwrotu (dni lub „brak zwrotów”).
- Warunki (konsumpcja treści, pobrania, udział w rozmowach).
- Przypadki szczególne (duplikat, oszustwo, błąd techniczny).
- Kanał wsparcia.

Wygeneruj:
1) Finalną politykę zwrotów do wklejenia na stronę.
2) Sekcję przykładów „obowiązuje / nie obowiązuje”.
3) Tekst do checkout (2–3 linie), który zmniejsza spory.
4) Wewnętrzną procedurę wsparcia (krok po kroku).
5) Szablon odpowiedzi na e-maile o zwrot (3 tony: uprzejmy/stanowczy/bardzo stanowczy).`,
    thumbnail: "",
  },

  {
    id: "legalotros-004",
    title: "Analiza ryzyka obietnic reklamowych (claims) + bezpieczniejsza wersja",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Sprawdza obietnice marketingowe i przepisuje je na bardziej „do obrony” wersje.",
    prompt: `Działaj jak prawnik od reklamy i ochrony konsumenta.

Dane wejściowe:
- Lista 10–20 zdań/obietnic marketingowych.
- Produkt i grupa docelowa.
- Dowody, które masz na poparcie (opinie, dane, case studies).

Wygeneruj:
1) Tabelę: oryginalny claim | ryzyko (wysokie/średnie/niskie) | dlaczego | bezpieczniejsza wersja.
2) 10 przydatnych disclaimerów (bez „straszenia”).
3) Szybkie zasady dla zespołu marketingu (do/don't).
4) Szablon „dozwolonego testimonialu” (co uwzględnić / czego unikać).`,
    thumbnail: "",
  },

  {
    id: "legalotros-005",
    title: "Odpowiedź na chargeback/spór płatności (pakiet dowodów + narracja)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Buduje obronę dla operatora płatności: dowody, narracja i lista kontrolna.",
    prompt: `Działaj jak prawnik i specjalista ds. sporów płatniczych.

Dane wejściowe:
- Powód chargebacku (nieautoryzowane, usługa nieotrzymana itp.).
- Data zakupu i kwota.
- Dowody: logi dostępu, e-maile, IP, ticketing wsparcia, pobrania.
- Opublikowana polityka zwrotów (tak/nie).

Wygeneruj:
1) Krótką narrację (1–2 akapity) do przedstawienia operatorowi.
2) Listę kontrolną idealnych dowodów wg typu sporu.
3) Listę rekomendowanych załączników (zrzuty + jak je nazwać).
4) Szablon odpowiedzi do klienta (by spróbować rozwiązać wcześniej).
5) Jak poprawić proces, by ograniczyć kolejne chargebacki.`,
    thumbnail: "",
  },

  {
    id: "legalotros-006",
    title: "Polityka prywatności (prosty szkic) + inwentaryzacja danych",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Szablon + inwentaryzacja: jakie dane zbierasz, po co i jak je przetwarzasz.",
    prompt: `Działaj jak prawnik ds. prywatności (bez cytowania konkretnych przepisów).

Dane wejściowe:
- Jakie dane zbierasz (e-mail, imię, płatności, IP itp.).
- Narzędzia (analityka, e-mail marketing, płatności).
- Czy są nieletni (tak/nie).
- Kraje, w których sprzedajesz.

Wygeneruj:
1) Inwentaryzację danych (tabela): dane | cel | podstawa/powód | retencja | podmiot trzeci.
2) Politykę prywatności prostym językiem (gotową do wklejenia).
3) Sekcję cookies/analityka (ogólnie).
4) Checklist minimalnej zgodności (dostępy, usunięcie, kontakt).`,
    thumbnail: "",
  },

  {
    id: "legalotros-007",
    title: "Komunikat o cookies (mikrotekst + treść bannera)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Teksty do bannera cookies i strony cookies, bez technicznego żargonu.",
    prompt: `Działaj jak prawnik i UX writer.

Dane wejściowe:
- Czy używasz analityki (tak/nie).
- Czy robisz remarketing/reklamy (tak/nie).
- Język (neutralny hiszpański).

Wygeneruj:
1) Krótki tekst do bannera (2 wersje: minimalistyczna i bardziej szczegółowa).
2) Teksty do przycisków/akcji (zaakceptuj, odrzuć, konfiguruj).
3) Tekst na stronę cookies (sekcje + proste wyjaśnienie).
4) FAQ o cookies (6 pytań).`,
    thumbnail: "",
  },

  {
    id: "legalotros-008",
    title: "DMCA / zgłoszenie naruszenia (szablony do usuwania treści)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Szablony do zgłaszania kopii Twoich treści w sieciach społecznościowych lub na stronach.",
    prompt: `Działaj jak prawnik ds. własności intelektualnej (bez cytowania przepisów).

Dane wejściowe:
- Link do treści naruszającej.
- Link do treści oryginalnej.
- Dowód autorstwa (zrzuty ekranu, daty, pliki).
- Platforma (YouTube, IG, TikTok, www, hosting).

Wygeneruj:
1) Formalny e-mail/wniosek o takedown (szablon).
2) Krótką wiadomość do supportu platformy.
3) Listę dowodów do załączenia.
4) Tekst do naruszyciela (uprzejmy/stanowczy).
5) Checklist follow-up (24h, 72h, 7 dni).`,
    thumbnail: "",
  },

  {
    id: "legalotros-009",
    title: "Weryfikacja NDA/umowy poufności (red flags + usprawnienia)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Lista kontrolna do wykrywania typowych pułapek w NDA przed podpisaniem.",
    prompt: `Działaj jak prawnik. Przejrzyj NDA z perspektywy strony podpisującej.

Dane wejściowe:
- Wklej całe NDA albo kluczowe punkty.
- Twoja rola (odbiorca lub ujawniający).
- Jakie informacje udostępnisz.
- Czy znany jest termin (tak/nie).

Wygeneruj:
1) Red flags (lista) z wyjaśnieniem.
2) Jakie klauzule negocjować koniecznie.
3) Sugerowane brzmienie kluczowych punktów (ogólne).
4) Ryzyka, jeśli podpiszesz bez zmian.
5) E-mail negocjacyjny (2 wersje: uprzejma i stanowcza).`,
    thumbnail: "",
  },

  {
    id: "legalotros-010",
    title: "Instrukcja wewnętrzna: co robić po otrzymaniu pisma/wezwania prawnego (SOP)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Procedura dla zespołu: odpowiadać, dokumentować i eskalować bez paniki.",
    prompt: `Działaj jak prawnik korporacyjny. Stwórz SOP do obsługi zawiadomień prawnych.

Dane wejściowe:
- Typ biznesu.
- Kanały kontaktu (support email, legal itp.).
- Zespół (kto decyduje).
- Typowe zawiadomienia (copyright, konsumenckie, płatnicze, zniesławienie).

Wygeneruj:
1) SOP krok po kroku (pierwsze 2 godziny, 24h, 72h).
2) Szablony pierwszej odpowiedzi (bez przyznawania winy, prośba o informacje).
3) Checklist dokumentacji i zabezpieczenia dowodów.
4) Matrycę pilności (niska/średnia/wysoka) i działania.
5) „Błędy, których NIE wolno popełnić”.`,
    thumbnail: "",
  },

  {
    id: "legalotros-011",
    title: "Zasady dla społeczności (Discord/Telegram) + reguły anty-banowe",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Jasne zasady moderacji, wyrzucania i zachowania w społeczności.",
    prompt: `Działaj jak prawnik i autor polityk społeczności.

Dane wejściowe:
- Platforma (Discord/Telegram).
- Tematy wrażliwe (tak/nie).
- Czy są nieletni (tak/nie).
- Styl (surowy/luźny).

Wygeneruj:
1) Zasady społeczności (10–15 zasad).
2) Politykę moderacji (ostrzeżenia, zawieszenie, usunięcie).
3) Klauzulę odpowiedzialności i treści stron trzecich (ogólnie).
4) Szablony wiadomości moderacyjnych (uprzejme/stanowcze).
5) Listę praktyk zapobiegających konfliktom. `,
    thumbnail: "",
  },

  {
    id: "legalotros-012",
    title: "Klauzule dotyczące opinii i case studies (zgoda + wykorzystanie)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Tekst do uzyskania zgody i bezpiecznego wykorzystywania opinii klientów.",
    prompt: `Działaj jak prawnik. Sporządź tekst zgody na wykorzystanie opinii (testimonials).

Dane wejściowe:
- Format opinii (wideo, tekst, zrzut ekranu).
- Gdzie będzie użyte (www, reklamy, social media).
- Czy pokażesz imię/zdjęcie (tak/nie).
- Czy będą wyniki liczbowe (tak/nie).

Wygeneruj:
1) Pełny formularz/zgodę.
2) Krótką wersję do DM/WhatsApp.
3) Sekcję dot. wykorzystania wizerunku/imienia (opcjonalnie).
4) Zasady edycji opinii bez manipulowania sensem.
5) Sugerowany disclaimer, gdy wyniki są zmienne.`,
    thumbnail: "",
  },

  {
    id: "legalotros-013",
    title: "Polityka antyfraudowa i antynadużyciowa (odsprzedaż, współdzielenie kont, scraping)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Zasady ograniczające nadużycia bez uderzania w normalnych klientów.",
    prompt: `Działaj jak prawnik. Zaprojektuj politykę antyfraudową i antynadużyciową dla produktu cyfrowego.

Dane wejściowe:
- Produkt (kurs, biblioteka, członkostwo).
- Obserwowany typ nadużyć (współdzielone konta, scraping, odsprzedaż).
- Dostępne środki techniczne (limity, logi, blokada IP).

Wygeneruj:
1) Politykę do wklejenia na stronę (jasną, nieagresywną).
2) Tabelę: nadużycie | sygnał | działanie (ostrzeżenie/blokada/zwrot/ban).
3) Tekst powiadomienia e-mail (1. ostrzeżenie / 2. / zawieszenie).
4) Minimalne rekomendacje techniczne, by wesprzeć politykę.
5) FAQ dla uczciwych klientów.`,
    thumbnail: "",
  },

  {
    id: "legalotros-014",
    title: "Audyt prawny landing page (struktura + ryzyka + ulepszenia)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Audyt landing page pod kątem ryzyka: obietnice, gwarancje, zwroty, dowody.",
    prompt: `Działaj jak prawnik ds. konsumenckich i reklamy. Przejrzyj landing page.

Dane wejściowe:
- Wklej tekst landing page.
- Cena i oferta.
- Gwarancja (jeśli jest).
- Opinie (jeśli są).
- Grupa docelowa.

Wygeneruj:
1) Listę ryzyk wg sekcji (hero, bullets, opinie, gwarancja, FAQ).
2) Rekomendowane zmiany (alternatywny copy).
3) Gdzie dodać disclaimery, nie zabijając konwersji.
4) Checklist elementów obowiązkowych (kontakt, zwroty, regulamin).
5) „Bezpieczniejszą” wersję hero + głównych bulletów.`,
    thumbnail: "",
  },

  {
    id: "legalotros-015",
    title: "Polityka programu afiliacyjnego (zasady promocji + zakazy)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Zasady dla afiliantów, by uniknąć wprowadzającej w błąd reklamy lub spamu.",
    prompt: `Działaj jak prawnik. Stwórz politykę programu afiliacyjnego.

Dane wejściowe:
- Prowizja.
- Dozwolone kanały (Meta Ads, Google, e-mail, organic).
- Znak towarowy (jeśli dotyczy).
- Pożądane zakazy (spam, fałszywe zachęty, claimsy).

Wygeneruj:
1) Kompletną politykę afiliacyjną.
2) Listę zakazanych claimów i przykłady.
3) Zasady użycia marki i reklam.
4) Konsekwencje naruszeń (stopniowane).
5) Szablon e-maila ostrzegawczego + rozwiązanie współpracy.`,
    thumbnail: "",
  },

  {
    id: "legalotros-016",
    title: "Lekka due diligence przy zakupie biznesu (mikro-checklist)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Szybka lista kontrolna ryzyk przed zakupem firmy/aktywów cyfrowych.",
    prompt: `Działaj jak prawnik i audytor ryzyka. Zrób lekką listę due diligence.

Dane wejściowe:
- Typ biznesu (SaaS, ecom, content).
- Kluczowe aktywa (domena, listy, IP, umowy).
- Przychody i dostawcy.
- Kraj operacji.

Wygeneruj:
1) Checklist wg obszarów: finanse, prawo, IP, prywatność, operacje.
2) „Killer questions” (15), które ujawniają problemy.
3) Typowe red flags i jakich dowodów żądać.
4) Strukturę dokumentów do pozyskania.
5) 10-dniowy plan szybkiego przeglądu.`,
    thumbnail: "",
  },

  {
    id: "legalotros-017",
    title: "Przewodnik zgodności dla loterii/konkursów w social media (bez cytowania przepisów)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Bezpieczna struktura giveaway/konkursu, żeby uniknąć kłopotów.",
    prompt: `Działaj jak prawnik. Stwórz przewodnik dla giveaway/konkursu w social media.

Dane wejściowe:
- Platforma (IG/TikTok/FB).
- Kraje uczestników.
- Nagroda.
- Czas trwania.
- Mechanika (obserwuj, komentuj itp.).

Wygeneruj:
1) Regulamin konkursu (szablon) z [ZASTĄP].
2) Checklist ryzyk (wiek, kraje, podatki, fałszywi zwycięzcy).
3) Copy do posta i stories (w tym krótki disclaimer).
4) Wewnętrzny proces wyboru zwycięzcy i dokumentowania.
5) Wiadomości do zwycięzcy i do osób, które nie wygrały.`,
    thumbnail: "",
  },

  {
    id: "legalotros-018",
    title: "Klauzule dot. treści tworzonych przez użytkowników (UGC) i zgody",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Jak poprosić o zgodę i jasno określić wykorzystanie UGC (opinie, zdjęcia, wideo).",
    prompt: `Działaj jak prawnik. Stwórz teksty zgody na UGC.

Dane wejściowe:
- Jakie typy UGC (zdjęcie, wideo, opinia).
- Gdzie będzie użyte (reklamy, www, e-mail).
- Czy będzie płatne (tak/nie).

Wygeneruj:
1) Długi tekst zgody na UGC.
2) Krótką wersję do DM/WhatsApp.
3) Klauzulę odwołania zgody (opcjonalnie) i jak ją obsłużyć.
4) Checklist, jak przechowywać dowody zgody.
5) Rekomendowane disclaimery, gdy wyniki są zmienne.`,
    thumbnail: "",
  },

  {
    id: "legalotros-019",
    title: "Szablon „odpowiedzi prawnej” na negatywną opinię (bez zniesławiania, bez eskalacji)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Odpowiada na krytykę bez przyznawania odpowiedzialności i bez publicznego spalania mostów.",
    prompt: `Działaj jak prawnik + obsługa klienta. Sporządź odpowiedzi na negatywne recenzje.

Dane wejściowe:
- Treść recenzji.
- Kontekst (co naprawdę się stało).
- Polityka zwrotów (tak/nie).
- Ton (neutralny/uprzejmy/stanowczy).

Wygeneruj:
1) Odpowiedź publiczną (krótka, profesjonalna).
2) Wiadomość prywatną do rozwiązania (bardziej szczegółową).
3) Listę rzeczy, których NIE wolno mówić.
4) Wewnętrzny protokół zbadania sprawy.
5) 3 warianty zależnie od typu recenzji (oszustwo, nieporozumienie, realny problem).`,
    thumbnail: "",
  },

  {
    id: "legalotros-020",
    title: "Lista kontrolna ochrony marki (nazwa, logo, domeny, nadużycia)",
    area: "Prawnik i Prawo",
    category: "Inne",
    summary:
      "Praktyczne działania, by chronić markę i zapobiegać podszywaniu się.",
    prompt: `Działaj jak prawnik ds. własności intelektualnej. Zaprojektuj ogólny plan ochrony marki.

Dane wejściowe:
- Nazwa marki.
- Kraje docelowe.
- Kanały, gdzie istnieje (IG, TikTok, www).
- Czy są już naśladowcy (tak/nie).

Wygeneruj:
1) Checklist ochrony (domeny, handle, dokumentacja).
2) Miesięczną rutynę monitoringu (czego szukać).
3) Szablony: wiadomość do naśladowcy + zgłoszenie do platformy.
4) Zasady użycia marki dla współpracowników/afiliantów.
5) Plan działania, jeśli ktoś się podszywa (krok po kroku).`,
    thumbnail: "",
  },
];
