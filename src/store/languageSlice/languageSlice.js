import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n";

const initialState = {
  lang: localStorage.getItem("lang") || "ar",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      const newLang = action.payload;

      state.lang = newLang;

      i18n.changeLanguage(newLang);

      localStorage.setItem("lang", newLang);

      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = newLang;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
