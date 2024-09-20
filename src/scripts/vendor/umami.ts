if (import.meta.env.DEV) {
  localStorage.setItem("umami.disabled", "1");
}

if ("startViewTransition" in document) {
  document.addEventListener("astro:page-load", () => {
    // Run after every additional navigation by Astro

    void window.umami.track(props => ({ ...props }));
  });
}
