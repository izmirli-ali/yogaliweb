import create from "zustand";

const useLanguageStore = create((set) => ({
  lang: "en",
  setLanguage: (newLang) => set(() => ({ lang: newLang })),
}));

export default useLanguageStore;
