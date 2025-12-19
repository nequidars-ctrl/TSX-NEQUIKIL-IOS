import signInTranslations from '../assets/i18n/sign-in-es-CO.json';

export const i18n = {
  signIn: signInTranslations.login,
  validatePassword: signInTranslations['validate-password'],
};

export const getText = (key: string): string => {
  const keys = key.split('.');
  let value: any = i18n;
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
};

