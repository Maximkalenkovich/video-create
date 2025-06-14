import { useCallback, useEffect, useRef, useState } from "react";

export const useVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [startTrim, setStartTrim] = useState(0);
  const [endTrim, setEndTrim] = useState(0);
  const [isDraggingStart, setIsDraggingStart] = useState(false);
  const [isDraggingEnd, setIsDraggingEnd] = useState(false);

  const handleUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setVideoURL(url);
    setVideoFile(file);
  };

  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    video.ontimeupdate = () => setCurrentTime(video.currentTime);
    video.onloadedmetadata = () => {
      setDuration(video.duration);
      setEndTrim(video.duration);
    };
  }, [videoURL]);

  const handleTimelineClick = useCallback(
    (x: number, containerWidth: number) => {
      if (!videoRef.current) return;
      const newTime = (x / containerWidth) * duration;

      if (Math.abs(newTime - startTrim) < Math.abs(newTime - endTrim)) {
        setStartTrim(newTime);
      } else {
        setEndTrim(newTime);
      }

      videoRef.current.currentTime = newTime;
    },
    [duration, startTrim, endTrim]
  );

  return {
    videoRef,
    videoURL,
    videoFile,
    duration,
    currentTime,
    startTrim,
    endTrim,
    isDraggingStart,
    isDraggingEnd,
    setStartTrim,
    setEndTrim,
    setIsDraggingStart,
    setIsDraggingEnd,
    handleUpload,
    handleTimelineClick,
  };
};
