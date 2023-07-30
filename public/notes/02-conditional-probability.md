# Conditional Probability
In a sample space $S$, the conditional probability of $A$ given $B$ is written as $P\left(A~|~B\right)$. This is the probability of $A$ occurring given event $B$ has occurred.

## Product Law
The conditional probability of two events can be represented using the union of the two sets:

$$
P\left(A~|~B\right)=\frac{n\left(A\cap B\right)}{n\left(B\right)}=\frac{P\left(A\cap B\right)}{P\left(B\right)}
$$

Therefore,

$$
P\left(A\cap B\right)=P\left(B\right)\cdot P\left(A~|~B\right)
$$

## Law of Total Probability
Given events $A_1, A_2, ..., A_n$ followed by event $B$, the probability of $B$ can be found by summing over the probability of each $A$ event with $B$:

$$
P\left(B\right)=P\left(A_1\cap B\right)+P\left(A_2\cap B\right)+...+P\left(A_n\cap B\right)
$$

This can be rewritten as

$$
P\left(B\right)=P\left(A_1\right)\cdot P\left(B~|~A_1\right)+P\left(A_2\right)\cdot P\left(B~|~A_2\right)+...+P\left(A_n\right)\cdot P\left(B~|~A_n\right)
$$

or, more concisely,

$$
P\left(B\right)=\sum_{i=1}^nP\left(A_n\right)\cdot P\left(B~|~A_n\right)
$$

## Bayes' Theorem
Using the fact that $P\left(A\cap B\right)=P\left(B\right)\cdot P\left(A~|~B\right)$, we can express $P\left(A~|~B\right)$ as the following:

$$
P\left(A~|~B\right)=\frac{P\left(A\right)\cdot P\left(B~|~A\right)}{P\left(B\right)}
$$

# Independent Events
Events $A$ and $B$ are said to be *independent* if $P\left(A~|~B\right)=P\left(A\right)$.

For independent events, $P\left(A\cap B\right)=P\left(A\right)\cdot P\left(B\right)$.
