import { useState, useRef } from "react";
import loveGif from "./assets/love.gif";
import sadgif1 from "./assets/sad1.gif";
import sadgif2 from "./assets/sad2.gif";
import sadgif3 from "./assets/sad3.gif";
import sadgif4 from "./assets/sad4.gif";
import sadgif5 from "./assets/sad5.gif";
import sadgif6 from "./assets/sad6.gif";
import sadgif7 from "./assets/sad7.gif";


const bgMusicUrl = "/music/music.mp3";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const yesButtonSize = noCount * 16 + 18;

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setMusicPlaying(true);
          console.log("Music playing!");
        })
        .catch((error) => {
          console.error("Audio play error:", error);
        });
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
        setMusicPlaying(false);
      } else {
        audioRef.current.play();
        setMusicPlaying(true);
      }
    }
  };

  const handleNoClick = () => {
    playMusic();
    setNoCount((prev) => prev + 1);
  };

  const getSadGif = () => {
    const gifs = [sadgif1, sadgif2, sadgif3, sadgif4, sadgif5, sadgif6, sadgif7];
    return gifs[Math.min(noCount, gifs.length - 1)];
  };

  const getNoButtonText = () => {
    const phrases = [
      "No 😐",
      "Are you sure? 🥺",
      "Really sure? 😢",
      "Think again! 😣",
      "Last chance! 😖",
      "Surely not? 😟",
      "You might regret this! 😕",
      "Give it another thought! 😞",
      "Have a heart! 🥹",
      "You're breaking my heart 💔",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-zinc-900 backdrop-blur-sm">
      {/* Background Music */}
      <audio ref={audioRef} loop preload="auto" src={bgMusicUrl} />

      <button
        onClick={toggleMusic}
        className="absolute top-4 text-4xl right-4 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        title={musicPlaying ? "Pause music" : "Play music"}
      >
        {musicPlaying ? "🔊" : "🔇"}
      </button>

      {yesPressed ? (
        <>
          <img className="w-60 mb-6" src={loveGif} alt="happy" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-600 text-center">
            Ok Yayyyyy!!! 💖
          </h1>
        </>
      ) : (
        <>
          <img
            className="h-[230px] rounded-xl mb-6"
            src={getSadGif()}
            alt="bear"
          />

          <h1 className="text-4xl md:text-4xl font-bold mb-10 text-center text-black/80">
            Will you be my Valentine? 💌
          </h1>

          <div className="flex gap-6 items-center pt-10 text-2xl">
            {/* YES */}
            <button
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                playMusic();
                setYesPressed(true);
              }}
              className="
              cursor-pointer
                bg-transparent
                 border-green-500
                text-green-600 font-bold
                px-8 py-3 rounded-xl
                transition-all duration-300
                hover:scale-110
                active:scale-95
              "
            >
              Yes 💖
            </button>

            {/* NO */}
            <button
              onClick={handleNoClick}
              className="
              cursor-pointer
                bg-transparent
               border-rose-500
                text-rose-600 font-bold
                px-8 py-3 rounded-xl
                transition-all duration-200
                hover:scale-90
                active:scale-75
                animate-shake
              "
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}

      <p className="absolute bottom-4 text-center text-sm text-gray-500">
        made by pralay
      </p>
    </div>
  );
}
