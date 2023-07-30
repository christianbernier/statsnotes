# Estimators
An estimator, denoted $\hat{\theta}$ is the random variable associated with an estimate $\theta_e$. For instance, for a Poisson random variable, $\text{Poisson}\left(\lambda\right)$, an estimate might be

$$
\lambda_e=\frac{k_1+k_2+...+k_n}{n}
$$

for a given set of data. The corresponding estimator for any set of data would therefore be

$$
\hat{\lambda}=\frac{X_1+X_2+...+X_n}{n}
$$

## Properties of Estimators
An estimator is *unbiased* if its expected value is zero: $E\left(\hat{\theta}\right)=0$.
If $\hat{\theta}_1$ and $\hat{\theta}_2$ are unbiased estimators, $\hat{\theta}_1$ is more *efficient* than $\hat{\theta}_2$ if $\text{Var}\left(\hat{\theta}_1\right)<\text{Var}\left(\hat{\theta}_2\right)$.