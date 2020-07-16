---
date: 2019-12-09
description: This is the part of me
tags:
- gradient descent
- linear regression
title: 'Gradient Descent: determining minima since 1847'
excerpt: Gradient descent is an iterative algorithm to determine the minimum of any
  function, let's say f(x). It is mostly used in machine learning algorithm in the
  process of minimization of cost function in linear regression technique.
categories:
- machine learning

---
Gradient descent is an iterative algorithm to determine the minimum of any function, let's say f(x). It is mostly used in machine learning algorithm in the process of minimization of cost function in linear regression technique.

For uni-variate function f(x);

![](/assets/math-20200416.svg)

This value is iterated until we get the stable value for x.

![/assets/forestry/math-20200416(2).svg](https://app.forestry.io/sites/xrqjmjejoly7ew/body-media//assets/forestry/math-20200416(2).svg) determines the converging rate.

Now how does it help to determine the minima of a function and what advantage can we take from it?

Suppose a function  ![](/assets/forestry/math-20200416(1).svg)

In graph, the function can be represented as

![](/assets/forestry/desmos-graph.png)

Let's now determine a tangent at any point of the equation.

![](/assets/forestry/desmos-graph(1).png)

As the two points become closer and closer to each other, the difference between them tends to zero. The slope of the line can be derived as:

![](/assets/forestry/math-20200417.svg)

The slope of the equation at any point is either is negative or positive or zero. ![](/assets/forestry/math-20200416(2).svg) is the learning rate always positive. The iterative function,

![/assets/math-20200416.svg](https://app.forestry.io/sites/xrqjmjejoly7ew/body-media//assets/math-20200416.svg)

chooses the new value for x, so that it is left to the old value of x when the slope is positive, to the right when the slope is negative and remain the same when the slope is 0, hence gradually taking us to the minimum of the function depending upon the learning rate as the iteration continues and hence determining the value of x where y can be minimum.

How can we use this algorithm for our advantage or more specifically to estimate a linear model which can predict the future values of any scattered data?

Let's suppose a graph of data with single, or two variable or can be more.

![linear model](/assets/forestry/Nulab-Gradient-descent-for-linear-regression-using-Golang-Blog.png "linear model")![bown shaped function](/assets/forestry/1000px-3d-function-2.svg.png "Bowl shaped function")

Let the red line be h(x). If h(x) is the best function which fits into the data points, then the error that it generates while calculating the values for the y must be minimum.

Error is the distance between the actual value y and the value we estimated from our heuristic function h(x).

e = | y - h(x) |

To give more importance to errors in specific data points, we can square the error term. The total sum of square of errors is:

![](/assets/forestry/math-20200417(1).svg)  where m is the total no. of data points.

The cost function can be more generalized to

![](/assets/forestry/math-20200417(2).svg)

Now we need to determine the value for x1, x2, ...  such that the value of cost function is minimum, and we know how to get it. (By Gradient Descent Algorithm)

repeat until convergence {

![](/assets/forestry/math-20200417(3).svg)

}

We should be careful while selecting the value of alpha. If![/assets/forestry/math-20200416(2).svg](https://app.forestry.io/sites/xrqjmjejoly7ew/body-media//assets/forestry/math-20200416(2).svg) is much smaller, the algorithm converges slowly and if ![/assets/forestry/math-20200416(2).svg](https://app.forestry.io/sites/xrqjmjejoly7ew/body-media//assets/forestry/math-20200416(2).svg) is very big, algorithm may not converge or in some case may diverge.

![learning rate](/assets/forestry/Screen-Shot-2018-02-24-at-11.47.09-AM.png "learning rate")