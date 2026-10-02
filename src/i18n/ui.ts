export const languages = ['pl', 'en'] as const;
export type Lang = (typeof languages)[number];

export const ui = {
  pl: {
    metaTitle: 'Łukasz Yot — Montażysta filmów do Social Mediów · Content Creator',
    metaDesc: 'Montażysta wideo i content creator.',
    ids: { about: 'o-mnie', courses: 'kursy', work: 'praca', collab: 'wspolpraca', contact: 'kontakt' },
    nav: { about: 'O mnie', work: 'Realizacje', collab: 'Współprace', contact: 'Kontakt' },
    hero: {
      title: 'Twoje treści zasługują na coś więcej.',
      sub: 'Od długich materiałów na YouTube po efektowne treści do mediów społecznościowych – tworzę przejrzyste i angażujące montaże, które przykuwają uwagę i sprawiają, że Twoje materiały prezentują się znakomicie.',
      cta: 'Napisz do mnie',
    },
    about: {
      label: 'O mnie',
      title: 'Cześć, jestem Łukasz.',
      p1: 'Montażysta wideo z doświadczeniem w fotografii, projektowaniu i tworzeniu rozwiązań cyfrowych.\n' +
        '\n' +
        'To połączenie pozwala mi spojrzeć na montaż z innej perspektywy.\n' +
        '\n' +
        'Nie skupiam się wyłącznie na tym, gdzie wykonać kolejne cięcie. Myślę o kompozycji, ruchu, typografii, dźwięku oraz o tym, jak wszystkie te elementy współgrają, tworząc spójne doświadczenie wizualne.\n' +
        '\n' +
        'Moje podejście jest proste:\n' +
        '\n' +
        'mniej zbędnego szumu.\n' +
        '\n' +
        'większa siła wizualnego przekazu.',
      listIntro: 'A oto z czym pracuję:',
      items: [
        { title: 'Edycja Wideo', text: 'Czysty, dynamiczny montaż oparty na narracji, dopasowany do Twoich odbiorców i platformy.' },
        { title: 'Social Media', text: 'Krótkie filmy stworzone z myślą o Instagramie, TikToku, YouTube Shorts i innych platformach społecznościowych.' },
        { title: 'Post-produkcja', text: 'Profesjonalna korekcja barwna, dopracowanie wizualne i finalna dostawa materiału zoptymalizowanego pod kątem Twojej platformy.' },
        { title: 'Sound design', text: 'Muzyka, efekty dźwiękowe i miks audio, dzięki którym każde cięcie nabiera większej mocy.' },
        { title: 'Motion design', text: 'Napisy, przejścia i animacje, które nadają charakteru, nie odwracając uwagi od treści.' },
      ],
    },
    courses: {
      label: 'Kursy',
      title: 'Kursy.',
      certAlt: 'Certyfikat ukończenia kursu montażu',
      name: 'Kurs Montażu',
    },
    work: {
      label: 'Realizacje',
      title: 'Wybrane realizacje.',
      intro: 'Każdy z tych filmów to inny problem do rozwiązania — inne tempo, inna publiczność, inny cel.',
    },
    collab: {
      label: 'Współprace',
      title: 'Z kim już pracowałem.',
      intro: 'Projekty, marki, twórcy — z którymi miałem okazję popracować.',
    },
    contact: {
      label: 'Kontakt',
      title: 'Stwórzmy coś, co warto obejrzeć.',
      sub: 'Masz materiał wideo, który wymaga profesjonalnej obróbki?\n' +
          '\n' +
          'Niezależnie od tego, czy chodzi o film na YouTube, kampanię w mediach społecznościowych, relację z wydarzenia czy krótką formę wideo – prześlij mi szczegóły i porozmawiajmy o Twoim projekcie.\n' +
          '\n' +
          'Opowiedz mi, nad czym pracujesz.\n' +
          '\n' +
          'Odpowiem w ciągu 24 godzin.',
      cta: 'Napisz do mnie',
    },
    footer: 'montaż wideo º social media º content creator',
  },

  en: {
    metaTitle: 'Łukasz Yot — Video editing · Social media · Content Creator',
    metaDesc: 'Video editor and content creator.',
    ids: { about: 'about', courses: 'courses', work: 'work', collab: 'collabs', contact: 'contact' },
    nav: { about: 'About', work: 'Work',collab: 'Collabs', contact: 'Contact' },
    hero: {
      title: 'I turn raw footage into content people want to watch.',
      sub: 'From long-form YouTube videos to high-impact social content — I create clean, engaging edits designed to hold attention and make your content look its best.',
      cta: 'Get in touch',
    },
    about: {
      label: 'A little about me',
      title: "Hi, I'm Łukasz.",
      p1: 'a video editor with a background in photography, design and digital development.\n' +
          '\n' +
          'That combination gives me a different perspective on editing.\n' +
          '\n' +
          'I\'m not just looking at where to make the next cut. I\'m thinking about composition, movement, typography, sound and how everything works together as one visual experience.\n' +
          '\n' +
          'My approach is simple:\n' +
          '\n' +
          'less unnecessary noise,\n' +
          'more visual impact.',
      listIntro: "Here's what I work with today:",
      items: [
        { title: 'Video Editing', text: 'Clean, dynamic and story-driven edits tailored to your audience and platform.' },
        { title: 'Social Media Content', text: 'Short-form videos designed for Instagram, TikTok, YouTube Shorts and other social platforms.' },
        { title: 'Post-Production', text: 'Professional color correction, visual polish and final delivery optimized for your platform.' },
        { title: 'Sound design', text: 'Music, sound effects and audio mixing that make every cut feel more impactful.' },
        { title: 'Motion design', text: 'Titles, captions, transitions and animations that add personality without distracting from the content.' },
      ],
    },
    courses: {
      label: 'Education',
      title: 'Education.',
      certAlt: 'Video editing course completion certificate',
      name: 'Editing Course',
    },
    work: {
      label: 'Work',
      title: 'Selected work.',
      intro: 'A selection of projects created for creators, brands and social media.',
    },
    collab: {
      label: 'Collaborations',
      title: "Who I've worked with.",
      intro: "Projects, brands, creators I've had the chance to work with.",
    },
    contact: {
      label: 'Contact',
      title: "Let's create something worth watching.",
      sub: "Have footage that needs a professional touch?\n" +
          "\n" +
          "Whether it's a YouTube video, social media campaign, event recap or short-form content, send me the details and let's talk about your project.\n" +
          "\n" +
          "Tell me what you're working on.\n" +
          "\n" +
          "I'll get back to you within 24 hours.",
      cta: 'Get in touch',
    },
    footer: 'video editing º social media º content creator',
  },
} as const;
