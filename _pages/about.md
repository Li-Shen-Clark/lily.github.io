---
permalink: /
title: "Li Shen"
excerpt: "Applied Economist and Ph.D. Candidate"
layout: home
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<div class="home-shell">
  <section class="home-hero">
    <div class="home-copy" data-home-reveal>
      <p class="home-kicker">Applied Economist - Trade - Mobility - Market Integration</p>
      <h1 class="home-title">Measuring how trade and transport shocks reshape local economies.</h1>
      <p class="home-lead">
        I am a Ph.D. Candidate in Economics at <a href="https://www.clarku.edu/">Clark University</a>, advised by
        <a href="https://wordpress.clarku.edu/juzhang/">Prof. Junfu Zhang</a>. My research combines causal inference,
        structural modeling, and high-frequency data to quantify local multiplier effects, labor spillovers, and market integration.
      </p>

      <div class="home-actions">
        <a href="{{ '/files/Li_Shen_CV_Economist_2026.pdf' | relative_url }}" class="home-button home-button--primary">Economist CV</a>
        <a href="{{ '/cv/' | relative_url }}" class="home-button home-button--ghost">Detailed CV</a>
      </div>

      <div class="home-skill-row" aria-label="Core skills">
        <span>Difference-in-Differences</span>
        <span>Shift-Share IV</span>
        <span>Quantitative Spatial Models</span>
        <span>Time-Series Forecasting</span>
        <span>Python / SQL / Stata</span>
        <span>MRIO / ICIO</span>
      </div>
    </div>

    <aside class="home-card home-card--signal" data-home-reveal>
      <div class="home-panel__top">
        <div>
          <p class="home-label">Live Profile</p>
          <h2 class="home-panel__title">Current focus</h2>
        </div>
        <div class="home-clock">
          <span class="home-clock__time" data-home-time>--:--</span>
          <span class="home-clock__meta">Worcester, MA</span>
        </div>
      </div>

      <div class="home-panel__profile">
        <img src="{{ '/images/p1.jpg' | relative_url }}" alt="Li Shen" class="home-avatar">
        <div>
          <p class="home-availability">On the 2026 economics job market and open to research and policy analysis opportunities.</p>
          <p class="home-rotator-label">Rotating between</p>
          <p class="home-rotator" data-home-rotator data-words="local trade multipliers and labor spillovers|high-speed rail and market integration|causal inference with large administrative and price data">
            local trade multipliers and labor spillovers
          </p>
        </div>
      </div>

      <div class="home-jmp" data-jmp-map aria-label="JMP local multiplier map animation">
        <div class="home-jmp__top">
          <span class="home-jmp__title">JMP Local Multiplier Map</span>
          <div class="home-jmp__meta">
            <span class="home-jmp__round" data-jmp-map-focus>Active: Beijing (BJ)</span>
            <span class="home-jmp__round home-jmp__round--value" data-jmp-map-value>m = 0.82</span>
          </div>
        </div>
        <div class="home-jmp-map__panel">
          <img src="{{ '/images/mgdp_map.png' | relative_url }}" alt="Provincial local GDP multiplier map in China" class="home-jmp-map__image">
          <div class="home-jmp-map__overlay" data-jmp-map-overlay>
            <span class="home-jmp-map__beam" data-jmp-map-beam aria-hidden="true"></span>
            <span class="home-jmp-map__pulse" data-jmp-map-pulse aria-hidden="true"></span>
            <div class="home-jmp-map__nodes" data-jmp-map-nodes aria-hidden="true"></div>
          </div>
        </div>
        <div class="home-jmp__legend">
          <span>Map from JMP calibration</span>
          <span>Multiplier range 0.30-1.02</span>
        </div>
      </div>

      <div class="home-metrics">
        <article>
          <strong data-counter="31">31</strong>
          <span>provinces in spatial model</span>
        </article>
        <article>
          <strong>3.99M</strong>
          <span>city-pair-month observations</span>
        </article>
        <article>
          <strong data-counter="117">117</strong>
          <span>cities in price panel</span>
        </article>
        <article>
          <strong>1.721+</strong>
          <span>real export-GDP multiplier (IV lower bound)</span>
        </article>
      </div>
    </aside>
  </section>

  <section class="home-pillars">
    <article class="home-card home-card--pillar" data-home-reveal>
      <p class="home-label">Research Theme 1</p>
      <h2>Trade shocks and local multipliers</h2>
      <p>I study how export demand propagates through domestic production networks and labor markets across regions.</p>
    </article>

    <article class="home-card home-card--pillar" data-home-reveal>
      <p class="home-label">Research Theme 2</p>
      <h2>Transport connectivity and price convergence</h2>
      <p>I quantify how high-speed rail changes passenger mobility and reduces intercity price dispersion, especially in short-haul markets.</p>
    </article>

    <article class="home-card home-card--pillar" data-home-reveal>
      <p class="home-label">Research Theme 3</p>
      <h2>Causal + structural workflow</h2>
      <p>I pair quasi-experimental evidence with structural counterfactuals to produce policy-relevant estimates.</p>
    </article>
  </section>

  <section class="home-grid home-grid--major">
    <div class="home-card" data-home-reveal>
      <div class="home-section__header">
        <div>
          <p class="home-label">Working Papers</p>
          <h2>Selected research</h2>
        </div>
        <a href="{{ '/publications/' | relative_url }}" class="home-inline-link">Publication list</a>
      </div>

      <div class="home-research-grid">
        <article class="home-feature-card">
          <p class="home-feature-card__meta">Job Market Paper - 2024-Present</p>
          <h3>The Local Multiplier Effects of Trade</h3>
          <p>
            Built a multi-sector quantitative spatial model for 31 Chinese provinces using MRIO data. Findings show strong
            heterogeneity in local GDP multipliers and estimate a real export-GDP multiplier of at least 1.721 using shift-share IV.
          </p>
        </article>

        <article class="home-feature-card">
          <p class="home-feature-card__meta">Working Paper - 2022-2025</p>
          <h3>High-Speed Rail and Market Integration</h3>
          <p>
            Constructed a panel with 3.99 million city-pair-month observations from daily wholesale prices and mobility indices.
            Estimates indicate HSR connectivity lowers intercity price dispersion by about 2% on average and up to 5% in short-haul markets.
          </p>
        </article>
      </div>
    </div>

    <aside class="home-card" data-home-reveal>
      <div class="home-section__header">
        <div>
          <p class="home-label">Methods and Data</p>
          <h2>Empirical toolkit</h2>
        </div>
      </div>

      <div class="home-list">
        <article class="home-list__item">
          <p class="home-list__meta">Causal identification</p>
          <h3>Staggered DiD and event-study designs</h3>
          <p>Applied to HSR rollout, policy shocks, and mobility restrictions with robustness and mechanism checks.</p>
        </article>

        <article class="home-list__item">
          <p class="home-list__meta">Structural quantification</p>
          <h3>Multi-region general equilibrium modeling</h3>
          <p>Counterfactual simulations with calibrated trade costs, productivity, and input-output coefficients.</p>
        </article>

        <article class="home-list__item">
          <p class="home-list__meta">Programming stack</p>
          <h3>Python, SQL, Stata, MATLAB, R, SAS</h3>
          <p>Data engineering, econometric workflows, and reproducible research communication.</p>
        </article>
      </div>
    </aside>
  </section>

  <section class="home-grid home-grid--split">
    <div class="home-card" data-home-reveal>
      <div class="home-section__header">
        <div>
          <p class="home-label">Experience</p>
          <h2>Research and professional background</h2>
        </div>
      </div>

      <div class="home-timeline">
        <article class="home-timeline__item">
          <p class="home-timeline__date">2024 - Present</p>
          <div class="home-timeline__body">
            <span class="home-badge">Research</span>
            <h3>The Local Multiplier Effects of Trade</h3>
            <p>Quantitative spatial modeling and shift-share IV estimation on Chinese trade and production data.</p>
          </div>
        </article>

        <article class="home-timeline__item">
          <p class="home-timeline__date">2022 - 2025</p>
          <div class="home-timeline__body">
            <span class="home-badge">Research</span>
            <h3>High-Speed Rail and Market Integration</h3>
            <p>Linked large-scale price and mobility data to evaluate transport infrastructure effects on market integration.</p>
          </div>
        </article>

        <article class="home-timeline__item">
          <p class="home-timeline__date">2020 - 2025</p>
          <div class="home-timeline__body">
            <span class="home-badge">Teaching</span>
            <h3>Teaching Assistant, Clark University</h3>
            <p>Supported graduate finance and undergraduate economics courses and coached students in quantitative methods.</p>
          </div>
        </article>

        <article class="home-timeline__item">
          <p class="home-timeline__date">2014 - 2016</p>
          <div class="home-timeline__body">
            <span class="home-badge">Industry</span>
            <h3>Financial Auditor</h3>
            <p>Conducted internal audits, reconciled inventory records, and prepared general-ledger entries.</p>
          </div>
        </article>
      </div>
    </div>

    <div class="home-card" data-home-reveal>
      <div class="home-section__header">
        <div>
          <p class="home-label">Education and Honors</p>
          <h2>Academic profile</h2>
        </div>
      </div>

      <div class="home-list home-list--profile">
        <article class="home-list__item home-profile__item">
          <p class="home-list__meta">Education</p>
          <p class="home-profile__headline">Clark University, Ph.D. in Economics (Expected Aug 2026)</p>
          <ul class="home-profile__details">
            <li>SUNY Buffalo, M.A. in Economics</li>
            <li>Valparaiso University, M.S. in International Economics and Finance</li>
            <li>Chongqing University, B.Mgmt. in Accounting</li>
          </ul>
        </article>

        <article class="home-list__item home-profile__item">
          <p class="home-list__meta">Awards</p>
          <p class="home-profile__headline">Sheftel Award for Research Excellence (twice, 2025)</p>
          <ul class="home-profile__details">
            <li>Veendorp Best Field Paper Award (2022)</li>
            <li>Doctoral Fellowship, Clark University (2019-Present)</li>
          </ul>
        </article>

        <article class="home-list__item home-profile__item">
          <p class="home-list__meta">Selected publication and presentations</p>
          <p class="home-profile__headline">Engineering and Technology Quarterly Reviews (2019)</p>
          <ul class="home-profile__details">
            <li>Southern Economic Association (2025)</li>
            <li>Midwest Economic Conference (2025)</li>
            <li>Clark Ph.D. seminars (2022-2025)</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section class="home-card home-card--cta" data-home-reveal>
    <div>
      <p class="home-label">Contact</p>
      <h2>Interested in trade, regional development, or policy-relevant quantitative analysis?</h2>
      <p>
        I am happy to discuss research collaboration, RA opportunities, and policy projects.
        Email is the fastest way to reach me.
      </p>
    </div>

    <div class="home-actions home-actions--compact">
      <a href="mailto:lshen@clarku.edu" class="home-button home-button--primary">Email Me</a>
      <a href="https://www.linkedin.com/in/lily-shen/" class="home-button home-button--ghost">LinkedIn</a>
      <a href="{{ '/publications/' | relative_url }}" class="home-button home-button--ghost">Publications</a>
      <a href="{{ '/teaching/' | relative_url }}" class="home-button home-button--ghost">Teaching</a>
    </div>
  </section>
</div>
