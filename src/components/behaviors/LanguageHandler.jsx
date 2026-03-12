import { useEffect } from "react";
import { useParams } from "react-router";
import i18n from "@/i18n";

const LanguageHandler = () => {
  const { lang } = useParams();

  useEffect(() => {
    if (!lang) return;

    i18n.changeLanguage(lang);

    localStorage.setItem("lang", lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return null;
};

export default LanguageHandler;
