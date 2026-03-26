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
    var mapValueNode = jmpNode.querySelector("[data-jmp-map-value]");
    var provinces = [
      { code: "BJ", name: "Beijing", x: 58, y: 28, m: 0.82 },
      { code: "TJ", name: "Tianjin", x: 60, y: 30, m: 0.79 },
      { code: "HE", name: "Hebei", x: 56, y: 33, m: 0.73 },
      { code: "SX", name: "Shanxi", x: 52, y: 35, m: 0.68 },
      { code: "NM", name: "Inner Mongolia", x: 49, y: 26, m: 0.61 },
      { code: "LN", name: "Liaoning", x: 63, y: 24, m: 0.75 },
      { code: "JL", name: "Jilin", x: 66, y: 20, m: 0.64 },
      { code: "HL", name: "Heilongjiang", x: 69, y: 16, m: 0.58 },
      { code: "SH", name: "Shanghai", x: 64, y: 56, m: 0.91 },
      { code: "JS", name: "Jiangsu", x: 62, y: 51, m: 0.88 },
      { code: "ZJ", name: "Zhejiang", x: 64, y: 58, m: 0.93 },
      { code: "AH", name: "Anhui", x: 58, y: 51, m: 0.77 },
      { code: "FJ", name: "Fujian", x: 63, y: 64, m: 0.84 },
      { code: "JX", name: "Jiangxi", x: 58, y: 60, m: 0.72 },
      { code: "SD", name: "Shandong", x: 61, y: 40, m: 0.86 },
      { code: "HA", name: "Henan", x: 55, y: 46, m: 0.74 },
      { code: "HB", name: "Hubei", x: 54, y: 52, m: 0.78 },
      { code: "HN", name: "Hunan", x: 53, y: 60, m: 0.71 },
      { code: "GD", name: "Guangdong", x: 56, y: 75, m: 1.02 },
      { code: "GX", name: "Guangxi", x: 50, y: 72, m: 0.69 },
      { code: "HI", name: "Hainan", x: 56, y: 88, m: 0.57 },
      { code: "CQ", name: "Chongqing", x: 46, y: 56, m: 0.80 },
      { code: "SC", name: "Sichuan", x: 41, y: 58, m: 0.76 },
      { code: "GZ", name: "Guizhou", x: 50, y: 66, m: 0.66 },
      { code: "YN", name: "Yunnan", x: 44, y: 72, m: 0.62 },
      { code: "XZ", name: "Tibet", x: 27, y: 54, m: 0.30 },
      { code: "SN", name: "Shaanxi", x: 49, y: 45, m: 0.70 },
      { code: "GS", name: "Gansu", x: 42, y: 40, m: 0.52 },
      { code: "QH", name: "Qinghai", x: 35, y: 44, m: 0.41 },
      { code: "NX", name: "Ningxia", x: 46, y: 38, m: 0.49 },
      { code: "XJ", name: "Xinjiang", x: 20, y: 37, m: 0.37 }
    ];
    var mapNodeEls = [];

    function distancePercent(a, b) {
      var dx = a.x - b.x;
      var dy = a.y - b.y;
      return Math.sqrt((dx * dx) + (dy * dy));
    }

    function channelLerp(start, end, ratio) {
      return Math.round(start + ((end - start) * ratio));
    }

    function colorForMultiplier(multiplier, boost) {
      var normalized = clamp((multiplier - 0.30) / 0.72, 0, 1);
      var mid = 0.52;
      var low = { r: 24, g: 46, b: 122 };
      var pivot = { r: 164, g: 54, b: 171 };
      var high = { r: 234, g: 230, b: 78 };
      var top;
      var bottom;

      if (normalized <= mid) {
        var leftRatio = normalized / mid;
        top = {
          r: channelLerp(low.r, pivot.r, leftRatio),
          g: channelLerp(low.g, pivot.g, leftRatio),
          b: channelLerp(low.b, pivot.b, leftRatio)
        };
      } else {
        var rightRatio = (normalized - mid) / (1 - mid);
        top = {
          r: channelLerp(pivot.r, high.r, rightRatio),
          g: channelLerp(pivot.g, high.g, rightRatio),
          b: channelLerp(pivot.b, high.b, rightRatio)
        };
      }

      var bonus = Math.round(26 * boost);
      top.r = clamp(top.r + bonus, 0, 255);
      top.g = clamp(top.g + bonus, 0, 255);
      top.b = clamp(top.b + bonus, 0, 255);
      bottom = {
        r: clamp(top.r - 34, 0, 255),
        g: clamp(top.g - 34, 0, 255),
        b: clamp(top.b - 34, 0, 255)
      };

      return {
        top: "rgb(" + top.r + ", " + top.g + ", " + top.b + ")",
        bottom: "rgb(" + bottom.r + ", " + bottom.g + ", " + bottom.b + ")"
      };
    }

    if (mapNodesWrap) {
      provinces.forEach(function (province) {
        var node = document.createElement("span");
        var code = document.createElement("span");

        node.className = "home-jmp-map__node";
        node.style.setProperty("--node-x", province.x.toFixed(2) + "%");
        node.style.setProperty("--node-y", province.y.toFixed(2) + "%");
        node.setAttribute("title", province.name + " (" + province.code + ")");

        code.className = "home-jmp-map__code";
        code.textContent = province.code;
        node.appendChild(code);

        mapNodesWrap.appendChild(node);
        mapNodeEls.push(node);
      });

      function paintMap(step) {
        var activeIndex = step % provinces.length;
        var active = provinces[activeIndex];
        var beamShift = ((active.x - 50) * 2.4);

        if (mapFocusNode) {
          mapFocusNode.textContent = "Active: " + active.name + " (" + active.code + ")";
        }

        if (mapValueNode) {
          mapValueNode.textContent = "m = " + active.m.toFixed(2);
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

        mapNodeEls.forEach(function (node, index) {
          var province = provinces[index];
          var dist = distancePercent(province, active);
          var influence = clamp(1 - (dist / 37), 0, 1);
          var ripple = 0.06 * Math.sin((step * 0.74) + (index * 0.9));
          var alpha = clamp((0.24 + (influence * 0.62)) + ripple, 0.16, 1);
          var scale = clamp((0.74 + (influence * 0.52)) + ripple, 0.62, 1.36);
          var ringAlpha = clamp(0.18 + (influence * 0.72), 0.18, 1);
          var colors = colorForMultiplier(province.m, influence * 0.45);

          node.classList.toggle("is-active", index === activeIndex);
          node.classList.toggle("is-near", influence > 0.36 && index !== activeIndex);
          node.style.setProperty("--node-alpha", alpha.toFixed(2));
          node.style.setProperty("--node-scale", scale.toFixed(2));
          node.style.setProperty("--node-ring-alpha", ringAlpha.toFixed(2));
          node.style.setProperty("--node-color-top", colors.top);
          node.style.setProperty("--node-color-bottom", colors.bottom);
        });
      }

      paintMap(0);

      if (!reduceMotion) {
        var mapStep = 0;
        window.setInterval(function () {
          mapStep += 1;
          paintMap(mapStep);
        }, 760);
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
