// src/lib/prompts/text/soporte-tecnico-scripts.js

export const textPromptsSoporteTecnicoScripts = [
  {
    id: "sop-tech-001",
    title:
      "Uniwersalny skrypt diagnostyki technicznej (web/app): 12 pytań + drzewo decyzji",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Kompletny skrypt do diagnozowania incydentów technicznych bez marnowania czasu: pytania, gałęzie i następna akcja.",
    prompt: `Produkt: [web/aplikacja]
Typ zgłoszonego problemu: [nie ładuje / błąd / nie mogę się zalogować / itd.]
Poziom użytkownika: [podstawowy/średni/zaawansowany]
Kanał: [czat/email/WhatsApp]
Dostępne dane: [zrzut ekranu/URL/kod błędu]

Stwórz skrypt dla agenta, który zawiera:
1) Empatyczne otwarcie (2 warianty) + streszczenie problemu (parafraza).
2) 12 pytań diagnostycznych (w optymalnej kolejności) z:
   - co chcemy potwierdzić
   - jak o to poprosić nietechnicznym językiem
   - jaka odpowiedź jest oczekiwana
3) Drzewo decyzji (min. 18 gałęzi) “jeśli X → wtedy Y”, obejmujące:
   - przeglądarkę/urządzenie
   - sieć/VPN
   - rozszerzenia/adblock
   - cache/cookies
   - uprawnienia/role
   - sesję/2FA
4) “Szybkie poprawki” (8) z instrukcjami krok po kroku.
5) Sygnały prawdziwego buga (8) + kiedy eskalować do L2/inżynierii.
6) Checklistę danych do eskalacji (15 pól) + szablon wewnętrznego handoffu.
7) Wiadomość zamykającą z prewencją (3 warianty).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-002",
    title:
      "Skrypt: ‘Nie mogę się zalogować’ (hasło, 2FA, magic link, SSO) z rozwiązaniami wg scenariusza",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Kompletny skrypt dla problemów z logowaniem z gałęziami dla hasła, 2FA, linków, SSO i blokad.",
    prompt: `Metoda logowania: [email/hasło | magic link | Google | SSO]
Platforma: [web/aplikacja]
Region/kraj: [ ]
Komunikat błędu (jeśli jest): [ ]

Napisz skrypt wsparcia dot. logowania z:
1) Otwarciem + weryfikacją tożsamości (bez proszenia o hasła).
2) Diagnostyką blokami:
   A) Błędny email / konto nie istnieje
   B) Błędne hasło / reset nie dochodzi
   C) 2FA (kod nie dochodzi, aplikacja, rozjechany czas)
   D) Magic link wygasł / nie dochodzi
   E) SSO (domena, uprawnienia, SCIM jeśli dotyczy)
   F) Konto zablokowane / zbyt wiele prób
3) Dla każdego bloku:
   - jasne kroki (5–10)
   - co użytkownik powinien zobaczyć
   - alternatywne rozwiązanie, jeśli nie zadziała
4) Gotowe szablony:
   - prośba o zrzut ekranu (bez PII)
   - wyjaśnienie, dlaczego nie prosimy o hasło
   - potwierdzenie rozwiązania
5) Kryteria eskalacji (10) + minimalne dane (15).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-003",
    title:
      "Skrypt: błąd płatności / checkout nie działa (3DS, bank, środki, fraud, faktura) + komunikaty wg bramki",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt do szybkiego rozwiązywania nieudanych płatności z gałęziami wg przyczyny i gotowym copy dla klienta.",
    prompt: `Bramka płatnicza: [Stripe/PayPal/inne]
Model: [subskrypcja/jednorazowo]
Widoczne błędy: [wklej, jeśli są]
Kraj klienta: [ ]

Stwórz skrypt dla nieudanych płatności z:
1) Minimalnymi pytaniami (6) do diagnozy bez tarcia.
2) Drzewem decyzji (min. 16 gałęzi) wg przyczyn:
   - brak środków
   - limit bankowy
   - 3DS/OTP nieukończone
   - karta niewspierana
   - AVS/CVC
   - blokada antyfraudowa
   - VPN/lokalizacja
   - dane podatkowe
3) Dla każdej gałęzi:
   - ludzkie wyjaśnienie (bez obwiniania)
   - konkretne kroki
   - alternatywę (inna karta, przelew, ręczny link)
4) Szablony odpowiedzi (10) wg scenariusza.
5) Jak obsłużyć “pobrano mi 2 razy” (krok po kroku).
6) Kiedy eskalować i jakie logi prosić (bez ujawniania danych wrażliwych).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-004",
    title:
      "Skrypt: ‘Strona się nie ładuje / biała strona’ (web) — cache, rozszerzenia, DNS, status, HAR",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla białej strony lub nieskończonego ładowania z krokami w optymalnej kolejności.",
    prompt: `Dotknięty URL: [ ]
Przeglądarka: [Chrome/Safari/itd.]
Urządzenie: [ ]
Czy dotyczy wielu użytkowników? [tak/nie/nie wiem]

Stwórz skrypt z:
1) Szybkim sprawdzeniem: status page / incydenty / prace (co powiedzieć).
2) Krokami w kolejności (12–18):
   - tryb incognito
   - wyłączenie rozszerzeń/adblock
   - wyczyszczenie cache/cookies dla strony
   - zmiana przeglądarki
   - zmiana sieci
   - wyłączenie VPN/proxy
   - DNS/flush (jeśli dotyczy) w prostych słowach
3) Jakie informacje prosić na każdym kroku (bez przeciążania).
4) Jeśli nadal: jak zebrać dowody:
   - konsola (skopiować błędy)
   - plik HAR (jak wyeksportować)
   - zrzut z timestampem
