import ReactPlayer from "react-player";
import style from "./intro.module.scss";
import clsx from "clsx";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useState } from "react";

function Intro() {
  const [isMute, setIsMute] = useState(true);
  const handleMute = (e) => {
    console.log(e.target);
    setIsMute(!isMute);
  };
  return (
    <div className={clsx(style.wrapper)}>
      <ReactPlayer
        playing={true}
        volume={1}
        width="100%"
        height="100%"
        url="https://vimeo.com/322858764"
        muted={isMute}
        loop={true}
        className={clsx(style.videoIntro)}
      />
      <div className={clsx(style.infoIntro)}>
        <h1 className={clsx(style.title)}>Netflix Elite</h1>
        <p className={clsx(style.content)}>
          Netflix Elite Launch Campaign Director: Fernanda Weinfeld Production
          Company: Awake Film Agency: Akqa
        </p>
      </div>
      {isMute ? (
        <div className={clsx(style.iconVideo)} onClick={handleMute}>
          <VscMute />
        </div>
      ) : (
        <div className={clsx(style.iconVideo)} onClick={handleMute}>
          <VscUnmute />
        </div>
      )}
      <div className={clsx(style.bottom)}></div>
    </div>
  );
}

export default Intro;
