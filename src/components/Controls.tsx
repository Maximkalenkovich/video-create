import { useTranslation } from "react-i18next";
import "../styles/Controls.css";
import { useCallback } from "react";

type Props = {
  currentTime: number;
  startTrim: number;
  endTrim: number;
  duration: number;
  setStartTrim: (value: number) => void;
  setEndTrim: (value: number) => void;
  isTrimming: boolean;
  onDownload: () => void;
};

export const Controls = ({
  startTrim,
  endTrim,
  duration,
  setStartTrim,
  setEndTrim,
  isTrimming,
  onDownload,
}: Props) => {
  const { t } = useTranslation();

  const handleStartTrimChange = useCallback(
    (value: number) => {
      const newValue = Math.min(Math.max(0, value), endTrim - 0.1);
      setStartTrim(newValue);
    },
    [endTrim, setStartTrim]
  );

  const handleEndTrimChange = useCallback(
    (value: number) => {
      const newValue = Math.min(Math.max(startTrim + 0.5, value), duration);
      setEndTrim(newValue);
    },
    [setEndTrim, startTrim]
  );

  return (
    <div className="controls">
      <div className="control-row">
        <label>{t("start")}:</label>
        <input
          className="input-number"
          type="number"
          value={startTrim.toFixed(1)}
          min={0}
          max={endTrim - 0.1}
          step={0.1}
          onChange={(e) => handleStartTrimChange(Number(e.target.value))}
        />

        <label>{t("end")}:</label>
        <input
          className="input-number"
          type="number"
          value={endTrim.toFixed(1)}
          min={startTrim + 0.1}
          max={duration}
          step={0.1}
          onChange={(e) => handleEndTrimChange(Number(e.target.value))}
        />
      </div>

      <button className="button" onClick={onDownload} disabled={isTrimming}>
        {isTrimming ? t("trimming") : t("download")}
      </button>
    </div>
  );
};
