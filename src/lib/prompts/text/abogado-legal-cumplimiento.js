// src/lib/prompts/text/abogado-legal-cumplimiento.js

export const textPromptsAbogadoLegalCumplimiento = [
  {
    id: "legalcumplimiento-001",
    title: "Program compliance od zera (dla MŚP/startupu)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Zaprojektuj praktyczny program zgodności: polityki, ryzyka, odpowiedzialni i dowody.",
    prompt: `Działaj jako prawnik ds. compliance. Zaprojektuj program zgodności od zera.

Dane wejściowe:
- Branża/segment.
- Kraj/główna jurysdykcja.
- Wielkość zespołu (liczba pracowników).
- Kanały sprzedaży (online, stacjonarnie, B2B/B2C).
- Postrzegane ryzyka (dane, reklama, płatności, dostawcy).
- Poziom formalności (podstawowy/średni/wysoki).

Wygeneruj:
1) Mapę ryzyk (10+ ryzyk) z prawdopodobieństwem/wpływem.
2) Minimalne polityki (lista) + cel każdej z nich.
3) Role i odpowiedzialności (kto zatwierdza, kto wykonuje).
4) Kontrole i dowody (co przechowywać, aby wykazać zgodność).
5) Roczny kalendarz (audyt wewnętrzny, szkolenia, przeglądy).
6) Checklistę „MVP compliance” (minimum konieczne do działania).
Nie cytuj artykułów prawa; oznacz „zależy od jurysdykcji”.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-002",
    title: "Macierz ryzyk prawnych (Legal Risk Register) gotowa do skopiowania",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Stwórz macierz ryzyk prawnych z kolumnami, kryteriami i przykładem wypełnienia.",
    prompt: `Działaj jako prawnik ds. ryzyka. Zbuduj macierz ryzyk prawnych (risk register).

Dane wejściowe:
- Biznes i model (jak zarabia).
- Kraje, w których działa.
- Kluczowe procesy (marketing, płatności, dane, wsparcie, dostawcy).
- Krytyczne aktywa (marka, baza klientów, platforma).

Wygeneruj:
1) Szablon z rekomendowanymi kolumnami (ryzyko, przyczyna, kontrola, właściciel, KPI, dowód itd.).
2) Kryteria punktacji prawdopodobieństwa i wpływu (1-5).
3) 15 typowych ryzyk dla tego typu biznesu (z przykładową punktacją).
4) Plan mitygacji dla każdego ryzyka (konkretne działania).
5) Jak przeglądać/aktualizować co miesiąc.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-003",
    title: "Niezbędne polityki wewnętrzne (szybki manual)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Zdefiniuj minimalny zestaw polityk wewnętrznych i jak je wdrożyć bez biurokracji.",
    prompt: `Działaj jako prawnik wewnętrzny (in-house). Potrzebuję szybkiego manuala polityk wewnętrznych.

Dane wejściowe:
- Typ firmy (usługi, e-commerce, SaaS, produkt informacyjny).
- Wielkość zespołu.
- Czy są contractorzy/freelancerzy.
- Czy przetwarzane są dane osobowe.

Wygeneruj:
1) Listę niezbędnych polityk (10-15) i co obejmuje każda z nich.
2) Który dokument jest „publiczny” (TOS/Polityka prywatności), a który „wewnętrzny”.
3) Rekomendowany format (1-2 strony na politykę), aby była przestrzegana.
4) Przepływ zatwierdzania i onboarding (jak szkolić nowych).
5) Minimalne dowody (co przechowywać) na potrzeby audytu.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-004",
    title: "Checklist zgodności dla marketingu i reklamy (obietnice, claims, referencje)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Unikaj roszczeń za wprowadzającą w błąd reklamę: checklista claims, zastrzeżeń i dowodów.",
    prompt: `Działaj jako prawnik ds. reklamy/ochrony konsumentów. Stwórz checklistę zgodności dla marketingu.