5) Kryteria eskalacji + szablon wewnętrznego ticketa technicznego.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-005",
    title:
      "Skrypt: ‘Nie dostaję maili’ (reset, faktury, powiadomienia): spam, filtry, domeny firmowe",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt do rozwiązywania deliverability bez spiny: checklista dla Gmail/Outlook i eskalacja do IT.",
    prompt: `Typ maila: [reset/logowanie/faktura]
Dostawca: [Gmail/Outlook/firmowy]
Domena klienta: [jeśli dotyczy]

Stwórz skrypt z:
1) Checklistą w 8 krokach (wg prawdopodobieństwa).
2) Krokami wg dostawcy:
   - Gmail: Oferty/Spam/filtry/wyszukiwarka
   - Outlook: Junk/rules/blocked senders
3) Whitelistingiem: co dodać i jak (kroki).
4) Przypadkiem firmowym:
   - jak poprosić o pomoc IT klienta (szablon)
   - jakie dane zebrać (bez komplikowania)
5) Sygnałami, że mail został wysłany vs nie (co sprawdzić wewnętrznie).
6) Szablony odpowiedzi (8) + prewencyjne domknięcie.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-006",
    title:
      "Skrypt: ‘Nie mogę wgrać pliku’ (formaty, rozmiar, uprawnienia, sieć) + rozwiązania i alternatywy",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt do błędów uploadu z gałęziami wg rozmiaru, formatu, uprawnień, sieci i przeglądarki.",
    prompt: `Typ pliku: [obraz/wideo/pdf]
Rozmiar: [ ]
Komunikat błędu: [ ]
Platforma: [web/aplikacja]

Stwórz skrypt z:
1) Minimalną diagnostyką (7 pytań).
2) Drzewem decyzji (14 gałęzi) wg:
   - format niewspierany
   - przekroczony rozmiar
   - dziwna nazwa pliku / znaki specjalne
   - niestabilna sieć
   - uprawnienia/aparat/pamięć (mobile)
   - stara przeglądarka
3) Rozwiązaniami krok po kroku (10), w tym:
   - rekomendowaną kompresją (bez konkretnych narzędzi, jeśli nie chcesz)
   - konwersją formatu
   - uploadem przez inną przeglądarkę/apkę
4) Dowodami do eskalacji (logi/konsola) + szablon raportu wewnętrznego.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-007",
    title:
      "Skrypt: ‘Zduplikowano obciążenie / nieznane obciążenie’ (billing): weryfikacja, spokój i rozwiązanie",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Obsługa podwójnego obciążenia lub nieznanego charge’a z jasnym protokołem i spokojnym tonem.",
    prompt: `Bramka płatnicza: [ ]
Plan/produkt: [ ]
Data obciążenia: [ ]
Kwota: [ ]
Email klienta: [ ]

Stwórz skrypt z:
1) Uspokajającym otwarciem + walidacją emocji.
2) Bezpieczną weryfikacją tożsamości (bez wrażliwych danych).
3) Diagnostyką wg scenariuszy:
   - autoryzacja oczekująca vs realne obciążenie
   - odnowienie + dodatkowy zakup
   - podatki
   - wiele kont
4) Wewnętrznymi krokami weryfikacji (checklista).
5) Rozwiązaniem:
   - wyjaśnienie
   - zwrot (jeśli dotyczy)
   - zapobieganie kolejnym opłatom (anulowanie)
6) Szablonami (10) i kiedy eskalować do ryzyka/fraudu.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-008",
    title:
      "Skrypt: ‘Po aktualizacji coś się zepsuło’ + jak prowadzić użytkownika przez zmiany UX",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt do zgłoszeń po release: potwierdzenie wpływu, workaround i jasna komunikacja.",
    prompt: `Zgłoszona zmiana: [ ]
Wersja: [ ]
Funkcja: [ ]
Czy jest workaround? [tak/nie]

Stwórz skrypt z:
1) Jak potwierdzić, czy to bug vs zamierzona zmiana (pytania).
2) Jak tłumaczyć zmiany UX bez tonu defensywnego.
3) 8 przydatnych fraz do “gdzie to jest teraz”.
4) Tymczasowe workaroundy (jeśli dotyczy) + jak je komunikować.
5) Szablony:
   - potwierdzenie przyjęcia buga
   - update bez nowości
   - rozwiązanie / zamknięcie
6) Minimalne dane dla inżynierii (checklista 15).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-009",
    title:
      "Skrypt: ‘Działa wolno / wydajność’ (web/app): metryki, sieć, urządzenie, optymalizacja i eskalacja",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Protokół performance: właściwe pytania, quick wins i jak zmierzyć poprawę.",
    prompt: `Platforma: [web/aplikacja]
Co jest wolne: [ładowanie/akcja X/wyszukiwanie/eksport]
Region: [ ]
Urządzenie: [ ]

Stwórz skrypt z:
1) Zdefiniowaniem “wolno” prostą metryką (przybliżony czas).
2) Diagnostyką warstwową:
   - sieć
   - przeglądarka/apka
   - urządzenie
   - konto/dane (wolumen)
3) Quick wins (10) w rekomendowanej kolejności.
4) Jak prosić o użyteczne dowody bez przeciążania:
   - krótkie wideo ze stoperem
   - zrzut konsoli (jeśli web)
5) Kryteria eskalacji (8) + minimalne dane (15).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-010",
    title:
      "Skrypt: ‘Nie mogę eksportować/importować’ (CSV/JSON): formaty, encoding, limity i typowe błędy",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla export/import: walidacja szablonu, encoding, separatory i limity.",
    prompt: `Operacja: [eksport/import]
Format: [CSV/JSON]
Błąd: [ ]
Rozmiar: [wiersze/MB]
Platforma: [ ]

