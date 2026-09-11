import en from '../content/en.json';
import es from '../content/es.json';

export const content = { en, es } as const;
export type ContentLocale = keyof typeof content;
