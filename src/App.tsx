import { useMemo, useRef } from "react";
import "./App.css";
import { useVideoPlayer } from "./hooks/useVideoPlayer";
import { useFFmpegTrim } from "./hooks/useFFmpegTrim";
import { VideoPlayer } from "./components/VideoPlayer";
import { Timeline } from "./components/Timeline";
import { Controls } from "./components/Controls";
import {
  createTimelineClickHandler,
  handleFileChangeFactory,
} from "./utils/utils";
import { Header } from "./components/Header";

const App = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const {
    videoRef,
    videoURL,
    videoFile,
    duration,
    currentTime,
    startTrim,
    endTrim,
    setStartTrim,
    setEndTrim,
    setIsDraggingStart,
    setIsDraggingEnd,
    handleUpload,
    handleTimelineClick,
  } = useVideoPlayer();

  const { isTrimming, downloadTrimmedVideo } = useFFmpegTrim();

  const onTimelineClick = useMemo(
    () => createTimelineClickHandler(timelineRef, handleTimelineClick),
    [timelineRef, handleTimelineClick]
  );

  const handleFileChange = useMemo(
    () => handleFileChangeFactory(handleUpload),
    [handleUpload]
  );

  const videoContent = useMemo(() => {
    if (!videoURL) return null;

    return (
      <div className="video-container">
        <VideoPlayer videoURL={videoURL} videoRef={videoRef} />
        <Timeline
          timelineRef={timelineRef}
          duration={duration}
          currentTime={currentTime}
          startTrim={startTrim}
          endTrim={endTrim}
          onTimelineClick={onTimelineClick}
          onHandleMouseDown={(type) => {
            if (type === "start") {
              setIsDraggingStart(true);
            } else {
              setIsDraggingEnd(true);
            }
          }}
        />
        <Controls
          currentTime={currentTime}
          startTrim={startTrim}
          endTrim={endTrim}
          duration={duration}
          setStartTrim={setStartTrim}
          setEndTrim={setEndTrim}
          isTrimming={isTrimming}
          onDownload={() =>
            videoFile && downloadTrimmedVideo(videoFile, startTrim, endTrim)
          }
        />
      </div>
    );
  }, [
    videoURL,
    videoRef,
    duration,
    currentTime,
    startTrim,
    endTrim,
    onTimelineClick,
    isTrimming,
    videoFile,
  ]);

  return (
    <div className="container">
      <Header onFileChange={handleFileChange} />
      {videoContent}
    </div>
  );
};

export default App;
