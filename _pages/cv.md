---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
robots: index,follow
sitemap: true
redirect_from:
  - /resume
---

{% include base_path %}

## Download PDF

- [Download CV (PDF)]({{ '/files/CV_LS.pdf' | relative_url }})

## Contact

- Worcester, MA, USA
- Email: [lshen@clarku.edu](mailto:lshen@clarku.edu)
- LinkedIn: [linkedin.com/in/lily-shen](https://www.linkedin.com/in/lily-shen/)

## Research Interests

International trade; quantitative spatial economics; market integration; regional development; urban and population geography; industrial policy; China and emerging Asia.

## Education

- **Clark University**, Worcester, MA  
  Ph.D. in Economics, expected August 2026
- **The State University of New York at Buffalo**, Buffalo, NY  
  M.A. in Economics, May 2019
- **Valparaiso University**, Valparaiso, IN  
  M.S. in International Economics and Finance, May 2018
- **Chongqing University**, Chongqing, China  
  B.Mgmt. in Accounting, June 2014

## Working Papers

### The Local Multiplier Effects of Trade: A Quantitative Analysis of China (Job Market Paper)
*with Kensuke Suzuki, Xiaocong Xu, and Junfu Zhang*

- Develops a multi-sector quantitative spatial model with inter-provincial input-output linkages, non-tradable production, and labor mobility, calibrated to China's 2017 MRIO table; parameters recovered via structural inversion from MRIO, ICIO, and Customs micro-data.
- Establishes that local trade multipliers are equilibrium objects shaped by the structure of domestic production linkages rather than universal parameters, and identifies the own-trade share---not raw export exposure---as the structural organizing statistic for multiplier heterogeneity.
- Extends the quantitative spatial economics framework, typically used for national welfare analysis, to the mechanics of sub-national shock amplification; counterfactual simulations yield model-implied local GDP multipliers ranging from 0.30 to 1.02 across provinces, with inland inward-oriented economies amplifying external shocks through non-tradable service demand.

### High-Speed Railway and Market Integration: Evidence from Vegetable Price Dispersion in China

- Constructs the largest daily-frequency panel of Chinese vegetable wholesale prices to date: 3.99 million city-pair-month observations covering ten commodities across 117 prefecture-level cities (2014--2022), merged with AutoNavi smartphone-based intercity passenger mobility indices.
- Leverages two institutional features---China's Green Passage highway-toll exemption (which fixes variable freight costs for fresh vegetables) and prohibitive HSR freight tariffs for bulk produce---to study a setting in which differences in HSR connectivity reflect variation in passenger rather than freight costs.
- Documents that HSR-connected city pairs exhibit 2--5% lower intercity price dispersion; passenger-mobility controls absorb the direct HSR coefficient, and cross-product heterogeneity (larger effects for bulky, low-value commodities) argues against a freight substitution channel, pointing to passenger mobility and trader interaction as the operative mechanism.

## Methods and Data Expertise

- **Methods:** causal inference; shift-share IV; panel-data econometrics; event studies; staggered-adoption designs; gravity models; quantitative spatial modeling; input-output analysis; counterfactual simulation.
- **Data:** Chinese MRIO and ICIO tables; Chinese Customs data; AutoNavi mobility data; high-frequency wholesale price data; geospatial population rasters; GIS-based regional datasets.
- **Programming:** Python; Stata; R; MATLAB; SQL; SAS; GeoPandas; ArcGIS; Tableau; LaTeX.
- **Languages:** Mandarin Chinese (native); English (fluent).

## Applied Projects

### Pricing and Promotion Decision Engine (2025--Present)

- Live app: [pricing-promotion-decision-engine.streamlit.app](https://pricing-promotion-decision-engine.streamlit.app/)
- Code: [github.com/Li-Shen-Clark/pricing-promotion-decision-engine](https://github.com/Li-Shen-Clark/pricing-promotion-decision-engine)
- Built an end-to-end demand-estimation and decision-support tool on the Dominick's Finer Foods scanner data (6.6M raw rows; cleaned panel of 486 UPCs, 93 stores, 366 weeks).
- Estimated a log-log fixed-effects demand model with Duan smearing retransformation; implemented counterfactual price and promotion simulations and constrained profit optimization under cost, inventory, and margin limits.
- Designed A/B validation plans with power analysis for raise-and-test pricing candidates; deployed as an interactive Streamlit application with a modular Python codebase and pytest test suite.

### China Population Density Atlas --- Interactive Geospatial Visualization (2022--Present)

- Live app: [pop-density-spatial.streamlit.app](https://pop-density-spatial.streamlit.app/)
- Processed 19 years of 5 km-resolution population-density rasters (2002--2020) covering the full territory of China into a harmonized annual panel.
- Underlying analysis documents increasing spatial agglomeration and expansion of dense urban corridors, with little evidence of province-level convergence.
- Deployed an interactive Streamlit application in 2025 for map-based exploration of density, agglomeration, and urban-corridor metrics at the grid-cell and province levels.

## Machine Learning Competitions

### Home Credit --- Credit Risk Model Stability (Kaggle Silver Medal, Feb--May 2024)
*Stack:* Python, Polars, scikit-learn, LightGBM, CatBoost

- Co-developed a Polars lazy-execution ETL pipeline for multi-depth relational data; designed aggregation features (max, last, mean) capturing borrower behavioral trends; optimized directly for the headline Gini Stability metric to prevent performance drift over time.
- Implemented correlation-based feature grouping (Pearson > 0.8) for multicollinearity control and type-downcasting memory optimization (over 50% reduction).

### ICR --- Identifying Age-Related Conditions (Kaggle Bronze Medal, May--Aug 2023)
*Stack:* Python, TabPFN, XGBoost, imbalanced-learn

- Designed a stratified resampling strategy using auxiliary Greek metadata (RandomOverSampler on Alpha-defined latent subgroups) to preserve population structure under severe class imbalance.
- Co-developed a voting ensemble combining parametric (XGBoost) and non-parametric (TabPFN) models under a custom Balanced Log Loss metric; calibrated decision thresholds to minimize false negatives.

## Teaching Experience

### Clark University School of Management, Graduate Teaching Assistant (Fall 2020 -- Spring 2023)

- **Investments (FIN 5401):** Instructed graduate students on equity valuation, DCF modeling, and portfolio risk-return analysis.
- **Computational Finance (FIN 5216):** Led graduate-level computational sessions on Monte Carlo methods, stochastic processes, and Black-Scholes pricing using R and Excel.
- **Case Studies in Derivatives (FIN 5310):** Guided students in quantifying financial risk, analyzing gold price risk management, and evaluating FX hedging strategies for global operations.
- **Investment Strategy (FIN 5203):** Supported instruction on advanced portfolio management and asset allocation strategies.

### Clark University Department of Economics, Teaching Assistant (Fall 2023 -- Spring 2025)

- **Macroeconomic Theory (ECON 206):** Led undergraduate problem-solving sessions on the Solow growth model, the IS-LM and AS-AD frameworks, Phillips-curve dynamics, monetary and fiscal policy transmission, and open-economy macroeconomics.
- **Economics and the World Economy (ECON 10):** Supported undergraduate instruction on comparative advantage, exchange-rate regimes, international capital flows, economic development, and trade-policy debates.

## Honors and Awards

- Sheftel Award for Research Excellence, Clark University, 2025
- Veendorp Best Field Paper Award, Clark University, 2022
- Doctoral Fellowship, Clark University, 2019--present

## References

- **Dr. Junfu Zhang**, Professor of Economics, Clark University ([juzhang@clarku.edu](mailto:juzhang@clarku.edu))
- **Dr. Kensuke Suzuki**, Assistant Professor of Economics, Clark University ([KSuzuki@clarku.edu](mailto:KSuzuki@clarku.edu))
- **Dr. Moshi Alam**, Assistant Professor of Economics, Clark University ([mdalam@clarku.edu](mailto:mdalam@clarku.edu))
