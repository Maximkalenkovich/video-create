import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Buttons.css";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const UploadButton = ({ onChange }: Props) => {
  const { t } = useTranslation();
  return (
    <label className="button-upload">
      {t("chooseVideo")}
      <input type="file" accept="video/*" onChange={onChange} style={{ display: "none" }} />
    </label>
  );
};