Dane wejściowe:
- Typ oferty (kurs, usługa, aplikacja, e-commerce).
- Typowe claims (wyniki, czas, pieniądze, zdrowie, „gwarantowane”).
- Kanały (TikTok, Meta Ads, email, landing).
- Użycie referencji/case studies (tak/nie).
- Polityka zwrotów.

Wygeneruj:
1) Checklistę weryfikacji copy (20+ punktów).
2) Listę „claims wysokiego ryzyka” i jak je przepisać.
3) Rekomendowane zastrzeżenia (prostym językiem).
4) Poprawne użycie referencji (co wolno/czego nie, dowody).
5) Szablon wewnętrznego zatwierdzania kampanii.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-005",
    title: "Podstawowa zgodność w obsłudze klienta (skargi, zwroty, spory)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Zaprojektuj SOP-y dla supportu, które zmniejszą chargebacki, skargi i eskalacje prawne.",
    prompt: `Działaj jako prawnik + operations. Zaprojektuj SOP-y obsługi klienta zorientowane na zgodność.

Dane wejściowe:
- Produkt (kurs, SaaS, fizyczny).
- Częstotliwość i typ skarg (dostęp, jakość, dostawa, obciążenia).
- Polityka zwrotów (tak/nie, terminy).
- Bramki płatnicze (Stripe/PayPal/inne).

Wygeneruj:
1) Drzewo decyzji dla supportu (zwrot / wymiana / eskalacja).
2) Szablony wiadomości (5) dla typowych przypadków.
3) Proces anti-chargeback (dowody, terminy, logi).
4) Rejestr incydentów (co zachować i jak długo).
5) Metryki zgodności (SLA supportu, wskaźnik sporów itd.).
Nie wymyślaj przepisów; skup się na najlepszych praktykach.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-006",
    title: "Polityka prywatności MVP (outline + tekst bazowy)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Stwórz minimalną, wykonalną politykę prywatności z polami [ZASTĄP] dla Twojej strony/apki.",
    prompt: `Działaj jako prawnik. Napisz Politykę Prywatności MVP.

Dane wejściowe:
- Typ biznesu.
- Zbierane dane (email, płatności, IP, analytics, cookies).
- Dostawcy (Stripe, Vercel, email marketing, analytics).
- Kraj/główna jurysdykcja.
- Czy są nieletni (tak/nie).

Wygeneruj:
1) Outline sekcji.
2) Pełny tekst bazowy z [ZASTĄP] tam, gdzie brakuje danych.
3) Prosta tabela: typ danych → cel → podstawa/uzasadnienie (bez cytowania prawa).
4) Prawa użytkownika (ogólnie) + jak złożyć wniosek.
5) Cookies (prosty tekst) i link do preferencji, jeśli dotyczy.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-007",
    title: "Zarządzanie dostawcami (third-party risk) + umowa ramowa",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Checklista oceny dostawców i kluczowe klauzule zmniejszające ryzyko.",
    prompt: `Działaj jako prawnik ds. zakupów/compliance. Zaprojektuj proces oceny dostawców.

Dane wejściowe:
- Typ dostawcy (cloud, marketing, freelancerzy, agencje).
- Dostęp do danych osobowych (tak/nie).
- Dostęp do systemów krytycznych (tak/nie).
- Poziom krytyczności (wysoki/średni/niski).

Wygeneruj:
1) Checklistę due diligence (bezpieczeństwo, legal, finanse).
2) Klasyfikację ryzyka i jakie kontrole wymaga każdy poziom.
3) Minimalne klauzule umowy (poufność, IP, dane, SLA, rozwiązanie).
4) Dowody/dokumenty, o które prosić.
5) Szablon „rocznego przeglądu” dostawcy.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-008",
    title: "Zgodność dla kursów/membershipów (dostęp, licencje, anty-udostępnianie)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Zasady i teksty ograniczające piractwo i nadużycia bez zabijania konwersji.",
    prompt: `Działaj jako prawnik dla produktów cyfrowych (kursy/membershipy).

