import confetti from "canvas-confetti";

export const Footer = () => {
  const onBtnClick = () => {
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
    });
  };

  return (
    <footer>
      <div>
        <div>
          <p>
            &#169; Created by{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/NikoNikoUA"
            >
              Mykola Kosynskyi
            </a>
          </p>
          <button type="button" onClick={onBtnClick}>
            Fire
          </button>
        </div>
      </div>
    </footer>
  );
};
