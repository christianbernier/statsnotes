# Discrete Random Variables
A discrete random variable is a function that maps every element in the sample space to a real number: $X:S\rightarrow\mathbb{R}$. An example is the sum of two spins of a number spinner with numbers 1, 2, and 3. While the sample space $S=\left\{\left(1,1\right),\left(1,2\right),\left(1,3\right),\left(2,1\right),...\right\}$, the possible values (also called the *range* of $X$) is $\left\{2,3,4,5,6\right\}$.

## Probability Distribution/Density Function (pdf)
To describe the probability of a random variable equaling a certain value, the probability distribution function (called the *pdf* of the random variable) is used. The probability of a random variable $X$ equaling $k$ is denoted as

$$
P\left(X=k\right)=p_X\left(k\right)
$$

This data can also be represented as a table:
| $k$ | $2$ | $3$ | $4$ | $5$ | $6$
|-----|-----|-----|-----|-----|-----
| $p_X\left(k\right)$ | $1/9$ | $2/9$ | $3/9$ | $2/9$ | $1/9$

## Cumulative Distribution/Density Function (cdf)
The probability of a random variable $X$ equaling any value less than or equal to a value $k$ is described by the cumulative distribution function (called the *cdf* of the random variable):

$$
P\left(X\leq k\right)=F_X\left(k\right)
$$

This can, again, be described as a table:
| $k$ | $2$ | $3$ | $4$ | $5$ | $6$
|-----|-----|-----|-----|-----|-----
| $p_X\left(k\right)$ | $1/9$ | $2/9$ | $3/9$ | $2/9$ | $1/9$
| $F_X\left(k\right)$ | $1/9$ | $3/9$ | $6/9$ | $8/9$ | $9/9$

Note: For all random variables, $\underset{k\rightarrow\infty}{\lim}F_X\left(k\right)=1$.

# Expected Value of a Random Variable
The mean (or expected value) of a random variable is the "center" of distribution for a variable, weighted by its pdf. It can be described for a discrete variable as:

$$
E\left(X\right)=\underset{x\in X}{\sum}xp_X\left(x\right)=\mu
$$

## Expected Value of a Function of a Random Variable
To describe the expected value of a function of a random variable (ex. $E\left(g\left(X\right)\right)$) is defined using the same pdf as the expected value of the variable:

$$
E\left(g\left(X\right)\right)=\underset{x\in X}{\sum}g\left(x\right)p_X\left(x\right)
$$

# Variance and Standard Deviation of a Random Variable
The variance of a random variable is the "spread" of distribution for a variable. It is formally described as:

$$
\text{Var}\left(X\right)=E\left(\left(X-\mu\right)^2\right)
$$

Using the definition of the expected value of a function of a random variable, the variance can be rewritten as:

$$
\text{Var}\left(X\right)=E\left(X^2\right)-\left(X\right)^2=E\left(X^2\right)-\mu^2
$$

The standard deviation of a random variable is the square root of the variance:

$$
\text{SD}\left(X\right)=\sigma=\sqrt{\text{Var}\left(X\right)}
$$

# Bernoulli Random Variable
A Bernoulli random variable (denoted $X\sim\text{Bernoulli}\left(p\right)$) describes the number of heads when flipping a coin once. The parameter $p$ describes the probability of flipping heads. For a fair coin, $p=0.5$.

## PDF
The pdf of a Bernoulli variable is defined as:
| $k$ | $0$ | $1$
|-----|-----|-----
| $p_X\left(k\right)$ | $1-p$ | $p$

## Expected Value
The expected value of a Bernoulli variable can be found as follows:

$$
E\left(X\right)=0\cdot\left(1-p\right)+1\cdot\left(p\right)=p=\mu
$$

## Variance
The variance of a Bernoulli variable can be found as follows:

$$
\text{Var}\left(X\right)=0^2\cdot\left(1-p\right)+1^2\cdot\left(p\right)-\mu^2=p\left(1-p\right)
$$

# Binomial Random Variable
A Binomial random variable (denoted $X\sim\text{Binomial}\left(n,p\right)$) describes the number of heads when flipping a coin $n$ times. The parameter $p$ describes the probability of flipping heads. For a fair coin, $p=0.5$.

## PDF
The pdf of a Binomial variable is defined as:

$$
p_X\left(k\right)={n\choose k}p^k\left(1-p\right)^{n-k}
$$

## Expected Value
The expected value of a Binomial variable is $E\left(X\right)=np$.

## Variance
The variance of a Binomial variable is $\text{Var}\left(X\right)=np\left(1-p\right)$.
