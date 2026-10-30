const home = document.querySelector(".home");
if (home) {
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  const saveData = connection?.saveData === true;
  const videos = [...home.querySelectorAll<HTMLVideoElement>("video[data-src]")];
  const frames = [...home.querySelectorAll<HTMLElement>("[data-parallax]")];

  const disarm = (video: HTMLVideoElement) => {
    video.pause();
    video.classList.remove("is-playing");
  };

  const arm = (video: HTMLVideoElement) => {
    if (motion.matches || saveData) {
      disarm(video);
      return;
    }
    const source = video.dataset.src;
    if (source && video.getAttribute("src") == null) video.src = source;
    video
      .play()
      .then(() => {
        if (!motion.matches) video.classList.add("is-playing");
      })
      .catch(() => {
        video.classList.remove("is-playing");
      });
  };

  const resetParallax = () => {
    frames.forEach((frame) => {
      const layer = frame.querySelector<HTMLElement>(".parallax-layer");
      if (layer) layer.style.transform = "";
    });
  };

  let frameId = 0;
  const paintParallax = () => {
    frameId = 0;
    if (motion.matches) {
      resetParallax();
      return;
    }
    const viewport = window.innerHeight || 1;
    frames.forEach((frame) => {
      const layer = frame.querySelector<HTMLElement>(".parallax-layer");
      if (!layer) return;
      const rect = frame.getBoundingClientRect();
      const shift = Math.max(-36, Math.min(36, (rect.top / viewport) * 28));
      layer.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
    });
  };

  const requestPaint = () => {
    if (motion.matches || frameId !== 0) return;
    frameId = window.requestAnimationFrame(paintParallax);
  };

  const sync = () => {
    videos.forEach((video) => arm(video));
    if (motion.matches) resetParallax();
    else requestPaint();
  };

  motion.addEventListener("change", sync);
  if (!motion.matches) {
    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint, { passive: true });
    requestPaint();
  }

  if (!motion.matches && !saveData) {
    if (document.readyState === "complete") window.setTimeout(sync, 300);
    else window.addEventListener("load", () => window.setTimeout(sync, 300), { once: true });
  }
}
