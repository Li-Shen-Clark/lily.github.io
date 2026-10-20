---
title: "Why Export Changes Affect Regions Differently"
author: "Li Shen"
date: "2026-10-20 01:29:29 -0400"
permalink: /blog/local-trade-multipliers/
excerpt: "How production links, household spending, and worker mobility shape local responses to export changes."
topic: "Trade and regional economies"
lang: en
published: true
layout: single
author_profile: true
read_time: true
comments: false
related: false
robots: index,follow
sitemap: true
---

Imagine two factories in different regions receiving the same increase in the value of overseas orders. Both expand production, but the effects on nearby businesses may differ. One buys a larger share of its materials and services locally; the other relies more on suppliers elsewhere. Their workers may also live and spend in different places.

For a café considering a second location near either factory, the practical question is whether those orders will bring more customers—and whether higher wages or rents will absorb the extra revenue. This hypothetical example shows why an export figure alone says little about a particular business. We need to follow where firms buy, where workers spend, and how costs change.

## Follow spending and costs beyond the factory

An expanding factory may buy more materials, maintenance, and business services. It may hire workers or increase their hours and pay. Some of that income can then support shops, restaurants, and other services.

[Moretti’s study of local multipliers](https://www.aeaweb.org/articles?id=10.1257/aer.100.2.373) examines how employment growth in tradable sectors can support employment in nontradable sectors. Tradable sectors produce goods or services that can be sold beyond the local market; nontradable sectors primarily serve local demand, as restaurants and retail businesses do. But businesses also compete for workers, which can raise wages. Housing costs may rise as people move in. Stronger demand and higher costs can therefore arrive together.

![An illustrative diagram showing how additional export orders can reach suppliers and household spending inside and outside the region.]({{ '/images/blog/local-trade-multipliers/export-spending-channels.png' | relative_url }})

*Figure 1. Possible spending channels following an increase in export orders. The arrows illustrate mechanisms, not estimated effects; workers, wages, and prices can also adjust.*

Purchases outside the region support activity elsewhere. An effect measured within one province therefore misses some effects in other places. The geographic boundary matters when comparing local multipliers.

## What our research in China adds

In joint work with Kensuke Suzuki, Xiaocong Xu, and Junfu Zhang (Shen et al., 2026), I study how trade changes affect Chinese regions. Our city-level instrumental-variable (IV) estimates show that gross domestic product (GDP) and employment respond differently to export changes across cities. The IV approach uses tariff changes in China’s export markets to help distinguish export-driven changes from other local economic changes.

Estimated responses are larger in cities with a higher **manufacturing-to-services value-added ratio**—manufacturing value added divided by services value added. Value added is the value of output minus the value of the intermediate goods and services used to produce it. These findings motivate a further question: which economic connections help explain the differences?

We use a **quantitative spatial model** to investigate that question. The model represents provinces connected through trade, production, and worker mobility. It is calibrated to China’s provincial economy in 2017: production and trade data help determine its economic structure and parameters. It is not calibrated to match the city-level estimates, which provide a separate benchmark. My contributions include developing the model and conducting counterfactual analysis—using it to examine how economic outcomes change when trade costs change.

In the model, workers can move, and services can be traded across Chinese provinces, though not internationally. Service demand can therefore reach businesses outside the province where income first changes.

One useful measure is the **manufacturing home share**: the share of a region’s spending on manufactured goods that goes to producers within that region. It covers the region’s spending, rather than one factory’s purchases. In the model, a higher home share means that more of a change in spending on manufactured goods reaches local producers. Purchases from other provinces spread the change farther, and some spending can return through those connections.

### Reading the simulation results

The opening example uses growing orders to explain the channels. Our September 28, 2026 working paper examines a contraction. In separate simulations, we raise **export iceberg costs** for manufactured goods shipped from one Chinese province to foreign markets by 5%, one province at a time. Under the iceberg assumption, more than one unit must be shipped for one unit to arrive. The 5% increase means that delivering the same quantity abroad requires shipping 5% more goods from the province. We then solve for production, income, and employment across regions under the higher export cost.

The **export–GDP multiplier** is the change in the province’s GDP divided by the change in its manufacturing exports, both measured in money. The ratio summarizes how the two outcomes change together in the model following an export-cost shock. It does not isolate the effect of changing export demand alone.

Comparing these ratios across provinces helps us examine how regional structure shapes local responses. An export-cost increase does not directly predict the effects of the factory’s expansion. The export–GDP multiplier also differs from Moretti’s employment multiplier for the nontradable sector, which counts additional jobs in that sector per additional manufacturing job.

Local production and spending links help explain these differences in the response per unit of export change. A region’s dependence on exports still matters for the size of the initial disturbance.

## Allow time for workers and demand to adjust

Moving between regions or industries can involve relocation expenses, retraining, and family decisions. Where expansion requires workers to move or retrain, local spending may take time to respond.

[Caliendo, Dvorkin, and Parro (2019)](https://lcaliendo.github.io/published.html) study the effects of China’s trade expansion on the United States using a **dynamic spatial trade and migration model**. Their model follows adjustment over time and includes costs of moving between regions and industries.

Our provincial simulations compare **baseline and counterfactual equilibria**: the model’s reference economy and the economy under changed trade costs, after wages, prices, and workers’ choices adjust. This comparative-static analysis does not trace the adjustment path or tell us how long it takes. For local businesses, the timing of hiring and spending matters alongside the eventual size of local demand.

## Use these insights to assess a local market

The café can use three questions to organize its assessment of the local market.

| Question for a local business | Evidence to examine |
| --- | --- |
| Would higher earnings among factory workers lead to more spending at nearby businesses? | Examine where workers live and commute, and where they make relevant purchases. |
| Could higher costs absorb the additional revenue? | Compare the expected increase in sales revenue with the additional costs of supplies, staffing, and premises. |
| When might demand arrive, and could it last? | Examine how long orders are expected to last, the factory’s hiring and expansion plans, and whether recruitment difficulties could delay hiring. |

These are questions for collecting evidence about a particular business and place. Even a large regional multiplier does not establish that a particular business would attract enough customers to cover its costs.

The same distinction matters for policy. As Moretti explains, a large multiplier alone does not establish a market failure or justify a subsidy. Costs and effects beyond the locality also belong in that assessment.

Our model analysis concerns Chinese provinces under a particular set of assumptions. An analyst studying a region in the United States, Australia, or New Zealand could investigate the same purchasing, spending, and labor channels, but would need local evidence to assess their size.

Export figures provide a starting point. Following the connections to customers, suppliers, and costs makes them more useful for understanding a local economy—and for deciding what evidence a business needs next.

## References

Moretti, Enrico. 2010. “Local Multipliers.” *American Economic Review*, 100(2), 373–377. DOI: 10.1257/aer.100.2.373. [Publisher record](https://www.aeaweb.org/articles?id=10.1257/aer.100.2.373). [Author’s public proof](https://eml.berkeley.edu/~moretti/multipliers.pdf).

Caliendo, Lorenzo, Maximiliano Dvorkin, and Fernando Parro. 2019. “Trade and Labor Market Dynamics: General Equilibrium Analysis of the China Trade Shock.” *Econometrica*, 87(3), 741–835. DOI: 10.3982/ECTA13758. [Author’s publication page](https://lcaliendo.github.io/published.html).

Shen, Li, Kensuke Suzuki, Xiaocong Xu, and Junfu Zhang. 2026. “The Local Multiplier Effects of Trade: A Quantitative Analysis of China.” Unpublished working paper, September 28, 2026 version. The version discussed in this article is not publicly available.

## Research overview

[Overview of our research on local trade multipliers](https://lshen.com.cn/research/#local-multipliers). This page introduces the project; it does not provide the working-paper version discussed above.