Dane wejściowe:
- Model (dożywotni dostęp, roczny, miesięczny).
- Liczba użytkowników na konto (1/2/zespół).
- Ograniczenia (brak udostępniania, brak odsprzedaży, brak scrapingu).
- Środki techniczne (watermark, limit urządzeń itd.).
- Polityka zwrotów.

Wygeneruj:
1) Klauzule/Zasady anty-udostępniania (TOS) prostym językiem.
2) Politykę dopuszczalnego użycia (przykłady).
3) Proces: ostrzeżenie → zawieszenie → rozwiązanie (stopniowo).
4) Komunikaty dla użytkownika (3 szablony).
5) Checklistę dowodów na potrzeby sporów (logi, IP, dostępy).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-009",
    title: "Szkolenie wewnętrzne: plan 30 dni (kluczowy compliance)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Plan szkoleniowy, żeby zespół przestrzegał zasad (bez biurokracji): moduły + quizy.",
    prompt: `Działaj jako prawnik ds. compliance i projektant szkoleń. Stwórz 30-dniowy plan szkoleniowy.

Dane wejściowe:
- Typ firmy.
- Działy zespołu (marketing, support, dev, sprzedaż).
- Główne ryzyka (dane, claims, płatności, IP).
- Poziom startowy zespołu.

Wygeneruj:
1) Kalendarz 30 dni (codzienne mikro-lekcje).
2) 8 głównych modułów (tytuł + cele).
3) 10 pytań quizowych (z odpowiedzią) do oceny.
4) Minimalne materiały na moduł (1 strona).
5) Metryki: frekwencja, wyniki, spadek incydentów.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-010",
    title: "Obsługa incydentów prawnych: protokół + eskalacja",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Protokół dla incydentów: groźby prawne, roszczenia, naruszenia, DMCA/IP itd.",
    prompt: `Działaj jako prawnik wewnętrzny. Zaprojektuj protokół obsługi incydentów prawnych.

Dane wejściowe:
- Najbardziej prawdopodobne incydenty (zwroty, chargebacki, IP, dane).
- Kanały kontaktu (email, support, social).
- Dostępny zespół (kto decyduje).

Wygeneruj:
1) Klasyfikację incydentów (poziomy 1-3) z przykładami.
2) Sugerowane SLA odpowiedzi wg poziomu.
3) Role: kto odpowiada, kto zatwierdza, kto dokumentuje.
4) Checklistę dokumentacji (co zachować).
5) Szablony odpowiedzi (groźba prawna, roszczenie IP, poważna skarga).
Nie wymyślaj artykułów prawa; skup się na procesie i ryzykach.`,
    thumbnail: "",
  },

  // +10 para llegar a 20

  {
    id: "legalcumplimiento-011",
    title: "Miesięczny audyt zgodności (operacyjna checklista)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Miesięczna checklista do przeglądu marketingu, płatności, danych, supportu i umów bez marnowania czasu.",
    prompt: `Działaj jako compliance officer. Stwórz miesięczny audyt z checklistą.

Dane wejściowe:
- Typ biznesu.
- Narzędzia (bramka płatności, CRM, analytics, email).
- Wolumen klientów.

Wygeneruj:
1) Miesięczną checklistę wg obszarów (marketing, płatności, dane, support, dostawcy).
2) Dowód, który należy dołączyć do każdego punktu.
3) Wskaźniki, które uruchamiają działania korygujące.
4) Szablon miesięcznego raportu (1 strona).
5) Backlog usprawnień (jak priorytetyzować).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-012",
    title: "Poprawa copy, by zmniejszyć ryzyko (przed/po)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Bierze ryzykowne zdania i przepisuje je w 3 poziomach bezpieczeństwa bez zabijania konwersji.",
    prompt: `Działaj jako prawnik ds. reklamy + copywriter. Podam Ci claims marketingowe i chcę bezpiecznych przeróbek.

Dane wejściowe:
- Oryginalne zdania (lista).
- Produkt i nisza.
- Kanał (ads/landing/email).
- Ryzyko (zdrowie, pieniądze, gwarantowane wyniki).
- Ton marki.

Wygeneruj dla każdego zdania:
1) Diagnozę ryzyka (dlaczego jest ryzykowne).
2) Przeróbkę poziom 1 (agresywna, ale bezpieczniejsza).
3) Przeróbkę poziom 2 (zbalansowana).
4) Przeróbkę poziom 3 (bardzo zachowawcza).
5) Rekomendowane zastrzeżenie i sugerowany dowód.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-013",
    title: "Polityka retencji i usuwania danych (prosta i wykonalna)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Określa jak długo przechowywać, gdzie, kto ma dostęp i jak usuwać bez rozwalania operacji.",
    prompt: `Działaj jako prawnik + data governance. Stwórz prostą politykę retencji i usuwania.

