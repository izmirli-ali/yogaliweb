import create from "zustand";

const useThemeStore = create((set) => ({
  theme: "dark",
  setTheme: (newTheme) => set(() => ({ theme: newTheme })),
}));

export default useThemeStore;
