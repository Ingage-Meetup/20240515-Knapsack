# The Knapsack Problem

This month's kata is a variation of the Knapsack Problem. The Knapsack Problem is a well-known optimization problem from the field of combinitorial optimization. It has been studied for over a hundred years, long before the advent of digital computers.

[Wikipedia](https://en.wikipedia.org/wiki/Knapsack_problem) describes the problem as follows:

Given a set of items, each with a weight and a value, determine which items to include in the collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. 

The name, 'knapsack problem' derives from an informal understanding of the problem as  finding the maximum value of items that can be put into a knapsack with a limited capacity. Each item has a weight and a value, and the goal is to maximize the total value of items in the knapsack without exceeding its weight capacity.

## Real-world Application

The Knapsack Problem has applications in numerous areas of theoretical and practical computer science. Here are a few examples of where it has been and continues to be used:

1. Inventory Management: Scenario: Optimize the inventory levels for a retail store with limited storage space to maximize profits.
2. Portfolio Optimization: Scenario: Determine the optimal allocation of assets in an investment portfolio to maximize returns while minimizing risk.
3. Sequence Alignment in Bioinformatics: Scenario: Find the best alignment between DNA sequences to identify similarities and differences for genetic analysis.
4. Shortest Path Routing: Scenario: Determine the shortest path for a delivery truck to reach its destination in a city with multiple routes and traffic constraints.
5. Text Justification: Scenario: Optimize the formatting of a given text by adjusting the spacing between words to achieve visually appealing justification.
6. Resource Allocation: Scenario: Allocate limited resources (e.g., budget, staff) among various projects to maximize overall productivity and meet deadlines.
7. Longest Increasing Subsequence: Scenario: Identify the longest increasing subsequence in a series of stock prices to determine the best buying and selling points.
8. Edit Distance: Scenario: Determine the minimum number of operations required to transform one string into another for text correction or similarity comparison.
9. Optimal Matrix Chain Multiplication: Scenario: Find the most efficient way to multiply a chain of matrices to minimize the number of scalar multiplications in a scientific computing application.
10. Knapsack Problem in Resource Optimization: Scenario: Select a subset of items with maximum total value to include in a backpack with limited capacity for a hiking trip.

## Dynamic Programming

Notice that many of the problems listed in the real-world scenarios above are what in computer science are called [NP-complete](https://en.wikipedia.org/wiki/NP-completeness) problems. Informally, an NP-complete problem can be solved only by exhaustively generating all possible solutions and then choosing the best one. For real-world problems these algorithms would chug for thousands of years before finishing. 

Due to this limitation, we often use heuristics and cheap party tricks to generate solutions that are good, but not optimal. There is a way for many of these problems, though, for us to generate the optimal answer without the use of time travel: [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming).

Dynamic programming breaks problems down into simpler subproblems. It is solves each subproblem only once and stores the results to use in solving the remainder of the problem. This avoids redundant calculations.

[GeeksforGeeks](https://www.geeksforgeeks.org/) has a nice discussion of dynamic programming at https://www.geeksforgeeks.org/dynamic-programming/. It may be helpful in solving this month's kata.

## Your Assignment

This month, your assignment is to help the world renown jewel-thief and cat-burglar, Ken "The Compiler" Baum as he plunders the home of famous billionaire, Matt Brewer. Matt became a billionaire by inventing "Invisible Socks" - a revolutionary fashion statement that took the world by storm, offering the comfort of socks without the unsightly appearance.

The Compiler has done extensive research on the Brewer Compound. He will be able to get by the security system, but there are dozens of guards moving about the mansion so he will need to get in and out quickly. He also needs to move fast, so he can't carry so much loot that it slows him down. Therefor he chooses a size small Benny the Dip Burglar Sack :tm: which is limited to carrying 30 pounds. With this relatively tiny capacity compared to Brewer's immense wealth, he must choose carefully which items to steal so he can maximize the value of his haul. Not surprisingly, he relies on his programming background to solve the problem.

Noting that this problem is the very definition of the knapsack problem, he chooses to use dynamic programming to ensure he can get the maximum value for the items he can fit in the bag.

The mansion contains the following items:


| Item                               | Weight (lbs) | Value ($) |
|------------------------------------|--------------|-----------|
| Diamond necklace                   | 2            | 50,000    |
| Antique gold pocket watch          | 1            | 8,000     |
| Rare vintage wine collection       | 20           | 15,000    |
| Original Picasso painting          | 6            | 200,000   |
| Emerald-encrusted bracelet         | 1            | 25,000    |
| Sculpted marble statue             | 50           | 30,000    |
| Signed first edition books         | 10           | 12,000    |
| Precious ancient coins             | 3            | 18,000    |
| Designer handbags                  | 4            | 6,000     |
| High-end electronics               | 8            | 10,000    |
| Expensive leather jackets          | 6            | 4,000     |
| Rare sports memorabilia            | 3            | 7,000     |
| Handcrafted silk rug               | 15           | 9,000     |
| Limited edition designer shoes     | 2            | 3,000     |
| Platinum cufflinks                 | 1            | 5,000     |
| Valuable postage stamp collection  | 2            | 14,000    |
| Vintage movie posters              | 3            | 2,500     |
| Collectible action figures         | 5            | 1,500     |
| Fine china dining set              | 12           | 8,000     |
| Swarovski crystal figurines        | 7            | 4,500     |

Your assignment is to use dynamic programming generate the solution matrix to this problem so that The Compiler knows which items to steal.

NOTE: Ignore size constraints and use the weight of the items only.



# C3ProjectTemplate

See solutions in different languages in the "Templates" directory. Once you decide which language you'd like to use,
simply open that directory in your favorite IDE, and you should be able to run the included unit tests "out of the box".

The recommended IDEs are as follows, but feel free to use whatever IDE you are comfortable with.

-   [C#](Templates/C%23) - [Microsoft Visual Studio](https://visualstudio.microsoft.com/vs/community/)
-   [Java](Templates/Java) - [IntelliJ Idea](https://www.jetbrains.com/idea/download) (Community Edition is fine)
-   [JavaScript](Templates/JavaScript) - [Microsoft Visual Studio Code](https://code.visualstudio.com/)
-   [Kotlin](Templates/Kotlin) - [IntelliJ Idea](https://www.jetbrains.com/idea/download) (Community Edition is fine)
-   [Python](Templates/Python) - [Pycharm](https://www.jetbrains.com/pycharm/download/?section=windows) (Community Edition is fine)
-   [TypeScript](Templates/TypeScript) - [Microsoft Visual Studio Code](https://code.visualstudio.com/)
