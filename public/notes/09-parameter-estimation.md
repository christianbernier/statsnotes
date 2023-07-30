# Parameter Estimation
To estimate the parameters of a random variable, data is needed. With any set of observations, a *maximum likelihood estimate* can be computed for a parameter.

Suppose there are $n$ observations: $x_1,x_2,...,x_n$. Each of these observations can be fit to a probability model (PDF) with a given parameter, $\theta$:

$$
p_X\left(x;\theta\right)~\text{or}~f_X\left(x;\theta\right)
$$

## Likelihood Function
The likelihood function, $L\left(\theta\right)$ is the probability of obtaining the observations given the parameter $\theta$. The goal is to maximize this function.

$$
L\left(\theta\right)=\underset{i=1}{\overset{n}{\prod}}p_X\left(x_i;\theta\right)
$$

To find the maximum, set $\frac{dL}{d\theta}=0$. Since the likelihood function often contains infinite products (and since $\ln$ is an increasing function), the maximum can also be found by setting $\frac{d}{d\theta}\ln L\left(\theta\right)=0$. This will yield the maximum likelihood estimate (MLE), denoted $\theta_e$.

## Example: Bernoulli Variable
Suppose the observations for a coin flip consist of: $\text{T}\text{H}\text{T}\text{H}\text{H}\text{T}\text{T}\text{T}\text{T}\text{H}$.

Using a Bernoulli random variable with parameter $\theta$, the likelihood function, $L\left(\theta\right)$, is defined as:

$$
L\left(\theta\right)=\underset{i=1}{\overset{n}{\prod}}p_X\left(x_i;\theta\right)=\left(1-\theta\right)\theta\left(1-\theta\right)...\theta=\theta^4\left(1-\theta\right)^6
$$

Therefore, $\ln{L\left(\theta\right)}=4\ln\theta+6\ln\left(1-\theta\right)$. Finding the derivative of this, we see $\frac{d}{d\theta}\ln L\left(\theta\right)=\frac{4}{\theta}-\frac{6}{1-\theta}$. We can set this equal to $0$ to find the maximum likelihood value of $\theta$ is $\theta_e=0.4$.

## Example: Poisson Variable
Suppose we have $n$ observations: $k_1,k_2,...,k_n$. Using a Poisson random variable with parameter $\lambda$, we can find the likelihood function:

$$
L\left(\lambda\right)=\underset{i=1}{\overset{n}{\prod}}p_X\left(k_i;\lambda\right)=e^{-n\lambda}\left(\frac{\lambda^{k_1+k_2+...+k_n}}{k_1!k_2!...k_n!}\right)
$$

Taking the natural logarithm of this, we see:

$$
\ln{L\left(\lambda\right)}=-n\lambda+\left(k_1+k_2+...+k_n\right)\ln{\lambda}-\ln\left(k_1!k_2!...k_n!\right)
$$

Differentiating with respect to $\lambda$ and setting it equal to $0$, we see:

$$
-n+\frac{k_1+k_2+...+k_n}{\lambda_e}=0
$$

So,

$$
\lambda_e=\frac{k_1+k_2+...+k_n}{n}
$$

## Example: Normal Variable
The likelihood function of a normal variable has two parameters since a normal variable has two parameters:

$$
L\left(\mu,\sigma^2\right)=\underset{i=1}{\overset{n}{\prod}}\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{1}{2}\left(\frac{x_i-\mu}{\sigma}\right)^2}
$$

The natural logarithm of this function is therefore:

$$
\ln{L\left(\mu,\sigma^2\right)}=\underset{i=1}{\overset{n}{\sum}}\left(\ln{\frac{1}{\sqrt{2\pi}\sigma}}-\frac{1}{2}\left(\frac{x_i-\mu}{\sigma}\right)^2\right)
$$

Since there are two parameters, we take the partial derivative with respect to $\mu$ to find the maximum likelihood estimate for $\mu$:

$$
\frac{\partial}{\partial\mu}\ln{L\left(\mu,\sigma^2\right)}=\underset{i=1}{\overset{n}{\sum}}\frac{x_i-\mu}{\sigma^2}
$$

Therefore, the maximum likelihood estimate for $\mu$ is, perhaps predictibly:

$$
\mu_e=\frac{x_1+x_2+...+x_n}{n}
$$