Dane wejściowe:
- Typy danych (klienci, płatności, support, analytics).
- Narzędzia, w których są (Stripe, email, DB, Notion itd.).
- Potrzeby operacyjne (support, księgowość).
- Ryzyko wycieku (wysokie/średnie/niskie).

Wygeneruj:
1) Tabelę: typ danych → cel → sugerowana retencja (z notą „zależy od jurysdykcji”).
2) Procedurę usuwania i anonimizacji.
3) Kontrolę dostępu (role).
4) Kwartalną checklistę porządków.
5) Wewnętrzne dowody (logi, tickety).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-014",
    title: "Zgody i komunikacja (email/WhatsApp/SMS) — praktyczny przewodnik",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Jak zbierać zgody i poprawnie obsługiwać opt-out w marketingu.",
    prompt: `Działaj jako prawnik. Stwórz praktyczny przewodnik dla komunikacji handlowej.

Dane wejściowe:
- Kanały (email, WhatsApp, SMS).
- Typ odbiorców (leadsy, klienci, oba).
- Kraj/jurysdykcja.
- Narzędzie do wysyłek.

Wygeneruj:
1) Jaką zgodę zbierać i gdzie (checkout, formularz, onboarding).
2) Sugerowane teksty (3) do checkboxa i informacji.
3) Proces opt-out/wypisu (kroki) i jak to rejestrować.
4) Rekomendowaną częstotliwość i dobre praktyki antyspamowe.
5) Listę częstych błędów i jak ich unikać.
Nie cytuj przepisów; oznacz „zależy od jurysdykcji”.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-015",
    title: "Zgodność dla landingów z gwarancją (gwarancja, „bez ryzyka”, zwroty)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Sekcja gwarancji, która jest jasna i zmniejsza spory bez obiecywania niemożliwego.",
    prompt: `Działaj jako prawnik konsumencki + CRO. Zaprojektuj sekcję gwarancji na landing page.

Dane wejściowe:
- Typ produktu.
- Okres gwarancji (dni).
- Warunki (np. ukończenie modułów, dowody itd.).
- Czy B2C/B2B.
- Ryzyko nadużyć (wysokie/średnie/niskie).

Wygeneruj:
1) Copy sekcji gwarancji (jasne i perswazyjne).
2) Dokładne warunki (co obejmuje, a czego nie).
3) Proces zgłoszenia (kroki + terminy).
4) Zastrzeżenia ograniczające błędne interpretacje.
5) FAQ dot. gwarancji (8 pytań).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-016",
    title: "Zgodność dla sklepu / e-commerce (warunki, wysyłki, zwroty)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Checklista i teksty bazowe dla polityk wysyłki, zwrotów i warunków zakupu.",
    prompt: `Działaj jako prawnik dla e-commerce. Stwórz pakiet polityk i checklistę.

Dane wejściowe:
- Typ produktu (fizyczny/cyfrowy).
- Kraje, do których sprzedajesz.
- Czasy dostawy i przewoźnicy.
- Polityka zwrotów/wymian.
- Gwarancje, wady, reklamacje.

Wygeneruj:
1) Checklistę zgodności w checkout i po zakupie.
2) Politykę wysyłek (tekst bazowy).
3) Politykę zwrotów i wymian (tekst bazowy).
4) Politykę gwarancji/wad.
5) Komunikaty do maili transakcyjnych (3).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-017",
    title: "Zgodność dla użycia AI (zastrzeżenia + limity + odpowiedzialność)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Warunki dla produktów z AI: błędy, brak porady, odpowiedzialność i dopuszczalne użycie.",
    prompt: `Działaj jako prawnik. Potrzebuję klauzul/komunikatów dla produktu używającego AI.

