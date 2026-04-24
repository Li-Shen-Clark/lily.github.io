---
permalink: /
title: "Li Shen — Applied Economist & Quantitative Scientist"
excerpt: "Research portfolio on trade shocks, market integration, and pricing analytics. Ph.D. Candidate in Economics at Clark University combining causal inference, quantitative spatial models, and large-scale data systems."
layout: home
author_profile: false
og_image: "og_research.png"
robots: index,follow
sitemap: true
redirect_from:
  - /about/
  - /about.html
---

<div class="home-shell">
  <section class="home-hero">
    <div class="home-copy" data-home-reveal>
      <h1 class="home-title">Applied Economist and Quantitative Scientist</h1>
      <p class="home-lead">
        I study how trade, transport, and pricing shocks propagate through connected markets and local economies.
        My work combines causal inference, quantitative spatial models, and large-scale data systems to produce
        counterfactual evidence for policy and business decisions.
      </p>

      <div class="home-actions">
        <a href="{{ '/research/' | relative_url }}" class="home-button home-button--primary">Research</a>
        <a href="{{ '/applied/' | relative_url }}" class="home-button home-button--ghost">Applied Decision Tools</a>
        <a href="{{ '/cv/' | relative_url }}" class="home-button home-button--ghost">CV</a>
      </div>

      <div class="home-skill-row" aria-label="Core skills">
        <span>Causal Inference (DiD, Shift-Share IV)</span>
        <span>Quantitative Spatial Models</span>
        <span>Demand Estimation + Optimization</span>
        <span>Machine Learning (Kaggle Silver/Bronze)</span>
        <span>Python / SQL / Stata / MATLAB</span>
        <span>MRIO / ICIO</span>
      </div>
    </div>

    <aside class="home-card home-card--signal" data-home-reveal>
      <div class="home-actions home-actions--compact" style="justify-content: flex-end; margin-bottom: 1em;">
        <a href="mailto:lshen@clarku.edu" class="home-button home-button--primary">✉ Email</a>
        <a href="https://www.linkedin.com/in/lily-shen/" class="home-button home-button--ghost">LinkedIn</a>
        <a href="https://github.com/Li-Shen-Clark" class="home-button home-button--ghost">GitHub</a>
      </div>

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
          <p class="home-availability">Live apps: <a href="https://pricing-promotion-decision-engine.streamlit.app/">Pricing Engine ↗</a> · <a href="https://pop-density-spatial.streamlit.app/">Population Atlas ↗</a></p>
          <p class="home-rotator-label">Rotating between</p>
          <p class="home-rotator" data-home-rotator data-words="local trade multipliers and labor spillovers|high-speed rail and market integration|demand estimation and pricing optimization at scale">
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
          <span>Inland provinces amplify shocks most</span>
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
          <strong>0.30–1.02</strong>
          <span>model-implied multiplier range across provinces</span>
        </article>
      </div>
    </aside>
  </section>

  <section class="home-pillars">
    <article class="home-card home-card--pillar" data-home-reveal>
      <p class="home-label">Trade shocks and local multipliers</p>
      <h2>How do external trade-cost shocks propagate across regional economies?</h2>
      <p>I build quantitative spatial models to measure how international trade shocks propagate across China's provincial economies through domestic production networks and non-tradable demand. <strong>Core asset: Job Market Paper.</strong></p>
    </article>

    <article class="home-card home-card--pillar" data-home-reveal>
      <p class="home-label">Transport and market integration</p>
      <h2>How do mobility and connectivity shocks integrate spatial markets?</h2>
      <p>I use high-frequency wholesale prices and smartphone-based mobility data to study how passenger connectivity, rather than freight costs, shapes spatial price dispersion across Chinese cities. <strong>Core asset: HSR and Market Integration paper.</strong></p>
    </article>

    <article class="home-card home-card--pillar" data-home-reveal>
      <p class="home-label">Pricing and business counterfactuals</p>
      <h2>How does the same counterfactual logic translate into firm-level decisions?</h2>
      <p>I extend the estimate--simulate--optimize workflow from regional trade models to firm-level pricing: estimate demand response, simulate alternative policies, and optimize revenue or margin under cost, inventory, and feasibility constraints. <strong>Core asset: Pricing and Promotion Decision Engine.</strong></p>
    </article>
  </section>

  <section class="home-grid home-grid--major">
    <div class="home-card" data-home-reveal>
      <div class="home-section__header">
        <div>
          <p class="home-label">Working Papers</p>
          <h2>Selected research</h2>
        </div>
        <a href="{{ '/research/' | relative_url }}" class="home-inline-link">Full research list</a>
      </div>

      <div class="home-research-grid">
        <article class="home-feature-card">
          <p class="home-feature-card__meta">Job Market Paper - 2024-Present</p>
          <h3>The Local Multiplier Effects of Trade</h3>
          <p>
            Built a multi-sector quantitative spatial model for 31 Chinese provinces calibrated to MRIO, ICIO, and Customs micro-data.
            Identifies the own-trade share as the structural organizing statistic for multiplier heterogeneity, with inland inward-oriented
            economies amplifying external shocks through non-tradable service demand.
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

        <article class="home-feature-card">
          <p class="home-feature-card__meta">Decision Tool - 2025-Present</p>
          <h3>Pricing and Promotion Decision Engine</h3>
          <p>
            Extends the estimate--simulate--optimize workflow from regional trade models to firm-level pricing on 6.6M rows of Dominick's scanner data:
            log-log fixed-effects demand estimation, counterfactual simulation, and constrained profit optimization, deployed as a live Streamlit app.
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
          <p class="home-list__meta">Empirical panel evidence</p>
          <h3>High-frequency gravity and within-pair analysis</h3>
          <p>Panel gravity regressions on 3.99M city-pair-month observations of daily Chinese wholesale prices with city-pair fixed effects. Distance heterogeneity and cross-product heterogeneity (bulky low-value vs. perishable goods) separate passenger-mobility channels from direct freight substitution.</p>
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
            <span class="home-badge">Job Market Paper</span>
            <h3>The Local Multiplier Effects of Trade</h3>
            <p>Quantitative spatial modeling and shift-share IV estimation on Chinese trade and production data; model-implied provincial GDP multipliers from 0.30 to 1.02.</p>
          </div>
        </article>

        <article class="home-timeline__item">
          <p class="home-timeline__date">2025 - Present</p>
          <div class="home-timeline__body">
            <span class="home-badge">Applied</span>
            <h3>Pricing and Promotion Decision Engine</h3>
            <p>Live demand-estimation and constrained-optimization tool on 6.6M rows of scanner data, deployed as a Streamlit app.</p>
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
          <p class="home-timeline__date">2023 - 2024</p>
          <div class="home-timeline__body">
            <span class="home-badge">ML</span>
            <h3>Kaggle Competitions (Silver and Bronze)</h3>
            <p>Silver Medal on Home Credit Credit Risk Model Stability (LightGBM/CatBoost, Polars ETL); Bronze on ICR Identifying Age-Related Conditions (XGBoost/TabPFN ensemble).</p>
          </div>
        </article>

        <article class="home-timeline__item">
          <p class="home-timeline__date">2022 - Present</p>
          <div class="home-timeline__body">
            <span class="home-badge">Applied</span>
            <h3>China Population Density Atlas</h3>
            <p>Processed 19 years of 5 km population rasters into a harmonized panel; deployed an interactive Streamlit map in 2025.</p>
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
          <div class="home-profile__lines">
            <p class="home-profile__line">Clark University, Ph.D. in Economics (Expected Aug 2026)</p>
            <p class="home-profile__line">SUNY Buffalo, M.A. in Economics</p>
            <p class="home-profile__line">Valparaiso University, M.S. in International Economics and Finance</p>
            <p class="home-profile__line">Chongqing University, B.Mgmt. in Accounting</p>
          </div>
        </article>

        <article class="home-list__item home-profile__item">
          <p class="home-list__meta">Awards</p>
          <div class="home-profile__lines">
            <p class="home-profile__line">Sheftel Award for Research Excellence, Clark University (2025, two-time recipient)</p>
            <p class="home-profile__line">Veendorp Best Field Paper Award (2022)</p>
            <p class="home-profile__line">Doctoral Fellowship, Clark University (2019-Present)</p>
            <p class="home-profile__line">Distinguished Student Award (Graduate School), Valparaiso University Alumni Association (2018)</p>
            <p class="home-profile__line">Kaggle Silver Medal (2024) and Bronze Medal (2023)</p>
          </div>
        </article>

        <article class="home-list__item home-profile__item">
          <p class="home-list__meta">Selected presentations</p>
          <div class="home-profile__lines">
            <p class="home-profile__line">Southern Economic Association (2025)</p>
            <p class="home-profile__line">Midwest Economic Conference (2025)</p>
            <p class="home-profile__line">Clark Ph.D. seminars (2022-2025)</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="home-card home-card--cta" data-home-reveal>
    <div>
      <p class="home-label">Contact</p>
      <h2>Interested in shock propagation, market integration, counterfactual decision systems, or the research-to-decision pipeline behind them?</h2>
      <p>
        I am happy to discuss research collaboration, counterfactual decision tools, economic consulting, policy analysis, and quantitative research roles in industry or government.
        Email is the fastest way to reach me.
      </p>
    </div>

    <div class="home-actions home-actions--compact">
      <a href="mailto:lshen@clarku.edu" class="home-button home-button--primary">Email Me</a>
      <a href="https://www.linkedin.com/in/lily-shen/" class="home-button home-button--ghost">LinkedIn</a>
      <a href="https://github.com/Li-Shen-Clark" class="home-button home-button--ghost">GitHub</a>
      <a href="{{ '/applied/' | relative_url }}" class="home-button home-button--ghost">Applied Decision Tools</a>
      <a href="{{ '/teaching/' | relative_url }}" class="home-button home-button--ghost">Teaching</a>
    </div>
  </section>
</div>
