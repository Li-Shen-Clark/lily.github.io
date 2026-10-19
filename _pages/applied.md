---
layout: archive
title: "Applied Projects"
permalink: /applied/
author_profile: true
excerpt: "Applications of economic modeling and data analysis to pricing, forecasting, and spatial measurement."
robots: index,follow
sitemap: true
---

These projects apply economic models and empirical methods to pricing, forecasting, and spatial analysis. Each project links to a demonstration, case study, or source code so that readers can examine the work in more detail.

<a id="pricing-engine"></a>
## Pricing and Promotion Decision Engine

**Problem.** How can demand estimates inform pricing decisions when costs, inventory, and margins constrain the available choices?

**Work.** The application uses 6.6 million raw Dominick's Finer Foods scanner records, yielding a cleaned panel of 4.65 million rows covering 486 UPCs, 93 stores, and 366 weeks. It combines a log-log fixed-effects demand model with price and promotion simulations, constrained profit optimization, and experimental validation plans.

**What it demonstrates.** Demand estimation, simulation, optimization, power analysis, and deployment of an interactive research application. The observational estimates support conditional scenarios; they are not experimental estimates of causal price response. A/B tests are proposed validation steps, and simulated gains are not measured business outcomes.

**Tools.** Python, pandas, statsmodels, scikit-learn, Streamlit, and pytest.

[Project details]({{ '/pricing-engine/' | relative_url }}) · [Open the application](https://pricing-promotion-decision-engine.streamlit.app/) · [Source code](https://github.com/Li-Shen-Clark/pricing-promotion-decision-engine)

<a id="price-intelligence"></a>
## Vegetable Price Intelligence

**Problem.** How can historical wholesale prices support forecasting and risk assessment when coverage and predictive performance vary across markets?

**Work.** The system organizes 8.68 million historical records across 117 cities and 30 vegetables into 7.36 million city-day observations with documented mappings and quality flags. It evaluates 7-, 14-, and 28-day forecasts against persistence and seasonal baselines, and studies 14-day price-spike signals.

**Evaluation.** On the project's held-out historical test, overall weighted absolute percentage error falls from 18.72% to 17.54%. Ten weak product-horizon groups use a baseline fallback. A proposed directional network was withheld after only 4 of 15 selected edges improved out of sample. These are historical evaluation results, not live forecasts or guaranteed future performance.

**What it demonstrates.** Data validation, evaluation across time, baseline comparisons, and decisions about when a model is reliable enough to use.

**Tools.** Python, pandas, Polars, scikit-learn, statsmodels, and pytest.

[Case study](https://li-shen-clark.github.io/vegetable-price-intelligence/) · [Source code](https://github.com/Li-Shen-Clark/vegetable-price-intelligence) · [Related market-integration research]({{ '/research/#market-integration' | relative_url }})

<a id="population-atlas"></a>
## China Population Density Atlas

**Problem.** How can changes in population concentration be compared across places and years?

**Work.** Annual WorldPop rasters for 2002–2020 are harmonized at approximately 5 km resolution. The interactive atlas presents density, agglomeration, and urban-corridor measures at multiple geographic scales.

**What it demonstrates.** Geospatial data processing, consistent measurement, and interactive communication of descriptive research.

**Tools.** Python, GeoPandas, rasterio, NumPy, and Streamlit.

[Open the atlas](https://pop-density-spatial.streamlit.app/) · [Companion research]({{ '/research/#population-agglomeration' | relative_url }})

## Machine learning competitions

### Home Credit — Credit Risk Model Stability

**Kaggle silver medal, 2024.** As a team contributor, I co-developed data processing with Polars, designed aggregation features, and worked on time stability, feature grouping, and memory efficiency using LightGBM and CatBoost.

### ICR — Identifying Age-Related Conditions

**Kaggle bronze medal, 2023.** As a team contributor, I worked on class imbalance, resampling, model ensembles, and threshold selection using TabPFN, XGBoost, and imbalanced-learn.

[Research]({{ '/research/' | relative_url }}) · [Writing]({{ '/writing/' | relative_url }}) · [Economist CV]({{ '/cv/' | relative_url }})
