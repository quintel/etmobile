const settings = {
  en: { doesSupportExplanations: false },
  nl: { doesSupportExplanations: true }
};

export const DEFAULT_LANG = 'nl';

export default (lang) => {
  if (settings.hasOwnProperty(lang)) {
    return settings[lang];
  }

  return settings[DEFAULT_LANG];
};
