import download from '../../videos/download.mp4';
import { forwardRef, useImperativeHandle, useRef } from "react";

const Video = (props, ref) => {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    }
  }))

  return (
    <video 
      ref={videoRef}
      src={download}
      width={280}
    />
  );
}

export default forwardRef(Video);