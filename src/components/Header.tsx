import { ChangeEvent } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./theme/ThemeSwitcher";
import { UploadButton } from "./UploadButton";

interface Props {
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Header = ({ onFileChange }: Props) => {
  return (
    <div className="header-controls">
      <LanguageSwitcher />
      <ThemeSwitcher />
      <UploadButton onChange={onFileChange} />
    </div>
  );
};