Dane wejściowe:
- Produkt (kurs, narzędzie, prompty, SaaS).
- Co robi AI (rekomendacje, generowanie, automatyzacja).
- Ryzyko użycia (zdrowie, prawo, finanse, niskie).
- Czy użytkownik może przesyłać dane wrażliwe (tak/nie).

Wygeneruj:
1) Zastrzeżenie „to nie jest profesjonalna porada” (jeśli dotyczy).
2) Ostrzeżenia o błędach/ograniczeniach.
3) Odpowiedzialność użytkownika (weryfikacja, użycie na własne ryzyko).
4) Politykę dot. inputów (nie przesyłać danych wrażliwych) i moderację.
5) Krótkie teksty do UI (tooltipy i modale).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-018",
    title: "Zgodność w użyciu referencji i „przed/po”",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "SOP zbierania, weryfikacji, publikacji i aktualizacji referencji bez kłopotów.",
    prompt: `Działaj jako prawnik ds. reklamy. Zaprojektuj SOP dla referencji/case studies.

Dane wejściowe:
- Produkt i nisza.
- Kanały publikacji.
- Czy są wyniki finansowe/zdrowotne.
- Jak są zbierane (formularz, DM, wywiad).
- Czy są zachęty (rabat, prezent).

Wygeneruj:
1) Checklistę weryfikacji (minimalne dowody).
2) Zgodę/pozwolenie na użycie (tekst).
3) Zasady redakcji (czego unikać).
4) Rekomendowane zastrzeżenia.
5) Ważność i przeglądy: kiedy aktualizować lub usuwać.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-019",
    title: "Protokół zgodności dla freelancerów/contractorów",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Proces zatrudniania i kontroli contractorów: NDA, IP, dostępy, dostawy i zakończenie współpracy.",
    prompt: `Działaj jako prawnik + operations. Zaprojektuj protokół dla freelancerów/contractorów.

Dane wejściowe:
- Typ pracy (dev, design, support, marketing).
- Dostęp do danych/systemów (tak/nie).
- Czas współpracy.
- Deliverables.

Wygeneruj:
1) Minimalny pakiet dokumentów (NDA, IP, umowa, SOW).
2) Zarządzanie dostępami: zasada najmniejszych uprawnień.
3) Checklista onboardingu (dzień 1).
4) Checklista offboardingu (odebranie dostępów, zwroty, usunięcie danych).
5) Dowody i archiwizacja (co przechowywać).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-020",
    title: "Ocena zgodności przed skalowaniem reklam (pre-flight checklist)",
    area: "Prawnik i Prawo",
    category: "Zgodność",
    summary:
      "Checklista pre-flight, żeby skalować reklamy bez banów i roszczeń: copy, claims, polityki, strony.",
    prompt: `Działaj jako prawnik + performance marketer. Stwórz checklistę pre-flight przed skalowaniem ads.

Dane wejściowe:
- Produkt i obietnica.
- Kanał reklamowy.
- Stack landing/checkout.
- Polityka zwrotów/gwarancji.
- Użycie referencji/przed-po.

Wygeneruj:
1) Checklistę landing page (sekcje, zastrzeżenia, widoczne polityki).
2) Checklistę kreacji i copy (claims, porównania, „gwarantowane”).
3) Checklistę supportu (SLA, proces zwrotów, dowody).
4) Checklistę danych (cookies/analytics/zgody).
5) Kryteria Go/No-Go (co musi być koniecznie).`,
    thumbnail: "",
  },
];
