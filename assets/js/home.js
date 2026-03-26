(function () {
  var body = document.body;

  if (!body || !body.classList.contains("layout--home")) {
    return;
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var shell = document.querySelector(".home-shell");
  var clockNode = document.querySelector("[data-home-time]");
  var rotatorNode = document.querySelector("[data-home-rotator]");
  var signalNode = document.querySelector("[data-home-signal]");
  var revealNodes = Array.prototype.slice.call(document.querySelectorAll("[data-home-reveal]"));
  var counterNodes = Array.prototype.slice.call(document.querySelectorAll("[data-counter]"));

  function updateClock() {
    if (!clockNode) {
      return;
    }

    clockNode.textContent = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "America/New_York"
    }).format(new Date());
  }

  function animateCounter(node) {
    if (!node || node.dataset.counted === "true") {
      return;
    }

    var target = parseInt(node.getAttribute("data-counter"), 10);

    if (isNaN(target)) {
      return;
    }

    if (reduceMotion) {
      node.textContent = String(target);
      node.dataset.counted = "true";
      return;
    }

    var startTime = null;
    var duration = 900;

    node.dataset.counted = "true";

    function step(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }

      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = String(Math.round(target * eased));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        node.textContent = String(target);
      }
    }

    window.requestAnimationFrame(step);
  }

  function revealNow(node) {
    node.classList.add("is-visible");
    var counters = node.querySelectorAll("[data-counter]");

    Array.prototype.forEach.call(counters, animateCounter);
  }

  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        revealNow(entry.target);
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.18
    });

    revealNodes.forEach(function (node) {
      revealObserver.observe(node);
    });
  } else {
    revealNodes.forEach(revealNow);
  }

  counterNodes.forEach(function (node) {
    if (!node.closest("[data-home-reveal]")) {
      animateCounter(node);
    }
  });

  updateClock();
  window.setInterval(updateClock, 1000);

  if (rotatorNode) {
    var words = (rotatorNode.getAttribute("data-words") || "")
      .split("|")
      .map(function (word) { return word.trim(); })
      .filter(Boolean);

    if (words.length > 1 && !reduceMotion) {
      var currentIndex = 0;

      window.setInterval(function () {
        rotatorNode.classList.add("is-switching");

        window.setTimeout(function () {
          currentIndex = (currentIndex + 1) % words.length;
          rotatorNode.textContent = words[currentIndex];
          rotatorNode.classList.remove("is-switching");
        }, 180);
      }, 2600);
    } else if (words.length > 0) {
      rotatorNode.textContent = words[0];
    }
  }

  if (signalNode) {
    var bars = [];
    var signalBarsNode = signalNode.querySelector("[data-home-signal-bars]");
    var signalLineNode = signalNode.querySelector("[data-home-signal-line]");
    var signalGlowNode = signalNode.querySelector("[data-home-signal-glow]");
    var signalSpikesNode = signalNode.querySelector("[data-home-signal-spikes]");
    var barCount = window.innerWidth < 620 ? 20 : 28;

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function buildSmoothPath(values) {
      if (!values.length) {
        return "";
      }

      var step = values.length > 1 ? 100 / (values.length - 1) : 100;
      var points = values.map(function (value, index) {
        return {
          x: step * index,
          y: value
        };
      });

      var d = "M " + points[0].x.toFixed(2) + " " + points[0].y.toFixed(2);

      if (points.length === 1) {
        return d;
      }

      for (var pointIndex = 1; pointIndex < points.length - 1; pointIndex += 1) {
        var current = points[pointIndex];
        var next = points[pointIndex + 1];
        var midX = (current.x + next.x) / 2;
        var midY = (current.y + next.y) / 2;

        d += " Q " + current.x.toFixed(2) + " " + current.y.toFixed(2) + " " + midX.toFixed(2) + " " + midY.toFixed(2);
      }

      var penultimate = points[points.length - 2];
      var last = points[points.length - 1];

      d += " Q " + penultimate.x.toFixed(2) + " " + penultimate.y.toFixed(2) + " " + last.x.toFixed(2) + " " + last.y.toFixed(2);

      return d;
    }

    for (var i = 0; i < barCount; i += 1) {
      var bar = document.createElement("span");
      signalBarsNode.appendChild(bar);
      bars.push(bar);
    }

    function paintSignal() {
      var now = Date.now();
      var curvePoints = [];
      var spikeSegments = [];
      var step = barCount > 1 ? 100 / (barCount - 1) : 100;

      bars.forEach(function (bar, index) {
        var phase = now / 210;
        var envelope = Math.sin((phase * 0.34) + (index * 0.27));
        var pulse = Math.sin((phase * 1.08) + (index * 0.92));
        var ripple = Math.sin((phase * 2.45) + (index * 2.14));
        var spikeGate = Math.sin((phase * 0.72) - (index * 0.58)) + (0.35 * Math.sin((phase * 2.6) + (index * 1.15)));
        var spike = spikeGate > 0.95 ? Math.pow((spikeGate - 0.95) / 0.4, 3) * 42 : 0;
        var height = clamp(12 + Math.abs(pulse) * 18 + Math.max(envelope, 0) * 10 + spike * 0.25, 8, 52);
        var alpha = clamp(0.44 + Math.abs(pulse) * 0.2 + spike * 0.008, 0.44, 0.96).toFixed(2);
        var waveY = clamp(56 - (envelope * 9) - (pulse * 7) - (ripple * 4) - (spike * 0.9), 10, 86);
        var x = step * index;

        curvePoints.push(waveY);
        bar.style.setProperty("--bar-height", Math.round(height) + "px");
        bar.style.setProperty("--bar-alpha", alpha);

        if (spike > 10) {
          var baseY = clamp(waveY + 10, 18, 90);
          var tipY = clamp(waveY - (spike * 0.95), 2, baseY - 18);
          var leftX = clamp(x - (step * 0.18), 0, 100);
          var rightX = clamp(x + (step * 0.16), 0, 100);

          spikeSegments.push(
            "M " + leftX.toFixed(2) + " " + baseY.toFixed(2) +
            " L " + x.toFixed(2) + " " + tipY.toFixed(2) +
            " L " + rightX.toFixed(2) + " " + (baseY + 1.5).toFixed(2)
          );
        }
      });

      if (signalLineNode && signalGlowNode) {
        var curvePath = buildSmoothPath(curvePoints);
        signalLineNode.setAttribute("d", curvePath);
        signalGlowNode.setAttribute("d", curvePath);
      }

      if (signalSpikesNode) {
        signalSpikesNode.setAttribute("d", spikeSegments.join(" "));
      }
    }

    paintSignal();

    if (!reduceMotion) {
      window.setInterval(paintSignal, 180);
    }
  }

  if (shell && !reduceMotion) {
    shell.addEventListener("pointermove", function (event) {
      var rect = shell.getBoundingClientRect();
      var x = ((event.clientX - rect.left) / rect.width) * 100;
      var y = ((event.clientY - rect.top) / rect.height) * 100;

      shell.style.setProperty("--spotlight-x", x + "%");
      shell.style.setProperty("--spotlight-y", y + "%");
    });
  }
}());