Stwórz skrypt z:
1) Checklistą walidacji (10) zanim zwalisz winę na system.
2) Gałęziami dla typowych problemów:
   - separator przecinek/średnik
   - encoding UTF-8
   - brak obowiązkowych kolumn
   - typy pól (data/liczba)
   - limity
3) Rozwiązaniami krok po kroku (12).
4) Szablonami wsparcia (8) + danymi do eskalacji, jeśli dalej nie działa.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-011",
    title:
      "Skrypt: uprawnienia/role — ‘Nie widzę X / nie mogę zrobić Y’ (diagnoza i rozwiązanie)",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla problemów uprawnień z jasnymi krokami i komunikatami do adminów.",
    prompt: `System ról: [admin/członek/itd.]
Zablokowana akcja: [ ]
Komunikat: [ ]

Stwórz skrypt z:
1) Potwierdzeniem aktualnej roli (jak poprosić o zrzut/ścieżkę).
2) 10 sygnałami, że to problem uprawnień vs bug.
3) Krokami:
   - poprosić admina o zmianę roli
   - sprawdzić, czy użytkownik jest w правильnym workspace
   - odświeżyć uprawnienia (wyloguj/zaloguj)
4) Szablonami:
   - wiadomość do użytkownika
   - wiadomość do przekazania adminowi
5) Kryteriami eskalacji (jeśli rola poprawna, a problem trwa) + minimalnymi danymi.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-012",
    title:
      "Skrypt: sesja/urządzenia — ‘wylogowuje mnie / sesja się kończy / pętla logowania’",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla pętli logowania, cookies, wielu sesji, SSO i blokad.",
    prompt: `Platforma: [web/aplikacja]
Częstotliwość: [zawsze/czasami]
Przeglądarka: [ ]
VPN: [tak/nie]

Stwórz skrypt z:
1) Szybkimi checkami (8).
2) Rozwiązaniami (12), w tym:
   - wyczyszczenie cookies dla domeny
   - wyłączenie blokowania cookies 3rd party (wyjaśnione)
   - sprawdzenie zegara urządzenia (2FA/SSO)
   - zamknięcie otwartych sesji (jeśli funkcja istnieje)
3) Dowodami: zrzuty, konsola, HAR.
4) Szablonami wsparcia (8) + eskalacją.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-013",
    title:
      "Skrypt: powiadomienia nie dochodzą (push/in-app/email): ustawienia, uprawnienia i test",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla powiadomień: settings, permisje, do-not-disturb i testy kontrolowane.",
    prompt: `Typ: [push/in-app/email]
Urządzenie: [iOS/Android/Web]
Zdarzenie, które powinno wysłać powiadomienie: [ ]

Stwórz skrypt z:
1) Potwierdzeniem ustawień w produkcie (kroki).
2) Dla push:
   - uprawnienia systemu
   - wyciszone powiadomienia
   - oszczędzanie baterii
3) Dla email:
   - podstawy deliverability
4) Dla in-app:
   - filtry/segmentacja
5) Testem kontrolowanym: jak wywołać zdarzenie testowe.
6) Szablonami (8) i checklistą eskalacji (15).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-014",
    title:
      "Skrypt: błędy sporadyczne — jak odtworzyć, odizolować zmienne i dobrze udokumentować",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla rzadkich przypadków: izolowanie warunków, zbieranie dowodów i unikanie pętli pytań.",
    prompt: `Objaw: [ ]
Częstotliwość: [1/10, 1/dzień]
Podejrzany kontekst: [sieć/dane/funkcja]

Stwórz skrypt z:
1) Pytaniami do izolacji zmiennych (12) wg:
   - godzina
   - wolumen danych
   - przeglądarka
   - feature flags
2) Jak poprosić o “kroki odtworzenia” bez frustracji (dokładny tekst).
3) Jak poprosić o minimalne dowody (wideo 20 s, zrzut).
4) Wewnętrznym szablonem dla inżynierii: pola + przykład.
5) Wiadomościami update (bez nowości) (3 warianty).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-015",
    title:
      "Skrypt: integracja z firmą trzecią nie działa (Zapier/Meta/Google) + limity wsparcia bez obwiniania",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla integracji: walidacja uprawnień, tokenów, limitów i ustalenie odpowiedzialności.",
    prompt: `Integracja: [ ]
Akcja: [ ]
Błąd: [ ]
Tokeny/klucze API: [tak/nie]

Stwórz skrypt z:
1) Checklistą połączenia (10).
2) Diagnostyką przyczyn:
   - token wygasł
   - niewystarczające uprawnienia
   - rate limits
   - zmiany po stronie dostawcy
   - webhooks nie działają
3) Rozwiązaniami krok po kroku (12) + workaroundem.
4) Szablonami:
   - prośba o zrzuty z narzędzia trzeciego
   - wyjaśnienie limitów wsparcia
   - skierowanie do supportu dostawcy (gotowa wiadomość)
5) Minimalnymi danymi do eskalacji wewnętrznej.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-016",
    title:
      "Skrypt: problem na telefonie (iOS/Android) — uprawnienia, cache aplikacji, reinstalacja, wersje",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt mobilny z krokami wg OS i checklistą kompatybilności.",
    prompt: `OS: [iOS/Android]
Wersja OS: [ ]
Wersja aplikacji: [ ]
Objaw: [ ]

Stwórz skrypt z:
1) Minimalnymi pytaniami (8).
2) Rozwiązaniami wg OS:
   - uprawnienia (kamera, mikrofon, pamięć)
   - zamknięcie apki / restart
   - czyszczenie cache (Android) / reinstalacja (iOS)
   - aktualizacja apki i OS
