import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesButtonSize = noCount * 16 + 18;

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
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
    <div className="min-h-screen flex flex-col items-center justify-center text-zinc-900 backdrop-blur-sm">
      {yesPressed ? (
        <>
          <img
            className="w-60 mb-6"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="happy"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-600 text-center">
            Ok Yayyyyy!!! 💖
          </h1>
        </>
      ) : (
        <>
          <img
            className="h-[230px] rounded-xl shadow-md mb-6"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
            alt="bear"
          />

          <h1 className="text-4xl md:text-4xl font-bold mb-10 text-center text-black/80">
            Will you be my Valentine? 💌
          </h1>

          <div className="flex gap-6 items-center pt-10 text-2xl">
            {/* YES */}
            <button
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
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
    </div>
  );
}
