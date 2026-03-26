(function () {
  var body = document.body;

  if (!body || !body.classList.contains("layout--home")) {
    return;
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var shell = document.querySelector(".home-shell");
  var clockNode = document.querySelector("[data-home-time]");
  var rotatorNode = document.querySelector("[data-home-rotator]");
  var jmpNode = document.querySelector("[data-jmp-map]");
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
    var mapNodesWrap = jmpNode.querySelector("[data-jmp-map-nodes]");
    var mapPulseNode = jmpNode.querySelector("[data-jmp-map-pulse]");
    var mapBeamNode = jmpNode.querySelector("[data-jmp-map-beam]");
    var mapFocusNode = jmpNode.querySelector("[data-jmp-map-focus]");
    var mapHubs = [
      { name: "Bohai Rim", x: 57, y: 26 },
      { name: "Northeast", x: 64, y: 18 },
      { name: "Central Plains", x: 53, y: 45 },
      { name: "Yangtze Delta", x: 63, y: 56 },
      { name: "Middle Yangtze", x: 54, y: 54 },
      { name: "Pearl River Delta", x: 56, y: 77 },
      { name: "Chengdu-Chongqing", x: 43, y: 56 },
      { name: "Northwest", x: 33, y: 36 }
    ];
    var mapNodeEls = [];

    function distancePercent(a, b) {
      var dx = a.x - b.x;
      var dy = a.y - b.y;
      return Math.sqrt((dx * dx) + (dy * dy));
    }

    if (mapNodesWrap) {
      mapHubs.forEach(function (hub) {
        var dot = document.createElement("span");
        dot.className = "home-jmp-map__node";
        dot.style.setProperty("--node-x", hub.x.toFixed(2) + "%");
        dot.style.setProperty("--node-y", hub.y.toFixed(2) + "%");
        mapNodesWrap.appendChild(dot);
        mapNodeEls.push(dot);
      });

      function paintMap(step) {
        var activeIndex = step % mapHubs.length;
        var active = mapHubs[activeIndex];
        var beamShift = ((activeIndex / mapHubs.length) * 140) - 110;

        if (mapFocusNode) {
          mapFocusNode.textContent = "Shock: " + active.name;
        }

        if (mapPulseNode) {
          mapPulseNode.style.setProperty("--map-pulse-x", active.x.toFixed(2) + "%");
          mapPulseNode.style.setProperty("--map-pulse-y", active.y.toFixed(2) + "%");
          mapPulseNode.style.setProperty("--map-pulse-scale", String(0.84 + (0.12 * Math.sin(step * 0.8))));
          mapPulseNode.style.setProperty("--map-pulse-alpha", String(0.62 + (0.25 * Math.abs(Math.sin(step * 0.6)))));
        }

        if (mapBeamNode) {
          mapBeamNode.style.setProperty("--map-beam-x", beamShift.toFixed(2) + "%");
        }

        mapNodeEls.forEach(function (dot, index) {
          var hub = mapHubs[index];
          var dist = distancePercent(hub, active);
          var influence = clamp(1 - (dist / 44), 0.14, 1);
          var pulse = 0.08 * Math.sin((step * 0.7) + (index * 0.95));
          var alpha = clamp((0.36 + (influence * 0.58)) + pulse, 0.22, 1);
          var scale = clamp((0.72 + (influence * 0.62)) + pulse, 0.64, 1.34);

          dot.classList.toggle("is-active", index === activeIndex);
          dot.style.setProperty("--node-alpha", alpha.toFixed(2));
          dot.style.setProperty("--node-scale", scale.toFixed(2));
        });
      }

      paintMap(0);

      if (!reduceMotion) {
        var mapStep = 0;
        window.setInterval(function () {
          mapStep += 1;
          paintMap(mapStep);
        }, 900);
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