3) Minimalną kompatybilnością (jak to wyjaśnić).
4) Dowodami: screen recording, kroki.
5) Eskalacją: minimalne dane (model urządzenia, build itd.).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-017",
    title:
      "Skrypt: ‘Nie mogę zmienić emaila / danych rozliczeniowych’ (weryfikacja + kroki)",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Bezpieczna procedura dla wrażliwych zmian bez ryzyk dla konta.",
    prompt: `Żądana zmiana: [email / nazwa do faktury / VAT / karta]
Ryzyko: [wysokie]
Weryfikacja: [metoda]

Stwórz skrypt z:
1) Weryfikacją tożsamości (bez proszenia o niebezpieczne dane).
2) Krokami w produkcie (jeśli istnieją).
3) Scenariuszem: użytkownik nie ma dostępu do starego emaila.
4) Szablonami:
   - prośba o weryfikację
   - potwierdzenie zmiany
   - odmowa z powodu braku dowodów (z alternatywą)
5) Rejestrem wewnętrznym i eskalacją do security, jeśli podejrzane.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-018",
    title:
      "Skrypt: ‘Moje konto zostało przejęte’ — protokół bezpieczeństwa (kontrola, odzyskanie, prewencja)",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Playbook bezpieczeństwa dla supportu: natychmiastowe kroki, bezpieczna komunikacja i eskalacja.",
    prompt: `Zgłoszone sygnały: [nieautoryzowane zmiany/dziwne logowanie]
Czy użytkownik ma dostęp?: [tak/nie]
2FA: [tak/nie]

Stwórz skrypt z:
1) Pierwszą wiadomością (uspokajającą + pilną) + co zrobimy.
2) Natychmiastowym zabezpieczeniem:
   - reset hasła
   - włączenie 2FA
   - zamknięcie sesji
   - weryfikacja emaila konta
3) Minimalnymi dowodami do zebrania.
4) Kiedy tymczasowo zablokować konto i eskalować.
5) Szablonami:
   - instrukcje dla użytkownika
   - update w trakcie dochodzenia
   - zamknięcie z prewencją
6) Listą “czego nie robić” (10) dla agentów (privacy/legal).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-019",
    title:
      "Skrypt: ‘Widzę błąd 500/502/503’ — jak komunikować, gdzie sprawdzić i o co poprosić",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla błędów po stronie serwera: komunikacja, workaround, zbieranie danych i eskalacja.",
    prompt: `Błąd: [500/502/503]
Częstotliwość: [ ]
Ścieżka/funkcja: [ ]
Region: [ ]

Stwórz skrypt z:
1) Ludzką wiadomością: uznajemy problem + prosimy o 2 dane.
2) Sprawdzeniem status page/incydentu i jak o tym powiedzieć.
3) Bezpiecznymi workaroundami (5).
4) Minimalnymi danymi do eskalacji:
   - timestamp
   - request id
   - konto
   - kroki
   - środowisko
5) Szablonami dla:
   - trwającego incydentu
   - braku incydentu, ale badamy
   - rozwiązane`,
    thumbnail: "",
  },
  {
    id: "sop-tech-020",
    title:
      "Skrypt: ‘Nie działa w mojej firmie’ (firewalle, proxy, blokady domen) + szablon dla IT",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla środowisk korporacyjnych: proxy, whitelisting, porty i komunikacja z IT.",
    prompt: `Firma: [ ]
Objaw: [nie ładuje/nie loguje]
Sieć: [korporacyjna]
Czy IT jest dostępne? [tak/nie]

Stwórz skrypt z:
1) Typowymi sygnałami blokady korporacyjnej.
2) Krokami potwierdzenia:
   - hotspot z telefonu
   - test poza biurem
3) Ogólną listą wymagań do whitelisting:
   - domeny
   - porty
   - endpointy (jeśli dotyczy, zostaw placeholdery)
4) Szablonem maila do IT korporacyjnego (jasny, krótki, techniczny).
5) Jak robić follow-up bez frustrowania użytkownika.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-021",
    title:
      "Skrypt: ‘Działa innym, mi nie’ — izoluj konto vs środowisko vs dane",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt do izolowania: czy to problem konta, danych specyficznych czy środowiska użytkownika.",
    prompt: `Objaw: [ ]
Czy dotyczy tylko tego użytkownika? [tak]
Dane użytkownika: [plan/rola]

Stwórz skrypt z:
1) Wiadomością startową + hipotezą (bez obwiniania).
2) Krokami izolacji:
   - test na innym koncie
   - test w innej sieci
   - test w innej przeglądarce
   - feature flags/role
3) Jeśli wygląda na dane: co prosić (ID, minimalny przykład).
4) Szablonami update i eskalacji.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-022",
    title:
      "Skrypt: ‘Eksport trwa zbyt długo’ (kolejki, limity, joby) + jak ustawić oczekiwania",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla procesów asynchronicznych: kolejki, rozmiar, postęp i alternatywy.",
    prompt: `Proces: [export/import/render]
Wolumen: [ ]
Oczekiwany czas: [ ]
Plan: [ ]

Stwórz skrypt z:
1) Jak wytłumaczyć “kolejki” prostym językiem.
2) Pytaniami do oszacowania (6).
3) Alternatywami:
   - częściowy eksport
   - filtry
   - podział pliku
4) Szablonami:
   - potwierdzenie, że proces działa
   - update bez nowości
   - rozwiązanie
5) Kryteriami eskalacji (job utknął, timeouty) + minimalnymi danymi.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-023",
    title:
      "Skrypt: ‘Zmiany się nie zapisują’ (autosave) — uprawnienia, cache, konflikty i limity",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla problemów z zapisem: konflikty, autosave, uprawnienia i ciche błędy.",
    prompt: `Ekran/funkcja: [ ]
Czy zawsze występuje?: [ ]
Urządzenie: [ ]

