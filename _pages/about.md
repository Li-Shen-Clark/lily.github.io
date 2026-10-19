---
permalink: /
title: "Li Shen, Ph.D. — Economist"
excerpt: "Li Shen studies trade, regional economies, and prices, combining economic research with applied work in demand estimation, pricing, and forecasting."
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
      <p class="home-kicker">Li Shen · Ph.D. in Economics</p>
      <h1 class="home-title">Economist</h1>
      <p class="home-lead">I study how trade, market connections, and prices shape regional economies and business decisions. My work combines quantitative spatial models, econometrics, and large datasets to examine economic mechanisms and evaluate alternative scenarios.</p>
      <p class="home-lead">Alongside my research on trade and market integration, I develop tools for demand estimation, pricing, and forecasting.</p>
      <div class="home-actions">
        <a href="{{ '/research/' | relative_url }}" class="home-button home-button--primary">Research</a>
        <a href="{{ '/applied/' | relative_url }}" class="home-button home-button--primary">Applied Projects</a>
        <a href="{{ '/cv/' | relative_url }}" class="home-button home-button--ghost">Economist CV</a>
        <a href="{{ '/writing/' | relative_url }}" class="home-button home-button--ghost">Writing</a>
      </div>
      <div class="home-skill-row" aria-label="Research and applied methods">
        <span>International Trade</span>
        <span>Quantitative Spatial Economics</span>
        <span>Market Integration</span>
        <span>Demand Estimation and Pricing</span>
        <span>Econometrics and Forecasting</span>
      </div>
    </div>
    <aside class="home-card home-card--signal" data-home-reveal aria-label="About Li Shen">
      <div class="home-signal__top">
        <img src="{{ '/images/profile-photo.png' | relative_url }}" alt="Li Shen" class="home-avatar home-avatar--inline">
        <div class="home-clock">
          <span class="home-clock__time" data-home-time>Eastern Time</span>
          <span class="home-clock__meta">Worcester, Massachusetts</span>
        </div>
      </div>
      <div>
        <p class="home-label">Background</p>
        <h2>Research and application</h2>
        <p>I received my Ph.D. in Economics from Clark University in August 2026. I am interested in research and economist roles in universities, policy institutions, and industry.</p>
      </div>
      <div class="home-list">
        <article class="home-list__item">
          <h3>Economic research</h3>
          <p>Trade shocks, local multipliers, production networks, and spatial price differences.</p>
        </article>
        <article class="home-list__item">
          <h3>Applied work</h3>
          <p>Demand models, pricing scenarios, price forecasting, and geospatial analysis.</p>
        </article>
      </div>
      <div class="home-actions">
        <a href="mailto:lshen@clarku.edu" class="home-button home-button--primary">Email</a>
        <a href="https://www.linkedin.com/in/lily-shen/" class="home-button home-button--ghost">LinkedIn</a>
      </div>
    </aside>
  </section>

  <section class="home-grid home-grid--split" aria-label="Selected research and applied projects">
    <div class="home-card" data-home-reveal>
      <div class="home-section__header">
        <div><p class="home-label">Research papers</p><h2>Trade and connected markets</h2></div>
      </div>
      <div class="home-list">
        <article class="home-list__item">
          <p class="home-list__meta">Job market paper · Joint research</p>
          <h3><a href="{{ '/research/#local-multipliers' | relative_url }}">The Local Multiplier Effects of Trade</a></h3>
          <p>Why do similar export shocks have different local effects? A quantitative spatial model connects regional production networks, service demand, and labor mobility.</p>
          <p>With Kensuke Suzuki, Xiaocong Xu, and Junfu Zhang.</p>
        </article>
        <article class="home-list__item">
          <p class="home-list__meta">Working paper</p>
          <h3><a href="{{ '/research/#market-integration' | relative_url }}">High-Speed Rail and Market Integration</a></h3>
          <p>Research on the relationship between passenger connectivity and wholesale vegetable price dispersion across Chinese cities.</p>
        </article>
        <article class="home-list__item">
          <p class="home-list__meta">Preprint</p>
          <h3><a href="{{ '/research/#population-agglomeration' | relative_url }}">Population Agglomeration and Spatial Reallocation</a></h3>
          <p>Geospatial evidence on how population concentration and settlement patterns changed across China.</p>
        </article>
      </div>
      <a href="{{ '/research/' | relative_url }}" class="home-inline-link">Explore research and methods →</a>
    </div>
    <div class="home-card" data-home-reveal>
      <div class="home-section__header">
        <div><p class="home-label">Applied projects</p><h2>Prices, demand, and data</h2></div>
      </div>
      <div class="home-list">
        <article class="home-list__item">
          <p class="home-list__meta">Interactive tool</p>
          <h3><a href="{{ '/applied/#pricing-engine' | relative_url }}">Pricing and Promotion Decision Engine</a></h3>
          <p>Demand estimation, pricing simulations, constrained optimization, and experimental validation plans using retail scanner data.</p>
        </article>
        <article class="home-list__item">
          <p class="home-list__meta">Forecasting case study</p>
          <h3><a href="{{ '/applied/#price-intelligence' | relative_url }}">Vegetable Price Intelligence</a></h3>
          <p>Historical price forecasts, risk signals, and comparisons with simple baselines, including fallback decisions when a model performs poorly.</p>
        </article>
        <article class="home-list__item">
          <p class="home-list__meta">Interactive atlas</p>
          <h3><a href="{{ '/applied/#population-atlas' | relative_url }}">China Population Density Atlas</a></h3>
          <p>A map-based companion to the population research, built from annual geospatial data.</p>
        </article>
      </div>
      <a href="{{ '/applied/' | relative_url }}" class="home-inline-link">Explore projects, code, and demonstrations →</a>
    </div>
  </section>

  <section class="home-card" data-home-reveal aria-labelledby="home-writing-title">
    <p class="home-label">Writing</p>
    <h2 id="home-writing-title">Trade, cities, and prices</h2>
    {% assign published_writing = site.writing | where: "published", true | where_exp: "article", "article.date <= site.time" | sort: "date" | reverse %}
    {% if published_writing.size > 0 %}
      <div class="home-list">
      {% for article in published_writing limit:3 %}
        <article class="home-list__item">
          <p class="home-list__meta">{{ article.date | date: "%B %-d, %Y" }}</p>
          <h3><a href="{{ article.url | relative_url }}">{{ article.title | escape }}</a></h3>
        </article>
      {% endfor %}
      </div>
    {% else %}
      <p>Essays on economic research, empirical methods, and their applications. No articles have been published yet.</p>
    {% endif %}
    <a href="{{ '/writing/' | relative_url }}" class="home-inline-link">Visit the writing section →</a>
  </section>

  <section class="home-grid home-grid--split">
    <div class="home-card" data-home-reveal>
      <p class="home-label">Methods</p>
      <h2>Models and empirical evidence</h2>
      <p>Quantitative spatial equilibrium, input-output analysis, panel econometrics, demand estimation, forecasting, and geospatial measurement.</p>
      <p>I work with retail scanner panels, wholesale prices, mobility records, trade and production data, and population rasters using Python, SQL, Stata, MATLAB, and R.</p>
    </div>
    <div class="home-card" data-home-reveal>
      <p class="home-label">Teaching and background</p>
      <h2>Explaining economic ideas</h2>
      <p>At Clark University, I supported graduate finance and undergraduate economics courses as a teaching assistant from 2020 to 2025.</p>
      <p>My work has received the Sheftel Award for Research Excellence and the Veendorp Best Field Paper Award. I also contributed to teams awarded silver and bronze medals in Kaggle competitions.</p>
      <a href="{{ '/teaching/' | relative_url }}" class="home-inline-link">Teaching experience →</a>
      <span aria-hidden="true"> · </span>
      <a href="{{ '/cv/' | relative_url }}" class="home-inline-link">Economist CV →</a>
    </div>
  </section>
</div>
