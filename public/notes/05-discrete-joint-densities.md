# Discrete Joint Densities
The joint probability density function of two random variables, $X$ and $Y$, is a multivariable function that defines the probability that both variables equal some given values. For example, $p_{X,Y}\left(x,y\right)=P\left(X=x\land Y=y\right)$.

These values can be expressed in a table. For instance, for an experiment with a spinner numbered 1, 2, and 3, if $X$ is defined as the sum of 2 spins and $Y$ is defined as the absolute difference of the two spins, the joint density would be

| $Y \backslash X$ | $2$ | $3$ | $4$ | $5$ | $6$
|-----|-----|-----|-----|-----|-----
| $0$ | $1/9$ | $0$ | $1/9$ | $0$ | $1/9$
| $0$ | $0$ | $2/9$ | $0$ | $2/9$ | $0$
| $0$ | $0$ | $0$ | $2/9$ | $0$ | $0$

## Marginal PDFs
Each row or column can be summed to get the marginal PDF of either variable. Summing the rows (over values of $Y$) finds the marginal PDF of $X$ and vice versa. These PDFs are often written in the margins of the table:

| $Y \backslash X$ | $2$ | $3$ | $4$ | $5$ | $6$ | $p_Y\left(y\right)$
|-----|-----|-----|-----|-----|-----|-----
| $0$ | $1/9$ | $0$ | $1/9$ | $0$ | $1/9$ | $3/9$
| $0$ | $0$ | $2/9$ | $0$ | $2/9$ | $0$ | $4/9$
| $0$ | $0$ | $0$ | $2/9$ | $0$ | $0$ | $2/9$
| $p_X\left(x\right)$ | $1/9$ | $2/9$ | $3/9$ | $2/9$ | $1/9$

In other words, the marginal PDF is defined as

$$
p_X\left(x\right)=\underset{y\in Y}{\sum}p_{X,Y}\left(x,y\right)
$$

$$
p_Y\left(y\right)=\underset{x\in X}{\sum}p_{X,Y}\left(x,y\right)
$$

## Independence
Since two events $A$ and $B$ are independent if and only if $P\left(A\cap B\right)=P\left(A\right)\cdot P\left(B\right)$, two random variables are said to be independent if and only if

$$
\forall xy, x\in X, y\in Y: p_{X,Y}\left(x,y\right)=p_X\left(x\right)\cdot p_Y\left(y\right)
$$

# Expected Value of Multivariable Functions
The expected value of a multivariable function is the same as that for a single-variable function, except both variables need to be iterated over:

$$
E\left(g\left(X,Y\right)\right)=\underset{x\in X}{\sum}~\underset{y\in Y}{\sum}g\left(x,y\right)\cdot p_{X,Y}\left(x,y\right)
$$

## Linearity
The expected value of variables is linear. In other words:

$$
E\left(aX+bY\right)=aE\left(X\right)+bE\left(Y\right)
$$

# Covariance
The *covariance* of two random variables, $X$ and $Y$ are a measure of how related they are. The covariance is defined as

$$
\text{Cov}\left(X,Y\right)=E\left(XY\right)-E\left(X\right)\cdot E\left(Y\right)
$$

If $X$ and $Y$ are independent, their covariance will be 0 because $E\left(XY\right)=E\left(X\right)\cdot E\left(Y\right)$. This does not mean that if the covariance is 0, the two variables are independent.

## Non-linearity
The variance of variables is not linear. Instead,

$$
\text{Var}\left(aX+bY\right)=a^2\text{Var}\left(X\right)+b^2\text{Var}\left(Y\right)-2ab\text{Cov}\left(X,Y\right)
$$

# Independent and Identically-Distributed Variables (IIDs)
For a set of random variables $X_1, X_2, ..., X_n$, if they are independent and identically-distributed, they will have some expected value $E\left(X_i\right)=\mu$ and variance $\text{Var}\left(X_i\right)=\sigma^2$.

## Sample Sum
The sample sum of IIDs is defined as $S_n=X_1+X_2+...+X_n$. The mean of the sample sum is simply $E\left(S_n\right)=\mu n$ and the variance is $\text{Var}\left(S_n\right)=n\sigma^2$
