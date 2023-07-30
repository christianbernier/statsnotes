# Continuous Random Variables
A continuous random variable is a function that maps elements in the sample space to a continuous interval (or intervals) in the set of all real numbers.

## Probability Density Function (pdf)
The probability density function of a continuous random variable is denoted $f_X\left(x\right)$ and is less meaningful for specific values than the discrete case.

For all random variables:

$$
\forall x, x\in\mathbb{R}: f_X\left(x\right)\geq 0
$$

$$
\int_{-\infty}^\infty{f_X\left(x\right)}~dx=1
$$

## Cumulative Density Function (cdf)
Like a discrete random variable, the cumulative density function of a continuous random variable, denoted $F_X\left(x\right)$ is the probability of the variable equaling any number less than or equal to a value $x$:

$$
F_X\left(x\right)=\int_{-\infty}^x{f_X\left(t\right)}~dt
$$

# Uniform Random Variable
A uniform random variable (denoted $X\sim\text{Uniform}\left(a,b\right)$) describes picking a number between $a$ and $b$ with equal probability.

## PDF
The pdf of a uniform variable is defined as:

$$
f_X\left(x\right)=c
$$

where $c$ is some constant.

Since $\int_{-\infty}^\infty{f_x\left(x\right)}~dx=1$ for all random variables, $c$ can be determined to equal $\frac{1}{b-a}$ as follows:

$$
\int_{-\infty}^\infty{c}~dx=\int_a^b{c}~dx=\left(b-a\right)c=1
$$

## CDF
The cdf of a uniform variable can be found using the definite integral from $a$ to $x$:

$$
F_X\left(x\right)=\int_a^x{\frac{dt}{b-a}}=\left[\frac{t}{b-a}\right]_a^x=\frac{x-a}{b-a}
$$

To fully describe the cdf, however, the values for $x<a$ and $x>b$ must be defined as well:

$$
F_X\left(x\right)=
\begin{cases}
  0 & , & x<a \\
  \frac{x-a}{b-a} & , & a\leq x\leq b \\
  1 & , & x>b
\end{cases}
$$

## Expected Value
The expected value of a uniform variable can be found as follows:

$$
E\left(X\right)=\int_a^b\frac{x}{b-a}~dx=\left[\frac{x^2}{2\left(b-a\right)}\right]_a^b=\frac{b^2-a^2}{2\left(b-a\right)}=\frac{a+b}{2}
$$

## Variance
The variance of a uniform variable can be found as follows:

$$
\text{Var}\left(X\right)=\int_a^b\frac{x^2}{b-a}~dx-\mu^2=\left[\frac{x^3}{3\left(b-a\right)}\right]_a^b-\mu^2=\frac{b^3-a^3}{3\left(b-a\right)}-\frac{\left(a+b\right)^2}{4}=\frac{\left(a-b\right)^2}{12}
$$

# Exponential Random Variable
An exponential random variable (denoted $X\sim\text{Exponential}\left(\lambda\right)$) describes an event whose probability decreases exponentially at a rate of $\lambda$.

## PDF
The pdf of an exponential variable is defined as:

$$
f_X\left(x\right)=\lambda e^{-\lambda x},~x>0
$$

## CDF
The cdf of an exponential variable can be found using the definite integral from $0$ to $x$:

$$
F_X\left(x\right)=\int_0^x{\lambda e^{-\lambda t}~dt}=\left[-e^{-\lambda t}\right]_0^x=1-e^{-\lambda x}
$$

To fully describe the cdf, however, the values for $x\leq 0$ as well:

$$
F_X\left(x\right)=
\begin{cases}
  0 & , & x\leq 0 \\
  1-e^{-\lambda x} & , & x>0
\end{cases}
$$

## Expected Value
The expected value of an exponential variable can be found as follows:

$$
E\left(X\right)=\int_0^\infty{x\lambda e^{-\lambda x}~dx}=...=\frac{1}{\lambda}
$$

## Variance
The variance of an exponential variable can be found as follows:

$$
E\left(X\right)=\int_0^\infty{x^2\lambda e^{-\lambda x}~dx}=...=\frac{1}{\lambda^2}
$$
