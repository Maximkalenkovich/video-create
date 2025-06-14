import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";
import { useState } from "react";

const ffmpeg = new FFmpeg();

export const useFFmpegTrim = () => {
  const [isTrimming, setIsTrimming] = useState(false);

  const downloadTrimmedVideo = async (file: File, start: number, end: number) => {
    setIsTrimming(true);

    if (!ffmpeg.loaded) {
      await ffmpeg.load();
    }

    const inputName = "input.mp4";
    const outputName = "output.mp4";

    await ffmpeg.writeFile(inputName, await fetchFile(file));

    await ffmpeg.exec([
      "-i",
      inputName,
      "-ss",
      String(start),
      "-to",
      String(end),
      "-c",
      "copy",
      outputName,
    ]);

    const data = await ffmpeg.readFile(outputName);
    const trimmedBlob = new Blob([data], { type: "video/mp4" });
    const downloadUrl = URL.createObjectURL(trimmedBlob);

    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "trimmed.mp4";
    a.click();

    setIsTrimming(false);
  };

  return { isTrimming, downloadTrimmedVideo };
};
