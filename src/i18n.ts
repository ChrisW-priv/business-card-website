export const locales = [
  { code: "en", nativeName: "English", prefix: "/en" },
  { code: "pl", nativeName: "Polski", prefix: "/pl" },
] as const;

export type Language = (typeof locales)[number]["code"];
export type Page = "home" | "blog" | "cv";
const pageSegment: Record<Page, string> = {
  home: "",
  blog: "/blog",
  cv: "/cv",
};
export const pathFor = (lang: Language, page: Page) =>
  `${locales.find((locale) => locale.code === lang)!.prefix}${pageSegment[page]}/`;

export const copy = {
  en: {
    title: "Krzysztof Watras — Backend, Data & AI Systems Engineer",
    description:
      "Krzysztof Watras is a backend, data and AI systems engineer based in Warsaw. Explore his work and get in touch.",
    location: "Warsaw, Poland",
    socials: "Contact and social profiles",
    elsewhere: "See also",
    externalSite: "Diagramik",
    blog: "Blog",
    languageLabel: "Language",
    blogTitle: "Blog — Krzysztof Watras",
    blogDescription: "The blog is not published yet.",
    blogHeading: "A place for ideas. Soon.",
    blogBody:
      "The blog is not ready yet. In the meantime, you can get to know me here or find me on LinkedIn or GitHub.",
    backHome: "Back to who I am",
    sectionNav: "On this page",
    whoami: "Who I am",
    cvNav: "CV",
    cvTitle: "CV — Krzysztof Watras",
    cvDescription:
      "CV of Krzysztof Watras, backend, data and AI systems engineer: selected work and experience.",
    cvHeading: "CV",
    contactNav: "Get in touch",
    skip: "Skip to content",
    portrait: "Cartoon portrait of Krzysztof Watras",
    home: "Krzysztof Watras, home",
    greeting: "Hi, I’m Chris",
    bio: "I’m naturally curious about the world and how it works. I love taking things apart, tinkering, learning something new. I spent years heads-down in work, and now I’m looking at what else is out there. Colleagues know me for getting things done, friends for my dry humor. Away from the screen, I’ve started running, and I’m getting a bit too interested in the science of exercise.",
    workTitle: "Selected work",
    workIntro: "A few things I’ve helped bring into the world.",
    projects: [
      {
        company: "Axpo Polska",
        category: "Energy systems",
        title: "Making battery power work at scale",
        description:
          "Led a five-person team integrating a ~200 MW battery storage portfolio with Poland’s balancing energy market. Built an auditable, event-driven system on Google Cloud, from architecture through production operations.",
      },
      {
        company: "Axpo Polska",
        category: "Applied AI",
        title: "Turning calls into useful insight",
        description:
          "Built a GDPR-conscious pipeline that processes 4,000 recorded calls a month with Gemini on Vertex AI, turning conversations into structured data for quality control and analytics.",
      },
      {
        company: "Independent",
        category: "Product",
        title: "Diagramik",
        description:
          "Founded a diagram-as-code tool with natural-language editing. Designed and built the product across backend, frontend and cloud infrastructure.",
        link: "Visit Diagramik",
      },
    ],
    contactTitle: "Text me.",
    contactIntro: "For anything business-related, text me on LinkedIn.",
    linkedinLabel: "Text me on LinkedIn",
  },
  pl: {
    title: "Krzysztof Watras — Inżynier systemów backendowych, danych i AI",
    description:
      "Krzysztof Watras tworzy systemy backendowe, rozwiązania danych i produkty AI. Mieszka w Warszawie. Poznaj jego projekty i skontaktuj się z nim.",
    location: "Warszawa, Polska",
    socials: "Kontakt i profile społecznościowe",
    elsewhere: "Zobacz też",
    externalSite: "Diagramik",
    blog: "Blog",
    languageLabel: "Język",
    blogTitle: "Blog — Krzysztof Watras",
    blogDescription: "Blog nie został jeszcze opublikowany.",
    blogHeading: "Miejsce na pomysły. Już wkrótce.",
    blogBody:
      "Blog nie jest jeszcze gotowy. Na razie możesz poznać mnie tutaj albo znaleźć mnie na LinkedIn lub GitHub.",
    backHome: "Wróć do strony o mnie",
    sectionNav: "Na tej stronie",
    whoami: "O mnie",
    cvNav: "CV",
    cvTitle: "CV — Krzysztof Watras",
    cvDescription:
      "CV Krzysztofa Watrasa, inżyniera systemów backendowych, danych i AI: wybrane projekty i doświadczenie.",
    cvHeading: "CV",
    contactNav: "Kontakt",
    skip: "Przejdź do treści",
    portrait: "Ilustrowany portret Krzysztofa Watrasa",
    home: "Krzysztof Watras, strona główna",
    greeting: "Cześć, tu Krzychu",
    bio: "Z natury jestem ciekawy świata i tego, jak działa. Uwielbiam rozkręcać rzeczy na części, majsterkować i uczyć się czegoś nowego. Przez lata byłem pochłonięty pracą, a teraz rozglądam się, za czymś innym. W pracy znają mnie z tego że dowożę, a przyjaciele z suchego poczucia humoru. Poza pracą, zacząłem biegać i wciągnąłem się w teorię treningu.",
    workTitle: "Wybrane projekty",
    workIntro: "Kilka rzeczy, które pomogłem wprowadzić w życie.",
    projects: [
      {
        company: "Axpo Polska",
        category: "Energetyka",
        title: "Magazyny energii na dużą skalę",
        description:
          "Kierowałem pięcioosobowym zespołem integrującym portfel magazynów energii o mocy ok. 200 MW z polskim rynkiem bilansującym. Stworzyliśmy audytowalny system oparty na zdarzeniach w Google Cloud — od architektury po utrzymanie produkcyjne.",
      },
      {
        company: "Axpo Polska",
        category: "AI w praktyce",
        title: "Wnioski z rozmów telefonicznych",
        description:
          "Zbudowałem zgodny z wymogami RODO proces przetwarzania 4000 nagranych rozmów miesięcznie za pomocą Gemini w Vertex AI. Zamienia rozmowy w uporządkowane dane do kontroli jakości i analiz.",
      },
      {
        company: "Własny projekt",
        category: "Produkt",
        title: "Diagramik",
        description:
          "Założyłem narzędzie do tworzenia diagramów za pomocą kodu, z edycją w języku naturalnym. Zbudowałem produkt od backendu i interfejsu po infrastrukturę chmurową.",
        link: "Zobacz Diagramik",
      },
    ],
    contactTitle: "Napisz do mnie.",
    contactIntro: "Sprawy biznesowe — napisz do mnie na LinkedIn.",
    linkedinLabel: "Napisz na LinkedIn",
  },
} as const;