Stwórz skrypt z:
1) Podstawowymi checkami (8) w kolejności.
2) Diagnostyką:
   - uprawnienia/rola
   - wygasła sesja
   - konflikt kart/zakładek
   - limity pól
   - błąd sieci
3) Rozwiązaniami (12) z instrukcjami.
4) Dowodami do eskalacji:
   - logi z konsoli
   - request id
   - krótkie wideo
5) Szablonami wsparcia (8).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-024",
    title:
      "Skrypt: ‘Webhooks nie dochodzą’ — weryfikacja, retry, podpisy i troubleshooting",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Zaawansowany skrypt dla integracji webhook: endpoint, logi, podpisy, retry i błędy.",
    prompt: `Webhook: [zdarzenie]
Endpoint: [URL]
Podpis/sekret: [tak/nie]
Logi klienta: [tak/nie]

Stwórz skrypt z:
1) Checklistą weryfikacji (10).
2) Diagnostyką awarii:
   - endpoint nie działa
   - 4xx/5xx
   - timeout
   - nieprawidłowy podpis
   - rate limiting
3) Retry: jak je wyjaśnić i jak testować.
4) Jakie logi prosić i jak (bez ujawniania sekretów).
5) Szablonami:
   - prośba o dowody techniczne
   - wyjaśnienie limitów wsparcia
   - domknięcie po rozwiązaniu`,
    thumbnail: "",
  },
  {
    id: "sop-tech-025",
    title:
      "Skrypt: ‘Aplikacja się wywala’ — kroki odtworzenia, wersja, crash logi i workaround",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla crashy na mobile/desktop: odtworzenie, dowody i alternatywy.",
    prompt: `Platforma: [iOS/Android/Desktop]
Wersja aplikacji: [ ]
Krok, który crashuje: [ ]
Częstotliwość: [ ]

Stwórz skrypt z:
1) Pytaniami do odtworzenia (10).
2) Natychmiastowymi działaniami (update, restart, reinstall).
3) Realistycznymi workaroundami (5).
4) Dowodami:
   - model urządzenia
   - OS
   - wideo
   - crash log (jeśli dotyczy — opisz jak)
5) Szablonami wsparcia (8) + eskalacją do inżynierii.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-026",
    title:
      "Skrypt: ‘Nie mogę pobrać/otworzyć treści’ (PDF/wideo/kurs) — DRM, przeglądarka, rozszerzenia",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla problemów z treścią cyfrową: odtwarzanie, pobrania, blokady, uprawnienia i alternatywy.",
    prompt: `Typ treści: [PDF/wideo/stream]
Platforma: [ ]
Przeglądarka: [ ]
Błąd: [ ]

Stwórz skrypt z:
1) Szybką diagnostyką (8).
2) Rozwiązaniami wg typu:
   - PDF: przeglądarka/reader, uprawnienia, blokady
   - Wideo: autoplay, DRM, przeglądarka, rozszerzenia
3) Alternatywami: inna przeglądarka, aplikacja, pobranie bezpośrednie (jeśli istnieje).
4) Dowodami do zebrania (zrzut, konsola).
5) Makrami (8) w spokojnym tonie.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-027",
    title:
      "Skrypt: ‘Błąd synchronizacji’ (niespójne dane) — stany, odświeżenie, konflikty",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla niespójnych danych: refresh, cache, joby, repliki i weryfikacja.",
    prompt: `Dane dotknięte: [ ]
Gdzie się różni: [web vs aplikacja]
Częstotliwość: [ ]

Stwórz skrypt z:
1) Jak opisać problem i potwierdzić go przykładami.
2) Checkami:
   - hard refresh
   - wyloguj/zaloguj
   - odczekać na job
   - sprawdzić filtry
3) Rozwiązaniami (10) i jak sprawdzić spójność.
4) Kiedy to bug: sygnały (8).
5) Minimalnymi danymi do eskalacji (ID, timestampy).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-028",
    title:
      "Skrypt: ‘Problem z 2FA’ — backup codes, zegar urządzenia, aplikacja uwierzytelniająca",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Protokół 2FA: nieprawidłowe kody, utrata urządzenia i bezpieczne odzyskanie.",
    prompt: `2FA: [TOTP/SMS/email]
Użytkownik stracił dostęp: [tak/nie]
Kody zapasowe: [tak/nie]

Stwórz skrypt z:
1) Diagnostyką wg scenariuszy (min. 8):
   - rozjechany zegar
   - migracja aplikacji
   - kody już użyte
   - SMS nie dochodzi
2) Krokami rozwiązywania bez kompromitowania bezpieczeństwa.
3) Procesem odzyskania (jeśli brak dostępu):
   - weryfikacja tożsamości
   - timeline
