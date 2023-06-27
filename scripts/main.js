import { CONTENT_PORTUGUESE } from "./translating/pt_BR.js";
import { CONTENT_ENGLISH } from "./translating/en_US.js";
import { Language } from "./translating/language.js";

let defineLanguage = Language.setLanguage();
let receivedLanguage =
  defineLanguage == "portuguese" ? CONTENT_PORTUGUESE : CONTENT_ENGLISH;

console.log(receivedLanguage.titleHtml);
