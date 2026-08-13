export type Lang = "en" | "de";

export const defaultLang: Lang = "en";

export const translations = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "nav.contact": "Contact",

    "hero.greeting": "Hey there 👋",
    "hero.title": "Software Developer",
    "hero.subtitle": "Full-Stack Applications & Modern Web Development",
    "hero.desc":
      "Building responsive web apps including step-chef, set-point, and NexusFinance.",
    "hero.connect": "Let's Connect",
    "hero.github": "GitHub Profile",

    "projects.title": "Projects",
    "projects.subtitle": "Key projects and applications",
    "projects.viewGithub": "GitHub",

    "cv.title": "CV / Resume",
    "cv.profileTitle": "Profile",
    "cv.profileDesc": "[ Add your personal profile / introduction here ]",
    "cv.experienceTitle": "Experience",
    "cv.experienceDesc": "[ Add your work experience / roles here ]",
    "cv.educationTitle": "Education",
    "cv.educationDesc": "[ Add your educational background here ]",
    "cv.skillsTitle": "Skills",
    "cv.skillsDesc": "[ Add your technical skills here ]",
    "cv.certificationsTitle": "Certifications",
    "cv.certificationsDesc": "[ Add your certifications here ]",

    "contact.title": "Contact",
    "contact.subtitle": "Get in touch for collaborations or inquiries.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.placeholder":
      "[ Add your contact details / form configuration here ]",
  },
  de: {
    "nav.home": "Startseite",
    "nav.projects": "Projekte",
    "nav.cv": "Lebenslauf",
    "nav.contact": "Kontakt",

    "hero.greeting": "Hallo 👋",
    "hero.title": "Software-Entwickler",
    "hero.subtitle": "Full-Stack Webanwendungen & Moderne Software",
    "hero.desc":
      "Entwicklung von Projekten wie step-chef, set-point und NexusFinance.",
    "hero.connect": "Kontakt aufnehmen",
    "hero.github": "GitHub-Profil",

    "projects.title": "Projekte",
    "projects.subtitle": "Ausgewählte Projekte und Anwendungen",
    "projects.viewGithub": "GitHub",

    "cv.title": "Lebenslauf",
    "cv.profileTitle": "Profil",
    "cv.profileDesc":
      "[ Füge hier dein persönliches Profil / deine Einleitung hinzu ]",
    "cv.experienceTitle": "Berufserfahrung",
    "cv.experienceDesc":
      "[ Füge hier deine Berufserfahrung / Stationen hinzu ]",
    "cv.educationTitle": "Ausbildung",
    "cv.educationDesc": "[ Füge hier deine Ausbildung / dein Studium hinzu ]",
    "cv.skillsTitle": "Fähigkeiten",
    "cv.skillsDesc": "[ Füge hier deine technischen Fähigkeiten hinzu ]",
    "cv.certificationsTitle": "Zertifikate",
    "cv.certificationsDesc": "[ Füge hier deine Zertifikate hinzu ]",

    "contact.title": "Kontakt",
    "contact.subtitle": "Nimm einfach Kontakt auf für Anfragen oder Projekte.",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.placeholder":
      "[ Füge hier deine Kontaktdaten / dein Formular hinzu ]",
  },
} as const;

export function useTranslations(lang: Lang = "en") {
  return function t(key: keyof (typeof translations)["en"]) {
    return translations[lang]?.[key] || translations["en"][key] || key;
  };
}
