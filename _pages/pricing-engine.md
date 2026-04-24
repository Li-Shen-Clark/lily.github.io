---
layout: archive
title: "Pricing and Promotion Decision Engine"
permalink: /pricing-engine/
author_profile: true
hide_title: true
excerpt: "Live applied decision tool on 6.6M rows of scanner data. Demand estimation, counterfactual simulation, and constrained profit optimization — deployed as an interactive Streamlit app."
header:
  image: "og_pricing.png"
robots: index,follow
sitemap: true
---

# Pricing and Promotion Decision Engine

**A live, end-to-end applied decision tool** built on 6.6 million rows of Dominick's Finer Foods scanner data (cleaned panel of 486 UPCs, 93 stores, 366 weeks). Translates academic counterfactual-simulation workflow into firm-level pricing decisions.

## 🚀 [Launch the Live App](https://pricing-promotion-decision-engine.streamlit.app/)

## 💻 [View Source Code on GitHub](https://github.com/Li-Shen-Clark/pricing-promotion-decision-engine)

---

## What it does

- **Estimate behavioral response:** log-log fixed-effects demand model with Duan smearing retransformation to reduce log-to-level retransformation bias.
- **Simulate counterfactuals:** price and promotion counterfactual simulations over the estimated demand system.
- **Optimize under constraints:** constrained profit optimization under cost, inventory, and margin limits; A/B validation plans with power analysis before any candidate action ships.
- **Ship:** deployed as an interactive Streamlit application backed by a modular Python codebase, a pytest test suite, reproducible requirements, and auto-deploy from GitHub.

## Stack

Python (pandas, statsmodels, scikit-learn), Streamlit, pytest, Git/GitHub.

## Narrative

The workflow — **estimate → simulate → optimize** — mirrors the research-to-decision pipeline I use in my regional trade and market-integration research. The unit of analysis shifts from regions to firms, but the underlying logic is identical.

---

See also: [Applied Decision Tools](/applied/) | [Research](/research/) | [CV](/cv/)
