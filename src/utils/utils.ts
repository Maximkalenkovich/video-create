import { ChangeEvent, RefObject, MouseEvent } from "react";

export const formatTime = (seconds: number) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
};

export const handleFileChangeFactory = (handleUpload: (file: File) => void) => {
  return (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(file);
  };
};

export const createTimelineClickHandler = (
  timelineRef: RefObject<HTMLDivElement | null>,
  handleTimelineClick: (offsetX: number, width: number) => void
) => {
  return (e: MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    handleTimelineClick(e.clientX - rect.left, rect.width);
  };
};
