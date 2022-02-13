// @ts-ignore
import anime from "./node_modules/animejs/lib/anime.es.js";

// Split portfolio string into individual characters.
const h1 = document.querySelector("h1");
if (h1) {
  const h1Array = h1.innerText.split("");
  // Wrap each character in a span tag
  const h1SpanArray = h1Array.map((item) => `<span>${item}</span>`);
  const h1SpanString = h1SpanArray.join("");
  // Replace h1 with span-wrapped content
  h1.innerHTML = h1SpanString;
}

// Animation
const tl = anime.timeline();

tl.add({
  targets: ".animate-in",
  translateY: [-window.innerHeight, 0],
  scale: [2, 1],
  delay: anime.stagger(100),
  easing: "spring(3, 100, 17, 1)",
});

tl.add(
  {
    targets: "h1 span",
    color: ["rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(0, 0, 0)"],
    easing: "spring(3, 100, 17, 1)",
    delay: anime.stagger(75),
  },
  "-=900"
);

// Scroll to top arrow
const scrollToTopButton: HTMLButtonElement | null = document.querySelector(
  "button.scroll-to-top"
);

if (scrollToTopButton) {
  window.addEventListener("touchstart", (e) => {
    e.touches[0].clientX < window.innerWidth / 2
      ? scrollToTopButton.classList.remove("move-right")
      : scrollToTopButton.classList.add("move-right");
  });
}
