import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  return (
    <div id={"alireza"} className="Alireza">
      <span id={"mmad"}>
        <ul>
          <li>
            <a href="">Alireza Akbrazadeh bejandi</a>
          </li>
          <li>
            <a href="">Saeed Blue green black</a>
          </li>
        </ul>
      </span>
      {t("Good Bay")}
    </div>
  );
};

export default App;
