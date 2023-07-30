# Experiments
An *experiment* is a procedure with a non-deterministic outcome.

The *sample space* of an experiment is the set of all possible outcomes.

The simplest example of an experiment is flipping a coin. The sample space would be represented as $S=\left\{H,T\right\}$. Since there is a finite number of outcomes, the sample set is said to be *finite*.

An *infinite* sample space contains infinite outcomes. An example would be flipping a coin until we get a tail, then stop. Here, the sample set would be $S=\left\{T, HT, HHT, ... \right\}$.

# Continuous Sample Space
Sample spaces can either be discrete (if they contain discrete values) or continuous. An example of a continuous sample space would be that for picking a number between 0 and 1. Here, we represent the sample space as a range: $S=\left[0,1\right]$. This can also be represented in set notation: $S=\left\{x\in\mathbb{R}:0\leq x\leq 1\right\}$.

# Events
While the sample space represents all possible outcomes, an event is the outcome of the experiment. Events are subsets of the sample space, since only events in the sample space can occur.

For the experiment of rolling a die, the sample space would be $S=\left\{1,2,3,4,5,6\right\}$. The event of rolling an even number is represented as $A=\left\{2,4,6\right\}$. Notice $A\subseteq S$ since all elements in $A$ are in $S$.

# Venn Diagrams
To visualize sample spaces and possible events, Venn diagrams can be useful. If two events are *disjoint*, they cannot both occur. In a Venn diagram, their regions would not overlap. An example of disjoint events would be rolling an even number on a die and rolling an odd number on a die.

# Set Operations
## Complement
The complement of a set $A$, denoted $A^C$, is the set of all elements in the universal set that are not in $A$:

$$
A^C=\left\{x\in S:x\notin A\right\}
$$

## Intersection
The intersection of two sets $A$ and $B$, denoted $A\cap B$, is the set of all elements in sets $A$ and $B$:

$$
A\cap B=\left\{x:x\in A~\wedge~x\in B\right\}
$$

## Union
The union of two sets $A$ and $B$, denoted $A\cup B$, is the set of all elements in sets $A$ or $B$ (or both):

$$
A\cup B=\left\{x:x\in A~\lor~x\in B\right\}
$$

The union of two disjoint sets is written using the disjoint union symbol ($A\sqcup B$), but represents the same concept.

## DeMorgan's Laws
$$
\left(A\cap B\right)^C=A^C\cup B^C
$$

$$
\left(A\cup B\right)^C=A^C\cap B^C
$$

# Probability Function
The probability of an event $A$ occurring can be represented using its probability function: $P\left(A\right)$.

## Kolmogorov's Axioms
1. $P\left(A\right)\geq 0$
2. $P\left(S\right)=1$
3. If $A$ and $B$ are disjoint events, then $P\left(A\sqcup B\right)=P\left(A\right)+P\left(B\right)$

## Properties of the Probability Function
The following useful properties can be proven from Kolmogorov's axioms:
1. $P\left(A\right)=1-P\left(A^C\right)$
2. $P\left(\emptyset\right)=0$
3. $P\left(A\right)=P\left(A\cap B\right)+P\left(A\cap B^C\right)$
4. If $A\subseteq B$, then $P\left(A\right)\leq P\left(B\right)$
5. $P\left(A\right)\leq 1$
6. Union rule: $P\left(A\cup B\right)=P\left(A\right)+P\left(B\right)-P\left(A\cap B\right)$

# Basic Principle of Probability
If every outcome is equally likely, then

$$
P\left(A\right)=\frac{n\left(A\right)}{n\left(S\right)}
$$

where $n\left(X\right)$ is the number of elements in set $X$.

# Counting
## Permutations
If order matters, the number of ways to arrange $k$ items from $n$ can be written as:

$$
^np_k=\frac{n!}{\left(n-k\right)!}
$$

## Combinations
If order does not matter, the number of ways to choose $k$ items from $n$ can be written as:

$$
^nc_k={n\choose k}=\frac{n!}{k!\left(n-k\right)!}
$$
