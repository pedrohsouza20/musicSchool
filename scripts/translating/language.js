export class Language {
  constructor() {}

  static setLanguage(language) {
    if (language) {
      window.localStorage.setItem("user_language", language);
      return language;
    }
    if (localStorage.user_language) {
      return localStorage.user_language;
    }
    return "portuguese";
  }
}
