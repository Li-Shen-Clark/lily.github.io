(function () {
  var body = document.body;

  if (!body || !body.classList.contains("layout--home")) {
    return;
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var shell = document.querySelector(".home-shell");
  var clockNode = document.querySelector("[data-home-time]");
  var rotatorNode = document.querySelector("[data-home-rotator]");
  var jmpNode = document.querySelector("[data-jmp-model]");
  var revealNodes = Array.prototype.slice.call(document.querySelectorAll("[data-home-reveal]"));
  var counterNodes = Array.prototype.slice.call(document.querySelectorAll("[data-counter]"));

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

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
    body.classList.add("home-animate");

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

  if (jmpNode) {
    var jmpBarsNode = jmpNode.querySelector("[data-jmp-bars]");
    var jmpRoundNode = jmpNode.querySelector("[data-jmp-round]");
    var jmpPulseNode = jmpNode.querySelector("[data-jmp-pulse]");
    var provinceCodes = [
      "BJ", "TJ", "HE", "SX", "NM", "LN", "JL", "HL", "SH", "JS", "ZJ",
      "AH", "FJ", "JX", "SD", "HA", "HB", "HN", "GD", "GX", "HI", "CQ",
      "SC", "GZ", "YN", "XZ", "SN", "GS", "QH", "NX", "XJ"
    ];
    var baseMultipliers = provinceCodes.map(function (_, index) {
      var seeded = (Math.sin((index + 1) * 1.73) + 1) / 2;
      return 0.30 + (0.72 * seeded);
    });
    var barNodes = [];

    function circularDistance(a, b, size) {
      var diff = Math.abs(a - b);
      return Math.min(diff, size - diff);
    }

    if (jmpBarsNode) {
      provinceCodes.forEach(function (code) {
        var barNode = document.createElement("article");
        barNode.className = "home-jmp__bar";
        barNode.innerHTML = '<span class="home-jmp__bar-fill"></span><span class="home-jmp__abbr">' + code + "</span>";
        jmpBarsNode.appendChild(barNode);
        barNodes.push(barNode);
      });

      function paintJmpShock(step) {
        var shockIndex = (step * 5) % provinceCodes.length;
        var round = (step % 6) + 1;

        if (jmpRoundNode) {
          jmpRoundNode.textContent = "Round " + round;
        }

        if (jmpPulseNode) {
          var pulsePercent = ((shockIndex / (provinceCodes.length - 1)) * 100) - 50;
          jmpPulseNode.style.setProperty("--jmp-pulse-x", pulsePercent.toFixed(1) + "%");
        }

        barNodes.forEach(function (node, index) {
          var distance = circularDistance(index, shockIndex, provinceCodes.length);
          var spread = Math.max(0, 1 - (distance / 7));
          var ripple = 0.06 * Math.sin((step * 0.8) + (index * 0.6));
          var value = clamp(baseMultipliers[index] + (spread * 0.32) + ripple, 0.30, 1.02);
          var intensity = (value - 0.30) / 0.72;
          var height = 22 + (intensity * 78);
          var warmR = Math.round(160 + (intensity * 25));
          var warmG = Math.round(95 + (intensity * 20));
          var coolR = Math.round(13 + (intensity * 8));
          var coolG = Math.round(106 + (intensity * 16));
          var fillNode = node.querySelector(".home-jmp__bar-fill");

          node.classList.toggle("is-shock", distance === 0);

          if (!fillNode) {
            return;
          }

          fillNode.style.setProperty("--jmp-height", height.toFixed(1) + "%");
          fillNode.style.setProperty("--jmp-opacity", (0.62 + (intensity * 0.38)).toFixed(2));
          fillNode.style.setProperty("--jmp-color-top", "rgb(" + warmR + ", " + warmG + ", 26)");
          fillNode.style.setProperty("--jmp-color-bottom", "rgb(" + coolR + ", " + coolG + ", 97)");
        });
      }

      paintJmpShock(0);

      if (!reduceMotion) {
        var shockStep = 0;
        window.setInterval(function () {
          shockStep += 1;
          paintJmpShock(shockStep);
        }, 620);
      }
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