4) Szablonami wsparcia (10) + obowiązkowym rejestrem wewnętrznym.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-029",
    title:
      "Skrypt: ‘CORS/blocked by browser’ (web zaawansowane) — proste wyjaśnienie + dane dla inżynierii",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla rzadkich błędów web: wyjaśnij bez żargonu i eskaluj z dowodami.",
    prompt: `Błąd w konsoli: [wklej]
Akcja: [ ]
Środowisko: [prod/staging]
Przeglądarka: [ ]

Stwórz skrypt z:
1) Wiadomością do klienta (po ludzku), że to blokada przeglądarki.
2) Szybkim checkiem:
   - restrykcje korporacyjne
   - rozszerzenia
   - cookies/blokady
3) Prośbą o dowody:
   - zrzut konsoli
   - HAR
   - request id
4) Wewnętrznym szablonem dla dev:
   - kroki
   - expected/actual
   - logi
   - środowisko`,
    thumbnail: "",
  },
  {
    id: "sop-tech-030",
    title:
      "Skrypt: ‘Błąd 429 / rate limit’ — wyjaśnij limity, rozwiązania i upgrade’y",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla rate limiting: przyczyny, okna czasowe, backoff i alternatywy.",
    prompt: `Akcja wywołująca 429: [ ]
Plan użytkownika: [ ]
Aktualne limity: [jeśli masz]

Stwórz skrypt z:
1) Prostym wytłumaczeniem rate limitów.
2) Diagnostyką: burst vs steady usage.
3) Rozwiązaniami:
   - odczekanie okna
   - zmniejszenie częstotliwości
   - batch requests
   - caching
4) Szablonami:
   - wyjaśnienie + kroki
   - sugestia upgrade (bez nacisku)
5) Minimalnymi danymi do eskalacji, jeśli limit wygląda na błędny.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-031",
    title:
      "Skrypt: ‘Nie mogę podłączyć domeny / DNS’ — wyjaśnienie dla nietechnicznych + checklista rekordów",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt do podłączenia domeny: A/CNAME/TXT, propagacja, TTL i weryfikacja.",
    prompt: `Dostawca DNS: [GoDaddy/Cloudflare/itd.]
Oczekiwane rekordy: [A/CNAME/TXT]
Błąd: [ ]

Stwórz skrypt z:
1) Prostym wyjaśnieniem DNS i propagacji (bez żargonu).
2) Checklistą weryfikacji (12):
   - poprawny rekord
   - host
   - TTL
   - konflikty
3) Krokami dla rekordu A/CNAME/TXT z przykładami wartości (placeholdery).
4) Jak zweryfikować narzędziami (bez wskazywania konkretnych narzędzi, jeśli nie chcesz).
5) Szablonami prośby o zrzut panelu DNS (bez danych wrażliwych).
6) Kiedy eskalować i jakie dane wysłać do inżynierii.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-032",
    title:
      "Skrypt: ‘Moja API key nie działa’ — uprawnienia, scope’y, odwołanie i bezpieczna rotacja",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla problemów z API key: potwierdzenie scope’ów, regeneracja i dobre praktyki.",
    prompt: `API: [ ]
Błąd: [401/403/inne]
Użycie: [server/client]
Region: [ ]

Stwórz skrypt z:
1) Diagnostyką wg kodów:
   - 401 (autoryzacja)
   - 403 (uprawnienia)
   - 404 (endpoint)
2) Checklistą:
   - poprawny klucz
   - nagłówki
   - scope’y/role
   - środowisko prod vs test
3) Bezpieczną rotacją:
   - wygeneruj nowy, unieważnij stary
   - nie udostępniaj w ticketach
4) Szablonami wsparcia (8) + minimalnymi danymi do eskalacji.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-033",
    title:
      "Skrypt: ‘Problemy z kamerą/mikro’ (web/zoom-like) — uprawnienia OS/przeglądarki i testy",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla uprawnień kamery/mikro z krokami wg przeglądarki i OS.",
    prompt: `Platforma: [web]
Przeglądarka: [ ]
OS: [ ]
Urządzenie: [ ]

Stwórz skrypt z:
1) Szybkimi checkami (8).
2) Krokami włączania uprawnień w:
   - Chrome
   - Safari
   - Edge
3) Typowymi konfliktami:
   - inna aplikacja używa mikro
   - słuchawki Bluetooth
   - blokada korporacyjna
4) Kontrolowanym testem audio/wideo.
5) Szablonami wsparcia (8) + eskalacją.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-034",
    title:
      "Skrypt: ‘Moje treści nie pojawiają się / są nieuporządkowane’ — cache, filtry, indeksowanie i uprawnienia",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla brakujących danych: filtry, indeksacja, joby i uprawnienia.",
    prompt: `Treść: [ ]
Gdzie powinna się pojawić: [ ]
Użyty filtr: [ ]
Czas od utworzenia: [ ]

Stwórz skrypt z:
1) Potwierdzeniem filtrów/sortowania (kroki).
2) Weryfikacją uprawnień/roli/workspace.
3) Oczekiwaniem na indeksację: jak to wytłumaczyć.
4) Rozwiązaniami (10):
   - refresh
   - wyczyszczenie cache
   - ponowienie
5) Sygnałami buga (8) + danymi do eskalacji (ID/timestampy).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-035",
    title:
      "Skrypt: ‘Błąd przy wysyłaniu formularza’ — walidacje, captcha, cookies, rozszerzenia",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla błędów wysyłania formularzy, w tym niewidocznych walidacji i captcha.",
    prompt: `Formularz: [kontakt/checkout/rejestracja]
Błąd: [ ]
Przeglądarka: [ ]
Adblock: [tak/nie]

Stwórz skrypt z:
1) Szybką diagnostyką (8).
2) Rozwiązaniami:
   - uzupełnij obowiązkowe pola
   - wyłącz adblock
   - zezwól na cookies
   - spróbuj w incognito
   - spróbuj w innej sieci
3) Dowodami:
   - zrzut błędu
   - konsola
   - timestamp
4) Szablonami (8) + eskalacją.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-036",
    title:
      "Skrypt: ‘Problem z linkami’ (wygasają/nie otwierają się) — tracking, bezpieczeństwo, przekierowania",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla zepsutych/wygasłych linków: przyczyny, regeneracja i alternatywy.",
    prompt: `Typ linku: [magic link/pobranie/zaproszenie]
Komunikat: [wygasł/invalid]
Dostawca email: [ ]

Stwórz skrypt z:
1) Typowymi przyczynami (8) i jak je wyjaśnić.
2) Krokami:
   - wygeneruj nowy link
   - skopiuj/wklej do przeglądarki
   - otwórz w incognito
3) Przypadkiem firmy z filtrami anti-phishing.
4) Szablonami (8) i kryteriami eskalacji.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-037",
    title:
      "Skrypt: ‘Problem z odnowieniami’ — potwierdź status, płatności, pro-rata i dostęp",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla odnowienia, które nie weszło lub błędnego dostępu: billing + statusy subskrypcji.",
    prompt: `Plan: [ ]
