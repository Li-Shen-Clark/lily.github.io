---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
robots: index,follow
sitemap: true
---

## Research Interests

International trade; quantitative spatial economics; market integration; regional development; urban and population geography; industrial policy; China and emerging Asia.

## Working Papers

### The Local Multiplier Effects of Trade: A Quantitative Analysis of China (Job Market Paper)
*with Kensuke Suzuki, Xiaocong Xu, and Junfu Zhang*

- Develops a multi-sector quantitative spatial model calibrated to China's 2017 MRIO table to study how export shocks propagate through domestic production networks and labor markets.
- Shows that multiplier heterogeneity is driven by the intra-regional manufacturing trade share; model-implied local GDP multipliers range from 0.30 to 1.02 across provinces.
- Combines structural analysis with IV evidence from city-level data, estimating sizable export-income and export-employment spillovers.

### High-Speed Railway and Market Integration: Evidence from Vegetable Price Dispersion in China

- Builds a panel of 3.99 million city-pair-month observations from daily wholesale prices in 117 Chinese cities, matched with AutoNavi intercity mobility data.
- Studies how passenger infrastructure affects market integration in a setting where freight conditions are stabilized by China's Green Passage policy.
- Finds that HSR connectivity is associated with lower intercity price dispersion, with evidence pointing to passenger mobility and trader interaction as the main mechanism.

### Population Agglomeration and Spatial Reallocation in China

- SSRN preprint: [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6569183](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6569183)
- Companion website: [https://pop-density-spatial.streamlit.app/](https://pop-density-spatial.streamlit.app/)
- Use annual WorldPop population density rasters (2002-2020), downsampled to approximately 5 km, to document the evolution of China's population geography.
- Show rising spatial agglomeration: the spatial Gini increases from 0.852 to 0.868, the top-decile population share rises from 73.5% to 76.7%, and the footprint of high-density areas expands by 24%.
- Track a 17 km southeastward shift in the population-weighted centroid and find no evidence of systematic provincial catch-up in β/σ convergence tests.
- Provide raster-based descriptive evidence for spatial economics, regional science, and China regional development.

## Applied Projects

### Pricing and Promotion Decision Engine (2025--Present)

- Live app: [pricing-promotion-decision-engine.streamlit.app](https://pricing-promotion-decision-engine.streamlit.app/) | Code: [GitHub](https://github.com/Li-Shen-Clark/pricing-promotion-decision-engine)
- End-to-end demand-estimation and decision-support tool on 6.6M rows of Dominick's Finer Foods scanner data: log-log fixed-effects demand model with Duan smearing retransformation, counterfactual simulation, constrained profit optimization, and A/B validation with power analysis.
- Deployed as an interactive Streamlit application with a modular Python codebase and a pytest test suite.

### China Population Density Atlas (2022--Present)

- Live app: [pop-density-spatial.streamlit.app](https://pop-density-spatial.streamlit.app/)
- Interactive geospatial visualization built from 19 years of 5 km-resolution population-density rasters (2002--2020) harmonized into an annual panel; companion product to the Population Agglomeration paper above.

## Machine Learning Competitions

- **Kaggle Silver Medal, Home Credit --- Credit Risk Model Stability (Feb--May 2024).** Polars lazy-execution ETL, gradient boosting (LightGBM, CatBoost), direct optimization for Gini Stability metric.
- **Kaggle Bronze Medal, ICR --- Identifying Age-Related Conditions (May--Aug 2023).** Stratified resampling for severe class imbalance, XGBoost + TabPFN voting ensemble under Balanced Log Loss.

## Methods and Data Expertise

- **Methods:** causal inference; shift-share IV; panel-data econometrics; event studies; staggered-adoption designs; gravity models; quantitative spatial modeling; input-output analysis; counterfactual simulation.
- **Data:** Chinese MRIO and ICIO tables; Chinese Customs data; AutoNavi mobility data; high-frequency wholesale price data; geospatial population rasters; GIS-based regional datasets.
- **Programming:** Python; Stata; R; MATLAB; SQL; SAS; GeoPandas; ArcGIS; Tableau; LaTeX.
