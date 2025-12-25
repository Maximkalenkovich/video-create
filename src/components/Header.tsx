import { ChangeEvent } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./theme/ThemeSwitcher";
import { UploadButton } from "./UploadButton";

interface Props {
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
console.log('342342424234')
console.log('new comm')
console.log('new comm2')
console.log('new comm3')
export const Header = ({ onFileChange }: Props) => {
  return (
    <div className="header-controls">
      <LanguageSwitcher />
      <ThemeSwitcher />
      <UploadButton onChange={onFileChange} />
    </div>
  );
};
