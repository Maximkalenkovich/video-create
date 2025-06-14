import { RefObject, MouseEvent } from "react";
import { formatTime } from "../utils/utils";
import "../styles/Timeline.css";

type Props = {
  timelineRef: RefObject<HTMLDivElement | null>;
  duration: number;
  currentTime: number;
  startTrim: number;
  endTrim: number;
  onTimelineClick: (e: MouseEvent<HTMLDivElement>) => void;
  onHandleMouseDown: (type: "start" | "end") => void;
};

export const Timeline = ({
  timelineRef,
  duration,
  currentTime,
  startTrim,
  endTrim,
  onTimelineClick,
  onHandleMouseDown,
}: Props) => {
  const adjustedCurrentTime = Math.max(currentTime, startTrim);
  const markerPosition = ((adjustedCurrentTime - startTrim) / (endTrim - startTrim)) * 100;

  return (
    <>
      <div className="timeline-container" ref={timelineRef} onClick={onTimelineClick}>
        <div
          className="timeline-selection"
          style={{
            left: `${(startTrim / duration) * 100}%`,
            width: `${((endTrim - startTrim) / duration) * 100}%`,
          }}
        />
        <div
          className="timeline-marker"
          style={{
            left: `${(startTrim / duration) * 100 + markerPosition * ((endTrim - startTrim) / duration)}%`,
          }}
        />
        <div
          className="timeline-handle"
          style={{ left: `${(startTrim / duration) * 100}%` }}
          onMouseDown={() => onHandleMouseDown("start")}
        />
        <div
          className="timeline-handle"
          style={{ left: `${(endTrim / duration) * 100}%` }}
          onMouseDown={() => onHandleMouseDown("end")}
        />
      </div>
      <div className="timeline-labels">
        <span>{formatTime(startTrim)}</span>
        <span>
          {formatTime(endTrim)} / {formatTime(duration)}
        </span>
      </div>
    </>
  );
};
