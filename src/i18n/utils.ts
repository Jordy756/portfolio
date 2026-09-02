import { ui } from "./ui";

export const defaultLanguage = 'en';
export const languages = ['en', 'es'] as const;

export type Language = (typeof languages)[number];

export const getCurrentLanguage = (currentLanguage: string | undefined): Language => {
  return (currentLanguage ?? defaultLanguage) as Language;
};

export const useTranslations = (lang: keyof typeof ui) => {
  const localizedUI: Record<string, string> = ui[lang];

  return function t(key: keyof (typeof ui)[typeof defaultLanguage]) {
    return key in localizedUI ? localizedUI[key] : ui[defaultLanguage][key];
  };
}
