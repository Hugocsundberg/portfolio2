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
const scrollTriggerPosition = 600;
const scrollContainer = document.querySelector("#scroll-container");
const scrollToTopButton: HTMLButtonElement | null =
  document.querySelector("a.scroll-to-top");
let mouseXPosition = 0;
let arrowCanMove = false;

window.addEventListener("mousemove", (e) => {
  mouseXPosition = e.clientX;
});

scrollContainer?.addEventListener("scroll", () => {
  if (scrollContainer.scrollTop > scrollTriggerPosition) {
    setTimeout(() => {
      arrowCanMove = true;
    }, 2000);
  }
});

if (scrollToTopButton) {
  window.addEventListener("touchstart", (e) => {
    if (arrowCanMove)
      e.touches[0].clientX < window.innerWidth / 1.5
        ? scrollToTopButton.classList.remove("move-right")
        : scrollToTopButton.classList.add("move-right");
  });

  window.addEventListener("wheel", (e) => {
    if (arrowCanMove)
      mouseXPosition < window.innerWidth / 1.5
        ? scrollToTopButton.classList.remove("move-right")
        : scrollToTopButton.classList.add("move-right");
  });
}

scrollContainer?.addEventListener("scroll", (e) => {
  const target = e.target as HTMLElement | null;
  const hasPressedArrowInformationOkButton =
    window.localStorage.getItem("hasPressedArrowInformationOkButton") === "true"
      ? true
      : false;

  if (target && target.scrollTop > scrollTriggerPosition) {
    document.querySelector(".top-arrow")?.classList.add("scale-1");
    if (!hasPressedArrowInformationOkButton)
      setTimeout(() => {
        if (!hasPressedArrowInformationOkButton)
          document.querySelector(".info-card")?.classList.add("translate-x-0");
      }, 500);
  } else {
    document.querySelector(".top-arrow")?.classList.remove("scale-1");
    setTimeout(() => {
      document.querySelector(".info-card")?.classList.remove("translate-x-0");
    }, 500);
  }
});

// Arrow information box
const arrowInformationButton = document.querySelector(
  "#button-confirm-arrow-information"
);
arrowInformationButton?.addEventListener("click", () => {
  setTimeout(() => {
    document.querySelector(".info-card")?.classList.remove("translate-x-0");
  }, 200);
  window.localStorage.setItem("hasPressedArrowInformationOkButton", "true");
});

// Add animation to cards on scroll
const observables = document.querySelectorAll(".shall-animate");

const animateIn = (target: Element) => {
  anime({
    targets: target,
    translateY: [200, 0],
    easing: "spring(1, 80, 17, 1)",
  });
};

const observer = new IntersectionObserver((e) => {
  e.forEach((entry) => {
    if (!entry.isIntersecting) return;
    if (!entry.target.classList.contains("shall-animate")) return;
    entry.target.classList.remove("shall-animate");
    animateIn(entry.target);
  });
});

observables.forEach((observable) => {
  observer.observe(observable);
});

// Language switch
const switchButton = document.querySelector("#language-switch");
let lang = "sv";

switchButton?.addEventListener("click", () => {
  lang === "sv" ? (lang = "en") : (lang = "sv");

  const textElements: NodeListOf<HTMLElement> =
    document.querySelectorAll("[data-en]");

  if (lang === "en") {
    textElements.forEach((element) => {
      element.dataset.sv = element.textContent ?? "";
      element.textContent = element.dataset.en ?? element.textContent;
    });
  } else {
    textElements.forEach((element) => {
      element.textContent = element.dataset.sv ?? element.textContent;
    });
  }
});
