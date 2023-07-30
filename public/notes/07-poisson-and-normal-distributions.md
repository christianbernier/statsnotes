# Poisson Distribution
A Poisson random variable (denoted $X\sim\text{Poisson}\left(\lambda\right), \lambda>0$) is a discrete random variable that describes a rare event occurring with a rate of $\lambda$.

## PDF
The probability function of a Poisson variable is defined as

$$
p_X\left(k\right)=\frac{\lambda^ke^{-\lambda}}{k!},~k=0,1,2,...
$$

To confirm the PDF sums to 1 for all values of $k$, the Taylor series of $e^x$ is used. Since $e^x=\underset{k=0}{\overset{\infty}{\sum}}\frac{x^k}{k!}$, it becomes clear that $\underset{k=0}{\overset{\infty}{\sum}}\frac{\lambda^ke^{-\lambda}}{k!}=e^{-\lambda}e^\lambda=1$

## Relation to Binomial Variables
$\text{Poisson}\left(\lambda\right)$ is the continuous limit of a $\text{Binomial}\left(n,p\right)$ with small $p$ and large $n$ where $\lambda=np$.

## Expected Value
The expected value of a Poisson random variable depends on its rate parameter:

$$
E\left(X\right)=\underset{k=0}{\overset{\infty}{\sum}}kp_X\left(k\right)=...=\lambda
$$

## Variance
The variance of a Poisson random variable is also equal to $\lambda$, but that will not be shown here.

# Normal Distribution
A normal random variable (denoted $X\sim\text{Normal}\left(\mu,\sigma^2\right)$) is a continuous random variable with a mean of $\mu$ and variance of $\sigma^2$.

## PDF
The probability function of a normal variable is defined as

$$
f_X\left(x\right)=\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2},~x\in\mathbb{R}
$$

To confirm the PDF sums to 1 for all values of $k$, the Taylor series of $e^x$ is used. Since $e^x=\underset{k=0}{\overset{\infty}{\sum}}\frac{x^k}{k!}$, it becomes clear that $\underset{k=0}{\overset{\infty}{\sum}}\frac{\lambda^ke^{-\lambda}}{k!}=e^{-\lambda}e^\lambda=1$

## CDF
Since the PDF of a normal variable does not have an analytic antiderivative, the cumulative density of a normal variable must be computed using a calculator. This function is typically called `normcdf`.

## Expected Value
The expected value of a normal random variable is defined to be $\mu$.

## Variance
The variance of a normal random variable is defined to be $\sigma^2$.

## Standard Random Variable, $Z$
The *standard normal variable*, denoted $Z$, is a random variable with $\mu=0$ and $\sigma=1$.

Any normal variable can be expressed in terms of the standard normal variable:

$$
\frac{X-\mu}{\sigma}=Z
$$

$$
X=\sigma Z+\mu
$$

## Properties of Normal Variables
Any linear combination of two independent normal variables $X_1\sim\text{Normal}\left(\mu_1,\sigma_1^2\right)$ and $X_2\sim\text{Normal}\left(\mu_2,\sigma_2^2\right)$ can be expressed as a single normal variable:

$$
\left[a_1X_1+a_2X_2\right]\sim\text{Normal}\left(a_1\mu_1+a_2\mu_2, a_1^2\sigma_1^2+a_2^2\sigma_2^2\right)
$$
