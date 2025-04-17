+++
title = "2023 Travelers Analytics Case Competition: Claim Cost Prediction "
template = "page.html"
date = 2023-12-15T15:00:00Z
[taxonomies]
tags = ["predictive modeling", "machine learning"]
[extra]
summary = "Top 3 finish in predicting auto insurance claim costs using machine learning models, with a focus on the CatBoost algorithm and feature importance."
mathjax = "tex-mml"
+++

## Project Motivation

The competition centered around using historical claims data to predict the future cost of insurance claims. By utilizing a range of machine learning techniques, including Gradient Boosting, Random Forest, and feature selection, the goal was to build a robust model capable of accurately estimating claim costs for individual policies. Given the  nature of accurate claim prediction in insurance, this study presents an opportunity to enhance pricing strategies, ensure financial stability, and provide more personalized insurance plans.

## Methodology

To develop the claim cost prediction model, a dataset of 45,239 insurance policies from 2004-2005 was utilized, with a focus on instances involving at least one claim. The dataset was split into training (22,619 instances) and test (1,542 instances) sets, with a clear distinction between zero claims and policies with claim costs. The models were trained using various algorithms, including Random Forest and XGBoost, with adjustments made for data imbalance using oversampling and under-sampling techniques. Additionally, more specialized models like the Zero-Inflated Poisson Regression and Tweedie regression were explored, recognizing the prevalence of zero claims and right-skewed claim costs.

## Modeling Approaches

- **Random Forest**: This method was explored for its capacity to handle non-linear relationships and its ability to work well with high-dimensional datasets. 
- **Decision Trees**: Leveraging decision trees provided clear visual interpretations of the model’s decision-making process, ensuring transparency and interpretability.
- **Tweedie Distribution**: Applied for datasets with numerous zero values and continuous outcomes, the Tweedie model was a natural choice for claim cost prediction. It efficiently handled both zero-inflation and continuous claim amounts.
- **CatBoost & Grid Search**: CatBoost, coupled with grid search for hyperparameter optimization, was explored in handling categorical data efficiently and preventing overfitting in the imbalanced dataset. This model demonstrated superior performance due to its ability to incorporate mixed data types without extensive preprocessing.
  
## Results

The CatBoost model, after extensive grid search optimization, emerged as the most promising approach for this dataset. It demonstrated excellent handling of categorical variables, effectively addressing zero-inflation while maintaining strong predictive accuracy. Combining CatBoost with a Tweedie loss function was also explored, but results showed that it underperformed compared to the standalone CatBoost model. 

## Strengths & Limitations

### Strengths
- **Categorical variable handling** with CatBoost.
- **Tweedie helps capture outliers** where extreme values occur in the data (right-skewed).

### Limitations
- **Imbalanced dataset**: A dataset with a large number of claim costs equals zero.
- **Simplification of predicting Claim Cost vs Frequency and Severity**: Modeling for just Claim Cost made it harder to understand how specific variables influenced the model. Splitting the model into two, one for predicting the frequency of claims and another for predicting the severity of claims may have been a better approach to interpret the significance of different variables. 

$$
\displaylines{\text{Claim Cost} = \text{Frequency} \times \text{Severity}}
$$

## Conclusion

This study provides a comprehensive approach to predicting auto insurance claim costs using machine learning models. The final models, particularly CatBoost, demonstrated strong predictive accuracy while effectively addressing challenges related to data imbalance and categorical variable handling. Despite some limitations, such as the inability to model claim frequency and severity separately, the findings provide valuable insights into the development of predictive models for insurance pricing. Future work will explore the use of dual models to improve interpretability and refine prediction accuracy.

## Github Repo & Presentation

[Github link](https://github.com/jeremymtan/Traveler_Insurance_Claim_Cost_Modeling) <br>

<iframe src="../travelers.pdf" width="100%" height="600" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>