document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".overlay",
      start: "top top",
      end: "+=150%",
      scrub: 1,
      pin: true,
    },
  });

  const generalImages = gsap.utils.toArray(
    ".overlay img:not(.bg):not(.godhead):not(.godbody)"
  );

  generalImages.forEach((img) => {
    const randX = (Math.random() - 0.5) * window.innerWidth * 1.5;
    const randY = (Math.random() - 0.5) * window.innerHeight * 1.5;
    const randRot = (Math.random() - 0.5) * 60;
    const randScale = Math.random() * 0.5 + 0.5;

    tl.to(
      img,
      {
        x: randX,
        y: randY,
        rotation: randRot,
        opacity: 0,
        scale: randScale,
        duration: 1,
      },
      0
    );
  });

  const godRandX = (Math.random() - 0.5) * window.innerWidth * 1.5;
  const godRandY = (Math.random() - 0.5) * window.innerHeight * 1.5;
  const godRandRot = (Math.random() - 0.5) * 60;

  tl.to(
    ".godhead, .godbody",
    {
      x: godRandX,
      y: godRandY,
      rotation: godRandRot,
      opacity: 0,
      scale: 0.8,
      duration: 1,
    },
    0
  );

  const overlaySection = document.querySelector(".overlay");
  const head = document.getElementById("godHead");

  if (head) {
    overlaySection.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(head, {
        rotationX: -y * 15,
        rotationY: x * 20,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }

  gsap.to(".overlay img:not(.bg):not(.godhead):not(.godbody)", {
    y: -15,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    stagger: { amount: 2, from: "random" },
  });

  gsap.to(".godhead, .godbody", {
    y: -15,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    delay: 0.5,
  });

  gsap.fromTo(
    ".glow-effect",
    {
      scale: 0.8,
      opacity: 0.4,
      xPercent: -50,
      yPercent: -50,
    },
    {
      scale: 1.5,
      opacity: 1,
      xPercent: -50,
      yPercent: -50,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    }
  );
});
