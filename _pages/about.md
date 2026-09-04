---
permalink: /
title: "Li Shen, Ph.D. — Applied Economist & Pricing Data Scientist"
excerpt: "Portfolio of Li Shen, Ph.D., an applied economist and pricing data scientist working with retail scanner data, wholesale prices, demand models, and regional trade-cost shocks."
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
      <h1 class="home-title">Applied Economist & Pricing Data Scientist</h1>
      <p class="home-lead">
        I turn price, cost, demand, and market-integration data into empirical models, deployed tools, and clear decisions.
        My work spans 6.6M retail scanner records, 3.99M commodity-price observations, mobility traces, input-output tables,
        customs micro-data, and geospatial rasters, using causal inference, demand estimation, structural modeling,
        machine learning, and counterfactual simulation.
      </p>

      <div class="home-actions">
        <a href="{{ '/pricing-engine/' | relative_url }}" class="home-button home-button--primary">Pricing Engine</a>
        <a href="{{ '/applied/' | relative_url }}" class="home-button home-button--ghost">Pricing & Data Projects</a>
        <a href="{{ '/cv/' | relative_url }}" class="home-button home-button--ghost">Public Resume</a>
        <a href="{{ '/research/' | relative_url }}" class="home-button home-button--ghost">Research</a>
      </div>

      <div class="home-skill-row" aria-label="Core skills">
        <span>Price · Demand · Cost Modeling</span>
        <span>Causal Inference (DiD, Shift-Share IV)</span>
        <span>Counterfactual Simulation + Optimization</span>
        <span>Machine Learning (Kaggle Silver/Bronze)</span>
        <span>Python / SQL / Stata / MATLAB</span>
        <span>MRIO / ICIO / Customs Micro-data</span>
      </div>
    </div>

    <aside class="home-card home-card--signal" data-home-reveal>
      <div class="home-signal__top">
        <img src="{{ '/images/profile-photo.png' | relative_url }}" alt="Li Shen" class="home-avatar home-avatar--inline">
        <div class="home-actions home-actions--compact">
          <a href="mailto:lshen@clarku.edu" class="home-button home-button--primary">✉ Email</a>
        </div>
      </div>

      <div class="home-panel__top home-panel__top--center">
        <div>
          <p class="home-label">Live Profile</p>
          <h2 class="home-panel__title">Current focus</h2>
        </div>
        <div class="home-clock">
          <span class="home-clock__time" data-home-time>--:--</span>
          <span class="home-clock__meta">Worcester, MA</span>
        </div>
      </div>

      <div class="home-panel__profile home-panel__profile--center">
        <div>
          <p class="home-availability">Applied economist and pricing data scientist with a Ph.D. in Economics from Clark University.</p>
          <p class="home-availability">Open to pricing data science, applied economics, pricing analytics, product and risk analytics, economic consulting, and strategy analytics roles.</p>
          <p class="home-availability">Live apps: <a href="https://pricing-promotion-decision-engine.streamlit.app/">Pricing Engine ↗</a> · <a href="https://pop-density-spatial.streamlit.app/">Population Atlas ↗</a></p>
          <p class="home-rotator-label">Rotating between</p>
          <p class="home-rotator" data-home-rotator data-words="price, demand, and margin-sensitive decisions|commodity wholesale price dispersion|trade-cost shocks and local multipliers">
            price, demand, and margin-sensitive decisions
          </p>
        </div>
      </div>

      <div class="home-journey home-journey--lab" data-home-journey aria-label="Pricing decision lab from market evidence to validation">
        <div class="home-journey__header">
          <div>
            <p class="home-label">Research-to-decision trajectory</p>
            <h3>From market prices to pricing decisions</h3>
            <p class="home-journey__dek">Price evidence, counterfactuals, constraints, and test design in one empirical workflow.</p>
          </div>
          <div class="home-journey__controls" aria-label="Timeline controls">
            <button type="button" class="home-journey__control" data-journey-toggle aria-pressed="false">Pause</button>
            <button type="button" class="home-journey__control" data-journey-replay>Replay</button>
          </div>
        </div>

        <div class="home-lab" aria-label="Pricing decision lab visual">
          <div class="home-lab__main">
            <article class="home-lab__screen home-lab__screen--evidence is-active" data-journey-panel>
              <span class="home-lab__eyebrow">Price evidence</span>
              <div class="home-lab__stat">
                <strong>3.99M</strong>
                <span>city-pair-month observations built from daily wholesale vegetable prices and mobility indices</span>
              </div>
              <div class="home-lab__fields" aria-label="Price evidence inputs">
                <span>daily prices</span>
                <span>city pairs</span>
                <span>mobility</span>
                <span>HSR access</span>
                <span>fixed effects</span>
                <span>price dispersion</span>
              </div>
            </article>

            <div class="home-lab__side">
              <article class="home-lab__screen" data-journey-panel>
                <span class="home-lab__eyebrow">Counterfactual inputs</span>
                <div class="home-lab__source-grid">
                  <span>MRIO</span><strong>province-sector links</strong>
                  <span>ICIO</span><strong>global exposure</strong>
                  <span>Customs</span><strong>micro-data shocks</strong>
                </div>
                <p class="home-lab__note">Trade-cost counterfactuals through domestic production networks.</p>
              </article>

              <article class="home-lab__screen" data-journey-panel>
                <span class="home-lab__eyebrow">Retail decision engine</span>
                <ul class="home-lab__checks">
                  <li>6.6M scanner rows</li>
                  <li>Demand + promo response</li>
                  <li>Cost / margin constraints</li>
                </ul>
              </article>

              <article class="home-lab__screen" data-journey-panel>
                <span class="home-lab__eyebrow">Validation plan</span>
                <div class="home-lab__test">
                  <strong>A/B</strong>
                  <span>Power</span>
                  <span>Risk</span>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div class="home-journey__track" aria-hidden="true">
          <span class="home-journey__rail"></span>
          <span class="home-journey__progress" data-journey-progress></span>
          <span class="home-journey__marker is-active" data-journey-marker style="--step-x: 0%;">1</span>
          <span class="home-journey__marker" data-journey-marker style="--step-x: 33.333%;">2</span>
          <span class="home-journey__marker" data-journey-marker style="--step-x: 66.666%;">3</span>
          <span class="home-journey__marker" data-journey-marker style="--step-x: 100%;">4</span>
        </div>

        <div class="home-journey__steps">
          <article class="home-journey__step is-active" data-journey-step>
            <span class="home-journey__year">2022</span>
            <strong>Market evidence</strong>
            <span>3.99M commodity-price observations</span>
          </article>
          <article class="home-journey__step" data-journey-step>
            <span class="home-journey__year">2024</span>
            <strong>Counterfactuals</strong>
            <span>Trade-cost and market-integration scenarios</span>
          </article>
          <article class="home-journey__step" data-journey-step>
            <span class="home-journey__year">2025</span>
            <strong>Retail pricing</strong>
            <span>6.6M scanner rows for demand estimation</span>
          </article>
          <article class="home-journey__step" data-journey-step>
            <span class="home-journey__year">Now</span>
            <strong>Test and validate</strong>
            <span>A/B power analysis and risk guardrails</span>
          </article>
        </div>

        <div class="home-cockpit">
          <div>
            <span class="home-cockpit__label">Decision pipeline</span>
            <strong>Evidence -> Model -> Decision -> Validation</strong>
            <span>Demand, cost, inventory, and margin constraints</span>
          </div>
          <div class="home-cockpit__status" data-journey-status>
            <span>Active</span>
            <strong>Market evidence</strong>
          </div>
        </div>
      </div>

      <div class="home-metrics">
        <article>
          <strong>6.6M</strong>
          <span>retail scanner rows in pricing engine</span>
        </article>
        <article>
          <strong>3.99M</strong>
          <span>commodity-price observations</span>
        </article>
        <article>
          <strong data-counter="31">31</strong>
          <span>provinces in spatial model</span>
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
      <p class="home-label">Retail pricing decisions</p>
      <h2>How should price and promotion changes be tested before rollout?</h2>
      <p>I estimate demand response, simulate price and promotion scenarios, and optimize profit under cost, inventory, and margin constraints. <strong>Core asset: Pricing and Promotion Decision Engine.</strong></p>
    </article>

    <article class="home-card home-card--pillar" data-home-reveal>
      <p class="home-label">Commodity prices and market integration</p>
      <h2>How do mobility and connectivity shocks change spatial price dispersion?</h2>
      <p>I use high-frequency wholesale prices and smartphone-based mobility data to study how passenger connectivity, rather than freight costs, shapes spatial price dispersion across Chinese cities. <strong>Core asset: HSR and Market Integration paper.</strong></p>
    </article>

    <article class="home-card home-card--pillar" data-home-reveal>
      <p class="home-label">Trade-cost shocks and local multipliers</p>
      <h2>Why do similar external shocks produce different regional outcomes?</h2>
      <p>I build quantitative spatial models to measure how trade-cost shocks propagate through domestic production networks, local absorption, and non-tradable demand. <strong>Core asset: Trade shock paper.</strong></p>
    </article>
  </section>

  <section class="home-grid home-grid--major">
    <div class="home-card" data-home-reveal>
      <div class="home-section__header">
        <div>
          <p class="home-label">Research and Tools</p>
          <h2>Selected work</h2>
        </div>
        <a href="{{ '/research/' | relative_url }}" class="home-inline-link">Full research list</a>
      </div>

      <div class="home-research-grid">
        <article class="home-feature-card">
          <p class="home-feature-card__meta">Decision Tool - 2025-Present</p>
          <h3>Pricing and Promotion Decision Engine</h3>
          <p>
            Built on 6.6M rows of Dominick's scanner data: log-log fixed-effects demand estimation, price and promotion counterfactuals,
            constrained profit optimization under cost and margin inputs, and A/B power calculations, deployed as a live Streamlit app.
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
          <p class="home-feature-card__meta">Working Paper - 2024-Present</p>
          <h3>The Local Multiplier Effects of Trade</h3>
          <p>
            Built a multi-sector quantitative spatial model for 31 Chinese provinces calibrated to MRIO, ICIO, and Customs micro-data.
            Identifies the own-trade share as the structural organizing statistic for multiplier heterogeneity, with inland inward-oriented
            economies amplifying external shocks through non-tradable service demand.
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
          <p class="home-list__meta">Pricing and demand evidence</p>
          <h3>Retail scanner panels and wholesale price data</h3>
          <p>Demand estimation, promotion counterfactuals, and margin-sensitive pricing simulations on scanner data, plus panel gravity regressions on 3.99M city-pair-month observations of daily Chinese wholesale prices.</p>
        </article>

        <article class="home-list__item">
          <p class="home-list__meta">Structural quantification</p>
          <h3>Trade-cost shocks and local multipliers</h3>
          <p>Counterfactual simulations with calibrated trade costs, productivity, and input-output coefficients to study how shocks move through regional production networks.</p>
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
          <p class="home-timeline__date">2025 - Present</p>
          <div class="home-timeline__body">
            <span class="home-badge">Applied</span>
            <h3>Pricing and Promotion Decision Engine</h3>
            <p>Live demand-estimation and constrained-optimization tool on 6.6M rows of scanner data, deployed as a Streamlit app.</p>
          </div>
        </article>

        <article class="home-timeline__item">
          <p class="home-timeline__date">2024 - Present</p>
          <div class="home-timeline__body">
            <span class="home-badge">Research</span>
            <h3>The Local Multiplier Effects of Trade</h3>
            <p>Quantitative spatial modeling and shift-share IV estimation on Chinese trade and production data; model-implied provincial GDP multipliers from 0.30 to 1.02.</p>
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
            <p class="home-profile__line">Clark University, Ph.D. in Economics (2026)</p>
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
            <p class="home-profile__line">Doctoral Fellowship, Clark University (2019-2026)</p>
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
      <h2>Interested in pricing analytics, market integration, counterfactual decision systems, or the research-to-decision pipeline behind them?</h2>
      <p>
        I am happy to discuss pricing analytics, product analytics, risk analytics, economic consulting, policy analysis, and quantitative research roles where rigorous empirical work needs to become clear business or policy decisions.
        Email is the fastest way to reach me.
      </p>
    </div>

    <div class="home-actions home-actions--compact">
      <a href="mailto:lshen@clarku.edu" class="home-button home-button--primary">Email Me</a>
      <a href="https://www.linkedin.com/in/lily-shen/" class="home-button home-button--ghost">LinkedIn</a>
      <a href="https://github.com/Li-Shen-Clark" class="home-button home-button--ghost">GitHub</a>
      <a href="{{ '/applied/' | relative_url }}" class="home-button home-button--ghost">Pricing & Data Projects</a>
      <a href="{{ '/teaching/' | relative_url }}" class="home-button home-button--ghost">Teaching</a>
    </div>
  </section>
</div>
