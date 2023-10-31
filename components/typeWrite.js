import React, { useEffect } from "react";

const TypingAnimation = () => {
  useEffect(() => {
    const typeText = document.querySelector(".typewrite");
    const words = JSON.parse(typeText.getAttribute("data-type"));
    const period = parseInt(typeText.getAttribute("data-period"), 10) || 2000;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex];
      const text = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

      typeText.textContent = text;

      if (!isDeleting) {
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, period);
        } else {
          setTimeout(type, 100); // Adjust typing speed here
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 500); // Adjust pause between words here
        } else {
          setTimeout(type, 50); // Adjust backspacing speed here
        }
      }
    };

    setTimeout(type, period);
  }, []);

  return (
    <h1>
      <span
        className="font-Russo-One md:text-5xl sm:text-3xl text-center smb:text-3xl typewrite"
        data-period="2000"
        data-type='["Blockchain Development.", "Web Development.", "Backend Development.","Arduino Projects."]'
      ></span>
    </h1>
  );
};

export default TypingAnimation;
