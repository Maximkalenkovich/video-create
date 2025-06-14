import { RefObject } from "react";
import "../styles/VideoPlayer.css";

type Props = {
  videoURL: string;
  videoRef: RefObject<HTMLVideoElement | null>;
};

export const VideoPlayer = ({ videoURL, videoRef }: Props) => (
  <video src={videoURL} ref={videoRef} controls className="video-player" />
);
