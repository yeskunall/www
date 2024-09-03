const Shynet: Window["Shynet"] = {
  dnt: false,
  heartbeatTaskId: undefined,
  idempotency: undefined,
  newPageLoad() {
    if (Shynet.heartbeatTaskId != null) {
      clearInterval(Shynet.heartbeatTaskId);
    }

    Shynet.sendHeartbeat();
    Shynet.heartbeatTaskId = setInterval(
      Shynet.sendHeartbeat,
      parseInt("5000"),
    );

    Shynet.idempotency =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    Shynet.skipHeartbeat = false;
  },
  sendHeartbeat() {
    try {
      if (document.visibilityState === "hidden" || Shynet.skipHeartbeat) return;
      Shynet.skipHeartbeat = true;

      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://stats.kimchiii.space/ingress/76b6940c-09be-48f3-8f0d-21a83c890e68/script.js",
        true,
      );
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function () {
        Shynet.skipHeartbeat = false;
      };
      xhr.onerror = function () {
        Shynet.skipHeartbeat = false;
      };
      xhr.send(
        JSON.stringify({
          idempotency: Shynet.idempotency,
          loadTime: (
            window.performance.getEntriesByType(
              "navigation",
            )[0] as PerformanceNavigationTiming
          ).domContentLoadedEventEnd,
          location: window.location.href,
          referrer: document.referrer,
        }),
      );
    } catch (e) {
      /* empty */
    }
  },
  skipHeartbeat: false,
};

window.Shynet = Shynet;