Data odnowienia: [ ]
Status dostępu: [aktywny/nieaktywny]
Bramka: [ ]

Stwórz skrypt z:
1) Pytaniami diagnostycznymi (8).
2) Weryfikacjami wewnętrznymi (checklista):
   - status subskrypcji
   - ostatnia płatność
   - status faktury
   - pro-rata
3) Rozwiązaniami:
   - ponów obciążenie
   - reaktywuj
   - skoryguj dostęp
4) Szablonami (10) + eskalacją, jeśli dane są niespójne.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-038",
    title:
      "Skrypt: ‘Widzę zablokowane treści’ — weryfikacja planu, cache, synchronizacja, licencje",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla błędnego gatingu: plan/rola, cache, licencje i stany.",
    prompt: `Treść: [ ]
Plan użytkownika: [ ]
Sekcja: [ ]
Czy zmienia się po odświeżeniu?: [tak/nie]

Stwórz skrypt z:
1) Potwierdzeniem planu i uprawnień (kroki).
2) Checkami:
   - wyloguj/zaloguj
   - hard refresh
   - wyczyść cache strony
3) Weryfikacjami wewnętrznymi:
   - entitlement flags
   - data wygaśnięcia
4) Rozwiązaniem:
   - zsynchronizuj dostęp
   - przypisz licencję ponownie
5) Szablonami (8) + kryteriami eskalacji.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-039",
    title:
      "Skrypt: ‘Problem ze strefą czasową/datami’ (kalendarze, terminy) — zegar, region, DST",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla bugów dat: zegar urządzenia, timezone, DST i formaty.",
    prompt: `Funkcja: [kalendarz/termin]
Kraj: [ ]
Błędna godzina: [ ]
Urządzenie: [ ]

Stwórz skrypt z:
1) Sprawdzeniem zegara i strefy czasowej urządzenia.
2) Sprawdzeniem ustawień konta (jeśli istnieją).
3) Prostym wyjaśnieniem DST.
4) Rozwiązaniami (8) i weryfikacją.
5) Minimalnymi danymi do eskalacji, jeśli problem trwa.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-040",
    title:
      "Skrypt: ‘Bug na produkcji’ — jak opanować, komunikować, zebrać dowody i domknąć sprawę",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Playbook dla realnych bugów: ograniczenie skutków, update’y, koordynacja i finalna komunikacja.",
    prompt: `Bug: [ ]
Ważność: [P1–P4]
Workaround: [tak/nie]

Stwórz playbook z:
1) Początkową wiadomością do klienta (3 warianty wg ważności).
2) Ograniczeniem skutków:
   - workaround
   - ograniczenie akcji
   - wstrzymanie funkcji
3) Minimalnymi dowodami (checklista 15).
4) Update’ami:
   - jak często
   - co mówić BEZ obiecywania ETA
5) Domknięciem:
   - potwierdzenie z klientem
   - podsumowanie (wysoki poziom)
   - prewencja / wskazówki`,
    thumbnail: "",
  },

  {
    id: "sop-tech-041",
    title:
      "Skrypt: ‘Błąd 403/Forbidden’ — uprawnienia, WAF, region, cookies i uwierzytelnianie",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla 403: odróżnij uprawnienia od blokady bezpieczeństwa i rozwiąż szybko.",
    prompt: `Ścieżka: [ ]
Przeglądarka: [ ]
VPN: [tak/nie]
Region: [ ]

Stwórz skrypt z:
1) Diagnostyką wg hipotez (uprawnienia vs blokada).
2) Checkami (10):
   - wyloguj/zaloguj
   - cookies
   - VPN
   - inna sieć
3) Jeśli wygląda na WAF/blokadę:
   - prośba o publiczne IP (jeśli dotyczy) z ludzkim wyjaśnieniem
   - timestamp
4) Szablonami (8) + eskalacją do security/infra.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-042",
    title:
      "Skrypt: ‘Błąd 404’ — zły link vs usunięty zasób vs uprawnienia",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla 404: walidacja URL, poprawna nawigacja, uprawnienia i usunięte zasoby.",
    prompt: `URL: [ ]
Zasób: [ ]
Akcja: [ ]

Stwórz skrypt z:
1) Weryfikacją URL i czy jest nieaktualny (kroki).
2) Potwierdzeniem, czy zasób został usunięty lub przeniesiony.
3) Uprawnieniami/rolami: jak to potwierdzić.
4) Rozwiązaniami (8) + alternatywą (wyszukaj w aplikacji).
5) Szablonami (6) do szybkich odpowiedzi.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-043",
    title:
      "Skrypt: ‘Problem z cache’ — hard refresh, service workers, czyszczenie danych strony",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla dziwnych zachowań przez cache/service workers z bezpiecznymi krokami.",
    prompt: `Objaw: [stare UI / zmiany się nie pojawiają]
Przeglądarka: [Chrome/Safari]
Platforma: [web]

Stwórz skrypt z:
1) Prostym wyjaśnieniem cache.
2) Krokami:
   - hard refresh
   - czyszczenie cache/cookies dla strony
   - czyszczenie “site data”
   - wyłączenie service worker (jeśli dotyczy) w friendly stylu
3) Jak zweryfikować aktualizację.
4) Szablonami (6) i eskalacją, jeśli problem trwa.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-044",
    title:
      "Skrypt: ‘Zaproszenie do workspace nie działa’ — wygaśnięcie, email, uprawnienia i ponowne wysłanie",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla zaproszeń: wygaśnięcia, duplikaty kont, filtry firmowe i poprawne ponowne wysłanie.",
    prompt: `Zaproszenie: [workspace/team]
