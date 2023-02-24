import { useTranslation } from "react-i18next";
import { MdTranslate } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

export default function ChangeLanguage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLangChange = (lang: string) => {
    if (i18n.language !== lang) {
      window.localStorage.setItem("lang", lang);
      const oldLang = i18n.language;
      i18n.changeLanguage(lang);
      navigate(location.pathname.replace(oldLang, lang));
    }
  };

  return (
    // TODO: CREATE CHANGELANGUAGE
    <div>DROP DOWN </div>
  );
}
