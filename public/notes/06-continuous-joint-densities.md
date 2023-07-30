# Continuous Joint Densities
For two continuous random variables, their joint density is written as $f_{X,Y}\left(x,y\right)$. To be valid, the two conditions below must be satisfied:

$$
\forall xy,x\in\mathbb{R},y\in\mathbb{R}:f_{X,Y}\left(x,y\right)\geq 0
$$

$$
\int_{-\infty}^\infty\int_{-\infty}^\infty f_{X,Y}\left(x,y\right)~dy~dx=1
$$

## Marginal PDFs
The marginal PDF of a continuous random variable can be found by integrating over all values of the other variable:

$$
f_X\left(x\right)=\int_{-\infty}^\infty f_{X,Y}\left(x,y\right)~dy
$$

$$
f_Y\left(y\right)=\int_{-\infty}^\infty f_{X,Y}\left(x,y\right)~dx
$$

## Independence
Since two events $A$ and $B$ are independent if and only if $P\left(A\cap B\right)=P\left(A\right)\cdot P\left(B\right)$, two random variables are said to be independent if and only if

$$
\forall xy, x\in \mathbb{R}, y\in \mathbb{R}: f_{X,Y}\left(x,y\right)=f_X\left(x\right)\cdot f_Y\left(y\right)
$$

# Expected Value of Multivariable Functions
The expected value of a multivariable function is the same as that for a single-variable function, except both variables need to be integrated over:

$$
E\left(g\left(X,Y\right)\right)=\int_{-\infty}^\infty\int_{-\infty}^\infty g\left(x,y\right)f_{X,Y}\left(x,y\right)~dy~dx

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