Email zaproszonego: [ ]
Czy wygasa: [tak/nie]
Dostawca: [ ]

Stwórz skrypt z:
1) Diagnostyką:
   - poprawny email vs alias
   - istniejące konto
   - zaproszenie wygasło
2) Krokami poprawnego ponownego wysłania.
3) Przypadkiem korporacyjnym (filtry IT).
4) Szablonami (8) dla admina i dla zaproszonego.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-045",
    title:
      "Skrypt: ‘Nie mogę zresetować hasła’ — deliverability, wygasłe tokeny, bezpieczeństwo",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla resetu hasła: mail nie dochodzi, token nieważny, blokady i bezpieczny flow.",
    prompt: `Email użytkownika: [ ]
Dostawca: [ ]
Czy dochodzą inne maile?: [tak/nie]
Token: [wygasł/invalid]

Stwórz skrypt z:
1) Checklistą deliverability (8).
2) Najlepszymi praktykami ponownego wysłania resetu.
3) Wyjaśnieniem tokenu, który wygasł, i rozwiązaniem.
4) Weryfikacją, jeśli podejrzenie przejęcia.
5) Szablonami (10) i eskalacją do security, jeśli dotyczy.`,
    thumbnail: "",
  },

  {
    id: "sop-tech-046",
    title:
      "Skrypt: ‘Nie mogę użyć funkcji X’ — weryfikuj feature flagi, rollout, plan i region",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla niedostępnych funkcji: rollout stopniowy, flagi, plany i regiony.",
    prompt: `Funkcja: [ ]
Plan: [ ]
Region: [ ]
Rollout: [stopniowy]

Stwórz skrypt z:
1) Potwierdzeniem planu/roli.
2) Potwierdzeniem regionu i rolloutu:
   - jak to wyjaśnić bez frustracji
3) Workaroundami/tymczasowymi alternatywami.
4) Szablonami:
   - “jeszcze niedostępne”
   - “już włączone — spróbuj tego”
5) Minimalnymi danymi do weryfikacji flag wewnętrznie.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-047",
    title:
      "Skrypt: ‘Błąd przy podłączeniu Google/Meta’ (OAuth) — scope’y, blokada popupów, cookies",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla OAuth: popupy, cookies, scope’y, wiele kont i uprawnienia.",
    prompt: `Dostawca OAuth: [Google/Meta]
Przeglądarka: [ ]
Błąd: [ ]

Stwórz skrypt z:
1) Szybkimi checkami:
   - zezwól na popupy
   - cookies 3rd party
   - wyłącz adblock
2) Gałęziami:
   - odmówione uprawnienia
   - złe konto
   - zmieniły się scope’y
3) Krokami bezpiecznego rozłączenia i ponownego połączenia.
4) Dowodami do eskalacji, jeśli problem po stronie dostawcy.
5) Szablonami (8).`,
    thumbnail: "",
  },
  {
    id: "sop-tech-048",
    title:
      "Skrypt: ‘Nie mogę wygenerować/pobrać faktury’ — dane podatkowe, statusy i dokumenty",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla faktur: dane podatkowe, VAT/IVA, status płatności i pobranie.",
    prompt: `Bramka: [ ]
Kraj: [ ]
Typ dokumentu: [paragon/faktura]
Problem: [nie ma/nie pobiera]

Stwórz skrypt z:
1) Weryfikacją statusu płatności (paid/pending/refunded).
2) Weryfikacją danych podatkowych (obowiązkowe pola).
3) Krokami pobrania dokumentu.
4) Przypadkami specjalnymi: naliczony podatek, firma, VAT.
5) Szablonami (10) + eskalacją, jeśli dokument się nie generuje.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-049",
    title:
      "Skrypt: ‘Antywirus/adblock blokuje’ — jak prowadzić bez obwiniania + alternatywy",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt dla blokad po stronie użytkownika: wyjaśnij, poproś o test i daj alternatywną ścieżkę.",
    prompt: `Produkt: [ ]
Bloker: [adblock/antywirus/korporacyjny]
Objaw: [nie ładuje/przycisk nie reaguje]

Stwórz skrypt z:
1) Sygnałami blokady (6).
2) Jak poprosić o test bez blokera (ludzkie komunikaty).
3) Alternatywą: czysta przeglądarka/nowy profil/incognito.
4) Co prosić jako dowód (zrzut rozszerzenia, lista).
5) Szablonami (8) i kiedy eskalować.`,
    thumbnail: "",
  },
  {
    id: "sop-tech-050",
    title:
      "Skrypt: świetne techniczne domknięcie — potwierdź rozwiązanie, udokumentuj przyczynę i zapobiegaj nawrotom",
    area: "Obsługa Klienta & SOPy",
    category: "Wsparcie techniczne (Skrypty)",
    summary:
      "Skrypt domknięcia ticketów technicznych: weryfikacja, prawdopodobna przyczyna, prewencja i zasoby.",
    prompt: `Poziom użytkownika: [ ]
Incydent: [ ]
Zastosowane rozwiązanie: [ ]

Stwórz skrypt domknięcia z:
1) Potwierdzeniem sukcesu (pytania i checki).
2) Streszczeniem przyczyny (po ludzku) bez obwiniania.
3) Prewencją:
   - 5 konkretnych rekomendacji
   - sugerowany link do dokumentacji (wymyśl tytuł, jeśli nie istnieje)
4) Rejestrem wewnętrznym:
   - tagi
   - kategoria
   - prawdopodobna przyczyna źródłowa (root cause)
5) 5 wariantami domknięcia wg tonu:
   - neutralny
   - bliski
   - premium
   - bardzo krótki (czat)
   - szczegółowy (email).`,
    thumbnail: "",
  },
];
