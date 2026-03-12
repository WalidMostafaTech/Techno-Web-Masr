import LoadingModal from "@/components/Loading/LoadingModal";
import { AiOutlineGlobal } from "react-icons/ai";
import { useLocation, useNavigate, useParams } from "react-router";

const LanguageSwitcher = () => {
  const { lang } = useParams(); // 👈 اللغة من الرابط

  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";

    const newPath = location.pathname.replace(/^\/(ar|en)/, `/${newLang}`);

    navigate(newPath);
  };

  return (
    <>
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-1 text-white border px-2 py-1 rounded-md cursor-pointer 
        hover:text-secondary hover:border-secondary transition-colors duration-300"
      >
        <span className="font-medium text-sm sm:hidden">
          {lang === "en" ? "AR" : "EN"}
        </span>
        <span className="font-medium text-sm hidden sm:inline">
          {lang === "en" ? "العربية" : "English"}
        </span>
        <AiOutlineGlobal />
      </button>

      {/* {openLoading && <LoadingModal />} */}
    </>
  );
};

export default LanguageSwitcher;
