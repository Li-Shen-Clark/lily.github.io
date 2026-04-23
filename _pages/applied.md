---
layout: archive
title: "Applied Projects"
permalink: /applied/
author_profile: true
hide_title: true
robots: index,follow
sitemap: true
---

{% include base_path %}

Applied data-science and machine-learning work that complements my academic research. Each project below ships as a live tool or a competition submission with open code where possible.

## Applied Projects

### Pricing and Promotion Decision Engine (2025--Present)

- **Live app:** [pricing-promotion-decision-engine.streamlit.app](https://pricing-promotion-decision-engine.streamlit.app/)
- **Code:** [github.com/Li-Shen-Clark/pricing-promotion-decision-engine](https://github.com/Li-Shen-Clark/pricing-promotion-decision-engine)
- **Stack:** Python (pandas, statsmodels, scikit-learn), Streamlit, pytest, Git/GitHub

End-to-end demand-estimation and decision-support tool built on 6.6M rows of Dominick's Finer Foods scanner data (cleaned panel of 486 UPCs, 93 stores, 366 weeks).

- Estimated a log-log fixed-effects demand model with Duan smearing retransformation for unbiased level-scale predictions.
- Implemented counterfactual price and promotion simulations with constrained profit optimization under cost, inventory, and margin limits.
- Designed A/B validation plans with power analysis for raise-and-test pricing candidates; flagged input ranges that leave the support of the model.
- Deployed as an interactive Streamlit application backed by a modular Python codebase, a pytest test suite, reproducible requirements, and auto-deploy from GitHub.

The workflow---estimate signal, simulate counterfactual, optimize under constraints, validate before shipping---mirrors the research-to-decision pipeline used in systematic investment and pricing research.

### China Population Density Atlas (2022--Present)

- **Live app:** [pop-density-spatial.streamlit.app](https://pop-density-spatial.streamlit.app/)
- **Stack:** Python (GeoPandas, rasterio, NumPy), Streamlit
- **Companion paper:** [Population Agglomeration and Spatial Reallocation in China](/research/) (SSRN preprint)

Interactive geospatial visualization of China's population geography built from 19 years of 5 km-resolution population-density rasters (2002--2020) harmonized into an annual panel.

- Processed WorldPop rasters covering the full territory of China into grid-cell and province-level summaries.
- Surfaced documented patterns from the underlying research: rising spatial Gini, expansion of dense urban corridors, and a 17 km southeastward shift in the population-weighted centroid.
- Deployed in 2025 for map-based exploration of density, agglomeration, and urban-corridor metrics at multiple spatial scales.

## Machine Learning Competitions

### Kaggle Silver Medal --- Home Credit Credit Risk Model Stability (Feb--May 2024)

- **Stack:** Python, Polars, scikit-learn, LightGBM, CatBoost
- **Role:** Statistical modeling and co-developer

Competition focused on model stability over time (Gini Stability metric) rather than raw AUC --- a realistic production concern for credit-risk models that retrain on drifting data.

- Co-developed a Polars lazy-execution ETL pipeline for multi-depth relational data, enabling fast iteration on feature definitions across parent-child tables.
- Designed aggregation features (max, last, mean) capturing borrower behavioral trends; these were adopted across the team codebase.
- Optimized directly for the headline Gini Stability metric to prevent performance drift over time; implemented correlation-based feature grouping (Pearson > 0.8) for multicollinearity control and type-downcasting memory optimization (over 50% reduction).

### Kaggle Bronze Medal --- ICR Identifying Age-Related Conditions (May--Aug 2023)

- **Stack:** Python, TabPFN, XGBoost, imbalanced-learn
- **Role:** ML researcher and co-developer

Competition on a small, severely class-imbalanced medical dataset with auxiliary metadata (Greek) hinting at latent subgroup structure.

- Designed a stratified resampling strategy using the Greek metadata (RandomOverSampler on Alpha-defined latent subgroups) to preserve population structure under severe class imbalance.
- Co-developed a voting ensemble combining parametric (XGBoost) and non-parametric (TabPFN) models under a custom Balanced Log Loss metric.
- Calibrated decision thresholds to minimize false negatives, trading off precision for recall as appropriate to the medical-screening use case.

## Toolkit

- **Programming:** Python (pandas, NumPy, scikit-learn, statsmodels, GeoPandas, Polars), SQL, R, MATLAB; Git/GitHub, pytest.
- **Machine learning:** Gradient boosting (XGBoost, LightGBM, CatBoost), cross-validation, feature engineering, model stacking, regularization.
- **Deployment:** Streamlit (multiple live apps), reproducible requirements, auto-deploy from GitHub.
- **Data at scale:** Multi-million-row panels, high-frequency price data, geospatial rasters, multi-regional input-output tables.

---

See also: [Research](/research/) | [CV](/cv/)
